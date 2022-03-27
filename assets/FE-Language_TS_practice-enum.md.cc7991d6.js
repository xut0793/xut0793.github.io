import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const g='{"title":"\u524D\u7AEF\u72B6\u6001\u91CF\u4F7F\u7528\u679A\u4E3E\u7684\u601D\u8003","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0","slug":"\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0"},{"level":2,"title":"\u5982\u4F55\u6539\u5584","slug":"\u5982\u4F55\u6539\u5584"},{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0"}],"relativePath":"FE-Language/TS/practice-enum.md"}',p={},o=t(`<h1 id="\u524D\u7AEF\u72B6\u6001\u91CF\u4F7F\u7528\u679A\u4E3E\u7684\u601D\u8003" tabindex="-1">\u524D\u7AEF\u72B6\u6001\u91CF\u4F7F\u7528\u679A\u4E3E\u7684\u601D\u8003 <a class="header-anchor" href="#\u524D\u7AEF\u72B6\u6001\u91CF\u4F7F\u7528\u679A\u4E3E\u7684\u601D\u8003" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0">\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0</a></li><li><a href="#\u5982\u4F55\u6539\u5584">\u5982\u4F55\u6539\u5584</a></li><li><a href="#\u5B9E\u73B0">\u5B9E\u73B0</a></li></ul></div></p><p>\u6587\u7AE0\u6458\u81EA\u4EE5\u4E0B<a href="https://www.ruphi.cn/archives/348/" target="_blank" rel="noopener noreferrer">\u94FE\u63A5</a>\uFF0C\u63A8\u8350\u8BBF\u95EE\u539F\u6587\u3002</p><h2 id="\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0" tabindex="-1">\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0 <a class="header-anchor" href="#\u524D\u7AEF\u5E38\u89C1\u7684\u72B6\u6001\u91CF\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u65E5\u5E38\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u7ECF\u5E38\u9047\u5230\u679A\u4E3E\uFF0C\u5982\u5546\u54C1\u72B6\u6001\u3001\u9875\u9762\u72B6\u6001\u3001\u5BA1\u6838\u72B6\u6001\u7B49\uFF0C\u7FFB\u9605 \b \u4EE5\u5F80\u7684\u4E00\u4E9B\u4E1A\u52A1\u4EE3\u7801\uFF0C\u4F1A\u53D1\u73B0\u5F88\u591A\u5730\u65B9\u90FD\u662F\u8FD9\u4E48\u5199\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == 0&quot;</span><span class="token operator">&gt;</span>\u5BA1\u6838\u4E2D<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == 1&quot;</span><span class="token operator">&gt;</span>\u5BA1\u6838\u901A\u8FC7<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u5176\u5B9E\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u9B54\u6570\u5316\uFF1A\u4E00\u65E6\u6709\u4E2A\u6570\u503C\u6539\u52A8\uFF0C\u5C31\u5F97\u5168\u5C40\u66FF\u6362\u5339\u914D</li><li>\u5DEE\u8BED\u4E49\u5316\uFF1A\u65E0\u6CD5\u76F4\u89C2\u901A\u8FC7\u503C\u63A8\u5BFC\u51FA\u542B\u4E49</li></ul><p>\u4E8E\u662F\uFF0C\u8FDB\u9636\u505A\u6CD5\u6211\u4EEC\u60F3\u7684\u662F\u901A\u8FC7\u5F15\u5165\u5E38\u91CF\u5B9A\u4E49\uFF0C\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">STATUS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;AUDITING&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;PASS&#39;</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.AUDITING&quot;</span><span class="token operator">&gt;</span>\u5BA1\u6838\u4E2D<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.PASS&quot;</span><span class="token operator">&gt;</span>\u5BA1\u6838\u901A\u8FC7<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre></div><p>\u4F46\u662F\u95EE\u9898\u662F\uFF0C\u6211\u4EEC\u9700\u8981\u540E\u9762\u72B6\u6001\u5BF9\u5E94\u7684\u63CF\u8FF0\uFF0C\u5982\u201C\u5BA1\u6838\u4E2D\u201D\uFF0C\u201C\u5BA1\u6838\u901A\u8FC7\u201D\u4E5F\u6709\u72B6\u6001\u5BF9\u5E94\u3002</p><p>\u4E8E\u662F\u5728 VUE \u4E2D\u53C8\u4F1A\u8FDB\u4E00\u6B65\u4F7F\u7528\u8FC7\u6EE4\u5668\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">STATUS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;AUDITING&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;PASS&#39;</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">STATUSTODESC</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA1\u6838\u4E2D&#39;</span>
    <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA1\u6838\u901A\u8FC7&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">filterStatusDesc</span><span class="token operator">:</span> <span class="token parameter">status</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">STATUSTODESC</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.AUDITING&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>status <span class="token operator">|</span> filterStatusDesc <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.PASS&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>status <span class="token operator">|</span> filterStatusDesc <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre></div><p>\u8FD9\u6837\u5B50\u867D\u7136\u4E5F\u633A\u65B9\u4FBF\uFF0C\u4F46\u662F\u4ECD\u7136\u4E0D\u591F\u5B8C\u7F8E\uFF1A</p><ul><li>\u5B9A\u4E49\u9694\u79BB\uFF1A\u679A\u4E3E\u503C\u548C\u679A\u4E3E\u542B\u4E49\u5206\u79BB\uFF0C\u8FD8\u662F\u4F1A\u5E26\u6765\u4E00\u5B9A\u7EF4\u62A4\u4E0A\u7684\u95EE\u9898</li></ul><h2 id="\u5982\u4F55\u6539\u5584" tabindex="-1">\u5982\u4F55\u6539\u5584 <a class="header-anchor" href="#\u5982\u4F55\u6539\u5584" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u671F\u671B\u7684\u5E94\u8BE5\u662F\u5B9A\u4E49\u80FD\u591F\u4E00\u4F53\u5316\uFF0C\u800C\u4E0D\u662F\u5206\u6563\u5316\u3002\u53C2\u8003 Java \u91CC\u7684\u679A\u4E3E\u505A\u6CD5\uFF0C\u5176\u5B9E\u597D\u5F88\u591A\uFF1A</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">AgingTypeEnum</span> <span class="token punctuation">{</span>
    <span class="token function">ALL</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5168\u90E8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SPECIAL</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7279\u6279\u65F6\u6548&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">PLATFORM</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5E73\u53F0\u5B9A\u4E49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u662F\uFF0C\u867D\u7136 TS \u91CC\u4E5F\u5B9E\u73B0\u4E86 enum\uFF0C\u4F46\u5176\u5B9E\u505A\u6CD5\u8FD8\u662F\u6709\u4E9B\u4E0D\u4E00\u6837\uFF0C\u8FD8\u662F\u4E0D\u90A3\u4E48\u5229\u4E8E\u6211\u4EEC\u7684\u4E1A\u52A1\u573A\u666F\u3002\u56E0\u4E3A TS \u91CC\u7684 enum\uFF0C\u4E5F\u4E0D\u662F\u679A\u4E3E\u503C\u4E0E\u542B\u4E49\u5B9A\u4E49\u4E00\u4F53\u5316\u3002</p><div class="language-ts"><pre><code><span class="token comment">// ts\u7684\u679A\u4E3E\u6700\u591A\u80FD\u7B80\u5316STATUS\u5E38\u91CF\u7684\u5B9A\u4E49\uFF0C\u4E5F\u4E0D\u80FD\u628A\u63CF\u8FF0\u4E5F\u52A0\u8FDB\u6765</span>
<span class="token keyword">enum</span> <span class="token constant">STATUS</span> <span class="token punctuation">{</span>
	<span class="token constant">AUDITING</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token constant">PASS</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u4E8E\u6211\u4EEC\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u53EF\u80FD\u4E0B\u9762\u8FD9\u4E48\u505A\u66F4\u5229\u4E8E\u6211\u4EEC\u7684\u4F7F\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">STATUS</span> <span class="token operator">=</span> <span class="token function">createEnum</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token constant">AUDITING</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5BA1\u6838\u4E2D&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token constant">PASS</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5BA1\u6838\u901A\u8FC7&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.AUDITING&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>status <span class="token operator">|</span> filterStatusDesc<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;status == STATUS.PASS&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>status <span class="token operator">|</span> filterStatusDesc<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u5F53\u524D\u72B6\u6001\uFF1A<span class="token punctuation">{</span><span class="token constant">STATUS</span><span class="token punctuation">.</span><span class="token function">getDescFromValue</span><span class="token punctuation">(</span>syncData<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u4E5F\u53EF\u7528\u901A\u8FC7\u679A\u4E3E\u540D\u79F0\u83B7\u53D6\u63CF\u8FF0\uFF1A<span class="token punctuation">{</span><span class="token constant">STATUS</span><span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token string">&#39;AUDITING&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">filterStatusDesc</span><span class="token operator">:</span> <span class="token parameter">status</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">STATUS</span><span class="token punctuation">.</span><span class="token function">getDescFromValue</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u6B64\u4E00\u6765\uFF0C\u5177\u6709\u4EE5\u4E0B\u597D\u5904\uFF1A</p><ul><li>\u53BB\u9B54\u6570\u5316\uFF1A\u540E\u7AEF\u5047\u5982\u6539\u4E86\u5BA1\u6838\u4E2D\u72B6\u6001\u4E3A 2\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EA\u9700\u8981\u5728\u5F00\u5934\u628A 0 \u6539\u4E3A 2 \u5373\u53EF</li><li>\u8BED\u4E49\u5316\uFF1A\u901A\u8FC7 STATUS.AUDITING \u6211\u4EEC\u5C31\u53EF\u4EE5\u5927\u6982\u731C\u51FA\u542B\u4E49</li><li>\u5B9A\u4E49\u4E00\u4F53\u5316\uFF1A\u679A\u4E3E\u503C\u548C\u679A\u4E3E\u63CF\u8FF0\u5199\u5728\u4E86\u4E00\u8D77\uFF0C\u4E0D\u5206\u6563</li></ul><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>TS \u4EE3\u7801\u5B9E\u73B0</p><div class="language-ts"><pre><code><span class="token comment">/**
 * \u5DE5\u5177\u51FD\u6570\uFF1A\u679A\u4E3E\u72B6\u6001\u5B9A\u4E49
 * \u793A\u4F8B\uFF1A
 * const STATUS = createEnum({
 *     AUDIT_WAIT: [1, &#39;\u5BA1\u6838\u4E2D&#39;],
 *     AUDIT_PASS: [2, &#39;\u5BA1\u6838\u901A\u8FC7&#39;]
 * })
 * \u83B7\u53D6\u679A\u4E3E\u503C\uFF1ASTATUS.AUDIT_WAIT
 * \u83B7\u53D6\u679A\u4E3E\u63CF\u8FF0\uFF1ASTATUS.getDesc(&#39;AUDIT_WAIT&#39;)
 * \u901A\u8FC7\u679A\u4E3E\u503C\u83B7\u53D6\u63CF\u8FF0\uFF1ASTATUS.getDescFromValue(STATUS.WAIT)
 *
 * Created by hzliurufei on 2018-12-17 21:23:28
 * @Last Modified by: tom.xu
 * @Last Modified time: 2019-10-28 11:37:05
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IEnumDefinition</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>enumName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createEnum</span><span class="token punctuation">(</span>definition<span class="token operator">:</span> IEnumDefinition<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> strToValueMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">const</span> numToDescMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> enumName <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> desc<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span>
		strToValueMap<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span> <span class="token operator">=</span> value
		numToDescMap<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> desc
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>strToValueMap<span class="token punctuation">,</span>
		<span class="token function">getDesc</span><span class="token punctuation">(</span>enumName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">(</span>definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">getDescFromValue</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> numToDescMap<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>JS \u7248\u672C</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createEnum</span><span class="token punctuation">(</span><span class="token parameter">definition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> strToValueMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">const</span> numToDescMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> enumName <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>definition<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> desc<span class="token punctuation">]</span> <span class="token operator">=</span> definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span>
		strToValueMap<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span> <span class="token operator">=</span> value
		numToDescMap<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> desc
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>strToValueMap<span class="token punctuation">,</span>
		<span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token parameter">enumName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">(</span>definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> definition<span class="token punctuation">[</span>enumName<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">getDescFromValue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> numToDescMap<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,29),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var T=n(p,[["render",c]]);export{g as __pageData,T as default};
