<template>
  <div class="btnGroup">
    <button @click="showText = false">收納</button>
    <button @click="showText = true">展開</button>
  </div>
  <div>
    <ul>
      <li>
        <pre>
lottie引用
npm i lottie-web-vue

import { LottieAnimation } from "lottie-web-vue";
import saoSiang from "@/assets/images/lottie/saoSiang.json";

{{ lottieCode }}
</pre
        >
      </li>
      <li>
        undefined，
        <span v-if="showText"
          >變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在</span
        >
      </li>
      <li>
        null，<span v-if="showText"
          >表示空的、無效、未定義的值，可以賦值給對象</span
        >
      </li>
      <li>
        表示資料類型
        <ul v-if="showText">
          <li>typeof(value)</li>
          <li>Array.isArray(value)</li>
          <li>Object.prototype.toString.call(value)</li>
        </ul>
      </li>
      <li>
        正則檢驗
        <ul v-if="showText">
          <li>exec，會回傳Array，regex.ecec(value)</li>
          <li>test，會回傳bool，regex.test(value)</li>
        </ul>
      </li>
      <li>
        var / let / const
        <ul v-if="showText">
          <li>var，變數提升，函數作用域、可重複宣告</li>
          <li>let，塊級作用域、不可重複宣告、無變數提升</li>
          <li>const，常數，塊級作用域、不可重複宣告、無變數提升</li>
        </ul>
      </li>
      <li>
        this
        <ul v-if="showText">
          <li>全域，指向window</li>
          <li>普通函數，指向window</li>
          <li>作為物件，會指向調用該方法的對象(物件本身)</li>
          <li>構造函數，this會通過new創建新對象，指向新的對象</li>
          <li>
            箭頭函數，沒有自己的this，當在創建時，捕獲其上下文作用域的this，當成自己的this
          </li>
        </ul>
      </li>
      <li>
        箭頭函數
        <ul v-if="showText">
          <li>沒有自己的this，而是在其創建時，繼承其詞法作用域</li>
          <li>無法作為建構式，不能用new來創建物件</li>
          <li>不能使用arguments</li>
        </ul>
      </li>
      <li>
        深層複製，
        <span v-if="showText">JSON.parse(JSON.stringify(value))</span>
      </li>
      <li>
        script，不加 / defer / async 差異
        <ul v-if="showText">
          <li>
            不加，按照文檔順序執行，遇到沒有 defer 的 script
            標籤時，它會立即暫停文檔解析，下載並執行該腳本，然後再繼續解析文檔的餘下部分。可能會阻塞腳本
          </li>
          <li>defer，將腳本的下載延遲至文檔解析完畢，對內嵌腳本無效</li>
          <li>async，非同步的下載腳本，可能會導致變數混亂</li>
        </ul>
      </li>
      <li>
        pinia有哪些??
        <ul v-if="showText">
          <li>state / actions / getters</li>
          <li>export default aa~~</li>
          <li>
            <pre>
import {aa} from "pinia的文檔"
aa().count++;
aa().action()
aa.getters;
            </pre>
          </li>
        </ul>
      </li>

      <li>
        router
        <ul v-if="showText">
          <li>router.push(location)</li>
          <li>router.replace(location)</li>
          <li>router.go(number)</li>
          <li>router.back()</li>
          <li>router.forward()</li>
          <li>
            <pre>
router.beforEach((to,from,next)=>{
next()
})
            </pre>
          </li>
          <li>
            <pre>
router.afterEach((to,from)=>{
})
            </pre>
          </li>
        </ul>
      </li>
      <li>
        route
        <ul v-if="showText">
          <li>route.path 當前路徑</li>
          <li>route.params</li>
          <li>route.query get變數</li>
          <li>route.name</li>
        </ul>
      </li>
      <li>
        ssr vs csr
        <ul v-if="showText">
          <li>SSR，服務器具渲染，SEO</li>
          <li>
            CSR，vue3,
            渲染過程在JS，JS會比較大包，載入速度會比較慢，可互動時間比較長
          </li>
        </ul>
      </li>
      <li>
        CORS
        <ul v-if="showText">
          <li>
            瀏覽器的安全限制，代表兩個網址不同源，不同協定/不同主機/不同port
          </li>
          <li>
            解決，
            <ul>
              <li>Access-controll-allow-orgin</li>
              <li>代理伺服器</li>
              <li>JSONP</li>
              <li>websocket</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        CSRF
        <ul v-if="showText">
          <li>跨站請求偽造</li>
          <li>攻擊者利用使用者的身分訊息執行了使用者非本意的操作</li>
          <li>利用token來防範</li>
        </ul>
      </li>
      <li>
        XSS攻擊
        <ul v-if="showText">
          <li>跨站腳本攻擊</li>
          <li>
            攻擊者透過注入腳本來利用網站本身的程式漏，當其他用戶訪問受影響的網頁時，這些腳本會在用戶的瀏覽器執行，從而執行竊取個資、修改網頁內容等行為
          </li>
          <li>
            <ul>
              防範
              <li>用戶輸入的資料要進行驗證及過濾</li>
              <li>對特殊符號進行編碼，以防止瀏覽器誤認為是代碼</li>
              <li>避免使用不安全的JS API，例如eval()和innerHTML</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        原型鍊
        <pre>
