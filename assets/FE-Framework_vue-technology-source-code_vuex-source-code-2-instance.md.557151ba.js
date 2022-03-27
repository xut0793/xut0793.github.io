import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const y='{"title":"vuex\u6E90\u78012\uFF1Ainstance \u5B9E\u4F8B\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E8F\u5217\u5316 options","slug":"\u5E8F\u5217\u5316-options"},{"level":2,"title":"\u521D\u59CB\u5316 state / getters / mutations / actions","slug":"\u521D\u59CB\u5316-state-getters-mutations-actions"},{"level":2,"title":"\u5EFA\u7ACB state / getters \u4F9D\u8D56\u5173\u7CFB","slug":"\u5EFA\u7ACB-state-getters-\u4F9D\u8D56\u5173\u7CFB"}],"relativePath":"FE-Framework/vue-technology-source-code/vuex-source-code-2-instance.md"}',p={},o=t(`<h1 id="vuex\u6E90\u78012\uFF1Ainstance-\u5B9E\u4F8B\u5316" tabindex="-1">vuex\u6E90\u78012\uFF1Ainstance \u5B9E\u4F8B\u5316 <a class="header-anchor" href="#vuex\u6E90\u78012\uFF1Ainstance-\u5B9E\u4F8B\u5316" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5E8F\u5217\u5316-options">\u5E8F\u5217\u5316 options</a></li><li><a href="#\u521D\u59CB\u5316-state-getters-mutations-actions">\u521D\u59CB\u5316 state / getters / mutations / actions</a></li><li><a href="#\u5EFA\u7ACB-state-getters-\u4F9D\u8D56\u5173\u7CFB">\u5EFA\u7ACB state / getters \u4F9D\u8D56\u5173\u7CFB</a></li></ul></div></p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>new Vuex.Store</code> \u8C03\u7528\uFF0C\u770B\u4E0B Store\u3000\u7C7B\u7684\u6784\u9020\u51FD\u6570\u7684\u5B9E\u73B0\uFF1A</p><p>\u4E3B\u8981\u5B8C\u6210\u4E09\u4EF6\u4E8B\uFF1A</p><ol><li>\u5E8F\u5217\u5316 options\uFF0C\u4EE5 modules \u5EFA\u7ACB\u5D4C\u5957\u6811\uFF1A <code>this._modules = new ModuleCollection(options)</code></li><li>\u628A\u5404\u5D4C\u5957\u4E2D\u7684 getters / mutations / actions \u7EDF\u4E00\u63D0\u53D6\u4FDD\u5B58\u5230\u5B9E\u4F8B\u5C5E\u6027 _wrappedGetters / _mutations / _actions\uFF0C\u5E76\u5EFA\u7ACB state \u503C\u7684\u83B7\u53D6\uFF1A <code>installModule(this, state, [], this._modules.root)</code></li><li>\u5EFA\u7ACB getter \u548C state \u7684\u4F9D\u8D56\u5173\u7CFB\uFF1A <code>resetStoreVM(this, state)</code></li></ol><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// store internal state</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_committing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_actions <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_wrappedGetters <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_modulesNamespaceMap <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_makeLocalGettersCache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_watcherVM <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_modules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModuleCollection</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// 1. \u5E8F\u5217\u5316 options \uFF0C\u5F62\u6210\u4E00\u9897\u542B\u6709 _children \u7684\u5D4C\u5957\u6811\uFF1Athis._modules = {root: {runtime:false, state, _rawModule, _children: {moduleA: {...}}}}</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_modules<span class="token punctuation">.</span>root<span class="token punctuation">.</span>state<span class="token punctuation">;</span>

    <span class="token comment">// 2. \u5B8C\u6210\u6839\u6A21\u5757\u548C\u5B50\u6A21\u5757\u7684\u521D\u59CB\u5316\uFF0C\u5373\u5904\u7406 state / getters / mutations / actions</span>
    <span class="token function">installModule</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_modules<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. storeVm = new Vue \u751F\u6210\u4E00\u4E2A vue \u5B9E\u4F8B\uFF0C\u5EFA\u7ACB getter \u548C state \u7684\u4F9D\u8D56\u5173\u7CFB</span>
    <span class="token function">resetStoreVM</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E8F\u5217\u5316-options" tabindex="-1">\u5E8F\u5217\u5316 options <a class="header-anchor" href="#\u5E8F\u5217\u5316-options" aria-hidden="true">#</a></h2><p>\u770B\u4E0B\u5176\u4E2D\u5E8F\u5217\u5316 options \u7684\u4EE3\u7801\uFF1A<code>this._modules = new ModuleCollection(options)</code></p><p>\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// new Vuex.Store(options)</span>
options <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">moduleA1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ECF\u8FC7 <code>this._modules = new ModuleCollection(options)</code> \u6E90\u7801\u903B\u8F91\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">ModuleCollection</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">rawRootModule</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u518C\u6839\u6A21\u5757\uFF0Cpath = [], \u8FD0\u884C\u65F6\u521B\u5EFA\u6A21\u5757 runtime = false</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rawRootModule<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">register</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> rawModule<span class="token punctuation">,</span> runtime <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u6821\u9A8C new Store({state, getters, mutations, actions})\u4E2D\u4F20\u5165\u7684 getters / mutations \u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u503C\u5FC5\u987B\u662F\u51FD\u6570\uFF0C actions \u6BCF\u4E2A\u5C5E\u6027\u503C\u5FC5\u987B\u662F\u51FD\u6570\u6216\u8005\u5BF9\u8C61\u5F62\u5F0F\u4E2D\u542B\u6709 handler \u51FD\u6570\u3002</span>
      <span class="token function">assertRawModule</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> rawModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> newModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Module</span><span class="token punctuation">(</span>rawModule<span class="token punctuation">,</span> runtime<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// path = []\uFF0C\u662F\u6839\u6A21\u5757</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> newModule<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/**
       * \u901A\u8FC7\u5C06\u5D4C\u5957\u6A21\u5757\u7684 key \u6309\u5148\u540E\u987A\u5E8F\u5B58\u5165\u6570\u7EC4\u4E2D\uFF0C\u9664\u6700\u540E\u4E00\u9879\uFF0C\u524D\u9762\u7684\u90FD\u4E3A\u7236\u6A21\u5757\u8DEF\u5F84
       * path = [moduleA] \u6216\u8005 [moduleA, moduleA1]
       * \u7136\u540E\u4ECE this.root \u5F00\u59CB\u5411\u4E0Bget \u5230\u7236\u6A21\u5757\uFF0C\u5411\u5176 _children \u6DFB\u52A0\u5F53\u524D\u6A21\u5757
       * \u6700\u7EC8\u6784\u6210\u4E00\u9897\u5D4C\u5957\u7684\u6A21\u5757\u6811
       */</span>
      <span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      parent<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newModule<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token comment">// addChild (key, module) { this._children[key] = module; }</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u9012\u5F52\u8C03\u7528\u5904\u7406\u5B50\u6A21\u5757</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rawModule<span class="token punctuation">.</span>modules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">forEachValue</span><span class="token punctuation">(</span>rawModule<span class="token punctuation">.</span>modules<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">rawChildModule<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> rawChildModule<span class="token punctuation">,</span> runtime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> module<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// Module.prototype.getChild = function (key) {return this._children[key]}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getNamespace</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      module <span class="token operator">=</span> module<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> namespace <span class="token operator">+</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>namespaced <span class="token operator">?</span> key <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5355\u4E2A\u6A21\u5757\u7684\u5E8F\u5217\u5316\uFF0C\u5173\u952E\u4EE3\u7801 <code>const newModule = new Module(rawModule, runtime)</code></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Module</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">rawModule<span class="token punctuation">,</span> runtime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>runtime <span class="token operator">=</span> runtime<span class="token punctuation">;</span>
    <span class="token comment">// Store some children item</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_children <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Store the origin module object which passed by programmer</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_rawModule <span class="token operator">=</span> rawModule<span class="token punctuation">;</span>
    <span class="token keyword">const</span> rawState <span class="token operator">=</span> rawModule<span class="token punctuation">.</span>state<span class="token punctuation">;</span>

    <span class="token comment">// Store the origin module&#39;s state</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> rawState <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function">rawState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> rawState<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3E\u4F8B\uFF1A\u5355\u4E2A\u6A21\u5757\u7ECF\u8FC7 new Module \u7684\u751F\u6210\u7684\u65B0\u6A21\u5757\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token comment">// \u4F8B\u5B50\uFF1A</span>
<span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_NAME&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Module \u7C7B\u5904\u7406</span>
<span class="token keyword">const</span> newModuleB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Module</span><span class="token punctuation">(</span>moduleB<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// \u7ED3\u679C</span>
<span class="token keyword">const</span> newModuleB <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">SET_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_NAME&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u7684\u6A21\u5757\uFF0C\u7ECF\u8FC7 <code>ModuleCollection</code> \u53CA <code>Module</code> \u5904\u7406\u5E8F\u5217\u5316\u540E\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u4F8B\u5B50 new Vuex.Store(options)</span>
options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">rootTest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions<span class="token punctuation">,</span>
  <span class="token literal-property property">modlules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">moduleA1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">getName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> rootState<span class="token punctuation">.</span>name <span class="token operator">+</span> state<span class="token punctuation">.</span>name
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">SET_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_NAME&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ECF\u8FC7</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_modules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModuleCollection</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token keyword">const</span> newModule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Module</span><span class="token punctuation">(</span>rawModule<span class="token punctuation">,</span> runtime<span class="token punctuation">)</span>

<span class="token comment">// \u7ED3\u679C</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_modules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">rootTest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> mutations<span class="token punctuation">,</span> actions<span class="token punctuation">,</span> modules<span class="token punctuation">}</span>
    <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">moduleA1</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">moduleA1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">_rawModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;A1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">,</span> mutations<span class="token punctuation">,</span> actions<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5 options\u3000\u5E8F\u5217\u5316\u4E3B\u8981\u4EE5\u3000modules \u4E3A\u5D4C\u5957\u57FA\u7840\uFF0C\u8F6C\u4E3A _children \u5B57\u6BB5\u5EFA\u7ACB\u5D4C\u5957\u6811\u5F62\u7ED3\u6784\uFF0C\u5355\u5C42\u5BF9\u8C61\u5305\u542B\u5C5E\u6027\uFF1A <code>{ runtime, state, _rawModule, _children }</code></p><h2 id="\u521D\u59CB\u5316-state-getters-mutations-actions" tabindex="-1">\u521D\u59CB\u5316 state / getters / mutations / actions <a class="header-anchor" href="#\u521D\u59CB\u5316-state-getters-mutations-actions" aria-hidden="true">#</a></h2><p>\u5B8C\u6210\u4E86 options \u7684\u5E8F\u5217\u5316\u540E\uFF0C\u5C31\u662F\u5904\u7406\u5D4C\u5957\u6811\u4E2D\u7684 state / getters / mutations / actions \u5C5E\u6027\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u4ECE\u6839\u6A21\u5757\u5F00\u59CB</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_modules<span class="token punctuation">.</span>root<span class="token punctuation">.</span>state<span class="token punctuation">;</span>
<span class="token function">installModule</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_modules<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6240\u4EE5\uFF0C\u518D\u770B\u4E0B installModule \u65B9\u6CD5\u7684\u6E90\u7801\u903B\u8F91</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">installModule</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">,</span> module<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isRoot <span class="token operator">=</span> <span class="token operator">!</span>path<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// namespace + (module.namespaced ? key + &#39;/&#39; : &#39;&#39;)</span>
  <span class="token comment">// \u5982\u679C namespaced = true\uFF0C\u5219 namespace = &#39;moduleA/moduleA1/&#39;\uFF0C\u5426\u5219\u5C31\u662F\u6A21\u5757\u540D\u79F0 &#39;moudleA1&#39;</span>
  <span class="token keyword">const</span> namespace <span class="token operator">=</span> store<span class="token punctuation">.</span>_modules<span class="token punctuation">.</span><span class="token function">getNamespace</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span> 

  <span class="token comment">// register in namespace map</span>
  <span class="token comment">// \u5982\u679C\u6709\u547D\u540D\u7A7A\u95F4\uFF0C\u5219\u7EF4\u62A4\u4E00\u4EFD\u8DEF\u5F84\u8DDF\u6A21\u5757\u7684\u6620\u5C04\u5173\u7CFB\uFF1Astore._modulesNamespaceMap = {&#39;moduleA/moduleA1&#39;: moduleA1}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>namespaced<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>_modulesNamespaceMap<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] duplicate namespace </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> for the namespaced module </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    store<span class="token punctuation">.</span>_modulesNamespaceMap<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> module<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5EFA\u7ACB state \u7684\u5D4C\u5957\u6811</span>
  <span class="token comment">/**
   * this._moudules = {
   *  root: {
   *    state: {name: rootTest},
   *    _children: {
   *      moduleB: {
   *        state: {name: &#39;B&#39;}
   *      }
   *    }
   *  }
   * }
   * 
   * \u7ECF\u8FC7\u4E0B\u9762\u4EE3\u7801\uFF0C\u4F1A\u5F62\u6210 state \u5D4C\u5957\u6811
   * this._moudules = {
   *  root: {
   *    state: {
   *      name: rootTest,
   *      moduleB: {
   *        state: {name: &#39;B&#39;}
   *      }
   *    },
   *    _children: {
   *      moduleB: {
   *        state: {name: &#39;B&#39;}
   *      }
   *    }
   *  }
   * }
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// function getNestedState (state, path) { return path.reduce((state, key) =&gt; state[key], state)}</span>
    <span class="token keyword">const</span> parentState <span class="token operator">=</span> <span class="token function">getNestedState</span><span class="token punctuation">(</span>rootState<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> moduleName <span class="token operator">=</span> path<span class="token punctuation">[</span>path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    store<span class="token punctuation">.</span><span class="token function">_withCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>moduleName <span class="token keyword">in</span> parentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] state field &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>moduleName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; was overridden by a module with the same name at &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>parentState<span class="token punctuation">,</span> moduleName<span class="token punctuation">,</span> module<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u4EE5\u4E0B\u5185\u90E8\u4E3B\u8981\u662F\u5C06\u5F53\u524D\u6A21\u5757\u7684 mutations / actions / getters \u91CC\u7684\u5C5E\u6027\u5206\u522B\u6CE8\u518C\u5230 store \u5B9E\u4F8B\u7684 _mutations / _actions / _wrappedGetters
   * \u7136\u540E\u533A\u522B\u6709\u6CA1\u6709\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4 namespaced\uFF0C\u6709\u6CA1\u547D\u540D\u7A7A\u95F4\u533A\u522B\u5728\u4E8E _mutations / _actions / _wrappedGetters \u5BF9\u8C61\u4E2D\u7684 key \u503C\u4E0D\u540C\u3002
   */</span>

  <span class="token comment">// \u4E3B\u8981\u9488\u5BF9\u662F\u5B9A\u4E49\u4E86 namespace\uFF1A</span>
  <span class="token comment">// \u5982\u679C\u5B9A\u4E49\u4E86\u547D\u540D\u7A7A\u95F4 namespace = &#39;moduleA/moduleA1&#39;\uFF0C\u5219\u6A21\u5757A\u4E2D\u7684\u67D0\u4E2A\u65B9\u6CD5\u7684\u5BFB\u5740\u5C31\u662F _mutations[&#39;moduleA/moduleA1/key&#39;]</span>
  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u547D\u540D\u5C31\u662F _mutations[&#39;key&#39;]</span>
  <span class="token comment">// \u6240\u4EE5 makeLocalContext \u65B9\u6CD5\u5C31\u662F\u4E3A\u6BCF\u4E2A\u6A21\u5757\u5EFA\u7ACB\u5F53\u524D\u6A21\u5757\u5BFB\u5740\u7684\u4E0A\u4E0B\u6587\u7A7A\u95F4</span>
  <span class="token keyword">const</span> local <span class="token operator">=</span> module<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token function">makeLocalContext</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespace<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4ED3\u5E93\u5B9E\u4F8B\u4E0A\u58F0\u660E store._mutations[namespacedType] = [(payload) =&gt; {mutation.call(store, local.state, payload)}]</span>
  module<span class="token punctuation">.</span><span class="token function">forEachMutation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> namespacedType <span class="token operator">=</span> namespace <span class="token operator">+</span> key<span class="token punctuation">;</span> <span class="token comment">// &#39;moduleA/moudleA1/key&#39;</span>
    <span class="token function">registerMutation</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespacedType<span class="token punctuation">,</span> mutation<span class="token punctuation">,</span> local<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/**
   * store._actions[type] = [(payload) =&gt; {return handler.call(store, {
   *  dispatch: local.dispatch,
   *  commit: local.commit,
   *  getters: local.getters,
   *  state: local.state,
   *  rootGetters: store.getters,
   *  rootState: store.state
   * }, payload)}]
   */</span>
  module<span class="token punctuation">.</span><span class="token function">forEachAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> action<span class="token punctuation">.</span>root <span class="token operator">?</span> key <span class="token operator">:</span> namespace <span class="token operator">+</span> key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> action<span class="token punctuation">.</span>handler <span class="token operator">||</span> action<span class="token punctuation">;</span>
    <span class="token function">registerAction</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> local<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// store._wrappedGetters[namespacedType] = function (store) {return getter(store)}</span>
  <span class="token comment">/**
   * store._wrappedGetters[namespacedType] = function (store) {
   *  return getter(
   *    local.state,
   *    local.getters,
   *    store.state,
   *    store.getters
   * )}
   * 
   * \u5373\u6A21\u5757\u4E2D\u7684 getter \u51FD\u6570\u53EF\u4EE5\u6709\u56DB\u4E2A\u5165\u53C2
   * moudleA = {
   *  getters: {
   *    getName(state, getters, rootState, rootGetters) {...}
   *  }
   * }
   */</span>
  module<span class="token punctuation">.</span><span class="token function">forEachGetter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">getter<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> namespacedType <span class="token operator">=</span> namespace <span class="token operator">+</span> key<span class="token punctuation">;</span>
    <span class="token function">registerGetter</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespacedType<span class="token punctuation">,</span> getter<span class="token punctuation">,</span> local<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u9012\u5F52\u5904\u7406\u5D4C\u5957\u7684\u5B50\u6A21\u5757\u7684 state / getters / mutations / actions</span>
  module<span class="token punctuation">.</span><span class="token function">forEachChild</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">installModule</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> child<span class="token punctuation">,</span> hot<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u7EC8\uFF0C\u7ECF\u8FC7 installModule \u51FD\u6570\u7684\u5904\u7406\uFF0C\u5D4C\u5957\u6A21\u5757\u5185\u7684 getters mutations actions \u90FD\u662F\u5E73\u94FA\u5728 store._warppedGetters / store._mutations / store._actions \u5BF9\u8C61\u4E2D\u3002\u6BCF\u4E2A key \u5BF9\u8C61\u5BF9\u5E94\u7684\u503C\u90FD\u662F\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u7684\u5143\u7D20\u90FD\u662F\u5305\u88C5\u51FD\u6570\u3002</p><p>\u5404\u6A21\u5757\u7684 state \u503C\u5F62\u6210\u5D4C\u5957\u7684\u7ED3\u6784\u3002</p><div class="language-js"><pre><code>store <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;rootTest&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">moduleA1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A1&#39;</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_rawModule</span><span class="token operator">:</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">_rawModule</span><span class="token operator">:</span><span class="token punctuation">,</span>
          <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">moudleA1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">_rawModule</span><span class="token operator">:</span><span class="token punctuation">,</span>
              <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">moduleB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">_rawModule</span><span class="token operator">:</span><span class="token punctuation">,</span>
          <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_wrappedGetters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;moduleA/moduleA1/getName&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">getters</span><span class="token punctuation">(</span>local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> local<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> store<span class="token punctuation">.</span>state<span class="token punctuation">,</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;moduleB/SET_NAME&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">mutation</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;moduleB/updateName&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> local<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5EFA\u7ACB-state-getters-\u4F9D\u8D56\u5173\u7CFB" tabindex="-1">\u5EFA\u7ACB state / getters \u4F9D\u8D56\u5173\u7CFB <a class="header-anchor" href="#\u5EFA\u7ACB-state-getters-\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 installModule \u51FD\u6570\u7684\u4F5C\u7528\uFF0C\u5D4C\u5957\u7684\u6BCF\u4E2A\u6A21\u5757\u7684 state / getters / mutations / actions \u90FD\u88AB\u6241\u5E73\u5316\u7684\u5B58\u5165\u4E86 store \u5B9E\u4F8B\u5BF9\u5E94\u7684\u5C5E\u6027\u3002</p><p>store \u5B9E\u4F8B\u5316\u6700\u540E\u4E00\u6B65\uFF0C\u662F\u5EFA\u7ACB state \u548C getters \u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u901A\u8FC7 <code>resetStoreVM(this, state)</code></p><div class="language-js"><pre><code><span class="token comment">/**
 * resetStoreVM \u7684\u4F5C\u7528\u5B9E\u9645\u4E0A\u662F\u5EFA\u7ACB getters \u548C state \u7684\u8054\u7CFB\uFF0C
 * \u56E0\u4E3A\u4ECE\u8BBE\u8BA1\u4E0A getters \u7684\u83B7\u53D6\u5C31\u4F9D\u8D56\u4E86 state \uFF0C\u5E76\u4E14\u5E0C\u671B\u5B83\u7684\u4F9D\u8D56\u80FD\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002
 * \u56E0\u6B64\u8FD9\u91CC\u5229\u7528\u4E86 Vue \u4E2D\u7528 computed \u8BA1\u7B97\u5C5E\u6027\u6765\u5B9E\u73B0
 * 
 * resetStoreVM(this, state)
 */</span>
<span class="token keyword">function</span> <span class="token function">resetStoreVM</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> state<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oldVm <span class="token operator">=</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">;</span>

  store<span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// reset local getters cache</span>
  store<span class="token punctuation">.</span>_makeLocalGettersCache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> wrappedGetters <span class="token operator">=</span> store<span class="token punctuation">.</span>_wrappedGetters<span class="token punctuation">;</span>
  <span class="token keyword">const</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u904D\u5386\u5DF2\u521D\u59CB\u5316\u7684 _wrappedGetters \u6240\u6709 getter</span>
  <span class="token function">forEachValue</span><span class="token punctuation">(</span>wrappedGetters<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// function partial(fn, arg) { return function () { return fn(arg)}} \u5C06 store \u4F5C\u4E3A\u95ED\u5305\u53D8\u91CF\u7F13\u5B58\u8D77\u6765</span>
    <span class="token comment">// \u901A\u8FC7 partial \u51FD\u6570\u95ED\u5305\u8C03\u7528\u4F20\u5165 wrappedGetters \u5305\u88C5\u51FD\u6570\u5B9A\u4E49\u65F6\u7684\u5F62\u53C2 store</span>
    computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5B9A\u4E49 store.getters \u5BF9\u8C61\uFF0C\u4E3A\u6BCF\u4E2A\u5C5E\u6027\u8BBE\u7F6E getter =&gt; store._vm[key]</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// for local getters</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> silent <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent<span class="token punctuation">;</span>
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u6682\u65F6\u5173\u95ED\u5BA2\u6237\u7AEF\u62A5\u9519</span>
  <span class="token comment">// \u58F0\u660E\u4E00\u4E2A vue \u5B9E\u4F8B\uFF0C\u4E0A\u8FF0\u5B9A\u4E49\u7684 computed \u548C state \u8BA2\u9605\u5173\u7CFB\u3002\u5373 state \u7684\u95ED\u5305 dep.subs \u50A8\u5B58\u7740 computed-watcher \u3002\u8FD9\u6837 data \u7684\u6539\u53D8\u4F1A\u89E6\u4F7F computed \u83B7\u53D6\u65B0\u503C\u3002</span>
  store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$$state</span><span class="token operator">:</span> state
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    computed
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent <span class="token operator">=</span> silent<span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token comment">// \u52A8\u6001\u6CE8\u518C\u6A21\u5757\u65F6\u4F1A\u4EA7\u751F\u65E7\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u52A8\u6001\u6CE8\u518C\u6A21\u5757\u65F6\u6267\u884C\u4EE5\u4E0B\u6E05\u7406\u903B\u8F91</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// dispatch changes in all subscribed watchers</span>
      <span class="token comment">// to force getter re-evaluation for hot reloading.</span>
      store<span class="token punctuation">.</span><span class="token function">_withCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        oldVm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> oldVm<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">partial</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,32),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{y as __pageData,g as default};
