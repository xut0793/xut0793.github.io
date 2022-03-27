import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const b=`{"title":"BigInt \u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898","slug":"\u95EE\u9898"},{"level":2,"title":"BigInt \u503C\u7684\u521B\u5EFA","slug":"bigint-\u503C\u7684\u521B\u5EFA"},{"level":2,"title":"BigInt \u7C7B\u578B\u7684\u7279\u5F81","slug":"bigint-\u7C7B\u578B\u7684\u7279\u5F81"},{"level":3,"title":"1. BigInt\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B typeof 12n === 'bigint'","slug":"_1-bigint\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B-typeof-12n-bigint"},{"level":3,"title":"2. BigInt() \u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528 new \u8C03\u7528","slug":"_2-bigint-\u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528-new-\u8C03\u7528"},{"level":3,"title":"3. \u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0CBigInt \u548C Number \u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002","slug":"_3-\u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0Cbigint-\u548C-number-\u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002"},{"level":3,"title":"4. \u9ED8\u8BA4\u60C5\u51B5\u4E0B BigInt \u503C\u4E0D\u80FD\u4F7F\u7528JSON.stringify()\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49toJSON\u65B9\u6CD5\u5B9E\u73B0","slug":"_4-\u9ED8\u8BA4\u60C5\u51B5\u4E0B-bigint-\u503C\u4E0D\u80FD\u4F7F\u7528json-stringify-\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49tojson\u65B9\u6CD5\u5B9E\u73B0"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"FE-Language/ES/type-5-bigInt.md"}`,e={},p=t(`<h1 id="bigint-\u7C7B\u578B" tabindex="-1">BigInt \u7C7B\u578B <a class="header-anchor" href="#bigint-\u7C7B\u578B" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u95EE\u9898">\u95EE\u9898</a></li><li><a href="#bigint-\u503C\u7684\u521B\u5EFA">BigInt \u503C\u7684\u521B\u5EFA</a></li><li><a href="#bigint-\u7C7B\u578B\u7684\u7279\u5F81">BigInt \u7C7B\u578B\u7684\u7279\u5F81</a><ul><li><a href="#_1-bigint\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B-typeof-12n-bigint">1. BigInt\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B typeof 12n === &#39;bigint&#39;</a></li><li><a href="#_2-bigint-\u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528-new-\u8C03\u7528">2. BigInt() \u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528 new \u8C03\u7528</a></li><li><a href="#_3-\u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0Cbigint-\u548C-number-\u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002">3. \u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0CBigInt \u548C Number \u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002</a></li><li><a href="#_4-\u9ED8\u8BA4\u60C5\u51B5\u4E0B-bigint-\u503C\u4E0D\u80FD\u4F7F\u7528json-stringify-\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49tojson\u65B9\u6CD5\u5B9E\u73B0">4. \u9ED8\u8BA4\u60C5\u51B5\u4E0B BigInt \u503C\u4E0D\u80FD\u4F7F\u7528JSON.stringify()\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49toJSON\u65B9\u6CD5\u5B9E\u73B0</a></li></ul></li><li><a href="#\u603B\u7ED3">\u603B\u7ED3</a></li></ul></div></p><h2 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u6570\u636E\u7C7B\u578B<a href="./type-2-number.html">Number</a>\u7AE0\u8282\u8BB2\u89E3\uFF0C\u6211\u4EEC\u77E5\u9053\u5728ES\u4E2D\u6570\u503C\u662F\u6709\u6700\u5927\u5B89\u5168\u8303\u56F4\u7684: 2<sup>53</sup>-1</p><p>\u8FD9\u4E2A\u6570\u5B57\u7528\u5341\u8FDB\u5236\u8868\u793A\u662F<code>9007199254740991</code>\uFF08\u5927\u7EA6900\u4E07\u4EBF\uFF0C\u5373\u7EA6\u4E3A9*10<sup>15</sup>\uFF09</p><div class="language-js"><pre><code><span class="token comment">// ES\u5B9A\u4E49\u4E86\u4E24\u4E2A\u8868\u793A\u5B89\u5168\u6574\u6570\u8303\u56F4\u7684\u5E38\u91CF</span>
Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span> <span class="token operator">=</span> <span class="token number">9007199254740991</span>
Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">9007199254740991</span>
</code></pre></div><p>\u5728\u8FD9\u4E2A\u8303\u56F4\u5185\u7684\u6574\u6570\u90FD\u53EF\u4EE5\u7CBE\u786E\u5730\u8868\u793A\uFF0C\u5BF9\u4E8E\u8D85\u8FC7\u8FD9\u4E2A\u8303\u56F4\u7684\u6574\u6570\uFF0CJavaScript \u4F9D\u65E7\u53EF\u4EE5\u8FDB\u884C\u8FD0\u7B97\uFF0C\u4F46\u5374\u4E0D\u4FDD\u8BC1\u8FD0\u7B97\u7ED3\u679C\u7684\u7CBE\u5EA6\uFF0C\u56E0\u4E3A\u5B58\u50A8\u8D85\u51FA\u5185\u5B58\u7A7A\u95F4\u4F1A\u88AB\u820D\u53BB\uFF0C\u5C31\u8FD9\u5C31\u6574\u6570\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\u3002</p><div class="language-js"><pre><code><span class="token keyword">let</span> n <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>      <span class="token comment">// 9007199254740991</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 9007199254740992</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 9007199254740992   \u4E0D\u5BF9</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// 9007199254740994</span>

<span class="token comment">// \u4F7F\u7528BigInt</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>      <span class="token comment">// 9007199254740991n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token operator">+</span><span class="token number">1n</span><span class="token punctuation">)</span>   <span class="token comment">// 9007199254740992n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token operator">+</span><span class="token number">2n</span><span class="token punctuation">)</span>   <span class="token comment">// 9007199254740993n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m <span class="token operator">*</span> <span class="token number">50n</span><span class="token punctuation">)</span> <span class="token comment">// 450359962737049550n</span>
</code></pre></div><p>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u9650\u5236\u4E0D\u662F\u95EE\u9898\uFF0C\u4F46\u6709\u65F6\u6211\u4EEC\u9700\u8981\u5F88\u5927\u7684\u6570\u5B57\uFF0C\u4F8B\u5982\u7528\u4E8E\u52A0\u5BC6\u6216\u5FAE\u79D2\u7CBE\u5EA6\u7684\u65F6\u95F4\u6233\u3002</p><p>\u6240\u4EE5ES2019\u89C4\u8303\u65B0\u589E\u4E86<code>BigInt</code>\u7C7B\u578B\uFF0C\u7528\u4E8E\u8868\u793A\u4EFB\u610F\u957F\u5EA6\u7684\u6574\u6570\u3002</p><h2 id="bigint-\u503C\u7684\u521B\u5EFA" tabindex="-1">BigInt \u503C\u7684\u521B\u5EFA <a class="header-anchor" href="#bigint-\u503C\u7684\u521B\u5EFA" aria-hidden="true">#</a></h2><p>\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u5B57\u9762\u91CF\u65B9\u5F0F\uFF1A \u76F4\u63A5\u5728\u6570\u5B57\u540E\u9762\u52A0n\uFF0C\u4EE3\u8868BigInt\u7C7B\u578B\u503C</li><li>\u4F7F\u7528BigInt()\u51FD\u6570</li></ul><div class="language-js"><pre><code><span class="token number">123n</span>
<span class="token number">9007199254740991n</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// 123n</span>
<span class="token keyword">let</span> hex <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token string">&quot;0x1fffffffffffff&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 9007199254740991n</span>
</code></pre></div><h2 id="bigint-\u7C7B\u578B\u7684\u7279\u5F81" tabindex="-1">BigInt \u7C7B\u578B\u7684\u7279\u5F81 <a class="header-anchor" href="#bigint-\u7C7B\u578B\u7684\u7279\u5F81" aria-hidden="true">#</a></h2><h3 id="_1-bigint\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B-typeof-12n-bigint" tabindex="-1">1. BigInt\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B typeof 12n === &#39;bigint&#39; <a class="header-anchor" href="#_1-bigint\u7C7B\u578B\u5C5E\u4E8E\u57FA\u672C\u7C7B\u578B-typeof-12n-bigint" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">typeof</span> <span class="token number">12n</span>  <span class="token comment">// bigint</span>
</code></pre></div><h3 id="_2-bigint-\u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528-new-\u8C03\u7528" tabindex="-1">2. BigInt() \u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528 new \u8C03\u7528 <a class="header-anchor" href="#_2-bigint-\u53EA\u80FD\u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u4E0D\u80FD\u4F7F\u7528-new-\u8C03\u7528" aria-hidden="true">#</a></h3><p>\u540CSymbol()\u51FD\u6570\u4E00\u6837\uFF0CBigInt()\u51FD\u6570\u5BF9\u8C61\u5728\u8BED\u8A00\u5185\u90E8\u5E76\u6CA1\u6709\u5B9E\u73B0\u5185\u90E8\u5C5E\u6027<code>[[Constructor]]</code>\uFF0C\u6240\u4EE5\u4F7F\u7528new\u8C03\u7528\u4F1A\u62A5\u9519\u3002\u4F46\u4ECD\u53EF\u4EE5\u4F7F\u7528<code>Object()</code>\u65B9\u6CD5\u6765\u521B\u5EFA\u7C7B\u578B\u7684\u5305\u88C5\u5BF9\u8C61\uFF0C\u4EE5\u5B9E\u73B0\u5C5E\u6027\u8C03\u7528\u3002</p><h3 id="_3-\u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0Cbigint-\u548C-number-\u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002" tabindex="-1">3. \u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0CBigInt \u548C Number \u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002 <a class="header-anchor" href="#_3-\u5728\u5B89\u5168\u6574\u6570\u8303\u56F4\u5185\uFF0Cbigint-\u548C-number-\u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token number">0n</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token comment">// false</span>

<span class="token number">0n</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="_4-\u9ED8\u8BA4\u60C5\u51B5\u4E0B-bigint-\u503C\u4E0D\u80FD\u4F7F\u7528json-stringify-\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49tojson\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1">4. \u9ED8\u8BA4\u60C5\u51B5\u4E0B BigInt \u503C\u4E0D\u80FD\u4F7F\u7528JSON.stringify()\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49toJSON\u65B9\u6CD5\u5B9E\u73B0 <a class="header-anchor" href="#_4-\u9ED8\u8BA4\u60C5\u51B5\u4E0B-bigint-\u503C\u4E0D\u80FD\u4F7F\u7528json-stringify-\u5E8F\u5217\u5316\u3002\u4F46\u53EF\u4EE5\u81EA\u5B9A\u4E49tojson\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token class-name">BigInt</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toJSON</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u5728 Number \u4E0E BigInt \u4E4B\u95F4\u8FDB\u884C\u8F6C\u6362\u4F1A\u635F\u5931\u7CBE\u5EA6\uFF0C\u56E0\u800C\u5EFA\u8BAE\u4EC5\u5728\u503C\u53EF\u80FD\u5927\u4E8E 2<sup>53</sup> \u65F6\u4F7F\u7528 BigInt \u7C7B\u578B\uFF0C\u5E76\u4E14\u4E0D\u5728\u4E24\u79CD\u7C7B\u578B\u4E4B\u95F4\u8FDB\u884C\u76F8\u4E92\u8F6C\u6362\u3002</p>`,25),o=[p];function c(i,l,u,r,k,g){return a(),s("div",null,o)}var m=n(e,[["render",c]]);export{b as __pageData,m as default};