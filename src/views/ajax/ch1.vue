<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>npm i axios</li>
      <li>
        陽春版
        <pre>
import axios from "axios";
axios
  .post("https://ca-test.cmoney.tw/api/auth/login", {
    email: "jamin_chang@cmoney.com.tw",
    password: "jamin80004909",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
        </pre>
      </li>
      <li>
        複雜版，做axios封包
        <button @click="axiosClick">打API</button>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosConfig from "@/utils/axiosConfig.js";

const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});

const axiosClick = async () => {
  const sendData = {
    email: "jamin_chang@cmoney.com.tw",
    password: "jamin80004909",
  };
  const confingData = { timeout: 6000 };
  const data = await axiosConfig.post("/api/auth/login", sendData, confingData);
  console.log(data);
};

onMounted(() => {});
</script>
<style lang="scss" scoped></style>
