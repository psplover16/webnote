<template>
  <div>
    <div>這裡是子層</div>
    <slot name="actions" v-bind="{ console1, console2 }">
      <section class="w-full">這裡是slot區域</section>
    </slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
const console1 = () => {
  console.log(1);
};
const console2 = () => {
  console.log(2);
};
</script>
<style lang="scss" scoped></style>
