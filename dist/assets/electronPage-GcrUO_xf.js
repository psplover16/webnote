import{r as i,o as n,c as l,a as e,b as c,t as a,n as q,d,e as v,g as s}from"./index-7RiuK87u.js";const _={key:0,type:"I"},m=e("li",null,' cross-env 是一个非常有用的工具，用于在跨平台的开发环境中设置环境变量，确保脚本在不同操作系统上的一致性和可移植性。 electron electron-builder wait-on 開發過程需要的東西，先開啟vite項目，在開啟electron concurrently 是一个用于在开发过程中同时运行多个命令的实用工具。在 Electron 项目中，它通常用于同时运行前端开发服务器和 Electron 应用程序。 npm add electron concurrently cross-env electron-builder wait-on -D -D 是 --save-dev 的缩写，表示将安装的包添加到开发依赖项（devDependencies）中。 package.json新增 "electron:serve": "concurrently -k \\"npm run dev\\" \\"npm run electron\\"", "electron:build": "vite build && electron-builder", "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron ." 要提供electron的入口文件 "main":"electron/main.js", ',-1),h=e("li",null,' electron-builder "build": { "productName": "網頁筆記", "copytright": "版權聲明", "mac": { "category": "public.app-category.unilities" }, "nsis": { "onClick": false, "allowToChangeInstallationDirectory": true, "deleteAppDataOnUninstall": true }, "files": [ "dist/**/*", "electron/**/*" ], "directories": { "buildResources": "assets", "output": "dist_electron" } }, 打包 要用 開發者模式打開 ',-1),g=[m,h],y={__name:"ch1",props:{title:String},setup(u){const t=i(!1);return i(!1),(r,o)=>(n(),l("div",null,[e("h2",{onClick:o[0]||(o[0]=p=>t.value=!t.value)},[c(a(u.title)+" ",1),e("div",{class:q(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(n(),l("ol",_,g)):d("",!0)]))}},b={key:0,type:"I"},f=e("li",null,null,-1),w=e("li",null,null,-1),k=[f,w],D={__name:"ch2",props:{title:String},setup(u){const t=i(!1);return i(!1),(r,o)=>(n(),l("div",null,[e("h2",{onClick:o[0]||(o[0]=p=>t.value=!t.value)},[c(a(u.title)+" ",1),e("div",{class:q(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(n(),l("ol",b,k)):d("",!0)]))}},$={key:0,type:"I"},N=v(`<li>先建置一般vue3 + vite的專案</li><li>安裝必要套件 <br><span class="r"> npm add electron electron-builder cross-env wait-on concurrently -D</span><ul><li>cross-env，用於跨平台設置開發環境變量</li><li>wait-on，用於在開發過程中同時運行多個命令的工具</li><li>-D，是--save-dev的縮寫，表示將安裝包添加到開發依賴項(devDependencies)</li><li></li><li></li></ul></li><li>package.json新增 <ul><li><pre>// 同時運行 npm run dev 與 npm run electron
// \\&quot;      \\&quot;  用來避免當作結束符號 
&quot;scripts&quot;: {
  &quot;electron:serve&quot;: &quot;concurrently -k \\&quot;npm run dev\\&quot; \\&quot;npm run electron\\&quot;&quot;,
  &quot;electron:build&quot;: &quot;npm run build &amp;&amp; electron-builder&quot;,
  &quot;electron&quot;: &quot;wait-on tcp:3000 &amp;&amp; cross-env NODE_ENV=development electron .&quot;
}
</pre></li><li>electron的入口文件設置 &quot;main&quot;:&quot;electron/main.js&quot;,</li><li>electron應用程式構建配置文件 <pre>&quot;build&quot;: {
  &quot;productName&quot;: &quot;網頁筆記&quot;, // 應用程式名稱
  &quot;copyright&quot;: &quot;版權所有 © 2024 您的公司名称。保留所有权利。&quot;, // 版權聲明，不限格式
  &quot;files&quot;: [ // 指定構建時要包含在應用程序的文件(要打包啥東西)
    &quot;dist/**/*&quot;,
    &quot;electron/**/*&quot;
  ],
  &quot;directories&quot;: {  // 指定構建時的目錄配置(打包後的目錄配置)
    &quot;buildResources&quot;: &quot;assets&quot;, // 構建資源所在位置，通常放專案的圖標、樣式表、本地化資源(在vite專案不明顯)
    &quot;output&quot;: &quot;dist_electron&quot; // 打包後的目錄位置
  },
  &quot;nsis&quot;: { // windows平台的nsis安裝程式相關配置
    &quot;oneClick&quot;: false,   // 一鍵安裝
    &quot;allowToChangeInstallationDirectory&quot;: true, // 允許用戶更改安裝目錄
    &quot;deleteAppDataOnUninstall&quot;: true // 卸載應用程序時，是否刪除用戶數據
  },
  &quot;mac&quot;: {
    &quot;category&quot;: &quot;public.app-category.unilities&quot;,
    &quot;target&quot;: &quot;dmg&quot;
  },
  &quot;win&quot;: {
    &quot;target&quot;: &quot;nsis&quot;
  },
  &quot;linux&quot;: {
    &quot;target&quot;: &quot;AppImage&quot;
  }
},
            </pre></li></ul></li><li></li>`,4),S=[N],C={__name:"ch3",props:{title:String},setup(u){const t=i(!1);return i(!1),(r,o)=>(n(),l("div",null,[e("h2",{onClick:o[0]||(o[0]=p=>t.value=!t.value)},[c(a(u.title)+" ",1),e("div",{class:q(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(n(),l("ol",$,S)):d("",!0)]))}},E={__name:"electronPage",setup(u){return(t,r)=>(n(),l("div",null,[s(y,{title:"123"}),s(D,{title:"跨域問題"}),s(C,{title:"vite建置"})]))}};export{E as default};
