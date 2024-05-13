import { app, Tray, Menu } from 'electron';
import { mainWindow } from './main.js';
// 
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 
// 系統托盤(最右下角收納圖區)
export default function tray() {
    tray = new Tray(path.join(__dirname, "assets", 'pic.jpg'));
    const contextMenu = Menu.buildFromTemplate([
        {
            role: "minimize",
            label: "最小化",
            click: () => {
                mainWindow.minimize();
            }
        },
        {
            role: "togglefullscreen",
            label: "全螢幕",
            click: () => {
                mainWindow.setFullScreen(mainWindow.isFullScreen() !== true);
            }
        },
        {
            role: "quit",
            label: "退出",
            click: () => {
                app.quit();
            }
        }
    ]);
    tray.setToolTip(app.name); // hover的名字
    tray.on("right-click", () => { // 右鍵跳選單
        tray.popUpContextMenu(contextMenu);
    })
    tray.on("click", () => { // 左鍵單擊跳出來
        mainWindow.show();
    });
}

