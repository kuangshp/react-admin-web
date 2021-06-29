import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { RootState, useSelector } from 'src/store';

/**创建一个私有路由的方法 */
export const PrivateRoute = ({ component, title, ...rest }: any): React.ReactElement => {
  const token: string | null = useSelector((state: RootState) => state.user.token);
  const routeComponent = (props: any): React.ReactElement => {
    return token || rest.path === '/login' ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/login" />
    );
  };
  return (
    <DocumentTitle title={title}>
      <Route render={routeComponent} {...rest} />
    </DocumentTitle>
  );
};
