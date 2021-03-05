class HomePage {
  goToHome() {
    const home = cy.get(':nth-child(1) > .nav-link');
    home.click();
  }
  userName() {
    return cy.get(':nth-child(4) > .nav-link');
  }
  settings() {
    return cy.get(':nth-child(3) > .nav-link');
  }
  newPost() {
    return cy.get('.container > .nav > :nth-child(2) > .nav-link');
  }
  userPicture() {
    return cy.get('.user-pic');
  }
}

export default HomePage;
