<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>Vue2
        <pre>
  &lt;template&gt;
    &lt;div ref="myDiv"&gt;This is a div element&lt;/div&gt;
  &lt;/template&gt;    

  &lt;script&gt;
    export default {
      mounted() {
        // 在组件的 mounted 钩子中使用 $refs 访问 DOM 元素
        console.log(this.$refs.myDiv); // 输出：div 元素对象
      }
    };
  &lt;/script&gt;
        </pre>
      </li>
      <li>Vue3
        <pre>
  &lt;template&gt;
    &lt;div ref="myDiv"&gt;This is a div element&lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
    import { ref, onMounted } from 'vue';
    const myDiv = ref(null);
    onMounted(() => {
      console.log(myDiv.value); // 输出：div 元素对象
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
<style lang="scss" scoped></style>