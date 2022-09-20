import Widget from "../core/model/widget";

const WidgetConfig = [
  {
    title: "基础图形",
    components: [],
  },
  {
    title: "组件",
    components: [
      {
        name: "HelloWorld",
        component: () => import("../components/HelloWorld.vue"),
        props: {
          msg: "HelloWorld",
        },
      },
      {
        name: "按钮",
        component: () => import("../components/HelloWorld.vue"),
      },
    ],
  },
];

export default WidgetConfig;
