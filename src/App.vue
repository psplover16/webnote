<template>
  <!-- <router-link to="/">Home</router-link> | -->
  <div class="title_APP">
    <router-link to="/JS_basic" :class="[checkRoute('JS_basic')]">
      JS基礎知識
    </router-link>
    <router-link to="/frontframe" :class="[checkRoute('frontframe')]">前端框架</router-link>
    <router-link to="/frontEngineering" :class="[checkRoute('frontEngineering')]">前端工程化與工具</router-link>
    <router-link to="/dom_event" :class="[checkRoute('dom_event')]">DOM操作和事件處理</router-link>
    <router-link to="/RWD" :class="[checkRoute('RWD')]">頁面布局和樣式</router-link>
    <router-link to="/webpage" :class="[checkRoute('webpage')]">瀏覽器相關知識</router-link>
    <router-link to="/html" :class="[checkRoute('html')]">html標籤</router-link>
    <router-link to="/electronPage" :class="[checkRoute('electronPage')]">electron</router-link>
  </div>
  <router-view></router-view>
  <!-- 版本區 -->
  <div style="position: relative;bottom: 0;">
    <div>Chrome:
      <span id="chrome-version"></span>
    </div>
    <div>node:
      <span id="node-version"></span>
    </div>
    <div>electron:
      <span id="electron-version"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const checkRoute = (key) => {
  let a = "b";
  if (route.meta.title) {
    a = route.meta.title == key ? "r" : "b";
  }
  return a;
};

const LOGIN=`
1.為啥全台超商數量為 1.5萬間
統一超商股票代號，2912

全台超商年營收 900億元-----
營業額 一個月100W，算是還可以
浮洲的超商是兩間打通，也就是以單一間算50萬來計算
900億 / 50萬 / 12 = 1萬5000


2.台北/新北/台中 人口數
260/400/280


3.台中要有多少理髮師
男女比例約為1:1，男性剪髮約30分鐘，女性約1小時，平均一人剪髮約45分鐘。
按照勞基法，一天表定工作時間8小時，一天一位理髮師 約可以接10.66位客人，算一天接10位客人。
一個月可接300位客人。

台中有280萬人，280萬/300 = 9333.333，理髮師約9300左右合理。

4.車牌號碼，前兩位為字母，後兩位為數字，每一位0~9，不能出現4
9*9*9*9 = 6561

5.兩個盒子，一個裝了50個金球、50個銅球。一個裝了75個金球、25個銅球。
一開始隨機抽一箱子，抽出一顆球，可以選擇要不要換抽另一個箱子，目標為金球
 5-A.若一開始抽到銅球，要換箱子嗎? 原因及機率?
50/99 或 75/99，直接抽的機率為 (50+75)/2 / 99，0.631，不換
1/2，75/100，1/2+3/4 = 2/4 + 3/4 = 2.5/4，0.625

 5-B.若一開始抽到金球，你會抽另一個箱子嗎? 原因及機率?
49/99 或 74/99，直接抽的機率為 (49+74)/2/99 = 0.621
1/2，75/100，>>>> 0.625，要換

6.



`
</script>

<style lang="scss">
html {
  font-size: 16px;
}

body {
  margin: 8px;
}

@media screen and (max-width:500px) {
  html {
    font-size: 10px;
  }
}

.title_APP {
  display: block;
  // justify-content: center;
  // align-items: center;
  font-size: 1.7rem;
  text-align: center;

  a {
    display: inline-block;
    margin: 10px;
  }
}

.r {
  color: red;
}

.b {
  color: blue;
}

li {
  word-break: break-all;
  white-space: pre-wrap;
}

.isShow {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotate180 {
  transform: rotate(180deg);
}

table {
  border-collapse: collapse;

  td {
    padding: 5px 10px;
  }
}
</style>

<!-- √ 根號 -->
<!-- ± -->
<!-- 次方
  ^
⁰：U+2070，HTML 实体编码：&sup0;
¹：U+00B9，HTML 实体编码：&sup1;
²：U+00B2，HTML 实体编码：&sup2;
³：U+00B3，HTML 实体编码：&sup3;
⁴：U+2074，HTML 实体编码：&sup4;
⁵：U+2075，HTML 实体编码：&sup5;
⁶：U+2076，HTML 实体编码：&sup6;
⁷：U+2077，HTML 实体编码：&sup7;
⁸：U+2078，HTML 实体编码：&sup8;
⁹：U+2079，HTML 实体编码：&sup9; -->
