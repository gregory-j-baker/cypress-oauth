import * as dotenv from 'dotenv'
import { defineConfig } from "cypress";

dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      oauthClientId: process.env.OAUTH_CLIENT_ID,
      oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
      oauthScope: process.env.OAUTH_SCOPE,
      oauthTokenUrl: process.env.OAUTH_TOKEN_URL
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
