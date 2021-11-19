import React from 'react';
import { ActivityService } from 'src/services';

export const Home: React.FC = () => {
  const getData = async () => {
    const data = await ActivityService.activityListApi();
    console.log(data, '返回的数据');
  };
  return (
    <>
      <div>首页</div>
      <button onClick={getData}>点击按钮</button>
    </>
  );
};
