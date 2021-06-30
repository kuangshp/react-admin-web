import Mock from 'mockjs';

const menusList = [
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

export const menusApi = Mock.mock('/menus', 'get', () => {
  return {
    code: 0,
    message: '登录成功',
    result: menusList,
  };
});
