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
}

export default LoginPage;
