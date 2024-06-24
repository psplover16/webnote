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
            用於Arr的插入、刪除、替換元素、修改、返回已刪除的元素，splice()
            <ul>
              <li>
                <span class="r">
                  Arr.splice(要操作的起始索引,要刪除的元素數量,要插入的元素)</span>
                <br />
                Array.splice(1,2,"orange")
                從索引1開始，刪除兩個元素，並插入1個ornage元素
              </li>
            </ul>
          </li>

          <li>
            Arr的轉換
            <br />
            const numbers = [1, 2, 3, 4, 5];
            <ul>
              <li>
                <span class="r">map，將數組的每個元素應用於指定函數</span>，並 <span class="r">返回</span> 一個新的數組，新數組包含了每個元素調用該函數後的結果。
                <br />
                doubled = numbers.map((num)=>return num*2); // doubled = [2, 4,
                6, 8, 10]
              </li>
              <li>
                <span class="r">filter</span>，方法用於從數組中<span class="r">過濾</span>
                出滿足指定條件的元素，並<span class="r">返回</span>一個新的數組，新數組包含了滿足條件的所有元素。
                <br />
                doubled = numbers.filter(num => num % 2 === 0); // [2, 4]
              </li>
              <li>
                <span class="r">reduce</span>，方法用於將數組的<span class="r">所有元素歸納（累加）</span>
                為一個單一的值，通常是一個數字、字符串或對象。
                <br />
                doubled = numbers.reduce((acc, num) => acc + num, 0); // acc為累加器、num為遍歷的值
              </li>
            </ul>
          </li>
          <li>
            Arr.flat(num=1); // 將特定深度的子陣列扁平化，重新串接成為一新的陣列
          </li>
          <li>陣列合併，arr3 = arr1.concat(arr2)</li>
          <li>
            將陣列中的所有元素，使用參數做分隔，形成字串， arr.join(params_可選)
          </li>
          <li>刪除並返回最後一個元素 Arr.pop();</li>
          <li>
            對陣列排序，sort
            <ul>
              <li>Arr.sort((beforeNum,afterNum)=>beforeNum - afterNum) 升序</li>
              <li>前值若要排序在後值之後，要回傳正數</li>
            </ul>
          </li>
          <li>移除第一個元素，並取得他 array.shift()</li>
          <li>
            將新元素添加到陣列開頭，然後陣列元素會向後移動一位 array.unshift(Str)
          </li>
        </ul>
      </li>
      <li>
        Object
        <ul>
          <li>刪除，delete Object.gender // 刪除Object.gender屬性</li>
          <li>Object.keys(Object obj).length 物件長度</li>
        </ul>
        <ul>
          <li>Object.keys(Object obj) 返回obj的全部的key，型態為Array</li>
          <li>Object.values(Object obj) 返回obj的全部的value，型態為Array</li>
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
