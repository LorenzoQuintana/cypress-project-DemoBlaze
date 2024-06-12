import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require('../../pages/LoginPage');
const Credentials = require('../../credentials');
const ExpectedMessages = require('../../expectedMessages');

Given('I am on the homepage 2', () => {
    cy.visit('/');
});

Given('I am logged in as admin', () => {
    cy.visit('/');
    LoginPage.clickLoginButton();
    LoginPage.typeUsername(Credentials.adminUser.username);
    LoginPage.typePassword(Credentials.adminUser.password);
    LoginPage.clickSecondLoginButton();
});

When('I click on the login button', () => {
    LoginPage.clickLoginButton();
});

When('I click the second login button', () => {
    LoginPage.clickSecondLoginButton();
});

When('I enter valid username and password', () => {
    LoginPage.typeUsername(Credentials.validUser.username);
    LoginPage.typePassword(Credentials.validUser.password);
});

When('I enter invalid username and password', () => {
    LoginPage.typeUsername(Credentials.invalidUser.username);
    LoginPage.typePassword(Credentials.invalidUser.password);
});

When('I enter admin username and password', () => {
    LoginPage.typeUsername(Credentials.adminUser.username);
    LoginPage.typePassword(Credentials.adminUser.password);
});

When('I leave username and password blank on login', () => {
    LoginPage.clearUsername();
    LoginPage.clearPassword();
});

When('I click on the logout button', () => {
    LoginPage.clickLogoutButton();
});

Then('I should be logged in successfully', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.loginSuccessMessage);
    });
});

Then('I should see login validation errors', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.validationErrorsMessage);
    });
});

Then('I should see an error message for invalid credentials', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.invalidCredentialsMessage);
    });
});

Then('I should see a welcome message for admin', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.adminCredentialsMessage);
    });
});

Then('I should be able to log out', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('You have been logged out.');
    });
});




