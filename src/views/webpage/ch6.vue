<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>defer，告</li>
      <li>async</li>
      <li>
        不加
      </li>



<table>
  <tr>
    <td>不加</td>
    <td>按照script在html出現的順序依次下載腳本</td>
    <td>按照script在html出現的順序依次執行</td>
    <td>會阻塞後續腳本</td>
  </tr>
  <tr>
    <td>defer</td>
    <td>立即下載腳本</td>
    <td>頁面解析完畢後再執行</td>
    <td></td>
  </tr>
  <tr>
    <td>async</td>
    <td>立即下載腳本</td>
    <td>下載完成後執行</td>
    <td>腳本執行順序可能與他們在html出現的順序不同，容易代碼出錯</td>
  </tr>
</table>





    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped></style>