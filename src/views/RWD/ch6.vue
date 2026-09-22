<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>static (靜態定位)，默認定位方式，不受定位(top、bottom、left、right影響)，按照正常文檔排列</li>
      <li>relative (相對定位)，相對於其正常位置進行定位。相對定位的元素仍會占據原始位置，周圍的元素也不會受到其影響。</li>
      <li>fixed (固定定位)，固定定位的元素相對於視窗進行定位，即使頁面滾動，它們也會保持在相同的位置。不會在文檔流中佔據空間</li>
      <li>absolute (絕對定位)，相對於其最近的非靜態定位祖先元素進行定位。如果沒有非靜態定位的祖先元素，則相對於文檔的初始包含塊進行定位。</li>
      <li>sticky (黏貼定位)，黏貼定位的元素在滾動容器的可視範圍內按照正常文檔流進行定位，一旦超出可視範圍，它們就會固定在指定位置。</li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
});
const isShow = ref(false);
</script>