<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>Vue2
        <pre>
  &lt;template&gt;
    &lt;div&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;
  &lt;script&gt;
    export default {
      props: ['message'], // 在组件选项中直接声明 props
    };
  &lt;/script&gt;          
        </pre>
      </li>
      <li>Vue3
        <pre>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;{{ message }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
    defineProps({
      msg: String,
    });
  &lt;/script&gt;
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