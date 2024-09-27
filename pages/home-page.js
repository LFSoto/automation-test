exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productButton = page.getByRole('link', { name: ' Products' })
    this.cartLink = page.getByRole('link', { name: ' Cart' })
    this.logoutLink = page.getByRole('link', { name: ' Logout' })
  }

  async clickProductButton() {
    await this.productButton.click();
  }

  async clickCartLink() {
    await this.cartLink.click();
  }

  async clickLogoutLink() {
    await this.logoutLink.click();
  }
};