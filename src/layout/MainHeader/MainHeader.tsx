import React, { useState } from 'react';
import { Layout, Dropdown, Menu, Modal } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './MainHeader.module.scss';
import { ModifyPasswordModal } from './components';
import { useSelector, RootState } from 'src/store';
import { collapsedSlice } from 'src/store/slice/collapsed.slice';
import { userSlice } from 'src/store/slice/user.slice';

export const MainHeader: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModifyVisible, setIsModifyVisible] = useState<boolean>(false);
  const username: string | null = useSelector((state: RootState) => state.user.username);
  const collapsed: boolean = useSelector((state: RootState) => state.collapsed.collapsed);

  // 打开和关闭左侧菜单按钮事件
  const toggleHandler = () => {
    dispatch(collapsedSlice.actions.toggleMenusCollapsed());
  };

  // 退出登录
  const logoutHandler = () => {
    console.log('点击了退出');
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: <h3>您确定要退出系统？</h3>,
      onOk() {
        dispatch(userSlice.actions.logout());
        setTimeout(() => navigate('/login'), 1000);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  // 修改密码
  const modifyHandler = () => {
    setIsModifyVisible(true);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <div>个人设置</div>
      </Menu.Item>
      <Menu.Item onClick={modifyHandler}>
        <div>修改密码</div>
      </Menu.Item>
      <Menu.Item onClick={logoutHandler}>
        <div>退出</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout.Header className={styles['app-header']} style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: `${styles.trigger}`,
        onClick: toggleHandler,
      })}
      <div className={styles['header-view']}>
        {/* 用户中心 */}
        <div className={styles['user-info']}>
          <span>{username ? username : ''}</span>
          <Dropdown overlay={menu}>
            <img
              className={styles.avatar}
              src={'http://amin-1302640623.cos.ap-nanjing.myqcloud.com/tmp/cat.jpg'}
              alt="用户头像"
            />
          </Dropdown>
        </div>
      </div>
      {/* 修改密码弹框 */}
      <ModifyPasswordModal
        isModifyVisible={isModifyVisible}
        setIsModifyVisible={setIsModifyVisible}
      />
    </Layout.Header>
  );
};
