import React, { useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
function LayoutComponent() {
  const isLogin = localStorage.getItem("user")
  const navigate = useNavigate()
  useEffect(() => {
    console.log(isLogin)
    if (!isLogin) {
      navigate('/login')
    }
  }, [isLogin, navigate])
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key='about'><Link to='about'>about</Link></Menu.Item>
          <Menu.Item key='3'><Link to='dashboard'>dashboard</Link></Menu.Item>
        </Menu>

      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default LayoutComponent