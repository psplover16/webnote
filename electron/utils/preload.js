// // 預載項目
window.addEventListener("DOMContentLoaded", () => {
    // 
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerHTML = text;
        }
    }
    // 版本號寫入 id名稱為 chrome-version / node-version / electron-version
    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});


