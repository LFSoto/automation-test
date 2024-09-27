exports.ViewCartPage = class ViewCartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByText('Proceed To Checkout');
    this.checkoutModal = page.locator('.modal-body .text-center').first();
    this.registerLink = page.getByRole('link', { name: 'Register / Login' });
    } 
    async clickCheckoutButton() {
      await this.checkoutButton.click();
    }
    async getCheckoutModalText() {
        return await this.checkoutModal.textContent();
    }
    async clickRegisterLink() {
      await this.registerLink.click();
    }

}