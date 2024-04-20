<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      用於更清楚知道每個區塊的目的而設計，取代div用
      <ul>
        <li>對SEO優化有幫助</li>
        <li>可以快速抓到網頁架構及區塊位置</li>
      </ul>

      <li>
        網頁結構化標籤，
        <ul>
          <li>header，頁首</li>
          <li>footer，頁尾</li>
          <li>main,，主要內容</li>
          <li>nav，導覽列</li>
          <li>section，群組標籤(群組區塊)，把相關的內容放在一起</li>
          <li>
            article，文章，通常搭配header、footer一起用
          </li>
        </ul>
      </li>
      <li>
        表單，form
        <ul>
          <li>fieldset，會創建一個容器，表單元素分類用，通常與legend一起用</li>
          <li>legend，用於為fieldset定義一個標題。</li>
          <pre>
{{ legend }}
</pre>
          <li>label，通常與input一起使用，有個屬性for="aa"，會把label與id為aa的input綁定，點label會讓input聚焦</li>
          <li>input</li>
          <li>button</li>
          <li>select</li>
          <li>textarea</li>
        </ul>
      </li>



      <li>
        h1~h6，heading(標題)，代表標題，h1表示最重要的標題，最不重要的是h6
      </li>
      <li>
        p，段落(Paragraph)，表示一"段"文章的開頭與結尾。
      </li>

      <li>a，超連結</li>
      <li>img，圖片</li>
      <li>ul(無序)、ol(有序)、li(列表項目)，列表</li>
      <li>表格，table、tr、td、thead、tbody、tfoot</li>
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
const legend = ref(
  `<form>
  <fieldset>
    <legend>个人信息</legend>
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name"><br>
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email"><br>
  </fieldset>
</form>`
)
</script>
<style lang="scss" scoped></style>