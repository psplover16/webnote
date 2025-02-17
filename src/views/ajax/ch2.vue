<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <!-- <li><button @click="connectMQTTT(aa, ['ggwzz'])">連接</button></li> -->
      <li>
        <input type="text" v-model="sendData" />
        <button @click="pushMqtt">推送</button>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { connectMQTT, pubData } from "@/utils/mqtt.js";

const isShow = ref(true);
const a1 = ref(false);
defineProps({
  title: String,
});
const sendData = ref(0);

const pushMqtt = () => {
  pubData("ggwzz", sendData.value);
};


const aa = (za) => {
  console.log(za);
};

onMounted(async () => {
  // pushMqtt();
  const data = await connectMQTT(aa, ['ggwzz']);
  console.log(data);
});
</script>
<style lang="scss" scoped></style>
