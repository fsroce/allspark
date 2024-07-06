import { reactive } from "vue";

const arr = new Array(1000000).fill(0).map((_, idx) => idx);
const lists = reactive(arr);

export default lists;
