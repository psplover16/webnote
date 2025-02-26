import{r as i,o as l,c as s,a as t,b as o,t as a,n as d,d as m,e as v,f as _,i as f,g as c}from"./index-tug10zDy.js";const $={key:0,type:"I"},g=v("<li>性能優化</li><li><ul><li>CompositionAPI <ul><li>Vue3引入</li><li>this不在指向當前組件實例，而是替換成一個普通的JS對象，可以使用getCurrentInstance來獲取當前實例</li></ul></li><li>OptionAPI <ul><li>邏輯分離</li><li>this指的是Vue實例本身</li></ul></li></ul></li><li>Teleport，Vue3引入</li><li>Typescript更好的支持</li><li>Vue3允許template返回多個節點</li><li> 創建應用方式不同 <ul><li> Vue2 <br><code> import Vue from &#39;vue&#39;; <br> import App from &#39;./App.vue&#39;; <br> // 引入全局組件 <br> import MyComponent from &#39;./components/MyComponent.vue&#39;; <br> // 註冊全局組件 <br> Vue.component(&#39;my-component&#39;, MyComponent); <br> new Vue({ <br>  render: h =&gt; h(App), <br> }).$mount(&#39;#app&#39;); </code></li><li> Vue3 <br><code> import { createApp } from &#39;vue&#39;; <br> import App from &#39;./App.vue&#39;; <br> // 引入全局組件 <br> import MyComponent from &#39;./components/MyComponent.vue&#39;; <br> const app = createApp(App); <br> // 註冊全局組件 <br> app.component(&#39;my-component&#39;, MyComponent); <br> app.mount(&#39;#app&#39;); </code></li></ul></li>",6),C=t("div",{style:{"word-break":"break-all","white-space":"pre-wrap"}},"// defineProps 和 defineEmits 函數來宣告 props 和 emits，這兩個函數是在 <script setup> 內部自動導入的。 但是，對於其他功能，如 ref 和 onMounted，你仍然需要明確導入才能在程式碼中使用它們。",-1),y={__name:"ch1",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",$,[g,t("li",null,[o(" setup：compositionAPI的落實 "),t("ul",null,[t("li",null,[o("普通方式 "),t("pre",null,`<template>
  <div>`+a(u.message)+`</div>
</template>
<script>

import { ref } from 'vue';
export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    return {
      message
    };
  }
};
<\/script>
  `,1)]),t("li",null,[o("簡易模式 "),t("pre",null,[o("              "),C,o(`
  `),t("code",null,`
<template>
  <div>`+a(u.message)+`</div>
</template>

<script setup>
  // 不需要显式导入 Composition API 中的函数
  // 可以直接在这里声明响应式数据和其他逻辑
  const message = ref('Hello, Vue 3!');
<\/script>
  `,1),o(`
`)])])])])])):m("",!0)]))}},S={key:0,type:"I"},w=t("li",null,"用於將組件內的內容渲染到指定的目標節點上，而不受組件層次影響",-1),b=t("li",null,[t("pre",null,[o("          "),t("code",null,`
<template>       
  <teleport :to="teleportTarget">
  <!-- 要渲染的内容 -->
  </teleport>
</template>

