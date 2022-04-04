import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const w='{"title":"VueRouter\u6E90\u78015: router-link \u5BFC\u822A\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-router-source-code-5-router-link.md"}',p={},o=t(`<h1 id="vuerouter\u6E90\u78015-router-link-\u5BFC\u822A\u7EC4\u4EF6" tabindex="-1">VueRouter\u6E90\u78015: router-link \u5BFC\u822A\u7EC4\u4EF6 <a class="header-anchor" href="#vuerouter\u6E90\u78015-router-link-\u5BFC\u822A\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>router-link \u7EC4\u4EF6\u4E3B\u8981\u662F\u5728\u5BFC\u822A\u5143\u7D20\u4E0A\u6CE8\u518C click \u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u8C03\u7528 <code>this.$router.push(url)</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> toTypes <span class="token operator">=</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Object<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> eventTypes <span class="token operator">=</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Array<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">noop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> Link <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;RouterLink&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> toTypes<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exact</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">append</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">replace</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">activeClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">exactActiveClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">ariaCurrentValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> eventTypes<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;click&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">;</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> location<span class="token punctuation">,</span> route<span class="token punctuation">,</span> href <span class="token punctuation">}</span> <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span>
      current<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>append
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * class \u7C7B\u5904\u7406
    */</span>
    <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> globalActiveClass <span class="token operator">=</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>linkActiveClass<span class="token punctuation">;</span>
    <span class="token keyword">const</span> globalExactActiveClass <span class="token operator">=</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>linkExactActiveClass<span class="token punctuation">;</span>
    <span class="token comment">// Support global empty active class</span>
    <span class="token keyword">const</span> activeClassFallback <span class="token operator">=</span>
      globalActiveClass <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;router-link-active&#39;</span> <span class="token operator">:</span> globalActiveClass<span class="token punctuation">;</span>
    <span class="token keyword">const</span> exactActiveClassFallback <span class="token operator">=</span>
      globalExactActiveClass <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token operator">?</span> <span class="token string">&#39;router-link-exact-active&#39;</span>
        <span class="token operator">:</span> globalExactActiveClass<span class="token punctuation">;</span>
    <span class="token keyword">const</span> activeClass <span class="token operator">=</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeClass <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> activeClassFallback <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeClass<span class="token punctuation">;</span>
    <span class="token keyword">const</span> exactActiveClass <span class="token operator">=</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>exactActiveClass <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token operator">?</span> exactActiveClassFallback
        <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exactActiveClass<span class="token punctuation">;</span>

    <span class="token keyword">const</span> compareTarget <span class="token operator">=</span> route<span class="token punctuation">.</span>redirectedFrom
      <span class="token operator">?</span> <span class="token function">createRoute</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">normalizeLocation</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>redirectedFrom<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>
      <span class="token operator">:</span> route<span class="token punctuation">;</span>

    classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">isSameRoute</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> compareTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>
    classes<span class="token punctuation">[</span>activeClass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>exact
      <span class="token operator">?</span> classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span>
      <span class="token operator">:</span> <span class="token function">isIncludedRoute</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> compareTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ariaCurrentValue <span class="token operator">=</span> classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ariaCurrentValue <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// \u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u53E5\u67C4</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guardEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>replace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> noop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> noop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> on <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">click</span><span class="token operator">:</span> guardEvent <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        on<span class="token punctuation">[</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      on<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> classes <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> scopedSlot <span class="token operator">=</span>
      <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span>$hasNormal <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span>default <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        href<span class="token punctuation">,</span>
        route<span class="token punctuation">,</span>
        <span class="token literal-property property">navigate</span><span class="token operator">:</span> handler<span class="token punctuation">,</span>
        <span class="token literal-property property">isActive</span><span class="token operator">:</span> classes<span class="token punctuation">[</span>activeClass<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isExactActive</span><span class="token operator">:</span> classes<span class="token punctuation">[</span>exactActiveClass<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> scopedSlot<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlot<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token operator">!</span>scopedSlot<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">RouterLink with to=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>to
            <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; is trying to use a scoped slot but it didn&#39;t provide exactly one child. Wrapping the content with a span element.</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> scopedSlot<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scopedSlot<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span>on <span class="token operator">=</span> on<span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> <span class="token punctuation">{</span> href<span class="token punctuation">,</span> <span class="token string-property property">&#39;aria-current&#39;</span><span class="token operator">:</span> ariaCurrentValue <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// find the first &lt;a&gt; child and apply listener and href</span>
      <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">findAnchor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// in case the &lt;a&gt; is a static node</span>
        a<span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> aData <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aData<span class="token punctuation">.</span>on <span class="token operator">=</span> aData<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// transform existing events in both objects into arrays so we can push later</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> event <span class="token keyword">in</span> aData<span class="token punctuation">.</span>on<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> handler <span class="token operator">=</span> aData<span class="token punctuation">.</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token keyword">in</span> on<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            aData<span class="token punctuation">.</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token operator">?</span> handler <span class="token operator">:</span> <span class="token punctuation">[</span>handler<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// append new listeners for router-link</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> event <span class="token keyword">in</span> on<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token keyword">in</span> aData<span class="token punctuation">.</span>on<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// on[event] is always a function</span>
            aData<span class="token punctuation">.</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            aData<span class="token punctuation">.</span>on<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> handler<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> aAttrs <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attrs <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        aAttrs<span class="token punctuation">.</span>href <span class="token operator">=</span> href<span class="token punctuation">;</span>
        aAttrs<span class="token punctuation">[</span><span class="token string">&#39;aria-current&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> ariaCurrentValue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// doesn&#39;t have &lt;a&gt; child, apply listener to self</span>
        data<span class="token punctuation">.</span>on <span class="token operator">=</span> on<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>
  <span class="token parameter">to<span class="token punctuation">,</span>
  current<span class="token punctuation">,</span>
  append</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  current <span class="token operator">=</span> current <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">normalizeLocation</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> current<span class="token punctuation">,</span> append<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fullPath <span class="token operator">=</span> route<span class="token punctuation">.</span>redirectedFrom <span class="token operator">||</span> route<span class="token punctuation">.</span>fullPath<span class="token punctuation">;</span>
  <span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span>base<span class="token punctuation">;</span>
  <span class="token keyword">const</span> href <span class="token operator">=</span> <span class="token function">createHref</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> fullPath<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    location<span class="token punctuation">,</span>
    route<span class="token punctuation">,</span>
    href<span class="token punctuation">,</span>
    <span class="token comment">// for backwards compat</span>
    <span class="token literal-property property">normalizedTo</span><span class="token operator">:</span> location<span class="token punctuation">,</span>
    <span class="token literal-property property">resolved</span><span class="token operator">:</span> route
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">guardEvent</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// don&#39;t redirect with control keys</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>metaKey <span class="token operator">||</span> e<span class="token punctuation">.</span>altKey <span class="token operator">||</span> e<span class="token punctuation">.</span>ctrlKey <span class="token operator">||</span> e<span class="token punctuation">.</span>shiftKey<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don&#39;t redirect when preventDefault called</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don&#39;t redirect on right click</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>button <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>button <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">// don&#39;t redirect if \`target=&quot;_blank&quot;\`</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>getAttribute<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\b_blank\\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// this may be a Weex event which doesn&#39;t have this method</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">findAnchor</span> <span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> child<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> child
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>child <span class="token operator">=</span> <span class="token function">findAnchor</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> child
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{w as __pageData,h as default};
