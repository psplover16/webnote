<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <pre>
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 解析 JSON 格式的回應數據
  })
  .then(data => {
    // 在這裡使用從 API 返回的數據
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
        </pre>
      </li>
      <li>
        <ul>
          <li>定義函式
            <pre>
  async function fetchData(url) {
    try {
      // 使用 Fetch API 发起 GET 请求
      const response = await fetch(url);
    
      // 检查响应状态码是否为 200（成功）
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        // 将响应体解析为 JSON 格式
      const data = await response.json();
        // 返回获取到的数据
      return data;
    } catch (error) {
      // 捕获异常并输出错误信息
      console.error('Error fetching data:', error.message);
      // 如果发生错误，返回一个空数组或者其他默认值
      return [];
    }
  }
        </pre>
          </li>
          <li>使用
            <pre>
fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log('Fetched data:', data);
    // 在这里处理获取到的数据
  })
  .catch(error => {
    console.error('Error:', error);
  });
        </pre>
          </li>
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