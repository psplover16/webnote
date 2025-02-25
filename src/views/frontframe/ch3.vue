<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        Vue導入，
        <ul>
          <li>vue create 專案名稱</li>
          <li>npm create vite@latest</li>
        </ul>
      </li>
      <li>
        pinia導入，npm install pinia
        <div>
          <input
            v-model="piniaTestStr"
            class="border-black border"
            type="number"
          />
          <button @click="setScreen">測試</button>
        </div>
        <div>是否>0.8，{{ screenSize.screenStatus }}</div>
        <ul>
          <li>
            在 store資料夾，放三個檔案，pinia.js / /index.js / 自定義pinia檔案
            <ul>
              <li>
                pinia.js，創建pinia
                <pre>
  import { createPinia } from 'pinia';
  // 創建 pinia
  const pinia = createPinia();
  export default pinia;
        </pre
                >
              </li>
              <li>
                index.js，創建自定義pinia統整列表
                <pre>
  import { usescreenWidth } from "./screenwidth";
    export const useStore = () => {
      return {
        usescreenWidth
      };
    };         
        </pre
                >
              </li>
              <li>
                usescreenWidth.js，創建子pinia功能列表
                <pre>
  import { defineStore } from "pinia";
    export const usescreenWidth = defineStore("screenWidth", {
        state: () => ({
          min640: false
        }),
        actions: {
          changeMsg(e) {
            // this.msge;
          },
        },
    });          
        </pre
                >
              </li>
            </ul>
          </li>
          <li>
            main.js，把創建的pinia導入專案
            <pre>
  import pinia from "./store/pinia";
  app.use(pinia);         
        </pre
            >
          </li>
          <li>
            使用
            <pre>
  import { useStore } from "@/store";
  const { usescreenWidth } = useStore();
  usescreenWidth().min640  >>>>>直接讀值與操作          
        </pre
            >
          </li>
        </ul>
      </li>
      <li>
        router
        <br />
        npm install vue-router
        <br />
        建立router資料夾下的index.js
        <pre>
  import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"; //引用 vue-router 的 createRouter() 與 createWebHistory()。
  let history = createWebHashHistory(); //使用 createWebHistory() 建立 history。
  let routes = [
      {
          path: "/layout",
          name: "layout",
          meta: { name: "大廳" },
          redirect: "/layout/news",
          component: () => import("@/views/layout/layout.vue"),
          children: [
            {
              path: "news",
              name: "news",
              meta: {
                auth: false,
                name: "最新消息",
              },
              component: () => import("@/views/layout/news.vue"),
            }
          ],
      },
  ];
  const router = createRouter({ history, routes });
  router.beforeEach((to, from , next) => { // 路由守衛
   // 路由跳轉前觸發
  if (to.meta.auth) {
     // 檢查cookuie
     // console.log(from.name);
     // console.log(to);
  }
  next();
  );
  router.afterEach((to, from) => {
  // 在每次路由導航之後觸發
  // 可以進行後置處理操作，如日誌記錄等
  });

  export default router; //使用 createRouter() 根據 history 與 routes 建立 route。
        </pre>
        使用
        <pre>
  &lt;router-link to="&quot; &gt;
    &lt;div&gt;
        AA
    &lt;/div&gt;
  &lt;/router-link&gt;
  &lt;router-view /&gt;          
        </pre>
      </li>
      <li>
        tailwindCss
        <ul>
          <li>npm install -D tailwindcss postcss autoprefixer</li>
          <li>npx tailwindcss init -p</li>
          <li>
            修改 tailwind.config.js 配置檔
            <pre>
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
            </pre>
          </li>
          <li>
            設置一個css注入tailwind
            <pre>
src/style/tailwind.css
//
@tailwind base;
@tailwind components;
@tailwind utilities;
            </pre>
          </li>
          <li>
            main.js注入tailwind
            <div>import "./style/index.css"; //在此引入</div>
          </li>
        </ul>
      </li>
      <li></li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useScreenSize } from "@/store/screenSize";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});

const screenSize = useScreenSize();
const piniaTestStr = ref(0);
const setScreen = () => {
  screenSize.setScreenSize(Number(piniaTestStr.value));
};

onMounted(() => {
  // console.log(useRoute().path);
  // console.log(useRoute().params);
  // console.log(useRoute().query);
  // console.log(useRoute().name);
});
</script>
<style lang="scss" scoped></style>
