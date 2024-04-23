<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>全域
        <ul>
          <li>瀏覽器，指向window</li>
          <li>nodeJS，指向global對象</li>
        </ul>
      </li>
      <li>
        函數調用
        <ul>
          <li>普通函數，this會指向window</li>
          <li>作為物件的方法調用，this會指向調用該方法的對象</li>
          <li>
            如果函数使用 call()、apply() 或 bind() 方法进行调用，this 指向作为参数传递的对象。????????????????????????
          </li>
          <li>構造函數，this會通過new 創建新對象</li>
          <li>箭頭函數，沒有自己的this，會在創建時，捕獲其上下文作用域的this，當成自己的this</li>
        </ul>
      </li>
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
<style lang="scss" scoped></style>