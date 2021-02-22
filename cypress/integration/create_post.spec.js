import LoginPage from './pages/login_page';
import HomePage from './pages/home_page';
import PostPage from './pages/post_page';

context('create new post', () => {
  const login = new LoginPage();
  const home = new HomePage();
  const post = new PostPage();
  const postData = require('../fixtures/post_data.json');

  before(() => {
    login.successfulLogin();
    cy.ensureLoginToHomePage();
  });

  describe('successful creating new post', () => {
    it('create new post', () => {
      home.newPost().click();
      cy.hash().should('include', '#/editor');
      cy.contains('Publish Article');

      post.typeArticleTitle(postData.title);
      post.typeArticleTopic(postData.about);
      post.typeArticleDetails(postData.content);
      post.publishArticle();

      cy.url().should('include', postData.title.toLowerCase());
      cy.get('.banner > .container > h1');
      cy.contains(postData.title);

      cy.get('.author').click();
      cy.contains(postData.about);
    });
  });

  after(() => {
    cy.get(':nth-child(1) > .preview-link > h1')
      .contains(postData.title)
      .click();
    cy.get('.btn-outline-danger').click();
  });
});
