// Some heavily sandboxed Linux environments omit the procfs entry libuv uses
// for RSS. Keep Node's native implementation everywhere else, including Vercel.
try {
  process.memoryUsage();
} catch (error) {
  if (!error || error.code !== "ENOENT") throw error;

  const rss = () => {
    try {
      return process.resourceUsage().maxRSS * 1024;
    } catch {
      return 0;
    }
  };
  const memoryUsage = () => ({
    rss: rss(),
    heapTotal: 0,
    heapUsed: 0,
    external: 0,
    arrayBuffers: 0,
  });
  memoryUsage.rss = rss;
  process.memoryUsage = memoryUsage;
}
