/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-10 23:31:18
 * @FilePath: \react\src\config\menu.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const menuItem = [
  {
    title: "图标库",
    key: "1",
    router: null,
    subs: [
      { title: "dashboard", router: "/components/dashboard", component: "Dashboard" },
      { title: "柱状图", router: "/components/barEcharts", component: "Bar" },
      { title: "条形图", router: "/components/rowBar", component: "RowBar" },
      { title: "扇形图", router: "/components/radialPolar", component: "RadialPolar" },
      { title: "数学函数", router: "/components/Sin", component: "Sin" },
      { title: "散点图", router: "/components/ScatterChart", component: "ScatterChart" },
    ]
  },
  {
    title: "CSS",
    key: "2",
    router: null,
    subs: [
      { title: "flex", router: "/components/flex", component: "Flex" },
      { title: "grid", router: "/components/grid", component: "Grid" },
      { title: "动画", router: "/components/transition", component: "Transition" },
    ]
  },
  {
    title: "THREE",
    key: "3",
    router: null,
    subs: [
      { title: "实例", router: "/components/Three", component: "Three" },
      { title: "场景", router: "/components/Scene", component: "Scene" },
      { title: "材质", router: "/components/Material", component: "Material" },
      { title: "光源", router: "/components/Light", component: "Light" },
      { title: "几何", router: "/components/Box", component: "Box" },
    ]
  },
  // {
  //   title: "自定义组件",
  //   key: "-1",
  //   router: null,
  //   subs: [
  //     { title: "自定义Modal", router: "/components/modal", component: "Modal" },
  //     { title: "Tree拖拽排序", router: "/components/SortDrag", component: "SortDrag" },
  //   ]
  // },
];

export default menuItem
