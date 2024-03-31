<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>原生JS
        <ul>
          <li>冒泡 ： 內部的事件觸發時，向上冒泡到外部，觸發外部事件，有好有壞
            <br>
            以下範例是點選內部，但會冒泡至外部
            <pre>
  &lt;ul id="parent-list"&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
    &lt;li&gt;Item 4&lt;/li&gt;
    &lt;li&gt;Item 5&lt;/li&gt;
  &lt;/ul&gt;

  &lt;script&gt;
    var parentList = document.getElementById('parent-list');

    parentList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        console.log('Clicked on', event.target.textContent);
      }
    });
  &lt;/script&gt;
</pre>
          </li>
          <li>綁定 addEventListener</li>
          <li>解除綁定 removeEventListener</li>
        </ul>
      </li>
      <li>Vue
        <ul>
          <li>this.$el.addEventListener('click', this.handleClick);  綁定</li>
          <li>this.$el.removeEventListener('click', this.handleClick);  解除綁定</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
});
const isShow = ref(false);
</script>