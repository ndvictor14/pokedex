import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
