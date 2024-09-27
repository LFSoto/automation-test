exports.ProductDetailsPage = class ProductDetailsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.quantityInput = page.locator('#quantity')
    this.addToCartButton = page.getByRole('button', { name: ' Add to cart' });
    this.cartConfirmModal = page.locator('.modal-body .text-center').first();
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' })
  }

  async fillQuantityInput(quantity) {
    await this.quantityInput.fill(quantity.toString());
  }

  async getQuantityValue() {
    return await this.quantityInput.inputValue();
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }

  async getCartConfirmModalText() {
    return await this.cartConfirmModal.textContent();
  }

  async clickViewCartLink() {
    await this.viewCartLink.click();
  }
};