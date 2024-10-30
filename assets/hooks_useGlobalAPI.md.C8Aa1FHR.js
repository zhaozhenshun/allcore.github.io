import{af as p,m as k,P as d,Q as h,U as t,p as E,q as i,W as l,aM as c}from"./chunks/framework.DWZoJ-kx.js";const g={__name:"globalApi-demo",setup(o){const{useGlobalApi:n}=window.CoreElement,{$message:s}=n(),a=()=>{s.success("获取当前方法属性")};return(u,e)=>{const r=p("core-button");return k(),d(r,{onClick:a},{default:h(()=>e[0]||(e[0]=[t("测试")])),_:1})}}},F=JSON.parse('{"title":"Hook说明","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/useGlobalAPI.md","filePath":"hooks/useGlobalAPI.md"}'),m={name:"hooks/useGlobalAPI.md"},b=Object.assign(m,{setup(o){return(n,s)=>{const a=p("ClientOnly");return k(),E("div",null,[s[0]||(s[0]=i("h1",{id:"hook说明",tabindex:"-1"},[t("Hook说明 "),i("a",{class:"header-anchor vp-link",href:"#hook说明","aria-label":'Permalink to "Hook说明"'},"​")],-1)),s[1]||(s[1]=i("p",null,"主要获取globalProperties挂载全局方法属性、过滤器 $message、$confirm、....等全局方法属性",-1)),s[2]||(s[2]=i("h2",{id:"列子",tabindex:"-1"},[t("列子 "),i("a",{class:"header-anchor vp-link",href:"#列子","aria-label":'Permalink to "列子"'},"​")],-1)),l(a,null,{default:h(()=>[l(g)]),_:1}),s[3]||(s[3]=c(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useGlobalApi } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/hooks&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useGlobalApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	$message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sucess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;获取当前方法属性&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,1))])}}});export{F as __pageData,b as default};