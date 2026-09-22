<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <svg width="640" height="480" style="border: 1px solid black;">
        <line x1="50" y1="50" x2="350" y2="300" stroke="red" stroke-width="2"></line>
        <circle cx="200" cy="50" r="50" fill="yellow"></circle>
        <rect x="150" y="100" width="100" height="100"></rect>
        <polygon point="150,100,250,200,200,300" fill="black"></polygon>
        <text x="100" y="350" fill="green" font-weight="bold" font-size="45">Hello</text>
      </svg>
      <pre>
  {{ svgCode }}
</pre>
      <li>svg屬於畫布
        <ul>
          <li>需要設置寬高</li>
          <li>向量位置起點在左上角</li>
          <li>x軸靠右逐漸增加，Y軸靠下逐漸增加</li>
        </ul>
      </li>
      <li>line，線
        <ul>
          <li>需要兩點(x1,y1)與(x2,y2)</li>
          <li>stroke 表示線的顏色</li>
          <li>stroke-width，表示線的長度</li>
        </ul>
      </li>
      <li>circle，表示圓形
        <ul>
          <li>(cx,cy)表示起點位置</li>
          <li>r為半徑</li>
          <li>fill，表示填充顏色</li>
        </ul>
      </li>
      <li>rect ，表示矩形
        <ul>
          <li>(x,y)表示起點</li>
          <li>width，設置矩形寬度</li>
          <li>height，設置矩形高度</li>
        </ul>
      </li>
      <li>polygon，多邊形
        <ul>
          <li>point="" 內部要填位置，兩個為一組，對應x,y</li>
        </ul>
      </li>
      <li>text，可以放文字
        <ul>
          <li>(x,y)表示起點</li>
          <li>font-weight，文字粗細</li>
          <li>font-size，文字大小</li>
          <li>fill，表示填充顏色</li>
        </ul>
      </li>
      <!-- <li></li> -->
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
});
const isShow = ref(false);
const svgCode = `  <svg width="640" height="480" style="border: 1px solid black;">
      <line x1="50" y1="50" x2="350" y2="350" stroke="red" stroke-width="2"></line>
      <circle cx="200" cy="50" r="50" fill="yellow"></circle>
      <rect x="150" y="100" width="100" height="100"></rect>
      <polygon point="150,100,250,200,200,300" fill="black"></polygon>
      <text x="100" y="350" fill="green" font-weight="bold" font-size="45">Hello</text>
    </svg>`
</script>