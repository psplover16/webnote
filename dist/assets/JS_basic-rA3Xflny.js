import{r as i,o as t,c as o,a as n,b as r,t as d,n as g,d as u,e as b,f as m,g as p}from"./index-Y-tf08Um.js";const _={key:0,type:"I"},y=b(`<li> 原始類型 <ul><li>undefined，變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在。預設是undefined，完全<span class="r">虛無</span>的意思 </li><li>null，表示空的、無效、未定義的值。表示具體的空值，可以賦值給對象。<span>有架子、沒紙捲筒</span></li><li>Boolean</li><li>String</li><li>Number</li><li> symbol <ul><li>ES6導入</li><li> const bunny = symbol(&quot;可愛的小兔子&quot;); <br> console.log(bunny.description); // 可愛的小兔子 </li><li> 不能直接用遍歷、for迴圈撈取，要使用<span class="r">Object.getOwnPropertySymbols()</span></li><li> 放在物件裡面，當作定義屬性key時，要將symbol的值放在[]當中，不然會被當字串 </li><li>不能用 . 取得屬性值，要用[]</li><li> 範例， <pre>const classMate = { 
  [Symbol(&#39;宜蓁&#39;)] : { score: 70, sleep: &#39;3:00&#39;, drink: true }, 
  [Symbol(&#39;chita&#39;)] : { score: 90, sleep: &#39;20:00&#39;, drink:false }, 
  [Symbol(&#39;宜蓁&#39;)] : { score: 100, sleep: &#39;19:00&#39;, drink: false }, 
 } 
 const symbols = Object.getOwnPropertySymbols(classMate); 
 for (const symbol of symbols) { 
  if (symbol.toString() === &#39;Symbol(宜蓁)&#39;) { 
   const value = classMate[symbol]; 
   console.log(value); // { score: 100, sleep: &#39;19:00&#39;, drink: false } 
  } 
} 
             </pre> for...in 表示key <br> for...of 表示對象元素 </li></ul></li></ul></li><li> 物件類型 <ul><li>Object</li><li>Array</li><li>Function</li><li>Date</li><li> Regexp <ul> 範例，身分證字號 <br><code> function isValidTaiwanId(id) { <br>  const taiwanIdRegex = /^[A-Z][12]\\d{8}$/; <br>  return taiwanIdRegex.test(id); <br> } </code><br> ^，表示匹配輸入的開始位置。 <br> [A-Z]，表示批妹一個大寫字母。 <br> [12]，表示匹配字符1或2 <br> \\d{8}，表示匹配後面8個數字 <br> $，表示匹配輸入的結束位置 </ul></li></ul></li><li> 判斷資料型別的方式 <ul><li>typeof(value)，能回傳基礎資料型態</li><li>Array.isArray(value)，判斷value是否為Array</li><li>Object.prototype.toString.call(value)，會回傳 [object Number]，與typeof相比，能回傳較高階的資料型態</li></ul></li>`,3),v=[y],f={__name:"ch1",props:{title:String},setup(s){const e=i(!1);return(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",_,v)):u("",!0)]))}},$={key:0,type:"I"},S=b(`<li><span>var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域，函式範圍作用域，僅限該函式</span><pre>const b = function () {
  for (var i = 0; i &lt; 5; i++) {
    setTimeout(() =&gt; {
      console.log(i)
    }, 0);
  }
}
        </pre> 第二題 <pre>var a = 1;
console.log(a);  // 1
function aa() {
    var a = 2;
    console.log(a)  // 2 
}
aa();
console.log(a);  // 1
        </pre></li><li><span> let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值。塊級作用域，僅限該塊級 <pre>const b = function () {
  for (let i = 0; i &lt; 5; i++) {
    setTimeout(() =&gt; {
      console.log(i)
    }, 0);
  }
}
        </pre><span> 每次回圈，i都是一個全新的變量 </span></span></li><li><span> const，存在變數提升，宣告的變數為常數</span></li><li> 變數提升 <pre>console.log(a); // undefined
var a = 1;

console.log(b); // b is not defined
let b = 1;

console.log(c); // c is not defined
const c = 1;
        </pre></li>`,4),w=[S],j={__name:"ch2",props:{title:String},setup(s){const e=i(!1);return m(()=>{}),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",$,w)):u("",!0)]))}},k={key:0,type:"I"},A=b('<li> JS中實現繼承和屬性查找的一種機制，在JS中，每個對象都有一個指向其原型的鏈接。 </li><li> 當我們訪問的一個對象的屬性或方法，如果對象沒有屬性或方法，JS引擎會沿著原型練往上查找，直到找到相應屬性或原型練的頂端<span class="r">Object.prototype</span>。 </li><li> 範例，<br><code> function Animal(name) { <br>   this.name = name; <br>  } <br> Animal.prototype.sayHello = function(){ <br>  console.log(`Hello, I&#39;m ${this.name}`); <br> } <br> let dog = new Animal(&quot;Dog&quot;); <br> dog.sayHello(); </code></li>',3),x=[A],O={__name:"ch3",props:{title:String},setup(s){const e=i(!1);return(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",k,x)):u("",!0)]))}},C={key:0,type:"I"},I=b(`<li><ul><li><span class="r">不會建立自己的 this</span> ，而是 <span class="r">繼承</span> 自其<span class="r">定義時(創建時)</span>所在的詞法作用域 </li><li>this的值由函數定義時所在的上下文決定，而不是呼叫時的上下文。</li></ul><pre>  const obj = { 
  name: &#39;John&#39;, 
  greet: function() { 
   setTimeout(function() { 
    console.log(this.name); // this 指向了全局对象(在浏览器中是 window)，输出 &quot;&quot; ，因為settimeout是在全局執行
   }, 1000); 
  }, 
  greet2: function(){ 
   setTimeout(() =&gt; { 
     console.log(this.name); // 箭頭函數的this繼承外部函數作用域，箭頭函數的this與外部作用域相同。箭頭函數繼承了greet2的函數作用域，greet2的函數作用域在obj內
   }, 1000); 
  },
  greet3: function(){
    console.log(this.name); // John
  },
  greet4: ()=&gt;{
    console.log(this.name); // 調用時，會看&quot;當下所處環境&quot;的外部作用域
  }
}; 

obj.greet(); // 调用 greet 方法 
obj.greet2(); // 调用 greet2 方法 
obj.greet3();  // John
obj.greet4();  // Cannot read properties of undefined

setTimeout(()=&gt;{
  obj.greet3(); // John
  obj.greet4(); // Cannot read properties of undefined
},10);

// obj.greet3 與 obj.greet3() 差別在於， obj.greet3 是一個函數對象引用，而非調用該方法。

setTimeout(obj.greet3, 10); // setTimeout 的 this指向全局，然後調用
setTimeout(obj.greet4, 10);  // Cannot read properties of undefined
</pre></li><li> 無法作為建構式，箭頭函數不能用new來創建物件實例，因此不能用做構造函數 <ul><li> 傳統函數，有自己的this <br><code> function Person(name, age) { <br>  this.name = name; // 設置name屬性 <br>  this.age = age; // 設置age屬性 <br> } <br> // 使用構造函數創建實例 <br> const john = new Person(&#39;John&#39;, 30); <br> console.log(john.name); // john </code></li></ul></li><li> 不能使用arguments，箭頭函數內部沒有自己的arguments對象，而是繼承了父層的arguments對象 <ul><li> arguments是一個特殊的對象，它包含了函數被調用時傳遞給函數的參數列表，類似數組、但不是數組，主要用於訪問函數參數，而非操作 </li><li><code> aa(1,2,3); // [1,2,3]就是arguments </code></li><li> 但若想在箭頭函數中訪問參數，用剩餘參數與法撈取 <ul><li><span class="r">剩餘參數</span>，捕獲多餘的參數</li><li><code> const arrowFunctionWithArgs = (...args) =&gt; { <br>  console.log(args); <br> } <br> arrowFunctionWithArgs(1, 2, 3); // 输出: [1, 2, 3] </code></li><li><code> function sum(...args) { <br>  let total = 0; <br>  for (let arg of args) { <br>   total += arg; <br>  } <br>  return total; <br> } <br> console.log(sum(1, 2, 3)); // 输出: 6 </code></li></ul></li></ul></li><li> 不能用於定義原型方法，由於箭頭函數沒有自己的this，所以無法定義原型方法 </li>`,4),J=[I],q={__name:"ch4",props:{title:String},setup(s){const e=i(!1);return(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",C,J)):u("",!0)]))}},N={key:0,type:"I"},M=b(`<li> 陣列，用[]解構 <ul><li><pre>  let [a, b] = [1, 2];
  console.log(a); // 输出: 1
  [a,b] = [b,a];
  console.log(a); // 輸出2
</pre></li></ul></li><li>物件，用{}解構 <ul><li><code> let { city, country } = { city: &#39;New York&#39;, country: &#39;USA&#39; }; <br> console.log(city); // 输出: New York </code></li><li>重新賦值 <code> let { a: x, b: y } = { a: 10, b: 20 }; <br> console.log(x); // 输出: 10 </code></li><li>數值互調 <pre>let c = {
    a: 1,
    b: 2
}
let { a, b } = c;
c = { b, a }
console.log(c); // // {b : 2 , a : 1}
            </pre></li><li>默認值 <code> let { firstName = &#39;John&#39;, lastName = &#39;Doe&#39; } = {}; <br> console.log(firstName); // 输出: John </code></li></ul></li><li>函式可套用前兩者</li>`,3),P=[M],T={__name:"ch5",props:{title:String},setup(s){const e=i(!1);return(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",N,P)):u("",!0)]))}},D={key:0,type:"I"},H=b(`<li> Promise是一種用於處理非同步操作的功能(依序處理非同步)，他代表一個非同步操作的最終完成或失敗，並取得其結果。 </li><li>Pedning 等待中 / Resolved 成功 / Rejected 失敗</li><li>promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r">立即執行</span>並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止 </li><li>常見的非同步操作有，settimeout、事件監聽、網路請求</li><li>標準使用方法如下 <br><code> // 創建一個promise <br> const mypromise = <span class="r">new Promise((resolve, reject)</span> =&gt; { <br>  // 開始非同步操作 <br>  setTimeout(() =&gt; { <br>    const randomNumber = Math.random(); <br>    if (randomNumber &gt; 0.5) { <br>    // 操作成功 <br>      resolve(randomNumber); <br>    } else { <br>     // 操作失敗 <br>     reject(new Error(&quot;andom number is less than 0.5&quot;)); <br>     } <br>  }, 1000); <br> }); <br> <br> // 使用非同步 <br> mypromise.<span class="r">then</span>((result) =&gt; { <br>  console.log(&#39;Promise resolved with result:&#39;, result); <br> }).<span class="r">catch</span>((err) =&gt; { <br>  console.error(&#39;Promise rejected with error:&#39;, err); <br> }) </code></li><li> 複雜promise範例 <pre>const asyncOperation1 = new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
        resolve(&#39;Async Operation 1 completed&#39;);
    }, 2000);
});


