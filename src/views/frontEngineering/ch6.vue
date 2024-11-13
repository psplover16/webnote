<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        安裝工具，--save-dev，開發過程才會引用
        <ul>
          <li>npm i vite-plugin-image-optimizer --save-dev</li>
          <li>npm install sharp --save-dev</li>
          <li>npm install svgo --save-dev</li>
        </ul>
      </li>
      <li>
        vite.config.js
        <ul>
          <li>import { ViteImageOptimizer } from "vite-plugin-image-optimizer";</li>
          <li>
<pre>
plugins: [
  ViteImageOptimizer({ // 壓縮圖片品質
    jpg: { quality: 100 },
  }),
],
</pre>
          </li>
        </ul>
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
</script>
