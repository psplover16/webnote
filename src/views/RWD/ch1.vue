<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>父層flex容器
        <ul>
          <li>display:flex</li>
          <li>
            flex-flow，flex-direction 與 flex-wrap 的縮寫，所以只要在這前後帶上相對應的值即可。
            <ul>
              <li>flex-direction
                <ul>
                  <li>column</li>
                  <li>row</li>
                </ul>
              </li>
              <li>flex-wrap（控制子元素是否换行）
                <ul>
                  <li>wrap</li>
                  <li>nowrap</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>justify-content（主軸上的對齊方式）
                <ul>
                  <li>flex-start</li>
                  <li>flex-end</li>
                  <li>center</li>
                  <li>space-between</li>
                  <li>space-around</li>
                </ul>
              </li>
              <li>align-items（單行，交叉軸上的對齊方式）
                <ul>
                  <li>flex-start：項目在交叉軸的起始位置對齊。</li>
                  <li>flex-end：項目在交叉軸的結束位置對齊。</li>
                  <li>center：項目在交叉軸的中間位置對齊。</li>
                  <li>baseline：專案的第一行文字的基線對齊。</li>
                  <li>stretch：項目被拉伸以適應容器。</li>
                </ul>
              </li>
              <li>align-content（多行，交叉軸上的對齊方式）</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>放在子層元素
        <ul>
          <li>flex，縮寫，內含三元素，如果只設定一個則是 flex-grow
            <ul>
              <li>flex-grow: 元件的<span class="r">伸展性</span>，是一個數值，當空間分配<span class="r">還有剩餘時</span>的當前元件的伸展性，預設值為 0，如果設置為
                0 則不會縮放。</li>
              <li>flex-shrink: 元件的<span class="r">收縮性</span>: 是一個數值，當<span class="r">空間分配不足</span>時的當前元件的收縮性，預設值為
                1，如果設置為 0 則不會縮放。</li>
              <li>flex-basis: 元件的<span class="r">基準值</span>，可使用不同的單位值。它指定了一個項目在彈性容器中的長度，即在不考慮伸縮的情況下，<span
                  class="r">項目的初始寬度</span></li>
            </ul>
          </li>
          <li>order，可以重新定義元件的排列順序，順序會依據數值的大小排列。</li>
          <li>align-self，用於控制單一 flex 項目在交叉軸上的對齊方式，覆蓋了父容器的 align-items 屬性，而不影響其他項目的佈局
            <ul>
              <li>auto，繼承父層</li>
              <li>flex-start：項目在交叉軸的起始位置對齊。</li>
              <li>flex-end：項目在交叉軸的結束位置對齊。</li>
              <li>center：項目在交叉軸的中間位置對齊。</li>
              <li>baseline：專案的第一行文字的基線對齊。</li>
              <li>stretch：項目被拉伸以適應容器。</li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>
    <div class="contatiner" v-if="false">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">10</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
});
const isShow = ref(false);
</script>
<style lang="scss" scope>
.contatiner {
  width: 800px;
  height: 600px;
  background: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}

.item {
  width: 100px;
  height: 100px;
  margin: 10px;
  // flex-basis:10px;
  // flex-grow:1;
  background: blue;
}
</style>