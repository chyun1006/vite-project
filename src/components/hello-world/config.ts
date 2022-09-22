import Widget from "../../core/model/widget";
import HelloWorld from "./HelloWorld.vue";
import SetView from "./HelloWorld.vue";

const config: Widget = {
  name: "HelloWorld",
  component: () => import("./HelloWorld.vue"),
  setComponent: () => import("./HelloWorld.vue"),
  configValue: {
    msg: "HelloWorld",
    position: {
      x: 100,
      y: 100,
      width: 200,
      height: 300,
    },
  },
};

export default config;
