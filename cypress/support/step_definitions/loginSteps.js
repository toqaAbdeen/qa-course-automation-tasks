import { Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

  Given("I open the login page", () => {
    cy.visit("https://www.saucedemo.com");
  });

  When("I enter {string} in username input and {string} in password input", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
  });

  When("I click on login button", () => {
    cy.get('[data-test="login-button"]').click();
  });

  Then("I should be logged in successfully", () => {
    cy.url().should("include", "/inventory.html");
  });