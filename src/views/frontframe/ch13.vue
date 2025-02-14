<template>
  <div v-bind="$attrs">
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <h3>
          此處用了v-bind:$attrs，繼承了父層的除了props以外的屬性，在Vue3中，只有template中，根結點若只有一個，則會自動繼承全部。若根節點有多個，要用v-bind:$attrs
        </h3>
      </li>
      <li>
        這裡是父層
        <ch13Slot>
          <!-- 把子組件內的函數，拉至父祖件能引用(僅限) -->
          <template #actions="{ console1, console2 }">
            <div class="bg-blue-300">
              這裡是父層引用子層slot的template
              <button @click="console1">觸發子組件的函數1</button>
              <button @click="console2">觸發子組件的函數2</button>
            </div>
          </template>
        </ch13Slot>
      </li>
    </ol>
  </div>
  <div>
    <div>第二節點</div>
    <div>$attrs，表示除了props以外其他父層的屬性{{ $attrs }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ch13Slot from "./ch13Slot.vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped>
button {
  padding: 1rem;
  border: 1px solid black;
}
</style>
