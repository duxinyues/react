import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link, useNavigate, useParams } from "react-router-dom";
import LoginForm from "./Login";
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
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

function Layout() {
    const isLogin = localStorage.getItem("user")
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate('/login')
        }
    }, [isLogin, navigate])
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                    <li onClick={() => {
                        localStorage.clear();
                        navigate('/login')
                    }}>
                        退出
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
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
