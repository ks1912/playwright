import { test as base, expect } from '@playwright/test';
import { InventoryPage } from '../methods/inventory.page';
import { AuthAgent } from '../../agents/auth.agent';
import { InventoryAgent } from '../../agents/inventory.agent';

export const test = base.extend<{
  inventoryPage: InventoryPage;
  authAgent: AuthAgent;
  inventoryAgent: InventoryAgent;
}>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  authAgent: async ({ page }, use) => {
    await use(new AuthAgent(page));
  },

  inventoryAgent: async ({ page }, use) => {
    await use(new InventoryAgent(page));
  },
});

export { expect };