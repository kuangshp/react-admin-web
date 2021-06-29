import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { App } from './App';
import { PrivateRoute } from './PrivateRoute';
import GlobalRoute, { IRouteConfig } from './config';

export const Router: React.FC = () => {
  // 递归渲染组件的方法
  const renderRoutes = (routes: IRouteConfig[], parentPath?: string) => {
    return (
      <Switch>
        {parentPath ? <Redirect from={parentPath} to={routes[0].path} exact /> : null}
        {routes.map(({ path, children, component, name }) =>
          children && children.length ? (
            <React.Fragment key={path}>
              {component ? (
                component({ children: renderRoutes(children, path) })
              ) : (
                <React.Fragment key={path}>{renderRoutes(children, path)}</React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <PrivateRoute
              key={path}
              path={path}
              title={name}
              component={component}
              exact
            ></PrivateRoute>
          )
        )}
        <Route render={() => <h1>未找到匹配的页面</h1>} />
      </Switch>
    );
  };
  return (
    <HashRouter>
      <App>{renderRoutes(GlobalRoute)}</App>
    </HashRouter>
  );
};
