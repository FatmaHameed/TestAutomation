context('login', () => {
  beforeEach(() => {
    cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
  });
  describe('successful login', () => {
    it('use correct username and password', () => {
      cy.login('fatma@email.com', 'fatma123');
      cy.validateHomePage();
    });
  });
  describe('unSuccessful login', () => {
    it('Incorrect email and correct password', () => {
      cy.login('fatma0@email.com', 'fatma123');
      cy.validateErrorMessage();
    });
    it('Correct email and Incorrect password', () => {
      cy.login('fatma@email.com', 'fatma1234');
      cy.validateErrorMessage();
    });
    it('validateLoginWithEmptyEmailAndPassword', () => {
      cy.get('.btn').contains('Sign in').click();
      cy.validateErrorMessage();
    });
  });
});
