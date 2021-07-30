import BaseService from './base';

class MenusService extends BaseService {
  async menusApi<IMenusVo>() {
    return this.get<IMenusVo>('/admin/menus');
  }
}

export const menusService = new MenusService();
