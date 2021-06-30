import React from 'react';
import { Home } from 'src/views';
import { SystemRoute } from './modules/system';

export interface IRouteConfig {
  id: number | string;
  name: string;
  path: string;
  component?: React.FunctionComponent;
  children?: IRouteConfig[];
}
export const GlobalRoute: IRouteConfig[] = [
  {
    id: '1',
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    id: '2',
    name: '系统',
    path: '/system',
    children: SystemRoute,
  },
];
