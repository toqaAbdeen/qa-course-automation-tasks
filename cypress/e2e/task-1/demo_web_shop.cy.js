/// <reference types="cypress"/>
describe('Demo Web Shop', () => {
    it("Find the elements by best selectors", () => {
        cy.visit("https://demowebshop.tricentis.com/register")
        cy.get(".header-logo")
        cy.get('a[class="ico-login"]') // or we can just use  cy.get(".ico-login"), just to try different ways to find the elements
        cy.get("#small-searchterms")
        cy.get('.top-menu').contains('Jewelry')
        cy.get('h1') // only one element with this tag, so we can use it without any other selector, but if there are more than one element with the same tag, we can use contains to find the specific one cy.get('h1').contains('Register')
        cy.get("#gender-male").eq(0) 
        cy.get("#LastName")
        cy.get("label[for='Email']")
        cy.get('.inactive').eq(6)
        cy.get('.title').contains('Manufacturers')
        cy.get(".buttons").last()
        cy.get(".newsletter-email").find("input[name='NewsletterEmail']") // if we want the div element  can use cy.get("#newsletter-email") or cy.get("input[name='NewsletterEmail']").parent()
        cy.get("#newsletter-subscribe-button") // to get the button element we can use its id or we can use cy.get("#newsletter-subscribe-button").parent() to get the div element
        cy.get("h3").contains("My account")
        cy.get("a").contains("Contact us")   // we can use  cy.get('.column.information li').last() or  cy.get("a[href='/contactus']")

    })  
})