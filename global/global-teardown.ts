import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Cleaning up after test execution...');

  // Example:
  // - Delete test data via API
  // - Clear temp files
  // - Reset environment

}

export default globalTeardown;