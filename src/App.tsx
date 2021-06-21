import React from 'react';
import styles from './App.module.scss';
import { Home, Personal } from './views';
import { ErrorBoundary, FullPageErrorFallback } from 'components';
import { HashRouter, Link } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
function App(): React.ReactElement {
  return (
    <div className={styles.container}>
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <HashRouter>
          <ul>
            <li>
              <Link to="/">到首页</Link>
            </li>
            <li>
              <Link to="/personal">到个人中心</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Navigate to="/" />
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
