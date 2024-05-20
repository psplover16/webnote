// // 預載項目
window.addEventListener("DOMContentLoaded", () => {
  //
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerHTML = text;
    }
  };
  // 版本號寫入 id名稱為 chrome-version / node-version / electron-version
  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
  //
});

//
// ipcRenderer 是一個 Electron API，它允許渲染進程向主進程發送同步或異步的消息，並接收主進程回傳的消息
// contextBridge，你可以在主進程中定義一個 API 對象，然後將這個對象暴露給渲染進程。
const { ipcRenderer, contextBridge } = require("electron");
// 影像串流(全局變數) 指連續的數據流，例如音頻或視頻數據。在影音串流中，數據被分成小的數據包（packets），並以連續的方式傳輸。
let stream;
// 從主進程撈到名稱為 SET_SOURCE 的影像資源，(該資源放在 desktopCapture.js，並由主進程引入)
ipcRenderer.on("SET_SOURCE", async (event, sourceId) => {
  try {
    // 獲取影音串流 (webRTC)
    stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          // 指定必須滿足的媒體設置條件
          chromeMediaSource: "desktop", // 指定媒體源的類型 (希望獲取媒體類型為桌面)
          chromeMediaSourceId: sourceId,
        },
      },
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId, // 在多個螢幕或視訊輸入設備的情況下，可以使用 chromeMediaSourceId 屬性指定要使用的特定螢幕或設備。
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720,
        },
      },
    });
    handleStream();
  } catch (e) {
    handleError(e);
  }
});

let buffer = []; // 用於臨時存儲數據的區域
//
function onDataAvailable(d) {
  if (d && d.data && d.data.size > 0) {
    buffer.push(d.data);
  }
}

function handleStream() {
  // video
  const video = document.querySelector("video");
  video.srcObject = stream;
  video.onloadedmetadata = function (e) {
    // 事件監聽，會在影片的元數據載入完成後觸發
    // video.play(); // 播放鍵放在別處
  };
}

function dealStream() {
  buffer = [];
  console.log(buffer);
  let options = {
    // 錄製格式，常見的有
    // 影片 MIME 類型：video/mp4、video/webm、video/quicktime 等。
    // 音訊 MIME 類型：audio/wav、audio/mpeg、audio/ogg 等。
    mimeType: "video/webm;codecs=vp8", // 援高品質的影片壓縮和串流傳輸，通常用於web網頁播放，用vp8壓縮(WebRTC編碼器常見格式)
  };
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.error(`${options.mimeType} is not supported`);
  }
  try {
    // mediaRecorder 隱式設置全域變數
    mediaRecorder = new MediaRecorder(stream, options); // MediaRecorder 為JS錄製媒體的API
    mediaRecorder.ondataavailable = onDataAvailable; // 有新的資料可供處理時，ondataavailable 事件會觸發
    mediaRecorder.onerror = onRecorderError;
    mediaRecorder.start(10); // 啟動MediaRecorder 物件，以每秒幀數10來開啟

    setTimeout(() => {
      saveVideo();
    }, 5000);
  } catch (e) {
    console.error(e);
  }
}

function saveVideo() {
  if (buffer) {
    var blob = new Blob(buffer, { type: "video/webm" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");

    a.href = url;
    a.style.display = "none";
    a.download = "record.webm";
    a.click();
  } else {
    console.error("record error");
  }
  mediaRecorder.stop();
}

function handleError(e) {
  console.log(e);
}
function onRecorderError(e) {
  console.error("Recorder error", e);
}

// 在渲染進程的全局作用域中暴露一個名為 electronAPI 的對象
contextBridge.exposeInMainWorld("electronAPI", {
  getBuffer: () => buffer, // 讓Vue組件可以抓到buffer
  getStream: () => stream,
  dealStream: dealStream, // 讓Vue組件可以抓到 function
});
