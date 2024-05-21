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
    <router-link to="/LogicPage" :class="[checkRoute('LogicPage')]">Logic</router-link>
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
