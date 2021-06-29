import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { RootState, useSelector } from 'src/store';
import { Login } from 'src/views';

/**创建一个私有路由的方法 */
export const PrivateRoute = ({ component, title, ...rest }: any): React.ReactElement => {
  console.log('component', component, title);
  const token: string | null = useSelector((state: RootState) => state.user.token);
  const routeComponent = (props: any): React.ReactElement => {
    return token || rest.path === '/login' ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/login" />
    );
  };
  console.log(routeComponent, '??', rest);
  return (
    <DocumentTitle title={title}>
      <Route element={<Login />} {...rest} />
    </DocumentTitle>
  );
};
