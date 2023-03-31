/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    getBearerToken(): Chainable<string>
  }
}
