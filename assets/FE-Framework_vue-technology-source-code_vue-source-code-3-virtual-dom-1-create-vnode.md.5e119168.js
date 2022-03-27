import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const f='{"title":"\u89C6\u56FE\u6E32\u67D31\uFF1AVirtual Dom \u548C VNode","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u865A\u62DF DOM\uFF1Avirtual DOM","slug":"\u4EC0\u4E48\u662F\u865A\u62DF-dom\uFF1Avirtual-dom"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF DOM","slug":"\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom"},{"level":2,"title":"Virtual DOM \u505A\u4E86\u4EC0\u4E48","slug":"virtual-dom-\u505A\u4E86\u4EC0\u4E48"},{"level":2,"title":"\u865A\u62DF\u8282\u70B9 Virtual Node","slug":"\u865A\u62DF\u8282\u70B9-virtual-node"},{"level":2,"title":"Virtual Node \u4F5C\u7528","slug":"virtual-node-\u4F5C\u7528"},{"level":2,"title":"Virtual Node \u7C7B\u578B","slug":"virtual-node-\u7C7B\u578B"},{"level":2,"title":"\u521B\u5EFA VNode \u6E90\u7801","slug":"\u521B\u5EFA-vnode-\u6E90\u7801"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-3-virtual-dom-1-create-vnode.md"}',p={},o=t(`<h1 id="\u89C6\u56FE\u6E32\u67D31\uFF1Avirtual-dom-\u548C-vnode" tabindex="-1">\u89C6\u56FE\u6E32\u67D31\uFF1AVirtual Dom \u548C VNode <a class="header-anchor" href="#\u89C6\u56FE\u6E32\u67D31\uFF1Avirtual-dom-\u548C-vnode" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u4EC0\u4E48\u662F\u865A\u62DF-dom\uFF1Avirtual-dom">\u4EC0\u4E48\u662F\u865A\u62DF DOM\uFF1Avirtual DOM</a></li><li><a href="#\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom">\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF DOM</a></li><li><a href="#virtual-dom-\u505A\u4E86\u4EC0\u4E48">Virtual DOM \u505A\u4E86\u4EC0\u4E48</a></li><li><a href="#\u865A\u62DF\u8282\u70B9-virtual-node">\u865A\u62DF\u8282\u70B9 Virtual Node</a></li><li><a href="#virtual-node-\u4F5C\u7528">Virtual Node \u4F5C\u7528</a></li><li><a href="#virtual-node-\u7C7B\u578B">Virtual Node \u7C7B\u578B</a></li><li><a href="#\u521B\u5EFA-vnode-\u6E90\u7801">\u521B\u5EFA VNode \u6E90\u7801</a></li></ul></div></p><h2 id="\u4EC0\u4E48\u662F\u865A\u62DF-dom\uFF1Avirtual-dom" tabindex="-1">\u4EC0\u4E48\u662F\u865A\u62DF DOM\uFF1Avirtual DOM <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u865A\u62DF-dom\uFF1Avirtual-dom" aria-hidden="true">#</a></h2><p>\u865A\u62DF DOM \u5C31\u662F\u4E00\u79CD\u5C06\u6570\u636E\u72B6\u6001\u6620\u5C04\u6210\u89C6\u56FE\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7684\u52A8\u4F5C\u539F\u7406\u662F\u4F7F\u7528\u72B6\u6001\u6765\u751F\u6210\u865A\u62DF\u8282\u70B9 VNode\uFF0C\u7136\u540E\u6839\u636E\u865A\u62DF\u8282\u70B9 VNode \u521B\u5EFA\u771F\u5B9E DOM \u5BF9\u8C61\uFF0C\u6700\u540E\u63D2\u5165\u89C6\u56FE\uFF0C\u5B8C\u6210\u72B6\u6001\u5230\u89C6\u56FE\u7684\u6E32\u67D3\u8FC7\u7A0B\u3002\u7136\u540E\u66F4\u65B0\u89C6\u56FE\u8FC7\u7A0B\u4E2D\uFF0C\u5728\u6E32\u67D3\u4E4B\u524D\uFF0C\u4F1A\u4F7F\u7528\u65B0\u751F\u6210\u7684\u865A\u62DF\u8282\u70B9\u6811\u4E0E\u7F13\u5B58\u7684\u4E0A\u4E00\u6B21\u7684\u865A\u62DF\u8282\u70B9\u6811\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u66F4\u65B0\u4E0D\u540C\u7684\u90E8\u5206\u5230\u89C6\u56FE\u4E2D\u3002</p><p>\u5C06\u6570\u636E\u72B6\u6001\u6620\u5C04\u6210\u89C6\u56FE\u7684\u89E3\u51B3\u65B9\u6848\u6709\u5F88\u591A\uFF0C\u865A\u62DF DOM \u53EA\u662F\u5176\u4E2D\u4E00\u79CD\u800C\u5DF2\u3002\u76EE\u524D\u4E09\u5927\u4E3B\u6CE8\u6846\u67B6\u90FD\u6709\u81EA\u5DF1\u4E00\u5957\u6E32\u67D3\u65B9\u6848\uFF0C\u5728 Angular \u4E2D\u5C31\u662F\u810F\u68C0\u67E5\u6D41\u7A0B\uFF0CReact \u4E2D\u4F7F\u7528\u865A\u62DF DOM\uFF0CVue 1.x \u901A\u8FC7\u7EC6\u7C92\u5EA6\u7684\u7ED1\u5B9A\uFF0C\u56DE\u8C03\u4E2D\u76F4\u63A5\u64CD\u4F5C DOM\uFF0C\u4F46 Vue 2.x \u91C7\u7528\u4E86\u865A\u62DF DOM\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom" tabindex="-1">\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF DOM <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom" aria-hidden="true">#</a></h2><p>\u5F15\u5165\u865A\u62DF DOM \u7684\u539F\u56E0\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\u3002</p><p>\u5728 WEB \u73AF\u5883\u4E0B\uFF0C\u771F\u5B9E DOM \u64CD\u4F5C\u7684\u6267\u884C\u901F\u5EA6\u8FDC\u4E0D\u5982 JavaScript \u7684\u6267\u884C\u901F\u5EA6\uFF0C\u56E0\u6B64\u628A\u5927\u91CF\u7684 DOM \u64CD\u4F5C\u8F6C\u79FB\u5230 JavaScript \u4E2D\uFF0C\u901A\u8FC7\u65B0\u8001 Vnode \u5BF9\u6BD4\u7684\u7B97\u6CD5\u627E\u51FA\u771F\u6B63\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\uFF0C\u6700\u5927\u9650\u5EA6\u51CF\u5C11\u4E86\u539F\u751F DOM \u64CD\u4F5C\uFF0C\u4ECE\u800C\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\u3002\u672C\u8D28\u4E0A\u662F\u4F7F\u7528 JavaScript \u7684\u8FD0\u7B97\u6210\u672C\u66FF\u6362 DOM \u64CD\u4F5C\u7684\u6267\u884C\u6210\u672C\uFF0C\u8FD9\u6837\u505A\u80FD\u663E\u8457\u63D0\u5347\u6027\u80FD\uFF0C\u6240\u4EE5\u8FD9\u4E48\u505A\u5F88\u5212\u7B97\u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A ul \u6807\u7B7E\u4E0B\u6709\u5F88\u591A li \u6807\u7B7E\uFF0C\u5176\u4E2D\u53EA\u6709\u4E00\u4E2A li \u7684\u5185\u5BB9\u6709\u53D8\u5316\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6700\u7B80\u5355\u7C97\u66B4\u7684\u505A\u6CD5\u662F\u5220\u9664\u539F\u6765\u6574\u4E2Aul\u8282\u70B9\uFF0C\u751F\u6210\u4E00\u4EFD\u65B0\u7684\u8282\u70B9\u6811\u63D2\u5165\uFF0C\u5B9E\u73B0\u66F4\u65B0\u3002\u4F46\u5176\u5B9E\uFF0C\u9664\u4E86\u90A3\u4E2A\u53D1\u751F\u4E86\u5185\u5BB9\u53D8\u5316\u7684 li \u8282\u70B9\u5916\uFF0C\u5176\u5B83\u8282\u70B9\u90FD\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\uFF0C\u9020\u6210\u6D6A\u8D39\u3002</p><p>\u6240\u4EE5\u5F15\u5165\u865A\u62DF DOM\uFF0C\u5728\u6E32\u67D3\u89C6\u56FE\u524D\uFF0C\u901A\u8FC7\u751F\u6210\u7684\u65B0\u65E7\u8282\u70B9\u6811\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u627E\u51FA\u771F\u6B63\u9700\u8981\u66F4\u65B0\u8282\u70B9\u6765\u8FDB\u884C DOM \u64CD\u4F5C\uFF0C\u8FD9\u6837\u53EA\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u4E00\u4E2A\u8282\u70B9\u3002</p><h2 id="virtual-dom-\u505A\u4E86\u4EC0\u4E48" tabindex="-1">Virtual DOM \u505A\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#virtual-dom-\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u4ECE\u6574\u4E2A\u6E32\u67D3\u8FC7\u7A0B\u770B\uFF0C\u865A\u62DF DOM \u5728 Vue \u6846\u67B6\u5185\u90E8\u5B9E\u73B0\u4E2D\uFF0C\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ul><li>\u521B\u5EFA\u4E0E\u771F\u5B9E DOM \u8282\u70B9\u6240\u5BF9\u5E94\u7684\u865A\u62DF\u8282\u70B9 VNode</li><li>\u5C06\u865A\u62DF\u8282\u70B9 VNode \u548C\u4E0A\u4E00\u6B21\u751F\u6210\u7684\u865A\u62DF\u8282\u70B9 old VNode \u8FDB\u884C\u5BF9\u6BD4\uFF0Cpatching \u7B97\u6CD5\uFF0C\u627E\u5230\u771F\u6B63\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9</li><li>\u5C06\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u751F\u6210\u771F\u5B9E DOM\uFF0C\u5E76\u63D2\u5165\u89C6\u56FE\u4E2D\u3002</li></ul><h2 id="\u865A\u62DF\u8282\u70B9-virtual-node" tabindex="-1">\u865A\u62DF\u8282\u70B9 Virtual Node <a class="header-anchor" href="#\u865A\u62DF\u8282\u70B9-virtual-node" aria-hidden="true">#</a></h2><p>\u865A\u62DF\u8282\u70B9\u662F\u865A\u62DF DOM \u65B9\u6848\u4E2D\u771F\u6B63\u843D\u5730\u7684\u5185\u5BB9\uFF0C\u5B83\u53EF\u4EE5\u7406\u89E3\u4E3A\u8282\u70B9\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u6307\u5BFC\u4E86\u5E94\u8BE5\u600E\u6837\u53BB\u521B\u5EFA\u771F\u5B9E\u7684 DOM \u8282\u70B9\u3002</p><blockquote><p>\u7B80\u5355\u8BB2 VNode \u5C31\u662F\u4E00\u4E2A JavaScript \u5BF9\u8C61</p></blockquote><div class="language-js"><pre><code><span class="token comment">// VNode \u6784\u9020\u51FD\u6570</span>
<span class="token keyword">var</span> <span class="token function-variable function">VNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VNode</span> <span class="token punctuation">(</span>
  <span class="token parameter">tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  text<span class="token punctuation">,</span>
  elm<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  componentOptions<span class="token punctuation">,</span>
  asyncFactory</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnContext <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnOptions <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnScopeId <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> asyncFactory<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u751F\u6210\u4E00\u4E2A\u6587\u672C\u8282\u70B9</span>
<span class="token keyword">function</span> <span class="token function">createTextVNode</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u751F\u6210\u4E00\u4E2A\u6CE8\u91CA\u8282\u70B9</span>
<span class="token keyword">var</span> <span class="token function-variable function">createEmptyVNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> text <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> text <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> node
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="virtual-node-\u4F5C\u7528" tabindex="-1">Virtual Node \u4F5C\u7528 <a class="header-anchor" href="#virtual-node-\u4F5C\u7528" aria-hidden="true">#</a></h2><ol><li>\u5728 JavaScript \u73AF\u5883\u4E0B\u6A21\u62DF\u4E86\u771F\u5B9E DOM</li><li>\u5B9E\u73B0\u6027\u80FD\u4F18\u5316\uFF1A\u9996\u6B21\u6E32\u67D3\u7684 VNode \u8FDB\u884C\u7F13\u5B58\uFF0C\u4E4B\u540E\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u524D\u540E\u865A\u62DF\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83\uFF0C\u627E\u51FA\u53EA\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\u6765\u6784\u5EFA\u771F\u5B9E DOM</li></ol><h2 id="virtual-node-\u7C7B\u578B" tabindex="-1">Virtual Node \u7C7B\u578B <a class="header-anchor" href="#virtual-node-\u7C7B\u578B" aria-hidden="true">#</a></h2><p>DOM \u5143\u7D20\u6709\u591A\u79CD\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u5BF9\u5E94\u7684\u865A\u62DF\u8282\u70B9\u4E5F\u6709\u4E0D\u540C\u7C7B\u578B\uFF1A</p><blockquote><p>\u672C\u8D28\u4E0A\u662F VNode \u751F\u6210\u7684\u5B9E\u4F8B\u4E2D\u6709\u6548\u5C5E\u6027\u4E0D\u540C\uFF0C\u65E0\u6548\u5C5E\u6027\u503C\u9ED8\u8BA4\u4E3A undefined \u6216 false\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\u6587\u672C\u8282\u70B9\u548C\u6CE8\u91CA\u8282\u70B9\u5B9E\u4F8B\u5BF9\u8C61</p></blockquote><ol><li>\u6CE8\u91CA\u8282\u70B9: text / isComment</li><li>\u6587\u672C\u8282\u70B9: text</li><li>\u5143\u7D20\u8282\u70B9\uFF1Atag / data / children / comtext</li><li>\u7EC4\u4EF6\u8282\u70B9: componentOptions / componentInstance</li><li>\u51FD\u6570\u5F0F\u7EC4\u4EF6\u8282\u70B9: functionContext / functionalOptions</li><li>\u514B\u9686\u8282\u70B9: isCloned</li></ol><h2 id="\u521B\u5EFA-vnode-\u6E90\u7801" tabindex="-1">\u521B\u5EFA VNode \u6E90\u7801 <a class="header-anchor" href="#\u521B\u5EFA-vnode-\u6E90\u7801" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u6E90\u7801 vue 2.6.12</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E0D\u540C\u5E73\u53F0\u5171\u7528\u90E8\u5206\u7684 $mount\uFF0C\u533A\u522B\u4E8E\u6A21\u677F\u7F16\u8BD1\u5F00\u59CB\u65F6\u7684 $mount</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> inBrowser <span class="token operator">?</span> <span class="token function">query</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6302\u8F7D\u7EC4\u4EF6\u6838\u5FC3\u4EE3\u7801\uFF1Avm._update(vm._render(), hydrating);</span>
<span class="token keyword">function</span> <span class="token function">mountComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> el<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u6A21\u677F\u7F16\u8BD1\u540E\uFF0C\u4ECD\u4E0D\u5B58\u5728 render \u5C5E\u6027\uFF0C\u5219\u5224\u65AD\u4E00\u4E2A\u6CE8\u91CA\u7684\u7A7A\u8282\u70B9\u6302\u8F7D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render <span class="token operator">=</span> createEmptyVNode<span class="token punctuation">;</span>
    <span class="token punctuation">{</span>
      <span class="token comment">/* istanbul ignore if */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>template <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>template<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el <span class="token operator">||</span> el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;You are using the runtime-only build of Vue where the template &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;compiler is not available. Either pre-compile the templates into &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;render functions, or use the compiler-included build.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Failed to mount component: template or render function not defined.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> updateComponent<span class="token punctuation">;</span>
  <span class="token comment">/* istanbul ignore if */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> name <span class="token operator">=</span> vm<span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
      <span class="token keyword">var</span> id <span class="token operator">=</span> vm<span class="token punctuation">.</span>_uid<span class="token punctuation">;</span>
      <span class="token keyword">var</span> startTag <span class="token operator">=</span> <span class="token string">&quot;vue-perf-start:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
      <span class="token keyword">var</span> endTag <span class="token operator">=</span> <span class="token string">&quot;vue-perf-end:&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>

      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;vue &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;vue &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; patch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// we set this to vm._watcher inside the watcher&#39;s constructor</span>
  <span class="token comment">// since the watcher&#39;s initial patch may call $forceUpdate (e.g. inside child</span>
  <span class="token comment">// component&#39;s mounted hook), which relies on vm._watcher being already defined</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">before</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hydrating <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// manually mounted instance, call mounted on self</span>
  <span class="token comment">// mounted is called for render-created child components in its inserted hook</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm
<span class="token punctuation">}</span>

<span class="token comment">// vm.render \u5728\u521D\u59CB\u5316\u539F\u578B\u5BF9\u8C61\u5C5E\u6027\u65F6\u751F\u6210</span>
<span class="token keyword">function</span> <span class="token function">renderMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// install runtime convenience helpers</span>
  <span class="token comment">// \u6A21\u677F\u7F16\u8BD1\u7528\u5230\u7684\u5404\u7C7B\u8F85\u52A9\u51FD\u6570\uFF0C\u5982 _v / _s / _c \u7B49</span>
  <span class="token function">installRenderHelpers</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$nextTick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">nextTick</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ref <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
    <span class="token keyword">var</span> render <span class="token operator">=</span> ref<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    <span class="token keyword">var</span> _parentVnode <span class="token operator">=</span> ref<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>_parentVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> <span class="token function">normalizeScopedSlots</span><span class="token punctuation">(</span>
        _parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scopedSlots<span class="token punctuation">,</span>
        vm<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span>
        vm<span class="token punctuation">.</span>$scopedSlots
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// set parent vnode. this allows render functions to have access</span>
    <span class="token comment">// to the data on the placeholder node.</span>
    vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> _parentVnode<span class="token punctuation">;</span>
    <span class="token comment">// render self</span>
    <span class="token keyword">var</span> vnode<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// There&#39;s no need to maintain a stack because all render fns are called</span>
      <span class="token comment">// separately from one another. Nested component&#39;s render fns are called</span>
      <span class="token comment">// when parent component is patched.</span>
      currentRenderingInstance <span class="token operator">=</span> vm<span class="token punctuation">;</span>
      <span class="token comment">// \u5728 web \u5E73\u53F0 vm._renderProxy \u5C31\u662F vm</span>
      <span class="token comment">/**
       * \u81EA\u5B9A\u4E49 render \u51FD\u6570\u65F6\uFF0C\u5F62\u53C2\u7684 h \u6216\u8005 createElement \u5C31\u662F\u8FD9\u91CC\u4EE3\u7801\u8C03\u7528
       * import APP from &#39;./src/APP.vue&#39;
       * new Vue ({
       *  render(h =&gt; h(APP))
       * })
      */</span>
      vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token string">&quot;render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// return error render result,</span>
      <span class="token comment">// or previous vnode to prevent render error causing blank component</span>
      <span class="token comment">/* istanbul ignore else */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>renderError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token function">renderError</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_renderProxy<span class="token punctuation">,</span> vm<span class="token punctuation">.</span>$createElement<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token string">&quot;renderError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        vnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      currentRenderingInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// if the returned array contains only a single node, allow it</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vnode <span class="token operator">=</span> vnode<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// return empty vnode in case the render function errored out</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>vnode <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Multiple root nodes returned from render function. Render function &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;should return a single root node.&#39;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      vnode <span class="token operator">=</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// set parent</span>
    vnode<span class="token punctuation">.</span>parent <span class="token operator">=</span> _parentVnode<span class="token punctuation">;</span>
    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// vm._createElement \u5728 new Vue \u5B9E\u4F8B\u5316\u65F6\uFF0Cthis._init() \u4E2D initRender()\u751F\u6210</span>
<span class="token keyword">function</span> <span class="token function">initRender</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// the root of the child tree</span>
  vm<span class="token punctuation">.</span>_staticTrees <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// v-once cached trees</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>$vnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span> <span class="token comment">// the placeholder node in parent tree</span>
  <span class="token keyword">var</span> renderContext <span class="token operator">=</span> parentVnode <span class="token operator">&amp;&amp;</span> parentVnode<span class="token punctuation">.</span>context<span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>$slots <span class="token operator">=</span> <span class="token function">resolveSlots</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>_renderChildren<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span>$scopedSlots <span class="token operator">=</span> emptyObject<span class="token punctuation">;</span>
  <span class="token comment">// bind the createElement fn to this instance</span>
  <span class="token comment">// so that we get proper render context inside it.</span>
  <span class="token comment">// args order: tag, data, children, normalizationType, alwaysNormalize</span>
  <span class="token comment">// internal version is used by render functions compiled from templates</span>
  <span class="token comment">// \u5185\u90E8\u6A21\u677F\u7F16\u8BD1\u8C03\u7528</span>
  vm<span class="token punctuation">.</span><span class="token function-variable function">_c</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// normalization is always applied for the public version, used in</span>
  <span class="token comment">// user-written render functions.</span>
  <span class="token comment">// \u5916\u90E8\u7528\u6237\u81EA\u5B9A\u4E49 render \u65F6\u8C03\u7528</span>
  vm<span class="token punctuation">.</span><span class="token function-variable function">$createElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// $attrs &amp; $listeners are exposed for easier HOC creation.</span>
  <span class="token comment">// they need to be reactive so that HOCs using them are always updated</span>
  <span class="token keyword">var</span> parentData <span class="token operator">=</span> parentVnode <span class="token operator">&amp;&amp;</span> parentVnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

  <span class="token comment">/* istanbul ignore else */</span>
  <span class="token punctuation">{</span>
    <span class="token function">defineReactive$$1</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;$attrs&#39;</span><span class="token punctuation">,</span> parentData <span class="token operator">&amp;&amp;</span> parentData<span class="token punctuation">.</span>attrs <span class="token operator">||</span> emptyObject<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">!</span>isUpdatingChildComponent <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;$attrs is readonly.&quot;</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">defineReactive$$1</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;$listeners&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>_parentListeners <span class="token operator">||</span> emptyObject<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">!</span>isUpdatingChildComponent <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;$listeners is readonly.&quot;</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token constant">SIMPLE_NORMALIZE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token constant">ALWAYS_NORMALIZE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// wrapper function for providing a more flexible interface</span>
<span class="token comment">// without getting yelled at by flow</span>
<span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter">context<span class="token punctuation">,</span>
  tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  normalizationType<span class="token punctuation">,</span>
  alwaysNormalize</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPrimitive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    normalizationType <span class="token operator">=</span> children<span class="token punctuation">;</span>
    children <span class="token operator">=</span> data<span class="token punctuation">;</span>
    data <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>alwaysNormalize<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    normalizationType <span class="token operator">=</span> <span class="token constant">ALWAYS_NORMALIZE</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">_createElement</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span> normalizationType<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_createElement</span> <span class="token punctuation">(</span>
  <span class="token parameter">context<span class="token punctuation">,</span>
  tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  normalizationType</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u907F\u514D\u4F7F\u7528\u88AB\u89C2\u5BDF\u7684\u6570\u636E\u4F5C\u4E3A vnode data</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// v !== undefined &amp;&amp; v !== null</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&quot;Avoid using observed data object as vnode data: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span>
      <span class="token string">&#39;Always create fresh vnode data objects in each render!&#39;</span><span class="token punctuation">,</span>
      context
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// object syntax in v-bind</span>
  <span class="token comment">// \u52A8\u6001\u7EC4\u4EF6\u4E2D component \u4E2D \u7ED1\u5B9A is \u81EA\u5B9A\u4E49 tag </span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>is<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tag <span class="token operator">=</span> data<span class="token punctuation">.</span>is<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// in case of component :is set to falsy value</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// warn against non-primitive key</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isPrimitive</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Avoid using non-primitive value as key, &#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;use string/number value instead.&#39;</span><span class="token punctuation">,</span>
        context
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// support single function children as default scoped slot</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span>scopedSlots <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    children<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>normalizationType <span class="token operator">===</span> <span class="token constant">ALWAYS_NORMALIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children <span class="token operator">=</span> <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>normalizationType <span class="token operator">===</span> <span class="token constant">SIMPLE_NORMALIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children <span class="token operator">=</span> <span class="token function">simpleNormalizeChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> vnode<span class="token punctuation">,</span> ns<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> Ctor<span class="token punctuation">;</span>
    ns <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>ns<span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">getTagNamespace</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isReservedTag</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// platform built-in elements</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>nativeOn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token string">&quot;The .native modifier for v-on is only valid on components but it was used on &lt;&quot;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&quot;&gt;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          context
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        config<span class="token punctuation">.</span><span class="token function">parsePlatformTagName</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token operator">!</span>data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>Ctor <span class="token operator">=</span> <span class="token function">resolveAsset</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>$options<span class="token punctuation">,</span> <span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// component</span>
      vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// unknown or unlisted namespaced elements</span>
      <span class="token comment">// check at runtime because it may get assigned a namespace when its</span>
      <span class="token comment">// parent normalizes children</span>
      vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
        tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span>
        <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// direct component options / constructor</span>
    vnode <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">applyNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> ns<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">registerDeepBindings</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vnode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">createEmptyVNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> text <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> text <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> node
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createTextVNode</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">VNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VNode</span> <span class="token punctuation">(</span>
  <span class="token parameter">tag<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  text<span class="token punctuation">,</span>
  elm<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  componentOptions<span class="token punctuation">,</span>
  asyncFactory</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnContext <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnOptions <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>fnScopeId <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> asyncFactory<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,25),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
