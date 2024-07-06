<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  item: {
    type: Number,
  },
});
</script>

<template>
  <div class="list-item">
    {{ item }}
  </div>
</template>

<style scoped>
.list-item {
  margin-top: 10px;
  background-color: #bfa;
  width: 100%;
  height: 20px;
}
</style>
