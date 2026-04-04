# 🎭 Playwright Automation Framework (TypeScript + POM)

## 📌 Overview

This is a scalable end-to-end test automation framework built using **Playwright with TypeScript**, following the **Page Object Model (POM)** design pattern. The framework supports UI automation testing, API testing, and comprehensive CI/CD integration for enterprise-level test automation.

**Repository:** [ks1912/playwright](https://github.com/ks1912/playwright)  
**Current Branch:** selenium-to-playwright  
**Version:** 1.0.0

---

## 🎯 Key Features

- ✅ **Page Object Model (POM)** - Clean separation of concerns
- ✅ **TypeScript Support** - Strong typing and better IDE support
- ✅ **Multi-browser Testing** - Chromium, Firefox, WebKit
- ✅ **API Testing** - RESTful API testing capabilities
- ✅ **Hybrid Testing** - Combined UI + API test scenarios
- ✅ **Multiple Test Environments** - Admin and User personas with storage state
- ✅ **Parallel Execution** - Run tests in parallel across multiple browsers
- ✅ **Custom Fixtures** - Reusable test fixtures
- ✅ **Global Setup/Teardown** - Pre-test and post-test hooks
- ✅ **Allure Reporting** - Detailed test reports with Allure
- ✅ **Docker Support** - Containerized test execution
- ✅ **CI/CD Pipeline** - Jenkins integration ready

---

## 🏗️ Project Structure

```
playwright/
│
├── tests/                           # Test specifications
│   ├── ui/                          # UI test cases
│   │   ├── login.spec.ts           # Login page tests
│   │   └── inventory.spec.ts       # Inventory page tests
│   ├── api/                         # API test cases
│   │   └── user.api.ts             # User API tests
│   └── ui+api/                      # Hybrid UI + API tests
│       └── users.spec.ts           # Combined test scenarios
│
├── pages/                           # Page Object Model classes & utilities
│   ├── base/                        # Base classes
│   │   ├── base_page.ts            # BasePage with common actions
│   │   └── base_api.ts             # BaseAPI for API requests
│   ├── methods/                     # Page-specific implementations
│   │   ├── login.page.ts           # LoginPage class
│   │   └── inventory.page.ts       # InventoryPage class
│   ├── locators/                    # Locator definitions
│   │   └── navbar.locator.ts       # Navigation locators
│   ├── fixture/                     # Custom Playwright fixtures
│   │   └── test.fixture.ts         # Test fixtures with page objects
│   ├── utils/                       # Utility functions
│   │   └── commands.ts             # Helper commands for tests
│   └── constants/                   # Static data & constants
│
├── global/                          # Global test lifecycle hooks
│   ├── global-setup.ts             # Pre-test setup (login for multiple users)
│   └── global-teardown.ts          # Post-test cleanup
│
├── services/                        # External service integrations
│   └── api/                         # API service classes
│
├── storage/                         # Persisted authentication states
│   ├── admin.json                  # Admin user session state
│   └── user.json                   # Regular user session state
│
├── data/                            # Test data files
│
├── playwright.config.ts             # Playwright configuration
├── playwright-report/               # HTML test reports (generated)
├── allure-results/                  # Allure report data (generated)
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # NPM dependencies
├── Dockerfile                       # Docker image definition
├── Jenkinsfile                      # CI/CD pipeline configuration
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | ^1.59.1 | E2E Testing Framework |
| **TypeScript** | ^6.0.2 | Type-safe language |
| **Node.js** | 18+ | JavaScript runtime |
| **Allure** | ^3.6.0 | Advanced reporting |
| **@types/node** | ^25.5.2 | TypeScript definitions |

**Additional Tools:**
- 🎭 Playwright Test - Test runner
- 📊 HTML Reporter - Built-in reporting
- 🐳 Docker - Containerization
- 🔄 Jenkins - CI/CD Pipeline

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ks1912/playwright.git
cd playwright
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install --with-deps
```

### 4️⃣ Verify Installation

```bash
npx playwright test --version
```

---

## ▶️ Running Tests

### Basic Test Execution

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/ui/login.spec.ts

# Run specific test by name
npx playwright test --grep "Invalid login"

# Run with specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run with specific user context
npx playwright test --project=admin    # Use admin storage state
npx playwright test --project=user     # Use regular user storage state
```

### Advanced Test Options

```bash
# Run in headed mode (see browser)
npx playwright test --headed

# Run in debug mode (interactive)
npx playwright test --debug

# Run in UI mode (visual test runner)
npx playwright test --ui

# Run single test file
npx playwright test tests/ui/login.spec.ts

# Run tests matching pattern
npx playwright test --grep @smoke

# Run with specific workers (parallel execution)
npx playwright test --workers=4

# Continue on failure
npx playwright test --continue-on-failure
```

---

## 📊 Test Reports

### View HTML Report

```bash
npx playwright show-report
```

Report location: `./playwright-report/index.html`

### View Allure Report

```bash
npx allure serve ./allure-results
```

### Generate Allure Report Offline

```bash
npx allure generate ./allure-results --clean -o allure-report
open allure-report/index.html
```

---

## 🧱 Framework Architecture

### ✔ Page Object Model (POM)

Each page is represented as a class with:
- **Locators**: Web element selectors
- **Methods**: User interactions (clicks, fills, assertions)
- **State Management**: Page-specific logic

**Example:**
```typescript
export class LoginPage extends BasePage {
  private username = this.page.locator('#user-name');
  private loginBtn = this.page.locator('#login-button');

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.click(this.loginBtn);
  }
}
```

### ✔ Base Page

Common reusable methods in `BasePage`:
- `navigate(path: string)` - Navigate to page
- `click(locator: Locator)` - Click element
- `fill(locator: Locator, value: string)` - Fill input
- `getText(locator: Locator)` - Get element text
- `getCount(locator: Locator)` - Get element count
- `waitForVisible(locator: Locator)` - Wait for visibility
- `assertText(locator: Locator, expected: string)` - Assert text content

---

### ✔ Custom Fixtures

**File:** `pages/fixture/test.fixture.ts`

Fixtures provide:
- Pre-configured page objects
- Automatic cleanup
- Shared test context
- Reduced boilerplate

**Usage:**
```typescript
import { test } from '../pages/fixture/test.fixture';

