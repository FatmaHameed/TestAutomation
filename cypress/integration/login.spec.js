import LoginPage from './pages/login_page';

context('login', () => {
  const login = new LoginPage();
  const validLoginData = require('../fixtures/valid_login_data.json');

  beforeEach(() => {
    login.visit();
  });

  describe('successful login', () => {
    it(`login with ${validLoginData.caseDes}`, () => {
      login.fillEmail(validLoginData.email);
      login.fillPassword(validLoginData.password);
      login.clickSignIn();
      cy.ensureLoginToHomePage();
    });
  });

  describe('unsuccessful login', () => {
    const invalidLoginData = require('../fixtures/invalid_login_data.json');

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
