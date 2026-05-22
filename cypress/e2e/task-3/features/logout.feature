@LogoutTest.feature
Feature: Logout functionality

    @logout
    Scenario: Logout successfully
        When I click on the menu button
        And I click logout button
        Then I should be logged out and see the login page