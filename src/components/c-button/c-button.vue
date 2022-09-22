<template>颜色：{{ color }} 大小：{{ size }}</template>

<script setup lang="ts">
import BtnConfig from "./btn-config-model";
defineProps<{ color: string; size: string }>();
</script>
