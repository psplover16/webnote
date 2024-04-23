<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <span>var，宣告的變數存在變數提升(code執行過程，會被提升至作用域的頂部)，作用範圍為全域，函式範圍作用域，僅限該函式</span>
        <pre>
const b = function () {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 0);
  }
}
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
