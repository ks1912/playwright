import { test, chromium, expect } from "@playwright/test";

import { Homepage } from "../page/homepage"

import { login } from '../data/loginSignup.json';

test.describe("UI AUTOMATION", () => {
  test("TC-01 Login to the page and validate the popup", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const homepage = new Homepage();
    await homepage.navigateToHomepage("/");
    // await page.goto("/");
    await homepage.loginToApplication({login})
    await expect(page.getByText("Login")).toBeVisible();
    await page.getByText("Login").click();
    await browser.close();
  });
});
