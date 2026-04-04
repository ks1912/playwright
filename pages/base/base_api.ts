import { APIRequestContext, request } from '@playwright/test';

export class BaseAPI {
  protected request!: APIRequestContext;

  async init(baseURL: string) {
    this.request = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }
}