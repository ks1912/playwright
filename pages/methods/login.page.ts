import { Page } from '@playwright/test';
import { BasePage } from '../base/base_page';

export class LoginPage extends BasePage {

  private username = this.page.locator('#user-name');
  private password = this.page.locator('#password');
  private loginBtn = this.page.locator('#login-button');
  private errorMessage = this.page.locator('[data-test="error"]');

  async gotoLoginPage() {
    await this.navigate('/');
  }

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }

  async validateLoginError() {
    await this.waitForVisible(this.errorMessage);
  }

  async loginAsStandardUser() {
    await this.login('standard_user', 'secret_sauce');
  }
}