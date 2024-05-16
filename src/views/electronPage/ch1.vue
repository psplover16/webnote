<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>electron進程
        <ul>
          <li>主進程，Electron 應用程式的主要進程，負責控制應用程式的生命週期、管理窗口、與底層系統進行通信等。主進程運行的是 Node.js 環境，可以使用 Node.js 的模塊和
            API，並且可以創建和管理渲染進程。</li>
          <li>渲染進程是 Electron 應用程式中的網頁代碼運行的地方。渲染進程運行的是網頁環境，可以通過 Electron 提供的 API 與主進程進行通信。</li>
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