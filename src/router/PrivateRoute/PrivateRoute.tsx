import React from 'react';
import DocumentTitle from 'react-document-title';
import { Navigate, Route } from 'react-router-dom';
import { RootState, useSelector } from 'src/store';
import { authToken } from '../../constants';
import { storage } from '../../utils';
import { Home } from '../../views';
import { IMenusVo } from '../../vo';

interface Props {
  component: React.FunctionComponent | undefined;
  path: string;
  title: string;
  url: string;
}
export const PrivateRoute = (props: Props): React.ReactElement | null => {
  const { component: Component, path, title, url } = props;
  // 这里使用自定义的方式获取token,因为前端自定义了token失效时间
  const token: string | null = storage.getItem(authToken);
  const menusList = useSelector((state: RootState) => state.menus.menusList);
  if (!Component) return null;
  if (!token) {
    return <Navigate to="/login" />;
  }
  // 判断当前路径是否在后端返回的接口菜单中
  const currentRoute = menusList.find((item: IMenusVo) => item.url === url);
  if (currentRoute) {
    return (
      <DocumentTitle title={title}>
        <Route path={path} element={<Component />} />
      </DocumentTitle>
    );
  } else if (path === '/home') {
    return (
      <DocumentTitle title="首页">
        <Route path="/home" element={<Home />} />
      </DocumentTitle>
    );
  } else {
    return <Navigate to="/home" replace={true} />;
  }
};
