<template>
  <!-- <div>
    <ch1 title="Vue3/Vue2" />
    <ch2 title="Teleport(Vue3)" />
    <ch14 title="provide/inject (Vue3)" />
    <ch3 title="Vue/TailwindCss/Router/pinia導入" />
    <ch6 title="router&route" />
    <ch4 title="Vuex vs pinia" />
    <ch7 title="props" />
    <ch8 title="父傳子" />
    <ch9 title="子傳父" />    
    <ch10 title="$refs" />    
    <ch11 title="生命週期" />
    <ch12 title="computed vs watched vs method" />
    <ch13 title="slot" />
    <ch14 title="Teleport" />
    <ch15 title="動態組件" />    
    <ch16 title="keep-alive" />
    <ch17 title="env的使用" />
    <ch18 title="修飾符號" />
  </div> -->
  <ol>
    <li><ch1 title="Vue3/Vue2" /></li>
    <li><ch2 title="Teleport(Vue3)" /></li>
    <li><ch14 title="provide/inject (Vue3)" /></li>
    <li><ch3 title="Vue/TailwindCss/Router/pinia導入" /></li>
    <li><ch19 title="defineExpose與exposed/proxy插件的導入" /></li>
    <li><ch6 title="router&route" /></li>
    <li><ch4 title="Vuex vs pinia" /></li>
    <li><ch7 title="props" /></li>
    <li><ch8 title="父傳子" /></li>
    <li><ch9 title="子傳父" /></li>
    <li><ch10 title="$refs" /></li>
    <li><ch11 title="生命週期" /></li>
    <li><ch12 title="computed vs watched vs method" /></li>
    <li>
      <ch13
        title="slot 與 attrs"
        data-gg="123"
        class="bg-red-500"
        @click="childClick"
      />
    </li>
    <li><ch14 title="provide/inject" /></li>
    <li><ch15 title="動態組件" /></li>
    <li><ch16 title="keep-alive" /></li>
    <li><ch17 title="env的使用" /></li>
    <li><ch18 title="修飾符號" /></li>
    <li><ch5 title="懶加載" /></li>
  </ol>
</template>

<script setup>
import ch1 from "./frontframe/ch1.vue";
import ch2 from "./frontframe/ch2.vue";
import ch3 from "./frontframe/ch3.vue";
import ch4 from "./frontframe/ch4.vue";
import ch5 from "./frontframe/ch5.vue";
import ch6 from "./frontframe/ch6.vue";
import ch7 from "./frontframe/ch7.vue";
import ch8 from "./frontframe/ch8.vue";
import ch9 from "./frontframe/ch9.vue";
import ch10 from "./frontframe/ch10.vue";
import ch11 from "./frontframe/ch11.vue";
import ch12 from "./frontframe/ch12.vue";
import ch13 from "./frontframe/ch13.vue";
import ch14 from "./frontframe/ch14.vue";
import ch15 from "./frontframe/ch15.vue";
import ch16 from "./frontframe/ch16.vue";
import ch17 from "./frontframe/ch17.vue";
import ch18 from "./frontframe/ch18.vue";
import ch19 from "./frontframe/ch19.vue";

const childClick = () => {
  console.log("frontFrame的click事件");
};
</script>
