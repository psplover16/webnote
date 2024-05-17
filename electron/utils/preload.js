
const { ipcRenderer } = require('electron');

// // 預載項目
window.addEventListener("DOMContentLoaded", () => {
    // 
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerHTML = text;
        }
    }
    // 版本號寫入 id名稱為 chrome-version / node-version / electron-version
    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});





ipcRenderer.on('SET_SOURCE', async (event, sourceId) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720,
        },
      },
    });
    handleStream(stream);
    console.log("123132123132132132123123132123");
  } catch (e) {
    handleError(e);
    console.log("4545645465465");
  }
});

function handleStream(stream) {

  const video = document.querySelector('video');
  video.srcObject = stream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
}

function handleError(e) {
  console.log(e);
}