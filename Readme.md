# Cucumber with Playwright

This project demonstrates how to use Cucumber with Playwright for automated testing.

## Configuration

We will be using a `cucumber.json` file to override the default configuration provided by Cucumber when using it with Playwright.

### Step 1: Create or Update `cucumber.json`

Update the `cucumber.json` configuration file with the following changes:

1. Add a `default and formator` object:

   ```json
   "default": {
    "formatOptions": {
      "snippetInterface": "async-await"
    }
  }

2. Add a `path of feature file` object:

   ```json
   "path": ["src/test/features/*.feature"],

3. Add a `steps defination file` object:

   ```json
   "require": ["src/test/steps/*.js"]

