<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        CORS是瀏覽器的限制，代表兩個網址不同源。(不同協定或不同主機或不同port)
      </li>
      <li>
        解決方法
        <ul>
          <li>CORS，伺服器設置
            Access-Controll-Allow-Orgin
            ，標準安全方式，伺服器端設定 CORS 頭部來允許特定來源存取資源。</li>
          <li>代理伺服器，在同源伺服器上建立一個代理接口，將請求轉送到目標伺服器。</li>
          <li>
            Iframe， 透過 &lt;iframe&gt; 載入跨網域的內容，雖然頁面本身仍然受到同源策略的限制，但在 &lt;iframe&gt; 中載入的內容是由目標伺服器傳回的，不受同源策略的限制。 因此，可以利用
            &lt;iframe&gt; 載入跨域的內容來繞過同源策略限制。
            <br>
            iframe溝通，postmessage
            <ul>
              <li>
                父
                <pre>
   const iframe = document.getElementById('myFrame');
   iframe.contentWindow.postMessage('Hello from parent', 'http://example.com');
            </pre>
              </li>
              <li>
                子
                <pre>
  window.addEventListener('message', event => {
  if (event.origin === 'http://example.com') {
    console.log('Message from parent:', event.data);
    // 发送响应
    event.source.postMessage('Hello from child', event.origin);
  }
  });
            </pre>
              </li>
            </ul>
          </li>
          <li>JSONP，利用動態創建script的方法，在src建立請求，限定GET</li>
          <li>WebSocket，WebSocket 不受同源策略的限制，可以直接進行跨域通訊。</li>
          <li>Nginx 反向代理，將客戶端的請求，轉給後端SERVER，有一個中間代理的概念</li>
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