<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>字串切割
        <br>
        <code>
          const str = 'apple,banana,orange';
<br>
// 使用,做切割
<br>
const fruits = str.split(',');
<br>
const characters = str.split('');
<br>
console.log(fruits); // 輸出: ['apple', 'banana', 'orange']
<br>
console.log(characters); // 輸出: ['a','p','p','l'.............]
        </code>
      </li>
      <li></li>
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
const str = 'apple,banana,orange';
const fruits = str.split(',');
const characters = str.split('');
console.log(fruits); // 输出: ['apple', 'banana', 'orange']
console.log(characters); 
</script>
<style lang="scss" scope></style>