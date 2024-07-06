<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup></script>

<template>
  <!-- 我们要让inner做抛物线运动 -->
  <div class="outer">
    <div class="inner"></div>
  </div>
</template>

<style scoped>
.outer {
  position: absolute;
  /* 随便定一个位置 确保可以看见整个抛物线 */
  border-radius: 50%;
  /* 可以看到外面的outer是匀速直线运动 */
  border: red dashed 1px;
  top: 100px;
  left: 100px;
  animation: moveX 5s linear forwards;
}
.inner {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #bfa;
  animation: moveY 5s cubic-bezier(0, -0.4, 0.81, -0.18) forwards;
}
/* 定义两个运动 */
@keyframes moveX {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(500px);
  }
}
@keyframes moveY {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(500px);
  }
}
</style>
