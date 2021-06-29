import BaseService from './base';

interface ILoginParams {
  username: string;
  password: string;
}

class LoginService extends BaseService {
  // 登录接口
  async loginApi(postData: ILoginParams) {
    // eslint-disable-next-line
    return this.post('/admin/login', postData);
  }
}

export const loginService = new LoginService();
