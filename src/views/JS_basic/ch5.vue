<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        陣列，用[]解構
        <ul>
          <li>
<pre>
  let [a, b] = [1, 2];
  console.log(a); // 输出: 1
  [a,b] = [b,a];
  console.log(a); // 輸出2
</pre>
          </li>
        </ul>

      </li>
      <li>物件，用{}解構
        <ul>
          <li>
            <code>
              let { city, country } = { city: 'New York', country: 'USA' };
              <br>
              console.log(city); // 输出: New York
            </code>
          </li>
          <li>重新賦值
            <code>
              let { a: x, b: y } = { a: 10, b: 20 };
              <br>
              console.log(x); // 输出: 10
            </code>
          </li>
          <li>數值互調
            <pre>
let c = {
    a: 1,
    b: 2
}
let { a, b } = c;
c = { b, a }
console.log(c); // // {b : 2 , a : 1}
            </pre>
          </li>
          <li>默認值
            <code>
              let { firstName = 'John', lastName = 'Doe' } = {};
              <br>
              console.log(firstName); // 输出: John
            </code>
          </li>
        </ul>

      </li>
      <li>函式可套用前兩者</li>
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
