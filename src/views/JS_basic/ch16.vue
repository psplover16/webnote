<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <!-- <ol type="I" v-if="isShow">
      <li></li>
      <li></li>
    </ol> -->
    <div v-if="isShow">
      <pre>
let startPos = 0;
let animationId; // 動畫id，用來取消用
const animate = (timeStamp) => {
  <span class="r">console.log(timeStamp);</span> // requestAnimationFrame會自動傳遞時間，該時間為自頁面加載以來的時間(毫秒)
  startPos += 1;
  console.log(startPos);
  if (startPos < 30) {
    <span class="r">requestAnimationFrame(animate);</span>
  } else {
    <span class="r">cancelAnimationFrame(animationId); // 結束動畫效果</span>
  }
};
onMounted(() => {
  <span class="r">animationId = requestAnimationFrame(animate);</span>
}); 
      </pre>
    </div>
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
// let startPos = 0;
// let animationId;
// const animate = (time) => {
//   console.log(time);
//   startPos += 1;
//   console.log(startPos);
//   if (startPos < 30) {
//     requestAnimationFrame(animate);
//   } else {
//     cancelAnimationFrame(animationId);
//   }
// };
// onMounted(() => {
// setTimeout(() => {
//   animationId = requestAnimationFrame(animate);
// }, 5000);
// });
</script>
<style lang="scss" scoped></style>
