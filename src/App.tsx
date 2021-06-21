import React from 'react';
import styles from './App.module.scss';
import { Home } from './views';

function App(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.h1}>测试</div>
      </div>
      <Home />
    </div>
  );
}

export default App;
