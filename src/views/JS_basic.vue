<template>
  <ol>
    <li><ch1 title="數據類型" /></li>
    <li><ch2 title="變量" /></li>
    <li><ch3 title="原型鍊(原型方法)" /></li>
    <li><ch13 title="類" /></li>
    <li><ch14 title="this指向???" /></li>
    <li><ch15 title="觀察者模式" /></li>
    <li><ch4 title="箭頭函數(ES6)" /></li>
    <li><ch5 title="解構賦值(ES6)" /></li>
    <li><ch7 title="Array/Object" /></li>
    <li><ch8 title="break/continue/return" /></li>
    <li><ch6 title="非同步(ES6)-promise" /></li>
    <li><ch9 title="非同步(ES6)-async" /></li>
    <li><ch10 title="Call By Value, Call By Reference 參數引用,深層複製" /></li>
    <li><ch16 title="動畫函數 requestAnimationFrame" /></li>
    <li><ch11 title="常見函數" /></li>
    <li><ch12 title="常見演算法" /></li>
  </ol>
  <div></div>
</template>

<script setup>
import ch1 from "./JS_basic/ch1.vue";
import ch2 from "./JS_basic/ch2.vue";
import ch3 from "./JS_basic/ch3.vue";
import ch4 from "./JS_basic/ch4.vue";
import ch5 from "./JS_basic/ch5.vue";
import ch6 from "./JS_basic/ch6.vue";
import ch7 from "./JS_basic/ch7.vue";
import ch8 from "./JS_basic/ch8.vue";
import ch9 from "./JS_basic/ch9.vue";
import ch10 from "./JS_basic/ch10.vue";
import ch11 from "./JS_basic/ch11.vue";
import ch12 from "./JS_basic/ch12.vue";
import ch13 from "./JS_basic/ch13.vue";
import ch14 from "./JS_basic/ch14.vue";
import ch15 from "./JS_basic/ch15.vue";
import ch16 from "./JS_basic/ch16.vue";

// const obj = {
//   name: 'John',
//   greet: function() {
//    setTimeout(function() {
//     console.log(this.name); // this 指向了全局对象(在浏览器中是 window)，输出 "" ，因為settimeout是在全局執行
//    }, 1000);
//   },
//   greet2: function(){
//    setTimeout(() => {
//      console.log(this.name); // 箭頭函數的this繼承外部函數作用域，箭頭函數的this與外部作用域相同。箭頭函數繼承了greet2的函數作用域，greet2的函數作用域在obj內
//    }, 1000);
//   },
//   greet3: function(){
//     console.log(this.name); // John
//   },
//   greet4: ()=>{
//     console.log(this.name); // 調用時，會看"當下所處環境"的外部作用域
//   }
// };

// obj.greet(); // 调用 greet 方法
// obj.greet2(); // 调用 greet2 方法
// obj.greet3();  // John
// obj.greet4();  // Cannot read properties of undefined

// setTimeout(()=>{
//   obj.greet3(); // John
//   obj.greet4(); // Cannot read properties of undefined
// },10);
// // obj.greet3 與 obj.greet3() 差別在於， obj.greet3 是一個函數對象引用，而非調用該方法。
// setTimeout(obj.greet3, 10); // setTimeout 的 this指向全局，然後調用
// setTimeout(obj.greet4, 10);  // Cannot read properties of undefined
</script>
