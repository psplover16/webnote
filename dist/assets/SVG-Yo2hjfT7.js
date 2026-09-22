import{r as c,o as r,c as s,a as t,b as h,t as o,n as y,d as p,F as k,z as m,e as _,g as u}from"./index-tug10zDy.js";const f={key:0,type:"I"},v=["innerHTML"],w={__name:"ch2",props:{title:String},setup(n){const e=c(!1),a=c(`
        <svg width="200" height="180">
          <!-- g表示群組 -->
          <!-- id表示名稱 -->
          <g id="layer01">
            <!-- rect表示矩形 -->
            <!-- x與y表示左上角的座標 -->
            <!-- rx/ry 表示圓角半徑屬性 -->
            <!-- stroke表示線段顏色 -->
            <!-- stroke-width 表示線段開度 -->
            <!-- fill表示填充的顏色 -->
            <rect
              id="a3"
              x="52"
              y="54"
              rx="20"
              ry="10"
              fill="#FF6CC4"
              stroke="red"
              stroke-width="3"
              width="75"
              height="75"
            />
            <!-- circle表示圓形 -->
            <!-- cx/cy 表示圓心座標位置 -->
            <!-- r表示半徑 -->
            <circle
              id="a2"
              fill="#5CD5FF"
              stroke="#FFFFFF"
              stroke-width="5"
              cx="109.25"
              cy="118"
              r="40.75"
            />
            <!-- 多邊形 -->
            <!-- points表示每個點的座標位置，空格表示斷點 -->
            <!-- 範例，第2/4/6個可刪除 -->
            <polygon
              id="a1"
              fill="#FFB65F"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-miterlimit="10"
              points="
              109.25,112.941
              129.186,147.471
              149.121,182
              109.25,182
              69.378,182
              89.314,147.471
              "
            />
          </g>
          <g id="layer02">
            <!-- ellipse表示橢圓形 -->
            <!-- https://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86 -->
            <ellipse
              fill="#67CE6F"
              stroke="#FFFFFF"
              stroke-width="5"
              stroke-miterlimit="10"
              cx="50"
              cy="50"
              rx="47"
              ry="37.625"
            />
          </g>
        </svg>
`);return(d,l)=>(r(),s("div",null,[t("h2",{onClick:l[0]||(l[0]=i=>e.value=!e.value)},[h(o(n.title)+" ",1),t("div",{class:y(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(r(),s("ol",f,[t("li",{innerHTML:a.value},null,8,v),t("li",null,o(a.value),1)])):p("",!0)]))}},g={key:0,type:"I"},F={class:"border"},S={class:"border"},$={class:"border"},b={__name:"ch3",props:{title:String},setup(n){const e=c(!1),a=c([{name:"M",params:"x,y",contents:"起始點的x,y座標(move to)"},{name:"L",params:"x,y",contents:"從目前點的座標畫直線到指定點的 x,y 座標 ( line to )"},{name:"H",params:"x",contents:"從目前點的座標畫水平直線到指定的 x 軸座標 ( horizontal line to )"},{name:"V",params:"y",contents:"從目前點的座標畫垂直線到指定的 y 軸座標 ( vertical line to )"},{name:"C",params:"x1 y1 x2 y2 x y	",contents:"從目前點的座標畫條貝茲曲線到指定點的 x, y 座標：其中 x1, y1 及 x2, y2 為控制點 ( curve )"},{name:"S",params:"x2 y2 x y",contents:"從目前點的座標畫條反射的貝茲曲線到指定點的 x, y 座標：其中 x2, y2 為反射的控制點 ( smooth curve )"},{name:"Q",params:"x1 y1 x y",contents:"從目前點的座標畫條二次貝茲曲線到指定點的 x, y 座標：其中 x1, y1 為控制點 ( quadratic Bézier curve )"},{name:"T",params:"x,y",contents:"從目前點的座標畫條二次貝茲曲線到指定點的 x, y 座標：其中 x1, y1 為控制點 ( quadratic Bézier curve )"},{name:"A (弧形)",params:"rx ry x-axis-rotation large-arc-flag sweep-flag x y",contents:"從目前點的座標畫個橢圓形到指定點的 x, y 座標：其中 rx, ry 為橢圓形的 x 軸及 y 軸的半徑，x-axis-rotation 是弧線與 x 軸的旋轉角度，large-arc-flag 則設定 1 最大角度的弧線或是 0 最小角度的弧線，sweep-flag 設定方向為 1 順時針方向或 0 逆時針方向 ( Arc )"},{name:"Z",params:"",contents:"關閉路徑，將目前點的座標與第一個點的座標連接起來 ( closepath )"}]);return(d,l)=>(r(),s("div",null,[t("h2",{onClick:l[0]||(l[0]=i=>e.value=!e.value)},[h(o(n.title)+" ",1),t("div",{class:y(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(r(),s("ol",g,[t("li",null,[t("table",null,[(r(!0),s(k,null,m(a.value,(i,x)=>(r(),s("tr",{key:x},[t("td",F,o(i.name),1),t("td",S,o(i.params),1),t("td",$,o(i.contents),1)]))),128))])])])):p("",!0)]))}},C={key:0,type:"I"},V={class:"border"},z={class:"border"},B=t("li",null,[t("svg",null,[t("polyline",{fill:"red",stroke:"green","stroke-width":"10","stroke-linecap":"round","stroke-linejoin":"bevel",points:"83.678,119.133 113.376,89.434 143.075,119.133"}),t("line",{stroke:"red","stroke-dasharray":"2,2,10",x1:"0",y1:"50",x2:"100",y2:"40"})])],-1),L={__name:"ch4",props:{title:String},setup(n){const e=c(!1),a=c([{name:"stroke ",content:"邊框顏色"},{name:"stroke-width",content:"邊框寬度"},{name:"stroke-linecap",content:"邊框端點的屬性(butt(預設)、square(方形)、round(圓角)"},{name:"stroke-linejoin",content:"邊框接合尖角的屬性 (miter(預設)、round(圓角)、bevel())"},{name:"stroke-dasharray",content:"虛線(表示陣列，每兩個數字為一組(長度、間隔)，若為奇數個，則以陣列結尾與陣列開頭為一組)"}]);return(d,l)=>(r(),s("div",null,[t("h2",{onClick:l[0]||(l[0]=i=>e.value=!e.value)},[h(o(n.title)+" ",1),t("div",{class:y(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(r(),s("ol",C,[t("li",null,[t("table",null,[(r(!0),s(k,null,m(a.value,(i,x)=>(r(),s("tr",null,[t("td",V,o(i.name),1),t("td",z,o(i.content),1)]))),256))])]),B])):p("",!0)]))}},G={key:0,type:"I"},N={width:"470",height:"280",style:{"background-color":"pink"}},A=_('<defs><linearGradient id="a1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="5%" stop-color="red"></stop><stop offset="95%" stop-color="yellow"></stop></linearGradient><radialGradient id="a2" cx="30%" cy="40%"><stop offset="5%" stop-color="red"></stop><stop offset="95%" stop-color="yellow"></stop></radialGradient><pattern id="a3" patternUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><rect x="0" y="0" width="25" height="25" stroke="#none" fill="#09f"></rect></pattern></defs><rect x="10" y="20" width="100" height="100" stroke="#000" stroke-width="5" fill="url(#a1)"></rect><circle cx="180" cy="75" r="50" stroke="#000" stroke-width="5" fill="url(#a1)"></circle><rect x="260" y="20" width="100" height="100" stroke="url(#a1)" stroke-width="5" fill="none"></rect><circle cx="430" cy="75" r="50" stroke="#000" stroke-width="5" fill="red"></circle><rect x="10" y="150" width="100" height="100" stroke="#000" stroke-width="5" fill="url(#a2)"></rect><circle cx="180" cy="205" r="50" stroke="#000" stroke-width="5" fill="url(#a2)"></circle><rect x="260" y="150" width="100" height="100" stroke="url(#a2)" stroke-width="5" fill="none"></rect><circle cx="430" cy="205" r="50" stroke="#000" stroke-width="5" fill="url(#a3)"></circle>',9),E=[A],I={__name:"ch5",props:{title:String},setup(n){const e=c(!1);return(a,d)=>(r(),s("div",null,[t("h2",{onClick:d[0]||(d[0]=l=>e.value=!e.value)},[h(o(n.title)+" ",1),t("div",{class:y(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(r(),s("ol",G,[t("li",null,[h(" 漸層 "),(r(),s("svg",N,E))])])):p("",!0)]))}},q={__name:"SVG",setup(n){return(e,a)=>(r(),s("div",null,[u(w,{title:"基礎"}),u(b,{title:"Path"}),u(L,{title:"stroke"}),u(I,{title:"fill"})]))}};export{q as default};
