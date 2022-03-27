import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const m='{"title":"axios\u6E90\u78012\uFF1Arequest\u8BF7\u6C42\u5B9E\u73B0promise","description":"","frontmatter":{},"headers":[],"relativePath":"Network/axios/2-request-promise.md"}',p={},o=t(`<h1 id="axios\u6E90\u78012\uFF1Arequest\u8BF7\u6C42\u5B9E\u73B0promise" tabindex="-1">axios\u6E90\u78012\uFF1Arequest\u8BF7\u6C42\u5B9E\u73B0promise <a class="header-anchor" href="#axios\u6E90\u78012\uFF1Arequest\u8BF7\u6C42\u5B9E\u73B0promise" aria-hidden="true">#</a></h1><p>axios \u652F\u6301 Promise API \u8C03\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url2<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resArr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u901A\u8FC7\u4E0A\u4E00\u8282\u77E5\u9053\uFF0C\u4E0D\u7BA1\u662F axios(config) \u8FD8\u662F axios.get(url) \u8C03\u7528\uFF0C\u6700\u7EC8\u8C03\u7528\u7684\u90FD\u662F Axios.prototype.request \u65B9\u6CD5\uFF0C\u6240\u4EE5\u5230\u6E90\u7801\u770B\u4E0B request \u65B9\u6CD5\u5982\u4F55\u5B9E\u73B0\u652F\u6301 Promise API \u7684\u3002</p><div class="language-js"><pre><code>
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
  
  <span class="token comment">// \u5C06\u81EA\u5B9A\u4E49\u914D\u7F6E\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u5408\u5E76</span>
  config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Set config.method \u5C06\u8BF7\u6C42\u65B9\u6CD5\u8F6C\u4E3A\u5C0F\u5199\uFF0C\u6CA1\u6709\u4F20\u5165\u7684\u8BDD\uFF0C\u9ED8\u8BA4 get</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Axios \u62E6\u622A\u5668\u7684\u5B9E\u73B0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u8FD9\u91CC\u6211\u4EEC\u53EA\u5173\u6CE8 Axios \u5BF9 Promise API \u7684\u5B9E\u73B0\uFF0C\u5FFD\u7565\u62E6\u622A\u5668\u5B9E\u73B0\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u53EF\u4EE5\u628A\u4EE3\u7801\u7CBE\u7B80\u6210\u5982\u4E0B\u4EE3\u7801
 */</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u7701\u7565\u4EE3\u7801\uFF1A
   * 1. \u5BF9 axios(config) \u548C axios(url[, config]) \u7684\u517C\u5BB9\u5904\u7406
   * 2. \u5BF9 config.method \u7684\u5C0F\u5199\u548C\u9ED8\u8BA4\u503C\u7684\u5904\u7406
   */</span>

  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>dispatchRequest<span class="token punctuation">)</span>
  <span class="token comment">// \u6B64\u65F6\u4F1A\u628A\u4E0A\u4E00\u884C\u4EE3\u7801\u4E2D\u5B9A\u4E49 promise \u65F6\u4F20\u5165\u7684 config \u5BF9\u8C61\u4F20\u5165 dispatchRequest \u51FD\u6570\u3002</span>
  <span class="token comment">// \u5373\u76F8\u5F53\u4E8E\u6267\u884C dispatchRequest(config)\uFF0C\u4F46\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C31\u53D8\u6210\u4E86 Promise \u5BF9\u8C61</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5176\u4E2D dispatchRequest \u51FD\u6570\u4E5F\u662F\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61
 */</span>
<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u7701\u7565\u4EE3\u7801\uFF1A
   * 1. \u8BF7\u6C42\u6570\u636E\u7684\u8F6C\u6362
   * 2. \u8BF7\u6C42\u5934\u7684\u6241\u5E73\u5316\u548C\u4FEE\u526A
   * 3. \u8BF7\u6C42\u6210\u529F\u6216\u5931\u8D25\u540E\u54CD\u5E94\u6570\u636E\u7684\u52A0\u5DE5\u548C\u8F6C\u6362
   */</span>

  <span class="token keyword">var</span> adapter <span class="token operator">=</span> config<span class="token punctuation">.</span>adapter <span class="token operator">||</span> defaults<span class="token punctuation">.</span>adapter<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/** \u54CD\u5E94\u6210\u529F\u6570\u636E\u7684\u52A0\u5DE5\u548C\u8F6C\u6362 */</span> <span class="token keyword">return</span> response<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token function">onAdapterRejection</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/** \u54CD\u5E94\u9519\u8BEF\u6570\u636E\u7684\u52A0\u5DE5\u548C\u8F6C\u6362 */</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5B9E\u9645\u4E0A\uFF0C\u5982\u679C\u4E0D\u8003\u8651\u62E6\u622A\u5668\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u53EA\u8003\u8651\u6267\u884C\u4E00\u4E2AdispatchRequest \u6267\u884C\u7684\u8BDD\uFF0C\u56E0\u4E3A dispatchRequest \u51FD\u6570\u8FD4\u56DE\u7684\u5C31\u662F Promise \u5BF9\u8C61
 * \u6240\u4EE5 request \u51FD\u6570\u4E5F\u53EF\u4EE5\u6539\u4E3A\u76F4\u63A5\u8FD4\u56DE dispatchRequest \u51FD\u6570\u6267\u884C\u7ED3\u679C
 */</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>dispatchRequest<span class="token punctuation">)</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token comment">// \u53D8\u4E3A</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F46\u662F\u56E0\u4E3A\u9700\u8981\u5B9E\u73B0\u62E6\u622A\u5668\u903B\u8F91\uFF0C\u6240\u4EE5\u589E\u52A0\u4E00\u4E2A\u6267\u884C\u94FE chain \u961F\u5217</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u6240\u4EE5\uFF0CAxios \u5B9E\u73B0\u62E6\u622A\u5668\u903B\u8F91\u7684\u4EE3\u7801\u662F\u975E\u5E38\u5DE7\u5999\u7684\u3002</p>`,6),c=[o];function e(u,i,l,k,r,f){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{m as __pageData,h as default};
