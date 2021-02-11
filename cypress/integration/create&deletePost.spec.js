context('create new post', () => {
  before(() => {
    cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
    cy.login('fatma@email.com', 'fatma123');
    cy.validateHomePage();
  });
  describe('successful creating new post', () => {
    const topic = 'This is test';
    it('create new post', () => {
      cy.get('.container > .nav > :nth-child(2) > .nav-link')
        .contains('New Post')
        .click();
      cy.hash().should('include', '#/editor');
      cy.contains('Publish Article');
      cy.typeAnArticle('Test', topic, 'Here is the test');
      cy.get(':nth-child(1) > .nav-link').contains('Home').as('goToHome');
      cy.get('@goToHome').click();
      cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
        .contains('Global Feed')
        .click();
      cy.contains(topic);
      cy.get(':nth-child(4) > .nav-link').contains('Fatma').as('goToArticle');
      cy.get('@goToArticle').click();
      cy.contains('My Articles');
      cy.get(':nth-child(1) > .preview-link > p').should('have.text', topic);
    });
    it('Delete the article', () => {
      cy.get(':nth-child(1) > .preview-link > p').contains(topic).click();
      cy.get('.btn-outline-danger').contains('Delete Article').click();
      cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link')
        .contains('Global Feed')
        .click()
        .should('not.contain', topic);
    });
  });
});
