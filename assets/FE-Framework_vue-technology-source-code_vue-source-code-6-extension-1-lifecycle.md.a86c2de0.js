import{_ as n}from"./chunks/vue_lifecycle.31587376.js";import{_ as s,c as a,o as t,a as p}from"./app.f1e974b0.js";const h='{"title":"\u751F\u547D\u5468\u671F lifecycle","description":"","frontmatter":{},"headers":[{"level":2,"title":"callHook","slug":"callhook"},{"level":2,"title":"beforeCreate & created","slug":"beforecreate-created"},{"level":2,"title":"beforeMount & mounted","slug":"beforemount-mounted"},{"level":2,"title":"\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D","slug":"\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D"},{"level":2,"title":"beforeUpdate & updated","slug":"beforeupdate-updated"},{"level":2,"title":"beforeDestroy & destroyed","slug":"beforedestroy-destroyed"},{"level":2,"title":"activated & deactivated","slug":"activated-deactivated"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-6-extension-1-lifecycle.md"}',o={},e=p('<h1 id="\u751F\u547D\u5468\u671F-lifecycle" tabindex="-1">\u751F\u547D\u5468\u671F lifecycle <a class="header-anchor" href="#\u751F\u547D\u5468\u671F-lifecycle" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#callhook">callHook</a></li><li><a href="#beforecreate-created">beforeCreate &amp; created</a></li><li><a href="#beforemount-mounted">beforeMount &amp; mounted</a></li><li><a href="#\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D">\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D</a></li><li><a href="#beforeupdate-updated">beforeUpdate &amp; updated</a></li><li><a href="#beforedestroy-destroyed">beforeDestroy &amp; destroyed</a></li><li><a href="#activated-deactivated">activated &amp; deactivated</a></li></ul></div></p><p>\u6BCF\u4E2A Vue \u5B9E\u4F8B\u5728\u88AB\u521B\u5EFA\u4E4B\u524D\u90FD\u8981\u7ECF\u8FC7\u4E00\u7CFB\u5217\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\u3002\u4F8B\u5982\u9700\u8981\u8BBE\u7F6E\u6570\u636E\u76D1\u542C\u3001\u7F16\u8BD1\u6A21\u677F\u3001\u6302\u8F7D\u5B9E\u4F8B\u5230 DOM\u3001\u5728\u6570\u636E\u53D8\u5316\u65F6\u66F4\u65B0 DOM \u7B49\u3002\u540C\u65F6\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4E5F\u4F1A\u8FD0\u884C\u4E00\u4E9B\u53EB\u505A\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u51FD\u6570\uFF0C\u7ED9\u4E88\u7528\u6237\u673A\u4F1A\u5728\u4E00\u4E9B\u7279\u5B9A\u7684\u573A\u666F\u4E0B\u6DFB\u52A0\u4ED6\u4EEC\u81EA\u5DF1\u7684\u4EE3\u7801\u3002</p><p><img src="'+n+`" alt=""></p><h2 id="callhook" tabindex="-1">callHook <a class="header-anchor" href="#callhook" aria-hidden="true">#</a></h2><p>\u6E90\u7801\u4E2D\u6700\u7EC8\u6267\u884C\u751F\u547D\u5468\u671F\u7684\u51FD\u6570\u90FD\u662F\u8C03\u7528 <code>callHook</code> \u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">callHook</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> hook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// #7573 disable dep collection when invoking lifecycle hooks</span>
  <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6BCF\u4E2A hook \u7684 handlers \u662F\u6570\u7EC4\uFF0C\u56E0\u4E3A mixins \u6DF7\u5165\u65F6\u4E00\u822C\u90FD\u4F1A\u5B58\u5728\u751F\u547D\u5468\u671F\u94A9\u5B50\u8C03\u7528\uFF0C\u7EC4\u4EF6\u5185\u4E5F\u4F1A\u8C03\u7528\uFF0C\u6240\u4EE5\u7EC4\u6210\u9009\u9879\u5408\u5E76\u65F6\u5904\u7406\u6210\u6570\u7EC4</span>
  <span class="token keyword">var</span> handlers <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">[</span>hook<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> info <span class="token operator">=</span> hook <span class="token operator">+</span> <span class="token string">&quot; hook&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>handlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeWithErrorHandling</span><span class="token punctuation">(</span>handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_hasHookEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;hook:&#39;</span> <span class="token operator">+</span> hook<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u94A9\u5B50\u51FD\u6570\u7684\u56DE\u8C03\u8C03\u7528\u65F6\u6355\u83B7\u9519\u8BEF</span>
<span class="token keyword">function</span> <span class="token function">invokeWithErrorHandling</span> <span class="token punctuation">(</span>
  <span class="token parameter">handler<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  args<span class="token punctuation">,</span>
  vm<span class="token punctuation">,</span>
  info</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> res<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> args <span class="token operator">?</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>res<span class="token punctuation">.</span>_isVue <span class="token operator">&amp;&amp;</span> <span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>res<span class="token punctuation">.</span>_handled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info <span class="token operator">+</span> <span class="token string">&quot; (Promise/async)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// issue #9511</span>
      <span class="token comment">// avoid catch triggering multiple times when nested calls</span>
      res<span class="token punctuation">.</span>_handled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div><h2 id="beforecreate-created" tabindex="-1">beforeCreate &amp; created <a class="header-anchor" href="#beforecreate-created" aria-hidden="true">#</a></h2><p><code>beforeCreate</code> \u548C <code>created</code> \u51FD\u6570\u90FD\u662F\u5728\u5B9E\u4F8B\u5316 Vue \u7684\u9636\u6BB5\uFF0C\u5728 _init \u65B9\u6CD5\u4E2D\u6267\u884C\u7684\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    <span class="token comment">// expose real self</span>
    vm<span class="token punctuation">.</span>_self <span class="token operator">=</span> vm<span class="token punctuation">;</span>
    <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u5185\u90E8\u5C5E\u6027\uFF1A$root/$parent/$refs=[]/$children=[]/_watcher=null\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u751F\u547D\u72B6\u6001\u6807\u5FD7 flag: _inactive=null/_isMounted=false/_isDestoryed=false/_isBeingDestoryed=false</span>
    <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u7236\u7EC4\u4EF6\u4F20\u5165\u7684\u4E8B\u4EF6\u76D1\u542C\u5668 listeners \u5230\u5B9E\u4F8B vm._events \u5BF9\u8C61\u4E0A\uFF0C\u6765\u6E90\u4E8E template \u89E3\u6790\u5230\u7684 v-on \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u51FD\u6570</span>
    <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D $attrs/$listeners\uFF0C\u4EE5\u53CA\u7ED1\u5B9A _c/$createElement</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve injections before data/props 1. \u89E3\u6790 inject \u5C5E\u6027\u7684\u6570\u636E\uFF1B2. \u5E76\u5C06\u5176\u8BBE\u7F6E\u54CD\u5E94\u5F0F\uFF08\u5373k-v\u8F6C\u4E3Agetter/setter\uFF09\u540C\u65F6\u6302\u8F7D\u5230 vm \u4E0A</span>
    <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB script \u4E2D\u7684\u5C5E\u6027\uFF1AinitProps/initMethods/initData/initComputed/initWatch</span>
    <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve provide after data/props</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="beforemount-mounted" tabindex="-1">beforeMount &amp; mounted <a class="header-anchor" href="#beforemount-mounted" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token punctuation">,</span>
  hydrating</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  el<span class="token punctuation">,</span>
  hydrating</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> updateComponent<span class="token punctuation">;</span> <span class="token comment">// updateComponent = function () { vm._update(vm._render(), hydrating); };</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1AupdateComponet \u58F0\u660E\u548C render watcher \u521B\u5EFA</span>

  <span class="token comment">// vm.$vnode == null \u8868\u660E\u8FD9\u4E0D\u662F\u4E00\u6B21\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u901A\u5E38\u6709\u7236\u7EC4\u4EF6\uFF0C\u5373 $vnode \u4E0D\u4E3A\u7A7A\u3002\u9879\u76EE\u4E2D\u53EA\u6709\u901A\u8FC7\u5916\u90E8 new Vue \u521D\u59CB\u5316\u5168\u5C40\u5B9E\u73B0\u65F6 $vnode == null\u3002</span>
  <span class="token comment">// \u5BF9\u4E8E\u7EC4\u4EF6\u7684 mounted \u65F6\u673A\u662F\u5728 patch \u8FC7\u7A0B\u4E2D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\u4E0A\u9762 <code>vm.$vnode == null</code>\u6761\u4EF6\u7684\u5224\u65AD\uFF0C\u8868\u660E\u8FD9\u4E0D\u662F\u4E00\u6B21\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u901A\u5E38\u6709\u7236\u7EC4\u4EF6\uFF0C\u5373 $vnode \u4E0D\u4E3A\u7A7A\u3002\u9879\u76EE\u4E2D\u53EA\u6709\u901A\u8FC7 new Vue \u521D\u59CB\u5316\u5168\u5C40\u5B9E\u73B0\u65F6 $vnode == null\u3002</p><h2 id="\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D" tabindex="-1">\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D <a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u6302\u8F7D" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u7684\u5404\u4E2A\u751F\u547D\u5468\u671F\u5B9A\u4E49\u5728 componentVNodeHooks \u5BF9\u8C61\u4E2D\uFF0C\u5728 invokeInsertHook \u51FD\u6570\u4E2D\u8C03\u7528\uFF0C\u800CinvokeInsertHook \u51FD\u6570\u5728 patchVnode \u51FD\u6570\u4E2D\u88AB\u8C03\u7528\uFF0C\u5373\u5728 vm.update \u4E2D\u8C03\u7528 patch \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
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
    <span class="token keyword">var</span> options <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
    <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
    <span class="token function">updateChildComponent</span><span class="token punctuation">(</span>
      child<span class="token punctuation">,</span>
      options<span class="token punctuation">.</span>propsData<span class="token punctuation">,</span> <span class="token comment">// updated props</span>
      options<span class="token punctuation">.</span>listeners<span class="token punctuation">,</span> <span class="token comment">// updated listeners</span>
      vnode<span class="token punctuation">,</span> <span class="token comment">// new parent vnode</span>
      options<span class="token punctuation">.</span>children <span class="token comment">// new children</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">insert</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> vnode<span class="token punctuation">.</span>context<span class="token punctuation">;</span>
    <span class="token keyword">var</span> componentInstance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>componentInstance<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      componentInstance<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">callHook</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// vue-router#1212</span>
        <span class="token comment">// During updates, a kept-alive component&#39;s child components may</span>
        <span class="token comment">// change, so directly walking the tree here may call activated hooks</span>
        <span class="token comment">// on incorrect children. Instead we push them into a queue which will</span>
        <span class="token comment">// be processed after the whole patch process ended.</span>
        <span class="token function">queueActivatedComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">destroy</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> componentInstance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>componentInstance<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// invokeInsertHook \u51FD\u6570\u5728 patchVnode \u51FD\u6570\u4E2D\u88AB\u8C03\u7528\uFF0C\u5373\u5728 vm.update \u4E2D\u8C03\u7528 patch \u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">invokeInsertHook</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> queue<span class="token punctuation">,</span> initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// delay insert hooks for component root nodes, invoke them after the</span>
  <span class="token comment">// element is really inserted</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>data<span class="token punctuation">.</span>pendingInsert <span class="token operator">=</span> queue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="beforeupdate-updated" tabindex="-1">beforeUpdate &amp; updated <a class="header-anchor" href="#beforeupdate-updated" aria-hidden="true">#</a></h2><p><code>beforeUpdate</code> \u548C<code>updated</code> \u5728 wtcher \u521B\u5EFA\u548C\u6267\u884C\u65F6\u88AB\u8C03\u7528</p><div class="language-js"><pre><code><span class="token comment">// beforeUpdate \u4F20\u5165\u5728 render watcher \u521B\u5EFA\u65F6\uFF0C\u5373 mountComponent \u51FD\u6570\u4E2D</span>
<span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span> <span class="token parameter">vm<span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token comment">// \u521B\u5EFA render watcher \u65F6\uFF0C\u4F20\u5165 before</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hydrating <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// vm.$vnode == null \u8868\u660E\u8FD9\u4E0D\u662F\u4E00\u6B21\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u8FC7\u7A0B\uFF0C\u800C\u662F\u6211\u4EEC\u901A\u8FC7\u5916\u90E8 new Vue \u521D\u59CB\u5316\u8FC7\u7A0B\u3002</span>
  <span class="token comment">// \u5BF9\u4E8E\u7EC4\u4EF6\u7684 mounted \u65F6\u673A\u662F\u5728 patch \u8FC7\u7A0B\u4E2D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>

<span class="token comment">// Watcher \u5B9A\u4E49\u4E2D</span>
<span class="token keyword">var</span> <span class="token function-variable function">Watcher</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Watcher</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  expOrFn<span class="token punctuation">,</span>
  cb<span class="token punctuation">,</span>
  options<span class="token punctuation">,</span>
  isRenderWatcher</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>before <span class="token operator">=</span> options<span class="token punctuation">.</span>before<span class="token punctuation">;</span> <span class="token comment">// \u7EC4\u4EF6 watcher \u4F1A\u4F20\u5165\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5373isRenderWatcher=true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u5728\u6570\u636E\u53D8\u52A8\u89E6\u53D1 setter \u4E2D\u8C03\u7528 dep.notify =&gt; watcher.update =&gt; queueWatcher =&gt; flushSchedulerQueue</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentFlushTimestamp <span class="token operator">=</span> <span class="token function">getNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  flushing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> watcher<span class="token punctuation">,</span> id<span class="token punctuation">;</span>

  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5373 this.before, \u5373 new Watcher \u65F6\u4F20\u5165 callHook(vm, &#39;beforeUpdate&#39;)</span>
    <span class="token punctuation">}</span>
    
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token comment">// call component updated and activated hooks</span>
  <span class="token function">callActivatedHooks</span><span class="token punctuation">(</span>activatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callUpdatedHooks</span><span class="token punctuation">(</span>updatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// callHook(vm, &#39;updated&#39;)</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">callUpdatedHooks</span> <span class="token punctuation">(</span><span class="token parameter">queue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> vm <span class="token operator">=</span> watcher<span class="token punctuation">.</span>vm
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher <span class="token operator">===</span> watcher <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;updated&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="beforedestroy-destroyed" tabindex="-1">beforeDestroy &amp; destroyed <a class="header-anchor" href="#beforedestroy-destroyed" aria-hidden="true">#</a></h2><p>beforeDestroy \u548C destroyed \u94A9\u5B50\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\u5728\u7EC4\u4EF6\u9500\u6BC1\u7684\u9636\u6BB5\uFF0C\u5373 $destroy \u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$destroy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isBeingDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// remove self from parent 1. \u53D6\u6D88\u7236\u5B50\u5173\u8054</span>
  <span class="token keyword">var</span> parent <span class="token operator">=</span> vm<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>parent<span class="token punctuation">.</span>_isBeingDestroyed <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>abstract<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">remove</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>$children<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// teardown watchers 2\u3001\u6CE8\u9500\u6240\u6709 watcher</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// remove reference from data ob</span>
  <span class="token comment">// frozen object may not have observer.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>__ob__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>__ob__<span class="token punctuation">.</span>vmCount<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// call the last hook...</span>
  vm<span class="token punctuation">.</span>_isDestroyed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// invoke destroy hooks on current rendered tree</span>
  <span class="token comment">// 3. \u89E6\u53D1\u5B83\u5B50\u7EC4\u4EF6\u7684\u9500\u6BC1\u94A9\u5B50\u51FD\u6570\uFF0C\u8FD9\u6837\u4E00\u5C42\u5C42\u7684\u9012\u5F52\u8C03\u7528\uFF0C\u6240\u4EE5 destroy \u94A9\u5B50\u51FD\u6570\u6267\u884C\u987A\u5E8F\u662F\u5148\u5B50\u540E\u7236\uFF0C\u548C mounted \u8FC7\u7A0B\u4E00\u6837</span>
  vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// fire destroyed hook</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// turn off all instance listeners.</span>
  vm<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// remove __vue__ reference</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// release circular reference (#6759)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="activated-deactivated" tabindex="-1">activated &amp; deactivated <a class="header-anchor" href="#activated-deactivated" aria-hidden="true">#</a></h2><p>activated \u548C deactivated \u94A9\u5B50\u51FD\u6570\u662F\u4E13\u95E8\u4E3A keep-alive \u7EC4\u4EF6\u5B9A\u5236\u7684\u94A9\u5B50\u3002\u57FA\u672C\u540C\u666E\u901A\u7EC4\u4EF6\u7C7B\u4F3C\uFF0C\u5728\u4E0A\u9762\u7684 componentVNodeHooks \u4E2D\u90FD\u6709\u4E00\u4E2A\u5224\u65AD\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// componentVNodeHooks \u5BF9\u8C61\u4E2D\u7684 insert \u51FD\u6570</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>_isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">queueActivatedComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">activateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// componentVNodeHooks \u5BF9\u8C61\u4E2D\u7684 destroy \u51FD\u6570</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  componentInstance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">deactivateChildComponent</span><span class="token punctuation">(</span>componentInstance<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* direct */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,28),c=[e];function u(l,k,i,r,d,m){return t(),a("div",null,c)}var y=s(o,[["render",u]]);export{h as __pageData,y as default};