function dog(name){
    this.name=name;
}
dog.prototype.whatName=function(){
    console.log(this.name);
}
const john = new dog("john")
john.whatName()
        </pre>
      </li>
      <li>建構式</li>
      <li>
        Array的操作
        <ul>
          <li>Arr.splice("要操作得起始索引","要修改的數量","要添加的元素")</li>
          <li>Arr1.concat(Arr2)</li>
          <li>
            Arr.join("")
            <span v-if="showText">把Array全部元素變成字串組合起來</span>
          </li>
          <li>
            Arr.pop()
            <span v-if="showText">刪除並返回最後一個元素</span>
          </li>
          <li>
            Arr.shift()
            <span v-if="showText">刪除並返回第一個元素</span>
          </li>
          <li>
            Arr.unshift(str)
            <span v-if="showText">添加str元素至Arr的第一個元素</span>
          </li>
          <li>
            Arr.sort((beforeNum,afterNum)=>beforeNum - afterNum)
            <ul v-if="showText">
              <li>範例為升序</li>
              <li>beforeNum - afterNum 若 為正數，兩者要交換位置</li>
            </ul>
          </li>
        </ul>
      </li>
      <!-- <span v-if="showText"></span> -->
      <!-- <ul v-if="showText">
        <li></li>
        <li></li>
      </ul> -->
      <li>
        Promise
        <ul v-if="showText">
          <li>
            <pre>
const mypromise = new Promise((resolve, reject) => { 
  // 模拟非同步操作 
  setTimeout(() => { 
    resolve('Async data'); 
  }, 1000); 
}); 
            </pre>
          </li>
          <li>
            <pre>
 mypromise.then((result) => { 
  console.log('Promise resolved with result:', result); 
 }).catch((err) => { 
  console.error('Promise rejected with error:', err); 
 }) 
            </pre>
          </li>
        </ul>
      </li>
      <li>
        Async
        <ul v-if="showText">
          <li>
            <pre>
const fetchData = async () => { 
 return mypromise;
}; 
            </pre>
          </li>
          <li>
            <pre>
const getData = async () => { 
 try { 
   const data = await fetchData(); 
   console.log('Data:', data); // Data: Async data 
  } catch (error) { 
   console.error('Error:', error); 
 } 
}; 
getData(); 
            </pre>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { LottieAnimation } from "lottie-web-vue";
import saoSiang from "@/assets/images/lottie/saoSiang.json";

defineProps({
  title: String,
});
const showText = ref(true);
onMounted(() => {
  // http://localhost:3000/#/commonly/123456?ggwp=123
  // console.log(useRoute().path); // /commonly/123456
  // console.log(useRoute().name); // commonly
  // console.log(useRoute().meta); // {title: 'commonlyMeta'}
  // console.log(useRoute().query); // {ggwp: '123'}
});

const word = `
費式
0, 1, 1, 2, 3, 5, 8, 13, 21...
function fasi(key){
if(key<=1){
return key
}
return fasi(key-2)+fasi(key-1)
}

function fasi(key) {
  if (key <= 1) {
    return key;
  }

  let beforeVal = 0;
  let afterVal = 1;

  for (let i = 2; i < key; i++) {
    let tmp = beforeVal;
    beforeVal = afterVal;
    afterVal = tmp + afterVal;
  }
  return beforeVal + afterVal;
}
`;
const lottieCode = `<LottieAnimation
          class="pointer-events-none w-1/2"
          :animation-data="saoSiang"
          :auto-play="true"
          :speed="1"
        />`;
</script>

<style lang="scss" scoped>
ul {
  list-style-type: disc;
}
.btnGroup {
  display: flex;

  button {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
  }
}

ul {
  font-size: 1.5rem;
}
</style>
