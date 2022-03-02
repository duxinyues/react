import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link, useNavigate, useParams } from "react-router-dom";
import { Layout, Menu } from 'antd';
import LoginForm from "./Login";
const { Header, Content, Footer } = Layout;
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="login" element={<LoginForm />} />
                <Route path="*" element={() => {
                    return <h4>无效路由</h4>
                }} />
            </Routes>
        </div>
    );
}

function LayoutComponent() {
    const isLogin = localStorage.getItem("user")
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }
    }, [isLogin, navigate])
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key='1'>Home</Menu.Item>
                    <Menu.Item key='about'>about</Menu.Item>
                    <Menu.Item key='3'>nav3</Menu.Item>
                </Menu>
                <Outlet />
            </Header>
            <Content style={{ padding: '0 50px' }}>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

function Home() {
    return (
        <div>
            <h2>Home-----</h2>
        </div>
    );
}

function About(props) {
    console.log("props", props)
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    const navigate = useNavigate()
    console.log(useParams())
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={() => {
                navigate(`/`);
            }}>go</button>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
