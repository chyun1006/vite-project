<template>
  <div v-for="color in colors" @click="setColor(color)">
    {{ color }}
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import BtnConfig from "./btn-config-model";
const colors = ["red", "blue", "green"];

const setColor = (color: string) => {};
onMounted(() => {
  console.log("onMounted");
});
</script>
