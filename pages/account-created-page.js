exports.AccountCreatedPage = class AccountCreatedPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.accountCreatedTitle = page.locator('h2[data-qa="account-created"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }

  async getAccountCreatedTitle() {
    return await this.accountCreatedTitle.innerText();  
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}

