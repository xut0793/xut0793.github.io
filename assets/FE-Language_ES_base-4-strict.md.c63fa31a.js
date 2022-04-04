import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const g=`{"title":"\u4E25\u683C\u6A21\u5F0F 'use strict'","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A use strict","slug":"\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A-use-strict"},{"level":2,"title":"\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027","slug":"\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027"}],"relativePath":"FE-Language/ES/base-4-strict.md"}`,p={},o=t(`<h1 id="\u4E25\u683C\u6A21\u5F0F-use-strict" tabindex="-1">\u4E25\u683C\u6A21\u5F0F &#39;use strict&#39; <a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F-use-strict" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A-use-strict">\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A use strict</a></li><li><a href="#\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027">\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027</a></li></ul></div></p><p>ES\u6709\u4E24\u79CD\u4EE3\u7801\u6267\u884C\u6A21\u5F0F\uFF1A\u4E25\u683C\u6A21\u5F0F\u548C\u5BBD\u677E\u6A21\u5F0F\u3002</p><p>\u9ED8\u8BA4\u4E3A\u5BBD\u677E\u6A21\u5F0F\uFF0C\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u9700\u8981\u624B\u52A8\u5F00\u542F\u3002</p><p>\u4E25\u683C\u6A21\u5F0F\u6709\u66F4\u591A\u7684\u8B66\u544A\u548C\u66F4\u52A0\u5408\u7406\u7684\u4EE3\u7801\uFF0C\u4E00\u4E9B\u4E0D\u5B89\u5168\u7279\u6027\u53D8\u5F97\u66F4\u5C11\u3002</p><h2 id="\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A-use-strict" tabindex="-1">\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A use strict <a class="header-anchor" href="#\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF1A-use-strict" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u5728\u4E00\u4E2AJS\u6587\u4EF6\uFF0CES\u6A21\u5757\u6587\u4EF6\u3001script\u6807\u7B7E\u5185\u7684\u7B2C\u4E00\u884C\u3001\u51FD\u6570\u4F53\u7684\u7B2C\u4E00\u884C\u6765\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u3002\u4E0D\u540C\u7684\u4F4D\u7F6E\u4EE3\u8868\u4E25\u683C\u6A21\u5F0F\u7684\u4F5C\u7528\u8303\u56F4\u3002</p><h2 id="\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027" tabindex="-1">\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027 <a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684\u7279\u6027" aria-hidden="true">#</a></h2><ol><li>\u53D8\u91CF\u5FC5\u987B\u88AB\u663E\u5F0F\u58F0\u660E\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u5BBD\u677E\u6A21\u5F0F\u4E0B\u672A\u58F0\u660E\u53D8\u91CF\u76F4\u63A5\u4F7F\u7528\u65F6\u4F1A\u6210\u4E3A\u5168\u5C40\u53D8\u91CF</li><li>\u51FD\u6570\u5FC5\u987B\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u6216\u51FD\u6570\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u624D\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4E0D\u80FD\u5728\u5757\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u51FD\u6570\u3002\u4F46\u53EF\u4EE5\u6362\u6210\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5199\u6CD5\u3002</li><li>\u65E0\u5BF9\u8C61\u7ED1\u5B9A\u7684this\u5C06\u6307\u5411undefined\uFF0C\u800C\u4E0D\u662F\u5BBD\u677E\u6A21\u5F0F\u4E0B\u7684\u5168\u5C40\u5BF9\u8C61\u3002</li><li>\u51FD\u6570\u5185\u7684arguments\u5BF9\u8C61\u4E0D\u80FD\u8C03\u7528arguments.callee\u548Carguments.caller\u65B9\u6CD5\u3002</li><li>\u4E25\u683C\u6A21\u5F0F\u4E0B\u7981\u7528\u516B\u8FDB\u5236\u6570\u3002</li><li>\u4E25\u683C\u6A21\u5F0F\u4E0B\u7981\u7528with\u8BED\u53E5</li><li>\u4E25\u683C\u6A21\u5F0F\u4E0Beval()\u66F4\u52A0\u7B80\u6D01</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> 
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// Uncaught ReferenceError: a is not defined</span>

<span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">text</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: text is not defined</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6B63\u5E38\uFF0Cthis === obj</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> obj<span class="token punctuation">.</span>say<span class="token punctuation">;</span>
<span class="token function">s</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Uncaught TypeError: Cannot read property &#39;name&#39; of undefined</span>

<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">012</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught SyntaxError: Octal literals are not allowed in strict mode.</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>caller<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// Uncaught TypeError: &#39;caller&#39;, &#39;callee&#39;, and &#39;arguments&#39; properties may not be accessed on strict mode functions or the arguments objects for calls to them</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5176\u4E2D\u4E25\u683C\u6A21\u5F0F\u4E0B\u7684this\u6307\u5411\u9650\u5236\uFF0C\u5BF9\u4E8E\u6784\u9020\u51FD\u6570\u6765\u8BF4\u5F88\u6709\u7528\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u5BF9\u4E8E\u4E0D\u5C0F\u5FC3\u5FD8\u8BB0\u5BF9new\u53BB\u8C03\u7528\u6784\u9020\u51FD\u6570\u65F6\u5C06\u4F1A\u770B\u5230\u8B66\u544A\u4FE1\u606F\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> blackCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blackCar<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// black</span>
<span class="token keyword">var</span> redCar <span class="token operator">=</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Uncaught TypeError: Cannot set property &#39;color&#39; of undefined</span>
</code></pre></div><p>\u5F53\u7136\u4E0A\u9762\u8FD9\u79CD\u9650\u5236\u6784\u9020\u51FD\u6570\u4E0D\u80FD\u7528\u4F5C\u666E\u901A\u51FD\u6570\u8C03\u7528\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7<code>new.target</code>\u5C5E\u6027\u8FBE\u5230\u76EE\u7684</p><p>new.target\u5C5E\u6027\u5141\u8BB8\u4F60\u68C0\u6D4B\u51FD\u6570\u6216\u6784\u9020\u65B9\u6CD5\u662F\u5426\u662F\u901A\u8FC7new\u8FD0\u7B97\u7B26\u88AB\u8C03\u7528\u7684\u3002</p><ul><li>\u5728\u901A\u8FC7new\u8FD0\u7B97\u7B26\u88AB\u521D\u59CB\u5316\u7684\u51FD\u6570\u6216\u6784\u9020\u65B9\u6CD5\u4E2D\uFF0Cnew.target\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u6784\u9020\u65B9\u6CD5\u6216\u51FD\u6570\u7684\u5F15\u7528\u3002</li><li>\u5728\u666E\u901A\u7684\u51FD\u6570\u8C03\u7528\u4E2D\uFF0Cnew.target \u7684\u503C\u662Fundefined\u3002</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&quot;Car() must be called with new&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color
<span class="token punctuation">}</span>

<span class="token keyword">var</span> blackCar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blackCar<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// black</span>
<span class="token keyword">var</span> redCar <span class="token operator">=</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Uncaught Car() must be called with new</span>
</code></pre></div>`,17),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};