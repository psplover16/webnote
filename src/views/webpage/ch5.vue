<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>CSRF攻擊，Cross-Site Request Forgery，跨站請求偽造，攻擊者利用使用者的身分訊息，執行了使用者非本意的操作
        <ul>
          避免辦法
          <li>Token</li>
          <li></li>
        </ul>
      </li>
      <li>
        XSS攻擊，Cross Site Scripting，跨站腳本攻擊，攻擊者通過注入腳本來利用網站本身的程式漏洞。當其他用戶訪問受影響的網頁時，這些腳本將在用戶的瀏覽器執行，從而被竊取個資、劫持通話、修改網頁內容。
        <ul>主要分成三種
          <li>存儲型，攻擊者將惡意腳本存在目標網站的DB，當其他用戶訪問到包含惡意代碼的頁面時，惡意代碼會執行</li>
          <li>反射型，攻擊者將惡意腳本作為參數附加在URL上，當用戶點擊該鏈接時，會觸發</li>
          <li>DOM型，攻擊者透過修改網頁的DOM，來注入惡意腳本</li>
        </ul>
        <ul>
          避免
          <li>用戶需要輸入的數據進行驗證及過濾</li>
          <li>將用戶需要輸入的數據顯示在網頁上時，對特殊符號進行編碼，以防止瀏覽器將其誤認為是腳本代碼</li>
          <li>避免使用不安全的 JavaScript API，例如 eval() 函数和 innerHTML 属性。</li>
          <li>設置HTTP頭部，通過適當的Content-Security-Policy(內容安全策略) 和 X-XSS-Protection 來增加防護層級
            <ul>
              <li>
                <meta http-equiv="Content-Security-Policy" content="规则">
                <br>
                Content-Security-Policy: script-src 'self' example.com; // 只允许从当前域名和 example.com 加载脚本，阻止内联脚本的执行。
              </li>
              <li>
                在伺服器或服務器 HTTP 響應head設置，
                <br>
                X-XSS-Protection: 1
              </li>
            </ul>
          </li>
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