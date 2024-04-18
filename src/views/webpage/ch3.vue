<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        MVC
        <ul>
          <li>Model，負責程式邏輯</li>
          <li>View，用戶介面的顯示，</li>
          <li>
            Controller，接收用戶的輸入並根據輸入更新Model與View，為兩者的中介
          </li>
        </ul>
        View透過model呈現資料給user，user透過controller觸發事件，model接收事件調整DB，調整完畢後再通知View更新事件
      </li>
      <li>
        MVVM，比起MVC更注重使用者端的的介面。能實現雙向綁定
        <ul>
          <li>Model，負責程式邏輯</li>
          <li>ViewModule，轉換原始資料為顯示用資料</li>
          <li>View，用戶介面的顯示，</li>
        </ul>
        View透過ViewModle渲染頁面；當user操作介面時，View接收資料給ViewModel，ViewModel呼叫Model處理資料；model處理完畢後，呼叫ViewModel更新資料，ViewModel資料變動，觸發View更改頁面
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
</script>
