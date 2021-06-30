import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Login } from 'src/views';
import { App } from './App';
import { PrivateRoute } from './PrivateRoute';
import { GlobalRoute, IRouteConfig } from './home';

export const Router: React.FC = () => {
  const renderRoutesHandler = (renderRoutes: IRouteConfig[]) => {
    return renderRoutes.map((item: IRouteConfig) => {
      return item.children?.length ? (
        <React.Fragment key={item.id}>
          <Route path={item.path}>{renderRoutesHandler(item.children)}</Route>
        </React.Fragment>
      ) : (
        <React.Fragment key={item.id}>
          <PrivateRoute
            path={item.path}
            component={item.component}
            title={item.name}
            url={item.url}
          />
        </React.Fragment>
      );
    });
  };
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route element={<MainLayout />}>
            {renderRoutesHandler(GlobalRoute)}
            {/* <Route path="/home" element={<Home />} />
            <Route path="system">
              <PrivateRoute path="account" component={Account} />
              <PrivateRoute path="role" component={Role} />
              <PrivateRoute path="access" component={Access} />
            </Route> */}
            <Route path="*" element={<h1>没找到页面</h1>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </App>
    </HashRouter>
  );
};
