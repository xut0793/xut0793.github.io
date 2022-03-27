import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const w='{"title":"\u54CD\u5E94\u5F0F\u539F\u74063\uFF1A\u6D3E\u53D1\u66F4\u65B0","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-1-reactivity-3-dispatch-update.md"}',p={},o=t(`<h1 id="\u54CD\u5E94\u5F0F\u539F\u74063\uFF1A\u6D3E\u53D1\u66F4\u65B0" tabindex="-1">\u54CD\u5E94\u5F0F\u539F\u74063\uFF1A\u6D3E\u53D1\u66F4\u65B0 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u74063\uFF1A\u6D3E\u53D1\u66F4\u65B0" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u5B8C\u6210\u4E86\u4F9D\u8D56\u6536\u96C6\uFF0C\u7406\u89E3\u4E86 Observer / Dep / Watcher \u4E09\u4E2A\u6838\u5FC3\u7684\u7C7B\u5B9A\u4E49\u3002\u6B64\u65F6\uFF0C\u6211\u4EEC\u518D\u770B\u4E00\u4E2A\u5C5E\u6027\u503C\u53D8\u5316\u4E86\uFF0C\u5230\u5E95\u662F\u5982\u4F55\u89E6\u53D1\u66F4\u65B0\u7684\u3002</p><div class="language-js"><pre><code><span class="token comment">// 1. \u5BF9\u5C5E\u6027\u503C\u8D4B\u503C\u89E6\u53D1 setter \u4E2D\u7684 dep.notify()</span>
<span class="token keyword">function</span> <span class="token function">defineReactive$$1</span> <span class="token punctuation">(</span>
  <span class="token parameter">obj<span class="token punctuation">,</span>
  key<span class="token punctuation">,</span>
  val<span class="token punctuation">,</span>
  customSetter<span class="token punctuation">,</span>
  shallow</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span> 
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5728\u8FD9\u91CC\u901A\u77E5\u4F9D\u8D56</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u904D\u5386\u4E4B\u524D\u6536\u96C6\u5230\u7684\u4F9D\u8D56\uFF0C\u8C03\u7528\u4F9D\u8D56\u81EA\u8EAB\u7684 update \u65B9\u6CD5\u3002</span>
<span class="token comment">// \u91CD\u8981\u7684\u70B9\u662F\u9700\u8981\u786E\u4FDD\u4F9D\u8D56\u89E6\u53D1\u7684\u6B63\u786E\u987A\u5E8F\uFF0C\u539F\u56E0\u89C1\u4E0B\u9762 queueWatcher \u65B9\u6CD5\u91CC\u7684\u8BF4\u660E</span>
<span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// stabilize the subscriber list first</span>
  <span class="token keyword">var</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// subs aren&#39;t sorted in scheduler if not running async</span>
    <span class="token comment">// we need to sort them now to make sure they fire in correct</span>
    <span class="token comment">// order</span>
    subs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// watcher.update</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>  

<span class="token comment">// 3. \u4F9D\u8D56\u7684\u5217\u65B0\u4F1A\u4F9D\u636E\u4F9D\u8D56\u7684\u79CD\u7C7B\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C</span>
<span class="token comment">// \u5982\u679C\u662F computed-watcher \u5219\u8FDB\u884C this.dirty = true\uFF0C\u5927\u90E8\u5206\u4F9D\u8D56\u4F1A\u6267\u884C queueWatcher</span>
<span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// computed-watcher \u6267\u884C</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/** 4. \u5C06\u66F4\u65B0\u7684\u4F9D\u8D56\u63A8\u5165\u7F13\u5B58\u961F\u5217
 * 
 * \u8FD9\u91CC\u5F15\u5165\u4E86\u4E00\u4E2A\u961F\u5217\u7684\u6982\u5FF5\uFF0C\u8FD9\u4E5F\u662F Vue \u5728\u505A\u6D3E\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u7684\u4E00\u4E2A\u4F18\u5316\u7684\u70B9:
 * \u5B83\u5E76\u4E0D\u4F1A\u6BCF\u6B21\u6570\u636E\u6539\u53D8\u90FD\u89E6\u53D1 watcher \u7684\u56DE\u8C03\uFF0C\u800C\u662F\u628A\u8FD9\u4E9B watcher \u5148\u6DFB\u52A0\u5230\u4E00\u4E2A\u961F\u5217\u91CC\uFF0C\u7136\u540E\u5728 nextTick \u540E\u6267\u884C flushSchedulerQueue\u3002
 * \u8FD9\u91CC\u6709\u51E0\u4E2A\u7EC6\u8282\u8981\u6CE8\u610F\u4E00\u4E0B:
 *   \u9996\u5148\u7528 has \u5BF9\u8C61\u4FDD\u8BC1\u540C\u4E00\u4E2A Watcher \u53EA\u6DFB\u52A0\u4E00\u6B21\uFF1B
 *   \u63A5\u7740\u5BF9 flushing \u7684\u5224\u65AD\uFF0Celse \u90E8\u5206\u7684\u903B\u8F91\u7A0D\u540E\u6211\u4F1A\u8BB2\uFF1B
 *   \u6700\u540E\u901A\u8FC7 waiting \u4FDD\u8BC1\u5BF9 nextTick(flushSchedulerQueue) \u7684\u8C03\u7528\u903B\u8F91\u53EA\u6709\u4E00\u6B21; 
 *   (nextTick \u540E\u9762\u5355\u72EC\u89E3\u6790\uFF0C\u76EE\u524D\u5C31\u53EF\u4EE5\u7406\u89E3\u5B83\u662F\u5728\u4E0B\u4E00\u4E2A tick\uFF0C\u4E5F\u5C31\u662F\u5F02\u6B65\u7684\u53BB\u6267\u884C flushSchedulerQueue\u3002)
*/</span>
<span class="token keyword">var</span> <span class="token constant">MAX_UPDATE_COUNT</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> has <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> waiting <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> flushing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4FDD\u8BC1\u540C\u4E00\u4E2A Watcher \u53EA\u6DFB\u52A0\u4E00\u6B21\uFF0C\u5373\u961F\u5217\u4E2D\u4E0D\u4F1A\u6709\u91CD\u590D\u7684 watcher</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u8FD8\u672A\u5F00\u59CB\u6267\u884C\u961F\u5217\u4EE3\u7801\uFF0C\u5219\u63A8\u5165\u961F\u5217\u7B49\u5F85</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// if already flushing, splice the watcher based on its id</span>
      <span class="token comment">// if already past its id, it will be run next immediately.</span>
      <span class="token comment">/**
       * \u4ECE\u540E\u5F80\u524D\u904D\u5386\uFF0C\u5728\u961F\u5217\u6267\u884C\u671F\u95F4\uFF0C\u5982\u679C watcher.id \u521A\u597D\u53EF\u4EE5\u63D2\u5165\u5230\u961F\u5217\u8FD8\u672A\u6267\u884C\u7684\u90E8\u5206\uFF0C\u90A3\u5C31\u6267\u884C\u63D2\u5165
      */</span>
      <span class="token keyword">var</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// queue the flush</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4FDD\u8BC1\u5728 flushSchedulerQueue \u6267\u884C\u671F\u95F4\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u4E0D\u4F1A\u91CD\u590D\u8C03\u7528 flushSchedulerQueue\u3002</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>async<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 5. \u6267\u884C\u961F\u5217\uFF0C\u5373\u6309\u987A\u5E8F\u9010\u4E2A\u6267\u884C\u961F\u5217\u4E2D watcher.run</span>
<span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentFlushTimestamp <span class="token operator">=</span> <span class="token function">getNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  flushing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> watcher<span class="token punctuation">,</span> id<span class="token punctuation">;</span>

  <span class="token comment">// Sort queue before flush.</span>
  <span class="token comment">// This ensures that:</span>
  <span class="token comment">// 1. Components are updated from parent to child. (because parent is always</span>
  <span class="token comment">//    created before the child)</span>
  <span class="token comment">// 2. A component&#39;s user watchers are run before its render watcher (because</span>
  <span class="token comment">//    user watchers are created before the render watcher)</span>
  <span class="token comment">// 3. If a component is destroyed during a parent component&#39;s watcher run,</span>
  <span class="token comment">//    its watchers can be skipped.</span>
  <span class="token comment">/**
   * queue.sort((a, b) =&gt; a.id - b.id) \u5BF9\u961F\u5217\u505A\u4E86\u4ECE\u5C0F\u5230\u5927\u7684\u6392\u5E8F\uFF0C\u8FD9\u4E48\u505A\u4E3B\u8981\u6709\u4EE5\u4E0B\u8981\u786E\u4FDD\u4EE5\u4E0B\u51E0\u70B9\uFF1A
   * 1.\u7EC4\u4EF6\u7684\u66F4\u65B0\u7531\u7236\u5230\u5B50\uFF1B\u56E0\u4E3A\u7236\u7EC4\u4EF6\u7684\u521B\u5EFA\u8FC7\u7A0B\u662F\u5148\u4E8E\u5B50\u7684\uFF0C\u6240\u4EE5 watcher \u7684\u521B\u5EFA\u4E5F\u662F\u5148\u7236\u540E\u5B50\uFF0C\u6267\u884C\u987A\u5E8F\u4E5F\u5E94\u8BE5\u4FDD\u6301\u5148\u7236\u540E\u5B50\u3002
   * 2.\u7528\u6237\u7684\u81EA\u5B9A\u4E49 watcher \u8981\u4F18\u5148\u4E8E\u6E32\u67D3 watcher \u6267\u884C\uFF1B\u56E0\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49 watcher \u662F\u5728\u6E32\u67D3 watcher \u4E4B\u524D\u521B\u5EFA\u7684\u3002
   * 3.\u5982\u679C\u4E00\u4E2A\u7EC4\u4EF6\u5728\u7236\u7EC4\u4EF6\u7684 watcher \u6267\u884C\u671F\u95F4\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5B83\u5BF9\u5E94\u7684 watcher \u6267\u884C\u90FD\u53EF\u4EE5\u88AB\u8DF3\u8FC7\uFF0C\u6240\u4EE5\u7236\u7EC4\u4EF6\u7684 watcher \u5E94\u8BE5\u5148\u6267\u884C\u3002
   * 
  */</span>
  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// do not cache length because more watchers might be pushed</span>
  <span class="token comment">// as we run existing watchers</span>
  <span class="token comment">/**
   * index \u4E0D\u80FD\u5B9A\u4E49\u5728\u5C40\u90E8\uFF0C\u56E0\u4E3A\u5728\u961F\u5217\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u8FD8\u4F1A\u6709 watcher \u63D2\u5165\u961F\u5217\uFF0C\u961F\u5217\u7684 queue.length \u4F1A\u53D8\u5316\uFF0C\u5E76\u4E14\u5F53\u524D\u904D\u5386\u5230\u7684 index \u5728 queueWatcher \u4E5F\u8981\u4F7F\u7528
  */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u6267\u884C\u7684\u4F9D\u8D56\u6E05\u63A7</span>
    watcher<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// keep copies of post queues before resetting state</span>
  <span class="token keyword">var</span> activatedQueue <span class="token operator">=</span> activatedChildren<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> updatedQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u961F\u5217\u6267\u884C\u5B8C\u6210\u540E\u91CD\u7F6E\u76F8\u5173\u72B6\u6001</span>
  <span class="token function">resetSchedulerState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// call component updated and activated hooks</span>
  <span class="token comment">// \u6FC0\u6D3B\u76F8\u5173\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</span>
  <span class="token function">callActivatedHooks</span><span class="token punctuation">(</span>activatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callUpdatedHooks</span><span class="token punctuation">(</span>updatedQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u961F\u5217\u6267\u884C\u5B8C\u6210\u540E\u91CD\u7F6E\u76F8\u5173\u72B6\u6001</span>
<span class="token keyword">function</span> <span class="token function">resetSchedulerState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  index <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">=</span> activatedChildren<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  has <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  waiting <span class="token operator">=</span> flushing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6. watcher.run \u6267\u884C\u8BA2\u9605\u8005\u56DE\u8C03</span>
<span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">||</span>
      <span class="token comment">// Deep watchers and watchers on Object/Arrays should fire even</span>
      <span class="token comment">// when the value is the same, because the value may</span>
      <span class="token comment">// have mutated.</span>
      <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// set new value</span>
      <span class="token keyword">var</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u7528\u6237\u81EA\u5B9A\u4E49\u7684 wathcer\uFF0C\u5373 options.watch \u5B9A\u4E49</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;callback for watcher \\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6700\u540E\u7684\u8C03\u7528\u521B\u5EFA\u4F9D\u8D56 new Watcher \u4E2D\u4F20\u5165\u7684\u56DE\u8C03\u3002\u9488\u5BF9\u4E0D\u540C\u7684 watcher \u7C7B\u578B\uFF0C\u4ECE watcher.update \u5230 watcher.run \u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF1A</p><ul><li>\u89C6\u56FE\u6E32\u67D3\u7684 render-watcher\uFF0C\u5728 watcher.run \u6267\u884Ccb \u662F <code>updateComponent = () =&gt; { vm._update(vm._render(), hydrating) }</code></li><li>\u8BA1\u7B97\u5C5E\u6027\u7684 computed-watcher\uFF0C\u5373 <code>watcher.lazy = true</code>\u3002\u5728 watcher.update \u4E2D\u6267\u884C <code>watcher.dirty = true</code></li><li>\u81EA\u5B9A\u4E49\u7684 user-watcher\uFF0C\u5373 <code>watcher.user = true</code>\u3002\u5728 watcher.run \u6267\u884C cb \u5373\u81EA\u5B9A\u4E49\u7684\u56DE\u8C03\u3002</li></ul>`,5),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{w as __pageData,m as default};
