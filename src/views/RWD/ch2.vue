<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        
      </li>
      <li>

      </li>
      <li>
        <div class="container">
          <div class="item item-1">Item 1 (Spanning across all columns)</div>
          <div class="item item-2">Item 2 (Spanning across 2 rows)</div>
          <div class="item">Item 3</div>
          <div class="item">Item 4</div>
          <div class="item">Item 5</div>
          <div class="item">Item 6</div>
          <div class="item">Item 7</div>
          <div class="item">Item 8</div>
          <div class="item">Item 9</div>
        </div>
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

<style lang=scss scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 创建了一个包含三列的网格 */
  grid-gap: 10px;
  /* 设置网格项之间的间距 */
  padding: 20px;
  border: 1px solid #ccc;
  // width: 300px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}

/* 使用 grid-column-start 和 grid-column-end 控制网格项的位置 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 4;
}

/* 使用 grid-row-start 和 grid-row-end 控制网格项的位置 */
.item-2 {
  grid-row-start: 2;
  grid-row-end: 4;
}
</style>