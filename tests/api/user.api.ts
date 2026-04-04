import { BaseAPI } from '../../pages/base/base_api';

export class UserAPI extends BaseAPI {

  async login(username: string, password: string) {
    const response = await this.request.post('/login', {
      data: { username, password },
    });

    return response;
  }

  async getUsers() {
    return await this.request.get('/users');
  }
}