context('Edit Profile setting', () => {
  describe('Add photo profile', () => {
    // Login successfully with correct username and password
    it('Add image to the profile', () => {
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
      cy.contains('Your Feed').should('be.visible');
      cy.get(':nth-child(4) > .nav-link').should('have.text', 'Fatma');
      // Edit Profile settings
      cy.get(':nth-child(3) > .nav-link').click();
      //validate we are in the correct page
      cy.hash().should('include', '#/settings');
      // Edit the profile image
      cy.get(':nth-child(1) > .form-control').type(
        'https://cdn.britannica.com/w:1100/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg',
      );
      cy.get('form > :nth-child(1) > .btn').click();
      // Validate the image is updated in the profile ???
      cy.get('.user-pic').should('be.visible', { timeout: 10000 });
    });
  });
});
