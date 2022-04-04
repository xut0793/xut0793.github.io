import{_ as n,c as s,o as a,a as p}from"./app.fa011131.js";const y='{"title":"\u7EC4\u4EF64\uFF1A\u5F02\u6B65\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-4-component-4-async.md"}',t={},o=p(`<h1 id="\u7EC4\u4EF64\uFF1A\u5F02\u6B65\u7EC4\u4EF6" tabindex="-1">\u7EC4\u4EF64\uFF1A\u5F02\u6B65\u7EC4\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF64\uFF1A\u5F02\u6B65\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u5148\u770B\u4E0B vue \u4E2D\u5F02\u6B65\u7EC4\u4EF6\u6CE8\u518C\u7684\u4E09\u79CD\u65B9\u5F0F\uFF08\u9700\u8981\u914D\u5408 webpack \u6784\u5EFA\uFF09\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u7B2C\u4E00\u79CD\uFF1A\u7EC4\u4EF6\u6CE8\u518C\u65F6\u4F20\u5165\u51FD\u6570</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;async-example&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u8FD9\u4E2A\u7279\u6B8A\u7684 require \u8BED\u6CD5\u544A\u8BC9 webpack, \u81EA\u52A8\u5C06\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u5206\u5272\u6210\u4E0D\u540C\u7684\u5757\uFF0C \u8FD9\u4E9B\u5757\u5C06\u901A\u8FC7 Ajax \u8BF7\u6C42\u81EA\u52A8\u4E0B\u8F7D\u3002</span>
   <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./my-async-component&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> resolve<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// \u7B2C\u4E8C\u79CD\uFF1A\u652F\u6301 promise \u521B\u5EFA\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u7684 import \u662F webapck 2.x \u8BED\u6CD5\u7CD6\uFF0C\u5E76\u4E0D\u662F\u539F\u751F\u7684 ES Module \u7684 inport API</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
  <span class="token string">&#39;async-webpack-example&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BE5 \`import\` \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A \`Promise\` \u5BF9\u8C61\u3002</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./my-async-component&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u7B2C\u4E09\u79CD\uFF1A\u9AD8\u7EA7\u5F02\u6B65\u7EC4\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;async-example&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u9700\u8981\u52A0\u8F7D\u7684\u7EC4\u4EF6\u3002\u5E94\u5F53\u662F\u4E00\u4E2A Promise</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./MyComp.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u52A0\u8F7D\u4E2D\u5E94\u5F53\u6E32\u67D3\u7684\u7EC4\u4EF6</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> LoadingComp<span class="token punctuation">,</span>
  <span class="token comment">// \u51FA\u9519\u65F6\u6E32\u67D3\u7684\u7EC4\u4EF6</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> ErrorComp<span class="token punctuation">,</span>
  <span class="token comment">// \u6E32\u67D3\u52A0\u8F7D\u4E2D\u7EC4\u4EF6\u524D\u7684\u7B49\u5F85\u65F6\u95F4\u3002\u9ED8\u8BA4\uFF1A200ms\u3002</span>
  <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6700\u957F\u7B49\u5F85\u65F6\u95F4\u3002\u8D85\u51FA\u6B64\u65F6\u95F4\u5219\u6E32\u67D3\u9519\u8BEF\u7EC4\u4EF6\u3002\u9ED8\u8BA4\uFF1AInfinity</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\u518D\u770B\u4E0B\u6E90\u7801\u4E2D\u5BF9\u5F02\u6B65\u7EC4\u4EF6\u7684\u89E3\u6790\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u7EC4\u4EF6\u521B\u5EFA\u51FD\u6570\u8DEF\u5F84\uFF1Avm._render =&gt; render.call(vm, $createElement) =&gt; _createElement =&gt; createComponent</span>
<span class="token keyword">function</span> <span class="token function">createComponent</span> <span class="token punctuation">(</span>
  <span class="token parameter">Ctor<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  tag</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> baseCtor <span class="token operator">=</span> context<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_base<span class="token punctuation">;</span>

  <span class="token comment">// plain options object: turn it into a constructor \u666E\u901A export default \u5BFC\u51FA\u7EC4\u4EF6\u5BF9\u8C61\u65F6\u521B\u5EFA\u7EC4\u4EF6\u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Ctor <span class="token operator">=</span> baseCtor<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token comment">// async component \u5F02\u6B65\u7EC4\u4EF6\u89E3\u6790</span>
  <span class="token comment">// \u6B63\u5E38\u751F\u6210\u7684\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u90FD\u6709 cid \u6807\u8BC6\uFF0C\u5728 Vue.extend \u51FD\u6570\u4E2D\u53EF\u4EE5\u770B\u5230\u3002</span>
  <span class="token comment">// \u5982\u679C\u5F53\u524D\u4F20\u5165\u7684 Ctor \u5373\u4E0D\u662F\u666E\u901A\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u5305\u542B Ctor.cid \u7684\u7EC4\u4EF6\u6784\u9020\u5668\uFF0C\u90A3\u5C31\u5F53\u4F5C\u5F02\u6B65\u7EC4\u4EF6\u51FD\u6570\u89E3\u6790</span>
  <span class="token keyword">var</span> asyncFactory<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    asyncFactory <span class="token operator">=</span> Ctor<span class="token punctuation">;</span>
    Ctor <span class="token operator">=</span> <span class="token function">resolveAsyncComponent</span><span class="token punctuation">(</span>asyncFactory<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// resolveAsyncComponent \u51FD\u6570\u5F02\u6B65\u5904\u7406\u5F02\u6B65\u7EC4\u4EF6\u7684\u52A0\u8F7D\uFF0C\u9664\u9AD8\u7EA7\u5F02\u6B65\u7EC4\u4EF6\u8FD4\u56DE LoadingComp \u7EC4\u4EF6\u5916\uFF0C\u5176\u5B83\u60C5\u5F62\u90FD\u8FD4\u56DE undefined\uFF0C\u6240\u4EE5\u4F1A\u6267\u884C\u4E0B\u9762\u4EE3\u7801\u521B\u5EFA\u4E00\u4E2A\u6CE8\u91CA\u8282\u70B9\u5360\u4F4D\u7B26</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Ctor <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">createAsyncPlaceholder</span><span class="token punctuation">(</span>
        asyncFactory<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        context<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        tag
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

  <span class="token keyword">var</span> name <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name <span class="token operator">||</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">var</span> vnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VNode</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token string">&quot;vue-component-&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>cid<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> context<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">Ctor</span><span class="token operator">:</span> Ctor<span class="token punctuation">,</span> <span class="token literal-property property">propsData</span><span class="token operator">:</span> propsData<span class="token punctuation">,</span> <span class="token literal-property property">listeners</span><span class="token operator">:</span> listeners<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children <span class="token punctuation">}</span><span class="token punctuation">,</span>
    asyncFactory
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u4E2A\u51FD\u6570\u5C31\u76F8\u5BF9\u590D\u6742\u4E9B\uFF0C\u56E0\u4E3A\u8981\u9488\u5BF9\u4E0A\u8FF0\u4E09\u79CD\u60C5\u5F62\u6CE8\u518C\u6CE8\u518C\u5F02\u6B65\u7EC4\u4EF6\u8FDB\u884C\u89E3\u6790</span>
<span class="token keyword">function</span> <span class="token function">resolveAsyncComponent</span> <span class="token punctuation">(</span>
  factory<span class="token punctuation">,</span> <span class="token comment">// \u6CE8\u518C\u5F02\u6B65\u7EC4\u4EF6\u4F20\u5165\u7684\u51FD\u6570</span>
  baseCtor <span class="token comment">// Vue \u6784\u9020\u51FD\u6570</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5DF2\u7ECF\u52A0\u8F7D\u6E32\u67D3\u8FC7\u7684\u5F02\u6B65\u7EC4\u4EF6\u90FD\u4F1A\u5728\u8BE5\u51FD\u6570\u6DFB\u52A0\u9759\u6001\u5C5E\u6027\uFF0C\u52A0\u8F7D\u5931\u8D25\u7684\u4E3A factory.error\uFF0C\u52A0\u8F7D\u6210\u529F factory.resolved</span>
  <span class="token comment">// \u6240\u4EE5\u4E0B\u9762\u4E24\u4E2A\u5224\u65AD\u53EF\u4EE5\u786E\u4FDD\u5F02\u6B65\u7EC4\u4EF6\u5728\u591A\u6B21\u8C03\u7528\u65F6\u53EA\u52A0\u8F7D\u4E00\u6B21\uFF0C\u518D\u6B21\u52A0\u8F7D\u4F1A\u628A\u4FDD\u7559\u5728\u9759\u6001\u5C5E\u6027\u7684\u7ED3\u679C\u8FD4\u56DE</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>errorComp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> factory<span class="token punctuation">.</span>errorComp
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> factory<span class="token punctuation">.</span>resolved
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> owner <span class="token operator">=</span> currentRenderingInstance<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C\u5F02\u6B65\u5728\u52A0\u8F7D\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E5F\u9700\u8981\u52A0\u8F7D\u8BE5\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u5219\u5C06\u8BE5\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6DFB\u52A0\u5230 owners \u4E2D\uFF0C\u5728\u7EC4\u4EF6\u5B8C\u6210\u5F02\u6B65\u52A0\u8F7D\u540E\u89E6\u53D1\u5168\u90E8\u4E0A\u4E0B\u6587\u66F4\u65B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>owners<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> factory<span class="token punctuation">.</span>owners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// already pending</span>
    factory<span class="token punctuation">.</span>owners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>owner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9AD8\u7EA7\u5F02\u6B65\u7EC4\u4EF6\uFF1A\u5982\u679C\u5F53\u524D\u5F02\u6B65\u7EC4\u4EF6\u6B63\u5728\u52A0\u8F7D\uFF0C\u8FD4\u56DE\u4F20\u5165\u7684\u52A0\u8F7D\u4E2D\u7EC4\u4EF6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>loadingComp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> factory<span class="token punctuation">.</span>loadingComp
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9996\u6B21\u52A0\u8F7D\u5F02\u6B65\u7EC4\u4EF6\u89E3\u6790\u4ECE\u8FD9\u91CC\u5F00\u59CB</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>owner <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>owners<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> owners <span class="token operator">=</span> factory<span class="token punctuation">.</span>owners <span class="token operator">=</span> <span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> sync <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> timerLoading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> timerTimeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    owner<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;hook:destroyed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">remove</span><span class="token punctuation">(</span>owners<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">forceRender</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">renderCompleted</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> owners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>owners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>renderCompleted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        owners<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timerLoading <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerLoading<span class="token punctuation">)</span><span class="token punctuation">;</span>
          timerLoading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timerTimeout <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
          timerTimeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * Ensure a function is called only once.
     * \u4F7F\u7528\u95ED\u5305\u786E\u4FDD\u51FD\u6570 fn \u53EA\u88AB\u8C03\u7528\u4E00\u6B21
      function once (fn) {
        var called = false;
        return function () {
          if (!called) {
            called = true;
            fn.apply(this, arguments);
          }
        }
      }
     */</span>
    <span class="token keyword">var</span> resolve <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// cache resolved</span>
      factory<span class="token punctuation">.</span>resolved <span class="token operator">=</span> <span class="token function">ensureCtor</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// invoke callbacks only if this is not a synchronous resolve</span>
      <span class="token comment">// (async resolves are shimmed as synchronous during SSR)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6B64\u65F6\u5F02\u6B65\u7EC4\u4EF6\u5DF2\u7ECF\u8BF7\u6C42\u5B8C\u6210\u8FD4\u56DE\uFF0C\u5E76\u628A\u8BF7\u6C42\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u8D4B\u503C\u5230\u5DE5\u5382\u51FD\u6570\u7684 resolve\u4E2D</span>
        <span class="token comment">// \u6B64\u65F6\u5F3A\u5236\u89E6\u53D1\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u5F53\u518D\u6B21\u89E3\u6790\u5230\u8BE5\u51FD\u6570\u65F6\uFF0C\u5728\u524D\u9762\u7684 if (isDef(factory.resolved)) { return factory.resolved } \u8FD4\u56DE\u4E0A\u6B21\u89E3\u6790\u7684\u7ED3\u679C</span>
        <span class="token function">forceRender</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        owners<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> reject <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token string">&quot;Failed to resolve async component: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        <span class="token punctuation">(</span>reason <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;\\nReason: &quot;</span> <span class="token operator">+</span> reason<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u540C\u7406\uFF0C\u8DDF reslove \u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u5F53\u7236\u7EC4\u4EF6\u518D\u6B21\u6E32\u67D3\u65F6\u8FD4\u56DE\u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\u7684\u7ED3\u679C\u3002</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>errorComp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        factory<span class="token punctuation">.</span>error <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">forceRender</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u6CE8\u518C\u5F02\u6B65\u7EC4\u4EF6\u65F6\u4F20\u5165\u7684 factory\uFF0C\u5E76\u5C06\u5C01\u88C5\u7684 resolve ,reject \u4F5C\u4E3A\u5B9E\u53C2\uFF0C</span>
    <span class="token comment">/**
     * \u7B2C\u4E00\u79CD\uFF1Afunctin(resolve, reject) { require([&#39;./my-async-component&#39;], resolve)} \u4F1A\u89E6\u53D1 webapck \u7684 require API\uFF0C\u5728\u7F16\u8BD1\u540E\u751F\u4EA7\u73AF\u5883\u4F1A\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u8D44\u6E90
     * \u7B2C\u4E8C\u79CD\uFF1A () =&gt; import(&#39;./my-async-component&#39;) \u8C03\u7528\u4F1A\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61 \uFF0C\u8FD9\u662F import() \u4E0D\u662FES \u539F\u751FAPI, \u662Fwebpack 2+ \u652F\u6301\u4E86\u5F02\u6B65\u52A0\u8F7D\u7684\u8BED\u6CD5\u7CD6
     * \u7B2C\u4E09\u79CD\uFF1A () =&gt; {component: import(&#39;./my-async-component), loading: LoadingComp, error: ErrorComp, delay: 200, timeout: 3000}
     */</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// () =&gt; Promise \u5BF9\u5E94\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u6CE8\u518C\u5F02\u6B65\u51FD\u6570</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPromise</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>component<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token comment">// \u5BF9\u5E94\u7B2C\u4E09\u79CD\u6CE8\u518C\u5F02\u6B65\u7EC4\u4EF6\u7684\u89E3\u6790</span>
        res<span class="token punctuation">.</span>component<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          factory<span class="token punctuation">.</span>errorComp <span class="token operator">=</span> <span class="token function">ensureCtor</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>error<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>loading<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          factory<span class="token punctuation">.</span>loadingComp <span class="token operator">=</span> <span class="token function">ensureCtor</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>loading<span class="token punctuation">,</span> baseCtor<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>delay <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5F02\u6B65\u7EC4\u4EF6\u52A0\u8F7D\u8BF7\u6C42\u4E2D</span>
            factory<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timerLoading <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              timerLoading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isUndef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                factory<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">forceRender</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>delay <span class="token operator">||</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          timerTimeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timerTimeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">reject</span><span class="token punctuation">(</span>
                <span class="token string">&quot;timeout (&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;ms)&quot;</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    sync <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// return in case resolved synchronously</span>
    <span class="token keyword">return</span> factory<span class="token punctuation">.</span>loading
      <span class="token operator">?</span> factory<span class="token punctuation">.</span>loadingComp
      <span class="token operator">:</span> factory<span class="token punctuation">.</span>resolved
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ensureCtor</span> <span class="token punctuation">(</span><span class="token parameter">comp<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    comp<span class="token punctuation">.</span>__esModule <span class="token operator">||</span>
    <span class="token punctuation">(</span>hasSymbol <span class="token operator">&amp;&amp;</span> comp<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;Module&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    comp <span class="token operator">=</span> comp<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F02\u6B65\u7EC4\u4EF6\u7F51\u7EDC\u8BF7\u6C42\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u9700\u8981\u4F7F\u7528 Vue.extend \u5904\u7406\u6210\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\uFF0C\u5982\u679C\u8BF7\u6C42\u4E0B\u6765\u7684\u5C31\u662F\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE</span>
  <span class="token keyword">return</span> <span class="token function">isObject</span><span class="token punctuation">(</span>comp<span class="token punctuation">)</span>
    <span class="token operator">?</span> base<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>comp<span class="token punctuation">)</span>
    <span class="token operator">:</span> comp
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createAsyncPlaceholder</span> <span class="token punctuation">(</span>
  <span class="token parameter">factory<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  context<span class="token punctuation">,</span>
  children<span class="token punctuation">,</span>
  tag</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token function">createEmptyVNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> factory<span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span> <span class="token literal-property property">context</span><span class="token operator">:</span> context<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> children<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> tag <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> node
<span class="token punctuation">}</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><p>\u5F02\u6B65\u7EC4\u4EF6\u5B9E\u73B0\u7684\u672C\u8D28\u662F\u89E6\u4F7F\u7236\u7EC4\u4EF6 \u4E8C \u6B21\u6E32\u67D3\uFF0C\u9664\u4E86 elay \u7684\u9AD8\u7EA7\u5F02\u6B65\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u76F4\u63A5\u6E32\u67D3\u6210 loading \u7EC4\u4EF6\u5916\uFF0C\u5176\u5B83\u90FD\u662F\u7B2C\u4E00\u6B21\u6E32\u67D3\u751F\u6210\u4E00\u4E2A\u6CE8\u91CA\u8282\u70B9\u3002 \u5F53\u5F02\u6B65\u83B7\u53D6\u7EC4\u4EF6\u6210\u529F\u540E\uFF0C\u518D\u901A\u8FC7\u8C03\u7528 parent.forceRender \u5F3A\u5236\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u6837\u5C31\u80FD\u6B63\u786E\u6E32\u67D3\u51FA\u6211\u4EEC\u5F02\u6B65\u52A0\u8F7D\u7684\u5B50\u7EC4\u4EF6\u4E86\u3002</p>`,7),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var f=n(t,[["render",e]]);export{y as __pageData,f as default};
