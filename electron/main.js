import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

import showNotification from "./notifications.js"; // 發送通知模塊(function)

const NODE_ENV = process.env.NODE_ENV || process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var mainWindow;
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
    mainMenu(3);
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




// 主菜單
function mainMenu(type) {
    const template = [
        {
            label: 'File',
            submenu: [
                { label: 'New File', accelerator: 'CmdOrCtrl+N', click: () => console.log('New File') },
                { label: 'Open File', accelerator: 'CmdOrCtrl+O', click: () => console.log('Open File') }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
                { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
                { type: 'separator' },
                { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
                { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
                { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
                { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
                { label: 'reload', accelerator: 'CmdOrCtrl+|', role: 'reload' },
                { label: 'delete', accelerator: '', role: 'delete' },
            ]
        }
    ];
    // 
    const menu = Menu.buildFromTemplate(template);
    if (type == 1) {
        // 右鍵菜單
        mainWindow.webContents.on('context-menu', (e, params) => {
            menu.popup({ window: mainWindow, x: params.x, y: params.y });
        });
    } else if (type == 2) {
        // 主菜單(上bar菜單)
        Menu.setApplicationMenu(menu);
    } else {
        mainWindow.webContents.on('context-menu', (e, params) => {
            menu.popup({ window: mainWindow, x: params.x, y: params.y });
        });
        Menu.setApplicationMenu(menu);
    }


}


