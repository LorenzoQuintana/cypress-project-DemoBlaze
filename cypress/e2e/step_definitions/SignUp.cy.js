import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
const SignupPage = require('../../pages/SignupPage'); 
const Credentials = require('../../credentials'); 
const ExpectedMessages = require('../../expectedMessages');

Given('I am on the homepage 1', () => {
    cy.visit('/');
});

When('I click on the signup button', () => {
    SignupPage.clickSignup();
});

When('I click the second signup button', () => {
    SignupPage.clickSecondSignup();
});

When('I enter a new username and password', () => {
    SignupPage.typeUsername(Credentials.validUser.username);
    SignupPage.typePassword(Credentials.validUser.password);
});

When('I leave username and password blank', () => {
    SignupPage.clearUsername();
    SignupPage.clearPassword();
});

When('I enter an existing username', () => {
    SignupPage.typeUsername(Credentials.validUser.username);
    SignupPage.typePassword(Credentials.validUser.password);
});

Then('I should see a success message', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.successMessage);
    });
});

Then('I should see validation errors', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.validationErrorsMessage);
    });
});

Then('I should see an error message for duplicate username', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(ExpectedMessages.duplicateUsernameMessage);
    });
});




