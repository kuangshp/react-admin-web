import React from 'react';

export const Home: React.FC = () => {
  const errorHandler = () => {
    console.log('测试');
  };

  return (
    <>
      <h1 onClick={errorHandler}>首页</h1>
    </>
  );
};
