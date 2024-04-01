import{r,o as l,c as i,a as s,b as c,t as m,n as u,d as p,e as d,f as n}from"./index-k16LsOm-.js";const _={key:0,type:"I"},v=d(`<li> cookie <ul><li>只有4K大小</li><li>由伺服器發送到客戶端並保存在客戶端的小型文字文件</li><li>以設定 Cookie 的過期時間，可以在不同頁面之間共用數據</li><li>與server溝通時，會把用到的cookie全部丟給server (幾乎都是後端控制)</li><li><pre>fetch(&#39;https://example.com/api/data&#39;, {
  method: &#39;GET&#39;,
  credentials: &#39;include&#39;
})
            </pre><ul>credentials <li>omit，預設值，不攜帶</li><li>same-origin 表示請求只會在當前域下發送，會攜帶當前域下符合條件的cookie</li><li>include&#39;表示請求會攜帶所有符合條件的Cookie，不僅限於當前域</li></ul></li><li> form的方式，會自動將cookie添加至請求 </li></ul></li><li> SessionStorage，資料儲存至關閉頁面會瀏覽器清除 <ul><li>5MB</li><li>sessionStorage.setItem(&#39;key&#39;, &#39;value&#39;);</li><li>const data = sessionStorage.getItem(&#39;key&#39;);</li><li>sessionStorage.removeItem(&#39;key&#39;);</li></ul></li><li> LocalStorage，儲存至清除 <ul><li>5MB</li><li>localStorage.setItem(&#39;key&#39;, &#39;value&#39;);</li><li> const data = localStorage.getItem(&#39;key&#39;);</li><li> localStorage.removeItem(&#39;key&#39;);</li></ul></li>`,3),S=[v],f={__name:"ch1",props:{title:String},setup(o){const e=r(!1);return(a,t)=>(l(),i("div",null,[s("h2",{onClick:t[0]||(t[0]=g=>e.value=!e.value)},[c(m(o.title)+" ",1),s("div",{class:u(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),i("ol",_,S)):p("",!0)]))}},k={key:0,type:"I"},h=d(`<li>CORS，伺服器設置CORS，標準安全方式，伺服器端設定 CORS 頭部來允許特定來源存取資源。</li><li>JSONP，在script的src建立請求，限定服務器要支援且限定GET</li><li>代理伺服器，在同源伺服器上建立一個代理接口，將請求轉送到目標伺服器。</li><li> Iframe， 透過 &lt;iframe&gt; 載入跨網域的內容，雖然頁面本身仍然受到同源策略的限制，但在 &lt;iframe&gt; 中載入的內容是由目標伺服器傳回的，不受同源策略的限制。 因此，可以利用 &lt;iframe&gt; 載入跨域的內容來繞過同源策略限制。 <br> iframe溝通，postmessage <ul><li> 父 <pre>   const iframe = document.getElementById(&#39;myFrame&#39;);
   iframe.contentWindow.postMessage(&#39;Hello from parent&#39;, &#39;http://example.com&#39;);
            </pre></li><li> 子 <pre>  window.addEventListener(&#39;message&#39;, event =&gt; {
  if (event.origin === &#39;http://example.com&#39;) {
    console.log(&#39;Message from parent:&#39;, event.data);
    // 发送响应
    event.source.postMessage(&#39;Hello from child&#39;, event.origin);
  }
  });
            </pre></li></ul></li><li>WebSocket，WebSocket 不受同源策略的限制，可以直接進行跨域通訊。</li><li>Nginx 反向代理，有一個中間代理的概念</li>`,6),y=[h],I={__name:"ch2",props:{title:String},setup(o){const e=r(!1);return(a,t)=>(l(),i("div",null,[s("h2",{onClick:t[0]||(t[0]=g=>e.value=!e.value)},[c(m(o.title)+" ",1),s("div",{class:u(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),i("ol",k,y)):p("",!0)]))}},C={__name:"webpage",setup(o){return(e,a)=>(l(),i("div",null,[n(f,{title:"cookie / SessionStorage / LocalStorage"}),n(I,{title:"跨域問題"})]))}};export{C as default};
