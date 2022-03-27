import{_ as n,c as a,o as s,a as t}from"./app.9dbb06c5.js";const h='{"title":"VueRouter\u6E90\u78013: matcher \u8DEF\u7531\u5339\u914D\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"VueRouter \u6784\u9020\u51FD\u6570","slug":"vuerouter-\u6784\u9020\u51FD\u6570"},{"level":2,"title":"createRouteMap \u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB","slug":"createroutemap-\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB"},{"level":2,"title":"match \u8DEF\u7531\u5339\u914D\u65B9\u6CD5","slug":"match-\u8DEF\u7531\u5339\u914D\u65B9\u6CD5"},{"level":3,"title":"normalizeLocation \u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84","slug":"normalizelocation-\u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84"},{"level":3,"title":"createRoute \u6839\u636E location \u751F\u6210\u8DEF\u7531\u9879","slug":"createroute-\u6839\u636E-location-\u751F\u6210\u8DEF\u7531\u9879"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-router-source-code-3-matcher.md"}',p={},o=t(`<h1 id="vuerouter\u6E90\u78013-matcher-\u8DEF\u7531\u5339\u914D\u5668" tabindex="-1">VueRouter\u6E90\u78013: matcher \u8DEF\u7531\u5339\u914D\u5668 <a class="header-anchor" href="#vuerouter\u6E90\u78013-matcher-\u8DEF\u7531\u5339\u914D\u5668" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#vuerouter-\u6784\u9020\u51FD\u6570">VueRouter \u6784\u9020\u51FD\u6570</a></li><li><a href="#createroutemap-\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB">createRouteMap \u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB</a></li><li><a href="#match-\u8DEF\u7531\u5339\u914D\u65B9\u6CD5">match \u8DEF\u7531\u5339\u914D\u65B9\u6CD5</a><ul><li><a href="#normalizelocation-\u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84">normalizeLocation \u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84</a></li><li><a href="#createroute-\u6839\u636E-location-\u751F\u6210\u8DEF\u7531\u9879">createRoute \u6839\u636E location \u751F\u6210\u8DEF\u7531\u9879</a></li></ul></li></ul></div></p><p>\u5B8C\u6210 VueRouter \u63D2\u4EF6\u7684\u6CE8\u518C\u540E\uFF0C\u6BCF\u4E8C\u6B65\u5C31\u662F\u5B9E\u4F8B\u5316\u8DEF\u7531\u5668\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/info/:id&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">component</span><span class="token operator">:</span>Info<span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="vuerouter-\u6784\u9020\u51FD\u6570" tabindex="-1">VueRouter \u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#vuerouter-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u770B VueRouter \u6784\u9020\u51FD\u6570\u6E90\u7801\uFF0C\u4E3B\u8981\u662F\u521D\u59CB\u5316\u4E00\u7CFB\u5217\u5C5E\u6027\u3002\u8FD9\u91CC\u6838\u5FC3\u4E24\u70B9\uFF1A</p><ol><li><code>this.matcher = createMatcher(options.routes || [], this);</code> \u4E2D createMactcher \u51FD\u6570\uFF1A\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u8868 pathList pathMap nameMap</li><li><code>this.history</code> \u5B9E\u9645\u7684\u8DEF\u7531\u5B9E\u4F8B\u3002\u4F9D\u6A21\u5F0F\u8C03\u7528\u4E0D\u540C\u7684\u8DEF\u7531\u6784\u9020\u5668</li></ol><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="createroutemap-\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB" tabindex="-1">createRouteMap \u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB <a class="header-anchor" href="#createroutemap-\u521B\u5EFA\u8DEF\u7531\u6620\u5C04\u5173\u7CFB" aria-hidden="true">#</a></h2><p>createMactcher \u51FD\u6570\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u89E3\u6790\u6211\u4EEC\u4F20\u5165\u7684\u8DEF\u7531\u914D\u7F6E routes \uFF0C\u751F\u6210\u8DEF\u5F84\u6216\u540D\u79F0\u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u4F46\u6301\u6709\u8FD9\u4E9B\u6620\u5C04\u5173\u7CFB\u7684\u53D8\u91CF pathList / pathMap / nameMap \u5B58\u653E\u5728 createMatcher \u51FD\u6570\u7684\u95ED\u5305\u4E2D\uFF0C\u8FD4\u56DE\u4E00\u4E2A match \u5339\u914D\u65B9\u6CD5\u548C\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531\u7684\u65B9\u6CD5 addRoutes</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createMatcher</span> <span class="token punctuation">(</span> <span class="token parameter">routes<span class="token punctuation">,</span> router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token function">createRouteMap</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> pathList <span class="token operator">=</span> ref<span class="token punctuation">.</span>pathList<span class="token punctuation">;</span>
  <span class="token keyword">var</span> pathMap <span class="token operator">=</span> ref<span class="token punctuation">.</span>pathMap<span class="token punctuation">;</span>
  <span class="token keyword">var</span> nameMap <span class="token operator">=</span> ref<span class="token punctuation">.</span>nameMap<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addRoutes</span> <span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">createRouteMap</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">function</span> <span class="token function">match</span> <span class="token punctuation">(</span> <span class="token parameter">raw<span class="token punctuation">,</span> currentRoute<span class="token punctuation">,</span> redirectedFrom</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">redirect</span> <span class="token punctuation">(</span> <span class="token parameter">record<span class="token punctuation">,</span> location</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">alias</span> <span class="token punctuation">(</span> <span class="token parameter">record<span class="token punctuation">,</span> location<span class="token punctuation">,</span> matchAs</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">_createRoute</span> <span class="token punctuation">(</span> <span class="token parameter">record<span class="token punctuation">,</span> location<span class="token punctuation">,</span> redirectedFrom</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">match</span><span class="token operator">:</span> match<span class="token punctuation">,</span>
    <span class="token literal-property property">addRoutes</span><span class="token operator">:</span> addRoutes
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 createMatcher \u51FD\u6570\u5185\u58F0\u660E\u4E86\u4E09\u4E2A\u53D8\u91CF pathList / pathMap / nameMap \u4FDD\u5B58\u8DEF\u5F84\u548C\u8DEF\u7531\u8BB0\u5F55\u7684\u5339\u914D\u5173\u7CFB\u3002\u6838\u5FC3\u51FD\u6570\u662F <code>createRouteMap(routes)</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createRouteMap</span> <span class="token punctuation">(</span>
  <span class="token parameter">routes<span class="token punctuation">,</span>
  oldPathList<span class="token punctuation">,</span>
  oldPathMap<span class="token punctuation">,</span>
  oldNameMap</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> pathList <span class="token operator">=</span> oldPathList <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> pathMap <span class="token operator">=</span> oldPathMap <span class="token operator">||</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> nameMap <span class="token operator">=</span> oldNameMap <span class="token operator">||</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u904D\u5386\u6211\u4EEC\u81EA\u5B9A\u4E49\u6BCF\u9879\u8DEF\u7531\uFF0C\u6267\u884C addRouteRecord \u51FD\u6570</span>
  routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ensure wildcard routes are always at the end</span>
  <span class="token comment">// \u786E\u4FDD\u901A\u914D\u7B26 * \u8DEF\u7531\u653E\u5728 pathList \u6570\u7EC4\u6700\u540E\u4E00\u9879</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> pathList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pathList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pathList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pathList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u901A\u914D\u7B26\u9879\uFF0C\u5E76\u53D6\u51FA\u63D2\u5165\u5230\u6700\u540E\u3002 splice \u8FD4\u56DE\u7ED3\u679C\u4E3A\u6570\u7EC4\uFF0C\u5176\u4E2D\u5305\u542B\u5220\u9664\u7684\u6570\u7EC4\u5143\u7D20</span>
      l<span class="token operator">--</span><span class="token punctuation">;</span>
      i<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">{</span>
    <span class="token comment">// warn if routes do not include leading slashes</span>
    <span class="token comment">// \u904D\u5386\u6BCF\u4E00\u9879\u7684\u8DEF\u7531\u8DEF\u5F84\uFF0C\u9664\u4E86 * \u901A\u914D\u7B26\u8DEF\u7531\u5916\uFF0C\u5176\u5B83\u8DEF\u5F84\u5982\u679C\u4E0D\u4EE5 / \u5F00\u5934\uFF0C\u5219\u8B66\u544A</span>
    <span class="token keyword">var</span> found <span class="token operator">=</span> pathList
    <span class="token comment">// check for missing leading slash</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> path <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;*&#39;</span> <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>found<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> pathNames <span class="token operator">=</span> found<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Non-nested routes must include a leading slash character. Fix the following routes: \\n&quot;</span> <span class="token operator">+</span> pathNames<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pathList</span><span class="token operator">:</span> pathList<span class="token punctuation">,</span>
    <span class="token literal-property property">pathMap</span><span class="token operator">:</span> pathMap<span class="token punctuation">,</span>
    <span class="token literal-property property">nameMap</span><span class="token operator">:</span> nameMap
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5173\u6CE8 addRouteRecord</span>
<span class="token comment">// \u4F8B\uFF1A{path:&#39;/info/:id&#39;, name: &#39;info&#39;, component:Info}</span>
<span class="token keyword">function</span> <span class="token function">addRouteRecord</span> <span class="token punctuation">(</span>
  <span class="token parameter">pathList<span class="token punctuation">,</span>
  pathMap<span class="token punctuation">,</span>
  nameMap<span class="token punctuation">,</span>
  route<span class="token punctuation">,</span>
  parent<span class="token punctuation">,</span>
  matchAs</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> path <span class="token operator">=</span> route<span class="token punctuation">.</span>path<span class="token punctuation">;</span> <span class="token comment">// &#39;/info/:id&#39;</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> route<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;info&#39;</span>

  <span class="token comment">// path \u4E0D\u80FD\u4E3A\u7A7A\uFF0Ccomponent \u4E0D\u80FD\u4E3A\u5B57\u7B26\u4E32</span>
  <span class="token punctuation">{</span>
    <span class="token function">assert</span><span class="token punctuation">(</span>path <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;\\&quot;path\\&quot; is required in a route configuration.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assert</span><span class="token punctuation">(</span>
      <span class="token keyword">typeof</span> route<span class="token punctuation">.</span>component <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;route config \\&quot;component\\&quot; for path: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>
        path <span class="token operator">||</span> name
      <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; cannot be a &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;string id. Use an actual component instead.&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> pathToRegexpOptions <span class="token operator">=</span> route<span class="token punctuation">.</span>pathToRegexpOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> normalizedPath <span class="token operator">=</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> pathToRegexpOptions<span class="token punctuation">.</span>strict<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// path \u53BB\u6389\u7ED3\u5C3E\u7684 / \uFF0C\u6216\u8005\u5982\u679C\u6709 parent \u5165\u53C2\u5219\u63A5\u4E0A parent.path/path\uFF0C\u9488\u5BF9\u5D4C\u5957\u8DEF\u7531\uFF0C\u5B58\u5728 children</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> route<span class="token punctuation">.</span>caseSensitive <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pathToRegexpOptions<span class="token punctuation">.</span>sensitive <span class="token operator">=</span> route<span class="token punctuation">.</span>caseSensitive<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> record <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> normalizedPath<span class="token punctuation">,</span>
    <span class="token literal-property property">regex</span><span class="token operator">:</span> <span class="token function">compileRouteRegex</span><span class="token punctuation">(</span>normalizedPath<span class="token punctuation">,</span> pathToRegexpOptions<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u636E\u8DEF\u5F84\u751F\u6210\u8DEF\u5F84\u5339\u914D\u6B63\u5219</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> route<span class="token punctuation">.</span>components <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> route<span class="token punctuation">.</span>component <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
    <span class="token literal-property property">parent</span><span class="token operator">:</span> parent<span class="token punctuation">,</span>
    <span class="token literal-property property">matchAs</span><span class="token operator">:</span> matchAs<span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> route<span class="token punctuation">.</span>redirect<span class="token punctuation">,</span>
    <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span> route<span class="token punctuation">.</span>beforeEnter<span class="token punctuation">,</span> <span class="token comment">// \u8DEF\u7531\u5BFC\u822A\u536B\u58EB</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> route<span class="token punctuation">.</span>meta <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span>
      route<span class="token punctuation">.</span>props <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token operator">:</span> route<span class="token punctuation">.</span>components
          <span class="token operator">?</span> route<span class="token punctuation">.</span>props
          <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> route<span class="token punctuation">.</span>props <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u9012\u5F52\u5904\u7406\u5D4C\u5957\u8DEF\u7531</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Warn if route is named, does not redirect and has a default child route.</span>
    <span class="token comment">// If users navigate to this route by name, the default child will</span>
    <span class="token comment">// not be rendered (GH Issue #629)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        route<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>route<span class="token punctuation">.</span>redirect <span class="token operator">&amp;&amp;</span>
        route<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token string">&quot;Named Route &#39;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&#39; has a default child route. &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;When navigating to this named route (:to=\\&quot;{name: &#39;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&#39;\\&quot;), &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;the default child route will not be rendered. Remove the name from &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;this route and use the name of the default child route for named &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;links instead.&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    route<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> childMatchAs <span class="token operator">=</span> matchAs
        <span class="token operator">?</span> <span class="token function">cleanPath</span><span class="token punctuation">(</span><span class="token punctuation">(</span>matchAs <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">,</span> child<span class="token punctuation">,</span> record<span class="token punctuation">,</span> childMatchAs<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8FD9\u91CC\u662F\u5173\u952E\u4E00\u6B65\uFF1A\u5904\u7406\u5D4C\u5957\u8DEF\u7531\u65F6\u4F20\u5165\u7B2C\u4E94\u4E2A\u53C2\u6570\uFF0C\u5373\u7236\u8DEF\u7531\u7684 record\uFF0C\u4EE5\u4FBF\u5728\u751F\u6210\u5D4C\u5957\u8DEF\u7531\u5339\u914D\u8BB0\u5F55\u65B9\u6CD5 formatMatch \u4E2D\u751F\u6210 matched \u5C5E\u6027\u503C\u5305\u542B\u7236\u8DEF\u7531\u8BB0\u5F55\uFF0C\u5373\u800C\u62FF\u5230\u7236\u7EC4\u4EF6\u6E32\u67D3\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06\u5904\u7406\u540E\u7684\u8DEF\u7531\u6DFB\u52A0\u5230 pathList \u548C pathMap</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathMap<span class="token punctuation">[</span>record<span class="token punctuation">.</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pathList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pathMap<span class="token punctuation">[</span>record<span class="token punctuation">.</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u8DEF\u7531\u914D\u7F6E\u6709\u522B\u540D\uFF0C\u5219\u4E3A\u522B\u540D\u4E5F\u751F\u6210\u4E00\u4E2A\u8DEF\u7531\u8BB0\u5F55</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>alias <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> aliases <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>alias<span class="token punctuation">)</span> <span class="token operator">?</span> route<span class="token punctuation">.</span>alias <span class="token operator">:</span> <span class="token punctuation">[</span>route<span class="token punctuation">.</span>alias<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> aliases<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> alias <span class="token operator">=</span> aliases<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span> alias <span class="token operator">===</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">(</span><span class="token string">&quot;Found an alias with the same value as the path: \\&quot;&quot;</span> <span class="token operator">+</span> path <span class="token operator">+</span> <span class="token string">&quot;\\&quot;. You have to remove that alias. It will be ignored in development.&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// skip in dev to make it work</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">var</span> aliasRoute <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> alias<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> route<span class="token punctuation">.</span>children
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>
        pathList<span class="token punctuation">,</span>
        pathMap<span class="token punctuation">,</span>
        nameMap<span class="token punctuation">,</span>
        aliasRoute<span class="token punctuation">,</span>
        parent<span class="token punctuation">,</span>
        record<span class="token punctuation">.</span>path <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span> <span class="token comment">// matchAs</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C\u547D\u540D\u8DEF\u7531\uFF0C\u5219\u4E5F\u5EFA\u7ACB\u540D\u79F0\u548C\u8DEF\u7531\u8BB0\u5F55\u7684\u6620\u5C04\u5173\u7CFB</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nameMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nameMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>matchAs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Duplicate named routes definition: &quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;{ name: \\&quot;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;\\&quot;, path: \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>record<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot; }&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u603B\u7ED3\u51FD\u6570\u8C03\u7528\u8DEF\u5F84\uFF1A<code>createMatcher =&gt; createRouteMap =&gt; addRouteRecord</code></p><div class="language-js"><pre><code><span class="token comment">// 1. createMatcher</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>matcher <span class="token operator">=</span> <span class="token function">createMatcher</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>routes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token comment">// 2. createRouteMap</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createRouteMap</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span>
<span class="token comment">// 3. \u904D\u5386 routes \u6BCF\u4E00\u9879 route\uFF0C\u8C03\u7528 addRouteRecrd</span>
routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">addRouteRecord</span><span class="token punctuation">(</span>pathList<span class="token punctuation">,</span> pathMap<span class="token punctuation">,</span> nameMap<span class="token punctuation">,</span> route<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4. \u751F\u6210 record\uFF0C\u6DFB\u52A0\u5230 pathList pathMap nameMap</span>
<span class="token keyword">var</span> record <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> normalizedPath<span class="token punctuation">,</span>
  <span class="token literal-property property">regex</span><span class="token operator">:</span> <span class="token function">compileRouteRegex</span><span class="token punctuation">(</span>normalizedPath<span class="token punctuation">,</span> pathToRegexpOptions<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u636E\u8DEF\u5F84\u751F\u6210\u8DEF\u5F84\u5339\u914D\u6B63\u5219</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> route<span class="token punctuation">.</span>components <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> route<span class="token punctuation">.</span>component <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> parent<span class="token punctuation">,</span>
  <span class="token literal-property property">matchAs</span><span class="token operator">:</span> matchAs<span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> route<span class="token punctuation">.</span>redirect<span class="token punctuation">,</span>
  <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span> route<span class="token punctuation">.</span>beforeEnter<span class="token punctuation">,</span> <span class="token comment">// \u8DEF\u7531\u5BFC\u822A\u536B\u58EB</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> route<span class="token punctuation">.</span>meta <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span>
    route<span class="token punctuation">.</span>props <span class="token operator">==</span> <span class="token keyword">null</span>
      <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token operator">:</span> route<span class="token punctuation">.</span>components
        <span class="token operator">?</span> route<span class="token punctuation">.</span>props
        <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> route<span class="token punctuation">.</span>props <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6240\u4EE5\uFF0C\u4F8B\u5982 routes = [{path:&#39;/info/:id&#39;,component:Info}] \u50A8\u5B58\u7684\u8DEF\u7531\u6620\u5C04\u5173\u7CFB\u662F\uFF1A</span>
record <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/info/:id&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">regex</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/info\\/((?:[^\\/]+?))(?:\\/(?=$))?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span><span class="token operator">:</span> Info
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
pathList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/info/:id&#39;</span><span class="token punctuation">]</span>
pathMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;/info/:id&#39;</span><span class="token operator">:</span> record<span class="token punctuation">}</span>
nameMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;info&#39;</span><span class="token operator">:</span> record<span class="token punctuation">}</span>
</code></pre></div><h2 id="match-\u8DEF\u7531\u5339\u914D\u65B9\u6CD5" tabindex="-1">match \u8DEF\u7531\u5339\u914D\u65B9\u6CD5 <a class="header-anchor" href="#match-\u8DEF\u7531\u5339\u914D\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>createMatcher\u3000\u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F\u4E00\u4E2A\u8DEF\u7531\u5339\u914D\u65B9\u6CD5\u548C\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531\u65B9\u6CD5\u3002\u5176\u4E2D\u52A8\u6001\u6DFB\u52A0\u8DEF\u7531\u65B9\u6CD5\u3000addRoutes \u5185\u90E8\u8C03\u7528\u7684\u662F\u4E0A\u9762\u5206\u6790\u7684 createRouteMap \u65B9\u6CD5\uFF0C\u5373\u52A8\u6001\u5411\u95ED\u5305\u5C5E\u6027 pathList / pathMap / nameMap \u4E2D\u6DFB\u52A0\u6570\u636E\u3002</p><p>\u53E6\u4E00\u4E2A\u540E\u9762\u4F1A\u9891\u7E41\u4F7F\u7528\u7684\u65B9\u6CD5 match \uFF0C\u770B\u4E0B\u6E90\u7801\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">match</span> <span class="token punctuation">(</span>
  <span class="token parameter">raw<span class="token punctuation">,</span>
  currentRoute<span class="token punctuation">,</span>
  redirectedFrom</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> location <span class="token operator">=</span> <span class="token function">normalizeLocation</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> currentRoute<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token keyword">var</span> name <span class="token operator">=</span> location<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token comment">// \u4F18\u5148\u5339\u914D\u8DEF\u7531\u540D\u79F0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> record <span class="token operator">=</span> nameMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;Route with name &#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;&#39; does not exist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>record<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">_createRoute</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span> <span class="token punctuation">}</span> 

    <span class="token keyword">var</span> paramNames <span class="token operator">=</span> record<span class="token punctuation">.</span>regex<span class="token punctuation">.</span>keys
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>key<span class="token punctuation">.</span>optional<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> key<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> location<span class="token punctuation">.</span>params <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentRoute <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> currentRoute<span class="token punctuation">.</span>params <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> currentRoute<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> location<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> paramNames<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          location<span class="token punctuation">.</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> currentRoute<span class="token punctuation">.</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    location<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token function">fillParams</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>path<span class="token punctuation">,</span> location<span class="token punctuation">.</span>params<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;named route \\&quot;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">_createRoute</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> location<span class="token punctuation">,</span> redirectedFrom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    location<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pathList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> path <span class="token operator">=</span> pathList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> record$1 <span class="token operator">=</span> pathMap<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5BF9\u4E8E /info/:id \u8DEF\u7531 matchRoute \u89E3\u6790\u51FA params \u53C2\u6570 id</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">matchRoute</span><span class="token punctuation">(</span>record$1<span class="token punctuation">.</span>regex<span class="token punctuation">,</span> location<span class="token punctuation">.</span>path<span class="token punctuation">,</span> location<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_createRoute</span><span class="token punctuation">(</span>record$1<span class="token punctuation">,</span> location<span class="token punctuation">,</span> redirectedFrom<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// no match \u5F53\u524D\u8DEF\u5F84\u89E3\u6790\u51FA\u7ED3\u679C\u90FD\u6CA1\u6709 name / path\uFF0C\u5219\u4F20\u5165 record = null\uFF0C\u5373\u5F53\u524D\u8DEF\u7531\u4E0D\u5728\u81EA\u5B9A\u4E49\u7684 routes \u4E2D\uFF0C\u5373\u4E0D\u5B58\u5728\u8DEF\u7531\u8BB0\u5F55 record</span>
  <span class="token keyword">return</span> <span class="token function">_createRoute</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="normalizelocation-\u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84" tabindex="-1">normalizeLocation \u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84 <a class="header-anchor" href="#normalizelocation-\u5E8F\u5217\u5316\u539F\u59CB\u8DEF\u5F84" aria-hidden="true">#</a></h3><p>\u5148\u770B\u4E0B\u5BF9\u539F\u59CB location \u7684\u89E3\u6790\uFF1AnormalizeLocation</p><div class="language-js"><pre><code> <span class="token comment">/**
 * eg: /info/13?q=test
 * 
 * {
 *  _normalized: true,
 *  path: &#39;/info/13&#39;,
 *  query: {q:test},
 *  hash: &#39;&#39;
 * }
 */</span>
<span class="token keyword">function</span> <span class="token function">normalizeLocation</span> <span class="token punctuation">(</span>
  <span class="token parameter">raw<span class="token punctuation">,</span>
  current<span class="token punctuation">,</span>
  append<span class="token punctuation">,</span>
  router</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token keyword">typeof</span> raw <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> raw <span class="token punctuation">}</span> <span class="token operator">:</span> raw<span class="token punctuation">;</span>
  <span class="token comment">// named target</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>_normalized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    next <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> raw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> next<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> params <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      next<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> next
  <span class="token punctuation">}</span>

  <span class="token comment">// relative params</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>next<span class="token punctuation">.</span>path <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>params <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    next <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    next<span class="token punctuation">.</span>_normalized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> current<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">,</span> next<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      next<span class="token punctuation">.</span>name <span class="token operator">=</span> current<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
      next<span class="token punctuation">.</span>params <span class="token operator">=</span> params<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>matched<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> rawPath <span class="token operator">=</span> current<span class="token punctuation">.</span>matched<span class="token punctuation">[</span>current<span class="token punctuation">.</span>matched<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path<span class="token punctuation">;</span>
      next<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token function">fillParams</span><span class="token punctuation">(</span>rawPath<span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">path </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">relative params navigation requires a current route.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> next
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> parsedPath <span class="token operator">=</span> <span class="token function">parsePath</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>path <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {path: &#39;/info/13, query: &#39;q=keyword&#39;, hash:&#39;&#39;}</span>
  <span class="token keyword">const</span> basePath <span class="token operator">=</span> <span class="token punctuation">(</span>current <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> parsedPath<span class="token punctuation">.</span>path
    <span class="token operator">?</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span>parsedPath<span class="token punctuation">.</span>path<span class="token punctuation">,</span> basePath<span class="token punctuation">,</span> append <span class="token operator">||</span> next<span class="token punctuation">.</span>append<span class="token punctuation">)</span> 
    <span class="token comment">// resolvePath \u89E3\u6790\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5982 ../info \u6216\u8005 ?/#\u5F00\u5934\u7684\u63A5\u4E0A base \u8DEF\u5F84</span>
    <span class="token operator">:</span> basePath<span class="token punctuation">;</span>

  <span class="token comment">// \u5C06 q=keyword \u8F6C\u4E3A\u5BF9\u8C61 {q:&#39;keyword&#39;}</span>
  <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token function">resolveQuery</span><span class="token punctuation">(</span>
    parsedPath<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
    next<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
    router <span class="token operator">&amp;&amp;</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>parseQuery
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> hash <span class="token operator">=</span> next<span class="token punctuation">.</span>hash <span class="token operator">||</span> parsedPath<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hash <span class="token operator">&amp;&amp;</span> hash<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hash <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_normalized</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    path<span class="token punctuation">,</span>
    query<span class="token punctuation">,</span>
    hash
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">parsePath</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> query <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> hashIndex <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hashIndex <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hash <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>hashIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> hashIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> queryIndex <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>queryIndex <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    query <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>queryIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> queryIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">,</span>
    query<span class="token punctuation">,</span>
    hash
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="createroute-\u6839\u636E-location-\u751F\u6210\u8DEF\u7531\u9879" tabindex="-1">createRoute \u6839\u636E location \u751F\u6210\u8DEF\u7531\u9879 <a class="header-anchor" href="#createroute-\u6839\u636E-location-\u751F\u6210\u8DEF\u7531\u9879" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u770B\u5230 match \u51FD\u6570\u4E2D\u5404\u5206\u652F\u6700\u7EC8\u90FD\u4F1A\u8C03\u7528 _reateRoute \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_createRoute</span> <span class="token punctuation">(</span>
  <span class="token parameter">record<span class="token punctuation">,</span>
  location<span class="token punctuation">,</span>
  redirectedFrom</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>record <span class="token operator">&amp;&amp;</span> record<span class="token punctuation">.</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> redirectedFrom <span class="token operator">||</span> location<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>record <span class="token operator">&amp;&amp;</span> record<span class="token punctuation">.</span>matchAs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">alias</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> location<span class="token punctuation">,</span> record<span class="token punctuation">.</span>matchAs<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createRoute</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> location<span class="token punctuation">,</span> redirectedFrom<span class="token punctuation">,</span> router<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">createRoute</span> <span class="token punctuation">(</span>
  <span class="token parameter">record<span class="token punctuation">,</span>
  location<span class="token punctuation">,</span>
  redirectedFrom<span class="token punctuation">,</span>
  router</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stringifyQuery <span class="token operator">=</span> router <span class="token operator">&amp;&amp;</span> router<span class="token punctuation">.</span>options<span class="token punctuation">.</span>stringifyQuery<span class="token punctuation">;</span>

  <span class="token keyword">let</span> query <span class="token operator">=</span> location<span class="token punctuation">.</span>query <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    query <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> location<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token punctuation">(</span>record <span class="token operator">&amp;&amp;</span> record<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">(</span>record <span class="token operator">&amp;&amp;</span> record<span class="token punctuation">.</span>meta<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> location<span class="token punctuation">.</span>path <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> location<span class="token punctuation">.</span>hash <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    query<span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> location<span class="token punctuation">.</span>params <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fullPath</span><span class="token operator">:</span> <span class="token function">getFullPath</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> stringifyQuery<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">matched</span><span class="token operator">:</span> record <span class="token operator">?</span> <span class="token function">formatMatch</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectedFrom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    route<span class="token punctuation">.</span>redirectedFrom <span class="token operator">=</span> <span class="token function">getFullPath</span><span class="token punctuation">(</span>redirectedFrom<span class="token punctuation">,</span> stringifyQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C06\u4E4B\u524D\u7ECF\u8FC7 normalizeLocation \u5E8F\u5217\u5316\u6210\u5BF9\u8C61\u7684 location \u5904\u7406\u6210\u5B8C\u6574\u8DEF\u5F84\uFF0C\u5176\u4E2D query \u90E8\u5206\u9700\u8981\u5728 stringifyQuery \u51FD\u6570\u4E2D encode \u7F16\u7801\u3002</span>
<span class="token keyword">function</span> <span class="token function">getFullPath</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span> path<span class="token punctuation">,</span> query <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  _stringifyQuery
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stringify <span class="token operator">=</span> _stringifyQuery <span class="token operator">||</span> stringifyQuery<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>path <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">stringify</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span> <span class="token operator">+</span> hash
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">stringifyQuery</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> obj
    <span class="token operator">?</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          val<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">val2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val2 <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> <span class="token function">encode</span><span class="token punctuation">(</span>val2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">encode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> <span class="token function">encode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">formatMatch</span> <span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6240\u4EE5\u5728\u751F\u6210\u8DEF\u7531\u8BB0\u5F55 addRouteRecord \u51FD\u6570\u5185\u90E8\uFF0C\u5728\u9012\u5F52\u5904\u7406\u5D4C\u5957\u8DEF\u7531\u65F6\u4F20\u5165 \u7B2C\u4E94\u4E2A\u53C2\u6570\u7236\u8DEF\u7531\u7684 record</span>
  <span class="token comment">// addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>record<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span><span class="token punctuation">;</span>
    record <span class="token operator">=</span> record<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">/**
 * eg: /info/13?q=test
 * 
 * \u7ECF\u8FC7 normalizeLocation
 * location = {
 *  _normalized: true,
 *  path: &#39;/info/13&#39;,
 *  query: {q:test},
 *  hash: &#39;&#39;
 * }
 * 
 * \u7ECF\u8FC7 createRoute
 * route = {
 *  name: undefined,
 *  path: &#39;/info/13&#39;,
 *  fullPath: &#39;/info/13?q=test&#39;
 *  query: {q: &#39;test&#39;},
 *  params: {id: 13},
 *  meta: {},
 *  hash: &#39;&#39;,
 *  matched: [{
 *    path: &#39;/info/:id&#39;,
      regex: /^\\/info\\/((?:[^\\/]+?))(?:\\/(?=$))?$/i,
      name: &#39;info&#39;,
      components: {
        default: Info
      }
    }]
 * }
 * 
 */</span>
</code></pre></div><p>\u8FD9\u91CC\u7684\u5173\u952E\u662F route.matched \u6570\u7EC4\uFF0C\u5B83\u4FDD\u5B58\u7740\u5F53\u524D url \u80FD\u5339\u914D\u5230\u591A\u5C11\u8DEF\u7531\u8BB0\u5F55 routeRecord\uFF0C\u800C\u8DEF\u7531\u8BB0\u5F55 routeRecord \u662F\u7531\u81EA\u5B9A\u4E49\u7684 routes \u751F\u6210\u7684\uFF0C\u5B83\u91CC\u9762\u4FDD\u6301\u7740\u7EC4\u4EF6\u4FE1\u606F\uFF0C\u6240\u4EE5\u6839\u636E url \u901A\u8FC7 match \u65B9\u6CD5\u751F\u6210 route\uFF0C\u5176\u4E2D matched \u4FDD\u5B58\u7740\u5339\u914D\u5230 record\uFF0C\u95F4\u63A5\u62FF\u5230\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u3002</p><p>\u6BD4\u5982\u5D4C\u5957\u8DEF\u7531 match(&#39;/about/a&#39;) \u5339\u914D\u540E\u751F\u6210\u7684 route.matched \u5BF9\u8C61\u5C31\u80FD\u62FF\u5230\u7EC4\u4EF6 About \u548C \u7EC4\u4EF6 a \u7684\u8DEF\u7531\u8BB0\u5F55\u3002</p><p>match \u51FD\u6570\u4F1A\u5728 transitionTo \u4E2D\u8C03\u7528\u3002</p>`,28),e=[o];function c(u,l,k,r,i,d){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{h as __pageData,y as default};
