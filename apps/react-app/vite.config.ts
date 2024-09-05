/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/vitest/setup.ts",
    css: true,
    include: ["./test/vitest/**/*.test.{ts,tsx}"],
  },
});
