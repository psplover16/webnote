import { app, BrowserWindow, Tray } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

import showNotification from "./notifications.js"; // 發送通知模塊(function)
import mainMenu from "./menu.js"; // 各類菜單-主菜單/右鍵菜單
import tray from "./utilTray.js"

const NODE_ENV = process.env.NODE_ENV || process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export var mainWindow;

function createWindow() {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload 预加载，在执行html的脚本之前就运行。__dirname指向当前模块所属目录。
            preload: [
                path.join(__dirname, 'preload.js'),
                // path.join(__dirname, 'notifications.js'), // 渲染进程通知
            ],
        }
    });

    // 加载index.html
    // port 3000要去vite config 修改
    // mainWindow.loadFile("dist/index.html"); // 将该行改为下面这一行，加载url
    mainWindow.loadURL(
        NODE_ENV === "development"
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, '../dist/index.html')}`
    );

    // 打开开发工具
    if (NODE_ENV === "development") {
        mainWindow.webContents.openDevTools();
    }
}

// electron中，只有app模块的ready事件激发后，才能建立浏览器窗口。
// windows与Linux在没有窗口时会退出程序，macOS即使没有打开窗口也会运行。
// macOS 任务栏上的图标来说，应该随时保持活跃，直到用户使用cmd+Q来退出
// 通常在macOS上，当点击dock中的应用程序图标，如果没有其他
app.whenReady().then(() => {
    createWindow();
    showNotification();
    mainMenu(["右鍵菜單","主菜單"]);
    tray();
    // macOS用
    app.on("activate", function () {
        // macos系統中，若用戶點應用程式圖標，如果程式沒打開，系統會跑 activate事件
        // 若没有窗口，则会创建新窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// 关闭窗口事件
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});




