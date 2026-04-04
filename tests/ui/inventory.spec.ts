import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/methods/inventory.page';

test.describe('Inventory Tests', () => {

  test('🛒 Validate inventory loads', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.gotoInventoryPage();
    await inventoryPage.validateInventoryLoaded();
  });

  test('📦 Validate inventory count', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.gotoInventoryPage();
    const count = await inventoryPage.getInventoryCount();

    expect(count).toBeGreaterThan(0);
  });

  test('🏷️ Validate page title', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.gotoInventoryPage();
    await inventoryPage.validatePageTitle();
  });

});