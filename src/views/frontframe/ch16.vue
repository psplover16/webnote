<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>保留元件狀態或避免多次渲染。 當包裹在 &lt;keep-alive&gt; 標籤中的動態元件切換時，其狀態會被保留，不會被銷毀和重新建立
        <pre>
  &lt;keep-alive&gt;
    &lt;component :is="currentComponent"&gt;&lt;/component&gt;
  &lt;/keep-alive&gt;
        </pre>
      </li>
      <li>鉤子
        <ul>
          <li>activated: 快取元件被啟動時呼叫。</li>
          <li>deactivated: 快取元件失去啟動狀態時呼叫。</li>
        </ul>
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