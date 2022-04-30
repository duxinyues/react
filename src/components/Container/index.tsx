import React from "react";
import { Outlet, useNavigate } from
  "react-router-dom"
import { Layout } from "antd";
import './container.scss';
import menuItem from "../../config/menu";
const { Content, Footer, Sider } = Layout;
export default function Container() {
  const navigate = useNavigate()
  const onChangeRouter = (router: any) => { navigate(router) }
  return (<Layout className="layout">
    <Layout>
      <Sider className="sider">
        {
          menuItem.map((item: any) => (<span key={item.title} className="menuItem pulse" onClick={() => { onChangeRouter(item.router) }}>{item.title}</span>))
        }
      </Sider>
      <Content className="content">
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>React 实例 {new Date().getFullYear()}</Footer>
      </Content>
    </Layout>
  </Layout>
  );
}