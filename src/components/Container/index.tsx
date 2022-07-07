/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-04 23:54:49
 * @FilePath: \react\src\components\Container\index.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { useEffect } from 'react';
import { Outlet, useNavigate } from
  "react-router-dom"
import { Layout, Menu, MenuProps } from "antd";
import './container.scss';
import menuItem from "../../config/menu";
const request = require("request");

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
  // const data = {
  //   name: "textCode",
  //   access_token: 'ffd1b3420642f783717d955528a731fa',
  //   description: "测试",
  // }
  // useEffect(() => {
  //   fetch("https://gitee.com/api/v5/user/repos", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": " application/json;charset=UTF-8",
  //     },
  //     body: JSON.stringify(data),
  //   }).then(res => {
  //     console.log("===", res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])

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