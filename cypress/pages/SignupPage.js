class SignupPage {
  elements = {
    usernameInput: () => cy.get('#sign-username'),
    passwordInput: () => cy.get('#sign-password'),
    signupButton: () => cy.get('#signin2'),
    secondSignupButton: () => cy.contains('button', 'Sign up')
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  clearUsername() {
    this.elements.usernameInput().clear();
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clearPassword() {
    this.elements.passwordInput().clear();
  }

  clickSignup() {
    this.elements.signupButton().click();
  }

  clickSecondSignup() {
    this.elements.secondSignupButton().click();
  }
}

module.exports = new SignupPage();
