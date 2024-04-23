<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>class
        <pre>
class Myclass {
    // 構造函數，在類中使用，會在創建對象時自動調用，通常用於初始化屬性
    constructor(name) {
        console.log("建構了",name);
        this.name = name;
    }
    // 類方法
    sayHello(name) {
        console.log(this.name);
    }
    // 靜態方法
    static staticSayHello() {
        console.log(this.name);  //  Myclass
        console.log(12345);
    }
}
const mydog = new Myclass("dogJacky");  // 建構了 dogJacky
mydog.sayHello();  // dogJacky
// 靜態方法，static，屬於類本身，而不屬於類實例，能通過類名直接調用，而無須創建實例
Myclass.staticSayHello(); // Myclass  12345
        </pre>
      </li>
      <li>extend 繼承，子類繼承父層的屬性和方法，也可以添加自己的屬性或方法
        <pre>
class MyclassChild extends Myclass {
    speak() {
        console.log("I'm child.");
        console.log(this.name);
    }
}
const newDog = new MyclassChild("dogJacky's child"); // 建構了 dogJacky's child
newDog.speak();  // I'm child.      dogJacky's child
newDog.sayHello(); // dogJacky's child
MyclassChild.staticSayHello();  // MyclassChild    12345
        </pre>
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