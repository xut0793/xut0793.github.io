import{_ as n,c as s,o as a,a as p}from"./app.f1e974b0.js";const y='{"title":"\u6A21\u677F\u7F16\u8BD11\uFF1A\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue \u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F","slug":"vue-\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F"},{"level":2,"title":"template \u89E3\u6790","slug":"template-\u89E3\u6790"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-2-compile-0.md"}',t={},o=p(`<h1 id="\u6A21\u677F\u7F16\u8BD11\uFF1A\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F" tabindex="-1">\u6A21\u677F\u7F16\u8BD11\uFF1A\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F <a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD11\uFF1A\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#vue-\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F">Vue \u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F</a></li><li><a href="#template-\u89E3\u6790">template \u89E3\u6790</a></li></ul></div></p><h2 id="vue-\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F" tabindex="-1">Vue \u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F <a class="header-anchor" href="#vue-\u6A21\u677F\u5185\u5BB9\u7684\u5F62\u5F0F" aria-hidden="true">#</a></h2><p>\u5728 Vue \u4E2D\u7F16\u5199 HTML \u5185\u5BB9\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>render \u5C5E\u6027\uFF1AcreateElement / jsx</li><li>template \u5C5E\u6027: template / x-template</li><li>el</li></ol><div class="language-js"><pre><code><span class="token comment">// JSX\u8BED\u6CD5\u9700\u8981\u5B89\u88C5\u63D2\u4EF6</span>
<span class="token comment">// npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_render_JSX&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue by render JSX&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// createElement</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_render_createElement&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue by render createElement&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// template string</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_template_string&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue by template string&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
                &lt;span&gt;{{ msg }}&lt;/span&gt;
            &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// template element</span>
<span class="token operator">&lt;</span>template id<span class="token operator">=</span><span class="token string">&quot;temp_tag&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_template_tag&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue by template tag&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528&lt;template&gt;\u6807\u7B7E\u5199\u6CD5</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#temp_tag&quot;</span><span class="token punctuation">,</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// template x-template</span>
<span class="token operator">&lt;</span>script id<span class="token operator">=</span><span class="token string">&quot;temp_script&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text/x-template&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_script&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue by template script&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;#temp_script&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// outerHtml</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;example_outerHTML&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example_outerHTML&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;HELLO VUE by outerHTML&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="template-\u89E3\u6790" tabindex="-1">template \u89E3\u6790 <a class="header-anchor" href="#template-\u89E3\u6790" aria-hidden="true">#</a></h2><p>\u6240\u4EE5 web \u5E73\u53F0 Vue \u5728\u6302\u8F7D\u65F6\uFF0C\u4E3B\u8981\u662F\u4E24\u4EF6\u4E8B\uFF1A</p><ol><li>\u5982\u679C\u6CA1\u6709 render \uFF0C\u89E3\u6790 template \u503C</li><li>\u5C06 template\u3000\u7F16\u8BD1\u6210\u6E32\u67D3\u51FD\u6570\uFF0C\u8D4B\u503C\u7ED9 render \u5C5E\u6027</li></ol><p>template \u89E3\u6790\uFF1A</p><ol><li>options.render \u662F\u5426\u6709\u503C\uFF0C\u6709\u76F4\u63A5\u7528\uFF0C\u65E0\u5219\u5224\u65AD\u662F\u5426\u6709 template</li><li>options.template \u662F\u5426\u6709\u503C\uFF0C\u6709\u89E3\u6790 template\uFF0C\u65E0\u5219\u5224\u65AD\u662F\u5426\u6709 el</li><li>options.template \u662F\u5426\u662F\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u662F\uFF0C\u5B57\u7B26\u4E32\u662F\u5426\u662F\u4EE5 # \u5F00\u5934\uFF0C\u5982\u679C\u4E0D\u662F\u4EE5\u3000# \u5F00\u5934\uFF0C\u5C31\u662F\u7EAF\u5B57\u7B26\u4E32\u76F4\u63A5\u8FD4\u56DE</li><li>options.template \u5B57\u7B26\u4E32\u4E14\u4EE5 # \u5F00\u5934\uFF0C\u5219\u8C03\u7528 idToTemplate \u62FF\u5230\u503C</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> mount <span class="token operator">=</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount<span class="token punctuation">;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token punctuation">,</span>
  hydrating</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* \u6302\u8F7D\u70B9\u5143\u7D20\u4E0D\u80FD\u662F body \u6216\u8005 document */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">===</span> document<span class="token punctuation">.</span>body <span class="token operator">||</span> el <span class="token operator">===</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Do not mount Vue to &lt;html&gt; or &lt;body&gt; - mount to normal elements instead.&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token comment">// resolve template/el and convert to render function</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          template <span class="token operator">=</span> <span class="token function">idToTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn</span><span class="token punctuation">(</span>
              <span class="token punctuation">(</span><span class="token string">&quot;Template element not found or is empty: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>template<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token keyword">this</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// template \u5C5E\u6027\u76F4\u63A5\u662F DOM \u5143\u7D20</span>
        template <span class="token operator">=</span> template<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;invalid template option:&#39;</span> <span class="token operator">+</span> template<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6CA1\u6709 template \u5C5E\u6027\uFF0C\u83B7\u53D6\u6302\u8F7D\u70B9\u5185\u7684 html \u8282\u70B9</span>
      template <span class="token operator">=</span> <span class="token function">getOuterHTML</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C template \u503C\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u6A21\u677F\u89E3\u6790\uFF0C\u5F97\u5230\u6E32\u67D3\u51FD\u6570\uFF0C\u8D4B\u503C\u7ED9 render \u5C5E\u6027\u3002</span>
      <span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">outputSourceRange</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">shouldDecodeNewlines</span><span class="token operator">:</span> shouldDecodeNewlines<span class="token punctuation">,</span>
        <span class="token literal-property property">shouldDecodeNewlinesForHref</span><span class="token operator">:</span> shouldDecodeNewlinesForHref<span class="token punctuation">,</span>
        <span class="token literal-property property">delimiters</span><span class="token operator">:</span> options<span class="token punctuation">.</span>delimiters<span class="token punctuation">,</span>
        <span class="token literal-property property">comments</span><span class="token operator">:</span> options<span class="token punctuation">.</span>comments
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">var</span> render <span class="token operator">=</span> ref<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
      <span class="token keyword">var</span> staticRenderFns <span class="token operator">=</span> ref<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
      options<span class="token punctuation">.</span>render <span class="token operator">=</span> render<span class="token punctuation">;</span>
      options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> staticRenderFns<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> idToTemplate <span class="token operator">=</span> <span class="token function">cached</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> el <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> el <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>innerHTML
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h1 id="template-\u7F16\u8BD1" tabindex="-1">template \u7F16\u8BD1 <a class="header-anchor" href="#template-\u7F16\u8BD1" aria-hidden="true">#</a></h1><p>\u5728\u62FF\u5230 template\u3000\u503C\u540E\uFF0C\u4F1A\u8C03\u7528\u3000compileToFunctions\u3000\u51FD\u6570\u5C06\u6A21\u677F\u7F16\u8BD1\u5F97\u5230\u3000render \u3002</p><p>compileToFunctions \u51FD\u6570\u662F\u4E3A\u4E86\u9002\u5E94\u5404\u5E73\u53F0\u5185\u5BB9\uFF0C\u7ECF\u8FC7\u4E00\u7CFB\u5217\u51FD\u6570\u67EF\u91CC\u5316\u540E\u7684\u51FD\u6570\u3002</p><div class="language-js"><pre><code>
<span class="token keyword">var</span> ref$1 <span class="token operator">=</span> <span class="token function">createCompiler</span><span class="token punctuation">(</span>baseOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> compile <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>compile<span class="token punctuation">;</span>
<span class="token keyword">var</span> compileToFunctions <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>compileToFunctions<span class="token punctuation">;</span>

<span class="token keyword">var</span> createCompiler <span class="token operator">=</span> <span class="token function">createCompilerCreator</span><span class="token punctuation">(</span>baseCompile<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createCompilerCreator</span> <span class="token punctuation">(</span><span class="token parameter">baseCompile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">createCompiler</span> <span class="token punctuation">(</span><span class="token parameter">baseOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">compile</span> <span class="token punctuation">(</span>
      <span class="token parameter">template<span class="token punctuation">,</span>
      options</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
      <span class="token keyword">var</span> compiled <span class="token operator">=</span> <span class="token function">baseCompile</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> finalOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> compiled
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compile</span><span class="token operator">:</span> compile<span class="token punctuation">,</span>
      <span class="token literal-property property">compileToFunctions</span><span class="token operator">:</span> <span class="token function">createCompileToFunctionFn</span><span class="token punctuation">(</span>compile<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">baseCompile</span> <span class="token punctuation">(</span>
  <span class="token parameter">template<span class="token punctuation">,</span>
  options</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>optimize <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">optimize</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> code <span class="token operator">=</span> <span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ast</span><span class="token operator">:</span> ast<span class="token punctuation">,</span>
    <span class="token literal-property property">render</span><span class="token operator">:</span> code<span class="token punctuation">.</span>render<span class="token punctuation">,</span>
    <span class="token literal-property property">staticRenderFns</span><span class="token operator">:</span> code<span class="token punctuation">.</span>staticRenderFns
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 baseCompile \u51FD\u6570\u4E2D\u770B\u5230\u6A21\u677F\u7F16\u8BD1\u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u6240\u4EE5\u6A21\u677F\u7F16\u8BD1\u4E3B\u8981\u5206\u4E3A\u4E09\u90E8\u5206\uFF1A</p><ol><li>parse \u51FD\u6570\u5C06\u6A21\u677F\u89E3\u6790\u4E3A AST\uFF0C\u5C5E\u6027\u4E8E\u89E3\u6790\u5668\u529F\u80FD</li><li>optimize \u51FD\u6570\u904D\u5386 AST \u6807\u8BB0\u4E3A\u9759\u6001\u8282\u70B9\uFF0C\u5C5E\u6027\u4F18\u5316\u5668\u529F\u80FD</li><li>generate \u51FD\u6570\u4F7F\u7528 AST \u751F\u6210\u6E32\u67D3\u51FD\u6570\uFF0C\u5C5E\u6027\u4EE3\u7801\u751F\u6210\u5668\u529F\u80FD</li></ol><div class="language-js"><pre><code><span class="token comment">// \u5047\u8BBE template\u3000\u5185\u5BB9</span>
<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div ic=&quot;test&quot; @click=&quot;onClick&quot;&gt;{{message}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 1. parse(template)\u540E\u7684 AST</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@click&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;onClick&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arrtsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    @click<span class="token operator">:</span> <span class="token string">&quot;onClick&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{message}}&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expression</span><span class="token operator">:</span> &quot;<span class="token function">_s</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>&#39;
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2. optimize(ast, options) \u4F18\u5316\u3002\u4E3B\u8981\u5224\u65AD static: false\uFF1BstaticRoot: false</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token operator">+</span> <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token operator">+</span> staticRoot<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@click&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;onClick&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arrtsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    @click<span class="token operator">:</span> <span class="token string">&quot;onClick&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token operator">+</span> <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{message}}&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expression</span><span class="token operator">:</span> &quot;<span class="token function">_s</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>&#39;
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. generate(ast, options) \u751F\u6210\u6E32\u67D3\u51FD\u6570\uFF1A</span>
<span class="token comment">// \u6E32\u67D3\u51FD\u6570\u5176\u5B9E\u5C31\u662F\u4E00\u7CFB\u5217\u5D4C\u5957\u5728\u4E00\u8D77\u7684\u521B\u5EFA\u5143\u7D20\u8282\u70B9\u7684\u51FD\u6570\uFF1A_c / _v / _s \u7B49</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">with(this){return _c(&#39;div&#39;,{attrs:{&quot;id&quot;:&quot;test&quot;},on:{&quot;click&quot;:onClick}},[_v(_s(message))])}</span><span class="token template-punctuation string">\`</span></span>
</code></pre></div>`,19),e=[o];function c(l,r,u,k,i,m){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{y as __pageData,g as default};
