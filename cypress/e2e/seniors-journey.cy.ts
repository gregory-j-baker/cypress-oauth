/// <reference types="cypress" />

describe('seniors journey', () => {
  beforeEach(() => {
    cy.login()

    cy.intercept('*', (req) => {
      req.headers['Authorization'] = `Bearer ${Cypress.env('oauthAccessToken')}`
    })
  })


  it('authenticates', () => {
    cy.visit(Cypress.config('baseUrl')!)
  })
})
