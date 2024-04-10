import{r as u,o as l,c as o,a as t,b as r,t as c,n as d,d as m,e as h,g as a}from"./index-AwYnszdm.js";const v={key:0,type:"I"},_=h("<ul> 獲取 <li>document.getElementById(&quot;&quot;)</li><li> document.getElementsByClassName(&quot;&quot;)</li><li> document.getElementsByTagName(&quot;div&quot;);</li><li> document.querySelectorAll(&quot;.myClass&quot;);</li></ul><ul> 操作 <li>向父元素末尾添加新元素：parentElement.appendChild(newElement);</li><li>在指定节点之前插入新节点：parentElement.insertBefore(newElement, existingElement);</li><li>移除子元素：parentElement.removeChild(childElement);</li><li>用新节点替换旧节点：parentElement.replaceChild(newElement, oldElement);</li></ul><ul> 修改 <br> var value = element.getAttribute(&quot;attributeName&quot;); <li>element.setAttribute(&quot;attributeName&quot;, &quot;value&quot;);</li><li>element.innerHTML = &quot;New HTML content&quot;;</li><li>element.style.color = &quot;red&quot;;</li><li>element.className = &quot;newClass&quot;;</li><li>inputElement.value = &quot;new value&quot;;</li></ul>",3),g=[_],E={__name:"ch1",props:{title:String},setup(i){const e=u(!1);return(s,n)=>(l(),o("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[r(c(i.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),o("ol",v,g)):m("",!0)]))}},q={key:0,type:"I"},w=h(`<li>原生JS <ul><li>冒泡 ： 內部的事件觸發時，向上冒泡到外部，觸發外部事件，有好有壞 <br> 以下範例是點選內部，但會冒泡至外部 <pre>  &lt;ul id=&quot;parent-list&quot;&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
    &lt;li&gt;Item 4&lt;/li&gt;
    &lt;li&gt;Item 5&lt;/li&gt;
  &lt;/ul&gt;

  &lt;script&gt;
    var parentList = document.getElementById(&#39;parent-list&#39;);

    parentList.addEventListener(&#39;click&#39;, function(event) {
      if (event.target.tagName === &#39;LI&#39;) {
        console.log(&#39;Clicked on&#39;, event.target.textContent);
      }
    });
  &lt;/script&gt;
</pre></li><li>綁定 addEventListener</li><li>解除綁定 removeEventListener</li></ul></li><li>Vue <ul><li>this.$el.addEventListener(&#39;click&#39;, this.handleClick); 綁定</li><li>this.$el.removeEventListener(&#39;click&#39;, this.handleClick); 解除綁定</li></ul></li>`,2),f=[w],k={__name:"ch2",props:{title:String},setup(i){const e=u(!1);return(s,n)=>(l(),o("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[r(c(i.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),o("ol",q,f)):m("",!0)]))}},y={key:0,type:"I"},N=t("li",null,[t("pre",null,`fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 解析 JSON 格式的回應數據
  })
  .then(data => {
    // 在這裡使用從 API 返回的數據
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
        `)],-1),C=t("li",null,[t("ul",null,[t("li",null,[r("定義函式 "),t("pre",null,`  async function fetchData(url) {
    try {
      // 使用 Fetch API 发起 GET 请求
      const response = await fetch(url);
    
      // 检查响应状态码是否为 200（成功）
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        // 将响应体解析为 JSON 格式
      const data = await response.json();
        // 返回获取到的数据
      return data;
    } catch (error) {
      // 捕获异常并输出错误信息
      console.error('Error fetching data:', error.message);
      // 如果发生错误，返回一个空数组或者其他默认值
      return [];
    }
  }
        `)]),t("li",null,[r("使用 "),t("pre",null,`fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log('Fetched data:', data);
    // 在这里处理获取到的数据
  })
  .catch(error => {
    console.error('Error:', error);
  });
        `)])])],-1),S=[N,C],I={__name:"ch3",props:{title:String},setup(i){const e=u(!1);return(s,n)=>(l(),o("div",null,[t("h2",{onClick:n[0]||(n[0]=p=>e.value=!e.value)},[r(c(i.title)+" ",1),t("div",{class:d(["isShow",e.value?"":"rotate180"])},"^",2)]),e.value?(l(),o("ol",y,S)):m("",!0)]))}},L={__name:"dom_event",setup(i){return(e,s)=>(l(),o("div",null,[a(E,{title:"DOM節點"}),a(k,{title:"事件冒泡、綁定與解綁"}),a(I,{title:"fetch抓取API範本"})]))}};export{L as default};
