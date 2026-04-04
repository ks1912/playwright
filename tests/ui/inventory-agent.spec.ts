import { test, expect } from '../../pages/fixture/test.fixture';
test.use({ storageState: undefined }); // disable global auth

test('Full flow using agents @smoke', async ({ authAgent, inventoryAgent, page }) => {
  await authAgent.loginAsStandardUser();
  await inventoryAgent.openInventory();
  await inventoryAgent.addFirstItemToCart();
  await expect(page.locator('.shopping_cart_badge')).toBeVisible();
});