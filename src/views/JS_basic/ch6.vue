<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        Promise是一種用於處理非同步操作的功能(依序處理非同步)，他代表一個非同步操作的最終完成或失敗，並取得其結果。
      </li>
      <li>Pedning 等待中 / Resolved 成功 / Rejected 失敗</li>
      <li>promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r">立即執行</span>並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止
      </li>

      <li>常見的非同步操作有，settimeout、事件監聽、網路請求</li>
      <li>標準使用方法如下
        <br>
        <code>
          // 創建一個promise
          <br>
const mypromise = <span class="r">new Promise((resolve, reject)</span> => {
  <br>
  &emsp;// 開始非同步操作
  <br>
  &emsp;setTimeout(() => {
    <br>
    &emsp; &emsp;const randomNumber = Math.random();
    <br>
    &emsp; &emsp;if (randomNumber > 0.5) {
      <br>
      &emsp;&emsp;&emsp;// 操作成功
      <br>
      &emsp;&emsp; &emsp; resolve(randomNumber);
      <br>
      &emsp; &emsp;} else {
      <br>
      &emsp; &emsp; // 操作失敗
      <br>
      &emsp;&emsp; &emsp;reject(new Error("andom number is less than 0.5"));
      <br>
      &emsp; &emsp; }
    <br>
    &emsp;}, 1000);
  <br>
});
<br>          <br>
// 使用非同步
<br>

mypromise.<span class="r">then</span>((result) => {
        <br>
        &emsp;console.log('Promise resolved with result:', result);
  <br>
}).<span class="r">catch</span>((err) => {
  <br>
  &emsp;console.error('Promise rejected with error:', err);
  <br>
})
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
