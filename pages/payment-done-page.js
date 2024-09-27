exports.PaymentDonePage = class PaymentDonePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.orderPlacedTitle = page.locator('h2[data-qa="order-placed"]');
      this.continueButton = page.locator('a[data-qa="continue-button"]');
    }

    async getOrderPlacedTitle() {
      return await this.orderPlacedTitle.innerText();  
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}