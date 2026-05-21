import { Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@logout" }, () => {
    cy.loginToSaucedemoUsingTestData();
});

When("I click on the menu button", () => {
    cy.get("#react-burger-menu-btn").click();
});

When("I click logout button", () => { 
    cy.get('[data-test="logout-sidebar-link"]').click(); 
});

Then("I should be logged out and see the login page", () => {
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').should("be.visible");  
});