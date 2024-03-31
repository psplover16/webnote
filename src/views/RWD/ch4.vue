<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>word-break，控制長單詞是否換行
        <ul>
          <li>normal，使用瀏覽器默認的斷行規則</li>
          <li>break-all，強制單辭斷行</li>
          <li>keep-all，禁止斷行</li>
        </ul>
      </li>
      <li>overflow-wrap，用於控制文本是否斷行，斷行規則與word-break同</li>
      <li>white-space，控制元素內空白字符的處理方式
        <ul>
          <li>normal，預設值。連續的空白符會被合併，換行符會被視為空白符，文字會根據需要自動換行。</li>
          <li>nowrap，不允許文字換行，所有的空白符都被視為普通字元。</li>
          <li>pre，保留所有的空白符，但不允許文字換行。</li>
          <li>pre-wrap，保留所有的空白符，但允許文字根據需要換行。</li>
          <li>pre-line，連續的空白符號會被合併，但允許文字根據需要換行。</li>
        </ul>
      </li>
      <li>
        white-space:pre-wrap; + word-break:break-all; // 強制斷行
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
});
const isShow = ref(false);
</script>