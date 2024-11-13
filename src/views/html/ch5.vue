<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>ruby，包裹需要註釋的文本</li>
      <li>rb，可不佳，包裹需要註釋的文本</li>
      <li>rt，表示對應的註釋</li>
      <li>rp，表示ruby標籤不吃的話，顯示的替代文本，表示註釋範圍</li>
      <li>
        <div>
          {{ showCode }}
        </div>
        <br>
        <ruby>
          <rb>愛爾莎●葛蘭朗特</rb>
          <rp>(</rp>
          <rt>Elsa</rt>
          <rp>)</rp>
        </ruby>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
const showCode = ref(`
        <ruby>
          <rb>愛爾莎●葛蘭朗特</rb>
          <rp>(</rp>
          <rt>Elsa</rt>
          <rp>)</rp>
        </ruby>
`);
</script>
