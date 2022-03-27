import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const y='{"title":"\u67E5\u8BE2\u5B57\u7B26\u4E32\u89E3\u6790 querystring","description":"","frontmatter":{},"headers":[{"level":2,"title":"JS \u539F\u751F\u5168\u5C40 API \u5B9E\u73B0\u7F16\u7801\u89E3\u7801","slug":"js-\u539F\u751F\u5168\u5C40-api-\u5B9E\u73B0\u7F16\u7801\u89E3\u7801"},{"level":3,"title":"encodeURI decodeURI","slug":"encodeuri-decodeuri"},{"level":3,"title":"encodeURIComponent decodeURIComponent","slug":"encodeuricomponent-decodeuricomponent"},{"level":2,"title":"Node \u7684 querystring \u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801","slug":"node-\u7684-querystring-\u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801"},{"level":2,"title":"stringify parse \u7684\u5B9E\u73B0","slug":"stringify-parse-\u7684\u5B9E\u73B0"}],"relativePath":"Server/node/querystring.md"}',p={},o=t(`<h1 id="\u67E5\u8BE2\u5B57\u7B26\u4E32\u89E3\u6790-querystring" tabindex="-1">\u67E5\u8BE2\u5B57\u7B26\u4E32\u89E3\u6790 querystring <a class="header-anchor" href="#\u67E5\u8BE2\u5B57\u7B26\u4E32\u89E3\u6790-querystring" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#js-\u539F\u751F\u5168\u5C40-api-\u5B9E\u73B0\u7F16\u7801\u89E3\u7801">JS \u539F\u751F\u5168\u5C40 API \u5B9E\u73B0\u7F16\u7801\u89E3\u7801</a><ul><li><a href="#encodeuri-decodeuri">encodeURI decodeURI</a></li><li><a href="#encodeuricomponent-decodeuricomponent">encodeURIComponent decodeURIComponent</a></li></ul></li><li><a href="#node-\u7684-querystring-\u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801">Node \u7684 querystring \u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801</a></li><li><a href="#stringify-parse-\u7684\u5B9E\u73B0">stringify parse \u7684\u5B9E\u73B0</a></li></ul></div></p><p><code>querystring</code> \u6A21\u5757\u662F\u7528\u4E8E\u89E3\u6790\u548C\u683C\u5F0F\u5316 URL \u67E5\u8BE2\u5B57\u7B26\u4E32\u7684\u5B9E\u7528\u5DE5\u5177\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI" target="_blank" rel="noopener noreferrer">MDN \u53C2\u8003\u94FE\u63A5</a></p><p>\u5148\u770B\u4E00\u4E0B\u4E00\u4E2A\u5B8C\u6574\u7684 URI \u662F\u600E\u4E48\u6837\u683C\u5F0F\uFF1A</p><div class="language-js"><pre><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>username<span class="token operator">:</span>password@www<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">80</span><span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>file<span class="token punctuation">.</span>php<span class="token operator">?</span>foo<span class="token operator">=</span><span class="token number">316</span><span class="token operator">&amp;</span>bar<span class="token operator">=</span><span class="token keyword">this</span><span class="token operator">+</span>has<span class="token operator">+</span>spaces#anchor
</code></pre></div><p>\u8FD9\u91CC\u9762\u5305\u62EC URI \u89C4\u8303\u4E2D\u4FDD\u7559\u5B57\u7B26\u3001\u975E\u8F6C\u4E49\u5B57\u7B26\u3001\u53CA\u54C8\u5E0C\u5B57\u7B26</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u5305\u542B</th></tr></thead><tbody><tr><td>\u4FDD\u7559\u5B57\u7B26</td><td><code>;</code> <code>,</code> <code>/</code> <code>?</code> <code>:</code> <code>@</code> <code>&amp;</code> <code>=</code> <code>+</code> <code>$</code></td></tr><tr><td>\u975E\u8F6C\u4E49\u5B57\u7B26</td><td>\u6B63\u5E38\u5927\u5C0F\u5199\u5B57\u6BCD \u6570\u5B57 0-9 <code>-</code> <code>_</code> <code>.</code> <code>!</code> <code>~</code> <code>*</code> <code>&#39;</code> <code>(</code> <code>)</code></td></tr><tr><td>\u54C8\u5E0C\u7B26\u53F7</td><td><code>#</code></td></tr></tbody></table><h2 id="js-\u539F\u751F\u5168\u5C40-api-\u5B9E\u73B0\u7F16\u7801\u89E3\u7801" tabindex="-1">JS \u539F\u751F\u5168\u5C40 API \u5B9E\u73B0\u7F16\u7801\u89E3\u7801 <a class="header-anchor" href="#js-\u539F\u751F\u5168\u5C40-api-\u5B9E\u73B0\u7F16\u7801\u89E3\u7801" aria-hidden="true">#</a></h2><h3 id="encodeuri-decodeuri" tabindex="-1"><code>encodeURI</code> <code>decodeURI</code> <a class="header-anchor" href="#encodeuri-decodeuri" aria-hidden="true">#</a></h3><p><code>encodeURI</code>\u4F1A\u5BF9\u4E0D\u662F\u4EE5\u4E0A\u4E09\u7C7B\u7684\u5B57\u7B26\u8FDB\u884C\u7F16\u7801\u8F6C\u4E49\u6210<code>%</code>+\u6570\u5B57\u7684\u5F62\u5F0F\u3002</p><p><code>decodeURI</code> \u4F1A\u4F7F\u7528\u540C\u6837\u89C4\u5219\u5BF9 <code>encodeURI</code> \u7F16\u7801\u8FC7\u7684\u8F6C\u4E49\u5B57\u7B26\u4E32\u8FDB\u884C\u89E3\u7801\u6210\u539F\u6765\u7684\u6837\u5B50\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token string">&#39;http://www.jxbh.cn/illegal value.htm#start&#39;</span> <span class="token comment">// \u5176\u4E2D\u5305\u542B\u7A7A\u683C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// http: //www.jxbh.cn/illegal%20value.htm#start</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> uri<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="encodeuricomponent-decodeuricomponent" tabindex="-1"><code>encodeURIComponent</code> <code>decodeURIComponent</code> <a class="header-anchor" href="#encodeuricomponent-decodeuricomponent" aria-hidden="true">#</a></h3><p><code>encodeURIComponent</code> \u5219\u4F1A\u8F6C\u4E49\u9664 <strong>\u975E\u8F6C\u4E49\u5B57\u7B26</strong> \u5916\u7684\u6240\u6709\u5B57\u7B26\u3002</p><p><code>decodeURIComponent</code> \u5219\u5BF9<code>encodeURIComponent</code>\u7F16\u7801\u7684\u5B57\u7B26\u8FDB\u884C\u89E3\u7801\u6210\u539F\u6765\u7684\u6837\u5B50\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token string">&#39;http://www.jxbh.cn/illegal value.htm#start&#39;</span> <span class="token comment">// \u8DDF\u4E0A\u4F8B\u4E00\u6837\uFF0C\u5BF9\u6BD4\u7ED3\u679C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// http%3A%2F%2Fwww.jxbh.cn%2Fillegal%20value.htm%23start</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> uri<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="node-\u7684-querystring-\u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801" tabindex="-1">Node \u7684 querystring \u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801 <a class="header-anchor" href="#node-\u7684-querystring-\u6A21\u5757\u5B9E\u73B0\u7F16\u7801\u89E3\u7801" aria-hidden="true">#</a></h2><p><strong>\u5F15\u5165\u6A21\u5757\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>API\uFF1A</strong></p><div class="language-js"><pre><code><span class="token comment">// \u7ED9\u5B9A\u7684 str \u4E0A\u6267\u884C URL \u767E\u5206\u6BD4\u7F16\u7801\u3002 \u6548\u679C\u8DDFJS\u7684encodeURIComponent\u4E00\u6837\u3002</span>
querystring<span class="token punctuation">.</span><span class="token function">escape</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token operator">:</span>string
<span class="token comment">// \u89E3\u7801\uFF0C\u6548\u679C\u8DDFJS\u7684decodeURIComponent\u4E00\u6837\u3002</span>
querystring<span class="token punctuation">.</span><span class="token function">unescape</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

<span class="token comment">// \u5C06 URL \u67E5\u8BE2\u5B57\u7B26\u4E32 str \u89E3\u6790\u4E3A\u952E\u503C\u5BF9\u7684\u96C6\u5408</span>
querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token punctuation">,</span> sep<span class="token punctuation">[</span><span class="token punctuation">,</span> eq<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// \u5C06\u4E00\u4E2A\u5BF9\u8C61\u8F6C\u6362\u751F\u6210 URL \u67E5\u8BE2\u5B57\u7B26\u4E32</span>
querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token punctuation">,</span> sep<span class="token punctuation">[</span><span class="token punctuation">,</span> eq<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

querystring<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u662F querystring.parse() \u7684\u522B\u540D\u3002</span>
querystring<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u662F querystring.stringify() \u7684\u522B\u540D\u3002</span>
</code></pre></div><p><strong>\u53C2\u6570\u8BF4\u660E\uFF1A</strong></p><ul><li>sep : \u7528\u4E8E\u5206\u9694\u952E\u503C\u5BF9\u7684\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4<code>&amp;</code></li><li>eq : \u7528\u4E8E\u5206\u9694\u952E key \u548C\u503C value \u7684\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4<code>=</code></li><li>obj : stringify \u80FD\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u7684\u503C\u7C7B\u578B\u4E3A \u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5E03\u5C14\u503C\uFF0C\u6216\u7531\u8FD9\u4E09\u79CD\u7C7B\u578B\u503C\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5176\u5B83\u7C7B\u578B\u7684\u503C\u90FD\u4F1A\u88AB\u5F3A\u5236\u8F6C\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002<code>&lt;string&gt; | &lt;number&gt; | &lt;boolean&gt; | &lt;string[]&gt; | &lt;number[]&gt; | &lt;boolean[]&gt;</code></li></ul><p><strong>\u793A\u4F8B\u8BF4\u660E\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;foo=bar&amp;abc=xyz&amp;abc=123&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//foo%3Dbar%26abc%3Dxyz%26abc%3D123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qs<span class="token punctuation">.</span><span class="token function">escape</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// foo%3Dbar%26abc%3Dxyz%26abc%3D123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qs<span class="token punctuation">.</span><span class="token function">unescape</span><span class="token punctuation">(</span>qs<span class="token punctuation">.</span><span class="token function">escape</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;qux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;quux&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">corge</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> qs1 <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">let</span> qs2 <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// \u4E00\u6837\u7684\u7ED3\u679C\uFF1A&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge=&#39;</span>

<span class="token keyword">let</span> qobj1 <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>qs1<span class="token punctuation">)</span>
<span class="token keyword">let</span> qobj2 <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>qs2<span class="token punctuation">)</span>
<span class="token comment">// \u4E00\u6837\u7684\u7ED3\u679C\uFF1A {foo:&#39;bar&#39;,baz: [&#39;qux&#39;, &#39;quux&#39;],corge:&#39;&#39;}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u6307\u5B9A\u5176\u5B83\u5206\u9694\u7B26</span>
<span class="token keyword">let</span> qs <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token string">&#39;qux&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span> <span class="token comment">// foo:bar;baz:qux</span>
<span class="token keyword">let</span> qobj <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>qs<span class="token punctuation">,</span> <span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span> <span class="token comment">// { foo: &#39;bar&#39;, baz: &#39;qux&#39; }</span>
</code></pre></div><h2 id="stringify-parse-\u7684\u5B9E\u73B0" tabindex="-1">stringify parse \u7684\u5B9E\u73B0 <a class="header-anchor" href="#stringify-parse-\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><a href="https://github.com/Gozala/querystring" target="_blank" rel="noopener noreferrer">\u94FE\u63A5</a></p><p><strong><code>stringify</code></strong></p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span>

<span class="token keyword">var</span> <span class="token function-variable function">stringifyPrimitive</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
			<span class="token keyword">return</span> v

		<span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
			<span class="token keyword">return</span> v <span class="token operator">?</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;false&#39;</span>

		<span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
			<span class="token keyword">return</span> <span class="token function">isFinite</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">?</span> v <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>

		<span class="token keyword">default</span><span class="token operator">:</span>
			<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> sep<span class="token punctuation">,</span> eq<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sep <span class="token operator">=</span> sep <span class="token operator">||</span> <span class="token string">&#39;&amp;&#39;</span>
	eq <span class="token operator">=</span> eq <span class="token operator">||</span> <span class="token string">&#39;=&#39;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		obj <span class="token operator">=</span> <span class="token keyword">undefined</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">var</span> ks <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">stringifyPrimitive</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> eq
				<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
						<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
							<span class="token keyword">return</span> ks <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">stringifyPrimitive</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
						<span class="token punctuation">}</span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> ks <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">stringifyPrimitive</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
	<span class="token keyword">return</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">stringifyPrimitive</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> eq <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">stringifyPrimitive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 node \u9879\u76EE\u4E2D\u7ECF\u5E38\u4F7F\u7528<code>querystring.parse</code>\u5BF9\u8868\u5355<code>post</code>\u63D0\u4EA4\u7684 body \u4E2D\u7684\u6570\u636E\u8FDB\u884C\u89E3\u6790\u3002\u5728\u5904\u7406<code>get</code>\u8BF7\u6C42\u4E2D url \u9644\u5E26\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\u89E3\u6790\u5219\u4E3B\u8981\u4F7F\u7528 url \u6A21\u5757<code>url.parse(url,true)</code>,\u6307\u5B9A\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>true</code>\u83B7\u53D6\u3002</p><p><strong>parse</strong></p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">function</span> <span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">qs<span class="token punctuation">,</span> sep<span class="token punctuation">,</span> eq<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sep <span class="token operator">=</span> sep <span class="token operator">||</span> <span class="token string">&#39;&amp;&#39;</span>
	eq <span class="token operator">=</span> eq <span class="token operator">||</span> <span class="token string">&#39;=&#39;</span>
	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> qs <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> qs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> obj
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
	qs <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>

	<span class="token keyword">var</span> maxKeys <span class="token operator">=</span> <span class="token number">1000</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>maxKeys <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxKeys <span class="token operator">=</span> options<span class="token punctuation">.</span>maxKeys
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> len <span class="token operator">=</span> qs<span class="token punctuation">.</span>length
	<span class="token comment">// maxKeys &lt;= 0 means that we should not limit keys count</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>maxKeys <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> len <span class="token operator">&gt;</span> maxKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		len <span class="token operator">=</span> maxKeys
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> x <span class="token operator">=</span> qs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regexp<span class="token punctuation">,</span> <span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			idx <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>eq<span class="token punctuation">)</span><span class="token punctuation">,</span>
			kstr<span class="token punctuation">,</span>
			vstr<span class="token punctuation">,</span>
			k<span class="token punctuation">,</span>
			v

		<span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			kstr <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> idx<span class="token punctuation">)</span>
			vstr <span class="token operator">=</span> x<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			kstr <span class="token operator">=</span> x
			vstr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
		<span class="token punctuation">}</span>

		k <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>kstr<span class="token punctuation">)</span>
		v <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>vstr<span class="token punctuation">)</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
</code></pre></div>`,37),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
