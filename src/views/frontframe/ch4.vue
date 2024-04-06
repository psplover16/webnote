<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>差異，pinia支持將store拆分為模塊</li>
      <li>
        Vuex
        <br />
        index.js
        <pre>
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);
  export default new Vuex.Store({
    state: {  // 狀態，可以通过 this.$store.state 访问。
      count: 0
    },
    mutations: {
      increment(state) {  // 用于修改状态的方法，通过提交 mutation 来修改 state 中的数据。在 mutation 中只能执行同步操作。
        state.count++;
      }
    },
    actions: {
      incrementAsync({ commit }) {  // 类似于 mutations，但可以执行异步操作，可以包含任意异步操作，然后提交 mutation 以修改状态。
        setTimeout(() => {
          commit('increment');
        }, 1000);
      }
    },
    getters: {  // 用于对 state 中的数据进行计算或筛选，类似于 Vue 组件中的计算属性。
      doubleCount(state) {
        return state.count * 2;
      }
    }
  });
        </pre>
        引用，this.$store.state.count;
      </li>
      <li>
        pinia
        <br />
        store.js
        <pre>
  import { createPinia } from 'pinia';
  const pinia = createPinia();
  export default pinia;         
        </pre>
        main.js
        <pre>
  import pinia from "./store/pinia";
  app.use(pinia);         
        </pre>

        counter.js
        <pre>
  import { defineStore } from 'pinia';
  import store from './store';
  export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
      count: 0
    }),
    actions: {
      incrementAsync() {
        setTimeout(() => {
          this.count++;
        }, 1000);
      }
    },
    getters: {
      doubleCount() {
        return this.count * 2;
      }
    }
  });          
        </pre>
        引用(在Vue模板中)
        <pre>
  &lt;script setup&gt;
    import { useCounterStore } from './counter';
    const store = useCounterStore();

    const increment = () => {
      store.count++;
    };

    const incrementAsync = () => {
      store.incrementAsync();
    };

    const count = store.count;
    const doubleCount = store.doubleCount;
  &lt;/script&gt;
        </pre>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(false);
const a1 = ref(false);
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped></style>
