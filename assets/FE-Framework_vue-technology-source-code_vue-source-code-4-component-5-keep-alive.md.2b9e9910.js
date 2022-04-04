import{_ as n,c as s,o as a,a as p}from"./app.f1e974b0.js";const v='{"title":"\u7EC4\u4EF65\uFF1A\u5185\u90E8\u7EC4\u4EF6 KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"KeepAlive \u4F7F\u7528","slug":"keepalive-\u4F7F\u7528"},{"level":2,"title":"KeepAlive \u5B9A\u4E49","slug":"keepalive-\u5B9A\u4E49"},{"level":2,"title":"KeepAlive \u6CE8\u518C","slug":"keepalive-\u6CE8\u518C"},{"level":2,"title":"KeepAlive \u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3","slug":"keepalive-\u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3"},{"level":3,"title":"\u9996\u6B21\u6E32\u67D3","slug":"\u9996\u6B21\u6E32\u67D3"},{"level":3,"title":"\u7F13\u5B58\u6E32\u67D3","slug":"\u7F13\u5B58\u6E32\u67D3"},{"level":2,"title":"KeepAlive \u7EC4\u4EF6\u751F\u547D\u5468\u671F","slug":"keepalive-\u7EC4\u4EF6\u751F\u547D\u5468\u671F"},{"level":2,"title":"\u7F13\u5B58\u7A7A\u95F4","slug":"\u7F13\u5B58\u7A7A\u95F4"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-4-component-5-keep-alive.md"}',t={},o=p(`<h1 id="\u7EC4\u4EF65\uFF1A\u5185\u90E8\u7EC4\u4EF6-keepalive" tabindex="-1">\u7EC4\u4EF65\uFF1A\u5185\u90E8\u7EC4\u4EF6 KeepAlive <a class="header-anchor" href="#\u7EC4\u4EF65\uFF1A\u5185\u90E8\u7EC4\u4EF6-keepalive" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#keepalive-\u4F7F\u7528">KeepAlive \u4F7F\u7528</a></li><li><a href="#keepalive-\u5B9A\u4E49">KeepAlive \u5B9A\u4E49</a></li><li><a href="#keepalive-\u6CE8\u518C">KeepAlive \u6CE8\u518C</a></li><li><a href="#keepalive-\u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3">KeepAlive \u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3</a><ul><li><a href="#\u9996\u6B21\u6E32\u67D3">\u9996\u6B21\u6E32\u67D3</a></li><li><a href="#\u7F13\u5B58\u6E32\u67D3">\u7F13\u5B58\u6E32\u67D3</a></li></ul></li><li><a href="#keepalive-\u7EC4\u4EF6\u751F\u547D\u5468\u671F">KeepAlive \u7EC4\u4EF6\u751F\u547D\u5468\u671F</a></li><li><a href="#\u7F13\u5B58\u7A7A\u95F4">\u7F13\u5B58\u7A7A\u95F4</a></li></ul></div></p><h2 id="keepalive-\u4F7F\u7528" tabindex="-1">KeepAlive \u4F7F\u7528 <a class="header-anchor" href="#keepalive-\u4F7F\u7528" aria-hidden="true">#</a></h2><p>keepAlive \u5305\u88F9\u52A8\u6001\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u7F13\u5B58\u4E0D\u6D3B\u52A8\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u800C\u4E0D\u662F\u9500\u6BC1\u3002 keepAlive&gt; \u4E5F\u662F\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6\uFF1A\u5B83\u81EA\u8EAB\u4E0D\u4F1A\u6E32\u67D3\u4E00\u4E2A DOM \u5143\u7D20\uFF0C\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u5728\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u94FE\u4E2D\u5373 abstract = true\u3002\u5B83\u5B9E\u9645\u6E32\u67D3\u7684\u662F\u5185\u90E8 getFirstComponentChild \u51FD\u6570\u83B7\u53D6\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u8282\u70B9</p><p>\u4F7F\u7528\u8981\u6C42\uFF1A</p><ol><li>\u5B83\u8981\u6C42\u88AB\u5207\u6362\u5230\u7684\u7EC4\u4EF6\u90FD\u6709\u81EA\u5DF1\u7684\u540D\u5B57\uFF0C\u4E0D\u8BBA\u662F\u901A\u8FC7\u7EC4\u4EF6\u7684 name \u9009\u9879\u8FD8\u662F\u5C40\u90E8/\u5168\u5C40\u6CE8\u518C\u3002</li><li>\u5B83\u5185\u90E8\u5B50\u7EC4\u4EF6\u8981\u6C42\u540C\u65F6\u53EA\u6709\u4E00\u4E2A\u5B50\u5143\u7D20\u88AB\u6E32\u67D3\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528\u5176\u5B50\u5143\u7D20\u4E0A\u4F7F\u7528 v-for \u4E2D\u3002\u5E38\u89C1\u7684\u60C5\u5F62\u662F\u5728 v-if \u5207\u6362\u7EC4\u4EF6\u3001component is \u52A8\u6001\u7EC4\u4EF6\u3001router-link \u8DEF\u7531\u7EC4\u4EF6</li><li>\u56E0\u4E3A keep-alive \u53EA\u5904\u7406\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u5373\u5185\u90E8\u5B9E\u73B0\u4E86 vnode = getFirstComponentChild(slot)</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp-a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a &gt; 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp-a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp-b</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp-b</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/a|b/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="keepalive-\u5B9A\u4E49" tabindex="-1">KeepAlive \u5B9A\u4E49 <a class="header-anchor" href="#keepalive-\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">/**
 * \u4E00\u3001keepAlive \u7EC4\u4EF6\u7684\u5185\u90E8\u5B9A\u4E49\uFF0C\u4F7F\u7528 render \u51FD\u6570\u6E32\u67D3
 * 1. keepAlive \u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u7684\u4E3B\u8981\u662F\u56E0\u4E3A\u5728\u7EC4\u4EF6\u5185\u90E8\u5B9A\u4E49\u4E86 this.cache \u6570\u7EC4\u5B58\u50A8\u4E86\u5185\u90E8\u7EC4\u4EF6
 * 2. keepAlive \u7EC4\u4EF6\u5BF9\u7F13\u5B58\u7684\u4F18\u5316\u4F7F\u7528\u4E86 LRU\uFF0C\u5373\u5220\u9664\u6700\u5C11\u4F7F\u7528\u7684\u5DF2\u7F13\u5B58\u7EC4\u4EF6\u3002\u901A\u8FC7 keys \u3001 pruneCache\u51FD\u6570\u548C pruneCacheEntry \u51FD\u6570\u5B9E\u73B0
 *    \u8868\u73B0\u5728\u6700\u65B0\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u63D2\u5165 keys \u5C3E\u90E8\uFF0C\u8FBE\u5230\u7F13\u5B58\u9650\u5236\u65F6\u5220\u9664\u5934\u90E8\u3002
 */</span>
<span class="token keyword">var</span> patternTypes <span class="token operator">=</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> RegExp<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> KeepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">abstract</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">include</span><span class="token operator">:</span> patternTypes<span class="token punctuation">,</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> patternTypes<span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EC4\u4EF6\u7F13\u5B58\uFF1A key: comp</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7F13\u5B58\u4F18\u5316\uFF1A\u6700\u8FD1\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u63A8\u5165\u5C3E\u90E8\uFF0C\u9700\u8981\u6E05\u7406\u65F6\u5220\u9664\u9996\u4E2A\u5143\u7D20</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// keepAlive \u7EC4\u4EF6\u81EA\u8EAB\u5378\u8F7D\u65F6\uFF0C\u4E5F\u5BF9\u5DF2\u7F13\u5B58\u7684\u7EC4\u4EF6\u8FDB\u884C\u5378\u8F7D\uFF0C\u5B9E\u73B0\u5185\u5B58\u4F18\u5316</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token keyword">this</span>$1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// \u76D1\u542C include / exclude \u7684\u53D8\u5316\uFF0C\u66F4\u65B0\u7F13\u5B58 cache \u503C\uFF0C\u5BF9\u5DF2\u7ECF\u4E0D\u6EE1\u8DB3 include \u7684\u7EC4\u4EF6\u9000\u51FA\u7F13\u5B58\uFF0C\u6216\u6EE1\u8DB3 exclude \u7684\u7EC4\u4EF6\u4E5F\u9000\u51FA\u7F13\u5B58</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token keyword">this</span>$1<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">matches</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;exclude&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token keyword">this</span>$1<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// keepAlive \u7EC4\u4EF6\u5185\u5B50\u5143\u7D20</span>
    <span class="token keyword">var</span> slot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
    <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token function">getFirstComponentChild</span><span class="token punctuation">(</span>slot<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u4F5C\u4E3AkeepAlive\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6</span>
    <span class="token keyword">var</span> componentOptions <span class="token operator">=</span> vnode <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>componentOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// check pattern</span>
      <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>componentOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> include <span class="token operator">=</span> ref<span class="token punctuation">.</span>include<span class="token punctuation">;</span>
      <span class="token keyword">var</span> exclude <span class="token operator">=</span> ref<span class="token punctuation">.</span>exclude<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token comment">// not included \u5BF9\u4E0D\u5339\u914D include \u6761\u4EF6\u7684\u7EC4\u4EF6\u76F4\u63A5\u8FD4\u56DE vnode</span>
        <span class="token punctuation">(</span>include <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>include<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token comment">// excluded \u5BF9\u5339\u914D excluded \u6761\u4EF6\u7684\u7EC4\u4EF6\u4E5F\u76F4\u63A5\u8FD4\u56DE vonde</span>
        <span class="token punctuation">(</span>exclude <span class="token operator">&amp;&amp;</span> name <span class="token operator">&amp;&amp;</span> <span class="token function">matches</span><span class="token punctuation">(</span>exclude<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vnode
      <span class="token punctuation">}</span>

      <span class="token keyword">var</span> ref$1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> cache <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>cache<span class="token punctuation">;</span>
      <span class="token keyword">var</span> keys <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>keys<span class="token punctuation">;</span>

      <span class="token comment">// \u5982\u679C\u7EC4\u4EF6\u6CA1\u6709\u5B9A\u4E49 key\uFF0C\u5219\u7528 cid + tag::+tag,\u5982 1::ComA</span>
      <span class="token keyword">var</span> key <span class="token operator">=</span> vnode<span class="token punctuation">.</span>key <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token comment">// same constructor may get registered as different local components</span>
        <span class="token comment">// so cid alone is not enough (#3269)</span>
        <span class="token operator">?</span> componentOptions<span class="token punctuation">.</span>Ctor<span class="token punctuation">.</span>cid <span class="token operator">+</span> <span class="token punctuation">(</span>componentOptions<span class="token punctuation">.</span>tag <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;::&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>componentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> vnode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
        <span class="token comment">// make current key freshest</span>
        <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B50\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u5C06\u5176\u7F13\u5B58\u8FDB cache \u5BF9\u8C61\u548C keys \u6570\u7EC4</span>
        cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
        keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// prune oldest entry \u5982\u679C\u5F53\u524D\u5DF2\u7F13\u5B58\u7684\u7EC4\u4EF6\u5DF2\u8D85\u51FA\u9884\u8BBE\u7F13\u5B58\u6570\u91CF\uFF0C\u5219\u5C06 keys[0] \u9996\u4F4D\u8282\u70B9\u6570\u636E\u5220\u9664</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// keepAlive \u7EC4\u4EF6\u6807\u8BC6\u4F4D</span>
      vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// keepAlive </span>
    <span class="token keyword">return</span> vnode <span class="token operator">||</span> <span class="token punctuation">(</span>slot <span class="token operator">&amp;&amp;</span> slot<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// hleper</span>
<span class="token keyword">function</span> <span class="token function">getComponentName</span> <span class="token punctuation">(</span><span class="token parameter">opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> opts <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> opts<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">matches</span> <span class="token punctuation">(</span><span class="token parameter">pattern<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> pattern <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRegExp</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pruneCache</span> <span class="token punctuation">(</span><span class="token parameter">keepAliveInstance<span class="token punctuation">,</span> filter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cache <span class="token operator">=</span> keepAliveInstance<span class="token punctuation">.</span>cache<span class="token punctuation">;</span>
  <span class="token keyword">var</span> keys <span class="token operator">=</span> keepAliveInstance<span class="token punctuation">.</span>keys<span class="token punctuation">;</span>
  <span class="token keyword">var</span> _vnode <span class="token operator">=</span> keepAliveInstance<span class="token punctuation">.</span>_vnode<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cachedNode <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>cachedNode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">filter</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> key<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> _vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pruneCacheEntry</span> <span class="token punctuation">(</span>
  <span class="token parameter">cache<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  keys<span class="token punctuation">,</span>
  current</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cached$$1 <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// key \u5B58\u5728\u7EC4\u4EF6\u7F13\u5B58\uFF0C\u4E14\u4E0D\u662F\u5F53\u524D\u663E\u793A\u7684\u7EC4\u4EF6\uFF0C\u5219\u6E05\u9664</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cached$$1 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>current <span class="token operator">||</span> cached$$1<span class="token punctuation">.</span>tag <span class="token operator">!==</span> current<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cached$$1<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="keepalive-\u6CE8\u518C" tabindex="-1">KeepAlive \u6CE8\u518C <a class="header-anchor" href="#keepalive-\u6CE8\u518C" aria-hidden="true">#</a></h2><p>keepAlive \u4EC0\u4E48\u65F6\u5019\u6CE8\u518C\u548C\u5728\u54EA\u6CE8\u518C\u7684\uFF1A\u5206\u4E24\u79CD\uFF1A</p><ul><li>new Vue \u5B9E\u4F8B\u5316\u65F6\u5168\u5C40\u7EC4\u4EF6\u7684\u6CE8\u518C</li><li>\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u5168\u5C40\u7EC4\u4EF6\u7684\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token comment">// new Vue \u5B9E\u4F8B\u5316\u65F6\u5168\u5C40\u7EC4\u4EF6</span>
<span class="token keyword">var</span> builtInComponents <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">KeepAlive</span><span class="token operator">:</span> KeepAlive
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">initGlobalAPI</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">initGlobalAPI</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  Vue<span class="token punctuation">.</span>options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// ASSET_TYPES = [&#39;component&#39;, &#39;directive&#39;, &#39;filter&#39;]</span>
    Vue<span class="token punctuation">.</span>options<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Vue.options.components / Vue.options.directives / Vue.options.filters</span>

  <span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">,</span> builtInComponents<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Vue.optioins.componens.KeepAlive = KeepAlive</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ECF\u8FC7 initGlobalAPI(Vue) \u540E\uFF0CVue \u6784\u9020\u51FD\u6570\u7684\u9ED8\u8BA4\u9009\u9879</span>
Vue<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">KeepAlive</span><span class="token operator">:</span> KeepAlive<span class="token punctuation">,</span>
    <span class="token literal-property property">Transition</span><span class="token operator">:</span> Transition<span class="token punctuation">,</span>
    <span class="token literal-property property">TransitionGroup</span><span class="token operator">:</span> TransitionGroup<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">inserted</span><span class="token operator">:</span> \u0192<span class="token punctuation">,</span> <span class="token literal-property property">componentUpdated</span><span class="token operator">:</span> \u0192<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">bind</span><span class="token operator">:</span> \u0192<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> \u0192<span class="token punctuation">,</span> <span class="token literal-property property">unbind</span><span class="token operator">:</span> \u0192<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_base</span><span class="token operator">:</span> Vue
<span class="token punctuation">}</span>

<span class="token comment">// \u7136\u540E\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6 _init</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token comment">// merge options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u9009\u9879\u5408\u5E76</span>
    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// new Vue \u65F6\u9009\u9879\u5408\u5E76</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Vue.options</span>
      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5148\u770B new Vue \u65F6 mergeOptions</span>
<span class="token keyword">function</span> <span class="token function">mergeOptions</span> <span class="token punctuation">(</span>
  <span class="token parameter">parent<span class="token punctuation">,</span>
  child<span class="token punctuation">,</span>
  vm</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> key<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">mergeField</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> strat <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> defaultStrat<span class="token punctuation">;</span>
    options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strat</span><span class="token punctuation">(</span>parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>

<span class="token comment">// strat(Vue.options.components, child.components, vm, components)</span>
<span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  strats<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> mergeAssets<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">mergeAssets</span> <span class="token punctuation">(</span>
  <span class="token parameter">parentVal<span class="token punctuation">,</span>
  childVal<span class="token punctuation">,</span>
  vm<span class="token punctuation">,</span>
  key</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parentVal <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4EE5 Vue.options.components \u4E3A\u539F\u578B</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>childVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertObjectType</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> childVal<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">extend</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> childVal<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u7ED3\u679C\u5C31\u662F:
 * vm.$options = {
 *  components: {
 *    childComponents,
 *    __proto__: {
 *      KeepAlive: KeepAlive
 *    }
 *  }
 * }
 */</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u7684\u6CE8\u518C</span>
<span class="token comment">// \u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\uFF1A\u5408\u5E76\u9009\u9879\u8C03\u7528 initInternalComponent</span>
<span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// vm.constructor = Sub</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>

<span class="token comment">//_createElement =&gt; createComponent =&gt;  Ctor = baseCtor.extend(childOptions);</span>
Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
    Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token comment">// Vue.options</span>
    extendOptions
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">/**
   * \u7ED3\u679C\u5C31\u662F:
   * Sub.options = {
   *  components: {
   *    childComponents,
   *    __proto__: {
   *      KeepAlive: KeepAlive
   *    }
   *  }
   * }
   */</span>
  <span class="token keyword">return</span> Sub
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="keepalive-\u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3" tabindex="-1">KeepAlive \u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3 <a class="header-anchor" href="#keepalive-\u7EC4\u4EF6\u7684\u7F16\u8BD1\u6E32\u67D3" aria-hidden="true">#</a></h2><h3 id="\u9996\u6B21\u6E32\u67D3" tabindex="-1">\u9996\u6B21\u6E32\u67D3 <a class="header-anchor" href="#\u9996\u6B21\u6E32\u67D3" aria-hidden="true">#</a></h3><p>KeepAlive \u9996\u6B21\u6E32\u67D3\uFF0C\u540C\u5E38\u89C4\u7EC4\u4EF6\u4E00\u6837\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u6B64\u65F6\u56E0\u4E3A KeepAlive \u7EC4\u4EF6\u662F\u76F4\u63A5\u5B9A\u4E49 options.render \u51FD\u6570\u3002 \u51FD\u6570\u8C03\u7528\u5168\u8DEF\u5F84\uFF1A<code>$mount =&gt; mountComponent =&gt; updateComponent =&gt; vm._update(vm._render(), false) =&gt; vm._render</code></p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    currentRenderingInstance <span class="token operator">=</span> vm<span class="token punctuation">;</span>
    vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    currentRenderingInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6B64\u65F6\u6267\u884C KeepAlive \u5B9A\u4E49\u7684 render \u65B9\u6CD5\uFF0C\u89C1\u4E0A\u9762</span>
<span class="token comment">// \u56E0\u4E3A\u662F\u9996\u6B21\u6E32\u67D3\uFF0C\u6240\u4EE5\u83B7\u53D6this.$slot.defalut \u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u7F13\u5B58 cache \u3001 keys\uFF0C\u540E\uFF0C\u8FD4\u56DE\u8BE5\u5B50\u5143\u7D20\u7EC4\u4EF6\u7684 vnode</span>
<span class="token comment">// \u6CE8\u610F\u5728 KeepAlive \u7EC4\u4EF6\u7684 render \u51FD\u6570\u91CC\uFF0C\u4F1A\u5C06\u83B7\u53D6\u7684\u5B50\u5143\u7D20\u7EC4\u4EF6 vnode.data.keepAlive = true</span>
<span class="token comment">// \u7136\u540E vm.update \u5C31\u4F1A\u6E32\u67D3\u5B50\u5143\u7D20\u7EC4\u4EF6\u4E00\u76F4\u5230\u6302\u8F7D\u663E\u793A\uFF1Avm._update =&gt; createElm =&gt; createComponent =&gt; i =&gt; init</span>
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
      <span class="token comment">// \u6B64\u65F6 keepAlive \u9996\u6B21\u6E32\u67D3\uFF0Cif \u5206\u652F\u4F1A\u8D70\u8FD9\u91CC\uFF0C\u6B63\u5E38\u8FDB\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u5316</span>
      <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>
        vnode<span class="token punctuation">,</span>
        activeInstance
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7F13\u5B58\u6E32\u67D3" tabindex="-1">\u7F13\u5B58\u6E32\u67D3 <a class="header-anchor" href="#\u7F13\u5B58\u6E32\u67D3" aria-hidden="true">#</a></h3><p>\u5F53\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u6539\u53D8\uFF0C\u6D3E\u53D1\u4F9D\u8D56\u66F4\u65B0\uFF1AupdateComponent =&gt; vm._update(vm._render()) =&gt; vm._update =&gt; patch =&gt; patchVnode =&gt; updateChildren\uFF0C\u6B64\u65F6\u66F4\u65B0\u5230\u7EC4\u4EF6\u4E2D\u7684 KeepAlive</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">patchVnode</span> <span class="token punctuation">(</span>
  <span class="token parameter">oldVnode<span class="token punctuation">,</span>
  vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index<span class="token punctuation">,</span>
  removeOnly</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token keyword">var</span> i<span class="token punctuation">;</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>prepatch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>

<span class="token function-variable function">prepatch</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">prepatch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
  <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
  <span class="token function">updateChildComponent</span><span class="token punctuation">(</span>
    child<span class="token punctuation">,</span>
    options<span class="token punctuation">.</span>propsData<span class="token punctuation">,</span> <span class="token comment">// updated props</span>
    options<span class="token punctuation">.</span>listeners<span class="token punctuation">,</span> <span class="token comment">// updated listeners</span>
    vnode<span class="token punctuation">,</span> <span class="token comment">// new parent vnode</span>
    options<span class="token punctuation">.</span>children <span class="token comment">// new children</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateChildComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  propsData<span class="token punctuation">,</span>
  listeners<span class="token punctuation">,</span>
  parentVnode<span class="token punctuation">,</span>
  renderChildren</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// determine whether component has slot children</span>
  <span class="token comment">// we need to do this before overwriting $options._renderChildren.</span>

  <span class="token comment">// check if there are dynamic scopedSlots (hand-written or compiled but with</span>
  <span class="token comment">// dynamic slot names). Static scoped slots compiled from template has the</span>
  <span class="token comment">// &quot;$stable&quot; marker.</span>
  <span class="token keyword">var</span> newScopedSlots <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">;</span>
  <span class="token keyword">var</span> oldScopedSlots <span class="token operator">=</span> vm<span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">;</span>
  <span class="token keyword">var</span> hasDynamicScopedSlot <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>newScopedSlots <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>newScopedSlots<span class="token punctuation">.</span>$stable<span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token punctuation">(</span>oldScopedSlots <span class="token operator">!==</span> emptyObject <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>oldScopedSlots<span class="token punctuation">.</span>$stable<span class="token punctuation">)</span> <span class="token operator">||</span>
    <span class="token punctuation">(</span>newScopedSlots <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span>$key <span class="token operator">!==</span> newScopedSlots<span class="token punctuation">.</span>$key<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Any static slot children from the parent may have changed during parent&#39;s</span>
  <span class="token comment">// update. Dynamic scoped slots may also have changed. In such cases, a forced</span>
  <span class="token comment">// update is necessary to ensure correctness.</span>
  <span class="token keyword">var</span> needsForceUpdate <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>
    renderChildren <span class="token operator">||</span>               <span class="token comment">// has new static slots</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_renderChildren <span class="token operator">||</span>  <span class="token comment">// has old static slots</span>
    hasDynamicScopedSlot
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// resolve slots + force update if has children</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>needsForceUpdate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$slots <span class="token operator">=</span> <span class="token function">resolveSlots</span><span class="token punctuation">(</span>renderChildren<span class="token punctuation">,</span> parentVnode<span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vm<span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * updateChildComponent \u65B9\u6CD5\u4E3B\u8981\u662F\u53BB\u66F4\u65B0\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u8FD9\u91CC\u6211\u4EEC\u91CD\u70B9\u5173\u6CE8\u4E00\u4E0B slot \u90E8\u5206\uFF0C
 * \u7531\u4E8E &lt;keep-alive&gt; \u7EC4\u4EF6\u672C\u8D28\u4E0A\u652F\u6301\u4E86 slot\uFF0C\u6240\u4EE5\u5B83\u6267\u884C prepatch \u7684\u65F6\u5019\uFF0C\u9700\u8981\u5BF9\u81EA\u5DF1\u7684 children\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E9B slots \u505A\u91CD\u65B0\u89E3\u6790
 * \u5E76\u89E6\u53D1 &lt;keep-alive&gt; \u7EC4\u4EF6\u5B9E\u4F8B $forceUpdate \u903B\u8F91\uFF0C\u5373 vm._watcher.update() =&gt;vm._watcher.run() =&gt; vm._watcher.get() = vm._watcher.getter() =&gt; updateComponent =&gt; vm._update(vm._render())
 * \u4E5F\u5C31\u662F\u91CD\u65B0\u6267\u884C &lt;keep-alive&gt; \u7684 render \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u5B83\u5305\u88F9\u7684\u7B2C\u4E00\u4E2A\u7EC4\u4EF6 vnode \u547D\u4E2D\u7F13\u5B58\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u4E2D\u7684 vnode.componentInstance
 */</span>
vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
<span class="token comment">// \u7136\u540E\u5728\u6267\u884C vm._update \u65F6vm._update =&gt; createElm =&gt; createComponent =&gt; init</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u62FF\u5230\u7684 vnode.data \u662F\u5728 vm._render \u51FD\u6570\u4E2D createComponent \u51FD\u6570\u4E2D\u521B\u5EFA\u8FD4\u56DE\u7684 vnode</span>
  <span class="token comment">// \u5176\u4E2D  installComponentHooks(data) \u6267\u884C\u5373\u5B89\u88C5\u4E86\u7EC4\u4EF6\u521B\u5EFA\u7684\u94A9\u5B50\u51FD\u6570 vnode.data.hook</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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

<span class="token comment">/**
 * \u8FD9\u91CC\u540C\u6837\u4F1A\u6267\u884C\u5230keep-alive \u7EC4\u4EF6\u5185\u90E8\u7684 init
 */</span>
<span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">init</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span>_isDestroyed <span class="token operator">&amp;&amp;</span>
      vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// kept-alive \u66F4\u65B0\u6E32\u67D3\uFF0C\u4F1A\u8D70\u5411\u8FD9\u4E2A\u5206\u652F</span>
      <span class="token keyword">var</span> mountedNode <span class="token operator">=</span> vnode<span class="token punctuation">;</span> <span class="token comment">// work around flow</span>
      componentVNodeHooks<span class="token punctuation">.</span><span class="token function">prepatch</span><span class="token punctuation">(</span>mountedNode<span class="token punctuation">,</span> mountedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6B64\u65F6 keepAlive \u9996\u6B21\u6E32\u67D3</span>
      <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>
        vnode<span class="token punctuation">,</span>
        activeInstance
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6B64\u65F6 vnode.componentInstance \u662F keepAlive \u7EC4\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C</span>
<span class="token comment">// \u6240\u4EE5 componentVNodeHooks.prepatch(mountedNode, mountedNode) \u4F1A\u89E6\u53D1 keepAlive \u7EC4\u4EF6\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u5F3A\u5236\u66F4\u65B0\u6E32\u67D3\u3002</span>
<span class="token comment">// \u4E4B\u540E\uFF0CcreateComponent \u7EE7\u7EED\u6267\u884C\uFF0C\u8C03\u7528 insert(parentElm, vnode.elm, refElm) \u63D2\u5165 DOM</span>
<span class="token comment">// if (isDef(vnode.componentInstance)) { isDef(vnode.componentInstance)) \u5206\u652F\u6267\u884C\u4E24\u6B21 insert \u4F3C\u4E4E\u6709\u70B9\u591A\u4F59</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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
</code></pre></div><h2 id="keepalive-\u7EC4\u4EF6\u751F\u547D\u5468\u671F" tabindex="-1">KeepAlive \u7EC4\u4EF6\u751F\u547D\u5468\u671F <a class="header-anchor" href="#keepalive-\u7EC4\u4EF6\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A keepAlive \u7EC4\u4EF6\u518D\u6B21\u6E32\u67D3\u65F6\uFF0C\u5E76\u4E0D\u4F1A\u8D70 $mount\u51FD\u6570\uFF0C\u800C\u662F\u3000prepatch \u51FD\u6570\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u518D\u6B21\u6267\u884C beforeMount \u548C mounted \u94A9\u5B50\u51FD\u6570\uFF0C\u800C\u662F\u5728 insert \u51FD\u6570\u4E2D\u6267\u884C actived \u94A9\u5B50\u51FD\u6570</p><div class="language-js"><pre><code><span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">insert</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> context <span class="token operator">=</span> vnode<span class="token punctuation">.</span>context<span class="token punctuation">;</span>
 <span class="token keyword">var</span> componentInstance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>componentInstance<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   componentInstance<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token function">callHook</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">queueActivatedComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// vnode.data.keepAlive = true \u5224\u65AD\u5982\u679C\u662F\u88AB &lt;keep-alive&gt; \u5305\u88F9\u7684\u7EC4\u4EF6\u5DF2\u7ECF mounted\uFF0C</span>
<span class="token comment">// \u5982\u679C\u88AB keep-alive \u5305\u88F9\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u6302\u8F7D\u4E86\uFF0C\u5219\u6267\u884C queueActivatedComponent</span>
<span class="token keyword">function</span> <span class="token function">queueActivatedComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// setting _inactive to false here so that a render function can</span>
 <span class="token comment">// rely on checking whether it&#39;s in an inactive tree (e.g. router-view)</span>
 vm<span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 activatedChildren<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8FD9\u4E2A\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u628A\u5F53\u524D vm \u5B9E\u4F8B\u6DFB\u52A0\u5230 activatedChildren \u6570\u7EC4\u4E2D\uFF0C</span>
<span class="token comment">// \u7B49\u6240\u6709\u7684\u6E32\u67D3\u5B8C\u6BD5\uFF0C\u5728 nextTick\u540E\u4F1A\u6267\u884C flushSchedulerQueue \u51FD\u6570\u4E2D\u6267\u884C</span>
<span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// ...</span>
 <span class="token keyword">const</span> activatedQueue <span class="token operator">=</span> activatedChildren<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token function">callActivatedHooks</span><span class="token punctuation">(</span>activatedQueue<span class="token punctuation">)</span>
 <span class="token comment">// ...</span>
<span class="token punctuation">}</span> 

<span class="token keyword">function</span> <span class="token function">callActivatedHooks</span> <span class="token punctuation">(</span><span class="token parameter">queue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u904D\u5386\u6240\u6709\u7684 activatedChildren\uFF0C\u6267\u884C activateChildComponent \u65B9\u6CD5</span>
 <span class="token comment">// \u901A\u8FC7\u961F\u5217\u8C03\u7684\u65B9\u5F0F\u5C31\u662F\u628A\u6574\u4E2A activated \u65F6\u673A\u5EF6\u540E\u4E86</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">true</span>
   <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679C\u88AB keep-alive \u5305\u88F9\u7684\u7EC4\u4EF6\u8FD8\u6CA1\u6709\u6302\u8F7D\uFF0C\u5219\u6267\u884C activateChildComponent</span>
<span class="token keyword">function</span> <span class="token function">activateChildComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> direct</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>direct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   vm<span class="token punctuation">.</span>_directInactive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInInactiveTree</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_directInactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_inactive <span class="token operator">||</span> vm<span class="token punctuation">.</span>_inactive <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   vm<span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vm<span class="token punctuation">.</span>$children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;activated&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u5C31\u662F\u6267\u884C\u7EC4\u4EF6\u7684 acitvated \u94A9\u5B50\u51FD\u6570\uFF0C</span>
<span class="token comment">// \u5E76\u4E14\u9012\u5F52\u53BB\u6267\u884C\u5B83\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u7684 activated \u94A9\u5B50\u51FD\u6570\u3002</span>

<span class="token comment">// \u6709 activated \u94A9\u5B50\u51FD\u6570\uFF0C\u4E5F\u5C31\u6709\u5BF9\u5E94\u7684 deactivated \u94A9\u5B50\u51FD\u6570\uFF0C</span>
<span class="token comment">// \u5B83\u662F\u53D1\u751F\u5728 vnode \u7684 destory \u94A9\u5B50\u51FD\u6570</span>
<span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> componentInstance <span class="token punctuation">}</span> <span class="token operator">=</span> vnode
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>componentInstance<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">deactivateChildComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> direct</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>direct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   vm<span class="token punctuation">.</span>_directInactive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInInactiveTree</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>_inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   vm<span class="token punctuation">.</span>_inactive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> vm<span class="token punctuation">.</span>$children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u548C activateChildComponent \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u5C31\u662F\u6267\u884C\u7EC4\u4EF6\u7684 deacitvated \u94A9\u5B50\u51FD\u6570\uFF0C</span>
<span class="token comment">// \u5E76\u4E14\u9012\u5F52\u53BB\u6267\u884C\u5B83\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u7684 deactivated \u94A9\u5B50\u51FD\u6570</span>
</code></pre></div><h2 id="\u7F13\u5B58\u7A7A\u95F4" tabindex="-1">\u7F13\u5B58\u7A7A\u95F4 <a class="header-anchor" href="#\u7F13\u5B58\u7A7A\u95F4" aria-hidden="true">#</a></h2><p>\u7A0B\u5E8F\u7684\u5185\u5B58\u7A7A\u95F4\u662F\u6709\u9650\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u65E0\u6CD5\u65E0\u8282\u5236\u7684\u5BF9\u6570\u636E\u8FDB\u884C\u5B58\u50A8\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u6709\u7B56\u7565\u53BB\u6DD8\u6C70\u4E0D\u90A3\u4E48\u91CD\u8981\u7684\u6570\u636E\uFF0C\u4FDD\u6301\u6700\u5927\u6570\u636E\u5B58\u50A8\u91CF\u7684\u4E00\u81F4\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u7B56\u7565\u79F0\u4E3A\u7F13\u5B58\u4F18\u5316\u7B56\u7565\uFF0C\u6839\u636E\u6DD8\u6C70\u7684\u673A\u5236\u4E0D\u540C\uFF0C\u5E38\u7528\u7684\u6709\u4EE5\u4E0B\u4E09\u7C7B\u3002</p><ol><li>FIFO\uFF1A \u5148\u8FDB\u5148\u51FA\u7B56\u7565\uFF0C\u6211\u4EEC\u901A\u8FC7\u8BB0\u5F55\u6570\u636E\u4F7F\u7528\u7684\u65F6\u95F4\uFF0C\u5F53\u7F13\u5B58\u5927\u5C0F\u5373\u5C06\u6EA2\u51FA\u65F6\uFF0C\u4F18\u5148\u6E05\u9664\u79BB\u5F53\u524D\u65F6\u95F4\u6700\u8FDC\u7684\u6570\u636E\u3002</li><li>LRU\uFF1A \u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7B56\u7565, \u9075\u5FAA\u7684\u539F\u5219\u662F\uFF0C\u5982\u679C\u6570\u636E\u6700\u8FD1\u88AB\u8BBF\u95EE(\u4F7F\u7528)\u8FC7\uFF0C\u90A3\u4E48\u5C06\u6765\u88AB\u8BBF\u95EE\u7684\u51E0\u7387\u4F1A\u66F4\u9AD8\uFF0C\u5982\u679C\u4EE5\u4E00\u4E2A\u6570\u7EC4\u53BB\u8BB0\u5F55\u6570\u636E\uFF0C\u5F53\u6709\u4E00\u6570\u636E\u88AB\u8BBF\u95EE\u65F6\uFF0C\u8BE5\u6570\u636E\u4F1A\u88AB\u79FB\u52A8\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u8868\u660E\u6700\u8FD1\u88AB\u4F7F\u7528\u8FC7\uFF0C\u5F53\u7F13\u5B58\u6EA2\u51FA\u65F6\uFF0C\u4F1A\u5220\u9664\u6570\u7EC4\u7684\u5934\u90E8\u6570\u636E\uFF0C\u5373\u5C06\u6700\u4E0D\u9891\u7E41\u4F7F\u7528\u7684\u6570\u636E\u79FB\u9664\u3002</li><li>LFU: \u8BA1\u6570\u6700\u5C11\u7B56\u7565\u3002\u7528\u6B21\u6570\u53BB\u6807\u8BB0\u6570\u636E\u4F7F\u7528\u9891\u7387\uFF0C\u6B21\u6570\u6700\u5C11\u7684\u4F1A\u5728\u7F13\u5B58\u6EA2\u51FA\u65F6\u88AB\u6DD8\u6C70\u3002\u8FD9\u4E09\u79CD\u7F13\u5B58\u7B97\u6CD5\u5404\u6709\u4F18\u52A3\uFF0C\u5404\u81EA\u9002\u7528\u4E0D\u540C\u573A\u666F\uFF0C\u800C\u6211\u4EEC\u770Bkeep-alive\u5728\u7F13\u5B58\u65F6\u7684\u4F18\u5316\u5904\u7406\uFF0C\u5F88\u660E\u663E\u5229\u7528\u4E86LRU\u7684\u7F13\u5B58\u7B56\u7565\u3002\u4EE5\u4E0B\u5C31\u662Fvue\u4E2D\u5BF9keep-alive\u7F13\u5B58\u5904\u7406\u7684\u4F18\u5316\u4EE3\u7801\u3002</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> keepAlive <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801\xB7\xB7\xB7</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
      <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u5F53\u524D\u7684\uFF0C\u7136\u540E\u63D2\u5165\u5230\u672A\u5C3E</span>
      keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
      keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5F53\u7F13\u5B58\u8FBE\u5230\u6700\u5927\u503C\u65F6\uFF0C\u5220\u9664\u6700\u4E0D\u5E38\u7528\u7684\u9996\u4E2A\u5143\u7D20</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">remove</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">pruneCacheEntry</span> <span class="token punctuation">(</span>
  <span class="token parameter">cache<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  keys<span class="token punctuation">,</span>
  current</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cached$$1 <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// key \u5B58\u5728\u7EC4\u4EF6\u7F13\u5B58\uFF0C\u4E14\u4E0D\u662F\u5F53\u524D\u663E\u793A\u7684\u7EC4\u4EF6\uFF0C\u5219\u6E05\u9664</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cached$$1 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>current <span class="token operator">||</span> cached$$1<span class="token punctuation">.</span>tag <span class="token operator">!==</span> current<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cached$$1<span class="token punctuation">.</span>componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,28),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{v as __pageData,y as default};
