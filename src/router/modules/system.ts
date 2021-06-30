import { Account, Role, Access } from 'src/views';

export const SystemRoute = [
  {
    id: 'system/account',
    name: '账号管理',
    path: 'account',
    url: 'system/account',
    component: Account,
  },
  {
    id: 'system/role',
    name: '角色管理',
    path: 'role',
    url: 'system/role',
    component: Role,
  },
  {
    id: 'system/access',
    name: '资源管理',
    path: 'access',
    url: 'system/access',
    component: Access,
  },
  {
    id: 'system/file',
    name: '文件管理',
    path: 'file',
    url: 'system/file',
    component: Access,
  },
];
