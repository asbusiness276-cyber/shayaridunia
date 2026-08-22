import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("content contract keeps three languages, 30 emotions and 18 quotes", async () => {
  const source = await read("lib/shayari.ts");
  const emotionSlugs = Array.from(
    source.matchAll(/\n  emotion\(\n    "([^"]+)"/g),
    (match) => match[1],
  );

  assert.match(
    source,
    /QUOTES_PER_PAGE\s*=\s*18/,
    "QUOTES_PER_PAGE must remain 18",
  );
  assert.match(
    source,
    /languageSlugs\s*=\s*\["hindi",\s*"punjabi",\s*"english"\]/,
    "Hindi, Punjabi and English must remain enabled",
  );
  assert.equal(emotionSlugs.length, 30, "exactly 30 emotions are required");
  assert.equal(new Set(emotionSlugs).size, 30, "emotion slugs must be unique");
});

test("all SEO collection routes are statically enumerated", async () => {
  const route = await read("app/[language]/[emotion]/page.tsx");

  assert.match(route, /export const dynamicParams = false/);
  assert.match(route, /export function generateStaticParams\(\)/);
  assert.match(route, /languageSlugs\.flatMap/);
  assert.match(route, /emotions\.map/);
});

test("quote cards retain image, meaning, copy, download and share actions", async () => {
  const component = await read("app/components/QuoteGrid.tsx");

  assert.match(component, /className="quote-card"/);
  assert.match(component, /className="meaning-box"/);
  assert.match(component, /navigator\.clipboard/);
  assert.match(component, /download/);
  assert.match(component, /navigator\.share/);
});

test("SEO endpoints and metadata files remain present", async () => {
  const [layout, sitemap, robots] = await Promise.all([
    read("app/layout.tsx"),
    read("app/sitemap.ts"),
    read("app/robots.ts"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /twitter/);
  assert.match(sitemap, /MetadataRoute\.Sitemap/);
  assert.match(robots, /MetadataRoute\.Robots/);
});
