<script setup>
import { ref, reactive, watch } from "vue";

/**
 * confirmDialog
 * @typedef {Object} MyDialog
 * @property {boolean} visible 是否開啟Dialog
 * @property {string} title 標題
 * @property {string} message 文字訊息
 *
 */

/**
 * @returns {ConfirmDialog}
 */

const initState = () => {
  return {
    visible: false,
    title: "",
    message: "",
    resolvePromise: null, // resolvePromise
  };
};

const hasSeven = ref("有");
const options = reactive(initState());

watch(
  () => options.message,
  (val) => {
    // reset
    if (val.includes("7")) {
      hasSeven.value = "有";
    } else {
      hasSeven.value = "沒有";
    }
  }
);

function open(payload) {
  Object.assign(options, payload);
  options.visible = true;

  return new Promise((resolve) => {
    options.resolvePromise = resolve;
  });
}

function confirmHandler() {
  options.visible = false;
  options.resolvePromise(true);
  Object.assign(options, initState());
}

function cancelHandler() {
  options.visible = false;
  options.resolvePromise(false);
  Object.assign(options, initState());
}

defineExpose({
  open,
  close: cancelHandler,
});
</script>
<template>
  <div
    v-if="options.visible"
    class="fixed z-[999] w-[500px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base bg-red-500"
  >
    <div>標題: {{ options.title }}</div>
    <div>內容: {{ options.message }}</div>
    <div>是否有7: {{ hasSeven }}</div>
    <div>
      <button @click="confirmHandler">確認</button>
      <button @click="cancelHandler">關閉</button>
    </div>
  </div>
</template>

<style scoped></style>
