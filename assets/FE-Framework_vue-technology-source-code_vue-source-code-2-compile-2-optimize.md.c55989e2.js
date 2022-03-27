import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const f='{"title":"\u6A21\u677F\u7F16\u8BD13\uFF1Aoptimize \u4F18\u5316\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-2-compile-2-optimize.md"}',p={},o=t(`<h1 id="\u6A21\u677F\u7F16\u8BD13\uFF1Aoptimize-\u4F18\u5316\u5668" tabindex="-1">\u6A21\u677F\u7F16\u8BD13\uFF1Aoptimize \u4F18\u5316\u5668 <a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD13\uFF1Aoptimize-\u4F18\u5316\u5668" aria-hidden="true">#</a></h1><p>\u4F18\u5316\u5668\u7684\u4F5C\u7528\u662F\u5728 AST \u4E2D\u627E\u51FA\u9759\u6001\u8282\u70B9\u5E76\u6253\u4E0A\u6807\u8BB0\u3002</p><ul><li>\u9759\u6001\u8282\u70B9\u6307\u7684\u662F\u90A3\u4E9B\u6C38\u8FDC\u90FD\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u7684\u8282\u70B9\uFF0C\u6BD4\u5982 <code>&lt;p&gt;\u8FD9\u662F\u4E00\u4E2A\u9759\u6001\u8282\u70B9&lt;/p&gt;</code></li><li>\u9759\u6001\u6839\u8282\u70B9\u6307\u7684\u662F\u5982\u679C\u8282\u70B9\u4E0B\u9762\u7684\u6240\u6709\u7684\u5B50\u8282\u70B9\u90FD\u662F\u9759\u6001\u8282\u70B9\uFF0C\u90A3\u5F53\u524D\u4F5C\u4E3A\u7236\u8282\u70B9\u5C31\u662F\u9759\u6001\u6839\u8282\u70B9\u3002\u5982 ul \u5C31\u662F\u9759\u6001\u6839\u8282\u70B9\uFF1A <code>&lt;ul&gt;&lt;li&gt;1&lt;/li&gt;&lt;li&gt;2&lt;/li&gt;&lt;/ul&gt;</code></li></ul><p>\u6807\u8BB0\u9759\u6001\u8282\u70B9\u6709\u4E24\u70B9\u597D\u5904:</p><ul><li>\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u4E0D\u9700\u8981\u4E3A\u9759\u6001\u8282\u70B9\u521B\u5EFA\u65B0\u8282\u70B9\uFF0C\u800C\u662F\u514B\u9686\u9996\u6B21\u6E32\u67D3\u751F\u6210\u7684\u8282\u70B9\uFF1B</li><li>\u5728\u865A\u62DF DOM \u66F4\u65B0\u4E2D\u6253\u8865\u4E01 (patch) \u7684\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u8DF3\u8FC7\u4E0D\u4F5C\u5BF9\u6BD4\u3002</li></ul><p>\u6240\u4EE5\u4F18\u5316\u5668\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u4E24\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u6DF1\u5C42\u904D\u5386 AST \uFF0C\u627E\u51FA\u6240\u6709\u9759\u6001\u8282\u70B9\uFF0C\u6807\u8BB0\u4E3A <code>static:true</code></li><li>\u6DF1\u5C42\u904D\u5386 AST\uFF0C\u627E\u51FA\u6240\u6709\u9759\u6001\u6839\u8282\u70B9\uFF0C\u6807\u8BB0\u4E3A <code>staticRoot:true</code></li></ul><div class="language-js"><pre><code><span class="token comment">// \u9996\u5148\u58F0\u660E\u4E00\u4E2A\u5224\u65AD\u662F\u5426\u662F\u9759\u6001\u8282\u70B9\u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">isStatic</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// expression \u5E26\u53D8\u91CF\u7684\u8282\u70B9\u7C7B\u578B\u4E00\u5B9A\u4E0D\u662F\u9759\u6001\u8282\u70B9</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// text \u7EAF\u6587\u672C\u8282\u70B9\u662F\u9759\u6001\u8282\u70B9</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>pre <span class="token operator">||</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>node<span class="token punctuation">.</span>hasBindings <span class="token operator">&amp;&amp;</span> <span class="token comment">// no dynamic bindings \u6CA1\u6709\u52A8\u6001\u7ED1\u5B9A\u7684\u5C5E\u6027 v- @ : \u5F00\u5934\u7684\u5C5E\u6027</span>
    <span class="token operator">!</span>node<span class="token punctuation">.</span>if <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>for <span class="token operator">&amp;&amp;</span> <span class="token comment">// not v-if or v-for or v-else \u6CA1\u6709 v-if v-for v-else</span>
    <span class="token operator">!</span><span class="token function">isBuiltInTag</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// not a built-in \u4E0D\u662F\u5185\u7F6E\u6807\u7B7E slot component\u7B49</span>
    <span class="token function">isPlatformReservedTag</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// not a component \u4E0D\u662F\u7EC4\u4EF6\u6807\u7B7E\uFF0C\u5373\u6807\u7B7E\u540D\u662F\u4FDD\u7559\u6807\u7B7E\uFF0C\u5982 div \u53CA svg\u4E2D\u7684\u6807\u7B7E\u540D</span>
    <span class="token operator">!</span><span class="token function">isDirectChildOfTemplateFor</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// \u5F53\u524D\u7236\u8282\u70B9\u4E0D\u80FD\u662F\u5E26 v-for \u7684 template \u6807\u7B7E</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>isStaticKey<span class="token punctuation">)</span> <span class="token comment">// \u8282\u70B9\u4E2D\u4E0D\u5B58\u5728\u52A8\u6001\u8282\u70B9\u624D\u4F1A\u6709\u7684\u5C5E\u6027</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// optimize</span>
<span class="token keyword">function</span> <span class="token function">optimize</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
  isStaticKey <span class="token operator">=</span> <span class="token function">genStaticKeysCached</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>staticKeys <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  isPlatformReservedTag <span class="token operator">=</span> options<span class="token punctuation">.</span>isReservedTag <span class="token operator">||</span> no<span class="token punctuation">;</span>
  <span class="token comment">// first pass: mark all non-static nodes.</span>
  <span class="token function">markStatic$1</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// second pass: mark static roots.</span>
  <span class="token function">markStaticRoots</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">markStatic$1</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  node<span class="token punctuation">.</span>static <span class="token operator">=</span> <span class="token function">isStatic</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do not make component slot content static. this avoids</span>
    <span class="token comment">// 1. components not able to mutate slot nodes</span>
    <span class="token comment">// 2. static slot content fails for hot-reloading</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span><span class="token function">isPlatformReservedTag</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      node<span class="token punctuation">.</span>tag <span class="token operator">!==</span> <span class="token string">&#39;slot&#39;</span> <span class="token operator">&amp;&amp;</span>
      node<span class="token punctuation">.</span>attrsMap<span class="token punctuation">[</span><span class="token string">&#39;inline-template&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> child <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">markStatic$1</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>child<span class="token punctuation">.</span>static<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>static <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> l$1 <span class="token operator">=</span> node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> l$1<span class="token punctuation">;</span> i$1<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> block <span class="token operator">=</span> node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">.</span>block<span class="token punctuation">;</span>
        <span class="token function">markStatic$1</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>block<span class="token punctuation">.</span>static<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>static <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">markStaticRoots</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> isInFor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>static <span class="token operator">||</span> node<span class="token punctuation">.</span>once<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>staticInFor <span class="token operator">=</span> isInFor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// For a node to qualify as a static root, it should have children that</span>
    <span class="token comment">// are not just static text. Otherwise the cost of hoisting out will</span>
    <span class="token comment">// outweigh the benefits and it&#39;s better off to just always render it fresh.</span>
    <span class="token comment">// \u8981\u4F7F\u8282\u70B9\u7B26\u5408\u9759\u6001\u6839\u8282\u70B9\u8981\u6C42\uFF0C\u5B83\u5FC5\u987B\u6709\u5B50\u8282\u70B9</span>
    <span class="token comment">// \u8FD9\u4E2A\u5B50\u8282\u70B9\u4E0D\u80FD\u662F\u53EA\u6709\u4E00\u4E2A\u9759\u6001\u6587\u672C\u7684\u8282\u70B9\uFF0C\u5426\u5219\u4F18\u5316\u6210\u672C\u5C06\u8D85\u8FC7\u6536\u76CA</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>static <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>
      node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
      node<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">3</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>staticRoot <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>staticRoot <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">markStaticRoots</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> isInFor <span class="token operator">||</span> <span class="token operator">!</span><span class="token operator">!</span>node<span class="token punctuation">.</span>for<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> l$1 <span class="token operator">=</span> node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> l$1<span class="token punctuation">;</span> i$1<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">markStaticRoots</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>ifConditions<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">.</span>block<span class="token punctuation">,</span> isInFor<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
