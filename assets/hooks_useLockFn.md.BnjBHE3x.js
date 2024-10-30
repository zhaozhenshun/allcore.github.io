import{af as h,m as p,p as o,W as l,Q as r,U as n,u as E,q as i,aM as F}from"./chunks/framework.DWZoJ-kx.js";const B={__name:"lockFun-demo",setup(d){const{useLockFn:e,useGlobalApi:s}=window.CoreElement,{$message:a}=s(),c=()=>new Promise(t=>setTimeout(()=>{t()},3e3)),g=e(async t=>{a.info("开始"),await c(),a.success("结束")});return(t,k)=>{const y=h("el-button");return p(),o("div",null,[l(y,{onClick:E(g)},{default:r(()=>k[0]||(k[0]=[n("lock")])),_:1},8,["onClick"])])}}},m=JSON.parse('{"title":"Hook说明","description":"","frontmatter":{},"headers":[],"relativePath":"hooks/useLockFn.md","filePath":"hooks/useLockFn.md"}'),u={name:"hooks/useLockFn.md"},C=Object.assign(u,{setup(d){return(e,s)=>{const a=h("ClientOnly");return p(),o("div",null,[s[0]||(s[0]=i("h1",{id:"hook说明",tabindex:"-1"},[n("Hook说明 "),i("a",{class:"header-anchor vp-link",href:"#hook说明","aria-label":'Permalink to "Hook说明"'},"​")],-1)),s[1]||(s[1]=i("p",null,"异步函数加锁 必须等到异步函数结束后才可执行下一次， CoreButton的防重点击就是基于此hooks的函数",-1)),s[2]||(s[2]=i("h2",{id:"异步枷锁",tabindex:"-1"},[n("异步枷锁 "),i("a",{class:"header-anchor vp-link",href:"#异步枷锁","aria-label":'Permalink to "异步枷锁"'},"​")],-1)),l(a,null,{default:r(()=>[l(B)]),_:1}),s[3]||(s[3]=F(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">el-button</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> @click=&quot;handleClick&quot;&gt;&lt;/el-button&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useLockFn,useGlobalApi } </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@allcore/element&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { $message } </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> useGlobalApi()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ptask</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> ()=&gt;new</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> Promise((resolve)=&gt;setTimeout(()=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">  resolve()</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">},3000))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleClick</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> useLockFn(async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> e</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   $message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;开始&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ptask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   $message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;结束&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">)</span></span></code></pre></div>`,1))])}}});export{m as __pageData,C as default};
