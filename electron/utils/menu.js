import { Menu } from "electron";
import { mainWindow, isMac } from "../main.js";

// 主菜單
export default function mainMenu(type) {
  const template = [
    // ...(isMac) 的意思，因為isMac = [{}],然後再把它解構出來
    ...(isMac
      ? []
      : [
          {
            label: "File",
            submenu: [
              {
                label: "New File",
                accelerator: "CmdOrCtrl+N",
                click: () => console.log("New File"),
              },
              {
                label: "Open File",
                accelerator: "CmdOrCtrl+O",
                click: () => console.log("Open File"),
              },
            ],
          },
        ]),

    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", role: "undo" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" },
        { label: "reload", accelerator: "CmdOrCtrl+|", role: "reload" },
        { label: "delete", accelerator: "", role: "delete" },
      ],
    },
  ];
  //
  const menu = Menu.buildFromTemplate(template);

  if (type.indexOf("右鍵菜單") != -1) {
    // 右鍵菜單
    mainWindow.webContents.on("context-menu", (e, params) => {
      menu.popup({ window: mainWindow, x: params.x, y: params.y });
    });
  }
  if (type.indexOf("主菜單") != -1) {
    // 主菜單(上bar菜單)
    Menu.setApplicationMenu(menu);
  }
}
