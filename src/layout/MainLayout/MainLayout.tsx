import React from 'react';
import { Layout } from 'antd';
import { MainSideNav, MainHeader, MainFooter } from './..';
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Layout className={styles.content}>
        {/* 侧边栏组件 */}
        <MainSideNav />
        <Layout>
          {/* 头部组件 */}
          <MainHeader />
          {/* 内容体 */}
          <Layout.Content className={styles['view-content']}>
            <div className={styles.container}>{children}</div>
          </Layout.Content>
          {/* 底部 */}
          <Layout.Footer>
            <MainFooter />
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
};
