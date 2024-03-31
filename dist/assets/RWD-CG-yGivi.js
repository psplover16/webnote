import{r as o,o as e,c as t,a as s,b as c,t as u,n as p,d as n,e as v,g as d}from"./index-JmwmVLiz.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={key:0,type:"I"},f=v('<li>父層flex容器 <ul><li>display:flex</li><li> flex-flow，flex-direction 與 flex-wrap 的縮寫，所以只要在這前後帶上相對應的值即可。 <ul><li>flex-direction <ul><li>column</li><li>row</li></ul></li><li>flex-wrap（控制子元素是否换行） <ul><li>wrap</li><li>nowrap</li></ul></li></ul></li><li><ul><li>justify-content（主軸上的對齊方式） <ul><li>flex-start</li><li>flex-end</li><li>center</li><li>space-between</li><li>space-around</li></ul></li><li>align-items（單行，交叉軸上的對齊方式） <ul><li>flex-start：項目在交叉軸的起始位置對齊。</li><li>flex-end：項目在交叉軸的結束位置對齊。</li><li>center：項目在交叉軸的中間位置對齊。</li><li>baseline：專案的第一行文字的基線對齊。</li><li>stretch：項目被拉伸以適應容器。</li></ul></li><li>align-content（多行，交叉軸上的對齊方式）</li></ul></li></ul></li><li>放在子層元素 <ul><li>flex，縮寫，內含三元素，如果只設定一個則是 flex-grow <ul><li>flex-grow: 元件的<span class="r">伸展性</span>，是一個數值，當空間分配<span class="r">還有剩餘時</span>的當前元件的伸展性，預設值為 0，如果設置為 0 則不會縮放。</li><li>flex-shrink: 元件的<span class="r">收縮性</span>: 是一個數值，當<span class="r">空間分配不足</span>時的當前元件的收縮性，預設值為 1，如果設置為 0 則不會縮放。</li><li>flex-basis: 元件的<span class="r">基準值</span>，可使用不同的單位值。它指定了一個項目在彈性容器中的長度，即在不考慮伸縮的情況下，<span class="r">項目的初始寬度</span></li></ul></li><li>order，可以重新定義元件的排列順序，順序會依據數值的大小排列。</li><li>align-self，用於控制單一 flex 項目在交叉軸上的對齊方式，覆蓋了父容器的 align-items 屬性，而不影響其他項目的佈局 <ul><li>auto，繼承父層</li><li>flex-start：項目在交叉軸的起始位置對齊。</li><li>flex-end：項目在交叉軸的結束位置對齊。</li><li>center：項目在交叉軸的中間位置對齊。</li><li>baseline：專案的第一行文字的基線對齊。</li><li>stretch：項目被拉伸以適應容器。</li></ul></li></ul></li>',2),w=[f],x={__name:"ch1",props:{title:String},setup(a){const l=o(!1);return(r,i)=>(e(),t("div",null,[s("h2",{onClick:i[0]||(i[0]=m=>l.value=!l.value)},[c(u(a.title)+" ",1),s("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(e(),t("ol",h,w)):n("",!0),n("",!0)]))}},S={key:0,type:"I"},k=v('<li data-v-ada1931d></li><li data-v-ada1931d></li><li data-v-ada1931d><div class="container" data-v-ada1931d><div class="item item-1" data-v-ada1931d>Item 1 (Spanning across all columns)</div><div class="item item-2" data-v-ada1931d>Item 2 (Spanning across 2 rows)</div><div class="item" data-v-ada1931d>Item 3</div><div class="item" data-v-ada1931d>Item 4</div><div class="item" data-v-ada1931d>Item 5</div><div class="item" data-v-ada1931d>Item 6</div><div class="item" data-v-ada1931d>Item 7</div><div class="item" data-v-ada1931d>Item 8</div><div class="item" data-v-ada1931d>Item 9</div></div></li>',3),g=[k],$={__name:"ch2",props:{title:String},setup(a){const l=o(!1);return(r,i)=>(e(),t("div",null,[s("h2",{onClick:i[0]||(i[0]=m=>l.value=!l.value)},[c(u(a.title)+" ",1),s("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(e(),t("ol",S,g)):n("",!0)]))}},b=_($,[["__scopeId","data-v-ada1931d"]]),y={key:0,type:"I"},I=v(`<li>響應式設計 <ul><li>@media (max-width: value) 當視窗寬度不超過某個指定值時套用樣式，瀏覽器視窗的寬度小於等於指定的值時，這些樣式將會套用 </li><li>@media (min-width: value) 瀏覽器視窗的寬度大於等於指定的值時，這些樣式將會被套用</li></ul></li><li>媒體查詢 <br> @media mediatype and (media feature) { /* CSS 样式规则 */ } <br><ul><li>mediatype：媒體類型，例如 all（所有設備）、screen（屏幕）、print（打印機）等。</li><li>media feature：媒體特性，例如 width（視口寬度）、height（視口高度）、orientation（設備方向）等。 <ul>常見媒體特性 <ul><li>width：視口寬度。</li><li>height：視口高度。</li><li>min-width：最小視口寬度。</li><li>max-width：最大視口寬度。</li><li>orientation：設備方向，可以是 landscape（橫向）或 portrait（縱向）。</li><li>aspect-ratio：視口的寬高比。</li><li>resolution：螢幕解析度。</li></ul></ul></li></ul></li><li>rem <pre>html {
  font-size: 16px; /* 設置初始文字大小 */
}
/* 其他元素使用rem設置大小 */
body {
  font-size: 1rem; /* 即 16px */
}
        </pre></li>`,3),C=[I],N={__name:"ch3",props:{title:String},setup(a){const l=o(!1);return(r,i)=>(e(),t("div",null,[s("h2",{onClick:i[0]||(i[0]=m=>l.value=!l.value)},[c(u(a.title)+" ",1),s("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(e(),t("ol",y,C)):n("",!0)]))}},V={key:0,type:"I"},z=v("<li>word-break，控制長單詞是否換行 <ul><li>normal，使用瀏覽器默認的斷行規則</li><li>break-all，強制單辭斷行</li><li>keep-all，禁止斷行</li></ul></li><li>overflow-wrap，用於控制文本是否斷行，斷行規則與word-break同</li><li>white-space，控制元素內空白字符的處理方式 <ul><li>normal，預設值。連續的空白符會被合併，換行符會被視為空白符，文字會根據需要自動換行。</li><li>nowrap，不允許文字換行，所有的空白符都被視為普通字元。</li><li>pre，保留所有的空白符，但不允許文字換行。</li><li>pre-wrap，保留所有的空白符，但允許文字根據需要換行。</li><li>pre-line，連續的空白符號會被合併，但允許文字根據需要換行。</li></ul></li><li> white-space:pre-wrap; + word-break:break-all; // 強制斷行 </li>",4),B=[z],D={__name:"ch4",props:{title:String},setup(a){const l=o(!1);return(r,i)=>(e(),t("div",null,[s("h2",{onClick:i[0]||(i[0]=m=>l.value=!l.value)},[c(u(a.title)+" ",1),s("div",{class:p(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(e(),t("ol",V,B)):n("",!0)]))}},F={__name:"RWD",setup(a){return(l,r)=>(e(),t("div",null,[d(x,{title:"Flexbox(布局方式1)"}),d(b,{title:"Grid(布局方式2)"}),d(N,{title:"響應式設計/媒體查詢/rem"}),d(D,{title:"文本自動換行"})]))}};export{F as default};
