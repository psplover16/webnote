<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        class，詳細見code
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
      <li>
        extend 繼承，子類繼承父層的屬性和方法，也可以添加自己的屬性或方法，被執行人創建時會執行被繼承者的constructor
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
import { ref, onMounted } from "vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
// 
// 
// import testClass from "./testClass";
// const newTestClass = new testClass("測試名稱");
// import extendText from "./extendText";
// const newExtendText = new extendText('新創建的繼承者');
onMounted(() => {
  // 一般靜態測試
  // console.log(testClass.staticParam);
  // console.log(newTestClass.name);
  // console.log(testClass.name);
  // testClass.staticSayHello();
  // newTestClass.sayHello();
  //
  // 繼承測試
  // console.log(extendText.name) // 繼承人的名子
  // console.log(extendText.staticClassPerson) // 繼承人的靜態參數
  // console.log(extendText.newClassPerson) // 不能用靜態的方式，撈取非靜態的參數
  // console.log(extendText.staticParam) // 靜態參數，會繼承到被繼承人的靜態參數
  // console.log(extendText.params) // 不能撈取到被繼承人的動態參數
  //
  // console.log(newExtendText.name) // 自己的名字
  // console.log(newExtendText.staticClassPerson) // undefined
  // console.log(newExtendText.newClassPerson) // 可以撈到自己的動態參數
  // console.log(newExtendText.staticParam) // undefined
  // console.log(newExtendText.params) // 可以撈到被繼承者的動態參數
  // 
  // get與set，若想在函數內處理正確回傳，get一定要加
  // newExtendText.width = 12
  // newExtendText.height = 5
  // newExtendText.setWidthHeight([12,5]) // 函數方式
  // newExtendText.setWidthHeight2 = [12,5] // 賦值方式
  // console.log(newExtendText.getWidthCrossHeight)
});
</script>
<style lang="scss" scoped></style>
