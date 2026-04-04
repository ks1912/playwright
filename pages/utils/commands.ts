import { Page } from '@playwright/test';

export class Commands {
  constructor(private page: Page) {}

  async loginAsStandardUser() {
    await this.page.goto('/');
    await this.page.fill('#user-name', 'standard_user');
    await this.page.fill('#password', 'secret_sauce');
    await this.page.click('#login-button');
  }

  async addFirstItemToCart() {
    await this.page.click('.inventory_item button');
  }
}
