
/// <reference types="cypress"/>
describe('Create New User Account', () => {
    it("Validate that the user can create new account successfully", () => {
        cy.visit("https://automationexercise.com/")
        cy.get('a[href="/login"]').click()
        cy.url().should('eq', 'https://automationexercise.com/login')
        cy.get("form[action='/signup']").find("input[name='name']").type("Toqa Abdeen")
        cy.get("form[action='/signup']").find("input[name='email']").type("abdeentoqa97@gmail.com")
        cy.get("button[type='submit']").contains("Signup").click()
        cy.url().should('eq', 'https://automationexercise.com/signup')
        cy.get(".radio-inline").eq(1).find("input[type='radio']").check()
        cy.get('input[name="name"]').should('have.value', 'Toqa Abdeen')
        cy.get('input[name="email"]').should('have.value', 'abdeentoqa97@gmail.com')
        cy.get("input[id='password']").type("12345678")
        cy.get("#days").select("5")
        cy.get("#months").select("September")
        cy.get("#years").select("2004")
        cy.get("input[type='checkbox']").check()
        cy.get("input[id='first_name']").type("Toqa")
        cy.get("input[id='last_name']").type("Abdeen")
        cy.get("input[id='company']").type("QA")
        cy.get("input[id='address1']").type('12 Jerusalem Street')
        cy.get("input[id='address2']").type('Apartment 5')
        cy.get("select[id='country']").select("New Zealand")
        cy.get("#state").type("Auckland")
        cy.get("#city").type("Auckland")
        cy.get("#zipcode").type("12345")
        cy.get("#mobile_number").type("0123456789")
        cy.get(".btn-default").eq(0).click()
        cy.url().should('eq', 'https://automationexercise.com/account_created')
        cy.contains('Account Created!').should('be.visible')





})
})