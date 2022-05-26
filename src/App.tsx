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
import Form from "./components/Form";
import Flex from "./components/css/flex/flex";
import Grid from "./components/css/grid/grid";
import Dashboard from './components/EchartComponents/dashboard';
import Sin from "./components/EchartComponents/Sin";
import Transition from "./components/css/transitions"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Container />}>
        <Route index element={<Dashboard />} />
        <Route path="/components/transition" element={<Transition />} />
        <Route path="/components/barEcharts" element={<Bar />} />
        <Route path="/components/rowBar" element={<RowBar />} />
        <Route path="/components/radialPolar" element={<RadialPolar />} />
        <Route path="/components/modal" element={<Modal />} />
        <Route path="/components/form" element={<Form />} />
        <Route path="/components/flex" element={<Flex />} />
        <Route path="/components/grid" element={<Grid />} />
        <Route path="/components/dashboard" element={<Dashboard />} />
        <Route path="/components/Sin" element={<Sin />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
