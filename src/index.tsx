import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';

import { rootStore, persistor } from './store';
import { ErrorBoundary, FullPageErrorFallback } from './components';
import { Router } from './router';

import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import './assets/css/global.scss';
import './assets/css/antd.css';
// mock数据
// import './mock/index.js';

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={zhCN}
        getPopupContainer={() => document.getElementById('root') || document.createElement('div')}
      >
        <Provider store={rootStore}>
          <PersistGate persistor={persistor}>
            <ErrorBoundary fallbackRender={FullPageErrorFallback}>
              <Router />
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
