import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "jsdom",
      globals: true,
      environment: "jsdom",
      setupFiles: "./test/vitest/setup.ts",
      css: true,
      include: ["./test/vitest/**/*.test.{ts,tsx}"],
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "playwright",
      include: ["./test/vitest/**/*.test.{ts,tsx}"],
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
]);
