<script lang="ts" setup>
import lists from "./data";
import ListItem from "./ListItem.vue";
import { onMounted, onUnmounted, ref, defineProps, computed } from "vue";
const props = defineProps({
  top: {
    // 最上面的一条
    default: 0,
  },
  displayNum: {
    // 显示的条数
    default: 15,
  },
  scrollNum: {
    // 每次滑动滚动的条数
    default: 10,
  },
});
const top = ref(props.top);
const list = computed(() =>
  lists.slice(top.value, top.value + props.displayNum)
);
const listener = (e: WheelEvent) => {
  // 此处监听鼠标滚轮事件
  let direction = 1; // 1表示向下滑动
  if (e.deltaY < 0) direction = -1;
  const t = top.value + direction * props.scrollNum;
  if (t < 0) top.value = 0;
  else if (t > lists.length - props.displayNum)
    top.value = lists.length - props.displayNum;
  else top.value = t;
};
onMounted(() => {
  window.addEventListener("wheel", listener);
});
onUnmounted(() => {
  window.removeEventListener("wheel", listener);
});
</script>
<!-- 
这里我们采用相同的数据，但是进行数据的可视渲染
 -->
<template>
  <template v-for="(_, idx) in list" :key="idx">
    <list-item :item="_" />
  </template>
</template>
