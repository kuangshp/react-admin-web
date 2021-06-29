export interface IMenus {
  /**ID */
  id: number;
  /** 标题 */
  name: string;
  /**父节点ID */
  parentId: number;
  /**路径 */
  url: string;
  /**排序 */
  sort: number;
  /**小图标 */
  icon?: string | null;
  /**子节点*/
  children?: IMenus[];
}

// 模拟后端返回菜单接口数据
export const menus: IMenus[] = [
  {
    id: 1,
    name: '系统管理',
    parentId: 0,
    url: 'system',
    sort: 6,
    icon: null,
  },
  {
    id: 2,
    name: '账号管理',
    parentId: 1,
    url: 'system/account',
    sort: 3,
    icon: null,
  },
  {
    id: 3,
    name: '角色管理',
    parentId: 1,
    url: 'system/role',
    sort: 4,
    icon: null,
  },
  {
    id: 4,
    name: '资源管理',
    parentId: 1,
    url: 'system/access',
    sort: 5,
    icon: null,
  },
];
