import { app, dialog } from "electron";
import { mainWindow } from "../main.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // 該檔案所在的位置

export default function msgBoxDialog() {
  dialog
    .showMessageBox(mainWindow, {
      type: "info", // "info" (籃底i字) | "question" (籃底i字) | "none" (無圖標) | "error" (X紅底)| "warning" (黃色三角形驚嘆號)
      icon: path.join(path.dirname(__dirname), "assets", "pic.jpg"), // 圖標
      title: "退出" + app.name,
      defaultId: 0, // 預設的按鈕id
      cancelId: 1, // 取消按鈕的id
      message: "確定要退出嗎?", // 訊息 上半
      detail: "要退出??", // 訊息 下半
      buttons: ["退出", "取消"], // 按鈕，陣列的id對應按鈕id
      checkboxLabel: "記住我的選擇", // checkbox 文字
      checkboxChecked: true, //checkbox預設是否有勾選
    })
    .then((r) => {
      console.log(r);
      if (r.response === 0) {
        app.exit();
      } else {
        console.log(r.response);
      }
      if (r.checkboxChecked) {
        console.log("checkbox有打勾");
      }
    });
}
