<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>父組件，引用組件的地方，放入slot
        <pre>
  &lt;template&gt;
    &lt;ChildComponent&gt;
      &lt;template #header&gt;
        &lt;h3&gt;This is the header&lt;/h3&gt;
      &lt;/template&gt;
    &lt;/ChildComponent&gt;
  &lt;/template&gt;
        </pre>
      </li>
      <li>子組件
        <pre>
  &lt;slot name="header"&gt;&lt;/slot&gt;
        </pre>
      </li>
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
<style lang="scss" scope></style>