<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>electron進程
        <ul>
          <li>主進程，Electron 應用程式的主要進程，負責控制應用程式的生命週期、管理窗口、與底層系統進行通信等。主進程運行的是 Node.js 環境，可以使用 Node.js 的模塊和
            API，並且可以創建和管理渲染進程。</li>
          <li>渲染進程是 Electron 應用程式中的網頁代碼運行的地方。渲染進程運行的是網頁環境，可以通過 Electron 提供的 API 與主進程進行通信。</li>
        </ul>
      </li>
      <li>
        desktopCapturer，屏幕錄製
        <div ref="videoPos">

        </div>
        <button @click="captureDesktop">擷取桌面影像</button>
        <button @click="saveVideo">錄製五秒影片</button>
        <ul>
          <li>在main.js設置把屏幕錄製</li>
          <li>把錄製到的屏幕，在preload.js轉換成stream，放在video標籤</li>
          <li>video標籤必須在index.html設立</li>
          <li>在需要利用該video標籤的組件內，調用index.html的video標籤到指定組件 (擷取桌面影像)</li>
          <li>把預先寫好再preload的錄製功能，在Vue調用。 錄製五秒影片</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});


const videoPos = ref(null);
let captureDesktop = () => {
  const video = document.getElementById('video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  videoPos.value.appendChild(video)
}

onBeforeUnmount(() => {
  let video = document.getElementById('video');
  // console.log(document.getElementById("videoOriginalPos"))
  video.style.display = 'none';
  document.getElementById("videoOriginalPos").appendChild(video);
})
const saveVideo = () => {
  // console.log(window.electronAPI.getBuffer())
  window.electronAPI.dealStream();
}
onMounted(() => {
  document.getElementById('video').style.display = '';
})
</script>
<style lang="scss" scoped></style>