<script setup lang="ts">
import { reactive, ref, markRaw } from "vue";
import WidgetList from "./config/widget.config";
import Widget from "./core/model/widget";

const widgets: Array<Widget> = reactive([]);
let currentComponent: any = reactive({});

const addWidget = (com: Widget) => {
  widgets.push(com);
  // currentComponent = com;

  // const container: HTMLElement | null =
  //   document.getElementById("widget-canvas");
  // const wrapper = document.createElement("div");
  // const VNode = h(a.default);
  // console.log("h", VNode);

  // render(VNode, wrapper);
  // container?.appendChild(wrapper);
};

const save = () => {
  console.log(widgets);
};
</script>

<template>
  <div class="page">
    <div class="material-container">
      <h2>组件区</h2>
      <ul>
        <li v-for="group in WidgetList" :key="group.title">
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
        <h2>画布</h2>
        <button style="display: block" @click="save">保存</button>
      </div>
      <div class="widget-canvas">
        <component
          v-for="item in widgets"
          :is="item.component"
          v-model:config="item.configValue"
        ></component>
      </div>
    </div>
    <div class="setting-container">
      <h2>设置面板</h2>
      <component
        :is="currentComponent.component"
        v-model:config="currentComponent.configValue"
      ></component>
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
