class PostPage {
  typeArticleTitle(title) {
    const articleTitle = cy.get('[placeholder="Article Title"]');
    articleTitle.type(title);
    return this;
  }
  typeArticleTopic(topic) {
    const articleTopic = cy.get('[placeholder="What\'s this article about?"]');
    articleTopic.type(topic);
    return this;
  }
  typeArticleDetails(details) {
    const articleDetails = cy.get(':nth-child(3) > .form-control');
    articleDetails.type(details);
    return this;
  }
  publishArticle() {
    const button = cy.get('[type="button"]');
    button.click();
  }
}

export default PostPage;
