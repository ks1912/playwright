# API Chaining with Playwright

#### This repository explores API Chaining with Playwright for testing.

## Installation

#### Install Playwright:

```bash
npm init playwright@latest
```

## Creating Spec File

```bash
mkdir tests/api_testing.spec.js
```

## Writing Tests

1. Open the created spec file.
2. Declare a `describe` block to organize test cases:

```javascript
describe("API Testing Suite", () => {
  // Write your test cases here
});
```

## Sequencing Tests

##### To execute tests sequentially:

If your tests are not executing sequentially, navigate to `playwright.config.js`.
Comment out `fullyParallel: true` in the configuration.
