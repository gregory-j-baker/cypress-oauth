/// <reference types="cypress" />

describe('seniors journey', () => {
  beforeEach(() => {
  })


  it('authenticates', () => {
    cy.visit(Cypress.config('baseUrl')!)
  })

  it('authenticates again', () => {
    cy.visit(Cypress.config('baseUrl')!)
  })
})
