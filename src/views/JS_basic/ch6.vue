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
      <li>
        promise內部執行是同步的，當創建promise時，其執行器函數會<span class="r"
          >立即執行</span
        >並且在執行器函數內部的代碼都是同步執行，直到遇到非同步操作或是返回一個promise對象為止
      </li>
      <li>常見的非同步操作有，settimeout、事件監聽、網路請求</li>
      <li>
        <button @click="thenPromise">使用then方式觸發Promise</button>
        <button @click="tryCatchPromise">使用tryCatch觸發Promise</button>
        <button @click="multipleThenPromise">
          使用then方式依序使用promise
        </button>
        <button @click="allPromise">
          同時執行多個非同步操作，
          陣列內的function個別執行，陣列內資訊皆收到resolve之後，才會執行then
        </button>
        <button @click="getFirstPromiseData">
          得到第一個接受或拒絕時，執行後續
        </button>
        <button @click="getAllPromise">取得全部的promise</button>
      </li>
      <li>
        <span @click="a1 = !a1" class="r">
          順序解析範例，求console.log()順序，點此看答案
        </span>
        <pre>
  setTimeout(() => {
    console.log(1);
  }, 0);
  console.log(2);

  const asyncOperation2 = new Promise((resolve, reject) => {
    console.log(6);
    resolve(7);
    console.log(8);
  });

  const asyncOperation1 = new Promise((resolve, reject) => {
    console.log(3);
    resolve(4);
    console.log(5);
  });

  asyncOperation1
    .then((re) => {
      console.log(9);
      console.log(re);
      return asyncOperation2;
      console.log(10);
    })
    .then((r) => {
      console.log(11);
      console.log(r);
    });
        </pre>
        <span v-if="a1"> 2/6/8/3/5/9/4/11/7/1 </span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const isShow = ref(false);
const props = defineProps({
  title: String,
});
const a1 = ref(false);

// 創建一個promise，在創建時，promise內部會立即執行，創建後，就固定結果了
// const mypromise = new Promise((resolve, reject) => {
//   // 開始非同步操作
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber > 0.5) {
//       // 操作成功
//       console.log("success > 0.5");
//       resolve(randomNumber);
//     } else {
//       // 操作失敗
//       reject(new Error("random number is less than 0.5"));
//     }
//   }, 1000);
// });
// 避免一開始就創建，用函數的方式阻止
const mypromise = () => {
  return new Promise((resolve, reject) => {
    // 開始非同步操作
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        console.log("success > 0.5");
        resolve(randomNumber);
      } else {
        console.log("success < 0.5");
        reject(new Error("random number is less than 0.5"));
      }
    }, 1000);
  });
};
// 使用then方式觸發Promise
const thenPromise = async () => {
  // mypromise
  mypromise()
    .then((result) => {
      console.log("Promise resolved with result:", result);
    })
    .catch((err) => {
      console.error("Promise rejected with error:", err);
    });
};
// 使用tryCatch觸發Promise
const tryCatchPromise = async () => {
  try {
    // let data = await mypromise;
    let data = await mypromise();
    console.log(data);
  } catch (err) {
    console.log("錯誤", err);
  }
};
//

/**
 * 多重Promise使用
 * 設定多重promise
 */
const asyncOperation1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async Operation 1 completed");
  }, 2000);
});

function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Operation 2 completed");
    }, 1500);
  });
}
function asyncOperation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Operation 3 completed");
    }, 1000);
  });
}
// 使用then方式依序使用promise
const multipleThenPromise = () => {
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
      console.log("All async operations completed");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
// 同時執行多個非同步操作， 陣列內的function個別執行，陣列內資訊皆收到resolve之後，才會執行then
const allPromise = () => {
  Promise.all([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
      console.log("All async operations completed");
      console.log("Results:", results);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
// 得到第一個接受或拒絕時，執行後續
const getFirstPromise = () => {
  return Promise.race([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
      console.log("All async operations completed");
      console.log("Results:", results);
      return results;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
const getFirstPromiseData = async () => {
  console.log(await getFirstPromise());
};
// 取得全部的promise
const getAllPromise = () => {
  Promise.allSettled([asyncOperation1, asyncOperation2(), asyncOperation3()])
    .then((results) => {
      console.log("All async operations completed"); // 跑出陣列 [{status: "fulfilled",value: "Async Operation 1 completed"}]
      console.log("Results:", results);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

onMounted(async () => {});
</script>

<style coped>
button {
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid black;
}
</style>
