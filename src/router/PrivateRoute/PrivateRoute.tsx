// import React, { PropsWithChildren } from 'react';
// import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
// import DocumentTitle from 'react-document-title';
// import { RootState, useSelector } from 'src/store';

import React from 'react';
import DocumentTitle from 'react-document-title';
import { Navigate, Route } from 'react-router-dom';
import { RootState, useSelector } from 'src/store';

interface Props {
  component: React.FunctionComponent | undefined;
  path: string;
  title: string;
}
export const PrivateRoute = (props: Props): React.ReactElement | null => {
  const { component: Component, path, title } = props;
  const token: string | null = useSelector((state: RootState) => state.user.token);
  console.log('进来了', token, path);
  // TODO 判断当前路径是否在后端返回的接口菜单中
  if (!Component) return null;
  if (!token) {
    return <Navigate to="login" />;
  }
  return (
    <DocumentTitle title={title}>
      <Route path={path} element={<Component />} />
    </DocumentTitle>
  );
};
