<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>router
        <ul>
          <li>router.push(location, onComplete?, onAbort?): 將路由跳轉到指定的位置。可以是一個字符串路徑，一個命名的路由，或者一個描述地址的物件。可選的 onComplete 和
            onAbort 回調函數將在路由跳轉成功或失敗時被調用。</li>
          <li> router.replace(location, onComplete?, onAbort?): 與 push 方法類似，但是不會保留 history 記錄，即用戶無法回到前一個路由。</li>
          <li> router.go(n): 在 history 記錄中向前或向後跳轉 n 步。負數表示後退，正數表示前進。</li>
          <li> router.back(): 返回到前一個 history 記錄。</li>
          <li> router.forward(): 前進到下一個 history 記錄。</li>
          <li> router.beforeEach(guard): 添加一個全局的前置守衛，用於在路由切換之前執行特定的操作，如驗證用戶身份、處理路由跳轉等。</li>
          <li> router.afterEach(hook): 添加一個全局的後置鉤子，用於在路由切換之後執行特定的操作，如統計用戶行為、處理異常情況等。</li>
        </ul>
      </li>
      <li>
        route
        <ul>
          <li> route.path: 字符串，表示當前路由的路徑。</li>
          <li> route.params: 物件，包含動態路由參數的鍵值對。 </li>
          <li> route.query: 物件，包含查詢參數的鍵值對。 </li>
          <li> route.name: 字符串，表示當前路由的名稱。 </li>
          <li> route.meta: 物件，包含當前路由的元信息，可用於路由的權限控制、頁面標題設置等。 </li>
          <li> route.matched: 數組，包含了當前路由匹配的所有路由記錄，從根路由到當前路由的所有中間路由。</li>
          <li class="r"> this.$route 可以方便地訪問到當前的路由對象</li>
        </ul>
      </li>
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
<style lang="scss" scope></style>