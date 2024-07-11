<script lang="ts" setup>
import { reactive } from "vue";
import useSingleDataflow from "../useSingleDataFlow";
import data from "./data";

const rd = reactive(data);
const t = useSingleDataflow(rd);
const t2 = useSingleDataflow(rd, "count");
const upData = () => {
  console.log("source add");
  rd.count++;
};
const updT = () => {
  t.value.count++;
  console.log("t add");
};
console.log("t2", t2);
console.log("t", t.value);
</script>

<template>
  <div>
    <h1>{{ t.count }}</h1>
    <h1>{{ t2 }}</h1>
  </div>
  <button @click="upData">data add 1</button>
  <button @click="updT">t add 1</button>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}
</style>
