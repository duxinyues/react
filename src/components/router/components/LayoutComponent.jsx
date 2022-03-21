import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Context } from "./context";
import '../style/layout.scss';
const { Header, Content, Footer } = Layout;
function LayoutComponent() {
  const isLogin = localStorage.getItem("user")
  const [value, setValue] = useState({ name: "duXinYue" })
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) {
      navigate('/login')
    }
  }, [isLogin, navigate])
  return (
    <Context.Provider value={value}>
      <Layout className="layout">
        <Header style={{ display: "flex" }}>
          {/* <span className="logo" onClick={() => {
            const time = new Date().getTime();
            setValue({ name: "更新" + time })
          }} >更新</span> */}
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
    </Context.Provider>
  );
}

export default LayoutComponent