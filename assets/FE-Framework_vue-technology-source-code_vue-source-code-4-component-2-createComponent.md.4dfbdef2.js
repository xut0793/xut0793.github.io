import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const v='{"title":"\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6","slug":"\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-4-component-2-createComponent.md"}',p={},o=t(`<h2 id="\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6" tabindex="-1">\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF62\uFF1A\u5B9E\u4F8B\u5316\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u6A21\u677F\u6E32\u67D3\u65F6 <code>vm._render</code> \u6700\u7EC8\u8C03\u7528\u51FD\u6570<code>_createElement</code>\u6765\u8C03\u7528 <code>createComponent</code>\u51FD\u6570\u751F\u6210\u7EC4\u4EF6\u7684 VNode\u3002\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\u66F4\u65B0\u7684\u56DE\u8C03\u51FD\u6570<code>updateComponent</code>\uFF1A</p><div class="language-js"><pre><code><span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u751F\u6210\u7684\u7EC4\u4EF6 VNode \u4F20\u7ED9\u4E86 <code>vm._update</code> \u51FD\u6570\u6765\u6267\u884C\u3002\u5728 <a href="./vue-source-code-3-virtual-dom-2-diff.html">\u89C6\u56FE\u6E32\u67D32\uFF1Apatch \u7B97\u6CD5</a>\u4E2D\u6709\u63D0\u5230\uFF0C\u901A\u8FC7\u8FD9\u6837\u7684\u8C03\u7528\u94FE\uFF1A<code>vm._update =&gt; vm.__patch__ =&gt; patch =&gt;createPatchFunction =&gt; createElm</code>\uFF0C\u6700\u7EC8\u6838\u5FC3\u6267\u884C\u7684\u662F <code>createElm</code></p><p>\u6240\u4EE5\u6765\u770B\u4E0B\uFF0C<code>createElm</code> \u51FD\u6570\u5BF9\u7EC4\u4EF6 VNode \u7684\u5904\u7406\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  parentElm<span class="token punctuation">,</span>
  refElm<span class="token punctuation">,</span>
  nested<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token comment">// createElm \u65E0\u8BBA\u600E\u6837\u90FD\u5C1D\u8BD5\u5F53\u6210\u7EC4\u4EF6\u521B\u5EFA\uFF0C\u89C2\u5BDF\u662F\u5426\u6210\u529F\u3002</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9 vnode \u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u521B\u5EFA\u8FD4\u56DE false\uFF0C\u5373\u5F80\u4E0B\u7EE7\u627F\u6267\u884C</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9\u662F\u7EC4\u4EF6 vnode \u5219\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u5316\uFF0C\u5E76\u8FD4\u56DE true\uFF0C\u5F53\u524D\u51FD\u6570\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u62FF\u5230\u7684 vnode.data \u662F\u5728 vm._render \u51FD\u6570\u4E2D createComponent \u51FD\u6570\u4E2D\u521B\u5EFA\u8FD4\u56DE\u7684 vnode</span>
  <span class="token comment">// \u5176\u4E2D  installComponentHooks(data) \u6267\u884C\u5373\u5B89\u88C5\u4E86\u7EC4\u4EF6\u521B\u5EFA\u7684\u94A9\u5B50\u51FD\u6570 vnode.data.hook</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span>
    <span class="token comment">// dsDef(i=i.hook)\u5728\u6267\u884C\u7684\u540C\u65F6\u5C06 i \u53D8\u4E3A\u4E86 hook \u5BF9\u8C61\uFF0C\u540C\u6837 isDef(i=i.init)\u4FBF\u5F97\u6700\u7EC8 i= vnode.data.hook.init \u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// init \u51FD\u6570\u6267\u884C\u5904\u7406\u4E86\u4E3B\u8981\u5904\u7406\u4E24\u4EF6\uFF1A</span>
      <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
      <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating); =&gt; mountComponent</span>
      <span class="token comment">// \u8FD9\u6837\u5373\u4F7F\u5F97\u5728 createComponent \u51FD\u6570\u5185\u5373\u89E6\u53D1\u4E86\u7EC4\u4EF6 wathcer \u7684\u751F\u6210\u548C\u7EC4\u4EF6\u7F16\u8BD1\u548C\u6E32\u67D3 vm._update(vm._render())</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// after calling the init hook, if the vnode is a child component</span>
    <span class="token comment">// it should&#39;ve created a child instance and mounted it. the child</span>
    <span class="token comment">// component also has set the placeholder vnode&#39;s elm.</span>
    <span class="token comment">// in that case we can just return the element and be done.</span>
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
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">installComponentHooks</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// data.hook = {}</span>
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
  
  <span class="token function-variable function">prepatch</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">prepatch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">insert</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">destroy</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>init \u51FD\u6570\u6267\u884C\u662F\u901A\u8FC7 createComponentInstanceForVnode \u521B\u5EFA\u4E00\u4E2A Vue \u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528 $mount \u65B9\u6CD5\u6302\u8F7D\u5B50\u7EC4\u4EF6\uFF0C \u5148\u6765\u770B\u4E00\u4E0B createComponentInstanceForVnode \u7684\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
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
</code></pre></div><p>createComponentInstanceForVnode \u51FD\u6570\uFF1A</p><ol><li>\u5148\u662F\u6784\u9020\u7684\u4E00\u4E2A\u5185\u90E8\u7EC4\u4EF6\u7684\u53C2\u6570options\uFF0C\u6CE8\u610F\u5176\u4E2D\u5C06 <code>_isComponent = true</code>;</li><li>\u7136\u540E\u6267\u884C new vnode.componentOptions.Ctor(options)\u3002</li></ol><p>\u8FD9\u91CC\u7684 vnode.componentOptions.Ctor \u5BF9\u5E94\u7684\u5C31\u662F\u5B50\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5C31\u662F\u4E0A\u4E00\u8282\u5206\u6790\u4E86\u5B83\u5B9E\u9645\u4E0A\u662F\u7EE7\u627F\u4E8E Vue \u7684\u4E00\u4E2A\u6784\u9020\u5668 Sub\uFF0C\u76F8\u5F53\u4E8E new Sub(options)\u3002</p><p>\u8FD9\u91CC\u6709\u51E0\u4E2A\u5173\u952E\u53C2\u6570\u8981\u6CE8\u610F\u51E0\u4E2A\u70B9\uFF0C_isComponent \u4E3A true \u8868\u793A\u5B83\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0Cparent \u8868\u793A\u5F53\u524D\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u6BD4\u8F83\u6709\u610F\u601D\u7684\u662F\u5982\u4F55\u62FF\u5230\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u540E\u9762\u4F1A\u4ECB\u7ECD\u3002\uFF09</p><p>\u6240\u4EE5\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5316\u5C31\u662F\u5728\u8FD9\u4E2A\u65F6\u673A\u6267\u884C\u7684\uFF0C\u6B64\u65F6\u5B83\u4F1A\u6267\u884C\u5B9E\u4F8B\u7684 _init \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u6709\u4E00\u4E9B\u548C <code>new Vue()</code>\u65F6\u6267\u884C _init \u65B9\u6CD5\u4E0D\u540C\u7684\u5730\u65B9\u9700\u8981\u6311\u51FA\u6765\u8BF4\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token comment">// a uid</span>
      vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid$3<span class="token operator">++</span><span class="token punctuation">;</span>


      <span class="token comment">// a flag to avoid this being observed</span>
      vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token comment">// merge options</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// optimize internal component instantiation</span>
        <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
        <span class="token comment">// internal component options needs special treatment.</span>
        <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
          <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
          options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u63D0\u5230\u4E86\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u6784\u9020\u7684 options \u4E2D_isComponent \u4E3A true\uFF0C\u6240\u4EE5\u8D70\u5230\u4E86 initInternalComponent \u8FC7\u7A0B\uFF0C\u770B\u4E0B\u8FD9\u4E2A\u51FD\u6570\u7684\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// doing this because it&#39;s faster than dynamic enumeration.</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u4E2A\u51FD\u6570\u4E3B\u8981\u662F\u5C06 createComponentInstanceForVnode \u51FD\u6570\u4F20\u5165\u7684\u5173\u4E8E\u7236\u8282\u70B9\u7684\u53C2\u6570\u5408\u5E76\u5230\u5185\u90E8\u7684\u9009\u9879 $options \u91CC\u4E86\u3002</p><p>\u7531\u4E8E\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u5019\u662F\u4E0D\u4F20 el \u7684\uFF0C\u56E0\u6B64<code>vm.$options.el = undefined</code>\uFF0C\u6240\u4EE5\u7EC4\u4EF6\u662F\u81EA\u5DF1\u63A5\u7BA1\u4E86 $mount \u7684\u8FC7\u7A0B\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u7684\u4E3B\u8981\u6D41\u7A0B\u5728\u4E0A\u9762\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570componentVNodeHooks \u7684 init \u94A9\u5B50\u51FD\u6570\uFF0C\u5728\u5B8C\u6210\u5B9E\u4F8B\u5316\u7684 _init \u540E\uFF0C\u63A5\u7740\u4F1A\u6267\u884C child.$mount(hydrating ? vnode.elm : undefined, hydrating) \u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
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
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u94A9\u5B50\u51FD\u6570</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC hydrating \u4E3A true \u4E00\u822C\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EA\u8003\u8651\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF0C\u6240\u4EE5\u8FD9\u91CC $mount \u76F8\u5F53\u4E8E\u6267\u884C child.$mount(undefined, false)\uFF1A</p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> updateComponent<span class="token punctuation">;</span>

  <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// we set this to vm._watcher inside the watcher&#39;s constructor</span>
  <span class="token comment">// since the watcher&#39;s initial patch may call $forceUpdate (e.g. inside child</span>
  <span class="token comment">// component&#39;s mounted hook), which relies on vm._watcher being already defined</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  hydrating <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u5B9E\u73B0\u5316\u7EC4\u4EF6\u7684 render-watcher \u8FC7\u7A0B\u4E2D\uFF0C \u8C03\u7528 this.get()\uFF0C\u89E6\u53D1 updateComponent \u51FD\u6570\u6267\u884C\uFF0C\u8FDB\u800C\u6267\u884C vm._render() \u65B9\u6CD5\uFF0C\u6267\u884C\u5B8C vm._render \u751F\u6210 VNode \u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u8981\u6267\u884C vm._update \u53BB\u6E32\u67D3 VNode \u4E86\u3002</p><p>\u5728 _update \u51FD\u6570\u4E2D\u6709\u4E00\u5B9A\u8BBE\u7F6E\u5F53\u524D\u6D3B\u52A8\u5B9E\u73B0\u7684\u4EE3\u7801\uFF1A<code>var restoreActiveInstance = setActiveInstance(vm);</code> \u548C <code>restoreActiveInstance();</code></p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> prevEl <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
      <span class="token keyword">var</span> prevVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">;</span>
      <span class="token keyword">var</span> restoreActiveInstance <span class="token operator">=</span> <span class="token function">setActiveInstance</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
      <span class="token comment">// Vue.prototype.__patch__ is injected in entry points</span>
      <span class="token comment">// based on the rendering backend used.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// initial render</span>
        vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* removeOnly */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// updates</span>
        vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>prevVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">restoreActiveInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// update __vue__ reference</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>prevEl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prevEl<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> vm<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// if parent is an HOC, update its $el as well</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$vnode <span class="token operator">===</span> vm<span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// updated hook is called by the scheduler to ensure that children are</span>
      <span class="token comment">// updated in a parent&#39;s updated hook.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">var</span> activeInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isUpdatingChildComponent <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setActiveInstance</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> prevActiveInstance <span class="token operator">=</span> activeInstance<span class="token punctuation">;</span>
  activeInstance <span class="token operator">=</span> vm<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    activeInstance <span class="token operator">=</span> prevActiveInstance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 vm._update \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u628A\u5F53\u524D\u7684 vm \u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF activeInstance\uFF0C\u540C\u65F6\u901A\u8FC7 prevActiveInstance = activeInstance \u7528 prevActiveInstance \u4FDD\u7559\u4E0A\u4E00\u6B21\u7684 activeInstance\u3002\u5B9E\u9645\u4E0A\uFF0CprevActiveInstance \u548C\u5F53\u524D\u7684 vm \u662F\u4E00\u4E2A\u7236\u5B50\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A vm \u5B9E\u4F8B\u5B8C\u6210\u5B83\u7684\u6240\u6709\u5B50\u6811\u7684 patch \u6216\u8005 update \u8FC7\u7A0B\u540E\uFF0CactiveInstance \u4F1A\u56DE\u5230\u5B83\u7684\u7236\u5B9E\u4F8B\uFF0C\u8FD9\u6837\u5C31\u5B8C\u7F8E\u5730\u4FDD\u8BC1\u4E86 createComponentInstanceForVnode \u6574\u4E2A\u6DF1\u5EA6\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5728\u5B9E\u4F8B\u5316\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\u80FD\u4F20\u5165\u5F53\u524D\u5B50\u7EC4\u4EF6\u7684\u7236 Vue \u5B9E\u4F8B\uFF0C\u5E76\u5728 _init \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u901A\u8FC7 vm.$parent \u628A\u8FD9\u4E2A\u7236\u5B50\u5173\u7CFB\u4FDD\u7559\u3002</p><p>\u6700\u540E\u5728 <code>createComponent</code> \u51FD\u6570\u4E2D\uFF0Cinit\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u6267\u884C <code>insert(parentElm, vnode.elm, refElm);</code>\uFF0C\u5B8C\u6210\u7EC4\u4EF6\u7684 DOM \u63D2\u5165\uFF0C\u5982\u679C\u7EC4\u4EF6 patch \u8FC7\u7A0B\u4E2D\u53C8\u521B\u5EFA\u4E86\u5B50\u7EC4\u4EF6\uFF0C\u90A3\u4E48DOM \u7684\u63D2\u5165\u987A\u5E8F\u662F\u5148\u5B50\u540E\u7236\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u8BE5\u65B9\u6CD5\u5B9A\u4E49\u5728 createPatchFunction \u51FD\u6570\u4E2D\uFF0C\u533A\u522B\u4E8E _render \u4E2D crateComponent\u3002</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// data \u662F\u5728 _createElement(context,tag,data,...) \u4E2D\u5C31\u4F20\u5165\u7684</span>
  <span class="token comment">// \u5E76\u4E14\u5728 _render \u51FD\u6570\u4E2D\u7684 createComponent \u4E2D\u6267\u884C\u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570 installComponentHooks(data);</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5373 init(vnode, false)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// after calling the init hook, if the vnode is a child component</span>
    <span class="token comment">// it should&#39;ve created a child instance and mounted it. the child</span>
    <span class="token comment">// component also has set the placeholder vnode&#39;s elm.</span>
    <span class="token comment">// in that case we can just return the element and be done.</span>
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
</code></pre></div>`,30),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{v as __pageData,f as default};
