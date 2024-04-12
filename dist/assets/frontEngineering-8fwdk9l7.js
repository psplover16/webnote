import{r as u,o as i,c as n,a as t,b as s,t as c,n as d,d as p,e as _,g as r}from"./index-OxM1IN1A.js";const m={key:0,type:"I"},f={__name:"ch1",props:{title:String},setup(o){const e=u(!1);return(a,l)=>(i(),n("div",null,[t("h2",{onClick:l[0]||(l[0]=v=>e.value=!e.value)},[s(c(o.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(i(),n("ol",m)):p("",!0)]))}},h={key:0,type:"I"},g=_(`<li><pre>  import { defineConfig, loadEnv } from &#39;vite&#39;
  import vue from &#39;@vitejs/plugin-vue&#39;
  import path from &quot;path&quot;

  export default defineConfig((command, mode, ssrBuild) =&gt; {
    const env = loadEnv(mode, process.cwd())
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          &#39;@&#39;: [path.resolve(__dirname, &#39;./src&#39;)] //設置路徑代表的東西
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData: \`@import &quot;@/styles/main.scss&quot;;\`, // 将你的全局样式文件引入到每个组件
          },
        },
      },
      envDir: path.resolve(__dirname, &quot;./env&quot;),
    }
  })
        </pre></li><li><ul><li>defineConfig 是 Vite 中用於建立配置物件的函數。 透過呼叫 defineConfig 函數，你可以建立一個包含 Vite 建構所需各種選項的配置物件。</li><li>在 defineConfig 函數中，可以傳入一個函數，該函數接收三個參數：command、mode 和 ssrBuild。 <ul><li>command: 目前執行的指令，可能的取值為 &quot;build&quot;、&quot;serve&quot; 或 &quot;ssr&quot;。 分別代表建置、開發伺服器和伺服器端渲染。</li><li>mode: 目前的模式，可能的取值為 &quot;development&quot; 或 &quot;production&quot;。 分別代表開發模式和生產模式。</li><li>ssrBuild: 是否是伺服器端渲染（SSR）的建置。 如果是 SSR 構建，則值為 true；否則為 false。</li></ul></li></ul></li><li>__dirname，Node.js 中的一個全域變量，用於取得目前執行檔所在的目錄的路徑。</li><li>resolve，配置模塊解析行為 <ul><li>alias，設置路徑別名</li></ul></li><li>css，配置css相關 <ul><li> preprocessorOptions，指定處理器的配置 <ul><li> scss，指定了預處理器的類型 <ul><li>additionalData，用於指定額外的scss數據</li></ul></li></ul></li></ul></li><li> envDir，配置env的位置 <ul><li>path.resolve()，Node.js 中的一個方法，用於將多個路徑解析為一個絕對路徑。</li></ul></li>`,6),S=[g],b={__name:"ch2",props:{title:String},setup(o){const e=u(!1);return(a,l)=>(i(),n("div",null,[t("h2",{onClick:l[0]||(l[0]=v=>e.value=!e.value)},[s(c(o.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(i(),n("ol",h,S)):p("",!0)]))}},q={key:0,type:"I"},C=t("li",null,"Vite 預設使用現代瀏覽器的原生 ES 模組匯入功能，但在某些情況下，仍可能需要對程式碼進行轉譯，以確保程式碼在舊版瀏覽器中的相容性。",-1),y=t("li",null," Polyfill API修復功能，Vite內建 ",-1),V=t("li",null,"Babel 是 JavaScript 的編譯器(compiler)工具，可以把 ES6 標準以上的新語法轉換成最基本的 JS 語法",-1),k=t("li",null,[s(" Vite，Babel引用 "),t("br"),s(" npm i vite-plugin-babel "),t("pre",null,`  // vite.config.js
  import babel from 'vite-plugin-babel';

  export default defineConfig({
    plugins: [
      vue(),
      // 使用 Babel 插件
      babel(),
    ],
  });
        `)],-1),B=[C,y,V,k],$={__name:"ch3",props:{title:String},setup(o){const e=u(!1);return(a,l)=>(i(),n("div",null,[t("h2",{onClick:l[0]||(l[0]=v=>e.value=!e.value)},[s(c(o.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(i(),n("ol",q,B)):p("",!0)]))}},w={__name:"frontEngineering",setup(o){return(e,a)=>(i(),n("div",null,[r(f,{title:"Webpack打包工具的配置和使用"}),r(b,{title:"config解析"}),r($,{title:"babel / Polyfill"})]))}};export{w as default};
