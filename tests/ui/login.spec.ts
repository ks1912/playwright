import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/methods/login.page';

test.use({ storageState: undefined }); // important for login tests

test('Invalid login @smoke @login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('invalid_user', 'wrong_password');
  await loginPage.validateLoginError();
});