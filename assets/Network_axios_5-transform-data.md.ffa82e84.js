import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const m='{"title":"axios\u6E90\u78016\uFF1AtransformData \u6570\u636E\u8F6C\u6362\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"Network/axios/5-transform-data.md"}',p={},o=t(`<h1 id="axios\u6E90\u78016\uFF1Atransformdata-\u6570\u636E\u8F6C\u6362\u5668" tabindex="-1">axios\u6E90\u78016\uFF1AtransformData \u6570\u636E\u8F6C\u6362\u5668 <a class="header-anchor" href="#axios\u6E90\u78016\uFF1Atransformdata-\u6570\u636E\u8F6C\u6362\u5668" aria-hidden="true">#</a></h1><p>\u5206\u4E3A\u8BF7\u6C42\u8F6C\u6362\u5668 transformRequest \u548C\u54CD\u5E94\u8F6C\u6362\u5668 transformResponse\u3002\u81EA\u52A8\u6839\u636E\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6570\u636E\uFF0C\u4E0D\u7528\u7528\u6237\u624B\u52A8\u8F6C\u6362\uFF0C\u7528\u6237\u81EA\u884C\u4E5F\u53EF\u4EE5\u5728\u914D\u7F6E\u4E2D\u81EA\u5B9A\u4E49\u8BBE\u7F6E\uFF0C\u5F88\u4EBA\u6027\u5316\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u8F6C\u6362\u5668\u51FD\u6570\u90FD\u5728\u9ED8\u8BA4\u5BF9\u8C61\u4E2D\uFF0C\u5305\u62EC\u9ED8\u8BA4\u7684\u548C\u7528\u6237\u4F20\u5165\u7684\u81EA\u5B9A\u4E49\u7684</span>
<span class="token keyword">var</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u5C5E\u6027</span>

  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token function">transformRequest</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// normalizeHeaderName \u4E3B\u8981\u7EDF\u4E00\u5934\u5B57\u6BB5\u5927\u5C0F\u5199\u4E0D\u7EDF\u4E00\u7684\u60C5\u51B5\uFF0C\u5982 Accept \u548C accept  Content-Type \u548C content-type</span>
    <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">&#39;Accept&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C\u8BF7\u6C42\u6570\u636E\u683C\u5F0F\u662F formData ArrayBuffer Buffer File Blob \u683C\u5F0F\uFF0C\u76F4\u63A5\u4F7F\u7528</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isFormData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isArrayBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isStream</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span>
      utils<span class="token punctuation">.</span><span class="token function">isBlob</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isArrayBufferView</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5982\u679C data \u662F URLSearchParams \u5B9E\u4F8B\u5BF9\u8C61\u5E76\u4E14\u672A\u8BBE\u7F6E\u5934\u5B57\u6BB5 Content-Type \u65F6\uFF0C\u5219\u5C06\u8BF7\u6C42\u5934\u5B57\u6BB5Content-Type \u8BBE\u7F6E\u8868\u5355\u9ED8\u8BA4\u63D0\u4EA4\u683C\u5F0F</span>
    <span class="token comment">// \u5982\u679C\u6709\u914D\u7F6E\u5934\u5B57\u6BB5 Content-Type \u65F6\uFF0C\u4EE5\u914D\u7F6E\u7684\u4E3A\u51C6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isURLSearchParams</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setContentTypeIfUnset</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5982\u679C data \u662F\u666E\u901A\u5BF9\u8C61\u5E76\u4E14\u672A\u8BBE\u7F6E\u5934\u5B57\u6BB5 Content-Type \u65F6\uFF0C\uFF0C\u5219\u8BF7\u6C42\u5934\u5B57\u6BB5 Content-Type \u8BBE\u7F6E\u4E3A json \u683C\u5F0F</span>
    <span class="token comment">// \u5982\u679C\u6709\u914D\u7F6E\u5934\u5B57\u6BB5 Content-Type \u65F6\uFF0C\u4EE5\u914D\u7F6E\u7684\u4E3A\u51C6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setContentTypeIfUnset</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token function">transformResponse</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u5982\u679C\u8BF7\u6C42\u8FD4\u56DE\u7684data\u662F\u5B57\u7B26\u4E32\uFF0C\u53EF\u80FD\u662F JSON \u5B57\u7B26\u4E32\uFF0C\u5C1D\u8BD5\u89E3\u6790\u6210\u5BF9\u8C61
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* Ignore */</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">normalizeHeaderName</span><span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> normalizedName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">processHeader</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> normalizedName <span class="token operator">&amp;&amp;</span> name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> normalizedName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      headers<span class="token punctuation">[</span>normalizedName<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token keyword">delete</span> headers<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setContentTypeIfUnset</span><span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> utils<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u8F6C\u6362\u5668</span>
<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>

  <span class="token comment">// Transform request data \u8F6C\u6362\u8BF7\u6C42\u6570\u636E</span>
  config<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
    config<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>transformRequest
  <span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token keyword">var</span> adapter <span class="token operator">=</span> config<span class="token punctuation">.</span>adapter <span class="token operator">||</span> defaults<span class="token punctuation">.</span>adapter<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Transform response data \u5BF9\u4E1A\u52A1\u54CD\u5E94\u6570\u636E\u5E94\u7528\u9884\u5B9A\u4E49\u7684\u6570\u636E\u8F6C\u6362\u5668</span>
    response<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">transformData</span><span class="token punctuation">(</span>
      response<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
      response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
      config<span class="token punctuation">.</span>transformResponse
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">onAdapterRejection</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isCancel</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// Transform response data  \u5BF9\u4E1A\u52A1\u54CD\u5E94\u6570\u636E\u5E94\u7528\u9884\u5B9A\u4E49\u7684\u6570\u636E\u8F6C\u6362\u5668</span>
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


<span class="token keyword">function</span> <span class="token function">transformData</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> fns</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*eslint no-param-reassign:0*/</span>
  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>fns<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ol><li>\u6570\u636E\u8F6C\u6362\u5668\u53EF\u4EE5\u901A\u8FC7 config \u7684 transformRequest \u548C transformResponse \u5C5E\u6027\u5B9A\u4E49</li><li>\u56E0\u4E3A\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4E3A\u4E0D\u8986\u76D6\u539F\u9ED8\u8BA4\u7684\u5904\u7406\u51FD\u6570\uFF0C\u5EFA\u7ACB\u5355\u72EC\u4F7F\u7528 axios.defaults.transformRequest.push(fn) \u589E\u52A0</li><li>\u8BF7\u6C42\u6570\u636E\u8F6C\u6362\u5668\u548C\u54CD\u5E94\u6570\u636E\u8F6C\u6362\u5668\u90FD\u5728 dispatchRequest \u51FD\u6570\u5185\u88AB\u8C03\u7528\u3002\u6402\u6CE8\u518C\u5148\u540E\u987A\u5E8F\u8C03\u7528\uFF0C\u5165\u53C2\u90FD\u662F data \u548C headers</li></ol>`,5),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
