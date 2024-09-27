exports.SignUpPage = class SignUpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.daySelect = page.locator('select[data-qa="days"]');
    this.monthSelect = page.locator('select[data-qa="months"]');
    this.yearSelect = page.locator('select[data-qa="years"]');
    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.addressInput = page.locator('input[data-qa="address"]');
    this.countrySelect = page.locator('select[data-qa="country"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipInput = page.locator('input[data-qa="zipcode"]');
    this.mobileInput = page.locator('input[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async selectDayOption(day) {
    await this.daySelect.selectOption({ label: `${day}` });
  }

  async selectMonthOption(month) {
    await this.monthSelect.selectOption({ label: `${month}` });
  }

  async selectYearOption(yearIndex) {
    await this.yearSelect.selectOption({ index: yearIndex });
  }

  async fillFirstNameInput(name) {
    await this.firstNameInput.fill(name);
  }

  async fillLastNameInput(name) {
    await this.lastNameInput.fill(name);
  }

  async fillAddressInput(address) {
    await this.addressInput.fill(address);
  }

  async selectCountryOption(countryIndex) {
    await this.countrySelect.selectOption({ index: countryIndex });
  }

  async fillStateInput(state) {
    await this.stateInput.fill(state);
  }

  async fillCityInput(city) {
    await this.cityInput.fill(city);
  }

  async fillZipInput(zip) {
    await this.zipInput.fill(zip);
  }

  async fillMobileInput(mobile) {
    await this.mobileInput.fill(mobile);
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async signUpNewAccount({
    password,
    day,
    month,
    yearIndex,
    firstName,
    lastName,
    address,
    countryIndex,
    state,
    city,
    zip,
    mobile,
  }) {
    await this.fillPassword(password);
    await this.selectDayOption(day);
    await this.selectMonthOption(month);
    await this.selectYearOption(yearIndex);

    // Fill Adress information
    await this.fillFirstNameInput(firstName);
    await this.fillLastNameInput(lastName);
    await this.fillAddressInput(address);
    await this.selectCountryOption(countryIndex); // Select by index between 1-7
    await this.fillStateInput(state);
    await this.fillCityInput(city);
    await this.fillZipInput(zip);
    await this.fillMobileInput(mobile);
    await this.clickCreateAccountButton();
  }
};
