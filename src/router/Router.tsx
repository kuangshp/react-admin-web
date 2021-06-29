import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Access, Account, Home, Login, Role } from 'src/views';
import { App } from './App';
import { RootState, useSelector } from 'src/store';

export const Router: React.FC = () => {
  const token: string | null = useSelector((state: RootState) => state.user.token);
  console.log(token, '当前token');
  return (
    <HashRouter>
      <App>
        <Routes>
          {token ? (
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="system">
                <Route path="account" element={<Account />} />
                <Route path="role" element={<Role />} />
                <Route path="access" element={<Access />} />
              </Route>
            </Route>
          ) : null}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </App>
    </HashRouter>
  );
};
