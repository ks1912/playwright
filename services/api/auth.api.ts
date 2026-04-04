import { request } from '@playwright/test';

export async function getAuthState() {
  const context = await request.newContext();

  const response = await context.post('https://example.com/api/login', {
    data: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  });

  const cookies = await context.storageState();
  return cookies;
}