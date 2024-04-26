<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>call by value，JS中，傳遞基本資料類型會採這個
        <pre>
function changeValue(x) {
  x = 10;
}
let num = 5;
changeValue(num);
console.log(num);  // 5
        </pre>
      </li>
      <li>
        call by reference，傳遞json或Array會用這個
        <pre>
function changeObject(obj) {
  obj.name = "John";
}
let person = { name: "Alice" };
changeObject(person);
console.log(person.name); // John
        </pre>
      </li>
      <li>深層複製
        <ul>
          <li>

            <pre>
var family = {
 name: ‘小明家’,
 members: {
  father: '老爸',
  mom: '老媽',
  ming: '小明'
 },
}
console.log(JSON.stringify(family));
console.log(JSON.parse(JSON.stringify(family)));
            </pre>
          </li>

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