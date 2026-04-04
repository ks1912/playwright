import { BaseAgent } from './base.agent';

export class AuthAgent extends BaseAgent {

  async login(username: string, password: string) {
    await this.page.goto('/');
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async loginAsStandardUser() {
    await this.login('standard_user', 'secret_sauce');
  }
}