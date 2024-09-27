exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newUsernameInput = page.locator('input[data-qa="signup-name"]')
    this.newEmailInput = page.locator('input[data-qa="signup-email"]')
    this.signUpButton = page.getByRole('button', { name: 'Signup' })
  }

  async fillNewUsernameInput(username) {
    await this.newUsernameInput.fill(username);
  }

  async fillNewEmailInput(email) {
    await this.newEmailInput.fill(email);
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  async registerNewUser({userName, email}){
    await this.fillNewUsernameInput(userName);
    await this.fillNewEmailInput(email);
    await this.clickSignUpButton();
  }
}

