<script setup lang="ts">
import { reactive, h, ref, render, defineAsyncComponent } from "vue";
import WidgetGroups from "./config/widget.config";
import Widget from "./core/model/widget";

const pageWidgets: any = reactive([]);
let currentWidget: any = reactive({});
const addWidget = async (com: Widget) => {
  const widgetData = {
    name: com.name,
    configValue: com.configValue,
  };
  // push的是组件数据
  pageWidgets.push(widgetData);

  const container: HTMLElement | null =
    document.getElementById("widget-canvas");
  // 根据组件 数据 查找组件进行渲染
  renderWidgetByData(widgetData, container);
  
  currentWidget = com;

  console.log("currentWidget", currentWidget);
};

const save = () => {
  console.log(pageWidgets);
};

async function renderWidgetByData(w: any, container: HTMLElement | null) {
  const wrapper = document.createElement("div");
  const widgetlist = WidgetGroups.map((group) => group.components).flat();
  const widget: any = widgetlist.find((widget) => widget.name == w.name);
  const a: any = await widget.component();
  const VNode = h(a.default, { ...widget.configValue });
  render(VNode, wrapper);
  container?.appendChild(wrapper);
}
</script>

<template>
  <div class="page">
    <div class="material-container">
      <!-- <h2>组件区</h2> -->
      <ul>
        <li v-for="group in WidgetGroups" :key="group.title">
          {{ group.title }}
          <ul v-for="com in group.components">
            <li @click="addWidget(com)">
              {{ com.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="canvas-container">
      <div class="canvas-header">
        <!-- <h2>画布</h2> -->
        <button style="display: block" @click="save">保存</button>
      </div>
      <div class="widget-canvas" id="widget-canvas">
        <!-- <component v-for="item in pageWidgets" :is="item.component"></component> -->
      </div>
    </div>
    <div class="setting-container">
      <!-- <h2>设置面板</h2> -->
      <div></div>
      <template v-if="currentWidget.setComponent">
        <component
          :is="defineAsyncComponent(currentWidget.setComponent)"
        ></component
      ></template>
    </div>
  </div>
</template>

<style scoped>
.widget-canvas {
  position: relative;
}
.canvas-container {
  width: 500px;
}
.page {
  display: flex;
  gap: 100px;
}

ul li {
  cursor: pointer;
}

.canvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
