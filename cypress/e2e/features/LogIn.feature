@Login
Feature: Login

@smoke
Scenario: Validate that the admin user exists
  Given I am on the homepage 2
  When I click on the login button
  And I enter admin username and password
  And I click the second login button
  Then I should see a welcome message for admin

@regression
Scenario: Validate required fields for login
  Given I am on the homepage 2
  When I click on the login button
  And I leave username and password blank on login
  And I click the second login button
  Then I should see login validation errors 

@regression
Scenario: Validate invalid login credentials
  Given I am on the homepage 2
  When I click on the login button
  And I enter invalid username and password
  And I click the second login button
  Then I should see an error message for invalid credentials

@smoke
Scenario: Validate logout functionality
  Given I am on the homepage 2
  Given I am logged in as admin
  When I click on the logout button
  Then I should be able to log out