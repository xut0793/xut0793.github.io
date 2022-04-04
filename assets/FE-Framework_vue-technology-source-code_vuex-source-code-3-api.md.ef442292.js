import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const y='{"title":"vuex\u6E90\u78013:  API \u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u83B7\u53D6","slug":"\u6570\u636E\u83B7\u53D6"},{"level":3,"title":"this.$store.state","slug":"this-store-state"},{"level":3,"title":"this.$store.getters","slug":"this-store-getters"},{"level":2,"title":"\u6570\u636E\u5B58\u50A8","slug":"\u6570\u636E\u5B58\u50A8"},{"level":3,"title":"commit","slug":"commit"},{"level":3,"title":"dispatch","slug":"dispatch"},{"level":2,"title":"\u8BED\u6CD5\u7CD6","slug":"\u8BED\u6CD5\u7CD6"},{"level":3,"title":"mapState","slug":"mapstate"},{"level":3,"title":"mapGetters","slug":"mapgetters"},{"level":3,"title":"mapMutations","slug":"mapmutations"},{"level":3,"title":"mapActions","slug":"mapactions"}],"relativePath":"FE-Framework/vue-technology-source-code/vuex-source-code-3-api.md"}',p={},o=t(`<h1 id="vuex\u6E90\u78013-api-\u5B9E\u73B0" tabindex="-1">vuex\u6E90\u78013: API \u5B9E\u73B0 <a class="header-anchor" href="#vuex\u6E90\u78013-api-\u5B9E\u73B0" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u6570\u636E\u83B7\u53D6">\u6570\u636E\u83B7\u53D6</a><ul><li><a href="#this-store-state">this.$store.state</a></li><li><a href="#this-store-getters">this.$store.getters</a></li></ul></li><li><a href="#\u6570\u636E\u5B58\u50A8">\u6570\u636E\u5B58\u50A8</a><ul><li><a href="#commit">commit</a></li><li><a href="#dispatch">dispatch</a></li></ul></li><li><a href="#\u8BED\u6CD5\u7CD6">\u8BED\u6CD5\u7CD6</a><ul><li><a href="#mapstate">mapState</a></li><li><a href="#mapgetters">mapGetters</a></li><li><a href="#mapmutations">mapMutations</a></li><li><a href="#mapactions">mapActions</a></li></ul></li></ul></div></p><p>\u7ECF\u8FC7\u4E0A\u4E00\u8282 store \u5B9E\u4F8B\u5316\u8FC7\u7A0B\u7684\u7406\u89E3\uFF0C\u6211\u4EEC\u57FA\u672C\u80FD\u660E\u767D\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u5D4C\u5957\u6A21\u5757\u7684\u5404\u4E2A state / getters / mutations / actions \u6700\u7EC8\u5B58\u50A8\u5728 store \u5B9E\u4F8B\u4E0A\u7684\u7ED3\u6784\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u7684\u5D4C\u5957\u6A21\u5757</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;rootTest&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getRootName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_ROOT_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateRootName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_ROOT_NAME&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>rootState<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">SET_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload<span class="token punctuation">.</span>name
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_NAME&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u7EC8\u5B9E\u4F8B\u5316\u540E\u7684 store \u5BF9\u8C61</p><div class="language-js"><pre><code>store <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u5C5E\u6027</span>

  <span class="token keyword">get</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state
  <span class="token punctuation">}</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;getRootName&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span><span class="token string">&#39;getRootName&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;getFullName&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span><span class="token string">&#39;getFullName&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_wrappedGetters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;getRootName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">wrappedGetter</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getRootName</span><span class="token punctuation">(</span>local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> local<span class="token punctuation">.</span>getters<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;moudleA/getFullName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">wrappedGetter</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getFullName</span><span class="token punctuation">(</span>local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> local<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> store<span class="token punctuation">.</span>state<span class="token punctuation">,</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token string-property property">&#39;SET_ROOT_NAME&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
      <span class="token comment">// handler \u5373\u81EA\u5B9A\u4E49\u7684\u51FD\u6570 SET_ROOT_NAME(state, payload) { state.name = payload }</span>
      <span class="token keyword">function</span> <span class="token function">wrappedMutationHandler</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;moduleA/SET_NAME&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">function</span> <span class="token function">wrappedMutationHandler</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;updateRootName&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">function</span> <span class="token function">wrappedActionHandler</span> <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> state<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters<span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> res
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;moduleA/updateName&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">function</span> <span class="token function">wrappedActionHandler</span> <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> state<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters<span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> res
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">_modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;rootTest&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u539F\u59CB\u6839\u6A21\u5757\u5BF9\u8C61</span>
      <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">moduleA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">_rawModule</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u539F\u59CB moduleA \u6A21\u5757\u5BF9\u8C61</span>
          <span class="token literal-property property">_children</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u5185\u90E8\u7684 store._vm \u5B9E\u4F8B</span>
store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">$$state</span><span class="token operator">:</span> store<span class="token punctuation">.</span>_moudles<span class="token punctuation">.</span>root<span class="token punctuation">.</span>state
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// fn = store._wrappedGetter[&#39;getRootName&#39;] \u51FD\u6570</span>
    <span class="token string-property property">&#39;getRootName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// fn = store._wrappedGetter[&#39;moudleA/getFullName&#39;]</span>
    <span class="token string-property property">&#39;moduleA/getFullName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6570\u636E\u83B7\u53D6" tabindex="-1">\u6570\u636E\u83B7\u53D6 <a class="header-anchor" href="#\u6570\u636E\u83B7\u53D6" aria-hidden="true">#</a></h2><h3 id="this-store-state" tabindex="-1"><code>this.$store.state</code> <a class="header-anchor" href="#this-store-state" aria-hidden="true">#</a></h3><p>\u83B7\u53D6 <code>this.$store.state</code> \u503C\uFF0C\u51FD\u6570\u8C03\u7528\u8DEF\u5F84\uFF1A</p><p><code>this.$store.state =&gt; store._vm._data.$$state =&gt; state =&gt; store._modules.root.state</code></p><p>state \u5904\u7406\u76F8\u5173\u6E90\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// resetStoreVM</span>
<span class="token keyword">function</span> <span class="token function">resetStoreVM</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> state<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$$state</span><span class="token operator">:</span> store<span class="token punctuation">.</span>_moudles<span class="token punctuation">.</span>root<span class="token punctuation">.</span>state
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u751F\u6210\u5404\u6A21\u5757 state \u7684\u5D4C\u5957\u6811</span>
<span class="token keyword">function</span> <span class="token function">installModule</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">,</span> module<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isRoot <span class="token operator">=</span> <span class="token operator">!</span>path<span class="token punctuation">.</span>length
  
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// function getNestedState (state, path) { return path.reduce((state, key) =&gt; state[key], state)}</span>
    <span class="token keyword">const</span> parentState <span class="token operator">=</span> <span class="token function">getNestedState</span><span class="token punctuation">(</span>rootState<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> moduleName <span class="token operator">=</span> path<span class="token punctuation">[</span>path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    store<span class="token punctuation">.</span><span class="token function">_withCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>parentState<span class="token punctuation">,</span> moduleName<span class="token punctuation">,</span> module<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="this-store-getters" tabindex="-1"><code>this.$store.getters</code> <a class="header-anchor" href="#this-store-getters" aria-hidden="true">#</a></h3><p>\u83B7\u53D6 <code>this.$store.getters[&#39;moduleA/getFullName&#39;]</code> \u503C\uFF0C\u51FD\u6570\u8C03\u7528\u8DEF\u5F84\uFF1A</p><p><code>this.$store.getters =&gt; store.getters =&gt; store._vm =&gt; computed =&gt; store._wrappedGetters =&gt; options.getters</code></p><p>getter \u5904\u7406\u76F8\u5173\u6E90\u4EE3\u7801:</p><div class="language-js"><pre><code><span class="token comment">// resetStoreVM</span>
<span class="token keyword">function</span> <span class="token function">resetStoreVM</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> state<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  store<span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> wrappedGetters <span class="token operator">=</span> store<span class="token punctuation">.</span>_wrappedGetters<span class="token punctuation">;</span>
  <span class="token function">forEachValue</span><span class="token punctuation">(</span>wrappedGetters<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// for local getters</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">$$state</span><span class="token operator">:</span> state
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    computed
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// installModule</span>
<span class="token keyword">function</span> <span class="token function">installModule</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">,</span> module<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  module<span class="token punctuation">.</span><span class="token function">forEachGetter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">getter<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> namespacedType <span class="token operator">=</span> namespace <span class="token operator">+</span> key<span class="token punctuation">;</span>
    <span class="token function">registerGetter</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespacedType<span class="token punctuation">,</span> getter<span class="token punctuation">,</span> local<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">registerGetter</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> type<span class="token punctuation">,</span> rawGetter<span class="token punctuation">,</span> local</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>_wrappedGetters<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] duplicate getter key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  store<span class="token punctuation">.</span>_wrappedGetters<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">wrappedGetter</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">rawGetter</span><span class="token punctuation">(</span>
      local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token comment">// local state</span>
      local<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> <span class="token comment">// local getters</span>
      store<span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token comment">// root state</span>
      store<span class="token punctuation">.</span>getters <span class="token comment">// root getters</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6570\u636E\u5B58\u50A8" tabindex="-1">\u6570\u636E\u5B58\u50A8 <a class="header-anchor" href="#\u6570\u636E\u5B58\u50A8" aria-hidden="true">#</a></h2><h3 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-hidden="true">#</a></h3><p>Vuex \u5BF9\u6570\u636E\u5B58\u50A8\u7684\u5B58\u50A8\u672C\u8D28\u4E0A\u5C31\u662F\u5BF9 state \u505A\u4FEE\u6539\uFF0C\u5E76\u4E14\u53EA\u5141\u8BB8\u6211\u4EEC\u901A\u8FC7 commit \u63D0\u4EA4 mutaion \u7684\u5F62\u5F0F\u53BB\u4FEE\u6539 state \u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// 1. \u5728 new Vuex.Store(options) \u4E2D\u7684 options \u5BF9\u8C61\u4E2D\u58F0\u660E mutation \u65B9\u6CD5</span>
<span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token constant">SET_NAME</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// 2. \u7136\u540E\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u63D0\u4EA4 commit \u4FEE\u6539</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA/SET_NAME&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5148\u770B\u4E0B <code>new Vuex.Store(options)</code>\u4E2D\u5BF9 <code>mutations</code> \u7684\u521D\u59CB\u5316\u6E90\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">installModule</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">,</span> module<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> namespace <span class="token operator">=</span> store<span class="token punctuation">.</span>_modules<span class="token punctuation">.</span><span class="token function">getNamespace</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> local <span class="token operator">=</span> module<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token function">makeLocalContext</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespace<span class="token punctuation">,</span> path<span class="token punctuation">)</span>

  module<span class="token punctuation">.</span><span class="token function">forEachMutation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> namespacedType <span class="token operator">=</span> namespace <span class="token operator">+</span> key
    <span class="token function">registerMutation</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespacedType<span class="token punctuation">,</span> mutation<span class="token punctuation">,</span> local<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">registerMutation</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> local</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> entry <span class="token operator">=</span> store<span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  entry<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">wrappedMutationHandler</span> <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> local<span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u770B\u4E0B <code>this.$store.commit</code> \u65B9\u6CD5\u6E90\u7801\uFF1A</p><p>\u903B\u8F91\u5F88\u7B80\u5355\uFF0C\u901A\u8FC7\u4F20\u5165\u7684 type \u4ECE store._mutations[type] \u4E2D\u62FF\u5230\u6240\u6709\u8BE5\u7C7B\u578B\u7684\u5904\u7406\u51FD\u6570\u904D\u5386\u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token function">commit</span> <span class="token punctuation">(</span><span class="token parameter">_type<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u56E0\u4E3A commit \u6709\u51FD\u6570\u548C\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u6240\u4EE5\u9700\u8981\u901A\u8FC7 unifyObjectStyle \u51FD\u6570\u517C\u5BB9\u5904\u7406\u4E0B</span>
    <span class="token comment">// \u51FD\u6570\uFF1Acommit(&#39;moduleA/SET_NAME&#39;, {name:&#39;tom&#39;})</span>
    <span class="token comment">// \u5BF9\u8C61\uFF1Acommit({type: &#39;moudleA/SET_NAME&#39;, name: &#39;tom&#39;})</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unifyObjectStyle</span><span class="token punctuation">(</span>_type<span class="token punctuation">,</span> _payload<span class="token punctuation">,</span> _options<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> mutation <span class="token operator">=</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] unknown mutation type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_withCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      entry<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">commitIterator</span> <span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">unifyObjectStyle</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> payload<span class="token punctuation">;</span>
    payload <span class="token operator">=</span> type<span class="token punctuation">;</span>
    type <span class="token operator">=</span> type<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">assert</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">expects string as the type, but found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> options <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="dispatch" tabindex="-1">dispatch <a class="header-anchor" href="#dispatch" aria-hidden="true">#</a></h3><p>\u5728\u5F00\u53D1\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u8981\u5148\u53BB\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u7136\u540E\u6839\u636E\u8BF7\u6C42\u7684\u7ED3\u679C\u53BB\u4FEE\u6539 state\uFF0C\u90A3\u4E48\u5355\u7EAF\u53EA\u901A\u8FC7 mutation \u662F\u65E0\u6CD5\u5B8C\u6210\u9700\u6C42\uFF0C\u56E0\u6B64 Vuex \u53C8\u7ED9\u6211\u4EEC\u8BBE\u8BA1\u4E86\u4E00\u4E2A action \u7684\u6982\u5FF5\u3002</p><p>action \u7C7B\u4F3C\u4E8E mutation\uFF0C\u4E0D\u540C\u5728\u4E8E action \u63D0\u4EA4\u7684\u662F mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u64CD\u4F5C state\uFF0C\u5185\u90E8\u6E90\u7801\u53EF\u4EE5\u901A\u8FC7 Promise \u5B8C\u6210\u5F02\u6B65\u64CD\u4F5C\u3002</p><div class="language-js"><pre><code><span class="token comment">// 1. \u5728 new Vuex.Store(options) \u4E2D\u7684 options \u5BF9\u8C61\u4E2D\u58F0\u660E actions \u65B9\u6CD5</span>
<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  <span class="token function">httpGetName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resJson</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_NAME&#39;</span><span class="token punctuation">,</span> resJson<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u7136\u540E\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u63D0\u4EA4 commit \u4FEE\u6539</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA/httpGetName&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span>url<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u540C\u6837\uFF0C\u5148\u770B\u4E0B <code>new Vuex.Store(options)</code>\u4E2D\u5BF9 <code>actions</code> \u7684\u521D\u59CB\u5316\u6E90\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">installModule</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> path<span class="token punctuation">,</span> module<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> namespace <span class="token operator">=</span> store<span class="token punctuation">.</span>_modules<span class="token punctuation">.</span><span class="token function">getNamespace</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> local <span class="token operator">=</span> module<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token function">makeLocalContext</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> namespace<span class="token punctuation">,</span> path<span class="token punctuation">)</span>

  module<span class="token punctuation">.</span><span class="token function">forEachAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> action<span class="token punctuation">.</span>root <span class="token operator">?</span> key <span class="token operator">:</span> namespace <span class="token operator">+</span> key
    <span class="token keyword">const</span> handler <span class="token operator">=</span> action<span class="token punctuation">.</span>handler <span class="token operator">||</span> action
    <span class="token function">registerAction</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> local<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">registerAction</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> local</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> entry <span class="token operator">=</span> store<span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  entry<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">wrappedActionHandler</span> <span class="token punctuation">(</span><span class="token parameter">payload<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dispatch</span><span class="token operator">:</span> local<span class="token punctuation">.</span>dispatch<span class="token punctuation">,</span>
      <span class="token literal-property property">commit</span><span class="token operator">:</span> local<span class="token punctuation">.</span>commit<span class="token punctuation">,</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> local<span class="token punctuation">.</span>getters<span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> local<span class="token punctuation">.</span>state<span class="token punctuation">,</span>
      <span class="token literal-property property">rootGetters</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">,</span>
      <span class="token literal-property property">rootState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
    <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">,</span> cb<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>_devtoolHook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        store<span class="token punctuation">.</span>_devtoolHook<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vuex:error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> err
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u770B\u4E0B <code>this.$store.dispatch</code> \u65B9\u6CD5\u6E90\u7801\uFF1A</p><p>\u903B\u8F91\u4E5F\u5F88\u7B80\u5355\uFF0C\u901A\u8FC7\u4F20\u5165\u7684 type \u4ECE store._actions[type] \u4E2D\u62FF\u5230\u6240\u6709\u8BE5\u7C7B\u578B\u7684\u5904\u7406\u51FD\u6570\u904D\u5386\u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">_type<span class="token punctuation">,</span> _payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u540C\u6837\u5904\u7406\u517C\u5BB9\u51FD\u6570\u548C\u5BF9\u8C61\u7684\u5199\u6CD5</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span>  payload <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unifyObjectStyle</span><span class="token punctuation">(</span>_type<span class="token punctuation">,</span> _payload<span class="token punctuation">)</span>

    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_actions<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] unknown action type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> entry<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span>
      <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">handler</span> <span class="token operator">=&gt;</span> <span class="token function">handler</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> entry<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BED\u6CD5\u7CD6" tabindex="-1">\u8BED\u6CD5\u7CD6 <a class="header-anchor" href="#\u8BED\u6CD5\u7CD6" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u770B <code>import Vuex from &#39;vuex&#39;</code> \u5BFC\u5165\u65F6\uFF0CVuex \u5BF9\u8C61\u7684\u5C5E\u6027\u5305\u62EC\u4E00\u4E9B\u5305\u88C5\u8FC7\u7684\u8BED\u6CD5\u7CD6\u63A5\u53E3\uFF1A<code>mapState / mapGetters / mapMutations / mapActions</code></p><div class="language-js"><pre><code><span class="token comment">// import Vuex from &#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> 
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
</code></pre></div><h3 id="mapstate" tabindex="-1">mapState <a class="header-anchor" href="#mapstate" aria-hidden="true">#</a></h3><p>\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u6A21\u5757\u6709\u8F83\u6DF1\u7684\u5D4C\u5957\u65F6\uFF0C\u83B7\u53D6\u67D0\u4E2A\u72B6\u6001\u6570\u636E\u5199\u6CD5\u4E0A\u8F83\u4E3A\u70E6\u7410\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u76F4\u63A5\u4F7F\u7528</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>moduleA<span class="token punctuation">.</span>state<span class="token punctuation">.</span>moduleA1<span class="token punctuation">.</span>state<span class="token punctuation">.</span>name
<span class="token comment">// \u5B9A\u4E49 computed</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">nestedName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>moduleA<span class="token punctuation">.</span>state<span class="token punctuation">.</span>moduleA1<span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u5982\u679C\u6211\u4EEC\u5728 computed \u4E2D\u4F7F\u7528 mapState\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">nestedName</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>moduleA<span class="token punctuation">.</span>state<span class="token punctuation">.</span>moduleA1<span class="token punctuation">.</span>state<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6216\u8005\uFF0C\u66F4\u7B80\u6D01\u5199\u6CD5</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA/moduleA1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">nestedName</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u770B\u4E0A\u9762\u4F7F\u7528\u5BF9\u8C61\u89E3\u6784\u7B26\uFF0C\u6240\u4EE5 mapState \u51FD\u6570\u80AF\u5B9A\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\u3002</li><li>mapState \u51FD\u6570\u5165\u53C2\u652F\u6301\u5355\u4E2A\u5BF9\u8C61\u548C\u4E24\u4E2A\u53C2\u6570\u5F62\u5F0F\uFF0C\u6240\u4EE5\u5904\u7406\u4E4B\u524D\u9700\u8981\u89C4\u5212\u5316\u53C2\u6570\uFF0C\u8FD9\u4E2A\u529F\u80FD\u7531 normalizeNamespace \u51FD\u6570\u5B9E\u73B0</li></ul><p>\u6240\u4EE5\u6211\u4EEC\u770B\u4E0B mapState \u7684\u6E90\u7801\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">normalizeNamespace</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> namespace <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      map <span class="token operator">=</span> namespace<span class="token punctuation">;</span>
      namespace <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>namespace<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>namespace<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      namespace <span class="token operator">+=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>namespace<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mapState <span class="token operator">=</span> <span class="token function">normalizeNamespace</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> states</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8981\u6C42 states \u662F\u6570\u7EC4\u6216\u5BF9\u8C61</span>
  <span class="token comment">// function isValidMap(map) {return Array.isArray(map) || isObject(map)}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>states<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;[vuex] mapState: mapper parameter must be either an Array or an Object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// normalizeMap \u51FD\u6570\u7528\u6765\u5904\u7406\u517C\u5BB9\u6570\u7EC4\u548C\u5BF9\u8C61\uFF0C\u7EDF\u4E00\u6210 key value \u683C\u5F0F</span>
  <span class="token function">normalizeMap</span><span class="token punctuation">(</span>states<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> val <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mappedState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">;</span>
      <span class="token keyword">let</span> getters <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>namespace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token function">getModuleByNamespace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token string">&#39;mapState&#39;</span><span class="token punctuation">,</span> namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// installModule \u51FD\u6570\u4E2D</span>
        <span class="token comment">// const local = module.context = makeLocalContext(store, namespace, path);</span>
        state <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span>state<span class="token punctuation">;</span>
        getters <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span>getters<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
        <span class="token operator">?</span> <span class="token function">val</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> getters<span class="token punctuation">)</span>
        <span class="token operator">:</span> state<span class="token punctuation">[</span>val<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// mark vuex getter for devtools</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>vuex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE5\u5177\u51FD\u6570</span>
<span class="token comment">/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) =&gt; [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) =&gt; [ { key: &#39;a&#39;, val: 1 }, { key: &#39;b&#39;, val: 2 }, { key: &#39;c&#39;, val: 3 } ]
 */</span>
<span class="token keyword">function</span> <span class="token function">normalizeMap</span> <span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
    <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> map<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// store._modulesNamespaceMap \u662F\u5728 installModule \u51FD\u6570\u4E2D\u5B9E\u73B0\u7684\u7F13\u5B58\u5BF9\u8C61</span>
<span class="token comment">// store._modulesNamespaceMap[namespace] = module</span>
<span class="token keyword">function</span> <span class="token function">getModuleByNamespace</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> helper<span class="token punctuation">,</span> namespace</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> store<span class="token punctuation">.</span>_modulesNamespaceMap<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] module namespace not found in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helper<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> module
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u903B\u8F91\u4E5F\u5F88\u7B80\u5355\uFF0C\u58F0\u660E\u4E00\u4E2A\u5305\u88C5\u51FD\u6570\u53BB\u89E3\u6790\u548C\u5904\u7406\u547D\u540D\u7A7A\u95F4 namespace \uFF0C\u7136\u540E\u4ECD\u7136\u4ECE this.$store.state \u4E2D\u53D6\u503C\u3002</p><h3 id="mapgetters" tabindex="-1">mapGetters <a class="header-anchor" href="#mapgetters" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;doneTodosCount&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;anotherGetter&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>mapGetters \u662F\u5C06 store \u4E2D\u7684 getter \u6620\u5C04\u5230\u5C40\u90E8\u8BA1\u7B97\u5C5E\u6027\uFF0C\u6765\u770B\u4E00\u4E0B\u5B83\u7684\u5B9A\u4E49\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> mapGetters <span class="token operator">=</span> <span class="token function">normalizeNamespace</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>getters<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;[vuex] mapGetters: mapper parameter must be either an Array or an Object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">normalizeMap</span><span class="token punctuation">(</span>getters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> val <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// The namespace has been mutated by normalizeNamespace</span>
    val <span class="token operator">=</span> namespace <span class="token operator">+</span> val<span class="token punctuation">;</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mappedGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>namespace <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">getModuleByNamespace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token string">&#39;mapGetters&#39;</span><span class="token punctuation">,</span> namespace<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token punctuation">(</span>val <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] unknown getter: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span>val<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// mark vuex getter for devtools</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>vuex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="mapmutations" tabindex="-1">mapMutations <a class="header-anchor" href="#mapmutations" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6570\u7EC4\u5F62\u5F0F</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 \`this.increment()\` \u6620\u5C04\u4E3A \`this.$store.commit(&#39;increment&#39;)\`</span>

      <span class="token comment">// \`mapMutations\` \u4E5F\u652F\u6301\u8F7D\u8377\uFF0C\u8C03\u7528\u65F6\u76F4\u63A5\u4F20\u5165\u53C2\u6570\u5373\u53EF</span>
      <span class="token comment">// \u5C06 \`this.incrementBy(amount)\` \u6620\u5C04\u4E3A \`this.$store.commit(&#39;incrementBy&#39;, amount)\`</span>
      <span class="token string">&#39;incrementBy&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u8C61\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u91CD\u547D\u540D mutations \u4E2D\u7684\u65B9\u6CD5</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token comment">// \u5C06 \`this.add()\` \u6620\u5C04\u4E3A \`this.$store.commit(&#39;increment&#39;)\`</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 mapMutations \u51FD\u6570\u4F7F\u7528\u4E86\u5BF9\u8C61\u89E3\u6784\u8FD0\u7B97\u7B26\uFF0C\u6240\u4EE5\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u53E6\u5916\u5165\u53C2\u652F\u6301\u6570\u7EC4\u548C\u5BF9\u8C61\uFF0C\u4F7F\u7528 mormalizeMap \u51FD\u6570\u5904\u7406\u517C\u5BB9\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> mapMutations <span class="token operator">=</span> <span class="token function">normalizeNamespace</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> mutations</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>mutations<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;[vuex] mapMutations: mapper parameter must be either an Array or an Object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">normalizeMap</span><span class="token punctuation">(</span>mutations<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> val <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mappedMutation</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// args \u5373\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u53EF\u4EE5\u4F5C\u4E3A payload</span>
      <span class="token comment">// Get the commit method from store</span>
      <span class="token keyword">let</span> commit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>commit<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>namespace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token function">getModuleByNamespace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token string">&#39;mapMutations&#39;</span><span class="token punctuation">,</span> namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        commit <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span>commit<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
        <span class="token operator">?</span> <span class="token function">val</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">commit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE5\u5177\u51FD\u6570</span>
<span class="token comment">/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) =&gt; [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) =&gt; [ { key: &#39;a&#39;, val: 1 }, { key: &#39;b&#39;, val: 2 }, { key: &#39;c&#39;, val: 3 } ]
 */</span>
<span class="token keyword">function</span> <span class="token function">normalizeMap</span> <span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
    <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> map<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// store._modulesNamespaceMap \u662F\u5728 installModule \u51FD\u6570\u4E2D\u5B9E\u73B0\u7684\u7F13\u5B58\u5BF9\u8C61</span>
<span class="token comment">// store._modulesNamespaceMap[namespace] = module</span>
<span class="token keyword">function</span> <span class="token function">getModuleByNamespace</span> <span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> helper<span class="token punctuation">,</span> namespace</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> store<span class="token punctuation">.</span>_modulesNamespaceMap<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[vuex] module namespace not found in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helper<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>namespace<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> module
<span class="token punctuation">}</span>
</code></pre></div><h3 id="mapactions" tabindex="-1">mapActions <a class="header-anchor" href="#mapactions" aria-hidden="true">#</a></h3><p>mapActions \u4F7F\u7528\u548C mapMutations \u57FA\u672C\u4E00\u6837\uFF0C\u6240\u4EE5\u5B9E\u73B0\u65B9\u5F0F\u4E5F\u57FA\u672C\u7C7B\u4F3C</p><div class="language-js"><pre><code><span class="token keyword">const</span> mapActions <span class="token operator">=</span> <span class="token function">normalizeNamespace</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">namespace<span class="token punctuation">,</span> actions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token function">isValidMap</span><span class="token punctuation">(</span>actions<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;[vuex] mapActions: mapper parameter must be either an Array or an Object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">normalizeMap</span><span class="token punctuation">(</span>actions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> val <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">mappedAction</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// get dispatch function from store</span>
      <span class="token keyword">let</span> dispatch <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>dispatch<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>namespace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token function">getModuleByNamespace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token string">&#39;mapActions&#39;</span><span class="token punctuation">,</span> namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        dispatch <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span>dispatch<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
        <span class="token operator">?</span> <span class="token function">val</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dispatch<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">,</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,59),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
