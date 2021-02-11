// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
  cy.get(':nth-child(1) > .form-control').type(email);
  cy.get(':nth-child(2) > .form-control').type(password);
  cy.get('.btn').contains('Sign in').click();
});

// validate the home page
Cypress.Commands.add('validateHomePage', () => {
  cy.title().should('eq', 'Conduit');
  cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should(
    'have.text',
    'Your Feed',
  );
  cy.get(':nth-child(4) > .nav-link').should('have.text', 'Fatma');
});

// validate error message
Cypress.Commands.add('validateErrorMessage', () => {
  cy.get('.error-messages').should('have.text', 'email or password is invalid');
});

// Type an article
Cypress.Commands.add('typeAnArticle', (title, topic, markdown) => {
  cy.get(':nth-child(1) > .form-control').type(title);
  cy.get(':nth-child(2) > .form-control').type(topic);
  cy.get(':nth-child(3) > .form-control').type(markdown);
  cy.get('.btn').contains('Publish Article').click();
  cy.contains(markdown);
});
