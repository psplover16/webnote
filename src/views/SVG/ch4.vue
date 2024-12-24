<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <table>
          <tr v-for="(value, index) in strokeList">
            <td class="border">{{ value.name }}</td>
            <td class="border">{{ value.content }}</td>
          </tr>
        </table>
      </li>
      <li>
        <svg>
          <polyline
            fill="red"
            stroke="green"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="bevel"
            points="83.678,119.133 113.376,89.434 143.075,119.133"
          />
          <line
            stroke="red"
            stroke-dasharray="2,2,10"
            x1="0"
            y1="50"
            x2="100"
            y2="40"
          />
        </svg>
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
const strokeList = ref([
  {
    name: "stroke ",
    content: "邊框顏色",
  },
  {
    name: "stroke-width",
    content: "邊框寬度",
  },
  {
    name: "stroke-linecap",
    content: "邊框端點的屬性(butt(預設)、square(方形)、round(圓角)",
  },
  {
    name: "stroke-linejoin",
    content: "邊框接合尖角的屬性 (miter(預設)、round(圓角)、bevel())",
  },
  {
    name: "stroke-dasharray",
    content: "虛線(表示陣列，每兩個數字為一組(長度、間隔)，若為奇數個，則以陣列結尾與陣列開頭為一組)",
  },
]);
</script>
