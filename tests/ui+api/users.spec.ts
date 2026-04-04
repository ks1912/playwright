import { test, expect } from '@playwright/test';
import { UserAPI } from '../api/user.api';

test('API + UI Hybrid Test', async ({ page }) => {
  const api = new UserAPI();
  await api.init('https://reqres.in/api');

  const response = await api.getUsers();
  expect(response.status()).toBe(200);

  await page.goto('/inventory.html');
});