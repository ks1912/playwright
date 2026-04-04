import { Page } from '@playwright/test';

export class BaseAgent {
  constructor(protected page: Page) {}
}
