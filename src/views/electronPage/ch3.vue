<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>先建置一般vue3 + vite的專案</li>
      <li>安裝必要套件
        <br />
        <span class="r"> npm add electron electron-builder cross-env wait-on concurrently -D</span>
        <ul>
          <li>cross-env，用於跨平台設置開發環境變量</li>
          <li>wait-on，用於在開發過程中同時運行多個命令的工具</li>
          <li>-D，是--save-dev的縮寫，表示將安裝包添加到開發依賴項(devDependencies)</li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        <span @click="isshow_jsActive = !isshow_jsActive" class="b">js代碼執行前的階段</span>
        <ul v-if="isshow_jsActive">
          <li>源碼階段，代碼編寫階段</li>
          <li>解析階段，將源碼解析為抽象語法樹（AST）的階段</li>
          <li>預編譯階段，代碼執行前進行的一些準備工作，包括變量提升、函數提升、作用域鏈的創建等。在這個階段，JavaScript引擎會對代碼進行預處理，<span class="r">生成執行上下文</span>。</li>
          <li>執行階段，這個階段是指代碼真正開始執行的階段。在這個階段，JavaScript引擎會按照代碼的順序執行，執行上下文會被壓入執行棧中，形成執行上下文棧。</li>
        </ul>
      </li>
      <li>
        根目錄放置electron資料夾，內部放electron入口文件，
        <table border="1">
          <tr>
            <td>種類</td>
            <td>
              vite，package.json內
            </td>
            <td>內容</td>
            <td>語法差異</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CommonJS(舊版)</td>
            <td>"type": "commonjs" (vite會提示已棄用)</td>
            <td>
              <span class="b" @click="popout_page_mainCJS = true">main.CJS內容</span>
              <popout_page :contentsType="'mainCJS'" @closePage="popout_page_mainCJS = false"
                v-if="popout_page_mainCJS" />
            </td>
            <td>require()和module.exports 來引入/導出模塊</td>
            <td>同步加載</td>
            <td>運行時動態加載的，這意味著模塊的導入和導出發生在代碼執行時。</td>
            <td></td>
          </tr>
          <tr>
            <td>ES6</td>
            <td>"type": "module"</td>
            <td></td>
            <td>import和export語法 來引入和導出模塊。</td>
            <td>異步加載</td>
            <td>靜態解析時加載的，這意味著模塊的導入和導出在代碼執行之前就已經確定。</td>
            <td></td>
          </tr>
        </table>
      </li>
      <img src="@/assets/123.jpg" alt="">
      <li>
        <ul>
          <li>在index.html設置 <span class="b">{{ meta1 }}</span></li>
          <li>meta放在head標籤裡，提供網頁的附加信息</li>
          <li>http-equiv="Content-Security-Policy" 指定網頁的內容安全策略(CSP)，用於限制網頁中執行的 JavaScript 代碼的來源。</li>
          <li>content="script-src 'self'" 指定允許載入和執行 JavaScript 的來源 為 只允許從同一域名載入和執行 JavaScript 代碼。 </li>
        </ul>
      </li>
      <li>package.json新增
        <ul>
          <li>electron的入口文件設置 "main":"electron/main.cjs"</li>
          <li>
            同時運行 npm run dev 與 npm run electron
            <br>
            \" \" 用來避免當作結束符號
            <pre>
"scripts": {
  "electron:serve": "concurrently -k \"npm run dev\" \"npm run electron\"",
  "electron:build": "npm run build && electron-builder",   // 僅有打包，不含其他功能
  "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ."
}
</pre>
          </li>
          <li>electron應用程式構建配置文件
            <pre>
"build": {
  "productName": "網頁筆記", // 應用程式名稱
  "copyright": "版權所有 © 2024 您的公司名称。保留所有权利。", // 版權聲明，不限格式
  "files": [ // 指定構建時要包含在應用程序的文件(要打包啥東西)
    "dist/**/*",
    "electron/**/*"
  ],
  "directories": {  // 指定構建時的目錄配置(打包後的目錄配置)
    "buildResources": "assets", // 構建資源所在位置，通常放專案的圖標、樣式表、本地化資源(在vite專案不明顯)
    "output": "dist_electron" // 打包後的目錄位置
  },
  "nsis": { // windows平台的nsis安裝程式相關配置
    "oneClick": false,   // 一鍵安裝
    "allowToChangeInstallationDirectory": true, // 允許用戶更改安裝目錄
    "deleteAppDataOnUninstall": true // 卸載應用程序時，是否刪除用戶數據
  },
  "mac": {
    "category": "public.app-category.unilities", // 設置應用程序分類為 實用工具類應用程式
    "target": "dmg"  // macos的安裝文件
  },
  "win": {
    "target": "nsis"  // Windows 安装程序
  },
  "linux": {
    "target": "AppImage"  // 生成 Linux AppImage 文件
  }
},
            </pre>
          </li>
        </ul>


      </li>
      <li>
        要打包時，vscode要用 開發者模式打開
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
import popout_page from "@/components/popout.vue";

const isShow = ref(false);
const isshow_jsActive = ref(false);
const popout_page_mainCJS = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
const meta1 = `<meta http-equiv="Content-Security-Policy" content="script-src 'self'">`
</script>
<style lang="scss" scoped></style>
