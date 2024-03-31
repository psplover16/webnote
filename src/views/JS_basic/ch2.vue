<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域</li>
      <li>let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值</li>
      <li>const，存在變數提升，宣告的變數為常數</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
defineProps({
  title: String,
});

</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;

  td {
    padding: 5px 10px;
  }
}
</style>