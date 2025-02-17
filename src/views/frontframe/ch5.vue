<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        () => import('@/assets/images/cards/1.jpg'),
        <p>測試，要把chrome瀏覽器的 netWork的上方的 停用快取給關閉</p>
        <button @click="getSeaDragon">獲取世海龍</button>
        <img :src="seaDragonImg" class="w-[100px]" alt="世海龍" />
        <button @click="getSeaDragon2">再次獲取世海龍</button>
        <img :src="seaDragonImg2" class="w-[100px]" alt="再次獲取世海龍" />
      </li>
      <li></li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { preloadAssets } from "@/constants/preload";

const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
//
const seaDragonImg = ref("");
const getSeaDragon = async () => {
  seaDragonImg.value = (await preloadAssets.seaDragon()).default;
};
const seaDragonImg2 = ref("");
const getSeaDragon2 = async () => {
  seaDragonImg2.value = (await preloadAssets.seaDragon()).default;
};

onMounted(async () => {});
</script>
<style lang="scss" scoped></style>
