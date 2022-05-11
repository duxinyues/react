const menuItem = [
  {
    title: "图标库",
    key: "1",
    router: null,
    subs: [
      { title: "dashboard", router: "/admin/dashboard", component: "Dashboard" },
      { title: "柱状图", router: "/admin/barEcharts", component: "Bar" },
      { title: "条形图", router: "/admin/rowBar", component: "RowBar" },
      { title: "扇形图", router: "/admin/radialPolar", component: "RadialPolar" },
    ]
  },
  {
    title: "CSS",
    key: "2",
    router: null,
    subs: [
      { title: "flex", router: "/admin/flex", component: "Flex" },
      { title: "grid", router: "/admin/grid", component: "Grid" },
    ]
  },
  {
    title: "自定义组件",
    key: "3",
    router: null,
    subs: [
      { title: "自定义Modal", router: "/admin/modal", component: "Modal" },
      { title: "表单", router: "/admin/form", component: "Form" },
    ]
  },
  // {
  //   title: "基本信息",
  //   router: "4",
  //   subs: [
  //     { title: "读心悦", router: "/duxinyues", component: "Modal" },
  //   ]
  // },
];

export default menuItem
