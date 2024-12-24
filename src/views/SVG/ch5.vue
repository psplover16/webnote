<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        漸層
        <svg width="470" height="280" style="background-color: pink">
          <!-- 除了直接填滿，漸層/特殊花紋的填滿，需要設定定義 -->
          <defs>
            <!-- 線性漸層，(x1,y1) 與 (x2,y2)對比的方向 -->
            <linearGradient id="a1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stop-color="red" />
              <stop offset="95%" stop-color="yellow" />
            </linearGradient>
            <!-- 放射狀漸層，(cx,cy)放射中心 -->
            <radialGradient id="a2" cx="30%" cy="40%">
              <stop offset="5%" stop-color="red" />
              <stop offset="95%" stop-color="yellow" />
            </radialGradient>
            <!-- 要拿來做重複用的圖形 -->
            <!-- patternUnits，定義圖案座標系統單位(userSpaceOnUse / objectBoundingBox) -->
            <!-- userSpaceOnUse，座標系統依據整個坐標系，圖案大小依據畫布決定 -->
            <!-- objectBoundingBox，座標大小依據圖形邊界框，圖形大小會隨圖形縮放 -->
            <pattern
              id="a3"
              patternUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect
                x="0"
                y="0"
                width="25"
                height="25"
                stroke="#none"
                fill="#09f"
              ></rect>
            </pattern>
          </defs>
          <!--  -->
          <rect
            x="10"
            y="20"
            width="100"
            height="100"
            stroke="#000"
            stroke-width="5"
            fill="url(#a1)"
          ></rect>
          <circle
            cx="180"
            cy="75"
            r="50"
            stroke="#000"
            stroke-width="5"
            fill="url(#a1)"
          ></circle>
          <rect
            x="260"
            y="20"
            width="100"
            height="100"
            stroke="url(#a1)"
            stroke-width="5"
            fill="none"
          ></rect>
          <!-- 直接塗色，fill="顏色" -->
          <circle
            cx="430"
            cy="75"
            r="50"
            stroke="#000"
            stroke-width="5"
            fill="red"
          ></circle>
          <rect
            x="10"
            y="150"
            width="100"
            height="100"
            stroke="#000"
            stroke-width="5"
            fill="url(#a2)"
          ></rect>
          <circle
            cx="180"
            cy="205"
            r="50"
            stroke="#000"
            stroke-width="5"
            fill="url(#a2)"
          ></circle>
          <rect
            x="260"
            y="150"
            width="100"
            height="100"
            stroke="url(#a2)"
            stroke-width="5"
            fill="none"
          ></rect>
          <circle
            cx="430"
            cy="205"
            r="50"
            stroke="#000"
            stroke-width="5"
            fill="url(#a3)"
          ></circle>
        </svg>
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
