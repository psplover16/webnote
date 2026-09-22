<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>npm i mqtt</li>
      <li>
        index.html的下列註解
        <div>{{ showTxt }}</div>
      </li>
      <li>
        <input
          type="text"
          v-model="connectTopic"
          placeholder="請用,來切割要連線的主題"
        />
        <div>{{ sendTopic }}</div>
        <button @click="connectMQTT(showSuccessTxt, sendTopic)">
          連接MQTT
        </button>
      </li>
      <li>
        <input type="text" v-model="publicTopic" placeholder="要送出去的頻道" />
        <input type="text" v-model="sendData" placeholder="要送出去的資料" />
        <button @click="pushMqtt">推送</button>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { connectMQTT, pubData } from "@/utils/mqtt.js";

const isShow = ref(true);
const a1 = ref(false);
defineProps({
  title: String,
});
const showTxt = `<meta http-equiv="Content-Security-Policy" content="script-src 'self'">`;
//
const connectTopic = ref("");
const sendTopic = computed(() => {
  return connectTopic.value.split(",");
});

const showSuccessTxt = (data) => {
  console.log(data);
};

const sendData = ref(null);
const publicTopic = ref(null);
const pushMqtt = () => {
  pubData(publicTopic.value, sendData.value);
};

onMounted(async () => {});
</script>
<style lang="scss" scoped></style>
