import{r,f as _,o as n,c as s,a as e,b as o,t as c,n as p,d,e as m,h as f,j as h,g as a,w as g}from"./index-tug10zDy.js";const S={key:0,type:"I"},$={__name:"ch1",props:{title:String},setup(i){const l=r(!1);return r(`
export default defineConfig((command, mode, ssrBuild) => {
    base: "./",  // 
    resolve: {
      alias: {
        "@": [path.resolve(__dirname, "./src")], //設置路徑代表的東西
      },
    },




});
`),_(()=>{console.log("使用env")}),(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",S)):d("",!0)]))}},b={key:0,type:"I"},y=m(`<li><pre>  import { defineConfig, loadEnv } from &#39;vite&#39;
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
        </pre></li><li><ul><li>defineConfig 是 Vite 中用於建立配置物件的函數。 透過呼叫 defineConfig 函數，你可以建立一個包含 Vite 建構所需各種選項的配置物件。</li><li>在 defineConfig 函數中，可以傳入一個函數，該函數接收三個參數：command、mode 和 ssrBuild。 <ul><li>command: 目前執行的指令，可能的取值為 &quot;build&quot;、&quot;serve&quot; 或 &quot;ssr&quot;。 分別代表建置、開發伺服器和伺服器端渲染。</li><li>mode: 目前的模式，可能的取值為 &quot;development&quot; 或 &quot;production&quot;。 分別代表開發模式和生產模式。</li><li>ssrBuild: 是否是伺服器端渲染（SSR）的建置。 如果是 SSR 構建，則值為 true；否則為 false。</li></ul></li></ul></li><li>__dirname，Node.js 中的一個全域變量，用於取得目前執行檔所在的目錄的路徑。</li><li>resolve，配置模塊解析行為 <ul><li>alias，設置路徑別名</li></ul></li><li>css，配置css相關 <ul><li> preprocessorOptions，指定處理器的配置 <ul><li> scss，指定了預處理器的類型 <ul><li>additionalData，用於指定額外的scss數據</li></ul></li></ul></li></ul></li><li> envDir，配置env的位置 <ul><li>path.resolve()，Node.js 中的一個方法，用於將多個路徑解析為一個絕對路徑。</li></ul></li>`,6),q=[y],C={__name:"ch2",props:{title:String},setup(i){const l=r(!1);return(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",b,q)):d("",!0)]))}},k={key:0,type:"I"},w=e("li",null,"Vite 預設使用現代瀏覽器的原生 ES 模組匯入功能，但在某些情況下，仍可能需要對程式碼進行轉譯，以確保程式碼在舊版瀏覽器中的相容性。",-1),z=e("li",null," Polyfill API修復功能，Vite內建 ",-1),x=e("li",null,"Babel 是 JavaScript 的編譯器(compiler)工具，可以把 ES6 標準以上的新語法轉換成最基本的 JS 語法",-1),V=e("li",null,[o(" Vite，Babel引用 "),e("br"),o(" npm i vite-plugin-babel "),e("pre",null,`  // vite.config.js
  import babel from 'vite-plugin-babel';

  export default defineConfig({
    plugins: [
      vue(),
      // 使用 Babel 插件
      babel(),
    ],
  });
        `)],-1),B=[w,z,x,V],I={__name:"ch3",props:{title:String},setup(i){const l=r(!1);return(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",k,B)):d("",!0)]))}},j={key:0,type:"I"},N=e("li",null,"npm install --save-dev rollup-plugin-visualizer",-1),E=e("li",null,[o(" vite.config.js "),e("ul",null,[e("li",null,"import { visualizer } from 'rollup-plugin-visualizer';"),e("li",null,[e("pre",null,`plugins: [vue(),
  visualizer({
    open: true, // 設置為true,否則無效
    filename: "./dist/stats.html", // 生成檔案名稱與路徑
    gzipSize: true, // 收集 gzip大小，並顯示
    brotliSize: true, // 收集 brotli 大小，並顯示
  }),
],
            `)])])],-1),D=e("li",null,"打包後，會出現",-1),O=[N,E,D],P={__name:"ch4",props:{title:String},setup(i){const l=r(!1);return(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",j,O)):d("",!0)]))}},J={__name:"customButton",props:{isImportant:{type:Boolean,default:!1}},setup(i){return(l,u)=>(n(),s("button",{style:h({background:i.isImportant?"red":""})},[f(l.$slots,"title")],4))}},R={key:0,type:"I"},A=e("pre",null,null,-1),M={__name:"ch5",props:{title:String},setup(i){const l=r(!1);return(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",R,[e("li",null,[o(" 撰寫組件 "),a(J,null,{title:g(()=>[o(" 123 ")]),_:1})]),A])):d("",!0)]))}},T={key:0,type:"I"},F=e("li",null,[o(" 安裝工具，--save-dev，開發過程才會引用 "),e("ul",null,[e("li",null,"npm i vite-plugin-image-optimizer --save-dev"),e("li",null,"npm install sharp --save-dev"),e("li",null,"npm install svgo --save-dev")])],-1),G=e("li",null,[o(" vite.config.js "),e("ul",null,[e("li",null,'import { ViteImageOptimizer } from "vite-plugin-image-optimizer";'),e("li",null,[e("pre",null,`plugins: [
  ViteImageOptimizer({ // 壓縮圖片品質
    jpg: { quality: 100 },
  }),
],
`)])])],-1),H=[F,G],K={__name:"ch6",props:{title:String},setup(i){const l=r(!1);return(u,t)=>(n(),s("div",null,[e("h2",{onClick:t[0]||(t[0]=v=>l.value=!l.value)},[o(c(i.title)+" ",1),e("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(n(),s("ol",T,H)):d("",!0)]))}},Q={__name:"frontEngineering",setup(i){return(l,u)=>(n(),s("div",null,[a($,{title:"vite.config.js 設置"}),a(C,{title:"config解析"}),a(I,{title:"babel / Polyfill"}),a(P,{title:"Vite-bundle檢測"}),a(K,{title:"圖片壓縮工具"}),a(M,{title:"套件的設置與引用"})]))}};export{Q as default};
