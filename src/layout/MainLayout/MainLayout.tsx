import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainSideNav, MainHeader, MainFooter } from './..';
import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = () => {
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
            <div className={styles.container}>
              <Outlet />
            </div>
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
