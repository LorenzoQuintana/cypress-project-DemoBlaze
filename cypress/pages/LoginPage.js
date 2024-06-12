class LoginPage {
  elements = {
    usernameInput: () => cy.get('#loginusername'),
    passwordInput: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#login2'),
    secondLoginButton: () => cy.contains('button', 'Log in'),
    logoutButton: () => cy.contains('a', 'Log out')
  };

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  clearUsername() {
    this.elements.usernameInput().clear();
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clearPassword() {
    this.elements.passwordInput().clear();
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  clickSecondLoginButton() {
    this.elements.secondLoginButton().click();
  }

  clickLogoutButton() {
    this.elements.logoutButton().click();
  }
}

module.exports = new LoginPage();

