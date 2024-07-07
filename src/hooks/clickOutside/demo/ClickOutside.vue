<script lang="ts" setup>
import useClickOutside from "../useClickOutside";
import { ref } from "vue";
const ele = ref<null | HTMLElement>(null);
const isClickOutside = useClickOutside(ele);
</script>

<template>
  <div ref="ele">
    {{ isClickOutside ? "点击了外部" : "点击了内部" }}
  </div>
  <div></div>
</template>

<style scoped>
div {
  width: 200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #bfa;
}
</style>
