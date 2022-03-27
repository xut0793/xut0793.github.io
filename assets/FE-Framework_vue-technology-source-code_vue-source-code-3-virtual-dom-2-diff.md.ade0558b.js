import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const f='{"title":"\u89C6\u56FE\u6E32\u67D32\uFF1Apatch \u7B97\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-3-virtual-dom-2-diff.md"}',p={},o=t(`<h1 id="\u89C6\u56FE\u6E32\u67D32\uFF1Apatch-\u7B97\u6CD5" tabindex="-1">\u89C6\u56FE\u6E32\u67D32\uFF1Apatch \u7B97\u6CD5 <a class="header-anchor" href="#\u89C6\u56FE\u6E32\u67D32\uFF1Apatch-\u7B97\u6CD5" aria-hidden="true">#</a></h1><p>patch \u672C\u8EAB\u6709\u8865\u4E01\u3001\u4FEE\u6539\u7684\u610F\u601D\uFF0C\u5176\u5B9E\u9645\u4F5C\u7528\u662F\u5728\u73B0\u6709\u7684 DOM \u7ED3\u6784\u4E0A\u8FDB\u884C\u4FEE\u6539\u6765\u5B9E\u73B0\u89C6\u56FE\u66F4\u65B0\u7684\u76EE\u7684\u3002</p><p>patch \u5E76\u4E0D\u662F\u66B4\u529B\u8986\u76D6\u539F\u6709\u7684 DOM\uFF0C\u800C\u662F\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u5BF9\u6BD4\u65B0\u65E7\u4E24\u4E2A VNode \u7684\u5DEE\u5F02</li><li>\u5C06\u5DEE\u5F02\u90E8\u5206 VNode \u66F4\u65B0\u5230\u89C6\u56FE\uFF0C\u8FD9\u662F patch \u7684\u6700\u7EC8\u76EE\u7684</li></ol><p>\u5728\u65B0\u65E7 VNode \u5BF9\u6BD4\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u73B0\u6709 DOM \u8FDB\u884C\u4E09\u79CD\u64CD\u4F5C\uFF1A</p><ol><li>\u521B\u5EFA\u65B0\u589E\u7684\u8282\u70B9: 1). VNode \u4E2D\u6709\uFF0ColdVNode \u6CA1\u6709\u7684\u65B0\u589E\uFF1B2). VNode \u548C oldVNode \u8282\u70B9\u4E0D\u76F8\u540C\u65F6\u4EE5VNode \u65B0\u589E\uFF1B</li><li>\u5220\u9664\u5DF2\u7ECF\u5E9F\u5F03\u7684\u8282\u70B9\uFF1AVNode \u548C oldVNode \u8282\u70B9\u4E0D\u76F8\u540C\u65F6\uFF0C\u5C06 oldVNode \u7684\u8282\u70B9\u5220\u9664\uFF1B</li><li>\u4FEE\u6539\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\uFF1AVNode \u548C oldVNode \u8282\u70B9\u76F8\u540C\u65F6\uFF0C\u518D\u5BF9\u6BD4\u4E24\u8005\u4E0D\u540C\u7684\u90E8\u5206\u8FDB\u884C\u66F4\u65B0\uFF1B</li></ol><p>\u603B\u7ED3\u8D77\u6765\u8BF4\uFF1Apatch \u7684\u8FC7\u7A0B\u5C31\u662F\u5224\u65AD\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u521B\u5EFA\u65B0\u8282\u70B9\uFF0C\u63D2\u5165\u5230\u4EC0\u4E48\u4F4D\u7F6E\uFF1B\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u5220\u9664\u8282\u70B9\uFF0C\u5220\u9664\u54EA\u4E2A\u8282\u70B9\uFF1B\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u4FEE\u6539\u8282\u70B9\uFF0C\u4FEE\u6539\u54EA\u4E2A\u8282\u70B9\u3002</p><p>\u5728\u4E0A\u4E00\u8282\u89E3\u6790 mountComponet \u51FD\u6570\u6838\u5FC3\u4EE3\u7801\u4E2D\u7684 <code>vm._render()</code> \u751F\u6210 vnode \u540E\uFF0C\u9700\u8981\u4F20\u7ED9 <code>vm._update</code>\u5904\u7406</p><div class="language-js"><pre><code><span class="token comment">// 1. render-watcher \u7EC4\u4EF6\u5B9E\u4F8B\u89C2\u5BDF\u8005\u7684\u56DE\u8C03\u51FD\u6570</span>
<span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//2. \u5728\u521D\u59CB\u5316\u65F6\u5411\u539F\u578B\u5BF9\u8C61\u6302\u8F7D\u7684\u65B9\u6CD5 _update</span>
<span class="token keyword">function</span> <span class="token function">lifecycleMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> hydrating</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> prevEl <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
    <span class="token keyword">var</span> prevVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode<span class="token punctuation">;</span>
    <span class="token keyword">var</span> restoreActiveInstance <span class="token operator">=</span> <span class="token function">setActiveInstance</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode<span class="token punctuation">;</span>
    <span class="token comment">// Vue.prototype.__patch__ is injected in entry points</span>
    <span class="token comment">// based on the rendering backend used.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// initial render</span>
      vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token comment">/* removeOnly */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// updates</span>
      vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">__patch__</span><span class="token punctuation">(</span>prevVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">restoreActiveInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// update __vue__ reference</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevEl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prevEl<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>__vue__ <span class="token operator">=</span> vm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// if parent is an HOC, update its $el as well</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$vnode <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$parent <span class="token operator">&amp;&amp;</span> vm<span class="token punctuation">.</span>$vnode <span class="token operator">===</span> vm<span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// updated hook is called by the scheduler to ensure that children are</span>
    <span class="token comment">// updated in a parent&#39;s updated hook.</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. install platform patch function \u5BF9\u5E94 web \u5E73\u53F0\u624D\u6709\u7684 patch \u65B9\u6CD5\uFF0C\u901A\u8FC7\u8C03\u7528 createPatchFunction \u65B9\u6CD5\u8FD4\u56DE</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__patch__ <span class="token operator">=</span> inBrowser <span class="token operator">?</span> patch <span class="token operator">:</span> noop<span class="token punctuation">;</span>

<span class="token keyword">var</span> modules <span class="token operator">=</span> platformModules<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>baseModules<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> patch <span class="token operator">=</span> <span class="token function">createPatchFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nodeOps</span><span class="token operator">:</span> nodeOps<span class="token punctuation">,</span> <span class="token literal-property property">modules</span><span class="token operator">:</span> modules <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. virtual DOM patching \u7B97\u6CD5\u4E3B\u8981\u903B\u8F91</span>
<span class="token comment">// createPatchFunction \u5185\u90E8\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u7684\u8F85\u52A9\u65B9\u6CD5\uFF0C\u6700\u7EC8\u8FD4\u56DE\u4E86\u4E00\u4E2A patch \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u8D4B\u503C\u7ED9\u4E86 vm._update \u51FD\u6570\u91CC\u8C03\u7528\u7684 vm.__patch__\u3002</span>

<span class="token keyword">function</span> <span class="token function">createPatchFunction</span> <span class="token punctuation">(</span><span class="token parameter">backend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801\uFF1A\u4E00\u7CFB\u5217\u8F85\u52A9\u5DE5\u5177\u51FD\u6570\u5B9A\u4E49</span>
  
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">patch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// vnode \u662F undefined \u6216 null \u9000\u51FA</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">invokeDestroyHook</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> isInitialPatch <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u662F\u9996\u6B21\u6E32\u67D3</span>
    <span class="token keyword">var</span> insertedVnodeQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5F85\u63D2\u5165\u7684\u6E32\u67D3\u8282\u70B9\u961F\u5217</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u9996\u6B21\u6E32\u67D3\u6CA1\u6709 oldVnode</span>
      <span class="token comment">// empty mount (likely as component), create new root element</span>
      isInitialPatch <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> isRealElement <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRealElement <span class="token operator">&amp;&amp;</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// patch existing root node</span>
        <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> removeOnly<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isRealElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// mounting to a real element</span>
          <span class="token comment">// check if this is server-rendered content and if we can perform</span>
          <span class="token comment">// a successful hydration.</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> oldVnode<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oldVnode<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            hydrating <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>hydrating<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hydrate</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">invokeInsertHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> oldVnode
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token function">warn</span><span class="token punctuation">(</span>
                <span class="token string">&#39;The client-side rendered virtual DOM tree is not matching &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;server-rendered content. This is likely caused by incorrect &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;HTML markup, for example nesting block-level elements inside &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;&lt;p&gt;, or missing &lt;tbody&gt;. Bailing hydration and performing &#39;</span> <span class="token operator">+</span>
                <span class="token string">&#39;full client-side render.&#39;</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// either not server-rendered, or hydration failed.</span>
          <span class="token comment">// create an empty node and replace it</span>
          oldVnode <span class="token operator">=</span> <span class="token function">emptyNodeAt</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// replacing existing element</span>
        <span class="token keyword">var</span> oldElm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">;</span>
        <span class="token keyword">var</span> parentElm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">parentNode</span><span class="token punctuation">(</span>oldElm<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// create new node</span>
        <span class="token function">createElm</span><span class="token punctuation">(</span>
          vnode<span class="token punctuation">,</span>
          insertedVnodeQueue<span class="token punctuation">,</span>
          <span class="token comment">// extremely rare edge case: do not insert if old element is in a</span>
          <span class="token comment">// leaving transition. Only happens when combining transition +</span>
          <span class="token comment">// keep-alive + HOCs. (#4590)</span>
          oldElm<span class="token punctuation">.</span>_leaveCb <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> parentElm<span class="token punctuation">,</span>
          nodeOps<span class="token punctuation">.</span><span class="token function">nextSibling</span><span class="token punctuation">(</span>oldElm<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// update parent placeholder node element, recursively</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> ancestor <span class="token operator">=</span> vnode<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
          <span class="token keyword">var</span> patchable <span class="token operator">=</span> <span class="token function">isPatchable</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>destroy<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              cbs<span class="token punctuation">.</span>destroy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ancestor<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>patchable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> ancestor<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token comment">// #6513</span>
              <span class="token comment">// invoke insert hooks that may have been merged by create hooks.</span>
              <span class="token comment">// e.g. for directives that uses the &quot;inserted&quot; hook.</span>
              <span class="token keyword">var</span> insert <span class="token operator">=</span> ancestor<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">.</span>insert<span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>insert<span class="token punctuation">.</span>merged<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// start at index 1 to avoid re-invoking component mounted hook</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i$2 <span class="token operator">&lt;</span> insert<span class="token punctuation">.</span>fns<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i$2<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  insert<span class="token punctuation">.</span>fns<span class="token punctuation">[</span>i$2<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token function">registerRef</span><span class="token punctuation">(</span>ancestor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ancestor <span class="token operator">=</span> ancestor<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// destroy old node</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">removeVnodes</span><span class="token punctuation">(</span><span class="token punctuation">[</span>oldVnode<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeDestroyHook</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">invokeInsertHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> isInitialPatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>elm
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 5. patch \u65B9\u6CD5\u4E2D\u4E3B\u8981\u7684\u65B9\u6CD5\u4E4B\u4E00\uFF1AcreatePatchFunction \u51FD\u6570\u5185\u8F85\u52A9\u51FD\u6570 createElm</span>
<span class="token keyword">function</span> <span class="token function">createElm</span> <span class="token punctuation">(</span>
  <span class="token parameter">vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  parentElm<span class="token punctuation">,</span>
  refElm<span class="token punctuation">,</span>
  nested<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ownerArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This vnode was used in a previous render!</span>
    <span class="token comment">// now it&#39;s used as a new node, overwriting its elm would cause</span>
    <span class="token comment">// potential patch errors down the road when it&#39;s used as an insertion</span>
    <span class="token comment">// reference node. Instead, we clone the node on-demand before creating</span>
    <span class="token comment">// associated DOM element for it.</span>
    vnode <span class="token operator">=</span> ownerArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  vnode<span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token operator">!</span>nested<span class="token punctuation">;</span> <span class="token comment">// for transition enter check</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">createComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> parentElm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">var</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        creatingElmInVPre<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUnknownElement$$1</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> creatingElmInVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Unknown custom element: &lt;&#39;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&#39;&gt; - did you &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;register the component correctly? For recursive components, &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;make sure to provide the &quot;name&quot; option.&#39;</span><span class="token punctuation">,</span>
          vnode<span class="token punctuation">.</span>context
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>ns
      <span class="token operator">?</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ns<span class="token punctuation">,</span> tag<span class="token punctuation">)</span>
      <span class="token operator">:</span> nodeOps<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setScope</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* istanbul ignore if */</span>
    <span class="token punctuation">{</span>
      <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      creatingElmInVPre<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createComment</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">insert</span><span class="token punctuation">(</span>parentElm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> refElm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6. patch \u65B9\u6CD5\u4E2D\u4E3B\u8981\u7684\u65B9\u6CD5\u4E4B\u4E8C\uFF1AcreatePatchFunction \u51FD\u6570\u5185\u8F85\u52A9\u51FD\u6570 createElm</span>
<span class="token keyword">function</span> <span class="token function">patchVnode</span> <span class="token punctuation">(</span>
  <span class="token parameter">oldVnode<span class="token punctuation">,</span>
  vnode<span class="token punctuation">,</span>
  insertedVnodeQueue<span class="token punctuation">,</span>
  ownerArray<span class="token punctuation">,</span>
  index<span class="token punctuation">,</span>
  removeOnly</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode <span class="token operator">===</span> vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ownerArray<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// clone reused vnode</span>
    vnode <span class="token operator">=</span> ownerArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> elm <span class="token operator">=</span> vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>isAsyncPlaceholder<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>asyncFactory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">hydrate</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// reuse element for static trees.</span>
  <span class="token comment">// note we only do this if the vnode is cloned -</span>
  <span class="token comment">// if the new node is not cloned it means the render functions have been</span>
  <span class="token comment">// reset by the hot-reload-api and we need to do a proper re-render.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isStatic<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token function">isTrue</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>isStatic<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    vnode<span class="token punctuation">.</span>key <span class="token operator">===</span> oldVnode<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isCloned<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isOnce<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> i<span class="token punctuation">;</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>prepatch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> oldCh <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">var</span> ch <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPatchable</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> cbs<span class="token punctuation">.</span>update<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>update<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCh <span class="token operator">!==</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> oldCh<span class="token punctuation">,</span> ch<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> removeOnly<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token function">checkDuplicateKeys</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token function">addVnodes</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> ch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">removeVnodes</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> oldCh<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nodeOps<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>postpatch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">i</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\xB7\xB7\xB7</code></pre></div>`,9),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{f as __pageData,v as default};
