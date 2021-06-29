import { Home } from 'src/pages';
import { SystemRoute } from './system';

export const HomeRoute = [
  {
    id: 'index',
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    id: 'system',
    name: '系统',
    path: '/system',
    children: SystemRoute,
  },
];
