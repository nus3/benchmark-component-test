import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "test/cypress/**/*.cy.{js,ts,jsx,tsx}",
  },
});
