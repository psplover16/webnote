<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        fr，grid專屬單位，剩餘空間占有幾份
      </li>
      <li>
        父層
        <ul>
          <li>display:grid</li>
          <li>grid-template-columns，橫的有幾格，每格大小為多少
            <ul>
              <li>
                grid-template-columns:1fr 2fr 2fr 1fr
              </li>
              <li> grid-template-columns: repeat(3, 1fr);
                <br>
                表示 1fr 1fr 1fr
              </li>
            </ul>
          </li>
          <li>grid-template-rows，直的有幾格，每格大小為多少
            <ul>
              <li>
                grid-template-rows:2fr 1fr 2fr 1fr
              </li>
            </ul>
          </li>
          <li>gap，格子之間的間距</li>
          <li>grid-template-areas，把子項設計好的grid-area名稱，塞入格子中，格子不需要物件，用,表示
            <ul>
              <li>格子還是只能用長方形或正方形</li>
              <li>
                <pre>
grid-template-areas:
  "reds reds greens greens"
  "reds reds greens greens"
  "reds reds . ."
  "yellows blues blues blues";
                </pre>
              </li>
            </ul>
          </li>

        </ul>
      </li>
      <li>
        子層
        <ul>
          <li>grid-column，設定要從垂直格線第幾格至第幾格
            <pre>
grid-column: 1/3; // 表示設定位置為垂直線1~3之間
            </pre>
          </li>
          <li>grid-row，設定要從水平格線第幾格至第幾格
            <pre>
grid-row: 2/4; // 表示設定位置為水平線2~4之間
            </pre>
          </li>
          <li>grid-area，搭配父層的grid-template-areas 一起使用，替元件設定名稱，可以在父格排版</li>
        </ul>
      </li>
      <li>
        <div class="container1">
          <div class="item red">1</div>
          <div class="item green">2</div>
          <div class="item blue">3</div>
          <div class="item yellow">4</div>
        </div>
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

<style lang=scss scoped>
.container1 {
  width: 400px;
  height: 400px;
  background: purple;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: 1fr 1fr 2fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "reds reds greens greens"
    "reds reds greens greens"
    "reds reds . ."
    "yellows blues blues blues";

  // .red {
  //   grid-column: 1/2;
  //   grid-row: 1/4;
  // }

  // .green {
  //   grid-column: 3/4;
  //   grid-row: 1/2;
  // }

  // .blue {
  //   grid-column: 4/5;
  //   grid-row: 1/2;
  // }

  // .yellow {
  //   grid-column: 2/3;
  //   grid-row: 1/2;
  // }

}

// "yellows yellows yellows yellows";
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background: red;
  grid-area: reds;
}

.green {
  background: green;
  grid-area: greens;
}

.blue {
  background: blue;
  grid-area: blues;
}

.yellow {
  background: yellow;
  grid-area: yellows;
}
</style>