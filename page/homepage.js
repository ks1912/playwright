require("dotenv").config();
exports.Homepage = class Homepage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.loginForm = (placeholderValue) =>
      this.page.locator(`data-placeholder="${placeholderValue}"`);
  }

  navigateToHomepage = async (URL) => {
    await this.page.goto(`${URL}/`);
  };

  loginToApplication = async (username) => {
    await this.loginForm().fill();
  };
};
