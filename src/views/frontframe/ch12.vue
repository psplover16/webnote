<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>computed：當依賴的響應式數據發生變化時才會重新計算，並緩存結果。</li>
      <li>watched：監聽指定的數據變化，當數據發生變化時執行相應的回調函數。可以監聽單個數據、對象的屬性或數組的變化。</li>
      <li>method：定義為 Vue 實例的方法，可以在模板中直接調用。</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});
</script>
<style lang="scss" scope></style>