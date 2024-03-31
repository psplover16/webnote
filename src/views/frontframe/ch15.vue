<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>範例，
        <pre>
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
  import FirstComponent from './FirstComponent.vue';
  import SecondComponent from './SecondComponent.vue';
  const currentComponent = ref('FirstComponent');
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