import{r,h as y,o as s,c as u,a as e,b as l,t as _,n as m,u as g,d,f,i as S,w as b,j as k,g as v}from"./index-vYTqTAyn.js";import{_ as C}from"./_plugin-vue_export-helper-x3n3nnut.js";const w={key:0,type:"I"},$=e("li",null,[l("electron進程 "),e("ul",null,[e("li",null,"主進程，Electron 應用程式的主要進程，負責控制應用程式的生命週期、管理窗口、與底層系統進行通信等。主進程運行的是 Node.js 環境，可以使用 Node.js 的模塊和 API，並且可以創建和管理渲染進程。"),e("li",null,"渲染進程是 Electron 應用程式中的網頁代碼運行的地方。渲染進程運行的是網頁環境，可以通過 Electron 提供的 API 與主進程進行通信。")])],-1),x=e("ul",null,[e("li",null,"在main.js設置把屏幕錄製"),e("li",null,"把錄製到的屏幕，在preload.js轉換成stream，放在video標籤"),e("li",null,"video標籤必須在index.html設立"),e("li",null,"在需要利用該video標籤的組件內，調用index.html的video標籤到指定組件 (擷取桌面影像)"),e("li",null,"把預先寫好再preload的錄製功能，在Vue調用。 錄製五秒影片")],-1),P={__name:"ch1",props:{title:String},setup(c){const t=r(!1);r(!1);const i=r(null);let o=()=>{const n=document.getElementById("video");n.paused?n.play():n.pause(),i.value.appendChild(n)};y(()=>{let n=document.getElementById("video");console.log(document.getElementById("videoOriginalPos")),document.getElementById("videoOriginalPos").appendChild(n)});const p=()=>{window.electronAPI.dealStream()};return(n,a)=>(s(),u("div",null,[e("h2",{onClick:a[0]||(a[0]=h=>t.value=!t.value)},[l(_(c.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(s(),u("ol",w,[$,e("li",null,[l(" desktopCapturer，屏幕錄製 "),e("div",{ref_key:"videoPos",ref:i},null,512),e("button",{onClick:a[1]||(a[1]=(...h)=>g(o)&&g(o)(...h))},"擷取桌面影像"),e("button",{onClick:p},"錄製五秒影片"),x])])):d("",!0)]))}},I={key:0,type:"I"},j=e("li",null,null,-1),E=e("li",null,null,-1),J=[j,E],B={__name:"ch2",props:{title:String},setup(c){const t=r(!1);return r(!1),(i,o)=>(s(),u("div",null,[e("h2",{onClick:o[0]||(o[0]=p=>t.value=!t.value)},[l(_(c.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(s(),u("ol",I,J)):d("",!0)]))}},N={key:0,class:"contents"},A={__name:"popout",props:{msg:String,contentsType:String},emits:["closePage"],setup(c,{emit:t}){const i=c,o=t,p=()=>{o("closePage")};return f(()=>{document.body.style.overflowY="hidden",document.body.style.paddingRight="17px",console.log(i.contentsType)}),S(()=>{document.body.style.overflowY="auto",document.body.style.paddingRight="0"}),(n,a)=>(s(),u("div",{class:"popoutPage",onClick:b(p,["self"])},[c.contentsType=="mainCJS"?(s(),u("div",N)):d("",!0)]))}},D=C(A,[["__scopeId","data-v-3b297cbb"]]),T={key:0,type:"I"},V=e("li",null,"先建置一般vue3 + vite的專案",-1),O=e("li",null,[l("安裝必要套件 "),e("br"),e("span",{class:"r"}," npm add electron electron-builder cross-env wait-on concurrently -D"),e("ul",null,[e("li",null,"cross-env，用於跨平台設置開發環境變量"),e("li",null,"wait-on，用於在開發過程中同時運行多個命令的工具"),e("li",null,"-D，是--save-dev的縮寫，表示將安裝包添加到開發依賴項(devDependencies)"),e("li"),e("li")])],-1),q={key:0},R=e("li",null,"源碼階段，代碼編寫階段",-1),U=e("li",null,"解析階段，將源碼解析為抽象語法樹（AST）的階段",-1),M=e("li",null,[l("預編譯階段，代碼執行前進行的一些準備工作，包括變量提升、函數提升、作用域鏈的創建等。在這個階段，JavaScript引擎會對代碼進行預處理，"),e("span",{class:"r"},"生成執行上下文"),l("。")],-1),Y=e("li",null,"執行階段，這個階段是指代碼真正開始執行的階段。在這個階段，JavaScript引擎會按照代碼的順序執行，執行上下文會被壓入執行棧中，形成執行上下文棧。",-1),z=[R,U,M,Y],L={border:"1"},W=e("tr",null,[e("td",null,"種類"),e("td",null," vite，package.json內 "),e("td",null,"內容"),e("td",null,"語法差異"),e("td"),e("td"),e("td")],-1),X=e("td",null,"CommonJS(舊版)",-1),F=e("td",null,'"type": "commonjs" (vite會提示已棄用)',-1),G=e("td",null,"require()和module.exports 來引入/導出模塊",-1),H=e("td",null,"同步加載",-1),K=e("td",null,"運行時動態加載的，這意味著模塊的導入和導出發生在代碼執行時。",-1),Q=e("td",null,null,-1),Z=e("tr",null,[e("td",null,"ES6"),e("td",null,'"type": "module"'),e("td"),e("td",null,"import和export語法 來引入和導出模塊。"),e("td",null,"異步加載"),e("td",null,"靜態解析時加載的，這意味著模塊的導入和導出在代碼執行之前就已經確定。"),e("td")],-1),ee=e("li",null,"meta放在head標籤裡，提供網頁的附加信息",-1),te=e("li",null,'http-equiv="Content-Security-Policy" 指定網頁的內容安全策略(CSP)，用於限制網頁中執行的 JavaScript 代碼的來源。',-1),ne=e("li",null,`content="script-src 'self'" 指定允許載入和執行 JavaScript 的來源 為 只允許從同一域名載入和執行 JavaScript 代碼。 `,-1),le=e("li",null,[l("package.json新增 "),e("ul",null,[e("li",null,'electron的入口文件設置 "main":"electron/main.cjs"'),e("li",null,[l(" 同時運行 npm run dev 與 npm run electron "),e("br"),l(' \\" \\" 用來避免當作結束符號 '),e("pre",null,`"scripts": {
  "electron:serve": "concurrently -k \\"npm run dev\\" \\"npm run electron\\"",
  "electron:build": "npm run build && electron-builder",
  "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ."
}
`)]),e("li",null,[l("electron應用程式構建配置文件 "),e("pre",null,`"build": {
  "productName": "網頁筆記", // 應用程式名稱
  "copyright": "版權所有 © 2024 您的公司名称。保留所有权利。", // 版權聲明，不限格式
  "files": [ // 指定構建時要包含在應用程序的文件(要打包啥東西)
    "dist/**/*",
    "electron/**/*"
  ],
  "directories": {  // 指定構建時的目錄配置(打包後的目錄配置)
    "buildResources": "assets", // 構建資源所在位置，通常放專案的圖標、樣式表、本地化資源(在vite專案不明顯)
    "output": "dist_electron" // 打包後的目錄位置
  },
  "nsis": { // windows平台的nsis安裝程式相關配置
    "oneClick": false,   // 一鍵安裝
    "allowToChangeInstallationDirectory": true, // 允許用戶更改安裝目錄
    "deleteAppDataOnUninstall": true // 卸載應用程序時，是否刪除用戶數據
  },
  "mac": {
    "category": "public.app-category.unilities", // 設置應用程序分類為 實用工具類應用程式
    "target": "dmg"  // macos的安裝文件
  },
  "win": {
    "target": "nsis"  // Windows 安装程序
  },
  "linux": {
    "target": "AppImage"  // 生成 Linux AppImage 文件
  }
},
            `)])])],-1),oe=e("li",null," 要打包時，vscode要用 開發者模式打開 ",-1),se=`<meta http-equiv="Content-Security-Policy" content="script-src 'self'">`,ie={__name:"ch3",props:{title:String},setup(c){const t=r(!1),i=r(!1),o=r(!1);return r(!1),(p,n)=>(s(),u("div",null,[e("h2",{onClick:n[0]||(n[0]=a=>t.value=!t.value)},[l(_(c.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(s(),u("ol",T,[V,O,e("li",null,[e("span",{onClick:n[1]||(n[1]=a=>i.value=!i.value),class:"b"},"js代碼執行前的階段"),i.value?(s(),u("ul",q,z)):d("",!0)]),e("li",null,[l(" 根目錄放置electron資料夾，內部放electron入口文件， "),e("table",L,[W,e("tr",null,[X,F,e("td",null,[e("span",{class:"b",onClick:n[2]||(n[2]=a=>o.value=!0)},"main.CJS內容"),o.value?(s(),k(D,{key:0,contentsType:"mainCJS",onClosePage:n[3]||(n[3]=a=>o.value=!1)})):d("",!0)]),G,H,K,Q]),Z])]),e("li",null,[e("ul",null,[e("li",null,[l("在index.html設置 "),e("span",{class:"b"},_(se))]),ee,te,ne])]),le,oe])):d("",!0)]))}},ae={__name:"electronPage",setup(c){return(t,i)=>(s(),u("div",null,[v(P,{title:"模組"}),v(B,{title:"跨域問題"}),v(ie,{title:"vite建置"})]))}};export{ae as default};
