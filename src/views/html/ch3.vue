<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>html
        <pre>
        {{ htmlTxt }}
      </pre>
      </li>
      <li>css
        <pre>
          @charset "utf-8";
        </pre>
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
const htmlTxt = ref(`
<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">  // 告知瀏覽器用 UTF-8 解碼
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> // 告訴瀏覽器使用最新版的ie引擎來渲染頁面
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="農村地方美食小吃特色料理"> // seo 描述
    <meta name="keywords" content="小吃、美食、特產"> // seo 關鍵字
    // 社交媒體分享
    <meta property="og:title" content="農村地方美食小吃特色料理" /> 
    <meta property="og:type" content="website">
    <meta property="og:image" content="預覽圖URL-要放絕對路徑1200*630" />
    <meta property="og:url" content="https://example.com">
    <meta property="og:description" content="這個網站都介紹農村地方美食小吃特色料理" />

    <title>農村地方美食小吃特色料理</title>
    <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/index.css">
    <script defer src="./js/index.js" type=""> <\/script>  //  用defer放在header，在html下載時，會非同步一起載JS腳本，但該腳本等到html解析完畢後才解析，比單純放在body後面效能更好
</head>
</html>
`);
</script>

<style lang="scss" scoped></style>