import React from 'react';
import { Button } from 'antd';

export const Home: React.FC = () => {
  const errorHandler = () => {
    console.log('测试');
  };

  return (
    <>
      <Button type="primary">按钮</Button>
      <h1 onClick={errorHandler}>首页</h1>
    </>
  );
};
