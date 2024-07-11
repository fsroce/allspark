<script lang="ts" setup>
import { ref, onMounted } from "vue";
import JSON2DOM from "../JSON2DOM";
import JSONType from "../type";
const dom = ref<HTMLElement | null>(null);
onMounted(async () => {
  const response = await import("./data.json");
  dom.value = JSON2DOM((response as unknown as { default: JSONType }).default);
});
</script>

<template>
  <component :is="dom"></component>
</template>

<style scoped></style>
