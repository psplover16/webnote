<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        撰寫組件
        <customButton>
          <template #title> 123 </template>
        </customButton>
      </li>
      <pre></pre>
    </ol>
  </div>
</template>

<script setup>
import customButton from "@/components/customButton.vue";
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
</script>
