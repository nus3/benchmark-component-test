import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      name: "jsdom",
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/jsdom/setup.ts",
      css: true,
      include: ["./src/test/jsdom/**/*.test.{ts,tsx}"],
    },
  },
]);
