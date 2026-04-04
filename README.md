# 🎭 Playwright Automation Framework (TypeScript + POM)

## 📌 Overview

This is a scalable end-to-end test automation framework built using **Playwright with TypeScript**, following the **Page Object Model (POM)** design pattern.

The framework is designed for:

* UI Automation Testing
* API Testing (extendable)
* CI/CD Integration
* Scalable enterprise-level test automation

---

## 🏗️ Project Structure

```
playwright-framework/
│
├── tests/                      # Test specifications
│   ├── ui/                     # UI test cases
│   └── api/                    # API test cases (optional)
│
├── pages/                      # Page Object Model classes
│   ├── base/                   # Base page with reusable methods
│   └── *.page.ts               # Individual page classes
│
├── fixtures/                   # Custom Playwright fixtures
│
├── utils/                      # Utility/helper functions
│
├── locators/                   # (Optional) Locator separation
│
├── constants/                  # Static test data / env configs
│
├── config/                     # Playwright configuration
│
├── test-results/               # Test execution results
├── reports/                    # HTML reports
│
├── playwright.config.ts        # Playwright config file
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Tech Stack

* 🎭 Playwright
* 🟦 TypeScript
* 📦 Node.js
* 🧪 Test Runner: Playwright Test
* 📊 Reporting: HTML Report (built-in)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <repo-url>
cd playwright-framework
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test file

```bash
npx playwright test tests/ui/login.spec.ts
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

---

## 📊 Reports

After execution:

```bash
npx playwright show-report
```

Report location:

```
/playwright-report/index.html
```

---

## 🧱 Framework Design

### ✔ Page Object Model (POM)

* Each page is represented as a class
* Contains:

  * Locators
  * Page actions
* Improves reusability and maintainability

---

### ✔ Base Page

Common reusable methods:

* Navigation
* Click
* Input actions

---

### ✔ Fixtures

Custom fixtures are used to:

* Initialize page objects
* Share test context
* Reduce boilerplate code

---

## 🔄 Selenium to Playwright Migration Notes

| Selenium       | Playwright       |
| -------------- | ---------------- |
| WebDriver      | Built-in browser |
| findElement    | locator()        |
| Explicit waits | Auto-waiting     |
| Thread.sleep   | ❌ Not required   |
| PageFactory    | POM classes      |

---

## ⚡ Key Features

* ✅ Auto-waiting (reduces flaky tests)
* ✅ Parallel execution
* ✅ Retry mechanism
* ✅ Screenshot & video capture
* ✅ Trace viewer for debugging
* ✅ Cross-browser support

---

## 🔧 Configuration

Main config file:

```
playwright.config.ts
```

You can configure:

* Browsers
* Base URL
* Timeouts
* Retries
* Parallel execution

---

## 🌍 Environment Support

Use environment variables:

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
