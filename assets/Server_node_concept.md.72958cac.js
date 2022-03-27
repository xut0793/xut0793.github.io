import{_ as n,c as a,o as s,a as p}from"./app.9dbb06c5.js";const f='{"title":"\u4E00\u4E9B\u5E38\u89C1\u7684\u6982\u5FF5\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u963B\u585E \u548C \u975E\u963B\u585E","slug":"\u963B\u585E-\u548C-\u975E\u963B\u585E"},{"level":2,"title":"\u5E76\u53D1\u91CF","slug":"\u5E76\u53D1\u91CF"},{"level":2,"title":"\u541E\u5410\u91CF","slug":"\u541E\u5410\u91CF"},{"level":2,"title":"CPU \u5BC6\u96C6\u578B","slug":"cpu-\u5BC6\u96C6\u578B"},{"level":2,"title":"I/O \u5BC6\u96C6\u578B","slug":"i-o-\u5BC6\u96C6\u578B"},{"level":2,"title":"\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B","slug":"\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B"},{"level":2,"title":"\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60","slug":"\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60"}],"relativePath":"Server/node/concept.md"}',t={},o=p(`<h1 id="\u4E00\u4E9B\u5E38\u89C1\u7684\u6982\u5FF5\u7406\u89E3" tabindex="-1">\u4E00\u4E9B\u5E38\u89C1\u7684\u6982\u5FF5\u7406\u89E3 <a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u89C1\u7684\u6982\u5FF5\u7406\u89E3" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u963B\u585E-\u548C-\u975E\u963B\u585E">\u963B\u585E \u548C \u975E\u963B\u585E</a></li><li><a href="#\u5E76\u53D1\u91CF">\u5E76\u53D1\u91CF</a></li><li><a href="#\u541E\u5410\u91CF">\u541E\u5410\u91CF</a></li><li><a href="#cpu-\u5BC6\u96C6\u578B">CPU \u5BC6\u96C6\u578B</a></li><li><a href="#i-o-\u5BC6\u96C6\u578B">I/O \u5BC6\u96C6\u578B</a></li><li><a href="#\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B">\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B</a></li><li><a href="#\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60">\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60</a></li></ul></div></p><p>\u53C2\u8003<a href="https://nodejs.org/zh-cn/docs/guides/dont-block-the-event-loop/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51\u6587\u6863</a></p><h2 id="\u963B\u585E-\u548C-\u975E\u963B\u585E" tabindex="-1">\u963B\u585E \u548C \u975E\u963B\u585E <a class="header-anchor" href="#\u963B\u585E-\u548C-\u975E\u963B\u585E" aria-hidden="true">#</a></h2><p>\u963B\u585E \u662F\u6307\u5728 Node.js \u7A0B\u5E8F\u4E2D\uFF0C\u5176\u5B83 JavaScript \u8BED\u53E5\u7684\u6267\u884C\uFF0C\u5FC5\u987B\u7B49\u5F85\u4E00\u4E2A\u975E JavaScript \u64CD\u4F5C\u7684\u5B8C\u6210\u3002\u56E0\u6B64\u5F53 \u963B\u585E \u53D1\u751F\u65F6\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u65E0\u6CD5\u7EE7\u7EED\u8FD0\u884CJavaScript\u3002</p><p>\u5982\u679CJavaScript \u7531\u4E8E\u6267\u884C CPU \u5BC6\u96C6\u578B\u64CD\u4F5C\uFF08\u5FAA\u73AF\u904D\u5386\u7B49\uFF09\uFF0C\u800C\u8868\u73B0\u51FA\u5EF6\u8FDF\uFF0C\u901A\u5E38\u4E0D\u88AB\u79F0\u4E3A \u963B\u585E\u3002</p><p>\u5728 Node.js \u6807\u51C6\u5E93\u4E2D\u7684\u6240\u6709 I/O \u65B9\u6CD5\u90FD\u63D0\u4F9B\u5F02\u6B65\u975E\u963B\u585E\u7248\u672C\uFF0C\u5B83\u4EEC\u63A5\u53D7\u56DE\u8C03\u51FD\u6570\u3002\u4F46\u67D0\u4E9B\u65B9\u6CD5\u4E5F\u6709\u5BF9\u5E94\u7684 \u963B\u585E \u7248\u672C\uFF0C\u540D\u5B57\u4EE5 Sync \u7ED3\u5C3E\u3002</p><p>\u963B\u585E \u65B9\u6CD5 \u540C\u6B65 \u6267\u884C\uFF0C\u975E\u963B\u585E \u65B9\u6CD5 \u5F02\u6B65 \u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u540C\u6B65\u963B\u585E</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;/file.md&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u8FD9\u91CC\u963B\u585E\u76F4\u5230\u6587\u4EF6\u88AB\u8BFB\u53D6</span>

<span class="token comment">// \u5F02\u6B65\u975E\u963B\u585E</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;/file.md&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u8FF0fs\u6A21\u5757\u7684\u64CD\u4F5C\u5E76\u4E0D\u662F\u4E00\u4E2Ajs\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5B58\u5728\u963B\u585E\u6982\u5FF5\u3002</p><h2 id="\u5E76\u53D1\u91CF" tabindex="-1">\u5E76\u53D1\u91CF <a class="header-anchor" href="#\u5E76\u53D1\u91CF" aria-hidden="true">#</a></h2><p>\u5728 Node.js \u4E2D JavaScript \u7684\u6267\u884C\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u56E0\u6B64\u5E76\u53D1\u6027\u662F\u6307\u4E8B\u4EF6\u5FAA\u73AF\u5728\u5B8C\u6210\u5176\u4ED6\u5DE5\u4F5C\u540E\u6267\u884C JavaScript \u56DE\u8C03\u51FD\u6570\u7684\u80FD\u529B\u3002</p><p>\u4F8B\u5982\uFF0C\u8BA9\u6211\u4EEC\u601D\u8003\u8FD9\u6837\u4E00\u79CD\u60C5\u51B5\uFF1A\u6BCF\u4E2A\u5BF9 Web \u670D\u52A1\u5668\u7684\u8BF7\u6C42\u9700\u8981 50 \u6BEB\u79D2\u5B8C\u6210\uFF0C\u800C\u90A3 50 \u6BEB\u79D2\u4E2D\u7684 45 \u6BEB\u79D2\u662F\u53EF\u4EE5\u5F02\u6B65\u6267\u884C\u7684\u6570\u636E\u5E93 I/O\u3002\u9009\u62E9 \u975E\u963B\u585E \u5F02\u6B65\u64CD\u4F5C\u53EF\u4EE5\u91CA\u653E\u6BCF\u4E2A\u8BF7\u6C42\u7684 45 \u6BEB\u79D2\u6765\u5904\u7406\u5176\u5B83\u8BF7\u6C42\u3002</p><h2 id="\u541E\u5410\u91CF" tabindex="-1">\u541E\u5410\u91CF <a class="header-anchor" href="#\u541E\u5410\u91CF" aria-hidden="true">#</a></h2><p>\u5355\u4F4D\u65F6\u95F4\u7684\u5904\u7406\u6570\u91CF\uFF0C\u6BD4\u5982\u6BCF\u79D2\u63A5\u53D7http\u8BF7\u6C42\u4E2A\u6570\u3002</p><h2 id="cpu-\u5BC6\u96C6\u578B" tabindex="-1">CPU \u5BC6\u96C6\u578B <a class="header-anchor" href="#cpu-\u5BC6\u96C6\u578B" aria-hidden="true">#</a></h2><p>CPU \u5BC6\u96C6\u578B\u901A\u5E38\u662F\u5360\u7528cpu\u548C\u5185\u5B58\u8D44\u6E90\u8F83\u591A\u7684\u4EFB\u52A1\u3002</p><h2 id="i-o-\u5BC6\u96C6\u578B" tabindex="-1">I/O \u5BC6\u96C6\u578B <a class="header-anchor" href="#i-o-\u5BC6\u96C6\u578B" aria-hidden="true">#</a></h2><p>I/O \u5BC6\u96C6\u578B\u4EFB\u52A1\u901A\u5E38\u5305\u62EC\u67E5\u8BE2\u5916\u90E8\u670D\u52A1\u63D0\u4F9B\u7A0B\u5E8F\uFF08DNS\u3001\u6587\u4EF6\u7CFB\u7EDF\u7B49\uFF09\u5E76\u7B49\u5F85\u5176\u54CD\u5E94\u3002</p><h2 id="\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B" tabindex="-1">\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B <a class="header-anchor" href="#\u4E0D\u8981\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u6CE8\u610F\u56DE\u8C03\u4EE3\u7801\u7684 &quot;\u8BA1\u7B97\u590D\u6742\u5EA6&quot;\u3002</li><li>\u907F\u514D\u4F7F\u7528\u201C\u6709\u6F0F\u6D1E\u201D\u7684 \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u56E0\u4E3A\u5BB9\u6613\u9762\u4E34 REDOS \uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\u62D2\u7EDD\u670D\u52A1\u653B\u51FB\uFF09\u7684\u98CE\u9669\u3002\u539F\u56E0\u662F\u6709\u6F0F\u6D1E\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u65F6\u4F1A\u589E\u52A0\u65F6\u95F4\u590D\u6742\u5EA6\u3002</li><li>JSON.parse \u4EE5\u53CA JSON.stringify \u662F\u5176\u5B83\u6F5C\u5728\u9AD8\u5F00\u9500\u7684\u64CD\u4F5C\u3002 \u8FD9\u4E9B\u64CD\u4F5C\u7684\u590D\u6742\u5EA6\u662F O(n) \uFF0C\u5BF9\u4E8E\u5927\u578B\u7684 n \u8F93\u5165\uFF0C\u6D88\u8017\u7684\u65F6\u95F4\u53EF\u80FD\u60CA\u4EBA\u7684\u957F\u3002</li><li>\u6CE8\u610F\u4F7F\u7528\u90E8\u5206\u6838\u5FC3\u6A21\u5757\uFF0C\u5982\u52A0\u5BC6\u548C\u538B\u7F29\u7B49\uFF0C\u56E0\u4E3A\u6D89\u53CA\u5230\u590D\u6742\u7B97\u6CD5</li></ul><p>\u8981\u8BA9\u4E1A\u52A1\u4E2D\u590D\u6742\u7684\u8BA1\u7B97\u4E0D\u963B\u585E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5E38\u7528\u4EE5\u4E0B\u65B9\u6CD5\uFF1A</p><p><strong>\u4EFB\u52A1\u62C6\u5206</strong> \u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u4F60\u60F3\u8BA1\u7B97 1 \u5230 n \u7684\u5E73\u5747\u503C\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u4E0D\u62C6\u5206\u7B97\u5E73\u5747\u6570\uFF0C\u5F00\u9500\u662F O(n)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
  sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
<span class="token keyword">let</span> avg <span class="token operator">=</span> sum <span class="token operator">/</span> n<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;avg: &#39;</span> <span class="token operator">+</span> avg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u5206\u533A\u7B97\u5E73\u5747\u503C\uFF0C\u6BCF\u4E2A n \u7684\u5F02\u6B65\u6B65\u9AA4\u5F00\u9500\u4E3A O(1)\u3002</span>
<span class="token keyword">function</span> <span class="token function">asyncAvg</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> avgCB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Save ongoing sum in JS closure.</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// &quot;Asynchronous recursion&quot;.</span>
    <span class="token comment">// Schedule next operation asynchronously.</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token function">help</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Start the helper, with CB to call avgCB.</span>
  <span class="token function">help</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sum</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> avg <span class="token operator">=</span> sum<span class="token operator">/</span>n<span class="token punctuation">;</span>
      <span class="token function">avgCB</span><span class="token punctuation">(</span>avg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">asyncAvg</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">avg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;avg of 1-n: &#39;</span> <span class="token operator">+</span> avg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4EFB\u52A1\u5206\u6D41</strong></p><p>\u5C06\u4E00\u4E2A\u590D\u6742\u4EFB\u52A1\u4ECE\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u8F6C\u79FB\u5230\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u4E0A\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u5C06\u4EFB\u52A1\u8F6C\u79FB\u5230\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u6267\u884C\uFF1A</p><ul><li>\u901A\u8FC7\u4F7F\u7528 N-API\u5F00\u53D1 C++ \u63D2\u4EF6 \u7684\u65B9\u5F0F\u4F7F\u7528\u5185\u7F6E\u7684 Node \u5DE5\u4F5C\u6C60</li><li>\u521B\u5EFA\u548C\u7BA1\u7406\u81EA\u5DF1\u4E13\u7528\u4E8E\u8BA1\u7B97\u7684\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF0C\u6700\u76F4\u63A5\u7684\u65B9\u6CD5\u5C31\u662F\u4F7F\u7528 Child Process \u6216\u8005\u662F cluster\u3002</li></ul><p>\u8F6C\u79FB\u5230\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u7684\u7F3A\u9677:</p><p>\u8FD9\u79CD\u65B9\u6CD5\u7684\u7F3A\u70B9\u662F\u5B83\u589E\u5927\u4E86 \u901A\u4FE1\u5F00\u9500 \u3002\u56E0\u4E3A Node \u4EC5\u5141\u8BB8\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u53BB\u67E5\u8BBF\u95EE\u5E94\u7528\u7A0B\u5E8F\u7684\u201C\u547D\u540D\u7A7A\u95F4\u201D\uFF08\u4FDD\u5B58\u7740 JavaScript \u72B6\u6001\uFF09\u3002 \u5728\u5DE5\u4F5C\u7EBF\u7A0B\u4E2D\u662F\u65E0\u6CD5\u64CD\u4F5C\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u7684 JavaScript \u5BF9\u8C61\u7684\u3002 \u56E0\u6B64\uFF0C\u60A8\u5FC5\u987B\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u4EFB\u4F55\u8981\u5728\u7EBF\u7A0B\u95F4\u5171\u4EAB\u7684\u5BF9\u8C61\u3002 \u7136\u540E\uFF0C\u5DE5\u4F5C\u7EBF\u7A0B\u53EF\u4EE5\u5BF9\u5C5E\u4E8E\u81EA\u5DF1\u7684\u8FD9\u4E9B\u5BF9\u8C61\u7684\u526F\u672C\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5E76\u5C06\u4FEE\u6539\u540E\u7684\u5BF9\u8C61\uFF08\u6216\u201C\u8865\u4E01\u201D\uFF09 \u8FD4\u56DE\u5230\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u3002</p><p><strong>\u603B\u7ED3\uFF1A</strong> \u5BF9\u4E8E\u7B80\u5355\u7684\u4EFB\u52A1\uFF1A\u6BD4\u5982\u904D\u5386\u4EFB\u610F\u957F\u6570\u7EC4\u7684\u5143\u7D20\uFF0C\u62C6\u5206\u53EF\u80FD\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\u3002</p><p>\u5982\u679C\u8BA1\u7B97\u66F4\u52A0\u590D\u6742\uFF0C\u5219\u5206\u6D41\u662F\u4E00\u79CD\u66F4\u597D\u7684\u65B9\u6CD5\uFF1A\u901A\u4FE1\u6210\u672C\uFF08\u5373\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u548C\u5DE5\u4F5C\u7EBF\u7A0B\u4E4B\u95F4\u4F20\u9012\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u5F00\u9500\uFF09\u88AB\u4F7F\u7528\u591A\u4E2A\u7269\u7406\u5185\u6838\u7684\u597D\u5904\u62B5\u6D88\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u7684\u670D\u52A1\u5668\u4E25\u91CD\u4F9D\u8D56\u590D\u6742\u7684\u8BA1\u7B97\uFF0C\u5219\u5E94\u8BE5\u91CD\u65B0\u8003\u8651 Node \u662F\u5426\u771F\u7684\u5F88\u9002\u5408\u8BE5\u573A\u666F\uFF1FNode \u64C5\u957F\u4E8E I/O \u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u4F46\u5BF9\u4E8E\u6602\u8D35\u7684\u8BA1\u7B97\u7684CPU\u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C\u5B83\u53EF\u80FD\u4E0D\u662F\u6700\u597D\u7684\u9009\u62E9\u3002</p><h2 id="\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60" tabindex="-1">\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60 <a class="header-anchor" href="#\u4E0D\u8981\u963B\u585E\u5DE5\u4F5C\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a></h2><ul><li>\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u6587\u4EF6\u7CFB\u7EDF\u8BFB\u53D6</li><li>\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u52A0\u5BC6\u64CD\u4F5C</li></ul><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A <strong>\u4EFB\u52A1\u62C6\u5206\uFF1A</strong>\uFF1A\u9700\u8981\u660E\u786E\u4EFB\u52A1\u62C6\u5206\u7684\u76EE\u7684\u662F\u5C3D\u91CF\u51CF\u5C11\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u7684\u52A8\u6001\u53D8\u5316\u3002 \u7F3A\u70B9\uFF1A\u6240\u6709\u8FD9\u4E9B\u5DE5\u4F5C\u6C60\u4E2D\u7684\u5DE5\u4F5C\u7EBF\u7A0B\u90FD\u5C06\u6D88\u8017\u7A7A\u95F4\u548C\u65F6\u95F4\u5F00\u9500\uFF0C\u5E76\u5C06\u76F8\u4E92\u7ADE\u4E89 CPU \u65F6\u95F4\u7247</p><p><strong>\u603B\u7ED3\uFF1A</strong></p><p>\u65E0\u8BBA\u60A8\u53EA\u4F7F\u7528 Node \u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u8FD8\u662F\u7EF4\u62A4\u5355\u72EC\u7684\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF0C\u90FD\u5E94\u7740\u529B\u4F18\u5316\u7EBF\u7A0B\u6C60\u7684\u4EFB\u52A1\u541E\u5410\u91CF\u3002</p>`,38),e=[o];function c(l,u,i,r,k,d){return s(),a("div",null,e)}var g=n(t,[["render",c]]);export{f as __pageData,g as default};
