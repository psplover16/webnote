<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>.capture 修飾符可以將事件處理程序綁定在捕獲階段，即在事件到達目標元素之前捕獲它。
        <pre>
  &lt;template&gt;
    &lt;div @click.capture="handleCaptureClick"&gt;
      Outer Div
      &lt;div @click="handleInnerClick"&gt;Inner Div&lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
        </pre>
        handleCaptureClick 方法會在點擊 Inner Div 之前被觸發。
      </li>
      <li>.stop：呼叫 event.stopPropagation() 阻止事件繼續傳播。
        <pre>
  &lt;div @click="handleClick"&gt;
    &lt;button @click.stop&gt;Click Me&lt;/button&gt;
  &lt;/div&gt;
        </pre>
        handleClick不會被觸發
      </li>
      <li>.prevent：呼叫 event.preventDefault() 阻止事件的預設行為，即呼叫 event.preventDefault()。
        <pre>
  &lt;form @submit.prevent&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
        </pre>
        表單不會提交
      </li>
      <li>.self：只有在事件目標是當前元素自身時才觸發事件。</li>
      <li>.once：事件只會觸發一次，觸發後自動解綁事件處理程序。</li>
      <li>.passive：事件的默認行為立即執行，無需等待事件回調執行完畢，提供性能。</li>
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