import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const d='{"title":"axios\u6E90\u78015\uFF1ACancelToken \u53D6\u6D88\u8BF7\u6C42","description":"","frontmatter":{},"headers":[],"relativePath":"Network/axios/6-cancel-token.md"}',p={},o=t(`<h1 id="axios\u6E90\u78015\uFF1Acanceltoken-\u53D6\u6D88\u8BF7\u6C42" tabindex="-1">axios\u6E90\u78015\uFF1ACancelToken \u53D6\u6D88\u8BF7\u6C42 <a class="header-anchor" href="#axios\u6E90\u78015\uFF1Acanceltoken-\u53D6\u6D88\u8BF7\u6C42" aria-hidden="true">#</a></h1><p>\u5728\u53D6\u6D88HTTP\u8BF7\u6C42\u7684\u903B\u8F91\u4E2D\uFF0Caxios\u5DE7\u5999\u7684\u4F7F\u7528\u4E86\u4E00\u4E2APromise\u6765\u4F5C\u4E3A\u89E6\u53D1\u5668\uFF0C\u5C06resolve\u51FD\u6570\u901A\u8FC7callback\u4E2D\u53C2\u6570\u7684\u5F62\u5F0F\u4F20\u9012\u5230\u4E86\u5916\u90E8\u3002</p><p>\u8FD9\u6837\u65E2\u80FD\u591F\u4FDD\u8BC1\u5185\u90E8\u903B\u8F91\u7684\u8FDE\u8D2F\u6027\uFF0C\u4E5F\u80FD\u591F\u4FDD\u8BC1\u5728\u9700\u8981\u8FDB\u884C\u53D6\u6D88\u8BF7\u6C42\u65F6\uFF0C\u4E0D\u9700\u8981\u76F4\u63A5\u8FDB\u884C\u76F8\u5173\u7C7B\u7684\u793A\u4F8B\u6570\u636E\u6539\u52A8\uFF0C\u6700\u5927\u7A0B\u5EA6\u4E0A\u907F\u514D\u4E86\u4FB5\u5165\u5176\u4ED6\u7684\u6A21\u5757\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u53D6\u6D88\u8BF7\u6C42\u7684\u57FA\u672C\u7528\u6CD5\uFF1A</span>
 <span class="token comment">// axios.CancelToken.source \u5DE5\u5382\u51FD\u6570</span>

<span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">/**
 * source() \u51FD\u6570\u5C31\u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA CancelToken \u5B9E\u4F8B\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B CancelToken \u5B9E\u4F8B \u548C\u8BE5\u5B9E\u4F8B\u5BF9\u5E94\u7684\u53D6\u6D88\u8BF7\u6C42\u7684\u65B9\u6CD5 cancel
 * 
 * CancelToken \u5B9E\u4F8B\u521B\u5EFA\u540E\u4F7F\u7528\u65F6\uFF0C\u5C06\u5B9E\u4F8B\u5BF9\u8C61 source.token \u4F5C\u4E3A\u914D\u7F6E\u503C\u503C\u4F20\u5165\u8BF7\u6C42\u7684 config.cancelToken \u4E2D\uFF0C\u7136\u540E\u5982\u679C\u5728\u9700\u8981\u53D6\u6D88\u8BE5\u8BF7\u6C42\u65F6\uFF0C\u8C03\u7528\u53D6\u6D88\u5B9E\u4F8B\u5BF9\u5E94\u7684\u53D6\u6D88\u65B9\u6CD5 source.cancel
 * 
 * config.cancelToken \u53EF\u4EE5\u5168\u5C40\u914D\u7F6E\u6216\u5BF9\u5E94\u8BF7\u6C42\u914D\u7F6E
 */</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6216\u9488\u5BF9\u5355\u4E2A\u8BF7\u6C42</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53D6\u6D88\u5F53\u524D\u8BF7\u6C42</span>
source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">&#39;cancel reason&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u6E90\u7801
 * 1. CancelToken \u6784\u9020\u51FD\u6570\u7684\u5B9E\u73B0\uFF0C\u53CA\u5176 source \u5DE5\u5382\u51FD\u6570
 * 2. config.cancelToken \u5C5E\u6027\u7684\u4F5C\u7528
 * 3. cancel \u51FD\u6570\u6267\u884C\u903B\u8F91
 */</span>
<span class="token keyword">var</span> axios <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>CancelToken <span class="token operator">=</span> CancelToken
axios<span class="token punctuation">.</span>Cancel <span class="token operator">=</span> Cancel
axios<span class="token punctuation">.</span>isCancel <span class="token operator">=</span> isCancel

<span class="token comment">/**
 * A \`CancelToken\` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */</span>
<span class="token keyword">function</span> <span class="token function">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> executor <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;executor must be a function.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// token \u5C31\u662F CancelToken \u5B9E\u4F8B</span>
  <span class="token keyword">var</span> token <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>


  <span class="token keyword">var</span> resolvePromise<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">promiseExecutor</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvePromise <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">executor</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Cancellation has already been requested</span>
      <span class="token comment">// \u5982\u679C\u5F53\u524D\u5B9E\u4F8B toekn \u5DF2\u7ECF\u5B58\u5728 reason \u5C5E\u6027\uFF0C\u8BF4\u660E\u8BF7\u6C42\u5DF2\u7ED1\u5B9A\u4E00\u4E2A\u53D6\u6D88\u5B9E\u4F8B</span>
      <span class="token comment">// \u5373\u4E00\u4E2A\u8BF7\u6C42\u53EA\u80FD\u7ED1\u5B9A\u4E2A\u53D6\u6D88\u5B9E\u4F8B\uFF0C\u4F46\u67D0\u4E2A\u53D6\u6D88\u5B9E\u4F8B cancelToken \u53EF\u4EE5\u5E94\u7528\u4E8E\u591A\u4E2A\u8BF7\u6C42\u3002</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    token<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cancel</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// token.reason = {message, __CANCEL__: true}</span>
    <span class="token comment">/**
     * axios \u7684 CancelToken api \u7684\u7CBE\u9AD3\u5C31\u662F resolvePromise \u51FD\u6570\u7684\u5B9E\u73B0\u3002
     */</span>
    <span class="token function">resolvePromise</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Returns an object that contains a new \`CancelToken\` and a function that, when called,
 * cancels the \`CancelToken\`.
 */</span>
CancelToken<span class="token punctuation">.</span><span class="token function-variable function">source</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cancel<span class="token punctuation">;</span>
  <span class="token keyword">var</span> token <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> token<span class="token punctuation">,</span>
    <span class="token literal-property property">cancel</span><span class="token operator">:</span> cancel
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * A \`Cancel\` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */</span>
<span class="token keyword">function</span> <span class="token function">Cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Cancel</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Cancel&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">?</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Cancel</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__CANCEL__ <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">isCancel</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__CANCEL__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token comment">/**
 * \u901A\u8FC7\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528 source.cancel(message) \u65F6\uFF0C
 * \u4F1A\u521B\u5EFA\u4E00\u4E2A\u53D6\u6D88\u7684\u5B9E\u4F8B\u5BF9\u8C61 cancel = {message, __CANCEL__\uFF1Atrue}
 * \u8FD9\u4E2A\u53D6\u6D88\u7684\u5BF9\u8C61\u4F1A\u4F5C\u4E3A resolve\u3000\u51FD\u6570\u7684\u5165\u53C2\uFF0C\u4FDD\u5B58\u5728\u3000cancelToken.promise\u3000\u5C5E\u6027\u4E0A\u3002
 * 
 * \u6240\u4EE5\u5728\u8BF7\u6C42\u53D1\u9001\u524D\uFF0C\u901A\u8FC7\u3000config.cancelToken.promise \u6765\u5224\u65AD\u5F53\u524D\u8BF7\u6C42\u662F\u5426\u9700\u8981\u8BF7\u6C42\uFF0C\u5982\u679C\u5DF2\u53D6\u6D88\uFF0C\u5219\u53D6\u6D88\u53D6\u6D88
 * 
 * \u5BF9 XMLHttpRequest \u53D6\u6D88\u8BF7\u6C42\uFF0C\u5373 xhr.abort()
 */</span>

<span class="token keyword">function</span> <span class="token function">xhrAdapter</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>

  <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">buildURL</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">,</span> config<span class="token punctuation">.</span>params<span class="token punctuation">,</span> config<span class="token punctuation">.</span>paramsSerializer<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6CE8\u518C\u4E00\u7CFB\u5217\u8BF7\u6C42\u76D1\u542C\u4E8B\u4EF6 onreadystatechange onabort onerror ontimeout progress</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Handle cancellation</span>
    config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">.</span>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onCanceled</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      request<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Clean up request</span>
      request <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>requestData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u628A\u5173\u952E\u4EE3\u7801\u6574\u7406\u4E0B\uFF1A
 */</span>
<span class="token comment">// CancelToken</span>
<span class="token keyword">var</span> resolvePromise<span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">promiseExecutor</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  resolvePromise <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// xhrAdapter</span>
config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">.</span>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onCanceled</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  request<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">reject</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Clean up request</span>
  request <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u53EF\u4EE5\u5173\u8054\u8D77\u6765
 */</span>
resolvePromise <span class="token operator">=</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">onCanceled</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                              <span class="token keyword">return</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>

                            request<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token function">reject</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token comment">// Clean up request</span>
                            request <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                          <span class="token punctuation">}</span>

<span class="token comment">// \u800C resolvePromise \u51FD\u6570\u7684\u8C03\u7528\u65F6\u673A\uFF0C\u5373 resolve \u7684\u89E6\u53D1\u65F6\u673A\uFF0C\u5373 onCanceled \u8C03\u7528\u65F6\u673A\uFF0C\u5C31\u662F source.cancel() \u8C03\u7528\u7684\u65F6\u5019\uFF0C\u6240\u4EE5 cancel \u662F resolve \u7684\u89E6\u53D1\u5668</span>
<span class="token comment">// \u5373\u5728 source.cancel \u8C03\u7528\u4E4B\u524D\uFF0C cancelToken.promise \u4E00\u76F4\u5904\u7406 pending \u72B6\u6001\u3002</span>
<span class="token function">executor</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  token<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cancel</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// token.reason = {message, __CANCEL__: true}</span>
  <span class="token function">resolvePromise</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * resolve \u662F\u53D6\u6D88\u8BED\u6CD5\u7684\u5F00\u5934\u51FD\u6570\uFF0C\u901A\u8FC7\u4E00\u4E2A\u95ED\u5305\u53D8\u91CF resolvePromise \u5DE7\u5999\u5230\u628A\u5B83\u79FB\u5230\u5916\u90E8\u6682\u5B58
 * \u5E76\u628A\u64CD\u4F5C\u8FD9\u4E2A resolve \u5F00\u5934\u51FD\u6570\u7684\u65B9\u6CD5 cancel \u53C8\u5DE7\u5999\u7684\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u7684\u5165\u53C2 executor \u51FD\u6570\u7684\u53C2\u6570\u4F20\u9012\u5230\u4E1A\u52A1\u4EE3\u7801\u4E2D\u3002
 * \u53EA\u8981 resolve \u51FD\u6570\u4E0D\u8C03\u7528\uFF0C\u5373 cancel \u4E0D\u5728\u5916\u90E8\u8C03\u7528\uFF0C\u5219 token.promise \u5C31\u4E00\u76F4\u5904\u7406 pending \u72B6\u6001\uFF0C\u5982\u679C\u8C03\u7528\u4E86\uFF0Cpromise \u4E5F\u4F1A\u4E00\u76F4\u4FDD\u7559 fulfilled \u7684\u72B6\u6001\uFF0C
 * \u76F4\u5230\u5728\u8BF7\u6C42\u53D1\u9001\u524D\uFF0C\u901A\u8FC7 token.promise.then() \u8C03\u7528\u53BB\u5B9E\u73B0 fulfilled \u7684\u6267\u884C\u51FD\u6570 onCanceled\u3002
 * 
 * \u4E00\u4E2A promise \u5982\u679C\u72B6\u6001\u5DF2\u7ECF\u786E\u5B9A fulfiled \u6216 rejected \u540E\uFF0C\u65E0\u8BBA\u4EC0\u4E48\u65F6\u5019\u8C03\u7528\uFF0C\u6216\u8005\u91CD\u590D\u8C03\u7528\u591A\u5C11\u6B21\u90FD\u4F1A\u6267\u884C\u5BF9\u5E94\u7684 resolve \u6216 reject \u51FD\u6570\u3002
 */</span>

<span class="token comment">/**
 * \u53E6\u5916\u5728 axios \u7684 dispatchRequest \u51FD\u6570\u4E2D\uFF0C\u4F1A\u5728\u53D1\u8D77\u8BF7\u6C42\u524D\u3001\u8BF7\u6C42\u54CD\u5E94\u6210\u529F\u540E\uFF0C\u8BF7\u6C42\u54CD\u5E94\u5931\u8D25\u540E\uFF0C\u5206\u522B\u5224\u65AD\u5F53\u524D\u8BF7\u6C42\u662F\u5426\u5DF2\u53D6\u6D88\uFF1A
 */</span>

<span class="token comment">/**
 * Throws a \`Cancel\` if cancellation has been requested.
 */</span>
<span class="token keyword">function</span> <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">.</span><span class="token function">throwIfRequested</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Throws a \`Cancel\` if cancellation has been requested.
 */</span>
<span class="token class-name">CancelToken</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">throwIfRequested</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">throwIfRequested</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D1\u8D77\u8BF7\u6C42\u524D</span>
  <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BF7\u6C42\u6210\u529F\u54CD\u5E94\uFF0C\u8FD4\u56DE\u54CD\u5E94\u6570\u636E\u524D</span>
    <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Transform response data \u5BF9\u4E1A\u52A1\u54CD\u5E94\u6570\u636E\u5E94\u7528\u9884\u5B9A\u4E49\u7684\u6570\u636E\u8F6C\u6362\u5668</span>
    response<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
      response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
      response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
      config<span class="token punctuation">.</span>transformResponse
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onAdapterRejection</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u662F\u5DF2\u7ECF\u53D6\u6D88\u7684\u8BF7\u6C42\uFF0C\u5219 reason = {message, __CANCEL__: true}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isCancel</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// \u53EA\u6709\u6B64\u65F6\u8FD4\u56DE\u9519\u8BEF\u524D\u8FD8\u6709\u53D6\u6D88\uFF0C\u624D\u8FDB\u5165\u3002\u5E76\u5728\u8FD4\u56DE\u9519\u8BEF\u6570\u636E\u524D\u518D\u5224\u65AD\u4E00\u6B21\u3002</span>
      <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Transform response data</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>reason <span class="token operator">&amp;&amp;</span> reason<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
          reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
          reason<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
          config<span class="token punctuation">.</span>transformResponse
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u6240\u4EE5\u5728 AXIOS \u4E2D\uFF0CdispatchRequest \u6838\u5FC3\u51FD\u6570\uFF0C\u8BF7\u6C42\u7684\u53C2\u6570\u7684\u8F6C\u6362\u548C\u9519\u8BEF\u7684\u9519\u8BEF\u90FD\u5728\u8BE5\u51FD\u6570\u4E2D\u5904\u7406\uFF0C\u5305\u62EC\u53D6\u6D88\u8BF7\u6C42\u7684\u629B\u51FA\u4FE1\u606F
 */</span>

<span class="token comment">/**
 * \u603B\u7ED3\uFF1A
 * CancelToken \u5B9E\u4F8B\u542B\u6709\u7684\u5C5E\u6027\uFF1A
 * token = {
 *    reason\uFF1A {message, __CANCEL__: true},
 *    promise,
 *    source, // \u521B\u5EFA\u5B9E\u4F8B\u7684\u5DE5\u5382\u51FD\u6570
 *    throwIfRequested, // \u5982\u679C\u5DF2\u53D6\u6D88\uFF0C\u629B\u51FA\u53D6\u6D88\u539F\u56E0\u7684\u51FD\u6570
 * }
 * 
 * Axios \u53D6\u6D88\u8BF7\u6C42\u7684\u5B9E\u73B0\uFF0C\u6700\u5999\u7684\u662F\uFF0C\u901A\u8FC7 Promise \u8BED\u6CD5\u5BF9  cancel \u7684\u8D4B\u503C\u548C\u8C03\u7528
 */</span>
</code></pre></div>`,4),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{d as __pageData,w as default};
