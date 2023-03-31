import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      clientId: process.env.OIDC_CLIENT_ID,
      clientSecret: process.env.OIDC_CLIENT_SECRET,
      issuerUrl: process.env.OIDC_ISSUER_URL
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
