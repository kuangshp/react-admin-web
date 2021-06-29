import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { login } from 'src/store/slice/user.slice';
import { useSelector, RootState } from 'src/store';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.user.token);
  const loading = useSelector((state: RootState) => state.user.loading);
  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);
  // 提交事件
  // eslint-disable-next-line
  const onFinish = (values: { username: string; password: string }) => {
    console.log('Success:', values, typeof values);
    const postData = {
      username: values.username,
      password: values.password,
    };
    dispatch(login(postData));
  };
  // 失败的提示
  // eslint-disable-next-line
  const onFinishFailed = (errorInfo: any) => {
    // 取出第一个的错误提示出来
    message.warning(errorInfo);
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-panel']}>
        <div className={styles.title}>后台管理系统平台</div>
        <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles['login-btn']}
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
          <div className={styles.tools}>账号和密码:admin/123456</div>
        </Form>
      </div>
    </div>
  );
};
