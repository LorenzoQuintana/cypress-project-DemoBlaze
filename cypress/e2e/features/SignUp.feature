@signUp
Feature: SignUp

@smoke
Scenario: Create a new user and login
  Given I am on the homepage 1
  When I click on the signup button
  And I enter a new username and password
  And I click the second signup button
  Then I should see a success message

@regression
Scenario: Validate required fields for signup
  Given I am on the homepage 1
  When I click on the signup button
  And I leave username and password blank
  And I click the second signup button
  Then I should see validation errors

@regression
Scenario: Validate duplicate username
  Given I am on the homepage 1
  When I click on the signup button
  And I enter an existing username
  And I click the second signup button
  Then I should see an error message for duplicate username
