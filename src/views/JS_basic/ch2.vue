<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <span
          >var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域</span
        >
      </li>
      <li>
        <span>
          let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值</span
        >
      </li>
      <li><span> const，存在變數提升，宣告的變數為常數</span></li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
defineProps({
  title: String,
});
const ob = {
  name: "G",
  great: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
  great2: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};
ob.great2();
</script>
<style lang="scss" scoped></style>
