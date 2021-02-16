import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import NewPostPage from './Pages/NewPostPage';

context('create new post', () => {
  const login = new LoginPage();
  const home = new HomePage();
  const newPost = new NewPostPage();
  const postData = require('../fixtures/postData.json');
  const loginData = require('../fixtures/validLoginData.json');

  before(() => {
    login.visit();
    login.fillEmail(loginData.email);
    login.fillPassword(loginData.password);
    login.clickSignIn();
    cy.ensureLoginToHomePage();
  });
  describe('successful creating new post', () => {
    it('create new post', () => {
      home.newPost().click();
      cy.hash().should('include', '#/editor');
      cy.contains('Publish Article');
      newPost.typeArticleTitle(postData.title);
      newPost.typeArticleTopic(postData.topic);
      newPost.typeArticleDetails(postData.details);
      newPost.publishArticle();
      cy.get('.author').click();
      cy.contains(postData.topic);
    });
  });
});
