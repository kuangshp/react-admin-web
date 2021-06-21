import React from 'react';
import styles from './App.module.scss';
import { Home } from './views';
import { ErrorBoundary, FullPageErrorFallback } from 'components';

function App(): React.ReactElement {
  return (
    <div className={styles.container}>
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
