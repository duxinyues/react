import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import '../style/layout.scss';
import menuItem from "../config/menu";
const { Header, Content, Footer, Sider } = Layout;
function LayoutComponent() {
  const navigate = useNavigate()
  const onChangeRouter = (router) => { navigate(router) }
  return (<Layout className="layout">
    {/* <Header style={{ display: "flex" }}>
     
    </Header> */}
    <Layout>
      <Sider className="sider">
        {
          menuItem.map(item => (<span key={item.title} className="menuItem pulse" onClick={() => { onChangeRouter(item.router) }}>{item.title}</span>))
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

export default LayoutComponent