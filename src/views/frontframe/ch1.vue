<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>性能優化</li>
      <li>
        <ul>
          <li>CompositionAPI
            <ul>
              <li>Vue3引入</li>
              <li>this不在指向當前組件實例，而是替換成一個普通的JS對象，可以使用getCurrentInstance來獲取當前實例</li>
            </ul>
          </li>
          <li>OptionAPI
            <ul>
              <li>邏輯分離</li>
              <li>this指的是Vue實例本身</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Teleport，Vue3引入</li>
      <li>Typescript更好的支持</li>
      <li>Vue3允許template返回多個節點</li>
      <li>
        創建應用方式不同
        <ul>
          <li> Vue2
            <br>
            <code>
        import Vue from 'vue';
        <br>
        import App from './App.vue';
        <br>
        // 引入全局組件
        <br>
        import MyComponent from './components/MyComponent.vue';
        <br>
        // 註冊全局組件
        <br>
        Vue.component('my-component', MyComponent);
        <br>
        new Vue({
          <br>
          &emsp;render: h => h(App),
          <br>
        }).$mount('#app');

          </code>
          </li>
          <li>
            Vue3
            <br>
            <code>
        import { createApp } from 'vue';
        <br>
        import App from './App.vue';
        <br>
        // 引入全局組件
        <br>
        import MyComponent from './components/MyComponent.vue';
        <br>
        const app = createApp(App);
        <br>
        // 註冊全局組件
        <br>
        app.component('my-component', MyComponent);
        <br>
        app.mount('#app');
            </code>
          </li>
        </ul>
      </li>
      <li>
        setup：compositionAPI的落實
        <ul>
          <li>普通方式
            <pre>
&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;

import { ref } from 'vue';
export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    return {
      message
    };
  }
};
&lt;/script&gt;
  </pre>
          </li>
          <li>簡易模式
            <pre>
              <div  style="word-break: break-all;white-space: pre-wrap;">// defineProps 和 defineEmits 函數來宣告 props 和 emits，這兩個函數是在 &lt;script setup&gt; 內部自動導入的。 但是，對於其他功能，如 ref 和 onMounted，你仍然需要明確導入才能在程式碼中使用它們。</div>
  <code>
&lt;template&gt;
  &lt;div&gt;{{ message }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
  // 不需要显式导入 Composition API 中的函数
  // 可以直接在这里声明响应式数据和其他逻辑
  const message = ref('Hello, Vue 3!');
&lt;/script&gt;
  </code>
</pre>
          </li>
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