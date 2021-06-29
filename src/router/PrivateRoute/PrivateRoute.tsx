import React, { PropsWithChildren } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { RootState, useSelector } from 'src/store';

type Props = PropsWithChildren<RouteComponentProps>;
// 创建一个私有路由的方法
// eslint-disable-next-line
export const PrivateRoute = ({ component, title, ...rest }: any): React.ReactElement => {
  const token: string | null = useSelector((state: RootState) => state.user.token);
  const routeComponent = (props: Props): React.ReactElement => {
    return token || rest.path === '/login' ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/login" />
    );
  };
  return (
    <DocumentTitle title={title}>
      <Route render={routeComponent} {...rest} />
    </DocumentTitle>
  );
};
