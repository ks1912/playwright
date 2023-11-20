// // Importing Playwright
// import { test, expect } from "@playwright/test";

// // Importing pages
// const { LoginPage } = require("../page/LoginPage");

// // Importing libraries
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// test.describe("Homepage Test", () => {
//   test("TC-01 Testing login functionality", async ({ page }) => {
//     console.log(process.env.BASE_URL, process.env.U_NAME, process.env.U_PASS);
//     const loginPage = new LoginPage(page, test);
//     await loginPage.loginToPage(
//       process.env.BASE_URL_API,
//       process.env.U_NAME,
//       process.env.U_PASS
//     );
//   });
// });
