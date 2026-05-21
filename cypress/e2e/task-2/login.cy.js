/// <reference types="cypress"/>
describe('Login', () => {
    it("Validate that the user can login successfully using valid credentials", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').click()
        cy.url().should('eq', 'https://automationexercise.com/login')
        cy.get("form[action='/login']").find("input[name='email']").type("abdeentoqa97@gmail.com")
        cy.get("form[action='/login']").find("input[name='password']").type("12345678")
        cy.get("button[type='submit']").contains("Login").click()
        cy.url().should('eq', 'https://automationexercise.com/')
        cy.get(".navbar-nav").find("a").contains("Logout").should('be.visible')

    })
})