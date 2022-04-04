import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const g='{"title":"axios\u6E90\u78013\uFF1Aadapter \u9002\u914D\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"Network/axios/3-adapter.md"}',p={},o=t(`<h1 id="axios\u6E90\u78013\uFF1Aadapter-\u9002\u914D\u5668" tabindex="-1">axios\u6E90\u78013\uFF1Aadapter \u9002\u914D\u5668 <a class="header-anchor" href="#axios\u6E90\u78013\uFF1Aadapter-\u9002\u914D\u5668" aria-hidden="true">#</a></h1><p>Adapter \u9002\u914D\u5668\u7684\u5B9E\u73B0\uFF1A</p><ol><li>\u6839\u636E\u73AF\u5883\u81EA\u52A8\u9009\u62E9\uFF0C\u6D4F\u89C8\u5668\u73AF\u5883\u57FA\u4E8E XMLHttpRequest\uFF0Cnode \u73AF\u5883\u57FA\u4E8E http \u6A21\u5757</li><li>\u8FD8\u53EF\u6839\u636E\u7528\u6237\u81EA\u884C\u914D\u7F6E\uFF0C\u964D\u4F4E\u8026\u5408\uFF0C\u4E14\u7ED9\u7528\u6237\u7559\u4E86\u53E3\u5B50\uFF0C\u5F88\u4EBA\u6027\u5316\u3002</li></ol><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token keyword">var</span> adapter <span class="token operator">=</span> config<span class="token punctuation">.</span>adapter <span class="token operator">||</span> defaults<span class="token punctuation">.</span>adapter<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/**... */</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onAdapterRejection</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/**... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * adapter \u4F18\u5148\u4F7F\u7528\u914D\u7F6E\u5BF9\u8C61\u4E2D\u81EA\u5B9A\u4E49\u7684 adapter \u51FD\u6570\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5B9E\u73B0\u4E86\u9002\u914D\u5668\u53EF\u4EE5\u7531\u7528\u6237\u81EA\u884C\u914D\u7F6E\u3002
 * 
 * \u7136\u540E\u518D\u770B\u4E0B\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u7684\u9002\u914D\u5668
 */</span>

<span class="token keyword">var</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">getDefaultAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getDefaultAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> adapter<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> XMLHttpRequest <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// For browsers use XHR adapter</span>
    adapter <span class="token operator">=</span> xhrAdapter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> process <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object process]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// For node use HTTP adapter</span>
    adapter <span class="token operator">=</span> httpAdapter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> adapter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u770B\u5230\uFF0CAxios \u901A\u8FC7\u68C0\u6D4B XMLHttpRequest \u5BF9\u8C61\u548C process \u5BF9\u8C61\u6765\u533A\u5206\u6D4F\u89C8\u5668\u73AF\u5883\u548C node \u73AF\u5883\u3002</span>

<span class="token comment">/**
 * config \u914D\u7F6E\u9879\u4F18\u5148\u7EA7\u7684\u5408\u5E76\u7B56\u7565\u3002
 * 1. \u5185\u90E8\u5B9A\u4E49 defaults \u5BF9\u8C61\u5305\u542B\u7740\u9ED8\u8BA4\u914D\u7F6E\u9879
 * 2. instance = axios.create(config) \u521B\u5EFA\u5B9E\u4F8B\u65F6\uFF0C\u4F20\u5165\u7684 config \u81EA\u5B9A\u4E49\u914D\u7F6E\u9879\uFF0C\u4E0E defaults \u5BF9\u8C61\u4F1A\u5408\u5E76\u3002
 * 3. axios.post(url, data[,config]) \u6216 instance.post(url, data[,config]) \u4F20\u5165\u7684\u914D\u7F6E\u9879\u4F1A\u4E5F\u4E0A\u9762\u4E24\u6B65\u5DF2\u5408\u5E76\u7684 defaluts \u5408\u5E76
 * 
 * \u6838\u53D1\u51FD\u6570\u662F mergeConfig\u3002\u4F46\u9700\u8981\u638C\u63E1\u7684\u662F\u5408\u5E76\u4F18\u5148\u7EA7
 */</span>

<span class="token comment">/**
 * \u76F4\u63A5\u4F7F\u7528\u5BFC\u5165\u7684 axios \u65F6
 * \u5BFC\u5165\u7684 axios \u4F7F\u7528 createInstance \u51FD\u6570\u4F20\u5165\u7684\u9ED8\u8BA4\u914D\u7F6E\u5BF9\u8C61 defaults
 */</span>
<span class="token keyword">var</span> axios <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token parameter">defaultConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span>defaultConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>request<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Axios</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>defaults <span class="token operator">=</span> instanceConfig<span class="token punctuation">;</span> <span class="token comment">// \u6B64\u65F6 this.defauts \u5C31\u662F defaults</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5982\u679C\u521B\u5EFA\u72EC\u7ACB\u7684\u5B9E\u4F8B\u8BF7\u6C42\uFF0C\u4F1A\u5C06\u4F20\u5165\u7684\u914D\u7F6E\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u5408\u5E76
 * const instance = axios.create(instanceConfig)
 */</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">createInstance</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> instanceConfig<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u5C06\u521B\u5EFA\u5B9E\u4F8B\u4F20\u5165\u7684\u914D\u7F6E\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u5408\u5E76\u540E\uFF0C\u8D4B\u503C\u7ED9 this.defaults\uFF0C\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u5B9E\u4F8B\u7684\u9ED8\u8BA4\u914D\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">/**
 * \u4E4B\u540E\uFF0C\u4E0D\u7BA1\u662F\u8C03\u7528\u7528 axios(config) axios(url[, config]) axios.request(config) axios.get(url)
 * \u8FD8\u662F instance(config) instance(url [, config]) instance.request(config) instance.get(url)
 * \u5B9E\u9645\u8C03\u7528\u7684\u90FD\u662F Axios.prototype.request \u51FD\u6570\u3002
 */</span>

<span class="token comment">/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */</span>
	<span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token comment">// \u517C\u5BB9 axios(config) \u548C axios(url[, config]) \u7684\u8C03\u7528\u65B9\u5F0F\uFF0C\u7C7B\u4F3C fetch API</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    config <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	    config<span class="token punctuation">.</span>url <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	    config <span class="token operator">=</span> config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>
  
    <span class="token comment">// \u5C06\u65B9\u6CD5\u4F20\u5165\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E0E\u9ED8\u8BA4\u914D\u7F6E defaultConfig \u6216\u521B\u5EFA\u5B9E\u4F8B\u4E2D\u5408\u5E76\u540E\u7684\u914D\u7F6E\uFF0C\u518D\u5408\u5E76</span>
	  config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  <span class="token comment">// Set config.method</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    config<span class="token punctuation">.</span>method <span class="token operator">=</span> config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
	
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodNoData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5904\u7406 axios.get(url) \u8C03\u7528\u65F6 url \u7684\u914D\u7F6E</span>
	    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
	      <span class="token literal-property property">url</span><span class="token operator">:</span> url
	    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;patch&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachMethodWithData</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5904\u7406 axios.post(url, data[,config]) \u7684\u914D\u7F6E</span>
	    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token function">mergeConfig</span><span class="token punctuation">(</span>config <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
	      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
	      <span class="token literal-property property">data</span><span class="token operator">:</span> data
	    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">// \u6240\u4EE5\u5173\u6CE8\u4E0B mergeConfig \u51FD\u6570\u7684\u5B9E\u73B0</span>
<span class="token comment">/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1 target \u9ED8\u8BA4\u914D\u7F6E
	 * @param {Object} config2 source \u81EA\u5B9A\u4E49
	 * @returns {Object} New object resulting from merging config2 to config1
	 */</span>
<span class="token keyword">function</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token parameter">config1<span class="token punctuation">,</span> config2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token comment">// eslint-disable-next-line no-param-reassign</span>
	  config2 <span class="token operator">=</span> config2 <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	  <span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
	  <span class="token keyword">var</span> valueFromConfig2Keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;method&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u4EE5\u7528\u6237\u81EA\u5B9A\u4E49\u4E3A\u51C6\u7684 key</span>
	  <span class="token keyword">var</span> mergeDeepPropertiesKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auth&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;proxy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;params&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u6DF1\u5EA6\u5408\u5E76\u7684\u5C5E\u6027 key</span>
	  <span class="token keyword">var</span> defaultToConfig2Keys <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">// </span>
	    <span class="token string">&#39;baseURL&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;transformRequest&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;transformResponse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;paramsSerializer&#39;</span><span class="token punctuation">,</span>
	    <span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;timeoutMessage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;withCredentials&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;adapter&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;responseType&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xsrfCookieName&#39;</span><span class="token punctuation">,</span>
	    <span class="token string">&#39;xsrfHeaderName&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onUploadProgress&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onDownloadProgress&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;decompress&#39;</span><span class="token punctuation">,</span>
	    <span class="token string">&#39;maxContentLength&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;maxBodyLength&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;maxRedirects&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;transport&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;httpAgent&#39;</span><span class="token punctuation">,</span>
	    <span class="token string">&#39;httpsAgent&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cancelToken&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;socketPath&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;responseEncoding&#39;</span>
	  <span class="token punctuation">]</span><span class="token punctuation">;</span>
	  <span class="token keyword">var</span> directMergeKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;validateStatus&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u76F4\u63A5\u5408\u5E76\u7684 key</span>
	
	  <span class="token keyword">function</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      <span class="token keyword">return</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      <span class="token keyword">return</span> utils<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    <span class="token keyword">return</span> source<span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>
	
	  <span class="token keyword">function</span> <span class="token function">mergeDeepProperties</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7528\u6237\u6709\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u5219\u4EE5\u7528\u6237\u4E3A\u51C6\u8FDB\u884C\u5408\u5E76</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4FDD\u7559\u4E0D\u5728\u9ED8\u8BA4\u5C5E\u6027\u5185\u7684\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	  <span class="token punctuation">}</span>
	
	  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>valueFromConfig2Keys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">valueFromConfig2</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>mergeDeepPropertiesKeys<span class="token punctuation">,</span> mergeDeepProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>defaultToConfig2Keys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">defaultToConfig2</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7528\u6237\u6709\u5B9A\u4E49\uFF0C\u76F4\u63A5\u5408\u5E76\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u503C</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5426\u5219\u5408\u5E76\u9ED8\u8BA4\u914D\u7F6E\u5C5E\u6027\u503C</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>directMergeKeys<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> config2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span>config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">,</span> config2<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> config1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      config<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMergedValue</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> config1<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  <span class="token keyword">var</span> axiosKeys <span class="token operator">=</span> valueFromConfig2Keys
	    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>mergeDeepPropertiesKeys<span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>defaultToConfig2Keys<span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>directMergeKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  <span class="token keyword">var</span> otherKeys <span class="token operator">=</span> Object
	    <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config1<span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config2<span class="token punctuation">)</span><span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">filterAxiosKeys</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	      <span class="token keyword">return</span> axiosKeys<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>otherKeys<span class="token punctuation">,</span> mergeDeepProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
<span class="token comment">/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * \`\`\`js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * \`\`\`
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */</span>
<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token comment">/* obj1, obj2, obj3, ... */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">assignValue</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">forEach</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> assignValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ol><li>axios \u5E93\u5185\u90E8\u7EF4\u62A4\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u914D\u7F6E\u5BF9\u8C61 defaults\uFF0C\u90E8\u5206\u5C5E\u6027\u6709\u9ED8\u8BA4\u503C</li><li>\u5982\u679C\u6709\u521B\u5EFA\u72EC\u7ACB\u7684\u8BF7\u6C42\u5B9E\u4F8B\uFF0C\u90A3\u4F20\u5165\u7684 instaceConfig \u4F1A\u4E0E\u539F\u6765\u9ED8\u8BA4\u5BF9\u8C61\u8FDB\u884C\u5408\u5E76\u540E\uFF0C\u4F5C\u4E3A\u5F53\u524D\u5B9E\u4F8B\u7684\u9ED8\u8BA4\u914D\u7F6E\u5BF9\u8C61 defaults</li><li>\u5177\u4F53\u8BF7\u6C42\u65B9\u6CD5\u4E2D\u4F20\u5165\u7684 config\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u5BF9\u8C61\u518D\u5408\u5E76\u3002</li></ol><p>\u6240\u4EE5\u4F18\u5148\u7EA7\uFF1A \u8BF7\u6C42\u65B9\u6CD5\u7684\u914D\u7F6E &gt; \u5B9E\u4F8B\u914D\u7F6E &gt; \u9ED8\u8BA4\u914D\u7F6E</p>`,7),c=[o];function e(u,l,k,i,r,f){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{g as __pageData,m as default};
