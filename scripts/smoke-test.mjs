import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import net from "node:net";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL("../", import.meta.url)));

function findOpenPort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.unref();
    probe.on("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const address = probe.address();
      const port = typeof address === "object" && address ? address.port : null;
      probe.close((error) => (error || !port ? reject(error) : resolve(port)));
    });
  });
}

async function waitForServer(origin, server, logs) {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready.\n${logs.join("")}`);
    }
    try {
      const response = await fetch(origin, { redirect: "manual" });
      if (response.status < 500) return;
    } catch {
      // The server may still be starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error(`Timed out waiting for ${origin}.\n${logs.join("")}`);
}

async function get(origin, pathname) {
  const response = await fetch(`${origin}${pathname}`);
  const body = await response.text();
  assert.equal(response.status, 200, `${pathname} must return HTTP 200`);
  return { response, body };
}

const port = await findOpenPort();
const origin = `http://127.0.0.1:${port}`;
const nextBinary = path.join(
  projectRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next",
);
const logs = [];
const server = spawn(
  nextBinary,
  ["start", "--hostname", "127.0.0.1", "--port", String(port)],
  {
    cwd: projectRoot,
    env: { ...process.env, NEXT_PUBLIC_SITE_URL: origin },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    logs.push(chunk.toString());
    if (logs.join("").length > 20_000) logs.shift();
  });
}

try {
  await waitForServer(origin, server, logs);

  const home = await get(origin, "/");
  assert.match(home.body, /Shayari Dunia/);

  for (const pathname of [
    "/hindi",
    "/punjabi",
    "/english",
    "/hindi/love",
    "/punjabi/sad",
    "/english/motivation",
  ]) {
    const page = await get(origin, pathname);
    assert.match(page.body, /Shayari Dunia/, `${pathname} must render the brand`);
  }

  const collection = await get(origin, "/english/motivation");
  assert.equal(
    (collection.body.match(/class="quote-card"/g) ?? []).length,
    18,
    "collection must render exactly 18 quote cards",
  );
  assert.equal(
    (collection.body.match(/class="meaning-box"/g) ?? []).length,
    18,
    "collection must render exactly 18 meaning blocks",
  );

  const image = await get(origin, "/card/hindi/love/1");
  assert.match(image.response.headers.get("content-type") ?? "", /^image\/svg\+xml/);
  assert.match(image.body, /<svg[\s>]/);

  const sitemap = await get(origin, "/sitemap.xml");
  assert.equal(
    (sitemap.body.match(/<url>/g) ?? []).length,
    94,
    "sitemap must contain exactly 94 public URLs",
  );

  const robots = await get(origin, "/robots.txt");
  assert.match(robots.body, /Sitemap:/);

  const missing = await fetch(`${origin}/hindi/not-a-real-emotion`);
  assert.equal(missing.status, 404, "unknown collections must return HTTP 404");

  console.log("Smoke tests passed: routes, 18-card contract, SVG images, sitemap and 404 behavior.");
} catch (error) {
  console.error(logs.join(""));
  throw error;
} finally {
  if (server.exitCode === null) server.kill("SIGTERM");
}
