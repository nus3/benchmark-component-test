import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "jsdom",
      environment: "jsdom",
      setupFiles: "./src/test/vitest/setup.ts",
      css: true,
      include: ["./src/test/vitest/**/*.test.{ts,tsx}"],
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "playwright",
      include: ["./src/test/vitest/**/*.test.{ts,tsx}"],
      browser: {
        enabled: true,
        headless: true,
        name: "chromium",
        provider: "playwright",
        // https://playwright.dev
        providerOptions: {},
      },
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "webdriverio",
      include: ["./src/test/vitest/**/*.test.{ts,tsx}"],
      browser: {
        enabled: true,
        headless: true,
        name: "chrome",
        provider: "webdriverio",
        providerOptions: {
          // TODO: webdriverioでテストファイルごとにテストを並列で実行する方
        },
      },
    },
  },
]);
