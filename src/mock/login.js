import Mock from 'mockjs';

export const loginApi = Mock.mock('/login', 'post', (data) => {
  const { username, password } = JSON.parse(data.body);
  console.log(username, password);
  return {
    code: 0,
    message: '登录成功',
    result: {
      username,
      token: 'xxx',
    },
  };
});
