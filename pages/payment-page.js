exports.PaymentPage = class PaymentPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.nameOnCardInput = page.locator('input[data-qa="name-on-card"]');
      this.cardNumberInput = page.locator('input[data-qa="card-number"]');
      this.cardCVCInput = page.locator('input[data-qa="cvc"]');
      this.cardExpiryMonthInput = page.locator('input[data-qa="expiry-month"]');
      this.cardExpiryYearInput = page.locator('input[data-qa="expiry-year"]');
      this.payButton = page.locator('button[data-qa="pay-button"]');
    }
    async fillNameOnCardInput(name){
        await this.nameOnCardInput.fill(name);
    }

    async fillCardNumberInput(number){
        await this.cardNumberInput.fill(number);
    }

    async fillCardCVCInput(cvc){
        await this.cardCVCInput.fill(cvc);
    }   

    async fillCardExpiryMonthInput(month){
        await this.cardExpiryMonthInput.fill(month);
    }   

    async fillCardExpiryYearInput(year){
        await this.cardExpiryYearInput.fill(year);
    }   

    async clickPayButton(){
        await this.payButton.click();
    }

    async fillPaymentInformationAndPay({fullName, cardNumber, cardCVC, expiryMonth, expiryYear}){
        await this.fillNameOnCardInput(fullName);
        await this.fillCardNumberInput(cardNumber);
        await this.fillCardCVCInput(cardCVC);
        await this.fillCardExpiryMonthInput(expiryMonth);
        await this.fillCardExpiryYearInput(expiryYear);
        await this.clickPayButton();
    }
  };