test('example', async ({ page, inventoryPage, commands }) => {
  await inventoryPage.gotoInventoryPage();
  // Test code here
});
```

---

### ✔ Global Setup/Teardown

**Global Setup** (`global/global-setup.ts`):
- Pre-authenticates users (Admin and User)
- Saves authentication state in storage
- Runs once before all tests

**Storage States:**
- `storage/admin.json` - Admin user session
- `storage/user.json` - Regular user session

**Example Usage:**
```typescript
// Login tests (use undefined storageState)
test.use({ storageState: undefined });

// Tests with auth (use specific project)
npx playwright test --project=admin
```

---

## 🧪 Test Structure

### UI Tests

**Location:** `tests/ui/`

Example test file structure:
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/methods/login.page';

test.use({ storageState: undefined }); // Disable auth

test('Invalid login @smoke @login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('invalid_user', 'wrong_password');
  await loginPage.validateLoginError();
});
```

### API Tests

**Location:** `tests/api/`

API classes extend `BaseAPI` with common HTTP methods.

### Hybrid Tests

**Location:** `tests/ui+api/`

Combined UI and API test scenarios for end-to-end workflows.

---

## 📋 Test Tags & Organization

Tests are organized using tags:

```bash
# Run only smoke tests
npx playwright test --grep @smoke

# Run only UI tests
npx playwright test --grep @ui

# Exclude login tests
npx playwright test --grep -v @login
```

Common tags:
- `@smoke` - Quick smoke tests
- `@regression` - Regression test suite
- `@login` - Login-related tests
- `@critical` - Critical business flows

---

## 🐳 Docker Execution

### Build Docker Image

```bash
docker build -t playwright-framework .
```

### Run Tests in Docker

```bash
docker run --rm playwright-framework

# With custom command
docker run --rm playwright-framework npx playwright test --headed
```

### Docker Compose (if available)

```bash
docker-compose up
```

---

## 🔄 CI/CD Integration

### Jenkins Pipeline

**File:** `Jenkinsfile`

Pipeline stages:
1. **Checkout** - Clone repository
2. **Install Dependencies** - npm install & playwright install
3. **Run Tests** - npx playwright test
4. **Generate Reports** - Allure report generation
5. **Archive Reports** - Store artifacts

### GitHub Actions (Alternative)

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

---

## 🗂️ File Descriptions

### `/tests` Directory

| File | Purpose |
|------|---------|
| `ui/login.spec.ts` | Login page UI tests |
| `ui/inventory.spec.ts` | Inventory page UI tests |
| `api/user.api.ts` | User API tests |
| `ui+api/users.spec.ts` | Hybrid test scenarios |

### `/pages` Directory

| Directory | Purpose |
|-----------|---------|
| `base/` | Base classes for page and API |
| `methods/` | Page object implementations |
| `locators/` | Separated locator definitions |
| `fixture/` | Custom test fixtures |
| `utils/` | Helper functions and commands |
| `constants/` | Static test data |

### Root Files

| File | Purpose |
|------|---------|
| `playwright.config.ts` | Playwright test configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `package.json` | Dependencies and scripts |
| `Dockerfile` | Docker image definition |
| `Jenkinsfile` | Jenkins CI/CD pipeline |

---

## 🔍 Debugging

