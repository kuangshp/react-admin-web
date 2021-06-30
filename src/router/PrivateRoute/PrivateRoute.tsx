// import React, { PropsWithChildren } from 'react';
// import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
// import DocumentTitle from 'react-document-title';
// import { RootState, useSelector } from 'src/store';

import React from 'react';
import DocumentTitle from 'react-document-title';
import { Navigate, Route } from 'react-router-dom';
import { RootState, useSelector } from 'src/store';

// type Props = PropsWithChildren<RouteComponentProps>;
// // 创建一个私有路由的方法
// // eslint-disable-next-line
// export const PrivateRoute = ({ component, title, ...rest }: any): React.ReactElement => {
//   const token: string | null = useSelector((state: RootState) => state.user.token);
//   const routeComponent = (props: Props): React.ReactElement => {
//     return token || rest.path === '/login' ? (
//       React.createElement(component, props)
//     ) : (
//       <Redirect to="/login" />
//     );
//   };
//   return (
//     <DocumentTitle title={title}>
//       <Route render={routeComponent} {...rest} />
//     </DocumentTitle>
//   );
// };
export const foo = '';
// eslint-disable-next-line
export const PrivateRoute = ({ component: Component, path }: any): React.ReactElement => {
  const token: string | null = useSelector((state: RootState) => state.user.token);
  console.log('进来了', token);
  if (!token) {
    return <Navigate to="login" />;
  }
  return (
    <DocumentTitle title="自定义标题">
      <Route path={path} element={<Component />} />
    </DocumentTitle>
  );
};
