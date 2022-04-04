import{_ as n,c as s,o as a,a as p}from"./app.fa011131.js";const h='{"title":"\u751F\u4EA7\u73AF\u5883\u6784\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"DCE(Dead Code Elimination) \u6B7B\u4EE3\u7801\u6D88\u9664","slug":"dce-dead-code-elimination-\u6B7B\u4EE3\u7801\u6D88\u9664"},{"level":2,"title":"Tree Shaking","slug":"tree-shaking"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u53EB Tree Shaking\uFF08\u6447\u6811\u4F18\u5316\uFF09\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u53EB-tree-shaking\uFF08\u6447\u6811\u4F18\u5316\uFF09\uFF1F"},{"level":3,"title":"Tree Shaking \u4E0E DCE","slug":"tree-shaking-\u4E0E-dce"},{"level":3,"title":"Tree Shaking \u7684\u5B9E\u73B0\u524D\u63D0","slug":"tree-shaking-\u7684\u5B9E\u73B0\u524D\u63D0"},{"level":3,"title":"Tree-shaking\u7684\u5B9E\u73B0","slug":"tree-shaking\u7684\u5B9E\u73B0"},{"level":3,"title":"Tree Shaking \u5BF9\u7C7B\u4E2D\u53D8\u91CF\u548C\u65B9\u6CD5\u7684\u6548\u679C","slug":"tree-shaking-\u5BF9\u7C7B\u4E2D\u53D8\u91CF\u548C\u65B9\u6CD5\u7684\u6548\u679C"},{"level":2,"title":"sideEffects \u526F\u4F5C\u7528","slug":"sideeffects-\u526F\u4F5C\u7528"},{"level":2,"title":"scope hoisting \u4F5C\u7528\u57DF\u63D0\u5347","slug":"scope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347"},{"level":3,"title":"\u95EE\u9898","slug":"\u95EE\u9898"},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848\uFF1Ascope hoisting \u4F5C\u7528\u57DF\u63D0\u5347","slug":"\u89E3\u51B3\u65B9\u6848\uFF1Ascope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347"},{"level":3,"title":"scope hositing \u539F\u7406\u548C\u524D\u63D0\u6761\u4EF6","slug":"scope-hositing-\u539F\u7406\u548C\u524D\u63D0\u6761\u4EF6"},{"level":3,"title":"\u5C40\u9650\u6027","slug":"\u5C40\u9650\u6027"},{"level":2,"title":"\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u548C\u6301\u4E45\u7F13\u5B58","slug":"\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u548C\u6301\u4E45\u7F13\u5B58"},{"level":3,"title":"\u4EC0\u4E48\u662F\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9 hash","slug":"\u4EC0\u4E48\u662F\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9-hash"},{"level":3,"title":"\u6301\u4E45\u7F13\u5B58\u7B56\u7565","slug":"\u6301\u4E45\u7F13\u5B58\u7B56\u7565"},{"level":3,"title":"hash \u7684\u7528\u6CD5","slug":"hash-\u7684\u7528\u6CD5"},{"level":3,"title":"hash \u503C\u7684\u4E0D\u7A33\u5B9A\u6027","slug":"hash-\u503C\u7684\u4E0D\u7A33\u5B9A\u6027"}],"relativePath":"FE-Engineering/ci-webpack/prod.md"}',t={},e=p(`<h1 id="\u751F\u4EA7\u73AF\u5883\u6784\u5EFA" tabindex="-1">\u751F\u4EA7\u73AF\u5883\u6784\u5EFA <a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883\u6784\u5EFA" aria-hidden="true">#</a></h1><ul><li>DCE(Dead Code Elimination)</li><li>Tree Shaking\uFF1A <ul><li>babel-loader \u914D\u7F6E\u9879 module: false</li><li>optimization.usedExports\uFF1A\u5F00\u542F\u5BF9 exports \u6709\u7528\u548C\u65E0\u7528\u5BFC\u5165\u7684\u6807\u8BC6</li><li>sideEffects \u526F\u4F5C\u7528\u53CA\u76F8\u5173\u7684 optimization.sideEffects, package.json.sideEffects</li></ul></li><li>scope hoisting \u4F5C\u7528\u57DF\u63D0\u5347</li><li>\u6587\u4EF6\u6307\u7EB9\u7B56\u7565\uFF1A\u957F\u6548\u7F13\u5B58 hash / chunkhash / comtenthash</li></ul><h2 id="dce-dead-code-elimination-\u6B7B\u4EE3\u7801\u6D88\u9664" tabindex="-1">DCE(Dead Code Elimination) \u6B7B\u4EE3\u7801\u6D88\u9664 <a class="header-anchor" href="#dce-dead-code-elimination-\u6B7B\u4EE3\u7801\u6D88\u9664" aria-hidden="true">#</a></h2><p>Dead Code \u6B7B\u4EE3\u7801\uFF0C\u5373\u5F53\u524D\u5E94\u7528\u7A0B\u5E8F\u4E0D\u4F7F\u7528\u7684\u4EE3\u7801\uFF0C\u6982\u62EC\u4E3A\uFF1A<strong>\u4E0D\u4F1A\u6267\u884C\u3001\u4E0D\u88AB\u7528\u5230\u3001\u53EA\u5199\u4E0D\u8BFB</strong></p><ol><li>\u4E0D\u4F1A\u6267\u884C\uFF1A\u5373\u65E0\u6CD5\u5230\u8FBE\u7684\u4EE3\u7801:</li></ol><ul><li>\u6267\u884C\u4E0D\u4E86\u7684\u5224\u65AD</li><li>\u6267\u884C\u4E0D\u5230\u7684\u5FAA\u73AF</li><li>return \u540E\u7684\u4EE3\u7801(Unreachable code)</li></ul><div class="language-js"><pre><code><span class="token comment">// \u6267\u884C\u4E0D\u4E86\u7684\u5224\u65AD</span>
<span class="token keyword">function</span> <span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Dead Code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// return \u540E\u7684\u4EE3\u7801</span>
<span class="token keyword">function</span> <span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Dead Code</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6267\u884C\u4E0D\u5230\u7684\u5FAA\u73AF</span>
<span class="token keyword">function</span> <span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Dead Code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u4E0D\u88AB\u7528\u5230</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u58F0\u660E\u4E86\u4F46\u672A\u88AB\u4F7F\u7528\u7684\u53D8\u91CF x unused</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">function</span> <span class="token function">unused</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">5</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u53EA\u5199\u4E0D\u8BFB</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x<span class="token punctuation">;</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// Dead store</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F20\u7EDF\u7F16\u8BD1\u578B\u7684\u8BED\u8A00\u4E2D\uFF0C\u90FD\u662F\u7531\u7F16\u8BD1\u5668\u5C06 Dead Coden\u4ECEnAST\uFF08\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09\u4E2D\u5220\u9664\uFF0C\u90A3 javascript \u4E2D\u662F\u7531\u8C01\u505A DCE \u5462\uFF1F</p><p>\u9996\u5148\u80AF\u5B9A\u4E0D\u662F\u6D4F\u89C8\u5668\u505A DCE\uFF0C\u56E0\u4E3A\u5F53\u6211\u4EEC\u7684\u4EE3\u7801\u9001\u5230\u6D4F\u89C8\u5668\uFF0C\u90A3\u8FD8\u8C08\u4EC0\u4E48\u6D88\u9664\u65E0\u6CD5\u6267\u884C\u7684\u4EE3\u7801\u6765\u4F18\u5316\u5462\uFF0C\u6240\u4EE5\u80AF\u5B9A\u662F\u9001\u5230\u6D4F\u89C8\u5668\u4E4B\u524D\u7684\u6B65\u9AA4\u8FDB\u884C\u4F18\u5316\u3002</p><p>\u5176\u5B9E\u4E5F\u4E0D\u662F\u719F\u6089\u7684\u6784\u5EFA\u5DE5\u5177 rollup / webpack \u7B49\u505A\u7684\uFF0C\u800C\u662F\u7531\u4EE3\u7801\u538B\u7F29\u5DE5\u5177\u6765\u5B8C\u6210 DCE\uFF0C\u5728 webpack@3.x \u7ED1\u5B9A\u7684\u662F uglify\uFF0Cwebpack@4.x \u7ED1\u5B9A\u7684\u662F Terser\u3002</p><div class="language-js"><pre><code><span class="token comment">// dce.js</span>
<span class="token keyword">function</span> <span class="token function">writeOnly</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x<span class="token punctuation">;</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">// \u53EA\u5199\u4E0D\u8BFB</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">unexecuted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6267\u884C\u4E0D\u4E86\u7684\u5224\u65AD</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Dead Code</span>
    <span class="token punctuation">}</span>
  <span class="token comment">// \u6267\u884C\u4E0D\u5230\u7684\u5FAA\u73AF</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Dead Code</span>
    <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> a
  
  <span class="token comment">// return \u540E\u7684\u4EE3\u7801</span>
  a<span class="token operator">=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">unused</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;can not output&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">writeOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">unexecuted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9996\u5148\u53EA\u7B80\u5355\u7528 webpack \u6253\u5305\uFF0C\u4F1A\u539F\u6837\u8F93\u51FA\u5230 bundle \u4E2D\u3002</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../js-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./dce.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-dce&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle-dce.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u6DFB\u52A0 <code>terser-webpack-plugin</code> \u914D\u7F6E</p><div class="language-"><pre><code>module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../js-demo&#39;),
  entry: &#39;./dce.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-dce&#39;),
    filename: &#39;bundle-dce.js&#39;,
  },
+  optimization: {
+    minimize: true, // \u9ED8\u8BA4\u4F7F\u7528 terser-webpack-plugin
+  }
+ // \u6216\u8005 const TerserPlugin = reuqier(&#39;terser-webpack-plugin&#39;)
+ plugins: [
+  new TerserPlugin()
+]
}
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// bundle-dce.js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o<span class="token punctuation">,</span>n</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> c<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">;</span>c<span class="token operator">--</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u538B\u7F29\u5DE5\u5177\u7684 DCE \u529F\u80FD\u6E05\u9664\u4E86\u65E0\u7528\u7684\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F\u89E3\u6790\u4EE3\u7801\u5F97\u5230 AST(\u62BD\u8C61\u8BED\u6CD5\u6811)\uFF0C\u7136\u540E\u904D\u5386\u8BE5\u6811\u4EE5\u67E5\u627E\u672A\u4F7F\u7528\u7684\u51FD\u6570\u548C\u53D8\u91CF\uFF0C\u6700\u540E\u5C06\u8BE5\u6811\u8F6C\u6362\u56DEJavaScript\u6E90\u4EE3\u7801\u3002</p><p>DCE \u529F\u80FD\u7684\u7F3A\u70B9\u662F\u53EA\u80FD\u5BF9\u5355\u6587\u4EF6\u8FDB\u884C\u89E3\u6790\u5E76\u5904\u7406 Dead Code\u3002</p><p>\u5BF9\u4E8E\u73B0\u4EE3\u6A21\u5757\u5316\u7684 js \u4EE3\u7801\u7EC4\u7EC7\u7ED3\u6784\uFF0C\u6A21\u5757\u6587\u4EF6\u7684\u5BFC\u5165\u5BFC\u51FA\uFF0C\u540C\u6837\u5B58\u5728\u5F88\u591A\u65E0\u7528\u7684\u6A21\u5757\u5BFC\u51FA\u4EE3\u7801\u3002\u6BD4\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// math.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728\u5165\u53E3\u6587\u4EF6\u4E2D\u53EA\u4F7F\u7528\u4E86\u5176\u4E2D\u4E00\u4E2A cube \u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cube <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">cube(5) = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre></div><p>\u6211\u4EEC\u6CA1\u6709\u4ECE <code>math.js</code> \u6A21\u5757\u4E2D import \u53E6\u5916\u4E00\u4E2A <code>square</code> \u65B9\u6CD5\u3002\u8FD9\u4E2A\u51FD\u6570\u4E5F\u5C5E\u4E8E\u201C\u6B7B\u4EE3\u7801(dead code)\u201D\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u6253\u5305\u6784\u5EFA\u7ED3\u679C\u5E94\u8BE5\u5220\u9664\u6389\u672A\u88AB\u5F15\u7528\u7684 <code>export square</code>\u3002</p><p>\u4F46\u4F7F\u7528 DCE \u540C\u6837\u7684\u914D\u7F6E\uFF0C\u770B\u4E0B\u6784\u5EFA\u7ED3\u679C\u4E2D\u5E76\u6CA1\u6709\u5220\u9664 <code>square</code> \u51FD\u6570\u3002</p><p>\u800C\u8FD9\u79CD\u60C5\u5F62\u6B63\u662F <code>Tree Shaking</code> \u4F5C\u7528\u7684\u5730\u65B9\u3002</p><h2 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844903544756109319" target="_blank" rel="noopener noreferrer">Tree-Shaking\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5 - \u539F\u7406\u7BC7</a></p><p>** webpack \u4E2D\u7684 tree-shaking \u5173\u6CE8\u4E8E\u65E0\u7528\u6A21\u5757\u7684\u6D88\u9664\uFF0C\u53EF\u4EE5\u5C06\u672A\u88AB\u4F7F\u7528\u7684 exported member \u6807\u8BB0\u4E3A unused\uFF0C\u7136\u540E\u7531\u538B\u7F29\u5DE5\u5177\u6E05\u9664\u88AB\u6807\u8BC6\u4E3A unused \u65E0\u7528\u7684 exported \u4EE3\u7801\u3002 \u5305\u62EC\uFF1A1. \u90A3\u4E9B\u672A\u88AB import \u5F15\u5165\u7684 export \u4EE3\u7801\uFF1B2.\u6216\u8005 import \u4E86\u4F46\u672A\u88AB\u4F7F\u7528\u7684 export \u4EE3\u7801\u3002**</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cube <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u80FD tree shaking \u6389 math.js \u4E2D\u7684 export square</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cube<span class="token punctuation">,</span> square <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u540C\u6837\u53EF\u4EE5 tree shaking \u6389 square</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E3A\u4EC0\u4E48\u53EB-tree-shaking\uFF08\u6447\u6811\u4F18\u5316\uFF09\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u53EB Tree Shaking\uFF08\u6447\u6811\u4F18\u5316\uFF09\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u53EB-tree-shaking\uFF08\u6447\u6811\u4F18\u5316\uFF09\uFF1F" aria-hidden="true">#</a></h3><p>\u60A8\u53EF\u4EE5\u5C06\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u60F3\u8C61\u6210\u4E00\u68F5\u6811\u3002\u60A8\u5B9E\u9645\u4F7F\u7528\u7684\u6E90\u4EE3\u7801\u548C\u5E93\u8868\u793A\u6811\u7684\u7EFF\u8272\u6D3B\u53F6\u3002\u6B7B\u4EE3\u7801\u8868\u793A\u79CB\u5929\u88AB\u6811\u6728\u6D88\u8017\u7684\u8910\u8272\u67AF\u53F6\u3002\u4E3A\u4E86\u6446\u8131\u67AF\u53F6\uFF0C\u60A8\u5FC5\u987B\u6447\u6643\u6811\uFF0C\u4F7F\u5B83\u4EEC\u6389\u843D\u3002</p><p>Tree Shaking \u6700\u65E9\u7531 Rollup \u5B9E\u73B0\u5E76\u63A8\u5E7F\uFF0C\u7136\u540E webpack@2.x \u5F00\u59CB\u6B63\u5F0F\u5185\u7F6E\u652F\u63012015\u6A21\u5757\uFF0C\u548C\u5BF9\u672A\u5F15\u7528\u6A21\u5757\u7684\u68C0\u6D4B\u80FD\u529B\uFF0C\u5373 Tree Shaking \u529F\u80FD\u3002</p><h3 id="tree-shaking-\u4E0E-dce" tabindex="-1">Tree Shaking \u4E0E DCE <a class="header-anchor" href="#tree-shaking-\u4E0E-dce" aria-hidden="true">#</a></h3><p>\u6240\u4EE5 Tree Shaking \u4E5F\u5C5E\u4E8E DCE \u8303\u7574\u5185\uFF0C\u662F DCE \u7684\u53E6\u4E00\u79CD\u529F\u80FD\u5B9E\u73B0\uFF0C\u9488\u5BF9\u8DE8\u6587\u4EF6\u7684\u6A21\u5757\u5F15\u7528\u4EA7\u751F\u7684\u6B7B\u4EE3\u7801\u6E05\u9664\u3002</p><h3 id="tree-shaking-\u7684\u5B9E\u73B0\u524D\u63D0" tabindex="-1">Tree Shaking \u7684\u5B9E\u73B0\u524D\u63D0 <a class="header-anchor" href="#tree-shaking-\u7684\u5B9E\u73B0\u524D\u63D0" aria-hidden="true">#</a></h3><p>\u9879\u76EE\u6A21\u5757\u89C4\u8303\u4F7F\u7528 ES Module \u89C4\u8303\u3002\u56E0\u4E3A ES6 \u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u662F\u786E\u5B9A\u7684\uFF0C\u548C\u8FD0\u884C\u65F6\u7684\u72B6\u6001\u65E0\u5173\uFF0C\u53EF\u4EE5\u8FDB\u884C\u53EF\u9760\u7684\u9759\u6001\u5206\u6790\uFF0C\u8FD9\u5C31\u662Ftree-shaking\u7684\u57FA\u7840\u3002</p><p>\u6240\u8C13\u9759\u6001\u5206\u6790\u5C31\u662F\u4E0D\u6267\u884C\u4EE3\u7801\uFF0C\u4ECE\u5B57\u9762\u91CF\u4E0A\u5BF9\u4EE3\u7801\u8FDB\u884C\u5206\u6790\uFF0CES6\u4E4B\u524D\u7684\u6A21\u5757\u5316\u89C4\u8303\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E38\u7528\u7684 CommonJS \u89C4\u8303\u53EF\u4EE5\u52A8\u6001 require \u4E00\u4E2A\u6A21\u5757\uFF0C\u6B64\u65F6\u53EA\u6709\u6267\u884C\u540E\u624D\u77E5\u9053\u5F15\u7528\u4E86\u4EC0\u4E48\u6A21\u5757\uFF0C\u8FD9\u4E2A\u5C31\u4E0D\u80FD\u901A\u8FC7\u9759\u6001\u5206\u6790\u53BB\u505A\u4F18\u5316\u3002\u8FD9\u662F ES Module \u5728\u8BBE\u8BA1\u65F6\u7684\u4E00\u4E2A\u91CD\u8981\u8003\u91CF\uFF0C\u4E5F\u662F\u4E3A\u4EC0\u4E48 rollup \u548C webpack 2 \u90FD\u8981\u7528 ES module syntax \u624D\u80FD tree-shaking\u3002</p><blockquote><p>ES6 module \u7279\u70B9\uFF1A</p><ul><li>\u53EA\u80FD\u4F5C\u4E3A\u6A21\u5757\u9876\u5C42\u7684\u8BED\u53E5\u51FA\u73B0</li><li>import \u7684\u6A21\u5757\u540D\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u5E38\u91CF</li><li>import binding \u662F immutable(\u4E0D\u53EF\u53D8\u7684)</li></ul></blockquote><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u5165\u5E76\u8D4B\u503C\u7ED9 JavaScript \u5BF9\u8C61\uFF0C\u7136\u540E\u5728\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\u88AB\u7528\u5230\uFF0C\u8FD9\u4F1A\u88AB\u770B\u4F5C\u201C\u6D3B\u201D\u4EE3\u7801\uFF0C\u4E0D\u4F1A\u505A tree-shaking</span>
<span class="token keyword">import</span> Stuff <span class="token keyword">from</span> <span class="token string">&#39;./stuff&#39;</span><span class="token punctuation">;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span>Stuff<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFC\u5165\u5E76\u8D4B\u503C\u7ED9 JavaScript \u5BF9\u8C61\uFF0C\u4F46\u5728\u63A5\u4E0B\u6765\u7684\u4EE3\u7801\u91CC\u6CA1\u6709\u7528\u5230\uFF0C\u8FD9\u5C31\u4F1A\u88AB\u5F53\u505A\u201C\u6B7B\u201D\u4EE3\u7801\uFF0C\u4F1A\u88AB tree-shaking</span>
<span class="token keyword">import</span> Stuff <span class="token keyword">from</span> <span class="token string">&#39;./stuff&#39;</span><span class="token punctuation">;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5177\u540D\u5BFC\u5165\uFF0Cbar \u5BFC\u5165\u4F46\u672A\u4F7F\u7528\u7684\u4F1A\u88AB tree-shaking</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stuff&#39;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BFC\u5165\u4F46\u6CA1\u6709\u8D4B\u503C\u7ED9 JavaScript \u5BF9\u8C61\uFF0C\u4E5F\u6CA1\u6709\u5728\u4EE3\u7801\u91CC\u7528\u5230\uFF0C\u8FD9\u4F1A\u88AB\u5F53\u505A\u201C\u6B7B\u201D\u4EE3\u7801\uFF0C\u4F1A\u88AB tree-shaking</span>
<span class="token keyword">import</span> <span class="token string">&#39;./stuff&#39;</span><span class="token punctuation">;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BFC\u5165\u6574\u4E2A\u5E93\uFF0C\u4F46\u662F\u6CA1\u6709\u8D4B\u503C\u7ED9 JavaScript \u5BF9\u8C61\uFF0C\u4E5F\u6CA1\u6709\u5728\u4EE3\u7801\u91CC\u7528\u5230</span>
<span class="token comment">// \u975E\u5E38\u5947\u602A\uFF0C\u8FD9\u7ADF\u7136\u88AB\u5F53\u505A\u201C\u6D3B\u201D\u4EE3\u7801\uFF0C\u56E0\u4E3A Webpack \u5BF9\u5E93\u7684\u5BFC\u5165\u548C\u672C\u5730\u4EE3\u7801\u5BFC\u5165\u7684\u5904\u7406\u65B9\u5F0F\u4E0D\u540C\u3002</span>
<span class="token keyword">import</span> <span class="token string">&#39;my-lib&#39;</span><span class="token punctuation">;</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="tree-shaking\u7684\u5B9E\u73B0" tabindex="-1">Tree-shaking\u7684\u5B9E\u73B0 <a class="header-anchor" href="#tree-shaking\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F7F\u7528\u7684 webpack@4 \u53EA\u9700\u8981\u5C06 <code>mode: production</code>\uFF0C\u5373\u53EF\u5F00\u542Ftree-shaking\u3002</p><p>\u5982\u679C\u4F7F\u7528\u7684\u662F webpack@2 \u53EF\u80FD\u4F60\u4F1A\u53D1\u73B0tree-shaking \u5E76\u4E0D\u8D77\u4F5C\u7528\uFF0C\u56E0\u4E3A Babel \u9ED8\u8BA4\u4F1A\u5C06\u4EE3\u7801\u7F16\u8BD1\u6210Commonjs\u6A21\u5757\u3002\u800Ctree-shaking \u7684\u5B9E\u73B0\u9700\u8981\u57FA\u4E8E ES Module</p><p>\u6240\u4EE5\u901A\u5E38\u5728\u4F7F\u7528\u4E86 babel \u914D\u7F6E\u7684\u9879\u76EE\u5DE5\u7A0B\u65F6\uFF0C\u9700\u8981\u7981\u7528 Babel \u9ED8\u8BA4\u7684\u5C06ES6\u6A21\u5757\u8F6C\u6362\u4E3ACommonJS\u6A21\u5757\u7684\u529F\u80FD</p><ol><li>\u786E\u4FDD\u9879\u76EE\u4EE3\u7801\u57FA\u4E8E ES Module 1.1. \u786E\u4FDD Babel \u8F6C\u6362\u7ED3\u679C\u4E3A ES Module\u3002</li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.m?js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6B64 options \u4E5F\u53EF\u4EE5\u5728 babel.config.js \u4E2D\u914D\u7F6E</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6216\u8005 babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;[@babel/preset-env]&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>1.2 \u5BFC\u5165 ES Module \u89C4\u8303\u7684\u5E93</p><p>\u6BD4\u5982 <code>lodash</code> \u662F\u57FA\u4E8E CommonJS \u89C4\u8303\u7684\u5E93\uFF0C\u65E0\u6CD5 Tree Shaking\uFF0C\u4F7F\u7528\u5BF9\u5E94\u7684 ES Module \u89C4\u8303\u7684\u5E93 <code>lodash-es</code>\u3002</p><p>\u6216\u8005\u4F7F\u7528 package.json \u4E2D\u63D0\u4F9B\u4E86 <code>moudle</code> \u5C5E\u6027\u7684\u5E93\u3002</p><ol start="2"><li>\u5F00\u542F\u4F18\u5316\u9009\u9879 \u201CusedExports\u201D \u8BBE\u7F6E\u4E3Atrue\u3002</li></ol><p>\u8FD9\u610F\u5473\u7740\u544A\u8BC9 Webpack \u8BC6\u522B\u51FA\u5DF2\u4F7F\u7528\u7684\u548C\u6CA1\u6709\u88AB\u4F7F\u7528\u7684 exports \u4EE3\u7801\uFF0C\u5E76\u5728\u6700\u521D\u7684\u6253\u5305\u6B65\u9AA4\u4E2D\u7ED9\u5B83\u505A\u6807\u8BB0\uFF0C\u4EE5\u4F7F\u5728 Terser \u9636\u6BB5\u5B9E\u73B0 Tree Shaking \u6E05\u9664\u3002</p><div class="language-js"><pre><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../js-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./dce-module.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-dce&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle-dce-module-usedExports.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u672A\u5F00\u542F <code>optimization.usedExports</code> \u7684\u6784\u5EFA\u7ED3\u679C\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/******/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token comment">/******/</span> 	<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/******/</span> 	<span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
<span class="token comment">/* 0 */</span><span class="token punctuation">,</span>
<span class="token comment">/* 1 */</span>
<span class="token comment">/***/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">__unused_webpack_module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

__webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* harmony export */</span> __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token comment">/* harmony export */</span>   <span class="token string">&quot;square&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token comment">/* binding */</span> square<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">/* harmony export */</span>   <span class="token string">&quot;cube&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token comment">/* binding */</span> cube<span class="token punctuation">)</span>
<span class="token comment">/* harmony export */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/******/</span> 	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>

</code></pre></div><p>\u5F00\u542F <code>optimization.usedExports</code> \u7684\u6784\u5EFA\uFF1A</p><div class="language-"><pre><code> module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../js-demo&#39;),
  entry: &#39;./dce-module.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-dce&#39;),
    filename: &#39;bundle-dce-module-usedExports.js&#39;,
  },
+  optimization: {
+    usedExports: true,
+  }
}
</code></pre></div><div class="language-js"><pre><code><span class="token comment">/******/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token comment">/******/</span> 	<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/******/</span> 	<span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
<span class="token comment">/* 0 */</span><span class="token punctuation">,</span>
<span class="token comment">/* 1 */</span>
<span class="token comment">/***/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">__unused_webpack_module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token comment">/* harmony export */</span> __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token comment">/* harmony export */</span>   <span class="token string">&quot;cube&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token comment">/* binding */</span> cube<span class="token punctuation">)</span>
<span class="token comment">/* harmony export */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* unused harmony export square */</span>
<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/******/</span> 	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7701\u7565\u4EE3\u7801....</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u524D\u540E\u5BF9 <code>square</code> \u7684\u6CE8\u91CA\u53D8\u5316\uFF0C\u6700\u5173\u952E\u7684\u6CE8\u91CA\u6807\u8BC6\uFF1A<code>/* unused harmony export square */</code></p><p>\u6B64\u65F6\uFF0C\u5F00\u542F\u538B\u7F29\u9009\u9879 <code>optimization.minimize: true</code>\uFF0C\u53EF\u4EE5\u770B\u5230\u6784\u5EFA\u7ED3\u679C\u4E2D\u5DF2\u7ECF\u6CA1\u6709 <code>square</code> \u76F8\u5173\u4EE3\u7801\u4E86\u3002</p><h3 id="tree-shaking-\u5BF9\u7C7B\u4E2D\u53D8\u91CF\u548C\u65B9\u6CD5\u7684\u6548\u679C" tabindex="-1">Tree Shaking \u5BF9\u7C7B\u4E2D\u53D8\u91CF\u548C\u65B9\u6CD5\u7684\u6548\u679C <a class="header-anchor" href="#tree-shaking-\u5BF9\u7C7B\u4E2D\u53D8\u91CF\u548C\u65B9\u6CD5\u7684\u6548\u679C" aria-hidden="true">#</a></h3><p>Tree Shaking \u5BF9 export \u7684\u9879\u5C42\u51FD\u6570\u548C\u53D8\u91CF\u6548\u679C\u5DF2\u5728\u4E0A\u4F8B\u4E2D\u5B9E\u73B0\u3002\u4F46\u5728 webpack@4.x \u4E2D\uFF0C\u5BF9\u5BFC\u5165\u4F46\u672A\u4F7F\u7528\u7684\u7C7B\uFF0CTree Shaking \u662F\u6CA1\u6709\u6548\u679C\u7684\u3002\u4F46\u5728 webpack@5.x \u7248\u672C\uFF0CTree Shaking \u5BF9\u672A\u4F7F\u7528\u7684\u7C7B\u4EE3\u7801\u662F\u6709\u6548\u7684\u3002</p><blockquote><p>\u6240\u4EE5 <a href="https://juejin.cn/post/6844903544756109319" target="_blank" rel="noopener noreferrer">Tree-Shaking\u6027\u80FD\u4F18\u5316\u5B9E\u8DF5 - \u539F\u7406\u7BC7</a>\u4E2D\u5BF9\u7C7B\u7684\u6D88\u9664\u5B9E\u9A8C\u7ED3\u679C\u5DF2\u4E0D\u6B63\u786E\u3002</p></blockquote><div class="language-js"><pre><code><span class="token comment">// classMethod.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">===</span> <span class="token string">&#39;block&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// entry-class.js</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&#39;./classMethod.js&#39;</span> <span class="token comment">// \u5BFC\u5165\u7C7B\uFF0C\u4F46\u672A\u4F7F\u7528\uFF0Cwebpack@5.x tree shaking \u751F\u6548</span>

<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack tree shaking class method&#39;</span>

  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../js-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./entry-class.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="sideeffects-\u526F\u4F5C\u7528" tabindex="-1">sideEffects \u526F\u4F5C\u7528 <a class="header-anchor" href="#sideeffects-\u526F\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u662F\u526F\u4F5C\u7528\uFF1F</p><p>\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\uFF0C\u526F\u4F5C\u7528\u6982\u5FF5\u4E0E\u7EAF\u51FD\u6570\u90E8\u5206\u5BF9\u5E94\uFF0C\u526F\u4F5C\u7528\u662F\u6307\u5F53\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u9664\u4E86\u8FD4\u56DE\u51FD\u6570\u503C\u4E4B\u5916\uFF0C\u8FD8\u5BF9\u51FD\u6570\u8C03\u7528\u8005\u4EA7\u751F\u9644\u52A0\u7684\u5F71\u54CD\uFF0C\u6216\u8005\u8BF4\u5BF9\u5F53\u524D\u51FD\u6570\u4F5C\u7528\u57DF\u4E4B\u5916\u7684\u8303\u56F4\u4EA7\u751F\u4E86\u9644\u52A0\u7684\u5F71\u54CD\u3002\u4F8B\u5982\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\uFF08\u51FD\u6570\u5916\u7684\u53D8\u91CF\uFF09\u6216\u4FEE\u6539\u53C2\u6570\u3002</p><p>\u5BF9\u4E8E\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u7684 JS \u6765\u8BB2\uFF0C\u526F\u4F5C\u7528\u5305\u62EC\u4E14\u4E0D\u9650\u4E8E</p><ul><li>console.log()</li><li>\u64CD\u4F5C DOM</li><li>http \u8BF7\u6C42</li><li>\u4FEE\u6539\u5168\u5C40\u53D8\u91CF</li><li>...</li></ul><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5C3D\u7BA1\u88AB\u53EB\u505A\u526F\u4F5C\u7528\uFF0C\u4F46\u662F\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u526F\u4F5C\u7528\u5374\u662F\u6211\u4EEC\u7A0B\u5E8F\u7684\u76EE\u7684\u6240\u5728\u3002\u6240\u4EE5\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\uFF0C\u539F\u5219\u4E0A\u5E76\u4E0D\u7981\u6B62\u526F\u4F5C\u7528\uFF0C\u800C\u662F\u63D0\u5021&quot;\u4F18\u96C5\u7684&quot;\u5904\u7406\u526F\u4F5C\u7528\u3002</p><p>Webpack@4 \u7248\u672C\u5BF9 Tree Shaking \u529F\u80FD\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>sideEffects</code> \u5C5E\u6027\u5411\u7F16\u8BD1\u5668\u63D0\u4F9B\u63D0\u793A\uFF0C\u4EE5\u6307\u793A\u9879\u76EE\u4E2D\u7684\u54EA\u4E9B\u6587\u4EF6\u662F\u201C\u7EAF\u7684\uFF08Prue)\uFF0C\u5373\u65E0\u526F\u4F5C\u7528\u7684\u201D\u548C&quot;\u6709\u526F\u4F5C\u7528\u7684&quot;\uFF0C\u5BF9\u4E8E\u7EAF\u7684\u4EE3\u7801\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528\u5B83\u4EEC\u5C31\u53EF\u4EE5\u5B89\u5168\u8FDB\u884C Tree Shaking\uFF1B\u5982\u679C\u6807\u8BC6\u8FD9\u6BB5\u4EE3\u7801\u662F\u6709\u526F\u4F5C\u7528\u7684\uFF0C\u5219 Tree Shaking \u5BF9\u5176\u4E0D\u751F\u6548\u3002</p><p>\u6BD4\u5982\u5E38\u89C1\u7684\u4E24\u79CD\u60C5\u5F62\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;/path/to/global.css&#39;</span> <span class="token comment">// \u6837\u5F0F\u5BFC\u5165</span>
<span class="token keyword">import</span> <span class="token string">&#39;@babel/polly-fill&#39;</span> <span class="token comment">// ployfill \u5BFC\u5165</span>
</code></pre></div><p>\u5982\u679C\u5F00\u542F Tree Shaking\uFF0C\u9ED8\u8BA4\u4E5F\u4F1A\u5BF9\u4EE5\u4E0A\u4E24\u79CD\u5BFC\u5165\u751F\u6548\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u663E\u7136\u5220\u9664\u8FD9\u79CD\u5BFC\u5165\u4EE3\u7801\u540E\uFF0C\u4F1A\u5BF9\u5E94\u7528\u7A0B\u5E8F\u4EA7\u751F\u526F\u4F5C\u7528\u3002</p><p>\u6240\u4EE5\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BBE\u7F6E <code>optimization.sideEffects: true</code>\uFF0C\u544A\u8BC9 webpack \u53BB\u89E3\u6790 package.json \u4E2D <code>sideEffects</code> \u5C5E\u6027\uFF0C\u6307\u793A Terser \u8FD9\u7C7B\u538B\u7F29\u5668\u4E0D\u8981\u5BF9\u8FD9\u4E9B\u6A21\u5757\u8FDB\u884C tree shaking\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6240\u6709\u6587\u4EF6\u90FD\u6709\u526F\u4F5C\u7528\uFF0C\u5168\u90FD\u4E0D\u53EF tree-shaking</span>
<span class="token punctuation">{</span>
 <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CA1\u6709\u6587\u4EF6\u6709\u526F\u4F5C\u7528\uFF0C\u5168\u90FD\u53EF\u4EE5 tree-shaking</span>
<span class="token punctuation">{</span>
 <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53EA\u6709\u8FD9\u4E9B\u6587\u4EF6\u6709\u526F\u4F5C\u7528\uFF0C\u6240\u6709\u5176\u4ED6\u6587\u4EF6\u90FD\u53EF\u4EE5 tree-shaking\uFF0C\u4F46\u4F1A\u4FDD\u7559\u8FD9\u4E9B\u6587\u4EF6</span>
<span class="token punctuation">{</span>
 <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;/src/**/*.css&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;@babel/polly-fill&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u4E8E\u67D0\u4E9B\u7C7B\u578B\u7684\u6A21\u5757\u5982\u679C\u8981\u6307\u5B9A\u526F\u4F5C\u7528\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>module.rule.sideEffects</code> \u5C5E\u6027\u914D\u7F6E\u526F\u4F5C\u7528\u3002</p><div class="language-js"><pre><code><span class="token comment">// import &#39;/path/to/xx.css&#39; \u6307\u5B9A\u6837\u5F0F\u5BFC\u5165\u5177\u6709\u526F\u4F5C\u7528\uFF0C\u4E0D\u5E94\u7528 tree shaking \u529F\u80FD</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sytle-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sideEffects</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// global.js</span>
<span class="token keyword">const</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span>
ele<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;this is append by import&#39;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span>
</code></pre></div><div class="language-css"><pre><code><span class="token comment">/* index.css */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// entry-side-effect.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./global.js&#39;</span>
<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack tree shaking side effect&#39;</span>

  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-html"><pre><code><span class="token comment">&lt;!-- index.html --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>tree shaking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./bundle-side-effect/bundle-tree-shaking.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8BBE\u7F6E\u9879\u76EE\u6839\u76EE\u5F55 package.json \u4E2D\u6DFB\u52A0:</p><div class="language-json"><pre><code><span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../js-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./entry-side-effect.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-side-effect&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle-tree-shaking.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sideEffects</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542F\u5BF9 package.json \u4E2D sideEffects \u5C5E\u6027\u7684\u89E3\u6790</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u6253\u5F00 html \u6587\u4EF6\uFF0C\u53D1\u73B0 <code>index.css</code> \u548C <code>global.js</code> \u90FD\u6CA1\u6709\u751F\u6548\u3002\u5373 tree shaking \u529F\u80FD\u5BF9 <code>import &#39;./index.css&#39;; import &#39;./global.js&#39;</code> \u8BED\u53E5\u751F\u6548\uFF0C\u4F7F\u5F97\u5176\u4EE3\u7801\u90FD\u88AB\u6E05\u9664\u4E86\u3002</p><p>\u5982\u679C\u8981\u6307\u660E\u8FD9\u4E24\u4E2A\u6587\u4EF6\u5177\u6709\u526F\u4F5C\u7528\uFF0C\u4F7F\u5F97 tree shaking \u5BF9\u5176\u4E0D\u751F\u6548\u3002\u53EF\u4EE5\u5728\u4FEE\u6539 package.json \u4E2D sideEffects \u5C5E\u6027\u3002</p><div class="language-"><pre><code>- &quot;sideEffects&quot;: false,
+&quot;sideEffects&quot;: [
+  &quot;*.css&quot;,
+  &quot;**/*/global.js&quot;,
+]
</code></pre></div><p>\u6216\u8005\u5BF9\u5176\u4E2D\u6837\u5F0F\u6587\u4EF6\u7684\u526F\u4F5C\u7528\u58F0\u660E\u6539\u4E3A\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-"><pre><code>// webapck.config.js
module: {
  rules: [
    {
      test: /\\.css$/i,
      use: [
        &#39;style-loader&#39;,
        &#39;css-loader&#39;
      ],
+       sideEffects: true,        
    },
  ]
},

// package.json
+&quot;sideEffects&quot;: [
+  &quot;**/*/global.js&quot;,
+]
</code></pre></div><h2 id="scope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347" tabindex="-1">scope hoisting \u4F5C\u7528\u57DF\u63D0\u5347 <a class="header-anchor" href="#scope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347" aria-hidden="true">#</a></h2><p><code>Scope Hoisting</code> \u662F webpack@3.x \u7684\u65B0\u529F\u80FD\uFF0C\u76F4\u8BD1\u4E3A <strong>\u4F5C\u7528\u57DF\u63D0\u5347</strong>\u3002</p><p>\u5728 JavaScript \u4E2D\uFF0C\u8FD8\u6709\u201C\u53D8\u91CF\u63D0\u5347\u201D\u548C\u201C\u51FD\u6570\u63D0\u5347\u201D\uFF0CJavaScript \u4F1A\u5C06\u53D8\u91CF\u548C\u51FD\u6570\u7684\u58F0\u660E\u63D0\u5347\u5230\u5F53\u524D\u4F5C\u7528\u57DF\u9876\u90E8\uFF0C\u800C\u201C\u4F5C\u7528\u57DF\u63D0\u5347\u201D\u4E5F\u7C7B\u4F3C\uFF0Cwebpack \u5C06\u5F15\u5165\u5230 JS \u6587\u4EF6\u201C\u63D0\u5347\u5230\u201D\u5B83\u7684\u5F15\u5165\u8005\u7684\u9876\u90E8\u3002</p><div class="language-js"><pre><code><span class="token comment">// math.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// entry-scope-hositing.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cube <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cube(5) = &#39;</span> <span class="token operator">+</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../js-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./entry-scope-hositing.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-scope-hositing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6253\u5305\u7ED3\u679C</p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token comment">/* 0 */</span><span class="token punctuation">,</span>
  <span class="token comment">/* 1 */</span>
  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">__unused_webpack_module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      __webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">/* harmony export */</span> __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">/* harmony export */</span>   <span class="token string">&quot;cube&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token comment">/* binding */</span> cube<span class="token punctuation">)</span>
      <span class="token comment">/* harmony export */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7701\u7565 webpack \u8FD0\u884C\u65F6\u6CE8\u5165\u4EE3\u7801</span>

<span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
__webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* harmony import */</span> <span class="token keyword">var</span> _math_js__WEBPACK_IMPORTED_MODULE_0__ <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cube(5) = &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>_math_js__WEBPACK_IMPORTED_MODULE_0__<span class="token punctuation">.</span>cube<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u95EE\u9898" tabindex="-1">\u95EE\u9898 <a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cwebpack \u6253\u5305\u6784\u5EFA\u540E\uFF0C\u5C06\u4F9D\u8D56\u7684\u5404\u4E2A\u6A21\u5757\u5305\u88F9\u5230\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570\u4E2D\uFF0C\u5E76\u5B58\u653E\u5728<code>__webpack_modules__</code>\u6570\u7EC4\u4E2D\u3002\u5982\u679C\u4E00\u4E2A\u590D\u6742\u9879\u76EE\u5B58\u5728\u5F88\u591A\u6A21\u5757\u4F9D\u8D56\uFF0C\u5C31\u4F1A\u5B58\u5728\u5927\u91CF\u51FD\u6570\u58F0\u660E\u3002\u8FD9\u4F1A\u5BFC\u81F4\u5982\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u2F24\u91CF\u4F5C\u7528\u57DF\u5305\u88F9\u4EE3\u7801\uFF0C\u5BFC\u81F4\u4F53\u79EF\u589E\u5927\uFF08\u6A21\u5757\u8D8A\u591A\u8D8A\u660E\u663E\uFF09</li><li>\u8FD0\u884C\u4EE3\u7801\u65F6\u521B\u5EFA\u7684\u51FD\u6570\u4F5C\u2F64\u57DF\u53D8\u591A\uFF0C\u5185\u5B58\u5F00\u9500\u53D8\u5927</li></ul><h3 id="\u89E3\u51B3\u65B9\u6848\uFF1Ascope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347" tabindex="-1">\u89E3\u51B3\u65B9\u6848\uFF1Ascope hoisting \u4F5C\u7528\u57DF\u63D0\u5347 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848\uFF1Ascope-hoisting-\u4F5C\u7528\u57DF\u63D0\u5347" aria-hidden="true">#</a></h3><p>\u624B\u52A8\u5F00\u542F scope hoisting \u529F\u80FD</p><blockquote><p>webpack \u751F\u4EA7\u6784\u5EFA\u65F6\u9ED8\u8BA4\u5F00\u542F\u3002</p></blockquote><div class="language-js"><pre><code><span class="token comment">// webpack@3 \u9700\u8981\u6DFB\u52A0\u8FD9\u4E2A\u63D2\u4EF6</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token comment">// webpack@4 \u53EA\u9700\u8981\u8BBE\u7F6E\u4F18\u5316\u9009\u9879 concatenateModules: true \u5F00\u542F\u4F5C\u7528\u57DF\u63D0\u5347\uFF0C\u5185\u90E8\u4E5F\u662F\u542F\u7528 ModuleConcatenationPlugin \u63D2\u4EF6\u3002</span>
<span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">concatenateModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4EE3\u7801</p><div class="language-"><pre><code>module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../js-demo&#39;),
  entry: &#39;./entry-scope-hositing.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-scope-hositing&#39;),
-    filename: &#39;bundle.js&#39;,
+    filename: &#39;bundle-scope-hositing.js&#39;,
  },
+ optimization: {
+    concatenateModules: true,
+  }
}
</code></pre></div><p>\u6784\u5EFA\u7ED3\u679C</p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
	<span class="token comment">// The require scope</span>
	<span class="token keyword">var</span> __webpack_require__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	
<span class="token comment">// \u7701\u7565 webpack \u8FD0\u884C\u65F6\u4EE3\u7801</span>

<span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// ESM COMPAT FLAG</span>
__webpack_require__<span class="token punctuation">.</span><span class="token function">r</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">;</span><span class="token comment">// CONCATENATED MODULE: ./math.js</span>
<span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">;</span><span class="token comment">// CONCATENATED MODULE: ./entry-scope-hositing.js</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cube(5) = &#39;</span> <span class="token operator">+</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5F00\u542F\u4E86 <code>scope hositing</code> \u529F\u80FD\u540E\uFF0C\u6784\u5EFA\u7ED3\u679C\u4E2D\uFF0C\u5C06\u4F9D\u8D56\u6A21\u5757\u7684\u4EE3\u7801\u76F4\u63A5\u5185\u8054\u5230\u4E86\u5165\u53E3\u6A21\u5757\u7684\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u3002\u8FD9\u6837\u901A\u8FC7 scope hoisting \u53EF\u4EE5\u51CF\u5C11\u51FD\u6570\u58F0\u660E\u4EE3\u7801\u548C\u5185\u5B58\u5F00\u9500\uFF0C\u8BA9 webpack \u6253\u5305\u51FA\u6765\u7684\u4EE3\u7801\u6587\u4EF6\u66F4\u5C0F\uFF0C\u8FD0\u884C\u66F4\u5FEB\u3002</p><h3 id="scope-hositing-\u539F\u7406\u548C\u524D\u63D0\u6761\u4EF6" tabindex="-1">scope hositing \u539F\u7406\u548C\u524D\u63D0\u6761\u4EF6 <a class="header-anchor" href="#scope-hositing-\u539F\u7406\u548C\u524D\u63D0\u6761\u4EF6" aria-hidden="true">#</a></h3><p>scope hoisting \u4F5C\u7528\u57DF\u63D0\u5347\u539F\u7406\uFF1A\u5C06\u6240\u6709\u6A21\u5757\u7684\u4EE3\u7801\u6309\u7167\u5F15\u7528\u987A\u5E8F\u653E\u5728\u2F00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u91CC\uFF0C\u7136\u540E\u9002\u5F53\u7684\u91CD\u547D\u540D\u2F00\u4E9B\u53D8\u91CF\u4EE5\u9632\u6B62\u53D8\u91CF\u540D\u51B2\u7A81\u3002</p><p>\u800C\u80FD\u5B9E\u73B0\u6B64\u64CD\u4F5C\u7684\u524D\u63D0\u662F\uFF0C\u9879\u76EE\u4F7F\u7528 ES Module \u6A21\u5757\u89C4\u8303\u3002\u56E0\u4E3AES Module \u6A21\u5757\u89C4\u8303\u7684\u8BED\u6CD5\u7279\u70B9\uFF1A</p><ul><li>import \u548C export \u5173\u952E\u5B57\u5FC5\u987B\u5728\u9876\u5C42</li><li>\u6A21\u5757\u8DEF\u5F84\u53EA\u80FD\u7528\u5B57\u7B26\u4E32\u5B57\u9762\u91CF</li></ul><p>\u8FD9\u79CD\u201C\u5F3A\u5236\u9759\u6001\u5316\u201D\u7684\u505A\u6CD5\u4F7F\u4EE3\u7801\u5728\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u80FD\u57FA\u4E8E\u6B64\uFF0C\u80FD\u5728\u7F16\u8BD1\u65F6\u5BF9\u6A21\u5757\u4F9D\u8D56\u8FDB\u884C\u4E0A\u8FF0\u4F5C\u7528\u57DF\u63D0\u5347\u7684\u64CD\u4F5C\u3002</p><h3 id="\u5C40\u9650\u6027" tabindex="-1">\u5C40\u9650\u6027 <a class="header-anchor" href="#\u5C40\u9650\u6027" aria-hidden="true">#</a></h3><p>webpack \u4F1A\u5C1D\u8BD5\u5B9E\u73B0\u4F5C\u7528\u57DF\u63D0\u5347\uFF0C\u5C06\u6A21\u5757\u5408\u5E76\u5230\u5355\u4E2A\u4F5C\u7528\u57DF\u4E2D\u3002\u4F46\u4E0D\u80FD\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u8FD9\u6837\u505A\uFF0C\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C webpack \u65E0\u6CD5\u5B9E\u73B0 scope hositing\uFF0C\u5C31\u4F1A\u964D\u7EA7\u5904\u7406\u6210\u9ED8\u8BA4\u7684\u5355\u4E2A\u51FD\u6570\u58F0\u660E\u7684\u5F62\u5F0F\u3002</p><p>\u6BD4\u5982\u4EE5\u4E0B\u60C5\u51B5\uFF0C\u5177\u4F53\u89C1\u5B98\u7F51\u4E2D <a href="https://webpack.js.org/plugins/module-concatenation-plugin/#optimization-bailouts" target="_blank" rel="noopener noreferrer">module-concatenation-plugin</a>\u63D2\u4EF6\u8BF4\u660E</p><ul><li>\u4F7F\u7528\u4E86 ProvidePlugin</li><li>\u4F7F\u7528\u4E86 eval() \u51FD\u6570</li><li>\u4F60\u7684\u9879\u76EE\u6709\u591A\u4E2A entry</li><li>\u5F02\u6B65\u52A0\u8F7D\u7684\u6A21\u5757</li><li>\u975E\u5165\u53E3\u52A0\u8F7D\u6A21\u5757</li><li>\u5F00\u542F\u4E86 HMR</li><li>\u975E ES Module \u6A21\u5757\u89C4\u8303</li></ul><p>\u5982\u679C\u9879\u76EE\u5F00\u542F\u4E86\u4F5C\u7528\u57DF\u63D0\u5347\uFF0C\u4F46\u672A\u751F\u6548\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570<code>-display-optimization-bailout</code>\u67E5\u770B\u8F93\u51FA\u7684\u539F\u56E0</p><div class="language-js"><pre><code>webpack <span class="token operator">--</span>display<span class="token operator">-</span>optimization<span class="token operator">-</span>bailout
</code></pre></div><p>\u8003\u8651\u5230 Scope Hoisting \u4F9D\u8D56\u6E90\u7801\u9700\u91C7\u7528 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\uFF0C\u4F46\u73B0\u4EE3\u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5E93\u4F1A\u540C\u65F6\u6784\u5EFA\u63D0\u4F9B ES6 \u6A21\u5757\u5316\u7684\u4EE3\u7801\uFF0C\u5165\u53E3\u6587\u4EF6\u7531 package.json \u4E2D\u7684 module \u5C5E\u6027\u63D0\u4F9B\u3002\u6240\u4EE5\u4E3A\u4E86\u5145\u5206\u53D1\u6325 Scope Hoisting \u7684\u4F5C\u7528\uFF0C\u53EF\u4EE5\u589E\u52A0\u4EE5\u4E0B\u6A21\u5757\u89E3\u6790\u7684\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9488\u5BF9 Npm \u4E2D\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u4F18\u5148\u91C7\u7528 module \u5C5E\u6027\u6307\u5411\u7684\u7B26\u5408 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\u7684\u6587\u4EF6</span>
    <span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u76EE\u524D pkg.module \u8FD8\u53EA\u662F\u4E00\u4E2A\u63D0\u6848\uFF0C\u5E76\u4E0D\u662F package.json \u6587\u4EF6\u6807\u51C6\u683C\u5F0F\u7684\u4E00\u90E8\u5206\u3002\u4F46\u5B83\u6781\u6709\u53EF\u80FD\u4F1A\u6210\u4E3A\u6807\u51C6\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u4E3A\u5B83\u76EE\u524D\u5DF2\u7ECF\u662F\u4E8B\u5B9E\u4E0A\u7684\u6807\u51C6\u4E86\uFF08\u6700\u65E9\u7531 Rollup\u63D0\u51FA\uFF0CWebpack\u4E5F\u5DF2\u652F\u6301\uFF09\u3002 main : \u5B9A\u4E49\u4E86 npm \u5305\u7684\u5165\u53E3\u6587\u4EF6\uFF0Cbrowser \u73AF\u5883\u548C node \u73AF\u5883\u5747\u53EF\u4F7F\u7528 module : \u5B9A\u4E49 npm \u5305\u7684 ESM \u89C4\u8303\u7684\u5165\u53E3\u6587\u4EF6\uFF0Cbrowser \u73AF\u5883\u548C node \u73AF\u5883\u5747\u53EF\u4F7F\u7528 browser : \u5B9A\u4E49 npm \u5305\u5728 browser \u73AF\u5883\u4E0B\u7684\u5165\u53E3\u6587\u4EF6</p></blockquote><h2 id="\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u548C\u6301\u4E45\u7F13\u5B58" tabindex="-1">\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u548C\u6301\u4E45\u7F13\u5B58 <a class="header-anchor" href="#\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u548C\u6301\u4E45\u7F13\u5B58" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662F\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9-hash" tabindex="-1">\u4EC0\u4E48\u662F\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9 hash <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9-hash" aria-hidden="true">#</a></h3><ul><li><code>hash</code>\uFF0C\u4E2D\u6587\u8BD1\u4F5C\u54C8\u5E0C\u6216\u6563\u5217\u3002</li><li>Webpack \u5728\u6784\u5EFA\u65F6\u4F1A\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u8BA1\u7B97\u51FA\u4E00\u4E2A\u7279\u6B8A\u7684\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u7684\u5C31\u662F<strong>hash\u7B97\u6CD5</strong>\uFF0C\u8FD9\u4E2A\u7279\u6B8A\u5B57\u7B26\u4E32\u4E00\u822C\u53EB\u505A<strong>hash\u503C</strong>\u3002</li><li>\u9ED8\u8BA4 hash \u503C\u957F\u5EA6\u6709 20 \u4F4D\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u53EF\u4EE5\u901A\u8FC7 <code>[hash:n]</code> \u5F62\u5F0F\u6307\u5B9A\u622A\u53D6 n \u4F4D\u3002\u4E00\u822C\u53D6\u524D\u516B\u4F4D<code>[hash:8]</code>\uFF0C\u56E0\u4E3A hash \u7B97\u6CD5\u8BA1\u7B97\u51FA hash \u503C\u7684\u524D\u516B\u4F4D\u57FA\u672C\u53EF\u4EE5\u4FDD\u8BC1\u552F\u4E00\u6027\u4E86\u3002</li></ul><p>\u5728 Webpack \u7684\u4F53\u7CFB\u4E2D\uFF0C\u9664\u4E86\u6709<code>hash</code>\uFF0C\u8FD8\u6709<code>chunkhash</code>\u548C<code>contenthash</code>\uFF0C\u8FD9\u4E09\u8005\u6709\u4EC0\u4E48\u4E0D\u540C\u5462\uFF1F</p><p>\u9996\u5148\uFF0C<code>hash</code>\u3001<code>chunkhash</code>\u548C<code>contenthash</code>\u8FD9\u4E09\u8005\u90FD\u662F\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u4F7F\u7528 hash \u7B97\u6CD5\u8BA1\u7B97\u51FA\u7684hash\u503C\uFF0C\u533A\u522B\u5728\u4E8E\u5B83\u4EEC\u6240\u8BA1\u7B97\u7684\u6587\u4EF6\u8303\u56F4\u4E0D\u4E00\u6837\u3002</p><ul><li>hash\uFF1A\u5728 webpack \u4E00\u6B21\u6784\u5EFA\u4E2D\u4F1A\u4EA7\u751F\u4E00\u4E2A compilation \u5BF9\u8C61\uFF0C\u8BE5 hash \u503C\u662F\u5BF9 compilation \u5185\u6240\u6709\u7684\u5185\u5BB9\u8BA1\u7B97\u800C\u6765\u7684\u3002\u7B80\u5355\u4E8E\u53C2\u4E0E\u5F53\u524D compilation \u8FC7\u7A0B\u7684\u5168\u90E8\u6587\u4EF6\u3002</li><li>chunkhash: \u53C2\u4E0E\u5F53\u524D chunk \u6784\u5EFA\u7684\u6240\u6709\u6587\u4EF6\u3002(chunk \u662F\u4E00\u7EC4\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757\u96C6\u5408)</li><li>contenthash: \u5355\u4E2A\u6587\u4EF6</li></ul><blockquote><p>contenthash\u5728webpack4 \u4E4B\u524D\u90FD\u53EA\u80FD\u5728css\u4E0A\u4F7F\u7528\uFF0C\u5E76\u4E0D\u80FD\u5728js\u4E0A\u4F7F\u7528,\u6240\u4EE5\u6709\u4E9B\u8D44\u6599\u76F4\u63A5\u5199 contenthash \u6307 css \u6587\u4EF6,\u8FD9\u662F\u4E0D\u51C6\u786E\u7684.\u76EE\u524D v4 \u7248\u672C\u540E contenthash \u5DF2\u7ECF\u4E0D\u4EC5\u9650\u4E8E css \u6587\u4EF6\u4E86.</p></blockquote><blockquote><p>\u7406\u89E3 webpack \u4E2D bundle / chunk / module \u7684\u5173\u7CFB: \u591A\u4E2A\u6709\u4F9D\u8D56\u5173\u7CFB\u7684 module \u4F1A\u5408\u5E76\u6784\u5EFA\u6210\u4E00\u4E2A chunk \u4E00\u4E2A\u6216\u591A\u4E2A chunk \u6784\u5EFA\u8F93\u51FA\u4E00\u4E2A bundle\uFF0C\u53EF\u7528\u4E8E\u6D4F\u89C8\u5668\u6216 node \u76F4\u63A5\u6267\u884C\u3002</p></blockquote><h3 id="\u6301\u4E45\u7F13\u5B58\u7B56\u7565" tabindex="-1">\u6301\u4E45\u7F13\u5B58\u7B56\u7565 <a class="header-anchor" href="#\u6301\u4E45\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a></h3><p>\u90A3\u4E48\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u6709\u4EC0\u4E48\u4F5C\u7528\u5462\uFF1F\u53EF\u7528\u4E8E\u5B9E\u73B0\u6D4F\u89C8\u5668\u9875\u9762\u8D44\u6E90\u7684\u7F13\u5B58\u3002</p><p>\u8981\u7406\u89E3\u6301\u4E45\u7F13\u5B58\u7B56\u7565\uFF0C\u5C31\u9700\u8981\u7406\u89E3\u4EE5\u4E0B\u6982\u5FF5\uFF1AWEB\u7F13\u5B58\u3001\u6D4F\u89C8\u5668\u7F13\u5B58\u3001\u6D4F\u89C8\u5668\u9875\u9762\u8D44\u6E90\u7684\u4E09\u7EA7\u7F13\u5B58\u673A\u5236\u3001\u7F51\u7EDC\u8BF7\u6C42\u4E2D\u7F13\u5B58\u76F8\u5173\u8BF7\u6C42\u548C\u54CD\u5E94\u5934\u5B57\u6BB5\uFF0C\u5177\u4F53\u53EF\u4ECE\u6B64\u5904\u4E86\u89E3<a href="http://fer123.gitee.io/Browser/Render/cache.html#%E4%BB%80%E4%B9%88%E6%98%AFweb%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">Web Cache \u8D44\u6E90\u7F13\u5B58\u673A\u5236</a></p><p>\u7B80\u5355\u7406\u89E3\u5C31\u662F\uFF1A</p><ol><li>\u6D4F\u89C8\u5668\u5BF9\u6BCF\u6B21\u8BF7\u6C42\u7684\u9875\u9762\u8D44\u6E90\u4F1A\u9ED8\u8BA4\u4EE5\u6587\u4EF6\u540D\u79F0\u7F13\u5B58\u5230\u672C\u5730\uFF0C\u5F53\u6D4F\u89C8\u5668\u518D\u6B21\u8BF7\u6C42\u65F6\u5C31\u53EF\u4EE5\u4ECE\u5FEB\u901F\u4ECE\u672C\u5730\u8BFB\u53D6\u8D44\u6E90\uFF0C\u7701\u6389\u4E86\u7F51\u7EDC\u8BF7\u6C42\u3002</li><li>\u5982\u679C\u6587\u4EF6\u5185\u5BB9\u53D8\u66F4\u4E86\uFF0C\u6211\u4EEC\u4F1A\u91CD\u65B0\u6784\u5EFA\u9879\u76EE\u5DE5\u7A0B\uFF0C\u91CD\u65B0\u90E8\u7F72\u4E0A\u7EBF\u53D1\u5E03\u3002</li><li>\u6B64\u65F6\u6700\u7406\u60F3\u7684\u60C5\u51B5\u662F\uFF0C\u6D4F\u89C8\u5668\u80FD\u5BF9\u6709\u5185\u5BB9\u53D8\u66F4\u7684\u9875\u9762\u8D44\u6E90\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\uFF0C\u66F4\u65B0\u672C\u5730\u7F13\u5B58\uFF0C\u5BF9\u6CA1\u6709\u5185\u5BB9\u7684\u53D8\u66F4\u7684\u9875\u9762\u8D44\u6E90\u8FD8\u662F\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u3002</li><li>\u7531\u4E8E\u6D4F\u89C8\u5668\u662F\u4EE5\u8D44\u6E90\u540D\u79F0\u8FDB\u884C\u7F13\u5B58\u7684\uFF0C\u6240\u4EE5\u8981\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\uFF0C\u53EA\u9700\u8981\u5728\u9879\u76EE\u6784\u5EFA\u4E2D\uFF0C\u6709\u5185\u5BB9\u53D8\u5316\u7684\u8D44\u6E90\u540D\u79F0\u91CD\u65B0\u547D\u540D\uFF0C\u6CA1\u6709\u5185\u5BB9\u53D8\u5316\u7684\u8D44\u6E90\u540D\u79F0\u4E0D\u53D8\u5373\u53EF\u3002\u8FD9\u5C31\u53EF\u4EE5\u4F7F\u7528\u5408\u9002\u7684 <code>hash / chunkhash / contenthash</code> \u503C\u6765\u547D\u540D\u8F93\u51FA\u7684\u6784\u5EFA\u8D44\u6E90\u3002</li></ol><h3 id="hash-\u7684\u7528\u6CD5" tabindex="-1">hash \u7684\u7528\u6CD5 <a class="header-anchor" href="#hash-\u7684\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9\u901A\u5E38\u7528\u4F5C\u6784\u5EFA\u4EA7\u7269\u7684\u547D\u540D\u4E2D\uFF0C\u5E38\u89C1\u6709\u4EE5\u4E0B\u51E0\u5904\uFF1A</p><ul><li>webpack \u6784\u5EFA\u7684\u8F93\u51FA\u914D\u7F6E <code>output</code> \uFF0C\u5176\u4E2D\u6709\u51E0\u79CD\u5BF9\u4E0D\u540C\u7C7B\u578B\u8F93\u51FA\u914D\u7F6E</li><li>\u8FD8\u6709\u63D2\u4EF6\u7684\u9009\u9879\u914D\u7F6E</li><li>\u4EE5\u53CA\u4EE3\u7801\u5207\u5272 splitChunks \u4E2D\u7F13\u5B58\u7EC4\u7684\u914D\u7F6E\u3002</li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]@[hash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA bundle \u547D\u540D</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;images/[name]@[contenthash:8][ext]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9759\u6001\u8D44\u6E90\u8F93\u51FA\u547D\u540D</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]@[chunkhash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u975E\u5165\u53E3\u4F9D\u8D56\u6784\u5EFA\u8F93\u5236\u54C1\u7684\u547D\u540D\uFF0C\u6BD4\u5982\u5F02\u6B65\u52A0\u8F7D\u7684</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]@[contenthash:8].css&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]@[chunkhash:8].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;css-purged&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u4F1A\u4EE5 key \u52A0splitChunks.atuomaticNameDelimiter \u8FDE\u63A5\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u62FC\u63A5\u800C\u6210,\u5982 vendors~a~b~c.js</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]@[chunkhash:8].css&#39;</span><span class="token punctuation">,</span> 
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;css/mini-extract&#39;</span><span class="token punctuation">,</span> <span class="token comment">// webpack@5.x</span>
          <span class="token comment">// test: /\\.css$/, // For webpack@4</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u5408\u5E76\uFF0C\u544A\u8BC9 webpack \u5FFD\u7565\u9ED8\u8BA4\u7684 \`splitChunks.minSize\`\u3001\`splitChunks.minChunks\`\u3001\`splitChunks.maxAsyncRequests\` \u548C \`splitChunks.maxInitialRequests\` \u9009\u9879\uFF0C\u5E76\u59CB\u7EC8\u4E3A\u6B64\u7F13\u5B58\u7EC4\u521B\u5EFA chunk\u3002</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4F8B\u5B50\uFF1A</p><div class="language-css"><pre><code><span class="token comment">/* index.css */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// async.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This is async loaded</span><span class="token template-punctuation string">\`</span></span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleDiv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// utils.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// entry indexj.s</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cube <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>

<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack hash: cube(5)=&#39;</span> <span class="token operator">+</span> <span class="token function">cube</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

  <span class="token comment">// \u542F\u52A8\u5F02\u6B65\u52A0\u8F7D\u7684\u6309\u94AE</span>
  <span class="token keyword">const</span> eleBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
  eleBtn<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Click me to load async.js&#39;</span>
  eleBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;async&#39; */</span><span class="token string">&#39;./async.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F02\u6B65\u52A0\u8F7D\u6210\u529F&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  eleDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleBtn<span class="token punctuation">)</span>
  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6 webpack.config.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../hash-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-hash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name]~[hash:8].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name]~[hash:8].js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name]~[hash:8].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u8FF0\u914D\u7F6E\uFF0C\u6700\u7EC8bundle\u7684\u4F9D\u8D56\u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>    Source                  Chunk

  index.css   +---------&gt;   main-hash:8.css

  +----------+
  | index.js |
  |          +----------&gt;   main-hash:8.js
  | utils.js |
  +----------+

  async.js  +---------&gt;   async-hash:8.js
</code></pre></div><p>\u4F7F\u7528<code>[hash]</code>\u547D\u540D\uFF0C\u521D\u6B21\u6784\u5EFA\u540E\u7684 hash \u503C\uFF1A<code>0a12868c</code></p><div class="language-"><pre><code>main~0a12868c.js
async~0a12868c.js
main~0a12868c.css
</code></pre></div><p>\u6539\u53D8\u4EFB\u4E00\u4E2A\u6587\u4EF6\u5185\u5BB9\uFF0C\u6BD4\u5982\u8FD9\u91CC\u6539\u53D8 index.css \u5185\u5BB9\uFF0C\u518D\u6B21\u6784\u5EFA\u540E hash \u503C: <code>37e9587a</code>\uFF0C\u5E76\u4E14\u6240\u6709\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0\u90FD\u6539\u53D8\u4E86\u3002</p><div class="language-"><pre><code>main~37e9587a.js
async~37e9587a.js
main~37e9587a.css
</code></pre></div><p>\u5982\u679C\u6539\u53D8 index.css \u5185\u5BB9\uFF0C\u53EA\u60F3\u5176\u5BF9\u5E94\u7684\u8F93\u51FA\u6539\u53D8\u540D\u79F0\uFF0C\u53EF\u4EE5\u66F4\u6539\u5982\u4E0B\u914D\u7F6E:</p><ul><li>\u5C06css\u7684\u547D\u540D\u4F7F\u7528 <code>[contenthash]</code></li><li>\u4E3A\u4E86\u4FBF\u4E8E\u5BF9\u6BD4css\u6539\u53D8\u540E\uFF0C\u5176\u5B83\u8F93\u51FA\u6587\u4EF6\u547D\u540D\u4E0D\u53D8\uFF0C\u9700\u8981\u628Ajs\u6784\u5EFA\u8F93\u51FA\u547D\u540D\u6539\u4E3A <code>[chunkhash]</code></li></ul><div class="language-"><pre><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);

module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../hash-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
-    path: path.resolve(__dirname, &#39;bundle-hash&#39;),
-    filename: &#39;[name]~[hash:8].js&#39;,
-    chunkFilename: &#39;[name]~[hash:8].js&#39;,
+    path: path.resolve(__dirname, &#39;bundle-contenthash&#39;),
+    filename: &#39;[name]~[chunkhash:8].js&#39;,
+    chunkFilename: &#39;[name]~[chunkhash:8].js&#39;,
  },
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          &#39;css-loader&#39;,
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
-      filename: &#39;[name]~[hash:8].css&#39;,
+      filename: &#39;[name]~[contenthash:8].css&#39;,
    }),
  ],
}
</code></pre></div><p>\u518D\u6B21\u6784\u5EFA\uFF0C\u53EF\u4EE5\u770B\u5230css\u7684\u6784\u5EFA\u6587\u4EF6\u7684hash\u503C\u5DF2\u7ECF\u533A\u522B\u4E8E\u5176\u5B83\u6587\u4EF6hash\u503C\u4E86\u3002</p><div class="language-"><pre><code>async~ec03e196.js
main~b6ba22d3.js
main~85f25b68.css
</code></pre></div><p>\u6B64\u65F6\u518D\u6B21\u4FEE\u6539css\u6587\u4EF6\u5185\u5BB9\uFF0C\u518D\u6784\u5EFA\uFF0C\u53EF\u4EE5\u770B\u5230<code>main~xx.css</code>\u548C<code>main~xx.js</code>\u6587\u4EF6\u540D\u79F0\u6539\u53D8\u4E86\uFF0C<code>async~xx.js</code>\u6587\u4EF6\u540D\u79F0\u672A\u53D8\u3002</p><div class="language-js"><pre><code>async<span class="token operator">~</span>ec03e196<span class="token punctuation">.</span>js
main<span class="token operator">~</span>de34daf3<span class="token punctuation">.</span>js
main<span class="token operator">~</span>8ae5292c<span class="token punctuation">.</span>css
</code></pre></div><p>\u6B64\u65F6\u518D\u6539\u53D8 <code>async.js</code>\u7684\u5185\u5BB9\u540E\uFF0C\u518D\u6784\u5EFA\uFF0C\u53EF\u4EE5\u770B\u5230 <code>async~xx.js</code>\u548C<code>main~xx.js</code>\u6587\u4EF6\u540D\u79F0\u6539\u53D8\u4E86\uFF0C<code>main~xx.css</code>\u6587\u4EF6\u540D\u79F0\u672A\u53D8\u3002</p><div class="language-js"><pre><code>async<span class="token operator">~</span>75a9865d<span class="token punctuation">.</span>js
main<span class="token operator">~</span>371dc869<span class="token punctuation">.</span>js
main<span class="token operator">~</span>8ae5292c<span class="token punctuation">.</span>css
</code></pre></div><p>\u4EE5\u4E0A\u8BD5\u9A8C\u7ED3\u679C\uFF0C\u57FA\u672C\u7B26\u5408\u9884\u671F\u3002</p><p>\u4F46\u8FD9\u91CC\u6709\u4E2A\u95EE\u9898\uFF0C\u4E3A\u4EC0\u4E48\u4EFB\u4E00\u6587\u4EF6\u7684\u6539\u53D8\uFF0C\u90FD\u4F1A\u5F15\u8D77\u4E3B\u5165\u53E3\u6587\u4EF6 <code>main~xx.js</code>\u7684hash\u503C\u6539\u53D8\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0D\u5E94\u8BE5\u6539\u53D8\u5176hash\u503C\u7684\uFF1F</p><h3 id="hash-\u503C\u7684\u4E0D\u7A33\u5B9A\u6027" tabindex="-1">hash \u503C\u7684\u4E0D\u7A33\u5B9A\u6027 <a class="header-anchor" href="#hash-\u503C\u7684\u4E0D\u7A33\u5B9A\u6027" aria-hidden="true">#</a></h3><ol><li>\u4E3A\u4EC0\u4E48\u4EFB\u4E00\u6587\u4EF6\u7684\u6539\u53D8\uFF0C\u90FD\u4F1A\u5F15\u8D77\u4E3B\u5165\u53E3\u6587\u4EF6 <code>main~xx.js</code>\u7684hash\u503C\u6539\u53D8\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0D\u5E94\u8BE5\u6539\u53D8\u5176hash\u503C\u7684\uFF1F</li></ol><p>\u67E5\u770B\u5165\u53E3\u6587\u4EF6 <code>main~xx.js</code>\u4EE3\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u4E2D webpack \u6CE8\u5165\u7684\u8FD0\u884C\u65F6\u4EE3\u7801\u4E2D\u5305\u62EC\u4E86\u4F9D\u8D56\u6A21\u5757\u7684\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/* webpack/runtime/get javascript chunk filename */</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// This function allow to reference async chunks</span>
	__webpack_require__<span class="token punctuation">.</span><span class="token function-variable function">u</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">chunkId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// return url for filenames based on template</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;async&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;~&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;75a9865d&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>webpack runtime\uFF08webpackBootstrap\uFF09\u4EE3\u7801\u4E0D\u591A\uFF0C\u4E3B\u8981\u5305\u542B\u51E0\u4E2A\u529F\u80FD\uFF1A</p><ul><li>\u5168\u5C40 <code>webpackJsonp</code> \u65B9\u6CD5\uFF1A\u6A21\u5757\u8BFB\u53D6\u51FD\u6570\uFF0C\u7528\u6765\u533A\u5206\u6A21\u5757\u662F\u5426\u52A0\u8F7D\uFF0C\u5E76\u8C03\u7528 <code>__webpack_require__</code> \u51FD\u6570\uFF1B</li><li>\u79C1\u6709 <code>__webpack_require__</code> \u65B9\u6CD5\uFF1A\u6A21\u5757\u521D\u59CB\u5316\u6267\u884C\u51FD\u6570\uFF0C\u5E76\u7ED9\u6267\u884C\u8FC7\u7684\u6A21\u5757\u505A\u6807\u8BB0\uFF1B</li><li>\u5F02\u6B65 chunk \u52A0\u8F7D\u51FD\u6570\uFF08\u7528 script \u6807\u7B7E\u5F02\u6B65\u52A0\u8F7D\uFF09\uFF0C\u52A0\u8F7D\u7684 chunk \u5185\u5BB9\u5747\u88AB webpackJsonp \u5305\u88F9\u7684\uFF0Cscript \u52A0\u8F7D\u6210\u529F\u4F1A\u76F4\u63A5\u6267\u884C\u3002\u8FD9\u4E2A\u51FD\u6570\u8FD8\u5305\u542B\u4E86\u6240\u6709\u751F\u6210\u7684 chunks \u7684\u8DEF\u5F84\u3002</li><li>\u5BF9 ES6 Modules \u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF08export default\uFF09\u505A\u5904\u7406\u3002</li></ul><p>\u4E3A\u4E86\u5B9E\u73B0\u6211\u4EEC\u7684\u76EE\u6807\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u628A\u8FD0\u884C\u65F6\u4EE3\u7801\u5355\u72EC\u62BD\u79BB\u51FA\u6765\uFF0Cwebpack \u914D\u7F6E\u6587\u4EF6\u4E2D\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;runtime&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u518D\u6B21\u6784\u5EFA\u8F93\u51FA\uFF1A</p><div class="language-"><pre><code>main~d8d7c0d9.js
main~8ae5292c.css
async~75a9865d.js
runtime~abc83c1d.js
</code></pre></div><p>\u6B64\u65F6\u66F4\u6539async.js\u5185\u5BB9\uFF0C\u518D\u6B21\u6784\u5EFA\uFF0C\u53EF\u4EE5\u770B\u5230\u53EA\u6709 <code>async~xx.js</code>\u548C<code>runtime~xx.js</code>\u6539\u53D8\uFF0C <code>main~xx.js</code>\u548C<code>main~xx.css</code>\u672A\u6539\u53D8\uFF1B</p><div class="language-"><pre><code>main~d8d7c0d9.js
main~8ae5292c.css
async~fd3fd830.js
runtime~d80e9835.js
</code></pre></div><p>\u66F4\u6539 index.css \u5185\u5BB9\u518D\u6B21\u6784\u5EFA\uFF0C\u4E5F\u662F\u4E00\u6837\u7684\u6548\u679C\uFF0C\u7B26\u5408\u9884\u671F\u3002</p><ol start="2"><li>\u751F\u6210\u7A33\u5B9A\u7684\u6A21\u5757 ID\uFF0C\u907F\u514D hash \u503C\u6539\u53D8\u3002</li></ol><p>\u5728\u9879\u76EE\u4E2D\u589E\u52A0\u4E00\u4E2A <code>greet.js</code>\u6A21\u5757\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// greet.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4FEE\u6539 utils.js \u6587\u4EF6\u5185\u5BB9</p><div class="language-"><pre><code>// utils.js
+import greet from &#39;./greet.js&#39;
+greet(&#39;Tom&#39;)

export function cube(x) {
  return x * x * x;
}
</code></pre></div><p>\u6B64\u65F6\u4F9D\u8D56\u56FE\uFF1A</p><div class="language-"><pre><code>    Source                  Chunk

  index.css   +---------&gt;   main-hash:8.css

  +----------+
  | index.js |
  | utils.js +----------&gt;   main-hash:8.js
  | greet.js |
  +----------+

  async.js  +---------&gt;   async-hash:8.js
</code></pre></div><p>\u6B64\u60C5\u51B5\u4E0B\uFF0C\u518D\u6B21\u6784\u5EFA\u8F93\u51FA\uFF0C\u9884\u671F\u5E94\u8BE5\u53EA\u6539\u53D8 <code>main~xx.js</code>\u548C<code>runtime~xx.js</code>\u6587\u4EF6\u540D\u79F0\uFF0C\u800C<code>async~xx.js</code>\u548C<code>main~xx.css</code>\u6587\u4EF6\u540D\u79F0\u5E94\u8BE5\u4E0D\u53D8</p><div class="language-"><pre><code>main~8ae5292c.css
main~bc863479.js
async~ad0f03d4.js
runtime~7ddcabf1.js
</code></pre></div><p>\u4F46\u7ED3\u679C\u662F\uFF0C\u53EA\u6709<code>main~8ae5292c.css</code>\u672A\u6539\u53D8\u540D\u79F0\uFF0C<code>async.js</code>\u7684\u6784\u5EFA\u8F93\u51FA\u4E3A\u4EC0\u4E48\u4F1A\u6539\u53D8\uFF1F</p><p>\u539F\u56E0\u662F Chunk \u7684\u751F\u6210\u9664\u4E86\u672C\u8EAB\u7684\u6587\u4EF6\u5185\u5BB9\u5916\uFF0C\u8FD8\u6D89\u53CA\u5230\u6A21\u5757\u4F9D\u8D56\u7684\u89E3\u6790\u548C\u6A21\u5757 ID \u5206\u914D\uFF0Cwebpack \u4E2D <a href="http://modulek.id" target="_blank" rel="noopener noreferrer">modulek.id</a> \u4F1A\u9ED8\u8BA4\u5730\u57FA\u4E8E\u89E3\u6790\u987A\u5E8F(resolve order)\u987A\u5E8F\u9012\u589E\u7684\u6B63\u6574\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u89E3\u6790\u987A\u5E8F\u53D1\u751F\u53D8\u5316(\u5220\u9664\u4E00\u4E2A\u4F9D\u8D56\u6A21\u5757\u6216\u589E\u52A0\u4E00\u4E2A\u4F9D\u8D56\u6A21\u5757\uFF09\uFF0CID \u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\uFF0C\u8FD9\u662F\u65E0\u6CD5\u7A33\u5B9A\u5B9E\u8D28\u4E0A\u6CA1\u6709\u53D8\u5316\u7684 chunk \u6587\u4EF6\u7684 chunkhash \u53D8\u52A8\u95EE\u9898\u7684\u672C\u6E90\u3002</p><p>\u6240\u4EE5\u5F53\u589E\u52A0\u6216\u5220\u9664\u4E00\u4E2A\u4F9D\u8D56\u6A21\u5757\u65F6\uFF0C\u91CD\u65B0\u89E3\u6790\u83B7\u53D6\u7684\u4F9D\u8D56\u56FE\u4E2D\u7684 moduleId \u5C31\u6539\u53D8\u4E86\uFF0C\u6240\u4EE5\u901A\u5E38 <code>moduleId.content</code> \u8BA1\u7B97\u7684 hash \u503C\u4E5F\u4F1A\u6539\u53D8\u3002</p><p>\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u6838\u5FC3\u5728\u4E8E\uFF1A<strong>\u751F\u6210\u7A33\u5B9A\u7684\u6A21\u5757 ID</strong>\uFF0C\u90A3\u5982\u4F55\u751F\u6210\u7A33\u5B9A\u7684\u6A21\u5757 ID\uFF1F</p><ul><li>webpack@4.x \u4E2D\u53EF\u4EE5\u4F7F\u7528<code>NamedModulesPlugin</code> \u6216 <code>HashedModuleIdsPlugin</code> \u63D2\u4EF6\u6765\u7A33\u5B9A moduleId\uFF1B</li><li>\u5728webpack@5.x \u4E2D\u53EF\u4EE5\u8BBE\u7F6E <code>optimization.moduleIds / optimization.chunkIds</code></li></ul><ol><li>NamedModulesPlugin</li></ol><p>\u8FD9\u4E2A\u63D2\u4EF6\u6A21\u5757\u53EF\u4EE5\u5C06\u4F9D\u8D56\u6A21\u5757\u7684\u6B63\u6574\u6570 ID \u66FF\u6362\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF08\u5982\uFF1A\u5C06moduleId=4 \u66FF\u6362\u4E3A moduleId=./path/to/greet.js\uFF09\u3002</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u5F00\u53D1\u6A21\u5F0F\uFF0C\u5B83\u53EF\u4EE5\u8BA9 webpack-dev-server \u548C HMR \u8FDB\u884C\u70ED\u66F4\u65B0\u65F6\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u6A21\u5757\u540D\u5B57\u800C\u4E0D\u662F\u7EAF\u6570\u5B57\uFF1B</li><li>\u751F\u4EA7\u6784\u5EFA\u73AF\u5883\uFF0C\u5B83\u53EF\u4EE5\u907F\u514D\u56E0\u4FEE\u6539\u5185\u5BB9\u5BFC\u81F4\u7684 ID \u53D8\u5316\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6301\u4E45\u5316\u7F13\u5B58\u3002</li></ul><p>\u4F46\u662F\u6709\u4E24\u4E2A\u7F3A\u70B9\uFF1A</p><ul><li>\u9012\u589E ID \u66FF\u6362\u4E3A\u6A21\u5757\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u6784\u5EFA\u51FA\u6765\u7684 chunk \u4F1A\u5145\u6EE1\u5404\u79CD\u8DEF\u5F84\uFF0C\u4F7F\u6587\u4EF6\u589E\u5927\uFF1B</li><li>\u6A21\u5757\uFF08npm \u548C\u81EA\u5DF1\u7684\u6A21\u5757\uFF09\u8DEF\u5F84\u4F1A\u6CC4\u9732\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5B89\u5168\u95EE\u9898\u3002</li></ul><ol start="2"><li>HashedModuleIdsPlugin</li></ol><p>NamedModulesPlugin \u7684\u8FDB\u9636\u6A21\u5757\uFF0C\u5B83\u5728\u5176\u57FA\u7840\u4E0A\u5BF9\u6A21\u5757\u8DEF\u5F84\u8FDB\u884C MD5 \u6458\u8981\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u5B9E\u73B0\u6301\u4E45\u5316\u7F13\u5B58\uFF0C\u540C\u65F6\u8FD8\u907F\u514D\u4E86\u5B83\u5F15\u8D77\u7684\u4E24\u4E2A\u95EE\u9898\uFF08\u6587\u4EF6\u589E\u5927\uFF0C\u8DEF\u5F84\u6CC4\u9732\uFF09\u3002\u56E0\u6B64\u53EF\u4EE5\u8F7B\u677E\u5730\u5B9E\u73B0 chunkhash \u7684\u7A33\u5B9A\u5316\uFF01</p><ol start="3"><li>webpack@5.x \u914D\u7F6E <code>optimization.moduleIds / optimization.chunkIds</code></li></ol><div class="language-js"><pre><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * natural	\u6309\u4F7F\u7528\u987A\u5E8F\u7684\u6570\u5B57id\u3002
   * named	\u5BF9\u8C03\u8BD5\u66F4\u53CB\u597D\u7684\u4F18\u70B9\u7684id\u3002\u7528\u4E8E\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5
   * deterministic	\u88AB\u54C8\u5E0C\u8F6C\u5316\u6210\u7684\u5C0F\u4F4D\u6570\u503C\u6A21\u5757\u540D\u3002\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u6709\u5229\u4E8E\u6301\u4E45\u7F13\u5B58
   * size	\u4E13\u6CE8\u4E8E\u8BA9\u521D\u59CB\u4E0B\u8F7D\u5305\u5927\u5C0F\u66F4\u5C0F\u7684\u6570\u5B57id\u3002
  */</span>
  <span class="token literal-property property">moduleIds</span><span class="token operator">:</span> <span class="token string">&#39;deterministic&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * &#39;natural&#39;	\u6309\u4F7F\u7528\u987A\u5E8F\u7684\u6570\u5B57id\u3002
   * &#39;named&#39;	\u5BF9\u8C03\u8BD5\u66F4\u53CB\u597D\u7684\u4F18\u70B9\u7684id\u3002
   * &#39;deterministic&#39;	\u5728\u4E0D\u540C\u7684\u7F16\u8BD1\u4E2D\u4E0D\u53D8\u7684\u77ED\u6570\u5B57id\u3002\u6709\u76CA\u4E8E\u957F\u671F\u7F13\u5B58\u3002\u5728\u751F\u4EA7\u6A21\u5F0F\u4E2D\u4F1A\u4EA4\u66FF\u5F00\u542F\u3002
   * &#39;size&#39;	\u4E13\u6CE8\u4E8E\u8BA9\u521D\u59CB\u4E0B\u8F7D\u5305\u5927\u5C0F\u66F4\u5C0F\u7684\u6570\u5B57id\u3002
   * &#39;total-size&#39;	\u4E13\u6CE8\u4E8E\u8BA9\u603B\u4E0B\u8F7D\u5305\u5927\u5C0F\u66F4\u5C0F\u7684\u6570\u5B57id\u3002
  */</span>
  <span class="token literal-property property">chunkIds</span><span class="token operator">:</span> <span class="token string">&#39;deterministic&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u6211\u4EEC\u5148\u4FEE\u6539 utils.js \u7684\u5185\u5BB9\uFF0C\u4E0D\u5F15\u5165 greet.js\uFF0C\u7136\u540E\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><pre><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);

module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../hash-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
-    path: path.resolve(__dirname, &#39;bundle-runtime&#39;),
+    path: path.resolve(__dirname, &#39;bundle-chunkId&#39;),
    filename: &#39;[name]~[chunkhash:8].js&#39;,
   chunkFilename: &#39;[name]~[chunkhash:8].js&#39;,
  },
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          &#39;css-loader&#39;,
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: &#39;[name]~[contenthash:8].css&#39;,
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: &#39;runtime&#39;,
    },
+    moduleIds: &#39;deterministic&#39;,
+    chunkIds: &#39;deterministic&#39;,
  }
}
</code></pre></div><p>\u521D\u6B21\u6784\u5EFA\uFF1A</p><div class="language-"><pre><code>main~8ae5292c.css
main~d31dd30f.js
async~43038bd3.js
runtime~2f061f70.js
</code></pre></div><p>\u7136\u540E\u4FEE\u6539utils.js \u6587\u4EF6\u5185\u5BB9\uFF0C\u5F15\u5165\u65B0\u589E\u6A21\u5757 greet.js\uFF0C\u518D\u6B21\u6784\u5EFA</p><div class="language-"><pre><code>main~8ae5292c.css
main~112bee88.js
async~43038bd3.js
runtime~2f061f70.js
</code></pre></div><p>\u7B26\u5408\u9884\u671F\uFF0C\u53EA\u6709 <code>main~xx.js</code>\u7684\u6587\u4EF6\u540D\u79F0\u53D1\u751F\u7684\u6539\u53D8\uFF0C\u5176\u5B83\u8F93\u51FA\u6587\u4EF6\u540D\u79F0\u672A\u53D8\u3002</p><p>\u603B\u7ED3\u4E0B\u6765:</p><ul><li>hash: \u53D7\u6240\u6709\u4EE3\u7801\u5F71\u54CD\uFF0C\u53EA\u8981\u6709\u53D8\u5316\uFF0Chash\u5C31\u53D8\u4E86\u3002</li><li>chunkhash: \u53D7\u5230\u5B83\u81EA\u8EABchunk\u5185\u5BB9\u7684\u5F71\u54CD\uFF0C\u4EE5\u53CA chunkId moduleId \u7684\u5F71\u54CD\u3002</li><li>contenthash: \u53D7\u5230\u5B83\u81EA\u8EAB\u6587\u4EF6\u5185\u5BB9\u7684\u5F71\u54CD\uFF0C\u4EE5\u53CA chunkId moduleId \u7684\u5F71\u54CD\u3002</li></ul><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><ul><li><a href="https://zhuanlan.zhihu.com/p/28208003" target="_blank" rel="noopener noreferrer">webpack\u6301\u4E45\u5316\u7F13\u5B58\u4F18\u5316\u7B56\u7565</a></li><li><a href="https://sebastianblade.com/using-webpack-to-achieve-long-term-cache/" target="_blank" rel="noopener noreferrer">\u7528 webpack \u5B9E\u73B0\u6301\u4E45\u5316\u7F13\u5B58</a></li></ul>`,215),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
