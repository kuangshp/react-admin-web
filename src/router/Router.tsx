import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'src/views';
import { App } from './App';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <App>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </App>
    </HashRouter>
  );
};
