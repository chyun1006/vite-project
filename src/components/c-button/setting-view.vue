<template>
  <div v-for="color in colors">
    {{ color }}
  </div>
</template>

<script setup lang="ts">
import BtnConfig from "./btn-config-model";
const colors = ["red", "blue", "green"];

// const props = defineProps<{ config: BtnConfig }>();
// const setColor = (color: string) => {
//   props.config.color = color;
// };
</script>
