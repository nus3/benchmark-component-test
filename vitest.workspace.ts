import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    server: {
      port: 3001,
    },
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
    server: {
      port: 3002,
    },
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
    server: {
      port: 3003,
    },
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
  {
    extends: "vite.config.ts",
    server: {
      port: 3000,
    },
    test: {
      name: "safetest",
      globals: true,
      include: ["./src/test/safetest/**/*.safetest.?(c|m)[jt]s?(x)"],
      testTimeout: 30000,
      setupFiles: ["./src/test/safetest/setup-safetest.tsx"],
    },
  },
]);
