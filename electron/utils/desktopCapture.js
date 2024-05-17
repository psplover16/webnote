import { desktopCapturer } from "electron";
import { mainWindow } from "../main.js";

export default function desktopCapture() {
  desktopCapturer
    .getSources({ types: ["window", "screen"] })
    .then(async (sources) => {
        // console.log(sources)
      for (const source of sources) {
        console.log(source.name)
        if (source.name === "整個螢幕畫面") {
          mainWindow.webContents.send("SET_SOURCE", source.id);
          return;
        }
      }
    });
}
