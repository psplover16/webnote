import{r as e,o as i,c as n,a as l,b as o,t as u,n as d,d as h,e as m,k as v,g as _,w as f}from"./index-tug10zDy.js";const y={key:0,type:"I"},g=l("li",null,"保留空白和換行符",-1),$=l("li",null,"等寬字體",-1),b=l("li",null,"不自動換行，",-1),S=l("li",null,"屬於block",-1),k=l("li",null,"不解釋html標籤",-1),w=[g,$,b,S,k],x={__name:"ch1",props:{title:String},setup(s){const t=e(!1);return e(!1),(c,a)=>(i(),n("div",null,[l("h2",{onClick:a[0]||(a[0]=r=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",y,w)):h("",!0)]))}},C={key:0,type:"I"},I=m("<ul><li>對SEO優化有幫助</li><li>可以快速抓到網頁架構及區塊位置</li></ul><li> 網頁結構化標籤(用於定義網頁結構) <ul><li>header，頁首</li><li>footer，頁尾</li><li>main,，主要內容</li><li>nav，導覽列</li><li>section，群組標籤(群組區塊)，把相關的內容放在一起</li><li> article，文章，通常搭配header、footer一起用 </li><li>aside，側邊攔</li></ul></li>",2),D=l("li",null,"fieldset，會創建一個容器，表單元素分類用，通常與legend一起用",-1),T=l("li",null,"legend，用於為fieldset定義一個標題。",-1),j=l("li",null,'label，通常與input一起使用，有個屬性for="aa"，會把label與id為aa的input綁定，點label會讓input聚焦',-1),A=l("li",null,"input",-1),E=l("li",null,"button",-1),N=l("li",null,"select",-1),V=l("li",null,"textarea",-1),F=l("li",null," h1~h6，heading(標題)，代表標題，h1表示最重要的標題，最不重要的是h6 ",-1),P=l("li",null,' p，段落(Paragraph)，表示一"段"文章的開頭與結尾。 ',-1),U=l("li",null,"a，超連結",-1),q=l("li",null,"img，圖片",-1),B=l("li",null,"ul(無序)、ol(有序)、li(列表項目)，列表",-1),L=l("li",null,"表格，table、tr、td、thead、tbody、tfoot",-1),O={__name:"ch2",props:{title:String},setup(s){const t=e(!1);e(!1);const c=e(`<form>
  <fieldset>
    <legend>个人信息</legend>
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name"><br>
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email"><br>
  </fieldset>
</form>`);return(a,r)=>(i(),n("div",null,[l("h2",{onClick:r[0]||(r[0]=p=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",C,[o(" 用於更清楚知道每個區塊的目的而設計，取代div用 "),I,l("li",null,[o(" 表單，form "),l("ul",null,[D,T,l("pre",null,""+u(c.value)+`
`,1),j,A,E,N,V])]),F,P,U,q,B,L])):h("",!0)]))}},z={key:0,type:"I"},H=l("li",null,[o("css "),l("pre",null,`          @charset "utf-8";
        `)],-1),G={__name:"ch3",props:{title:String},setup(s){const t=e(!1);e(!1);const c=e(`
<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">  // 告知瀏覽器用 UTF-8 解碼
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> // 告訴瀏覽器使用最新版的ie引擎來渲染頁面
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="農村地方美食小吃特色料理"> // seo 描述
    <meta name="keywords" content="小吃、美食、特產"> // seo 關鍵字
    // 社交媒體分享
    <meta property="og:title" content="農村地方美食小吃特色料理" /> 
    <meta property="og:type" content="website">
    <meta property="og:image" content="預覽圖URL-要放絕對路徑1200*630" />
    <meta property="og:url" content="https://example.com">
    <meta property="og:description" content="這個網站都介紹農村地方美食小吃特色料理" />

    <title>農村地方美食小吃特色料理</title>
    <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/index.css">
    <script defer src="./js/index.js" type=""> <\/script>  //  用defer放在header，在html下載時，會非同步一起載JS腳本，但該腳本等到html解析完畢後才解析，比單純放在body後面效能更好
</head>
</html>
`);return(a,r)=>(i(),n("div",null,[l("h2",{onClick:r[0]||(r[0]=p=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",z,[l("li",null,[o("html "),l("pre",null,"        "+u(c.value)+`
      `,1)]),H])):h("",!0)]))}},J={key:0,type:"I"},K=m(`<li>html <ul><li>一個html至少有一個h1</li><li>盡量不要有空標籤，可用偽類代替</li><li>為了seo，盡量使用img而非background-image</li><li>img屬性要先預設好，width/height/alt</li><li></li></ul></li><li> css <ul><li>css的Animatiom，盡量可以用transition代替 <pre>              transition:display 1s ease-in-out;  // display有變化時，1秒的ease-in-out動畫
            </pre></li><li>class取名用小駝峰，階層式命名 __代表子層，--表示同層級但有些許不同處</li><li> id命名大駝峰，不用依照css層級規則。 </li><li>class命名上，別讓功能綁住名稱，但要取得名稱一目了然</li><li>容器名稱要彈性化，也時候直接將標籤當作容器class名稱</li></ul></li><li>js <ul><li>變數選擇器的命名，採用小駝峰，不需要分層</li><li>變數抓取節點，該變數名稱要有elem</li><li>執行的函數，通常放在宣告變數後</li><li>通常用querySelector抓取id代替 querySelectorAll </li><li>抓取API時，若不設置header，則不會強制要求用特定格式文件處理</li><li>API，response.status取代，response.OK</li><li>innerHTML消能&gt;appendChild</li><li>善用語法糖，空陣列的賦予可以用以下範例 <pre>              allCitysFoodData[item.City] = allCitysFoodData[item.City] || {};
            </pre></li></ul><ul><li>用addeventListener取代 onclick=&#39;&#39;</li><li>模組化應用 <pre>              a.js
              export function getData() {}
              export const name = &#39;Gary&#39;;

              index.js
              import {getData,name} from &#39;./a.js&#39;;
              console.log(name);
              getData();
            </pre></li><li></li><li></li><li></li></ul></li>`,3),M=[K],R={__name:"ch4",props:{title:String},setup(s){const t=e(!1);return e(!1),(c,a)=>(i(),n("div",null,[l("h2",{onClick:a[0]||(a[0]=r=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",J,M)):h("",!0)]))}},W={key:0,type:"I"},X=l("li",null,"ruby，包裹需要註釋的文本",-1),Y=l("li",null,"rb，可不佳，包裹需要註釋的文本",-1),Q=l("li",null,"rt，表示對應的註釋",-1),Z=l("li",null,"rp，表示ruby標籤不吃的話，顯示的替代文本，表示註釋範圍",-1),ll=l("br",null,null,-1),tl=l("rp",null,"(",-1),el=l("rt",null,"Elsa",-1),il=l("rp",null,")",-1),nl={__name:"ch5",props:{title:String},setup(s){const t=e(!1),c=e(`
        <ruby>
          <rb>愛爾莎●葛蘭朗特</rb>
          <rp>(</rp>
          <rt>Elsa</rt>
          <rp>)</rp>
        </ruby>
`);return(a,r)=>{const p=v("rb");return i(),n("div",null,[l("h2",{onClick:r[0]||(r[0]=rl=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",W,[X,Y,Q,Z,l("li",null,[l("div",null,u(c.value),1),ll,l("ruby",null,[_(p,null,{default:f(()=>[o("愛爾莎●葛蘭朗特")]),_:1}),tl,el,il])])])):h("",!0)])}}},sl={key:0,type:"I"},ol='<span title="hover出現提示">hover出現提示</span>',al={__name:"ch6",props:{title:String},setup(s){const t=e(!1);return(c,a)=>(i(),n("div",null,[l("h2",{onClick:a[0]||(a[0]=r=>t.value=!t.value)},[o(u(s.title)+" ",1),l("div",{class:d(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(i(),n("ol",sl,[l("li",null,[o(" title屬性，hover會出現提示 "),l("div",{title:"hover出現提示"},u(ol))])])):h("",!0)]))}},cl={__name:"html",setup(s){return(t,c)=>(i(),n("div",null,[_(x,{title:"pre"}),_(O,{title:"語意化標籤"}),_(G,{title:"html模板"}),_(R,{title:"注意事項"}),_(nl,{title:"ruby標籤"}),_(al,{title:"少見屬性"})]))}};export{cl as default};
