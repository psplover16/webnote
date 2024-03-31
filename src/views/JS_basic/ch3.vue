<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        JS中實現繼承和屬性查找的一種機制，在JS中，每個對象都有一個指向其原型的鏈接。
      </li>
      <li>
        當我們訪問的一個對象的屬性或方法，如果對象沒有屬性或方法，JS引擎會沿著原型練往上查找，直到找到相應屬性或原型練的頂端<span class="r">Object.prototype</span>。
      </li>
      <li>
        範例，<br>
        <code>
          function Animal(name) {
          <br>
          &emsp; this.name = name;
          <br>
          &emsp;}
          <br>
    Animal.prototype.sayHello = function(){
      <br>
      &emsp;console.log(`Hello, I'm ${this.name}`);
        <br>
    }
    <br>
    let dog = new Animal("Dog");
    <br>
    dog.sayHello();
        </code>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
defineProps({
  title: String,
});
</script>