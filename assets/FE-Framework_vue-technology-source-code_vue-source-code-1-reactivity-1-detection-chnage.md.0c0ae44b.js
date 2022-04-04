import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const m='{"title":"\u54CD\u5E94\u5F0F\u539F\u74061\uFF1A\u4FA6\u6D4B\u6570\u636E\u53D8\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027 getter / setter","slug":"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027-getter-setter"},{"level":2,"title":"\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316","slug":"\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316"},{"level":2,"title":"\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316","slug":"\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316"},{"level":2,"title":"Observer \u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F","slug":"observer-\u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F"},{"level":2,"title":"proxy \u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406","slug":"proxy-\u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-1-reactivity-1-detection-chnage.md"}',p={},o=t(`<h1 id="\u54CD\u5E94\u5F0F\u539F\u74061\uFF1A\u4FA6\u6D4B\u6570\u636E\u53D8\u5316" tabindex="-1">\u54CD\u5E94\u5F0F\u539F\u74061\uFF1A\u4FA6\u6D4B\u6570\u636E\u53D8\u5316 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u74061\uFF1A\u4FA6\u6D4B\u6570\u636E\u53D8\u5316" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027-getter-setter">\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027 getter / setter</a></li><li><a href="#\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316">\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316</a></li><li><a href="#\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316">\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316</a></li><li><a href="#observer-\u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F">Observer \u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F</a></li><li><a href="#proxy-\u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406">proxy \u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406</a></li></ul></div></p><p>\u5BF9 Vue \u6846\u67B6\u7684\u4F7F\u7528\uFF0C\u6700\u5927\u7684\u597D\u5947\u5E94\u8BE5\u5C31\u662F\u4E3A\u4EC0\u4E48\u6539\u53D8\u4E00\u4E2A\u6570\u636E\u503C\uFF0C\u89C6\u56FE\u754C\u9762\u5C31\u4F1A\u81EA\u52A8\u66F4\u65B0\u5427\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A\u70B9\u51FB\u4E8B\u4EF6\u53EA\u5BF9\u53D8\u91CF message \u8D4B\u503C\uFF0C\u6CA1\u6709\u64CD\u4F5C\u4EFB\u4F55 DOM \u5143\u7D20\u5185\u5BB9\uFF0C\u4F46\u89C6\u56FE\u663E\u793A\u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002\u8FD9\u5C31\u662F Vue \u6700\u5927\u7684\u7279\u70B9\uFF1A<strong>\u89C6\u56FE\u6E32\u67D3\u4E0E\u6570\u636E\u72B6\u6001\u81EA\u52A8\u5173\u8054\u3002</strong></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue_2.6.12.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello Vue&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BF9\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u4FDD\u6301\u4E24\u4E2A\u7591\u95EE\uFF1A</p><ol><li>message \u4F5C\u4E3A data \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 <code>this.message</code> \u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F <code>this.data.message</code>;</li><li>message \u7684\u503C\u53D8\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u89C6\u56FE\u4E2D DOM \u5185\u5BB9\u4E5F\u4F1A\u81EA\u52A8\u53D8\uFF1B</li></ol><p>\u6570\u636E\u72B6\u6001\u6539\u53D8\uFF0C\u8981\u8BA9\u89C6\u56FE\u4E5F\u8FDB\u884C\u66F4\u65B0\uFF0C\u90A3\u524D\u63D0\u5FC5\u7136\u662F\u6211\u4EEC\u80FD\u591F\u6355\u83B7\u5230\u5F53\u524D\u53D8\u5316\u7684\u6570\u636E\u3002\u8FD9\u4E2A\u6355\u83B7\u4E3B\u8981\u662F\u57FA\u4E8E JavaScript \u8BED\u8A00\u63D0\u4F9B\u7684 <code>Object.defineProperty</code> \u8FD9\u4E2A API\u3002</p><h2 id="\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027-getter-setter" tabindex="-1">\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027 getter / setter <a class="header-anchor" href="#\u5BF9\u8C61\u7684\u8BBF\u95EE\u5668\u5C5E\u6027-getter-setter" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\uFF1A<a href="/FE-Language/ES/oop-2-object-property.html">\u5BF9\u8C61\u5C5E\u6027\u53CA\u5176\u64CD\u4F5C</a></p></blockquote><p>JavaScript \u8BED\u8A00\u4E2D\u5BF9\u8C61\u5C5E\u6027\u6709\u4E24\u79CD\u5F62\u5F0F</p><ul><li>\u6570\u636E\u5C5E\u6027</li><li>\u8BBF\u95EE\u5668\u5C5E\u6027</li></ul><div class="language-js"><pre><code><span class="token comment">// \u4E0B\u9762 data \u5BF9\u8C61\u5C5E\u6027 name \u5C31\u662F\u6570\u636E\u5C5E\u6027\uFF0C</span>
<span class="token comment">// \u5C5E\u6027 age \u5C31\u662F\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u5B9A\u4E49 age \u7684 getter / setter</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The girl&#39;s age has always been 18</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u6700\u5173\u952E\u7684\u90E8\u5206\u5C31\u662F\uFF0C\u5728 JS \u4E2D\u901A\u8FC7 <code>Object.defineProperty</code> \u65B9\u6CD5\u53EF\u4EE5\u5C06\u5BF9\u8C61\u7684\u6570\u636E\u5C5E\u6027\u8F6C\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027\u3002</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u5982\u679C\u76EE\u6807\u5BF9\u8C61target_obj\u672C\u8EAB\u5DF2\u7ECF\u5B58\u5728prop\u5C5E\u6027\uFF0C\u90A3\u4E48\u4FEE\u6539\u8BE5\u5BF9\u8C61\u7684\u73B0\u6709\u5C5E\u6027\uFF0C \u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u3002
 * \u5982\u679C\u76EE\u6807\u5BF9\u8C61\u4E0A\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u90A3\u4E48\u4F1A\u76F4\u63A5\u5728\u76EE\u6807\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u8FD9\u4E2A\u65B0\u5C5E\u6027\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\u3002
 *
 * @params {Object} target_obj \u76EE\u6807\u5BF9\u8C61
 * @params {String} prop \u8981\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u540D\u79F0
 * @params {Object} descriptor \u5C06\u8981\u88AB\u5B9A\u4E49\u6216\u4FEE\u6539\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26
 * @params {Boolean} descriptor.enumerable \u5C5E\u6027\u80FD\u4E0D\u80FD\u88AB\u679A\u4E3E\uFF0C\u5373for-in \u6216 in \u8BED\u53E5\u80FD\u4E0D\u80FD\u904D\u5386\u5B83
 * @params {Boolean} descriptor.configurable \u5C5E\u6027\u80FD\u4E0D\u80FD\u505A\u5176\u5B83\u914D\u7F6E\uFF0C\u6BD4\u5982\u5220\u9664\u5C5E\u6027\uFF0C\u6216\u8005\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\u63CF\u8FF0\u7B26\u7B49
 * @params {Boolean} descriptor.writable \u6570\u636E\u5C5E\u6027\u7684 value \u662F\u4E0D\u662F\u53EA\u8BFB\uFF0C\u5373\u8FD9\u4E2A\u5C5E\u6027\u503C\u80FD\u4E0D\u80FD\u88AB\u8D4B\u503C
 * @params {*} descriptor.value \u6570\u636E\u5C5E\u6027\u7684 value \u503C
 * @params {Function} descriptor.get \u8BBF\u95EE\u5668\u5C5E\u6027\u7684 getter\uFF0C\u7528\u4E8E\u83B7\u53D6\u5C5E\u6027\u503C
 * @params {Function} descriptor.set \u8BBF\u95EE\u5668\u5C5E\u6027\u7684setter\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u5C5E\u6027\u503C
 * @return {Ojbect} \u8FD4\u56DE\u5C5E\u6027\u5B9A\u4E49\u6216\u4FEE\u6539\u540E\u7684\u76EE\u6807\u5BF9\u8C61
 */</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target_obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>JS \u5BF9\u8C61\u5C5E\u6027\u4E2D\u8FD8\u6709\u4E00\u4E2A\u6982\u5FF5\uFF1A<a href="/FE-Language/ES/oop-2-object-property.html#\u5C5E\u6027\u63CF\u8FF0\u7B26">\u5C5E\u6027\u63CF\u8FF0\u7B26 descriptor</a></p></blockquote><p>\u6211\u4EEC\u770B\u4E0B\uFF0C\u5982\u4F55\u5C06\u6570\u636E\u5C5E\u6027 name \u8F6C\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u4E00\u822C\u4E5F\u79F0\u4E3A\u5B9A\u4E49 name \u7684 getter / setter\u3002</p><div class="language-js"><pre><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;tom&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">set newValue: %s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u770B\u4E0A\u9762\u4EE3\u7801\uFF0C\u6211\u4EEC\u8BBE\u7F6E name \u5C5E\u6027\u6267\u884C\u4E86 setter \u65B9\u6CD5\uFF0C\u5E76\u4E0D\u80FD\u628A newValue \u8BBE\u7F6E\u6210\u529F\uFF0C\u56E0\u4E3A\u518D\u6B21\u901A\u8FC7\u53D6\u503C\u5668 getter \u83B7\u53D6\u4E0D\u5230\u65B0\u503C\u3002\u89E3\u51B3\u65B9\u6848\u53EF\u4EE5\u901A\u8FC7\u5305\u88C5\u4E00\u5C42\u51FD\u6570\uFF0C\u901A\u8FC7\u95ED\u5305\u51FD\u6570\u6765\u7F13\u5B58\u4E2D\u95F4 value \u7684\u503C\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> newValue
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">defineReactive</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E86\u89E3\u4E86\u4E0A\u9762\u7684\u57FA\u7840\u5185\u5BB9\uFF0C\u6211\u4EEC\u518D\u770B\u6E90\u7801\u4E2D\u8BE5\u51FD\u6570\u7684\u5B9E\u73B0\u5C31\u53EF\u4EE5\u770B\u61C2\u4E86\uFF08\u7701\u7565\u4E00\u4E9B\u5176\u5B83\u4EE3\u7801\u903B\u8F91\uFF09\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u6E90\u7801 vue \u7248\u672C 2.6.12</span>
<span class="token comment">/**
 * Define a reactive property on an Object.
 */</span>
<span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u53D6\u51FA\u76EE\u6807\u5BF9\u8C61key\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF0C\u5224\u65AD\u5176 descriptor.configurable \u662F\u5426\u53EF\u914D\u7F6E\uFF0C\u6BD4\u5982 Object.frezze(obj) \u51BB\u7ED3\u7684\u5BF9\u8C61\u5C31\u662F\u4E0D\u53EF\u914D\u7F6E\u7684</span>
  <span class="token keyword">var</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u672C\u8EAB\u662F\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u5219\u5224\u65AD\u8BE5\u8BBF\u95EE\u5668\u5C5E\u6027\u7684 getter / setter \u662F\u5426\u5B58\u5728</span>
  <span class="token comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u636E\u5C5E\u6027\uFF0C\u5373 getter = undefined\uFF0C\u5219\u76F4\u63A5\u53D6\u503C obj[key]</span>
  <span class="token comment">// val \u5C31\u662F\u5145\u5F53 getter / setter\u3000\u4E2D\u4ECB\u7684\u95ED\u5305\u51FD\u6570\u5185\u7684\u7F13\u5B58\u53D8\u91CF</span>
  <span class="token keyword">var</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get<span class="token punctuation">;</span>
  <span class="token keyword">var</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token comment">// \u7701\u7565\u90E8\u5206\u4EE3\u7801</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u51FA\u65E7\u503C\uFF0C\u5982\u679C\u65E7\u503C\u4E0E\u65B0\u503C\u76F8\u7B49\uFF0C\u6216\u8005\u65B0\u503C\u548C\u65E7\u503C\u90FD\u662F NaN\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span> <span class="token comment">// \u53EA\u5B9A\u4E49 getter\uFF0C\u6CA1\u6709\u5B9A\u4E49setter \u7684\u5C5E\u6027\u4E0D\u80FD\u8D4B\u503C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316" tabindex="-1">\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316 <a class="header-anchor" href="#\u4FA6\u6D4B\u5BF9\u8C61\u7684\u53D8\u5316" aria-hidden="true">#</a></h2><p>\u5C06\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u90FD\u7528 <code>defineReactive$$1</code> \u65B9\u6CD5\u91CD\u65B0\u5B9A\u4E49\u4E00\u904D\uFF0C\u8FD9\u6837\u5BF9\u5BF9\u8C61\u5C5E\u6027\u7684\u8BFB\u53D6\u548C\u8BBE\u7F6E\u6211\u4EEC\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6355\u83B7\u4E86\u3002\u65E0\u975E\u5C31\u662F\u5728\u6BCF\u4E2A getter / setter \u51FD\u6570\u4E2D\u589E\u52A0\u4E00\u4E9B\u6211\u4EEC\u9700\u8981\u7684\u64CD\u4F5C\u903B\u8F91\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u6E90\u7801 vue \u7248\u672C 2.6.12</span>
<span class="token comment">/**
  * Walk through all properties and convert them into
  * getter/setters. This method should only be called when
  * value type is Object.
  * 
  * \u5C06\u6240\u6709\u5BF9\u8C61\u5C5E\u6027\u90FD\u8F6C\u4E3A getter/setter\uFF0C\u8BE5\u65B9\u6CD5\u53EA\u9002\u7528\u4E8E\u5BF9\u8C61\u7C7B\u578B
  */</span>
<span class="token keyword">function</span> <span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive$$1</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Define a reactive property on an Object.
 */</span>
<span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get<span class="token punctuation">;</span>
  <span class="token keyword">var</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token comment">// \u5728\u8FD9\u91CC\u53EF\u4EE5\u6355\u83B7\u8BFB\u53D6\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u64CD\u4F5C</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter is called</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span> 
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5728\u8FD9\u91CC\u53EF\u4EE5\u53EF\u4EE5\u6355\u83B7\u8BBE\u7F6E\u5BF9\u8C61\u5C5E\u6027\u503C\u53D8\u5316\u4E86</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setter is called, and value is changed&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316" tabindex="-1">\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316 <a class="header-anchor" href="#\u4FA6\u6D4B\u6570\u7EC4\u7684\u53D8\u5316" aria-hidden="true">#</a></h2><p>\u5982\u679C\u67D0\u4E2A\u5C5E\u6027\u503C\u662F\u6570\u7EC4\u5F62\u5F0F\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u90A3\u6211\u4EEC\u5BF9\u6570\u7EC4\u7684\u64CD\u4F5C\u901A\u5E38\u662F\u8C03\u7528\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u901A\u8FC7\u8D4B\u503C\u3002\u7C7B\u4F3C\u8FD9\u6837</p><div class="language-js"><pre><code>obj<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>list<span class="token punctuation">)</span>
</code></pre></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u8C03\u7528\u51FD\u6570<code>defineReactive$$1(obj, &#39;list</code>) \u8F6C\u6362\u540E\uFF0C<code>console.log(obj.list)</code>\u8BFB\u53D6\u6570\u7EC4\u4ECD\u4F1A\u89E6\u53D1 getter\uFF0C\u4F46\u4E4B\u524D\u901A\u8FC7\u6570\u7EC4\u65B9\u6CD5\u6539\u53D8\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u64CD\u4F5C\u4E0D\u518D\u89E6\u53D1 setter \u4E86\uFF0C\u8FD9\u65F6\u5C31\u4E0D\u80FD\u6355\u83B7 list \u5C5E\u6027\u7684\u6539\u53D8\u4E86\u3002\u6211\u4EEC\u9700\u8981\u60F3\u5176\u5B83\u65B9\u6CD5\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>vue \u91C7\u7528\u7684\u65B9\u6CD5\u5C31\u662F\u91CD\u5199\u90A3\u4E9B\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u5185\u5BB9\u7684\u65B9\u6CD5\u3002\u8FD9\u91CC\u6D89\u53CA\u7684\u77E5\u8BC6\u70B9\u4E3B\u8981\u662F\u5BF9\u8C61\u539F\u578B\u3001\u539F\u578B\u94FE\u76F8\u5173\u7684\u77E5\u8BC6\u3002</p><blockquote><p>\u6CBF\u7740\u5BF9\u8C61\u539F\u578B\u94FE\u67E5\u627E\u5BF9\u8C61\u5C5E\u6027\uFF0C\u5982\u679C\u5728\u67D0\u4E2A\u539F\u578B\u5BF9\u8C61\u4E0A\u627E\u5230\u8BE5\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE\u3002\u6240\u4EE5\u53EF\u4EE5\u5728\u539F\u578B\u94FE\u4E2D\u63D2\u5165\u4E00\u4E2A\u65B0\u539F\u578B\u5BF9\u8C61\uFF0C\u91CD\u5199\u90E8\u5206\u540C\u540D\u7684\u65B9\u6CD5\u3002</p></blockquote><div class="language-js"><pre><code>
<span class="token keyword">var</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// \u5C06\u539F\u751F\u7684\u6570\u7EC4\u539F\u578B\u5BF9\u8C61\u8FDB\u884C\u7F13\u5B58</span>
<span class="token keyword">var</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4EE5\u539F\u751F\u6570\u7EC4\u539F\u578B\u5BF9\u8C61\u4E3A\u539F\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span>

<span class="token keyword">var</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;reverse&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
  * Intercept mutating methods and emit events
  * \u5728\u65B0\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u5B9A\u4E49\u540C\u540D\u7684\u65B9\u6CD5\uFF0C\u4EE5\u5B9E\u73B0\u62E6\u622A
  */</span>
methodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// cache original method\u3000\u4ECE\u7F13\u5B58\u7684\u539F\u578B\u5BF9\u8C61\u4E2D\u83B7\u53D6\u539F\u751F\u65B9\u6CD5</span>
  <span class="token keyword">var</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">;</span>\u3000
  <span class="token function">def</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">mutator</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span> len<span class="token operator">--</span> <span class="token punctuation">)</span> args<span class="token punctuation">[</span> len <span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span> len <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// \u5982\u679C\u662F\u5411\u6570\u7EC4\u4E2D\u63D2\u5165\u65B0\u503C\uFF0C\u5219\u9700\u8981\u5C06\u8BE5\u65B0\u503C\u8F6C\u4E3A\u54CD\u5E94\u5F0F</span>
    <span class="token keyword">var</span> inserted<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>
        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7701\u7565\u90E8\u5206\u903B\u8F91\uFF0C\u8FD9\u6837\u80FD\u6355\u83B7\u6539\u53D8\u6570\u7EC4\u5185\u5BB9\u7684\u65B9\u6CD5\u7684\u64CD\u4F5C\uFF0C\u7C7B\u4F3C\u5BF9\u8C61\u4E2D setter \u7684\u4F5C\u7528</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">arr value is changed: %s</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> inserted<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Define a property.
 */</span>
<span class="token keyword">function</span> <span class="token function">def</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> enumerable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>enumerable<span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u6211\u4EEC\u5728\u8F6C\u5316\u4E00\u4E2A\u5BF9\u8C61\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0C\u5C31\u8981\u5BF9\u5BF9\u8C61\u5C5E\u6027\u503C\u8FDB\u884C\u5224\u65AD\u662F\u6570\u7EC4\u8FD8\u662F\u5176\u5B83\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u662F\u6570\u7EC4\uFF0C\u5C31\u91CD\u5199\u8BE5\u6570\u7EC4\u7684\u539F\u578B\u5BF9\u8C61</span>
  value__proto__ <span class="token operator">=</span> arrayMethods
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5176\u5B83\u7C7B\u578B\u5C31\u76F4\u63A5\u5B9A\u4E49 getter / setter</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="observer-\u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F" tabindex="-1">Observer \u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F <a class="header-anchor" href="#observer-\u7C7B\uFF1A\u7EDF\u4E00\u5B9A\u4E49\u6570\u636E\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5BF9\u8C61\u8F6C\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u81F3\u5C11\u9700\u8981\u505A\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u904D\u5386\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027</li><li>\u5224\u65AD\u6BCF\u4E2A\u5C5E\u6027\u503C\u662F\u6570\u7EC4\u8FD8\u662F\u5176\u5B83\uFF0C\u91C7\u7528\u4E0D\u540C\u7684\u64CD\u4F5C</li><li>\u5982\u679C\u662F\u5D4C\u5957\u5BF9\u8C61\uFF0C\u6216\u8005\u6570\u7EC4\u5143\u7D20\u4E2D\u8FD8\u6709\u5BF9\u8C61\u6216\u6570\u7EC4\u5143\u7D20\uFF0C\u8FD8\u8981\u9012\u5F52\u5904\u7406</li><li>\u5982\u679C\u67D0\u4E2A\u5C5E\u6027\u5DF2\u7ECF\u88AB\u5904\u7406\uFF0C\u5219\u4E0D\u9700\u8981\u518D\u5904\u7406</li></ol><p>\u6240\u4EE5\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u5C01\u88C5\u6210\u4E00\u4E2A Observer \u7C7B\uFF0C\u6765\u7EDF\u4E00\u5904\u7406\u4E0A\u8FF0\u903B\u8F91</p><div class="language-js"><pre><code><span class="token comment">// \u6E90\u7801 vue \u7248\u672C 2.6.12</span>
<span class="token comment">/**
  * Attempt to create an observer instance for a value,
  * returns the new observer if successfully observed,
  * or the existing observer if the value already has one.
  * 
  * \u5C1D\u8BD5\u4E3A\u4E00\u4E2A\u503C\u521B\u5EFA\u4E00\u4E2A observer \u89C2\u5BDF\u8005\u5B9E\u4F8B
  * \u5982\u679C\u5F53\u524D\u503C\u662F\u5426\u5DF2\u7ECF\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF08value__ob__)\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5B9E\u4F8B\uFF0C\u5426\u5219\u65B0\u5EFA\u4E00\u4E2A new Observer\u8FD4\u56DE
  */</span>
<span class="token keyword">function</span> <span class="token function">observe</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> asRootData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// isObject(value) {return obj !== null &amp;&amp; typeof obj === &#39;object&#39;}</span>
  <span class="token comment">// \u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u636E\u6216\u8005 VNode \u7C7B\u578B\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> value <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> ob<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__ob__ <span class="token keyword">instanceof</span> <span class="token class-name">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// \u5982\u679C value.__ob__\u5B58\u5728\uFF0C\u4E14\u4E3A Observer \u5B9E\u4F8B\uFF0C\u5219\u8FD4\u56DE\u539F\u6765\u7684__ob__</span>
    ob <span class="token operator">=</span> value<span class="token punctuation">.</span>__ob__<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    shouldObserve <span class="token operator">&amp;&amp;</span>                                                                       <span class="token comment">// \u53EF\u4EE5\u88AB\u89C2\u5BDF</span>
    <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>                                                                <span class="token comment">// \u4E0D\u662F\u670D\u52A1\u7AEF\u6E32\u67D3</span>
    <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>        <span class="token comment">// \u662F\u6570\u7EC4\u6216\u8005\u666E\u901A\u5BF9\u8C61\uFF0C\u4E14\u5BF9\u8C61\u53EF\u6269\u5C55</span>
    <span class="token operator">!</span>value<span class="token punctuation">.</span>_isVue                                                                          <span class="token comment">// \u4E0D\u662FVue\u5B9E\u4F8B</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>asRootData <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u662F\u89C2\u5BDF\u5B9E\u4F8B\u7684 options.data \u6570\u636E\u65F6\uFF0CasRootData=true\u3002\u67E5\u770BinitState(vm)/initData(vm)</span>
    ob<span class="token punctuation">.</span>vmCount<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ob
<span class="token punctuation">}</span>

<span class="token comment">/**
  * Observer class that is attached to each observed
  * object. Once attached, the observer converts the target
  * object&#39;s property keys into getter/setters that
  * collect dependencies and dispatch updates.
  * 
  * 1. \u8BBE\u7F6E value.__ob__ = this
  * 2. value \u662F\u6570\u7EC4\uFF0C\u8C03\u7528 this.observeArray(value)
  * 3. value \u662F\u5BF9\u8C61\uFF0C\u8C03\u7528 this.walk(value)\uFF0C\uFF08\u5982\u679C\u547D\u540D observerObject \u66F4\u597D\u7406\u89E3\u4E5F\u4E0E\u6570\u7EC4\u7EDF\u4E00\uFF09
  */</span>
<span class="token keyword">var</span> <span class="token function-variable function">Observer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Observer</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>vmCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasProto<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// var hasProto = &#39;__proto__&#39; in {};</span>
      <span class="token function">protoAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// value.__proto__ = arrayMethods</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">copyAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token comment">// var arrayKeys = Object.getOwnPropertyNames(arrayMethods) \u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u5C5E\u6027\u540D,\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF08enumberable:false)\u3002Object.keys()\u53EA\u80FD\u83B7\u53D6\u53EF\u679A\u4E3E\u7684\u5C5E\u6027</span>
      <span class="token comment">// \u7136\u540E\u9010\u4E2A\u590D\u5236</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
  * Walk through all properties and convert them into
  * getter/setters. This method should only be called when
  * value type is Object.
  */</span>
<span class="token class-name">Observer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">walk</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive$$1</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
  * Observe a list of Array items.
  */</span>
<span class="token class-name">Observer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">observeArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">observeArray</span> <span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Define a reactive property on an Object.
 */</span>
<span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u53D6\u51FA\u76EE\u6807\u5BF9\u8C61key\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF0C\u5224\u65AD\u5176 descriptor.configurable \u662F\u5426\u53EF\u914D\u7F6E\uFF0C\u6BD4\u5982 Object.frezze(obj) \u51BB\u7ED3\u7684\u5BF9\u8C61\u5C31\u662F\u4E0D\u53EF\u914D\u7F6E\u7684</span>
  <span class="token keyword">var</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u672C\u8EAB\u662F\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u5219\u5224\u65AD\u8BE5\u8BBF\u95EE\u5668\u5C5E\u6027\u7684 getter / setter \u662F\u5426\u5B58\u5728</span>
  <span class="token comment">// \u5982\u679C\u8BE5\u5C5E\u6027\u662F\u6570\u636E\u5C5E\u6027\uFF0C\u5373 getter = undefined\uFF0C\u5219\u76F4\u63A5\u53D6\u503C obj[key]</span>
  <span class="token comment">// val \u5C31\u662F\u5145\u5F53 getter / setter\u3000\u4E2D\u4ECB\u7684\u95ED\u5305\u51FD\u6570\u5185\u7684\u7F13\u5B58\u53D8\u91CF</span>
  <span class="token keyword">var</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get<span class="token punctuation">;</span>
  <span class="token keyword">var</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token comment">// \u7701\u7565\u90E8\u5206\u4EE3\u7801</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u51FA\u65E7\u503C\uFF0C\u5982\u679C\u65E7\u503C\u4E0E\u65B0\u503C\u76F8\u7B49\uFF0C\u6216\u8005\u65B0\u503C\u548C\u65E7\u503C\u90FD\u662F NaN\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span> <span class="token comment">// \u53EA\u5B9A\u4E49 getter\uFF0C\u6CA1\u6709\u5B9A\u4E49setter \u7684\u5C5E\u6027\u4E0D\u80FD\u8D4B\u503C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u7684newVal\u4E5F\u9700\u8981\u8F6C\u4E3A\u54CD\u5E94\u5F0F</span>
      <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// helpers \u5DE5\u5177\u65B9\u6CD5</span>
<span class="token comment">/**
 * Define a property.
 */</span>
<span class="token keyword">function</span> <span class="token function">def</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> enumerable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>enumerable<span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
  * Augment a target Object or Array by intercepting
  * the prototype chain using __proto__
  */</span>
<span class="token keyword">function</span> <span class="token function">protoAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> src<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
  * Augment a target Object or Array by defining
  * hidden properties.
  */</span>
<span class="token keyword">function</span> <span class="token function">copyAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> src<span class="token punctuation">,</span> keys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">def</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="proxy-\u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406" tabindex="-1">proxy \u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406 <a class="header-anchor" href="#proxy-\u5C5E\u6027\u8BBF\u95EE\u7684\u4EE3\u7406" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello Vue&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><ol><li>message \u4F5C\u4E3A data \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 <code>this.message</code> \u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F <code>this.data.message</code>;</li></ol><p>\u5B9E\u9645\u4E0A Vue \u5185\u90E8\u89E3\u6790\u5F97\u5230 options.data \u7684\u503C\u90FD\u8D4B\u4E88\u4E86\u5185\u90E8\u5C5E\u6027 <code>_data</code>\uFF0C<code>this.message = this._data.message</code>\u3002\u5177\u4F53\u6E90\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;data functions should return an object:\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function&#39;</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// proxy data on instance</span>
  <span class="token keyword">var</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>props<span class="token punctuation">;</span>
  <span class="token keyword">var</span> methods <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>methods<span class="token punctuation">;</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E0D\u80FD\u4E0E\u5DF2\u7ECF\u5B9A\u4E49\u7684\u65B9\u6CD5\u91CD\u540D methods</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>methods <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>methods<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token string">&quot;Method \\&quot;&quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;\\&quot; has already been defined as a data property.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E0D\u80FD\u4E0E\u5DF2\u7ECF\u5B9A\u4E49\u7684 props \u91CD\u540D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&quot;The data property \\&quot;&quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;\\&quot; is already declared as a prop. &quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;Use prop default value instead.&quot;</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isReserved</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4EE5 &amp; \u6216 _ \u5F00\u5934\u7684 key \u4F5C\u4E3A\u4FDD\u7559\u5C5E\u6027\uFF0C\u5916\u90E8\u4E0D\u80FD\u5B9A\u4E49</span>
      <span class="token comment">// \u5BF9 data \u4E2D\u7684\u6BCF\u4E00\u4E2A key \u4F5C\u4E00\u5C42\u4EE3\u7406</span>
      <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;_data&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// observe data</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">var</span> sharedPropertyDefinition <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">get</span><span class="token operator">:</span> noop<span class="token punctuation">,</span>
  <span class="token literal-property property">set</span><span class="token operator">:</span> noop
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">proxy</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> sourceKey<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sharedPropertyDefinition<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">proxyGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>sourceKey<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  sharedPropertyDefinition<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">proxySetter</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>sourceKey<span class="token punctuation">]</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> sharedPropertyDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// vm.key = vm._data.key</span>
</code></pre></div><p>\u9664\u4E86 options.data \u4F5C\u4E86 proxy \u4EE3\u7406\u5916\uFF0Coptions.prop \u4E5F\u662F\u4F5C\u4E86\u540C\u6837\u7684\u4EE3\u7406\u3002</p>`,48),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
