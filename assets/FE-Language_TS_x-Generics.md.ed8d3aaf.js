import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const y='{"title":"\u6CDB\u578B Generics","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CDB\u578B\u5B9A\u4E49","slug":"\u6CDB\u578B\u5B9A\u4E49"},{"level":3,"title":"\u6CDB\u578B\u53D8\u91CF","slug":"\u6CDB\u578B\u53D8\u91CF"},{"level":3,"title":"1. \u6CDB\u578B\u5B9A\u4E49\u51FD\u6570","slug":"_1-\u6CDB\u578B\u5B9A\u4E49\u51FD\u6570"},{"level":3,"title":"2. \u6CDB\u578B\u6570\u7EC4","slug":"_2-\u6CDB\u578B\u6570\u7EC4"},{"level":3,"title":"3. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61","slug":"_3-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61"},{"level":3,"title":"4. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B","slug":"_4-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B"},{"level":2,"title":"\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF","slug":"\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF"},{"level":2,"title":"\u6CDB\u578B\u7EA6\u675F","slug":"\u6CDB\u578B\u7EA6\u675F"},{"level":2,"title":"\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B","slug":"\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B"}],"relativePath":"FE-Language/TS/x-Generics.md"}',p={},o=t(`<h1 id="\u6CDB\u578B-generics" tabindex="-1">\u6CDB\u578B Generics <a class="header-anchor" href="#\u6CDB\u578B-generics" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u6CDB\u578B\u5B9A\u4E49">\u6CDB\u578B\u5B9A\u4E49</a><ul><li><a href="#\u6CDB\u578B\u53D8\u91CF">\u6CDB\u578B\u53D8\u91CF</a></li><li><a href="#_1-\u6CDB\u578B\u5B9A\u4E49\u51FD\u6570">1. \u6CDB\u578B\u5B9A\u4E49\u51FD\u6570</a></li><li><a href="#_2-\u6CDB\u578B\u6570\u7EC4">2. \u6CDB\u578B\u6570\u7EC4</a></li><li><a href="#_3-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61">3. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61</a></li><li><a href="#_4-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B">4. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B</a></li></ul></li><li><a href="#\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF">\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF</a></li><li><a href="#\u6CDB\u578B\u7EA6\u675F">\u6CDB\u578B\u7EA6\u675F</a></li><li><a href="#\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B">\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B</a></li></ul></div></p><h2 id="\u6CDB\u578B\u5B9A\u4E49" tabindex="-1">\u6CDB\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u6CDB\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u6CDB\u578B\uFF08Generics\uFF09\u662F\u6307\u5728\u5B9A\u4E49\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u80FD\u9884\u5148\u786E\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u4F46\u6211\u4EEC\u80FD\u660E\u786E\u53EF\u80FD\u6709\u54EA\u4E9B\u7C7B\u578B\u53CA\u7C7B\u578B\u4F5C\u7528\u8303\u56F4\uFF0C\u6B64\u65F6\u5728\u5B9A\u4E49\u65F6\u53EF\u4EE5\u5148\u4F7F\u7528\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\u6765\u4EE3\u66FF\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u5728\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u7F16\u8BD1\u5668\u4F1A\u63A8\u65AD\u5F53\u524D\u7C7B\u578B\u53D8\u91CF\u6307\u4EE3\u7684\u5B9E\u9645\u7C7B\u578B\u3002</p><p>\u770B\u5B98\u7F51\u7684\u4F8B\u5B50\uFF1A</p><p>\u6211\u4EEC\u60F3\u8981\u8BBE\u8BA1\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4EFB\u4F55\u6211\u4EEC\u4F20\u5165\u7684\u4E1C\u897F\uFF0CJS \u5199\u6CD5\u4E2D\u662F\u8FD9\u6837\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">identity</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u8FD9\u4E2A\u51FD\u6570\uFF0C\u6211\u4EEC\u671F\u671B\u662F\u4F60\u4F20\u5165\u4EC0\u4E48\u7C7B\u578B\uFF0C\u6211\u8FD4\u56DE\u4EC0\u4E48\u7C7B\u578B\u3002\u4F46\u662F\u5728\u5B9E\u9645\u8C03\u7528\u65F6\u4F60\u53EF\u80FD\u4F20\u5165\u7684\u5177\u4F53\u7C7B\u578B\u6211\u662F\u4E0D\u77E5\u9053\u7684\uFF0C\u6211\u552F\u4E00\u660E\u786E\u7684\u4E00\u70B9\u662F\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8DDF\u4F60\u4F20\u5165\u7684 arg \u53C2\u6570\u7684\u7C7B\u578B\u662F\u76F8\u540C\u7684\u3002</p><p>\u5927\u6982\u662F\u50CF\u8FD9\u4E2A\u6837\u5B50\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">identity</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6CDB\u578B\u53D8\u91CF" tabindex="-1">\u6CDB\u578B\u53D8\u91CF <a class="header-anchor" href="#\u6CDB\u578B\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u5176\u4E2D <code>T</code> \u662F\u6211\u4EEC\u7528\u6765\u6307\u4EE3\u67D0\u4E00\u79CD\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u53EB\u505A\u7C7B\u578B\u53D8\u91CF\uFF0C\u6216\u8005 \u6CDB\u578B\u53D8\u91CF\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u540D\u79F0\uFF0C\u53EA\u8981\u5728\u6570\u91CF\u4E0A\u548C\u4F7F\u7528\u65B9\u5F0F\u4E0A\u80FD\u5BF9\u5E94\u4E0A\u5C31\u53EF\u4EE5\u3002\u4E00\u822C\u6211\u4EEC\u4F1A\u4F7F\u7528\u5355\u4E2A\u5927\u5199\u5B57\u6BCD\u6765\u8868\u793A\u3002</p><p>\u4F46\u50CF\u4E0A\u9762\u8FD9\u6837\u5B9A\u4E49\u51FD\u6570\uFF0C\u5728\u4E66\u5199\u65F6\u7F16\u8BD1\u5668\u5C31\u4F1A\u63D0\u793A\u62A5\u9519\uFF0C\u7F16\u8BD1\u65F6\u63D0\u793A\u62A5\u9519\u4FE1\u606F\u662F\uFF1A<code>Cannot find name &#39;T&#39;.</code> \u627E\u4E0D\u5230<code>T</code>\u8FD9\u4E2A\u7C7B\u578B\u5B9A\u4E49\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u4F7F\u7528\u7C7B\u578B\u53D8\u91CF\uFF0C\u4E5F\u6709\u70B9\u50CF\u5728 JS \u4E2D\u4F7F\u7528\u53D8\u91CF\u4E00\u6837\uFF0C\u9700\u8981\u4E8B\u5148\u58F0\u660E\u7C7B\u578B\u53D8\u91CF\u3002\u8FD9\u91CC\u58F0\u660E\u7684\u4F4D\u7F6E\u5C31\u662F\u51FD\u6570\u540D\u540E\u9762\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u5C31\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u4E86\u3002</p><div class="language-ts"><pre><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E0A\u9762\u8FD9\u79CD<code>identity&lt;T&gt;</code>\u8DDF\u6211\u4EEC\u4E4B\u524D\u8BB2\u7684\u7C7B\u578B\u65AD\u8A00\u7684\u5F62\u5F0F\u6709\u70B9\u7C7B\u4F3C<code>&lt;string&gt;arg</code>\uFF0C\u6CDB\u578B\u4F7F\u7528\u7C7B\u578B\u53D8\u91CF\u653E\u5728\u540E\u9762\uFF0C\u7C7B\u578B\u65AD\u8A00\u4F7F\u7528\u5177\u4F53\u7C7B\u578B\u653E\u5728\u524D\u9762\u3002</p><p>\u6CDB\u578B\u57FA\u672C\u90FD\u7528\u5728\u5F15\u7528\u6570\u636E\u7C7B\u578B\u4E0A\uFF0C\u56E0\u4E3A\u53EA\u6709\u5F15\u7528\u7C7B\u578B\u7684\u624D\u5177\u4F53\u590D\u6742\u7C7B\u578B\uFF0C\u57FA\u672C\u7C7B\u578B\u90FD\u662F\u5355\u4F8B\u7C7B\u578B\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u63A5\u7740\u770B\u4E0B\u5206\u522B\u5728\u51FD\u6570\u3001\u6570\u7EC4\u3001\u5BF9\u8C61\u3001\u7C7B\u4E0A\u4F7F\u7528\u6CDB\u578B\u3002</p><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u58F0\u660E\u6CDB\u578B\u53D8\u91CF\uFF1A\u7C7B\u4F3C<code>\u53D8\u91CF\u540D&lt;\u6CDB\u578B\u53D8\u91CF&gt;</code>\u5F62\u5F0F</li><li>\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528\u6CDB\u578B\u53D8\u91CF</li></ul><h3 id="_1-\u6CDB\u578B\u5B9A\u4E49\u51FD\u6570" tabindex="-1">1. \u6CDB\u578B\u5B9A\u4E49\u51FD\u6570 <a class="header-anchor" href="#_1-\u6CDB\u578B\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// \u76F4\u63A5\u51FD\u6570\u5B9A\u4E49\u6CDB\u578B</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token comment">// \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570</span>
<span class="token keyword">interface</span> <span class="token class-name">IIdentityFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myIdentity<span class="token operator">:</span> IIdentityFn <span class="token operator">=</span> identity
</code></pre></div><h3 id="_2-\u6CDB\u578B\u6570\u7EC4" tabindex="-1">2. \u6CDB\u578B\u6570\u7EC4 <a class="header-anchor" href="#_2-\u6CDB\u578B\u6570\u7EC4" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// [index:keyType]:valueType \u53EF\u7D22\u5F15\u63A5\u53E3\u5F62\u5F0F</span>
<span class="token keyword">interface</span> <span class="token class-name">INumberArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> INumberArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// elemType[] \u5F62\u5F0F</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// Array&lt;elemType&gt; \u5F62\u5F0F</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="_3-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61" tabindex="-1">3. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61 <a class="header-anchor" href="#_3-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ISport<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
	length<span class="token operator">:</span> <span class="token builtin">number</span>
	sprots<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> favoriteSport<span class="token operator">:</span> ISport<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	length<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	sprots<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;basketball&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B" tabindex="-1">4. \u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B <a class="header-anchor" href="#_4-\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u7C7B" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
	zeroValue<span class="token operator">:</span> <span class="token constant">T</span>
	<span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF" tabindex="-1">\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF <a class="header-anchor" href="#\u591A\u4E2A\u6CDB\u578B\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u6CDB\u578B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4E00\u6B21\u5B9A\u4E49\u591A\u4E2A\u7C7B\u578B\u53C2\u6570\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">swap</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token function">swap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;seven&#39;, 7]</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A swap \u51FD\u6570\uFF0C\u7528\u6765\u4EA4\u6362\u8F93\u5165\u7684\u5143\u7EC4\u3002</p><h2 id="\u6CDB\u578B\u7EA6\u675F" tabindex="-1">\u6CDB\u578B\u7EA6\u675F <a class="header-anchor" href="#\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a></h2><p>\u6CDB\u578B\u6307\u4EE3\u4E0D\u786E\u5B9A\u7684\u7C7B\u578B\uFF0C\u6240\u4EE5\u5728\u51FD\u6570\u6216\u7C7B\u5B9A\u4E49\u67D0\u4E9B\u53EA\u9650\u5177\u4F53\u7C7B\u578B\u624D\u80FD\u4F7F\u7528\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\u5C31\u4F1A\u62A5\u9519\uFF0C\u6BD4\u5982\u4E0B\u9762\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,19): error TS2339: Property &#39;length&#39; does not exist on type &#39;T&#39;.</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6CDB\u578B T \u4E0D\u4E00\u5B9A\u5305\u542B\u5C5E\u6027 length\uFF0C\u6BD4\u5982 number \u7C7B\u578B\u5C31\u6CA1\u6709 length\uFF0C\u6240\u4EE5\u7F16\u8BD1\u7684\u65F6\u5019\u62A5\u9519\u4E86\u3002</p><p>\u8FD9\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9\u6CDB\u578B\u8FDB\u884C\u7EA6\u675F\uFF0C\u53EA\u5141\u8BB8\u8FD9\u4E2A\u51FD\u6570\u4F20\u5165\u90A3\u4E9B\u5305\u542B length \u5C5E\u6027\u7684\u53D8\u91CF\u3002\u8FD9\u5C31\u662F\u6CDB\u578B\u7EA6\u675F\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
	length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">loggingIdentity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
	<span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 extends \u7EA6\u675F\u4E86\u6CDB\u578B T \u5FC5\u987B\u7B26\u5408\u63A5\u53E3 Lengthwise \u7684\u5F62\u72B6\uFF0C\u4E5F\u5C31\u662F\u5FC5\u987B\u5305\u542B length \u5C5E\u6027\u3002</p><p><strong>\u591A\u4E2A\u6CDB\u578B\u53C2\u6570\u95F4\u7684\u7EA6\u675F</strong></p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">copyFields</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> id <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		target<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>source<span class="token punctuation">)</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> target
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>

<span class="token function">copyFields</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span> b<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E24\u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u5176\u4E2D\u8981\u6C42 T \u7EE7\u627F U\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86 U \u4E0A\u4E0D\u4F1A\u51FA\u73B0 T \u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u6BB5\u3002</p><p>\u53E6\u5916\u4E00\u4E2A\uFF1A\u4F7F\u7528\u4E00\u4E2A\u4E4B\u524D\u5728\u7D22\u5F15\u7C7B\u578B\u4E2D\u7684\u4F8B\u5B50\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> d<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getProperty</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getProperty</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Argument of type &#39;&quot;c&quot;&#39; is not assignable to parameter of type &#39;&quot;a&quot; | &quot;b&quot;&#39;.</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E24\u4E2A\u7C7B\u578B\u53C2\u6570\uFF0C\u5176\u4E2D\u8981\u6C42<code>K</code>\u7EE7\u627F\u81EA<code>keyof T</code>\u4E2D\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u51FA\u73B0\u4E0D\u5728<code>keyof T</code>\u4E2D\u7684\u5C5E\u6027\u5C31\u4F1A\u63D0\u793A\u62A5\u9519\u3002</p><h2 id="\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B" tabindex="-1">\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B <a class="header-anchor" href="#\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5728 TypeScript 2.3 \u4EE5\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E3A\u6CDB\u578B\u4E2D\u7684\u7C7B\u578B\u53C2\u6570\u6307\u5B9A\u9ED8\u8BA4\u7C7B\u578B\u3002\u5F53\u4F7F\u7528\u6CDB\u578B\u65F6\u6CA1\u6709\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u6307\u5B9A\u7C7B\u578B\u53C2\u6570\uFF0C\u4ECE\u5B9E\u9645\u503C\u53C2\u6570\u4E2D\u4E5F\u65E0\u6CD5\u63A8\u6D4B\u51FA\u65F6\uFF0C\u8FD9\u4E2A\u9ED8\u8BA4\u7C7B\u578B\u5C31\u4F1A\u8D77\u4F5C\u7528\u3002</p><p>\u6CE8\u610F\u6CDB\u578B\u7C7B\u578B\u53C2\u6570\u9ED8\u8BA4\u503C\u8FD8\u662F\u5728\u6CDB\u578B\u53C2\u6570\u58F0\u660E\u7684\u5730\u65B9\u3002</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> value
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div>`,50),e=[o];function c(l,r,k,u,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{y as __pageData,h as default};