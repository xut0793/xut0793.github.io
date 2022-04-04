import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const f='{"title":"\u5408\u5E76\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue \u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76 mergeOptions","slug":"vue-\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-mergeoptions"},{"level":2,"title":"\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76 initInternalComponent","slug":"\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-initinternalcomponent"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-5-initialize-2-mergeOptions.md"}',p={},o=t(`<h1 id="\u5408\u5E76\u914D\u7F6E" tabindex="-1">\u5408\u5E76\u914D\u7F6E <a class="header-anchor" href="#\u5408\u5E76\u914D\u7F6E" aria-hidden="true">#</a></h1><p>Vue \u5B9E\u4F8B\u5316\u4E3B\u8981\u662F\u4E24\u79CD\u573A\u666F\uFF1A</p><ul><li>\u5916\u90E8\u8C03\u7528 <code>new Vue</code>\u5B9E\u4F8B\u5316\u4E3B\u5E94\u7528 APP \u65F6</li><li>\u5185\u90E8\u521B\u5EFA\u7EC4\u4EF6\u65F6 <code>new vnode.componentOptions.Ctor(options)</code></li></ul><p>\u4ECE\u6A21\u677F\u7F16\u8BD1\u65F6\u7684\u5206\u6790 <code>vm._render =&gt; _createElement =&gt; createComponent =&gt; Ctor = baseCtor.extend(Ctor)</code>\uFF0C\u53EF\u4EE5\u770B\u5230\u521B\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570 Ctor \u662F\u7EE7\u627F\u4E8E Vue \u6784\u9020\u51FD\u6570\u7684\uFF0C\u901A\u8FC7 <code>Vue.extend</code> API\uFF0C\u6240\u4EE5 new \u65F6\u8C03\u7528\u7684\u90FD\u662F <code>this._init</code> \u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// merge options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// optimize internal component instantiation</span>
    <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
    <span class="token comment">// internal component options needs special treatment.</span>
    <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
      <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
      options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      vm
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\uFF0C<code>new Vue</code> \u65F6\uFF0C\u914D\u7F6E\u5408\u5E76\u8C03\u7528\u7684\u662F <code>mergeOptions</code> \u51FD\u6570\uFF0C\u800C\u5982\u679C\u662F\u7EC4\u4EF6\u5B9E\u4F8B\u5316\uFF0C\u5219\u8C03\u7528 <code>initInternalComponent</code>\u51FD\u6570\u3002</p><h2 id="vue-\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-mergeoptions" tabindex="-1">Vue \u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76 mergeOptions <a class="header-anchor" href="#vue-\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-mergeoptions" aria-hidden="true">#</a></h2><p>new Vue \u5B9E\u4F8B\u5316\u65F6 _init \u4E2D\u8C03\u7528\uFF1AmergeOptions</p><div class="language-js"><pre><code>vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u62FF\u5230 Vue.options</span>
  options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  vm
<span class="token punctuation">)</span>
</code></pre></div><p>\u5176\u4E2D <code>resolveConstructorOptions(vm.constructor)</code> \u7684\u4E3B\u8981\u4F5C\u7528\u662F\u62FF\u5230\u5408\u5E76 Vue.options</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">resolveConstructorOptions</span> <span class="token punctuation">(</span><span class="token parameter">Ctor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Vue</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">;</span> <span class="token comment">// new Vue \u65F6\uFF0C\u62FF\u5230 Vue.options\uFF0C\u5B9A\u4E49\u5728 initGlobalAPI \u4E2D</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>super<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> superOptions <span class="token operator">=</span> <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>super<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\uFF0C\u6700\u7EC8\u62FF\u5230 Vue.options\uFF0C\u5B9A\u4E49\u5728 initGlobalAPI \u4E2D</span>
    <span class="token keyword">var</span> cachedSuperOptions <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>superOptions<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>superOptions <span class="token operator">!==</span> cachedSuperOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// super option changed,</span>
      <span class="token comment">// need to resolve new options.</span>
      Ctor<span class="token punctuation">.</span>superOptions <span class="token operator">=</span> superOptions<span class="token punctuation">;</span>
      <span class="token comment">// check if there are any late-modified/attached options (#4976)</span>
      <span class="token keyword">var</span> modifiedOptions <span class="token operator">=</span> <span class="token function">resolveModifiedOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// update base extend options</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiedOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>extendOptions<span class="token punctuation">,</span> modifiedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      options <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>superOptions<span class="token punctuation">,</span> Ctor<span class="token punctuation">.</span>extendOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span>components<span class="token punctuation">[</span>options<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> Ctor<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resolveModifiedOptions</span> <span class="token punctuation">(</span><span class="token parameter">Ctor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> modified<span class="token punctuation">;</span>
  <span class="token keyword">var</span> latest <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> sealed <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>sealedOptions<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> latest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>latest<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> sealed<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>modified<span class="token punctuation">)</span> <span class="token punctuation">{</span> modified <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      modified<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> latest<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> modified
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u5728\u770B mergeOptions \u51FD\u6570\uFF0C\u5B83\u4E3B\u8981\u6709\u4E24\u4E2A\u4F5C\u7528\uFF1A</p><ul><li>Vue \u5B9E\u4F8B\u5316\u65F6\u7684\u914D\u7F6E\u5408\u5E76</li><li>extend \u6216 mixins \u65F6\u7684\u914D\u7F6E\u5408\u5E76</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">mergeOptions</span> <span class="token punctuation">(</span>
  parent<span class="token punctuation">,</span> <span class="token comment">// Vue.options \u5728 initGlobalAPI \u4E2D\u5B9A\u4E49</span>
  child<span class="token punctuation">,</span>  <span class="token comment">// new Vue(options) \u65F6\u4F20\u5165\u7684 options</span>
  vm
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4ECE vm.options.components \u4E2D\u53D6\u51FAkey\uFF0C\u6821\u9A8C\u540D\u79F0\u7684\u5408\u6CD5\u6027\u3002\u4E0D\u80FD\u4E0E HTML5 \u6807\u7B7E\u540D\u4EE5\u53CA Vue \u5185\u7F6E\u4FDD\u7559\u7684\u540D\u79F0\u76F8\u540C</span>
  <span class="token function">checkComponents</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> child <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>options<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u89C4\u8303\u5316 props / inject / directives\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u9009\u9879\u90FD\u6709\u4E0D\u540C\u4F7F\u7528\u5F62\u5F0F</span>
  <span class="token function">normalizeProps</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">normalizeInject</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">normalizeDirectives</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Apply extends and mixins on the child options,</span>
  <span class="token comment">// but only if it is a raw options object that isn&#39;t</span>
  <span class="token comment">// the result of another mergeOptions call.</span>
  <span class="token comment">// Only merged options has the _base property.</span>
  <span class="token comment">// mergeOptions \u7684\u7B2C\u4E8C\u79CD\u4F5C\u7528\uFF1A</span>
  <span class="token comment">// \u9488\u5BF9 extends \u6216 mixins \u7684\u5408\u5E76\uFF0C\u56E0\u4E3AVue\u5B9E\u4F8B\u90FD\u6709 options.__base = Vue \u5C5E\u6027</span>
  <span class="token comment">// \u5728 initMixin$1 \u548C initExtend  \u4E2D\u8C03\u7528\u3002</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>child<span class="token punctuation">.</span>_base<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>extends<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parent <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">.</span>extends<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>mixins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> child<span class="token punctuation">.</span>mixins<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">.</span>mixins<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> key<span class="token punctuation">;</span>
  <span class="token comment">// \u5C06\u7236\u6784\u9020\u5668\u5373 Vue \u4E0A\u7684 options \u590D\u5236\u5230 options \u4E2D</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5728\u7236\u6784\u9020\u5668\u5373 Vue \u4E0A\u7684 options \u6CA1\u6709\uFF0C\u4F46\u5B50\u7EC4\u4EF6\u4E0A\u6709\u5B9A\u4E49\u7684 option \u8D4B\u503C\u5230 options \u4E2D</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// strat \u5B9A\u4E49\u4E86\u5404\u79CD\u5B57\u6BB5\u7684\u5408\u5E76\u7B56\u7565\uFF0C\u6BD4\u5982 data / methods \u5728 new Vue \u65F6\u8981\u4F20\u5165\u5BF9\u8C61\uFF0Chooks \u662F\u51FD\u6570</span>
  <span class="token keyword">function</span> <span class="token function">mergeField</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> strat <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> defaultStrat<span class="token punctuation">;</span>
    options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strat</span><span class="token punctuation">(</span>parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-initinternalcomponent" tabindex="-1">\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76 initInternalComponent <a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B\u5316\u914D\u7F6E\u5408\u5E76-initinternalcomponent" aria-hidden="true">#</a></h2><p>\u518D\u590D\u4E60\u4E0B\u7EC4\u4EF6\u521B\u5EFA\u8FC7\u7A0B\uFF1A</p><ol><li>\u6784\u5EFA\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570 Sub\uFF1A<code>vm._render =&gt; _createElement =&gt; createComponent =&gt; Ctor = baseCtor.extend(Ctor) =&gt; new VNode(...) =&gt; vnode.componentOptions = { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }</code></li><li>\u5B9E\u4F8B\u5316\u7EC4\u4EF6: <code>vm._update =&gt; vm.__patch__ =&gt; patch =&gt;createPatchFunction =&gt; createElm =&gt; createComponent =&gt; i(vnode,false) =&gt; createComponentInstanceForVnode(vnode, activeInstance) =&gt; new vnode.componentOptions.Ctor(options)</code></li></ol><p>\u6240\u4EE5\u770B\u4E0B Ctor \u6784\u9020\u51FD\u6570\u521B\u5EFA\u65F6\u5B9A\u4E49\u7684 options</p><div class="language-js"><pre><code><span class="token comment">/**
 * export default {
 *   name: &#39;app&#39;,
 *   components: {
 *     HelloWorld
 *   }
 * }
 * extendOptions \u5C31\u662F export default \u5BFC\u51FA\u5BF9\u8C61
*/</span>
Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  extendOptions <span class="token operator">=</span> extendOptions <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> Super <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> SuperId <span class="token operator">=</span> Super<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>
  <span class="token comment">// \u907F\u514D\u591A\u6B21\u6267\u884C Vue.extend \u7684\u65F6\u5019\u5BF9\u540C\u4E00\u4E2A\u7EC4\u4EF6\u91CD\u590D\u6784\u9020\u3002</span>
  <span class="token keyword">var</span> cachedCtors <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">||</span> <span class="token punctuation">(</span>extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> name <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>name <span class="token operator">||</span> Super<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">validateComponentName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ECF\u5178\u7684\u5BF9\u8C61\u539F\u578B\u7EE7\u627F</span>
  <span class="token keyword">var</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B9E\u4F8B\u5316\u65F6\u6267\u884C Vue._init \u4E00\u6837\u7684\u903B\u8F91</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub<span class="token punctuation">;</span>

  Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span><span class="token punctuation">;</span>
  Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
    Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token comment">// Vue.options \u5728 initGlobalAPI \u5B9A\u4E49</span>
    extendOptions <span class="token comment">// \u7EC4\u4EF6\u5B9A\u4E49 export default \u5BF9\u8C61</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  Sub<span class="token punctuation">[</span><span class="token string">&#39;super&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Super<span class="token punctuation">;</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">return</span> Sub
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u518D\u770B\u4E0B <code>new vnode.componentOptions.Ctor(options)</code> \u5B9E\u4F8B\u5316\u65F6\u5B9A\u4E49\u7684 options</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
  vnode<span class="token punctuation">,</span> <span class="token comment">// we know it&#39;s MountedComponentVNode but flow doesn&#39;t</span>
  parent <span class="token comment">// activeInstance in lifecycle state</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_parentVnode</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span>
    <span class="token literal-property property">parent</span><span class="token operator">:</span> parent
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// check inline-template render functions</span>
  <span class="token keyword">var</span> inlineTemplate <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inlineTemplate<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>inlineTemplate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>render <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">.</span>Ctor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\u770B\u4E0B\uFF0C\u5728 <code>_init</code> \u51FD\u6570\u5185\u8C03\u7528 <code>initInternalComponent(vm, options)</code>\u65F6\uFF0C options \u7684\u5904\u7406\uFF0C\u8FD9\u6837 options \u7684\u6765\u6E90\u5C31\u6E05\u6670\u4E86\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Sub.options</span>
  <span class="token comment">// doing this because it&#39;s faster than dynamic enumeration.</span>
  <span class="token comment">// \u6BD4\u76F4\u63A5\u8C03\u7528 new Vue \u4E2D mergeOptions \u52A8\u6001\u5408\u5E76\u9009\u9879\u66F4\u5FEB\u3002</span>
  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23),e=[o];function c(u,i,l,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
