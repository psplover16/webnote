<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>npm install --save-dev rollup-plugin-visualizer</li>
      <li>
        vite.config.js
        <ul>
          <li>import { visualizer } from 'rollup-plugin-visualizer';</li>
          <li>
            <pre>
plugins: [vue(),
  visualizer({
    open: true, // 設置為true,否則無效
    filename: "./dist/stats.html", // 生成檔案名稱與路徑
    gzipSize: true, // 收集 gzip大小，並顯示
    brotliSize: true, // 收集 brotli 大小，並顯示
  }),
],
            </pre>
          </li>          
        </ul>
      </li>
      <li>打包後，會出現</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
</script>
