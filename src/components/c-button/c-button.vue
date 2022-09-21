<template>颜色：{{ config.color }} 大小：{{ config.size }}</template>

<script setup lang="ts">
import BtnConfig from "./btn-config-model";
defineProps<{ config: BtnConfig }>();
</script>
