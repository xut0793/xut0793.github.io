import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const y='{"title":"\u7EC4\u4EF61\uFF1A\u7EC4\u4EF6\u7EE7\u627F extend","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u751F\u6210\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570","slug":"\u751F\u6210\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-4-component-1-extend.md"}',p={},o=t(`<h1 id="\u7EC4\u4EF61\uFF1A\u7EC4\u4EF6\u7EE7\u627F-extend" tabindex="-1">\u7EC4\u4EF61\uFF1A\u7EC4\u4EF6\u7EE7\u627F extend <a class="header-anchor" href="#\u7EC4\u4EF61\uFF1A\u7EC4\u4EF6\u7EE7\u627F-extend" aria-hidden="true">#</a></h1><ol><li>\u7EC4\u4EF6\u7684\u6784\u5EFA\u7684\u5168\u5C40 API\uFF1A<code>Vue.extend(options)</code></li></ol><p>\u4F46\u5728\u5B9E\u9645\u578B\u4E1A\u52A1\u9879\u76EE\u4E2D\u5F88\u5C11\u4F7F\u7528 <code>extend</code> API \u7684\u5F62\u5F0F\u58F0\u660E\u7EC4\u4EF6\uFF0C\u666E\u904D\u4EE5<code>.vue</code>\u540E\u7F00\u7684\u5355\u6587\u4EF6\u7EC4\u4EF6\u6765\u58F0\u660E\u7EC4\u4EF6\uFF0C\u6A21\u677F\u7F16\u8BD1\u65F6\u5185\u90E8\u4F1A\u8C03\u7528\u540C\u6837\u7684 API \u6765\u521B\u5EFA\u7EC4\u4EF6\u5BF9\u8C61\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> MyChild <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;{{ childMsg }}&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">childMsg</span><span class="token operator">:</span> <span class="token string">&#39;This is a child component&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u7EC4\u4EF6\u521B\u5EFA\u540E\uFF0C\u9700\u8981\u6CE8\u518C\uFF0C\u5206\u5168\u5C40\u6CE8\u518C\u548C\u5C40\u90E8\u6CE8\u518C\uFF0C\u8FD9\u662F\u8F83\u4E3A\u666E\u904D\u7684\u6CE8\u518C\u7EC4\u4EF6\u7684\u505A\u6CD5\u3002</li></ol><div class="language-js"><pre><code><span class="token comment">// \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u5FC5\u987B\u5728new Vue()\u4E4B\u524D</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyChild&#39;</span><span class="token punctuation">,</span> MyChild<span class="token punctuation">)</span>

<span class="token comment">// \u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u4F7F\u7528 components \u5C5E\u6027</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MyChild
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53E6\u4E00\u79CD\u8BED\u6CD5\u7B80\u5199\u5F62\u5F0F\uFF0C\u5728\u6CE8\u518C\u7684\u540C\u65F6\u521B\u5EFA\u7EC4\u4EF6\uFF0C\u5728Vue \u5185\u90E8\u4F1A\u89E3\u6790 extend \u51FD\u6570\u5165\u53C2\u7C7B\u578B\u3002\u4F46\u8FD9\u79CD\u5F62\u5F0F\u5728\u5B9E\u73B0\u9879\u76EE\u4E2D\u8F83\u5C11\u76F4\u63A5\u58F0\u660E\u7EC4\u4EF6\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyChild&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;this is a child component&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;{{ msg }} by Vue.component</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">MyChild</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;this is a child component&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;{{ msg }} by Vue.component</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u751F\u6210\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570" tabindex="-1">\u751F\u6210\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570 <a class="header-anchor" href="#\u751F\u6210\u7EC4\u4EF6\u6784\u5EFA\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u8282\u6A21\u677F\u6E32\u67D3\u65F6 <code>vm._render</code> \u6700\u7EC8\u8C03\u7528\u51FD\u6570<code>_createElement</code>\u6765\u521B\u5EFA VNode\uFF0C\u5176\u4E2D\u4F1A\u89E3\u6790\u4F20\u5165\u7684 tag \u6765\u5224\u65AD\u662F\u751F\u6210 VNode \u8FD8\u662F\u8C03\u7528 <code>createComponent</code>\u51FD\u6570\u751F\u6210\u7EC4\u4EF6\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter">context<span class="token punctuation">,</span>
  tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  normalizationType</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u90E8\u5206\u4EE3\u7801\uFF1A\u89E3\u6790data/childrend\u7B49\u4EE3\u7801</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// in case of component :is set to falsy value \u52A8\u6001\u7EC4\u4EF6\u6CA1\u6709 is \u503C\u65F6\u521B\u5EFA\u7A7A\u6CE8\u91CA\u8282\u70B9</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> vnode<span class="token punctuation">,</span> ns<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> Ctor<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// platform built-in elements tag \u662F\u9884\u5B9A\u4E49\u7684\u5143\u7D20\u6807\u7B7E\uFF0C\u5219\u76F4\u63A5\u751F\u6210 vnode</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token operator">!</span>data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C data \u672A\u8D4B\u503C\uFF0C\u4E14\u5728 components \u5C5E\u6027\u4E0A\u6709\u5B9A\u4E49\u952E\u4E3Atag\u7684\u6784\u5EFA\u51FD\u6570\uFF0C\u5219\u76F4\u63A5\u521B\u5EFA\u7EC4\u4EF6\uFF0C</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// unknown or unlisted namespaced elements</span>
      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>
      <span class="token comment">// parent normalizes children</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// direct component options / constructor \u5982\u679C tag \u4E0D\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5219\u76F4\u63A5\u521B\u5EFA\u7EC4\u4EF6</span>
    <span class="token comment">// \u6BD4\u5982\uFF1A{render: h =&gt; h(App)}</span>
    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>createComponent</code> \u51FD\u6570\u4E3B\u8981\u903B\u8F91\uFF1A</p><ol><li>\u6784\u5EFA\u7EC4\u4EF6\u7684\u6784\u5EFA\u51FD\u6570</li><li>\u89E3\u6790\u7EC4\u4EF6\u7684options\uFF0C\u4EE5\u53CA\u7EC4\u4EF6\u7279\u6709\u7684\u9009\u9879\uFF0C\u5982 propData / slot / listeners \u7B49</li><li>\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570</li><li>\u751F\u6210 VNode \u8FD4\u56DE</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter">Ctor<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  tag</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Ctor: \u4E00\u4E2A\u7EC4\u4EF6\u6784\u9020\u51FD\u6570 \u6216\u8005 tag \u5B57\u7B26\u4E32\uFF0C\u5982\u679C Ctor \u4E3A undefined \u6216 null \u76F4\u63A5\u9000\u51FA</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base<span class="token punctuation">;</span> <span class="token comment">// Vue.options._base = Vue\uFF0C\u6240\u4EE5 baseCtor \u5C31\u662F Vue \u6784\u9020\u51FD\u6570</span>

  <span class="token comment">// plain options object: turn it into a constructor</span>
  <span class="token comment">// \u521B\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570</span>
  <span class="token comment">// \u5982\u679C\u4F20\u5165\u7684 Ctor \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528 Vue.extend(Ctor) \u6784\u5EFA\u7EC4\u4EF6\u3002\u5355\u6587\u4EF6\u7EC4\u4EF6 export default \u5BFC\u51FA\u7684\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61</span>
  <span class="token comment">/**
   * mport HelloWorld from &#39;./components/HelloWorld&#39;
   * 
   * export default {
   *   name: &#39;app&#39;,
   *   components: {
   *     HelloWorld
   *   }
   * }
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// if at this stage it&#39;s not a constructor or an async component factory,</span>
  <span class="token comment">// reject.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Ctor <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid Component definition: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// async component</span>
  <span class="token keyword">var</span> asyncFactory<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    asyncFactory <span class="token operator">=</span> Ctor<span class="token punctuation">;</span>
    Ctor <span class="token operator">=</span> <span class="token function">resolveAsyncComponent</span><span class="token punctuation">(</span>asyncFactory<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Ctor <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// return a placeholder node for async component, which is rendered</span>
      <span class="token comment">// as a comment node but preserves all the raw information for the node.</span>
      <span class="token comment">// the information will be used for async server-rendering and hydration.</span>
      <span class="token keyword">return</span> <span class="token function">createAsyncPlaceholder</span><span class="token punctuation">(</span>
        asyncFactory<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        context<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        tag
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7EC4\u4EF6\u6807\u7B7E\u4E0A\u7684\u6240\u6709\u5C5E\u6027\u3001\u4E8B\u4EF6\u3001\u6307\u4EE4\u7B49\u5728\u7F16\u8BD1\u9636\u6BB5 genData \u51FD\u6570\u4E2D\u5904\u7406 data \u4E2D\u3002</span>
  <span class="token comment">// \u5305\u62EC key / ref / staticClass / classBinding / attrs / dynamicAttrs / domProps / slot / on / nativeOn / directives \u7B49</span>
  data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// resolve constructor options in case global mixins are applied after</span>
  <span class="token comment">// component constructor creation</span>
  <span class="token comment">// \u89E3\u6790\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u7684 options\uFF0C\u4E3B\u8981\u9012\u5F52\u83B7\u53D6 Ctor.super \uFF0C\u5373 Vue \u7684 options \u8FDB\u884C\u5408\u5E76</span>
  <span class="token comment">// \u6BD4\u5982\u4F1A\u628A Vue \u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\u53CA\u5185\u90E8\u7EC4\u4EF6\u5168\u5E76\u5230 Ctor.optons.components \u4E0A\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u83B7\u53D6\u5168\u5C40\u4E0A\u7684\u5C5E\u6027</span>
  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// transform component v-model data into props &amp; events</span>
  <span class="token comment">// \u5982\u679C\u5728\u7EC4\u4EF6\u4E0A\u6709\u7ED1\u5B9A v-model \u5219\u6839\u636E\u7EC4\u4EF6 Ctor.options.model \u6216\u9ED8\u8BA4\u503C\u62C6\u89E3\u6210 data.on[event] \u548C data.attrs[prop]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">transformModel</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// extract props</span>
  <span class="token keyword">var</span> propsData <span class="token operator">=</span> <span class="token function">extractPropsFromVNodeData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> Ctor<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// functional component \u51FD\u6570\u5F0F\u7EC4\u4EF6\u5904\u7406</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>functional<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createFunctionalComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5173\u952E\u6B65\u9AA4\uFF1A\u5BF9\u4E8E\u7EC4\u4EF6\uFF0C\u4F1A\u5C06 data.on \u6570\u636E\u5373 ASTElement.events \u6570\u636E\u5373\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5B58\u5165 listeners\uFF0C\u5728\u751F\u6210\u7EC4\u4EF6 vnode \u65F6\u5B58\u5165 vnode.componentOptions \u4E2D</span>
  <span class="token comment">// \u800C\u5C06 data.nativeOn \u6570\u636E\u5373 ASTElement.nativeEvents \u5373\u6DFB\u52A0\u4E86.native \u4FEE\u9970\u7B26\u7684\u4E8B\u4EF6\u5B58\u5165 data.on</span>
  <span class="token comment">// extract listeners, since these needs to be treated as</span>
  <span class="token comment">// child component listeners instead of DOM listeners</span>
  <span class="token keyword">var</span> listeners <span class="token operator">=</span> data<span class="token punctuation">.</span>on<span class="token punctuation">;</span>
  <span class="token comment">// replace with listeners with .native modifier</span>
  <span class="token comment">// so it gets processed during parent component patch.</span>
  data<span class="token punctuation">.</span>on <span class="token operator">=</span> data<span class="token punctuation">.</span>nativeOn<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>abstract<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// abstract components do not keep anything</span>
    <span class="token comment">// other than props &amp; listeners &amp; slot</span>

    <span class="token comment">// work around flow</span>
    <span class="token keyword">var</span> slot <span class="token operator">=</span> data<span class="token punctuation">.</span>slot<span class="token punctuation">;</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>slot <span class="token operator">=</span> slot<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// install component management hooks onto the placeholder node</span>
  <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\uFF0C\u5305\u62EC init / prePatch / insert / destory\uFF0C</span>
  <span class="token comment">// \u7279\u522B\u662F\u5176\u4E2D init \u51FD\u6570\u4F1A\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u548C\u6302\u8F7D\uFF1A</span>
  <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
  <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating);</span>
  <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// return a placeholder vnode</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token comment">// .native \u4FEE\u9970\u7B26\u7684\u539F\u751F\u4E8B\u4EF6\u5B58\u5165 vnode.data.on</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u5B58\u50A8 vnode.componentOptions.listeners</span>
    asyncFactory
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre></div><p>\u518D\u770B\u770B <code>Vue.extend</code> \u51FD\u6570\uFF0C\u5728 <code>initGlobalAPI(Vue)</code> \u51FD\u6570\u91CC\u7684 <code>initExtend(Vue)</code> \u91CC\u5B9A\u4E49</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initExtend</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * Each instance constructor, including Vue, has a unique cid. 
   * This enables us to create wrapped &quot;child
   * constructors&quot; for prototypal inheritance and cache them.
   * 
   * \u6BCF\u4E2A\u5B9E\u4F8B\u6784\u5EFA\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684 cid\uFF0C\u4FBF\u4E8E\u7F13\u5B58
   */</span>
  Vue<span class="token punctuation">.</span>cid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> cid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * Class inheritance
   */</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    extendOptions <span class="token operator">=</span> extendOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> Super <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> SuperId <span class="token operator">=</span> Super<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>
    <span class="token comment">// \u907F\u514D\u591A\u6B21\u6267\u884C Vue.extend \u7684\u65F6\u5019\u5BF9\u540C\u4E00\u4E2A\u7EC4\u4EF6\u91CD\u590D\u6784\u9020\u3002</span>
    <span class="token keyword">var</span> cachedCtors <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">||</span> <span class="token punctuation">(</span>extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> name <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>name <span class="token operator">||</span> Super<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">validateComponentName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u7ECF\u5178\u7684\u5BF9\u8C61\u539F\u578B\u7EE7\u627F</span>
    <span class="token keyword">var</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9E\u4F8B\u5316\u65F6\u6267\u884C Vue._init \u4E00\u6837\u7684\u903B\u8F91</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub<span class="token punctuation">;</span>

    Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span><span class="token punctuation">;</span>
    Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
      extendOptions
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    Sub<span class="token punctuation">[</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Super<span class="token punctuation">;</span>

    <span class="token comment">// For props and computed properties, we define the proxy getters on</span>
    <span class="token comment">// the Vue instances at extension time, on the extended prototype. This</span>
    <span class="token comment">// avoids Object.defineProperty calls for each instance created.</span>
    <span class="token comment">// \u521D\u59CB\u5316\u7EC4\u4EF6\u7684 props / computed</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initProps$1</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initComputed$1</span><span class="token punctuation">(</span>Sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// allow further extension/mixin/plugin usage</span>
    Sub<span class="token punctuation">.</span>extend <span class="token operator">=</span> Super<span class="token punctuation">.</span>extend<span class="token punctuation">;</span>
    Sub<span class="token punctuation">.</span>mixin <span class="token operator">=</span> Super<span class="token punctuation">.</span>mixin<span class="token punctuation">;</span>
    Sub<span class="token punctuation">.</span>use <span class="token operator">=</span> Super<span class="token punctuation">.</span>use<span class="token punctuation">;</span>

    <span class="token comment">// create asset registers, so extended classes</span>
    <span class="token comment">// can have their private assets too.</span>
    <span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Sub<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> Super<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// enable recursive self-lookup</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Sub<span class="token punctuation">.</span>options<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> Sub<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// keep a reference to the super options at extension time.</span>
    <span class="token comment">// later at instantiation we can check if Super&#39;s options have</span>
    <span class="token comment">// been updated.</span>
    Sub<span class="token punctuation">.</span>superOptions <span class="token operator">=</span> Super<span class="token punctuation">.</span>options<span class="token punctuation">;</span>
    Sub<span class="token punctuation">.</span>extendOptions <span class="token operator">=</span> extendOptions<span class="token punctuation">;</span>
    Sub<span class="token punctuation">.</span>sealedOptions <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Sub<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// cache constructor \u4EE5\u7236\u7EC4\u4EF6id\u4E3Akey\u7F13\u5B58\u5F53\u524D\u7EC4\u4EF6</span>
    cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span> <span class="token operator">=</span> Sub<span class="token punctuation">;</span>
    <span class="token keyword">return</span> Sub
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initProps$1</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> props <span class="token operator">=</span> Comp<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token class-name">Comp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&quot;_props&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// props \u5C5E\u6027\u7684\u8C03\u7528\u540C data \u4E00\u6837\u4F5C\u4E86\u4E00\u5C42\u4EE3\u7406\uFF0Cthis.key = this._props.key</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initComputed$1</span> <span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> computed <span class="token operator">=</span> Comp<span class="token punctuation">.</span>options<span class="token punctuation">.</span>computed<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineComputed</span><span class="token punctuation">(</span><span class="token class-name">Comp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> key<span class="token punctuation">,</span> computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
