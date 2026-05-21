import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I login successfully", () => {
    cy.loginToSaucedemoUsingTestData();
});

When("I add a product to cart", () => {
    cy.addProductToCart();
});

When("I go to cart", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
});

When("I click checkout button", () => {
    cy.get('[data-test="checkout"]').click();
});

When("I fill checkout information with:", (dataTable) => {
    const data = dataTable.rowsHash();

    cy.get('[data-test="firstName"]').type(data.firstName);
    cy.get('[data-test="lastName"]').type(data.lastName);
    cy.get('[data-test="postalCode"]').type(data.zip);
});

When("I click continue button", () => {
    cy.get('[data-test="continue"]').click();
});

When("I click finish button", () => {
    cy.get('[data-test="finish"]').click();
});

Then("I should see checkout complete page", () => {
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header")
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
});