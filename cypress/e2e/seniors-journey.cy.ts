/// <reference types="cypress" />

describe('seniors journey', () => {
  beforeEach(() => {
    cy.login()
  })

  it('authenticates', () => {
    cy.visit({
      url: Cypress.config('baseUrl')!,
      headers: {
        Authorization: `Bearer ${Cypress.env('oauthAccessToken')}`
      }
    })
  })
})
