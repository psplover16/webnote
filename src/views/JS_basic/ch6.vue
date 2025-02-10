<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        Promise是一種用於處理非同步操作的功能(依序處理非同步)，他代表一個非同步操作的最終完成或失敗，並取得其結果。
      </li>
      <li>Pedning 等待中 / Resolved 成功 / Rejected 失敗</li>
      <li>promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r">立即執行</span>並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止
      </li>

      <li>常見的非同步操作有，settimeout、事件監聽、網路請求</li>
      <li>標準使用方法如下
        <br>
        <code>
          // 創建一個promise
          <br>
const mypromise = <span class="r">new Promise((resolve, reject)</span> => {
  <br>
  &emsp;// 開始非同步操作
  <br>
  &emsp;setTimeout(() => {
    <br>
    &emsp; &emsp;const randomNumber = Math.random();
    <br>
    &emsp; &emsp;if (randomNumber > 0.5) {
      <br>
      &emsp;&emsp;&emsp;// 操作成功
      <br>
      &emsp;&emsp; &emsp; resolve(randomNumber);
      <br>
      &emsp; &emsp;} else {
      <br>
      &emsp; &emsp; // 操作失敗
      <br>
      &emsp;&emsp; &emsp;reject(new Error("andom number is less than 0.5"));
      <br>
      &emsp; &emsp; }
    <br>
    &emsp;}, 1000);
  <br>
});
<br>          <br>
// 使用非同步
<br>

mypromise.<span class="r">then</span>((result) => {
        <br>
        &emsp;console.log('Promise resolved with result:', result);
  <br>
}).<span class="r">catch</span>((err) => {
  <br>
  &emsp;console.error('Promise rejected with error:', err);
  <br>
})
        </code>
      </li>
      <li>
        複雜promise範例
        <pre>
const asyncOperation1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Async Operation 1 completed');
    }, 2000);
});


function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Operation 2 completed');
        }, 1500);
    });
}
function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Operation 3 completed');
        }, 1000);
    });
}
// 串聯多個非同步操作
asyncOperation1
    .then((result1) => {
        console.log(result1);
        return asyncOperation2();
    })
    .then((result2) => {
        console.log(result2);
        return asyncOperation3();
    })
    .then((result3) => {
        console.log(result3);
        console.log('All async operations completed');
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
// 同時執行多個非同步操作， 陣列內的function個別執行，陣列內資訊皆收到resolve之後，才會執行then
Promise.all([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
        console.log('All async operations completed');
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
// 得到第一個接受或拒絕時，執行後續
Promise.race([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
        console.log('All async operations completed');
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

// 取得全部的promise
Promise.allSettled([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
        console.log('All async operations completed'); // 跑出陣列 [{status: "fulfilled",value: "Async Operation 1 completed"}]
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
        </pre>
      </li>
      <li>
        <span @click="a1=!a1" class="r">
          順序解析範例，求console.log()順序，點此看答案
        </span>
        <pre>
setTimeout(() => {
    console.log(1)
}, 0);
console.log(2)
const asyncOperation1 = new Promise((resolve, reject) => {
    console.log(3)
    resolve(4)
    console.log(5)
});
const asyncOperation2 = new Promise((resolve, reject) => {
    console.log(6)
    resolve(7)
    console.log(8)
});
asyncOperation1.then((re) => {
    console.log(9)
    console.log(re)
    return asyncOperation2;
    console.log(10)
}).then((r) => {
    console.log(11)
    console.log(r)
})
        </pre>
        <span v-if="a1">
          2/3/5/6/8/9/4/11/7/1
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isShow = ref(false);
defineProps({
  title: String,
});
const a1= ref(false);

onMounted(() => {

})



</script>
