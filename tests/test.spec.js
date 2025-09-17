import { test } from "@playwright/test";

test("Playwright test", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/2018/09/automation-form.html#"
  );
});
