<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      const a = [0,1,2,3,4,5,6]，由大排到小
      <li>氣泡演算法，不斷重複比較相鄰兩值，來做排序
        <pre>
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length-1-i; j++) {
      if (a[j] < a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
      }
    }
  }
        </pre>
      </li>
      <li>選擇排序法，將陣列分成排序和未排序，在未排序的部分持續找最大或最小，將之交換到已排序的部分
        <pre>
  for (let i = 0; i < a.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > a[maxIndex]) {
        maxIndex = j;
      }
    }
    [a[i], a[maxIndex]] = [a[maxIndex], a[i]];
  }
        </pre>
      </li>
      <li>插入排序法，將陣列分成未排序與排序的部分，將元素一個個由未排列的部分拿到已排列的部分並在已排列的部分排序，直到未排列的陣列為空。</li>
      <!-- <li>桶排序法</li> -->
      <li>費氏數列，0, 1, 1, 2, 3, 5, 8, 13, 21...

        <pre>
function feisi(num) {
  if (num <= 1) {
    return num;
  }
  // 遞迴
  return feisi(num - 1) + feisi(num - 2);

  // for迴圈
  // old+new=now
  // 1+1=2
  // 1+2=3
  // 2+3=5
  // 3+5=8
  // 每次晉級，old變成new, new = new+old
  let oldNum = 0;
  let newNum = 1;
  for (let i = 2; i < num; i++) {
    let tmp = oldNum;
    oldNum = newNum;
    newNum = newNum + tmp;
  }
  return oldNum + newNum;
}          
        </pre>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isShow = ref(false);
const a1 = ref(false)
defineProps({
  title: String,
});




onMounted(() => {

})

</script>
<style lang="scss" scoped></style>