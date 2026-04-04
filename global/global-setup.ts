import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();

  // 👤 Admin
  const adminPage = await browser.newPage();
  await adminPage.goto('/');
  await adminPage.fill('#user-name', 'standard_user');
  await adminPage.fill('#password', 'secret_sauce');
  await adminPage.click('#login-button');
  await adminPage.context().storageState({ path: 'storage/admin.json' });

  // 👤 User
  const userPage = await browser.newPage();
  await userPage.goto('/');
  await userPage.fill('#user-name', 'problem_user');
  await userPage.fill('#password', 'secret_sauce');
  await userPage.click('#login-button');
  await userPage.context().storageState({ path: 'storage/user.json' });

  await browser.close();
}

export default globalSetup;