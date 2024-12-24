<template>
  <div>
    <h2 @click="isShow = !isShow">
      {{ title }}
      <div :class="['isShow', isShow ? '' : 'rotate180']">^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>
        <table>
          <tr v-for="(value, index) in pathList" :key="index">
            <td class="border">{{ value.name }}</td>
            <td class="border">{{ value.params }}</td>
            <td class="border">{{ value.contents }}</td>
          </tr>
        </table>
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
const pathList = ref([
  {
    name: "M",
    params: "x,y",
    contents: "起始點的x,y座標(move to)",
  },
  {
    name: "L",
    params: "x,y",
    contents: "從目前點的座標畫直線到指定點的 x,y 座標 ( line to )",
  },
  {
    name: "H",
    params: "x",
    contents:
      "從目前點的座標畫水平直線到指定的 x 軸座標 ( horizontal line to )",
  },
  {
    name: "V",
    params: "y",
    contents: "從目前點的座標畫垂直線到指定的 y 軸座標 ( vertical line to )",
  },
  {
    name: "C",
    params: "x1 y1 x2 y2 x y	",
    contents:
      "從目前點的座標畫條貝茲曲線到指定點的 x, y 座標：其中 x1, y1 及 x2, y2 為控制點 ( curve )",
  },
  {
    name: "S",
    params: "x2 y2 x y",
    contents:
      "從目前點的座標畫條反射的貝茲曲線到指定點的 x, y 座標：其中 x2, y2 為反射的控制點 ( smooth curve )",
  },
  {
    name: "Q",
    params: "x1 y1 x y",
    contents: "從目前點的座標畫條二次貝茲曲線到指定點的 x, y 座標：其中 x1, y1 為控制點 ( quadratic Bézier curve )",
  },
  {
    name: "T",
    params: "x,y",
    contents:
      "從目前點的座標畫條二次貝茲曲線到指定點的 x, y 座標：其中 x1, y1 為控制點 ( quadratic Bézier curve )",
  },
  {
    name: "A",
    params: "rx ry x-axis-rotation large-arc-flag sweep-flag x y",
    contents:
      "從目前點的座標畫個橢圓形到指定點的 x, y 座標：其中 rx, ry 為橢圓形的 x 軸及 y 軸的半徑，x-axis-rotation 是弧線與 x 軸的旋轉角度，large-arc-flag 則設定 1 最大角度的弧線或是 0 最小角度的弧線，sweep-flag 設定方向為 1 順時針方向或 0 逆時針方向 ( Arc )",
  },
  {
    name: "Z",
    params: "",
    contents: "關閉路徑，將目前點的座標與第一個點的座標連接起來 ( closepath )",
  },
]);
</script>
