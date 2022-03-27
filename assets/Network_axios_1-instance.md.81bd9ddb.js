import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const m='{"title":"axios\u6E90\u78011\uFF1Aaxios \u5B9E\u4F8B\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801"},{"level":2,"title":"\u603B\u7ED3\uFF1A","slug":"\u603B\u7ED3\uFF1A"}],"relativePath":"Network/axios/1-instance.md"}',p={},o=t(`<h1 id="axios\u6E90\u78011\uFF1Aaxios-\u5B9E\u4F8B\u5316" tabindex="-1">axios\u6E90\u78011\uFF1Aaxios \u5B9E\u4F8B\u5316 <a class="header-anchor" href="#axios\u6E90\u78011\uFF1Aaxios-\u5B9E\u4F8B\u5316" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>axios \u5373\u53EF\u4EE5\u5F53\u51FD\u6570\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u5BF9\u8C61\u4F7F\u7528:</p><div class="language-js"><pre><code><span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BF7\u6C42\u7684\u522B\u540D\uFF1Ainstance \u5B9E\u4F8B\u540C\u6837\u62E5\u6709\u8FD9\u4E9B\u65B9\u6CD5</span>
axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E76\u53D1\u8BF7\u6C42</span>
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>iterable<span class="token punctuation">)</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u914D\u7F6E\u521B\u5EFA\u72EC\u7ACB\u7684\u8BF7\u6C42\u5B9E\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u521B\u5EFA\u72EC\u7ACB\u4E0A\u4E0B\u6587\u73AF\u5883\u7684\u5B9E\u4F8B</span>
instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token comment">// \u7EE7\u627F\u6709 axios \u4E00\u7CFB\u5217\u65B9\u6CD5\u522B\u540D</span>
instance<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token comment">// \u7B49\u7B49</span>
</code></pre></div><h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><p>\u6240\u4EE5\u6DF1\u5165\u6E90\u7801\u770B\u4E0B\uFF0C\u6211\u4EEC\u5BFC\u5165\u7684 axios \u5BF9\u8C61\u662F\u5982\u4F55\u751F\u6210\u7684</p><div class="language-js"><pre><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>  
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// Create the default instance to be exported</span>
<span class="token keyword">var</span> axios <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */</span>
<span class="token keyword">function</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token parameter">defaultConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span>defaultConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// instance(args) \u76F8\u5F53\u4E8E\u6267\u884C\u5305\u88C5\u51FD\u6570 function wrap(...args) {return context.request(args)}</span>

  <span class="token comment">// Copy axios.prototype to instance</span>
  <span class="token comment">// \u5C06 Axios.prototype \u4E0A\u7684\u65B9\u6CD5\u90FD\u7ED1\u5B9A\u5230 context \u4E0A\uFF0C\u5E76\u590D\u5236\u5230 instance \u4E0A\u3002</span>
  utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Copy context to instance</span>
  utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728 createInstance \u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u77E5\u9053\uFF0C\u4E1A\u52A1\u4EE3\u7801\u4E2D\u4F7F\u7528\u7684\u5E76\u4E0D\u662F\u76F4\u63A5 new Axios(defaultConfig) \u7684\u503C\uFF0C\u800C\u662F\u7ECF\u8FC7 bind \u51FD\u6570\u5305\u88C5\u7684\u503C\uFF0C\u6240\u4EE5\u770B\u4E0B bind \u51FD\u6570\u7684\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u6240\u4EE5 bind \u51FD\u6570\u4F5C\u7528\u5C31\u662F\u5C06\u67D0\u4E2A\u51FD\u6570\u7ED1\u5B9A\u4E2A\u7279\u5B9A\u7684this\u4E0B\u6267\u884C
 * bind \u51FD\u6570\u8FD4\u56DE\u503C\u5C31\u662F\u4E00\u4E2A\u5305\u88C5\u51FD\u6570\uFF0C\u6240\u4EE5\u7B80\u5355\u8BF4\u4E1A\u52A1\u4EE3\u7801\u4F7F\u7528\u7684 axios \u5C31\u662F\u8FD9\u4E2A\u5305\u88C5\u51FD\u6570 wrap
 * 
 * axios = function wrap(...args) { return new Axios(defaultConfig).request(args)}
 * 
 * \u6B64\u65F6 axios \u4F5C\u4E3A\u51FD\u6570\u4F7F\u7528\uFF0C\u5B9E\u73B0\u8C03\u7528\u7684\u662F Axios.prototype.requet(config) \u65B9\u6CD5\u3002
 * \u800C\u51FD\u6570\u7C7B\u578B\u672C\u8EAB\u4E5F\u53EF\u4EE5\u4F5C\u7528\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u3002\u6240\u4EE5\u901A\u8FC7 extend \u51FD\u6570\u5411\u8BE5\u5305\u88C5\u51FD\u6570\u6DFB\u52A0\u5BF9\u8C61\u5C5E\u6027
 */</span>

<span class="token comment">/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */</span>
<span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">forEach</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">assignValue</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>thisArg <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C06 Axios.prototype \u4E0A\u7684\u65B9\u6CD5\u90FD\u7ED1\u5B9A\u5230 context \u4E0A\uFF0C\u5E76\u590D\u5236\u5230 instance \u4E0A\u3002\u5373 axios.prototype.request / get / post \u7B49\u7B49</span>
utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5C06 Axios \u5B9E\u4F8B\u5C5E\u6027\u90FD\u590D\u5236\u5230 instance \u4E0A\uFF0C\u5373 axios.defaults \u548C axios.interceptors</span>
utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u73B0\u5728\u6211\u4EEC\u6765\u770B\u4E0B Axios.prototype \u4E0A\u7684\u65B9\u6CD5\u548C new Axios() \u5B9E\u4F8B\u7684\u5C5E\u6027\uFF0C\u5373 Axios \u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49</span>

<span class="token comment">/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 * @example
 * axios.interceptors.request.use(fulfilled, rejected)
 * axios.interceptors.response.use(fulfilled, rejected)
 */</span>
<span class="token keyword">function</span> <span class="token function">Axios</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u4E24\u4E2A\u5B9E\u4F8B\u5C5E\u6027\u5C31\u662F utils.extend(instance, context) \u8BED\u53E5\u8981\u62F7\u8D1D\u7684\u5C5E\u6027</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>defaults <span class="token operator">=</span> instanceConfig<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EE5\u4E0B Axios.prototype \u4E0A\u7684\u5C5E\u6027\u5373 utils.extend(instance, Axios.prototype, context) \u8BED\u53E5\u8981\u62F7\u8D1D\u7684\u5C5E\u6027</span>
<span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*\u8BF7\u6C42\u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u5176\u5B83\u8BF7\u6C42\u522B\u540D\u90FD\u662F\u57FA\u4E8E\u5B83*/</span><span class="token punctuation">}</span>

<span class="token comment">// \u57FA\u4E8E request \u65B9\u6CD5\u5B9A\u4E49\u4E00\u7CFB\u5217\u522B\u540D\u65B9\u6CD5\uFF0C\u5206\u4E3A\u4E0D\u5305\u542B\u548C\u5305\u542B\u8BF7\u6C42\u4E3B\u4F53\u6570\u636E data \u4E24\u79CD\u60C5\u5F62\u3002</span>
utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodNoData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;patch&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodWithData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/**
 * \u5E76\u53D1\u7684\u5B9E\u73B0\uFF0C\u5373 Promise.all \u7684 api
 */</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u603B\u7ED3\uFF1A" tabindex="-1">\u603B\u7ED3\uFF1A <a class="header-anchor" href="#\u603B\u7ED3\uFF1A" aria-hidden="true">#</a></h2><p>axios \u5373\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528 axios(config)\uFF0C\u4E5F\u53EF\u4EE5\u8C03\u7528\u5BF9\u8C61\u8C03\u7528 axios.request(config)</p><p>\u662F\u56E0\u4E3A\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5BFC\u51FA\u7684 axios \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u5305\u88C5\u51FD\u6570 wrap\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528\u8FD4\u56DE\u7684\u662F Axios.prototype.request \u65B9\u6CD5 <code>axios(config) =&gt; wrap(config) =&gt; Axios.propotype.request(config)</code></p><p>\u800C\u80FD\u4F5C\u4E3A\u5BF9\u8C61\u4F7F\u7528\uFF0C\u662F\u56E0\u4E3A\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\u7C7B\u578B\u4E00\u79CD\uFF0C\u53EF\u4EE5\u50CF\u5BF9\u8C61\u4E00\u6837\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u6240\u4EE5\u5C06 Axios \u5B9E\u4F8B\u5C5E\u6027\u548C\u539F\u578B\u5C5E\u6027\u90FD\u901A\u8FC7 extend \u51FD\u6570\u62F7\u8D1D\u5230\u4E86\u5305\u88C5\u51FD\u6570 wrap \u51FD\u6570\u5BF9\u8C61\u4E0A\u3002</p><p><code>axios.request(config) =&gt; wrap.request(config) =&gt; Axios.prototype.request(config)</code></p>`,16),c=[o];function e(u,i,l,k,r,d){return a(),s("div",null,c)}var x=n(p,[["render",e]]);export{m as __pageData,x as default};
