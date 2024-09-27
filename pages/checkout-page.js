exports.CheckoutPage = class CheckoutPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.placeOrderLink = page.getByRole('link', { name: 'Place Order' })
  }

  async clickPlaceOrderLink() {
    await this.placeOrderLink.click();
  }
};