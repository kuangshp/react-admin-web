import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Access, Account, Home, Login, Role } from 'src/views';
import { App } from './App';
import { RootState, useSelector } from 'src/store';
import { PrivateRoute } from './PrivateRoute';

export const Router: React.FC = () => {
  const token: string | null = useSelector((state: RootState) => state.user.token);
  console.log(token, '当前token');
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="system">
              <PrivateRoute path="account" component={Account} />
              <PrivateRoute path="role" component={Role} />
              <PrivateRoute path="access" component={Access} />
            </Route>
            <Route path="/" element={<Navigate to="home" />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </App>
    </HashRouter>
  );
};
