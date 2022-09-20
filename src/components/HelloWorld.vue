<script setup lang="ts">
import { ref } from "vue";
interface props {
  msg: string;
}

defineProps<props>();
</script>

<template>
  <span>hah</span>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
