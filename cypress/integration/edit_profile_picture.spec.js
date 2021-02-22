import LoginPage from './pages/login_page';
import HomePage from './pages/home_page';
import SettingsPage from './pages/settings_page';

context('Edit Profile setting', () => {
  const login = new LoginPage();
  const home = new HomePage();
  const settings = new SettingsPage();

  beforeEach(() => {
    login.successfulLogin();
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
