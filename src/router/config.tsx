import React from 'react';
import { Login } from 'src/views';
import { MainLayout } from 'src/layout';
import { HomeRoute } from './home';

export interface IRouteConfig {
  name: string;
  path: string;
  component?: React.FunctionComponent;
  children?: IRouteConfig[];
}
const GlobalRoute: IRouteConfig[] = [
  {
    name: '登录',
    path: '/login',
    component: Login,
  },
  {
    name: '首页 ',
    path: '/',
    // eslint-disable-next-line
    component: ({ children }): React.ReactElement => {
      return <MainLayout>{children}</MainLayout>;
    },
    children: HomeRoute,
  },
];
export default GlobalRoute;
