import LoginPage from './Pages/LoginPage';

context('login', () => {
  const login = new LoginPage();
  beforeEach(() => {
    login.visit();
  });
  describe('successful login', () => {
    const validLoginData = require('../fixtures/validLoginData');

    it(`login with ${validLoginData.caseDes}`, () => {
      login.fillEmail(validLoginData.email);
      login.fillPassword(validLoginData.password);
      login.clickSignIn();
      cy.ensureLoginToHomePage();
    });
  });
  describe('unSuccessful login', () => {
    const invalidLoginData = require('../fixtures/invalidLoginData.json');
    invalidLoginData.forEach((invalidDatum) => {
      it(`unSuccessful login with ${invalidDatum.caseDes}`, () => {
        login.fillEmail(invalidDatum.email);
        login.fillPassword(invalidDatum.password);
        login.clickSignIn();
        cy.invalidLogin('email or password is invalid');
      });
    });
    it('unSuccessful login with empty password', () => {
      login.fillEmail(validLoginData.email);
      login.clickSignIn();
      cy.invalidLogin('email or password is invalid');
    });
  });
});
