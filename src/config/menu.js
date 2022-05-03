const menuItem = [
  {
    title: "图标库",
    router: "1",
    subs: [
      { title: "dashboard", router: "/dashboard", component: "Dashboard" },
      { title: "柱状图", router: "/barEcharts", component: "Bar" },
      { title: "条形图", router: "/rowBar", component: "RowBar" },
      { title: "扇形图", router: "/radialPolar", component: "RadialPolar" },
    ]
  },
  {
    title: "CSS",
    router: "2",
    subs: [
      { title: "flex", router: "/flex", component: "Flex" },
      { title: "grid", router: "/grid", component: "Grid" },
    ]
  },
  {
    title: "自定义组件",
    router: "3",
    subs: [
      { title: "自定义Modal", router: "/modal", component: "Modal" },
    ]
  },
];

export default menuItem
