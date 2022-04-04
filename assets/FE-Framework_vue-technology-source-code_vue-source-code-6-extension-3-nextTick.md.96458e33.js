import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";var p="/assets/eventloop.ec0545e6.png";const w='{"title":"\u5F02\u6B65\u4EFB\u52A1 nextTick","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF eventLoop","slug":"\u4E8B\u4EF6\u5FAA\u73AF-eventloop"},{"level":2,"title":"\u6E90\u7801\u5B9E\u73B0","slug":"\u6E90\u7801\u5B9E\u73B0"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-6-extension-3-nextTick.md"}',o={},e=t('<h1 id="\u5F02\u6B65\u4EFB\u52A1-nexttick" tabindex="-1">\u5F02\u6B65\u4EFB\u52A1 nextTick <a class="header-anchor" href="#\u5F02\u6B65\u4EFB\u52A1-nexttick" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u4E8B\u4EF6\u5FAA\u73AF-eventloop">\u4E8B\u4EF6\u5FAA\u73AF eventLoop</a></li><li><a href="#\u6E90\u7801\u5B9E\u73B0">\u6E90\u7801\u5B9E\u73B0</a></li></ul></div></p><h2 id="\u4E8B\u4EF6\u5FAA\u73AF-eventloop" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF eventLoop <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF-eventloop" aria-hidden="true">#</a></h2><p>js \u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\uFF0C\u5B9E\u73B0\u5F02\u6B65\u4EFB\u52A1\u4F9D\u8D56\u4E8E\u6D4F\u89C8\u5668\u5B9E\u73B0\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u3002</p><p>\u4E8B\u4EF6\u5FAA\u73AF\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li>\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u5F62\u6210\u4E00\u4E2A\u6267\u884C\u6808\uFF08execution context stack\uFF09\u3002</li><li>\u4E3B\u7EBF\u7A0B\u4E4B\u5916\uFF0C\u8FD8\u5B58\u5728\u4E00\u4E2A&quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF08task queue\uFF09\u3002\u53EA\u8981\u5F02\u6B65\u4EFB\u52A1\u6709\u4E86\u8FD0\u884C\u7ED3\u679C\uFF0C\u5C31\u5728&quot;\u4EFB\u52A1\u961F\u5217&quot;\u4E4B\u4E2D\u653E\u7F6E\u4E00\u4E2A\u4E8B\u4EF6\u3002</li><li>\u4E00\u65E6&quot;\u6267\u884C\u6808&quot;\u4E2D\u7684\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u8BFB\u53D6&quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF0C\u770B\u770B\u91CC\u9762\u6709\u54EA\u4E9B\u4E8B\u4EF6\u3002\u53D6\u51FA\u5F02\u6B65\u4EFB\u52A1\uFF0C\u8FDB\u5165\u6267\u884C\u6808\uFF0C\u5F00\u59CB\u6267\u884C\uFF0C\u4EE5\u6B64\u6B6A\u5FAA\u73AF\u3002</li></ol><p>\u4E3B\u7EBF\u7A0B\u7684\u4E00\u6B21\u6267\u884C\u8FC7\u7A0B\u5C31\u662F\u4E00\u4E2A tick\uFF0C\u800C\u6240\u6709\u7684\u5F02\u6B65\u7ED3\u679C\u90FD\u662F\u901A\u8FC7 \u201C\u4EFB\u52A1\u961F\u5217\u201D \u6765\u8C03\u5EA6\u3002</p><p>\u4EFB\u52A1\u961F\u5217\u4E2D\u5B58\u653E\u7684\u662F\u4E00\u4E2A\u4E2A\u7684\u4EFB\u52A1\uFF08task\uFF09\u3002 ES \u89C4\u8303\u4E2D\u89C4\u5B9A task \u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u5206\u522B\u662F\u5B8F\u4EFB\u52A1 macro task \u548C\u5FAE\u4EFB\u52A1 micro task\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u5B8F\u4EFB\u52A1 macro task \u6267\u884C\u7ED3\u675F\u540E\uFF0C\u90FD\u8981\u6E05\u7A7A\u5F53\u524D\u6240\u6709\u7684\u5FAE\u4EFB\u52A1 micro task\u3002</p><p>\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\uFF0C\u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1 micro task\uFF1A</p><ul><li>Promise.then</li><li>MutationObsever</li><li>Object.Observer</li><li>process.nextTick (Node\u73AF\u5883)</li></ul><p>\u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1 macro task \uFF1A</p><ul><li>setInterval</li><li>setTimeout</li><li>setImmediate</li><li>MessageChannel</li><li>postMessage</li><li>requestAnimationFrame</li><li>I/O</li><li>UI \u4EA4\u4E92\u4E8B\u4EF6</li><li>Network</li></ul><p><img src="'+p+`" alt=""></p><h2 id="\u6E90\u7801\u5B9E\u73B0" tabindex="-1">\u6E90\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u6E90\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> noop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;shared/util&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> handleError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./error&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isIOS<span class="token punctuation">,</span> isNative <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./env&#39;</span>

