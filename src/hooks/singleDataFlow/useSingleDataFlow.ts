import {
  onMounted,
  computed,
  watch,
  ref,
  Ref,
  onUnmounted,
  WatchStopHandle,
} from "vue";
type undefinedParam<K, T extends keyof K> = T extends undefined ? K : K[T];
/**
 * 创建由store到当前页面的单项数据流 store更新会导致页面刷新 但是页面数据刷新不会导致store更新
 * @param store 要监听的store
 * @param property 要监听的属性名
 * @param onRelyChange 当数据刷新时执行的回调
 */
function useSingleDataflow<K>(source: K): Ref<K>;
function useSingleDataflow<K, T extends keyof K>(
  source: K,
  property: T,
  onRelyChange?: (...args: any) => any
): Ref<K[T]>;
function useSingleDataflow<K, T extends keyof K>(
  source: K,
  property?: T,
  onRelyChange?: (...args: any) => any
): Ref<undefinedParam<K, T>> {
  const resRef = ref<undefinedParam<K, T>>(
    (property ? source[property] : source) as undefinedParam<K, T>
  );
  const computedRef = computed(() => (property ? source[property] : source));
  console.log("computedRef", computedRef.value);
  let unWatchFn: WatchStopHandle | undefined;
  onMounted(() => {
    unWatchFn = watch(
      () => computedRef.value,
      (newVal) => {
        // 这里应该要用deepClone，简化起见，此处先这样处理
        console.log("newVal", newVal);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resRef.value = newVal;
        onRelyChange && onRelyChange();
      },
      { immediate: true, deep: true }
    );
  });
  onUnmounted(() => {
    unWatchFn && unWatchFn();
  });
  return resRef as Ref<undefinedParam<K, T>>;
}

export default useSingleDataflow;
