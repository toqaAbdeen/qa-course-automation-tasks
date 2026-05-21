@loginTest.feature
Feature: Login functionality

    @validLogin
    Scenario: Valid login
        Given I open the login page
        When I enter "standard_user" username and "secret_sauce" password
        Then I should be logged in successfully

   