<script>
export default {        
  data() {          
    return {            
      teleportTarget: document.getElementById('teleport-container')            
      };          
    }        
};      
<\/script>
          `),o(`
        `)])],-1),k=[w,b],q={__name:"ch2",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",S,k)):m("",!0)]))}},x={key:0,type:"I"},I=v(`<li> Vue導入， <ul><li>vue create 專案名稱</li><li>npm create vite@latest</li></ul></li><li> pinia導入，npm install pinia <ul><li> 在 store資料夾，放三個檔案，pinia.js / /index.js / 自定義pinia檔案 <ul><li> pinia.js，創建pinia <pre>  import { createPinia } from &#39;pinia&#39;;
  // 創建 pinia
  const pinia = createPinia();
  export default pinia;
        </pre></li><li> index.js，創建自定義pinia統整列表 <pre>  import { usescreenWidth } from &quot;./screenwidth&quot;;
    export const useStore = () =&gt; {
      return {
        usescreenWidth
      };
    };         
        </pre></li><li> usescreenWidth.js，創建子pinia功能列表 <pre>  import { defineStore } from &quot;pinia&quot;;
    export const usescreenWidth = defineStore(&quot;screenWidth&quot;, {
        state: () =&gt; ({
          min640: false
        }),
        actions: {
          changeMsg(e) {
            // this.msge;
          },
        },
    });          
        </pre></li></ul></li><li> main.js，把創建的pinia導入專案 <pre>  import pinia from &quot;./store/pinia&quot;;
  app.use(pinia);         
        </pre></li><li> 使用 <pre>  import { useStore } from &quot;@/store&quot;;
  const { usescreenWidth } = useStore();
  usescreenWidth().min640  &gt;&gt;&gt;&gt;&gt;直接讀值與操作          
        </pre></li></ul></li><li> router <br> npm install vue-router <br> 建立router資料夾下的index.js <pre>  import { createRouter, createWebHistory, createWebHashHistory } from &quot;vue-router&quot;; //引用 vue-router 的 createRouter() 與 createWebHistory()。
  let history = createWebHashHistory(); //使用 createWebHistory() 建立 history。
  let routes = [
      {
          path: &quot;/layout&quot;,
          name: &quot;layout&quot;,
          meta: { name: &quot;大廳&quot; },
          redirect: &quot;/layout/news&quot;,
          component: () =&gt; import(&quot;@/views/layout/layout.vue&quot;),
          children: [
            {
              path: &quot;news&quot;,
              name: &quot;news&quot;,
              meta: {
                auth: false,
                name: &quot;最新消息&quot;,
              },
              component: () =&gt; import(&quot;@/views/layout/news.vue&quot;),
            }
          ],
      },
  ];
  const router = createRouter({ history, routes });
  router.beforeEach((to, from , next) =&gt; { // 路由守衛
   // 路由跳轉前觸發
  if (to.meta.auth) {
     // 檢查cookuie
     // console.log(from.name);
     // console.log(to);
  }
  next();
  );
  router.afterEach((to, from) =&gt; {
  // 在每次路由導航之後觸發
  // 可以進行後置處理操作，如日誌記錄等
  });

  export default router; //使用 createRouter() 根據 history 與 routes 建立 route。
        </pre> 使用 <pre>  &lt;router-link to=&quot;&quot; &gt;
    &lt;div&gt;
        AA
    &lt;/div&gt;
  &lt;/router-link&gt;
  &lt;router-view /&gt;          
        </pre></li><li> tailwindCss <ul><li>npm install -D tailwindcss postcss autoprefixer</li><li>npx tailwindcss init -p</li><li> 修改 tailwind.config.js 配置檔 <pre>module.exports = {
  content: [&quot;./index.html&quot;, &quot;./src/**/*.{vue,js,ts,jsx,tsx}&quot;],
  theme: {
    extend: {},
  },
  plugins: [],
};
            </pre></li><li> 設置一個css注入tailwind <pre>src/style/tailwind.css
//
@tailwind base;
@tailwind components;
@tailwind utilities;
            </pre></li><li> main.js注入tailwind <div>import &quot;./style/index.css&quot;; //在此引入</div></li></ul></li><li></li>`,5),V=[I],A={__name:"ch3",props:{title:String},setup(r){const e=i(!1);return i(!1),_(()=>{}),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",x,V)):m("",!0)]))}},T={key:0,type:"I"},j=v(`<li>差異，pinia支持將store拆分為模塊</li><li> Vuex <br> index.js <pre>  import Vue from &#39;vue&#39;;
  import Vuex from &#39;vuex&#39;;
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
        setTimeout(() =&gt; {
          commit(&#39;increment&#39;);
        }, 1000);
      }
    },
    getters: {  // 用于对 state 中的数据进行计算或筛选，类似于 Vue 组件中的计算属性。
      doubleCount(state) {
        return state.count * 2;
      }
    }
  });
        </pre> 引用，this.$store.state.count; </li><li> pinia <br> store.js <pre>  import { createPinia } from &#39;pinia&#39;;
  const pinia = createPinia();
  export default pinia;         
        </pre> main.js <pre>  import pinia from &quot;./store/pinia&quot;;
  app.use(pinia);         
        </pre> counter.js <pre>  import { defineStore } from &#39;pinia&#39;;
  import store from &#39;./store&#39;;
  export const useCounterStore = defineStore({
    id: &#39;counter&#39;,
    state: () =&gt; ({
      count: 0
    }),
    actions: {
      incrementAsync() {
        setTimeout(() =&gt; {
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
        </pre> 引用(在Vue模板中) <pre>  &lt;script setup&gt;
    import { useCounterStore } from &#39;./counter&#39;;
    const store = useCounterStore();

    const increment = () =&gt; {
      store.count++;
    };

    const incrementAsync = () =&gt; {
      store.incrementAsync();
    };

    const count = store.count;
    const doubleCount = store.doubleCount;
  &lt;/script&gt;
        </pre></li>`,3),P=[j],M={__name:"ch4",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",T,P)):m("",!0)]))}},D={key:0,type:"I"},E=v('<li>router <ul><li>router.push(location, onComplete?, onAbort?): 將路由跳轉到指定的位置。可以是一個字符串路徑，一個命名的路由，或者一個描述地址的物件。可選的 onComplete 和 onAbort 回調函數將在路由跳轉成功或失敗時被調用。</li><li> router.replace(location, onComplete?, onAbort?): 與 push 方法類似，但是不會保留 history 記錄，即用戶無法回到前一個路由。</li><li> router.go(n): 在 history 記錄中向前或向後跳轉 n 步。負數表示後退，正數表示前進。</li><li> router.back(): 返回到前一個 history 記錄。</li><li> router.forward(): 前進到下一個 history 記錄。</li><li> router.beforeEach(guard): 添加一個全局的前置守衛，用於在路由切換之前執行特定的操作，如驗證用戶身份、處理路由跳轉等。</li><li> router.afterEach(hook): 添加一個全局的後置鉤子，用於在路由切換之後執行特定的操作，如統計用戶行為、處理異常情況等。</li></ul></li><li> route <ul><li> route.path: 字符串，表示當前路由的路徑。</li><li> route.params: 物件，包含動態路由參數的鍵值對。 </li><li> route.query: 物件，包含查詢參數的鍵值對。 </li><li> route.name: 字符串，表示當前路由的名稱。 </li><li> route.meta: 物件，包含當前路由的元信息，可用於路由的權限控制、頁面標題設置等。 </li><li> route.matched: 數組，包含了當前路由匹配的所有路由記錄，從根路由到當前路由的所有中間路由。</li><li class="r"> this.$route 可以方便地訪問到當前的路由對象</li></ul></li>',2),R=[E],W={__name:"ch6",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",D,R)):m("",!0)]))}},B={key:0,type:"I"},H={__name:"ch7",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",B,[t("li",null,[o("Vue2 "),t("pre",null,`  <template>
    <div>
    <p>`+a(u.message)+`</p>
    </div>
    </template>
  <script>
    export default {
      props: ['message'], // 在组件选项中直接声明 props
    };
  <\/script>          
        `,1)]),t("li",null,[o("Vue3 "),t("pre",null,`  <template>
    <div>
      <p>`+a(u.message)+`</p>
    </div>
  </template>

  <script setup>
    defineProps({
      msg: String,
    });
  <\/script>
        `,1)])])):m("",!0)]))}},U={key:0,type:"I"},O=t("li",null,[o("父層 "),t("pre",null,`  <template>
    <div>
      <ChildComponent :initialCount="count" @increment="handleIncrement" />
      <button @click="incrementCount">Increment Count</button>
    </div>
  </template>              

  <script>
    import ChildComponent from './ChildComponent.vue';
    export default {
      components: {
        ChildComponent
      },
      data() {
        return {
          count: 0
        };
      },
      methods: {
        incrementCount() {
          this.count++;
        },
        handleIncrement() {
          // 处理子组件触发的 increment 事件
          console.log('Child component emitted increment event');
        }
      }
    };
  <\/script>
        `)],-1),N=t("span",{class:"r"},"const props = defineProps(['initialCount']);",-1),L=t("span",{class:"r"},"const emit = defineEmits(['increment']);",-1),F={__name:"ch8",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",U,[O,t("li",null,[o("子層 "),t("ul",null,[t("li",null,[o("Vue2-props "),t("pre",null,`  <template>
    <div>
      <p>Current Count: `+a(u.count)+`</p>
      <button @click="increment">Increment</button>
    </div>
  </template>                

  <script>
    export default {
      props: ['initialCount'],
      data() {
        return {
          count: this.initialCount
        };
      },
      methods: {
        increment() {
          this.count++;
          this.$emit('increment');
        }
      }
    };
  <\/script>
            `,1)]),t("li",null,[o("Vue3-defineProps "),t("pre",null,[o(`  <template>
    <div>
      <p>Current Count: `+a(u.count)+`</p>
      <button @click="increment">Increment</button>
    </div>
  </template>

  <script setup>
    `,1),N,o(`

    const count = ref(props.initialCount);
    `),L,o(`
            
    const increment = () => {
      count.value++;
      emit('increment');
    };
  <\/script>
            `)])])])])])):m("",!0)]))}},z={key:0,type:"I"},J=t("li",null,"利用emit / defineEmits",-1),X=[J],G={__name:"ch9",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",z,X)):m("",!0)]))}},K={key:0,type:"I"},Q=t("li",null,[o("Vue2 "),t("pre",null,`  <template>
    <div ref="myDiv">This is a div element</div>
  </template>    

  <script>
    export default {
      mounted() {
        // 在组件的 mounted 钩子中使用 $refs 访问 DOM 元素
        console.log(this.$refs.myDiv); // 输出：div 元素对象
      }
    };
  <\/script>
        `)],-1),Y=t("li",null,[o("Vue3 "),t("pre",null,`  <template>
    <div ref="myDiv">This is a div element</div>
  </template>

  <script setup>
    import { ref, onMounted } from 'vue';
    const myDiv = ref(null);
    onMounted(() => {
      console.log(myDiv.value); // 输出：div 元素对象
    });
  <\/script>
        `)],-1),Z=[Q,Y],tt={__name:"ch10",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",K,Z)):m("",!0)]))}},et={key:0,type:"I"},nt=t("li",null,"beforeCreate：在實例初始化之後，數據觀測和事件/監聽器設置之前被調用。",-1),ot=t("li",null,"created：實例創建完成後被調用。此時已完成數據觀測/屬性和方法的計算/監聽器和事件回調。但掛載階段尚未開始，元素不可見。",-1),it=t("li",null,"beforeMount：在掛載開始之前被調用。相關的 render 函數首次被調用。",-1),lt=t("li",null,"mounted / onMounted：el 被新創建的 vm.$el 替換，並在掛載實例之後調用。",-1),st=t("li",null,"beforeUpdate：數據更新時調用，發生在虛擬 DOM 重新渲染和打補釘之前。可以在該鉤子中進一步更改狀態，不會觸發重新渲染。",-1),rt=t("li",null,"updated / onUpdated：由於數據更新，導致虛擬 DOM 重新渲染和打補釘之後調用。",-1),ut=t("li",null,"beforeDestroy / beforeUnmount：實例銷毀之前調用，在這一步，實例仍完全可用。",-1),at=t("li",null,"destroyed / onUnmounted：實例銷毀後調用。調用後，所有的事件監聽器會被移除，所有的子實例也會被銷毀。",-1),pt=[nt,ot,it,lt,st,rt,ut,at],ct={__name:"ch11",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",et,pt)):m("",!0)]))}},dt={key:0,type:"I"},mt=t("li",null,"computed：當依賴的響應式數據發生變化時才會重新計算，並緩存結果。",-1),vt=t("li",null,"watched：監聽指定的數據變化，當數據發生變化時執行相應的回調函數。可以監聽單個數據、對象的屬性或數組的變化。",-1),_t=t("li",null,"method：定義為 Vue 實例的方法，可以在模板中直接調用。",-1),ht=[mt,vt,_t],ft={__name:"ch12",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",dt,ht)):m("",!0)]))}},$t={key:0,type:"I"},gt=t("li",null,[o("父組件，引用組件的地方，放入slot "),t("pre",null,`  <template>
    <ChildComponent>
      <template #header>
        <h3>This is the header</h3>
      </template>
    </ChildComponent>
  </template>
        `)],-1),Ct=t("li",null,[o("子組件 "),t("pre",null,`  <slot name="header"></slot>
        `)],-1),yt=[gt,Ct],St={__name:"ch13",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",$t,yt)):m("",!0)]))}},wt={key:0,type:"I"},bt=t("li",null,[t("ul",null,[t("li",null," provide，用於在父組件中定義要提供的數據方法，這些數據可被其子組件注入 "),t("li",null,[o(" 父組件 "),t("pre",null,`import { ref, watch, provide } from "vue";
const provideTest = ref(123);
provide('provideTest', provideTest);
watch(provideTest,(v)=>{
  console.log(v)
})
            `)])])],-1),kt=t("li",null,[t("ul",null,[t("li",null," inject，用於在子組件中獲取父組件提供的數據或方法，Provide與inject的值共用 "),t("li",null,[o(" 子組件 "),t("pre",null,`import { inject, onMounted } from "vue";
const provideTest = inject("provideTest");
onMounted(() => {
  console.log(provideTest.value);
  provideTest.value = 456;
});
            `)])])],-1),qt=[bt,kt],xt={__name:"ch14",props:{title:String},setup(r){const e=i(!1);i(!1);const u=f("provideTest");return _(()=>{console.log("inject收到：來自APP"+u.value),u.value="把APP修改成inject"}),(n,p)=>(l(),s("div",null,[t("h2",{onClick:p[0]||(p[0]=h=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",wt,qt)):m("",!0)]))}},It={key:0,type:"I"},Vt=t("li",null,[o("範例， "),t("pre",null,`  <component :is="currentComponent"></component>
  import FirstComponent from './FirstComponent.vue';
  import SecondComponent from './SecondComponent.vue';
  const currentComponent = ref('FirstComponent');
        `)],-1),At=[Vt],Tt={__name:"ch15",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",It,At)):m("",!0)]))}},jt={key:0,type:"I"},Pt=t("li",null,[o("保留元件狀態或避免多次渲染。 當包裹在 <keep-alive> 標籤中的動態元件切換時，其狀態會被保留，不會被銷毀和重新建立 "),t("pre",null,`  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
        `)],-1),Mt=t("li",null,[o("鉤子 "),t("ul",null,[t("li",null,"activated: 快取元件被啟動時呼叫。"),t("li",null,"deactivated: 快取元件失去啟動狀態時呼叫。")])],-1),Dt=[Pt,Mt],Et={__name:"ch16",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",jt,Dt)):m("",!0)]))}};var Rt={VITE_API_AXIOS_BASE_URL:"使用env",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Wt={key:0,type:"I"},Bt=t("li",null,"在根目錄下建置env資料夾，放置檔案名稱為 .env.環境 的檔案",-1),Ht=t("li",null,[o("在vite.config.js建置 "),t("pre",null,`  import { defineConfig, loadEnv } from 'vite'
  export default defineConfig((command, mode, ssrBuild) => {
    // mode: 目前的模式，可能的取值為 "development" 或 "production"
    // process.cwd(): 傳回目前 Node.js 程序的工作目錄路徑。
    const env = loadEnv(mode, process.cwd())  
  })
            `)],-1),Ut=t("li",null,[o("預設有以下 "),t("ul",null,[t("li",null,".env：通用的環境變量。"),t("li",null,".env.development：開發環境的環境變量。"),t("li",null,".env.production：生產環境的環境變量。"),t("li",null,".env.test：測試環境的環境變量。")])],-1),Ot={__name:"ch17",props:{title:String},setup(r){const e=i(!1);i(!1);const u=i("");return _(()=>{u.value=Rt.VITE_BASIC_APIURL}),(n,p)=>(l(),s("div",null,[t("h2",{onClick:p[0]||(p[0]=h=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",Wt,[t("li",null,[o("設置 "),t("ul",null,[Bt,Ht,t("li",null,"env的引用， const url = `${import.meta.env.VITE_BASIC_APIURL}`; "+a(u.value),1)])]),Ut])):m("",!0)]))}},Nt={key:0,type:"I"},Lt=v(`<li>.capture 修飾符可以將事件處理程序綁定在捕獲階段，即在事件到達目標元素之前捕獲它。 <pre>  &lt;template&gt;
    &lt;div @click.capture=&quot;handleCaptureClick&quot;&gt;
      Outer Div
      &lt;div @click=&quot;handleInnerClick&quot;&gt;Inner Div&lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
        </pre> handleCaptureClick 方法會在點擊 Inner Div 之前被觸發。 </li><li>.stop：呼叫 event.stopPropagation() 阻止事件繼續傳播。 <pre>  &lt;div @click=&quot;handleClick&quot;&gt;
    &lt;button @click.stop&gt;Click Me&lt;/button&gt;
  &lt;/div&gt;
        </pre> handleClick不會被觸發 </li><li>.prevent：呼叫 event.preventDefault() 阻止事件的預設行為，即呼叫 event.preventDefault()。 <pre>  &lt;form @submit.prevent&gt;
    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
        </pre> 表單不會提交 </li><li>.self：只有在事件目標是當前元素自身時才觸發事件。</li><li>.once：事件只會觸發一次，觸發後自動解綁事件處理程序。</li><li>.passive：事件的默認行為立即執行，無需等待事件回調執行完畢，提供性能。</li>`,6),Ft=[Lt],zt={__name:"ch18",props:{title:String},setup(r){const e=i(!1);return i(!1),(u,n)=>(l(),s("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[o(a(r.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),s("ol",Nt,Ft)):m("",!0)]))}},Xt={__name:"frontframe",setup(r){return(e,u)=>(l(),s("div",null,[c(y,{title:"Vue3/Vue2"}),c(q,{title:"Teleport(Vue3)"}),c(xt,{title:"provide/inject (Vue3)"}),c(A,{title:"Vue/TailwindCss/Router/pinia導入"}),c(W,{title:"router&route"}),c(M,{title:"Vuex vs pinia"}),c(H,{title:"props"}),c(F,{title:"父傳子"}),c(G,{title:"子傳父"}),c(tt,{title:"$refs"}),c(ct,{title:"生命週期"}),c(ft,{title:"computed vs watched vs method"}),c(St,{title:"slot"}),c(Tt,{title:"動態組件"}),c(Et,{title:"keep-alive"}),c(Ot,{title:"env的使用"}),c(zt,{title:"修飾符號"})]))}};export{Xt as default};
