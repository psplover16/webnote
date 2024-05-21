import { clipboard } from "electron";

// 監聽剪貼簿的變化
export default function checkClipboard() {
  setInterval(() => {
    const copiedText = clipboard.readText();
    // 在這裡對複製的文本進行解析和處理
    console.log("Copied text:", copiedText);
  }, 1000); // 每秒檢查一次剪貼簿的內容
}
