/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 09:06:11
 * @LastEditors: 韦永愿 1638877065@qq.com
 * @LastEditTime: 2022-08-12 09:07:48
 * @FilePath: \react\src\reducers\menu.ts
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
const menuState = [
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
  
    {
      title: "可视化",
      key: "visualization",
      router: null,
      subs: [
        { title: "自定义Modal", router: "/app1", component: "Modal" },
      ]
    }, {
      title: "React-moveable",
      key: "Move",
      router: null,
      subs: [
        { title: "Drag", router: "/move/drag" },
        { title: "Resizable", router: "/move/resizable" },
      ]
    }, {
      title: "编辑",
      key: "edit",
      router: "/edit",
      component: "Edit"
    },
  ];
export default function menuReducer(state = menuState, action: any) {
    switch (action.type) {
        case "UPDATE_CONFIG":
            return {
                config: action.value
            };
        default:
            return state
    }
}