/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-30 16:21:50
 * @FilePath: \react\src\App.tsx
 * @Description:
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Suspense, lazy, useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";
const Container = lazy(() => import("./components/Container"));
const NoMatch = lazy(() => import("./components/NoMatch"));
const Bar = lazy(() => import("./components/EchartComponents/Bar"));
const RowBar = lazy(() => import("./components/EchartComponents/RowBar"));
const RadialPolar = lazy(
  () => import("./components/EchartComponents/RadialPolar")
);
const Modal = lazy(() => import("./components/Modal"));
const Flex = lazy(() => import("./components/css/flex/flex"));
const Grid = lazy(() => import("./components/css/grid/grid"));
const Dashboard = lazy(() => import("./components/EchartComponents/dashboard"));
const Sin = lazy(() => import("./components/EchartComponents/Sin"));
const Transition = lazy(() => import("./components/css/transitions"));
const Three = lazy(() => import("./components/Three"));
const Scene = lazy(() => import("./components/Three/scene"));
const Directory = lazy(() => import("./components/Widget/directory/directory"));
const ScatterChart = lazy(
  () => import("./components/EchartComponents/ScatterChart")
);
const SortDrag = lazy(() => import("./components/SortDrag"));
const Three3D = lazy(() => import("./components/Three/3d"));
const Material = lazy(() => import("./components/Three/Material"));
const Light = lazy(() => import("./components/Three/Light"));
const Box = lazy(() => import("./components/Three/Box"));
const App1 = lazy(() => import("./components/Visualization/app1"));
const Drag = lazy(() => import("./components/moveable"));
const Resizable = lazy(() => import("./components/moveable/Resizable"));
const Login = lazy(() => import("./components/Widget/login"));
const Table = lazy(() => import("./components/Tables"));
const Comm = lazy(() => import("./components/React"));
const Dnd = lazy(() => import("./components/Dnd"));
const Params = lazy(() => import("./components/Dnd/Params"));

const loadRouter = (children: React.ReactNode) => (
  <Suspense
    fallback={
      <div className="react-container">
        <div className="progress-9"></div>
      </div>
    }
  >
    {children}
  </Suspense>
);
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: loadRouter(<Dnd />),
      children: [
        {
          index: true,
          path: "/",
          element: loadRouter(<Dashboard />),
        },
      ],
    },
    {
      path: "/params/:id",
      element: loadRouter(<Params />),
    },
    {
      path: "/params11",
      element: loadRouter(<Params />),
    },
    {
      path: "/components",
      element: loadRouter(<Container />),
      children: [
        {
          index: true,
          path: "/components/dashboard",
          element: loadRouter(<Dashboard />),
        },
        { path: "/components/transition", element: loadRouter(<Transition />) },
        { path: "/components/barEcharts", element: loadRouter(<Bar />) },
        { path: "/components/modal", element: loadRouter(<Modal />) },
        { path: "/components/flex", element: loadRouter(<Flex />) },
        { path: "/components/grid", element: loadRouter(<Grid />) },
        { path: "/components/Three", element: loadRouter(<Three />) },
        { path: "/components/rowBar", element: loadRouter(<RowBar />) },
        {
          path: "/components/radialPolar",
          element: loadRouter(<RadialPolar />),
        },
        { path: "/components/Scene", element: loadRouter(<Scene />) },
        { path: "/components/Material", element: loadRouter(<Material />) },
        { path: "/components/Light", element: loadRouter(<Light />) },
        { path: "/components/Box", element: loadRouter(<Box />) },
        {
          path: "/components/ScatterChart",
          element: loadRouter(<ScatterChart />),
        },
        { path: "/components/SortDrag", element: loadRouter(<SortDrag />) },
        { path: "/components/Sin", element: loadRouter(<Sin />) },
        { path: "/components/table", element: loadRouter(<Table />) },
        { path: "/components/react", element: loadRouter(<Comm />) },
      ],
    },
    {
      path: "/widget",
      element: <Container />,
      children: [
        { path: "/widget/directory", element: loadRouter(<Directory />) },
      ],
    },
    { path: "/app1", element: loadRouter(<App1 />) },
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
      ],
    },
    { path: "/three3d", element: loadRouter(<Three3D />) },
    { path: "/login", element: loadRouter(<Login />) },
    { path: "*", element: loadRouter(<NoMatch />) },
  ]);
  const { localStorage } = useLocalStorage("login");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage) {
      // navigate("/login")
    }
  }, []);
  return element;
}

export default App;
