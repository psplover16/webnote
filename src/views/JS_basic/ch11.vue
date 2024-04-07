<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        字串切割
        <br />
        <code>
          const str = 'apple,banana,orange';
          <br />
          // 使用,做切割
          <br />
          const fruits = str.split(',');
          <br />
          <span class="r">const characters = str.split('');</span>
          <br />
          console.log(fruits); // 輸出: ['apple', 'banana', 'orange']
          <br />
          console.log(characters); // 輸出: ['a','p','p','l'.............]
        </code>
      </li>
      <li>str.trim()，刪除字符的頭尾空格</li>
      <li>obj(物件).constructor， 查看obj的構建函數(創建對象的函數，構建函數的prototype會自動關聯到該構建函數創建的所有對象實例的原型練上)</li>
      <li>Object.getPrototypeOf(obj(物件)); 返回obj的原型鍊()</li>
      <li>閉包
        <pre>
  var createCounter = function (n) {
    var z = n - 1;
    return function counter() {
      z = z + 1;
      return z;
    };
  };
  const counter = createCounter(10)
  counter() // 10
  counter() // 11
        </pre>
      </li>
      <li>*，Generator函數標示符。
        <pre>
  function* aa(){
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
        </pre>
      </li>
      <li>
        <ul>
          <li>string.toUpperCase(); 字串轉大寫</li>
          <li>string.toLowerCase(); 字串轉小寫</li>
        </ul>
      </li>
      <li>arr3 = arr1.concatt(arr2) 陣列合併</li>
      <li>arr.join(params_可選) 將陣列中的所有元素，使用參數做分隔，形成字串</li>
      <li>Math.abs()  回傳一個絕對值</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
const str = "apple,banana,orange";
const fruits = str.split(",");
const characters = str.split("");
console.log(fruits); // 输出: ['apple', 'banana', 'orange']
console.log(characters);

</script>
<style lang="scss" scoped></style>
