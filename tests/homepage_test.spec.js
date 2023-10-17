// Importing Playwright
import { test, expect } from "@playwright/test";

// Importing pages
const { LoginPage } = require("../page/LoginPage")

// Importing libraries
import dotenv from "dotenv";
dotenv.config();

test.describe("Homepage Test", () => {
  test("TC-01 Testing login functionality", async ({ page }) => {
    const loginPage = new LoginPage(page, test);
    await loginPage.loginToPage(
      process.env.BASE_URL,
      process.env.U_NAME,
      process.env.U_PASS
    );
  });
});
