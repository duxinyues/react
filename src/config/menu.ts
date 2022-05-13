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
      { title: "三角函数", router: "/components/Sin", component: "Sin" },
    ]
  },
  {
    title: "CSS",
    key: "2",
    router: null,
    subs: [
      { title: "flex", router: "/components/flex", component: "Flex" },
      { title: "grid", router: "/components/grid", component: "Grid" },
    ]
  },
  {
    title: "自定义组件",
    key: "3",
    router: null,
    subs: [
      { title: "自定义Modal", router: "/components/modal", component: "Modal" },
      { title: "表单", router: "/components/form", component: "Form" },
    ]
  },
];

export default menuItem
