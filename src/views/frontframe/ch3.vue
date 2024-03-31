<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>Vue導入，npm create vite@latest</li>
      <li>pinia導入，npm install pinia
        <br>
        在 store資料夾，放三個檔案，pinia.js / /index.js / 自定義pinia檔案
        <br>
        pinia.js
        <pre>
  import { createPinia } from 'pinia';
  // 創建 pinia
  const pinia = createPinia();
  export default pinia;
        </pre>
        index.js
        <pre>
  import { usescreenWidth } from "./screenwidth";
    export const useStore = () => {
      return {
        usescreenWidth
      };
    };         
        </pre>
        usescreenWidth.js
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
        </pre>
        main.js
        <pre>
  import pinia from "./store/pinia";
  app.use(pinia);         
        </pre>
        使用
        <pre>
  import { useStore } from "@/store";
  const { usescreenWidth } = useStore();
  usescreenWidth().min640  >>>>>直接讀值與操作          
        </pre>
      </li>
      <li>router
        <br>
        npm install vue-router
        <br>
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
  router.beforeEach((to, from) => { // 路由守衛
   // 路由跳轉前觸發
  if (to.meta.auth) {
     // 檢查cookuie
     // console.log(from.name);
     // console.log(to);
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

      </li>
      <li></li>
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