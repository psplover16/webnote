<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        Array
        <ul>
          <li>添加新的元素至Array，Arr.push(123)</li>
          <li>
            splice()，用於Arr的插入、刪除、替換元素、修改、返回已刪除的元素
          </li>
          <li>
            <span class="r">
              Arr.splice(要操作的起始索引,要刪除的元素數量,要插入的元素)</span
            >
            <br />
            Array.splice(1,2,"orange")
            從索引1開始，刪除兩個元素，並插入1個ornage元素
          </li>

          <li>
            Arr的轉換
            <br />
            const numbers = [1, 2, 3, 4, 5];
            <ul>
              <li>
                <span class="r">map，將數組的每個元素應用於指定函數</span
                >，並返回一個新的數組，新數組包含了每個元素調用該函數後的結果。
                <br />
                doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
              </li>
              <li>
                <span class="r">filter</span>，方法用於從數組中<span class="r"
                  >過濾</span
                >
                出滿足指定條件的元素，並返回一個新的數組，新數組包含了滿足條件的所有元素。
                <br />
                doubled = numbers.filter(num => num % 2 === 0); // [2, 4]
              </li>
              <li>
                <span class="r">reduce</span>，方法用於將數組的<span class="r"
                  >所有元素歸納（累加）</span
                >
                為一個單一的值，通常是一個數字、字符串或對象。
                <br />
                doubled = numbers.reduce((acc, num) => acc + num, 0); // 15
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Object
        <ul>
          <li>刪除，delete Object.gender // 刪除Object.gender屬性</li>
          <li>
            Object.keys(Object obj).length  物件長度
          </li>
        </ul>
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
