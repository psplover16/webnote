<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>inon配置
        <ul>
          <li class="r">安裝 npm i electron-icon-builder -D</li>
          <li>在package.json設置script
            <br>
            "build-icon":"electron-icon-builder --input=./electron/assets/icon/pic.png --output=./electron/assets/
            --flatten"
            把來源的圖片轉換成icon檔，存至指定位置 (--flatten表示根目錄)
          </li>
          <li>設置打包後的桌面圖標及安裝圖標
            <pre>
"mac": {
  "icon": "./electron/assets/icons/icon.icns"
},
"win": {
  "icon": "./electron/assets/icons/icon.ico"
},
</pre>
          </li>
          <li>
            設置容器內的標題icon，在main.js 設置 (創建時就會設置)
            <pre>
new BrowserWindow({
  icon: path.join(__dirname, "assets/icons/icon.ico"), // 配置容器icon （bar上面的icon）
})
            </pre>
          </li>
          <li>
            動態設置icon， mainWindow.setIcon(iconPath); // mainWindow 為創建後的容器，把這一串function放在ready之後的生命週期位置
          </li>
        </ul>
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