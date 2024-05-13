import{r as a,o as l,c as s,a as e,b as o,t as v,n as m,d as r,f as h,h as g,w as y,i as f,g as p}from"./index-cStLV99u.js";import{_ as b}from"./_plugin-vue_export-helper-x3n3nnut.js";const S={key:0,type:"I"},k=e("li",null,null,-1),w=[k],$={__name:"ch1",props:{title:String},setup(i){const t=a(!1);return a(!1),(c,n)=>(l(),s("div",null,[e("h2",{onClick:n[0]||(n[0]=d=>t.value=!t.value)},[o(v(i.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(l(),s("ol",S,w)):r("",!0)]))}},C={key:0,type:"I"},x=e("li",null,null,-1),D=e("li",null,null,-1),I=[x,D],J={__name:"ch2",props:{title:String},setup(i){const t=a(!1);return a(!1),(c,n)=>(l(),s("div",null,[e("h2",{onClick:n[0]||(n[0]=d=>t.value=!t.value)},[o(v(i.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(l(),s("ol",C,I)):r("",!0)]))}},N={key:0,class:"contents"},T={__name:"popout",props:{msg:String,contentsType:String},emits:["closePage"],setup(i,{emit:t}){const c=i,n=t,d=()=>{n("closePage")};return h(()=>{document.body.style.overflowY="hidden",document.body.style.paddingRight="17px",console.log(c.contentsType)}),g(()=>{document.body.style.overflowY="auto",document.body.style.paddingRight="0"}),(u,_)=>(l(),s("div",{class:"popoutPage",onClick:y(d,["self"])},[i.contentsType=="mainCJS"?(l(),s("div",N)):r("",!0)]))}},j=b(T,[["__scopeId","data-v-3b297cbb"]]),P={key:0,type:"I"},A=e("li",null,"先建置一般vue3 + vite的專案",-1),V=e("li",null,[o("安裝必要套件 "),e("br"),e("span",{class:"r"}," npm add electron electron-builder cross-env wait-on concurrently -D"),e("ul",null,[e("li",null,"cross-env，用於跨平台設置開發環境變量"),e("li",null,"wait-on，用於在開發過程中同時運行多個命令的工具"),e("li",null,"-D，是--save-dev的縮寫，表示將安裝包添加到開發依賴項(devDependencies)"),e("li"),e("li")])],-1),B={key:0},E=e("li",null,"源碼階段，代碼編寫階段",-1),R=e("li",null,"解析階段，將源碼解析為抽象語法樹（AST）的階段",-1),M=e("li",null,[o("預編譯階段，代碼執行前進行的一些準備工作，包括變量提升、函數提升、作用域鏈的創建等。在這個階段，JavaScript引擎會對代碼進行預處理，"),e("span",{class:"r"},"生成執行上下文"),o("。")],-1),O=e("li",null,"執行階段，這個階段是指代碼真正開始執行的階段。在這個階段，JavaScript引擎會按照代碼的順序執行，執行上下文會被壓入執行棧中，形成執行上下文棧。",-1),U=[E,R,M,O],Y={border:"1"},q=e("tr",null,[e("td",null,"種類"),e("td",null," vite，package.json內 "),e("td",null,"內容"),e("td",null,"語法差異"),e("td"),e("td"),e("td")],-1),z=e("td",null,"CommonJS(舊版)",-1),L=e("td",null,'"type": "commonjs" (vite會提示已棄用)',-1),W=e("td",null,"require()和module.exports 來引入/導出模塊",-1),X=e("td",null,"同步加載",-1),F=e("td",null,"運行時動態加載的，這意味著模塊的導入和導出發生在代碼執行時。",-1),G=e("td",null,null,-1),H=e("tr",null,[e("td",null,"ES6"),e("td",null,'"type": "module"'),e("td"),e("td",null,"import和export語法 來引入和導出模塊。"),e("td",null,"異步加載"),e("td",null,"靜態解析時加載的，這意味著模塊的導入和導出在代碼執行之前就已經確定。"),e("td")],-1),K=e("li",null,[o("package.json新增 "),e("ul",null,[e("li",null,'electron的入口文件設置 "main":"electron/main.cjs"'),e("li",null,[o(" 同時運行 npm run dev 與 npm run electron "),e("br"),o(' \\" \\" 用來避免當作結束符號 '),e("pre",null,`"scripts": {
  "electron:serve": "concurrently -k \\"npm run dev\\" \\"npm run electron\\"",
  "electron:build": "npm run build && electron-builder",
  "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ."
}
`)]),e("li",null,[o("electron應用程式構建配置文件 "),e("pre",null,`"build": {
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
            `)])])],-1),Q=e("li",null," 要打包時，vscode要用 開發者模式打開 ",-1),Z={__name:"ch3",props:{title:String},setup(i){const t=a(!1),c=a(!1),n=a(!1);return a(!1),(d,u)=>(l(),s("div",null,[e("h2",{onClick:u[0]||(u[0]=_=>t.value=!t.value)},[o(v(i.title)+" ",1),e("div",{class:m(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(l(),s("ol",P,[A,V,e("li",null,[e("span",{onClick:u[1]||(u[1]=_=>c.value=!c.value),class:"b"},"js代碼執行前的階段"),c.value?(l(),s("ul",B,U)):r("",!0)]),e("li",null,[o(" 根目錄放置electron資料夾，內部放electron入口文件， "),e("table",Y,[q,e("tr",null,[z,L,e("td",null,[e("span",{class:"b",onClick:u[2]||(u[2]=_=>n.value=!0)},"main.CJS內容"),n.value?(l(),f(j,{key:0,contentsType:"mainCJS",onClosePage:u[3]||(u[3]=_=>n.value=!1)})):r("",!0)]),W,X,F,G]),H])]),K,Q])):r("",!0)]))}},ne={__name:"electronPage",setup(i){return(t,c)=>(l(),s("div",null,[p($,{title:"123"}),p(J,{title:"跨域問題"}),p(Z,{title:"vite建置"})]))}};export{ne as default};
