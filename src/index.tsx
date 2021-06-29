import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import './assets/css/global.scss';
import './assets/css/antd.css';
import { rootStore, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary, FullPageErrorFallback } from './components';
import { Router } from './router';

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
