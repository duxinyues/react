/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:16
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-07 17:16:11
 * @FilePath: \react\src\config\menu.ts
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

const menuItem= [
  {
      title: "图标库",
      key: "1",
      router: null,
      children: [
          { title: "dashboard", key: '1-1', router: "/components/dashboard", component: "Dashboard" },
          { title: "柱状图", key: '1-2', router: "/components/barEcharts", component: "Bar" },
          { title: "条形图", key: '1-3', router: "/components/rowBar", component: "RowBar" },
          { title: "扇形图", key: '1-4', router: "/components/radialPolar", component: "RadialPolar" },
          { title: "数学函数", key: '1-5', router: "/components/Sin", component: "Sin" },
          { title: "散点图", key: '1-6', router: "/components/ScatterChart", component: "ScatterChart" },
      ]
  },
//   {
//       title: "CSS",
//       key: "2",
//       router: null,
//       children: [
//           { title: "flex", key: '2-1', router: "/components/flex", component: "Flex" },
//           { title: "grid", key: '2-2', router: "/components/grid", component: "Grid" },
//           { title: "动画", key: '2-3', router: "/components/transition", component: "Transition" },
//       ]
//   },
  {
      title: "THREE",
      key: "3",
      router: null,
      children: [
          { title: "实例",key:'3-1', router: "/components/Three", component: "Three" },
          { title: "场景",key:'3-2', router: "/components/Scene", component: "Scene" },
          { title: "材质", key:'3-3',router: "/components/Material", component: "Material" },
          { title: "光源",key:'3-4', router: "/components/Light", component: "Light" },
          { title: "几何",key:'3-5', router: "/components/Box", component: "Box" },
      ]
  },
  {
      title: "可视化",
      key: "visualization",
      router: null,
      children: [
          { title: "大屏",key:'visualization-1', router: "/app1", component: "Modal" },
      ]
  }, {
      title: "React-moveable",
      key: "Move",
      router: null,
      children: [
          { title: "Drag",key:'Move-1', router: "/move/drag" },
          { title: "Resizable",key:'Move-2', router: "/move/resizable" },
      ]
  },
//    {
//       title: "编辑",
//       key: "edit",
//       router: "/edit",
//       component: "Edit"
//   },
];
export default menuItem
