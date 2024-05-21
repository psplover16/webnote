import { desktopCapturer,app } from "electron";
import { mainWindow } from "../main.js";

const appName = app.getName();


export default function desktopCapture() {
  desktopCapturer
    .getSources({ types: ["window", "screen"] })
    .then(async (sources) => {
      console.log(appName)
      for (const source of sources) {
        console.log(source.name)
        if (source.name === appName) {
          mainWindow.webContents.send("SET_SOURCE", source.id);
          return;
        }
      }
    });
}


