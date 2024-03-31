<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <pre>
  import { defineConfig, loadEnv } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import path from "path"

  export default defineConfig((command, mode, ssrBuild) => {
    const env = loadEnv(mode, process.cwd())
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': [path.resolve(__dirname, './src')] //設置路徑代表的東西
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData: `@import "@/styles/main.scss";`, // 将你的全局样式文件引入到每个组件
          },
        },
      },
      envDir: path.resolve(__dirname, "./env"),
    }
  })
        </pre>
      </li>
      <li>
        <ul>
          <li>defineConfig 是 Vite 中用於建立配置物件的函數。 透過呼叫 defineConfig 函數，你可以建立一個包含 Vite 建構所需各種選項的配置物件。</li>
          <li>在 defineConfig 函數中，可以傳入一個函數，該函數接收三個參數：command、mode 和 ssrBuild。
            <ul>
              <li>command: 目前執行的指令，可能的取值為 "build"、"serve" 或 "ssr"。 分別代表建置、開發伺服器和伺服器端渲染。</li>
              <li>mode: 目前的模式，可能的取值為 "development" 或 "production"。 分別代表開發模式和生產模式。</li>
              <li>ssrBuild: 是否是伺服器端渲染（SSR）的建置。 如果是 SSR 構建，則值為 true；否則為 false。</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>__dirname，Node.js 中的一個全域變量，用於取得目前執行檔所在的目錄的路徑。</li>
      <li>resolve，配置模塊解析行為
        <ul>
          <li>alias，設置路徑別名</li>
        </ul>
      </li>
      <li>css，配置css相關
        <ul>
          <li>
            preprocessorOptions，指定處理器的配置
            <ul>
              <li>
                scss，指定了預處理器的類型
                <ul>
                  <li>additionalData，用於指定額外的scss數據</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        envDir，配置env的位置
        <ul>
          <li>path.resolve()，Node.js 中的一個方法，用於將多個路徑解析為一個絕對路徑。</li>
        </ul>
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