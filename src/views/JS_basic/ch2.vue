<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <span>var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域，<span class="r">函式範圍作用域</span>，僅限該函式</span>
        <pre>
const b = function () {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    setTimeout(() => {
      console.log(i)
    }, i*1000);
  }
}
b(); // 0/1/2/3/4   5/5/5/5/5
// for迴圈定義，初始值是，若i<5，則跑函數，然後i++
// 一開始for會先跑完，把i設定到settimeout，之後settimeout依次執行console.log(i)，但由於i是全域函數，所以顯示最後面的i結果
        </pre>
第二題
        <pre>
var a = 1;
console.log(a);  // 1
function aa() {
    var a = 2;
    console.log(a)  // 2 
}
aa();
console.log(a);  // 1
        </pre>
      </li>
      <li>
        <span>
          let，存在變數提升，但是在初始化之前訪問，會出現暫時性死區。宣告的變數可重新賦值。塊級作用域，僅限該塊級
          <pre>
const b = function () {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0);
  }
}
        </pre>
          <span>
            每次回圈，i都是一個全新的變量
          </span>
        </span>
      </li>
      <li><span> const，存在變數提升，宣告的變數為常數</span></li>
      <li>
        變數提升
        <pre>
console.log(a); // undefined
var a = 1;

console.log(b); // b is not defined
let b = 1;

console.log(c); // c is not defined
const c = 1;
        </pre>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isShow = ref(false);
defineProps({
  title: String,
});
// const ob = {
//   name: "G",
//   great: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
//   great2: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   },
// };
// 

const b = function () {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0);
  }
}



onMounted(() => {
  // ob.great2();
// c();
})
</script>
<style lang="scss" scoped></style>
