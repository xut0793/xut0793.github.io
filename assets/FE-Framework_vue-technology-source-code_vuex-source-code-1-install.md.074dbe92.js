import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const y='{"title":"vuex\u6E90\u78011\uFF1Ainstall \u6CE8\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"vuex \u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4","slug":"vuex-\u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4"},{"level":2,"title":"Vuex \u5BFC\u51FA\u7684\u63A5\u53E3","slug":"vuex-\u5BFC\u51FA\u7684\u63A5\u53E3"},{"level":2,"title":"\u6CE8\u518C\u63D2\u4EF6","slug":"\u6CE8\u518C\u63D2\u4EF6"}],"relativePath":"FE-Framework/vue-technology-source-code/vuex-source-code-1-install.md"}',p={},o=t(`<h1 id="vuex\u6E90\u78011\uFF1Ainstall-\u6CE8\u518C" tabindex="-1">vuex\u6E90\u78011\uFF1Ainstall \u6CE8\u518C <a class="header-anchor" href="#vuex\u6E90\u78011\uFF1Ainstall-\u6CE8\u518C" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#vuex-\u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4">vuex \u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4</a></li><li><a href="#vuex-\u5BFC\u51FA\u7684\u63A5\u53E3">Vuex \u5BFC\u51FA\u7684\u63A5\u53E3</a></li><li><a href="#\u6CE8\u518C\u63D2\u4EF6">\u6CE8\u518C\u63D2\u4EF6</a></li></ul></div></p><h2 id="vuex-\u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4" tabindex="-1">vuex \u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4 <a class="header-anchor" href="#vuex-\u7684\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// 1. \u5F15\u5165vue \u548C vuex</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token comment">// 2. \u5728vue\u4E2D\u6CE8\u518Cvuex\u63D2\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">// 3. \u5B9E\u4F8B\u5316\u4E00\u4E2A\u7BA1\u7406\u72B6\u6001\u7684\u4ED3\u5E93store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 4. \u5C06store \u5168\u5C40\u6CE8\u5165\u5230vue\u5B9E\u4F8B</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u628A store \u5BF9\u8C61\u63D0\u4F9B\u7ED9 \u201Cstore\u201D \u9009\u9879\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u628A store \u7684\u5B9E\u4F8B\u6CE8\u5165\u6240\u6709\u7684\u5B50\u7EC4\u4EF6</span>
    store<span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u5B83\u4EE3\u7801...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 5. \u7EC4\u4EF6\u4E2D\u4F7F\u7528 this.$store</span>
<span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u7167\u4E0A\u9762 5 \u4E2A\u6B65\u9AA4\uFF0C\u6211\u4EEC\u7406\u89E3\u6E90\u7801\u903B\u8F91</p><h2 id="vuex-\u5BFC\u51FA\u7684\u63A5\u53E3" tabindex="-1">Vuex \u5BFC\u51FA\u7684\u63A5\u53E3 <a class="header-anchor" href="#vuex-\u5BFC\u51FA\u7684\u63A5\u53E3" aria-hidden="true">#</a></h2><p><code>import Vuex from &#39;vuex&#39;</code> \u5BFC\u51FA\u7684 Vuex \u5BF9\u8C61\u5305\u542B\u54EA\u4E9B\u5C5E\u6027\u5462\uFF1F</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">version</span><span class="token operator">:</span> __VERSION__<span class="token punctuation">,</span>
  Store<span class="token punctuation">,</span>
  install<span class="token punctuation">,</span>
  mapState<span class="token punctuation">,</span>
  mapGetters<span class="token punctuation">,</span>
  mapMutations<span class="token punctuation">,</span>
  mapActions<span class="token punctuation">,</span>
  createNamespacedHelpers<span class="token punctuation">,</span>
  createLogger<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6CE8\u518C\u63D2\u4EF6" tabindex="-1">\u6CE8\u518C\u63D2\u4EF6 <a class="header-anchor" href="#\u6CE8\u518C\u63D2\u4EF6" aria-hidden="true">#</a></h2><p><code>Vue.use(Vuex)</code> \u6CE8\u518C\u63D2\u4EF6\uFF0C\u8C03\u7528 Vuex.install \u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> Vue
<span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">_Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Vue <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;[vuex] already installed. Vue.use(Vuex) should be called only once.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  Vue <span class="token operator">=</span> _Vue<span class="token punctuation">;</span>
  <span class="token function">applyMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">applyMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>version<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>version <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">beforeCreate</span><span class="token operator">:</span> vuexInit <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u7701\u7565\u517C\u5BB9 vue 1.x \u7684\u4EE3\u7801</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Vuex init hook, injected into each instances init hooks list.
   * \u5411\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u6CE8\u5165 this.$store \u8C03\u7528
   */</span>
  <span class="token keyword">function</span> <span class="token function">vuexInit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// new Vue(options) \u5B9E\u4F8B\u5316\u6839\u7EC4\u4EF6\u65F6\uFF0C\u624D\u6709\u4F20\u5165 store \u5B9E\u4F8B</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span> <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>store <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
        <span class="token operator">?</span> options<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> options<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>parent <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// \u5176\u5B83\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u83B7\u53D6\u7236\u7EC4\u4EF6\u4E2D\u7684\u5F15\u7528</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{y as __pageData,v as default};
