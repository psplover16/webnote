<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>vite底層用rollup 編譯，但有些檔案編譯規則在某些平台會有問題</li>
      <li>
        修改vite.config.js
        <pre>
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            // eslint-disable-next-line no-control-regex
            const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g; // 檢測特殊字元及 ASCII碼0~31及127的控制字元，g表示對全部字元搜索，若不加g，則只會找到第一個匹配結果
            const DRIVE_LETTER_REGEX = /^[a-z]:/i; // 檢查是否  英文字母:  這種格式開頭(^ 表示只匹配開頭)，該英文字母不分大小寫 (因為i結尾(表示不分大小寫))
            //
            const match = DRIVE_LETTER_REGEX.exec(name); // 正則的exec 檢查匹配結果
            const driveLetter = match ? match[0] : ""; // 檔案名稱不以 驅動器字母為開頭，則 driveLetter 設定為空字串
            // substr 是被淘汰語法，因此要改 slice
            return (
              // 將name刪掉 驅動子母開頭，只留檔案名稱本身
              // 將上述處理得到的 檔案名稱本身，將不合法字元全部取代掉，取代成空字串
              // 最後再將檔案名稱重組
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      },
    },
        </pre>
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