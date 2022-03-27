import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const f='{"title":"\u5BF9\u8C61\u5C5E\u6027\u53CA\u5176\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u5C5E\u6027 properties","slug":"\u6570\u636E\u5C5E\u6027-properties"},{"level":2,"title":"\u8BBF\u95EE\u5668\u5C5E\u6027 Accessor properties","slug":"\u8BBF\u95EE\u5668\u5C5E\u6027-accessor-properties"},{"level":2,"title":"\u5185\u90E8\u5C5E\u6027 Internal properties","slug":"\u5185\u90E8\u5C5E\u6027-internal-properties"},{"level":2,"title":"Object.definePorperty \u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027","slug":"object-defineporperty-\u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027"},{"level":3,"title":"\u5C5E\u6027\u63CF\u8FF0\u7B26","slug":"\u5C5E\u6027\u63CF\u8FF0\u7B26"},{"level":3,"title":"\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C","slug":"\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C"},{"level":3,"title":"\u53EA\u8BFB writable:false","slug":"\u53EA\u8BFB-writable-false"},{"level":3,"title":"\u4E0D\u53EF\u679A\u4E3E enumerable:false","slug":"\u4E0D\u53EF\u679A\u4E3E-enumerable-false"},{"level":3,"title":"\u4E0D\u53EF\u914D\u7F6E configurable:false","slug":"\u4E0D\u53EF\u914D\u7F6E-configurable-false"},{"level":2,"title":"Object.defineProperties(obj,props)\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027","slug":"object-defineproperties-obj-props-\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027"},{"level":2,"title":"\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236","slug":"\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236"},{"level":3,"title":"Object.preventExtensions(obj)","slug":"object-preventextensions-obj"},{"level":3,"title":"Object.seal(obj)","slug":"object-seal-obj"},{"level":3,"title":"Object.freeze(obj)","slug":"object-freeze-obj"},{"level":3,"title":"Object.isExtensible(obj)","slug":"object-isextensible-obj"},{"level":3,"title":"Object.isSealed(obj)","slug":"object-issealed-obj"},{"level":3,"title":"Object.isFrozen(obj)","slug":"object-isfrozen-obj"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Language/ES/oop-2-object-property.md"}',p={},e=t(`<h1 id="\u5BF9\u8C61\u5C5E\u6027\u53CA\u5176\u64CD\u4F5C" tabindex="-1">\u5BF9\u8C61\u5C5E\u6027\u53CA\u5176\u64CD\u4F5C <a class="header-anchor" href="#\u5BF9\u8C61\u5C5E\u6027\u53CA\u5176\u64CD\u4F5C" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u6570\u636E\u5C5E\u6027-properties">\u6570\u636E\u5C5E\u6027 properties</a></li><li><a href="#\u8BBF\u95EE\u5668\u5C5E\u6027-accessor-properties">\u8BBF\u95EE\u5668\u5C5E\u6027 Accessor properties</a></li><li><a href="#\u5185\u90E8\u5C5E\u6027-internal-properties">\u5185\u90E8\u5C5E\u6027 Internal properties</a></li><li><a href="#object-defineporperty-\u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027">Object.definePorperty \u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027</a><ul><li><a href="#\u5C5E\u6027\u63CF\u8FF0\u7B26">\u5C5E\u6027\u63CF\u8FF0\u7B26</a></li><li><a href="#\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C">\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C</a></li><li><a href="#\u53EA\u8BFB-writable-false">\u53EA\u8BFB writable:false</a></li><li><a href="#\u4E0D\u53EF\u679A\u4E3E-enumerable-false">\u4E0D\u53EF\u679A\u4E3E enumerable:false</a></li><li><a href="#\u4E0D\u53EF\u914D\u7F6E-configurable-false">\u4E0D\u53EF\u914D\u7F6E configurable:false</a></li></ul></li><li><a href="#object-defineproperties-obj-props-\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027">Object.defineProperties(obj,props)\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027</a></li><li><a href="#\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236">\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236</a><ul><li><a href="#object-preventextensions-obj">Object.preventExtensions(obj)</a></li><li><a href="#object-seal-obj">Object.seal(obj)</a></li><li><a href="#object-freeze-obj">Object.freeze(obj)</a></li><li><a href="#object-isextensible-obj">Object.isExtensible(obj)</a></li><li><a href="#object-issealed-obj">Object.isSealed(obj)</a></li><li><a href="#object-isfrozen-obj">Object.isFrozen(obj)</a></li></ul></li><li><a href="#\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</a></li></ul></div></p><p>\u5BF9\u8C61\u7684\u5C5E\u6027\u53EF\u4EE5\u5206\u4E3A3\u79CD\uFF1A</p><p><strong>1. \u5C5E\u6027\uFF08property, \u79F0\u4E3A\u6570\u636E\u5C5E\u6027\uFF09</strong></p><p>\u5BF9\u8C61\u4E2D\u6700\u666E\u904D\u7684\u5C5E\u6027\u5F62\u5F0F\u3002\u5373\u952E\u503C\u5BF9\uFF08key-value)\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u4EE5\u5B57\u7B26\u4E32\u6216Symbol\u7C7B\u578B\u4F5C\u4E3A\u952E\u3002\u5E38\u79F0\u4E3A\u65B9\u6CD5\u7684\u51FD\u6570\u4E5F\u53EA\u662F\u4F5C\u4E3A\u503Cvalue\u5B58\u5728\u3002</p><p><strong>2. \u8BBF\u95EE\u5668\uFF08Accessor, \u79F0\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027\uFF09</strong></p><p>\u8BBF\u95EE\u5668\u7C7B\u4F3C\u8BFB\u3001\u5199\u5C5E\u6027\u7684\u7279\u6B8A\u65B9\u6CD5\u3002\u5E38\u79F0\u4E3A<code>getter</code>\u548C<code>setter</code></p><p><strong>3. \u5185\u90E8\u5C5E\u6027\uFF08Internal slot)</strong></p><p>\u53EA\u5B58\u5728\u4E8EES\u8BED\u8A00\u89C4\u8303\u4E2D\uFF0C\u901A\u5E38\u5C06\u5185\u90E8\u5C5E\u6027\u547D\u540D\u7528\u53CC\u5C42\u4E2D\u62EC\u53F7\u6765\u8868\u793A\u3002\u5B83\u4EEC\u4E0D\u80FD\u7528\u4E8EJS\u5F00\u53D1\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002\u4F46\u73B0\u4EE3JS\u8BED\u8A00\u4E5F\u5B9E\u73B0\u4E86\u65B9\u6CD5\u6765\u95F4\u63A5\u8BBF\u95EE\u5176\u503C\u3002</p><p>\u6700\u5178\u578B\u7684\u4F8B\u5B50\u662F\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B<code>[[prototype]]</code>\u3001<code>__proto__</code>\u3001<code>Object.getPrototypeOf()</code>\u65B9\u5F0F\u7684\u6F14\u53D8\u3002</p><h2 id="\u6570\u636E\u5C5E\u6027-properties" tabindex="-1">\u6570\u636E\u5C5E\u6027 properties <a class="header-anchor" href="#\u6570\u636E\u5C5E\u6027-properties" aria-hidden="true">#</a></h2><p>\u5E73\u5E38\u5728\u4F7F\u7528 ES \u5B9A\u4E49\u5E76\u521D\u59CB\u5316\u4E00\u4E2A\u7B80\u5355\u5BF9\u8C61\u65F6\uFF0C\u6211\u4EEC\u51E0\u4E4E\u90FD\u662F\u4EE5\u4E0B\u5F62\u5F0F\uFF1A\u5B57\u9762\u91CF\u5B9A\u4E49\u7684\u6570\u636E\u5C5E\u6027</p><div class="language-js"><pre><code><span class="token comment">// \u5B57\u9762\u91CF\u5F62\u5F0F</span>
<span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6216\u5148\u5B9A\u4E49\u65E0\u5C5E\u6027\u7684\u7A7A\u5BF9\u8C61{}\uFF0C\u7136\u540E\u6839\u636E\u9700\u8981\u4F7F\u7528\u6253\u70B9\u6216\u4E2D\u62EC\u53F7\u7684\u5F62\u5F0F\u6DFB\u52A0\u5C5E\u6027</span>
<span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
o1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
o1<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>
</code></pre></div><h2 id="\u8BBF\u95EE\u5668\u5C5E\u6027-accessor-properties" tabindex="-1">\u8BBF\u95EE\u5668\u5C5E\u6027 Accessor properties <a class="header-anchor" href="#\u8BBF\u95EE\u5668\u5C5E\u6027-accessor-properties" aria-hidden="true">#</a></h2><p>\u5982\u679C\u6211\u4EEC\u5BF9\u67D0\u4E2A\u5C5E\u6027\u6709\u7279\u6B8A\u7684\u8981\u6C42\uFF0C\u6BD4\u5982\u8D4B\u503C\u65F6\u9700\u8981\u8FDB\u884C\u9A8C\u8BC1\u65F6\uFF0C\u53EF\u4EE5\u91C7\u7528\u8BBF\u95EE\u5668\u5C5E\u6027\u3002</p><div class="language-js"><pre><code><span class="token keyword">let</span> kid <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The kid age setting should be less than 18&#39;</span> <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>kid<span class="token punctuation">.</span>age<span class="token punctuation">)</span>  <span class="token comment">// 8</span>
kid<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>         <span class="token comment">// &#39;The kid age setting should be less than 18&#39;</span>
kid<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>kid<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div><p>\u50CF\u4E0A\u9762\u8FD9\u79CD\uFF0C\u5728\u51FD\u6570\u524D\u76F4\u63A5\u6DFB\u52A0<code>get</code> <code>set</code> \u6807\u8BC6\u7B26\u4E5F\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u5B9A\u4E49\u5C5E\u6027\u3002\u4F7F\u7528\u65F6\u8DDF\u4E0A\u9762\u5BF9\u8C61\u8C03\u7528\u65B9\u6CD5\u5B8C\u5168\u4E00\u6837\u3002</p><h2 id="\u5185\u90E8\u5C5E\u6027-internal-properties" tabindex="-1">\u5185\u90E8\u5C5E\u6027 Internal properties <a class="header-anchor" href="#\u5185\u90E8\u5C5E\u6027-internal-properties" aria-hidden="true">#</a></h2><p>\u5185\u90E8\u5C5E\u6027\u53EA\u5B58\u5728\u4E8EES\u8BED\u8A00\u89C4\u8303\u4E2D\uFF0C\u901A\u5E38\u5C06\u5185\u90E8\u5C5E\u6027\u547D\u540D\u7528\u53CC\u5C42\u4E2D\u62EC\u53F7\u6765\u8868\u793A\u3002\u5B83\u4EEC\u4E0D\u80FD\u7528\u4E8EJS\u5F00\u53D1\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002\u4F46\u73B0\u4EE3JS\u8BED\u8A00\u4E5F\u5B9E\u73B0\u4E86\u65B9\u6CD5\u6765\u95F4\u63A5\u8BBF\u95EE\u5176\u503C\uFF0C\u6216\u8005\u5C06\u5185\u90E8\u5C5E\u6027\u4F7F\u7528Symbol\u7C7B\u578B\u503C\u6765\u5B9A\u4E49\u3002</p><blockquote><p>\u5173\u4E8E\u5185\u90E8\u5C5E\u6027\u5982\u4F55\u4F5C\u7528\u7684\u66F4\u591A\u4F8B\u5B50\u53EF\u4EE5\u67E5\u770B<a href="./type-7-checking.html#object-prototype-tostring">\u7C7B\u578B\u68C0\u6D4B</a>\u7AE0\u8282</p></blockquote><p>\u6700\u5178\u578B\u7684\u4F8B\u5B50\u662F\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B<code>[[prototype]]</code>\u3001<code>__proto__</code>\u3001<code>Object.getPrototypeOf()</code>\u65B9\u6CD5\u7684\u6F14\u8FDB\u3002</p><p>JS\u4E2D\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027<code>[[prototype]]</code>\uFF0C\u4FDD\u6301\u7740\u5B83\u539F\u578B\u5BF9\u8C61\u7684\u5F15\u7528\u3002\u5728\u65E9\u671FJS\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5F15\u7528\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\u6765\u66F2\u7EBF\u83B7\u5F97\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u3002</p><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>prototype <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
</code></pre></div><p>\u4F46\u8FD9\u79CD\u5F15\u7528\u5F88\u5947\u602A\uFF0C\u76F8\u5F53\u4E8E\u901A\u8FC7\u6784\u9020\u5668\u7ED5\u4E2A\u5F2F\uFF0C\u5E76\u4E14\u7531\u4E8EES\u8BED\u8A00\u5BF9\u8C61\u7684\u52A8\u6001\u6027\uFF0C\u6784\u9020\u5668\u7684prototype\u662F\u53EF\u4EE5\u88AB\u91CD\u5199\u7684\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5E76\u4E0D\u4FDD\u8BC1\u51C6\u786E\u3002</p><p>\u6240\u4EE5\u6700\u65E9mozilla\u5728firefox\u6D4F\u89C8\u5668\u4E2D\u63D0\u4F9B\u4E86\u81EA\u5DF1\u5B9E\u73B0\u7684\u79C1\u6709\u5C5E\u6027 <code>__proto__</code>\u6765\u83B7\u5F97<code>[[prototype]]</code>\u540C\u6837\u7684\u5F15\u7528\u3002</p><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
</code></pre></div><p>\u540E\u9762\u5176\u5B83\u6D4F\u89C8\u5668\u5382\u5546\u4E5F\u76F8\u7EE7\u5B9E\u73B0\u4E86<code>__proto__</code>\u79C1\u6709\u5C5E\u6027\uFF0C\u4F46\u5B83\u5E76\u4E0D\u662FES\u8BED\u8A00\u89C4\u8303\u4E2D\u7684\u4E00\u90E8\u5206\u3002\u9274\u4E8E\u5176\u5E94\u7528\u7684\u666E\u904D\u6027\uFF0C\u5728ES6\u6700\u65B0\u7684\u89C4\u8303\u4E2D\uFF0C\u8BED\u8A00\u6807\u51C6\u5B9E\u73B0\u4E86<code>Object.getPrototypeOf()</code>\u65B9\u6CD5\u6765\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u3002</p><div class="language-js"><pre><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
</code></pre></div><h2 id="object-defineporperty-\u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027" tabindex="-1">Object.definePorperty \u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027 <a class="header-anchor" href="#object-defineporperty-\u5B9A\u4E49\u5E76\u64CD\u4F5C\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u901A\u8FC7<code>Object.definePorperty()</code>\u65B9\u6CD5\u6765\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5E76\u5229\u7528\u5C5E\u6027\u63CF\u8FF0\u7B26\u6765\u63A7\u5236\u5355\u4E2A\u5C5E\u6027\u7684\u884C\u4E3A\u3002</p><p>\u8BED\u6CD5\u53C2\u8003\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">MDN</a></p><div class="language-js"><pre><code><span class="token comment">/**
 * \u5982\u679C\u76EE\u6807\u5BF9\u8C61target_obj\u672C\u8EAB\u5DF2\u7ECF\u5B58\u5728prop\u5C5E\u6027\uFF0C\u90A3\u4E48\u4FEE\u6539\u8BE5\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C \u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u3002
 * \u5982\u679C\u76EE\u6807\u5BF9\u8C61\u4E0A\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u90A3\u4E48\u4F1A\u76F4\u63A5\u5728\u76EE\u6807\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u8FD9\u4E2A\u65B0\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u3002
 *
 * @params {Object} target_obj \u76EE\u6807\u5BF9\u8C61
 * @params {String} prop \u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u540D\u79F0
 * @params {Object} descriptor \u5C06\u8981\u88AB\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26
 * @return {Ojbect} \u8FD4\u56DE\u5C5E\u6027\u5B9A\u4E49\u6216\u4FEE\u6539\u540E\u7684\u76EE\u6807\u5BF9\u8C61
 */</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target_obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5C5E\u6027\u63CF\u8FF0\u7B26" tabindex="-1">\u5C5E\u6027\u63CF\u8FF0\u7B26 <a class="header-anchor" href="#\u5C5E\u6027\u63CF\u8FF0\u7B26" aria-hidden="true">#</a></h3><p>\u7B80\u5355\u7406\u89E3\u5B83\u5C31\u662F\u5BF9\u76EE\u6807\u5BF9\u8C61\u5F53\u524D\u8FD9\u4E2A\u5C5E\u6027\u7684\u4E00\u7EC4\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u63A7\u5236\u4E00\u4E2A\u5C5E\u6027\u4EE5\u4E0B\u51E0\u79CD\u884C\u4E3A\uFF1A</p><ul><li>writable\uFF1A\u5C5E\u6027\u662F\u4E0D\u662F\u53EA\u8BFB\uFF0C\u5373\u8FD9\u4E2A\u5C5E\u6027\u503C\u80FD\u4E0D\u80FD\u4FEE\u6539</li><li>enumerable\uFF1A\u5C5E\u6027\u80FD\u4E0D\u80FD\u88AB\u679A\u4E3E\uFF0C\u5373for-in \u6216 in \u8BED\u53E5\u80FD\u4E0D\u80FD\u904D\u5386\u5B83</li><li>configurable\uFF1A\u5C5E\u6027\u80FD\u4E0D\u80FD\u505A\u5176\u5B83\u914D\u7F6E\uFF0C\u6BD4\u5982\u5220\u9664\u5C5E\u6027\uFF0C\u6216\u8005\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\u63CF\u8FF0\u7B26\u7B49</li></ul><p>\u90A3\u5C5E\u6027\u63CF\u8FF0\u7B26\u662F\u600E\u4E48\u5B9A\u4E49\u8FD9\u4E2A\u5C5E\u6027\u7684\u4E00\u7CFB\u5217\u89C4\u5219\u7684\u5462\uFF1F\u5B9E\u9645\u4E0A <code>descriptor</code> \u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5185\u90E8\u4E0D\u540C\u7684\u5C5E\u6027\u5B9A\u4E49\u4E86\u4E0D\u540C\u7684\u884C\u4E3A\u89C4\u5219\u3002</p><div class="language-js"><pre><code><span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// obj\u5BF9\u8C61\u7684\u6570\u636E\u5C5E\u6027name\u63CF\u8FF0\u7B26descriptor</span>
descriptor <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token keyword">get</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">set</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token parameter">sprot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sport <span class="token operator">+</span> <span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span><span class="token string">&#39;paly&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// obj\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027age\u7684\u63CF\u8FF0\u7B26descriptor</span>
descriptor <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> <span class="token keyword">get</span> name<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">set</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> <span class="token keyword">set</span> name<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u603B\u7ED3\u8FC7\u5BF9\u8C61\u5C5E\u6027\u53EF\u4EE5\u662F\u6570\u636E\u5C5E\u6027\uFF0C\u6216\u8005\u8BBF\u95EE\u5668\u5C5E\u6027\u3002\u6240\u4EE5\u76F8\u5BF9\u5E94\u7684\u6570\u636E\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26 \u548C \u8BBF\u95EE\u5668\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\u5728\u7ED3\u6784\u548C key \u952E\u662F\u6709\u70B9\u533A\u522B\u7684\u3002</p><p>\u4E24\u8005\u63CF\u8FF0\u7B26\u5BF9\u8C61\u4E2D\u76F8\u540C\u7684\u5C5E\u6027\u662F<code>enumerable</code> <code>configurable</code>\uFF0C\u7136\u540E\u6570\u636E\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u5BF9\u8C61\u4E0D\u540C\u7684\u5C5E\u6027\u662F<code>value</code> <code>writable</code>\uFF0C\u8BBF\u95EE\u5668\u5C5E\u6027\u63CF\u8FF0\u7B26\u4E0D\u540C\u7684\u5C5E\u6027\u662F<code>get</code> <code>set</code>\u3002</p><p>\u5B9E\u9645\u4E0A\u8FD9\u4E9B\u63CF\u8FF0\u7B26\u5BF9\u8C61\u7684\u5C5E\u6027\u4E5F\u88AB\u79F0\u4E3A\u76EE\u6807\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027\uFF0C\u901A\u8FC7\u52A0\u53CC\u4E2D\u62EC\u53F7\u8868\u793A\u3002\u5F53\u7136\u4E00\u4E2A\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027\u53EF\u4E0D\u4EC5\u4EC5\u53EA\u6709\u8FD9\u51E0\u4E2A\u54E6\u3002</p><p>\u524D\u9762\u6211\u4EEC\u4E5F\u8BF4\u4E86\u63CF\u8FF0\u7B26\u5BF9\u8C61\u662F\u7528\u6765\u7EA6\u5B9A\u76EE\u6807\u5BF9\u8C61\u5C5E\u6027\u7684\u3002\u6240\u4EE5\u8FD9\u4E9B\u5185\u90E8\u5C5E\u6027\u5177\u4F53\u63CF\u8FF0\u4E86\u4EC0\u4E48\u89C4\u5219\u5462\uFF1F</p><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> \u4EFB\u610F\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u6765\u8868\u793A\u5177\u6709\u6570\u636E\u5C5E\u6027\u7684\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u503C
<span class="token punctuation">[</span><span class="token punctuation">[</span>writable<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> \u5E03\u5C14\u503C\uFF0C\u7528\u6765\u8868\u793A\u5177\u6709\u6570\u636E\u5C5E\u6027\u7684\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u503C\u80FD\u4E0D\u80FD\u88AB\u91CD\u5199\uFF0C\u5373\u80FD\u4E0D\u80FD<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">=</span><span class="token template-punctuation string">\`</span></span>\u7B49\u53F7\u91CD\u65B0\u8FDB\u884C\u8D4B\u503C\u64CD\u4F5C

<span class="token punctuation">[</span><span class="token punctuation">[</span>enumerable<span class="token punctuation">]</span><span class="token punctuation">]</span>\uFF1A \u5E03\u5C14\u503C\uFF0C\u6570\u636E\u5C5E\u6027\u548C\u8BBF\u95EE\u5668\u5C5E\u6027\u90FD\u6709\uFF0C\u7528\u6765\u8868\u793A\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u679A\u4E3E\uFF0C\u6BD4\u5982<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">for-of</span><span class="token template-punctuation string">\`</span></span>\u3001<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">for in</span><span class="token template-punctuation string">\`</span></span>\u6216<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">in</span><span class="token template-punctuation string">\`</span></span>\u7B49\u8BED\u53E5\u6216\u64CD\u4F5C\u7B26\u4E2D\u904D\u5386\u4E2D\u80FD\u5426\u83B7\u53D6\u5230\u8BE5\u5C5E\u6027
<span class="token punctuation">[</span><span class="token punctuation">[</span>configurable<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> \u5E03\u5C14\u503C\uFF0C\u6570\u636E\u5C5E\u6027\u548C\u8BBF\u95EE\u5668\u5C5E\u6027\u90FD\u6709\uFF0C\u7528\u4E8E\u8868\u793A\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u914D\u7F6E\uFF0C\u6BD4\u5982\u80FD\u5426\u4F7F\u7528<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">delete</span><span class="token template-punctuation string">\`</span></span>\u64CD\u4F5C\u7B26\u5220\u9664\u8BE5\u5C5E\u6027\uFF0C\u6216\u80FD\u5426\u91CD\u65B0\u4F7F\u7528<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">defineProperty()</span><span class="token template-punctuation string">\`</span></span>\u65B9\u6CD5\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\u63CF\u8FF0\u7B26\u5BF9\u8C61\u7B49\u3002

<span class="token punctuation">[</span><span class="token punctuation">[</span>get<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> \u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\uFF0C\u7528\u6765\u914D\u7F6E\u8BBF\u95EE\u5668\u5C5E\u6027<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter</span><span class="token template-punctuation string">\`</span></span>\u65B9\u6CD5
<span class="token punctuation">[</span><span class="token punctuation">[</span>set<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> \u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\uFF0C\u7528\u6765\u914D\u7F6E\u8BBF\u95EE\u5668\u5C5E\u6027<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setter</span><span class="token template-punctuation string">\`</span></span>\u65B9\u6CD5
</code></pre></div><p>\u7406\u89E3\u4E86\u4E0A\u9762\u7684\u8FD9\u4E9B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528<code>Object.defineProperty()</code>\u6765\u91CD\u65B0\u5B9A\u4E49\u5BF9<code>o1</code> <code>o2</code>\u5BF9\u8C61\uFF0C\u770B\u4E0B\u9762\u600E\u4E48\u5199\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u6570\u636E\u5C5E\u6027</span>
<span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528defineProperty\u65B9\u6CD5\u91CD\u5199</span>
<span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B9A\u4E49\u503C</span>
	<span class="token literal-property property">wriable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u91CD\u65B0\u8D4B\u503C</span>
	<span class="token literal-property property">enumberable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u7528\u4E8E\u5FAA\u73AF\u904D\u5386</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u53EF\u4EE5\u4F7F\u7528delete\u5220\u9664\u64CD\u4F5C</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Tom</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u8BBF\u95EE\u5668\u5C5E\u6027</span>
<span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token keyword">get</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">set</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token parameter">sprot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sport <span class="token operator">+</span> <span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528defineProperty\u65B9\u6CD5\u91CD\u5199</span>
<span class="token keyword">let</span> <span class="token number">02</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&#39;play&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">enumberable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sport</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sport <span class="token operator">+</span> <span class="token string">&#39;\u8FD0\u52A8&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C" tabindex="-1">\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u63CF\u8FF0\u7B26\u7F3A\u7701\u65F6\u7684\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h3><p>\u4EE5\u5B57\u9762\u91CF\u7684\u5F62\u5F0F\u5B9A\u4E49\u5BF9\u8C61\u7684\u5C5E\u6027,\u5BF9\u8C61\u5C5E\u6027\u63CF\u8FF0\u7B26\u7684\u7279\u5F81\u503C\u90FD\u9ED8\u8BA4\u4E3A true</p><div class="language-js"><pre><code><span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u524D\u9762[\u521B\u5EFA\u5BF9\u8C61]\u7AE0\u8282\u5185\u5BB9\u4E2D\u4E94\u79CD\u65B9\u5F0F\u4E2D\u76F4\u63A5\u521B\u5EFA\u7684\u5BF9\u8C61,\u5185\u90E8\u5C5E\u6027\u63CF\u8FF0\u7B26\u7684\u7279\u5F81\u90FD\u9ED8\u8BA4\u4E3Atrue</span>
<span class="token comment">//  [[writable]]:true   [[configurable]]:true   [[enumerable]]:true</span>
<span class="token comment">// \u76F8\u5F53\u4E8E\u4EE5\u4E0B\u5F62\u5F0F</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F46\u662F\u5982\u679C\u4F7F\u7528<code>Object.defineProperty()</code>\u5B9A\u4E49\u67D0\u4E2A\u5C5E\u6027\u65F6\uFF0C\u7F3A\u7701\u7684\u63CF\u8FF0\u7B26\u7279\u5F81\u503C\u9ED8\u8BA4\u4E3A<code>false</code></p><div class="language-js"><pre><code><span class="token keyword">let</span> o3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o3<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6B64\u65F6o3.name\u5C5E\u6027\u662F\u4E0D\u53EF\u914D\u7F6E/\u4E0D\u53EF\u91CD\u5199/\u4E0D\u53EF\u68C0\u4E3E\u7684.\u56E0\u4E3A\u5185\u90E8\u5C5E\u6027\u503C\u90FD\u9ED8\u8BA4false\u4E86.</span>
<span class="token comment">// \u76F8\u5F53\u4EE5\u4E0B\u5F62\u5F0F</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o3<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

o3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;jerry&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o3<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment">// \u8FD8\u662F Tom</span>
</code></pre></div><p>\u8BBF\u95EE\u5668\u5C5E\u6027\u7684\u5B9A\u4E49\u4E5F\u540C\u4E0A\u9762\u4E00\u6837\u3002</p><h3 id="\u53EA\u8BFB-writable-false" tabindex="-1">\u53EA\u8BFB writable:false <a class="header-anchor" href="#\u53EA\u8BFB-writable-false" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u901A\u8FC7\u66F4\u6539 <code>[[writable]]</code> \u6807\u5FD7\u6765\u628A\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\uFF0C\u5373\u4E0D\u80FD\u88AB\u91CD\u65B0\u8D4B\u503C\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BF9\u5DF2\u5B9A\u4E49\u7684\u5C5E\u6027\u4F7F\u7528 Object.defineProperty\u91CD\u65B0\u5B9A\u4E49\u65F6\u4E0D\u7F3A\u5C11\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\u4E0D\u4F1A\u53D8\u4E3Afalse\uFF0C\u800C\u662F\u4FDD\u6301\u9ED8\u8BA4\uFF0C\u5373\u6700\u5F00\u59CB\u7684true</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Pete&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Error: Cannot assign to read only property &#39;name&#39;</span>

<span class="token comment">// \u5BF9\u4E8E\u65B0\u5C5E\u6027\uFF0C\u6211\u4EEC\u9700\u8981\u660E\u786E\u5730\u5217\u51FA\u54EA\u4E9B\u5C5E\u6027\u63CF\u8FF0\u7B26\u662F true\uFF0C\u4E0D\u7136\u9ED8\u8BA4false</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token comment">// writable \u7F3A\u7701\u9ED8\u8BA4false</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre></div><h3 id="\u4E0D\u53EF\u679A\u4E3E-enumerable-false" tabindex="-1">\u4E0D\u53EF\u679A\u4E3E enumerable:false <a class="header-anchor" href="#\u4E0D\u53EF\u679A\u4E3E-enumerable-false" aria-hidden="true">#</a></h3><p>\u5BF9\u8C61\u7684\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u5728<code>for-of</code>\u3001 <code>for-in</code>\u3001<code>in</code>\u3001<code>Object.keys()</code>\u7B49\u8868\u8FBE\u5F0F\u4E2D\u4E0D\u4F1A\u88AB\u904D\u5386\u5230\uFF0C\u50CF\u5BF9\u8C61\u7EE7\u627F\u7684<code>toString()</code>\u6216<code>valueOf()</code>\u5C5E\u6027\u4E0D\u4F1A\u51FA\u73B0\u5728\u5C5E\u6027\u904D\u5386\u4E2D\u4E00\u6837\u3002</p><div class="language-js"><pre><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E24\u4E2A\u5C5E\u6027\u90FD\u4F1A\u88AB\u904D\u5386</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;,&#39;age&#39;]</span>

<span class="token comment">// \u5982\u679C\u6211\u4EEC\u60F3\u628Aage\u9690\u85CF\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5B83\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26enumerable</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;]</span>
</code></pre></div><h3 id="\u4E0D\u53EF\u914D\u7F6E-configurable-false" tabindex="-1">\u4E0D\u53EF\u914D\u7F6E configurable:false <a class="header-anchor" href="#\u4E0D\u53EF\u914D\u7F6E-configurable-false" aria-hidden="true">#</a></h3><p>\u4E0D\u53EF\u914D\u7F6E\u6807\u5FD7\uFF08configurable:false\uFF09\u6709\u65F6\u4F1A\u9884\u8BBE\u5728\u5185\u5EFA\u5BF9\u8C61\u548C\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027\u4E2D\u3002</p><p>\u4E0D\u53EF\u914D\u7F6E\u7684\u5C5E\u6027\u5305\u62EC\u4E24\u70B9\u7279\u5F81\uFF1A</p><ol><li>\u5C5E\u6027\u4E0D\u80FD\u88AB\u5220\u9664\uFF0C\u5373delete\u8FD0\u7B97\u65E0\u6548</li><li><code>configurable:false</code>\u662F\u5355\u5411\u64CD\u4F5C\uFF0C\u4E00\u65E6\u914D\u7F6E\u4E3Afalse\uFF0C\u610F\u5473\u7740\u4E5F\u4E0D\u80FD\u518D\u4F7F\u7528<code>defineProperty</code>\u6539\u56DE\u6765\u4E86, \u6216\u8005\u914D\u7F6E\u5176\u5B83\u7279\u5F81\u503C\u3002</li></ol><p>\u4F8B\u5982\uFF0CMath.PI \u662F\u53EA\u8BFB\u7684\u3001\u4E0D\u53EF\u679A\u4E3E\u548C\u4E0D\u53EF\u914D\u7F6E\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> <span class="token string">&#39;PI&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
{
  &quot;value&quot;: 3.141592653589793,
  &quot;writable&quot;: false,
  &quot;enumerable&quot;: false,
  &quot;configurable&quot;: false
}
*/</span>
</code></pre></div><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u5C06 user.age \u8BBE\u7F6E\u4E3A\u201C\u6C38\u4E45\u5BC6\u5C01\u201D\u7684\u5E38\u91CF\uFF0C\u5E74\u9F84\u6C38\u8FDC18\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;18&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0B\u9762\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4E0D\u8D77\u4F5C\u7528\uFF1A</span>
<span class="token comment">//   user.age = 29</span>
<span class="token comment">//   delete user.age</span>
<span class="token comment">//   defineProperty(user, &quot;age&quot;, { value: 29 })</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>

<span class="token comment">// \u4F46\u4FDD\u7559\u4E86\u53EF\u679A\u4E3E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// [&#39;name&#39;, &#39;age&#39;]</span>
</code></pre></div><h2 id="object-defineproperties-obj-props-\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027" tabindex="-1">Object.defineProperties(obj,props)\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027 <a class="header-anchor" href="#object-defineproperties-obj-props-\u6279\u91CF\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u5BF9\u6BD4\u4E0B<code>Object.defineProperty(obj,prop)</code> \u548C <code>Object.defineProperties(obj,props)</code>\u5199\u6CD5</p><ul><li><code>Object.defineProperty(obj,prop)</code>: \u4E00\u6B21\u5B9A\u4E49\u4E00\u4E2A\u5C5E\u6027</li><li><code>Object.defineProperties(obj,props)</code>: \u53EF\u4EE5\u4E00\u6B21\u5B9A\u4E49\u591A\u5C11\u5C5E\u6027</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token comment">/**
 tom
{ value: &#39;tom&#39;,
  writable: true,
  enumerable: true,
  configurable: true }

*/</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>p2<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
		<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA</span>
<span class="token comment">/**
tom
18
{ name:
   { value: &#39;tom&#39;,
     writable: true,
     enumerable: true,
     configurable: true },
  age:
   { value: 18,
     writable: true,
     enumerable: true,
     configurable: true } }


*/</span>
</code></pre></div><p>\u4E0A\u9762\u6211\u4EEC\u901A\u8FC7\u5C5E\u6027\u63CF\u8FF0\u7B26\u53EF\u4EE5\u63A7\u5236\u5BF9\u8C61\u5355\u4E2A\u5C5E\u6027\u7684\u884C\u4E3A\u3002ES\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u9650\u5236\u8BBF\u95EE\u6574\u4E2A\u5BF9\u8C61\u7684\u884C\u4E3A\u3002</p><h2 id="\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236" tabindex="-1">\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236 <a class="header-anchor" href="#\u5BF9\u8C61\u884C\u4E3A\u7684\u63A7\u5236" aria-hidden="true">#</a></h2><h3 id="object-preventextensions-obj" tabindex="-1">Object.preventExtensions(obj) <a class="header-anchor" href="#object-preventextensions-obj" aria-hidden="true">#</a></h3><p>\u7981\u6B62\u5411\u5BF9\u8C61\u6DFB\u52A0\u65B0\u5C5E\u6027\u3002</p><h3 id="object-seal-obj" tabindex="-1">Object.seal(obj) <a class="header-anchor" href="#object-seal-obj" aria-hidden="true">#</a></h3><p>\u7981\u6B62\u6DFB\u52A0/\u5220\u9664/\u4FEE\u6539\u5BF9\u8C61\u5C5E\u6027\u3002\u4E3A\u5BF9\u8C61\u6240\u6709\u7684\u5C5E\u6027\u8BBE\u7F6E configurable: false\u3002</p><h3 id="object-freeze-obj" tabindex="-1">Object.freeze(obj) <a class="header-anchor" href="#object-freeze-obj" aria-hidden="true">#</a></h3><p>\u7981\u6B62\u6DFB\u52A0/\u5220\u9664/\u66F4\u6539\u5BF9\u8C61\u5C5E\u6027\u3002\u4E3A\u5BF9\u8C61\u6240\u6709\u7684\u5C5E\u6027\u8BBE\u7F6E configurable: false, writable: false\u3002</p><p>\u53E6\u5916\u63D0\u4F9B\u4E86\u5B83\u4EEC\u7684\u68C0\u6D4B\uFF1A</p><h3 id="object-isextensible-obj" tabindex="-1">Object.isExtensible(obj) <a class="header-anchor" href="#object-isextensible-obj" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6DFB\u52A0\u5C5E\u6027\u88AB\u7981\u6B62\uFF0C\u5219\u8FD4\u56DE false\uFF0C\u5426\u5219\u8FD4\u56DE true\u3002</p><h3 id="object-issealed-obj" tabindex="-1">Object.isSealed(obj) <a class="header-anchor" href="#object-issealed-obj" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6DFB\u52A0/\u5220\u9664\u5C5E\u6027\u88AB\u7981\u6B62\uFF0C\u5E76\u4E14\u6240\u6709\u73B0\u6709\u7684\u5C5E\u6027\u90FD\u5177\u6709 configurable: false\u5219\u8FD4\u56DE true\u3002</p><h3 id="object-isfrozen-obj" tabindex="-1">Object.isFrozen(obj) <a class="header-anchor" href="#object-isfrozen-obj" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6DFB\u52A0/\u5220\u9664/\u66F4\u6539\u5C5E\u6027\u88AB\u7981\u6B62\uFF0C\u5E76\u4E14\u6240\u6709\u5F53\u524D\u5C5E\u6027\u90FD\u662F configurable: false, writable: false\uFF0C\u5219\u8FD4\u56DE true\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">/*
name:{
	value: &quot;tom&quot;
	writable: true
	enumerable: true
	configurable: true
}
age: {
	value: 18
	writable: true
	enumerable: true
	configurable: true
}
*/</span>

<span class="token comment">/****\u7981\u6B62\u6269\u5C55\u5BF9\u8C61\u5C5E\u6027************************************************/</span>

Object<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false \u5373\u7981\u6B62\u6DFB\u52A0\u5C5E\u6027</span>

user<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;girl&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Ojbect<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&#39;name&#39;,&#39;age&#39;] \u5E76\u6CA1\u6709\u65B0\u6DFB\u52A0\u7684gender\u5C5E\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u5C5E\u6027\u63CF\u8FF0\u7B26\u672A\u6539\u53D8</span>
<span class="token comment">/*
name:{
	value: &quot;tom&quot;
	writable: true
	enumerable: true
	configurable: true
}
age: {
	value: 18
	writable: true
	enumerable: true
	configurable: true
}
*/</span>

<span class="token comment">/****\u5BC6\u5C01\u5BF9\u8C61\uFF1A\u7981\u6B62\u914D\u7F6E\u5BF9\u8C61******************************************/</span>

Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isSealed</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;jerry&#39;</span> <span class="token comment">// name\u8FD8\u53EF\u4EE5\u91CD\u65B0\u8D4B\u503C</span>
<span class="token keyword">delete</span> user<span class="token punctuation">.</span>age  <span class="token comment">// false \u5220\u9664\u4E0D\u6210\u529F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u5C5E\u6027\u63CF\u8FF0\u7B26configurable: false</span>
<span class="token comment">/*
name:{
	value: &quot;tom&quot;
	writable: true
	enumerable: true
	configurable: false
}
age: {
	value: 18
	writable: true
	enumerable: true
	configurable: false
}
*/</span>

<span class="token comment">/****\u51BB\u7ED3\u5BF9\u8C61\uFF1A\u4E0D\u53EF\u914D\u7F6E\u4E5F\u4E0D\u53EF\u5199************************************************/</span>

Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isFrozen</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Eich&#39;</span>  <span class="token comment">// Error</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u5C5E\u6027\u63CF\u8FF0\u7B26writable\u548Cconfigurable\u4E3Afalse</span>
<span class="token comment">/*
name:{
	value: &quot;tom&quot;
	writable: false
	enumerable: true
	configurable: false
}
age: {
	value: 18
	writable: false
	enumerable: true
	configurable: false
}
*/</span>
</code></pre></div><p>\u8FD9\u4E9B\u65B9\u6CD5\u5728\u5B9E\u9645\u4E2D\u5F88\u5C11\u4F7F\u7528\uFF0C\u4F46\u8FD8\u662F\u6709\u4E9B\u573A\u666F\u9002\u5408\u3002</p><ol><li>\u6BD4\u5982\u5728VUE\u4E2D\u5BF9\u786E\u5B9A\u4E0D\u4F1A\u6539\u53D8\u7684\u5E38\u91CF\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>Object.freeze()</code>\u51BB\u7ED3\u5C5E\u6027\uFF0C\u907F\u514D\u6DFB\u52A0\u5230vue\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u4E2D\u589E\u52A0\u6027\u80FD\u8D1F\u62C5\u3002</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token constant">OBJ</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">status_name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F85\u53D1\u8D27&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">frezzeObj</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token constant">OBJ</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u5728<code>vue.prototype</code>\u4E0A\u6302\u8F7D\u5168\u5C40\u65B9\u6CD5\uFF0C\u8981\u907F\u514D\u88AB\u7BE1\u6539\uFF0C\u53EF\u4EE5\u8BBE\u8BA1\u53EA\u8BFB\uFF0C\u6216\u8005\u53EA\u4F7F\u7528getter</li></ol><div class="language-js"><pre><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$http&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> http<span class="token punctuation">,</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216\u8005getter\u5F62\u5F0F</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;$http&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> http<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u300A\u6DF1\u5165\u6D45\u51FAJavaScript\u300B P195</li><li><a href="https://zh.javascript.info/property-descriptors" target="_blank" rel="noopener noreferrer">\u73B0\u4EE3JavaScript\u6559\u7A0B - \u5C5E\u6027\u6807\u5FD7\u548C\u5C5E\u6027\u63CF\u8FF0\u7B26</a></li><li><a href="https://zh.javascript.info/property-accessors" target="_blank" rel="noopener noreferrer">\u73B0\u4EE3JavaScript\u6559\u7A0B - \u5C5E\u6027\u7684 getter \u548C setter</a></li><li><a href="https://mp.weixin.qq.com/s/zwLl826E1mSwVInnCAC4Yg" target="_blank" rel="noopener noreferrer">29\u4E2A\u5BF9\u8C61API\u5B9E\u6218\uFF0C\u5343\u4E07\u522B\u9519\u8FC7\uFF01</a></li></ul>`,95),o=[e];function c(l,r,u,i,k,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
