import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const m='{"title":"\u4ECE\u5173\u8054\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u5F00\u53D1\u7406\u89E3vue\u4E2Dwatcher\u6267\u884C\u987A\u5E8F queueWatcher","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u660E\u786E\u9700\u6C42","slug":"\u660E\u786E\u9700\u6C42"},{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898"},{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848"},{"level":2,"title":"\u5F15\u51FA\u7684\u601D\u8003","slug":"\u5F15\u51FA\u7684\u601D\u8003"},{"level":2,"title":"\u7ED3\u5408\u6E90\u7801\u5206\u6790\u539F\u56E0","slug":"\u7ED3\u5408\u6E90\u7801\u5206\u6790\u539F\u56E0"},{"level":3,"title":"\u5206\u6790\u60C5\u5F62\u4E00\uFF1Aparams \u5728\u524D","slug":"\u5206\u6790\u60C5\u5F62\u4E00\uFF1Aparams-\u5728\u524D"},{"level":3,"title":"\u5206\u6790\u60C5\u5F62\u4E8C\uFF1Aparams \u5728\u540E","slug":"\u5206\u6790\u60C5\u5F62\u4E8C\uFF1Aparams-\u5728\u540E"},{"level":2,"title":"\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA","slug":"\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA"},{"level":3,"title":"Watcher","slug":"watcher"},{"level":2,"title":"\u4F9D\u8D56\u6536\u96C6","slug":"\u4F9D\u8D56\u6536\u96C6"},{"level":2,"title":"\u4F9D\u8D56\u6D3E\u53D1","slug":"\u4F9D\u8D56\u6D3E\u53D1"}],"relativePath":"FE-Framework/Vue/vue-tutorial/vue-practice-3-watch-selector.md"}',p={},o=t(`<h1 id="\u4ECE\u5173\u8054\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u5F00\u53D1\u7406\u89E3vue\u4E2Dwatcher\u6267\u884C\u987A\u5E8F-queuewatcher" tabindex="-1">\u4ECE\u5173\u8054\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u5F00\u53D1\u7406\u89E3<code>vue</code>\u4E2D<code>watcher</code>\u6267\u884C\u987A\u5E8F <code>queueWatcher</code> <a class="header-anchor" href="#\u4ECE\u5173\u8054\u7684\u9009\u62E9\u5668\u7EC4\u4EF6\u5F00\u53D1\u7406\u89E3vue\u4E2Dwatcher\u6267\u884C\u987A\u5E8F-queuewatcher" aria-hidden="true">#</a></h1><h2 id="\u660E\u786E\u9700\u6C42" tabindex="-1">\u660E\u786E\u9700\u6C42 <a class="header-anchor" href="#\u660E\u786E\u9700\u6C42" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5F00\u53D1\u9700\u6C42\uFF1A\u5C06\u4EA7\u54C1\u3001\u9879\u76EE\u3001\u8FED\u4EE3\u4E09\u4E2A\u4E0B\u62C9\u6846\u9009\u62E9\u5668\u5C01\u88C5\u6210\u4E00\u4E2A\u8054\u52A8\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u7C7B\u4F3C\u4E0B\u5217\u5E03\u5C40</p><div class="language-"><pre><code>---------------------------------------------
| \u8BF7\u9009\u62E9\u4EA7\u54C1 V | \u8BF7\u9009\u62E9\u9879\u76EE V | \u8BF7\u9009\u62E9\u8FED\u4EE3 V |
---------------------------------------------
</code></pre></div><p>\u8981\u6C42\uFF1A</p><ol><li>\u4EA7\u54C1\u9009\u62E9\u5668\u6539\u53D8\u65F6\uFF1A</li><li>\u5982\u679C\u9009\u4E2D\u67D0\u4E2A\u4EA7\u54C1\uFF0C\u6839\u636E\u4EA7\u54C1id\uFF0C\u91CD\u65B0\u8BF7\u6C42\u9879\u76EE\u4E0B\u62C9\u6570\u636E\uFF0C\u5E76\u4E14\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u9879\u76EE\u548C\u8FED\u4EE3\u9009\u62E9\u5668</li><li>\u5982\u679C\u4EA7\u54C1\u9009\u62E9\u5668\u662F\u7F6E\u7A7A\uFF0C\u5219\u9879\u76EE\u7684\u4E0B\u63A5\u6570\u636E\u548C\u8FED\u4EE3\u7684\u4E0B\u63A5\u6570\u636E\u7F6E\u4E3A\u7A7A\u6570\u7EC4\uFF0C\u540C\u65F6\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u9879\u76EE\u548C\u8FED\u4EE3</li><li>\u9879\u76EE\u9009\u62E9\u5668\u6539\u53D8\u65F6\uFF1A</li><li>\u5982\u679C\u662F\u9009\u4E2D\u4E86\u67D0\u4E2A\u9879\u76EE\uFF0C\u6839\u636E\u9879\u76EEid\uFF0C\u91CD\u65B0\u8BF7\u6C42\u8FED\u4EE3\u4E0B\u62C9\u6570\u636E\uFF0C\u5E76\u4E14\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u8FED\u4EE3\u503C</li><li>\u5982\u679C\u662F\u9879\u76EE\u9009\u62E9\u5668\u7F6E\u7A7A\uFF0C\u5219\u540C\u65F6\u5C06\u8FED\u4EE3\u4E0B\u63A5\u6570\u636E\u7F6E\u4E3A\u7A7A\u6570\u7EC4\uFF0C\u5E76\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u8FED\u4EE3\u503C</li><li>\u4E09\u4E2A\u9009\u62E9\u5668\u4F5C\u4E3A\u6574\u4F53\uFF0C\u5F53\u4E00\u6B21\u6539\u53D8\u65F6\u5BF9\u5916\u89E6\u53D1\u4E00\u6B21 emit(&#39;select-change&#39;) \u4E8B\u4EF6\u3002</li></ol><p>\u5728 HMTL \u7ED3\u6784\u4E0A\uFF0C\u5982\u679C\u4F7F\u7528 vue template \u5199\uFF0C\u5927\u81F4\u5982\u4E0B\uFF0C\u4F7F\u7528\u4E09\u4E2A el-select \u9009\u62E9\u5668\u7EC4\u4EF6\u5B9E\u73B0\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selector<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selector-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon iconfont-hep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE726">&amp;#xe726;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params.product_id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>productItem<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9\u4EA7\u54C1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">filterable</span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(v) =&gt; onSelectChange(<span class="token punctuation">&#39;</span>product<span class="token punctuation">&#39;</span>, v)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in productSelectData<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selector-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon iconfont-hep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE72C">&amp;#xe72c;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params.project_id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projectItem<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9\u9879\u76EE<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(v) =&gt; onSelectChange(<span class="token punctuation">&#39;</span>project<span class="token punctuation">&#39;</span>, v)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in projectSelectData<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selector-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon iconfont-hep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE733">&amp;#xe733;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>params.sprint_id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sprintItem<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u9009\u62E9\u8FED\u4EE3<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(v) =&gt; onSelectChange(<span class="token punctuation">&#39;</span>sprint<span class="token punctuation">&#39;</span>, v)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in sprintSelectData<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        {{ item.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;productProjectSprintSelector&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">product_id</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">project_id</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sprint_id</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">productSelectData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">projectSelectData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sprintSelectData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onSelectChange</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;select change type: %s, value: %s&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;select-change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u5728\u8FD9\u4E2A\u8054\u52A8\u9009\u62E9\u5668\u7684\u4F7F\u7528\u573A\u666F\uFF0C\u901A\u5E38\u4F5C\u4E3A\u5217\u8868\u6570\u636E\u7684\u7B5B\u9009\u5668\uFF0C\u67D0\u4E2A\u9009\u62E9\u503C\u53D8\u5316\u540E\uFF0C\u53EF\u91CD\u65B0\u8BF7\u6C42\u5217\u8868\u6570\u636E\u3002</p><p>\u5B9E\u73B0\u7684\u96BE\u70B9\u5728\u4E8E\u7B2C\u4E09\u70B9\uFF1A\u4E09\u4E2A\u9009\u62E9\u5668\u4F5C\u4E3A\u6574\u4F53\uFF0C\u5F53\u4E00\u6B21\u6539\u53D8\u65F6\u5BF9\u5916\u89E6\u53D1\u4E00\u6B21 emit(&#39;select-change&#39;) \u4E8B\u4EF6\uFF0Cemit \u4E8B\u4EF6\u89E6\u53D1\u80AF\u5B9A\u5728 onSelectChange \u51FD\u6570\u4E2D\u5904\u7406\u3002</p><p>\u4F46\u77DB\u76FE\u70B9\u5728\u4E8E\uFF1A</p><ul><li>\u5F53\u4EA7\u54C1\u9009\u62E9\u6539\u53D8\u65F6\uFF0C\u56E0\u4E3A\u8981\u6C42\u91CD\u7F6E\u5DF2\u9009\u62E9\u7684\u9879\u76EE\u548C\u8FED\u4EE3\uFF0C\u6B64\u65F6\u4F1A\u5BFC\u81F4 onSelectChange \u4E8B\u4EF6\u5206\u522B\u89E6\u53D1\u4E09\u6B21\uFF0C\u4E5F\u5C31\u540C\u65F6\u5411\u5916\u89E6\u53D1\u4E86\u4E09\u6B21 emit \u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u5916\u90E8\u5237\u65B0\u5217\u8868\u7684\u6570\u636E\u65F6\u53D1\u9001\u4E86\u4E09\u6B21 http \u8BF7\u6C42\u3002</li><li>\u540C\u6837\u7684\uFF0C\u5F53\u9879\u76EE\u9009\u62E9\u6539\u53D8\u65F6\uFF0C\u8981\u6C42\u91CD\u7F6E\u5DF2\u9009\u62E9\u7684\u8FED\u4EE3\uFF0C\u6B64\u65F6\u4F1A\u5BFC\u81F4 onSelectChange \u4E8B\u4EF6\u89E6\u53D1\u4E8C\u6B21\uFF0C\u4E5F\u5C31\u540C\u65F6\u5411\u5916\u89E6\u53D1\u4E86\u4E8C\u6B21 emit \u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u5916\u90E8\u5237\u65B0\u5217\u8868\u6570\u636E\u65F6\u53D1\u9001\u4E86\u4E24\u6B21\u8BF7\u6C42\u3002</li></ul><p>\u4F46\u5B9E\u9645\u9700\u6C42\u662F\u4EA7\u54C1\u6539\u53D8\u6216\u8005\u9879\u76EE\u6539\u53D8\uFF0C\u8981\u6C42\u5BF9\u5916\u53EA\u89E6\u53D1\u4E00\u6B21\u5217\u8868\u6570\u636E\u66F4\u65B0\uFF0C\u800C\u8981\u5C4F\u853D\u6389\u5176\u5173\u8054\u91CD\u7F6E\u529F\u80FD\u5F15\u8D77\u4E8B\u4EF6\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u6700\u7EC8\u7684\u89E3\u51B3\u65B9\u6848\u662F\u53D6\u6D88\u5728 el-select \u4E0A\u4F7F\u7528 onSelectChange \u4E8B\u4EF6\u6765\u5904\u7406\uFF0C\u800C\u4F7F\u7528 watch \u76D1\u542C\u4E8B\u4EF6\u5904\u7406\u3002</p><div class="language-js"><pre><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;params.product_id&#39;</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>product_id <span class="token operator">=</span> v <span class="token comment">// \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>project_id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>sprint_id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>projectSelectList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sprintSelectList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    v <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">httpGetSelectDataForProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&#39;params.project_id&#39;</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>project_id <span class="token operator">=</span> v <span class="token comment">// \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>sprint_id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sprintSelectList<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    v <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">httpGetSelectDataForSprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&#39;params.sprint_id&#39;</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>sprint_id <span class="token operator">=</span> v <span class="token comment">// \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;select-change&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>v <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u5F15\u51FA\u7684\u601D\u8003" tabindex="-1">\u5F15\u51FA\u7684\u601D\u8003 <a class="header-anchor" href="#\u5F15\u51FA\u7684\u601D\u8003" aria-hidden="true">#</a></h2><p>\u5728\u5C1D\u8BD5\u627E\u5230\u4E0A\u9762\u4F7F\u7528 watch \u89E3\u51B3\u9700\u6C42\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6539\u53D8 <code>params</code> \u76D1\u542C\u4EE3\u7801\u7684\u987A\u5E8F\uFF0C\u5219\u4F1A\u5BFC\u81F4\u4E0D\u540C\u7684\u7ED3\u679C\uFF0C\u4F1A\u548C\u4F7F\u7528 <code>onSelectChange</code> \u4E00\u6837\u5BF9\u5916\u89E6\u53D1\u591A\u6B21 <code>emit</code>\u3002</p><div class="language-"><pre><code>watch: {
+ params: {
+   deep: true,
+   handler(v) {
+     this.$emit(&#39;select-change&#39;, { ...v })   
+   },  
+ }
  &#39;params.product_id&#39;(v) {
    this.params.product_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
    this.params.project_id = &#39;&#39;
    this.params.sprint_id = &#39;&#39;
    this.projectSelectList = []
    this.sprintSelectList = []
    v ? this.httpGetSelectDataForProject() : null
  },
  &#39;params.project_id&#39;(v) {
    this.params.project_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
    this.params.sprint_id = &#39;&#39;
    this.sprintSelectList.value = []
    v ? this.httpGetSelectDataForSprint() : null
  },
  &#39;params.sprint_id&#39;(v) {
    this.params.sprint_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
  },
- //  params: {
- //    deep: true,
- //    handler(v) {
- //      this.$emit(&#39;on-select-change&#39;, { ...v })
- //    },
- //  },
},
</code></pre></div><p>\u4E3A\u4E86\u5F04\u6E05\u695A\u8FD9\u79CD\u53D8\u5316\u7684\u539F\u56E0\uFF0C\u518D\u53BB\u6252\u6252 <code>vue</code> \u6E90\u7801\u4E2D\u5BF9 <code>Wathcer</code> \u7684\u5B9E\u73B0\uFF0C\u52A0\u6DF1\u4E86\u5BF9 <code>vue</code> \u5F02\u6B65\u6E32\u67D3\u7684\u7406\u89E3\u3002</p><h2 id="\u7ED3\u5408\u6E90\u7801\u5206\u6790\u539F\u56E0" tabindex="-1">\u7ED3\u5408\u6E90\u7801\u5206\u6790\u539F\u56E0 <a class="header-anchor" href="#\u7ED3\u5408\u6E90\u7801\u5206\u6790\u539F\u56E0" aria-hidden="true">#</a></h2><p>\u5F53\u67D0\u4E2A\u9009\u62E9\u5668\u9009\u62E9\u503C\u6539\u53D8\u65F6\uFF0C\u7531\u4E8E v-model \u7ED1\u5B9A\u7684\u539F\u56E0\uFF0C\u4F1A\u89E6\u53D1\u7ED1\u5B9A\u5C5E\u6027\u7684 <code>setter</code>\uFF0C\u5728 <code>setter</code> \u51FD\u6570\u4E2D\u4F1A\u6267\u884C <code>dep.notify()</code> \u6D3E\u53D1\u4F9D\u8D56\u66F4\u65B0\u3002\u6700\u7EC8\u5728\u6267\u884C <code>watcher.update()</code>\u51FD\u6570\u4E2D <code>queueWatcher(this)</code> \u51FD\u6570\u3002</p><p>\u6838\u5FC3\u903B\u8F91 queueWatcher \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token comment">// \u5F53 flushSchedulerQueue \u6B63\u8FDB\u6267\u884C\u65F6\uFF0C\u6D3E\u53D1\u4E86\u4F9D\u8D56\u66F4\u65B0\uFF0C\u5219\u89C6 watcher.id \u7684\u5148\u540E\u63D2\u5165\u5230\u961F\u5217\u672A\u6267\u884C\u7684\u4EFB\u52A1\u4E2D</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u904D\u5386 queue \u961F\u4F0D\u4E2D\u7684 watcher\uFF0C\u8C03\u7528 watcher.run \u51FD\u6570\u6267\u884C watcher.cb.call(this.vm, value, oldValue);</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF0C\u5404\u4E2A\u5C5E\u6027\u4EA7\u751F\u7684 watcher \u5206\u522B <code>params_watcher / product_watcher / project_watcher / sprint_watcher</code>\u3002</p><p>\u6240\u4EE5\u5982\u679C\u5BF9 params \u7684\u76D1\u542C\u653E\u5728\u6700\u524D\u9762\uFF0C\u90A3\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u987A\u5E8F\u4E3A\uFF1A</p><blockquote><p>\u8FD9\u91CC\u5FFD\u7565\u7236\u7EC4\u4EF6\u53CA\u6E32\u67D3render_watcher \u7684id\uFF0C\u5B9E\u9645\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u53EF\u80FD\u4E0D\u662F\u8FD9\u4E2A\u503C\uFF0C\u6B64\u5904\u4EC5\u5206\u6790\u65B9\u4FBF\u5B9A\u4E49\u8BE5\u7EC4\u4EF6\u5185 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a>\uFF0C\u4EC5\u4E3A\u540E\u7EED\u8BF4\u660E <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u5BF9 watcher.cb \u6267\u884C\u987A\u5E8F\u7684\u5F71\u54CD\uFF0C</p></blockquote><div class="language-"><pre><code>// \u60C5\u5F62\u4E00\uFF1Aparams \u5728\u524D
params_wathcer.id = 1
product_wathcer.id = 2
project_wathcer.id = 3
sprint_watcher.id = 4
</code></pre></div><p>\u5982\u679C\u628A\u5BF9 params \u7684\u76D1\u542C\u653E\u5728\u6700\u540E\u9762\uFF0C\u90A3\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u987A\u5E8F\u4E3A\uFF1A</p><div class="language-"><pre><code>// \u60C5\u5F62\u4E8C\uFF1Aparams \u5728\u540E
product_wathcer.id = 1
project_wathcer.id = 2
sprint_watcher.id = 3
params_wathcer.id = 4
</code></pre></div><p>\u6A21\u62DF\u5F53\u524D\u5BF9\u4EA7\u54C1\u9009\u62E9\u5668\u8FDB\u884C\u4E0B\u62C9\u9009\u62E9\u503C\u3002</p><div class="language-"><pre><code>---------------------------------------------
| \u8BF7\u9009\u62E9\u4EA7\u54C1 V | \u8BF7\u9009\u62E9\u9879\u76EE V | \u8BF7\u9009\u62E9\u8FED\u4EE3 V |
---------------------------------------------
</code></pre></div><h3 id="\u5206\u6790\u60C5\u5F62\u4E00\uFF1Aparams-\u5728\u524D" tabindex="-1">\u5206\u6790\u60C5\u5F62\u4E00\uFF1Aparams \u5728\u524D <a class="header-anchor" href="#\u5206\u6790\u60C5\u5F62\u4E00\uFF1Aparams-\u5728\u524D" aria-hidden="true">#</a></h3><div class="language-"><pre><code>params_wathcer.id = 1
product_wathcer.id = 2
project_wathcer.id = 3
sprint_watcher.id = 4
</code></pre></div><p>\u5047\u8BBE\u6B64\u65F6\u4E09\u4E2A\u9009\u62E9\u5668\u90FD\u9009\u62E9\u4E86\u67D0\u4E2A\u503C\u3002\u7136\u540E\u518D\u9009\u4E2D\u53E6\u4E00\u4E2A\u4EA7\u54C1\u65F6\uFF0C\u6B64\u65F6\u4F1A\u89E6\u53D1\u4E24\u4E2A\u76D1\u542C\u5668 watcher\u6267\u884C\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.product_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><p>\u6839\u636E <code>params_watcher.id=1, product_watcher.id=2</code>\u6392\u5E8F\uFF0C\u6B64\u65F6 <code>queue = [params_watcher, product_watcher]</code></p><p>\u7136\u540E\u6309\u987A\u5E8F\u6267\u884C\u76D1\u542C\u5668 watcher\uFF0C<code>params_watcher.cb()</code> \u4F1A <code>emit</code> \u7B2C\u4E00\u6B21\uFF0C\u7136\u540E <code>has[1]=null</code>\u3002</p><p>\u7136\u540E\u7EE7\u7EED\u6267\u884C<code>product_watcher.cb()</code>\uFF0C\u5728\u4EA7\u54C1\u76D1\u542C\u7684\u76D1\u542C\u5668 product_watcher.cb \u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u9700\u8981\u91CD\u7F6E\u9879\u76EEid <code>this.params.project_id = &#39;&#39;</code>\uFF0C\u6B64\u65F6\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E24\u4E2A\u76D1\u542C\u5668 watcher\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.project_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><p>\u4E5F\u4F1A\u91CD\u7F6E\u8FED\u4EE3id <code>this.params.spring_id = &#39;&#39;</code>\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E24\u4E2A\u76D1\u542C\u5668 watcher\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.project_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><p>\u6CE8\u610F\u8FD9\u4E2A\u65F6\u95F4\u70B9 <code>product_watcher</code>\u6B63\u5728\u6267\u884C\u4E2D\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684\u6807\u8BC6\u4F4D <code>flushing=true; wating=true</code></p><p>\u6240\u4EE5\uFF0C\u6B64\u65F6\u8FD9\u56DB\u4E2A\u65B0\u89E6\u53D1\u7684\u76D1\u542C\u5668 watcher \u662F\u5982\u4F55\u5982\u4F55\u63D2\u5165\u961F\u5217 <code>queue</code>\u7684\u5462\uFF1F</p><div class="language-"><pre><code>// \u6B64\u65F6\u7684 queue
--------------------------------------------
| params_watcher(1)  | product_watcher(2)   |
| \u5DF2\u6267\u884C has[1]=null | \u6B63\u5728\u6267\u884C             |
--------------------------------------------
</code></pre></div><p>\u6838\u5FC3\u903B\u8F91 queueWatcher \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token comment">// \u5F53 flushSchedulerQueue \u6B63\u8FDB\u6267\u884C\u65F6\uFF0C\u6D3E\u53D1\u4E86\u4F9D\u8D56\u66F4\u65B0\uFF0C\u5219\u89C6 watcher.id \u7684\u5148\u540E\u63D2\u5165\u5230\u961F\u5217\u672A\u6267\u884C\u7684\u4EFB\u52A1\u4E2D</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5148\u662F\u8FDB\u884C <code>params_watcher</code>\u7684\u5904\u7406: \u7531\u4E8E <code>has[1]=null / flushing=true</code>\u4F1A\u8FDB\u5165 <code>else</code>\u7684\u903B\u8F91\u3002</li></ul><p>\u6B64\u65F6 <code>i=1 / index=1</code> \u5E76\u4E14 <code>queue[1].id = product_watcher.id = 2 / watcher.id = params_watcher.id = 1</code> while \u6761\u4EF6\u4E0D\u6210\u7ACB\uFF0C\u76F4\u63A5\u5C06 params_watcher \u63D2\u5165\u4E86\u961F\u5217\u672A\u5C3E\uFF0C\u5E76\u4E14 <code>has[1]=true</code>\u3002</p><ul><li>\u7136\u540E\u662F <code>project_watcher</code>\u7684\u5904\u7406\uFF1A\u7531\u4E8E <code>has[3]=undefined / flushing=true</code>\uFF0C\u540C\u6837\u4F1A\u8FDB\u5165 <code>else</code> \u7684\u903B\u8F91\uFF0C\u6CE8\u610F<code>if (has[id] == null\uFF09</code>\u7684\u5224\u65AD\u662F\u5BBD\u677E\u76F8\u7B49<code>==</code>\uFF0C\u4E0D\u662F\u5168\u7B49<code>===</code>\uFF0C\u6240\u4EE5 <code>has[3]=undefined</code>\u6761\u4EF6\u4E5F\u6210\u7ACB\u3002</li></ul><p>\u6B64\u65F6 <code>i=2 / index=1</code> \u5E76\u4E14 <code>queue[2].id = params_watcher.id = 2 / watcher.id = project_watcher.id = 3</code> while \u6761\u4EF6\u4E0D\u6210\u7ACB\uFF0C\u76F4\u63A5\u5C06 project_watcher \u63D2\u5165\u961F\u5217\u672A\u5C3E\u3002</p><ul><li><p>\u518D\u8FDB\u884C\u8FED\u4EE3\u6539\u53D8\u89E6\u53D1\u7684 params_watcher \u7684\u5904\u7406\uFF0C\u6B64\u65F6\u56E0\u4E3A <code>has[1]=true</code>\uFF0C\u961F\u5217\u4E2D\u5DF2\u5B58\u5728\uFF0C\u6240\u4EE5\u5FFD\u7565\u3002</p></li><li><p>\u6700\u540E\u662F <code>sprint_watcher</code> \u7684\u5904\u7406\uFF0C\u540C<code>project_watcher</code>\u4E00\u6837\uFF0C\u6700\u7EC8\u4F1A\u88AB\u63D2\u5165\u961F\u5217\u5C3E\u90E8\u3002</p></li></ul><p>\u6B64\u65F6 queue \u961F\u5217\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-"><pre><code>// \u6B64\u65F6\u7684 queue
---------------------------------------------------------------------------------------------------------
| params_watcher(1)  | product_watcher(2)   | params_watcher(1) | project_watcher(3) | sprint_watcher(4) |
| \u5DF2\u6267\u884C has[1]=null | \u6B63\u5728\u6267\u884C             |                   |                    |                   |
----------------------------------------------------------------------------------------------------------
</code></pre></div><p>\u5F53 <code>product_watcher</code>\u6267\u884C\u5B8C\uFF0C<code>params_watcher</code>\u4F1A\u88AB\u518D\u6B21\u6267\u884C\uFF0C\u7B2C\u4E8C\u6B21\u89E6\u53D1 <code>emit</code>\u3002</p><p>\u7136\u540E\u63A5\u7740\u6267\u884C\u5230 <code>project_watcher</code>\uFF0C\u5728 <code>project_watcher.cb()</code> \u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u7F6E\u7A7A\u8FED\u4EE3\uFF0C\u4F46\u56E0\u4E3A sprint_id \u5728\u4EA7\u54C1\u56DE\u8C03\u4E2D\u5DF2\u7ECF\u88AB\u7F6E\u7A7A\uFF0C\u524D\u540E\u503C\u6CA1\u53D8\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u6D3E\u53D1\u4F9D\u8D56\u66F4\u65B0\u3002 <code>if (newVal === value || (newVal !== newVal &amp;&amp; value !== value)) { return }</code></p><p>\u6240\u4EE5 params \u76D1\u542C\u5728\u524D\u7684\u7B2C\u4E00\u79CD\u60C5\u5F62\uFF0C\u9009\u62E9\u5668\u90FD\u6709\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6539\u53D8\u4EA7\u54C1\uFF0C\u4F1A\u5BFC\u81F4 emit \u89E6\u53D1\u4E8C\u6B21\u3002</p><h3 id="\u5206\u6790\u60C5\u5F62\u4E8C\uFF1Aparams-\u5728\u540E" tabindex="-1">\u5206\u6790\u60C5\u5F62\u4E8C\uFF1Aparams \u5728\u540E <a class="header-anchor" href="#\u5206\u6790\u60C5\u5F62\u4E8C\uFF1Aparams-\u5728\u540E" aria-hidden="true">#</a></h3><div class="language-"><pre><code>product_wathcer.id = 1
project_wathcer.id = 2
sprint_watcher.id = 3
params_wathcer.id = 4
</code></pre></div><p>\u540C\u6837\u5047\u8BBE\u6B64\u65F6\u4E09\u4E2A\u9009\u62E9\u5668\u90FD\u9009\u62E9\u4E86\u67D0\u4E2A\u503C\u3002\u7136\u540E\u518D\u9009\u4E2D\u53E6\u4E00\u4E2A\u4EA7\u54C1\u65F6\uFF0C\u6B64\u65F6\u4F1A\u89E6\u53D1\u4E24\u4E2A\u76D1\u542C\u5668 watcher\u6267\u884C\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.product_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><p>\u6839\u636E <code>params_watcher.id=4, product_watcher.id=1</code>\u6392\u5E8F\uFF0C\u6B64\u65F6 <code>queue = [product_watcher, params_watcher]</code></p><p>\u7136\u540E\u6267\u884C<code>product_watcher.cb()</code>\uFF0C\u5728\u4EA7\u54C1\u76D1\u542C\u7684\u76D1\u542C\u5668 product_watcher.cb \u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u9700\u8981\u91CD\u7F6E\u9879\u76EEid <code>this.params.project_id = &#39;&#39;</code>\uFF0C\u6B64\u65F6\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E24\u4E2A\u76D1\u542C\u5668 watcher\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.project_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><p>\u4E5F\u4F1A\u91CD\u7F6E\u8FED\u4EE3id <code>this.params.spring_id = &#39;&#39;</code>\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E24\u4E2A\u76D1\u542C\u5668 watcher\uFF1A</p><ul><li><code>params</code>\u7684\u76D1\u542C\u5668 watcher</li><li><code>params.project_id</code>\u7684\u76D1\u542C\u5668 watcher</li></ul><div class="language-"><pre><code>// \u6B64\u65F6\u7684 queue
--------------------------------------------
product_watcher(1) | params_watcher(4)  | 
\u6B63\u5728\u6267\u884C           |                    |
--------------------------------------------
</code></pre></div><p>\u6240\u4EE5\uFF0C\u6B64\u65F6\u8FD9\u56DB\u4E2A\u65B0\u89E6\u53D1\u7684\u76D1\u542C\u5668 watcher \u662F\u5982\u4F55\u5982\u4F55\u63D2\u5165\u961F\u5217 <code>queue</code>\u7684\u5462\uFF1F</p><p>\u6838\u5FC3\u903B\u8F91 queueWatcher \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token comment">// \u5F53 flushSchedulerQueue \u6B63\u8FDB\u6267\u884C\u65F6\uFF0C\u6D3E\u53D1\u4E86\u4F9D\u8D56\u66F4\u65B0\uFF0C\u5219\u89C6 watcher.id \u7684\u5148\u540E\u63D2\u5165\u5230\u961F\u5217\u672A\u6267\u884C\u7684\u4EFB\u52A1\u4E2D</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>\u5148\u8FDB\u884C\u7531\u91CD\u7F6E\u9879\u76EEid\u5F15\u8D77\u7684 <code>params_watcher</code> \u7684\u5904\u7406: \u7531\u4E8E\u6B64\u65F6<code>params_watcher</code>\u5DF2\u7ECF\u5728\u961F\u4F0D\u672A\u5C3E\uFF0C\u5373 <code>has[4]=true</code>\uFF0C\u6240\u4EE5\u4F1A\u88AB\u5FFD\u7565\u3002</p></li><li><p>\u518D\u770B <code>project_watcher</code>, \u6B64\u65F6 <code>i=1 / index=0</code> \u5E76\u4E14 <code>queue[1].id = params_watcher.id = 4 / watcher.id = project_watcher.id = 2</code> while \u6761\u4EF6\u6210\u7ACB\uFF0C\u4F1A\u8FDB\u884C <code>i--</code>\uFF0C\u5728\u5224\u65AD while \u6761\u4EF6\u4E0D\u6210\u7ACB\uFF0C\u6B64\u65F6 <code>i=0</code>\uFF0C\u4F1A\u5C06 project_watcher \u63D2\u5165\u5230 <code>product_watcher</code>\u4E4B\u540E\uFF0C<code>params_watcher</code>\u4E4B\u524D\u3002</p></li><li><p>\u91CD\u7F6E\u8FED\u4EE3id \u5F15\u8D77\u7684\u5904\u7406\u540C\u9879\u76EE\u5B8C\u5168\u76F8\u540C\u3002</p></li></ul><p>\u6240\u4EE5\u6700\u7EC8 queue \u961F\u5217\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-"><pre><code>// \u6B64\u65F6\u7684 queue
--------------------------------------------------------------------------------
product_watcher(1) | project_watcher(2) | sprint_watcher(3) | params_watcher(4) 
\u6B63\u5728\u6267\u884C            |                   |                    |                   |
---------------------------------------------------------------------------------
</code></pre></div><p>\u6240\u4EE5 params \u76D1\u542C\u5728\u6700\u540E\u7684\u60C5\u5F62\u4E8C\uFF0C\u9009\u62E9\u5668\u90FD\u6709\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6539\u53D8\u4EA7\u54C1\uFF0C\u6700\u7EC8 emit \u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\u3002</p><hr><p>\u4E0B\u9762\u662F\u5BF9\u6E90\u7801\u89E3\u8BFB\u7684\u6269\u5C55\u7684\u5185\u5BB9\uFF1A</p><ul><li>\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521B\u5EFA\u8FC7\u7A0B</li><li>vue \u4F9D\u8D56\u6536\u96C6\u8FC7\u7A0B</li><li>vue \u4F9D\u8D56\u6D3E\u53D1\u8FC7\u7A0B</li></ul><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA" tabindex="-1">\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA <a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E00\u6B65\u6B65\u4ECE <code>createComponent</code>\u521B\u5EFA\u7EC4\u4EF6\u5230 <code>Vue.prototype._init</code>\u51FD\u6570\u4E2D <code>initWatch</code> \u5230\u76D1\u542C\u56DE\u8C03\u88AB\u6267\u884C\u7684 <code> watcher.run()</code> \u770B\u61C2\u4E0A\u9762\u53D8\u5316\u7684\u539F\u56E0\u3002</p><ol><li><code>vm.$mount(&#39;#app&#39;)</code></li><li>\u6A21\u677F\u7F16\u8BD1\u540E <code>vm.$options.render</code> \u4E2D\u5305\u542B <code>&quot;_c(&#39;HelloWorld&#39;, data)&quot;</code></li><li><code>vm._update(vm._render(), hydrating)</code></li></ol><p>\u5176\u4E2D: <code>vm._render()</code> \u51FD\u6570\u4E2D</p><ol><li><code> vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };</code></li><li><code>function createElement(vm,a,b,c,d,false) {/**\u7701\u7565*/ return _createElement(vm, &#39;HelloWorld&#39;, data, undefined, undefined)}</code></li><li><code>vnode = function _createElement(vm, &#39;HelloWorld&#39;, data, undefined, undefined)) {/**\u7701\u7565*/ var vnode = createComponent(Ctor, data, vm); return vnode}</code> \u5176\u4E2D <code>vm._update(vnode, hydrating)</code>\u51FD\u6570\u4E2D</li></ol><p>\u6240\u4EE5\u6211\u4EEC\u53EA\u5173\u6CE8 <code>_render()</code> \u548C <code>_update()</code> \u51FD\u6570\u4E2D\u4E24\u4E2A<code>createComponent()</code> \u51FD\u6570\u7684\u903B\u8F91</p><div class="language-js"><pre><code><span class="token comment">// \u5728vm._render \u51FD\u6570\u4E2D\u6267\u884C createComponent() \u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base<span class="token punctuation">;</span> <span class="token comment">// Vue.options._base = Vue\uFF0C\u6240\u4EE5 baseCtor \u5C31\u662F Vue \u6784\u9020\u51FD\u6570</span>

  <span class="token comment">// plain options object: turn it into a constructor </span>
  <span class="token comment">// \u5982\u679C\u4F20\u5165\u7684 Ctor \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528 Vue.extend(Ctor) \u6784\u5EFA\u7EC4\u4EF6\u3002export default \u5BFC\u51FA\u7684\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61</span>
  <span class="token comment">/**
   * export default {
   *   name: &#39;HelloWorld&#39;,
   *   data() {
   *     return {
   *      msg: &#39;World&#39;,
   *     }
   *   }
   * }
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6784\u5EFA\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>


  <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\u5230 data \u4E2D\uFF0C\u5305\u62EC init / prePatch / insert / destory\uFF0C</span>
  <span class="token comment">// \u7279\u522B\u662F\u5176\u4E2D init \u51FD\u6570\u4F1A\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u548C\u6302\u8F7D\uFF1A</span>
    <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
    <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating);</span>

  <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u53EA\u662F\u5C06\u7EC4\u4EF6\u7684\u94A9\u5B50\u51FD\u6570\u6302\u8F7D\u5230 data \u4E2D\uFF0C\u7136\u540E data \u4F1A\u968F\u4E0B\u9762 new VNode \u6267\u884C\u4F20\u9012\u5230 componentOptions.data \u4E2D\u3002</span>
  <span class="token comment">// \u5177\u4F53\u94A9\u5B50\u51FD\u6570\u7684\u6267\u884C\u662F\u5728 vm._update(vnode, ...) \u51FD\u6570\u4E2D\u7684 createComponent </span>
  <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token comment">// return a placeholder vnode</span>
  <span class="token comment">// \u5B9E\u4F8B\u5316\u7EC4\u4EF6 VNode</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> tag<span class="token punctuation">;</span>
  <span class="token comment">// VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory)</span>
  <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// tag = &#39;vue-component-id-helloworld</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// componentOptions</span>
    asyncFactory
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>


<span class="token comment">// installComponentHooks</span>
<span class="token keyword">function</span> <span class="token function">installComponentHooks</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hooks <span class="token operator">=</span> data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooksToMerge<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> key <span class="token operator">=</span> hooksToMerge<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> existing <span class="token operator">=</span> hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> toMerge <span class="token operator">=</span> componentVNodeHooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existing <span class="token operator">!==</span> toMerge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>existing <span class="token operator">&amp;&amp;</span> existing<span class="token punctuation">.</span>_merged<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> existing <span class="token operator">?</span> <span class="token function">mergeHook$1</span><span class="token punctuation">(</span>toMerge<span class="token punctuation">,</span> existing<span class="token punctuation">)</span> <span class="token operator">:</span> toMerge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">init</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span>_isDestroyed <span class="token operator">&amp;&amp;</span>
      vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// kept-alive components, treat as a patch</span>
      <span class="token keyword">var</span> mountedNode <span class="token operator">=</span> vnode<span class="token punctuation">;</span> <span class="token comment">// work around flow</span>
      componentVNodeHooks<span class="token punctuation">.</span><span class="token function">prepatch</span><span class="token punctuation">(</span>mountedNode<span class="token punctuation">,</span> mountedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>
        vnode<span class="token punctuation">,</span>
        activeInstance
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">prepatch</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">prepatch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">insert</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">destroy</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// createComponentInstanceForVnode</span>
<span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
  vnode<span class="token punctuation">,</span> <span class="token comment">// we know it&#39;s MountedComponentVNode but flow doesn&#39;t</span>
  parent <span class="token comment">// activeInstance in lifecycle state</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_parentVnode</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span>
    <span class="token literal-property property">parent</span><span class="token operator">:</span> parent
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// check inline-template render functions</span>
  <span class="token keyword">var</span> inlineTemplate <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inlineTemplate<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>inlineTemplate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>render <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">.</span>Ctor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>vm._update(vm._render(), hydrating)</code> \u4E2D <code>vm._render()</code> \u51FD\u6570\u6267\u884C\u540E\u8FD4\u56DE vnode \u4F20\u9012\u7ED9<code>vm._update(vnode, hydrating)</code>\u51FD\u6570: \u8C03\u7528\u8DEF\u5F84\uFF1A <code>vm._update(vnode) =&gt; vm.__patch__(vm.$el, vnode) =&gt; createElm(vnode, ...) =&gt; createComponent(vnode, insertedVnodeQueue, parentElm, refElm)</code></p><div class="language-js"><pre><code><span class="token comment">// createElm</span>
<span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  parentElm<span class="token punctuation">,</span>
  refElm<span class="token punctuation">,</span>
  nested<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ownerArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This vnode was used in a previous render!</span>
    <span class="token comment">// now it&#39;s used as a new node, overwriting its elm would cause</span>
    <span class="token comment">// potential patch errors down the road when it&#39;s used as an insertion</span>
    <span class="token comment">// reference node. Instead, we clone the node on-demand before creating</span>
    <span class="token comment">// associated DOM element for it.</span>
    vnode <span class="token operator">=</span> ownerArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  vnode<span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token operator">!</span>nested<span class="token punctuation">;</span> <span class="token comment">// for transition enter check</span>
  <span class="token comment">// createElm \u65E0\u8BBA\u600E\u6837\u90FD\u5C1D\u8BD5\u5F53\u6210\u7EC4\u4EF6\u521B\u5EFA\uFF0C\u89C2\u5BDF\u662F\u5426\u6210\u529F\u3002</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9 vnode \u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u521B\u5EFA\u8FD4\u56DE false\uFF0C\u5373\u5F80\u4E0B\u7EE7\u627F\u6267\u884C</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9\u662F\u7EC4\u4EF6 vnode \u5219\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u5316\uFF0C\u5E76\u8FD4\u56DE true\uFF0C\u5F53\u524D\u51FD\u6570\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>
<span class="token punctuation">}</span>

<span class="token comment">// createComponent</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u62FF\u5230\u7684 vnode.data \u662F\u5728 vm._render \u51FD\u6570\u4E2D createComponent \u51FD\u6570\u4E2D installComponentHooks(data) \u51FD\u6570\u521D\u59CB\u5316\u7684</span>
  <span class="token comment">// installComponentHooks(data) \u6267\u884C\u5373\u5B89\u88C5\u4E86\u7EC4\u4EF6\u521B\u5EFA\u7684\u94A9\u5B50\u51FD\u6570 vnode.data.hook</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span>
    <span class="token comment">// dsDef(i=i.hook)\u5728\u6267\u884C\u7684\u540C\u65F6\u5C06 i \u53D8\u4E3A\u4E86 hook \u5BF9\u8C61\uFF0C\u540C\u6837 isDef(i=i.init)\u4FBF\u5F97\u6700\u7EC8 i= vnode.data.hook.init \u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// init \u51FD\u6570\u6267\u884C\u5904\u7406\u4E86\u4E3B\u8981\u5904\u7406\u4E24\u4EF6\uFF1A</span>
      <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
      <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating); =&gt; mountComponent</span>
      <span class="token comment">// \u8FD9\u6837\u5728 createComponent \u51FD\u6570\u5185\u5C31\u5B8C\u6210\u4E86\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u548C\u7EC4\u4EF6\u5185\u771F\u5B9E DOM \u5143\u7D20\u6811 vnode.elm \u6E32\u67D3\u3002</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// after calling the init hook, if the vnode is a child component</span>
    <span class="token comment">// it should&#39;ve created a child instance and mounted it. the child</span>
    <span class="token comment">// component also has set the placeholder vnode&#39;s elm.</span>
    <span class="token comment">// in that case we can just return the element and be done.</span>
    <span class="token comment">// \u5728\u4E0A\u9762 i(vnode, false) \u751F\u6210\u4E86\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u6E32\u67D3\u4E86\u7EC4\u4EF6\u5185\u771F\u5B9E\u7684 dom \u6811\u5143\u7D20 vnode.elm</span>
    <span class="token comment">// \u7136\u540E\u5728\u8FD9\u4E00\u6B65\uFF0C\u5C06\u7EC4\u4EF6\u5143\u7D20\u63D2\u5165\u5230\u7236\u7EC4\u4EF6\u4E2D\u5B8C\u6210\u6302\u8F7D\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>isReactivated<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reactivateComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u4E3B\u8981\u76EE\u7684\u662F\u89C2\u5BDF\u7EC4\u4EF6 watch \u7684\u5904\u7406\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5173\u6CE8\u7EC4\u4EF6\u5B9E\u4F8B\u521D\u59CB\u5316\u8FC7\u7A0B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// vm._render() =&gt; createComponent() =&gt; installComponentHooks(data) =&gt; componentVNodeHooks.init() =&gt; createComponentInstanceForVnode</span>

<span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span> 
  parent</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_parentVnode</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span>
    <span class="token literal-property property">parent</span><span class="token operator">:</span> parent
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// check inline-template render functions</span>
  <span class="token keyword">var</span> inlineTemplate <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inlineTemplate<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>inlineTemplate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>render <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">.</span>Ctor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
  Ctor \u51FD\u6570\u662F\u5728 createComponent() \u51FD\u6570\u4E00\u5F00\u59CB\u5904\u7406\u7684\uFF1A
*/</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">var</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base<span class="token punctuation">;</span> <span class="token comment">// Vue.options._base = Vue\uFF0C\u6240\u4EE5 baseCtor \u5C31\u662F Vue \u6784\u9020\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6784\u5EFA\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
  \u5728 Vue.extend() \u51FD\u6570\u4E2D
*/</span>
Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">var</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">return</span> Sub
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5 <code>new vnode.componentOptions.Ctor(options)</code>\u5C31\u76F8\u5F53\u4E8E <code>Vue.prototype._init(options)</code>\u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">// a uid</span>
  vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid$3<span class="token operator">++</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u5185\u90E8\u5C5E\u6027\uFF1A$root/$parent/$refs=[]/$children=[]/_watcher=null\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u751F\u547D\u72B6\u6001\u6807\u5FD7 flag: _inactive=null/_isMounted=false/_isDestoryed=false/_isBeingDestoryed=false</span>
  <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u7236\u7EC4\u4EF6\u4F20\u5165\u7684\u4E8B\u4EF6\u76D1\u542C\u5668 listeners \u5230\u5B9E\u4F8B vm._events \u5BF9\u8C61\u4E0A\uFF0C\u6765\u6E90\u4E8E template \u89E3\u6790\u5230\u7684 v-on \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u51FD\u6570</span>
  <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D $attrs/$listeners\uFF0C\u4EE5\u53CA\u7ED1\u5B9A _c/$createElement</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve injections before data/props 1. \u89E3\u6790 inject \u5C5E\u6027\u7684\u6570\u636E\uFF1B2. \u5E76\u5C06\u5176\u8BBE\u7F6E\u54CD\u5E94\u5F0F\uFF08\u5373k-v\u8F6C\u4E3Agetter/setter\uFF09\u540C\u65F6\u6302\u8F7D\u5230 vm \u4E0A</span>
  <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB script \u4E2D\u7684\u5C5E\u6027\uFF1AinitProps/initMethods/initData/initComputed/initWatch</span>
  <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve provide after data/props</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u6CE8 watch \u7684\u521D\u59CB\u5316\uFF0C\u5373 <code>initState</code> \u51FD\u6570\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initState</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_watchers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">initProps</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">initMethods</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>methods<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">initComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>watch <span class="token operator">&amp;&amp;</span> opts<span class="token punctuation">.</span>watch <span class="token operator">!==</span> nativeWatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initWatch</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5373 <code>initWatch</code> \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initWatch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> watch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> handler <span class="token operator">=</span> watch<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> handler<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E <code>createWatcher(vm, key, handler);</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createWatcher</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  expOrFn<span class="token punctuation">,</span>
  handler<span class="token punctuation">,</span>
  options</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    handler <span class="token operator">=</span> handler<span class="token punctuation">.</span>handler<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handler <span class="token operator">=</span> vm<span class="token punctuation">[</span>handler<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u5728 <code>options.watch</code> \u5B9A\u4E49\uFF0C\u4E0E\u76F4\u63A5\u8C03\u7528 <code>this.$watch</code> \u5B9A\u4E49\u4E00\u6837\u6548\u679C\u3002</p><p>\u770B\u4E0B <code>vm.$watch</code></p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$watch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
    <span class="token parameter">expOrFn<span class="token punctuation">,</span>
    cb<span class="token punctuation">,</span>
    options</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// options.watch \u6216\u8005 this.$watch \u5B9A\u4E49\u7684\u76D1\u542C\uFF0C\u90FD\u4F1A\u88AB\u6807\u8BC6\u4E3A user=true\uFF0C\u4EE3\u8868\u7528\u6237\u81EA\u5B9A\u4E49\u7684 watcher</span>
    options<span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6838\u5FC3\u4EE3\u7801 Watcher \u6784\u9020\u51FD\u6570</span>
    <span class="token keyword">var</span> watcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> watcher<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;callback for immediate watcher \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// watch \u51FD\u6570\u8C03\u7528\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u53D6\u6D88 watch \u76D1\u542C\u7684\u65B9\u6CD5\u3002</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unwatchFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="watcher" tabindex="-1">Watcher <a class="header-anchor" href="#watcher" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * Class Watcher \u5B9E\u4F8B\u6709\u4E09\u79CD\u7C7B\u578B\uFF1Arender-watcher / user-watcher / computed-watcher
 * 
 * watcher.user  - \u7528\u6237\u5728 option.watch \u6216\u8C03\u7528 this.$watch() \u81EA\u5B9A\u4E49\u7684 watcher\uFF0C\u5373 user-watch
 * watcher.lazy  - \u7528\u4E8E\u6807\u8BB0 computed \u4E2D\u5B9E\u4F8B watcher, \u5373 computed-watcher
 * watcher.dirty - \u6807\u8BB0 computed-watcher \u662F\u5426\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u503C\uFF0C\u8FD8\u662F\u4F7F\u7528\u7F13\u5B58\u7684\u503C watcher.value
 * isRenderWatcher = true \u65F6\uFF0C\u8868\u793A\u5F53\u524D\u5B9E\u4F8B\u5316\u7684 render-watcher \uFF0C\u5B9E\u4F8B\u8D4B\u503C\u5728 vm._watcher\uFF0C\u4E5F\u5B58\u5165 vm._watchers
 *
 * Watcher.prototype \u539F\u578B\u5BF9\u8C61\u65B9\u6CD5\uFF1A
 * get(): \u5173\u952E\u4EE3\u7801\u662F\u5F00\u5934 pushTarget(this) \u548C\u7ED3\u5C3E\u7684 popTarget()\uFF0C\u4EE5\u53CA this.getter.call(vm,vm)
 * addDep(): \u5224\u65AD dep \u662F\u5426\u91CD\u590D\u6DFB\u52A0\u7684\u5173\u952E\uFF0C\u53EA\u6709 watcher \u4E2D\u7684 newDepIds \u4E2D\u4E0D\u5B58\u5728\u624D\u6DFB\u52A0 dep.addSub(this)
 * cleanupDeps(): get()\u65B9\u6CD5\u6267\u884C\u7684\u5584\u540E\u5904\u7406\uFF0C\u5904\u7406 deps/newDeps \u548C depIds/newDepIds\u3002
                  \u6BD4\u5982 v-if/v-else \u8FD9\u7C7B\u89C6\u56FE\uFF0C\u4E00\u6B21\u66F4\u65B0\uFF0Cif \u7ED1\u5B9A\u7684\u6570\u636E\u4F9D\u8D56\u5C31\u4E0D\u9700\u8981\u4E86\uFF0C\u5728\u65B0\u4E00\u8F6E\u4F9D\u8D56\u6536\u96C6\u5B8C\u6210\u540E\uFF0C\u8981\u5C06\u4E0A\u4E00\u6B21\u65E7\u7684\u65E0\u7528\u4F9D\u8D56\u6E05\u9664\u6389\uFF0C\u5E76\u5C06\u65B0\u7684\u8F6C\u4E3A\u65E7\u7684\uFF0C\u65B0\u7684\u6E05\u7A7A\u3002
 * update(): 1. \u5BF9 computed-watcher \u53EA\u8BBE\u7F6E this.dirty=true\uFF0C2. \u5176\u5B83 watcher\uFF0C\u52A0\u5165\u961F\u5217\u6267\u884C queueWatcher(this)
 * run(): \u6267\u884C\u5B9E\u4F8B watcher \u65F6\u4F20\u5165\u7684\u56DE\u8C03\u51FD\u6570 this.cb.call(this.vm, value, oldValue);
 * evaluate(): \u9488\u5BF9 computed-watcher \uFF0C\u83B7\u53D6 coputed \u6700\u65B0\u503C
 * depend(): \u5FAA\u73AF\u904D\u5386\u8BE5 watcher \u4E2D\u7684 dep\uFF0C\u5411\u5176\u4E2D\u518D\u52A0\u5165\u5F53\u524D watcher, \u4F1A\u8BA1\u7B97\u5C5E\u6027 getter \u6709\u8C03\u7528
 * teardown(): \u5C06 watcher \u4ECE dep.subs \u4E2D\u5220\u9664
 */</span>


<span class="token keyword">var</span> uid$2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">Watcher</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Watcher</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  expOrFn<span class="token punctuation">,</span>
  cb<span class="token punctuation">,</span>
  options<span class="token punctuation">,</span>
  isRenderWatcher</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isRenderWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// mountComponent \u51FD\u6570\u4E2D new Watcher \u4F1A\u4F20\u5165 isRenderWatcher = true \u8868\u793A\u5F53\u524D\u5B9E\u4F8B\u5316\u7684\u662F render-watcher</span>
    vm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// render-watcher</span>
  <span class="token punctuation">}</span>
  vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>deep<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>user<span class="token punctuation">;</span> <span class="token comment">// \u7528\u6237\u5728option.watch \u6216 this.$watch() \u65F6\u81EA\u5B9A\u4E49\u7684 watcher\uFF0C\u5373 user-watch,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">;</span> <span class="token comment">// \u7528\u4E8E\u6807\u8BB0 computed \u4E2D\u5B9E\u4F8Bwatcher,\u5373 computed-watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>sync<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>before <span class="token operator">=</span> options<span class="token punctuation">.</span>before<span class="token punctuation">;</span> <span class="token comment">// render-watcher \u4F1A\u4F20\u5165\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5373 beforeUpdate \u94A9\u5B50\u51FD\u6570</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb<span class="token punctuation">;</span> <span class="token comment">// \u76D1\u542C\u56DE\u8C03\u51FD\u6570</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token operator">++</span>uid$2<span class="token punctuation">;</span> <span class="token comment">// uid for batching</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">;</span> <span class="token comment">// for lazy watchers \u6807\u8BB0 computed-watcher \u662F\u5426\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u503C\uFF0C\u8FD8\u662F\u4F7F\u7528\u7F13\u5B58\u7684\u503C watcher.value</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>depIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">_Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">_Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>expression <span class="token operator">=</span> expOrFn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// parse expression for getter</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> expOrFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> expOrFn<span class="token punctuation">;</span> <span class="token comment">// computed watcher \u548C updateComponent</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> <span class="token function">parsePath</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// user watcher</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> noop<span class="token punctuation">;</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&quot;Failed watching path: \\&quot;&quot;</span> <span class="token operator">+</span> expOrFn <span class="token operator">+</span> <span class="token string">&quot;\\&quot; &quot;</span> <span class="token operator">+</span>
        <span class="token string">&#39;Watcher only accepts simple dot-delimited paths. &#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;For full control, use a function instead.&#39;</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy
    <span class="token operator">?</span> <span class="token keyword">undefined</span>
    <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC\u8981\u6CE8\u610F\u521D\u59CB\u5316 <code>watcher.id</code> \u7684 <code>uid$2</code> \u53D8\u91CF\u662F\u5168\u5C40\u7684\u3002</p><p>\u5728 <code>initWatch</code> \u51FD\u6570\u4E2D\uFF0C\u901A\u8FC7 <code>for (var key in vm.$options.watch)</code> \u53EF\u4EE5\u77E5\u9053\uFF0C\u6211\u4EEC\u58F0\u660E\u5728 watch \u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u5148\u540E\u987A\u5E8F\u4E0D\u540C\uFF0C\u4F1A\u5BFC\u81F4\u5BF9\u5E94\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u5927\u5C0F\u662F\u4E0D\u540C\u7684\u3002\u8FD9\u4E00\u70B9\u5728\u7406\u89E3\u540E\u7EED\u6267\u884C watcher.cb \u51FD\u6570\u7684\u987A\u5E8F\u65F6\u975E\u5E38\u91CD\u8981\u3002</p><div class="language-js"><pre><code><span class="token comment">// initWatch</span>
<span class="token keyword">function</span> <span class="token function">initWatch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> watch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> handler <span class="token operator">=</span> watch<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> handler<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u770B\u6211\u4EEC\u4EA7\u751F\u95EE\u9898\u7684\u4EE3\u7801\uFF1A</p><div class="language-"><pre><code>watch: {
+ params: {
+   deep: true,
+   handler(v) {
+     this.$emit(&#39;select-change&#39;, { ...v })   
+   },  
+ }
  &#39;params.product_id&#39;(v) {
    this.params.product_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
    this.params.project_id = &#39;&#39;
    this.params.sprint_id = &#39;&#39;
    this.projectSelectList = []
    this.sprintSelectList = []
    v ? this.httpGetSelectDataForProject() : null
  },
  &#39;params.project_id&#39;(v) {
    this.params.project_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
    this.params.sprint_id = &#39;&#39;
    this.sprintSelectList.value = []
    v ? this.httpGetSelectDataForSprint() : null
  },
  &#39;params.sprint_id&#39;(v) {
    this.params.sprint_id = v // \u6B64\u5904\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u56E0\u4E3A v-model \u7ED1\u5B9A\u4E86
  },
- //  params: {
- //    deep: true,
- //    handler(v) {
- //      this.$emit(&#39;on-select-change&#39;, { ...v })
- //    },
- //  },
},
</code></pre></div><p>\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF0C\u5047\u8BBE\u76D1\u542C\u5404\u4E2A\u5C5E\u6027\u4EA7\u751F\u7684 watcher \u5206\u522B <code>params_watcher / product_watcher / project_watcher / sprint_watcher</code>\u3002</p><p>\u6240\u4EE5\u5982\u679C\u5BF9 params \u7684\u76D1\u542C\u653E\u5728\u6700\u524D\u9762\uFF0C\u90A3\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u987A\u5E8F\u4E3A\uFF1A</p><blockquote><p>\u8FD9\u91CC\u5FFD\u7565\u7236\u7EC4\u4EF6\u53CA\u6E32\u67D3render_watcher \u7684id\uFF0C\u5B9E\u9645\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u53EF\u80FD\u4E0D\u662F\u8FD9\u4E2A\u503C\uFF0C\u6B64\u5904\u4EC5\u5206\u6790\u65B9\u4FBF\u5B9A\u4E49\u8BE5\u7EC4\u4EF6\u5185 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a>\uFF0C\u4EC5\u4E3A\u540E\u7EED\u8BF4\u660E <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u5BF9 watcher.cb \u6267\u884C\u987A\u5E8F\u7684\u5F71\u54CD\uFF0C</p></blockquote><div class="language-"><pre><code>params_wathcer.id = 1
product_wathcer.id = 2
project_wathcer.id = 3
sprint_watcher.id = 4
</code></pre></div><p>\u5982\u679C\u628A\u5BF9 params \u7684\u76D1\u542C\u653E\u5728\u6700\u540E\u9762\uFF0C\u90A3\u4EA7\u751F\u7684 <a href="http://watcher.id" target="_blank" rel="noopener noreferrer">watcher.id</a> \u987A\u5E8F\u4E3A\uFF1A</p><div class="language-"><pre><code>product_wathcer.id = 1
project_wathcer.id = 2
sprint_watcher.id = 3
params_wathcer.id = 4
</code></pre></div><h2 id="\u4F9D\u8D56\u6536\u96C6" tabindex="-1">\u4F9D\u8D56\u6536\u96C6 <a class="header-anchor" href="#\u4F9D\u8D56\u6536\u96C6" aria-hidden="true">#</a></h2><p>Watcher \u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u7684\u6700\u540E\uFF0C\u4F1A\u8C03\u7528 <code>this.get()</code> \u5B8C\u6210\u4F9D\u8D56\u6536\u96C6\u7684\u8FC7\u7A0B\u3002</p><blockquote><p>vue \u4E2D\u7684\u4F9D\u8D56\u5B9E\u9645\u4E0A\u53EF\u4EE5\u7406\u89E3\u4E3A watcher\uFF0C\u6240\u4EE5\u4F9D\u8D56\u6536\u96C6\uFF0C\u5C31\u662F watcher \u6536\u96C6\u8FC7\u7A0B\u3002</p></blockquote><div class="language-js"><pre><code><span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> value<span class="token punctuation">;</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;getter for watcher \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> e
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;touch&quot; every property so they are all tracked as</span>
    <span class="token comment">// dependencies for deep watching</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>deep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cleanupDeps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC <code>this.getter</code> \u5373 <code>new Watcher</code> \u4E2D <code>this.getter = parsePath(expOrFn)</code> \u8FD4\u56DE\u7684\u4E00\u4E2A\u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parsePath</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bailRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> segments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
      obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>segments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>value = this.getter.call(vm, vm);</code>\u8C03\u7528\u4F20\u5165\u4E86 <code>vm</code>\uFF0C\u5373\u627E\u5230 <code>vm[params][product_id]</code> \u7684\u503C\u3002\u5176\u5B83\u540C\u7406\u3002</p><p>\u56E0\u4E3A params \u5BF9\u8C61\u5B9A\u4E49\u5728 data \u4E2D\uFF0C\u5728 <code>initData</code> \u4E2D\u5B8C\u6210\u4E86 <code>observe(data)</code>\uFF0C\u6BCF\u4E2A\u5C5E\u6027\u90FD\u88AB\u5305\u88C5\u6210\u4E86\u5BF9\u5E94\u7684 <code>getter / setter</code>\uFF0C\u6240\u4EE5\u5728\u5B9E\u4F8B\u5316 watcher \u8FC7\u7A0B\u4E2D\u6267\u884C <code>this.get() =&gt; this.getter.call(vm,vm)</code>\u5C31\u4F1A\u89E6\u53D1\u5BF9\u5E94\u5C5E\u6027\u7684 <code>getter</code> \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">var</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get<span class="token punctuation">;</span>
  <span class="token keyword">var</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set<span class="token punctuation">;</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6B64\u65F6 Dep.target \u6B63\u662F\u4E0A\u9762 watcher.get \u51FD\u6570\u4E2D pushTarget(this); \u8BBE\u7F6E\u7684\u3002</span>
          dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// </span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF0C\u5728\u4E0B\u9762\u4F9D\u8D56\u6D3E\u53D1\u4E2D\u89E3\u6790</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u770B\u4E0B Dep \u4F9D\u8D56\u7BA1\u7406\u5668\u7684\u5B9A\u4E49</p><div class="language-js"><pre><code><span class="token keyword">var</span> uid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49 dep.id \u5E8F\u5217\u5668\u4E5F\u662F\u5168\u5C40\u7684\u3002</span>
<span class="token keyword">var</span> <span class="token function-variable function">Dep</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Dep</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> uid<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6BCF\u4E2A data \u4E2D\u7684\u5C5E\u6027\u76F8\u5173\u7684\u4F9D\u8D56(watcher)\u5C31\u653E\u5728\u8FD9\u91CC\u3002</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">depend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u8BE5\u65B9\u6CD5\u6700\u5173\u952E\u7684\u70B9\uFF1A Dep.target = watcher\uFF0Cwatcher.get \u51FD\u6570\u4E2D\u8BBE\u7F6E pushTarget(this)
   * \u5E76\u4E14\u6DFB\u52A0\u4F9D\u8D56\u4E0D\u662F\u76F4\u63A5\u8C03 this.addSub\uFF0C\u800C\u662F\u7ED5\u5230 dep.append(wathcer) =&gt; watcher.addDep(dep) =&gt; dep.addSub(wathcer)
   * \u4E4B\u6240\u4EE5\u8FD9\u6837\u7ED5\u4E00\u5708\uFF0C\u662F\u56E0\u4E3A\u65E2\u9700\u8981\u5728 dep.subs \u4E2D\u6301\u6709\u5168\u90E8 watcher\uFF0C\u53C8\u9700\u8981\u5728\u6BCF\u4E2A watcher \u7684 depIds/deps \u4E2D\u6301\u6709\u76F8\u5E94\u7684 dep\u3002
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6B64\u65F6\u8FD9\u91CC\u7684 <code>Dep.target</code> \u5373 <code>user-watcher</code> \u5B9E\u4F8B\u3002\u770B\u4E0B<code>watcher.addDep</code> \u65B9\u6CD5\u7684\u5B9A\u4E49</p><div class="language-js"><pre><code><span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addDep</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">addDep</span> <span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token comment">// \u8FD9\u4E00\u6B65\u7684\u5BF9 dep \u7684\u53BB\u91CD</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Watcher \u7684 constructor \u6784\u9020\u51FD\u6570\u4E2D\u58F0\u660E\u4E86 dep \u5B58\u50A8\u6570\u7EC4</span>
<span class="token comment">// this.deps = [];</span>
<span class="token comment">// this.newDeps = [];</span>
<span class="token comment">// this.depIds = new _Set(); // Set \u6570\u636E\u7C7B\u578B\u7684\u503C\u5177\u6709\u552F\u4E00\u6027</span>
<span class="token comment">// this.newDepIds = new _Set();</span>
</code></pre></div><p>\u4E0A\u9762 <code>dep.addSub(this);</code>\u518D\u6B21\u8F6C\u56DE <code>Dep</code> \u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002</p><div class="language-js"><pre><code><span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addSub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">addSub</span> <span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// var Dep = function Dep () {</span>
<span class="token comment">//   this.id = uid++;</span>
<span class="token comment">//   this.subs = []; // \u6BCF\u4E2A data \u4E2D\u7684\u5C5E\u6027\u76F8\u5173\u7684\u4F9D\u8D56(watcher)\u5C31\u653E\u5728\u8FD9\u91CC\u3002</span>
<span class="token comment">// };</span>
</code></pre></div><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F vue \u4F9D\u8D56\u6536\u96C6\u8FC7\u7A0B\uFF0C\u5373 vue \u7684 watcher \u6536\u96C6\u8FC7\u7A0B\u3002</p><p>\u4F9D\u8D56\u6536\u96C6\u4E0D\u662F\u76F4\u63A5\u8C03 <code>dep.addSub</code>\uFF0C\u800C\u662F\u7ED5\u5230 <code>dep.append(wathcer) =&gt; watcher.addDep(dep) =&gt; dep.addSub(wathcer)</code>,\u4E4B\u6240\u4EE5\u8FD9\u6837\u7ED5\u4E00\u5708\uFF0C\u662F\u56E0\u4E3A\u65E2\u9700\u8981\u5728 Dep \u5B9E\u4F8B\u7684 <code>dep.subs</code> \u4E2D\u6301\u6709\u8BA2\u9605\u4E86\u8BE5\u5C5E\u6027\u7684\u5168\u90E8 <code>watcher</code>\uFF0C\u4E5F\u9700\u8981\u5728\u6BCF\u4E2A watcher \u7684 <code>depIds/deps</code> \u4E2D\u6301\u6709\u8BE5 watcher \u88AB\u54EA\u4E9B dep \u6536\u96C6\u7684\u4FE1\u606F\u3002</p><p>\u5C31\u597D\u6BD4\u516C\u53F8\u62DB\u8058\u548C\u5458\u5DE5\u6C42\u804C\u7684\u8FC7\u7A0B\uFF0C\u516C\u53F8\u9700\u8981\u6536\u5230\u5230\u6240\u6709\u5E94\u8058\u90FD\u7684\u4FE1\u606F\uFF0C\u5458\u5DE5\u81EA\u5DF2\u4E5F\u9700\u8981\u6536\u96C6\u5230\u81EA\u5DF1\u6240\u6295\u9012\u7684\u6240\u6709\u516C\u53F8\u4FE1\u606F\u4E00\u6837\u3002</p><h2 id="\u4F9D\u8D56\u6D3E\u53D1" tabindex="-1">\u4F9D\u8D56\u6D3E\u53D1 <a class="header-anchor" href="#\u4F9D\u8D56\u6D3E\u53D1" aria-hidden="true">#</a></h2><p>\u5F53 <code>el-select</code>\u9009\u62E9\u503C\u6539\u53D8\u65F6\uFF0C\u56E0\u4E3A <code>v-model</code>\u7ED1\u5B9A\u7684\u539F\u7406\uFF0C<code>params.product_id</code>\u4F1A\u88AB\u8D4B\u4E00\u4E2A\u65B0\u503C\u3002\u6B64\u65F6\u5C31\u662F\u89E6\u53D1 <code>product_id</code> \u5C5E\u6027\u7684 <code>setter</code> \u51FD\u6570\u3002\u5176\u5B83\u76D1\u542C\u5C5E\u6027\u540C\u7406\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">var</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get<span class="token punctuation">;</span>
  <span class="token keyword">var</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set<span class="token punctuation">;</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF0C\u89C1\u4E0A\u9762\u4F9D\u8D56\u6536\u96C6\u89E3\u6790</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span> 
      <span class="token comment">// \u8FD9\u91CC\u8C03\u7528 getter() \u8FD8\u4F1A\u89E6\u53D1 dep.depend()\uFF0C\u5982\u679C\u53BB\u91CD\uFF1F</span>
      <span class="token comment">// \u5728 watcher.addDep \u51FD\u6570\u4E2D\u4F1A\u6709 if (!this.newDepIds.has(id)) \u548C if (!this.depIds.has(id)) \u7684\u5224\u65AD\u3002 \u5176\u4E2D newDepIds \u548C depIds \u90FD\u662F new Set() \u7C7B\u578B\u3002</span>

      <span class="token comment">/* \u5982\u679C\u524D\u540E\u503C\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u4E0D\u6D3E\u53D1\u4F9D\u8D56\u66F4\u65B0 */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* eslint-enable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>customSetter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">customSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// #7981: for accessor properties without setter</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u7684newVal\u4E5F\u9700\u8981\u8F6C\u4E3A\u54CD\u5E94\u5F0F getter / setter</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token comment">// \u904D\u5386dep.subs\u4E2D\u7684\u6BCF\u4E2Awatcher\uFF0C\u8C03\u7528 watcher.update</span>
      <span class="token comment">// \u5224\u65AD\u662Fcomputed-watcher\uFF0C\u5219 watcher.dirty=true\uFF0C\u5176\u5B83\u8FD0\u884C watcher.run() </span>
      <span class="token comment">// run() =&gt; this.cb.call(this.vm, value, oldValue)  </span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u5173\u952E\u662F <code>dep.notify()</code> \u6D3E\u53D1\u4F9D\u8D56\u66F4\u65B0\u3002</p><div class="language-js"><pre><code><span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u8FD9\u91CC\u5C31\u4F1A\u4F9D\u8D56 watcher.id \u7684\u4ECE\u5C0F\u5230\u5927\u7684\u987A\u5E8F\uFF0C\u5373 watcher \u58F0\u660E\u9009\u540E\u7684\u987A\u5E8F\u3002
     * \u4EE5\u6B64\u4FDD\u8BC1\u540E\u9762 watcher.run \u8C03\u7528\u65F6\uFF0C\u5148\u6D3E\u53D1\u7236\u7EC4\u4EF6\u7684\u4F9D\u8D56\uFF0C\u518D\u6D3E\u53D1\u5B50\u7EC4\u4EF6\u4F9D\u8D56\u3002
     *
     * \u5BF9\u4E8E\u6211\u4EEC\u6B64\u65F6\u7684\u95EE\u9898\uFF0C\u5728\u81EA\u5B9A\u4E49\u7684 options.watch \u4E2D\u5B9A\u4E49\u7684\u76D1\u542C\uFF0C\u4F1A\u6309 watch \u5BF9\u8C61\u5C5E\u6027\u58F0\u660E\u7684\u5148\u540E\u987A\u5E8F\u6392\u5E8F\uFF0C\u5373 params_watcher / product_watcher / project_watcher / sprint_watcher 
     */</span>
    subs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// watcher.update =&gt; \u6839\u636Ewatcher \u7C7B\u578B\u4E0D\u540C\u51B3\u5B9A\uFF1A \u5982\u679C\u662F computed-watcher\uFF0C\u5219 watcher.dirty=true\uFF0C\u5176\u5B83\u7C7B\u578B\u8FD0\u884C watcher.run()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>  
</code></pre></div><p>\u770B\u4E0B <code>subs[i].update()</code> \u51FD\u6570\u6267\u884C\uFF0C\u5B9E\u9645\u4E0A\u662F <code>watcher.update()</code>\u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// computed-watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u540C\u6B65\u6267\u884C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5E38\u89C4\u4E0B\uFF0Cvue \u9879\u76EE\u4E2D\u7684 watcher \u5B9E\u9645\u90FD\u662F\u5F02\u6B65\u7684\u3002\u6240\u4EE5\u8FD9\u91CC\u4EE3\u7801\u4F1A\u6267\u884C\u5230 <code>queueWatcher(this)</code></p><div class="language-js"><pre><code><span class="token comment">/**
 * \u8FD9\u91CC\u5F15\u5165\u4E86\u961F\u5217\u7684\u6982\u5FF5\uFF0C\u8FD9\u4E5F\u662F Vue \u5728\u505A\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u7684\u4E00\u4E2A\u4F18\u5316\u7684\u70B9:
 * \u5B83\u5E76\u4E0D\u4F1A\u6BCF\u6B21\u6570\u636E\u6539\u53D8\u90FD\u89E6\u53D1 watcher \u7684\u56DE\u8C03\uFF0C\u800C\u662F\u628A\u8FD9\u4E9B watcher \u5148\u6DFB\u52A0\u5230\u4E00\u4E2A\u961F\u5217\u91CC\uFF0C\u7136\u540E\u5728 nextTick \u540E\u6267\u884C flushSchedulerQueue\u3002
 *
 * \u8FD9\u91CC\u6709\u51E0\u4E2A\u7EC6\u8282\u8981\u6CE8\u610F\u4E00\u4E0B:
 *   \u9996\u5148\u7528 has \u5BF9\u8C61\u4FDD\u8BC1\u540C\u4E00\u4E2A Watcher \u53EA\u6DFB\u52A0\u4E00\u6B21\uFF1B
 *   \u63A5\u7740\u5BF9 flushing \u7684\u5224\u65AD\u5F53\u524D\u662F\u4E0D\u662F\u6B63\u5728\u6267\u884C\u76D1\u542C\u56DE\u8C03 cb() \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u533A\u522B\u5904\u7406
 *   \u6700\u540E\u901A\u8FC7 waiting \u4FDD\u8BC1\u5BF9 nextTick(flushSchedulerQueue) \u7684\u8C03\u7528\u903B\u8F91\u53EA\u6709\u4E00\u6B21; 
*/</span>
<span class="token keyword">var</span> <span class="token constant">MAX_UPDATE_COUNT</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> has <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> waiting <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flushing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token comment">// \u5F53 flushSchedulerQueue \u6B63\u8FDB\u6267\u884C\u65F6\uFF0C\u5373 watcher.cb() \u6267\u884C\u8FC7\u7A0B\uFF0C\u518D\u6B21\u6D3E\u53D1\u4E86\u4F9D\u8D56\u66F4\u65B0\uFF0C\u5219\u89C6 watcher.id \u7684\u5148\u540E\u63D2\u5165\u5230\u961F\u5217\u672A\u6267\u884C\u7684\u4EFB\u52A1\u4E2D</span>

      <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC while \u662F\u9006\u5411\u67E5\u8BE2\u7684\u3002\u4ECE queue \u5C3E\u90E8\u5F00\u59CB\u627E\u5230\u5F53\u524D\u8981\u63D2\u5165 watcher.id \u7684\u4F4D\u7F6E\uFF0C\u7ED3\u679C\u4E5F\u662F\u4FDD\u8BC1 queue \u961F\u5217\u4E2D\u7684 watcher.id \u4ECD\u7136\u662F\u4ECE\u524D\u5230\u540E\u4FDD\u6301\u5347\u5E8F\u3002</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentFlushTimestamp <span class="token operator">=</span> <span class="token function">getNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  flushing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> watcher<span class="token punctuation">,</span> id<span class="token punctuation">;</span>

  <span class="token comment">// Sort queue before flush.</span>
  <span class="token comment">// This ensures that:</span>
  <span class="token comment">// 1. Components are updated from parent to child. (because parent is always</span>
  <span class="token comment">//    created before the child)</span>
  <span class="token comment">// 2. A component&#39;s user watchers are run before its render watcher (because</span>
  <span class="token comment">//    user watchers are created before the render watcher)</span>
  <span class="token comment">// 3. If a component is destroyed during a parent component&#39;s watcher run,</span>
  <span class="token comment">//    its watchers can be skipped.</span>
  <span class="token comment">/**
   * queue.sort((a, b) =&gt; a.id - b.id) \u5BF9\u961F\u5217\u505A\u4E86\u4ECE\u5C0F\u5230\u5927\u7684\u6392\u5E8F\uFF0C\u8FD9\u4E48\u505A\u4E3B\u8981\u6709\u4EE5\u4E0B\u8981\u786E\u4FDD\u4EE5\u4E0B\u51E0\u70B9\uFF1A
   * 1.\u7EC4\u4EF6\u7684\u66F4\u65B0\u7531\u7236\u5230\u5B50\uFF1B\u56E0\u4E3A\u7236\u7EC4\u4EF6\u7684\u521B\u5EFA\u8FC7\u7A0B\u662F\u5148\u4E8E\u5B50\u7684\uFF0C\u6240\u4EE5 watcher \u7684\u521B\u5EFA\u4E5F\u662F\u5148\u7236\u540E\u5B50\uFF0C\u6267\u884C\u987A\u5E8F\u4E5F\u5E94\u8BE5\u4FDD\u6301\u5148\u7236\u540E\u5B50\u3002
   * 2.\u7528\u6237\u7684\u81EA\u5B9A\u4E49 watcher \u8981\u4F18\u5148\u4E8E\u6E32\u67D3 watcher \u6267\u884C\uFF1B\u56E0\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49 watcher \u662F\u5728\u6E32\u67D3 watcher \u4E4B\u524D\u521B\u5EFA\u7684\u3002
   * 3.\u5982\u679C\u4E00\u4E2A\u7EC4\u4EF6\u5728\u7236\u7EC4\u4EF6\u7684 watcher \u6267\u884C\u671F\u95F4\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5B83\u5BF9\u5E94\u7684 watcher \u6267\u884C\u90FD\u53EF\u4EE5\u88AB\u8DF3\u8FC7\uFF0C\u6240\u4EE5\u7236\u7EC4\u4EF6\u7684 watcher \u5E94\u8BE5\u5148\u6267\u884C\u3002
   * 
  */</span>
  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// do not cache length because more watchers might be pushed</span>
  <span class="token comment">// as we run existing watchers</span>
  <span class="token comment">/**
   * index \u4E0D\u80FD\u5B9A\u4E49\u5728\u5C40\u90E8\uFF0C\u56E0\u4E3A\u5728\u961F\u5217\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u8FD8\u4F1A\u6709 watcher \u63D2\u5165\u961F\u5217\uFF0C\u961F\u5217\u7684 queue.length \u4F1A\u53D8\u5316\uFF0C\u5E76\u4E14\u5F53\u524D\u904D\u5386\u5230\u7684 index \u5728 queueWatcher \u51FD\u6570\u4E2D\u4E5F\u8981\u4F7F\u7528
  */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    watcher<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// in dev build, check and stop circular updates.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      circular<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>circular<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>circular<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token constant">MAX_UPDATE_COUNT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;You may have an infinite update loop &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>
            watcher<span class="token punctuation">.</span>user
              <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;in watcher with expression \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span>
              <span class="token operator">:</span> <span class="token string">&quot;in a component render function.&quot;</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          watcher<span class="token punctuation">.</span>vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// keep copies of post queues before resetting state</span>
  <span class="token keyword">var</span> activatedQueue <span class="token operator">=</span> activatedChildren<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> updatedQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u961F\u5217\u6267\u884C\u5B8C\u6210\u540E\u91CD\u7F6E\u76F8\u5173\u72B6\u6001 \u5982 index has flushing wating \u7684\u503C</span>
  <span class="token function">resetSchedulerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// call component updated and activated hooks</span>
  <span class="token comment">// \u6FC0\u6D3B\u76F8\u5173\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</span>
  <span class="token function">callActivatedHooks</span><span class="token punctuation">(</span>activatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callUpdatedHooks</span><span class="token punctuation">(</span>updatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>watcher.run()</code>\u51FD\u6570</p><div class="language-js"><pre><code><span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">||</span>
      <span class="token comment">// Deep watchers and watchers on Object/Arrays should fire even</span>
      <span class="token comment">// when the value is the same, because the value may</span>
      <span class="token comment">// have mutated.</span>
      <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// set new value</span>
      <span class="token keyword">var</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u6267\u884C user-watcher \u76D1\u542C\u56DE\u8C03\u51FD\u6570\u3002</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;callback for watcher \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// render-watcher / computed-watcher</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u9762\u5C31\u662F\u4F9D\u8D56\u6D3E\u53D1\u7684\u8FC7\u7A0B\u3002</p>`,143),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{m as __pageData,w as default};
