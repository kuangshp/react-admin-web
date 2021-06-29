import React from 'react';
import { Layout } from 'antd';
import styles from './MainFooter.module.scss';
const { Footer } = Layout;

export const MainFooter: React.FC = () => {
  return <Footer className={styles.footer}>版权所有</Footer>;
};
