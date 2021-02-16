// validate the home page
Cypress.Commands.add('ensureLoginToHomePage', () => {
  cy.title().should('eq', 'Conduit');
  cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should(
    'have.text',
    'Your Feed',
  );
  cy.get(':nth-child(4) > .nav-link').should('have.text', 'Fatma');
});

// validate error message
Cypress.Commands.add('invalidLogin', (errorMsg) => {
  cy.get('.error-messages').should('have.text', errorMsg);
});
