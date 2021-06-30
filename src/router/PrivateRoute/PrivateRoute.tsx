import React from 'react';
import DocumentTitle from 'react-document-title';
import { Navigate, Route } from 'react-router-dom';
import { authToken } from '../../constants';
import { storage } from '../../utils';

interface Props {
  component: React.FunctionComponent | undefined;
  path: string;
  title: string;
  url: string;
}
export const PrivateRoute = (props: Props): React.ReactElement | null => {
  const { component: Component, path, title } = props;
  // 这里使用自定义的方式获取token,因为前端自定义了token失效时间
  const token: string | null = storage.getItem(authToken);
  console.log('进来了', token, path);
  if (!Component) return null;
  if (!token) {
    return <Navigate to="/login" />;
  }
  // TODO 判断当前路径是否在后端返回的接口菜单中
  return (
    <DocumentTitle title={title}>
      <Route path={path} element={<Component />} />
    </DocumentTitle>
  );
};
