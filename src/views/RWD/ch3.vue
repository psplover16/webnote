<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        響應式設計
        <ul>
          <li>
            @media (max-width: value)
            當視窗寬度不超過某個指定值時套用樣式，瀏覽器視窗的寬度小於等於指定的值時，這些樣式將會套用
          </li>
          <li>
            @media (min-width: value)
            瀏覽器視窗的寬度大於等於指定的值時，這些樣式將會被套用
          </li>
        </ul>
      </li>
      <li>
        媒體查詢
        <br />
        @media mediatype and (media feature) { /* CSS 样式规则 */ }
        <br />
        <ul>
          <li>
            mediatype：媒體類型，例如
            all（所有設備）、screen（屏幕）、print（打印機）等。
          </li>
          <li>
            media feature：媒體特性，例如
            width（視口寬度）、height（視口高度）、orientation（設備方向）等。
            <ul>
              常見媒體特性
              <ul>
                <li>width：視口寬度。</li>
                <li>height：視口高度。</li>
                <li>min-width：最小視口寬度。</li>
                <li>max-width：最大視口寬度。</li>
                <li>
                  orientation：設備方向，可以是 landscape（橫向）或
                  portrait（縱向）。
                </li>
                <li>aspect-ratio：視口的寬高比。</li>
                <li>resolution：螢幕解析度。</li>
              </ul>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        rem
        <pre>
html {
  font-size: 16px; /* 設置初始文字大小 */
}
/* 其他元素使用rem設置大小 */
body {
  font-size: 1rem; /* 即 16px */
}
        </pre>
      </li>
      <li>rwd常見尺寸，480/414/375/360/320</li>
      <li>
        IOS手機瀏海避免遮住的方式
        <div>{{ iosSafePadding }}</div>
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
const iosSafePadding = `#app {
  /* 屏幕上方的安全區域邊距 */
  /* constant 為舊版IOS的函數，會返回固定的值 */
  /* env 為推薦的使用函數，能返回當前設備的安全距離 */
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  padding-right: constant(safe-area-inset-right);
  padding-right: env(safe-area-inset-right);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: constant(safe-area-inset-left);
  padding-left: env(safe-area-inset-left);
}`
</script>

<style>
</style>
