# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



3.v-bind:$attrs
4.assetsInclude: ['**/*.lottie'], vite.cpnfig.js 解析lottie
5.axios 內建 timeout 及 自訂 timeout
6.懶加載 lazyloading
6.Vue3 attrs slot用法
7.
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, '第一個解決'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, '第二個解決'));

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value); // 輸出: "第一個解決"
    });

8.        popupContainer.scrollTo({
            // 選項的中間
            top:
                optionsElements[idx].offsetTop -
                popupContainer.clientHeight / 2 +
                optionsElements[idx].clientHeight / 2,
          });

      window.scrollTo(0, window.scrollY);




9.axios封包
export const requestHandler = async (apiPromise, errorHandler) => {
  try {
    const res = await apiPromise();

    return res?.data || res;
  } catch (error) {
    if (typeof errorHandler === 'function') {
      return errorHandler(error);
    } else {
      throw error;
    }
  }
};

  async function fetchUserInfo() {
    const { data } =
      (await requestHandler(API.fetchUserInfo, (error) => {
        if (error.status === 429) isRead.value = true;
      })) ?? {};

    if (data) setUserInfo(data);
    return data;
  }

import axios from 'axios';
import { useMobileBridge } from '@/composables/useMobileBridge';
import { isJSONParsable } from '@/utils/helper';

const { updateToken } = useMobileBridge();

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_AXIOS_BASE_URL,
  timeout: 6000,
  headers: {
    accept: 'text/plain',
    'Content-Type': 'application/json',
  },
});

let jwtToken = '';
axiosConfig.interceptors.request.use(async (config) => {
  config.data = JSON.stringify(config.data);
  if (!jwtToken) {
    const { JWT } = await updateToken(false);
    jwtToken = JWT;
  }
  config.headers.Authorization = `Bearer ${jwtToken}`;
  return config;
});

async function unauthorizedHandler(error) {
  const originalRequest = error.config;
  try {
    if (!originalRequest._retry) {
      // 與APP重新拿取JWT
      const { JWT } = await updateToken(true);
      jwtToken = JWT;
      // 判斷重複呼叫次數，避免無限迴圈
      originalRequest._retry = true;
      if (isJSONParsable(originalRequest.data)) {
        originalRequest.data = JSON.parse(originalRequest.data);
      }
      return axiosConfig(originalRequest);
    } else {
      throw new Error('retry failed');
    }
  } catch (retryError) {
    console.log('retryError', retryError);
  }
  return Promise.reject(error);
}

axiosConfig.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.request?.status === 401) {
      return unauthorizedHandler(err);
    }
    return Promise.reject(err.response);
  },
);

export default axiosConfig;



