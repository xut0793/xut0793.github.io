import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const f='{"title":"axios\u6E90\u78014\uFF1Ainterceptor \u62E6\u622A\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"Network/axios/4-interceptor.md"}',p={},o=t(`<h1 id="axios\u6E90\u78014\uFF1Ainterceptor-\u62E6\u622A\u5668" tabindex="-1">axios\u6E90\u78014\uFF1Ainterceptor \u62E6\u622A\u5668 <a class="header-anchor" href="#axios\u6E90\u78014\uFF1Ainterceptor-\u62E6\u622A\u5668" aria-hidden="true">#</a></h1><p>\u5C06\u8BF7\u6C42\u62E6\u622A\u5668 interceptor.request \u548C\u54CD\u5E94\u62E6\u622A\u5668 interceptor.response \u5206\u522B\u653E\u5728chain\u6570\u7EC4\u7684\u4E24\u7AEF\uFF0C\u4E2D\u95F4\u662F\u53D1\u9001\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u4E00\u6B65\u4E00\u6B65\u6210\u5BF9\u6267\u884C\uFF0C\u5C06\u8FD9\u4E48\u591Apromise\u8FDB\u884C\u4E32\u8054\uFF0C\u975E\u5E38\u5DE7\u5999\u3002</p><div class="language-js"><pre><code><span class="token comment">/**
 * axios \u62E6\u622A\u5668\u7684\u57FA\u672C\u4F7F\u7528
 */</span>
<span class="token comment">// \u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u505A\u4E9B\u4EC0\u4E48\uFF0C config \u5408\u5E76\u540E\u7684\u914D\u7F6E\u5BF9\u8C61</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u8BF7\u6C42\u9519\u8BEF\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u6570\u636E\u505A\u70B9\u4EC0\u4E48</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u9519\u8BEF\u505A\u70B9\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// use \u51FD\u6570\u6CE8\u518C\u7684\u6BCF\u4E2A\u62E6\u622A\u5668\u90FD\u4F1A\u8FD4\u56DE\u5176\u6CE8\u518C\u7684\u5E8F\u53F7\uFF0C\u53EF\u4EE5\u7528\u4E8E\u53D6\u6D88\u8BE5\u62E6\u622A\u5668\uFF0C\u7C7B\u4F3C\u6CE8\u518C\u5B9A\u4E49\u5668\u5982 timer = setTimeout() \u548C\u53D6\u6D88\u5B9A\u4E49\u5668 clearTimeout(timer)</span>
<span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u6E90\u7801
 * \u6CE8\u518C interceptors \u5BF9\u8C61
 */</span>
<span class="token keyword">function</span> <span class="token function">Axios</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>defaults <span class="token operator">=</span> instanceConfig<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u770B\u5230\u4E0D\u7BA1\u662F\u6CE8\u518C\u8BF7\u6C42\u62E6\u622A\u5668\u8FD8\u662F\u6CE8\u518C\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u5185\u90E8\u8C03\u7528\u7684\u90FD\u662F\u4E00\u4E2A\u5355\u72EC\u7684 InterceptorManager \u5B9E\u4F8B</span>
<span class="token keyword">function</span> <span class="token function">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7EF4\u62A4\u4E86\u4E00\u4E2A\u5B58\u653E\u62E6\u622A\u5668\u7684\u6570\u7EC4\uFF0C\u5185\u90E8\u5B58\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B\u5DF2\u89E3\u51B3\u548C\u62A5\u9519\u7684\u5904\u7406\u53E5\u67C4</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle \`then\` for a \`Promise\`
 * @param {Function} rejected The function to handle \`reject\` for a \`Promise\`
 *
 * @return {Number} An ID used to remove interceptor later
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">fulfilled<span class="token punctuation">,</span> rejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fulfilled</span><span class="token operator">:</span> fulfilled<span class="token punctuation">,</span>
    <span class="token literal-property property">rejected</span><span class="token operator">:</span> rejected
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u53EF\u7528\u4E8E\u79FB\u9664\u62E6\u622A\u5668\u7684\u5E8F\u53F7</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by \`use\`
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">eject</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become \`null\` calling \`eject\`.
 *
 * @param {Function} fn The function to call for each interceptor
 */</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">forEach</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachHandler</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// h = {fulfilled: fulfilled, rejected: rejected}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u53D6\u6D88\u67D0\u4E2A\u62E6\u622A\u5668\u5C31\u662F\u5C06 handlers \u6570\u7EC4\u5BF9\u5E94\u9879\u8BBE\u7F6E\u4E3A null\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5224\u65AD\u5C31\u4F1A\u8DF3\u8FC7 null \u9879</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/** 
 * \u6267\u884C\u62E6\u622A\u5668\u51FD\u6570
 * 
 * axios \u4E0D\u7BA1\u5982\u679C\u8C03\u7528\uFF0C\u90FD\u96C6\u4E2D\u5230 Axios.prototype.request \u65B9\u6CD5
 */</span>
<span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u5904\u7406 config \u914D\u7F6E\u5BF9\u8C61</span>

  <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8BF7\u6C42\u5904\u7406\u4E8B\u52A1\u94FE</span>
  <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u5C06\u8BF7\u6C42\u62E6\u622A\u5668\u63D2\u5165 chain \u7684\u5934\u90E8\uFF0C\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u5219\u4EE3\u7801\u4F4D\u7F6E\u9760\u540E\u5B9A\u4E49\u7684\u5148\u6267\u884C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5C06\u54CD\u5E94\u62E6\u622A\u5668\u63D2\u5165 chain \u7684\u5C3E\u90E8\uFF0C\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u5219\u4EE3\u7801\u4F4D\u7F6E\u9760\u540E\u7684\u540E\u6267\u884C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ol><li>\u62E6\u622A\u5668\u7684\u6CE8\u518C\u90FD\u662F\u6210\u5BF9\u7684 fulfilled \u548C rejected</li><li>\u8BF7\u6C42\u62E6\u622A\u5668\u5148\u6CE8\u518C\u7684\u540E\u6267\u884C\uFF0C\u5E76\u4E14\u9700\u8981\u8FD4\u56DE\u62E6\u622A\u5668\u5904\u7406\u540E\u7684 config \u5BF9\u8C61\u7ED9\u8BF7\u6C42\u65B9\u6CD5 dispatchRequest \u4F5C\u4E3A\u5165\u53C2</li><li>\u54CD\u5E94\u62E6\u622A\u5668\u5148\u6CE8\u518C\u5148\u6267\u884C\u3002\u5165\u53C2\u662F dispatchRequest \u65B9\u6CD5\u8FD4\u56DE\u7684\u54CD\u5E94\u5BF9\u8C61 response</li></ol><div class="language-js"><pre><code><span class="token comment">// \u8BF7\u6C42\u62E6\u622A\u5668\u5165\u53C2\u7684\u914D\u7F6E\u5BF9\u8C61 config \u6570\u636E\u7ED3\u6784\uFF1A</span>
<span class="token keyword">interface</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  baseURL<span class="token operator">?</span><span class="token operator">:</span> string
  url<span class="token operator">?</span><span class="token operator">:</span> string
  method<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// get</span>
  params<span class="token operator">?</span><span class="token operator">:</span> any <span class="token comment">// url query \u67E5\u8BE2\u53C2\u6570\u5BF9\u8C61</span>
  paramsSerializer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> string <span class="token comment">// \u8D1F\u8D23 \`params\` \u5E8F\u5217\u5316\u7684\u51FD\u6570\uFF0C\u501F\u7528 qs \u5E93\uFF1A\uFF08params) =&gt; {return Qs.stringify(params, {arrayFormat: &#39;brackets&#39;}) }</span>
  data<span class="token operator">?</span><span class="token operator">:</span> any <span class="token comment">// \u8BF7\u6C42\u4E3B\u4F53\u6570\u636E\uFF0C\u53EA\u9002\u7528\u4E8E\u8FD9\u4E9B\u8BF7\u6C42\u65B9\u6CD5 &#39;PUT&#39;, &#39;POST&#39;, \u548C &#39;PATCH&#39;</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> any <span class="token comment">// \u8BF7\u6C42\u5934</span>
  responseType<span class="token operator">?</span><span class="token operator">:</span> XMLHttpRequestResponseType <span class="token comment">// \u54CD\u5E94\u6570\u636E\u7C7B\u578B\uFF0C\u9ED8\u8BA4 json\uFF0C\u4E5F\u53EF\u4EE5\u662F &#39;arraybuffer&#39;, &#39;blob&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;\uFF08node\u4E13\u5C5E\uFF09</span>
  transformRequest<span class="token operator">?</span><span class="token operator">:</span> AxiosTransformer <span class="token operator">|</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u8BF7\u6C42\u6570\u636E\u8F6C\u6362\u5668\uFF0C\u9ED8\u8BA4\u6709\u63D0\u4F9B\u4E00\u4E2A\u6839\u636E\u8BF7\u6C42 data \u7C7B\u578B\u5224\u65AD\u4FEE\u6539 Content-Type \u7684\u51FD\u6570\uFF1AformData / isArrayBuffer / isStream / isFile / isBlob / isArrayBufferView / isURLSearchParams / isObject</span>
  transformResponse<span class="token operator">?</span><span class="token operator">:</span> AxiosTransformer <span class="token operator">|</span> AxiosTransformer<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u54CD\u5E94\u6570\u636E\u8F6C\u6362\u5668\uFF0C\u9ED8\u8BA4\u6709\u63D0\u4F9B\u4E00\u4E2A\u5C06 reponse \u6570\u636E\u8F6C\u6362\u4E3A json \u683C\u5F0F\u7684\u51FD\u6570: (data) =&gt; { if (typeof data === &#39;string&#39;) { type {data = JSON.parse(data)} catch(e) {}} return data }</span>
  validateStatus<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">status</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> boolean <span class="token comment">// \u8BF7\u6C42\u54CD\u5E94\u72B6\u6001\u6821\u9A8C\uFF1A\u9ED8\u8BA4\u51FD\u6570\uFF1A\uFF08status) =&gt; {return status &gt;= 200 &amp;&amp; status &lt; 300 }</span>
  withCredentials<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// \u8868\u793A\u8DE8\u57DF\u8BF7\u6C42\u65F6\u662F\u5426\u9700\u8981\u4F7F\u7528\u51ED\u8BC1\uFF0C\u9ED8\u8BA4\u503C false</span>
  auth<span class="token operator">?</span><span class="token operator">:</span> AxiosBasicCredentials <span class="token comment">// \u5C06\u8BBE\u7F6E\u4E00\u4E2A \`Authorization\` \u5934\uFF0C\u8986\u5199\u6389\u73B0\u6709\u7684\u4EFB\u610F\u4F7F\u7528 \`headers\` \u8BBE\u7F6E\u7684\u81EA\u5B9A\u4E49 \`Authorization\`\u5934</span>
  timeout<span class="token operator">?</span><span class="token operator">:</span> number <span class="token comment">// \u8BF7\u6C42\u8D85\u65F6\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u503C0\uFF0C\u4EE3\u8868\u65E0\u8D85\u65F6\u65F6\u95F4</span>
  xsrfCookieName<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// \u9ED8\u8BA4\u503C &#39;XSRF-TOKEN&#39;</span>
  xsrfHeaderName<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// \u9ED8\u8BA4\u503C &#39;X-XSRF-TOKEN&#39;</span>
  adapter<span class="token operator">?</span><span class="token operator">:</span> AxiosAdapter <span class="token comment">// getDefaultAdapter() \u9ED8\u8BA4\u9002\u914D\u5668\uFF0C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B XMLHttpRequest,</span>
  proxy<span class="token operator">?</span><span class="token operator">:</span> ProxyDefaultType <span class="token comment">// \u5B9A\u4E49\u4EE3\u7406\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D\u79F0\u548C\u7AEF\u53E3</span>
  cancelToken<span class="token operator">?</span><span class="token operator">:</span> CancelToken <span class="token comment">// \u6307\u5B9A\u7528\u4E8E\u53D6\u6D88\u8BF7\u6C42\u7684 cancel token</span>
  onUploadProgress<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> ProgressEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// \u4E0A\u4F20\u8FDB\u5EA6\u5904\u7406\u51FD\u6570</span>
  onDownloadProgress<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> ProgressEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// \u4E0B\u8F7D\u8FDB\u5EA6\u5904\u7406\u51FD\u6570</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u54CD\u5E94\u62E6\u622A\u5668\u5165\u53C2\u7684\u54CD\u5E94\u5BF9\u8C61 response \u6570\u636E\u7ED3\u6784\uFF0C\u5728 xhrAdapter \u51FD\u6570\u5185\u7EC4\u88C5\u54CD\u5E94\u6570\u636E</span>
<span class="token keyword">interface</span> <span class="token class-name">AxiosResponse</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801\u8FD4\u56DE\u6570\u636E\u7ED3\u6784</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> number
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> string
  <span class="token literal-property property">headers</span><span class="token operator">:</span> any <span class="token comment">// \u54CD\u5E94\u5934</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> AxiosRequestConfig
  <span class="token literal-property property">request</span><span class="token operator">:</span> any <span class="token comment">// request = new XMLHttpRequest() \u8BF7\u6C42\u5B9E\u4F8B</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(r,l,u,k,i,m){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
