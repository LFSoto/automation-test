exports.ProductPage = class ProductPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
    }
  
    async clickProductByIndex(index) {
      const productList = await this.page.$$('.product-image-wrapper > .choose > .nav > li > a');
      if (index < 1 || index > productList.length) {
        throw new Error(`Out of range, use index between 1 and ${productList.length}`);
      }
      await productList[index - 1].click();
    }
  };