function asyncOperation2() {
    return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            resolve(&#39;Async Operation 2 completed&#39;);
        }, 1500);
    });
}
function asyncOperation3() {
    return new Promise((resolve, reject) =&gt; {
        setTimeout(() =&gt; {
            resolve(&#39;Async Operation 3 completed&#39;);
        }, 1000);
    });
}
// 串聯多個非同步操作
asyncOperation1
    .then((result1) =&gt; {
        console.log(result1);
        return asyncOperation2();
    })
    .then((result2) =&gt; {
        console.log(result2);
        return asyncOperation3();
    })
    .then((result3) =&gt; {
        console.log(result3);
        console.log(&#39;All async operations completed&#39;);
    })
    .catch((error) =&gt; {
        console.error(&#39;An error occurred:&#39;, error);
    });
// 同時執行多個非同步操作， 陣列內的function個別執行，陣列內資訊皆收到resolve之後，才會執行then
Promise.all([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) =&gt; {
        console.log(&#39;All async operations completed&#39;);
        console.log(&#39;Results:&#39;, results);
    })
    .catch((error) =&gt; {
        console.error(&#39;An error occurred:&#39;, error);
    });
        </pre></li>`,6),B=n("pre",null,`setTimeout(() => {
    console.log(1)
}, 0);
console.log(2)
const asyncOperation1 = new Promise((resolve, reject) => {
    console.log(3)
    resolve(4)
    console.log(5)
});
const asyncOperation2 = new Promise((resolve, reject) => {
    console.log(6)
    resolve(7)
    console.log(8)
});
asyncOperation1.then((re) => {
    console.log(9)
    console.log(re)
    return asyncOperation2;
    console.log(10)
}).then((r) => {
    console.log(11)
    console.log(r)
})
        `,-1),E={key:0},V={__name:"ch6",props:{title:String},setup(s){const e=i(!1),a=i(!1);return m(()=>{}),(l,c)=>(t(),o("div",null,[n("h2",{onClick:c[0]||(c[0]=h=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",D,[H,n("li",null,[n("span",{onClick:c[1]||(c[1]=h=>a.value=!a.value),class:"r"}," 順序解析範例，求console.log()順序，點此看答案 "),B,a.value?(t(),o("span",E," 2/3/5/6/8/9/4/11/7/1 ")):u("",!0)])])):u("",!0)]))}},R={key:0,type:"I"},z=b('<li> Array <ul><li>添加新的元素至Array，Arr.push(123)</li><li> 用於Arr的插入、刪除、替換元素、修改、返回已刪除的元素，splice() <ul><li><span class="r"> Arr.splice(要操作的起始索引,要刪除的元素數量,要插入的元素)</span><br> Array.splice(1,2,&quot;orange&quot;) 從索引1開始，刪除兩個元素，並插入1個ornage元素 </li></ul></li><li> Arr的轉換 <br> const numbers = [1, 2, 3, 4, 5]; <ul><li><span class="r">map，將數組的每個元素應用於指定函數</span>，並返回一個新的數組，新數組包含了每個元素調用該函數後的結果。 <br> doubled = numbers.map((num)=&gt;return num*2); // doubled = [2, 4, 6, 8, 10] </li><li><span class="r">filter</span>，方法用於從數組中<span class="r">過濾</span> 出滿足指定條件的元素，並返回一個新的數組，新數組包含了滿足條件的所有元素。 <br> doubled = numbers.filter(num =&gt; num % 2 === 0); // [2, 4] </li><li><span class="r">reduce</span>，方法用於將數組的<span class="r">所有元素歸納（累加）</span> 為一個單一的值，通常是一個數字、字符串或對象。 <br> doubled = numbers.reduce((acc, num) =&gt; acc + num, 0); // 15 </li></ul></li><li>陣列合併，arr3 = arr1.concat(arr2)</li><li> 將陣列中的所有元素，使用參數做分隔，形成字串， arr.join(params_可選) </li><li>刪除並返回最後一個元素 Arr.pop();</li><li> 對陣列排序，sort <ul><li>Arr.sort((beforeNum,afterNum)=&gt;beforeNum - afterNum) 升序</li><li>前值若要排序在後值之後，要回傳正數</li></ul></li><li>移除第一個元素，並取得他 array.shift()</li><li> 將新元素添加到陣列開頭，然後陣列元素會向後移動一位 array.unshift(Str) </li></ul></li><li> Object <ul><li>刪除，delete Object.gender // 刪除Object.gender屬性</li><li>Object.keys(Object obj).length 物件長度</li></ul></li>',2),F=[z],G={__name:"ch7",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",R,F)):u("",!0)]))}},L={key:0,type:"I"},U=n("li",null,[r("return，結束當前函式 "),n("ul",null,[n("li",null,"forEach，不能跳出當前函式，只能跳出當次循環")])],-1),W=n("li",null,"break，跳出循環",-1),Y=n("li",null,"continue，跳到下一次的迴圈",-1),Z=[U,W,Y],K={__name:"ch8",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",L,Z)):u("",!0)]))}},Q={key:0,type:"I"},X=b('<li> async/await，算是promise的語法糖，需要有promise回傳，才能執行下一步 </li><li>settimeout不會回傳promise，要另外創建 <br><code> // 定義一個非同步函數 <br> const fetchData = async () =&gt; { <br>  return new Promise((resolve, reject) =&gt; { <br>    // 模拟非同步操作 <br>    setTimeout(() =&gt; { <br>      resolve(&#39;Async data&#39;); <br>    }, 1000); <br>  }); <br> }; <br> // 調用非同步函數 <br> const getData = <span class="r">async</span> () =&gt; { <br>  try { <br>    const data = <span class="r">await</span> fetchData(); <br>    console.log(&#39;Data:&#39;, data); // Data: Async data <br>   } catch (error) { <br>    console.error(&#39;Error:&#39;, error); <br>  } <br> }; <br> getData(); </code></li><li>API請求會有promsie</li><li>文件讀取也有promise <br><code> const fileInput = document.getElementById(&#39;file-input&#39;); <br> fileInput.addEventListener(&#39;change&#39;, () =&gt; { <br>  const file = fileInput.files[0]; <br>  const reader = new FileReader(); <br>  reader.readAsText(file); <br>  reader.onload = () =&gt; { <br>   console.log(&#39;File content:&#39;, reader.result); <br>  }; <br> }); </code></li>',4),ee=[X],ne={__name:"ch9",props:{title:String},setup(s){const e=i(!1);return(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",Q,ee)):u("",!0)]))}},le={key:0,type:"I"},te=n("li",null,[r("call by value，JS中，傳遞基本資料類型會採這個 "),n("pre",null,`function changeValue(x) {
  x = 10;
}
let num = 5;
changeValue(num);
console.log(num);  // 5
        `)],-1),oe=n("li",null,[r(" call by reference，傳遞json或Array會用這個 "),n("pre",null,`function changeObject(obj) {
  obj.name = "John";
}
let person = { name: "Alice" };
changeObject(person);
console.log(person.name); // John
        `)],-1),se=n("li",null,[r("深層複製 "),n("ul",null,[n("li",null,[n("pre",null,`var family = {
 name: ‘小明家’,
 members: {
  father: '老爸',
  mom: '老媽',
  ming: '小明'
 },
}
console.log(JSON.stringify(family));
console.log(JSON.parse(JSON.stringify(family)));
            `)])])],-1),re=[te,oe,se],ie={__name:"ch10",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",le,re)):u("",!0)]))}},ae={key:0,type:"I"},ce=b(`<li> 字串切割 <br><code> const str = &#39;apple,banana,orange&#39;; <br> // 使用,做切割 <br> const fruits = str.split(&#39;,&#39;); <br><span class="r">const characters = str.split(&#39;&#39;);</span><br> console.log(fruits); // 輸出: [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;] <br> console.log(characters); // 輸出: [&#39;a&#39;,&#39;p&#39;,&#39;p&#39;,&#39;l&#39;.............] </code></li><li>str.trim()，刪除字符的頭尾空格</li><li>obj(物件).constructor， 查看obj的構建函數(創建對象的函數，構建函數的prototype會自動關聯到該構建函數創建的所有對象實例的原型練上)</li><li>Object.getPrototypeOf(obj(物件)); 返回obj的原型鍊()</li><li>閉包 <pre>  var createCounter = function (n) {
    var z = n - 1;
    return function counter() {
      z = z + 1;
      return z;
    };
  };
  const counter = createCounter(10)
  counter() // 10
  counter() // 11
        </pre></li><li>*，Generator函數標示符。 <pre>  function* aa(){
    yield 1;
    yield 2;
    var a = 1;
    while(true){
      yield a;
      a = a+1;
    }
  }
  const genA = aa();
  console.log(genA.next().value); // 1
  console.log(genA.nexts().value); // 2
  console.log(genA.next().value); // undefined
        </pre></li><li><ul><li>string.toUpperCase(); 字串轉大寫</li><li>string.toLowerCase(); 字串轉小寫</li></ul></li><li>Math.abs(numbers) 回傳一個絕對值</li><li>Math.round(numbers) 回傳一個對小數點，四捨五入的數字</li><li>Math.ceil(numbers) 回傳一個無條件進位至整數</li><li>Math.floor(numbers) 回傳一個無條件捨去至整數</li><li>eval(&quot;&quot;) 該函數為會執行參數內全部的東西</li><li></li><li></li><li></li>`,15),ue=[ce],pe={__name:"ch11",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",ae,ue)):u("",!0)]))}},de={key:0,type:"I"},ge=n("li",null,[r("氣泡演算法，不斷重複比較相鄰兩值，來做排序 "),n("pre",null,`  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length-1-i; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
      }
    }
  }
        `)],-1),be=n("li",null,[r("選擇排序法，將陣列分成排序和未排序，在未排序的部分持續找最大或最小，將之交換到已排序的部分 "),n("pre",null,`  for (let i = 0; i < a.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > a[maxIndex]) {
        maxIndex = j;
      }
    }
    [a[i], a[maxIndex]] = [a[maxIndex], a[i]];
  }
        `)],-1),me=n("li",null,"插入排序法，將陣列分成未排序與排序的部分，將元素一個個由未排列的部分拿到已排列的部分並在已排列的部分排序，直到未排列的陣列為空。",-1),he={__name:"ch12",props:{title:String},setup(s){const e=i(!1);return i(!1),m(()=>{}),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",de,[r(" const a = [0,1,2,3,4,5,6]，由大排到小 "),ge,be,me])):u("",!0)]))}},_e={key:0,type:"I"},ye=n("li",null,[r("class "),n("pre",null,`class Myclass {
    // 構造函數，在類中使用，會在創建對象時自動調用，通常用於初始化屬性
    constructor(name) {
        console.log("建構了",name);
        this.name = name;
    }
    // 類方法
    sayHello(name) {
        console.log(this.name);
    }
    // 靜態方法
    static staticSayHello() {
        console.log(this.name);  //  Myclass
        console.log(12345);
    }
}
const mydog = new Myclass("dogJacky");  // 建構了 dogJacky
mydog.sayHello();  // dogJacky
// 靜態方法，static，屬於類本身，而不屬於類實例，能通過類名直接調用，而無須創建實例
Myclass.staticSayHello(); // Myclass  12345
        `)],-1),ve=n("li",null,[r("extend 繼承，子類繼承父層的屬性和方法，也可以添加自己的屬性或方法 "),n("pre",null,`class MyclassChild extends Myclass {
    speak() {
        console.log("I'm child.");
        console.log(this.name);
    }
}
const newDog = new MyclassChild("dogJacky's child"); // 建構了 dogJacky's child
newDog.speak();  // I'm child.      dogJacky's child
newDog.sayHello(); // dogJacky's child
MyclassChild.staticSayHello();  // MyclassChild    12345
        `)],-1),fe=[ye,ve],$e={__name:"ch13",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",_e,fe)):u("",!0)]))}},Se={key:0,type:"I"},we=b(`<li>全域 <ul><li>瀏覽器，指向window</li><li>nodeJS，指向global對象</li></ul></li><li> 函數調用 <ul><li>普通函數，this會指向window</li><li>作為物件的方法調用，this會指向調用該方法的對象</li><li><ul><li> call()，在指定的上下文中，調用函數，也就是指定this。 <br> func.call(context,arg1,arg2...); <br> 用call方法<span class="r">調用</span>func函數，把func的this替換成context <pre>function great(name) {
    console.log(name);
    console.log(this);
    console.log(this.name);
}
great(&quot;DOG&quot;);  //  DOG / window / &quot;&quot;
great.call({ name: &quot;Alice&quot; }, &#39;Bob&#39;);  // Bob / { name: &quot;Alice&quot; } / Alice
                </pre></li><li> apply()，用法語call()雷同，調用，最大差別在，apply()參數是用陣列的方式帶入 <br> function.apply(context, [argsArray]) <pre>function greet(name,name2) {
    console.log(\`Hello, \${name}!\`);
    console.log(\`Hello, \${name2}!\`);
}
greet.apply(null, [&#39;Alice&#39;,&#39;Bob&#39;]);  // Alice  Bob
                </pre></li><li> bind()，<span class="r">創建</span>一個新的函數，該函數具有指定上下文及預設參數 <br> function.bind(context, arg1, arg2, ...) <pre>const greet = (greeting, name) =&gt; {
    console.log(\`\${greeting}, \${name}!\`);
};
const args = [&#39;Hello&#39;, &#39;Alice&#39;];
const sayHello = () =&gt; greet(...args);
sayHello();  //  Hello Alice
</pre></li></ul> 如果函数使用 call()、apply() 或 bind() 方法进行调用，this 指向作为参数传递的对象。???????????????????????? </li><li>構造函數，this會通過new 創建新對象</li><li>箭頭函數，沒有自己的this，會在創建時，捕獲其上下文作用域的this，當成自己的this</li></ul></li>`,2),je={__name:"ch14",props:{title:String},setup(s){const e=i(!1);return i(!1),(a,l)=>(t(),o("div",null,[n("h2",{onClick:l[0]||(l[0]=c=>e.value=!e.value)},[r(d(s.title)+" ",1),n("div",{class:g(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(t(),o("ol",Se,[r(" 每個函數都有this，表示函數的執行上下文。函數的執行上下文是指函數被調用時所處的環境，該執行上下文包含了函數被調用時所需要的訊息。 "),we])):u("",!0)]))}},Ae={__name:"JS_basic",setup(s){return(e,a)=>(t(),o("div",null,[p(f,{title:"數據類型"}),p(j,{title:"變量"}),p(O,{title:"原型链(原型方法)"}),p($e,{title:"類"}),p(je,{title:"this指向???"}),p(q,{title:"箭頭函數(ES6)"}),p(T,{title:"解構賦值(ES6)"}),p(G,{title:"Array/Object"}),p(K,{title:"break/continue/return"}),p(V,{title:"非同步(ES6)-promise"}),p(ne,{title:"非同步(ES6)-async"}),p(ie,{title:"Call By Value, Call By Reference 參數引用,深層複製"}),p(pe,{title:"常見函數"}),p(he,{title:"常見演算法"})]))}};export{Ae as default};
