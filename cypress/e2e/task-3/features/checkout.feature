@CheckoutTest.feature
Feature: Checkout functionality

    @checkout
    Scenario: Complete purchase flow
        Given I login successfully
        When I add a product to cart
        And I go to cart
        And I click checkout button
        And I fill checkout information with:
            | firstName | Toqa   |
            | lastName  | Abdeen |
            | zip       | 12345  |
        And I click continue button
        And I click finish button
        Then I should see checkout complete page