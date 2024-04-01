import{r as i,o as s,c as o,a as l,b as c,t as u,n as d,d as b,e as _,p as h,f as v,g as a}from"./index-kWAlS3lq.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";const f={key:0,type:"I"},g=_('<li>原始類型 <ul><li>undefined，變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在。預設是undefined，完全<span class="r">虛無</span>的意思</li><li>null，表示空的、無效、未定義的值。表示具體的空值，可以賦值給對象。<span>有架子、沒紙捲筒</span></li><li>Boolean</li><li>String</li><li>Number</li><li>symbol <ul><li>ES6導入</li><li> const bunny = symbol(&quot;可愛的小兔子&quot;); <br> console.log(bunny.description); // 可愛的小兔子 </li><li>不能直接用遍歷、for迴圈撈取，要使用<span class="r">Object.getOwnPropertySymbols()</span></li><li>放在物件裡面，當作定義屬性key時，要將symbol的值放在[]當中，不然會被當字串</li><li>不能用 . 取得屬性值，要用[]</li><li>範例， <br><code> const classMate = { <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 70, sleep: &#39;3:00&#39;, drink: true }, <br>  [Symbol(&#39;chita&#39;)] : { score: 90, sleep: &#39;20:00&#39;, drink:false }, <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 100, sleep: &#39;19:00&#39;, drink: false }, <br> } <br> const symbols = Object.getOwnPropertySymbols(classMate); <br> for (const symbol of symbols) { <br>  if (symbol.toString() === &#39;Symbol(宜蓁)&#39;) { <br>   const value = classMate[symbol]; <br>   console.log(value); // { score: 100, sleep: &#39;19:00&#39;, drink: false } <br>  } <br> } <br></code></li></ul></li></ul></li><li>物件類型 <ul><li>Object</li><li>Array</li><li>Function</li><li>Date</li><li>Regexp <ul> 範例，身分證字號 <br><code> function isValidTaiwanId(id) { <br>  const taiwanIdRegex = /^[A-Z][12]\\d{8}$/; <br>  return taiwanIdRegex.test(id); <br> } </code><br> ^，表示匹配輸入的開始位置。 <br> [A-Z]，表示批妹一個大寫字母。 <br> [12]，表示匹配字符1或2 <br> \\d{8}，表示匹配後面8個數字 <br> $，表示匹配輸入的結束位置 </ul></li></ul></li>',2),S=[g],$={__name:"ch1",props:{title:String},setup(r){const e=i(!1);return(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",f,S)):b("",!0)]))}},m=r=>(h("data-v-fc853031"),r=r(),v(),r),w={key:0,type:"I"},k=m(()=>l("li",null,"var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域",-1)),I=m(()=>l("li",null,"let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值",-1)),x=m(()=>l("li",null,"const，存在變數提升，宣告的變數為常數",-1)),A=[k,I,x],N={__name:"ch2",props:{title:String},setup(r){const e=i(!1);return(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",w,A)):b("",!0)]))}},j=y(N,[["__scopeId","data-v-fc853031"]]),C={key:0,type:"I"},D=_("<li> 陣列，用[]解構 <ul><li><code> let [a, b] = [1, 2]; <br> console.log(a); // 输出: 1 </code></li></ul></li><li>物件，用{}解構 <ul><li><code> let { city, country } = { city: &#39;New York&#39;, country: &#39;USA&#39; }; <br> console.log(city); // 输出: New York </code></li><li>重新賦值 <code> let { a: x, b: y } = { a: 10, b: 20 }; <br> console.log(x); // 输出: 10 </code></li><li>默認值 <code> let { firstName = &#39;John&#39;, lastName = &#39;Doe&#39; } = {}; <br> console.log(firstName); // 输出: John </code></li></ul></li><li>函式可套用前兩者</li>",3),E=[D],O={__name:"ch5",props:{title:String},setup(r){const e=i(!1);return(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",C,E)):b("",!0)]))}},P={key:0,type:"I"},q=_('<li> Promise是一種用於處理非同步操作的功能(依序處理非同步)，他代表一個非同步操作的最終完成或失敗，並取得其結果。 </li><li>Pedning 等待中 / Resolved 成功 / Rejected 失敗</li><li>promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r">立即執行</span>並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止 </li><li>常見的非同步操作有，settimeout、事件監聽、網路請求</li><li>標準使用方法如下 <br><code> // 創建一個promise <br> const mypromise = <span class="r">new Promise((resolve, reject)</span> =&gt; { <br>  // 開始非同步操作 <br>  setTimeout(() =&gt; { <br>    const randomNumber = Math.random(); <br>    if (randomNumber &gt; 0.5) { <br>    // 操作成功 <br>      resolve(randomNumber); <br>    } else { <br>     // 操作失敗 <br>     reject(new Error(&quot;andom number is less than 0.5&quot;)); <br>     } <br>  }, 1000); <br> }); <br> <br> // 使用非同步 <br> mypromise.<span class="r">then</span>((result) =&gt; { <br>  console.log(&#39;Promise resolved with result:&#39;, result); <br> }).<span class="r">catch</span>((err) =&gt; { <br>  console.error(&#39;Promise rejected with error:&#39;, err); <br> }) </code></li>',5),R=[q],V={__name:"ch6",props:{title:String},setup(r){const e=i(!1);return(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",P,R)):b("",!0)]))}},B={key:0,type:"I"},T=_("<li>Array <ul><li>添加新的元素至Array，Arr.push(123)</li><li>splice()，用於Arr的插入、刪除、替換元素、修改、返回已刪除的元素</li><li>Arr.splice(要操作的起始索引,要刪除的元素數量,要插入的元素) <br> Array.splice(1,2,&quot;orange&quot;) 從索引1開始，刪除兩個元素，並插入1個ornage元素 </li><li>Arr的轉換 <br> const numbers = [1, 2, 3, 4, 5]; <ul><li> map，將數組的每個元素應用於指定函數，並返回一個新的數組，新數組包含了每個元素調用該函數後的結果。 <br> doubled = numbers.map(num =&gt; num * 2); // [2, 4, 6, 8, 10] </li><li> filter，方法用於從數組中過濾出滿足指定條件的元素，並返回一個新的數組，新數組包含了滿足條件的所有元素。 <br> doubled = numbers.filter(num =&gt; num % 2 === 0); // [2, 4] </li><li> reduce，方法用於將數組的所有元素歸納（累加）為一個單一的值，通常是一個數字、字符串或對象。 <br> doubled = numbers.reduce((acc, num) =&gt; acc + num, 0); // 15 </li></ul></li></ul></li><li>Object <ul><li>刪除，delete Object.gender // 刪除Object.gender屬性</li></ul></li>",2),M=[T],F={__name:"ch7",props:{title:String},setup(r){const e=i(!1);return i(!1),(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",B,M)):b("",!0)]))}},J={key:0,type:"I"},Y=l("li",null,"return，結束當前函式",-1),Z=l("li",null,"break，跳出循環",-1),z=l("li",null,"continue，跳到下一次的迴圈",-1),L=[Y,Z,z],U={__name:"ch8",props:{title:String},setup(r){const e=i(!1);return i(!1),(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",J,L)):b("",!0)]))}},G={key:0,type:"I"},H=_('<li> async/await，算是promise的語法糖，需要有promise回傳，才能執行下一步 </li><li>settimeout不會回傳promise，要另外創建 <br><code> // 定義一個非同步函數 <br> const fetchData = async () =&gt; { <br>  return new Promise((resolve, reject) =&gt; { <br>    // 模拟非同步操作 <br>    setTimeout(() =&gt; { <br>      resolve(&#39;Async data&#39;); <br>    }, 1000); <br>  }); <br> }; <br> // 調用非同步函數 <br> const getData = <span class="r">async</span> () =&gt; { <br>  try { <br>    const data = <span class="r">await</span> fetchData(); <br>    console.log(&#39;Data:&#39;, data); // Data: Async data <br>   } catch (error) { <br>    console.error(&#39;Error:&#39;, error); <br>  } <br> }; <br> getData(); </code></li><li>API請求會有promsie</li><li>文件讀取也有promise <br><code> const fileInput = document.getElementById(&#39;file-input&#39;); <br> fileInput.addEventListener(&#39;change&#39;, () =&gt; { <br>  const file = fileInput.files[0]; <br>  const reader = new FileReader(); <br>  reader.readAsText(file); <br>  reader.onload = () =&gt; { <br>   console.log(&#39;File content:&#39;, reader.result); <br>  }; <br> }); </code></li>',4),K=[H],Q={__name:"ch9",props:{title:String},setup(r){const e=i(!1);return(n,t)=>(s(),o("div",null,[l("h2",{onClick:t[0]||(t[0]=p=>e.value=!e.value)},[c(u(r.title)+" ",1),l("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(s(),o("ol",G,K)):b("",!0)]))}},ee={__name:"JS_basic",setup(r){return(e,n)=>(s(),o("div",null,[a($,{title:"數據類型"}),a(j,{title:"變量"}),a(O,{title:"解構賦值(ES6)"}),a(F,{title:"Array/Object"}),a(U,{title:"break/continue/return"}),a(V,{title:"非同步(ES6)-promise"}),a(Q,{title:"非同步(ES6)-async"})]))}};export{ee as default};