<span class="token comment">// \u4F7F\u7528 callbacks \u800C\u4E0D\u662F\u76F4\u63A5\u5728 nextTick \u4E2D\u6267\u884C\u56DE\u8C03\u51FD\u6570\u7684\u539F\u56E0\u662F</span>
<span class="token comment">// \u4FDD\u8BC1\u5728\u540C\u4E00\u4E2A tick \u5185\u591A\u6B21\u6267\u884C nextTick\uFF0C\u4E0D\u4F1A\u5F00\u542F\u591A\u4E2A\u5F02\u6B65\u4EFB\u52A1\uFF0C\u800C\u628A\u8FD9\u4E9B\u5F02\u6B65\u4EFB\u52A1\u90FD\u538B\u6210\u4E00\u4E2A\u540C\u6B65\u4EFB\u52A1\uFF0C\u5728\u4E0B\u4E00\u4E2A tick \u6267\u884C\u5B8C\u6BD5\u3002</span>
<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">// \u5305\u88C5\u4E00\u4E2A\u51FD\u6570\uFF0C\u6267\u884C\u5F53\u524D tick \u5185\u7684\u6240\u6709 cb</span>
<span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> microTimerFunc
<span class="token keyword">let</span> macroTimerFunc
<span class="token keyword">let</span> useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span> 
<span class="token comment">// \u5207\u6362\u4F7F\u7528\u5B8F\u4EFB\u52A1\u8FD8\u662F\u5FAE\u4EFB\u52A1\u7684\u5F00\u5173\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u4E00\u4E9B DOM \u4EA4\u4E92\u4E8B\u4EF6\uFF0C\u5982 v-on \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7684\u5904\u7406 click\uFF0C\u4F1A\u5F3A\u5236\u8D70 macro task</span>

<span class="token comment">// \u964D\u7EA7\u9002\u914D\u53EF\u7528\u7684\u5B8F\u4EFB\u52A1API</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> MessageChannel <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MessageChannel<span class="token punctuation">)</span> <span class="token operator">||</span>
  <span class="token comment">// PhantomJS</span>
  MessageChannel<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MessageChannelConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> port <span class="token operator">=</span> channel<span class="token punctuation">.</span>port2
  channel<span class="token punctuation">.</span>port1<span class="token punctuation">.</span>onmessage <span class="token operator">=</span> flushCallbacks
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    port<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">macroTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5FAE\u4EFB\u52A1\u4F18\u5148\u4F7F\u7528 promise\uFF0C\u5982\u679C\u4E0D\u652F\u6301\uFF0C\u5219\u964D\u7EA7\u5230\u5B8F\u4EFB\u52A1\u6267\u884C</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">microTimerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// fallback to macro promise \u4E0D\u652F\u6301\uFF0C\u5219\u56DE\u9000\u5230\u5B8F\u4EFB\u52A1</span>
  microTimerFunc <span class="token operator">=</span> macroTimerFunc
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u786E\u4FDD\u51FD\u6570\u6267\u884C\u8FC7\u7A0B\u4E2D\u5BF9\u6570\u636E\u4EFB\u610F\u7684\u4FEE\u6539\uFF0C\u89E6\u53D1\u53D8\u5316\u6267\u884C nextTick \u7684\u65F6\u5019\u5F3A\u5236\u8D70 macroTimerFunc\u3002
 * \u6BD4\u5982\u5BF9\u4E8E\u4E00\u4E9B DOM \u4EA4\u4E92\u4E8B\u4EF6\uFF0C\u5982 v-on \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7684\u5904\u7406\uFF0C\u4F1A\u5F3A\u5236\u8D70 macro task
 * 
 * \u5728\u6267\u884C\u539F\u751FDOM\u7684\u4E8B\u4EF6\u65F6\uFF1A add \u51FD\u6570\u4E2D handler = withMacroTask(handler)\uFF0C\u7136\u540E\u624D\u6CE8\u518C\u5230 addEventListener \u4E2D
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">withMacroTask</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fn<span class="token punctuation">.</span>_withTask <span class="token operator">||</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function-variable function">_withTask</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    useMacroTask <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useMacroTask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">macroTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">microTimerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token comment">// \u8FD9\u662F\u5F53 nextTick \u4E0D\u4F20 cb \u53C2\u6570\u7684\u65F6\u5019\uFF0C\u63D0\u4F9B\u4E00\u4E2A Promise \u5316\u7684\u8C03\u7528\uFF0C\u6BD4\u5982\uFF1AnextTick().then(() =&gt; {})</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15),c=[e];function l(u,k,i,r,d,m){return a(),s("div",null,c)}var h=n(o,[["render",l]]);export{w as __pageData,h as default};
