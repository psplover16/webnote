<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <div>
          外部要使用exposed來獲取defineExpose
          <button @click="proxyUse">proxy</button>
        </div>

        <div>
          exposed不需要
          <button @click="directUse">直接引用</button>
        </div>
      </li>
      <li>
        <ul>
          <li>components設置詳細插件樣式</li>
          <li>plugins設置插件並引用前者</li>
          <li>main.js引用plugin設置的插件</li>
        </ul>
      </li>
      <MyDialogTest ref="myComponentRef" />
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

import MyDialogTest from "@/components/MyDialogTest.vue";

const { proxy } = getCurrentInstance();

const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});

//
const proxyUse = async () => {
  const result = await proxy.$confirm.open({
    title: "123",
    message: "456",
  });
  console.log(result);
};

const myComponentRef = ref(null);
async function directUse() {
  console.log(myComponentRef.value);
  const result = await myComponentRef.value.open({
    title: "直接引用",
    message: "666",
  });
  console.log(result);
}

onMounted(() => {
  // console.log(useRoute().path);
  // console.log(useRoute().params);
  // console.log(useRoute().query);
  // console.log(useRoute().name);
});
</script>
<style lang="scss" scoped></style>
