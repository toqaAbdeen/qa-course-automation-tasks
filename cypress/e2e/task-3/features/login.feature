@loginTest.feature
Feature: Login functionality

    @validLogin
    Scenario Outline: Valid login
        Given I open the login page
        When I enter "<username>" in username input and "<password>" in password input
        And I click on login button
        Then I should be logged in successfully

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | problem_user            | secret_sauce |



