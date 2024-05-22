import { app } from "electron";
import { mainWindow } from "../main.js";
// 設定圖標路徑
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // 該檔案的父層目錄
const iconPath = path.join(
  path.dirname(__dirname),
  "assets",
  "icon",
  "pic.png"
);

// 設定應用程式圖標
export function _setIcon() {
    console.log(iconPath);
  app.dock.setIcon(iconPath); // macOS 上的 Dock 圖標
  app.setWindowIcon(iconPath); // Windows 和 Linux 上的視窗圖標
}

export function setbarIcon(){
  mainWindow.setIcon(iconPath); // macOS 上的 Dock 圖標
}
