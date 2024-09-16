import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "src/test/cypress/**/*.cy.{js,ts,jsx,tsx}",
  },
});
