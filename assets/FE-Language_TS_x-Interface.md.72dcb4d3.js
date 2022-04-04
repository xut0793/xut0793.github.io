import{_ as n,c as s,o as a,a as p}from"./app.f1e974b0.js";const g='{"title":"\u63A5\u53E3 Interfaces","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784","slug":"\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784"},{"level":3,"title":"1. \u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784","slug":"_1-\u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784"},{"level":3,"title":"2. \u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784","slug":"_2-\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784"},{"level":3,"title":"3. \u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784","slug":"_3-\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784"},{"level":3,"title":"4. \u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B","slug":"_4-\u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B"},{"level":2,"title":"\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027","slug":"\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027"},{"level":3,"title":"\u53EF\u9009\u5C5E\u6027","slug":"\u53EF\u9009\u5C5E\u6027"},{"level":3,"title":"\u4EFB\u610F\u5C5E\u6027","slug":"\u4EFB\u610F\u5C5E\u6027"},{"level":3,"title":"\u53EA\u8BFB\u5C5E\u6027","slug":"\u53EA\u8BFB\u5C5E\u6027"},{"level":2,"title":"\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B","slug":"\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B"},{"level":3,"title":"\u5408\u5E76\u63A5\u53E3","slug":"\u5408\u5E76\u63A5\u53E3"},{"level":3,"title":"\u7EE7\u627F\u63A5\u53E3","slug":"\u7EE7\u627F\u63A5\u53E3"},{"level":3,"title":"\u63A5\u53E3\u7EE7\u627F\u7C7B","slug":"\u63A5\u53E3\u7EE7\u627F\u7C7B"},{"level":2,"title":"\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B","slug":"\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B"}],"relativePath":"FE-Language/TS/x-Interface.md"}',t={},e=p(`<h1 id="\u63A5\u53E3-interfaces" tabindex="-1">\u63A5\u53E3 Interfaces <a class="header-anchor" href="#\u63A5\u53E3-interfaces" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784">\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784</a><ul><li><a href="#_1-\u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784">1. \u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784</a></li><li><a href="#_2-\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784">2. \u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784</a></li><li><a href="#_3-\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784">3. \u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784</a></li><li><a href="#_4-\u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B">4. \u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B</a></li></ul></li><li><a href="#\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027">\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027</a><ul><li><a href="#\u53EF\u9009\u5C5E\u6027">\u53EF\u9009\u5C5E\u6027</a></li><li><a href="#\u4EFB\u610F\u5C5E\u6027">\u4EFB\u610F\u5C5E\u6027</a></li><li><a href="#\u53EA\u8BFB\u5C5E\u6027">\u53EA\u8BFB\u5C5E\u6027</a></li></ul></li><li><a href="#\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B">\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B</a><ul><li><a href="#\u5408\u5E76\u63A5\u53E3">\u5408\u5E76\u63A5\u53E3</a></li><li><a href="#\u7EE7\u627F\u63A5\u53E3">\u7EE7\u627F\u63A5\u53E3</a></li><li><a href="#\u63A5\u53E3\u7EE7\u627F\u7C7B">\u63A5\u53E3\u7EE7\u627F\u7C7B</a></li></ul></li><li><a href="#\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B">\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B</a></li></ul></div></p><p>TypeScript \u7684\u6838\u5FC3\u539F\u5219\u4E4B\u4E00\u662F\u5BF9\u503C\u6240\u5177\u6709\u7684\u7ED3\u6784\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u63A5\u53E3\u7684\u5C31\u662F\u4E3A\u7C7B\u578B\u68C0\u67E5\u5B9A\u4E49\u68C0\u67E5\u6807\u51C6\uFF0C\u5373\u503C\u7684\u7ED3\u6784\u5FC5\u987B\u6309\u63A5\u53E3\u7684\u5B9A\u4E49\u53BB\u5B9E\u73B0\u3002</p><p>\u63A5\u53E3\u57FA\u672C\u7528\u6CD5\u5728\u57FA\u7840\u7C7B\u578B\u4E00\u8282\u4E5F\u8BB2\u8FC7\u4E86\u3002\u8FD9\u91CC\u4E3B\u8981\u662F\u5BF9\u7C7B\u76F8\u5173\u7684\u6982\u5FF5\u4F5C\u4E2A\u603B\u7ED3\u3002</p><h2 id="\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784" tabindex="-1">\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784 <a class="header-anchor" href="#\u7528\u63A5\u53E3\u5B9A\u4E49\u503C\u7684\u7ED3\u6784" aria-hidden="true">#</a></h2><h3 id="_1-\u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784" tabindex="-1">1. \u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784 <a class="header-anchor" href="#_1-\u7528\u63A5\u53E3\u5B9A\u4E49\u5BF9\u8C61\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784" tabindex="-1">2. \u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784 <a class="header-anchor" href="#_2-\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ISum</span> <span class="token punctuation">{</span>
	<span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> sum<span class="token operator">:</span> ISum
<span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u4E00\u822C\u51FD\u6570\u4E0D\u7528\u63A5\u53E3\u5B9A\u4E49\uFF0C\u51FD\u6570\u6709\u66F4\u4E3A\u4FBF\u6377\u7684\u7C7B\u578B\u7EA6\u675F\u65B9\u5F0F</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784" tabindex="-1">3. \u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784 <a class="header-anchor" href="#_3-\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IList</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> IList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><p>\u4F46\u4E00\u822C\u6570\u7EC4\u4E5F\u4E0D\u7528\u63A5\u53E3\u5B9A\u4E49\uFF0C\u6570\u7EC4\u6709\u66F4\u4E3A\u4FBF\u6377\u7684\u7EA6\u675F\u65B9\u5F0F</p><div class="language-ts"><pre><code><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="_4-\u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B" tabindex="-1">4. \u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B <a class="header-anchor" href="#_4-\u7528\u63A5\u53E3\u5B9A\u4E49\u7C7B" aria-hidden="true">#</a></h3><p>\u5173\u4E8E\u7C7B\u7684\u57FA\u672C\u77E5\u8BC6\u8BF7\u67E5\u770B\u4E0A\u8282 TS \u4E2D\u7684\u7C7B</p><p>\u6216\u8005\u66F4\u51C6\u786E\u8BF4\u6CD5\u662F\uFF1A <strong>\u7528\u7C7B\u53BB\u5B9E\u73B0\u63A5\u53E3</strong>\u3002\u56E0\u4E3A\u63A5\u53E3\u53EA\u662F\u5BF9\u7C7B\u7ED3\u6784\u7684\u4E00\u4E2A\u63CF\u8FF0\u89C4\u5219\uFF0C\u800C\u7C7B\u548C\u7C7B\u7684\u5B9E\u4F8B\u662F\u5BF9\u8FD9\u4E2A\u89C4\u5219\u7684\u5B9E\u73B0\u3002</p><div class="language-ts"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E86\u4E00\u4E2A\u62A5\u8B66\u5668\u7684\u63A5\u53E3\u89C4\u8303\uFF0C\u5B83\u6709\u4E00\u4E2A\u53D1\u51FA\u8B66\u544A\u7684\u65B9\u6CD5alert</span>
<span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9632\u76D7\u95E8\u53EF\u4EE5\u5B89\u88C5\u62A5\u8B66\u5668\uFF0C\u6240\u4EE5Alarm\u53EF\u4EE5\u5728\u9632\u76D7\u95E8\u7684\u7C7B\u4E0A\u5B9E\u73B0</span>
<span class="token keyword">class</span> <span class="token class-name">SecurityDoor</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;be be be ...&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6C7D\u8F66\u4E5F\u6709\u9632\u76D7\u62A5\u8B66\u529F\u80FD\uFF0C\u6240\u4EE5\u6C7D\u8F66\u7684\u7C7B\u4E5F\u53EF\u4EE5\u5B9E\u73B0Alarm\u63A5\u53E3</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;di di di ...&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u7C7B\u662F\u5177\u6709\u4E24\u90E8\u5206\uFF1A \u9759\u6001\u90E8\u5206 \u548C \u5B9E\u4F8B\u90E8\u5206\u3002\u4E00\u4E2A\u7C7B\u5B9E\u73B0\u4E86\u4E00\u4E2A\u63A5\u53E3\u65F6\uFF0C\u53EA\u5BF9\u5176\u5B9E\u4F8B\u90E8\u5206\uFF08\u5B9E\u4F8B\u5C5E\u6027\u548C\u5B9E\u4F8B\u65B9\u6CD5\uFF09\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u4E0D\u4F1A\u5BF9\u7C7B\u7684\u9759\u6001\u90E8\u5206\uFF08\u7C7B\u7684\u6784\u9020\u5668\u548C\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF09\u4F5C\u7C7B\u578B\u68C0\u67E5\u3002</p><p>\u6240\u4EE5\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\u6765\u5206\u522B\u5B9A\u4E49\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u9488\u5BF9\u7C7B\u7684\u6784\u9020\u51FD\u6570\u7684\u63A5\u53E3,\u53EF\u4EE5\u4F7F\u7528C\u6807\u8BC6</span>
<span class="token keyword">interface</span> <span class="token class-name">CCar</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span><span class="token punctuation">(</span>color<span class="token operator">:</span>string<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9488\u5BF9\u7C7B\u7684\u5B9E\u4F8B\u90E8\u5206\u7684\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">ICar</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\u4F20\u5165\u7C7B\uFF0C\u8FD4\u56DE\u5B9E\u4F8B\uFF0C\u8FD4\u56DE\u7684\u5B9E\u4F8B\u7C7B\u578B\u7B26\u5408\u63A5\u53E3ICar</span>
<span class="token keyword">function</span> <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctor</span><span class="token operator">:</span>CCar<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">:</span>ICar <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ctor</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u7C7B\u5B9E\u4F8BICar</span>
<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">ICar</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;di di di ...&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> redCar <span class="token operator">=</span> <span class="token function">createCar</span><span class="token punctuation">(</span>Car<span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027" tabindex="-1">\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027 <a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49\u53EF\u9009\u5C5E\u6027\u3001\u53EA\u8BFB\u5C5E\u6027\u3001\u4EFB\u610F\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u63A5\u53E3\uFF0C\u4F7F\u7528\u5173\u952E\u5B57 interface</span>
<span class="token comment">// \u63A5\u53E3\u4E00\u822C\u9996\u5B57\u6BCD\u5927\u5199\uFF0C\u5728\u6709\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\u4F1A\u5EFA\u8BAE\u63A5\u53E3\u7684\u540D\u79F0\u52A0\u4E0A I \u524D\u7F00\u3002 interface IPerson</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u58F0\u660E\u4E86\u4E00\u4E2A\u63A5\u53E3 Person\uFF0C\u5E76\u4E14\u5B9A\u4E49\u4E86\u5B83\u62E5\u6709\u4E00\u4E2A string \u7C7B\u578B\u7684\u5C5E\u6027 name\uFF0C\u548C\u4E00\u4E2A number \u7C7B\u578B\u7684\u5C5E\u6027 age\u3002</p><p>\u63A5\u7740\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53D8\u91CF tom\uFF0C\u5B83\u7684\u7C7B\u578B\u662F Person\u3002\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u7EA6\u675F\u4E86 tom \u7684\u5F62\u72B6\u5FC5\u987B\u548C\u63A5\u53E3 Person \u4E00\u81F4\u3002</p><p>\u8FD9\u6837\uFF0C\u5728\u5B9A\u4E49\u7684\u53D8\u91CF\u6BD4\u63A5\u53E3\u5C11\u4E86\u4E00\u4E9B\u5C5E\u6027\u662F\u4E0D\u5141\u8BB8\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">tom</span><span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1\u5668\u4F1A\u63D0\u793A\u62A5\u9519\uFF0C\u5F3A\u5236\u7F16\u8BD1\u4F1A\u8F93\u51FA\u5982\u4E0B\u9519\u8BEF\u4FE1\u606F</span>
<span class="token comment">// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">// Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span>
</code></pre></div><p>\u591A\u4E00\u4E9B\u5C5E\u6027\u4E5F\u662F\u4E0D\u5141\u8BB8\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">tom</span><span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
	<span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1\u5668\u4F1A\u63D0\u793A\u62A5\u9519\uFF0C\u5F3A\u5236\u7F16\u8BD1\u4F1A\u8F93\u51FA\u5982\u4E0B\u9519\u8BEF\u4FE1\u606F</span>
<span class="token comment">// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre></div><p>\u53EF\u89C1\uFF0C\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u53D8\u91CF\u7684\u5F62\u72B6\u5FC5\u987B\u548C\u63A5\u53E3\u7684\u5F62\u72B6\u4FDD\u6301\u4E00\u81F4\u3002</p><h3 id="\u53EF\u9009\u5C5E\u6027" tabindex="-1">\u53EF\u9009\u5C5E\u6027 <a class="header-anchor" href="#\u53EF\u9009\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u6211\u4EEC\u5E0C\u671B\u4E0D\u8981\u5B8C\u5168\u5339\u914D\u4E00\u4E2A\u5F62\u72B6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528\u53EF\u9009\u5C5E\u6027\uFF1A<code>?</code></p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u5728\u5C5E\u6027\u540D\u540E\u9762\u7D27\u63A5 ? \u8868\u793A\u8BE5\u5C5E\u6027\u5728\u5B9E\u73B0\u65F6\u53EF\u6709\u53EF\u65E0</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u65F6\u4ECD\u7136\u4E0D\u5141\u8BB8\u6DFB\u52A0\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u4F7F\u7528\u5B9A\u4E49\u63A5\u53E3\u7684\u4EFB\u610F\u5C5E\u6027</p><h3 id="\u4EFB\u610F\u5C5E\u6027" tabindex="-1">\u4EFB\u610F\u5C5E\u6027 <a class="header-anchor" href="#\u4EFB\u610F\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u4E00\u4E2A\u63A5\u53E3\u5141\u8BB8\u6709\u4EFB\u610F\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// \u4F7F\u7528 [propName: string] \u5B9A\u4E49\u4E86\u5BF9\u8C61\u53EF\u4EE5\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32string\u7C7B\u578B\u547D\u540Dkey\u7684\u4EFB\u610F\u5C5E\u6027\u3002</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E00\u65E6\u5728\u5B9A\u4E49\u4E86\u4EFB\u610F\u5C5E\u6027\u7684\u63A5\u53E3\u4E2D\uFF0C\u5B83\u7684\u786E\u5B9A\u5C5E\u6027\u548C\u53EF\u9009\u5C5E\u6027\u7684\u7C7B\u578B\u90FD\u5FC5\u987B\u662F\u4EFB\u610F\u5C5E\u6027\u5B9A\u4E49\u7C7B\u578B\u7684\u5B50\u96C6\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
	gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span>
<span class="token comment">// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Index signatures are incompatible.</span>
<span class="token comment">//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span>
<span class="token comment">//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u4EFB\u610F\u5C5E\u6027\u7684\u503C\u5141\u8BB8\u662F string\uFF0C\u4F46\u662F\u53EF\u9009\u5C5E\u6027 age \u7684\u503C\u5374\u662F number\uFF0Cnumber \u4E0D\u662F string \u7684\u5B50\u5C5E\u6027\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><h3 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1">\u53EA\u8BFB\u5C5E\u6027 <a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E9B\u5B57\u6BB5\u53EA\u80FD\u5728\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u8D4B\u503C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528 <code>readonly</code> \u5B9A\u4E49\u53EA\u8BFB\u5C5E\u6027\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
	<span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">9527</span>
<span class="token comment">// index.ts(14,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u4F7F\u7528 readonly \u5B9A\u4E49\u7684\u5C5E\u6027 id \u521D\u59CB\u5316\u540E\uFF0C\u53C8\u88AB\u8D4B\u503C\u4E86\uFF0C\u6240\u4EE5\u62A5\u9519\u4E86\u3002</p><p>\u6CE8\u610F\uFF0C\u53EA\u8BFB\u7684\u7EA6\u675F\u5B58\u5728\u4E8E\u7B2C\u4E00\u6B21\u7ED9\u5BF9\u8C61\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E00\u6B21\u7ED9\u53EA\u8BFB\u5C5E\u6027\u8D4B\u503C\u7684\u65F6\u5019\uFF1A</p><div class="language-TS"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u200B
<span class="token keyword">let</span> tom<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u200B
tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>
\u200B
<span class="token comment">// index.ts(8,5): error TS2322: Type &#39;{ name: string; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;id&#39; is missing in type &#39;{ name: string; gender: string; }&#39;.</span>
<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre></div><h2 id="\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B" tabindex="-1">\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B <a class="header-anchor" href="#\u63A5\u53E3\u7684\u5408\u5E76\u3001\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3\u3001\u63A5\u53E3\u7EE7\u627F\u7C7B" aria-hidden="true">#</a></h2><h3 id="\u5408\u5E76\u63A5\u53E3" tabindex="-1">\u5408\u5E76\u63A5\u53E3 <a class="header-anchor" href="#\u5408\u5E76\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u540C\u540D\u7684\u63A5\u53E3\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0C\u5408\u5E76\u7684\u673A\u5236\u662F\u628A\u53CC\u65B9\u7684\u6210\u5458\u653E\u5230\u4E00\u4E2A\u540C\u540D\u7684\u63A5\u53E3\u91CC\u3002</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
	height<span class="token operator">:</span> <span class="token builtin">number</span>
	width<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
	scale<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> box<span class="token operator">:</span> Box <span class="token operator">=</span> <span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> scale<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u53E3\u7684\u975E\u51FD\u6570\u7684\u6210\u5458\u5E94\u8BE5\u662F\u552F\u4E00\u7684\u3002\u5982\u679C\u5B83\u4EEC\u4E0D\u662F\u552F\u4E00\u7684\uFF0C\u90A3\u4E48\u5B83\u4EEC\u5FC5\u987B\u662F\u76F8\u540C\u7684\u7C7B\u578B\u3002\u5982\u679C\u4E24\u4E2A\u63A5\u53E3\u4E2D\u540C\u65F6\u58F0\u660E\u4E86\u540C\u540D\u7684\u975E\u51FD\u6570\u6210\u5458\u4E14\u5B83\u4EEC\u7684\u7C7B\u578B\u4E0D\u540C\uFF0C\u5219\u7F16\u8BD1\u5668\u4F1A\u62A5\u9519\u3002</p><p>\u5BF9\u4E8E\u51FD\u6570\u6210\u5458\uFF0C\u6BCF\u4E2A\u540C\u540D\u51FD\u6570\u58F0\u660E\u90FD\u4F1A\u88AB\u5F53\u6210\u8FD9\u4E2A\u51FD\u6570\u7684\u4E00\u4E2A\u91CD\u8F7D\u3002 \u540C\u65F6\u9700\u8981\u6CE8\u610F\uFF0C\u5F53\u63A5\u53E3 A \u4E0E\u540E\u6765\u7684\u63A5\u53E3 A \u5408\u5E76\u65F6\uFF0C\u540E\u9762\u7684\u63A5\u53E3\u5177\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u3002</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span><span class="token operator">:</span> Animal
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Sheep<span class="token punctuation">)</span><span class="token operator">:</span> Sheep
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Dog<span class="token punctuation">)</span><span class="token operator">:</span> Dog
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Cat<span class="token punctuation">)</span><span class="token operator">:</span> Cat
<span class="token punctuation">}</span>
</code></pre></div><p>\u5408\u5E76\u7684\u6548\u679C\u7C7B\u4F3C\u5982\u4E0B\u58F0\u660E\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Cloner</span> <span class="token punctuation">{</span>
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Dog<span class="token punctuation">)</span><span class="token operator">:</span> Dog
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Cat<span class="token punctuation">)</span><span class="token operator">:</span> Cat
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Sheep<span class="token punctuation">)</span><span class="token operator">:</span> Sheep
	<span class="token function">clone</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Animal<span class="token punctuation">)</span><span class="token operator">:</span> Animal
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\u6BCF\u7EC4\u63A5\u53E3\u91CC\u7684\u58F0\u660E\u987A\u5E8F\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4F46\u5404\u7EC4\u63A5\u53E3\u4E4B\u95F4\u7684\u987A\u5E8F\u662F\u540E\u6765\u7684\u63A5\u53E3\u91CD\u8F7D\u51FA\u73B0\u5728\u9760\u524D\u4F4D\u7F6E\u3002\u8FD9\u662F\u56E0\u4E3A\u91CD\u8F7D\u51FD\u6570\u7684\u5339\u914D\u4F18\u5148\u7EA7\u662F\u4ECE\u4E0A\u5230\u4E0B\u7684\u3002</p><p>\u6709\u4E00\u4E2A\u4F8B\u5916\u662F\u5F53\u51FA\u73B0\u7279\u6B8A\u7684\u51FD\u6570\u7B7E\u540D\u65F6\u3002 \u5982\u679C\u7B7E\u540D\u91CC\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u7C7B\u578B\u662F \u5355\u4E00\u7684\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\uFF08\u6BD4\u5982\uFF0C\u4E0D\u662F\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7684\u8054\u5408\u7C7B\u578B\uFF09\uFF0C\u90A3\u4E48\u5B83\u5C06\u4F1A\u88AB\u63D0\u5347\u5230\u91CD\u8F7D\u5217\u8868\u7684\u6700\u9876\u7AEF\u3002</p><p>\u6BD4\u5982\u4E0B\u4F8B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> Element
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLDivElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLSpanElement
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLCanvasElement
<span class="token punctuation">}</span>
</code></pre></div><p>\u5408\u5E76\u540E\u7684 Document \u5C06\u4F1A\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\u6548\u679C\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLCanvasElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLDivElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLSpanElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement
	<span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> Element
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7EE7\u627F\u63A5\u53E3" tabindex="-1">\u7EE7\u627F\u63A5\u53E3 <a class="header-anchor" href="#\u7EE7\u627F\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u63A5\u53E3\u4E5F\u53EF\u4EE5\u76F8\u4E92\u7EE7\u627F\uFF0C\u80FD\u591F\u4ECE\u4E00\u4E2A\u63A5\u53E3\u91CC\u590D\u5236\u6210\u5458\u5230\u53E6\u4E00\u4E2A\u63A5\u53E3\u91CC\uFF0C\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u5C06\u63A5\u53E3\u5206\u5272\u5230\u53EF\u91CD\u7528\u7684\u6A21\u5757\u91CC\u3002</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
	color<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
	sideLength<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token operator">&lt;</span>Square<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
square<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
square<span class="token punctuation">.</span>sideLength <span class="token operator">=</span> <span class="token number">10</span>
</code></pre></div><p>\u4E00\u4E2A\u63A5\u53E3\u53EF\u4EE5\u7EE7\u627F\u591A\u4E2A\u63A5\u53E3\uFF0C\u521B\u5EFA\u51FA\u591A\u4E2A\u63A5\u53E3\u7684\u5408\u6210\u63A5\u53E3\u3002</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
	color<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PenStroke</span> <span class="token punctuation">{</span>
	penWidth<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">,</span> PenStroke <span class="token punctuation">{</span>
	sideLength<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token operator">&lt;</span>Square<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
square<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
square<span class="token punctuation">.</span>sideLength <span class="token operator">=</span> <span class="token number">10</span>
square<span class="token punctuation">.</span>penWidth <span class="token operator">=</span> <span class="token number">5.0</span>
</code></pre></div><h3 id="\u63A5\u53E3\u7EE7\u627F\u7C7B" tabindex="-1">\u63A5\u53E3\u7EE7\u627F\u7C7B <a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u7C7B" aria-hidden="true">#</a></h3><p>\u63A5\u53E3\u4E5F\u53EF\u4EE5\u7EE7\u627F\u7C7B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
	x<span class="token operator">:</span> <span class="token builtin">number</span>
	y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Point3d</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
	z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point3d<span class="token operator">:</span> Point3d <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B" tabindex="-1">\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B <a class="header-anchor" href="#\u63A5\u53E3\u5B9A\u4E49\u6DF7\u5408\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u8BF4\u8FC7\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63A5\u53E3\u7684\u65B9\u5F0F\u6765\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u9700\u8981\u7B26\u5408\u7684\u5F62\u72B6\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc
<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u6240\u6709\u6709\u65F6\u5019\uFF0C\u4E00\u4E2A\u51FD\u6570\u8FD8\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
	<span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
	interval<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Counter <span class="token punctuation">{</span>
	<span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token operator">&lt;</span>Counter<span class="token operator">&gt;</span><span class="token keyword">function</span><span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> start<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	counter<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">123</span>
	counter<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> counter
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">5.0</span>
</code></pre></div>`,76),o=[e];function c(l,r,k,u,i,d){return a(),s("div",null,o)}var b=n(t,[["render",c]]);export{g as __pageData,b as default};
