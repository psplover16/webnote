<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">


      <li>
        _name_，表示變數
      </li>
      <li>
        str(obj)，表示function的寫法
      </li>
      <li>
        flask，表示python用來寫html的套件
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