import React from 'react';
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import { useUrlQueryParam } from 'src/hooks';
// https://reacttraining.com/blog/react-router-v6-pre/
export const Personal: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  console.log(params, location, searchParams);
  const [param, setParam] = useUrlQueryParam(['name', 'age']);
  console.log(param, '当前参数');
  const goHomeHandler = () => {
    navigate('/', { replace: true });
  };

  const setParamHandler = () => {
    setParam({
      name: 'hello',
      age: 20,
    });
  };
  return (
    <>
      <h2>个人中心</h2>
      <button onClick={setParamHandler}>设置参数</button>
      <button onClick={goHomeHandler}>跳转到首页</button>
    </>
  );
};
