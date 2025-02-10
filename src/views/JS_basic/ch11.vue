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
      <li>
        obj(物件).constructor，
        查看obj的構建函數(創建對象的函數，構建函數的prototype會自動關聯到該構建函數創建的所有對象實例的原型練上)
      </li>
      <li>Object.getPrototypeOf(obj(物件)); 返回obj的原型鍊()</li>
      <li>
        閉包
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
      <li>
        *，Generator函數標示符。
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

      <li>Math.abs(numbers) 回傳一個絕對值</li>
      <li>Math.round(numbers) 回傳一個對小數點，四捨五入的數字</li>
      <li>Math.ceil(numbers) 回傳一個無條件進位至整數</li>
      <li>Math.floor(numbers) 回傳一個無條件捨去至整數</li>
      <li>eval("") 該函數為會執行參數內全部的東西</li>
      <li>
        open一個html
        {{ openNewUrl }}
      </li>
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
// console.log(fruits); // 输出: ['apple', 'banana', 'orange']
// console.log(characters);

const downloadUrl = '圖片網址'
const openNewUrl = ref(`
const newWindow = window.open('https://blog.csdn.net/weixin_45152159/article/details/133030325','_blank')
// '_blank'：在新窗口或新標籤頁中打開。
// '_self'：在當前窗口中打開（默認行為）。
// '_parent'：在父框架中打開（如果存在）。
// '_top'：在整個窗口中打開，這會取消所有框架。
newWindow.document.write('<html><head><title>圖片</title></head><body>');
newWindow.document.write(\`<img src="${downloadUrl}" alt="Base64 Image" style="max-width: 100%; height: auto;">\`);
newWindow.document.write('</body></html>');
newWindow.document.close();
`);
</script>
<style lang="scss" scoped></style>
