<template>
  <button
    :style="{
      background: isImportant ? 'red' : '',
    }"
  >
    <slot name="title"></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  isImportant: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
