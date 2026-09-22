<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>統一超商股票代號，2912</li>
      <li>全台超商年營收 900億元</li>
      <li>營業額 一個月100W，算是還可以</li>
      <li>浮洲的超商是兩間打通，也就是以單一間算50萬來計算</li>
      <li>900億 / 50萬 / 12 = 1萬5000</li>
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