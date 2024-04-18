import {
  r as s,
  o as n,
  c as r,
  a as l,
  b as i,
  t as u,
  n as b,
  d,
  e as m,
  f as _,
  g as c,
} from "./index-OxM1IN1A.js";
const h = { key: 0, type: "I" },
  g = m(
    '<li> 原始類型 <ul><li>undefined，變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在。預設是undefined，完全<span class="r">虛無</span>的意思 </li><li>null，表示空的、無效、未定義的值。表示具體的空值，可以賦值給對象。<span>有架子、沒紙捲筒</span></li><li>Boolean</li><li>String</li><li>Number</li><li> symbol <ul><li>ES6導入</li><li> const bunny = symbol(&quot;可愛的小兔子&quot;); <br> console.log(bunny.description); // 可愛的小兔子 </li><li> 不能直接用遍歷、for迴圈撈取，要使用<span class="r">Object.getOwnPropertySymbols()</span></li><li> 放在物件裡面，當作定義屬性key時，要將symbol的值放在[]當中，不然會被當字串 </li><li>不能用 . 取得屬性值，要用[]</li><li> 範例， <br><code> const classMate = { <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 70, sleep: &#39;3:00&#39;, drink: true }, <br>  [Symbol(&#39;chita&#39;)] : { score: 90, sleep: &#39;20:00&#39;, drink:false }, <br>  [Symbol(&#39;宜蓁&#39;)] : { score: 100, sleep: &#39;19:00&#39;, drink: false }, <br> } <br> const symbols = Object.getOwnPropertySymbols(classMate); <br> for (const symbol of symbols) { <br>  if (symbol.toString() === &#39;Symbol(宜蓁)&#39;) { <br>   const value = classMate[symbol]; <br>   console.log(value); // { score: 100, sleep: &#39;19:00&#39;, drink: false } <br>  } <br> } <br></code></li></ul></li></ul></li><li> 物件類型 <ul><li>Object</li><li>Array</li><li>Function</li><li>Date</li><li> Regexp <ul> 範例，身分證字號 <br><code> function isValidTaiwanId(id) { <br>  const taiwanIdRegex = /^[A-Z][12]\\d{8}$/; <br>  return taiwanIdRegex.test(id); <br> } </code><br> ^，表示匹配輸入的開始位置。 <br> [A-Z]，表示批妹一個大寫字母。 <br> [12]，表示匹配字符1或2 <br> \\d{8}，表示匹配後面8個數字 <br> $，表示匹配輸入的結束位置 </ul></li></ul></li>',
    2
  ),
  v = [g],
  f = {
    __name: "ch1",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (a, t) => (
        n(),
        r("div", null, [
          l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
            i(u(o.title) + " ", 1),
            l(
              "div",
              { class: b(["isShow", e.value ? "" : "rotate180"]) },
              "^",
              2
            ),
          ]),
          e.value ? (n(), r("ol", h, v)) : d("", !0),
        ])
      );
    },
  },
  y = { key: 0, type: "I" },
  $ = l(
    "li",
    null,
    [
      l(
        "span",
        null,
        "var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域，函式範圍作用域，僅限該函式"
      ),
      l(
        "pre",
        null,
        `const b = function () {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0);
  }
}
        `
      ),
    ],
    -1
  ),
  S = l(
    "li",
    null,
    [
      l("span", null, [
        i(
          " let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值。塊級作用域，僅限該塊級 "
        ),
        l(
          "pre",
          null,
          `const b = function () {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0);
  }
}
        `
        ),
        l("span", null, " 每次回圈，i都是一個全新的變量 "),
      ]),
    ],
    -1
  ),
  w = l(
    "li",
    null,
    [l("span", null, " const，存在變數提升，宣告的變數為常數")],
    -1
  ),
  j = [$, S, w],
  k = {
    __name: "ch2",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        _(() => {}),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", y, j)) : d("", !0),
          ])
        )
      );
    },
  },
  x = { key: 0, type: "I" },
  A = m(
    '<li> JS中實現繼承和屬性查找的一種機制，在JS中，每個對象都有一個指向其原型的鏈接。 </li><li> 當我們訪問的一個對象的屬性或方法，如果對象沒有屬性或方法，JS引擎會沿著原型練往上查找，直到找到相應屬性或原型練的頂端<span class="r">Object.prototype</span>。 </li><li> 範例，<br><code> function Animal(name) { <br>   this.name = name; <br>  } <br> Animal.prototype.sayHello = function(){ <br>  console.log(`Hello, I&#39;m ${this.name}`); <br> } <br> let dog = new Animal(&quot;Dog&quot;); <br> dog.sayHello(); </code></li>',
    3
  ),
  I = [A],
  N = {
    __name: "ch3",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (a, t) => (
        n(),
        r("div", null, [
          l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
            i(u(o.title) + " ", 1),
            l(
              "div",
              { class: b(["isShow", e.value ? "" : "rotate180"]) },
              "^",
              2
            ),
          ]),
          e.value ? (n(), r("ol", x, I)) : d("", !0),
        ])
      );
    },
  },
  C = { key: 0, type: "I" },
  O = m(
    '<li><ul><li>，而是繼承自其定義時所在的詞法作用域</li><li>this的值由函數定義時所在的上下文決定，而不是呼叫時的上下文。</li></ul><br><code> const obj = { <br>  name: &#39;John&#39;, <br>  greet: function() { <br>   setTimeout(function() { <br>    console.log(&#39;Hello, &#39; + this.name); // 此处的 this 指向了全局对象(在浏览器中是 window)，输出 undefined <br>   }, 1000); <br>  }, <br>  greet2:function(){ <br>   setTimeout(() =&gt; { <br>     console.log(&#39;Hello, &#39; + this.name); // 此处的 this 繼承了父作用域，指向了自身，輸出為John <br>   }, timeout); <br>  } <br> }; <br> obj.greet(); // 调用 greet 方法 obj.greet2(); // 调用 greet2 方法 </code></li><li> 無法作為建構式，箭頭函數不能用new來創建物件實例，因此不能用做構造函數 <ul><li> 傳統函數，有自己的this <br><code> function Person(name, age) { <br>  this.name = name; // 設置name屬性 <br>  this.age = age; // 設置age屬性 <br> } <br> // 使用構造函數創建實例 <br> const john = new Person(&#39;John&#39;, 30); <br> console.log(john.name); // john </code></li></ul></li><li> 不能使用arguments，箭頭函數內部沒有自己的arguments對象，而是繼承了父層的arguments對象 <ul><li> arguments是一個特殊的對象，它包含了函數被調用時傳遞給函數的參數列表，類似數組、但不是數組，主要用於訪問函數參數，而非操作 </li><li><code> aa(1,2,3); // [1,2,3]就是arguments </code></li><li> 但若想在箭頭函數中訪問參數，用剩餘參數與法撈取 <ul><li><span class="r">剩餘參數</span>，捕獲多餘的參數</li><li><code> const arrowFunctionWithArgs = (...args) =&gt; { <br>  console.log(args); <br> } <br> arrowFunctionWithArgs(1, 2, 3); // 输出: [1, 2, 3] </code></li><li><code> function sum(...args) { <br>  let total = 0; <br>  for (let arg of args) { <br>   total += arg; <br>  } <br>  return total; <br> } <br> console.log(sum(1, 2, 3)); // 输出: 6 </code></li></ul></li></ul></li><li> 不能用於定義原型方法，由於箭頭函數沒有自己的this，所以無法定義原型方法 </li>',
    4
  ),
  J = [O],
  P = {
    __name: "ch4",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (a, t) => (
        n(),
        r("div", null, [
          l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
            i(u(o.title) + " ", 1),
            l(
              "div",
              { class: b(["isShow", e.value ? "" : "rotate180"]) },
              "^",
              2
            ),
          ]),
          e.value ? (n(), r("ol", C, J)) : d("", !0),
        ])
      );
    },
  },
  E = { key: 0, type: "I" },
  D = m(
    "<li> 陣列，用[]解構 <ul><li><code> let [a, b] = [1, 2]; <br> console.log(a); // 输出: 1 </code></li></ul></li><li>物件，用{}解構 <ul><li><code> let { city, country } = { city: &#39;New York&#39;, country: &#39;USA&#39; }; <br> console.log(city); // 输出: New York </code></li><li>重新賦值 <code> let { a: x, b: y } = { a: 10, b: 20 }; <br> console.log(x); // 输出: 10 </code></li><li>默認值 <code> let { firstName = &#39;John&#39;, lastName = &#39;Doe&#39; } = {}; <br> console.log(firstName); // 输出: John </code></li></ul></li><li>函式可套用前兩者</li>",
    3
  ),
  M = [D],
  T = {
    __name: "ch5",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (a, t) => (
        n(),
        r("div", null, [
          l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
            i(u(o.title) + " ", 1),
            l(
              "div",
              { class: b(["isShow", e.value ? "" : "rotate180"]) },
              "^",
              2
            ),
          ]),
          e.value ? (n(), r("ol", E, M)) : d("", !0),
        ])
      );
    },
  },
  q = { key: 0, type: "I" },
  R = m(
    '<li> Promise是一種用於處理非同步操作的功能(依序處理非同步)，他代表一個非同步操作的最終完成或失敗，並取得其結果。 </li><li>Pedning 等待中 / Resolved 成功 / Rejected 失敗</li><li>promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r">立即執行</span>並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止 </li><li>常見的非同步操作有，settimeout、事件監聽、網路請求</li><li>標準使用方法如下 <br><code> // 創建一個promise <br> const mypromise = <span class="r">new Promise((resolve, reject)</span> =&gt; { <br>  // 開始非同步操作 <br>  setTimeout(() =&gt; { <br>    const randomNumber = Math.random(); <br>    if (randomNumber &gt; 0.5) { <br>    // 操作成功 <br>      resolve(randomNumber); <br>    } else { <br>     // 操作失敗 <br>     reject(new Error(&quot;andom number is less than 0.5&quot;)); <br>     } <br>  }, 1000); <br> }); <br> <br> // 使用非同步 <br> mypromise.<span class="r">then</span>((result) =&gt; { <br>  console.log(&#39;Promise resolved with result:&#39;, result); <br> }).<span class="r">catch</span>((err) =&gt; { <br>  console.error(&#39;Promise rejected with error:&#39;, err); <br> }) </code></li>',
    5
  ),
  V = [R],
  z = {
    __name: "ch6",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        _(() => {}),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", q, V)) : d("", !0),
          ])
        )
      );
    },
  },
  B = { key: 0, type: "I" },
  F = m(
    '<li> Array <ul><li>添加新的元素至Array，Arr.push(123)</li><li> splice()，用於Arr的插入、刪除、替換元素、修改、返回已刪除的元素 </li><li><span class="r"> Arr.splice(要操作的起始索引,要刪除的元素數量,要插入的元素)</span><br> Array.splice(1,2,&quot;orange&quot;) 從索引1開始，刪除兩個元素，並插入1個ornage元素 </li><li> Arr的轉換 <br> const numbers = [1, 2, 3, 4, 5]; <ul><li><span class="r">map，將數組的每個元素應用於指定函數</span>，並返回一個新的數組，新數組包含了每個元素調用該函數後的結果。 <br> doubled = numbers.map(num =&gt; num * 2); // [2, 4, 6, 8, 10] </li><li><span class="r">filter</span>，方法用於從數組中<span class="r">過濾</span> 出滿足指定條件的元素，並返回一個新的數組，新數組包含了滿足條件的所有元素。 <br> doubled = numbers.filter(num =&gt; num % 2 === 0); // [2, 4] </li><li><span class="r">reduce</span>，方法用於將數組的<span class="r">所有元素歸納（累加）</span> 為一個單一的值，通常是一個數字、字符串或對象。 <br> doubled = numbers.reduce((acc, num) =&gt; acc + num, 0); // 15 </li></ul></li><li>arr3 = arr1.concatt(arr2) 陣列合併</li><li>arr.join(params_可選) 將陣列中的所有元素，使用參數做分隔，形成字串</li><li>Arr.pop(); 刪除並返回最後一個元素</li><li><ul><li>前值若要排序在後值之後，要回傳正數</li><li> Arr.sort((beforeNum,afterNum)=&gt;beforeNum - afterNum) 升序</li></ul></li><li>array.shift() 移除第一個元素，並取得他</li><li>array.unshift() 將新元素添加到陣列開頭，然後陣列元素會向後移動一位 </li></ul></li><li> Object <ul><li>刪除，delete Object.gender // 刪除Object.gender屬性</li><li> Object.keys(Object obj).length 物件長度 </li></ul></li>',
    2
  ),
  H = [F],
  L = {
    __name: "ch7",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        s(!1),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", B, H)) : d("", !0),
          ])
        )
      );
    },
  },
  U = { key: 0, type: "I" },
  W = l(
    "li",
    null,
    [
      i("return，結束當前函式 "),
      l("ul", null, [
        l("li", null, "forEach，不能跳出當前函式，只能跳出當次循環"),
      ]),
    ],
    -1
  ),
  Y = l("li", null, "break，跳出循環", -1),
  Z = l("li", null, "continue，跳到下一次的迴圈", -1),
  G = [W, Y, Z],
  K = {
    __name: "ch8",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        s(!1),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", U, G)) : d("", !0),
          ])
        )
      );
    },
  },
  Q = { key: 0, type: "I" },
  X = m(
    '<li> async/await，算是promise的語法糖，需要有promise回傳，才能執行下一步 </li><li>settimeout不會回傳promise，要另外創建 <br><code> // 定義一個非同步函數 <br> const fetchData = async () =&gt; { <br>  return new Promise((resolve, reject) =&gt; { <br>    // 模拟非同步操作 <br>    setTimeout(() =&gt; { <br>      resolve(&#39;Async data&#39;); <br>    }, 1000); <br>  }); <br> }; <br> // 調用非同步函數 <br> const getData = <span class="r">async</span> () =&gt; { <br>  try { <br>    const data = <span class="r">await</span> fetchData(); <br>    console.log(&#39;Data:&#39;, data); // Data: Async data <br>   } catch (error) { <br>    console.error(&#39;Error:&#39;, error); <br>  } <br> }; <br> getData(); </code></li><li>API請求會有promsie</li><li>文件讀取也有promise <br><code> const fileInput = document.getElementById(&#39;file-input&#39;); <br> fileInput.addEventListener(&#39;change&#39;, () =&gt; { <br>  const file = fileInput.files[0]; <br>  const reader = new FileReader(); <br>  reader.readAsText(file); <br>  reader.onload = () =&gt; { <br>   console.log(&#39;File content:&#39;, reader.result); <br>  }; <br> }); </code></li>',
    4
  ),
  ee = [X],
  le = {
    __name: "ch9",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (a, t) => (
        n(),
        r("div", null, [
          l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
            i(u(o.title) + " ", 1),
            l(
              "div",
              { class: b(["isShow", e.value ? "" : "rotate180"]) },
              "^",
              2
            ),
          ]),
          e.value ? (n(), r("ol", Q, ee)) : d("", !0),
        ])
      );
    },
  },
  te = { key: 0, type: "I" },
  ne = l(
    "li",
    null,
    [
      i("語法差異 "),
      l("ul", null, [
        l("li", null, [
          l(
            "pre",
            null,
            `var family = {
 name: ‘小明家’,
 members: {
  father: '老爸',
  mom: '老媽',
  ming: '小明'
 },
}
console.log(JSON.stringify(family));
console.log(JSON.parse(JSON.stringify(family)));
            `
          ),
        ]),
      ]),
    ],
    -1
  ),
  re = [ne],
  oe = {
    __name: "ch10",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        s(!1),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", te, re)) : d("", !0),
          ])
        )
      );
    },
  },
  ie = { key: 0, type: "I" },
  se = m(
    `<li> 字串切割 <br><code> const str = &#39;apple,banana,orange&#39;; <br> // 使用,做切割 <br> const fruits = str.split(&#39;,&#39;); <br><span class="r">const characters = str.split(&#39;&#39;);</span><br> console.log(fruits); // 輸出: [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;] <br> console.log(characters); // 輸出: [&#39;a&#39;,&#39;p&#39;,&#39;p&#39;,&#39;l&#39;.............] </code></li><li>str.trim()，刪除字符的頭尾空格</li><li>obj(物件).constructor， 查看obj的構建函數(創建對象的函數，構建函數的prototype會自動關聯到該構建函數創建的所有對象實例的原型練上)</li><li>Object.getPrototypeOf(obj(物件)); 返回obj的原型鍊()</li><li>閉包 <pre>  var createCounter = function (n) {
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
        </pre></li><li><ul><li>string.toUpperCase(); 字串轉大寫</li><li>string.toLowerCase(); 字串轉小寫</li></ul></li><li>Math.abs(numbers) 回傳一個絕對值</li><li>Math.round(numbers) 回傳一個對小數點，四捨五入的數字</li><li>Math.ceil(numbers) 回傳一個無條件進位至整數</li><li>Math.floor(numbers) 回傳一個無條件捨去至整數</li><li></li><li></li><li></li><li></li>`,
    15
  ),
  ae = [se],
  ce = {
    __name: "ch11",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        s(!1),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value ? (n(), r("ol", ie, ae)) : d("", !0),
          ])
        )
      );
    },
  },
  ue = { key: 0, type: "I" },
  be = l(
    "li",
    null,
    [
      i("氣泡演算法，不斷重複比較相鄰兩值，來做排序 "),
      l(
        "pre",
        null,
        `  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length-1-i; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
      }
    }
  }
        `
      ),
    ],
    -1
  ),
  de = l(
    "li",
    null,
    [
      i(
        "選擇排序法，將陣列分成排序和未排序，在未排序的部分持續找最大或最小，將之交換到已排序的部分 "
      ),
      l(
        "pre",
        null,
        `  for (let i = 0; i < a.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > a[maxIndex]) {
        maxIndex = j;
      }
    }
    [a[i], a[maxIndex]] = [a[maxIndex], a[i]];
  }
        `
      ),
    ],
    -1
  ),
  pe = l(
    "li",
    null,
    "插入排序法，將陣列分成未排序與排序的部分，將元素一個個由未排列的部分拿到已排列的部分並在已排列的部分排序，直到未排列的陣列為空。",
    -1
  ),
  me = {
    __name: "ch12",
    props: { title: String },
    setup(o) {
      const e = s(!1);
      return (
        s(!1),
        _(() => {}),
        (a, t) => (
          n(),
          r("div", null, [
            l("h2", { onClick: t[0] || (t[0] = (p) => (e.value = !e.value)) }, [
              i(u(o.title) + " ", 1),
              l(
                "div",
                { class: b(["isShow", e.value ? "" : "rotate180"]) },
                "^",
                2
              ),
            ]),
            e.value
              ? (n(),
                r("ol", ue, [
                  i(" const a = [0,1,2,3,4,5,6]，由大排到小 "),
                  be,
                  de,
                  pe,
                ]))
              : d("", !0),
          ])
        )
      );
    },
  },
  he = {
    __name: "JS_basic",
    setup(o) {
      return (e, a) => (
        n(),
        r("div", null, [
          c(f, { title: "數據類型" }),
          c(k, { title: "變量" }),
          c(N, { title: "原型链(原型方法)" }),
          c(P, { title: "箭頭函數(ES6)" }),
          c(T, { title: "解構賦值(ES6)" }),
          c(L, { title: "Array/Object" }),
          c(K, { title: "break/continue/return" }),
          c(z, { title: "非同步(ES6)-promise" }),
          c(le, { title: "非同步(ES6)-async" }),
          c(oe, { title: "深層複製" }),
          c(ce, { title: "常見函數" }),
          c(me, { title: "常見演算法" }),
        ])
      );
    },
  };
export { he as default };
