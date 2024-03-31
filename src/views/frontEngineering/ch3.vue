<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>Vite 預設使用現代瀏覽器的原生 ES 模組匯入功能，但在某些情況下，仍可能需要對程式碼進行轉譯，以確保程式碼在舊版瀏覽器中的相容性。</li>
      <li>
        Polyfill API修復功能，Vite內建
      </li>
      <li>Babel 是 JavaScript 的編譯器(compiler)工具，可以把 ES6 標準以上的新語法轉換成最基本的 JS 語法</li>
      <li>
        Vite，Babel引用
        <br>
        npm i vite-plugin-babel
        <pre>
  // vite.config.js
  import babel from 'vite-plugin-babel';

  export default defineConfig({
    plugins: [
      vue(),
      // 使用 Babel 插件
      babel(),
    ],
  });
        </pre>
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