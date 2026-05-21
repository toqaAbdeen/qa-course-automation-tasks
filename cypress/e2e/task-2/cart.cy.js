/// <reference types="cypress"/>
describe('Search Functionality', () => {
    it("Validate that the user can add a product to the cart successfully", () => {
         cy.visit("https://automationexercise.com/")
         const productName = 'Blue Top'

         cy.get('.single-products').first().trigger('mouseover')
         cy.get('.product-overlay .add-to-cart').first().click({ force: true })
         cy.get('.modal-content').should('be.visible')
         cy.contains('View Cart').click()
         cy.contains(productName).should('be.visible')
    })
})