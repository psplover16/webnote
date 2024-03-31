<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>用於將組件內的內容渲染到指定的目標節點上，而不受組件層次影響</li>
      <li>
        <pre>
          <code>
&lt;template&gt;       
  &lt;teleport :to="teleportTarget"&gt;
  &lt;!-- 要渲染的内容 --&gt;
  &lt;/teleport&gt;
&lt;/template&gt;

&lt;script&gt;
export default {        
  data() {          
    return {            
      teleportTarget: document.getElementById('teleport-container')            
      };          
    }        
};      
&lt;/script&gt;
          </code>
        </pre>
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