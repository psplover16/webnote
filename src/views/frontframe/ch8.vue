<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>父層
        <pre>
  &lt;template&gt;
    &lt;div&gt;
      &lt;ChildComponent :initialCount="count" @increment="handleIncrement" /&gt;
      &lt;button @click="incrementCount"&gt;Increment Count&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;              

  &lt;script&gt;
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
  &lt;/script&gt;
        </pre>
      </li>
      <li>子層
        <ul>
          <li>Vue2-props
            <pre>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;Current Count: {{ count }}&lt;/p&gt;
      &lt;button @click="increment"&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;                

  &lt;script&gt;
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
  &lt;/script&gt;
            </pre>
          </li>
          <li>Vue3-defineProps
            <pre>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;Current Count: {{ count }}&lt;/p&gt;
      &lt;button @click="increment"&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script setup&gt;
    <span class="r">const props = defineProps(['initialCount']);</span>

    const count = ref(props.initialCount);
    <span class="r">const emit = defineEmits(['increment']);</span>
            
    const increment = () => {
      count.value++;
      emit('increment');
    };
  &lt;/script&gt;
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