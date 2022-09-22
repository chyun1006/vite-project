import Widget from "../../core/model/widget";
import Button from "./c-button.vue";
import SetView from "./setting-view.vue";
import BtnConfig from "./btn-config-model";

const defaultValue: BtnConfig = {
  color: "red",
  size: 20,
};

const config: Widget = {
  name: "按钮",
  component: () => import("./c-button.vue"),
  setComponent: () => import("./setting-view.vue"),
  configValue: defaultValue,
};

export default config;
