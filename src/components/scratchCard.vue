<template>
  <div
    class="relative bg-no-repeat bg-contain bg-center inline-block"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `url(${rewardItem})`,
    }"
  >
    <canvas
      ref="scratchCanvas"
      :width="width"
      :height="height"
      @mousedown="startDrawing"
      @mousemove="scratchOff"
      @mouseup="stopDrawing"
      @mouseout="stopDrawing"
      @touchstart="startDrawing"
      @touchmove.prevent="scratchOff"
      @touchend="stopDrawing"
      @touchcancel="stopDrawing"
    ></canvas>
  </div>
  <button class="border border-black" @click="resetCanvas">重置</button>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 200,
  },
  rewardItem: {
    type: String,
    default: "red",
  },
  scratchItem: {
    type: String,
    default: "silver",
  },
  maxArea: {
    // 清空比例
    type: Number,
    default: 0.8,
  },
  drawCircleRadius: {
    // 清空比例
    type: Number,
    default: 20,
  },
});
const scratchCanvas = ref(null); // 頁面上的canvas元素
const ctx = computed(() => scratchCanvas.value.getContext("2d")); // canvas渲染起手
const isDrawing = ref(false); // 繪製狀態
const pixelFilled = ref(0); // 繪製的像素數量
const scratchImg = ref(); // 要渲染canvas的圖片
const canvasScale = computed(() =>
  Math.max(
    scratchCanvas.value.width / scratchImg.value.width,
    scratchCanvas.value.height / scratchImg.value.height
  )
);
const isAlreadyGetReward = ref(false);
const emits = defineEmits(["getReward"]);
// 設定銀漆
const setScratchItem = (scratchItem) => {
  scratchImg.value = new Image();
  const imgPath = new URL(scratchItem, import.meta.url).href;
  scratchImg.value.src = imgPath;
  scratchImg.value.onload = function () {
    const newWidth = scratchImg.value.width * canvasScale.value;
    const newHeight = scratchImg.value.height * canvasScale.value;
    // ctx.value.fillStyle = "silver";
    // ctx.value.fillRect(0, 0, newWidth, newHeight);
    ctx.value.globalCompositeOperation = "copy";
    ctx.value.drawImage(scratchImg.value, 0, 0, newWidth, newHeight);
    isAlreadyGetReward.value = false;
  };
};
// canvas繪製事件
const scratchOff = async (e) => {
  if (!isDrawing.value) return;
  // 設定觸碰事件
  const rect = scratchCanvas.value.getBoundingClientRect(); // 獲取元素大小及"相對"於畫面的位置
  let x, y;
  if (e.touches) {
    // 觸摸事件
    x = e.touches[0].clientX - rect.left;
    y = e.touches[0].clientY - rect.top;
  } else {
    // 滑鼠事件 // 在cannvas上哪個座標
    // console.log(e.clientX, e.clientY); // 觸碰的點絕對位置(以窗口來說)
    // console.log(rect.left, rect.top); // 相對於窗口的位置(距離最左及最上的差距)
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
  // 繪製觸碰到的canvas圖
  ctx.value.globalCompositeOperation = "destination-out"; // 將繪製的模式設定為，新繪製的圖形將從已存在圖形中刪除（即變為透明）
  ctx.value.beginPath(); // 告訴canvas開始繪圖，繪圖起手式
  ctx.value.arc(x, y, props.drawCircleRadius, 0, Math.PI * 2); // (座標位置X,座標位置y,半徑,從0度開始,幾度結束) arc為繪製圓形或圓弧的參數
  ctx.value.fill(); // 填充上面畫圖的顏色
  //
  // ctx.value.fillStyle="red"; // 設定填充的顏色
  // ctx.value.fillRect(x, y, 100, 100); // 繪製填充矩形
  //
  // 計算刮開的像素
  const imageData = ctx.value.getImageData(
    0,
    0,
    scratchCanvas.value.width,
    scratchCanvas.value.height
  ); // (起始x座標,起始y座標,寬度,高度) 獲得指定區域的所有像素信息
  const data = imageData.data;
  pixelFilled.value = 0;
  for (let i = 0; i < data.length; i += 4) {
    // 檢查alpha通道，rgba，透明度為0就計算
    if (data[i + 3] === 0) {
      pixelFilled.value++;
    }
  }
  // 判斷是否達到清空設定值
  if (
    pixelFilled.value /
      (scratchCanvas.value.width * scratchCanvas.value.height) >=
    props.maxArea
  ) {
    if (!isAlreadyGetReward.value) {
      await clearCanvas();
      emits("getReward");
      isAlreadyGetReward.value = true;
    }
  }
};
//
const startDrawing = (e) => {
  isDrawing.value = true;
  scratchOff(e);
};

const stopDrawing = () => {
  isDrawing.value = false;
};

const clearCanvas = async () => {
  return new Promise((resolve) => {
    ctx.value.clearRect(
      0,
      0,
      scratchCanvas.value.width,
      scratchCanvas.value.height
    ); // 清空塗層
    resolve(); // 當清除完成後，調用 resolve()
  });
};

const resetCanvas = () => {
  const newWidth = scratchImg.value.width * canvasScale.value;
  const newHeight = scratchImg.value.height * canvasScale.value;
  ctx.value.globalCompositeOperation = "copy"; // 取代
  ctx.value.drawImage(scratchImg.value, 0, 0, newWidth, newHeight);
  isAlreadyGetReward.value = false;
};

watch(
  () => props.scratchItem,
  (scratchItem) => {
    setScratchItem(scratchItem);
  }
);
onMounted(() => {
  console.log("onMounted");
  setScratchItem(props.scratchItem);
});
//
</script>

<style scoped></style>
