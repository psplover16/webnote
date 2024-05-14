import { dialog } from "electron";
import { mainWindow } from "../main.js";

// 文件上傳功能
export default function fileDialog() {
  dialog
    .showOpenDialog(mainWindow, {
      properties: [
        // 互斥
        "openFile", // 允許選擇文件
        // "openDirectory", // 允許選擇文件夾
        // 
        // "multiSelections", // 允許多選
        "showHiddenFiles", // 顯示隱藏文件
        // macos
        // "createDirectory", // 允許通過對話框創建文件
        // "noResolveAliases", // 禁用自動別名路徑
        // "treatPackageAsDirectory", // 將包 (如 .app 文件夹) 視為目錄而非文件
        // windows
        // "promptToCreate", // 如果輸入的文件路徑在對話框不存在，則提示創建(並非真的創建)
        // "dontAddToRecent", // 不將正在打開的項目，添加到最近的文檔列表
      ],
      filters: [
        { name: "text", extensions: ["txt"] },
        { name: "customFile", extensions: ["as"] },
        { name: "AllFiles", extensions: ["*"] },
      ],
    })
    .then((result) => {
      if (result.canceled) {
        console.log("Dialog cancelled");
      } else {
        const file = result.filePaths[0];
        console.log(file);
        mainWindow.loadURL(`file://${file}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
