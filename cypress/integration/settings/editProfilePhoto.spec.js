context('Edit Profile setting', () => {
  beforeEach(() => {
    cy.visit('http://react-redux.realworld.io/#/login?_k=plujfs');
    cy.login('fatma@email.com', 'fatma123');
    cy.validateHomePage();
  });
  describe('Edit profile photo', () => {
    it('Add image to the profile', () => {
      cy.get(':nth-child(3) > .nav-link').contains('Settings').click();
      cy.hash().should('include', '#/settings');
      cy.get(':nth-child(1) > .form-control').as('addImgSrc');
      cy.get('@addImgSrc')
        .clear()
        .type(
          'https://cdn.britannica.com/w:1100/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg',
        );
      cy.get('form > :nth-child(1) > .btn').contains('Update Settings').click();
      cy.get('.nav-link').find('img').as('validateImgSrc');
      cy.get('@validateImgSrc').should(
        'have.attr',
        'src',
        'https://cdn.britannica.com/w:1100/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg',
      );
    });
  });
});
