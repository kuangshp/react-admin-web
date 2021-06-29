import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Access, Account, Home, Login, Role } from 'src/views';
import { App } from './App';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="system">
              <Route path="account" element={<Account />}></Route>
              <Route path="role" element={<Role />}></Route>
              <Route path="access" element={<Access />}></Route>
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>没有页面</h1>} />
        </Routes>
      </App>
    </HashRouter>
  );
};
