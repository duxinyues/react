/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-01 23:33:00
 * @FilePath: \react\src\App.tsx
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Suspense, lazy,useEffect } from "react";
import { useRoutes,useNavigate } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";
const Container = lazy(() => import('./components/Container'))
const NoMatch = lazy(() => import('./components/NoMatch'))
const Bar = lazy(() => import('./components/EchartComponents/Bar'));
const RowBar = lazy(() => import('./components/EchartComponents/RowBar'))
const RadialPolar = lazy(() => import('./components/EchartComponents/RadialPolar'))
const Modal = lazy(() => import('./components/Modal'));
const Flex = lazy(() => import('./components/css/flex/flex'));
const Grid = lazy(() => import('./components/css/grid/grid'));
const Dashboard = lazy(() => import('./components/EchartComponents/dashboard'))
const Sin = lazy(() => import('./components/EchartComponents/Sin'))
const Transition = lazy(() => import('./components/css/transitions'))
const Three = lazy(() => import('./components/Three'))
const Scene = lazy(() => import('./components/Three/scene'))
const Directory = lazy(() => import('./components/Widget/directory/directory'))
const ScatterChart = lazy(() => import('./components/EchartComponents/ScatterChart'))
const SortDrag = lazy(() => import('./components/SortDrag'));
const Three3D = lazy(() => import("./components/Three/3d"));
const Material = lazy(() => import("./components/Three/Material"));
const Light = lazy(() => import("./components/Three/Light"));
const Box = lazy(() => import("./components/Three/Box"));
const App1 = lazy(() => import('./components/Visualization/app1'));
const Drag = lazy(() => import("./components/moveable"));
const Resizable = lazy(() => import("./components/moveable/Resizable"));
const Login = lazy(() => import('./components/Widget/login'));

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
    const {localStorage} = useLocalStorage("login");
    const navigate = useNavigate();
    useEffect(()=>{
      if(!localStorage){
        navigate("/login")
      }
    },[])
  return (
    <Suspense fallback={<div className="react-container"><div className="progress-9"></div></div>}>
      {element}
    </Suspense>
  );
}

export default App;
