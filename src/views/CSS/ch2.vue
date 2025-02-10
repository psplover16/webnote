<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        文本對齊
        <ul>
          <li>
            text-align:justify; "多行"對齊方式，讓行內元素兩端對齊拉伸
            <div class="w-[300px] bg-red-500 text-justify p-1">
              這是一段示例文本，用於展示 text-align: justify
              的效果。當文本的行數超過一行時，所有行都會被拉伸到容器的寬度，並且在行之間添加空格以實現對齊效果。
            </div>
          </li>
          <li>
            text-align-last: justify; 讓最後一行行內元素兩端對齊
            <div class="w-[300px] bg-red-500" style="text-align-last: justify">
              這是一段示例文本，用於展示 text-align-last: justify
              的效果。當文本的行數超過一行時，所有行都會被拉伸到容器的寬度，並且在行之間添加空格以實現對齊效果。這是最後一行，應該也會被對齊。
            </div>
          </li>
        </ul>
      </li>
      <li>
        文本方向
        <ul>
          <li>
            <div>direction: rtl; 由右至左</div>
            <div>direction: ltr; 由左至右</div>
          </li>
          <li>
            <div>
              unicode-bidi: bidi-override;
              強制文本遵循指定方向，並請會影響整個文本顯示，即使文本方向不一致，但仍會遵循指定方向
            </div>
            <div>
              isolate-override
              將文本視為一個獨立的段落，強制它遵循指定的方向，而不受周圍文本的影響。
            </div>
          </li>
        </ul>
      </li>
      <pre></pre>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(true);
</script>
