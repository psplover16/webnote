import{_ as c}from"./plugin-vueexport-helper-x3n3nnut.js";import{r as a,f as d,c as o,a as l,b as e,d as i,F as h,o as s,p,l as y}from"./index-0rkc6fGc.js";const t=u=>(p("data-v-e79dc7f3"),u=u(),y(),u),m={class:"btnGroup"},v={key:0},f={key:0},k={key:0},g=t(()=>l("li",null,"typeof(value)",-1)),A=t(()=>l("li",null,"Array.isArray(value)",-1)),S=t(()=>l("li",null,"Object.prototype.toString.call(value)",-1)),w=[g,A,S],N={key:0},b=t(()=>l("li",null,"exec，會回傳Array，regex.ecec(value)",-1)),x=t(()=>l("li",null,"test，會回傳bool，regex.test(value)",-1)),j=[b,x],C={key:0},D=t(()=>l("li",null,"var，變數提升，函數作用域、可重複宣告",-1)),J=t(()=>l("li",null,"let，塊級作用域、不可重複宣告、無變數提升",-1)),O=t(()=>l("li",null,"const，常數，塊級作用域、不可重複宣告、無變數提升",-1)),P=[D,J,O],E={key:0},I=t(()=>l("li",null,"全域，指向window",-1)),R=t(()=>l("li",null,"普通函數，指向window",-1)),T=t(()=>l("li",null,"作為物件，會指向調用該方法的對象(物件本身)",-1)),B=t(()=>l("li",null,"構造函數，this會通過new創建新對象，指向新的對象",-1)),F=t(()=>l("li",null,"箭頭函數，沒有自己的this，當在創建時，捕獲其上下文作用域的this，當成自己的this",-1)),V=[I,R,T,B,F],M={key:0},$=t(()=>l("li",null,"沒有自己的this，而是在其創建時，繼承其詞法作用域",-1)),q=t(()=>l("li",null,"無法作為建構式，不能用new來創建物件",-1)),G=t(()=>l("li",null,"不能使用arguments",-1)),H=[$,q,G],L={key:0},X={key:0},z=t(()=>l("li",null,"不加，按照文檔順序執行，遇到沒有 defer 的 script 標籤時，它會立即暫停文檔解析，下載並執行該腳本，然後再繼續解析文檔的餘下部分。可能會阻塞腳本",-1)),K=t(()=>l("li",null,"defer，將腳本的下載延遲至文檔解析完畢，對內嵌腳本無效",-1)),Q=t(()=>l("li",null,"async，非同步的下載腳本，可能會導致變數混亂",-1)),U=[z,K,Q],W={key:0},Y=t(()=>l("li",null,"state / actions / getters",-1)),Z=t(()=>l("li",null,"export default aa~~",-1)),ll=t(()=>l("li",null,[l("pre",null,`import {aa} from "pinia的文檔"
aa().count++;
aa().action()
aa.getters;
            `)],-1)),tl=[Y,Z,ll],el={key:0},nl=t(()=>l("li",null,"router.push(location)",-1)),ol=t(()=>l("li",null,"router.replace(location)",-1)),sl=t(()=>l("li",null,"router.go(number)",-1)),il=t(()=>l("li",null,"router.back()",-1)),ul=t(()=>l("li",null,"router.forward()",-1)),_l=t(()=>l("li",null,[l("pre",null,`router.beforEach((to,from,next)=>{
next()
})
            `)],-1)),rl=t(()=>l("li",null,[l("pre",null,`router.afterEach((to,from)=>{
})
            `)],-1)),cl=[nl,ol,sl,il,ul,_l,rl],al={key:0},dl=t(()=>l("li",null,"route.path 當前路徑",-1)),hl=t(()=>l("li",null,"route.params",-1)),pl=t(()=>l("li",null,"route.query get變數",-1)),yl=t(()=>l("li",null,"route.name",-1)),ml=[dl,hl,pl,yl],vl={key:0},fl=t(()=>l("li",null,"SSR，服務器具渲染，SEO",-1)),kl=t(()=>l("li",null,"CSR，vue3, 渲染過程在JS，JS會比較大包，載入速度會比較慢，可互動時間比較長",-1)),gl=[fl,kl],Al={key:0},Sl=t(()=>l("li",null,"瀏覽器的安全限制，代表兩個網址不同源，不同協定/不同主機/不同port",-1)),wl=t(()=>l("li",null,[e("解決， "),l("ul",null,[l("li",null,"Access-controll-allow-orgin"),l("li",null,"代理伺服器"),l("li",null,"JSONP"),l("li",null,"websocket")])],-1)),Nl=[Sl,wl],bl={key:0},xl=t(()=>l("li",null,"跨站請求偽造",-1)),jl=t(()=>l("li",null,"攻擊者利用使用者的身分訊息執行了使用者非本意的操作",-1)),Cl=t(()=>l("li",null,"利用token來防範",-1)),Dl=[xl,jl,Cl],Jl={key:0},Ol=t(()=>l("li",null,"跨站腳本攻擊",-1)),Pl=t(()=>l("li",null,"攻擊者透過注入腳本來利用網站本身的程式漏，當其他用戶訪問受影響的網頁時，這些腳本會在用戶的瀏覽器執行，從而執行竊取個資、修改網頁內容等行為",-1)),El=t(()=>l("li",null,[l("ul",null,[e("防範 "),l("li",null,"用戶輸入的資料要進行驗證及過濾"),l("li",null,"對特殊符號進行編碼，以防止瀏覽器誤認為是代碼"),l("li",null,"避免使用不安全的JS API，例如eval()和innerHTML")])],-1)),Il=[Ol,Pl,El],Rl=t(()=>l("li",null,[e("原型鍊 "),l("pre",null,`function dog(name){
    this.name=name;
}
dog.prototype.whatName=function(){
    console.log(this.name);
}
const john = new dog("john")
john.whatName()
        `)],-1)),Tl=t(()=>l("li",null,"建構式",-1)),Bl=t(()=>l("li",null,'Arr.splice("要操作得起始索引","要修改的數量","要添加的元素")',-1)),Fl=t(()=>l("li",null,"Arr1.concat(Arr2)",-1)),Vl={key:0},Ml={key:0},$l={key:0},ql={key:0},Gl={key:0},Hl=t(()=>l("li",null,"範例為升序",-1)),Ll=t(()=>l("li",null,"beforeNum - afterNum 若 為正數，兩者要交換位置",-1)),Xl=[Hl,Ll],zl={key:0},Kl=t(()=>l("li",null,[l("pre",null,`const mypromise = new Promise((resolve, reject) => { 
  // 模拟非同步操作 
  setTimeout(() => { 
    resolve('Async data'); 
  }, 1000); 
}); 
            `)],-1)),Ql=t(()=>l("li",null,[l("pre",null,` mypromise.then((result) => { 
  console.log('Promise resolved with result:', result); 
 }).catch((err) => { 
  console.error('Promise rejected with error:', err); 
 }) 
            `)],-1)),Ul=[Kl,Ql],Wl={key:0},Yl=t(()=>l("li",null,[l("pre",null,`const fetchData = async () => { 
 return mypromise;
}; 
            `)],-1)),Zl=t(()=>l("li",null,[l("pre",null,`const getData = async () => { 
 try { 
   const data = await fetchData(); 
   console.log('Data:', data); // Data: Async data 
  } catch (error) { 
   console.error('Error:', error); 
 } 
}; 
getData(); 
            `)],-1)),lt=[Yl,Zl],tt={__name:"commonly",props:{title:String},setup(u){const n=a(!0);return d(()=>{}),(et,_)=>(s(),o(h,null,[l("div",m,[l("button",{onClick:_[0]||(_[0]=r=>n.value=!1)},"收納"),l("button",{onClick:_[1]||(_[1]=r=>n.value=!0)},"展開")]),l("div",null,[l("ul",null,[l("li",null,[e("undefined， "),n.value?(s(),o("span",v,"變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在")):i("",!0)]),l("li",null,[e("null，"),n.value?(s(),o("span",f,"表示空的、無效、未定義的值，可以賦值給對象")):i("",!0)]),l("li",null,[e("表示資料類型 "),n.value?(s(),o("ul",k,w)):i("",!0)]),l("li",null,[e("正則檢驗 "),n.value?(s(),o("ul",N,j)):i("",!0)]),l("li",null,[e("var / let / const "),n.value?(s(),o("ul",C,P)):i("",!0)]),l("li",null,[e("this "),n.value?(s(),o("ul",E,V)):i("",!0)]),l("li",null,[e("箭頭函數 "),n.value?(s(),o("ul",M,H)):i("",!0)]),l("li",null,[e("深層複製， "),n.value?(s(),o("span",L,"JSON.parse(JSON.stringify(value))")):i("",!0)]),l("li",null,[e("script，不加 / defer / async 差異 "),n.value?(s(),o("ul",X,U)):i("",!0)]),l("li",null,[e("pinia有哪些?? "),n.value?(s(),o("ul",W,tl)):i("",!0)]),l("li",null,[e("router "),n.value?(s(),o("ul",el,cl)):i("",!0)]),l("li",null,[e("route "),n.value?(s(),o("ul",al,ml)):i("",!0)]),l("li",null,[e("ssr vs csr "),n.value?(s(),o("ul",vl,gl)):i("",!0)]),l("li",null,[e("CORS "),n.value?(s(),o("ul",Al,Nl)):i("",!0)]),l("li",null,[e("CSRF "),n.value?(s(),o("ul",bl,Dl)):i("",!0)]),l("li",null,[e("XSS攻擊 "),n.value?(s(),o("ul",Jl,Il)):i("",!0)]),Rl,Tl,l("li",null,[e("Array的操作 "),l("ul",null,[Bl,Fl,l("li",null,[e('Arr.join("") '),n.value?(s(),o("span",Vl,"把Array全部元素變成字串組合起來")):i("",!0)]),l("li",null,[e("Arr.pop() "),n.value?(s(),o("span",Ml,"刪除並返回最後一個元素")):i("",!0)]),l("li",null,[e("Arr.shift() "),n.value?(s(),o("span",$l,"刪除並返回第一個元素")):i("",!0)]),l("li",null,[e("Arr.unshift(str) "),n.value?(s(),o("span",ql,"添加str元素至Arr的第一個元素")):i("",!0)]),l("li",null,[e("Arr.sort((beforeNum,afterNum)=>beforeNum - afterNum) "),n.value?(s(),o("ul",Gl,Xl)):i("",!0)])])]),l("li",null,[e("Promise "),n.value?(s(),o("ul",zl,Ul)):i("",!0)]),l("li",null,[e("Async "),n.value?(s(),o("ul",Wl,lt)):i("",!0)])])])],64))}},st=c(tt,[["__scopeId","data-v-e79dc7f3"]]);export{st as default};
