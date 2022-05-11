import { Routes, Route } from "react-router-dom";
import menuItem from "./config/menu"
import Home from "./components/Home";
import allComponents from "./config/allComponents";
import Container from "./components/Container";
import NoMatch from "./components/NoMatch";
import Bar from "./components/EchartComponents/Bar";
import RowBar from "./components/EchartComponents/RowBar";
import RadialPolar from "./components/EchartComponents/RadialPolar"
import Modal from "./components/Modal";
import Form from "./components/Form/DXForm";
import Flex from "./components/css/flex/flex";
import Grid from "./components/css/grid/grid";
import Dashboard from './components/EchartComponents/dashboard';
import Duxinyue from './components/Duxin/duxinyue';
function App() {
  const Component = allComponents["Flex"];
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Container />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/barEcharts" element={<Bar />} />
        <Route path="/admin/rowBar" element={<RowBar />} />
        <Route path="/admin/radialPolar" element={<RadialPolar />} />
        <Route path="/admin/modal" element={<Modal />} />
        <Route path="/admin/form" element={<Form />} />
        <Route path="/admin/flex" element={<Flex />} />
        <Route path="/admin/grid" element={<Grid />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/duxinyues" element={<Duxinyue />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
