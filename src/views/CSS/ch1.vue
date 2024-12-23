<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <div class="w-[80vw] relative">
          <img src="@/assets/images/filterTree.jpg" class="w-full max-w-none" />
          <div class="absolute h-1/2 w-full left-0 bottom-0 flex gap-1">
            <div
              class="w-16 h-full vertical-lr"
              v-for="(value, key) in filterList"
            >
              <div>{{ key }}</div>
              <div>
                {{ value }}
              </div>
            </div>
          </div>
          <div class="absolute h-1/2 w-full left-0 top-0 flex gap-1">
            <div
              class="w-16 h-full bg-red-500"
              v-for="(value, key) in filterList"
              :style="{ filter: value }"
            ></div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(true);
const filterList = ref({
  原色: "",
  模糊: "blur(15px)",
  "亮度(100%為分水點)": "brightness(50%)",
  "對比(100%為分水點)": "contrast(200%)",
  "灰階(0-100%)": "grayscale(1)",
  "色相旋轉(0deg~360deg)": "hue-rotate(90deg)",
  "顏色和明暗反轉(0-100%)": "invert(100%)",
  "透明度(0-100%)": "opacity(50%)",
  "飽和度(100%為分水點)": "saturate(200%)",
  "深褐效果(0-100%)": "sepia(100%)",  
  "陰影效果(offsetX,offsetY,blurRadius,顏色)":
    "drop-shadow(16px 16px 10px black)",
});
</script>

<style scoped>
.vertical-lr {
  writing-mode: vertical-lr;
}
</style>
