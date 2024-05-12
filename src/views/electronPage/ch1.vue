<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        cross-env 是一个非常有用的工具，用于在跨平台的开发环境中设置环境变量，确保脚本在不同操作系统上的一致性和可移植性。
        electron
electron-builder
wait-on  開發過程需要的東西，先開啟vite項目，在開啟electron
Concurrently 是一个用于在开发过程中同时运行多个命令的实用工具。在 Electron 项目中，它通常用于同时运行前端开发服务器和 Electron 应用程序。

npm add electron concurrently cross-env electron-builder wait-on -D

-D 是 --save-dev 的缩写，表示将安装的包添加到开发依赖项（devDependencies）中。

package.json新增
"electron:serve": "concurrently -k \"npm dev\" \"npm electron\"",
    "electron:build": "vite build && electron-builder",
    "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ."

要提供electron的入口文件
"main":"electron/main.js",

      </li>
      <li></li>
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