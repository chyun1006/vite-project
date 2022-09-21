import widget from "./model/widget";
import { render, h } from "vue";
import hello from "../components/HelloWorld.vue";

export function renderTree(widgets: Array<widget>) {
  widgets.map((w) => {
    renderWidget(w);
  });
}

function renderWidget(widget: widget) {
  h(hello);
}
