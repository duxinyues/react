import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Container from "./components/Container";
import NoMatch from "./components/NoMatch";
import Bar from "./components/EchartComponents/Bar";
import RowBar from "./components/EchartComponents/RowBar";
import RadialPolar from "./components/EchartComponents/RadialPolar"
import Modal from "./components/Modal";
import Form from "./components/form";
import Flex from "./components/css/flex/flex";
import Grid from "./components/css/grid/grid";
import Dashboard from './components/EchartComponents/dashboard';
import Duxinyue from './components/Duxin/duxinyue';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Dashboard />} />
        <Route path="/barEcharts" element={<Bar />} />
        <Route path="/rowBar" element={<RowBar />} />
        <Route path="/radialPolar" element={<RadialPolar />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/form" element={<Form />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/duxinyues" element={<Duxinyue />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
