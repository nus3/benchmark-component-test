import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "jsdom",
      environment: "jsdom",
      setupFiles: "./src/test/jsdom/setup.ts",
      css: true,
      include: ["./src/test/jsdom/**/*.test.{ts,tsx}"],
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "playwright",
      include: ["./src/test/jsdom/**/*.test.{ts,tsx}"],
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
