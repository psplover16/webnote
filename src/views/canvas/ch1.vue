<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        scratchCard.vue
        <div class="text-center">
          <Scratchcard
            :rewardItem="rewardItem"
            :scratchItem="scratchItem"
            :maxArea="0.2"
            :drawCircleRadius="20"
            @getReward="getRewards"
          />
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import rewardItem from "@/assets/images/background-o.jpg";
import scratchItem from "@/assets/images/scratch-off.jpg";
import Scratchcard from "@/components/scratchCard.vue";
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
const getRewards = () => {
  alert("中獎囉");
};
</script>
