<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    msg: String,
  },
});
</script>

<template>
  <span>hah</span>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
