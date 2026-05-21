// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  Cypress.Commands.add('loginToSaucedemoUsingTestData',  () => {
    cy.fixture("UserSaucedemo").then((user) => {
      cy.visit("https://www.saucedemo.com/")
      cy.get('[data-test="username"]').type(user.username)
      cy.get('[data-test="password"]').type(user.password)
      cy.get('[data-test="login-button"]').click()
            
  })

})

Cypress.Commands.add("addProductToCart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});