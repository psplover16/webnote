<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <ul>
          <li>
            <span class="r">不會建立自己的 this</span>
            ，而是 <span class="r">繼承</span> 自其<span class="r">定義時(創建時)</span>所在的詞法作用域
          </li>
          <li>this的值由函數定義時所在的上下文決定，而不是呼叫時的上下文。</li>
        </ul>
<pre>
  const obj = { 
  name: 'John', 
  greet: function() { 
   setTimeout(function() { 
    console.log(this.name); // this 指向了全局对象(在浏览器中是 window)，输出 "" ，因為settimeout是在全局執行
   }, 1000); 
  }, 
  greet2: function(){ 
   setTimeout(() => { 
     console.log(this.name); // 箭頭函數的this繼承外部函數作用域，箭頭函數的this與外部作用域相同。箭頭函數繼承了greet2的函數作用域，greet2的函數作用域在obj內
   }, 1000); 
  },
  greet3: function(){
    console.log(this.name); // John
  },
  greet4: ()=>{
    console.log(this.name); // 調用時，會看"當下所處環境"的外部作用域
  }
}; 

obj.greet(); // 调用 greet 方法 
obj.greet2(); // 调用 greet2 方法 
obj.greet3();  // John
obj.greet4();  // Cannot read properties of undefined

setTimeout(()=>{
  obj.greet3(); // John
  obj.greet4(); // Cannot read properties of undefined
},10);

// obj.greet3 與 obj.greet3() 差別在於， obj.greet3 是一個函數對象引用，而非調用該方法。

setTimeout(obj.greet3, 10); // setTimeout 的 this指向全局，然後調用
setTimeout(obj.greet4, 10);  // Cannot read properties of undefined
</pre>

      </li>
      <li>
        無法作為建構式，箭頭函數不能用new來創建物件實例，因此不能用做構造函數
        <ul>
          <li>
            傳統函數，有自己的this
            <br />
            <code>
              function Person(name, age) {
              <br />
              &emsp;this.name = name; // 設置name屬性
              <br />
              &emsp;this.age = age; // 設置age屬性
              <br />
              }
              <br />
              // 使用構造函數創建實例
              <br />
              const john = new Person('John', 30);
              <br />
              console.log(john.name); // john
            </code>
          </li>
        </ul>
      </li>
      <li>
        不能使用arguments，箭頭函數內部沒有自己的arguments對象，而是繼承了父層的arguments對象
        <ul>
          <li>
            arguments是一個特殊的對象，它包含了函數被調用時傳遞給函數的參數列表，類似數組、但不是數組，主要用於訪問函數參數，而非操作
          </li>
          <li>
            <code> aa(1,2,3); // [1,2,3]就是arguments </code>
          </li>
          <li>
            但若想在箭頭函數中訪問參數，用剩餘參數與法撈取
            <ul>
              <li><span class="r">剩餘參數</span>，捕獲多餘的參數</li>
              <li>
                <code>
                  const arrowFunctionWithArgs = (...args) => {
                  <br />
                  &emsp;console.log(args);
                  <br />
                  }
                  <br />
                  arrowFunctionWithArgs(1, 2, 3); // 输出: [1, 2, 3]
                </code>
              </li>
              <li>
                <code>
                  function sum(...args) {
                  <br />
                  &emsp;let total = 0;
                  <br />
                  &emsp;for (let arg of args) {
                  <br />
                  &emsp; total += arg;
                  <br />
                  &emsp;}
                  <br />
                  &emsp;return total;
                  <br />
                  }
                  <br />
                  console.log(sum(1, 2, 3)); // 输出: 6
                </code>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        不能用於定義原型方法，由於箭頭函數沒有自己的this，所以無法定義原型方法
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
defineProps({
  title: String,
});
</script>
