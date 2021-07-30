import BaseService from './base';
import { ILoginDto } from 'src/dto';
class LoginService extends BaseService {
  // 登录接口
  async loginApi<ILoginVo>(postData: ILoginDto) {
    return this.post<ILoginVo>('/admin/login', postData);
  }
}

export const loginService = new LoginService();
