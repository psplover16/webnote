// import { app } from "electron";
import { mainWindow } from "../main.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // 該檔案所在的位置

const iconPath = path.join(__dirname, "../assets/icon/pic.png");

export default function changeIcon() {
  mainWindow.setIcon(iconPath); // 動態設置icon
}
