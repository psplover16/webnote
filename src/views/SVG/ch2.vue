<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li v-html="basicCode"></li>
      <li>{{ basicCode }}</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
const basicCode = ref(`
        <svg width="200" height="180">
          <!-- g表示群組 -->
          <!-- id表示名稱 -->
          <g id="layer01">
            <!-- rect表示矩形 -->
            <!-- x與y表示左上角的座標 -->
            <!-- rx/ry 表示圓角半徑屬性 -->
            <!-- stroke表示線段顏色 -->
            <!-- stroke-width 表示線段開度 -->
            <!-- fill表示填充的顏色 -->
            <rect
              id="a3"
              x="52"
              y="54"
              rx="20"
              ry="10"
              fill="#FF6CC4"
              stroke="red"
              stroke-width="3"
              width="75"
              height="75"
            />
            <!-- circle表示圓形 -->
            <!-- cx/cy 表示圓心座標位置 -->
            <!-- r表示半徑 -->
            <circle
              id="a2"
              fill="#5CD5FF"
              stroke="#FFFFFF"
              stroke-width="5"
              cx="109.25"
              cy="118"
              r="40.75"
            />
            <!-- 多邊形 -->
            <!-- points表示每個點的座標位置，空格表示斷點 -->
            <!-- 範例，第2/4/6個可刪除 -->
            <polygon
              id="a1"
              fill="#FFB65F"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-miterlimit="10"
              points="
              109.25,112.941
              129.186,147.471
              149.121,182
              109.25,182
              69.378,182
              89.314,147.471
              "
            />
          </g>
          <g id="layer02">
            <!-- ellipse表示橢圓形 -->
            <!-- https://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86 -->
            <ellipse
              fill="#67CE6F"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-miterlimit="10"
              cx="50"
              cy="50"
              rx="47"
              ry="37.625"
            />
          </g>
        </svg>
`);
</script>
