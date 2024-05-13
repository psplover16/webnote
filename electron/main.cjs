// 控制應用層面的生命週期及創建原生瀏覽器窗口的模組
const { app, BrowserWindow } = require('electron');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || process.env;

function createWindow() {
    // 創建瀏覽器窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })


console.log(NODE_ENV);
    // 加載index.html
    // port 3000要去vite config 修改
    // mainWindow.loadFile("dist/index.html"); // 將該行改為下面這一行，加載url
    mainWindow.loadURL(
        NODE_ENV === "development" ?
            "http://localhost:3000" :
            `file://${path.join(__dirname, '../dist/index.html')}`
    );

    // 打開開發工具
    if (NODE_ENV === "development") {
        mainWindow.webContents.openDevTools();
    }
}




app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        // 通常在macOS上，當點擊dock中的應用程序圖標，如果沒有其他
        // 打開的窗口，程序會重新創建一個窗口
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})


// 除了macos外，當所有窗口被關閉時，退出程序。 因此，通常對程序和他們
// 任務欄上的圖標來說，應該隨時保持活躍，直到用戶使用cmd+Q來退出
app.on("window-all-closed", function () { 
    if (process.platform !== "darwin") {
        app.quit();
    }
})
