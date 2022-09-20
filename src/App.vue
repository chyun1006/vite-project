<script setup lang="ts">
import { reactive, h, render } from "vue";
import WidgetList from "./config/widget.config";
import Widget from "./core/model/widget";

const widgets: Array<Widget> = reactive([]);
const addWidget = async (com: Widget) => {
  const a = await com.component();
  widgets.push(a.default);

  console.log("--widgets", widgets);

  console.log("---", h(a.default));
  const container: any = document.getElementById("widget-canvas");
  render(h(a.default,{
    
  }), container);
};
</script>

<template>
  <ul>
    <li v-for="group in WidgetList" :key="group.title">
      {{ group.title }}
      <ul v-for="com in group.components">
        <li>
          {{ com.name }} <button @click="addWidget(com)">添加组件</button>
        </li>
      </ul>
    </li>
  </ul>

  <div id="widget-canvas"></div>

  <div class="widget-canvas">
    <template v-for="item in widgets">
      <component :is="item"></component>
    </template>
  </div>
</template>

<style scoped>
.widget-canvas {
  position: relative;
}
</style>
