<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      每個函數都有this，表示函數的執行上下文。函數的執行上下文是指函數被調用時所處的環境，該執行上下文包含了函數被調用時所需要的訊息。
      <li>全域
        <ul>
          <li>瀏覽器，指向window</li>
          <li>nodeJS，指向global對象</li>
        </ul>
      </li>
      <li>
        函數調用
        <ul>
          <li>普通函數，this會指向window</li>
          <li>作為物件的方法調用，this會指向調用該方法的對象</li>
          <li>

            <ul>
              <li>
                call()，在指定的上下文中，調用函數，也就是指定this。
                <br>
                func.call(context,arg1,arg2...);
                <br>
                用call方法<span class="r">調用</span>func函數，把func的this替換成context
                <pre>
function great(name) {
    console.log(name);
    console.log(this);
    console.log(this.name);
}
great("DOG");  //  DOG / window / ""
great.call({ name: "Alice" }, 'Bob');  // Bob / { name: "Alice" } / Alice
                </pre>
              </li>
              <li>
                apply()，用法語call()雷同，調用，最大差別在，apply()參數是用陣列的方式帶入
                <br>
                function.apply(context, [argsArray])
                <pre>
function greet(name,name2) {
    console.log(`Hello, ${name}!`);
    console.log(`Hello, ${name2}!`);
}
greet.apply(null, ['Alice','Bob']);  // Alice  Bob
                </pre>
              </li>
              <li>
                bind()，<span class="r">創建</span>一個新的函數，該函數具有指定上下文及預設參數
                <br>
                function.bind(context, arg1, arg2, ...)
                <pre>
const greet = (greeting, name) => {
    console.log(`${greeting}, ${name}!`);
};
const args = ['Hello', 'Alice'];
const sayHello = () => greet(...args);
sayHello();  //  Hello Alice
</pre>
              </li>
            </ul>




            如果函数使用 call()、apply() 或 bind() 方法进行调用，this 指向作为参数传递的对象。????????????????????????
          </li>
          <li>構造函數，this會通過new 創建新對象</li>
          <li>箭頭函數，沒有自己的this，會在創建時，捕獲其上下文作用域的this，當成自己的this</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped></style>