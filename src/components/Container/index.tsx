/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-07 22:46:19
 * @FilePath: \react\src\components\Container\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Outlet, useNavigate } from
  "react-router-dom"
import { Layout, Menu, MenuProps } from "antd";
import './container.scss';
import menuItem from "../../config/menu";

const { Content, Footer, Sider } = Layout;
const items: MenuProps['items'] = menuItem.map(
  (item, index) => {
    return {
      key: index,
      label: item.title,
      children: item.subs?.map((items, key) => {
        return {
          key: items.router,
          label: items.title,
          kaypath: items.router
        };
      }),
    };
  },
);
export default function Container() {
  const navigate = useNavigate()
  const onChangeRouter = (router: string) => { navigate(router) }
  return (<Layout className="layout">
    <Layout>
      <Sider className="sider">
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['0']}
          style={{ height: '100%', borderRight: 0 }}
          items={items}
          onClick={({ key }) => onChangeRouter(key)}
        />
      </Sider>
      <Content className="content">
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>React 实例 {new Date().getFullYear()}</Footer>
      </Content>
    </Layout>
  </Layout>
  );
}