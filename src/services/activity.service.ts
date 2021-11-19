import BaseService from './base.service';

export class ActivityService {
  // 登录接口
  static async activityListApi(): Promise<unknown> {
    return BaseService.get('/front/activity', { pageNumber: '', title: '上海', pageSize: 20 });
  }
}
