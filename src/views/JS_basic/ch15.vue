<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        Proxy
        <pre>
const targets = {
  value: 0,
};
const handler = (keyName, callback) => {
  const returnHandler = {
    set(obj, prop, value) {
      // obj 被代理的目標對象，希望被攔截操作的對象
      // prop 要設置的屬性名稱
      // 要變成的值
      if (prop === keyName) {
        // console.log("值已經更新: " + value);
        callback();
      }
      obj[prop] = value; // 更新目標對象的屬性
      return true; // 返回 true 表示設置成功
    },
  };
  return returnHandler;
};
const newProxy = (target, keyName, callback) => {
  return new Proxy(target, handler(keyName, callback));
};
const test1 = newProxy(targets, "value", () => {
  console.log(123);
});

test1.value = 123; // console.log(123)
        </pre>
      </li>
      <li>IntersectionObserver 的 observe方法，用來監視特定元素的可見性變化
        <pre>
function createObserver(callback) {
  return new IntersectionObserver((entries) => { // 創建並返回新的觀察者，並傳入一個回掉函數
    entries.forEach((entry) => {
      callback(entry.isIntersecting, entry.target); // entry.isIntersecting 表示元素是否進入窗口， entry.target 表示要監測的元素
    });
  });
}
const observer = createObserver((isVisible, target) => { // 
  if (isVisible) {
    if (target === anchorParagraph1.value) console.log(123);
  }
});
// 觀察元素
observer.observe(anchorParagraph1.value); // 調用觀察者的observe方法
        </pre>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isShow = ref(false);
const a1 = ref(false);
const props = defineProps({
  title: String,
});

// const targets = {
//   value: 0,
// };
// const handler = (keyName, callback) => {
//   const returnHandler = {
//     set(obj, prop, value) {
//       if (prop === keyName) {
//         callback();
//       }
//       obj[prop] = value;
//       return true;
//     },
//   };
//   return returnHandler;
// };
// const newProxy = (target, keyName, callback) => {
//   return new Proxy(target, handler(keyName, callback));
// };
// const test1 = newProxy(targets, "value", () => {
//   console.log(123);
// });
// test1.value = 123;
onMounted(() => {});
</script>
<style lang="scss" scoped></style>
