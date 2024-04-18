<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        原始類型
        <ul>
          <li>
            {{
              `undefined，變數已被宣告，但尚未賦值，或者表示變數訪問的屬性或索引不存在。預設是undefined，完全`
            }}<span class="r">虛無</span>的意思
          </li>
          <li>
            {{
              `null，表示空的、無效、未定義的值。表示具體的空值，可以賦值給對象。`
            }}<span>有架子、沒紙捲筒</span>
          </li>
          <li>Boolean</li>
          <li>String</li>
          <li>Number</li>
          <li>
            symbol
            <ul>
              <li>ES6導入</li>
              <li>
                const bunny = symbol("可愛的小兔子");
                <br />
                console.log(bunny.description); // 可愛的小兔子
              </li>
              <li>
                不能直接用遍歷、for迴圈撈取，要使用<span class="r"
                  >Object.getOwnPropertySymbols()</span
                >
              </li>
              <li>
                放在物件裡面，當作定義屬性key時，要將symbol的值放在[]當中，不然會被當字串
              </li>
              <li>不能用 . 取得屬性值，要用[]</li>
              <li>
                範例，
             <pre>
const classMate = { 
  [Symbol('宜蓁')] : { score: 70, sleep: '3:00', drink: true }, 
  [Symbol('chita')] : { score: 90, sleep: '20:00', drink:false }, 
  [Symbol('宜蓁')] : { score: 100, sleep: '19:00', drink: false }, 
 } 
 const symbols = Object.getOwnPropertySymbols(classMate); 
 for (const symbol of symbols) { 
  if (symbol.toString() === 'Symbol(宜蓁)') { 
   const value = classMate[symbol]; 
   console.log(value); // { score: 100, sleep: '19:00', drink: false } 
  } 
} 
             </pre>
             for...in 表示key
             <br>
             for...of 表示對象元素
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        物件類型
        <ul>
          <li>Object</li>
          <li>Array</li>
          <li>Function</li>
          <li>Date</li>
          <li>
            Regexp
            <ul>
              範例，身分證字號
              <br />
              <code>
                function isValidTaiwanId(id) {
                <br />
                &emsp;const taiwanIdRegex = /^[A-Z][12]\d{8}$/;
                <br />
                &emsp;return taiwanIdRegex.test(id);
                <br />
                }
              </code>
              <br />
              ^，表示匹配輸入的開始位置。
              <br />
              [A-Z]，表示批妹一個大寫字母。
              <br />
              [12]，表示匹配字符1或2
              <br />
              \d{8}，表示匹配後面8個數字
              <br />
              $，表示匹配輸入的結束位置
            </ul>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: String,
});
const isShow = ref(false);
</script>
