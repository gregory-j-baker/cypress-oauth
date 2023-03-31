// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add('login', () => {
  cy.log(`Logging in to OAuth proxy using service account: [${Cypress.env('oauthClientId')}]...`)

  cy.request({
    method: 'POST',
    url: Cypress.env('oauthTokenUrl'),
    form: true,
    body: {
      grant_type: 'client_credentials',
      client_id: Cypress.env('oauthClientId'),
      client_secret: Cypress.env('oauthClientSecret'),
      scope: Cypress.env('oauthScope')
    }
  })
  .then(response => {
    Cypress.env('oauthAccessToken', response.body['access_token'])
  })
})
