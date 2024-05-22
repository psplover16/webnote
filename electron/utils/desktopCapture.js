import { desktopCapturer, app } from "electron";
import { mainWindow } from "../main.js";

const appName = app.getName();

export default function desktopCapture() {
  desktopCapturer
    .getSources({ types: ["window", "screen"] })
    .then(async (sources) => {
      // 固定獲取第一個(全螢幕)畫面
      const newSources = Object.values(sources);
      mainWindow.webContents.send("SET_SOURCE", newSources[0].id);
      return;
      //
      //
      // 這為獲取特定名稱，比較麻煩，功能不完整
      // console.log(appName)
      // for (const source of sources) {
      //   console.log(source.name[0])
      //   if (source.name === appName) {
      //     mainWindow.webContents.send("SET_SOURCE", source.id);
      //     return;
      //   }
      // }
    });
}
