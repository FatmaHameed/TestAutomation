context('create new post', () => {
  describe('successful creating new post', () => {
    // Login successfully with correct username and password
    it('create new post', () => {
      //open the app
      cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
      //enter email
      cy.get(':nth-child(1) > .form-control').type('fatma@email.com');
      //enter password
      cy.get(':nth-child(2) > .form-control').type('fatma123');
      //click sign in
      cy.get('.btn').contains('Sign in').should('be.visible').click();
      // validate the signIn
      cy.title().should('eq', 'Conduit');
      cy.contains('Your Feed', { timeout: 10000 }).should('be.visible');
      cy.get(':nth-child(4) > .nav-link').should('have.text', 'Fatma');
      //creating new post
      cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
      //validate we are in the correct page
      cy.hash().should('include', '#/editor');
      cy.contains('Publish Article', { timeout: 10000 }).should('be.visible');
      // Type the article
      cy.get(':nth-child(1) > .form-control').type('Test');
      cy.get(':nth-child(2) > .form-control').type('This article is for test');
      cy.get(':nth-child(3) > .form-control').type(
        'This is the topic of the article',
      );
      cy.get('.btn').click();
      cy.contains('This is the topic of the article', {
        timeout: 10000,
      }).should('be.visible');
      // Validate if the article is in global feed
      cy.get(':nth-child(1) > .nav-link').click();
      cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click();
      cy.contains('This article is for test').should('be.visible');
      // Validate if the article is in my articles
      cy.get(':nth-child(4) > .nav-link').click();
      cy.contains('My Articles').should('be.visible');
      cy.get(':nth-child(1) > .preview-link > p').should(
        'have.text',
        'This article is for test',
      );
    });
  });
});
