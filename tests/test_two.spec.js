const { chromium } = require("playwright");

let browser;
let context;
let page;

// Run once before all tests
beforeAll(async () => {
  // Launch the browser
  browser = await chromium.launch();
});

// Run before each test
beforeEach(async () => {
  // Create a new browser context and page for each test
  context = await browser.newContext();
  page = await context.newPage();
});

// Example test
test("Example test", async () => {
  // Perform your test actions using `page`
  await page.goto("https://example.com");
  // ... your test logic ...
});

// Run after each test
afterEach(async () => {
  // Close the context and page after each test
  await context.close();
});

// Run once after all tests
afterAll(async () => {
  // Close the browser after all tests
  await browser.close();
});
