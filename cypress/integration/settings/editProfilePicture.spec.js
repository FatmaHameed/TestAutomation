import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import SettingsPage from '../Pages/SettingsPage';

context('Edit Profile setting', () => {
  const login = new LoginPage();
  const home = new HomePage();
  const settings = new SettingsPage();
  const loginData = require('../../fixtures/validLoginData');
  beforeEach(() => {
    login.visit();
    login.fillEmail(loginData.email);
    login.fillPassword(loginData.password);
    login.clickSignIn();
    cy.ensureLoginToHomePage();
  });
  describe('Edit profile picture', () => {
    it('Add imageURL to the profile', () => {
      const pictureURL =
        'https://cdn.britannica.com/w:1100/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg';
      home.settings().click();
      cy.hash().should('include', '#/settings');
      settings.updateProfilePicture(pictureURL);
      settings.submitUpdatedSettings();
      home.userPicture().should('have.attr', 'src', pictureURL);
    });
  });
});
