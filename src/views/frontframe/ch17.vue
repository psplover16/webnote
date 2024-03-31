<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>設置
        <ul>
          <li>在根目錄下建置env資料夾，放置檔案名稱為 .env.環境 的檔案</li>
          <li>在vite.config.js建置
            <pre>
  import { defineConfig, loadEnv } from 'vite'
  export default defineConfig((command, mode, ssrBuild) => {
    // mode: 目前的模式，可能的取值為 "development" 或 "production"
    // process.cwd(): 傳回目前 Node.js 程序的工作目錄路徑。
    const env = loadEnv(mode, process.cwd())  
  })
            </pre>
          </li>
          <li>env的引用， const url = `${import.meta.env.VITE_BASIC_APIURL}`; {{ VITE_BASIC_APIURL }}</li>
        </ul>
      </li>
      <li>預設有以下
        <ul>
          <li>.env：通用的環境變量。</li>
          <li>.env.development：開發環境的環境變量。</li>
          <li>.env.production：生產環境的環境變量。</li>
          <li>.env.test：測試環境的環境變量。</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});
const VITE_BASIC_APIURL = ref("");
onMounted(() => {
  VITE_BASIC_APIURL.value = import.meta.env.VITE_BASIC_APIURL;
  console.log(import.meta.env.VITE_BASIC_APIURL);
  console.log("ZZZZ")
})
</script>
<style lang="scss" scoped></style>