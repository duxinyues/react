const menuItem = [
  {
    title: "Echarts",
    router: "1",
    subs: [
      { title: "柱状图", router: "/barEcharts", component: "Bar" },
      { title: "条形图", router: "/rowBar", component: "RowBar" },
      { title: "扇形图", router: "/radialPolar", component: "RadialPolar" },
    ]
  },
  {
    title: "CSS布局",
    router: "2",
    subs: [
      { title: "flex", router: "/flex", component: "Flex" },
      { title: "grid", router: "/grid", component: "Grid" },
    ]
  },
  { title: "自定义Modal", router: "/modal", component: "Modal" },

];

export default menuItem
