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
        <button @click="copyCuponCode(exportImgBase64)">複製下列div文字</button>
        <div class="ellipsisContainer">{{ exportImgBase64 }}</div>
      </li>
      <li>
        <button @click="imgToCanvas">把圖片塞入canvas</button>
        <canvas ref="canvasImg"></canvas>
      </li>
      <li>
        <button @click="baseToCanvas(exportImgBase64)">
          把li2的base64轉canvas
        </button>
        <canvas ref="canvasBase64"></canvas>
      </li>
      <li>
        <button @click="canvasToBase64(canvasBase64)">
          把上述canvas轉base64
        </button>
        <button @click="copyCuponCode(exportImgBase64)">複製下列div文字</button>
        <button @click="base64DownloadImg(exportCanvasBase64)">
          把base64轉成圖片然後下載
        </button>
        <div class="ellipsisContainer">{{ exportCanvasBase64 }}</div>
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

// 圖片轉base64
const convertImgToBase64 = () => {
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
// 圖片轉canvas
const canvasImg = ref(null);
const imgToCanvas = () => {
  const img = new Image();
  img.src = img123;
  img.onload = function () {
    console.log(img);
    const canvas = canvasImg.value;
    const ctx = canvas.getContext("2d");
    // 繪製圖片到 canvas，指定 x, y 位置
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height); // 繪製圖片
  };
};
// base64轉canvas
const canvasBase64 = ref(null);
const baseToCanvas = async (base64Str) => {
  const ctx = canvasBase64.value.getContext("2d");
  const img = new Image();
  img.src = base64Str; // 將 Base64 字符串設置為圖片的 src

  // 當圖片加載完成後，將其繪製到 Canvas 上
  img.onload = async () => {
    ctx.drawImage(
      img,
      0,
      0,
      canvasBase64.value.width,
      canvasBase64.value.height
    ); // 將圖片繪製到 Canvas
  };
};
// canvas轉base64
const exportCanvasBase64 = ref(null);
const canvasToBase64 = (canvasNode) => {
  const base64Image = canvasNode.toDataURL("image/png"); // 可以指定圖片格式，如 'image/jpeg'
  exportCanvasBase64.value = base64Image;
};
// 剪貼簿操作
const copyCuponCode = (text) => {
  // readText()：讀取剪貼簿純文字內容。
  // writeText()：對剪貼簿寫入純文字內容。
  // read()：讀取剪貼簿複合內容。
  // write()：對剪貼簿寫入複合內容。
  navigator.clipboard.writeText(text).then(() => {
    this.$StatusMsg(true, "複製", "您已成功複製優惠碼!");
  });
};
//
// 把 basse64轉成圖片然後下載
const base64DownloadImg = (base64Image) => {
  const link = document.createElement("a");
  link.href = base64Image; // 將 href 設置為 Base64 字符串
  link.download = "downloaded-image.png"; // 設置下載的文件名

  // 觸發點擊事件
  document.body.appendChild(link); // 將鏈接添加到文檔中
  link.click(); // 自動點擊鏈接
  document.body.removeChild(link); // 點擊後移除鏈接
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
