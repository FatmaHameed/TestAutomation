context('login', () => {
  describe('sign in', () => {
    // Login successfully with correct username and password
    it('successful login', () => {
      //open the app
      cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
      //enter email
      cy.get(':nth-child(1) > .form-control').type('fatma@email.com');
      //enter password
      cy.get(':nth-child(2) > .form-control').type('fatma123');
      //click sign in
      cy.get('.btn').contains('Sign in').should('be.visible').click();
      // validate the title and username
      cy.title().should('eq', 'Conduit');
      cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should(
        'have.text',
        'Your Feed',
      );
      cy.contains('Your Feed').should('be.visible');
      cy.get(':nth-child(4) > .nav-link').should('have.text', 'Fatma');
    });
  });
});
