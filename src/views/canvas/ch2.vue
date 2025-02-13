<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <img :src="img123" class="w-[100px]" />
        <button @click="convertImgToBase64">img圖片導出base64</button>
        <div>文本不超出div，超出部分以...顯示</div>
        <button @click="copyCuponCode(exportImgBase64)">點文本複製</button>
        <div class="ellipsisContainer">{{ exportImgBase64 }}</div>
      </li>
      <pre></pre>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
import img123 from "@/assets/123.jpg";

defineProps({
  title: String,
});
const exportImgBase64 = ref();
const isShow = ref(true);

const convertImgToBase64 = () => {
  // console.log(img123);
  // console.log(img123.value); // X
  fetch(img123)
    .then((response) => response.blob()) // 獲取圖片的 Blob 對象
    .then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 當讀取完成時，將結果存儲到 base64String
        exportImgBase64.value = reader.result;
      };
      reader.readAsDataURL(blob); // 將 Blob 轉換為 Base64
    })
    .catch((error) => {
      console.error("轉換失敗:", error);
    });
};

// 圖片轉base64
// 圖片轉canvas
// 圖片導入canvas

const copyCuponCode = (text) => {
  // readText()：讀取剪貼簿純文字內容。
  // writeText()：對剪貼簿寫入純文字內容。
  // read()：讀取剪貼簿複合內容。
  // write()：對剪貼簿寫入複合內容。
  navigator.clipboard.writeText(text).then(() => {
    this.$StatusMsg(true, "複製", "您已成功複製優惠碼!");
  });
};
</script>

<style scoped>
button {
  border: 1px solid black;
  background-color: rgb(207, 207, 207);
  padding: 0.1rem 0.5rem;
}
.ellipsisContainer {
  width: 400px; /* 設定容器的寬度 */
  white-space: nowrap; /* 不換行 */
  overflow: hidden; /* 隱藏超出部分 */
  text-overflow: ellipsis; /* 使用省略號 */
  border: 1px solid #000; /* 可視化容器 */
  padding: 10px; /* 內邊距 */
}
</style>
