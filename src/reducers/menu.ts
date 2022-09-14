/*
 * @Author: 韦永愿 1638877065@qq.com
 * @Date: 2022-08-12 09:06:11
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-13 11:04:41
 * @FilePath: \react\src\reducers\menu.ts
 * @Description: 
 * Copyright (c) 2022 by 韦永愿 email: 1638877065@qq.com, All Rights Reserved.
 */
const menuState = [
    {
        title: "组件",
        key: "component",
        router: null,
        children: [
            { title: "表格", key: 'table', router: "/components/table" },
            { title: "React", key: 'react', router: "/components/react" }
        ]
    },
    {
        title: "Echarts",
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
    // {
    //     title: "THREE",
    //     key: "3",
    //     router: null,
    //     children: [
    //         { title: "实例", key: '3-1', router: "/components/Three", component: "Three" },
    //         { title: "场景", key: '3-2', router: "/components/Scene", component: "Scene" },
    //         { title: "材质", key: '3-3', router: "/components/Material", component: "Material" },
    //         { title: "光源", key: '3-4', router: "/components/Light", component: "Light" },
    //         { title: "几何", key: '3-5', router: "/components/Box", component: "Box" },
    //     ]
    // },
    {
        title: "可视化",
        key: "visualization",
        router: null,
        children: [
            { title: "可视化1", key: 'visualization-1', router: "/app1", component: "Modal" },
        ]
    },
    // {
    //     title: "React-moveable",
    //     key: "Move",
    //     router: null,
    //     children: [
    //         { title: "Drag", key: 'Move-1', router: "/move/drag" },
    //         { title: "Resizable", key: 'Move-2', router: "/move/resizable" },
    //     ]
    // },

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