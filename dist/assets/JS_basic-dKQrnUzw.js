import{r as a,o as l,c as s,a as t,b as n,t as c,n as b,d as u,e as d,f as m}from"./index-4QRMDVqp.js";const p={key:0,type:"I"},y=d('<li>原始類型 <ul><li>undefined，變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在。預設是undefined，完全<span class="r">虛無</span>的意思</li><li>null，表示空的、無效、未定義的值。表示具體的空值，可以賦值給對象。<span>有架子、沒紙捲筒</span></li><li>Boolean</li><li>String</li><li>Number</li><li>symbol <ul><li>ES6導入</li><li> const bunny = symbol(&quot;可愛的小兔子&quot;); <br> console.log(bunny.description); // 可愛的小兔子 </li><li>不能直接用遍歷、for迴圈撈取，要使用<span class="r">Object.getOwnPropertySymbols()</span></li><li>放在物件裡面，當作定義屬性key時，要將symbol的值放在[]當中，不然會被當字串</li><li>不能用 . 取得屬性值，要用[]</li><li>範例， <br><code> const classMate = { <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 70, sleep: &#39;3:00&#39;, drink: true }, <br>  [Symbol(&#39;chita&#39;)] : { score: 90, sleep: &#39;20:00&#39;, drink:false }, <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 100, sleep: &#39;19:00&#39;, drink: false }, <br> } <br> const symbols = Object.getOwnPropertySymbols(classMate); <br> for (const symbol of symbols) { <br>  if (symbol.toString() === &#39;Symbol(宜蓁)&#39;) { <br>   const value = classMate[symbol]; <br>   console.log(value); // { score: 100, sleep: &#39;19:00&#39;, drink: false } <br>  } <br> } <br></code></li></ul></li></ul></li><li>物件類型 <ul><li>Object</li><li>Array</li><li>Function</li><li>Date</li><li>Regexp <ul> 範例，身分證字號 <br><code> function isValidTaiwanId(id) { <br>  const taiwanIdRegex = /^[A-Z][12]\\d{8}$/; <br>  return taiwanIdRegex.test(id); <br> } </code><br> ^，表示匹配輸入的開始位置。 <br> [A-Z]，表示批妹一個大寫字母。 <br> [12]，表示匹配字符1或2 <br> \\d{8}，表示匹配後面8個數字 <br> $，表示匹配輸入的結束位置 </ul></li></ul></li>',2),_=[y],f={__name:"ch1",props:{title:String},setup(i){const e=a(!1);return(r,o)=>(l(),s("div",null,[t("h2",{onClick:o[0]||(o[0]=S=>e.value=!e.value)},[n(c(i.title)+" ",1),t("div",{class:b(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",p,_)):u("",!0)]))}},v={__name:"JS_basic",setup(i){return(e,r)=>(l(),s("div",null,[m(f,{title:"數據類型"})]))}};export{v as default};