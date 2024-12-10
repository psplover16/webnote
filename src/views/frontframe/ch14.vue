<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <ul>
          <li>
            provide，用於在父組件中定義要提供的數據方法，這些數據可被其子組件注入
          </li>
          <li>
            父組件
            <pre>
import { ref, watch, provide } from "vue";
const provideTest = ref(123);
provide('provideTest', provideTest);
watch(provideTest,(v)=>{
  console.log(v)
})
            </pre>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            inject，用於在子組件中獲取父組件提供的數據或方法，Provide與inject的值共用
          </li>
          <li>
            子組件
            <pre>
import { inject, onMounted } from "vue";
const provideTest = inject("provideTest");
onMounted(() => {
  console.log(provideTest.value);
  provideTest.value = 456;
});
            </pre>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
const isShow = ref(false);
const a1 = ref(false);
const provideTest = inject("provideTest");
defineProps({
  title: String,
});
onMounted(() => {
  console.log("inject收到：來自APP" + provideTest.value);
  provideTest.value = "把APP修改成inject";
});
</script>
<style lang="scss" scoped></style>
