import{r as a,o as s,c as l,a as e,b as c,t as r,n as _,d as u,f as d}from"./index-YQnr2gP5.js";const h={key:0,type:"I"},m=e("li",null,"保留空白和換行符",-1),p=e("li",null,"等寬字體",-1),f=e("li",null,"不自動換行，",-1),v=e("li",null,"屬於block",-1),k=e("li",null,"不解釋html標籤",-1),x=[m,p,f,v,k],N={__name:"ch1",props:{title:String},setup(o){const t=a(!1);return a(!1),(i,n)=>(s(),l("div",null,[e("h2",{onClick:n[0]||(n[0]=S=>t.value=!t.value)},[c(r(o.title)+" ",1),e("div",{class:_(["isShow",t.value?"":"rotate180"])},"^",2)]),t.value?(s(),l("ol",h,x)):u("",!0)]))}},y={__name:"html",setup(o){return(t,i)=>(s(),l("div",null,[d(N,{title:"pre"})]))}};export{y as default};
