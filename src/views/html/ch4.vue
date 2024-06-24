<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>html
        <ul>
          <li>一個html至少有一個h1</li>
          <li>盡量不要有空標籤，可用偽類代替</li>
          <li>為了seo，盡量使用img而非background-image</li>
          <li>img屬性要先預設好，width/height/alt</li>
          <li></li>
        </ul>
      </li>
      <li>
        css
        <ul>
          <li>css的Animatiom，盡量可以用transition代替
            <pre>
              transition:display 1s ease-in-out;  // display有變化時，1秒的ease-in-out動畫
            </pre>
          </li>
          <li>class取名用小駝峰，階層式命名 __代表子層，--表示同層級但有些許不同處</li>
          <li>
            id命名大駝峰，不用依照css層級規則。
          </li>
          <li>class命名上，別讓功能綁住名稱，但要取得名稱一目了然</li>
          <li>容器名稱要彈性化，也時候直接將標籤當作容器class名稱</li>
        </ul>
      </li>
      <li>js
        <ul>
          <li>變數選擇器的命名，採用小駝峰，不需要分層</li>
          <li>變數抓取節點，該變數名稱要有elem</li>
          <li>執行的函數，通常放在宣告變數後</li>
          <li>通常用querySelector抓取id代替 querySelectorAll </li>
          <li>抓取API時，若不設置header，則不會強制要求用特定格式文件處理</li>
          <li>API，response.status取代，response.OK</li>
          <li>innerHTML消能>appendChild</li>
          <li>善用語法糖，空陣列的賦予可以用以下範例
            <pre>
              allCitysFoodData[item.City] = allCitysFoodData[item.City] || {};
            </pre>
          </li>
        </ul>
        <ul>
          <li>用addeventListener取代 onclick=''</li>
          <li>模組化應用
            <pre>
              a.js
              export function getData() {}
              export const name = 'Gary';

              index.js
              import {getData,name} from './a.js';
              console.log(name);
              getData();
            </pre>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});

</script>

<style lang="scss" scoped></style>