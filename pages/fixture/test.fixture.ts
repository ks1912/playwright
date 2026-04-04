import { test as base, Page } from '@playwright/test';
import { InventoryPage } from '../inventory';
import { Commands } from '../utils/commands';

export const test = base.extend<{
  inventoryPage: InventoryPage;
  commands: Commands;
}>({
  inventoryPage: async ({ page }: { page: Page }, use) => {
    await use(new InventoryPage(page));
  },

  commands: async ({ page }: { page: Page }, use) => {
    await use(new Commands(page));
  },
});