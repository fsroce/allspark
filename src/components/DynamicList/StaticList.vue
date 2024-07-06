<script lang="ts" setup>
import lists from "./data";
import ListItem from "./ListItem.vue";
</script>
<!-- 
使用本组件时，页面非常卡顿，因为一次浏览器要渲染所有的1000000条数据
 -->
<template>
  <template v-for="(_, idx) in lists" :key="idx">
    <list-item :item="_" />
  </template>
</template>
