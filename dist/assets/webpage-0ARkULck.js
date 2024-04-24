import{r,o,c as s,a as l,b as i,t as u,n as d,d as _,e as p,g as c}from"./index-UL9giZYT.js";const v={key:0,type:"I"},S=p(`<li> cookie <ul><li>只有4K大小</li><li>由伺服器發送到客戶端並保存在客戶端的小型文字文件</li><li>以設定 Cookie 的過期時間，可以在不同頁面之間共用數據</li><li>與server溝通時，會把用到的cookie全部丟給server (幾乎都是後端控制)</li><li><pre>fetch(&#39;https://example.com/api/data&#39;, {
  method: &#39;GET&#39;,
  credentials: &#39;include&#39;
})
            </pre><ul>credentials <li>omit，預設值，不攜帶</li><li>same-origin 表示請求只會在當前域下發送，會攜帶當前域下符合條件的cookie</li><li>include&#39;表示請求會攜帶所有符合條件的Cookie，不僅限於當前域</li></ul></li><li> form的方式，會自動將cookie添加至請求 </li></ul></li><li> SessionStorage，資料儲存至關閉頁面會瀏覽器清除 <ul><li>5MB</li><li>sessionStorage.setItem(&#39;key&#39;, &#39;value&#39;);</li><li>const data = sessionStorage.getItem(&#39;key&#39;);</li><li>sessionStorage.removeItem(&#39;key&#39;);</li></ul></li><li> LocalStorage，儲存至清除 <ul><li>5MB</li><li>localStorage.setItem(&#39;key&#39;, &#39;value&#39;);</li><li> const data = localStorage.getItem(&#39;key&#39;);</li><li> localStorage.removeItem(&#39;key&#39;);</li></ul></li>`,3),h=[S],g={__name:"ch1",props:{title:String},setup(n){const e=r(!1);return(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",v,h)):_("",!0)]))}},f={key:0,type:"I"},k=p(`<li> CORS是瀏覽器的限制，代表兩個網址不同源。(不同協定或不同主機或不同port) </li><li> 解決方法 <ul><li>CORS，伺服器設置 Access-Controll-Allow-Orgin ，標準安全方式，伺服器端設定 CORS 頭部來允許特定來源存取資源。</li><li>代理伺服器，在同源伺服器上建立一個代理接口，將請求轉送到目標伺服器。</li><li> Iframe， 透過 &lt;iframe&gt; 載入跨網域的內容，雖然頁面本身仍然受到同源策略的限制，但在 &lt;iframe&gt; 中載入的內容是由目標伺服器傳回的，不受同源策略的限制。 因此，可以利用 &lt;iframe&gt; 載入跨域的內容來繞過同源策略限制。 <br> iframe溝通，postmessage <ul><li> 父 <pre>   const iframe = document.getElementById(&#39;myFrame&#39;);
   iframe.contentWindow.postMessage(&#39;Hello from parent&#39;, &#39;http://example.com&#39;);
            </pre></li><li> 子 <pre>  window.addEventListener(&#39;message&#39;, event =&gt; {
  if (event.origin === &#39;http://example.com&#39;) {
    console.log(&#39;Message from parent:&#39;, event.data);
    // 发送响应
    event.source.postMessage(&#39;Hello from child&#39;, event.origin);
  }
  });
            </pre></li></ul></li><li>JSONP，利用動態創建script的方法，在src建立請求，限定GET</li><li>WebSocket，WebSocket 不受同源策略的限制，可以直接進行跨域通訊。</li><li>Nginx 反向代理，將客戶端的請求，轉給後端SERVER，有一個中間代理的概念</li></ul></li>`,2),w=[k],y={__name:"ch2",props:{title:String},setup(n){const e=r(!1);return(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",f,w)):_("",!0)]))}},M={key:0,type:"I"},V=p("<li> MVC <ul><li>Model，負責程式邏輯</li><li>View，用戶介面的顯示，</li><li> Controller，接收用戶的輸入並根據輸入更新Model與View，為兩者的中介 </li></ul> View透過model呈現資料給user，user透過controller觸發事件，model接收事件調整DB，調整完畢後再通知View更新事件 </li><li> MVVM，比起MVC更注重使用者端的的介面。能實現雙向綁定 <ul><li>Model，負責程式邏輯</li><li>ViewModule，轉換原始資料為顯示用資料</li><li>View，用戶介面的顯示，</li></ul> View透過ViewModle渲染頁面；當user操作介面時，View接收資料給ViewModel，ViewModel呼叫Model處理資料；model處理完畢後，呼叫ViewModel更新資料，ViewModel資料變動，觸發View更改頁面 </li>",2),$=[V],C={__name:"ch3",props:{title:String},setup(n){const e=r(!1);return(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",M,$)):_("",!0)]))}},x={key:0,type:"I"},I=l("li",null," _name_，表示變數 ",-1),O=l("li",null," str(obj)，表示function的寫法 ",-1),T=l("li",null," flask，表示python用來寫html的套件 ",-1),b=[I,O,T],D={__name:"ch4",props:{title:String},setup(n){const e=r(!1);return(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",x,b)):_("",!0)]))}},P={key:0,type:"I"},B=p('<li>CSRF攻擊，Cross-Site Request Forgery，跨站請求偽造，攻擊者利用使用者的身分訊息，執行了使用者非本意的操作 <ul> 避免辦法 <li>Token</li><li></li></ul></li><li> XSS攻擊，Cross Site Scripting，跨站腳本攻擊，攻擊者通過注入腳本來利用網站本身的程式漏洞。當其他用戶訪問受影響的網頁時，這些腳本將在用戶的瀏覽器執行，從而被竊取個資、劫持通話、修改網頁內容。 <ul>主要分成三種 <li>存儲型，攻擊者將惡意腳本存在目標網站的DB，當其他用戶訪問到包含惡意代碼的頁面時，惡意代碼會執行</li><li>反射型，攻擊者將惡意腳本作為參數附加在URL上，當用戶點擊該鏈接時，會觸發</li><li>DOM型，攻擊者透過修改網頁的DOM，來注入惡意腳本</li></ul><ul> 避免 <li>用戶需要輸入的數據進行驗證及過濾</li><li>將用戶需要輸入的數據顯示在網頁上時，對特殊符號進行編碼，以防止瀏覽器將其誤認為是腳本代碼</li><li>避免使用不安全的 JavaScript API，例如 eval() 函数和 innerHTML 属性。</li><li>設置HTTP頭部，通過適當的Content-Security-Policy(內容安全策略) 和 X-XSS-Protection 來增加防護層級 <ul><li><meta http-equiv="Content-Security-Policy" content="规则"><br> Content-Security-Policy: script-src &#39;self&#39; example.com; // 只允许从当前域名和 example.com 加载脚本，阻止内联脚本的执行。 </li><li> 在伺服器或服務器 HTTP 響應head設置， <br> X-XSS-Protection: 1 </li></ul></li></ul></li>',2),L=[B],R={__name:"ch5",props:{title:String},setup(n){const e=r(!1);return(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",P,L)):_("",!0)]))}},E={key:0,type:"I"},N=l("ul",null,[l("li",null,[i(" load，當"),l("span",{class:"r"},"整個頁面"),i("所依賴的資源完成加載時觸發，用於檢測完全加載 ")]),l("li",null," DOMContentLoaded，當初始的html被完全加載和解析完成後觸發，無需等待依賴資源的完全加載 ")],-1),H=l("ul",null,[l("li",null,[i(" 不加，按照script在html出現的順序依次下載腳本並執行，可能會阻塞後續腳本。 "),l("pre")]),l("li",null,[i(" defer，瀏覽器會將該腳本的下載延遲至文檔解析完畢後再執行，瀏覽器將繼續處理html構建文檔對象模型(DOM)。對內嵌腳本無效 "),l("pre")]),l("li",null,[i(" async，瀏覽器會非同步地下載該腳本，而不會阻塞頁面的渲染或其他資源的載入。 當腳本下載完成後，瀏覽器會立即中斷文件的解析，執行該腳本，然後再恢復文件的解析。 "),l("br"),i(" HTML中沒有互相依賴的腳本，也不依賴 DOM ，誰先執行都沒關係，適用於獨立的第三方腳本。 ")])],-1),X={__name:"ch6",props:{title:String},setup(n){const e=r(!1);return r(!1),(a,t)=>(o(),s("div",null,[l("h2",{onClick:t[0]||(t[0]=m=>e.value=!e.value)},[i(u(n.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(o(),s("ol",E,[i(" 瀏覽器，load 與 DOMContentLoaded "),N,i(" script添加 "),H])):_("",!0)]))}},F={__name:"webpage",setup(n){return(e,a)=>(o(),s("div",null,[c(g,{title:"cookie / SessionStorage / LocalStorage"}),c(y,{title:"跨域問題"}),c(C,{title:"MVC VS MVVM"}),c(X,{title:"script標籤加上 defer / async / 不加"}),c(D,{title:"奇怪的問題"}),c(R,{title:"攻擊"})]))}};export{F as default};
