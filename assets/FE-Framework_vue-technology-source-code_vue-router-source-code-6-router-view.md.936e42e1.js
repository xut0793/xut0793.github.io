import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";const h='{"title":"VueRouter\u6E90\u78016: router-view \u89C6\u56FE\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-router-source-code-6-router-view.md"}',p={},o=t(`<h1 id="vuerouter\u6E90\u78016-router-view-\u89C6\u56FE\u7EC4\u4EF6" tabindex="-1">VueRouter\u6E90\u78016: router-view \u89C6\u56FE\u7EC4\u4EF6 <a class="header-anchor" href="#vuerouter\u6E90\u78016-router-view-\u89C6\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u5F53 <code>transitionTo =&gt; confirmTransition =&gt; updateRoute =&gt; cb(route) =&gt; app._route = route</code> \u89E6\u53D1 setter \u4E2D <code>dep.notify()</code> \u6267\u884C render-watcher \u7684\u56DE\u8C03 <code>vm._update(vm._render())</code>\u3002\u5728 vm._render \u51FD\u6570\u4E2D\u89E3\u6790\u5230 <code>&lt;router-view /&gt;</code> \u6267\u884C\u5176\u4E2D\u7684 render \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> View <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;RouterView&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u51FD\u6570\u5F0F\u7EC4\u4EF6</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> <span class="token punctuation">{</span> props<span class="token punctuation">,</span> children<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// used by devtools to display a router-view badge</span>
    data<span class="token punctuation">.</span>routerView <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// routerView \u7EC4\u4EF6\u7684\u6807\u8BB0\u4F4D</span>

    <span class="token comment">// directly use parent context&#39;s createElement() function</span>
    <span class="token comment">// so that components rendered by router-view can resolve named slots</span>
    <span class="token keyword">const</span> h <span class="token operator">=</span> parent<span class="token punctuation">.</span>$createElement<span class="token punctuation">;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> props<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> parent<span class="token punctuation">.</span>$route<span class="token punctuation">;</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">||</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>_routerViewCache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// determine current view depth, also check to see if the tree</span>
    <span class="token comment">// has been toggled inactive but kept-alive.</span>
    <span class="token comment">// \u8BA1\u7B97 depth \u6570\u7EC4\u7136\u540E\u4ECE this.$route.matched \u6570\u7EC4\u9879\u62FF\u5230\u6E32\u67D3\u7684\u7EC4\u4EF6</span>
    <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> inactive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_routerRoot <span class="token operator">!==</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> vnodeData <span class="token operator">=</span> parent<span class="token punctuation">.</span>$vnode <span class="token operator">?</span> parent<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>data <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeData<span class="token punctuation">.</span>routerView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeData<span class="token punctuation">.</span>keepAlive <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_directInactive <span class="token operator">&amp;&amp;</span> parent<span class="token punctuation">.</span>_inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        inactive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    data<span class="token punctuation">.</span>routerViewDepth <span class="token operator">=</span> depth<span class="token punctuation">;</span>

    <span class="token comment">// render previous view if the tree is inactive and kept-alive</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cachedData <span class="token operator">=</span> cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> cachedComponent <span class="token operator">=</span> cachedData <span class="token operator">&amp;&amp;</span> cachedData<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// #2301</span>
        <span class="token comment">// pass props</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedData<span class="token punctuation">.</span>configProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fillPropsinData</span><span class="token punctuation">(</span>cachedComponent<span class="token punctuation">,</span> data<span class="token punctuation">,</span> cachedData<span class="token punctuation">.</span>route<span class="token punctuation">,</span> cachedData<span class="token punctuation">.</span>configProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>cachedComponent<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// render previous empty view</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5D4C\u5957\u8DEF\u7531\u4F9D\u636E depth \u6765\u83B7\u53D6\u5F53\u524D\u6E32\u67D3\u54EA\u7EA7\u7684\u7EC4\u4EF6</span>
    <span class="token keyword">const</span> matched <span class="token operator">=</span> route<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>depth<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> component <span class="token operator">=</span> matched <span class="token operator">&amp;&amp;</span> matched<span class="token punctuation">.</span>components<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// render empty node if no matched route or no config component</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matched <span class="token operator">||</span> <span class="token operator">!</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// cache component</span>
    cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> component <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// attach instance registration hook</span>
    <span class="token comment">// this will be called in the instance&#39;s injected lifecycle hooks</span>
    data<span class="token punctuation">.</span><span class="token function-variable function">registerRouteInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// val could be undefined for unregistration</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">!==</span> vm<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span><span class="token operator">!</span>val <span class="token operator">&amp;&amp;</span> current <span class="token operator">===</span> vm<span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// also register instance in prepatch hook</span>
    <span class="token comment">// in case the same component instance is reused across different routes</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">prepatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// register instance in init hook</span>
    <span class="token comment">// in case kept-alive component be actived when routes changed</span>
    data<span class="token punctuation">.</span>hook<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>keepAlive <span class="token operator">&amp;&amp;</span>
        vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">&amp;&amp;</span>
        vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">!==</span> matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matched<span class="token punctuation">.</span>instances<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> configProps <span class="token operator">=</span> matched<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> matched<span class="token punctuation">.</span>props<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// save route and configProps in cache</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">extend</span><span class="token punctuation">(</span>cache<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        route<span class="token punctuation">,</span>
        configProps
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">fillPropsinData</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> data<span class="token punctuation">,</span> route<span class="token punctuation">,</span> configProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fillPropsinData</span> <span class="token punctuation">(</span><span class="token parameter">component<span class="token punctuation">,</span> data<span class="token punctuation">,</span> route<span class="token punctuation">,</span> configProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// resolve props</span>
  <span class="token keyword">let</span> propsToPass <span class="token operator">=</span> data<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token function">resolveProps</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> configProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>propsToPass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// clone to prevent mutation</span>
    propsToPass <span class="token operator">=</span> data<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> propsToPass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// pass non-declared props as attrs</span>
    <span class="token keyword">const</span> attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> propsToPass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>component<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> component<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> propsToPass<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> propsToPass<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resolveProps</span> <span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;undefined&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span>
    <span class="token keyword">case</span> <span class="token string">&#39;object&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> config
    <span class="token keyword">case</span> <span class="token string">&#39;function&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">config</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> config <span class="token operator">?</span> route<span class="token punctuation">.</span>params <span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">props in &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>route<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> config<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">expecting an object, function or boolean.</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(u,l,k,r,i,d){return s(),a("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
