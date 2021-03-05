class LoginPage {
  visit() {
    cy.visit('/#/login?_k=plujfs');
  }
  fillEmail(email) {
    const emailInput = cy.get('[type=email]');
    emailInput.clear();
    emailInput.type(email);
    return this;
  }
  fillPassword(password) {
    const passwordInput = cy.get('[type=password]');
    passwordInput.clear();
    passwordInput.type(password);
    return this;
  }
  clickSignIn() {
    const button = cy.get('[type="submit"]');
    button.click();
  }
  successfulLogin() {
    const loginData = require('../fixtures/valid_login_data.json');

    return (
      this.visit(),
      this.fillEmail(loginData.email),
      this.fillPassword(loginData.password),
      this.clickSignIn()
    );
  }
}

export default LoginPage;
