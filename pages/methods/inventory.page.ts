import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/base_page';

export class InventoryPage extends BasePage {

  private inventoryItems = this.page.locator('.inventory_item');
  private title = this.page.locator('.title');

  async gotoInventoryPage() {
    await this.navigate('/inventory.html');
  }

  async getInventoryCount() {
    return await this.getCount(this.inventoryItems);
  }

  async validateInventoryLoaded() {
    await this.waitForVisible(this.inventoryItems.first());
  }

  async getTitleText() {
    return await this.getText(this.title);
  }

  async validatePageTitle() {
    await this.assertText(this.title, 'Products');
  }
}