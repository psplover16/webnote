<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        async/await，算是promise的語法糖，需要有promise回傳，才能執行下一步
      </li>
      <li>settimeout不會回傳promise，要另外創建
        <br>
        <code>
          // 定義一個非同步函數
          <br>
const fetchData = async () => {
  <br>
  &emsp;return new Promise((resolve, reject) => {
    <br>
    &emsp; &emsp;// 模拟非同步操作
    <br>
    &emsp; &emsp;setTimeout(() => {
      <br>
      &emsp; &emsp; &emsp;resolve('Async data');
      <br>
      &emsp; &emsp;}, 1000);
    <br>
    &emsp;});
  <br>
};
<br>
// 調用非同步函數
<br>
const getData = <span class="r">async</span> () => {
  <br>
  &emsp;try {
    <br>
    &emsp; &emsp;const data = <span class="r">await</span> fetchData();
    <br>
    &emsp; &emsp;console.log('Data:', data); // Data: Async data
    <br>
    &emsp; } catch (error) {
    <br>
    &emsp; &emsp;console.error('Error:', error);
    <br>
    &emsp;}
  <br>
};
<br>
getData();
        </code>
      </li>
      <li>API請求會有promsie</li>
      <li>文件讀取也有promise
        <br>
        <code>
  const fileInput = document.getElementById('file-input');
<br>
fileInput.addEventListener('change', () => {
  <br>
  &emsp;const file = fileInput.files[0];
  <br>
  &emsp;const reader = new FileReader();
  <br>
  &emsp;reader.readAsText(file);
  <br>
  &emsp;reader.onload = () => {
    <br>
    &emsp;&emsp;console.log('File content:', reader.result);
    <br>
    &emsp;};
  <br>
});
</code>

      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
defineProps({
  title: String,
});

</script>
