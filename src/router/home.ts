import React from 'react';
import { Home } from 'src/views';
import { SystemRoute } from './modules/system';

export interface IRouteConfig {
  id: number | string;
  name: string;
  path: string;
  url: string;
  component?: React.FunctionComponent;
  children?: IRouteConfig[];
}
export const GlobalRoute: IRouteConfig[] = [
  {
    id: '1',
    name: '首页',
    path: '/home',
    url: '/home',
    component: Home,
  },
  {
    id: '2',
    name: '系统',
    path: '/system',
    url: '/system',
    children: SystemRoute,
  },
];
