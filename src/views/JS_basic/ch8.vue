<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>return，結束當前函式
        <ul>
          <li>forEach，不能跳出當前函式，只能跳出當次循環</li>
        </ul>
      </li>
      <li>break，跳出循環</li>
      <li>continue，跳到下一次的迴圈</li>
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