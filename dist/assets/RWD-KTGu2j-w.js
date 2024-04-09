import{r as o,o as i,c as t,a as d,b as v,t as u,n as f,d as n,e as p,g as c}from"./index-H1jzXxoX.js";const _=(e,l)=>{const r=e.__vccOpts||e;for(const[a,s]of l)r[a]=s;return r},m={key:0,type:"I"},h=p('<li data-v-47d53cd7>父層flex容器 <ul data-v-47d53cd7><li data-v-47d53cd7>display:flex</li><li data-v-47d53cd7> flex-flow，flex-direction 與 flex-wrap 的縮寫，所以只要在這前後帶上相對應的值即可。 <ul data-v-47d53cd7><li data-v-47d53cd7>flex-direction <ul data-v-47d53cd7><li data-v-47d53cd7>column</li><li data-v-47d53cd7>row</li></ul></li><li data-v-47d53cd7>flex-wrap（控制子元素是否换行） <ul data-v-47d53cd7><li data-v-47d53cd7>wrap</li><li data-v-47d53cd7>nowrap</li></ul></li></ul></li><li data-v-47d53cd7><ul data-v-47d53cd7><li data-v-47d53cd7>justify-content（主軸上的對齊方式） <ul data-v-47d53cd7><li data-v-47d53cd7>flex-start</li><li data-v-47d53cd7>flex-end</li><li data-v-47d53cd7>center</li><li data-v-47d53cd7>space-between</li><li data-v-47d53cd7>space-around</li></ul></li><li data-v-47d53cd7>align-items（單行，交叉軸上的對齊方式） <ul data-v-47d53cd7><li data-v-47d53cd7>flex-start：項目在交叉軸的起始位置對齊。</li><li data-v-47d53cd7>flex-end：項目在交叉軸的結束位置對齊。</li><li data-v-47d53cd7>center：項目在交叉軸的中間位置對齊。</li><li data-v-47d53cd7>baseline：專案的第一行文字的基線對齊。</li><li data-v-47d53cd7>stretch：項目被拉伸以適應容器。</li></ul></li><li data-v-47d53cd7>align-content（多行，交叉軸上的對齊方式）</li></ul></li></ul></li><li data-v-47d53cd7>放在子層元素 <ul data-v-47d53cd7><li data-v-47d53cd7>flex，縮寫，內含三元素，如果只設定一個則是 flex-grow <ul data-v-47d53cd7><li data-v-47d53cd7>flex-grow: 元件的<span class="r" data-v-47d53cd7>伸展性</span>，是一個數值，當空間分配<span class="r" data-v-47d53cd7>還有剩餘時</span>的當前元件的伸展性，預設值為 0，如果設置為 0 則不會縮放。</li><li data-v-47d53cd7>flex-shrink: 元件的<span class="r" data-v-47d53cd7>收縮性</span>: 是一個數值，當<span class="r" data-v-47d53cd7>空間分配不足</span>時的當前元件的收縮性，預設值為 1，如果設置為 0 則不會縮放。</li><li data-v-47d53cd7>flex-basis: 元件的<span class="r" data-v-47d53cd7>基準值</span>，可使用不同的單位值。它指定了一個項目在彈性容器中的長度，即在不考慮伸縮的情況下，<span class="r" data-v-47d53cd7>項目的初始寬度</span></li></ul></li><li data-v-47d53cd7>order，可以重新定義元件的排列順序，順序會依據數值的大小排列。</li><li data-v-47d53cd7>align-self，用於控制單一 flex 項目在交叉軸上的對齊方式，覆蓋了父容器的 align-items 屬性，而不影響其他項目的佈局 <ul data-v-47d53cd7><li data-v-47d53cd7>auto，繼承父層</li><li data-v-47d53cd7>flex-start：項目在交叉軸的起始位置對齊。</li><li data-v-47d53cd7>flex-end：項目在交叉軸的結束位置對齊。</li><li data-v-47d53cd7>center：項目在交叉軸的中間位置對齊。</li><li data-v-47d53cd7>baseline：專案的第一行文字的基線對齊。</li><li data-v-47d53cd7>stretch：項目被拉伸以適應容器。</li></ul></li></ul></li>',2),w=[h],g={__name:"ch1",props:{title:String},setup(e){const l=o(!1);return(r,a)=>(i(),t("div",null,[d("h2",{onClick:a[0]||(a[0]=s=>l.value=!l.value)},[v(u(e.title)+" ",1),d("div",{class:f(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(i(),t("ol",m,w)):n("",!0),n("",!0)]))}},x=_(g,[["__scopeId","data-v-47d53cd7"]]),b={key:0,type:"I"},k=p(`<li data-v-e4f47454> fr，grid專屬單位，剩餘空間占有幾份 </li><li data-v-e4f47454> 父層 <ul data-v-e4f47454><li data-v-e4f47454>display:grid</li><li data-v-e4f47454>grid-template-columns，橫的有幾格，每格大小為多少 <ul data-v-e4f47454><li data-v-e4f47454> grid-template-columns:1fr 2fr 2fr 1fr </li><li data-v-e4f47454> grid-template-columns: repeat(3, 1fr); <br data-v-e4f47454> 表示 1fr 1fr 1fr </li></ul></li><li data-v-e4f47454>grid-template-rows，直的有幾格，每格大小為多少 <ul data-v-e4f47454><li data-v-e4f47454> grid-template-rows:2fr 1fr 2fr 1fr </li></ul></li><li data-v-e4f47454>gap，格子之間的間距</li><li data-v-e4f47454>grid-template-areas，把子項設計好的grid-area名稱，塞入格子中，格子不需要物件，用,表示 <ul data-v-e4f47454><li data-v-e4f47454>格子還是只能用長方形或正方形</li><li data-v-e4f47454><pre data-v-e4f47454>grid-template-areas:
  &quot;reds reds greens greens&quot;
  &quot;reds reds greens greens&quot;
  &quot;reds reds . .&quot;
  &quot;yellows blues blues blues&quot;;
                </pre></li></ul></li></ul></li><li data-v-e4f47454> 子層 <ul data-v-e4f47454><li data-v-e4f47454>grid-column，設定要從垂直格線第幾格至第幾格 <pre data-v-e4f47454>grid-column: 1/3; // 表示設定位置為垂直線1~3之間
            </pre></li><li data-v-e4f47454>grid-row，設定要從水平格線第幾格至第幾格 <pre data-v-e4f47454>grid-row: 2/4; // 表示設定位置為水平線2~4之間
            </pre></li><li data-v-e4f47454>grid-area，搭配父層的grid-template-areas 一起使用，替元件設定名稱，可以在父格排版</li></ul></li><li data-v-e4f47454><div class="container1" data-v-e4f47454><div class="item red" data-v-e4f47454>1</div><div class="item green" data-v-e4f47454>2</div><div class="item blue" data-v-e4f47454>3</div><div class="item yellow" data-v-e4f47454>4</div></div></li>`,4),y=[k],S={__name:"ch2",props:{title:String},setup(e){const l=o(!1);return(r,a)=>(i(),t("div",null,[d("h2",{onClick:a[0]||(a[0]=s=>l.value=!l.value)},[v(u(e.title)+" ",1),d("div",{class:f(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(i(),t("ol",b,y)):n("",!0)]))}},$=_(S,[["__scopeId","data-v-e4f47454"]]),q={key:0,type:"I"},C=p(`<li>響應式設計 <ul><li>@media (max-width: value) 當視窗寬度不超過某個指定值時套用樣式，瀏覽器視窗的寬度小於等於指定的值時，這些樣式將會套用 </li><li>@media (min-width: value) 瀏覽器視窗的寬度大於等於指定的值時，這些樣式將會被套用</li></ul></li><li>媒體查詢 <br> @media mediatype and (media feature) { /* CSS 样式规则 */ } <br><ul><li>mediatype：媒體類型，例如 all（所有設備）、screen（屏幕）、print（打印機）等。</li><li>media feature：媒體特性，例如 width（視口寬度）、height（視口高度）、orientation（設備方向）等。 <ul>常見媒體特性 <ul><li>width：視口寬度。</li><li>height：視口高度。</li><li>min-width：最小視口寬度。</li><li>max-width：最大視口寬度。</li><li>orientation：設備方向，可以是 landscape（橫向）或 portrait（縱向）。</li><li>aspect-ratio：視口的寬高比。</li><li>resolution：螢幕解析度。</li></ul></ul></li></ul></li><li>rem <pre>html {
  font-size: 16px; /* 設置初始文字大小 */
}
/* 其他元素使用rem設置大小 */
body {
  font-size: 1rem; /* 即 16px */
}
        </pre></li>`,3),I=[C],N={__name:"ch3",props:{title:String},setup(e){const l=o(!1);return(r,a)=>(i(),t("div",null,[d("h2",{onClick:a[0]||(a[0]=s=>l.value=!l.value)},[v(u(e.title)+" ",1),d("div",{class:f(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(i(),t("ol",q,I)):n("",!0)]))}},V={key:0,type:"I"},z=p("<li>word-break，控制長單詞是否換行 <ul><li>normal，使用瀏覽器默認的斷行規則</li><li>break-all，強制單辭斷行</li><li>keep-all，禁止斷行</li></ul></li><li>overflow-wrap，用於控制文本是否斷行，斷行規則與word-break同</li><li>white-space，控制元素內空白字符的處理方式 <ul><li>normal，預設值。連續的空白符會被合併，換行符會被視為空白符，文字會根據需要自動換行。</li><li>nowrap，不允許文字換行，所有的空白符都被視為普通字元。</li><li>pre，保留所有的空白符，但不允許文字換行。</li><li>pre-wrap，保留所有的空白符，但允許文字根據需要換行。</li><li>pre-line，連續的空白符號會被合併，但允許文字根據需要換行。</li></ul></li><li> white-space:pre-wrap; + word-break:break-all; // 強制斷行 </li>",4),B=[z],D={__name:"ch4",props:{title:String},setup(e){const l=o(!1);return(r,a)=>(i(),t("div",null,[d("h2",{onClick:a[0]||(a[0]=s=>l.value=!l.value)},[v(u(e.title)+" ",1),d("div",{class:f(["isShow",l.value?"":"rotate180"])},"^",2)]),l.value?(i(),t("ol",V,B)):n("",!0)]))}},E={__name:"RWD",setup(e){return(l,r)=>(i(),t("div",null,[c(x,{title:"Flexbox(布局方式1)"}),c($,{title:"Grid(布局方式2)"}),c(N,{title:"響應式設計/媒體查詢/rem"}),c(D,{title:"文本自動換行"})]))}};export{E as default};
