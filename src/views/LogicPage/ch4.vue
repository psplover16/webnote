<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      一開始隨機抽一箱子，抽出一顆球，可以選擇要不要換抽另一個箱子，目標為金球
      <li>若一開始抽到銅球，要換箱子嗎? 原因及機率?
        <ol>
          <li>50/99 或 75/99，直接抽的機率為 (50+75)/2 / 99，0.631，不換</li>
          <li>1/2，75/100，1/2+3/4 = 2/4 + 3/4 = 2.5/4，0.625</li>
        </ol>
      </li>
      <li>若一開始抽到金球，你會抽另一個箱子嗎? 原因及機率?
        <ol>
          <li>49/99 或 74/99，直接抽的機率為 (49+74)/2/99 = 0.621</li>
          <li>1/2，75/100，>>>> 0.625，要換</li>
        </ol>
      </li>
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