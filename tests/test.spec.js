import { expect, test } from "@playwright/test";

test("TC-01 Navigate to Hompage", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/bookcart/);
  await expect(page.locator("div.brand-title")).toHaveText(/Book Cart/);
  await expect(page.getByText("Login")).toBeVisible();
});

test("TC-02 Navigate to Loginpage", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Login")).toBeVisible();
  await page.getByText("Login").click();
  await page.locator('input[data-placeholder="Username"]').fill("testUserBdd");
  await page.locator('input[data-placeholder="Password"]').fill("Test@123");
  await page
    .locator("//span[contains(text(),'Login')]/parent::button")
    .nth(1)
    .click();
  await expect(page.getByText("testUserBdd")).toBeVisible();
});
