<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>語法差異
        <ul>
          <li>promise，then / catch</li>
          <li>async / await，可讀性較高</li>
        </ul>
      </li>
      <li>失敗
        <ul>
          <li></li>
          <li></li>
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