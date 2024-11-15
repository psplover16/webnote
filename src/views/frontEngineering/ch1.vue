<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow"></ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
const config1 = ref(`
export default defineConfig((command, mode, ssrBuild) => {
    base: "./",  // 
    resolve: {
      alias: {
        "@": [path.resolve(__dirname, "./src")], //設置路徑代表的東西
      },
    },




});
`);
onMounted(() => {
  console.log(import.meta.env.VITE_API_AXIOS_BASE_URL);
});
</script>
