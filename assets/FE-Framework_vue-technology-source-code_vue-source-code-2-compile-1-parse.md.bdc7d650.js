import{_ as p,c as o,b as n,t as e,a as s,d as a,o as c}from"./app.9dbb06c5.js";var u="/assets/vue-source-complie-parse.164851c7.png";const b='{"title":"\u6A21\u677F\u7F16\u8BD12\uFF1Aparse \u89E3\u6790\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u603B\u4F53\u6D41\u7A0B","slug":"\u603B\u4F53\u6D41\u7A0B"},{"level":2,"title":"\u6E90\u7801\u89E3\u6790","slug":"\u6E90\u7801\u89E3\u6790"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-2-compile-1-parse.md"}',l={},k=s(`<h1 id="\u6A21\u677F\u7F16\u8BD12\uFF1Aparse-\u89E3\u6790\u5668" tabindex="-1">\u6A21\u677F\u7F16\u8BD12\uFF1Aparse \u89E3\u6790\u5668 <a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD12\uFF1Aparse-\u89E3\u6790\u5668" aria-hidden="true">#</a></h1><p>HTML \u6A21\u677F\u7684\u89E3\u6790\u903B\u8F91\u5C31\u662F\u5FAA\u73AF\u89E3\u6790 template \u5B57\u7B26\u4E32\uFF0C\u7528\u6B63\u5219\u505A\u5404\u79CD\u7C7B\u578B\u7247\u6BB5\u7684\u5339\u914D\uFF0C\u5BF9\u4E8E\u4E0D\u540C\u60C5\u51B5\u5206\u522B\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\uFF0C\u76F4\u5230\u6574\u4E2A template \u88AB\u89E3\u6790\u5B8C\u6BD5\u3002 \u5728\u5339\u914D\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u5229\u7528 advance \u51FD\u6570\u4E0D\u65AD\u524D\u8FDB\u6574\u4E2A\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u5B57\u7B26\u4E32\u672B\u5C3E\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">advance</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  index <span class="token operator">+=</span> n
  html <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9700\u8981\u88AB\u622A\u53D6\u5904\u7406\u7684\u7247\u6BB5\u5206\u591A\u79CD\u7C7B\u578B\uFF1A</p>`,4),i=s("<li>\u5F00\u59CB\u6807\u7B7E\uFF0C\u5982 <code>&lt;div&gt;</code>; \u5F00\u59CB\u6807\u7B7E\u4E2D\u8FD8\u8981\u89E3\u6790\u5C5E\u6027\u6570\u636E\uFF0C\u5982<code>&lt;div id=&#39;test&#39; @click=&#39;onClick&#39;&gt;</code>\u7B49</li><li>\u7ED3\u675F\u6807\u7B7E\uFF0C\u5982<code>&lt;/div&gt;</code></li><li>\u6CE8\u91CA\uFF0C\u5982 <code>&lt;!-- \u8FD9\u662FHTML\u6CE8\u91CA--&gt;</code></li><li>DOCTYPE\u58F0\u660E\uFF0C\u5982 <code>&lt;!DOCTYPE HTML&gt;</code></li><li>\u6761\u4EF6\u6CE8\u91CA\uFF0C\u5982 <code>&lt;!--[if !IE]&gt;--&gt;\u6761\u4EF6\u6CE8\u91CA&lt;!--&lt;![endif]--&gt;</code></li>",5),r=a("\u6587\u672C\uFF0C\u5305\u62EC\u7EAF\u6587\u672C\u548C\u53D8\u91CF\u6587\u672C\uFF0C\u5982"),m=n("code",null,"\u7EBF\u6587\u672C",-1),d=a(", "),g=s(`<p>\u8FD9\u4E9B\u4E0D\u540C\u7684\u7C7B\u578B\u7247\u6BB5\uFF0C\u90FD\u7531\u76F8\u5E94\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> attribute <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*([^\\s&quot;&#39;&lt;&gt;\\/=]+)(?:\\s*(=)\\s*(?:&quot;([^&quot;]*)&quot;+|&#39;([^&#39;]*)&#39;+|([^\\s&quot;&#39;=&lt;&gt;\`]+)))?</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> ncname <span class="token operator">=</span> <span class="token string">&#39;[a-zA-Z_][\\\\w\\\\-\\\\.]*&#39;</span>
<span class="token keyword">const</span> qnameCapture <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">((?:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ncname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\\\:)?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ncname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> startTagOpen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^&lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>qnameCapture<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> startTagClose <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*(\\/?)&gt;</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> endTag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^&lt;\\\\/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>qnameCapture<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">[^&gt;]*&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doctype <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;!DOCTYPE [^&gt;]+&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
<span class="token keyword">const</span> comment <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;!\\--</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> conditionalComment <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;!\\[</span><span class="token regex-delimiter">/</span></span>
</code></pre></div><p>\u7136\u540E\u5339\u914D\u6210\u529F\uFF0C\u90FD\u6709\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570\u5904\u7406\u751F\u6210\u5BF9\u5E94\u7684 AST \u7ED3\u6784\uFF1A</p><div class="language-js"><pre><code><span class="token function">parseHTML</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">start</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> unary<span class="token punctuation">,</span> start$1<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\u3000<span class="token comment">// \u5904\u7406\u5F00\u59CB\u6807\u7B7E</span>
    <span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">createASTElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> currentParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">processRawAttrs</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    <span class="token function">processFor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">processIf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">processOnce</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">end</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">end</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end$1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5904\u7406\u7ED3\u675F\u6807\u7B7E</span>
  <span class="token function-variable function">chars</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">chars</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5904\u7406\u6587\u672C\u7247\u6BB5</span>
  <span class="token function-variable function">comment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">comment</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u5904\u7406\u6CE8\u91CA\u5904\u7406</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>DOM \u662F\u6709\u5C42\u7EA7\u5D4C\u5957\u5173\u7CFB\u7684\uFF0C\u6240\u4EE5\u5BF9\u5E94\u751F\u6210\u7684 AST \u4E5F\u662F\u6709\u5D4C\u5957\u7ED3\u6784\uFF0C\u901A\u8FC7\u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A\u6570\u7EC4\u5806\u6808\u6765\u89E3\u51B3\uFF0C\u7528\u6808\u6765\u8BB0\u5F55\u5C42\u7EA7\u5173\u7CFB\uFF0C\u8FD9\u4E2A\u5C42\u7EA7\u5173\u7CFB\u53EF\u4EE5\u7406\u89E3\u4E3ADOM\u7684\u6DF1\u5EA6\u3002</p><p>HTML \u89E3\u6790\u5668\u603B\u662F\u4ECE\u524D\u5F80\u540E\u89E3\u6790\uFF0C\u6BCF\u5F53\u9047\u5230\u5F00\u59CB\u6807\u7B7E\uFF0C\u4F7F\u7528 start \u51FD\u6570\u5904\u7406\u540E\uFF0C\u628A\u5F53\u524D\u6784\u5EFA\u7684\u8282\u70B9\u63A8\u5165\u6808\u4E2D\uFF1B\u5F53\u9047\u5230\u7ED3\u675F\u6807\u7B7E\uFF0C\u4F7F\u7528 end \u51FD\u6570\u5904\u7406\uFF0C\u5C31\u4ECE\u6808\u4E2D\u5F39\u51FA\u4E00\u4E2A\u8282\u70B9\u3002\u8FD9\u6837\u4FDD\u8BC1\u6BCF\u6B21\u5904\u7406 sart \u51FD\u6570\u65F6\uFF0C\u6808\u4E2D\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u5C31\u662F\u5F53\u524D\u6B63\u5728\u5904\u7406\u8282\u70B9\u7684\u7236\u8282\u70B9\u3002</p><h2 id="\u603B\u4F53\u6D41\u7A0B" tabindex="-1">\u603B\u4F53\u6D41\u7A0B <a class="header-anchor" href="#\u603B\u4F53\u6D41\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u9996\u5148\u5224\u65AD\u6A21\u677F\u7B2C\u4E00\u4E2A\u5B57\u7B26\u662F\u4E0D\u662F <code>&lt;</code>\uFF1A</li><li>\u5982\u679C\u662F\uFF0C\u518D\u8FDB\u4E00\u6B65\u4EE5\u5404\u79CD\u7C7B\u578B\u7684\u6B63\u5219\u6765\u5339\u914D\u7247\u6BB5\u7279\u5F81\uFF0C\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\u3002\u56E0\u4E3A\u4EE5\u6B64\u5F00\u5934\u7C7B\u578B\u592A\u591A\u4E86\uFF0C\u6BD4\u5982\u5F00\u59CB\u6807\u7B7E\u3001\u7ED3\u675F\u6807\u7B7E\u3001\u6CE8\u91CA\u7B49\u3002</li><li>\u5982\u679C\u4E0D\u662F\u4EE5 <code>&lt;</code> \u5F00\u59CB\uFF0C\u90A3\u4E00\u5B9A\u662F\u6587\u672C\u7247\u6BB5</li></ul><p><img src="`+u+`" alt=""></p><h2 id="\u6E90\u7801\u89E3\u6790" tabindex="-1">\u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">//  $mount\uFF1A prototype.\uFFE5mount \u6709\u4E24\u4E2A\uFF1A</span>
<span class="token comment">// \u4E00\u4E2A\u662Fweb\u5E73\u53F0\u91CD\u5199\u7684 mount\uFF0C\u4E3B\u8981\u662F\u6A21\u677F\u89E3\u6790\u6210 render\uFF0C</span>
<span class="token comment">// \u53E6\u4E00\u4E2A\u662F\u6838\u5FC3\u516C\u5171\u7684 mount\uFF0C\u4E3B\u8981\u662F render \u6E32\u67D3\u3002</span>

<span class="token keyword">var</span> mount <span class="token operator">=</span> <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$mount<span class="token punctuation">;</span> 
<span class="token comment">// \u516C\u5171mount\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F render \u6E32\u67D3\u8FC7\u7A0B\uFF0C\u6838\u5FC3\u4EE3\u7801 vm._update(vm._render())\uFF0C\u6267\u884C vm.$options.render()</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u89E3\u6790\u62FF\u5230 template \u7684\u503C</span>
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
  <span class="token keyword">return</span> <span class="token function">mount</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E00\u7CFB\u5217\u9002\u914D\u7684\u51FD\u6570\u67EF\u91CC\u5316\u540E\uFF0C\u6700\u57FA\u7840\u7684\u662F baseCompile</span>
<span class="token keyword">var</span> ref$1 <span class="token operator">=</span> <span class="token function">createCompiler</span><span class="token punctuation">(</span>baseOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> compile <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>compile<span class="token punctuation">;</span>
<span class="token keyword">var</span> compileToFunctions <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>compileToFunctions<span class="token punctuation">;</span>

<span class="token keyword">var</span> createCompiler <span class="token operator">=</span> <span class="token function">createCompilerCreator</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">baseCompile</span> <span class="token punctuation">(</span>
  <span class="token parameter">template<span class="token punctuation">,</span>
  options</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6A21\u677F\u7F16\u8BD1\u7684\u6838\u5FC3\u4E09\u6B65\u9AA4\uFF1Aparse / optimize / generate</span>
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
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7B2C\u4E00\u6B65\u89E3\u6790\u6A21\u677F\u6210 AST\uFF1Aparse\u51FD\u6570\uFF0C\u6838\u5FC3\u662F parseHTML \u51FD\u6570\u7684\u8C03\u7528\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parse</span> <span class="token punctuation">(</span>
  <span class="token parameter">template<span class="token punctuation">,</span>
  options</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> preserveWhitespace <span class="token operator">=</span> options<span class="token punctuation">.</span>preserveWhitespace <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> whitespaceOption <span class="token operator">=</span> options<span class="token punctuation">.</span>whitespace<span class="token punctuation">;</span>
  <span class="token keyword">var</span> root<span class="token punctuation">;</span>
  <span class="token keyword">var</span> currentParent<span class="token punctuation">;</span>
  <span class="token keyword">var</span> inVPre <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> inPre <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> warned <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u8F85\u52A9\u51FD\u6570\u7684\u58F0\u660E\u4EE3\u7801</span>
  <span class="token function">parseHTML</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">start</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> unary<span class="token punctuation">,</span> start$1<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\u3000<span class="token comment">// \u5904\u7406\u5F00\u59CB\u6807\u7B7E</span>
      <span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">createASTElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> currentParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">processRawAttrs</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
      <span class="token function">processFor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">processIf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">processOnce</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">end</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">end</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end$1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u5904\u7406\u7ED3\u675F\u6807\u7B7E</span>
    <span class="token function-variable function">chars</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">chars</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5904\u7406\u6587\u672C\u7247\u6BB5</span>
    <span class="token function-variable function">comment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">comment</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u5904\u7406\u6CE8\u91CA\u5904\u7406</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre></div><p>parseHTML\u51FD\u6570\u901A\u8FC7 advance \u51FD\u6570\u548C\u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u65AD\u622A\u53D6\u5B57\u7B26\u8FDB\u884C\u5904\u7406\uFF0C\u76F4\u5230 template \u622A\u5230\u7A7A\u4E3A\u6B62</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parseHTML</span> <span class="token punctuation">(</span><span class="token parameter">html<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> expectHTML <span class="token operator">=</span> options<span class="token punctuation">.</span>expectHTML<span class="token punctuation">;</span>
  <span class="token keyword">var</span> isUnaryTag$$1 <span class="token operator">=</span> options<span class="token punctuation">.</span>isUnaryTag <span class="token operator">||</span> no<span class="token punctuation">;</span>
  <span class="token keyword">var</span> canBeLeftOpenTag$$1 <span class="token operator">=</span> options<span class="token punctuation">.</span>canBeLeftOpenTag <span class="token operator">||</span> no<span class="token punctuation">;</span>
  <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> last<span class="token punctuation">,</span> lastTag<span class="token punctuation">;</span>

  <span class="token comment">// \u5FAA\u73AF\u5904\u7406\u76F4\u5230 template \u88AB\u622A\u4E3A\u7A7A\u5B57\u7B26</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>html<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    last <span class="token operator">=</span> html<span class="token punctuation">;</span>
    <span class="token comment">// Make sure we&#39;re not in a plaintext content element like script/style</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>lastTag <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isPlainTextElement</span><span class="token punctuation">(</span>lastTag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> textEnd <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u4EE5 &lt; \u5F00\u5934</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>textEnd <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/**
         * \u4EE5 &lt; \u5F00\u5934\uFF0C\u53C8\u6709\u5F88\u591A\u79CD\u60C5\u51B5\uFF1A
         * 1. \u6CE8\u91CA\uFF0C\u5982 \`&lt;!-- \u8FD9\u662FHTML\u6CE8\u91CA--&gt;\`
         * 2. \u6761\u4EF6\u6CE8\u91CA\uFF0C\u5982 \`&lt;!--[if !IE]&gt;--&gt;\u6761\u4EF6\u6CE8\u91CA&lt;!--&lt;![endif]--&gt;\`
         * 3. DOCTYPE\u58F0\u660E\uFF0C\u5982 \`&lt;!DOCTYPE HTML&gt;\`
         * 4. \u7ED3\u675F\u6807\u7B7E\uFF0C\u5982\`&lt;/div&gt;\`
         * 5. \u5176\u5B83\u60C5\u51B5\u90FD\u5F53\u4F5C\u5F00\u59CB\u6807\u7B7E\u5904\u7406\uFF1A\u6BD4\u5982\`&lt;div id=&#39;test&#39; @click=&#39;onClick&#39;&gt;\`\u7B49
        */</span>

        <span class="token comment">// Comment:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>comment<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> commentEnd <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;--&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>commentEnd <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>shouldKeepComment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              options<span class="token punctuation">.</span><span class="token function">comment</span><span class="token punctuation">(</span>html<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> commentEnd<span class="token punctuation">)</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> index <span class="token operator">+</span> commentEnd <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token function">advance</span><span class="token punctuation">(</span>commentEnd <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">continue</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>conditionalComment<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> conditionalEnd <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;]&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>conditionalEnd <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">advance</span><span class="token punctuation">(</span>conditionalEnd <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">continue</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Doctype:</span>
        <span class="token keyword">var</span> doctypeMatch <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>doctype<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>doctypeMatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">advance</span><span class="token punctuation">(</span>doctypeMatch<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// End tag:</span>
        <span class="token keyword">var</span> endTagMatch <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>endTagMatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> curIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
          <span class="token function">advance</span><span class="token punctuation">(</span>endTagMatch<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">parseEndTag</span><span class="token punctuation">(</span>endTagMatch<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> curIndex<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Start tag:</span>
        <span class="token keyword">var</span> startTagMatch <span class="token operator">=</span> <span class="token function">parseStartTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>startTagMatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleStartTag</span><span class="token punctuation">(</span>startTagMatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldIgnoreFirstNewline</span><span class="token punctuation">(</span>startTagMatch<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> html<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">advance</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5982\u679C &lt; \u5B58\u5728\uFF0C\u4F46\u4E0D\u662F\u7B2C\u4E00\u4E2A\u5B57\u7B26\uFF0C\u662F\u5728\u5176\u5B83\u4F4D\u7F6E\uFF0C\u5219\u6709\u53EF\u80FD\u6587\u672C\u5185\u5BB9\u5305\u542B &lt; \u5B57\u7B26\uFF0C\u90FD\u5904\u7406\u6210text\uFF0C\u5982 \`\u8FD9\u662F\u4E00\u6BB5\u5305\u542B&lt;\u7B26\u53F7\u7684\u6587\u672C\`</span>
      <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>textEnd <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rest <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>textEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>
          <span class="token operator">!</span>endTag<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          <span class="token operator">!</span>startTagOpen<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          <span class="token operator">!</span>comment<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          <span class="token operator">!</span>conditionalComment<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// &lt; in plain text, be forgiving and treat it as text</span>
          next <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">break</span> <span class="token punctuation">}</span>
          textEnd <span class="token operator">+=</span> next<span class="token punctuation">;</span>
          rest <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>textEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        text <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> textEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5982\u679C\u6A21\u677F\u4E2D\u627E\u4E0D\u5230 &lt; \uFF0C\u5219\u8BF4\u660E\u6574\u4E2A\u6A21\u677F\u90FD\u662F\u6587\u672C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>textEnd <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        text <span class="token operator">=</span> html<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">advance</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4F7F\u7528\u6587\u672C\u5904\u7406\u94A9\u5B50 chars</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>chars <span class="token operator">&amp;&amp;</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span><span class="token function">chars</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> index <span class="token operator">-</span> text<span class="token punctuation">.</span>length<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u5904\u7406\u7EAF\u6587\u672C\u5185\u5BB9\u7684\u5143\u7D20\uFF0C\u5982 script style</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>html <span class="token operator">===</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>chars <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">chars</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>warn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;Mal-formatted tag at end of template: \\&quot;&quot;</span> <span class="token operator">+</span> html <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> index <span class="token operator">+</span> html<span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Clean up any remaining tags</span>
  <span class="token function">parseEndTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">advance</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    index <span class="token operator">+=</span> n<span class="token punctuation">;</span>
    html <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">parseStartTag</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleStartTag</span> <span class="token punctuation">(</span><span class="token parameter">match</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">parseEndTag</span> <span class="token punctuation">(</span><span class="token parameter">tagName<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D\u91CD\u8981\u5173\u6CE8\u7684\u5F00\u59CB\u6807\u7B7E\u7684\u89E3\u6790\uFF0C\u5F00\u59CB\u6807\u7B7E\u901A\u5E38\u5305\u542B\uFF1A\u6807\u7B7E\u540D\u3001\u6307\u4EE4\u3001\u5C5E\u6027\u3001\u4E8B\u4EF6\u7B49\uFF0C\u4E3B\u8981\u5305\u62EC\u4E24\u6B65<code> parseStartTag()</code> \u548C <code>handleStartTag(startTagMatch)</code>\uFF0C\u4E24\u8005\u90FD\u5728 parseHTML \u51FD\u6570\u5185\u90E8\u58F0\u660E\u7684\uFF0C\u770B\u4E0A\u9762\u7701\u7565\u7684\u4EE3\u7801\u3002</p><div class="language-js"><pre><code><span class="token comment">// Start tag:</span>
<span class="token keyword">var</span> startTagMatch <span class="token operator">=</span> <span class="token function">parseStartTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u6790\u5F00\u59CB\u6807\u7B7E,\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>startTagMatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">handleStartTag</span><span class="token punctuation">(</span>startTagMatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldIgnoreFirstNewline</span><span class="token punctuation">(</span>startTagMatch<span class="token punctuation">.</span>tagName<span class="token punctuation">,</span> html<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">advance</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">continue</span>
<span class="token punctuation">}</span>


<span class="token comment">// parseStartTag</span>
<span class="token comment">/**
 * return match = {
 *  tagName,
 *  attrs
 *  unarySlash
 *  start
 *  end
 * }
*/</span>
<span class="token keyword">function</span> <span class="token function">parseStartTag</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> start <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>startTagOpen<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> match <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tagName</span><span class="token operator">:</span> start<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> index
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">advance</span><span class="token punctuation">(</span>start<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> end<span class="token punctuation">,</span> attr<span class="token punctuation">;</span>
    <span class="token comment">// \u5FAA\u73AF\u5904\u7406\uFF1A\u4E0D\u662F\u7ED3\u675F\u6807\u7B7E\uFF0C\u5E76\u4E14\u542B\u6709\u52A8\u6001\u7ED1\u5B9A\uFF08\u5982\u6307\u4EE4\u4E8B\u4EF6\u7B49\uFF09\u7684\u6216\u666E\u901A\u5C5E\u6027\u65F6\u5FAA\u73AF\u5339\u914D\uFF0C\u5C06\u5339\u914D\u7ED3\u679C\u63A8\u5165 match.attrs</span>
    <span class="token comment">// var startTagClose = /^\\s*(\\/?)&gt;/ \u662F\u5426\u662F\u81EA\u95ED\u5408\u6807\u7B7E\u6216\u8005\u8BF4\u4E00\u5143\u6807\u7B7E &lt;img&gt;\u3001&lt;br/&gt;</span>
    <span class="token comment">// var attribute = /^\\s*([^\\s&quot;&#39;&lt;&gt;\\/=]+)(?:\\s*(=)\\s*(?:&quot;([^&quot;]*)&quot;+|&#39;([^&#39;]*)&#39;+|([^\\s&quot;&#39;=&lt;&gt;\`]+)))?/;</span>
   <span class="token comment">// var dynamicArgAttribute = /^\\s*((?:v-[\\w-]+:|@|:|#)\\[[^=]+\\][^\\s&quot;&#39;&lt;&gt;\\/=]*)(?:\\s*(=)\\s*(?:&quot;([^&quot;]*)&quot;+|&#39;([^&#39;]*)&#39;+|([^\\s&quot;&#39;=&lt;&gt;\`]+)))?/;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>end <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>startTagClose<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>attr <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>dynamicArgAttribute<span class="token punctuation">)</span> <span class="token operator">||</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      attr<span class="token punctuation">.</span>start <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token function">advance</span><span class="token punctuation">(</span>attr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      attr<span class="token punctuation">.</span>end <span class="token operator">=</span> index<span class="token punctuation">;</span>
      match<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>attr<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token comment">// match \u6355\u83B7\u7684\u7ED3\u679Cattr\uFF0C\u662F\u4E00\u4E2A\u5D4C\u5957\u6570\u7EC4\uFF0C\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u6253\u5370:</span>
      <span class="token comment">/**
       * \u4E3E\u4F8B\uFF1A\`id=&quot;test_id&quot;\`.match(attribute)
       * \u8FD4\u56DE\uFF1A[&quot;id=&quot;test_id&quot;&quot;, &quot;id&quot;, &quot;=&quot;, &quot;test_id&quot;, index: 0, input: &quot;id=&quot;test_id&quot;]
      */</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      match<span class="token punctuation">.</span>unarySlash <span class="token operator">=</span> end<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u662F\u4E00\u5143\u6807\u7B7E &lt;img&gt;\u3001&lt;br/&gt;</span>
      <span class="token function">advance</span><span class="token punctuation">(</span>end<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      match<span class="token punctuation">.</span>end <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token keyword">return</span> match
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// handleStartTag</span>
<span class="token comment">/**
 * match = {
 *  tagName: &quot;div&quot;,
 *  attrs: [[&quot;id=&quot;test_id&quot;&quot;, &quot;id&quot;, &quot;=&quot;, &quot;test_id&quot;, index: 0, input: &quot;id=&quot;test_id&quot;, start:0, end:9]],
 *  unarySlash: null
 *  start: 2
 *  end: 10
 * };
*/</span>
<span class="token keyword">function</span> <span class="token function">handleStartTag</span> <span class="token punctuation">(</span><span class="token parameter">match</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tagName <span class="token operator">=</span> match<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span>
  <span class="token keyword">var</span> unarySlash <span class="token operator">=</span> match<span class="token punctuation">.</span>unarySlash<span class="token punctuation">;</span>
  <span class="token keyword">var</span> unary <span class="token operator">=</span> <span class="token function">isUnaryTag$$1</span><span class="token punctuation">(</span>tagName<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token operator">!</span>unarySlash<span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token comment">// \u8FD9\u91CC\u7684\u4FE1\u5FC3\u662F\u5BF9 match.attrs \u7684\u5904\u7406\uFF0C\u62FF\u5230\u5C5E\u6027\u540D\u548C\u5C5E\u6027\u503C</span>
  <span class="token comment">/**
   * match.attrs: [[&quot;id=&quot;test_id&quot;&quot;, &quot;id&quot;, &quot;=&quot;, &quot;test_id&quot;, index: 0, input: &quot;id=&quot;test_id&quot;, start:0, end:9]],
   * 
   * \u7ED3\u679C\uFF1Aattrs: [{name: &#39;id&#39;, value: &quot;test-di&quot;, start, end},{name: &quot;@click&quot;, value: &quot;onClick&quot;}]
  */</span>
  <span class="token keyword">var</span> l <span class="token operator">=</span> match<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">var</span> attrs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> match<span class="token punctuation">.</span>attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">||</span> args<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">||</span> args<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> shouldDecodeNewlines <span class="token operator">=</span> tagName <span class="token operator">===</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;href&#39;</span>
      <span class="token operator">?</span> options<span class="token punctuation">.</span>shouldDecodeNewlinesForHref
      <span class="token operator">:</span> options<span class="token punctuation">.</span>shouldDecodeNewlines<span class="token punctuation">;</span>
    attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">decodeAttr</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> shouldDecodeNewlines<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>outputSourceRange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>start <span class="token operator">=</span> args<span class="token punctuation">.</span>start <span class="token operator">+</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>end <span class="token operator">=</span> args<span class="token punctuation">.</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>unary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u538B\u5165\u5806\u6808\uFF0C\u5F53\u89E3\u6790\u5230\u7ED3\u675F\u6807\u7B7E\u65F6\uFF0C\u7528\u4E8E\u5339\u914D\u5F00\u59CB\u6807\u7B7E\uFF0C lastTag\u603B\u662F\u5806\u6808\u6700\u4E0A\u9762\u7684\u6807\u7B7E</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tagName<span class="token punctuation">,</span> <span class="token literal-property property">lowerCasedTag</span><span class="token operator">:</span> tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> attrs<span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> match<span class="token punctuation">.</span>start<span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> match<span class="token punctuation">.</span>end <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    lastTag <span class="token operator">=</span> tagName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// parseHTML \u8C03\u7528\u65F6\u4F20\u5165\u7684 start / end / chars \u5904\u7406\u51FD\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>tagName<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> unary<span class="token punctuation">,</span> match<span class="token punctuation">.</span>start<span class="token punctuation">,</span> match<span class="token punctuation">.</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 options.start \u51FD\u6570\u4E2D\u7684\u6838\u5FC3\u662F\u4E09\u4EF6\u4E8B\uFF1A</p><ul><li>\u521B\u5EFA AST \u5143\u7D20\uFF1AcreateASTElement</li><li>\u5904\u7406 AST \u5143\u7D20\uFF1A\u5224\u65AD element \u662F\u5426\u5305\u542B\u5404\u79CD\u6307\u4EE4\u901A\u8FC7 processXXX \u505A\u76F8\u5E94\u7684\u5904\u7406\uFF0C\u5904\u7406\u7684\u7ED3\u679C\u5C31\u662F\u6269\u5C55 AST \u5143\u7D20\u7684\u5C5E\u6027</li><li>AST \u6811\u7BA1\u7406\uFF1A\u540C\u6837\u5229\u7528 stack \u5806\u6808\u5904\u7406 AST \u5404\u79CD\u5D4C\u5957\u5173\u7CFB\uFF0C\u5982\u7236\u5B50\u5173\u7CFB</li></ul><div class="language-js"><pre><code><span class="token function">parseHTML</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801...</span>
  <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">start</span> <span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> unary<span class="token punctuation">,</span> start$1<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// check namespace.</span>
        <span class="token comment">// inherit parent ns if there is one</span>
        <span class="token keyword">var</span> ns <span class="token operator">=</span> <span class="token punctuation">(</span>currentParent <span class="token operator">&amp;&amp;</span> currentParent<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">platformGetTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// handle IE svg bug</span>
        <span class="token comment">/* istanbul ignore if */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isIE <span class="token operator">&amp;&amp;</span> ns <span class="token operator">===</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          attrs <span class="token operator">=</span> <span class="token function">guardIESVGBug</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u521B\u5EFA AST \u6811</span>
        <span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">createASTElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> currentParent<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// AST \u6811\u5904\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ns<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          element<span class="token punctuation">.</span>ns <span class="token operator">=</span> ns<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>outputSourceRange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span>start <span class="token operator">=</span> start$1<span class="token punctuation">;</span>
            element<span class="token punctuation">.</span>end <span class="token operator">=</span> end<span class="token punctuation">;</span>
            element<span class="token punctuation">.</span>rawAttrsMap <span class="token operator">=</span> element<span class="token punctuation">.</span>attrsList<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cumulated<span class="token punctuation">,</span> attr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              cumulated<span class="token punctuation">[</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> attr<span class="token punctuation">;</span>
              <span class="token keyword">return</span> cumulated
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          attrs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">attr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>invalidAttributeRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">warn$2</span><span class="token punctuation">(</span>
                <span class="token string">&quot;Invalid dynamic argument expression: attribute names cannot contain &quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;spaces, quotes, &lt;, &gt;, / or =.&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">start</span><span class="token operator">:</span> attr<span class="token punctuation">.</span>start <span class="token operator">+</span> attr<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">end</span><span class="token operator">:</span> attr<span class="token punctuation">.</span>start <span class="token operator">+</span> attr<span class="token punctuation">.</span>name<span class="token punctuation">.</span>length
                <span class="token punctuation">}</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isForbiddenTag</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          element<span class="token punctuation">.</span>forbidden <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token function">warn$2</span><span class="token punctuation">(</span>
            <span class="token string">&#39;Templates should only be responsible for mapping the state to the &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;UI. Avoid placing tags with side-effects in your templates, such as &#39;</span> <span class="token operator">+</span>
            <span class="token string">&quot;&lt;&quot;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&quot;&gt;&quot;</span> <span class="token operator">+</span> <span class="token string">&#39;, as they will not be parsed.&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> element<span class="token punctuation">.</span>start <span class="token punctuation">}</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// apply pre-transforms</span>
        <span class="token comment">// \u8F6C\u6362\u5404\u79CD\u5C5E\u6027\uFF0C\u5B9A\u4E49\u5728\uFF1A</span>
        <span class="token comment">// parse \u51FD\u6570\u4E2D\uFF1A preTransforms = pluckModuleFunction(options.modules, &#39;preTransformNode&#39;);</span>
        <span class="token comment">// preTransformNode \u51FD\u6570\u5904\u7406 v-for v-if/v-else \u4EE5\u53CA\u9488\u5BF9 checkbox radio \u7684\u7279\u6B8A\u5904\u7406\uFF0C\u5176\u4E2D\u6838\u5FC3\u7684\u662F processElement \u51FD\u6570</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preTransforms<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          element <span class="token operator">=</span> preTransforms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">||</span> element<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inVPre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processPre</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// v-pre</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            inVPre <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">platformIsPreTag</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          inPre <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inVPre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processRawAttrs</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>element<span class="token punctuation">.</span>processed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// structural directives </span>
          <span class="token comment">// \u5904\u7406\u5F00\u59CB\u6807\u7B7E\u4E2D v-for / v-if / v-else / v-once \u6307\u4EE4</span>
          <span class="token function">processFor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">processIf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">processOnce</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// AST \u6811\u7BA1\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          root <span class="token operator">=</span> element<span class="token punctuation">;</span>
          <span class="token punctuation">{</span>
            <span class="token function">checkRootConstraints</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>unary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          currentParent <span class="token operator">=</span> element<span class="token punctuation">;</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">closeElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>preTransformNode \u51FD\u6570\u5904\u7406 v-for v-if/v-else \u4EE5\u53CA\u9488\u5BF9 checkbox radio \u7684\u7279\u6B8A\u5904\u7406\uFF0C\u5176\u4E2D\u6838\u5FC3\u7684\u662F processElement \u51FD\u6570\u3002</p><p>processElement \u51FD\u6570\u91CC\u8C03\u7528\u4E00\u7CFB\u5217 processXXX \u51FD\u6570\u5904\u7406\u5BF9\u5E94\u90E8\u5206\u5185\u5BB9\uFF0C\u5982 ref key slot attr \u7B49\u5185\u5BB9\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">processElement</span> <span class="token punctuation">(</span>
  <span class="token parameter">element<span class="token punctuation">,</span>
  options</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">processKey</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// determine whether this is a plain element after</span>
  <span class="token comment">// removing structural attributes</span>
  element<span class="token punctuation">.</span>plain <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>element<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>element<span class="token punctuation">.</span>scopedSlots <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>element<span class="token punctuation">.</span>attrsList<span class="token punctuation">.</span>length
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">processRef</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">processSlotContent</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">processSlotOutlet</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">processComponent</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> transforms<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element <span class="token operator">=</span> transforms<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">||</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">processAttrs</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F00\u59CB\u6807\u7B7E\u4E2D\u5177\u4F53\u5173\u4E8E v-for \u548C key\uFF0C\u4EE5\u53CA v-if / v-else\uFF0C \u4EE5\u53CA\u52A8\u6001\u5C5E\u6027v-bind\u3001\u52A8\u6001\u7C7B\u540D v-bind:class\uFF0C\u52A8\u6001\u884C\u5185\u6837\u5F0F v-bind:style\uFF0C\u4EE5\u53CA\u7ED1\u5B9A\u4E8B\u4EF6 v-on \u7684\u89E3\u6790\uFF0C\u540E\u9762\u5173\u4E8E\u6307\u4EE4\u7AE0\u8282\u518D\u8BB2\u3002</p><p>parse \u51FD\u6570\u6700\u7EC8\u8FD4\u56DE AST \uFF0C\u7ED9 optimize \u51FD\u6570\u4F7F\u7528\u3002\u4E0B\u4E00\u8282\u8BB2\u89E3 optimize \u6E90\u7801\u90E8\u5206\u3002</p>`,25);function f(t,y,w,h,v,T){return c(),o("div",null,[k,n("ul",null,[i,n("li",null,[r,m,d,n("code",null,"\u53D8\u91CF\u6587\u672C"+e(t.message),1)])]),g])}var q=p(l,[["render",f]]);export{b as __pageData,q as default};
