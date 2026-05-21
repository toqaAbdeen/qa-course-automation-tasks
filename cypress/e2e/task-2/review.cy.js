/// <reference types="cypress"/>
describe('Review Functionality', () => {
    it("Validate that the logged in user can submit a review for a product successfully", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').should('be.visible')
        cy.get('a[href="/product_details/1"]').click()
        cy.url().should('eq', 'https://automationexercise.com/product_details/1')
        cy.get("#review-form").find("input#name").type("Toqa Abdeen")
        cy.get("#review-form").find("input#email").type("abdeentoqa97@gmail.com")
        cy.get('textarea[name="review"]').type("This is a great product!")
        cy.get("#button-review").click()
        cy.get(".alert-success").should('be.visible').and('contain', 'Thank you for your review.')
    })
})