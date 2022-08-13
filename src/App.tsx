/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-08-13 15:40:37
 * @FilePath: \react\src\App.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Container from "./components/Container";
import NoMatch from "./components/NoMatch";
import Bar from "./components/EchartComponents/Bar";
import RowBar from "./components/EchartComponents/RowBar";
import RadialPolar from "./components/EchartComponents/RadialPolar"
import Modal from "./components/Modal";
import Flex from "./components/css/flex/flex";
import Grid from "./components/css/grid/grid";
import Dashboard from './components/EchartComponents/dashboard';
import Sin from "./components/EchartComponents/Sin";
import Transition from "./components/css/transitions";
import Three from "./components/Three";
import Scene from "./components/Three/scene";
import Directory from "./components/Widget/directory/directory";
import ScatterChart from "./components/EchartComponents/ScatterChart";
import SortDrag from "./components/SortDrag";
const Three3D = lazy(() => import("./components/Three/3d"));
const Material = lazy(() => import("./components/Three/Material"));
const Light = lazy(() => import("./components/Three/Light"));
const Box = lazy(() => import("./components/Three/Box"));
const App1 = lazy(() => import('./components/Visualization/app1'));
const Drag = lazy(() => import("./components/moveable"));
const Resizable = lazy(() => import("./components/moveable/Resizable"));
const Login =lazy(()=>import('./components/Widget/login'));

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          index: true,
          path: "/",
          element: <Dashboard />,
        },
      ]
    },
    {
      path: "/components",
      element: <Container />,
      children: [
        {
          index: true,
          path: "/components/dashboard",
          element: <Dashboard />,
        },
        { path: "/components/transition", element: <Transition /> },
        { path: "/components/barEcharts", element: <Bar /> },
        { path: "/components/modal", element: <Modal /> },
        { path: "/components/flex", element: <Flex /> },
        { path: "/components/grid", element: <Grid /> },
        { path: "/components/Three", element: <Three /> },
        { path: "/components/rowBar", element: <RowBar /> },
        { path: "/components/radialPolar", element: <RadialPolar /> },
        { path: "/components/Scene", element: <Scene /> },
        { path: "/components/Material", element: <Material /> },
        { path: "/components/Light", element: <Light /> },
        { path: "/components/Box", element: <Box /> },
        { path: "/components/ScatterChart", element: <ScatterChart /> },
        { path: "/components/SortDrag", element: <SortDrag /> },
        { path: "/components/Sin", element: <Sin /> },
      ],
    },
    {
      path: "/widget",
      element: <Container />,
      children: [
        { path: "/widget/directory", element: <Directory /> },
      ]
    },
    { path: "/app1", element: <App1 /> },
    {
      path: "/move",
      element: <Container />,
      children: [
        {
          index: true,
          path: "/move/drag",
          element: <Drag />,
        },
        {
          index: true,
          path: "/move/resizable",
          element: <Resizable />,
        },
      ]
    },
    { path: "/three3d", element: <Three3D /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NoMatch /> },])
  return (
    <Suspense fallback={<div>loading</div>}>
      {element}
    </Suspense>
  );
}

export default App;
