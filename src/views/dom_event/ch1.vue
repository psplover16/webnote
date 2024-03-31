<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">

      <ul>
        獲取
        <li>document.getElementById("")</li>
        <li> document.getElementsByClassName("")</li>
        <li> document.getElementsByTagName("div");</li>
        <li> document.querySelectorAll(".myClass");</li>
      </ul>
      <ul>
        操作
        <li>向父元素末尾添加新元素：parentElement.appendChild(newElement);</li>
        <li>在指定节点之前插入新节点：parentElement.insertBefore(newElement, existingElement);</li>
        <li>移除子元素：parentElement.removeChild(childElement);</li>
        <li>用新节点替换旧节点：parentElement.replaceChild(newElement, oldElement);</li>
      </ul>
      <ul>
        修改
        <br>
        var value = element.getAttribute("attributeName");
        <li>element.setAttribute("attributeName", "value");</li>
        <li>element.innerHTML = "New HTML content";</li>
        <li>element.style.color = "red";</li>
        <li>element.className = "newClass";</li>
        <li>inputElement.value = "new value";</li>
      </ul>
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