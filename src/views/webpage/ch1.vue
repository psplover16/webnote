<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        cookie
        <ul>
          <li>只有4K大小</li>
          <li>由伺服器發送到客戶端並保存在客戶端的小型文字文件</li>
          <li>以設定 Cookie 的過期時間，可以在不同頁面之間共用數據</li>
          <li>與server溝通時，會把用到的cookie全部丟給server (幾乎都是後端控制)</li>
          <li>
            <pre>
fetch('https://example.com/api/data', {
  method: 'GET',
  credentials: 'include'
})
            </pre>
            <ul>credentials
              <li>omit，預設值，不攜帶</li>
              <li>same-origin 表示請求只會在當前域下發送，會攜帶當前域下符合條件的cookie</li>
              <li>include'表示請求會攜帶所有符合條件的Cookie，不僅限於當前域</li>
            </ul>
          </li>
          <li>
            form的方式，會自動將cookie添加至請求
          </li>
        </ul>
      </li>
      <li>
        SessionStorage，資料儲存至關閉頁面會瀏覽器清除
        <ul>
          <li>5MB</li>
          <li>sessionStorage.setItem('key', 'value');</li>
          <li>const data = sessionStorage.getItem('key');</li>
          <li>sessionStorage.removeItem('key');</li>
        </ul>
      </li>
      <li>
        LocalStorage，儲存至清除
        <ul>
          <li>5MB</li>
          <li>localStorage.setItem('key', 'value');</li>
          <li> const data = localStorage.getItem('key');</li>
          <li> localStorage.removeItem('key');</li>
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