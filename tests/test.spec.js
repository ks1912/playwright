const {test, expect} = "@playwright/test";

test("TC-01 Testing navigation", async( { page } ) => {
    page.goto('https://www.shoppersstop.com/');
    await expect(page.locator('[title="SHOPPERS STOP"].desk-logo')).toBeVisible();
    await expect(page.locator('a[title="MEN"]')).toBeVisible();
    await page.locator('a[title="MEN"]').click();
    await expect(page).toHaveURL(/men/);
    await expect(page.locator('.product-tile a.productdetail').first()).toBeVisible();
    await page.locator('.product-tile a.productdetail').first().click();
})