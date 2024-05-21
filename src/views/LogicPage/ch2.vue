<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      台中要有多少理髮師?
      <li>1個禮拜長大約1公分，1個月大概4~5公分，4公分基本上已經會改變不少造型了，故每個人大約一個月剪一次頭</li>
      <li>男女比例約為1:1，男性剪髮約30分鐘，女性約1小時，平均一人剪髮約45分鐘。</li>
      <li>按照勞基法，一天表定工作時間8小時，一天一位理髮師 約可以接 8 * 60 / 45 位客人，算一天接10位客人。</li>
      <li>一個理髮師一個月，10 * 20(工作日) = 200</li>
      <li>280萬 / 200 = 1.4萬</li>
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