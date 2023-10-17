exports.LoginPage = class LoginPage {
  constructor(page, test) {
    (this.page = page),
      (this.test = test),
      (this.loginButton = this.page.getByRole("button", { name: "Login" }));
    this.emailId = (user_email) => this.page.locator("#email").fill(user_email);
    this.password = (pass) => this.page.locator("#password").fill(pass);
    this.signInButton = this.page.getByRole('//input[contains(@id,"login")]');
    this.navigation = (baseURL) => this.page.goto(baseURL);
  }

  loginToPage = async (baseURL, userId, password) => {
    await this.navigation(baseURL);
    await this.loginButton.click();
    await this.emailId(userId);
    await this.password(password)
    await this.signInButton.click();
  };
}
