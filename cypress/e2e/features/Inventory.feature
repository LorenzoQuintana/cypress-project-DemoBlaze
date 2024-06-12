@Inventory
Feature: Inventory

@regression
Scenario: Validate filtering by categories
  Given I am on the homepage 3
  When I filter by category "Phones"
  Then I should see items of the selected category

@regression
Scenario: Validate redirect to product description page
  Given I am on the homepage 3
  When I select a product
  Then I should be redirected to the product description page
