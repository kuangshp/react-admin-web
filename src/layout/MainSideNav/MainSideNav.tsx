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
    setMenusDataList(menusTree);
  }, [menus]);

  useEffect(() => {
    initMenus();
    // eslint-disable-next-line
  }, []);

  // 刷新的时候默认选中
  useMemo(() => {
    if (Object.is(location.pathname, '/home')) {
      console.log('跳转到首页', location.pathname);
      setSelectKey([]);
      setOpenKey([]);
    } else {
      setSelectKey([location.pathname]);
      // const openMenusKey = findMenus(menusDataList, location.pathname) as string;
      // setOpenKey([openMenusKey]);
    }
  }, [location]);

  // 切换菜单
  // eslint-disable-next-line
  const selectMenuHandler = (ev: any) => {
    console.log('当前菜单', ev);
    const { key } = ev;
    const toPath = key && key.startsWith('/') ? key : `/${key}`;
    // 设置当前选中的
    // setSelectKey(key);
    console.log(openKey, selectKey);
    navigate(toPath);
  };
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} className={styles['app-side']}>
      <div className={styles.logo} onClick={() => navigate('/home')} />
      {/* 遍历菜单开始 */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectKey}
        defaultOpenKeys={openKey}
        // selectedKeys={selectKey}
        // openKeys={openKey}
        onClick={selectMenuHandler}
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
