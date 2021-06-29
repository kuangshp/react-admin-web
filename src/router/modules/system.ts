import { Account, Role, Access } from 'src/views';

export const SystemRoute = [
  {
    id: 'system/account',
    name: '账号管理',
    path: '/system/account',
    component: Account,
  },
  {
    id: 'system/role',
    name: '角色管理',
    path: '/system/role',
    component: Role,
  },
  {
    id: 'system/access',
    name: '资源管理',
    path: '/system/access',
    component: Access,
  },
];
