import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { FolderOpenOutlined, FileTextOutlined } from '@ant-design/icons';
import { useSelector, RootState } from 'src/store';
import styles from './MainSideNav.module.scss';
import { getTreeList } from 'src/utils';
import { IMenusVo } from '../../vo';

export const MainSideNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed: boolean = useSelector((state: RootState) => state.collapsed.collapsed);
  const [menusDataList, setMenusDataList] = useState<IMenusVo[]>([]);
  const [selectKey, setSelectKey] = useState<string[]>([]);
  const [openKey, setOpenKey] = useState<string[]>([]);
  const menus = useSelector((state: RootState) => state.menus.menusList);
  // 初始化菜单(格式化成树结构)
  const initMenus = useCallback(() => {
    const menusTree = getTreeList(menus);
    console.log(menusTree);
    setMenusDataList(menusTree);
  }, [menus]);

  useEffect(() => {
    initMenus();
    // eslint-disable-next-line
  }, []);

  // 刷新的时候默认选中
  useMemo(() => {
    if (Object.is(location.pathname, '/home')) {
      setSelectKey([]);
      setOpenKey(['home']);
    } else {
      setSelectKey([location.pathname.replace('/', '')]);
      setOpenKey([location.pathname.split('/')[1]]);
    }
  }, [location]);

  // 切换菜单
  // eslint-disable-next-line
  const selectMenuHandler = (ev: any) => {
    const { key } = ev;
    const toPath = key && key.startsWith('/') ? key : `/${key}`;
    // 设置当前选中的
    setSelectKey(key);
    navigate(toPath);
  };
  // 点击切换菜单
  const onOpenChange = (openKeys: React.Key[]) => {
    if (openKeys.length) {
      const lastOpenKey: string = openKeys[openKeys.length - 1] as string;
      setOpenKey(lastOpenKey ? [lastOpenKey] : []);
    } else {
      setOpenKey([]);
    }
  };
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} className={styles['app-side']}>
      <div className={styles.logo} onClick={() => navigate('/home')} />
      {/* 遍历菜单开始 */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectKey}
        openKeys={openKey}
        onClick={selectMenuHandler}
        onOpenChange={onOpenChange}
      >
        {menusDataList.map((item: IMenusVo) => {
          const renderMenu = (item: IMenusVo) => {
            if (item.children && item.children.length) {
              return (
                <Menu.SubMenu
                  key={item.url}
                  icon={item.icon ? item.icon : <FolderOpenOutlined />}
                  title={item.name}
                >
                  {item.children.map((childrenItem: IMenusVo) => renderMenu(childrenItem))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.url} icon={item.icon ? item.icon : <FileTextOutlined />}>
                  {item.name}
                </Menu.Item>
              );
            }
          };
          return renderMenu(item);
        })}
      </Menu>
      {/* 遍历菜单结束 */}
    </Layout.Sider>
  );
};
