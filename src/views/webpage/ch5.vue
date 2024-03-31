<template>
  <div>
    <h2 @click="isShow = !isShow">{{ title }}
    <div 
    :class="['isShow',isShow?'':'rotate180']"
    >^</div>
    </h2>
    <ol type="I" v-if="isShow">
      <li>原子序-質子數量</li>
      <li>價電子-最外圈的電子</li>
      <li>每圈電子數量2n²</li>
      <li class="r">質子質量為電子的1840倍</li>
      <li>導體-價電子&lt;4; 半導體-價電子=4;</li>
      <li>價電子又稱束縛電子，若有足夠能量給他，會變自由電子</li>
      <li class="r">自由電子密度 : -10²⁹個/m³</li>
      <li>游離，價電子受外面能量而使其脫離原子的過程</li>
      <li>
        正離子，電中性原子失去電子，帶正電
        <br />
        負離子，電中性原子獲得電子，帶負電
      </li>
      <li></li>
      <li>分子/原子/質子/中子/電子/價電子/自由電子/束縛電子/正離子/負離子</li>
    </ol>
  </div>
</template>
      
  <script setup>
  import {ref} from 'vue'
defineProps({
  title: String,
});
const isShow=ref(false);
</script>