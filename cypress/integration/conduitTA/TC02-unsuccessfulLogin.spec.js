context('login', () => {
  describe('unSuccessful login', () => {
    // unsuccessful login using incorrect email and correct password
    it('Incorrect email', () => {
      //open the app
      cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
      //enter email
      cy.get(':nth-child(1) > .form-control').type('fatma0@email.com');
      //enter password
      cy.get(':nth-child(2) > .form-control').type('fatma123');
      //click sign in
      cy.get('.btn').contains('Sign in').should('be.visible').click();
      // validate the error message
      cy.contains('email or password is invalid').should('be.visible');
    });
    // unsuccessful login using correct email and incorrect password
    it('Incorrect password', () => {
      //open the app
      cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
      //enter email
      cy.get(':nth-child(1) > .form-control').type('fatma@email.com');
      //enter password
      cy.get(':nth-child(2) > .form-control').type('fatma1233');
      //click sign in
      cy.get('.btn').contains('Sign in').should('be.visible').click();
      // validate the error message
      cy.get('.error-messages').should(
        'have.text',
        'email or password is invalid',
      );
    });
  });
});
