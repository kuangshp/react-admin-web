import BaseService from './base.service';

export class MenusService {
  static async menusApi<IMenusVo>(): Promise<IMenusVo> {
    return BaseService.get<IMenusVo>('/admin/menus');
  }
}
