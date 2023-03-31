/// <reference types="cypress" />

describe('seniors journey', () => {
  beforeEach(() => {
    cy.login()
  })

  it('authenticates', () => {
    cy.visit(Cypress.config('baseUrl')!)
  })
})
