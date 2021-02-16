class SettingsPage {
  updateProfilePicture(url) {
    const pictureInput = cy.get('[placeholder="URL of profile picture"]');
    pictureInput.clear();
    pictureInput.type(url);
    return this;
  }
  submitUpdatedSettings() {
    const submit = cy.get('[type=submit]');
    submit.click();
  }
}

export default SettingsPage;
