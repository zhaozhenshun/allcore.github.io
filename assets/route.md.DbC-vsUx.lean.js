import{av as e,p as s,aM as t,m as i}from"./chunks/framework.DWZoJ-kx.js";const u=JSON.parse('{"title":"路由挂载","description":"","frontmatter":{},"headers":[],"relativePath":"route.md","filePath":"route.md"}'),r={name:"route.md"};function n(o,a,p,l,h,d){return i(),s("div",null,a[0]||(a[0]=[t(`<h1 id="路由挂载" tabindex="-1">路由挂载 <a class="header-anchor vp-link" href="#路由挂载" aria-label="Permalink to &quot;路由挂载&quot;">​</a></h1><h3 id="第一种方式" tabindex="-1">第一种方式 <a class="header-anchor vp-link" href="#第一种方式" aria-label="Permalink to &quot;第一种方式&quot;">​</a></h3><p>工程的路由挂载主要是动态路由 如果想设置自己的路由在工程菜单中显示、首先配置 系统配置-菜单配置 配置当前src/views对应的目录</p><h3 id="第二种方式" tabindex="-1">第二种方式 <a class="header-anchor vp-link" href="#第二种方式" aria-label="Permalink to &quot;第二种方式&quot;">​</a></h3><p>如果不想配置 只想本地开发本地页面调试模式、可以在根目录 <code>.env</code>文件配置路由</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置多个</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_DEBUG_SIT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/airspace/apply|/resource/ray|/resource/airport&quot;</span></span></code></pre></div><p>但是最终上生产后这些都是失效的 必须还得从系统菜单配置后才可以展示</p>`,7)]))}const k=e(r,[["render",n]]);export{u as __pageData,k as default};
