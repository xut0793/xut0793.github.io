import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const y='{"title":"VueRouter\u6E90\u78014: history \u8DEF\u7531\u5B9E\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7C7B History","slug":"\u57FA\u7C7B-history"},{"level":2,"title":"\u5B50\u7C7B HashHistory","slug":"\u5B50\u7C7B-hashhistory"},{"level":2,"title":"\u5B50\u7C7B HTML5History","slug":"\u5B50\u7C7B-html5history"},{"level":2,"title":"\u5B50\u7C7B AbstractHistory","slug":"\u5B50\u7C7B-abstracthistory"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-router-source-code-4-history.md"}',p={},o=t(`<h1 id="vuerouter\u6E90\u78014-history-\u8DEF\u7531\u5B9E\u4F8B" tabindex="-1">VueRouter\u6E90\u78014: history \u8DEF\u7531\u5B9E\u4F8B <a class="header-anchor" href="#vuerouter\u6E90\u78014-history-\u8DEF\u7531\u5B9E\u4F8B" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u57FA\u7C7B-history">\u57FA\u7C7B History</a></li><li><a href="#\u5B50\u7C7B-hashhistory">\u5B50\u7C7B HashHistory</a></li><li><a href="#\u5B50\u7C7B-html5history">\u5B50\u7C7B HTML5History</a></li><li><a href="#\u5B50\u7C7B-abstracthistory">\u5B50\u7C7B AbstractHistory</a></li></ul></div></p><p>VueRouter \u6784\u9020\u51FD\u6570\u6E90\u7801\uFF0C\u4E3B\u8981\u662F\u521D\u59CB\u5316\u4E00\u7CFB\u5217\u5C5E\u6027\u3002\u5176\u4E2D\u6838\u5FC3\u4E24\u70B9\uFF1A</p><ol><li><code>this.matcher = createMatcher(options.routes || [], this);</code> \u4E2D createMactcher \u51FD\u6570\uFF1A\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u8868 pathList pathMap nameMap</li><li><code>this.history</code> \u5B9E\u9645\u7684\u8DEF\u7531\u5B9E\u4F8B\u3002\u4F9D\u6A21\u5F0F\u8C03\u7528\u4E0D\u540C\u7684\u8DEF\u7531\u6784\u9020\u5668</li></ol><p>\u4E0A\u4E00\u8282\u5206\u6790\u4E86\u8DEF\u7531\u5339\u914D\u5668\u7684\u751F\u6210\uFF0C\u8FD9\u8282\u770B\u4E0B\u6E90\u7801\u4E2D\u8DEF\u7531\u5B9E\u4F8B\u7684\u751F\u6210 history</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  <span class="token comment">// Vue \u6839\u5B9E\u4F8B\uFF0C\u5373 new Vue \u5B9E\u4F8B, \u5728 init \u51FD\u6570\u4E2D this.app = app</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>apps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5B58\u5165\u5404\u7EC4\u4EF6\u5B9E\u4F8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span> <span class="token comment">// \u8DEF\u7531\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5373 new VueRouter({ routes: routes })</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>beforeHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resolveHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>afterHooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>matcher <span class="token operator">=</span> <span class="token function">createMatcher</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>routes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD4\u56DE\u4E24\u4E2A\u5DE5\u5177\u51FD\u6570 match / addRoutes\uFF0C\u8DEF\u7531\u6620\u5C04\u5173\u7CFB pathList / pathMap / nameMap \u5B58\u5728 createMatcher \u51FD\u6570\u7684\u95ED\u5305\u5C5E\u6027\u4E2D</span>

    <span class="token keyword">let</span> mode <span class="token operator">=</span> options<span class="token punctuation">.</span>mode <span class="token operator">||</span> <span class="token string">&#39;hash&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5728\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 history.pushState \u7684\u60C5\u51B5\u4E0B\uFF0C\u6839\u636E\u4F20\u5165\u7684 fallback \u914D\u7F6E\u53C2\u6570\uFF0C\u51B3\u5B9A\u662F\u5426\u56DE\u9000\u5230hash\u6A21\u5F0F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fallback <span class="token operator">=</span>
      mode <span class="token operator">===</span> <span class="token string">&#39;history&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>supportsPushState <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>fallback <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mode <span class="token operator">=</span> <span class="token string">&#39;hash&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inBrowser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      mode <span class="token operator">=</span> <span class="token string">&#39;abstract&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span>

    <span class="token comment">/**
     * this.history \u8868\u793A\u8DEF\u7531\u5386\u53F2\u7684\u5177\u4F53\u7684\u5B9E\u73B0\u5B9E\u4F8B\uFF0C\u5B83\u662F\u6839\u636E this.mode \u7684\u4E0D\u540C\u5B9E\u73B0\u4E0D\u540C\uFF0C
     * HTML5History / HashHistory / AbsractHistory \u90FD\u7EE7\u627F\u81EA History \u57FA\u7C7B\uFF0C\u7136\u540E\u4E0D\u540C\u7684 mode \u5B9A\u4E49\u4E0D\u540C\u7684\u7C7B\u3002
     */</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;history&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTML5History</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;hash&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;abstract&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbstractHistory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
          <span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">invalid mode: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token comment">/**
   * \u7701\u7565\u539F\u578B\u65B9\u6CD5
   * init
   * match
   * push
   * replace
   * go
   * back
   * forward
   * addRoutes
   * resolve
   * onReady
   * onError
   * beforeResolve
   * beforeEach
   */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u8FF0\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u4F1A\u901A\u8FC7 mode \u4E0D\u540C\uFF0C\u5B9E\u73B0\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u8DEF\u7531\u5B9E\u4F8B\u3002\u4E0D\u7BA1\u79CD\u7C7B\u4E0D\u540C\uFF0C\u4F46\u5176\u80AF\u5B9A\u90FD\u5177\u6709\u4E00\u4E9B\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u6240\u4EE5\u4F1A\u6709\u4E00\u4E2A\u57FA\u7C7B\u6765\u5B9A\u4E49\u8FD9\u4E9B\u5171\u540C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="\u57FA\u7C7B-history" tabindex="-1">\u57FA\u7C7B History <a class="header-anchor" href="#\u57FA\u7C7B-history" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">History</span> <span class="token punctuation">{</span>

  <span class="token comment">// implemented by sub-classes</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">router<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router <span class="token operator">=</span> router<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token function">normalizeBase</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// start with a route object that stands for &quot;nowhere&quot;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token constant">START</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>readyCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>readyErrorCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>errorCbs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/**
   * \u7701\u7565\u539F\u578B\u65B9\u6CD5
   * onReady
   * onError
   * listen
   * teardownListeners
   * updateRoute
   * transitionTo
   * confirmTransition
   */</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">normalizeBase</span> <span class="token punctuation">(</span><span class="token parameter">base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inBrowser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// respect &lt;base&gt; tag</span>
      <span class="token keyword">const</span> baseEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      base <span class="token operator">=</span> <span class="token punctuation">(</span>baseEl <span class="token operator">&amp;&amp;</span> baseEl<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>
      <span class="token comment">// strip full URL origin</span>
      base <span class="token operator">=</span> base<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https?:\\/\\/[^\\/]+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      base <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// make sure there&#39;s the starting slash</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>base<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    base <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> base<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// remove trailing slash</span>
  <span class="token keyword">return</span> base<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">START</span> <span class="token operator">=</span> <span class="token function">createRoute</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/**
 *  START = {
 *    name: undefined,
 *    path: &#39;/&#39;,
 *    fullPath: &#39;/&#39;
 *    query: {},
 *    params: {},
 *    meta: {},
 *    hash: &#39;&#39;,
 *    matched: []
  * }
 * }
*/</span>
</code></pre></div><p>\u57FA\u7C7B History \u4E2D\uFF0C\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u6838\u5FC3\u65B9\u6CD5\uFF1A</p><ul><li>transitionTo \u548C confirmTransition \u5B9E\u73B0\u8DEF\u5F84\u5207\u6362\uFF0C\u6267\u884C\u8DEF\u7531\u751F\u547D\u5468\u671F</li><li>updateRoute \u5B9E\u73B0\u4E86\u8DEF\u7531\u6539\u53D8\uFF0C\u89E6\u53D1\u7EC4\u4EF6\u6E32\u67D3</li></ul><p>\u5F85\u5230\u540E\u9762\u8DEF\u7531\u5668\u521D\u59CB\u5316 init \u65B9\u6CD5\u4E2D\u5206\u6790\u5176\u5B9E\u73B0\u3002</p><h2 id="\u5B50\u7C7B-hashhistory" tabindex="-1">\u5B50\u7C7B HashHistory <a class="header-anchor" href="#\u5B50\u7C7B-hashhistory" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">HashHistory</span> <span class="token keyword">extends</span> <span class="token class-name">History</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">router<span class="token punctuation">,</span> base<span class="token punctuation">,</span> fallback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>router<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// check history fallback deeplinking</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fallback <span class="token operator">&amp;&amp;</span> <span class="token function">checkFallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>base<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">ensureSlash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u539F\u578B\u65B9\u6CD5
   * push
   * replace
   * go
   * getCurrentLocation
   * setupListeners
   * ensureURL
   */</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ensureSlash</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">getHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token function">replaceHash</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getHash</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// We can&#39;t use window.location.hash here because it&#39;s not</span>
  <span class="token comment">// consistent across browsers - Firefox will pre-decode it!</span>
  <span class="token keyword">let</span> href <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// empty path</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>

  href <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// decode the hash but not the search or hash</span>
  <span class="token comment">// as search(query) is already decoded</span>
  <span class="token comment">// https://github.com/vuejs/vue-router/issues/2708</span>
  <span class="token keyword">const</span> searchIndex <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>searchIndex <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hashIndex <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hashIndex <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      href <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> hashIndex<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>hashIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> href <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    href <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> searchIndex<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>searchIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> href
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">replaceHash</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>supportsPushState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token function">getUrl</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token function">getUrl</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u5C31\u662F\u6211\u4EEC\u8F93\u5165\u9996\u9875 127.0.0.1:5500\u65F6\uFF0C\u4F1A\u53D8\u6210 127.0.0.1:5500#/\u7684\u539F\u56E0</span>
<span class="token keyword">function</span> <span class="token function">getUrl</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> href <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
  <span class="token keyword">const</span> i <span class="token operator">=</span> href<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> base <span class="token operator">=</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> href<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">:</span> href<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5B50\u7C7B-html5history" tabindex="-1">\u5B50\u7C7B HTML5History <a class="header-anchor" href="#\u5B50\u7C7B-html5history" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">HTML5History</span> <span class="token keyword">extends</span> <span class="token class-name">History</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">router<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>router<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_startLocation <span class="token operator">=</span> <span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u539F\u578B\u65B9\u6CD5
   * push
   * replace
   * go
   * getCurrentLocation
   * setupListeners
   * ensureURL
   */</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getLocation</span> <span class="token punctuation">(</span><span class="token parameter">base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D path \u5305\u542B base \u8DEF\u5F84\u5219\u53BB\u6389</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>base <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>path <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search <span class="token operator">+</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash
  <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C /vue.html#/info/13?q=keyword</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * eg. url = http://127.0.0.1:5500/vue.html#/info/13?q=keyword
 * hash: &quot;#/info/13?q=keyword&quot;
 * host: &quot;127.0.0.1:5500&quot;
 * hostname: &quot;127.0.0.1&quot;
 * href: &quot;http://127.0.0.1:5500/vue.html#/info/13?q=keyword&quot;
 * origin: &quot;http://127.0.0.1:5500&quot;
 * pathname: &quot;/vue.html&quot;
 * port: &quot;5500&quot;
 * protocol: &quot;http:&quot;
*/</span>
</code></pre></div><h2 id="\u5B50\u7C7B-abstracthistory" tabindex="-1">\u5B50\u7C7B AbstractHistory <a class="header-anchor" href="#\u5B50\u7C7B-abstracthistory" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">AbstractHistory</span> <span class="token keyword">extends</span> <span class="token class-name">History</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">router<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>router<span class="token punctuation">,</span> base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">push</span> <span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> onComplete<span class="token punctuation">,</span> onAbort</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>
      location<span class="token punctuation">,</span>
      <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">++</span><span class="token punctuation">;</span>
        onComplete <span class="token operator">&amp;&amp;</span> <span class="token function">onComplete</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      onAbort
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">replace</span> <span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> onComplete<span class="token punctuation">,</span> onAbort</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transitionTo</span><span class="token punctuation">(</span>
      location<span class="token punctuation">,</span>
      <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
        onComplete <span class="token operator">&amp;&amp;</span> <span class="token function">onComplete</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      onAbort
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">go</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">+</span> n<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetIndex <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> targetIndex <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span>targetIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">confirmTransition</span><span class="token punctuation">(</span>
      route<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> targetIndex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> NavigationFailureType<span class="token punctuation">.</span>duplicated<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> targetIndex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getCurrentLocation</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> current <span class="token operator">?</span> current<span class="token punctuation">.</span>fullPath <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">ensureURL</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// noop</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,18),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
