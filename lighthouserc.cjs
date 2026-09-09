const fs = require("node:fs");
const os = require("node:os");

const isWsl =
  process.platform === "linux" &&
  os.release().toLowerCase().includes("microsoft");
const linuxChromeCandidates = [
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];
const wslChromePath =
  process.env.CHROME_PATH ||
  linuxChromeCandidates.find((candidate) => fs.existsSync(candidate));

if (isWsl && !wslChromePath) {
  throw new Error(
    "Lighthouse CI on WSL requires Linux Chrome or Chromium. Install it or set CHROME_PATH to its executable path.",
  );
}

const wslCollectConfig = isWsl
  ? {
      chromePath: wslChromePath,
      puppeteerScript: "./scripts/lighthouse-puppeteer.cjs",
      puppeteerLaunchOptions: {
        args: ["--no-sandbox", "--disable-dev-shm-usage"],
      },
    }
  : {};

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: ["/", "/en/"],
      numberOfRuns: 3,
      ...wslCollectConfig,
    },
    assert: {
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.8, aggregationMethod: "median" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 0.9, aggregationMethod: "median" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.9, aggregationMethod: "median" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.9, aggregationMethod: "median" },
        ],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lighthouse-reports",
    },
  },
};
