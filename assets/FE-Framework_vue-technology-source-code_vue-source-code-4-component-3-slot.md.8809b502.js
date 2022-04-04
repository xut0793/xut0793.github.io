import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const y='{"title":"\u7EC4\u4EF63\uFF1A\u7EC4\u4EF6\u63D2\u69FD slot","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F","slug":"\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F"},{"level":2,"title":"\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790","slug":"\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790"},{"level":2,"title":"\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1","slug":"\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-4-component-3-slot.md"}',p={},o=t(`<h1 id="\u7EC4\u4EF63\uFF1A\u7EC4\u4EF6\u63D2\u69FD-slot" tabindex="-1">\u7EC4\u4EF63\uFF1A\u7EC4\u4EF6\u63D2\u69FD slot <a class="header-anchor" href="#\u7EC4\u4EF63\uFF1A\u7EC4\u4EF6\u63D2\u69FD-slot" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F">\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F</a></li><li><a href="#\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790">\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790</a></li><li><a href="#\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1">\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1</a></li></ul></div></p><h2 id="\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F" tabindex="-1">\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F <a class="header-anchor" href="#\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u5F62\u5F0F" aria-hidden="true">#</a></h2><p>\u5173\u4E8E\u7EC4\u4EF6\u63D2\u69FD\u7684\u5177\u4F53\u4F7F\u7528\u53EF\u80FD\u53C2\u89C1 <a href="./../Vue/vue-tutorial/vue-28-component-slot.html">\u7EC4\u4EF6\u63D2\u69FD</a></p><p>\u7B80\u5355\u603B\u7ED3\u4E0B\u7EC4\u4EF6\u63D2\u69FD\u4F7F\u7528\uFF1A</p><ul><li>\u7EC4\u4EF6\u63D2\u69FD slot \u5206\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD</li><li>\u7EC4\u4EF6\u63D2\u69FD\u7684\u4F7F\u7528\u57FA\u672C\u5206\u4E3A\uFF1A\u7EC4\u4EF6\u5185\u5B9A\u4E49\u63D2\u69FD\u548C\u7EC4\u4EF6\u5916\u4F7F\u7528\u63D2\u69FD v-slot</li></ul><div class="language-js"><pre><code><span class="token comment">// \u7EC4\u4EF6\u5185\u5B9A\u4E49\u63D2\u69FD</span>
<span class="token keyword">const</span> customSection <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;section&gt;
      &lt;header&gt;
      // \u5177\u540D\u548C\u4F5C\u7528\u57DF\u63D2\u69FD
      &lt;slot name=&quot;title&quot; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt;
      &lt;/header&gt;

      &lt;main&gt;
      // \u9ED8\u8BA4\u63D2\u69FD
      &lt;slot&gt;&lt;/slot&gt;
      &lt;/main&gt;

      &lt;footer&gt;
      // \u5177\u540D\u63D2\u69FD
      &lt;slot name=&quot;time&quot;&gt;&lt;/slot&gt;
      &lt;/footer&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">innerTitle</span><span class="token operator">:</span> <span class="token string">&#39;\u5199\u5728\u5B50\u7EA7\u7684\u6807\u9898&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7236\u7EC4\u4EF6\u5185\u63D2\u69FD\u4F7F\u7528\uFF1Av-slot \u53EF\u4EE5\u7B80\u5199 #</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;custom-section&gt;
              &lt;template v-slot:title=&quot;slotProp&quot;&gt;{{ slotProp.title }}&lt;/template&gt;
              &lt;template&gt;\u8FD9\u662F\u6BB5\u843D\u6B63\u6587\u90E8\u5206\uFF0C\u5185\u5BB9\u5F88\u957F\uFF0C\u8FD9\u91CC\u5C31\u7701\u7565\u4E86......&lt;/template&gt;
              &lt;template #time&gt;2019-5-26&lt;/template&gt;
            &lt;/custom-section&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    customSection
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790" tabindex="-1">\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u7684\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u4EE5\u8FD9\u6BB5\u5305\u542B\u63D2\u69FD\u6027\u8D28\u8F83\u5168\u7684\u4EE3\u7801\uFF0C\u770B\u4E0B\u89E3\u6790\u7684\u6E90\u7801\u662F\u5982\u4E0B\u5904\u7406\u7684</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ slotProp.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4ECE\u524D\u7AEF\u51E0\u4E2A\u7AE0\u8282\u6211\u4EEC\u4E86\u89E3\u89E3\u6790\u51FD\u6570\u7684\u8DEF\u5F84\u662F\u8FD9\u6837\u7684\uFF1A</p><p><code>$mount =&gt; createToFunction =&gt; baseCompiler =&gt; parse =&gt; parseHTML =&gt; parseStartTag =&gt; handleStartTag =&gt; options.start =&gt; closeElement =&gt; processElement =&gt; processSlotContent</code></p><p>\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u5728\u88AB options.start \u51FD\u6570\u5185\u8C03\u7528 createASTElement(tag, attrs, currentParent) \u751F\u6210\u7684 ASTElement \u5BF9\u8C61\u7ED3\u6784\u5927\u6982\u5982\u4E0B\uFF1A</p><blockquote><p>\u5173\u4E8E\u8FD9\u6BB5\u4E0D\u6E05\u695A\u7684\u53EF\u4EE5\u67E5\u770B <a href="./vue-source-code-2-compile-1-parse.html">\u6A21\u677F\u7F16\u8BD1</a></p></blockquote><div class="language-js"><pre><code>ASTElement <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;v-slot:title&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;slotProp&#39;</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;v-slot:title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;slotProp&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> customSection_vnode\uFF0C
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{ slotProp.title }}&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expression</span><span class="token operator">:</span> <span class="token string">&quot;_s(slotProp.title)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">85</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">65</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u751F\u6210 ASTElement \u4E4B\u540E\u8C03\u7528 closeElement =&gt; processElement =&gt; processSlotContent</p><p>vue \u65E9\u671F\u7248\u672C \u547D\u540D\u7528 <code>&lt;template slot=&quot;xxx&quot;&gt;</code>, <code>&lt;div slot-scope=&quot;xxx&quot;&gt;</code>\uFF0Cvue 2.6 \u4E4B\u540E\u589E\u52A0 v-slot \u8BED\u6CD5\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ slotProp.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8FD9\u91CC\u6211\u4EEC\u5173\u6CE8 v-slot \u6307\u4EE4\u7684\u89E3\u6790</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">processSlotContent</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> slotScope<span class="token punctuation">;</span>
  <span class="token comment">// scope slot-scope \u90FD\u662F v-slot \u8BED\u6CD5\u51FA\u73B0\u4E4B\u524D\u7684\u8BED\u6CD5</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token comment">// 2.6 v-slot syntax</span>
  <span class="token comment">// &lt;template v-slot:title=&quot;slotProp&quot;&gt;{{ slotProp.title }}&lt;/template&gt;</span>
  <span class="token comment">// ASTElement \u5143\u7D20\u7684 attrsList = {name: &quot;v-slot:title&quot;, value: &quot;slotProp&quot;, start: 41, end: 64}</span>
  <span class="token comment">//                   attrsMap = {&quot;v-slot:title&quot;, &quot;slotProp&quot;}</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;template&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// v-slot on &lt;template&gt;</span>
      <span class="token keyword">var</span> slotBinding <span class="token operator">=</span> <span class="token function">getAndRemoveAttrByRegex</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> slotRE<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  var slotRE = /^v-slot(:|$)|^#/;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>slotBinding<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// slotBinding = {name: &quot;v-slot:title&quot;, value: &quot;slotProp&quot;, start: 41, end: 64}</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotTarget <span class="token operator">||</span> el<span class="token punctuation">.</span>slotScope<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn$2</span><span class="token punctuation">(</span>
              <span class="token string">&quot;Unexpected mixed usage of different slot syntaxes.&quot;</span><span class="token punctuation">,</span>
              el
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>parent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">maybeComponent</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn$2</span><span class="token punctuation">(</span>
              <span class="token string">&quot;&lt;template v-slot&gt; can only appear at the root level inside &quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;the receiving component&quot;</span><span class="token punctuation">,</span>
              el
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token function">getSlotName</span><span class="token punctuation">(</span>slotBinding<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ref={name: &quot;&quot;title&quot;&quot;, dynamic: false}</span>
        <span class="token keyword">var</span> name <span class="token operator">=</span> ref<span class="token punctuation">.</span>name<span class="token punctuation">;</span>  <span class="token comment">// name=&#39;&quot;title&quot;&#39;</span>
        <span class="token keyword">var</span> dynamic <span class="token operator">=</span> ref<span class="token punctuation">.</span>dynamic<span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token comment">// \u6B64\u65F6\u5C06\u63D2\u69FD\u76F8\u5173\u4FE1\u606F\u8D4B\u503C\u5230 ASTElement \u5BF9\u8C61\u5C5E\u6027\u4E0A\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u4F1A\u5728\u5B50\u7EC4\u4EF6 &lt;slot name=&quot;title&quot; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt; \u5728 proecessSlotContent \u4E0A\u4F1A\u7528\u5230</span>
        el<span class="token punctuation">.</span>slotTarget <span class="token operator">=</span> name<span class="token punctuation">;</span>
        el<span class="token punctuation">.</span>slotTargetDynamic <span class="token operator">=</span> dynamic<span class="token punctuation">;</span>
        el<span class="token punctuation">.</span>slotScope <span class="token operator">=</span> slotBinding<span class="token punctuation">.</span>value <span class="token operator">||</span> emptySlotScopeToken<span class="token punctuation">;</span> <span class="token comment">// force it into a scoped slot for perf</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// v-slot on component, denotes default slot</span>
      <span class="token comment">// \u5F53\u63D2\u69FD\u53EA\u6709\u9ED8\u8BA4\u63D2\u69FD\u65F6\uFF0C\u53EF\u4EE5\u5C06 v-slot \u5199\u5728\u7236\u7EC4\u4EF6\u4E0A</span>
      <span class="token comment">// e.g. &lt;child v-slot=&quot;slotProp&quot;&gt;&lt;/child&gt;,&lt;child #default=&quot;slotProp&quot;&gt;&lt;/child&gt;</span>
      <span class="token keyword">var</span> slotBinding$1 <span class="token operator">=</span> <span class="token function">getAndRemoveAttrByRegex</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> slotRE<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>slotBinding$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">maybeComponent</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn$2</span><span class="token punctuation">(</span>
              <span class="token string">&quot;v-slot can only be used on components or &lt;template&gt;.&quot;</span><span class="token punctuation">,</span>
              slotBinding$1
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotScope <span class="token operator">||</span> el<span class="token punctuation">.</span>slotTarget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn$2</span><span class="token punctuation">(</span>
              <span class="token string">&quot;Unexpected mixed usage of different slot syntaxes.&quot;</span><span class="token punctuation">,</span>
              el
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn$2</span><span class="token punctuation">(</span>
              <span class="token string">&quot;To avoid scope ambiguity, the default slot should also use &quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;&lt;template&gt; syntax when there are other named slots.&quot;</span><span class="token punctuation">,</span>
              slotBinding$1
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// add the component&#39;s children to its default slot</span>
        <span class="token keyword">var</span> slots <span class="token operator">=</span> el<span class="token punctuation">.</span>scopedSlots <span class="token operator">||</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>scopedSlots <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> ref$1 <span class="token operator">=</span> <span class="token function">getSlotName</span><span class="token punctuation">(</span>slotBinding$1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> name$1 <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token keyword">var</span> dynamic$1 <span class="token operator">=</span> ref$1<span class="token punctuation">.</span>dynamic<span class="token punctuation">;</span>
        <span class="token keyword">var</span> slotContainer <span class="token operator">=</span> slots<span class="token punctuation">[</span>name$1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createASTElement</span><span class="token punctuation">(</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        slotContainer<span class="token punctuation">.</span>slotTarget <span class="token operator">=</span> name$1<span class="token punctuation">;</span>
        slotContainer<span class="token punctuation">.</span>slotTargetDynamic <span class="token operator">=</span> dynamic$1<span class="token punctuation">;</span>
        slotContainer<span class="token punctuation">.</span>children <span class="token operator">=</span> el<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>c<span class="token punctuation">.</span>slotScope<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span>parent <span class="token operator">=</span> slotContainer<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        slotContainer<span class="token punctuation">.</span>slotScope <span class="token operator">=</span> slotBinding$1<span class="token punctuation">.</span>value <span class="token operator">||</span> emptySlotScopeToken<span class="token punctuation">;</span>
        <span class="token comment">// remove children as they are returned from scopedSlots now</span>
        el<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// mark el non-plain so data gets generated</span>
        el<span class="token punctuation">.</span>plain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * slotRE = /^v-slot(:|$)|^#/;
 * binding = {name: &quot;v-slot:title&quot;, value: &quot;slotProp&quot;, start: 41, end: 64}
 */</span>
<span class="token keyword">function</span> <span class="token function">getSlotName</span><span class="token punctuation">(</span><span class="token parameter">binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> binding<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>slotRE<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// title</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9ED8\u8BA4\u63D2\u69FD\u8C03\u7528 &lt;template&gt;\u8FD9\u662F\u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB9&lt;/template&gt;</span>
    <span class="token comment">// binding.name = undefined \u5373\u8D4B\u503C\u4E3A default</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>binding<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      name <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">warn$2</span><span class="token punctuation">(</span>
        <span class="token string">&quot;v-slot shorthand syntax requires a slot name.&quot;</span><span class="token punctuation">,</span>
        binding
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dynamicArgRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// var dynamicArgRE = /^\\[.*\\]$/;</span>
    <span class="token comment">// dynamic [name]</span>
    <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">dynamic</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token comment">// static name</span>
    <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token string">&quot;\\&quot;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">dynamic</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6BCF\u4E2A\u63D2\u69FD\u5143\u7D20 teplate \u7F16\u8BD1\u7ED3\u675F\u540E\uFF0C\u5728 closeElement \u5EFA\u7ACB\u7236\u5B50\u5173\u7CFB\u524D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">closeElement</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element <span class="token operator">=</span> processElement

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token comment">// \u5EFA\u7ACB\u7236\u5B50\u5D4C\u5957\u5173\u7CFB</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentParent <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>element<span class="token punctuation">.</span>forbidden<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>elseif <span class="token operator">||</span> element<span class="token punctuation">.</span>else<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">processIfConditions</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> currentParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>slotScope<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u53EA\u6709\u5177\u540D\u63D2\u69FD\u6216\u4F5C\u7528\u57DF\u63D2\u69FD\u624D\u4F1A\u6709 slotScope \u51FD\u6570\u3002\u6240\u4EE5\u6B64\u6B65\u9AA4\u53EA\u5904\u7406\u8FD9\u4E24\u4E2D\u63D2\u69FD\uFF0C\u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB9\u5B58\u50A8\u5728\u7EC4\u4EF6\u7684\u5B50\u8282\u70B9 children\uFF0C\u4F1A\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\u5408\u5E76\u914D\u7F6E\u4E2D\u5904\u7406\u5230 vm.slots \u4E2D</span>
        <span class="token comment">// \u5982\u679C\u6B64\u65F6\u7EC4\u4EF6\u662F\u63D2\u69FD\u5143\u7D20\uFF0C\u5373\u5B58\u50A8 slotScope\uFF0C\u9700\u8981\u5411\u7236\u7EC4\u4EF6\u6DFB\u52A0 scopedSlots</span>
        <span class="token keyword">var</span> name <span class="token operator">=</span> element<span class="token punctuation">.</span>slotTarget <span class="token operator">||</span> <span class="token string">&#39;&quot;default&quot;&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// v-slot=&quot;slotProp&quot;\uFF0C\u6B64\u65F6\u547D\u540D\u4E3A default</span>
        <span class="token punctuation">(</span>currentParent<span class="token punctuation">.</span>scopedSlots <span class="token operator">||</span> <span class="token punctuation">(</span>currentParent<span class="token punctuation">.</span>scopedSlots <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      currentParent<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      element<span class="token punctuation">.</span>parent <span class="token operator">=</span> currentParent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u5728 parse \u9636\u6BB5\u5B8C\u6210\u540E\uFF0C\u5305\u542B\u63D2\u69FD\u7684\u7EC4\u4EF6\u89E3\u6790\u540E\u751F\u6210\u7684\u7EC4\u4EF6 ASTElemnt \u5BF9\u8C61\uFF1A</p><div class="language-js"><pre><code>ASTElemnt_component <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span><span class="token string">&#39;custom-section&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">childrend</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;v-slot:title&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;slotProp&#39;</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;v-slot:title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;slotProp&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slotTarget</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slotTargetDynamic</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slotScope</span><span class="token operator">:</span> <span class="token string">&quot;slotProp&quot;</span>
      <span class="token literal-property property">parent</span><span class="token operator">:</span> customSection_vnode\uFF0C
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;{{ slotProp.title }}&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">expression</span><span class="token operator">:</span> <span class="token string">&quot;_s(slotProp.title)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span>
          <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">85</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">65</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rawAttrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;title&#39;</span><span class="token operator">:</span> title_vnode<span class="token punctuation">,</span>
    <span class="token string-property property">&#39;time&#39;</span><span class="token operator">:</span> time_vnode
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>parse \u9636\u6BB5\u5B8C\u6210\u540E\uFF0C\u751F\u6210 ast \u6811\uFF0C\u518D\u4F20\u7ED9 <code>optimize(ast, options)</code> \u4F18\u5316\u540E\uFF0C\u4F1A\u8C03\u7528 <code>generate(ast, options)</code></p><p>\u51FD\u6570\u8C03\u7528\u8DEF\u5F84\uFF1A<code>generate =&gt; genElement =&gt; genData =&gt; genScopedSlots</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">genData</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token comment">// scoped slots</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token function">genScopedSlots</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">genScopedSlots</span> <span class="token punctuation">(</span>
  el<span class="token punctuation">,</span>
  slots<span class="token punctuation">,</span> <span class="token comment">// scopedSlots: { &#39;title&#39;: title_vnode, &#39;time&#39;: time_vnode}</span>
  state
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">var</span> generatedSlots <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>slots<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">genScopedSlot</span><span class="token punctuation">(</span>slots<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;scopedSlots:_u([&quot;</span> <span class="token operator">+</span> generatedSlots <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>needsForceUpdate <span class="token operator">?</span> <span class="token string">&quot;,null,true&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">!</span>needsForceUpdate <span class="token operator">&amp;&amp;</span> needsKey <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;,null,false,&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">hash</span><span class="token punctuation">(</span>generatedSlots<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6CE8\u610F\u6B64\u65F6 genScopedSlot</span>
<span class="token keyword">function</span> <span class="token function">genScopedSlot</span> <span class="token punctuation">(</span> <span class="token parameter">el<span class="token punctuation">,</span>  state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> isLegacySyntax <span class="token operator">=</span> el<span class="token punctuation">.</span>attrsMap<span class="token punctuation">[</span><span class="token string">&#39;slot-scope&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>if <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>ifProcessed <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isLegacySyntax<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genIf</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">,</span> genScopedSlot<span class="token punctuation">,</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>for <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>forProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genFor</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">,</span> genScopedSlot<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// slotScope = &quot;slotProp&quot;</span>
  <span class="token keyword">var</span> slotScope <span class="token operator">=</span> el<span class="token punctuation">.</span>slotScope <span class="token operator">===</span> emptySlotScopeToken <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotScope<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u5C06\u5177\u540D\u63D2\u69FD\u6216\u4F5C\u7528\u57DF\u63D2\u69FD\u5305\u88C5\u6210\u6267\u884C\u51FD\u6570\uFF1Afn = &quot;function(slotProp){return [_v(_s(slotProp.title))]}&quot;</span>
  <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token string">&quot;function(&quot;</span> <span class="token operator">+</span> slotScope <span class="token operator">+</span> <span class="token string">&quot;){&quot;</span> <span class="token operator">+</span>
    <span class="token string">&quot;return &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;template&#39;</span>
      <span class="token operator">?</span> el<span class="token punctuation">.</span>if <span class="token operator">&amp;&amp;</span> isLegacySyntax
        <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>if<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)?&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:undefined&quot;</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;undefined&#39;</span>
      <span class="token operator">:</span> <span class="token function">genElement</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// reverse proxy v-slot without scope on this.$slots</span>
  <span class="token keyword">var</span> reverseProxy <span class="token operator">=</span> slotScope <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;,proxy:true&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;{key:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>slotTarget <span class="token operator">||</span> <span class="token string">&quot;\\&quot;default\\&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,fn:&quot;</span> <span class="token operator">+</span> fn <span class="token operator">+</span> reverseProxy <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u5728\u7236\u7EC4\u4EF6\u5B8C\u6210\u6A21\u677F\u7F16\u8BD1 generate \u51FD\u6570\u751F\u6210\u7684\u4EE3\u7801\u5B57\u7B26\u4E32\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">with</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;custom-section&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token function">_u</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">slotProp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token function">_s</span><span class="token punctuation">(</span>slotProp<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;2019-5-26&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u6BB5\u843D\u6B63\u6587\u90E8\u5206\uFF0C\u5185\u5BB9\u5F88\u957F\uFF0C\u8FD9\u91CC\u5C31\u7701\u7565\u4E86......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u4E2A\u63D2\u69FD\u4F7F\u7528\u5B9E\u9645\u90FD\u4F1A\u8F6C\u6362\u6210\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u3002\u4F5C\u7528\u57DF\u63D2\u69FD\u5411\u4E0A\u4F20\u9012\u7684\u53C2\u6570\u4F1A\u4F5C\u4E3A\u5B9E\u53C2\u4F20\u5165\u3002</p><p>\u5230\u6B64\u9636\u6BB5\uFF0C\u7236\u7EC4\u4EF6\u4E0A\u4F7F\u7528 customSection \u7EC4\u4EF6\u5B8C\u6210\u4E86 template \u6A21\u677F\u7F16\u8BD1\u3002\u63A5\u4E0B\u6765\u4F1A\u8C03\u7528\u6267\u884C$mount \u51FD\u6570\u6700\u540E\u7684 <code>mount.call(this, el, hydrating) =&gt; mountComponent =&gt; updateComponent =&gt; vm._update(vm._render()) =&gt; _createElement</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter">context<span class="token punctuation">,</span>
  tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  normalizationType</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> Ctor<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u7701\u7565\u4EE3\u7801</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token operator">!</span>data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u56E0\u4E3A customSelection \u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4ECE vm.$optioins.components = {customSection} \u62FF\u5230\u7EC4\u4EF6\u7684 export default \u5BFC\u51FA\u7684 options \u5BF9\u8C61,\u6216\u8005\u76F4\u63A5\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570</span>
      <span class="token comment">// \u672C\u4F8B\u4F20\u5165\u7684\u662F Vue.extend()\u7684\u7ED3\u679C\uFF0C\u5373\u7EC4\u4EF6\u6784\u9020\u51FD\u6570</span>
      <span class="token comment">// component</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u7701\u7565\u4EE3\u7801</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u7701\u7565\u4EE3\u7801</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token parameter">Ctor<span class="token punctuation">,</span>  data<span class="token punctuation">,</span>  context<span class="token punctuation">,</span>  children<span class="token punctuation">,</span>  tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token comment">// \u7EC4\u4EF6\u6807\u7B7E\u4E0A\u7684\u6240\u6709\u5C5E\u6027\u3001\u4E8B\u4EF6\u3001\u6307\u4EE4\u7B49\u5728\u7F16\u8BD1\u9636\u6BB5 genData \u51FD\u6570\u4E2D\u5904\u7406 data \u4E2D\u3002</span>
  <span class="token comment">// \u5305\u62EC key / ref / staticClass / classBinding / attrs / dynamicAttrs / domProps / slot / scopedSlots / on / nativeOn / directives \u7B49</span>
  data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\uFF0C\u5305\u62EC init / prePatch / insert / destory\uFF0C</span>
  <span class="token comment">// \u7279\u522B\u662F\u5176\u4E2D init \u51FD\u6570\u4F1A\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u548C\u6302\u8F7D\uFF0C\u5C06\u6765\u5728 vm.update \u4E2D\u8C03\u7528\u7684 init \u51FD\u6570</span>
  <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
  <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating);</span>
  <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token comment">// \u63D2\u69FD\u76F8\u5173\u6570\u636E\u5728 data.scopedSlots</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span>
    asyncFactory
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre></div><p>\u8C03\u7528 createComponent \u51FD\u6570\u751F\u6210\u7EC4\u4EF6\u7684 vnode</p><div class="language-js"><pre><code>component_vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;vue-component-1-custom-section&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">slotProp</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">time</span><span class="token operator">:</span> fn
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">componentOptons</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Ctor<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>vnode<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565</span>
<span class="token punctuation">}</span>
</code></pre></div><p>vm._render \u751F\u6210\u7EC4\u4EF6 vnode \u540E\uFF0C\u8C03\u7528 vm._update \u51FD\u6570: <code>vm._update =&gt; vm.__patch__ =&gt; patch =&gt;createPatchFunction =&gt; createElm =&gt; createCompoent</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  parentElm<span class="token punctuation">,</span>
  refElm<span class="token punctuation">,</span>
  nested<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801..</span>

  <span class="token comment">// createElm \u65E0\u8BBA\u600E\u6837\u90FD\u5C1D\u8BD5\u5F53\u6210\u7EC4\u4EF6\u521B\u5EFA\uFF0C\u89C2\u5BDF\u662F\u5426\u6210\u529F\u3002</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9 vnode \u4E0D\u80FD\u4F5C\u4E3A\u7EC4\u4EF6\u521B\u5EFA\u8FD4\u56DE false\uFF0C\u5373\u5F80\u4E0B\u7EE7\u627F\u6267\u884C</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u8282\u70B9\u662F\u7EC4\u4EF6 vnode \u5219\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u5316\uFF0C\u5E76\u8FD4\u56DE true\uFF0C\u5F53\u524D\u51FD\u6570\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u5982\u679C\u4E0D\u662F\u7EC4\u4EF6\u8282\u70B9 vnode \u5219\u8FDB\u884C\u5E38\u89C4 dom \u5143\u7D20\u521B\u5EFA</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u62FF\u5230\u7684 vnode.data \u662F\u5728 vm._render \u51FD\u6570\u4E2D createComponent \u51FD\u6570\u4E2D\u521B\u5EFA\u8FD4\u56DE\u7684 vnode</span>
  <span class="token comment">// \u5176\u4E2D  installComponentHooks(data) \u6267\u884C\u5373\u5B89\u88C5\u4E86\u7EC4\u4EF6\u521B\u5EFA\u7684\u94A9\u5B50\u51FD\u6570 vnode.data.hook</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isReactivated <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> i<span class="token punctuation">.</span>keepAlive<span class="token punctuation">;</span>
    <span class="token comment">// dsDef(i=i.hook)\u5728\u6267\u884C\u7684\u540C\u65F6\u5C06 i \u53D8\u4E3A\u4E86 hook \u5BF9\u8C61\uFF0C\u540C\u6837 isDef(i=i.init)\u4FBF\u5F97\u6700\u7EC8 i= vnode.data.hook.init \u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// init \u51FD\u6570\u6267\u884C\u5904\u7406\u4E86\u4E3B\u8981\u5904\u7406\u4E24\u4EF6\uFF1A</span>
      <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
      <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating); =&gt; mountComponent</span>
      <span class="token comment">// \u8FD9\u6837\u5373\u4F7F\u5F97\u5728 createComponent \u51FD\u6570\u5185\u5373\u89E6\u53D1\u4E86\u7EC4\u4EF6 wathcer \u7684\u751F\u6210\u548C\u7EC4\u4EF6\u7F16\u8BD1\u548C\u6E32\u67D3 vm._update(vm._render())</span>
      <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// after calling the init hook, if the vnode is a child component</span>
    <span class="token comment">// it should&#39;ve created a child instance and mounted it. the child</span>
    <span class="token comment">// component also has set the placeholder vnode&#39;s elm.</span>
    <span class="token comment">// in that case we can just return the element and be done.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>isReactivated<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reactivateComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u56DE\u5934\u770B\u4E0B vm._render \u51FD\u6570\u4E2D createElement \u51FD\u6570\u4E2D createComponent \u51FD\u6570\u4E2D\u7684\u521D\u59CB\u5316\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token parameter">Ctor<span class="token punctuation">,</span>  data<span class="token punctuation">,</span>  context<span class="token punctuation">,</span>  children<span class="token punctuation">,</span>  tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token comment">// \u7EC4\u4EF6\u6807\u7B7E\u4E0A\u7684\u6240\u6709\u5C5E\u6027\u3001\u4E8B\u4EF6\u3001\u6307\u4EE4\u7B49\u5728\u7F16\u8BD1\u9636\u6BB5 genData \u51FD\u6570\u4E2D\u5904\u7406 data \u4E2D\u3002</span>
  <span class="token comment">// \u5305\u62EC key / ref / staticClass / classBinding / attrs / dynamicAttrs / domProps / slot / scopedSlots / on / nativeOn / directives \u7B49</span>
  data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5B89\u88C5\u7EC4\u4EF6\u94A9\u5B50\u51FD\u6570\uFF0C\u5305\u62EC init / prePatch / insert / destory\uFF0C</span>
  <span class="token comment">// \u7279\u522B\u662F\u5176\u4E2D init \u51FD\u6570\u4F1A\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u548C\u6302\u8F7D\uFF0C\u5C06\u6765\u5728 vm.update \u4E2D\u8C03\u7528\u7684 init \u51FD\u6570</span>
  <span class="token comment">// 1. new vnode.componentOptions.Ctor(options) </span>
  <span class="token comment">// 2. child.$mount(hydrating ? vnode.elm : undefined, hydrating);</span>
  <span class="token function">installComponentHooks</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token comment">// \u63D2\u69FD\u76F8\u5173\u6570\u636E\u5728 data.scopedSlots</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span>
    asyncFactory
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">installComponentHooks</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> hooks <span class="token operator">=</span> data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooksToMerge<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> key <span class="token operator">=</span> hooksToMerge<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> existing <span class="token operator">=</span> hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> toMerge <span class="token operator">=</span> componentVNodeHooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>existing <span class="token operator">!==</span> toMerge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>existing <span class="token operator">&amp;&amp;</span> existing<span class="token punctuation">.</span>_merged<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> existing <span class="token operator">?</span> <span class="token function">mergeHook$1</span><span class="token punctuation">(</span>toMerge<span class="token punctuation">,</span> existing<span class="token punctuation">)</span> <span class="token operator">:</span> toMerge<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token keyword">var</span> componentVNodeHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
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
      <span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> activeInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8C03\u7528\u6302\u8F7D\u51FD\u6570\uFF0C\u4F1A\u8C03\u7528 vm._update(vm._render())\uFF0C\u5F00\u59CB\u7EC4\u4EF6\u7F16\u8BD1\u548C\u51FD\u6570\u8FC7\u7A0B\uFF0C\u7136\u540E\u56DE\u5230\u4E0A\u9762\u5F00\u59CB\u65F6\u5904\u7406\u63D2\u69FD</span>
      child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">prePatch</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">destory</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
  vnode<span class="token punctuation">,</span> <span class="token comment">// we know it&#39;s MountedComponentVNode but flow doesn&#39;t</span>
  parent <span class="token comment">// activeInstance in lifecycle state</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_parentVnode</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span> <span class="token comment">// \u7236\u7EC4\u4EF6\u7684 vnode.data.scopedSlots \u5BF9\u8C61\u8F6C\u79FB\u5230 options._parentVnode</span>
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
</code></pre></div><p>\u8FD9\u91CC <code>new vnode.componentOptions.Ctor(options)</code> \u5B9E\u9645\u8C03\u7528\u7684\u662F <code>Sub._init =&gt; Vue._init</code>\uFF0C\u5728 init \u51FD\u6570\u4E2D\u5408\u5E76\u914D\u7F6E\u4EE3\u7801\u4E2D\u6709\u4E2A\u5173\u4E8E\u63D2\u69FD\u7684\u5173\u952E\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// a uid</span>
    vm<span class="token punctuation">.</span>_uid <span class="token operator">=</span> uid$3<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">;</span>
    <span class="token comment">/* istanbul ignore if */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      startTag <span class="token operator">=</span> <span class="token string">&quot;vue-perf-start:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      endTag <span class="token operator">=</span> <span class="token string">&quot;vue-perf-end:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// a flag to avoid this being observed</span>
    vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// merge options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u521B\u5EFA\u7EC4\u4EF6\u8C03\u7528 init() \u94A9\u5B50\u51FD\u6570\u4E2D createComponentInstanceForVnode \u51FD\u6570\u4E2D\u521D\u59CB\u5316 options \u65F6 _isComponent: true,</span>
      <span class="token comment">// \u6240\u4EE5\u7EC4\u4EF6\u521D\u59CB\u5316\u5408\u5E76\u914D\u7F6E\u8D70\u8FD9\u4E2A\u5206\u652F</span>
      <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
        <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
        options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// doing this because it&#39;s faster than dynamic enumeration.</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
  <span class="token comment">// \u7EC4\u4EF6\u7684\u5B50\u8282\u70B9\u9664\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u5916\uFF0C\u5176\u5B83\u5B50\u8282\u70B9\u90FD\u662F\u4F5C\u4E3A\u9ED8\u8BA4\u63D2\u69FD\u7684\u8282\u70B9\u3002\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u8FD8\u5728 _parentVnode.data.scopedSlots \u4E2D</span>
  opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span> 
  opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5408\u5E76\u914D\u7F6E\u540E\uFF0C\u6267\u884C initRender(vm)</span>
<span class="token keyword">function</span> <span class="token function">initRender</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// the root of the child tree</span>
  vm<span class="token punctuation">.</span>_staticTrees <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// v-once cached trees</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span> <span class="token comment">// the placeholder node in parent tree</span>
  <span class="token keyword">var</span> renderContext <span class="token operator">=</span> parentVnode <span class="token operator">&amp;&amp;</span> parentVnode<span class="token punctuation">.</span>context<span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>$slots <span class="token operator">=</span> <span class="token function">resolveSlots</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>_renderChildren<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u9ED8\u8BA4\u63D2\u69FD\u5143\u7D20\u5168\u90E8\u5B9A\u4E49\u5728 vm.$slots.default \u6570\u7EC4\u4E2D</span>
  vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> emptyObject<span class="token punctuation">;</span> <span class="token comment">// \u8D4B\u503C\u7A7A\u5BF9\u8C61\uFF0C\u5C06\u5728 vm._render \u51FD\u6570\u4E2D\u5904\u7406\u4E3A\u5B58\u5165\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u5BB9\u5668</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resolveSlots</span> <span class="token punctuation">(</span>
  <span class="token parameter">children<span class="token punctuation">,</span>
  context</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>children <span class="token operator">||</span> <span class="token operator">!</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> slots <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> child <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> child<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token comment">// remove slot attribute if the node is resolved as a Vue slot node</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>attrs <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>slot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> data<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>slot<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// named slots should only be respected if the vnode was rendered in the</span>
    <span class="token comment">// same context.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>context <span class="token operator">===</span> context <span class="token operator">||</span> child<span class="token punctuation">.</span>fnContext <span class="token operator">===</span> context<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>slot <span class="token operator">!=</span> <span class="token keyword">null</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> name <span class="token operator">=</span> data<span class="token punctuation">.</span>slot<span class="token punctuation">;</span>
      <span class="token keyword">var</span> slot <span class="token operator">=</span> <span class="token punctuation">(</span>slots<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>slots<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;template&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slot<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>slot<span class="token punctuation">,</span> child<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        slot<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7EC4\u4EF6\u7684\u5B50\u5143\u7D20\u5168\u90E8\u8F6C\u4E3A\u9ED8\u8BA4\u63D2\u69FD\u7684\u5185\u5BB9\uFF0C\u5B9A\u4E49\u5728 slots.default \u6570\u7EC4\u4E2D</span>
      <span class="token punctuation">(</span>slots<span class="token punctuation">.</span>default <span class="token operator">||</span> <span class="token punctuation">(</span>slots<span class="token punctuation">.</span>default <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ignore slots that contains only whitespace</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> name$1 <span class="token keyword">in</span> slots<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>slots<span class="token punctuation">[</span>name$1<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>isWhitespace<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> slots<span class="token punctuation">[</span>name$1<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> slots
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u5B8C\u6210\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u540E\uFF0C\u6267\u884C\u7EC4\u4EF6\u6302\u8F7D\uFF0C\u7EC4\u4EF6\u6302\u8F7D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u6A21\u677F\u7684\u7F16\u8BD1\uFF0C\u6240\u4EE5\u4F1A\u91CD\u65B0\u5FAA\u73AF\u4E00\u6B21\u7F16\u8BD1\u6E32\u67D3\u8FC7\u7A0B\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> child <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token function">createComponentInstanceForVnode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> activeInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8C03\u7528\u6302\u8F7D\u51FD\u6570\uFF0C\u6267\u884C\u7EC4\u4EF6\u6A21\u677F\u7F16\u8BD1\u548C\u6E32\u67D3\uFF1A vm._update(vm._render())\uFF0C\u5F00\u59CB\u7EC4\u4EF6\u7F16\u8BD1\u548C\u51FD\u6570\u8FC7\u7A0B\uFF0C\u7136\u540E\u56DE\u5230\u4E0A\u9762\u5F00\u59CB\u65F6\u5904\u7406\u63D2\u69FD</span>
child<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>hydrating <span class="token operator">?</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1" tabindex="-1">\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1 <a class="header-anchor" href="#\u7EC4\u4EF6\u6A21\u677F\u4E2D\u63D2\u69FD\u7F16\u8BD1" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> customSection <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;section&gt;
      &lt;header&gt;
      // \u5177\u540D\u548C\u4F5C\u7528\u57DF\u63D2\u69FD
      &lt;slot name=&quot;title&quot; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt;
      &lt;/header&gt;

      &lt;main&gt;
      // \u9ED8\u8BA4\u63D2\u69FD
      &lt;slot&gt;&lt;/slot&gt;
      &lt;/main&gt;

      &lt;footer&gt;
      // \u5177\u540D\u63D2\u69FD
      &lt;slot name=&quot;time&quot;&gt;&lt;/slot&gt;
      &lt;/footer&gt;
  &lt;/section&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">innerTitle</span><span class="token operator">:</span> <span class="token string">&#39;\u5199\u5728\u5B50\u7EA7\u7684\u6807\u9898&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5148\u770B\u4E0B\u7EC4\u4EF6\u5185\u5B9A\u4E49\u63D2\u69FD\u7684\u5143\u7D20\u89E3\u6790\uFF1A<code>&lt;slot name=&quot;title&quot; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt;</code></p><p>\u901A\u8FC7\u524D\u9762\u7406\u89E3\uFF0C\u5728\u89E3\u6790\u8FC7\u7A0B\uFF0Cslot \u8FD8\u662F\u4F5C\u4E3A\u6B63\u5E38\u6807\u7B7E\u89E3\u6790\u51FD\u6570\u8DEF\u5F84\uFF1A <code>$mount =&gt; compileToFunctions =&gt; baseCompiler =&gt; parse =&gt; parseHTML =&gt; parseStartTag =&gt; handleStartTag =&gt; options.start =&gt; closeElement =&gt; processElement =&gt; processSlotOutlet =&gt; processAttrs</code></p><div class="language-js"><pre><code><span class="token comment">// parseStartTag \u5904\u7406\u7ED3\u679C</span>
<span class="token keyword">var</span> startTagMatch <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;slot&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39; name=&quot;title&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39; name=&quot;title&quot; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">49</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39; :title=&quot;innerTitle&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;:title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;innerTitle&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39; :title=&quot;innerTitle&quot;&gt;&lt;/slot&gt;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">69</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
  <span class="token literal-property property">unarySlash</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// handerStartTag \u5904\u7406\u7ED3\u679C</span>
<span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">49</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;:title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;innerTitle&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">69</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// options.start(tagName, attrs, unary, match.start, match.end)</span>
<span class="token comment">// options.start(&#39;slot&#39;, attrs, false, 31, 70)</span>
<span class="token comment">// createASTElement(tag, attrs, cuurentParent)</span>
ASTElement <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;slot&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">49</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;:title&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;innerTitle&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">69</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attrsMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;:title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;innerTitle&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> Headers<span class="token punctuation">,</span>
  <span class="token literal-property property">childrend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// start =&gt; closeElement =&gt; processElement =&gt; processSlotOutlet</span>
<span class="token comment">// handle &lt;slot/&gt; outlets</span>
<span class="token keyword">function</span> <span class="token function">processSlotOutlet</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;slot&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>slotName <span class="token operator">=</span> <span class="token function">getBindingAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F1A\u8C03\u7528 getAndRemoveAttr(el, name)</span>
    <span class="token comment">// \u8FD9\u4E00\u6B65\u4E4B\u540E</span>
    <span class="token comment">// el.soltName = &#39;&quot;title&quot;&#39;, attrsList: [{name: &quot;:title&quot;, value: &quot;innerTitle&quot;, start: 50, end: 69}]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn$2</span><span class="token punctuation">(</span>
        <span class="token string">&quot;\`key\` does not work on &lt;slot&gt; because slots are abstract outlets &quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;and can possibly expand into multiple elements. &quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;Use the key on a wrapping element instead.&quot;</span><span class="token punctuation">,</span>
        <span class="token function">getRawBindingAttr</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7136\u540E\u5728generate =&gt; genElement =&gt; genSlot</span>
<span class="token keyword">function</span> <span class="token function">genSlot</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> slotName <span class="token operator">=</span> el<span class="token punctuation">.</span>slotName <span class="token operator">||</span> <span class="token string">&#39;&quot;default&quot;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> children <span class="token operator">=</span> <span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token string">&quot;_t(&quot;</span> <span class="token operator">+</span> slotName <span class="token operator">+</span> <span class="token punctuation">(</span>children <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> children<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// _t(&quot;title&quot;,</span>
  <span class="token comment">// attrs = &#39;{&quot;title&quot;: innerTitle}&#39;</span>
  <span class="token keyword">var</span> attrs <span class="token operator">=</span> el<span class="token punctuation">.</span>attrs <span class="token operator">||</span> el<span class="token punctuation">.</span>dynamicAttrs
    <span class="token operator">?</span> <span class="token function">genProps</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>attrs <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>dynamicAttrs <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">attr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// slot props are camelized</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token function">camelize</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> attr<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        <span class="token literal-property property">dynamic</span><span class="token operator">:</span> attr<span class="token punctuation">.</span>dynamic
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> bind$$1 <span class="token operator">=</span> el<span class="token punctuation">.</span>attrsMap<span class="token punctuation">[</span><span class="token string">&#39;v-bind&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>attrs <span class="token operator">||</span> bind$$1<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">+=</span> <span class="token string">&quot;,null&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">+=</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> attrs<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bind$$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">+=</span> <span class="token punctuation">(</span>attrs <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;,null&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> bind$$1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span> <span class="token comment">// &quot;_t(&quot;title&quot;,null,{&quot;title&quot;:innerTitle})&quot;\uFF0C &quot;_t(&quot;default&quot;)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6700\u7EC8 generate \u5904\u7406\u540E\uFF0C\u5F97\u5230 vm.render =</span>
<span class="token comment">// new Function (with(this){return _c(&#39;section&#39;,[_c(&#39;header&#39;,[_t(&quot;title&quot;,null,{&quot;title&quot;:innerTitle})],2),_v(&quot; &quot;),_c(&#39;main&#39;,[_t(&quot;default&quot;)],2),_v(&quot; &quot;),_c(&#39;footer&#39;,[_t(&quot;time&quot;)],2)])})</span>

<span class="token comment">// \u7136\u540E\u5728 vm._render \u8C03\u7528\u65F6\uFF0C\u6267\u884C vnode = render.call(vm._renderProxy, vm.$createElement);</span>
<span class="token comment">// \u5C31\u4F1A\u6267\u884C _t \u51FD\u6570\uFF0C\u5373\u6267\u884C renderSlot \u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">installRenderHelpers</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>_o <span class="token operator">=</span> markOnce<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_n <span class="token operator">=</span> toNumber<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_s <span class="token operator">=</span> toString<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_l <span class="token operator">=</span> renderList<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_t <span class="token operator">=</span> renderSlot<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_q <span class="token operator">=</span> looseEqual<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_i <span class="token operator">=</span> looseIndexOf<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_m <span class="token operator">=</span> renderStatic<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_f <span class="token operator">=</span> resolveFilter<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_k <span class="token operator">=</span> checkKeyCodes<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_b <span class="token operator">=</span> bindObjectProps<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_v <span class="token operator">=</span> createTextVNode<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_e <span class="token operator">=</span> createEmptyVNode<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_u <span class="token operator">=</span> resolveScopedSlots<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_g <span class="token operator">=</span> bindObjectListeners<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_d <span class="token operator">=</span> bindDynamicKeys<span class="token punctuation">;</span>
  target<span class="token punctuation">.</span>_p <span class="token operator">=</span> prependModifier<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/**
 * Runtime helper for rendering &lt;slot&gt;
 * \u4F1A\u8FD4\u56DE\u4E00\u4E2A slot \u7684 vnode \u8282\u70B9
 */</span>
<span class="token keyword">function</span> <span class="token function">renderSlot</span><span class="token punctuation">(</span>
  name<span class="token punctuation">,</span> <span class="token comment">// title</span>
  fallback<span class="token punctuation">,</span> <span class="token comment">// null</span>
  props<span class="token punctuation">,</span> <span class="token comment">// {title: &quot;\u5199\u5728\u5B50\u7EA7\u7684\u6807\u9898&quot;} this.innerTitle \u7684\u503C \u201D\u5199\u5728\u5B50\u7EA7\u7684\u6807\u9898\u201C</span>
  bindObject <span class="token comment">// nudefined</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> scopedSlotFn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> nodes<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>scopedSlotFn<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// scoped slot</span>
    props <span class="token operator">=</span> props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bindObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>bindObject<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;slot v-bind without argument expects an Object&#39;</span><span class="token punctuation">,</span>
          <span class="token keyword">this</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      props <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> bindObject<span class="token punctuation">)</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nodes <span class="token operator">=</span> <span class="token function">scopedSlotFn</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">||</span> fallback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    nodes <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> fallback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> target <span class="token operator">=</span> props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>slot<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$createElement</span><span class="token punctuation">(</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">slot</span><span class="token operator">:</span> target <span class="token punctuation">}</span><span class="token punctuation">,</span> nodes<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nodes
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u7684\u5173\u952E\u662F <code>var scopedSlotFn = this.$scopedSlots[name]</code>;</p><p>$scopedSlots \u4FDD\u7559\u4E86\u7236\u7EC4\u4EF6\u6240\u6709\u63D2\u69FD\uFF0C\u662F\u5728\u7EC4\u4EF6\u6302\u8F7D\u8C03\u7528 vm._render\u51FD\u6570\u521D\u59CB\u5316\u5B8C\u6210\u7684</p><div class="language-js"><pre><code><span class="token comment">// Vue \u6784\u9020\u51FD\u6570\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> ref <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> render <span class="token operator">=</span> ref<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
  <span class="token keyword">var</span> _parentVnode <span class="token operator">=</span> ref<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>

  <span class="token comment">// \u7236\u7EC4\u4EF6\u7684\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u89E3\u6790\u540E\u7684\u6570\u636E\u5B58\u50A8\u5728 _parentVnode.data.scopedSlots \u4E2D</span>
  <span class="token comment">// \u4EE5\u4E0B\u64CD\u4F5C\u540E\uFF0C\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 vm.$scopedSlots \u83B7\u53D6\u7236\u7EC4\u4EF6\u4E0A\u5B9A\u4E49\u7684\u63D2\u69FD\u6570\u636E\uFF0C\u5728\u5B50\u7EC4\u4EF6\u89E3\u6790 vm._render \u65F6\u8C03\u7528 _t \u5373 renderSlot \u65F6\u4F1A\u7528\u5230</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_parentVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> <span class="token function">normalizeScopedSlots</span><span class="token punctuation">(</span>
      _parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8\u7740\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD</span>
      vm<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span> <span class="token comment">// \u5B58\u653E\u7740\u9ED8\u8BA4\u63D2\u69FD</span>
      vm<span class="token punctuation">.</span>$scopedSlots <span class="token comment">// \u5728 initRender \u51FD\u6570\u4E2D\u521D\u59CB\u5316\u4E3A\u7A7A\u5BF9\u8C61 {}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7ECF\u8FC7\u4E0A\u9762\u5904\u7406\uFF0C\u7EC4\u4EF6\u63D2\u69FD\u7684\u6240\u6709\u5185\u5BB9\u5305\u62EC\u9ED8\u8BA4\u3001\u5177\u540D\u3001\u4F5C\u7528\u57DF\u6570\u636E\u90FD\u4FDD\u5B58\u5728 vm.$scopedSlots</span>
  <span class="token comment">/**
   * vm.$scopedSlots = {
   *  default: fn,
   *  time: fn,
   *  title: fn
   * }
   */</span>
  
  <span class="token comment">// set parent vnode. this allows render functions to have access</span>
  <span class="token comment">// to the data on the placeholder node.</span>
  vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> _parentVnode<span class="token punctuation">;</span>
  <span class="token comment">// render self</span>
  <span class="token keyword">var</span> vnode<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    currentRenderingInstance <span class="token operator">=</span> vm<span class="token punctuation">;</span>
    <span class="token comment">// \u8FD9\u91CC\u8C03\u7528\u7EC4\u4EF6 render \u6E32\u67D3\u51FD\u6570\u3002</span>
    vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    currentRenderingInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token comment">// set parent</span>
  vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> _parentVnode<span class="token punctuation">;</span>
  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0A\u9762\u51FD\u6570\u83B7\u53D6 vm.$slots / vm.$scopedSlots / _parentVnode\uFF0C\u5B83\u4EEC\u5728_init =&gt; initRender \u51FD\u6570\u4E2D\u5B9A\u4E49</span>
<span class="token keyword">function</span> <span class="token function">initRender</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// the root of the child tree</span>
  vm<span class="token punctuation">.</span>_staticTrees <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// v-once cached trees</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span> <span class="token comment">// the placeholder node in parent tree</span>
  <span class="token keyword">var</span> renderContext <span class="token operator">=</span> parentVnode <span class="token operator">&amp;&amp;</span> parentVnode<span class="token punctuation">.</span>context<span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>$slots <span class="token operator">=</span> <span class="token function">resolveSlots</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>_renderChildren<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u9ED8\u8BA4\u63D2\u69FD\u5143\u7D20\u5168\u90E8\u5B9A\u4E49\u5728 vm.$slots.default \u6570\u7EC4\u4E2D</span>
  vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> emptyObject<span class="token punctuation">;</span> <span class="token comment">// \u8D4B\u503C\u7A7A\u5BF9\u8C61\uFF0C\u5C06\u5728 vm._render \u51FD\u6570\u4E2D\u5904\u7406\u4E3A\u5B58\u5165\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u5BB9\u5668</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5176\u4E2D m.$options._parentVnode \u7684\u5B9A\u4E49\u5728 _init \u51FD\u6570\u9009\u9879\u5408\u5E76\u4E2D\u5B9A\u4E49</span>
<span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// doing this because it&#39;s faster than dynamic enumeration.</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
  <span class="token comment">// \u7EC4\u4EF6\u7684\u5B50\u8282\u70B9\u5E94\u8BE5\u662F\u5168\u90E8\u4F5C\u4E3A\u9ED8\u8BA4\u63D2\u69FD\u7684\u5185\u5BB9\u3002\u56E0\u4E3A\u5177\u540D\u63D2\u69FD\u548C\u4F5C\u7528\u57DF\u63D2\u69FD\u8FD8\u5728 _parentVnode.data.scopedSlots \u4E2D</span>
  opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span> 
  opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7\u4E0A\u8FF0\u7EC4\u4EF6\u63D2\u69FD\u7684\u89E3\u6790\uFF0C\u540C\u65F6\u4E5F\u80FD\u660E\u767D Vue \u4E2D\u7EC4\u4EF6\u89E3\u6790\u8FC7\u7A0B\u3002</p><p>Vue \u89E3\u6790\u662F\u5148\u7236\u7EC4\u4EF6\u518D\u5B50\u7EC4\u4EF6\uFF0C\u6302\u8F7D\u65F6\u5148\u5B50\u7EC4\u4EF6\u518D\u7236\u7EC4\u4EF6\u3002</p>`,53),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{y as __pageData,g as default};
