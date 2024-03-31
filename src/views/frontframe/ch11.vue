<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">

      <li>beforeCreate：在實例初始化之後，數據觀測和事件/監聽器設置之前被調用。</li>
      <li>created：實例創建完成後被調用。此時已完成數據觀測/屬性和方法的計算/監聽器和事件回調。但掛載階段尚未開始，元素不可見。</li>
      <li>beforeMount：在掛載開始之前被調用。相關的 render 函數首次被調用。</li>
      <li>mounted / onMounted：el 被新創建的 vm.$el 替換，並在掛載實例之後調用。</li>
      <li>beforeUpdate：數據更新時調用，發生在虛擬 DOM 重新渲染和打補釘之前。可以在該鉤子中進一步更改狀態，不會觸發重新渲染。</li>
      <li>updated / onUpdated：由於數據更新，導致虛擬 DOM 重新渲染和打補釘之後調用。</li>
      <li>beforeDestroy / beforeUnmount：實例銷毀之前調用，在這一步，實例仍完全可用。</li>
      <li>destroyed / onUnmounted：實例銷毀後調用。調用後，所有的事件監聽器會被移除，所有的子實例也會被銷毀。</li>

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