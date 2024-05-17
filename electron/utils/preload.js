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
//
const { ipcRenderer } = require("electron");
ipcRenderer.on("SET_SOURCE", async (event, sourceId) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: "desktop",
        },
      },
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720,
        },
      },
    });
    handleStream(stream);
  } catch (e) {
    handleError(e);
  }
});

let buffer = [];

function onDataAvailable(d) {
  if (d && d.data && d.data.size > 0) {
    buffer.push(d.data);
  }
}

function handleStream(stream) {
  // video
  const video = document.querySelector("video");
  video.srcObject = stream;
  video.onloadedmetadata = function (e) {
    video.play(); // 播放鍵放在別處
  };
  // audio
  console.log(stream);
  let options = {
    mimeType: "video/webm;codecs=vp8",
  };
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.error(`${options.mimeType} is not supported`);
  }
  try {
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.ondataavailable = onDataAvailable;
    mediaRecorder.onerror = onRecorderError;
    mediaRecorder.start(10);

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
}

function handleError(e) {
  console.log(e);
}
function onRecorderError(e) {
  console.error("Recorder error", e);
}
