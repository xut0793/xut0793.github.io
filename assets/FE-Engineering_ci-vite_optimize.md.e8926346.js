import{_ as n,c as s,o as a,a as p}from"./app.9dbb06c5.js";const g='{"title":"optimize \u9884\u4F18\u5316","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Engineering/ci-vite/optimize.md"}',t={},o=p(`<h1 id="optimize-\u9884\u4F18\u5316" tabindex="-1">optimize \u9884\u4F18\u5316 <a class="header-anchor" href="#optimize-\u9884\u4F18\u5316" aria-hidden="true">#</a></h1><p>\u5728 <code>httpServer.listen</code> \u542F\u52A8\u670D\u52A1\u4E4B\u524D\uFF0Cvite \u4F1A\u9009\u6267\u884C <code>runOptimize</code> \u9884\u4F18\u5316\u6D41\u7A0B\uFF0C\u5E76\u4E14\u901A\u8FC7<code>isOptimized</code>\u53D8\u91CF\u63A7\u5236\uFF0C\u9884\u4F18\u5316\u6D41\u7A0B\u53EA\u8FD0\u884C\u4E00\u6B21\u3002</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>middlewareMode <span class="token operator">&amp;&amp;</span> httpServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isOptimized <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> listen <span class="token operator">=</span> httpServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>
  httpServer<span class="token punctuation">.</span>listen <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">port</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isOptimized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        isOptimized <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        httpServer<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u770B\u770B <code>runOptimize</code> \u51FD\u6570\u6267\u884C\uFF0C\u540C\u6837\u5728\u521B\u5EFA\u670D\u52A1\u65F6\u751F\u6210\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> optimizeDeps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../optimizer&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inlineConfig</span><span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> romise<span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">runOptimize</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>cacheDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      server<span class="token punctuation">.</span>_isRunningOptimizer <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        server<span class="token punctuation">.</span>_optimizeDepsMetadata <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">optimizeDeps</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        server<span class="token punctuation">.</span>_isRunningOptimizer <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      server<span class="token punctuation">.</span>_registerMissingImport <span class="token operator">=</span> <span class="token function">createMissingImporterRegisterFn</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u952E\u4EE3\u7801\uFF1A<code>await optimizeDeps(config)</code></p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/optimizer/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">optimizeDeps</span><span class="token punctuation">(</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> ResolvedConfig<span class="token punctuation">,</span>
  force <span class="token operator">=</span> config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>force<span class="token punctuation">,</span>
  asCommand <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  newDeps<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// missing imports encountered after server has started</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> boolean
<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>DepOptimizationMetadata <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token literal-property property">command</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> root<span class="token punctuation">,</span> logger<span class="token punctuation">,</span> cacheDir <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">const</span> log <span class="token operator">=</span> asCommand <span class="token operator">?</span> logger<span class="token punctuation">.</span>info <span class="token operator">:</span> debug

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">No cache directory. Skipping.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> dataPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token string">&#39;_metadata.json&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">/************************************************************************
   * \u5173\u952E\u6B65\u9AA4\u4E00\uFF1A
   * \u4F9D\u636E config \u4E2D mode/root/resolve/assetsInclude/plugins/optimizeDeps\uFF0C
   * \u4EE5\u53CA\u9879\u76EE\u4F9D\u8D56\u7684 lock \u6587\u4EF6\u5185\u5BB9\u8BA1\u7B97\u51FA\u4E00\u4E2A hash \u503C\u7528\u6765\u4E0B\u9762\u7684\u6BD4\u5BF9\uFF0C
   * \u6240\u4EE5\u8BF4\u53EA\u8981\u8FD9\u4E9B\u9879\u6709\u53D8\u52A8\uFF0C\u5C31\u4F1A\u89E6\u53D1\u91CD\u65B0\u9884\u7F16\u8BD1\uFF0C\u5982\u679C\u8FD9\u4E9B\u5185\u5BB9\u6CA1\u6709\u53D8\u91CF\uFF0C\u5C31\u4E0D\u4F1A\u6267\u884C\u9884\u7F16\u8BD1\uFF0C\u542F\u52A8\u65F6\u95F4\u66F4\u5FEB
  *************************************************************************/</span>
  <span class="token keyword">const</span> mainHash <span class="token operator">=</span> <span class="token function">getDepHash</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token literal-property property">data</span><span class="token operator">:</span> DepOptimizationMetadata <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> mainHash<span class="token punctuation">,</span>
    <span class="token literal-property property">browserHash</span><span class="token operator">:</span> mainHash<span class="token punctuation">,</span>
    <span class="token literal-property property">optimized</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C1D\u8BD5\u8BFB\u53D6\u7F13\u5B58\u76EE\u5F55\u4E0B\u7684 _metadata.json \u6587\u4EF6\uFF0C\u9996\u6B21\u542F\u52A8\u4E0D\u5B58\u5728\u4E0D\u6267\u884C\uFF0C</span>
  <span class="token comment">// \u5F53\u518D\u6B21\u6267\u884C\u6784\u5EFA\u65F6\uFF0C\u6BD4\u8F83\u4E0A\u6B21\u9884\u6784\u5EFA\u4FE1\u606F\uFF08_metadata.json\uFF09\u4E2D hash\uFF0C\u4E0E\u6B64\u65F6\u8BA1\u7B97\u51FA\u7684 hash \u6BD4\u8F83\uFF0C\u51B3\u5B9A\u662F\u5426\u91CD\u65B0\u6784\u5EFA</span>
  <span class="token comment">// \u6240\u4EE5 vite \u672C\u5730\u5F00\u53D1\u670D\u52A1\uFF0C\u7B2C\u4E8C\u6B21\u542F\u52A8\u670D\u52A1\u65F6\u95F4\u4F1A\u6BD4\u9996\u6B21\u66F4\u5FEB\uFF0C\u56E0\u4E3A\u5982\u679C\u4F9D\u8D56\u6CA1\u53D8\uFF0C\u7701\u7565\u4E86\u9884\u6784\u5EFA\u7684\u6267\u884C\u65F6\u95F4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>force<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">prevData</span><span class="token operator">:</span> DepOptimizationMetadata <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      prevData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// hash is consistent, no need to re-bundle</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevData <span class="token operator">&amp;&amp;</span> prevData<span class="token punctuation">.</span>hash <span class="token operator">===</span> data<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hash is consistent. Skipping. Use --force to override.&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> prevData
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5982\u679C cacheDir \u5DF2\u5B58\u5728\uFF0C\u5219\u6E05\u7A7A\uFF0C\u4E0D\u5B58\u5728\uFF0C\u5219\u65B0\u5EFA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emptyDir</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// a hint for Node.js</span>
  <span class="token comment">// all files in the cache directory should be recognized as ES modules</span>
  <span class="token comment">// \u5411 cacheDir \u76EE\u5F55\u4E2D\u5199\u5165 package.json \u6587\u4EF6\u5185\u5BB9</span>
  <span class="token function">writeFile</span><span class="token punctuation">(</span>
    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token string">&#39;package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token comment">/************************************************************************
   * \u5173\u952E\u6B65\u9AA4\u4E8C\uFF1A\u626B\u63CF\u6E90\u7801\uFF0C\u83B7\u53D6\u9700\u8981\u8FDB\u884C\u9884\u6253\u5305\u7684 npm \u5305
  *************************************************************************/</span>
  <span class="token keyword">let</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">missing</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newDeps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">{</span> deps<span class="token punctuation">,</span> missing <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">scanImports</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    deps <span class="token operator">=</span> newDeps
    missing <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// update browser hash \u4EC5\u6839\u636E\u4F9D\u8D56\u751F\u6210\u4E00\u4E2A hash </span>
  data<span class="token punctuation">.</span>browserHash <span class="token operator">=</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;sha256&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>hash <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> missingIds <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>missing<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>missingIds<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The following dependencies are imported but could not be resolved:\\n\\n  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>missingIds
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span>white<span class="token punctuation">.</span><span class="token function">dim</span><span class="token punctuation">(</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(imported by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>missing<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
            <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n\\nAre they installed?</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> include <span class="token operator">=</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>include
  <span class="token keyword">if</span> <span class="token punctuation">(</span>include<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resolve <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">createResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">asSrc</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> id <span class="token keyword">of</span> include<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolve</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> entry
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Failed to resolve force included dependency: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> qualifiedIds <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span>

  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u5408\u683C\u4F9D\u8D56\uFF0C\u5219\u5199\u5165data \u540E\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>qualifiedIds<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dataPath = path.join(cacheDir, &#39;_metadata.json&#39;)</span>
    <span class="token comment">// data = {hash: string, browserHash:string, optimized: {}}</span>
    <span class="token function">writeFile</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">No dependencies to bundle. Skipping.\\n\\n\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> total <span class="token operator">=</span> qualifiedIds<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> maxListed <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token keyword">const</span> listed <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> maxListed<span class="token punctuation">)</span>
  <span class="token keyword">const</span> extra <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> total <span class="token operator">-</span> maxListed<span class="token punctuation">)</span>
  <span class="token keyword">const</span> depsString <span class="token operator">=</span> chalk<span class="token punctuation">.</span><span class="token function">yellow</span><span class="token punctuation">(</span>
    qualifiedIds<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> listed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token punctuation">(</span>extra <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n  (...and </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>extra<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> more)</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>asCommand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newDeps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// This is auto run on server start - let the user know that we are</span>
      <span class="token comment">// pre-optimizing deps</span>
      logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>
        chalk<span class="token punctuation">.</span><span class="token function">greenBright</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pre-bundling dependencies:\\n  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>depsString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(this will be run only when your dependencies or config have changed)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">greenBright</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Optimizing dependencies:\\n  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>depsString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/************************************************************************
   * \u5173\u952E\u6B65\u9AA4\u4E09\uFF1A\u5229\u7528 es-module-lexer \u6241\u5E73\u5316\u5D4C\u5957\u7684\u6E90\u7801\u4F9D\u8D56
  *************************************************************************/</span>
  <span class="token comment">// esbuild generates nested directory output with lowest common ancestor base</span>
  <span class="token comment">// this is unpredictable and makes it difficult to analyze entry / output</span>
  <span class="token comment">// mapping. So what we do here is:</span>
  <span class="token comment">// 1. flatten all ids to eliminate slash</span>
  <span class="token comment">// 2. in the plugin, read the entry ourselves as virtual files to retain the path.</span>
  <span class="token keyword">const</span> <span class="token literal-property property">flatIdDeps</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token literal-property property">idToExports</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> ExportsData<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token literal-property property">flatIdToExports</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> ExportsData<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">await</span> init
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> id <span class="token keyword">in</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> flatId <span class="token operator">=</span> <span class="token function">flattenId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    flatIdDeps<span class="token punctuation">[</span>flatId<span class="token punctuation">]</span> <span class="token operator">=</span> deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    <span class="token keyword">const</span> entryContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> exportsData <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>entryContent<span class="token punctuation">)</span> <span class="token keyword">as</span> ExportsData
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">{</span> ss<span class="token punctuation">,</span> se <span class="token punctuation">}</span> <span class="token keyword">of</span> exportsData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> exp <span class="token operator">=</span> entryContent<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>ss<span class="token punctuation">,</span> se<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">export\\s+\\*\\s+from</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        exportsData<span class="token punctuation">.</span>hasReExports <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    idToExports<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> exportsData
    flatIdToExports<span class="token punctuation">[</span>flatId<span class="token punctuation">]</span> <span class="token operator">=</span> exportsData
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token literal-property property">define</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;process.<wbr>env.NODE_ENV&#39;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> config<span class="token punctuation">.</span>define<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> config<span class="token punctuation">.</span>define<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    define<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/************************************************************************
   * \u5173\u952E\u6B65\u9AA4\u56DB\uFF1A\u89E3\u6790\u7528\u6237\u4F9D\u8D56\u4F18\u5316\u914D\u7F6E\uFF0C\u8C03\u7528esbuild\u6784\u5EFA\u6587\u4EF6\uFF0C
   * \u5E76\u5C06\u6784\u5EFA\u7ED3\u679C\u5B58\u5165 outdir: cacheDir
  *************************************************************************/</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>esbuildOptions <span class="token punctuation">}</span> <span class="token operator">=</span>
    config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>esbuildOptions <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">absWorkingDir</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entryPoints</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>flatIdDeps<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bundle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">external</span><span class="token operator">:</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>exclude<span class="token punctuation">,</span>
    <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">splitting</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outdir</span><span class="token operator">:</span> cacheDir<span class="token punctuation">,</span>
    <span class="token literal-property property">treeShaking</span><span class="token operator">:</span> <span class="token string">&#39;ignore-annotations&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">metafile</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    define<span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>plugins<span class="token punctuation">,</span>
      <span class="token function">esbuildDepPlugin</span><span class="token punctuation">(</span>flatIdDeps<span class="token punctuation">,</span> flatIdToExports<span class="token punctuation">,</span> config<span class="token punctuation">,</span> ssr<span class="token punctuation">)</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u7684 esbuild \u63D2\u4EF6\uFF0C\u80FD\u5C06 cjs \u89C4\u8303\u7684\u4F9D\u8D56\u5305\u6362\u6210 ES6 \u5F62\u5F0F\u3002</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>esbuildOptions
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">/************************************************************************
   * \u5173\u952E\u6B65\u9AA4\u4E94\uFF1A\u5C06\u6784\u5EFA\u540E\u7684\u4F9D\u8D56\u4FE1\u606F\u5B58\u5165 _metadata.json
  *************************************************************************/</span>
  <span class="token keyword">const</span> meta <span class="token operator">=</span> result<span class="token punctuation">.</span>metafile<span class="token operator">!</span>
  <span class="token comment">// path.relative () \u65B9\u6CD5\u6839\u636E\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u8FD4\u56DE\u4ECE from \u5230 to \u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</span>
  <span class="token comment">// the paths in \`meta.outputs\` are relative to \`process.cwd()\`</span>
  <span class="token keyword">const</span> cacheDirOutputPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cacheDir<span class="token punctuation">)</span>
  <span class="token comment">//\u7EC4\u88C5\u4F9D\u8D56 optimized \u5BF9\u8C61\uFF0Ckey \u662F\u4F9D\u8D56\u540D\u79F0\uFF0Cvalue \u503C\u662F\u8BE5\u4F9D\u8D56\u76F8\u5173\u7684\u6587\u4EF6\u8DEF\u5F84\u548C\u5D4C\u5957\u4F9D\u8D56\u4FE1\u606F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> id <span class="token keyword">in</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    data<span class="token punctuation">.</span>optimized<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token function">flattenId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> entry<span class="token punctuation">,</span>
      <span class="token literal-property property">needsInterop</span><span class="token operator">:</span> <span class="token function">needsInterop</span><span class="token punctuation">(</span>
        id<span class="token punctuation">,</span>
        idToExports<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span>
        meta<span class="token punctuation">.</span>outputs<span class="token punctuation">,</span>
        cacheDirOutputPath
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5B58\u5165 _metadata.json</span>
  <span class="token function">writeFile</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token function">debug</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">deps bundled in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>
</code></pre></div><p><code>getDepHash</code> \u6587\u4EF6\u6307\u7EB9\u7684\u751F\u6210\uFF0C\u53EF\u4EE5\u770B\u51FA\u4F1A\u81EA\u52A8\u89E6\u53D1\u9884\u6784\u5EFA\u7684 lock \u6587\u4EF6\u548C <code>vite.config.js</code> \u4E2D\u5B57\u6BB5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> lockfileFormats <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;package-lock.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yarn.lock&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pnpm-lock.yaml&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">getDepHash</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">config</span><span class="token operator">:</span> ResolvedConfig</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token function">lookupFile</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lockfileFormats<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment">// also take config into account</span>
  <span class="token comment">// only a subset of config options that can affect dep optimization</span>
  content <span class="token operator">+=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> config<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
      <span class="token literal-property property">root</span><span class="token operator">:</span> config<span class="token punctuation">.</span>root<span class="token punctuation">,</span>
      <span class="token literal-property property">resolve</span><span class="token operator">:</span> config<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span>
      <span class="token literal-property property">assetsInclude</span><span class="token operator">:</span> config<span class="token punctuation">.</span>assetsInclude<span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>include<span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>exclude
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span> value <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;sha256&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u952E\u4EE3\u7801\uFF0C\u626B\u63CF\u6E90\u7801\uFF0C\u83B7\u53D6\u4F9D\u8D56 <code>({ deps, missing } = await scanImports(config))</code></p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/optimizer/scan.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">scanImports</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span><span class="token operator">:</span> ResolvedConfig</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">deps</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span>
  <span class="token literal-property property">missing</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">/****************************************
   * \u89E3\u6790\u5F97\u5230 entries
   ****************************************/</span>
  <span class="token keyword">let</span> <span class="token literal-property property">entries</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> explicitEntryPatterns <span class="token operator">=</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>entries
  <span class="token keyword">const</span> buildInput <span class="token operator">=</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>rollupOptions<span class="token operator">?.</span>input

  <span class="token keyword">if</span> <span class="token punctuation">(</span>explicitEntryPatterns<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    entries <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">globEntries</span><span class="token punctuation">(</span>explicitEntryPatterns<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>buildInput<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">resolvePath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">p</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>root<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> buildInput <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">resolvePath</span><span class="token punctuation">(</span>buildInput<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>buildInput<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entries <span class="token operator">=</span> buildInput<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>resolvePath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>buildInput<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entries <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>buildInput<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>resolvePath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;invalid rollupOptions.input value.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    entries <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">globEntries</span><span class="token punctuation">(</span><span class="token string">&#39;**/*.html&#39;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Non-supported entry file types and virtual files should not be scanned for</span>
  <span class="token comment">// dependencies.</span>
  entries <span class="token operator">=</span> entries<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token punctuation">(</span><span class="token constant">JS_TYPES_RE</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span> <span class="token operator">||</span> htmlTypesRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entries<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Could not determine entry point from rollupOptions or html files. Skipping dependency pre-bundling.&#39;</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">debug</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Crawling dependencies using entries:\\n  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entries<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n  &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*******************************************************************
   * \u5BF9\u6BCF\u4E2A entry \u5355\u72EC build\uFF0C
   * \u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A esbuildScanPlugin \u63D2\u4EF6\uFF0C\u4E3B\u8981\u662F\u6CE8\u518C build \u4E2D\u94A9\u5B50\u51FD\u6570\u4E8B\u4EF6
   ********************************************************************/</span>
  <span class="token keyword">const</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token literal-property property">missing</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPluginContainer</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token function">esbuildScanPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> container<span class="token punctuation">,</span> deps<span class="token punctuation">,</span> missing<span class="token punctuation">,</span> entries<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>esbuildOptions <span class="token punctuation">}</span> <span class="token operator">=</span>
    config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>esbuildOptions <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    entries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">absWorkingDir</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">entryPoints</span><span class="token operator">:</span> <span class="token punctuation">[</span>entry<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bundle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>plugins<span class="token punctuation">,</span> plugin<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>esbuildOptions
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token function">debug</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Scan completed in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> deps<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    deps<span class="token punctuation">,</span>
    missing
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u4E0D\u7BA1\u662F \u5173\u952E\u6B65\u9AA4\u4E8C <code>scanImports</code> \uFF0C\u8FD8\u662F\u5173\u952E\u6B65\u9AA4\u56DB\uFF0C\u90FD\u7528\u5230\u4E86 esbuild \u7684 build \u51FD\u6570\u3002</p><p>// TODO: build \u51FD\u6570\u6DF1\u5165\u3002</p>`,13),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{g as __pageData,m as default};
