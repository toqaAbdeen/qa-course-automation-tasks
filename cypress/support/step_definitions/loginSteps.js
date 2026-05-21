import { Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

  Given("I open the login page", () => {
    cy.visit("https://www.saucedemo.com");
  });

  When("I enter {string} username and {string} password", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  });

  Then("I should be logged in successfully", () => {
    cy.url().should("include", "/inventory.html");
  });