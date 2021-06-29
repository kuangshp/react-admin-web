import { Home } from 'src/views';
import { SystemRoute } from './modules/system';

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
