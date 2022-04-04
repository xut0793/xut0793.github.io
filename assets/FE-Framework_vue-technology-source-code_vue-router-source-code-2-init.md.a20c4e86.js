import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const f='{"title":"VueRouter\u6E90\u78012\uFF1Arouter.init \u521D\u59CB\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"router.init \u6267\u884C\u65F6\u673A","slug":"router-init-\u6267\u884C\u65F6\u673A"},{"level":2,"title":"router.init \u6E90\u7801","slug":"router-init-\u6E90\u7801"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-router-source-code-2-init.md"}',p={},o=t(`<h1 id="vuerouter\u6E90\u78012\uFF1Arouter-init-\u521D\u59CB\u5316" tabindex="-1">VueRouter\u6E90\u78012\uFF1Arouter.init \u521D\u59CB\u5316 <a class="header-anchor" href="#vuerouter\u6E90\u78012\uFF1Arouter-init-\u521D\u59CB\u5316" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#router-init-\u6267\u884C\u65F6\u673A">router.init \u6267\u884C\u65F6\u673A</a></li><li><a href="#router-init-\u6E90\u7801">router.init \u6E90\u7801</a></li></ul></div></p><h2 id="router-init-\u6267\u884C\u65F6\u673A" tabindex="-1">router.init \u6267\u884C\u65F6\u673A <a class="header-anchor" href="#router-init-\u6267\u884C\u65F6\u673A" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">const</span> Info  <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;div&gt;id:{{this.$route.params.id}}&lt;/div&gt;&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/info/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span>Info<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u5B8C\u6210\u4E86\u8DEF\u7531\u63D2\u4EF6\u6CE8\u518C <code>Vue.use(VueRouter)</code> \u4EE5\u53CA\u8DEF\u7531\u5668\u7684\u5B9E\u4F8B\u5316 <code>const router = new VueRouter({route})</code> \u540E\uFF0C\u5373\u6267\u884C <code>new Vue(options)</code>\u3002</p><p>\u524D\u7AEF\u6211\u4EEC\u5206\u6790\u4E86\u5728\u8DEF\u7531\u63D2\u4EF6 <code>Vue.use(VueRouter)</code> \u4E2D\u6267\u884C\u4E86 VueRouter \u7684 install \u65B9\u6CD5\uFF0C\u5728 install \u65B9\u6CD5\u4E2D\u4E3B\u8981\u662F\u5411 vue \u751F\u547D\u5468\u671F\u94A9\u5B50 beforeCreate \u51FD\u6570\u4E2D\u6DF7\u5165\u4E86\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// \u6B64\u65F6\u662F new Vue \u6839\u5B9E\u4F8B\u65F6\uFF0C\u56E0\u4E3A\u53EA\u5728 new Vue(options) \u7684 options \u4E2D\u4F20\u5165\u4E86 router</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B vm</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">;</span> <span class="token comment">// new Vue \u65F6\u4F20\u5165\u7684 new VueRouter \u5B9E\u4F8B</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u521D\u59CB\u5316</span>
      Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;_route&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_router<span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u5176\u5B83\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\uFF0C\u4FDD\u5B58\u4ECE\u7236\u7EC4\u4EF6\u4E0A\u83B7\u53D6\u6839\u5B9E\u4F8B app\uFF0C\u56E0\u4E3A\u53EA\u6709\u6839\u5B9E\u4F8B\u4E0A\u624D\u542B\u6709\u8DEF\u7531\u4FE1\u606F</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_routerRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_routerRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">registerInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5176\u4E2D beforeCreate \u94A9\u5B50\u51FD\u6570\u5728 <code>new Vue(options)</code> \u6267\u884C\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u51FD\u6570\u8C03\u7528\u8DEF\u5F84\uFF1A<code>new Vue(options) =&gt; this._init(options) =&gt; Vue.prototype._init(options) =&gt; callHook(vm, &#39;beforeCreate&#39;)</code></p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7EC4\u4EF6\u9009\u9879\u5408\u5E76</span>
    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// new Vue \u65F6\u9009\u9879\u5408\u5E76</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u5185\u90E8\u5C5E\u6027\uFF1A$root/$parent/$refs=[]/$children=[]/_watcher=null\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u751F\u547D\u72B6\u6001\u6807\u5FD7 flag: _inactive=null/_isMounted=false/_isDestoryed=false/_isBeingDestoryed=false</span>
  <span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D\u7236\u7EC4\u4EF6\u4F20\u5165\u7684\u4E8B\u4EF6\u76D1\u542C\u5668 listeners \u5230\u5B9E\u4F8B vm._events \u5BF9\u8C61\u4E0A\uFF0C\u6765\u6E90\u4E8E template \u89E3\u6790\u5230\u7684 v-on \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u51FD\u6570</span>
  <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6302\u8F7D $attrs/$listeners\uFF0C\u4EE5\u53CA\u7ED1\u5B9A _c/$createElement</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve injections before data/props 1. \u89E3\u6790 inject \u5C5E\u6027\u7684\u6570\u636E\uFF1B2. \u5E76\u5C06\u5176\u8BBE\u7F6E\u54CD\u5E94\u5F0F\uFF08\u5373k-v\u8F6C\u4E3Agetter/setter\uFF09\u540C\u65F6\u6302\u8F7D\u5230 vm \u4E0A</span>
  <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB script \u4E2D\u7684\u5C5E\u6027\uFF1AinitProps/initMethods/initData/initComputed/initWatch</span>
  <span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// resolve provide after data/props</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6240\u4EE5<code>new Vue(options)</code>\u4F1A\u6267\u884C\u4E0A\u9762\u6DF7\u5165\u7684\u4EE3\u7801\u3002\u5176\u4E2D\u8DEF\u7531\u5668\u521D\u59CB\u5316\u51FD\u6570\u662F\u6838\u5FC3\u4EE3\u7801 <code>this._router.init(this)</code>\u3002</p><h2 id="router-init-\u6E90\u7801" tabindex="-1">router.init \u6E90\u7801 <a class="header-anchor" href="#router-init-\u6E90\u7801" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
    <span class="token comment">// \u4E3B\u8981\u5904\u7406\uFF1A1\u3001\u751F\u6210\u8DEF\u7531\u6620\u5C04\u5173\u7CFB\uFF1B2\u3001new History \u5B9E\u4F8B\u5316\u8DEF\u7531</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u5728\u8DEF\u7531\u521D\u59CB\u5316\u65F6\uFF0C\u6838\u5FC3\u5C31\u662F\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\uFF0C\u6539\u53D8 URL \u7136\u540E\u6E32\u67D3\u5BF9\u5E94\u7684\u7EC4\u4EF6
   * init \u8C03\u7528\u5206\u4E24\u79CD\u60C5\u51B5\uFF1A\u5168\u5C40 new Vue \u5B9E\u4F8B\u65F6\u548C component \u7EC4\u4EF6\u5B9E\u4F8B\u65F6
   * 
   * \u4E00\u3001component \u7EC4\u4EF6\u5B9E\u4F8B\u65F6 new vnode.componentOptions.Ctor(options)
   *    1)\u3001 this.apps.push(app)
   *    2)\u3001 \u5728\u7EC4\u4EF6\u9500\u6BC1\u94A9\u5B50\u51FD\u6570\u6CE8\u518C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4E8E\u5220\u9664\u4FDD\u5B58\u5728 apps \u6570\u7EC4\u4E2D\u7684\u5B9E\u4F8B\u548C\u53D6\u6D88\u8DEF\u7531\u76D1\u542C\u4E8B\u4EF6
   * 
   * \u4E8C\u3001new Vue \u5168\u5C40\u5B9E\u4F8B\u65F6\uFF0C\u9664\u4E0A\u9762\u4E24\u4E2A\u4EFB\u52A1\u5916\uFF0C\u8FD8\u6709
   *    1)\u3001\u8C03\u7528 history.transitionTo \u51FD\u6570\u8FDB\u884C\u8DEF\u5F84\u5207\u6362
   *    2)\u3001\u8C03\u7528 history.listen \u51FD\u6570\u6DFB\u52A0\u8DEF\u7531\u89C6\u56FE\u6E32\u67D3\u7684\u56DE\u8C03\u51FD\u6570 
   */</span>
  <span class="token function">init</span> <span class="token punctuation">(</span>app <span class="token comment">/* Vue component instance */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token function">assert</span><span class="token punctuation">(</span>
      install<span class="token punctuation">.</span>installed<span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">not installed. Make sure to call \\\`Vue.use(VueRouter)\\\` </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">before creating root instance.</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// set up app destroyed handler</span>
    <span class="token comment">// \u7EC4\u4EF6\u9500\u6BC1\u94A9\u5B50\u56DE\u8C03\u51FD\u6570\uFF0C\u4E3B\u8981\u5904\u7406\uFF1A\u5C06\u9500\u6BC1\u7684\u7EC4\u4EF6\u4ECE apps \u6570\u7EC4\u4E2D\u5220\u9664\uFF0C\u79FB\u9664\u76F8\u5173\u4E8B\u4EF6\u76D1\u542C</span>
    app<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;hook:destroyed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// clean out app from this.apps array once destroyed</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// ensure we still have a main app or null if no apps</span>
      <span class="token comment">// we do not release the router so it can be reused</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">===</span> app<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// clean up event listeners</span>
        <span class="token comment">// https://github.com/vuejs/vue-router/issues/2341</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">teardownListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// main app previously initialized</span>
    <span class="token comment">// return as we don&#39;t need to set up new history listener</span>
    <span class="token comment">/**
     * \u4ECE\u6B64\u5F80\u4E0A\u90E8\u5206\uFF0C\u662F new Vue \u548C new vnode.componentOptions.Ctor(options) \u90FD\u4F1A\u8FD0\u884C\u7684\u3002
     * \u4ECE\u6B64\u5F80\u4E0B\u5F80\u4E0B\u90E8\u5206\uFF0C\u53EA\u4F1A\u521D\u6B21\u6CE8\u518C new Vue({router}) \u65F6\u624D\u4F1A\u8FD0\u884C\uFF0C\u5373\u6CE8\u518C transitionTo \u548C listen
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> app<span class="token punctuation">;</span>

    <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token keyword">instanceof</span> <span class="token class-name">HTML5History</span> <span class="token operator">||</span> history <span class="token keyword">instanceof</span> <span class="token class-name">HashHistory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FDB\u884C\u8DEF\u7531\u8FC7\u6E21\u5230\u76EE\u6807url\u4E0A</span>
      history<span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>
        history<span class="token punctuation">.</span><span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u524D\u6D4F\u89C8\u5668\u5730\u5740\u680F url\uFF1Awindow.location.pathname \u6216 window.location.href</span>
        setupListeners<span class="token punctuation">,</span> <span class="token comment">// onComplete</span>
        setupListeners <span class="token comment">// onAbort</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// \u8BBE\u7F6E\u8DEF\u7531\u53D8\u5316\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5982 hashChange \u6216 popState \u4E8B\u4EF6</span>
      <span class="token keyword">function</span> <span class="token function">setupListeners</span><span class="token punctuation">(</span><span class="token parameter">routeOrError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">setupListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">handleInitialScroll</span><span class="token punctuation">(</span>routeOrError<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5982\u679C new Router(options) \u7684 options \u4E2D\u6709\u4F20\u5165 scrollBehavior \u5C5E\u6027\uFF0C\u5219\u6267\u884C\u9ED8\u8BA4\u6EDA\u52A8\u65B9\u6CD5</span>
      <span class="token keyword">function</span> <span class="token function">handleInitialScroll</span> <span class="token punctuation">(</span><span class="token parameter">routeOrError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> from <span class="token operator">=</span> history<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
        <span class="token keyword">const</span> expectScroll <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>scrollBehavior<span class="token punctuation">;</span>
        <span class="token keyword">const</span> supportsScroll <span class="token operator">=</span> supportsPushState <span class="token operator">&amp;&amp;</span> expectScroll<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsScroll <span class="token operator">&amp;&amp;</span> <span class="token string">&#39;fullPath&#39;</span> <span class="token keyword">in</span> routeOrError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleScroll</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> routeOrError<span class="token punctuation">,</span> from<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u5728 install \u6CE8\u518C\u65F6\u6DF7\u5165 beforeCreate \u51FD\u6570\u4E2D\u7684\u4EE3\u7801 
     * Vue.util.defineReactive(this, &#39;_route&#39;, this._router.history.current)
     * \u5DF2\u5C06 _route \u5C5E\u6027\u8BBE\u4E3A\u54CD\u5E94\u5F0F\uFF0C\u6240\u4EE5\u5BF9\u5176\u8D4B\u503C\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u89C6\u56FE\u6E32\u67D3\u66F4\u65B0
     * 
     * \u8FD9\u91CC\u5C06\u6B64\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u7684\u51FD\u6570\u901A\u8FC7 history.listen \u65B9\u6CD5\u8D4B\u503C\u7ED9 history.cb \uFF0C\u5F85 history.transitionTo \u65B9\u6CD5\u6700\u540E\u6267\u884C\u3002
    */</span>
    history<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>apps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span>_route <span class="token operator">=</span> route<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u7701\u7565\u539F\u578B\u65B9\u6CD5
   * push
   * replace
   * go
   * back
   * forward
   * currentRoute
   * addRoutes
   * match
   * getMatchedComponents
   * onReady
   * onError
   * beforeEach
   * beforeResolve
   * afterEach
   */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u518D\u770B\u57FA\u7C7B History \u539F\u578B\u5BF9\u8C61\u4E0A\u7684 transitionTo \u65B9\u6CD5\u3002</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">History</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">router<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router <span class="token operator">=</span> router<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token function">normalizeBase</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// start with a route object that stands for &quot;nowhere&quot;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token constant">START</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>readyCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>readyErrorCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>errorCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token function">listen</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u66F4\u65B0\u8DEF\u7531\uFF0C\u8C03\u7528 cb \u89E6\u53D1\u89C6\u56FE\u6E32\u67D3</span>
  <span class="token function">updateRoute</span> <span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> route<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">transitionTo</span> <span class="token punctuation">(</span>
    <span class="token parameter">location<span class="token punctuation">,</span>
    onComplete<span class="token punctuation">,</span>
    onAbort</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> route<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      route <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">/**
       * eg: /info/13?q=test
       * 
       * \u7ECF\u8FC7 match \u51FD\u6570\u8FD4\u56DE\u7ED3\u679C
       * route = {
       *  name: undefined,
       *  path: &#39;/info/13&#39;,
       *  fullPath: &#39;/info/13?q=test&#39;
       *  query: {q: &#39;test&#39;},
       *  params: {id: 13},
       *  meta: {},
       *  hash: &#39;&#39;,
       *  matched: [{
       *    path: &#39;/info/:id&#39;,
            regex: /^\\/info\\/((?:[^\\/]+?))(?:\\/(?=$))?$/i,
            name: &#39;info&#39;,
            components: {
              default: Info
            }
          }]
      * }
      */</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>errorCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Exception should still be thrown</span>
      <span class="token keyword">throw</span> e
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">confirmTransition</span><span class="token punctuation">(</span>
      route<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
        onComplete <span class="token operator">&amp;&amp;</span> <span class="token function">onComplete</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// setupListeners \u51FD\u6570\uFF0C\u6CE8\u518C hashChange \u6216 popState \u4E8B\u4EF6\u76D1\u542C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ensureURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>afterHooks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hook</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          hook <span class="token operator">&amp;&amp;</span> <span class="token function">hook</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// fire ready cbs once</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>ready<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>readyCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">cb</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>onAbort<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">onAbort</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>ready<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token comment">// Initial redirection should still trigger the onReady onSuccess</span>
          <span class="token comment">// https://github.com/vuejs/vue-router/issues/3225</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> NavigationFailureType<span class="token punctuation">.</span>redirected<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>readyErrorCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>readyCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">cb</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">confirmTransition</span> <span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> onComplete<span class="token punctuation">,</span> onAbort</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">abort</span> <span class="token operator">=</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// changed after adding errors with</span>
      <span class="token comment">// https://github.com/vuejs/vue-router/pull/3047 before that change,</span>
      <span class="token comment">// redirect and aborted navigation would produce an err == null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>errorCbs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>errorCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;uncaught error during route navigation:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      onAbort <span class="token operator">&amp;&amp;</span> <span class="token function">onAbort</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lastRouteIndex <span class="token operator">=</span> route<span class="token punctuation">.</span>matched<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lastCurrentIndex <span class="token operator">=</span> current<span class="token punctuation">.</span>matched<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token function">isSameRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> current<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// in the case the route map has been dynamically appended to</span>
      lastRouteIndex <span class="token operator">===</span> lastCurrentIndex <span class="token operator">&amp;&amp;</span>
      route<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>lastRouteIndex<span class="token punctuation">]</span> <span class="token operator">===</span> current<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>lastCurrentIndex<span class="token punctuation">]</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ensureURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token function">createNavigationDuplicatedError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> updated<span class="token punctuation">,</span> deactivated<span class="token punctuation">,</span> activated <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">resolveQueue</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span>matched<span class="token punctuation">,</span>
      route<span class="token punctuation">.</span>matched
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
      <span class="token comment">// in-component leave guards</span>
      <span class="token function">extractLeaveGuards</span><span class="token punctuation">(</span>deactivated<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// global before hooks</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>beforeHooks<span class="token punctuation">,</span>
      <span class="token comment">// in-component update hooks</span>
      <span class="token function">extractUpdateHooks</span><span class="token punctuation">(</span>updated<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// in-config enter guards</span>
      activated<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">m</span> <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>beforeEnter<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// async components</span>
      <span class="token function">resolveAsyncComponents</span><span class="token punctuation">(</span>activated<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">=</span> route<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">iterator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">hook<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">!==</span> route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token function">createNavigationCancelledError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">hook</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> current<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// next(false) -&gt; abort navigation, ensure current URL</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ensureURL</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">abort</span><span class="token punctuation">(</span><span class="token function">createNavigationAbortedError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isError</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ensureURL</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">abort</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
            <span class="token keyword">typeof</span> to <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span>
            <span class="token punctuation">(</span><span class="token keyword">typeof</span> to <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
              <span class="token punctuation">(</span><span class="token keyword">typeof</span> to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> to<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// next(&#39;/&#39;) or next({ path: &#39;/&#39; }) -&gt; redirect</span>
            <span class="token function">abort</span><span class="token punctuation">(</span><span class="token function">createNavigationRedirectedError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> to <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>replace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// confirm transition and pass on the value</span>
            <span class="token function">next</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">abort</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">runQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> iterator<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> postEnterCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">===</span> route<span class="token punctuation">;</span>
      <span class="token comment">// wait until async components are resolved before</span>
      <span class="token comment">// extracting in-component enter guards</span>
      <span class="token keyword">const</span> enterGuards <span class="token operator">=</span> <span class="token function">extractEnterGuards</span><span class="token punctuation">(</span>activated<span class="token punctuation">,</span> postEnterCbs<span class="token punctuation">,</span> isValid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> queue <span class="token operator">=</span> enterGuards<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>resolveHooks<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">runQueue</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> iterator<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">!==</span> route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token function">createNavigationCancelledError</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">onComplete</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            postEnterCbs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
