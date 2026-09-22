<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      瀏覽器，load 與 DOMContentLoaded
      <ul>
        <li>
          load，當<span class="r">整個頁面</span
          >所依賴的資源完成加載時觸發，用於檢測完全加載
        </li>
        <li>
          DOMContentLoaded，當初始的html被完全加載和解析完成後觸發，無需等待依賴資源的完全加載
        </li>
      </ul>
      script添加
      <ul>
        <li>
          不加，按照script在html出現的順序依次下載腳本並執行，可能會阻塞後續腳本。
          <pre></pre>
        </li>
        <li>
          defer，瀏覽器會將該腳本的下載延遲至文檔解析完畢後再執行，瀏覽器將繼續處理html構建文檔對象模型(DOM)。對內嵌腳本無效
          <pre></pre>
        </li>
        <li>
          async，瀏覽器會非同步地下載該腳本，而不會阻塞頁面的渲染或其他資源的載入。 當腳本下載完成後，瀏覽器會立即中斷文件的解析，執行該腳本，然後再恢復文件的解析。
          <br />
          HTML中沒有互相依賴的腳本，也不依賴 DOM
          ，誰先執行都沒關係，適用於獨立的第三方腳本。
        </li>
      </ul>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});

// const deferWord = ``;

// const asyncWord = ``;
</script>
<style lang="scss" scoped></style>
