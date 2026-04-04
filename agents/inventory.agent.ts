import { BaseAgent } from './base.agent';

export class InventoryAgent extends BaseAgent {

  async openInventory() {
    await this.page.goto('/inventory.html');
  }

  async addFirstItemToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async getInventoryCount() {
    return await this.page.locator('.inventory_item').count();
  }
}