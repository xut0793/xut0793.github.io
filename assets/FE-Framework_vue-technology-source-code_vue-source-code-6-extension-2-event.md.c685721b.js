import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const v='{"title":"\u4E8B\u4EF6\u4E2D\u5FC3 event","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A21\u677F\u7F16\u8BD11\uFF1Aparse","slug":"\u6A21\u677F\u7F16\u8BD11\uFF1Aparse"},{"level":2,"title":"\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate","slug":"\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate"},{"level":2,"title":"\u6E32\u67D31\uFF1A_render","slug":"\u6E32\u67D31\uFF1A-render"},{"level":2,"title":"\u6E32\u67D32\uFF1Avm._update","slug":"\u6E32\u67D32\uFF1Avm-update"},{"level":2,"title":"\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406","slug":"\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406"},{"level":2,"title":"\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406","slug":"\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-6-extension-2-event.md"}',p={},o=t(`<h1 id="\u4E8B\u4EF6\u4E2D\u5FC3-event" tabindex="-1">\u4E8B\u4EF6\u4E2D\u5FC3 event <a class="header-anchor" href="#\u4E8B\u4EF6\u4E2D\u5FC3-event" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u6A21\u677F\u7F16\u8BD11\uFF1Aparse">\u6A21\u677F\u7F16\u8BD11\uFF1Aparse</a></li><li><a href="#\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate">\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate</a></li><li><a href="#\u6E32\u67D31\uFF1A-render">\u6E32\u67D31\uFF1A_render</a></li><li><a href="#\u6E32\u67D32\uFF1Avm-update">\u6E32\u67D32\uFF1Avm._update</a></li><li><a href="#\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406">\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406</a></li><li><a href="#\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406">\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406</a></li></ul></div></p><p>Vue \u4E2D\u7684\u4E8B\u4EF6\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ul><li>\u539F\u751F DOM \u4E8B\u4EF6\uFF1A\u539F\u751F DOM \u8282\u70B9\u53EA\u80FD\u6DFB\u52A0\u539F\u751F DOM \u4E8B\u4EF6\u3002</li><li>\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A\u53EA\u6709\u7EC4\u4EF6\u8282\u70B9\u624D\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u5982\u679C\u9700\u8981\u5728\u7EC4\u4EF6\u4E0A\u6DFB\u52A0\u539F\u751FDOM\u4E8B\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 .native \u4FEE\u9970\u7B26\uFF0C\u5E76\u4E14\u8BE5\u4E8B\u4EF6\u4F5C\u7528\u5728\u7EC4\u4EF6\u6839\u8282\u70B9\u4E0A\u7684\u771F\u5B9EDOM\u5143\u7D20\u3002</li></ul><blockquote><p>.native \u4FEE\u9970\u7B26\u53EA\u80FD\u6DFB\u52A0\u5728\u7EC4\u4EF6\u4E0A\uFF0C\u5BF9\u771F\u5B9EDOM\u8282\u70B9\u7684\u4E8B\u4EF6\u6DFB\u52A0.native \u4FEE\u9970\u7B26\u4F1A\u88AB\u5FFD\u7565\u3002</p></blockquote><p>\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> Child <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u539F\u751F DOM \u5143\u7D20\u6DFB\u52A0\u539F\u751F DOM \u4E8B\u4EF6</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;button @click=&quot;clickHandler($event)&quot;&gt;click me&lt;/button&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Button clicked!&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC4\u4EF6 child \u4E0A\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4E8B\u4EF6 select\uFF0C\u4EE5\u53CA\u5728\u7EC4\u4EF6\u4E0A\u6DFB\u52A0.native\u4FEE\u9970\u7B26\u7684\u539F\u751F\u4E8B\u4EF6</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;&#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;&lt;child @select=&quot;selectHandler&quot; @click.native.prevent=&quot;clickHandler&quot;&gt;&lt;/child&gt;&#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Child clicked!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">selectHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Child select!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6309\u7167\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u770B\u4E0B Vue \u6E90\u7801\u4E2D\u5BF9\u4E8B\u4EF6\u7684\u5904\u7406\u903B\u8F91</p><h2 id="\u6A21\u677F\u7F16\u8BD11\uFF1Aparse" tabindex="-1">\u6A21\u677F\u7F16\u8BD11\uFF1Aparse <a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD11\uFF1Aparse" aria-hidden="true">#</a></h2><p>\u6A21\u677F\u7F16\u8BD1 div \u8FC7\u7A0B\u7565\u8FC7\uFF0C\u76F4\u5230\u7F16\u8BD1 child \u6807\u7B7E\u65F6\uFF1A</p><p>parse =&gt; parseHTML =&gt; parseStartTag =&gt; handleStartTag =&gt; options.start =&gt; closeElement =&gt; processElement =&gt; processAttrs</p><p>\u770B\u4E0B processAttrs:</p><div class="language-js"><pre><code><span class="token comment">// var onRE = /^@|^v-on:/;</span>
<span class="token comment">// var dirRE = /^v-|^@|^:|^#/;</span>
<span class="token comment">// var argRE = /:(.*)$/;</span>
<span class="token comment">// var bindRE = /^:|^\\.|^v-bind:/;</span>
<span class="token comment">// var modifierRE = /\\.[^.\\]]+(?=[^\\]]*$)/g;</span>
<span class="token comment">// var dynamicArgRE = /^\\[.*\\]$/;</span>
<span class="token comment">// \u8FD9\u4E2A\u51FD\u6570\u5904\u7406\u4E86\u4FEE\u9970\u7B26\u3001\u4E8B\u4EF6\u8FC7\u6EE4\u5668\u3001\u4E8B\u4EF6\u7ED1\u5B9A</span>
<span class="token keyword">function</span> <span class="token function">processAttrs</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// attrsList: [{name: &#39;id&#39;, value: &#39;test_id&#39;,start,end}, {name: &#39;@click&#39;, value: &#39;onClick&#39;,start,end}]</span>
  <span class="token keyword">var</span> list <span class="token operator">=</span> el<span class="token punctuation">.</span>attrsList<span class="token punctuation">;</span>
  <span class="token keyword">var</span> i<span class="token punctuation">,</span> l<span class="token punctuation">,</span> name<span class="token punctuation">,</span> rawName<span class="token punctuation">,</span> value<span class="token punctuation">,</span> modifiers<span class="token punctuation">,</span> syncGen<span class="token punctuation">,</span> isDynamic<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> rawName <span class="token operator">=</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    value <span class="token operator">=</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dirRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// dirRE = /^v-|^@|^:|^#/; \u5373\u5339\u914D v-on / @ / v-bind / : / v-slot / #</span>
      <span class="token comment">// mark element as dynamic</span>
      el<span class="token punctuation">.</span>hasBindings <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token comment">// modifiers \u89E3\u6790\u52A8\u6001\u5C5E\u6027\u4FEE\u9970\u7B26\uFF0C\u6BD4\u5982 @click.stop, v-bind:show.sync</span>
      <span class="token comment">// modifiers = {sync: true, native: true}</span>
      modifiers <span class="token operator">=</span> <span class="token function">parseModifiers</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>dirRE<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// support .foo shorthand syntax for the .prop modifier</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>modifierRE<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>bindRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// v-bind:attr or :attr</span>
        <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u5BF9 v-bind \u7684\u5904\u7406</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>onRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// v-on @</span>
        name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>onRE<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        isDynamic <span class="token operator">=</span> dynamicArgRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isDynamic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u89E3\u6790\u4E8B\u4EF6\u5404\u79CD\u4FEE\u9970\u7B26\uFF0C\u6700\u540E\u6DFB\u52A0 el.events \u6216 el.nativeEvents \u6570\u7EC4\u4E2D\u50A8\u5B58\u7740 handler</span>
        <span class="token function">addHandler</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> modifiers<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> warn$2<span class="token punctuation">,</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> isDynamic<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// normal directives\uFF1A v-show v-text v-html \u81EA\u5B9A\u4E49\u6307\u4EE4</span>
        <span class="token comment">// \u5BF9\u5269\u4F59\u6307\u4EE4\u7684\u5904\u7406\uFF0C\u5982 v-show v-text v-html \u4EE5\u53CA\u81EA\u5B9A\u4E49\u6307\u4EE4</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// literal attribute</span>
      <span class="token comment">// \u5BF9\u9759\u6001\u5C5E\u6027\u7684\u5904\u7406\uFF0C\u5982title href src</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728processAttrs \u4E2D\uFF0C\u7701\u7565\u90E8\u5206\u4EE3\u7801\u4E3B\u8981\u5173\u6CE8\u4E8B\u4EF6\u6307\u4EE4\u7684\u5904\u7406\u3002\u5728\u5BF9\u6807\u7B7E\u5C5E\u6027\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u5224\u65AD\u5982\u679C\u662F\u6307\u4EE4\uFF0C\u9996\u5148\u901A\u8FC7 parseModifiers \u89E3\u6790\u51FA\u4FEE\u9970\u7B26\uFF0C\u7136\u540E\u5224\u65AD\u5982\u679C\u4E8B\u4EF6\u7684\u6307\u4EE4\uFF0C\u5219\u6267\u884C addHandler \u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token comment">// \u4E8B\u4EF6\u4FEE\u9970\u7B26</span>
<span class="token comment">// .stop - \u8C03\u7528 event.stopPropagation()\u3002\u963B\u6B62\u5192\u6CE1</span>
<span class="token comment">// .prevent - \u8C03\u7528 event.preventDefault()\u3002\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A</span>
<span class="token comment">// .capture - \u6DFB\u52A0\u4E8B\u4EF6\u4FA6\u542C\u5668\u65F6\u4F7F\u7528 capture \u6A21\u5F0F\u3002\u6355\u83B7\u6A21\u5F0F</span>
<span class="token comment">// .passive - (2.3.0) \u4EE5 { passive: true } \u6A21\u5F0F\u6DFB\u52A0\u4FA6\u542C\u5668\u3002 \u5192\u6CE1\u6A21\u5F0F</span>
<span class="token comment">// .self - \u53EA\u5F53\u4E8B\u4EF6\u662F\u4ECE\u4FA6\u542C\u5668\u7ED1\u5B9A\u7684\u5143\u7D20\u672C\u8EAB\u89E6\u53D1\u65F6\u624D\u89E6\u53D1\u56DE\u8C03\u3002</span>
<span class="token comment">// .native - \u76D1\u542C\u7EC4\u4EF6\u6839\u5143\u7D20\u7684\u539F\u751F\u4E8B\u4EF6\u3002</span>
<span class="token comment">// .once - \u53EA\u89E6\u53D1\u4E00\u6B21\u56DE\u8C03\u3002</span>
<span class="token comment">// .{keyCode | keyAlias} - \u53EA\u5F53\u4E8B\u4EF6\u662F\u4ECE\u7279\u5B9A\u952E\u89E6\u53D1\u65F6\u624D\u89E6\u53D1\u56DE\u8C03\u3002</span>
<span class="token comment">// .left - (2.2.0) \u53EA\u5F53\u70B9\u51FB\u9F20\u6807\u5DE6\u952E\u65F6\u89E6\u53D1\u3002</span>
<span class="token comment">// .right - (2.2.0) \u53EA\u5F53\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u65F6\u89E6\u53D1\u3002</span>
<span class="token comment">// .middle - (2.2.0) \u53EA\u5F53\u70B9\u51FB\u9F20\u6807\u4E2D\u952E\u65F6\u89E6\u53D1\u3002</span>
<span class="token keyword">function</span> <span class="token function">addHandler</span> <span class="token punctuation">(</span>
  <span class="token parameter">el<span class="token punctuation">,</span>
  name<span class="token punctuation">,</span>
  value<span class="token punctuation">,</span>
  modifiers<span class="token punctuation">,</span>
  important<span class="token punctuation">,</span>
  warn<span class="token punctuation">,</span>
  range<span class="token punctuation">,</span>
  dynamic</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  modifiers <span class="token operator">=</span> modifiers <span class="token operator">||</span> emptyObject<span class="token punctuation">;</span>
  <span class="token comment">// warn prevent and passive modifier</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token comment">// prevent passive \u4E0D\u80FD\u4E00\u8D77\u4F7F\u7528</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    warn <span class="token operator">&amp;&amp;</span>
    modifiers<span class="token punctuation">.</span>prevent <span class="token operator">&amp;&amp;</span> modifiers<span class="token punctuation">.</span>passive
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;passive and prevent can\\&#39;t be used together. &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;Passive handler can\\&#39;t prevent default event.&#39;</span><span class="token punctuation">,</span>
      range
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// normalize click.right and click.middle since they don&#39;t actually fire</span>
  <span class="token comment">// this is technically browser-specific, but at least for now browsers are</span>
  <span class="token comment">// the only target envs that have right/middle clicks.</span>
  <span class="token comment">// \u9F20\u6807\u53F3\u952E\u3001\u4E2D\u952E\u89E6\u53D1\u4E8B\u4EF6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dynamic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;)===&#39;click&#39;?&#39;contextmenu&#39;:(&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> <span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">delete</span> modifiers<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dynamic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;)===&#39;click&#39;?&#39;mouseup&#39;:(&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8FD9\u91CC\u4F7F\u7528\u4F7F\u7528\u6807\u8BB0\uFF0C\u5728 patch \u6E32\u67D3\u9636\u6BB5\u4F1A\u6839\u636E\u8FD9\u4E9B\u6807\u8BB0\u4F1A\u6709\u5BF9\u5E94\u6A21\u5F0F\u7684\u7279\u6B8A\u5904\u7406</span>
  <span class="token comment">// check capture modifier \u6355\u83B7\u6A21\u5F0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>capture<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> modifiers<span class="token punctuation">.</span>capture<span class="token punctuation">;</span>
    name <span class="token operator">=</span> <span class="token function">prependModifierMarker</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> dynamic<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>once<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u53EA\u8C03\u7528\u4E00\u6B21</span>
    <span class="token keyword">delete</span> modifiers<span class="token punctuation">.</span>once<span class="token punctuation">;</span>
    name <span class="token operator">=</span> <span class="token function">prependModifierMarker</span><span class="token punctuation">(</span><span class="token string">&#39;~&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> dynamic<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// istanbul ignore if  \u5192\u6CE1\u6A21\u5F0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>passive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> modifiers<span class="token punctuation">.</span>passive<span class="token punctuation">;</span>
    name <span class="token operator">=</span> <span class="token function">prependModifierMarker</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> dynamic<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> events<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>native<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> modifiers<span class="token punctuation">.</span>native<span class="token punctuation">;</span>
    events <span class="token operator">=</span> el<span class="token punctuation">.</span>nativeEvents <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>nativeEvents <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    events <span class="token operator">=</span> el<span class="token punctuation">.</span>events <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// {name: &#39;@click&#39;, value: &#39;onClick&#39;,start,end}</span>
  <span class="token keyword">var</span> newHandler <span class="token operator">=</span> <span class="token function">rangeSetItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">dynamic</span><span class="token operator">:</span> dynamic <span class="token punctuation">}</span><span class="token punctuation">,</span> range<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// newHandler = &quot;onClick&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers <span class="token operator">!==</span> emptyObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newHandler<span class="token punctuation">.</span>modifiers <span class="token operator">=</span> modifiers<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> handlers <span class="token operator">=</span> events<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    important <span class="token operator">?</span> handlers<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>newHandler<span class="token punctuation">)</span> <span class="token operator">:</span> handlers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>handlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    events<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> important <span class="token operator">?</span> <span class="token punctuation">[</span>newHandler<span class="token punctuation">,</span> handlers<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>handlers<span class="token punctuation">,</span> newHandler<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    events<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> newHandler<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  el<span class="token punctuation">.</span>plain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0CaddHandler \u51FD\u6570\uFF1A</p><ol><li>\u662F\u4E00\u8FB9\u6821\u9A8C modifiers\uFF0C\u4E00\u8FB9\u5220\u9664\uFF0C\u4FDD\u7559\u6700\u540E\u672A\u5904\u7406\u7684\u4FEE\u9970\u7B26\u3002</li><li>\u901A\u8FC7 .native \u4FEE\u9970\u7B26\u533A\u5206\u539F\u751F\u4E8B\u4EF6\u8FD8\u662F\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u5206\u522B\u5B58\u653E\u5728 el.nativeEvents \u548C el.events</li></ol><p>\u5728\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\uFF0C\u7EC4\u4EF6 child \u548C \u7EC4\u4EF6\u5185\u90E8\u8282\u70B9 div \u521B\u5EFA\u7684 ASTElement \u5BF9\u8C61\u7684\u4E8B\u4EF6\u5C5E\u6027\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u7236\u7EC4\u4EF6\u7684 child \u8282\u70B9\u751F\u6210\u7684 el.events \u548C el.nativeEvents \u5982\u4E0B\uFF1A</span>
el<span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;selectHandler&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

el<span class="token punctuation">.</span>nativeEvents <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;clickHandler&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">prevent</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\u7684 button \u8282\u70B9\u751F\u6210\u7684 el.events \u5982\u4E0B\uFF1A</span>
el<span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;clickHandler($event)&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>parse \u51FD\u6570\u6267\u884C\u540E\u751F\u6210 AST\uFF0C\u4F20\u7ED9 optimize \uFF0C\u5B83\u7684\u903B\u8F91\u4E3B\u8981\u4F18\u5316\u9759\u6001\u8282\u70B9\u548C\u9759\u6001\u6839\u8282\u70B9\uFF0C\u8DDF\u5F53\u524D\u4E8B\u4EF6\u5206\u6790\u65E0\u5173\uFF0C\u6240\u4EE5\u7565\u8FC7\u3002\u63A5\u7740\u6765\u5230\u6A21\u677F\u7F16\u8BD1\u7684\u6700\u540E\u9636\u6BB5 generate</p><h2 id="\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate" tabindex="-1">\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate <a class="header-anchor" href="#\u6A21\u677F\u7F16\u8BD12\uFF1Agenerate" aria-hidden="true">#</a></h2><p>generate \u9636\u6BB5\u7684\u4E3B\u8981\u76EE\u7684\u662F\u751F\u6210\u53EF\u7528\u4E8E\u6E32\u67D3\u51FD\u6570\u7684\u4EE3\u7801\u5B57\u7B26\u4E32\u3002</p><p>gererate =&gt; genElement =&gt; genData$2</p><p>genData$2 \u51FD\u6570\u4E3B\u8981\u662F\u4ECE ASTElement \u5BF9\u8C61\u4E0A\u89E3\u6790\u7EC4\u88C5\u751F\u6210 data\uFF0C\u7528\u4E8E _createElement(tag,data,children) \u51FD\u6570\u7684\u7684\u7B2C\u4E8C\u5165\u53C2\u3002\u6574\u4E2A generate \u9636\u6BB5\u90FD\u662F\u5B57\u7B26\u4E32\u62FC\u63A5\u8FC7\u7A0B\uFF0C\u6240\u4EE5 genData$2 \u4E5F\u662F\u62FC\u63A5 data \u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">genData$2</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * data = {
   *  dirs: dirs,
   *  key: key,
   *  ref: ref
   * ...
   * }
   */</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// directives first.</span>
  <span class="token comment">// directives may mutate the el&#39;s other properties before they are generated.</span>
  <span class="token keyword">var</span> dirs <span class="token operator">=</span> <span class="token function">genDirectives</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span> data <span class="token operator">+=</span> dirs <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token comment">// key</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;key:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ref</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;ref:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>ref<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>refInFor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;refInFor:true,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// pre</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;pre:true,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// record original tag name for components using &quot;is&quot; attribute</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;tag:\\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// module data generation functions</span>
  <span class="token comment">// dateGenFns =&gt; genData</span>
  <span class="token comment">// function genData (el) {</span>
  <span class="token comment">//   var data = &#39;&#39;;</span>
  <span class="token comment">//   if (el.staticClass) {</span>
  <span class="token comment">//     data += &quot;staticClass:&quot; + (el.staticClass) + &quot;,&quot;;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   if (el.classBinding) {</span>
  <span class="token comment">//     data += &quot;class:&quot; + (el.classBinding) + &quot;,&quot;;</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return data</span>
  <span class="token comment">// }</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> state<span class="token punctuation">.</span>dataGenFns<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> state<span class="token punctuation">.</span>dataGenFns<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// attributes</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;attrs:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">genProps</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// DOM props</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;domProps:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">genProps</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// event handlers</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>events<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token function">genHandlers</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>events<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>nativeEvents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token function">genHandlers</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>nativeEvents<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// slot target</span>
  <span class="token comment">// only for non-scoped slots</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotTarget <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>slotScope<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;slot:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotTarget<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// scoped slots</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token function">genScopedSlots</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// component v-model</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token string">&quot;model:{value:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>model<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,callback:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>model<span class="token punctuation">.</span>callback<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,expression:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>model<span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;},&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// inline-template</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>inlineTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> inlineTemplate <span class="token operator">=</span> <span class="token function">genInlineTemplate</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inlineTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data <span class="token operator">+=</span> inlineTemplate <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  data <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">,$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// v-bind dynamic argument wrap</span>
  <span class="token comment">// v-bind with dynamic arguments must be applied using the same v-bind object</span>
  <span class="token comment">// merge helper so that class/style/mustUseProp attrs are handled correctly.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>dynamicAttrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token string">&quot;_b(&quot;</span> <span class="token operator">+</span> data <span class="token operator">+</span> <span class="token string">&quot;,\\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;,&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">genProps</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>dynamicAttrs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// v-bind data wrap</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>wrapData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">wrapData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// v-on data wrap</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>wrapListeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">wrapListeners</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u5173\u6CE8\u5BF9\u4E8B\u4EF6\u7684\u89E3\u6790\uFF0C\u4ECE ASTElement.envents \u548C ASTElement.nativeEvents \u4E2D\u53D6\u51FA\u4E8B\u4EF6\uFF0C\u8C03\u7528 genHandlers\uFF0C\u5BF9\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E86 .native \u4FEE\u4FEE\u9970\u7B26\u7684\u4E8B\u4EF6\uFF0C\u7B2C\u4E8C\u4E2A\u5165\u53C2\u4F1A\u4F20\u5165 true\uFF0C\u5373 isNative = true</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">genHandlers</span> <span class="token punctuation">(</span>
  <span class="token parameter">events<span class="token punctuation">,</span>
  isNative</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> prefix <span class="token operator">=</span> isNative <span class="token operator">?</span> <span class="token string">&#39;nativeOn:&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;on:&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> staticHandlers <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> dynamicHandlers <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5FAA\u73AF\u904D\u5386\uFF0C\u5904\u7406\u6BCF\u4E00\u4E2A\u4E8B\u4EF6 genHandler</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> name <span class="token keyword">in</span> events<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> handlerCode <span class="token operator">=</span> <span class="token function">genHandler</span><span class="token punctuation">(</span>events<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>events<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> events<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span>dynamic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dynamicHandlers <span class="token operator">+=</span> name <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> handlerCode <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      staticHandlers <span class="token operator">+=</span> <span class="token string">&quot;\\&quot;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;\\&quot;:&quot;</span> <span class="token operator">+</span> handlerCode <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  staticHandlers <span class="token operator">=</span> <span class="token string">&quot;{&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>staticHandlers<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dynamicHandlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prefix <span class="token operator">+</span> <span class="token string">&quot;_d(&quot;</span> <span class="token operator">+</span> staticHandlers <span class="token operator">+</span> <span class="token string">&quot;,[&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>dynamicHandlers<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;])&quot;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prefix <span class="token operator">+</span> staticHandlers
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>genHandlers \u65B9\u6CD5\u904D\u5386\u4E8B\u4EF6\u5BF9\u8C61 events\uFF0C\u5BF9\u540C\u4E00\u4E2A\u4E8B\u4EF6\u540D\u79F0\u7684\u4E8B\u4EF6\u8C03\u7528 genHandler(name, events[name]) \u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">var</span> fnExpRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([\\w$_]+|\\([^)]*?\\))\\s*=&gt;|^function(?:\\s+[\\w$]+)?\\s*\\(</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fnInvokeRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\([^)]*?\\);*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> simplePathRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*|\\[&#39;[^&#39;]*?&#39;]|\\[&quot;[^&quot;]*?&quot;]|\\[\\d+]|\\[[A-Za-z_$][\\w$]*])*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">genHandler</span> <span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;function(){}&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">genHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> isMethodPath <span class="token operator">=</span> simplePathRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> isFunctionExpression <span class="token operator">=</span> fnExpRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> isFunctionInvocation <span class="token operator">=</span> simplePathRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>fnInvokeRE<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>handler<span class="token punctuation">.</span>modifiers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isMethodPath <span class="token operator">||</span> isFunctionExpression<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> handler<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;function($event){&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>isFunctionInvocation <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;return &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span> <span class="token comment">// inline statement</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> code <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> genModifierCode <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5904\u7406\u5404\u7C7B\u4FEE\u9970\u7B26\uFF0C\u62FC\u63A5\u5BF9\u5E94\u7684\u4EE3\u7801</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> handler<span class="token punctuation">.</span>modifiers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>modifierCode<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        genModifierCode <span class="token operator">+=</span> modifierCode<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// stop: &#39;$event.stopPropagation();&#39;,</span>
        <span class="token comment">// left/right</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>keyCodes<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;exact&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> modifiers <span class="token operator">=</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span>modifiers<span class="token punctuation">)</span><span class="token punctuation">;</span>
        genModifierCode <span class="token operator">+=</span> <span class="token function">genGuard</span><span class="token punctuation">(</span>
          <span class="token punctuation">[</span><span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;meta&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">keyModifier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>modifiers<span class="token punctuation">[</span>keyModifier<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">keyModifier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;$event.&quot;</span> <span class="token operator">+</span> keyModifier <span class="token operator">+</span> <span class="token string">&quot;Key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;||&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">+=</span> <span class="token function">genKeyFilter</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Make sure modifiers like prevent and stop get executed after key filtering</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>genModifierCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">+=</span> genModifierCode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> handlerCode <span class="token operator">=</span> isMethodPath
      <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;return &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;($event)&quot;</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> isFunctionExpression
        <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;return (&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)($event)&quot;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> isFunctionInvocation
          <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;return &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>handler<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token operator">:</span> handler<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;function($event){&quot;</span> <span class="token operator">+</span> code <span class="token operator">+</span> handlerCode <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>genHandler \u51FD\u6570\u5148\u5224\u65AD\uFF1A</p><ul><li>\u5982\u679C handler \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5C31\u904D\u5386\u5B83\u7136\u540E\u9012\u5F52\u8C03\u7528 genHandler \u65B9\u6CD5\u5E76\u62FC\u63A5\u7ED3\u679C</li><li>\u63A5\u7740\u5BF9 modifiers \u505A\u5224\u65AD\uFF0C\u5BF9\u4E8E\u6CA1\u6709 modifiers \u7684\u60C5\u51B5\uFF0C\u5C31\u6839\u636E handler.value \u4E0D\u540C\u60C5\u51B5\u5904\u7406\uFF0C\u8981\u4E48\u76F4\u63A5\u8FD4\u56DE\uFF0C\u8981\u4E48\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u5305\u88F9\u7684\u8868\u8FBE\u5F0F\uFF1B- \u5BF9\u4E8E\u6709 modifiers \u7684\u60C5\u51B5\uFF0C\u5219\u5BF9\u5404\u79CD\u4E0D\u540C\u7684 modifer \u60C5\u51B5\u505A\u4E0D\u540C\u5904\u7406\uFF0C\u6DFB\u52A0\u76F8\u5E94\u7684\u4EE3\u7801\u4E32\u3002</li></ul><p>\u5176\u4E2D\u4E0D\u540C\u4FEE\u9970\u7B26\uFF0C\u9700\u8981\u8865\u5168\u4E0D\u540C\u7684\u4EE3\u7801\u4E32\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">genGuard</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;if(&quot;</span> <span class="token operator">+</span> condition <span class="token operator">+</span> <span class="token string">&quot;)return null;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> modifierCode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">stop</span><span class="token operator">:</span> <span class="token string">&#39;$event.stopPropagation();&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prevent</span><span class="token operator">:</span> <span class="token string">&#39;$event.preventDefault();&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">self</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;$event.target !== $event.currentTarget&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ctrl</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;!$event.ctrlKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shift</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;!$event.shiftKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;!$event.altKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;!$event.metaKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;button&#39; in $event &amp;&amp; $event.button !== 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">middle</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;button&#39; in $event &amp;&amp; $event.button !== 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token function">genGuard</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;button&#39; in $event &amp;&amp; $event.button !== 2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// KeyboardEvent.keyCode aliases</span>
<span class="token keyword">var</span> keyCodes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">esc</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enter</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token literal-property property">space</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">up</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
  <span class="token literal-property property">down</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;delete&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// KeyboardEvent.key aliases</span>
<span class="token keyword">var</span> keyNames <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// #7880: IE11 and Edge use \`Esc\` for Escape key name.</span>
  <span class="token literal-property property">esc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Esc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Escape&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&#39;Tab&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enter</span><span class="token operator">:</span> <span class="token string">&#39;Enter&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// #9112: IE11 uses \`Spacebar\` for Space key name.</span>
  <span class="token literal-property property">space</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Spacebar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// #7806: IE11 uses key names without \`Arrow\` prefix for arrow keys.</span>
  <span class="token literal-property property">up</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Up&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ArrowUp&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ArrowLeft&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Right&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ArrowRight&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">down</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Down&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ArrowDown&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// #9112: IE11 uses \`Del\` for Delete key name.</span>
  <span class="token string-property property">&#39;delete&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Backspace&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Delete&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Del&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6700\u7EC8\u751F\u6210\u7684 data \u5B57\u7B26\u4E32\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// child</span>
&#39;<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;on&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;select&quot;</span><span class="token operator">:</span> selectHandler<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;nativeOn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;click&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      $event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">clickHandler</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>&#39;

<span class="token comment">// div</span>
&#39;<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;on&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;click&quot;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clickHandler</span><span class="token punctuation">(</span>$event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>&#39;
</code></pre></div><p>\u5230\u6B64\uFF0C\u7F16\u8BD1\u90E8\u5206\u5B8C\u6210\uFF0C\u4E0B\u4E00\u4E2A\u9636\u6BB5\u662F\u6E32\u67D3\uFF0C\u5206\u522B\u8C03\u7528 vm._render \u548C vm.update \u51FD\u6570</p><h2 id="\u6E32\u67D31\uFF1A-render" tabindex="-1">\u6E32\u67D31\uFF1A_render <a class="header-anchor" href="#\u6E32\u67D31\uFF1A-render" aria-hidden="true">#</a></h2><p>vm._render \u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u751F\u6210\u865A\u62DFDOM\uFF0C\u6267\u884C options.render\u51FD\u6570\u4E2D\u8C03\u7528 _createElement \u751F\u6210\u5D4C\u5957\u7684 vnode\u3002</p><p><code>vnode = render.call(vm._renderProxy, vm.$createElement);</code></p><p>\u6B64\u65F6\u5728 _createElement \u51FD\u6570\u4E2D\uFF0C\u5982\u679C\u89E3\u6790\u5230\u4E0D\u662F\u6B63\u5E38\u6807\u7B7E\uFF0C\u5219\u4F1A\u8C03\u7528\u521B\u5EFA\u7EC4\u4EF6\u7684\u51FD\u6570 createComponent</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span>
    <span class="token parameter">Ctor<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    context<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    tag</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base<span class="token punctuation">;</span>

    <span class="token comment">// plain options object: turn it into a constructor</span>
    <span class="token comment">// 1. \u521B\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

    data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// resolve constructor options in case global mixins are applied after</span>
    <span class="token comment">// component constructor creation</span>
    <span class="token comment">// 2. \u89E3\u6790\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u7684 options</span>
    <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

    <span class="token comment">// 3. \u5173\u952E\u6B65\u9AA4\uFF1A\u5BF9\u4E8E\u7EC4\u4EF6\uFF0C\u4F1A\u5C06 data.on \u6570\u636E\u5373 ASTElement.events \u6570\u636E\u5373\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5B58\u5165 listeners</span>
    <span class="token comment">// \u800C\u5C06 data.nativeOn \u6570\u636E\u5373 ASTElement.nativeEvents \u5373\u6DFB\u52A0\u4E86.native \u4FEE\u9970\u7B26\u7684\u4E8B\u4EF6\u5B58\u5165 data.on</span>
    <span class="token comment">// extract listeners, since these needs to be treated as</span>
    <span class="token comment">// child component listeners instead of DOM listeners</span>
    <span class="token keyword">var</span> listeners <span class="token operator">=</span> data<span class="token punctuation">.</span>on<span class="token punctuation">;</span>
    <span class="token comment">// replace with listeners with .native modifier</span>
    <span class="token comment">// so it gets processed during parent component patch.</span>
    data<span class="token punctuation">.</span>on <span class="token operator">=</span> data<span class="token punctuation">.</span>nativeOn<span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

    <span class="token comment">// install component management hooks onto the placeholder node</span>
    <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\uFF0C\u5305\u62EC init / prePatch / insert / destory\uFF0C\u5176\u4E2D init \u51FD\u6570\u4F1A\u4F7F\u7528 new Ctor \u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B</span>
    <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// return a placeholder vnode</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> tag<span class="token punctuation">;</span>
    <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token comment">// .native \u4FEE\u9970\u7B26\u7684\u539F\u751F\u4E8B\u4EF6\u5B58\u5165 vnode.data.on</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u5B58\u50A8 vnode.componentOptions.listeners</span>
      asyncFactory
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6E32\u67D32\uFF1Avm-update" tabindex="-1">\u6E32\u67D32\uFF1Avm._update <a class="header-anchor" href="#\u6E32\u67D32\uFF1Avm-update" aria-hidden="true">#</a></h2><p>vm._render \u51FD\u6570\u751F\u6210\u865A\u62DF DOM \u6811\u4E4B\u540E\uFF0C\u4F20\u5165 vm._update</p><p><code>vm._update =&gt; vm.__patch__ =&gt; patch =&gt; createElm</code></p><p>createElm \u51FD\u6570\u7684\u5185\u90E8\uFF0C\u7B2C\u4E00\u6B65\u603B\u662F\u8C03\u7528 createComponent \u51FD\u6570\u5C1D\u8BD5\u662F\u5426\u80FD\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5982\u679C\u4E0D\u80FD\u8FD4\u56DE fase\uFF0C\u6267\u884C\u6B63\u5E38\u5143\u7D20\u7684\u521B\u5EFA\u8FC7\u7A0B\u3002\u5982\u679C\u662F\u7EC4\u4EF6\uFF0C\u90A3\u5C31\u6267\u884C createComponent \u51FD\u6570\u5185\u90E8\u7684\u4E00\u7CFB\u5217\u903B\u8F91\uFF0C\u8FD4\u56DE true\uFF0Creturn \u9000\u51FA createElm \u51FD\u6570\u7684\u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
    <span class="token parameter">vnode<span class="token punctuation">,</span>
    insertedVnodeQueue<span class="token punctuation">,</span>
    parentElm<span class="token punctuation">,</span>
    refElm<span class="token punctuation">,</span>
    nested<span class="token punctuation">,</span>
    ownerArray<span class="token punctuation">,</span>
    index</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    
    <span class="token comment">// \u5C1D\u8BD5\u521B\u5EFA\u7EC4\u4EF6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6807\u51C6\u5143\u7D20\u7684\u5904\u7406</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">var</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
    <span class="token keyword">var</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          creatingElmInVPre<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUnknownElement$$1</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> creatingElmInVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token string">&#39;Unknown custom element: &lt;&#39;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&#39;&gt; - did you &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;register the component correctly? For recursive components, &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;make sure to provide the &quot;name&quot; option.&#39;</span><span class="token punctuation">,</span>
            vnode<span class="token punctuation">.</span>context
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>ns
        <span class="token operator">?</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ns<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
        <span class="token operator">:</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setScope</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u5143\u7D20\u5B50\u8282\u70B9</span>
        <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8C03\u7528\u5BF9\u5E94\u94A9\u5B50\u51FD\u6570</span>
          <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C06\u5143\u7D20\u63D2\u5165\u5F53\u524D\u7236\u5143\u7D20</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        creatingElmInVPre<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createComment</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u4ECE createElm \u51FD\u6570\u5F00\u59CB\uFF0C\u5206\u7EC4\u4EF6\u548C\u6807\u7B7E\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406\u903B\u8F91</p><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406" tabindex="-1">\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406 <a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6\u7684\u5904\u7406" aria-hidden="true">#</a></h2><p>vm._update \u9636\u6BB5 createComponet \u51FD\u6570\u4E2D\uFF0C\u5373\u8C03\u7528 init() \u51FD\u6570\u8FDB\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u8FC7\u7A0B\uFF0C\u8C03\u7528 <code>i(vnode, false /* hydrating */);</code>\uFF0C\u5B9E\u9645\u4E0A\u6267\u884C\u7684\u5C31\u662F componentVNodeHooks.init \u94A9\u5B50\u3002init \u94A9\u5B50\u51FD\u6570\u4E2D\u5728 vm._render \u9636\u6BB5\u7684 createComponent \u51FD\u6570\u4E2D\u6267\u884C installComponentHooks(data) \u51FD\u6570\u4E2D\u6DFB\u52A0\u7684\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
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
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u94A9\u5B50\u51FD\u6570 prePatch insert destory</span>
<span class="token punctuation">}</span>
</code></pre></div><p>init \u51FD\u6570\u8C03\u7528\u7684\u662F createComponentInstanceForVnode \u51FD\u6570</p><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
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
</code></pre></div><p>\u5728 createComponentInstanceForVnode \u51FD\u6570\u5185\u5B9E\u4F8B\u4E86\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5316 <code>new vnode.componentOptions.Ctor(options)</code></p><p>\u6CE8\u610F\u8FD9\u91CC <code>_parentVnode: vnode</code>\uFF0C\u90A3\u4E48\u5173\u4E8E\u539F\u751F\u4E8B\u4EF6\u7684\u5904\u7406\u51FD\u6570\u5C31\u53D8\u6210\u4E86\u5B58\u50A8\u5728 <code>_parentVnode.data.on</code> \u4E2D\uFF0C\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u90FD\u5728 <code>_parentVnode.componentOptions.listeners</code>\u3002</p><p>\u56E0\u4E3A Ctor \u7EE7\u627F\u4E8E Vue\uFF0C\u6240\u4EE5 new Ctor \u5B9E\u9645\u6267\u884C\u7684\u5C31\u662F Vue.prototype._init \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// a uid</span>
    vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid$3<span class="token operator">++</span><span class="token punctuation">;</span>

    
    <span class="token comment">// merge options</span>
    <span class="token comment">// \u5408\u5E76\u9009\u9879\u8FC7\u7A0B\u6839 vue \u5B9E\u4F8B\u548C\u7EC4\u4EF6 Vue \u5B9E\u4F8B\u533A\u5206\u5904\u7406</span>
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
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token punctuation">{</span>
      <span class="token function">initProxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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


    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\uFF0C\u5408\u5E76\u914D\u7F6E\u7684\u5904\u7406\u4E0D\u540C\uFF0C\u7EC4\u4EF6\u662F\u8C03\u7528 <code>initInternalComponent(vm, options)</code>\uFF0C\u5176\u4E2D\u5BF9\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u6709\u5173\u4EE3\u7801\uFF1A<code>opts._parentListeners = vnodeComponentOptions.listeners;</code></p><div class="language-js"><pre><code><span class="token comment">// \u6B64\u65F6\u7684\u5165\u53C2 options = vnode\uFF0C\u56E0\u4E3A i(vnode, false /* hydrating */)</span>
<span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// doing this because it&#39;s faster than dynamic enumeration.</span>
    <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

    <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
    <span class="token comment">// \u8FD9\u91CC\u62FF\u5230\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u5904\u7406\u51FD\u6570</span>
    opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
      opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5408\u5E76\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u7EE7\u627F\u6267\u884C\u51FD\u6570\u5B9E\u4F8B\u5316\uFF0C\u6267\u884C\u4E86 <code>initEvents(vm)</code> \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initEvents</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>_hasHookEvent <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token comment">// init parent attached events</span>
  <span class="token keyword">var</span> listeners <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_parentListeners<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateComponentListeners</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> listeners<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u62FF\u5230 listeners \u540E\uFF0C\u6267\u884C updateComponentListeners(vm, listeners) \u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">updateComponentListeners</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token punctuation">,</span>
  listeners<span class="token punctuation">,</span>
  oldListeners</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target <span class="token operator">=</span> vm<span class="token punctuation">;</span>
  <span class="token function">updateListeners</span><span class="token punctuation">(</span>listeners<span class="token punctuation">,</span> oldListeners <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> add<span class="token punctuation">,</span> remove$1<span class="token punctuation">,</span> createOnceHandler<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  target <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>updateListeners \u4E3B\u8981\u903B\u8F91\uFF1A 1.</p><ol><li>\u5BF9\u8C61\u65B0\u65E7\u4E8B\u4EF6\uFF0C\u786E\u5B9A\u662F\u6DFB\u52A0\u8FD8\u662F\u5220\u9664</li></ol><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">updateListeners</span> <span class="token punctuation">(</span>
    on<span class="token punctuation">,</span>
    oldOn<span class="token punctuation">,</span> <span class="token comment">// {}</span>
    add<span class="token punctuation">,</span>
    remove$$1<span class="token punctuation">,</span>
    createOnceHandler<span class="token punctuation">,</span>
    vm
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name<span class="token punctuation">,</span> def$$1<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> old<span class="token punctuation">,</span> event<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>name <span class="token keyword">in</span> on<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      def$$1 <span class="token operator">=</span> cur <span class="token operator">=</span> on<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
      old <span class="token operator">=</span> oldOn<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
      event <span class="token operator">=</span> <span class="token function">normalizeEvent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u6790\u4E4B\u524D\u51E0\u4E2A\u7279\u522B\u4FEE\u9970\u7B26\u4E8B\u4EF6\u7684\u5904\u7406 \`passive =&gt; &amp;name   once =&gt; ~name   capture =&gt; !name\`\uFF0C</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&quot;Invalid handler for event \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;: got &quot;</span> <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>old<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>fns<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cur <span class="token operator">=</span> on<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createFnInvoker</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>once<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cur <span class="token operator">=</span> on<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createOnceHandler</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>name<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> event<span class="token punctuation">.</span>capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">add</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>name<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> event<span class="token punctuation">.</span>capture<span class="token punctuation">,</span> event<span class="token punctuation">.</span>passive<span class="token punctuation">,</span> event<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">!==</span> old<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        old<span class="token punctuation">.</span>fns <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        on<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> old<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u65E7\u4E8B\u4EF6 oldOn \u4E2D\u6709\uFF0C\u4F46\u5728\u65B0\u4E8B\u4EF6on\u6CA1\u6709\u7684\uFF0C\u5E94\u8BE5\u5220\u9664</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>name <span class="token keyword">in</span> oldOn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>on<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event <span class="token operator">=</span> <span class="token function">normalizeEvent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">remove$$1</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>name<span class="token punctuation">,</span> oldOn<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD9\u91CC\u5173\u6CE8\u8FD8\u662F add \u548C remove$1 \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> once</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>once<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">remove</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5373 Vue \u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u65F6\u5B9A\u4E49\u7684\u4E8B\u4EF6\u4E2D\u5FC3\uFF1A\u5373\u628A\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u90FD\u5B58\u50A8\u5728 vm._events \u5C5E\u6027\u4E2D\u3002</p><blockquote><p>vm._events \u5728 _init \u51FD\u6570\u4E2D\u7684 initEvents \u5B9A\u4E49\uFF0C\u89C1\u4E0A\u9762\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">eventsMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> hookRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^hook:</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$on</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> event<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>event<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// optimize hook:event cost by using a boolean flag marked at registration</span>
        <span class="token comment">// instead of a hash lookup</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hookRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vm<span class="token punctuation">.</span>_hasHookEvent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$once</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">on</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      on<span class="token punctuation">.</span>fn <span class="token operator">=</span> fn<span class="token punctuation">;</span>
      vm<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> on<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$off</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token comment">// all</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>_events <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> vm
      <span class="token punctuation">}</span>
      <span class="token comment">// array of events</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> event<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i$1<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vm<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>event<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> vm
      <span class="token punctuation">}</span>
      <span class="token comment">// specific event</span>
      <span class="token keyword">var</span> cbs <span class="token operator">=</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cbs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vm
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> vm
      <span class="token punctuation">}</span>
      <span class="token comment">// specific handler</span>
      <span class="token keyword">var</span> cb<span class="token punctuation">;</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cb <span class="token operator">=</span> cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cb <span class="token operator">===</span> fn <span class="token operator">||</span> cb<span class="token punctuation">.</span>fn <span class="token operator">===</span> fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          cbs<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$emit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">var</span> lowerCaseEvent <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lowerCaseEvent <span class="token operator">!==</span> event <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>lowerCaseEvent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">tip</span><span class="token punctuation">(</span>
            <span class="token string">&quot;Event \\&quot;&quot;</span> <span class="token operator">+</span> lowerCaseEvent <span class="token operator">+</span> <span class="token string">&quot;\\&quot; is emitted in component &quot;</span> <span class="token operator">+</span>
            <span class="token punctuation">(</span><span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; but the handler is registered for \\&quot;&quot;</span> <span class="token operator">+</span> event <span class="token operator">+</span> <span class="token string">&quot;\\&quot;. &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;Note that HTML attributes are case-insensitive and you cannot use &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;v-on to listen to camelCase events when using in-DOM templates. &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;You should probably use \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">hyphenate</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot; instead of \\&quot;&quot;</span> <span class="token operator">+</span> event <span class="token operator">+</span> <span class="token string">&quot;\\&quot;.&quot;</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> cbs <span class="token operator">=</span> vm<span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cbs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cbs <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token function">toArray</span><span class="token punctuation">(</span>cbs<span class="token punctuation">)</span> <span class="token operator">:</span> cbs<span class="token punctuation">;</span>
        <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token string">&quot;event handler for \\&quot;&quot;</span> <span class="token operator">+</span> event <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> cbs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeWithErrorHandling</span><span class="token punctuation">(</span>cbs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> args<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> vm
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406" tabindex="-1">\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406 <a class="header-anchor" href="#\u6807\u51C6\u5143\u7D20\u7684\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u8FF0\u5206\u652F\u7247 vm._update =&gt; patch =&gt; createElm \u51FD\u6570\u4E2D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
    <span class="token parameter">vnode<span class="token punctuation">,</span>
    insertedVnodeQueue<span class="token punctuation">,</span>
    parentElm<span class="token punctuation">,</span>
    refElm<span class="token punctuation">,</span>
    nested<span class="token punctuation">,</span>
    ownerArray<span class="token punctuation">,</span>
    index</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    
    <span class="token comment">// \u5C1D\u8BD5\u521B\u5EFA\u7EC4\u4EF6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6807\u51C6\u5143\u7D20\u7684\u5904\u7406</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">var</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
    <span class="token keyword">var</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          creatingElmInVPre<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUnknownElement$$1</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> creatingElmInVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token string">&#39;Unknown custom element: &lt;&#39;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&#39;&gt; - did you &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;register the component correctly? For recursive components, &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;make sure to provide the &quot;name&quot; option.&#39;</span><span class="token punctuation">,</span>
            vnode<span class="token punctuation">.</span>context
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>ns
        <span class="token operator">?</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ns<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
        <span class="token operator">:</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setScope</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u5143\u7D20\u5B50\u8282\u70B9</span>
        <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8C03\u7528\u5BF9\u5E94\u94A9\u5B50\u51FD\u6570</span>
          <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C06\u5143\u7D20\u63D2\u5165\u5F53\u524D\u7236\u5143\u7D20</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        creatingElmInVPre<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createComment</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u6807\u7B7E\u5143\u7D20\uFF0C\u5C31\u4F1A\u7EE7\u7EED\u6267\u884C\u5230\uFF1A</p><div class="language-js"><pre><code><span class="token comment">//1. \u521B\u5EFA\u4E00\u4E2A\u771F\u5B9EDOM\u5143\u7D20</span>
vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>

<span class="token comment">//2. \u5FAA\u73AF\u5904\u7406\u5143\u7D20\u5B50\u8282\u70B9\u521B\u5EFA</span>
<span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 3. \u521D\u59CB\u5316\u5219\u521B\u5EFA\u5143\u7D20 vnode.elm \u7684\u5404\u79CD\u5C5E\u6027\uFF0C\u5373\u8C03\u7528\u5BF9\u5E94\u5143\u7D20\u521B\u5EFA\u7684\u94A9\u5B50\u51FD\u6570</span>
  <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 4. \u5C06\u5219\u521B\u5EFA\u7684\u5143\u7D20\u63D2\u5165\u5F53\u524D\u7236\u5143\u7D20</span>
<span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5176\u4E2D <code>invokeCreateHooks(vnode, insertedVnodeQueue)</code> \u51FD\u6570\u4F1A\u6267\u884C\u5143\u7D20\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u5373\u5404\u7C7B\u5C5E\u6027\u548C\u4E8B\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">invokeCreateHooks</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">;</span> <span class="token comment">// Reuse variable</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>create<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>insert<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> insertedVnodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D\uFF0C\u5173\u952E\u4EE3\u7801\u662F<code>cbs.create[i$1](emptyNode, vnode);</code> cbs\u53D8\u91CF\u662F\u5728\u521B\u5EFA patch \u51FD\u6570\u65F6\u5C31\u5B9A\u4E49\u597D\u4E86 <code>var patch = createPatchFunction(backend)</code></p><div class="language-js"><pre><code><span class="token keyword">var</span> modules <span class="token operator">=</span> platformModules<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>baseModules<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> patch <span class="token operator">=</span> <span class="token function">createPatchFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nodeOps</span><span class="token operator">:</span> nodeOps<span class="token punctuation">,</span> <span class="token literal-property property">modules</span><span class="token operator">:</span> modules <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createPatchFunction</span> <span class="token punctuation">(</span><span class="token parameter">backend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
  <span class="token keyword">var</span> cbs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> modules <span class="token operator">=</span> backend<span class="token punctuation">.</span>modules<span class="token punctuation">;</span>
  <span class="token keyword">var</span> nodeOps <span class="token operator">=</span> backend<span class="token punctuation">.</span>nodeOps<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> modules<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u53EF\u4EE5\u770B\u5230\u5173\u6CE8\u662F modules \u5B9A\u4E49\uFF0C\u5B83\u5305\u542B\u4E24\u90E8\u5206\uFF1AplatformModules \u548C baseModules</p><div class="language-js"><pre><code><span class="token keyword">var</span> hooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;remove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;destroy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> baseModules <span class="token operator">=</span> <span class="token punctuation">[</span>
    ref<span class="token punctuation">,</span>
    directives
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> platformModules <span class="token operator">=</span> <span class="token punctuation">[</span>
  attrs<span class="token punctuation">,</span>
  klass<span class="token punctuation">,</span>
  events<span class="token punctuation">,</span>
  domProps<span class="token punctuation">,</span>
  style<span class="token punctuation">,</span>
  transition
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 modules \u4E2D\u5B9A\u4E49\u4E86\u5143\u7D20\u4E2D\u5404\u4E2A\u5C5E\u6027\u5728\u5404\u4E2A\u94A9\u5B50\u51FD\u6570\u7684\u5904\u7406\u3002\u5C31\u672C\u8282\u4E8B\u4EF6\u4E3E\u4F8B\u6765\u8BF4\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">create</span><span class="token operator">:</span> updateDOMListeners<span class="token punctuation">,</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> updateDOMListeners
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> attrs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">create</span><span class="token operator">:</span> updateAttrs<span class="token punctuation">,</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> updateAttrs
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7ECF\u8FC7 createPatchFunction \u51FD\u6570\u4E2D\u90A3\u6BB5\u4EE3\u7801\u8F6C\u5316\u540E\uFF0Ccbs \u5BF9\u8C61\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> cbs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">create</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    updateAttrs<span class="token punctuation">,</span>
    updateDOMListeners
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    updateAttrs<span class="token punctuation">,</span>
    updateDOMListeners
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">activate</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">remove</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">destory</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\u5728 createPatchFunction \u51FD\u6570\u751F\u6210patch\u51FD\u6570\u524D\u5C31\u5904\u7406\u597D\u4E86\uFF0C\u7136\u540E\u5728\u8C03\u7528 patch =&gt; createElm =&gt; invokeCreateHooks \u51FD\u6570\u4E2D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">invokeCreateHooks</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6267\u884C\u5BF9\u5E94\u94A9\u5B50\u51FD\u6570</span>
    cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">;</span> <span class="token comment">// Reuse variable</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>create<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>insert<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> insertedVnodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>cbs.create[i$1](emptyNode, vnode);</code>\u5373\u4F1A\u6267\u884C\u7EC4\u4EF6\u5468\u671F\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u5373 cbs.create \u5185\u7684\u5168\u90E8\u94A9\u5B50\u3002\u5BF9\u4E8B\u4EF6\u800C\u8A00\uFF0C\u4F1A\u8C03\u7528 updateDOMListeners \u51FD\u6570\uFF1A</p><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">updateDOMListeners</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> on <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> oldOn <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>on <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    target$1 <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">;</span>
    <span class="token function">normalizeEvents</span><span class="token punctuation">(</span>on<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateListeners</span><span class="token punctuation">(</span>on<span class="token punctuation">,</span> oldOn<span class="token punctuation">,</span> add$1<span class="token punctuation">,</span> remove$2<span class="token punctuation">,</span> createOnceHandler$1<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    target$1 <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>updateListeners \u51FD\u6570\u4E0A\u9762\u5728\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4E2D\u6709\u8BF4\u8FC7\uFF0C\u8FD9\u91CC\u5173\u6CE8 add$1 \u548C remove$2 \u51FD\u6570\uFF0C\u5373\u8C03\u7528\u539F\u751F DOM \u7684API\u6CE8\u518C\u4E8B\u4EF6\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">handler</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token literal-property property">once</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">capture</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">passive</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  handler <span class="token operator">=</span> <span class="token function">withMacroTask</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token comment">// \u539F\u751F DOM \u4E8B\u4EF6\u5F02\u6B65\u5904\u7406\u90FD\u91C7\u7528\u5B8F\u4EFB\u52A1\uFF0C\u6240\u4EE5\u5904\u7406\u53E5\u67C4\u9700\u8981\u7528 withMacroTask \u51FD\u6570\u5305\u88F9\u4E00\u5C42\u3002</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>once<span class="token punctuation">)</span> handler <span class="token operator">=</span> <span class="token function">createOnceHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">,</span> event<span class="token punctuation">,</span> capture<span class="token punctuation">)</span>
  target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    event<span class="token punctuation">,</span>
    handler<span class="token punctuation">,</span>
    supportsPassive
      <span class="token operator">?</span> <span class="token punctuation">{</span> capture<span class="token punctuation">,</span> passive <span class="token punctuation">}</span>
      <span class="token operator">:</span> capture
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">remove</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">handler</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token literal-property property">capture</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  _target<span class="token operator">?</span><span class="token operator">:</span> HTMLElement</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>_target <span class="token operator">||</span> target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>
    event<span class="token punctuation">,</span>
    handler<span class="token punctuation">.</span>_withTask <span class="token operator">||</span> handler<span class="token punctuation">,</span>
    capture
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5173\u4E8E withMacroTask \u51FD\u6570\uFF0C\u8BF7\u67E5\u770B <a href="./vue-source-code-6-extension-3-nextTick.html">nextTick</a></p></blockquote>`,94),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{v as __pageData,f as default};
