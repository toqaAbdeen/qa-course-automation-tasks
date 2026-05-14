/// <reference types="cypress"/>
describe('Search Functionality', () => {
    it("Validate that the correct results appear when searching for products using a valid product name", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/products"]').click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.get("#search_product").type("T-Shirt") // in this website search, Tshirt, T-Shirt, T shirt are not the same, so I will consider that it is a bug and make assertion to check that the search result is 6 products as in total, Tshirt give  6 products, T-Shirt give 3 product and T shirt give 1 product, i will use T-Shirt cause it is the correct way to write it
        cy.get("#submit_search").click()
        cy.url().should('eq', 'https://automationexercise.com/products?search=T-Shirt')
        cy.get(".features_items").find(".col-sm-4").should('have.length', 6)
    })
    it("Validate that the correct results appear when searching for products using an invalid product name", () => {
          cy.visit("https://automationexercise.com/")
        cy.get('a[href="/products"]').click()
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.get("#search_product").type("test")
        cy.get("#submit_search").click()
        cy.url().should('eq', 'https://automationexercise.com/products?search=test')
        cy.get(".features_items").find(".col-sm-4").should('have.length', 0)
    })
})
