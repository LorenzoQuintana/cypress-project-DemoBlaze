@Purchase
Feature: Purchase

@smoke
Scenario: Validate that the user can complete the purchase process
  Given I am on the homepage 4
  When I add the same item to the cart twice
  And I proceed to checkout
  And I fill in the purchase details
  And I confirm the purchase
  Then I should see the success message
  And the total amount should be correct
  And the cart should be empty after purchase


