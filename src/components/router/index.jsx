import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import LayoutComponent from "./components/LayoutComponent";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutComponent />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="invoices/:invoiceId" element={<Invoice />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={() => {
                return <h4>无效路由</h4>
            }} />
        </Routes>
    );
}