### Debug Mode

```bash
npx playwright test --debug
```

Interactive debugger opens in Playwright Inspector.

### UI Mode

```bash
npx playwright test --ui
```

Visual test runner with step-by-step execution.

### Trace Viewer

```bash
npx playwright show-trace trace.zip
```

View detailed execution traces for debugging.

### Take Screenshots

Automatically captured on failure:
```
./test-results/
```

### Video Recording

Enable in config for failed tests:
```typescript
use: {
  video: 'retain-on-failure'
}
```

---

## 📖 Best Practices

### 1. Use Selectors Wisely

```typescript
// ✅ Good - Semantic selectors
page.locator('[data-testid="login-button"]')
page.locator('button:has-text("Login")')

// ❌ Avoid - Brittle selectors
page.locator('div > span > button')
```

### 2. Explicit Waits → Auto-Waiting

```typescript
// ❌ Old Selenium way
Thread.sleep(1000);

// ✅ Playwright auto-waits
await page.fill('#input', 'text'); // Waits automatically
```

### 3. Use Fixtures for Reusability

```typescript
// ✅ Good - Use fixtures
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});
```

### 4. Organize Locators

```typescript
// ✅ Group related locators in page class
private username = this.page.locator('#user-name');
private password = this.page.locator('#password');
private loginBtn = this.page.locator('#login-button');
```

### 5. Keep Tests Independent

```typescript
// ✅ Each test should be independent
test('scenario A', async ({ page }) => {
  // Complete setup within test
  // No dependency on other tests
});
```

---

## 🚨 Troubleshooting

### Issue: Tests Timeout

**Solution:**
```bash
# Increase timeout in playwright.config.ts
timeout: 60000 // 60 seconds
```

### Issue: Flaky Tests

**Solution:**
- Use proper selectors with `[data-testid]`
- Rely on Playwright's auto-waiting
- Avoid hard waits (Thread.sleep equivalent)

### Issue: Module Not Found

**Solution:**
```bash
npm install
npx tsc --noEmit  # Check TypeScript errors
```

### Issue: Browser Not Found

**Solution:**
```bash
npx playwright install --with-deps
```

---

## 📚 Learning Resources

- [Playwright Official Docs](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [API Testing with Playwright](https://playwright.dev/docs/api-testing)
- [Allure Reporting](https://docs.qameta.io/allure/)

---

## 🔄 Selenium to Playwright Migration Notes

| Aspect | Selenium | Playwright |
|--------|----------|-----------|
| Setup | Complex | Simple |
| Waits | Explicit | Auto-waiting |
| Threading | Required | Not needed |
| Parallel Tests | More setup | Built-in |
| Browser Launch | Slower | Faster |
| Debugging | Limited | Excellent |
| API Testing | Limited | Native support |
| Cross-browser | WebDriver | Native |

---

## 💡 Tips & Tricks

### Run Specific Tests by Tag Combination

```bash
# Multiple tags (AND logic)
npx playwright test --grep "@smoke and @login"

# Exclude multiple tags
npx playwright test --grep -v "@skip"
```

### View Slow Tests

```bash
npx playwright test --reporter=list
```

### Parallel vs Sequential

```bash
# Parallel (default)
npx playwright test --workers=4

# Sequential
npx playwright test --workers=1
```

### Capture Network Activity

```typescript
// In test
page.on('response', response => {
  console.log(response.url(), response.status());
});
```

---

## 🤝 Contributing

1. Clone the repository
2. Create a feature branch
3. Make changes
4. Run tests: `npx playwright test`
5. Submit a pull request

---

## 📝 License

ISC License - See LICENSE file for details

---

## 👥 Support & Contact

**Repository:** https://github.com/ks1912/playwright  
**Issues:** https://github.com/ks1912/playwright/issues

---

## 📅 Changelog

### Version 1.0.0
- Initial framework setup
- Page Object Model implementation
- Global setup/teardown hooks
- Multi-browser support
- Allure reporting
- Docker & Jenkins integration

---

**Last Updated:** April 2026  
**Maintained by:** QA Automation Team

```bash
BASE_URL=https://example.com
```

Or define in:

```
constants/env.ts
```

---

## 🔁 CI/CD Integration

This framework can be integrated with:

* GitHub Actions
* Jenkins
* CircleCI
* Azure DevOps

Example:

```bash
npx playwright test --reporter=line
```

---

## 📈 Best Practices

* Keep assertions inside test files
* Avoid hard waits
* Use meaningful locators
* Keep test data separate
* Use fixtures for scalability

---

## 🚀 Future Enhancements

* API automation layer
* Database validation utilities
* Test data management system
* Custom reporting (Allure, etc.)
* Docker support

---

## 👨‍💻 Author

Kunal Singh

---

## 📄 License

This project is for learning and internal use.
