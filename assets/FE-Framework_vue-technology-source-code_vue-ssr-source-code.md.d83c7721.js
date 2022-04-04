import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const m='{"title":"vue-server-renderer \u6E90\u7801\u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue SSR \u6E32\u67D3\u7684\u51E0\u4E2A\u9636\u6BB5","slug":"vue-ssr-\u6E32\u67D3\u7684\u51E0\u4E2A\u9636\u6BB5"},{"level":2,"title":"\u6E90\u7801\u89E3\u6790","slug":"\u6E90\u7801\u89E3\u6790"},{"level":3,"title":"\u4E00\u3001webpack \u6784\u5EFA\u7ED3\u679C","slug":"\u4E00\u3001webpack-\u6784\u5EFA\u7ED3\u679C"},{"level":2,"title":"\u4E8C\u3001\u521D\u59CB\u5316 renderer","slug":"\u4E8C\u3001\u521D\u59CB\u5316-renderer"},{"level":2,"title":"\u4E09\u3001\u6E32\u67D3\u9636\u6BB5 renderToString","slug":"\u4E09\u3001\u6E32\u67D3\u9636\u6BB5-rendertostring"},{"level":2,"title":"\u56DB\u3001HTML \u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A","slug":"\u56DB\u3001html-\u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A"},{"level":2,"title":"\u4E94\u3001\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5","slug":"\u4E94\u3001\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Framework/vue-technology-source-code/vue-ssr-source-code.md"}',p={},o=t(`<h1 id="vue-server-renderer-\u6E90\u7801\u89E3\u6790" tabindex="-1">vue-server-renderer \u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#vue-server-renderer-\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h1><h2 id="vue-ssr-\u6E32\u67D3\u7684\u51E0\u4E2A\u9636\u6BB5" tabindex="-1">Vue SSR \u6E32\u67D3\u7684\u51E0\u4E2A\u9636\u6BB5 <a class="header-anchor" href="#vue-ssr-\u6E32\u67D3\u7684\u51E0\u4E2A\u9636\u6BB5" aria-hidden="true">#</a></h2><ol><li>webpack \u7F16\u8BD1\u9636\u6BB5 <ol><li>\u5165\u53E3 entry-client.js \u751F\u6210\u7528\u4E8E\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u6E32\u67D3\u7684 js \u6587\u4EF6\u548C\u4E00\u4EFD\u7528\u4E8Etemplate\u7EC4\u88C5\u7684json \u6587\u4EF6\uFF1Avue-ssr-server-bundle.json</li><li>\u670D\u52A1\u7AEF\u6253\u5305\u5165\u53E3 entry-server.js\uFF0C\u751F\u6210\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684 json \u6587\u4EF6\uFF1Avue-ssr-server-bundle.json</li></ol></li><li>\u521D\u59CB\u5316 renderer \u9636\u6BB5\uFF1A <ol><li>\u4F7F\u7528 vue-server-renderer \u7684 API \u4F1A\u5728node\u542F\u52A8\u65F6\u521D\u59CB\u5316\u4E00\u4E2Arenderer \u5355\u4F8B\u5BF9\u8C61</li></ol></li><li>\u6E32\u67D3\u9636\u6BB5\uFF1A <ol><li>\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u5F53\u7528\u6237\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0Crenderer.renderToString \u6216\u8005 renderer.renderToStream \u51FD\u6570\u5C06\u5B8C\u6210 vue\u7EC4\u4EF6\u5230 html \u7247\u6BB5\u7684\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\u3002</li></ol></li><li>HTML \u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A <ol><li>\u6E32\u67D3\u9636\u6BB5\u6211\u4EEC\u5DF2\u7ECF\u62FF\u5230\u4E86vue\u7EC4\u4EF6\u6E32\u67D3\u7ED3\u679C\uFF0C\u5B83\u662F\u4E00\u4E2Ahtml\u5B57\u7B26\u4E32\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u5C55\u793A\u9875\u9762\u6211\u4EEC\u8FD8\u9700\u8981css\u3001js \u7B49\u4F9D\u8D56\u8D44\u6E90\u7684\u5F15\u5165\u6807\u7B7E \u548C \u901A\u8FC7 store \u540C\u6B65\u6211\u4EEC\u5728\u670D\u52A1\u7AEF\u7684\u6E32\u67D3\u6570\u636E\uFF0C\u8FD9\u4E9B\u6700\u7EC8\u7EC4\u88C5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684 html \u62A5\u6587\u8F93\u51FA\u5230\u6D4F\u89C8\u5668\u4E2D\u3002</li></ol></li><li>\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5 <ol><li>\u5F53\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E86\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE HTML\uFF0C\u7528\u6237\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230\u9875\u9762\u6E32\u67D3\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u7B49\u5F85js\u52A0\u8F7D\u548C\u6267\u884C\u3002\u4F46\u6B64\u65F6\u9875\u9762\u8FD8\u4E0D\u80FD\u4EA4\u4E92\uFF0C\u9700\u8981\u6FC0\u6D3B\u5BA2\u6237\u9875\u9762\uFF0C\u5373 hydirating \u8FC7\u7A0B\u3002</li></ol></li></ol><h2 id="\u6E90\u7801\u89E3\u6790" tabindex="-1">\u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><p>\u9488\u5BF9\u4E0A\u8FF0\u5404\u4E2A\u9636\u6BB5\uFF0C\u901A\u8FC7 vue-server-renderer \u7684\u6E90\u7801\u7406\u6E05\u5177\u4F53\u903B\u8F91\u3002</p><p>vue-server-renderer \u57FA\u672C\u5B8C\u6574\u5B9E\u73B0\u4E86\u4E00\u4E2A\u670D\u52A1\u7AEF\u7684 vue \uFF0C\u5305\u62EC\u6A21\u677F\u7F16\u8BD1\u3001\u7EC4\u4EF6\u6E32\u67D3\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u548C\u72B6\u6001\u66F4\u65B0\u7684\u6240\u6709\u529F\u80FD\u3002\u6838\u5FC3\u4EE3\u7801\u90FD\u8DDF vue \u5DEE\u4E0D\u591A\uFF0C\u5177\u4F53\u53EF\u4EE5\u770B vue \u6E90\u7801\u76F8\u5173\u7684\u6587\u7AE0\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u91CD\u70B9\u5173\u6CE8 renderer \u7684\u521B\u5EFA\u548C\u56DE\u8C03\u7684\u6267\u884C\u903B\u8F91\u3002</p><h3 id="\u4E00\u3001webpack-\u6784\u5EFA\u7ED3\u679C" tabindex="-1">\u4E00\u3001webpack \u6784\u5EFA\u7ED3\u679C <a class="header-anchor" href="#\u4E00\u3001webpack-\u6784\u5EFA\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u5F53\u91C7\u7528<code>VueServerRenderer.createBundleRenderer</code>\u521B\u5EFA bundle render \u6E32\u67D3\u65B9\u5F0F\u65F6\uFF1A</p><p>1\u3001\u901A\u8FC7 <code>entry-client.js / webpack.client.config.js</code> \u6784\u5EFA\u51FA\u5BA2\u6237\u7AEF\u4F9D\u8D56\u8D44\u6E90 \uFF1A</p><ul><li><p>Client Bundle \u5305\u542B\u4E86\u6240\u6709\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u8FD0\u884C\u7684\u811A\u672C\u548C\u9759\u6001\u8D44\u6E90\uFF0C\u5982\uFF1Ajs\u3001css\u56FE\u7247\u3001\u5B57\u4F53\u7B49\u3002</p></li><li><p>\u8FD8\u6709\u4E00\u4EFD clientManifest \u6587\u4EF6\u6E05\u5355\uFF1Avue-ssr-client-manifest.json\u3002</p><ul><li><p>\u6E05\u5355\u4E2Dinitial\u6570\u7EC4\u4E2D\u7684js\u5C06\u4F1A\u5728ssr\u8F93\u51FA\u65F6\u63D2\u5165\u5230html\u5B57\u7B26\u4E32\u4E2D\u4F5C\u4E3Apreload\u548Cscript\u811A\u672C\u5F15\u7528\u3002</p></li><li><p>async\u548Cmodules\u5C06\u914D\u5408\u68C0\u7D22\u51FA\u5F02\u6B65\u7EC4\u4EF6\u548C\u5F02\u6B65\u4F9D\u8D56\u5E93\u7684js\u6587\u4EF6\u7684\u5F15\u5165\uFF0C\u5728\u8F93\u51FA\u9636\u6BB5\u6211\u4EEC\u4F1A\u8BE6\u7EC6\u89E3\u8BFB\u3002</p></li></ul></li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span> 
  <span class="token string-property property">&quot;publicPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//cdn.xxx.cn/xxx/&quot;</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token string">&quot;static/js/app.80f0e94fe005dfb1b2d7.js&quot;</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;static/css/app.d3f8a9a55d0c0be68be0.css&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;initial&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token string">&quot;static/js/app.80f0e94fe005dfb1b2d7.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;static/css/app.d3f8a9a55d0c0be68be0.css&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;async&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token string">&quot;static/js/xxx.29dba471385af57c280c.js&quot;</span> 
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token string-property property">&quot;00f0587d&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">]</span> 
    <span class="token comment">// \u7701\u7565... </span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>2\u3001\u901A\u8FC7 <code>entry-server.js / webpack.server.config.js</code>\u6784\u5EFA\u51FA\u7684 vue-ssr-server-bundle.json \u5305\u542B\u4E86\u6240\u6709\u8981\u5728\u670D\u52A1\u7AEF\u8FD0\u884C\u7684\u4EE3\u7801\u5217\u8868\uFF0C\u548C\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u540D\u3002</p><div class="language-js"><pre><code><span class="token punctuation">{</span> 
  <span class="token string-property property">&quot;entry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/js/app.80f0e94fe005dfb1b2d7.js&quot;</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token string-property property">&quot;app.80f0e94fe005dfb1b2d7.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module.exports=function(t...&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6240\u6709\u670D\u52A1\u7AEF\u8FD0\u884C\u7684\u4EE3\u7801</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E8C\u3001\u521D\u59CB\u5316-renderer" tabindex="-1">\u4E8C\u3001\u521D\u59CB\u5316 renderer <a class="header-anchor" href="#\u4E8C\u3001\u521D\u59CB\u5316-renderer" aria-hidden="true">#</a></h2><p>vue-server-renderer \u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u521B\u5EFA renderer\uFF1A<code>createRenderer / createBundleRenderer</code></p><div class="language-js"><pre><code><span class="token comment">// \u7B2C\u4E00\u79CD\uFF1A\u7B80\u5355\u7684\u9002\u5408\u6F14\u793A\u5B66\u4E60</span>
<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u7B2C\u4E8C\u79CD\uFF1A\u9002\u5408\u5B9E\u9645\u5DE5\u7A0B\uFF0C\u9700\u8981\u914D\u5408\u6784\u5EFA\u5DE5\u5177\u548C\u6784\u5EFA\u63D2\u4EF6</span>
<span class="token keyword">const</span> VueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> serverBundle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/server/vue-ssr-server-bundle.json&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> clientManifest <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/client/vue-ssr-client-manifest.json&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> VueServerRenderer<span class="token punctuation">.</span><span class="token function">createBundleRenderer</span><span class="token punctuation">(</span>serverBundle<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">runInNewContext</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  template<span class="token punctuation">,</span>
  clientManifest
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6E90\u7801\u5165\u53E3</p><div class="language-js"><pre><code><span class="token comment">// const VueServerRenderer = require(&#39;vue-server-renderer&#39;) \u6240\u83B7\u5F97\u7684\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">createRenderer$1</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> options <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isUnaryTag</span><span class="token operator">:</span> isUnaryTag<span class="token punctuation">,</span>
    <span class="token literal-property property">canBeLeftOpenTag</span><span class="token operator">:</span> canBeLeftOpenTag<span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> modules<span class="token punctuation">,</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token function">extend</span><span class="token punctuation">(</span>baseDirectives<span class="token punctuation">,</span> options<span class="token punctuation">.</span>directives<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> createBundleRenderer <span class="token operator">=</span> <span class="token function">createBundleRendererCreator</span><span class="token punctuation">(</span>createRenderer$1<span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span>createRenderer <span class="token operator">=</span> createRenderer$1<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>createBundleRenderer <span class="token operator">=</span> createBundleRenderer<span class="token punctuation">;</span>
</code></pre></div><p>\u770B\u4E0B \u4ECE<code>createRenderer</code>\u5230<code>createBundleRenderer</code> \u7684\u5DEE\u5F02\u903B\u8F91\u7684\u5173\u952E\u51FD\u6570<code>createBundleRendererCreator</code></p><div class="language-js"><pre><code>
<span class="token keyword">function</span> <span class="token function">createBundleRendererCreator</span> <span class="token punctuation">(</span><span class="token parameter">createRenderer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">createBundleRenderer</span> <span class="token punctuation">(</span> <span class="token parameter">bundle<span class="token punctuation">,</span>  rendererOptions</span>  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> rendererOptions <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> rendererOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> files<span class="token punctuation">,</span> entry<span class="token punctuation">,</span> maps<span class="token punctuation">;</span>
    <span class="token keyword">var</span> basedir <span class="token operator">=</span> rendererOptions<span class="token punctuation">.</span>basedir<span class="token punctuation">;</span>

    <span class="token comment">// load bundle if given filepath</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token keyword">typeof</span> bundle <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span>
      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js(on)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      path$2<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span> <span class="token comment">// var path$2 = require(&#39;path&#39;);</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> isJSON <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.json$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        basedir <span class="token operator">=</span> basedir <span class="token operator">||</span> path$2<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        bundle <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>bundle<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isJSON<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            bundle <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>bundle<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid JSON bundle file: &quot;</span> <span class="token operator">+</span> bundle<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot locate bundle file: &quot;</span> <span class="token operator">+</span> bundle<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * server bundle
     * { 
     *    &quot;entry&quot;: &quot;static/js/app.80f0e94fe005dfb1b2d7.js&quot;, 
     *    &quot;files&quot;: { 
     *       &quot;app.80f0e94fe005dfb1b2d7.js&quot;: &quot;module.exports=function(t...&quot;, // \u6240\u6709\u670D\u52A1\u7AEF\u8FD0\u884C\u7684\u4EE3\u7801
     *  } 
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> bundle <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entry <span class="token operator">=</span> bundle<span class="token punctuation">.</span>entry<span class="token punctuation">;</span>
      files <span class="token operator">=</span> bundle<span class="token punctuation">.</span>files<span class="token punctuation">;</span>

      basedir <span class="token operator">=</span> basedir <span class="token operator">||</span> bundle<span class="token punctuation">.</span>basedir<span class="token punctuation">;</span>
      maps <span class="token operator">=</span> <span class="token function">createSourceMapConsumers</span><span class="token punctuation">(</span>bundle<span class="token punctuation">.</span>maps<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> entry <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> files <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token constant">INVALID_MSG</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> bundle <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entry <span class="token operator">=</span> <span class="token string">&#39;__vue_ssr_bundle__&#39;</span><span class="token punctuation">;</span>
      files <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;__vue_ssr_bundle__&#39;</span><span class="token operator">:</span> bundle <span class="token punctuation">}</span><span class="token punctuation">;</span>
      maps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token constant">INVALID_MSG</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> renderer <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span>rendererOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/**
     * \u8FD9\u91CC\u521B\u5EFA\u7684 run \u5C31\u4EE3\u66FF\u4E86\u6211\u4EEC\u5728 server.js \u624B\u52A8\u6267\u884C createApp(context) \u4EE3\u7801\u7684\u5173\u952E\u3002
     */</span>
    <span class="token keyword">var</span> run <span class="token operator">=</span> <span class="token function">createBundleRunner</span><span class="token punctuation">(</span>
      entry<span class="token punctuation">,</span>
      files<span class="token punctuation">,</span>
      basedir<span class="token punctuation">,</span>
      rendererOptions<span class="token punctuation">.</span>runInNewContext
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">renderToString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7701\u7565\u5230 \u6E32\u67D3\u9636\u6BB5\u5206\u6790</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function-variable function">renderToStream</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7701\u7565\u5230 \u6E32\u67D3\u9636\u6BB5\u5206\u6790</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>createBundleRendererCreator</code>\u51FD\u6570\u7684\u5173\u952E\u662F\u521B\u5EFA\u4E00\u4E2A run \u51FD\u6570\u548C renderer \u51FD\u6570\u3002\u5176\u4E2D run \u6267\u884C\u51FD\u6570\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F7F\u7528 bundle render \u6E32\u67D3\u65B9\u5F0F\u65F6\u4E0D\u9700\u8981\u6211\u4EEC\u624B\u52A8\u5728 server.js \u4E2D\u6267\u884C createApp \u7684\u539F\u56E0\u3002</p><p>\u4E4B\u540E\u5C31\u662F\u5171\u540C\u7684\u6838\u5FC3\u4EE3\u7801 createRender \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createRenderer</span> <span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> ref <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> ref <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> modules <span class="token operator">=</span> ref<span class="token punctuation">.</span>modules<span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> modules <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> modules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> directives <span class="token operator">=</span> ref<span class="token punctuation">.</span>directives<span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> directives <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> isUnaryTag <span class="token operator">=</span> ref<span class="token punctuation">.</span>isUnaryTag<span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> isUnaryTag <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> isUnaryTag <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> template <span class="token operator">=</span> ref<span class="token punctuation">.</span>template<span class="token punctuation">;</span>
  <span class="token keyword">var</span> inject <span class="token operator">=</span> ref<span class="token punctuation">.</span>inject<span class="token punctuation">;</span>
  <span class="token keyword">var</span> cache <span class="token operator">=</span> ref<span class="token punctuation">.</span>cache<span class="token punctuation">;</span>
  <span class="token keyword">var</span> shouldPreload <span class="token operator">=</span> ref<span class="token punctuation">.</span>shouldPreload<span class="token punctuation">;</span>
  <span class="token keyword">var</span> shouldPrefetch <span class="token operator">=</span> ref<span class="token punctuation">.</span>shouldPrefetch<span class="token punctuation">;</span>
  <span class="token keyword">var</span> clientManifest <span class="token operator">=</span> ref<span class="token punctuation">.</span>clientManifest<span class="token punctuation">;</span>
  <span class="token keyword">var</span> serializer <span class="token operator">=</span> ref<span class="token punctuation">.</span>serializer<span class="token punctuation">;</span>

  <span class="token keyword">var</span> render <span class="token operator">=</span> <span class="token function">createRenderFunction</span><span class="token punctuation">(</span>modules<span class="token punctuation">,</span> directives<span class="token punctuation">,</span> isUnaryTag<span class="token punctuation">,</span> cache<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> templateRenderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TemplateRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> template<span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> inject<span class="token punctuation">,</span>
    <span class="token literal-property property">shouldPreload</span><span class="token operator">:</span> shouldPreload<span class="token punctuation">,</span>
    <span class="token literal-property property">shouldPrefetch</span><span class="token operator">:</span> shouldPrefetch<span class="token punctuation">,</span>
    <span class="token literal-property property">clientManifest</span><span class="token operator">:</span> clientManifest<span class="token punctuation">,</span>
    <span class="token literal-property property">serializer</span><span class="token operator">:</span> serializer
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">renderToString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">renderToString</span> <span class="token punctuation">(</span><span class="token parameter">component<span class="token punctuation">,</span> context<span class="token punctuation">,</span> cb</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u5230 \u6E32\u67D3\u9636\u6BB5\u5206\u6790</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">renderToStream</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">renderToStream</span> <span class="token punctuation">(</span><span class="token parameter">component<span class="token punctuation">,</span> context</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7701\u7565\u5230 \u6E32\u67D3\u9636\u6BB5\u5206\u6790</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 createRenderer \u51FD\u6570\u7684\u6838\u5FC3\u662F\u521B\u5EFA\u4E86 render \u548C templateRenderer \u4E24\u4E2A\u51FD\u6570\u3002</p><ul><li>render \u7528\u4E8E\u6E32\u67D3 vue \u7EC4\u4EF6\u6210 html \u7247\u6BB5\u7684\u5B57\u7B26\u4E32\u7ED3\u679C</li><li>templateRenderer \u7528\u4E8E\u6839\u636E\u6211\u4EEC\u4F20\u5165\u7684 template \u6765\u7EC4\u88C5\u6700\u7EC8\u9700\u8981\u8FD4\u56DE\u7684 html \u7ED3\u679C\uFF0C\u7528\u4E8E\u6D4F\u89C8\u5668\u6E32\u67D3\u3002</li></ul><h2 id="\u4E09\u3001\u6E32\u67D3\u9636\u6BB5-rendertostring" tabindex="-1">\u4E09\u3001\u6E32\u67D3\u9636\u6BB5 renderToString <a class="header-anchor" href="#\u4E09\u3001\u6E32\u67D3\u9636\u6BB5-rendertostring" aria-hidden="true">#</a></h2><p>\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u5F53\u7528\u6237\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0Crenderer.renderToString \u6216\u8005 renderer.renderToStream \u51FD\u6570\u5C06\u5B8C\u6210 vue\u7EC4\u4EF6\u5230 html \u7247\u6BB5\u7684\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\u3002</p><div class="language-js"><pre><code>server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528 createBundleRenderer \u521B\u5EFA\u7684 renderer \u4E2D\u4F1A\u5728\u5185\u90E8\u6DFB\u52A0 context.state / context.rendered </span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url<span class="token punctuation">}</span>
  renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6240\u4EE5\u6211\u4EEC\u770B\u4E0B <code>renderToString</code> \u7684\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">renderToString</span> <span class="token punctuation">(</span><span class="token parameter">component<span class="token punctuation">,</span> context<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> assign<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> context <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cb <span class="token operator">=</span> context<span class="token punctuation">;</span>
    context <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    templateRenderer<span class="token punctuation">.</span><span class="token function">bindRenderFns</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// no callback, return Promise</span>
  <span class="token keyword">var</span> promise<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    assign <span class="token operator">=</span> <span class="token function">createPromiseCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    promise <span class="token operator">=</span> assign<span class="token punctuation">.</span>promise
    cb <span class="token operator">=</span> assign<span class="token punctuation">.</span>cb
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> write <span class="token operator">=</span> <span class="token function">createWriteFunction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> text<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6E32\u67D3\u9636\u6BB5\uFF1A renderer \u7528\u6765\u6E32\u67D3 vue \u7EC4\u4EF6\u6210 marker\uFF1B</span>
    <span class="token function">render</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> write<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>rendered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// vue \u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u56DE\u8C03\u65F6\u673A</span>
        context<span class="token punctuation">.</span><span class="token function">rendered</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5728\u6E32\u67D3\u9636\u6BB5\u7684\u56DE\u8C03\u4E2D\uFF0C\u7EC4\u88C5\u8F93\u51FA HTL\uFF1AtemplateRenderer \u7528\u6765\u5904\u7406\u7EC4\u88C5\u6A21\u677F\u6587\u4EF6\u6210\u6700\u7EC8\u8F93\u51FA\u7684 html\uFF0C\u6B64\u65F6\u5C31\u4F1A\u4F7F\u7528 clientManifest</span>
          <span class="token keyword">var</span> res <span class="token operator">=</span> templateRenderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// function template returning promise</span>
            res<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> html<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D\u56DE\u8C03\u7684\u5927\u90E8\u5206\u4EE3\u7801\u90FD\u662F\u4E3A\u4E86\u517C\u5BB9 <code>fn(err.html) / promise.then(html)</code>\uFF0C\u5173\u952E\u903B\u8F91\u5C31\u662F\u8C03\u7528 <code>createRender</code>\u51FD\u6570\u751F\u6210\u7684 <code>render / templateRender</code>\u65B9\u6CD5\u3002\u5E76\u4E14 templateRnder \u662F\u5728 render \u5B8C\u6210\u540E\u7684\u56DE\u8C03\u4E2D\u6267\u884C\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u5148\u6765\u5173\u6CE8\u521B\u5EFA <code>render</code> \u7684 <code>createRenderFunction</code>\u7684\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createRenderFunction</span> <span class="token punctuation">(</span> <span class="token parameter">modules<span class="token punctuation">,</span> directives<span class="token punctuation">,</span> isUnaryTag<span class="token punctuation">,</span> cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span> <span class="token parameter">component<span class="token punctuation">,</span> write<span class="token punctuation">,</span> userContext<span class="token punctuation">,</span> done</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    warned <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1. \u751F\u6210\u6E32\u67D3\u4E0A\u4E0B\u6587</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RenderContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">activeInstance</span><span class="token operator">:</span> component<span class="token punctuation">,</span>
      <span class="token literal-property property">userContext</span><span class="token operator">:</span> userContext<span class="token punctuation">,</span>
      <span class="token literal-property property">write</span><span class="token operator">:</span> write<span class="token punctuation">,</span> 
      <span class="token literal-property property">done</span><span class="token operator">:</span> done<span class="token punctuation">,</span> 
      <span class="token literal-property property">renderNode</span><span class="token operator">:</span> renderNode<span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> modules<span class="token punctuation">,</span> 
      <span class="token literal-property property">isUnaryTag</span><span class="token operator">:</span> isUnaryTag<span class="token punctuation">,</span> 
      <span class="token literal-property property">directives</span><span class="token operator">:</span> directives<span class="token punctuation">,</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> cache
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. \u5B89\u88C5\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5DE5\u5177\u51FD\u6570</span>
    <span class="token function">installSSRHelpers</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. \u7F16\u8BD1\u7EC4\u4EF6\u751F\u6210 $options.render \u5C5E\u6027\uFF0C\u5373\u751F\u6210 compiled \u7F16\u8BD1\u6A21\u677F\uFF0C\u751F\u6210$options.render \u548C $options.staticRenderFns\uFF0C\u540C Vue \u6E90\u7801\u7F16\u8BD1\u9636\u6BB5\u4E00\u6837 </span>
    <span class="token function">normalizeRender</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// 5. \u6E32\u67D3\u7EC4\u4EF6\uFF0C\u6BD4\u8F83\u4E0B vue \u6E90\u7801\uFF1A vm._update(vm._render(), hydrating), \u5DEE\u5F02\u5C31\u662F _update \u8FC7\u7A0B\uFF0C\u5373 patch \u8FC7\u7A0B</span>
      <span class="token comment">// Vue.prototype._render \u5173\u952E\u4EE3\u7801\u5C31\u662F\u6267\u884C\u7F16\u8BD1\u751F\u6210\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u5373 $options.render\uFF1A</span>
      <span class="token comment">// vnode = component.$options.render.call(vm, vm.$createElement);</span>
      <span class="token function">renderNode</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 4. \u7B49\u5F85\u7EC4\u4EF6 serverPrefetch \u6267\u884C\uFF0C\u83B7\u53D6\u7EC4\u4EF6\u4F9D\u8D56\u7684\u6570\u636E</span>
    <span class="token function">waitForServerPrefetch</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6DF1\u5165\u5230\u4E0A\u9762\u6BCF\u4E00\u6B65\u51FD\u6570\u7684\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
 * 1. \u751F\u6210\u6E32\u67D3\u4E0A\u4E0B\u6587
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">RenderContext</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">RenderContext</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>userContext <span class="token operator">=</span> options<span class="token punctuation">.</span>userContext<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>activeInstance <span class="token operator">=</span> options<span class="token punctuation">.</span>activeInstance<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>renderStates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>write <span class="token operator">=</span> options<span class="token punctuation">.</span>write<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>done <span class="token operator">=</span> options<span class="token punctuation">.</span>done<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>renderNode <span class="token operator">=</span> options<span class="token punctuation">.</span>renderNode<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>isUnaryTag <span class="token operator">=</span> options<span class="token punctuation">.</span>isUnaryTag<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>modules <span class="token operator">=</span> options<span class="token punctuation">.</span>modules<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>directives <span class="token operator">=</span> options<span class="token punctuation">.</span>directives<span class="token punctuation">;</span>

  <span class="token keyword">var</span> cache <span class="token operator">=</span> options<span class="token punctuation">.</span>cache<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cache <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">.</span>get <span class="token operator">||</span> <span class="token operator">!</span>cache<span class="token punctuation">.</span>set<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;renderer cache must implement at least get &amp; set.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> cache<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>get <span class="token operator">=</span> cache <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeAsync</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>has <span class="token operator">=</span> cache <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeAsync</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> <span class="token string">&#39;has&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">RenderContext</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">next</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> lastState <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderStates<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderStates<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>lastState<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* eslint-disable no-case-declarations */</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>lastState<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;Element&#39;</span><span class="token operator">:</span>
      <span class="token keyword">case</span> <span class="token string">&#39;Fragment&#39;</span><span class="token operator">:</span>
        <span class="token keyword">var</span> children <span class="token operator">=</span> lastState<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
      <span class="token keyword">var</span> total <span class="token operator">=</span> lastState<span class="token punctuation">.</span>total<span class="token punctuation">;</span>
        <span class="token keyword">var</span> rendered <span class="token operator">=</span> lastState<span class="token punctuation">.</span>rendered<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rendered <span class="token operator">&lt;</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderNode</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>rendered<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>renderStates<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>lastState<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Element&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>lastState<span class="token punctuation">.</span>endTag<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;Component&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>renderStates<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>activeInstance <span class="token operator">=</span> lastState<span class="token punctuation">.</span>prevActive<span class="token punctuation">;</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token string">&#39;ComponentWithCache&#39;</span><span class="token operator">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>renderStates<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> buffer <span class="token operator">=</span> lastState<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span>
        <span class="token keyword">var</span> bufferIndex <span class="token operator">=</span> lastState<span class="token punctuation">.</span>bufferIndex<span class="token punctuation">;</span>
        <span class="token keyword">var</span> componentBuffer <span class="token operator">=</span> lastState<span class="token punctuation">.</span>componentBuffer<span class="token punctuation">;</span>
        <span class="token keyword">var</span> key <span class="token operator">=</span> lastState<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">html</span><span class="token operator">:</span> buffer<span class="token punctuation">[</span>bufferIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">components</span><span class="token operator">:</span> componentBuffer<span class="token punctuation">[</span>bufferIndex<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bufferIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// this is a top-level cached component,</span>
          <span class="token comment">// exit caching mode.</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>write<span class="token punctuation">.</span>caching <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// parent component is also being cached,</span>
          <span class="token comment">// merge self into parent&#39;s result</span>
          buffer<span class="token punctuation">[</span>bufferIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> result<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
          <span class="token keyword">var</span> prev <span class="token operator">=</span> componentBuffer<span class="token punctuation">[</span>bufferIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          result<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> prev<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        buffer<span class="token punctuation">.</span>length <span class="token operator">=</span> bufferIndex<span class="token punctuation">;</span>
        componentBuffer<span class="token punctuation">.</span>length <span class="token operator">=</span> bufferIndex<span class="token punctuation">;</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * 2. \u5B89\u88C5\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5DE5\u5177\u51FD\u6570
 */</span>
<span class="token keyword">var</span> ssrHelpers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_ssrEscape</span><span class="token operator">:</span> escape<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrNode</span><span class="token operator">:</span> renderStringNode<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrList</span><span class="token operator">:</span> renderStringList<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrAttr</span><span class="token operator">:</span> renderAttr<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrAttrs</span><span class="token operator">:</span> renderAttrs$1<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrDOMProps</span><span class="token operator">:</span> renderDOMProps$1<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrClass</span><span class="token operator">:</span> renderSSRClass<span class="token punctuation">,</span>
  <span class="token literal-property property">_ssrStyle</span><span class="token operator">:</span> renderSSRStyle
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">installSSRHelpers</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_ssrNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> Vue <span class="token operator">=</span> vm<span class="token punctuation">.</span>constructor<span class="token punctuation">;</span>
  <span class="token comment">// \u5411\u4E0A\u627E\u5230\u6839\u7684 vue \u6784\u9020\u51FD\u6570</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>super<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue <span class="token operator">=</span> Vue<span class="token punctuation">.</span>super<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">extend</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> ssrHelpers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>FunctionalRenderContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">extend</span><span class="token punctuation">(</span>Vue<span class="token punctuation">.</span><span class="token class-name">FunctionalRenderContext</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> ssrHelpers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 3. \u7F16\u8BD1\u7EC4\u4EF6\u751F\u6210 $options.render \u5C5E\u6027\uFF0C\u5373\u751F\u6210 compiled \u7F16\u8BD1\u6A21\u677F\uFF0C\u751F\u6210$options.render \u548C $options.staticRenderFns\uFF0C
 * \u540C Vue \u6E90\u7801\u7F16\u8BD1\u9636\u6BB5\u4E00\u6837 
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">normalizeRender</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ref <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
  <span class="token keyword">var</span> render <span class="token operator">=</span> ref<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
  <span class="token keyword">var</span> template <span class="token operator">=</span> ref<span class="token punctuation">.</span>template<span class="token punctuation">;</span>
  <span class="token keyword">var</span> _scopeId <span class="token operator">=</span> ref<span class="token punctuation">.</span>_scopeId<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> compiled <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scopeId</span><span class="token operator">:</span> _scopeId<span class="token punctuation">,</span>
        <span class="token literal-property property">warn</span><span class="token operator">:</span> onCompilationError
      <span class="token punctuation">}</span><span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>

      vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>render <span class="token operator">=</span> compiled<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
      vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> compiled<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token string">&quot;render function or template not defined in component: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name <span class="token operator">||</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>_componentTag <span class="token operator">||</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * 4. \u7B49\u5F85\u7EC4\u4EF6 serverPrefetch \u6267\u884C\uFF0C\u83B7\u53D6\u7EC4\u4EF6\u4F9D\u8D56\u7684\u6570\u636E
 */</span>
<span class="token keyword">function</span> <span class="token function">waitForServerPrefetch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> handlers <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>serverPrefetch<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> handlers <span class="token operator">=</span> <span class="token punctuation">[</span>handlers<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> result<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 5. \u6E32\u67D3\u7EC4\u4EF6\uFF0C\u6BD4\u8F83\u4E0B vue \u6E90\u7801\uFF1A vm._update(vm._render(), hydrating), \u5DEE\u5F02\u5C31\u662F _update \u8FC7\u7A0B\uFF0C\u5373 patch \u8FC7\u7A0B
 */</span>
<span class="token keyword">function</span> <span class="token function">renderNode</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> isRoot<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u6839\u636E\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u4F7F\u7528\u4E0D\u540C\u65B9\u5F0F\u5904\u7406
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>isString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">renderStringNode$1</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>componentOptions<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">renderComponent</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> isRoot<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">renderElement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> isRoot<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>asyncFactory<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// async component</span>
      <span class="token function">renderAsyncComponent</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> isRoot<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;!--&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>
      node<span class="token punctuation">.</span>raw <span class="token operator">?</span> node<span class="token punctuation">.</span>text <span class="token operator">:</span> <span class="token function">escape</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      context<span class="token punctuation">.</span>next
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>renderNode \u7684\u7ED3\u679C\u5C31\u662F\u8C03\u7528\u4F20\u5165\u7684 <code>write</code>\u65B9\u6CD5\u62FC\u63A5\u51FA\u8FD4\u56DE\u7684 HTML \u7247\u6BB5\u5B57\u7B26\u4E32\u3002</p><p>\u770B\u4E0B\u4F20\u5165\u7684 <code>context.write</code>\u7684\u5B9E\u73B0\uFF0C\u5173\u952E\u5C31\u662F\uFF1A<code> reslut += text</code> \u5B57\u6BB5\u4E32\u7684\u62FC\u63A5\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> write <span class="token operator">=</span> <span class="token function">createWriteFunction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> text<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u56DB\u3001html-\u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A" tabindex="-1">\u56DB\u3001HTML \u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A <a class="header-anchor" href="#\u56DB\u3001html-\u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A" aria-hidden="true">#</a></h2><p>\u6E32\u67D3\u9636\u6BB5\u6211\u4EEC\u5DF2\u7ECF\u62FF\u5230\u4E86vue\u7EC4\u4EF6\u6E32\u67D3\u7ED3\u679C\uFF0C\u5B83\u662F\u4E00\u4E2Ahtml \u7247\u6BB5\u5B57\u7B26\u4E32\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u5C55\u793A\u9875\u9762\u6211\u4EEC\u8FD8\u9700\u8981css\u3001js \u7B49\u4F9D\u8D56\u8D44\u6E90\u7684\u5F15\u5165\u6807\u7B7E \u548C \u901A\u8FC7 store \u540C\u6B65\u6211\u4EEC\u5728\u670D\u52A1\u7AEF\u7684\u6E32\u67D3\u6570\u636E\uFF0C\u8FD9\u4E9B\u6700\u7EC8\u7EC4\u88C5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684 html \u62A5\u6587\u8F93\u51FA\u5230\u6D4F\u89C8\u5668\u4E2D\u3002</p><p>\u8FD9\u4E9B\u7684\u5B9E\u73B0\u5C31\u662F templateRender \u51FD\u6570\uFF0C\u5173\u952E\u662F\u6211\u4EEC\u4F20\u5165\u7684\u6A21\u677F\u6587\u4EF6 <code>template</code> \u548C\u6784\u5EFA\u51FA\u6765\u7684 <code>clientManifest</code></p><div class="language-js"><pre><code><span class="token keyword">var</span> templateRenderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TemplateRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> template<span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> inject<span class="token punctuation">,</span>
    <span class="token literal-property property">shouldPreload</span><span class="token operator">:</span> shouldPreload<span class="token punctuation">,</span>
    <span class="token literal-property property">shouldPrefetch</span><span class="token operator">:</span> shouldPrefetch<span class="token punctuation">,</span>
    <span class="token literal-property property">clientManifest</span><span class="token operator">:</span> clientManifest<span class="token punctuation">,</span>
    <span class="token literal-property property">serializer</span><span class="token operator">:</span> serializer
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u770B\u4E0B <code>TemplateRenderer</code> \u6784\u5EFA\u7C7B\u7684\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">TemplateRenderer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">TemplateRenderer</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>inject <span class="token operator">=</span> options<span class="token punctuation">.</span>inject <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  
  <span class="token comment">// \u7B2C\u4E00\u6B65\uFF1A\u89E3\u6790\u4F20\u5165\u7684\u6A21\u677F\u6587\u4EF6 template  </span>
  <span class="token keyword">var</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>parsedTemplate <span class="token operator">=</span> template
    <span class="token operator">?</span> <span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
      <span class="token operator">?</span> <span class="token function">parseTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
      <span class="token operator">:</span> template
    <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// function used to serialize initial state JSON</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>serialize <span class="token operator">=</span> options<span class="token punctuation">.</span>serializer <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">serialize</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">isJSON</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7B2C\u4E8C\u6B65\uFF1A\u89E3\u6790\u4F20\u5165\u7684 clientManifest</span>
  <span class="token comment">// extra functionality with client manifest</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>clientManifest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> clientManifest <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clientManifest <span class="token operator">=</span> options<span class="token punctuation">.</span>clientManifest<span class="token punctuation">;</span>
    <span class="token comment">// ensure publicPath ends with /</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>publicPath <span class="token operator">=</span> clientManifest<span class="token punctuation">.</span>publicPath <span class="token operator">===</span> <span class="token string">&#39;&#39;</span>
      <span class="token operator">?</span> <span class="token string">&#39;&#39;</span>
      <span class="token operator">:</span> clientManifest<span class="token punctuation">.</span>publicPath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^\\/])$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// preload/prefetch directives</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>preloadFiles <span class="token operator">=</span> <span class="token punctuation">(</span>clientManifest<span class="token punctuation">.</span>initial <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>normalizeFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prefetchFiles <span class="token operator">=</span> <span class="token punctuation">(</span>clientManifest<span class="token punctuation">.</span>async <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>normalizeFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// initial async chunk mapping</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mapFiles <span class="token operator">=</span> <span class="token function">createMapper</span><span class="token punctuation">(</span>clientManifest<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5148\u770B\u4E0B\u5BF9\u6A21\u677F\u7684\u89E3\u6790\u51FD\u6570\u5904\u7406\u903B\u8F91\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parseTemplate</span> <span class="token punctuation">(</span>
  <span class="token parameter">template<span class="token punctuation">,</span>
  contentPlaceholder</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> contentPlaceholder <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> contentPlaceholder <span class="token operator">=</span> <span class="token string">&#39;&lt;!--vue-ssr-outlet--&gt;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> template
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> i <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/head&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> j <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>contentPlaceholder<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Content placeholder not found in template.&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;body&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      i <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token function">compile$1</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span> compileOptions<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">neck</span><span class="token operator">:</span> <span class="token function">compile$1</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> compileOptions<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tail</span><span class="token operator">:</span> <span class="token function">compile$1</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j <span class="token operator">+</span> contentPlaceholder<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">,</span> compileOptions<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u6211\u4EEC\u770B\u5230\u719F\u6089\u7684\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6807\u8BB0<code>&lt;!--vue-ssr-outlet--&gt;</code>\uFF0C\u4EE5\u6B64\u4E3A\u57FA\u7840\uFF0C\u5C06\u6A21\u677F\u6587\u4EF6\u5206\u4E3A <code>head / neck / tail</code>\u4E09\u90E8\u5206\u8FD4\u56DE\u3002</p><p>\u5728 render \u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u6700\u7EC8\u8FD4\u56DE HTML \u7684\u51FD\u6570\u662F\u8C03\u7528 <code>var res = templateRenderer.render(result, context);</code>\u6240\u4EE5\uFF0C\u6211\u4EEC\u770B\u4E0B <code>TemplateRenderer.prototype.render</code>\u7684\u5B9A\u4E49\uFF1A</p><div class="language-js"><pre><code><span class="token class-name">TemplateRenderer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> template <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parsedTemplate<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;render cannot be called without a template.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  context <span class="token operator">=</span> context <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> template <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">template</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>inject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      template<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token punctuation">(</span>context<span class="token punctuation">.</span>head <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderResourceHints</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderStyles</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      template<span class="token punctuation">.</span><span class="token function">neck</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      content <span class="token operator">+</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderState</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderScripts</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      template<span class="token punctuation">.</span><span class="token function">tail</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      template<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      template<span class="token punctuation">.</span><span class="token function">neck</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span>
      content <span class="token operator">+</span>
      template<span class="token punctuation">.</span><span class="token function">tail</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>\u770B\u5230\u8FD9\u91CC\u5C31\u660E\u767D\uFF0C\u6700\u7EC8\u662F\u5C06 render \u51FD\u6570\u6E32\u67D3\u7684\u7ED3\u679C content \u4E0E head / neck / tail \u5B8C\u6210\u62FC\u88C5\u3002\u5173\u4E8E\u6BCF\u90E8\u5206\u5177\u4F53\u7684\u5DE5\u5177\u51FD\u6570 <code>renderResourceHints / renderStyles /renderState / renderScripts </code> \u53EF\u4EE5\u81EA\u884C\u67E5\u770B\u6E90\u7801\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u5173\u6CE8\u4E0B\u5B9E\u73B0\u540C\u6B65\u5E94\u7528\u6570\u636E\u72B6\u6001\u540C\u6B65 store.state \u7684\u5B9E\u73B0 <code>renderState</code></p><div class="language-js"><pre><code><span class="token class-name">TemplateRenderer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">renderState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">renderState</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ref <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> contextKey <span class="token operator">=</span> ref<span class="token punctuation">.</span>contextKey<span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> contextKey <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> contextKey <span class="token operator">=</span> <span class="token string">&#39;state&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> windowKey <span class="token operator">=</span> ref<span class="token punctuation">.</span>windowKey<span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> windowKey <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token punctuation">)</span> windowKey <span class="token operator">=</span> <span class="token string">&#39;__INITIAL_STATE__&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> state <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span>context<span class="token punctuation">[</span>contextKey<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> autoRemove <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> nonceAttr <span class="token operator">=</span> context<span class="token punctuation">.</span>nonce <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot; nonce=\\&quot;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>nonce<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> context<span class="token punctuation">[</span>contextKey<span class="token punctuation">]</span>
    <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token string">&quot;&lt;script&quot;</span> <span class="token operator">+</span> nonceAttr <span class="token operator">+</span> <span class="token string">&quot;&gt;window.&quot;</span> <span class="token operator">+</span> windowKey <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> state <span class="token operator">+</span> autoRemove <span class="token operator">+</span> <span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E94\u3001\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5" tabindex="-1">\u4E94\u3001\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5 <a class="header-anchor" href="#\u4E94\u3001\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5" aria-hidden="true">#</a></h2><p>\u5F53\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E86\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE HTML\uFF0C\u7528\u6237\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230\u9875\u9762\u6E32\u67D3\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u7B49\u5F85js\u52A0\u8F7D\u548C\u6267\u884C\u3002</p><p>\u4F46\u6B64\u65F6\u9875\u9762\u8FD8\u4E0D\u80FD\u4EA4\u4E92\uFF0C\u9700\u8981\u6FC0\u6D3B\u5BA2\u6237\u9875\u9762\uFF0C\u5373 hydirating \u8FC7\u7A0B\u3002 \u8FD9\u91CC\u5C31\u6D89\u53CA Vue \u7684\u6E90\u7801\u90E8\u5206\u3002</p><blockquote><p>\u5148\u6765\u89E3\u91CA\u4E00\u4E0B hydration\uFF0C\u8FD9\u4E2A\u6982\u5FF5\u548C\u540C\u6784\u5E94\u7528\u4E2D\u6570\u636E\u7684\u83B7\u53D6\u548C\u6D88\u8D39\u6709\u5173\u3002\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\u65F6\uFF0C\u9700\u8981\u5728\u670D\u52A1\u7AEF\u8BF7\u6C42\u63A5\u53E3\u9884\u53D6\u6570\u636E\uFF0C\u5904\u7406\u5E76\u51C6\u5907\u597D\u6570\u636E\u72B6\u6001\uFF08\u5982\u679C\u7528 vuex\uFF0C\u5C31\u8FDB\u884C store \u66F4\u65B0\uFF09\u3002\u4E3A\u4E86\u907F\u514D\u5BA2\u6237\u7AEF\u91CD\u590D\u8BF7\u6C42\u8FD9\u90E8\u5206\u5DF2\u7ECF\u9884\u53D6\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u9700\u8981\u4FDD\u7559\u4F4F\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4E00\u822C\u7684\u505A\u6CD5\u662F\u5728\u670D\u52A1\u5668\u7AEF\u8FD4\u56DE HTML \u5B57\u7B26\u4E32\u7684\u65F6\u5019\uFF0C\u5C06\u6570\u636E\u4E00\u5E76\u8FD4\u56DE\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A<strong>\u8131\u6C34\uFF08dehydrate\uFF09</strong>\u3002<code>&lt;script&gt;window.____INITIAL_STATE__ = context.state;&lt;/script&gt;</code>\uFF1B<br>\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3\u65F6\uFF0C\u5C31\u4E0D\u518D\u9700\u8981\u8FDB\u884C\u8FD9\u90E8\u5206\u6570\u636E\u72B6\u6001\u7684\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u670D\u52A1\u5668\u4E0B\u53D1\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A<strong>\u6CE8\u6C34\uFF08hydrate\uFF09</strong>\u3002<code>if (window.__INITIAL_STATE__) {store.replaceState(window.__INITIAL_STATE__)}</code></p></blockquote><div class="language-js"><pre><code><span class="token comment">/**
 * Vue \u6E32\u67D3\u6D41\u7A0B
 * 1. HTML \u6A21\u677F\uFF0C\u53EA\u6709 &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
 * 2. \u52A0\u8F7D js\uFF0C\u5728 js \u4E2D\u6267\u884C new Vue \u91CC\u7684\u4E00\u7CFB\u5217\u521D\u59CB\u5316\u4EE3\u7801
 * 3. \u6302\u8F7D\uFF1Avm.$mount(&#39;#app&#39;)
 *    3.1 cmopile: \u7F16\u8BD1\u6A21\u677F\u6210\u6E32\u67D3\u51FD\u6570\u8D4B\u503C\u7ED9 vm.$option.render\uFF0C\u5373 with(this) {...}
 *    3.2 render: vm._render \u6267\u884C vm.$option.render \u6E32\u67D3\u751F\u6210 Vnode\uFF0C\u4F9D\u8D56\u6536\u96C6\u4E5F\u5728\u8FD9\u6B65\u8FDB\u884C
 *    3.3 update\uFF1Avm._update \uFF1A\u5C5E\u6027\u4E8B\u4EF6\u7B49\u6570\u636E\u66F4\u65B0\uFF0C\u53CA\u6302\u8F7DDOM
 *        3.3.1 \u6267\u884C\u65E7 oldVnode \u548C\u65B0 Vnode \u5BF9\u6BD4 patch / patchVnode\uFF0C\u5B8C\u6210\u5C5E\u6027\u7B49\u6570\u636E\u5230\u771F\u5B9E DOM\u4E2D\uFF1B\u4E3B\u8981\u7531 invokeCreateHooks \u51FD\u6570\u5B8C\u6210
 *        \u4E0B\u9762\u8FD9\u6B65\u5C31\u662F SSR \u7684\u5206\u754C\u70B9\uFF1A
 *        3.3.2 \u5982\u679C\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF1A\u4E0D\u6267\u884C\u6302\u8F7D\uFF0C\u76F4\u63A5\u9000\u51FA\u3002\u56E0\u4E3A\u6B64\u65F6\u5DF2\u7ECF\u5C06\u76F8\u5173\u8282\u70B9\u7684\u5C5E\u6027\u3001\u4E8B\u4EF6\u7B49\u6570\u636E\u540C\u6B65\u5230 DOM \u4E2D\u3002
 * 
 * \u6240\u4EE5 SSR \u64CD\u4F5C\u4E2D\uFF0C\u540C\u4E00\u4EFD HTML \u7247\u6BB5\u540C\u65F6\u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u88AB\u521D\u59CB\u5316\u3001\u7F16\u8BD1\u3001\u5230\u4E00\u534A\u7684 _update \u8FC7\u7A0B\uFF0C\u6240\u4EE5 SSR \u4E5F\u79F0\u4E3A\u540C\u6784\u3002
 */</span>

<span class="token comment">// virtual DOM patching \u7B97\u6CD5\u4E3B\u8981\u903B\u8F91</span>
<span class="token keyword">function</span> <span class="token function">createPatchFunction</span> <span class="token punctuation">(</span><span class="token parameter">backend</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">patch</span> <span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> hydrating<span class="token punctuation">,</span> removeOnly</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">invokeDestroyHook</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> isInitialPatch <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> insertedVnodeQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// empty mount (likely as component), create new root element</span>
      <span class="token comment">// \u5982\u679C\u6CA1\u6709\u65E7\u8282\u70B9\u53EF\u5BF9\u6BD4\uFF0C\u8BF4\u660E\u6B64\u65F6\u662F\u9996\u6B21\u521D\u59CB\u5316\u8282\u70B9\uFF0C\u4E0D\u9700\u8981\u5BF9\u6BD4\uFF0C\u76F4\u63A5\u7528 vnode \u521B\u5EFADOM\u5143\u7D20</span>
      isInitialPatch <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> isRealElement <span class="token operator">=</span> <span class="token function">isDef</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRealElement <span class="token operator">&amp;&amp;</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// patch existing root node</span>
        <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> removeOnly<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isRealElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u670D\u52A1\u7AEF\u6E32\u67D3 SSR \u89C6\u56FE\u66F4\u65B0\u7684\u4E3B\u8981\u903B\u8F91\uFF1Ahydrate \u51FD\u6570</span>
          <span class="token comment">//  var SSR_ATTR = &#39;data-server-rendered&#39;;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> oldVnode<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            oldVnode<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token constant">SSR_ATTR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            hydrating <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>hydrating<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/**
             * \u7531\u4E8E\u670D\u52A1\u5668\u5DF2\u7ECF\u6E32\u67D3\u597D\u4E86 HTML\uFF0C\u6211\u4EEC\u663E\u7136\u65E0\u9700\u5C06\u5176\u4E22\u5F03\u518D\u91CD\u65B0\u521B\u5EFA\u6240\u6709\u7684 DOM \u5143\u7D20\u3002
             * \u76F8\u53CD\uFF0C\u6211\u4EEC\u9700\u8981&quot;\u6FC0\u6D3B&quot;\u8FD9\u4E9B\u9759\u6001\u7684 HTML\uFF0C\u7136\u540E\u4F7F\u4ED6\u4EEC\u6210\u4E3A\u52A8\u6001\u7684\uFF08\u80FD\u591F\u54CD\u5E94\u540E\u7EED\u7684\u6570\u636E\u53D8\u5316\uFF09\u3002
             * \u8FD9\u6B65\u5C31\u662F hydrate \u8FC7\u7A0B\uFF0C\u6700\u540E\u8FD4\u56DE\u7684\u662F\u670D\u52A1\u6E32\u67D3\u597D\u7684 oldVnode
             */</span>
            <span class="token comment">/**
             * \u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C hydrate \u8FC7\u7A0B\u4E2D\uFF0CVue \u5C06\u63A8\u65AD\u5BA2\u6237\u7AEF\u751F\u6210\u7684\u865A\u62DF DOM \u6811 (virtual DOM tree)\uFF0C
             * \u662F\u5426\u4E0E\u4ECE\u670D\u52A1\u5668\u6E32\u67D3\u7684 DOM \u7ED3\u6784 (DOM structure) \u5339\u914D\u3002
             * 
             * \u5728\u751F\u4EA7\u6A21\u5F0F\u4E0B\uFF0C\u6B64\u68C0\u6D4B\u4F1A\u88AB\u8DF3\u8FC7\uFF0C\u4EE5\u907F\u514D\u6027\u80FD\u635F\u8017\u3002
             */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hydrate</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">invokeInsertHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// \u6267\u884C\u7684\u8FD8\u662F componentVNodeHooks.insert \u63D2\u5165\u51FD\u6570\uFF0C\u6302\u8F7D insertedVnodeQueue \u5185\u5B50\u7EC4\u4EF6 callHook(componentInstance, &#39;mounted&#39;);</span>
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
          <span class="token comment">/**
           * hydrate \u6267\u884C\u8FD4\u56DE False, \u65E0\u6CD5\u5339\u914D\uFF0C\u5B83\u5C06\u9000\u51FA\u6DF7\u5408\u6A21\u5F0F\uFF0C\u4E22\u5F03\u73B0\u6709\u7684 DOM \u5E76\u4ECE\u5934\u5F00\u59CB\u6E32\u67D3\u3002
           * \u8FD9\u662F\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A\u5C06\u670D\u52A1\u5668\u6E32\u67D3\u51FA\u6765\u62FF\u5230\u771F\u5B9E Dom \u5143\u7D20 \uFF08oldVnode \uFF09\u7F6E\u4E3A\u7A7A\u8282\u70B9\uFF0C
           * \u5E76\u4E14\u7EE7\u7EED if \u4E0B\u9762\u7684 createElm \u51FD\u6570\uFF0C\u7528\u6D4F\u89C8\u5668\u7AEF\u6E32\u67D3\u51FA\u6765\u7684 vnode \u521B\u5EFA\u771F\u5B9E DOM \u5143\u7D20
           */</span>
          <span class="token comment">// either not server-rendered, or hydration failed.</span>
          <span class="token comment">// create an empty node and replace it</span>
          oldVnode <span class="token operator">=</span> <span class="token function">emptyNodeAt</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// replacing existing element</span>
        <span class="token keyword">var</span> oldElm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">;</span>
        <span class="token keyword">var</span> parentElm <span class="token operator">=</span> nodeOps<span class="token punctuation">.</span><span class="token function">parentNode</span><span class="token punctuation">(</span>oldElm<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// create new node</span>
        <span class="token comment">// \u7701\u7565\u8C03\u7528 createElm() \u51FD\u6570</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u770B\u4E0Bvue \u6E90\u7801\u4E2D <code>hydrating</code>\u5B9E\u73B0\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
 * hydrating \u51FD\u6570\u53EA\u5728\u7531\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u9996\u5C4F\u65F6\u4F7F\u7528\uFF0C\u4E3B\u8981\u6267\u884C\u4E00\u6B65\u64CD\u4F5C\uFF1A
 * 1. \u6267\u884C\u65E7 oldVnode \u548C\u65B0 Vnode \u5BF9\u6BD4 patch / patchVnode\uFF0C\u5B8C\u6210\u5C5E\u6027\u7B49\u6570\u636E\u5230\u771F\u5B9E DOM\u4E2D\uFF1B\u8FD9\u4E00\u6B65\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u7279\u6709\u7684,\u5373 hydrating \u6FC0\u6D3B\u9636\u6BB5
 * \u800C\u9875\u9762 DOM \u590D\u7528\u7531\u670D\u52A1\u7AEF\u6E32\u67D3\u51FA\u6765\u7684
 */</span>
<span class="token comment">// Note: this is a browser-only function so we can assume elms are DOM nodes.</span>
<span class="token keyword">function</span> <span class="token function">hydrate</span> <span class="token punctuation">(</span><span class="token parameter">elm<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> inVPre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i<span class="token punctuation">;</span>
  <span class="token keyword">var</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  inVPre <span class="token operator">=</span> inVPre <span class="token operator">||</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>pre<span class="token punctuation">)</span><span class="token punctuation">;</span>
  vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> elm<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTrue</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>isComment<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>asyncFactory<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// assert node match \u65AD\u8A00\u786E\u5B9A vnode \u662F\u4E00\u4E2A\u7EC4\u4EF6\u8282\u70B9\u6216\u4E0Enode \u4E00\u6837\u7684\u8282\u70B9\u7C7B\u578B</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">assertNodeMatch</span><span class="token punctuation">(</span>elm<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> inVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// componentVNodeHooks.init \u4E3B\u8981\u6E32\u67D3 vnode \u53CA\u5D4C\u5957\u7684\u5B50\u7EC4\u4EF6\uFF1Achild.$mount(hydrating ? vnode.elm : undefined, hydrating);</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">.</span>hook<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>init<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">i</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* hydrating */</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>componentInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// child component. it should have hydrated its own tree.</span>
      <span class="token function">initComponent</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// empty element, allow client to pick up and populate children</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>elm<span class="token punctuation">.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// v-html and domProps: innerHTML</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> data<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>domProps<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isDef</span><span class="token punctuation">(</span>i <span class="token operator">=</span> i<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> elm<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* istanbul ignore if */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> console <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span>
              <span class="token operator">!</span>hydrationBailed
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              hydrationBailed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Parent: &#39;</span><span class="token punctuation">,</span> elm<span class="token punctuation">)</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;server innerHTML: &#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;client innerHTML: &#39;</span><span class="token punctuation">,</span> elm<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// iterate and compare children lists</span>
          <span class="token keyword">var</span> childrenMatch <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> childNode <span class="token operator">=</span> elm<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i$1<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>childNode <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">hydrate</span><span class="token punctuation">(</span>childNode<span class="token punctuation">,</span> children<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">,</span> inVPre<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              childrenMatch <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
              <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            childNode <span class="token operator">=</span> childNode<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// if childNode is not null, it means the actual childNodes list is</span>
          <span class="token comment">// longer than the virtual children list.</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>childrenMatch <span class="token operator">||</span> childNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* istanbul ignore if */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> console <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span>
              <span class="token operator">!</span>hydrationBailed
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              hydrationBailed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Parent: &#39;</span><span class="token punctuation">,</span> elm<span class="token punctuation">)</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Mismatching childNodes vs. VNodes: &#39;</span><span class="token punctuation">,</span> elm<span class="token punctuation">.</span>childNodes<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> fullInvoke <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isRenderedModule</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          fullInvoke <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token comment">// \u7EC4\u4EF6\u7684\u5C5E\u6027\u4E8B\u4EF6\u7B49\u5982\u4F55\u6620\u5C04\u5230\u771F\u5B9E\u7684 DOM \u5143\u7D20\uFF0C\u5C31\u662F\u6B64\u51FD\u6570\u6267\u884C\u5404\u7C7B\u94A9\u5B50\u51FD\u6570\u751F\u6548\u7684\u3002</span>
          <span class="token function">invokeCreateHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> insertedVnodeQueue<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fullInvoke <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ensure collecting deps for deep class bindings for future updates</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>elm<span class="token punctuation">.</span>data <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elm<span class="token punctuation">.</span>data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u521D\u59CB\u5316\u5143\u7D20\u5404\u7C7B\u5C5E\u6027\u3001\u4E8B\u4EF6\u7684\u94A9\u5B50</span>
<span class="token keyword">function</span> <span class="token function">invokeCreateHooks</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> insertedVnodeQueue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i$1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i$1 <span class="token operator">&lt;</span> cbs<span class="token punctuation">.</span>create<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i$1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cbs<span class="token punctuation">.</span>create<span class="token punctuation">[</span>i$1<span class="token punctuation">]</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  i <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hook<span class="token punctuation">;</span> <span class="token comment">// Reuse variable</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>create<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>emptyNode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>insert<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> insertedVnodeQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5728\u628A Vnode \u8F6C\u53D8\u6210\u771F\u5B9E\u7684 DOM \u671F\u95F4\uFF0C\u6709\u4E00\u7CFB\u5217\u94A9\u5B50\u51FD\u6570\u6765\u5C06 Vnode \u4E2D\u7684\u5C5E\u6027\u3001\u4E8B\u4EF6\u7B49\u53C2\u6570\u8F6C\u79F0\u5230\u771F\u5B9E DOM \u4E0A\u3002
 * var hooks = [&#39;create&#39;, &#39;activate&#39;, &#39;update&#39;, &#39;remove&#39;, &#39;destroy&#39;]
 * 
 * \u6BCF\u4E2A\u94A9\u5B50\u51FD\u6570\uFF0C\u90FD\u4F1A\u6267\u884C\u4E00\u7CFB\u5217\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u7C7B\uFF1A
 * var platformModules = [ attrs, klass, events, domProps, style, transition ];
 * var baseModules = [ ref, directives ];
 * 
 * \u6BCF\u4E00\u4E2A\u79CD\u7C7B\u90FD\u5B9A\u4E49\u4E86\u5B83\u4F1A\u5728\u54EA\u79CDhooks\u4E2D\u6267\u884C\u54EA\u4E9B\u903B\u8F91\uFF1A
 * var attrs = { create: updateAttrs, update: updateAttrs };
 * var klass = { create: updateClass, update: updateClass };
 * var events = { create: updateDOMListeners, update: updateDOMListeners };
 * var domProps = { create: updateDOMProps, update: updateDOMProps };
 * var style = { create: updateStyle, update: updateStyle };
 * var transition = inBrowser ? { \u7701\u7565\u4EE3\u7801} : {};
 *   var ref = {\u7701\u7565 create / update / destory \u94A9\u5B50\u51FD\u6570\u4EE3\u7801};
 *   var directives = {\u7701\u7565 create / update / destory \u94A9\u5B50\u51FD\u6570\u4EE3\u7801};
 * 
 *   \u7136\u540E\u8FDB\u884C\u8F6C\u6362\uFF1A\u4ECE\u6BCF\u4E2A\u64CD\u4F5C\u5728\u54EA\u4E9B\u94A9\u5B50\u6267\u884C \u5230 \u6BCF\u4E2A\u94A9\u5B50\u8981\u6267\u884C\u7684\u54EA\u4E9B update \u64CD\u4F5C\uFF1A
 *   var hooks = [&#39;create&#39;, &#39;activate&#39;, &#39;update&#39;, &#39;remove&#39;, &#39;destroy&#39;];
 *   cbs: { create: [updatefn], activate: [updatefn], ...}
 *   modules: platformModules.concat(baseModules)
 *   \u76F8\u5F53\u4E8E\uFF1A[ attrs, klass, events, domProps, style, transition, ref, directive ]
 */</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> modules<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cbs<span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5728\u5904\u7406\u4E00\u4E2A vue-component \u7EC4\u4EF6\u8282\u70B9\u65F6\uFF0C\u5728\u6267\u884C createComponent \u51FD\u6570\u65F6\u4F1A\u5B89\u88C5\u4E00\u7CFB\u5217\u94A9\u5B50\u51FD\u6570\u6267\u884C
 * var componentVNodeHooks = {init: fn, prepatch: fn, insert: fn, destory:fn}
 * \u901A\u8FC7\u5B9A\u4E49\u5BF9\u5E94\u7684\u6267\u884C\u51FD\u6570\uFF1A
 * init =&gt; invokeCreateHooks: \u540C\u65F6\u6267\u884C\u4E0A\u9762\u7684 cbs.create, \u5373\u4E00\u7CFB\u5217 updateFn
 * insert =&gt; invokeInsertHooks
 * destory =&gt; invokeDestroyHook: \u540C\u65F6\u6267\u884C\u4E0A\u9762\u7684 cbs.destory \uFF0C\u5373\u4E00\u7CFB\u5217 updateFn
 */</span>
<span class="token keyword">function</span> <span class="token function">installComponentHooks</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hooks <span class="token operator">=</span> data<span class="token punctuation">.</span>hook <span class="token operator">||</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>hook <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooksToMerge<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> key <span class="token operator">=</span> hooksToMerge<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> existing <span class="token operator">=</span> hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> toMerge <span class="token operator">=</span> componentVNodeHooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existing <span class="token operator">!==</span> toMerge <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>existing <span class="token operator">&amp;&amp;</span> existing<span class="token punctuation">.</span>_merged<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hooks<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> existing <span class="token operator">?</span> <span class="token function">mergeHook$1</span><span class="token punctuation">(</span>toMerge<span class="token punctuation">,</span> existing<span class="token punctuation">)</span> <span class="token operator">:</span> toMerge<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><p><a href="https://juejin.im/post/6844904001285144589" target="_blank" rel="noopener noreferrer">\u6D45\u8C08Vue SSR\u4E2D\u7684Bundle</a></p><p><a href="https://zhuanlan.zhihu.com/p/61348429" target="_blank" rel="noopener noreferrer">Vue SSR\u6DF1\u5EA6\u5256\u6790</a></p>`,62),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
