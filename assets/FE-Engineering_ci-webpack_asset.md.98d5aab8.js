import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const m='{"title":"Asset Module \u9759\u6001\u8D44\u6E90\u6784\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack @4 \u5904\u7406","slug":"webpack-4-\u5904\u7406"},{"level":3,"title":"file-loader","slug":"file-loader"},{"level":3,"title":"url-loader","slug":"url-loader"},{"level":2,"title":"webpack @5 \u5904\u7406","slug":"webpack-5-\u5904\u7406"},{"level":2,"title":"\u7C7B JSON \u6587\u4EF6\u5904\u7406","slug":"\u7C7B-json-\u6587\u4EF6\u5904\u7406"}],"relativePath":"FE-Engineering/ci-webpack/asset.md"}',p={},e=t(`<h1 id="asset-module-\u9759\u6001\u8D44\u6E90\u6784\u5EFA" tabindex="-1">Asset Module \u9759\u6001\u8D44\u6E90\u6784\u5EFA <a class="header-anchor" href="#asset-module-\u9759\u6001\u8D44\u6E90\u6784\u5EFA" aria-hidden="true">#</a></h1><p>webpack \u53EA\u80FD\u5904\u7406 js \u6587\u4EF6\uFF0C\u5982\u679C\u8981\u5BF9\u975E js \u6587\u4EF6\u6253\u5305\u9700\u8981\u9884\u88C5\u5BF9\u5E94\u7684 loader \u6765\u5B9E\u73B0\u8F6C\u6362\u3002</p><p>\u5728 web \u9879\u76EE\u7684\u6784\u5EFA\u4E2D\uFF0C\u5E38\u89C1\u7684\u9759\u6001\u8D44\u6E90\u5305\u62EC\uFF1A</p><ul><li>\u56FE\u7247\uFF1A.png .jpg \u7B49</li><li>\u56FE\u6807\uFF1Aiconfont svg-icon \u7B49</li><li>\u5B57\u4F53: <code>/\\.(woff|woff2|eot|ttf|otf)$/i</code></li><li>\u914D\u7F6E\u6587\u4EF6: .json5 .yaml .toml \u7B49</li></ul><p>\u5728\u5904\u7406\u8FD9\u4E9B\u9759\u6001\u8D44\u6E90\u65F6\uFF0C\u5728 webpack@4 \u4E2D\uFF0C\u901A\u5E38\u9700\u8981\u4F7F\u7528\u5230\u4EE5\u4E0B loader \u914D\u5408\u5904\u7406\uFF1A</p><ul><li>raw-loader \u5C06\u975Ejs\u6587\u4EF6\u5BFC\u5165\u4E3A\u5B57\u7B26\u4E32</li><li>file-loader \u5C06\u975E\u6587\u4EF6\u53D1\u9001\u5230\u8F93\u51FA\u76EE\u5F55\uFF0C\u5E76\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u66FF\u6362\u6A21\u5757\u5F15\u7528\u8DEF\u5F84\u3002\u5373\u66FF\u6362 import require url @import src \u7B49\u5F15\u5165\u8DEF\u5F84\u3002\u76F4\u767D\u8BF4\u5C31\u662F\u590D\u5236\u6587\u4EF6\u5230\u6307\u5B9A\u8F93\u51FA\u76EE\u5F55\uFF0C\u5E76\u7528\u65B0\u8DEF\u5F84\u66FF\u6362\u539F\u5F15\u7528\u8DEF\u5F84\u3002</li><li>url-loader \u529F\u80FD\u7C7B\u4F3C\u4E8E file-loader, \u4F46\u662F\u5728\u6587\u4EF6\u5927\u5C0F\uFF08\u5355\u4F4D\u4E3A\u5B57\u8282\uFF09\u4F4E\u4E8E\u6307\u5B9A\u7684\u9650\u5236 limit \u65F6\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A DataURL\uFF0C\u63D2\u5165\u5230\u5F15\u7528\u6587\u4EF6\u5185\u90E8\u3002\u53EF\u4EE5\u6307\u5B9A\u751F\u6210DataURL \u7C7B\u578B\uFF0C\u9ED8\u8BA4 base64\uFF0C\u53EF\u9009\u503C\uFF1A<code>[&quot;utf8&quot;,&quot;utf16le&quot;,&quot;latin1&quot;,&quot;base64&quot;,&quot;hex&quot;,&quot;ascii&quot;,&quot;binary&quot;,&quot;ucs2&quot;]</code></li></ul><h2 id="webpack-4-\u5904\u7406" tabindex="-1">webpack @4 \u5904\u7406 <a class="header-anchor" href="#webpack-4-\u5904\u7406" aria-hidden="true">#</a></h2><h3 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token comment">/* index.css */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.log</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./webpack.svg&#39;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">genElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleBox<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> eleLogo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleLogo<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;logo&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> eleP <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
  eleP<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span>

  eleBox<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleLogo<span class="token punctuation">)</span>
  eleBox<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleP<span class="token punctuation">)</span>

  <span class="token keyword">return</span> eleBox
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>webpack.config.js \u914D\u7F6E</p><div class="language-"><pre><code>npm i -D file-loader
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../asset-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u53EF\u4EE5\u770B\u5230\u56FE\u7247 <code>webapck.svg</code> \u88AB\u590D\u5236\u5230\u4E86 <code>bundle-file</code> \u8DEF\u5F84\u4E0B\uFF0C\u5E76\u4E14\u4EE5\u9ED8\u8BA4\u7684 <code>[contenthash].[ext]</code> \u547D\u540D\u3002</p><p>\u540C\u65F6\uFF0C<code>index.css</code> \u6587\u4EF6\u4E2D\u56FE\u7247\u7684\u5F15\u7528\u5730\u5740\u4E5F\u88AB\u66FF\u6362\u4E86\u3002</p><div class="language-css"><pre><code><span class="token comment">/* \u6E90\u6587\u4EF6 index.css */</span>
<span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./webpack.svg&#39;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u6784\u5EFA\u540E\u7684 css \u6587\u4EF6 */</span>
<span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>a3e3c0236318203a1a7a43f66ae97010.svg<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u5C06\u56FE\u7247\u7684\u540D\u79F0\u4E0D\u4F7F\u7528 hash \u503C\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF1A</p><div class="language-"><pre><code>{
  test: /\\.svg$/i,
-  user: [&#39;file-loader&#39;],
+  use: [
+    {
+      loader: &#39;file-loader&#39;,
+      options: {
+        name: &#39;[name].[ext]&#39;, // \u53EF\u7528\u7684\u53D8\u91CF\u5360\u4F4D\u7B26\u5305\u62EC\uFF1A[path] [name] [ext] [hash:n] [contenthash:n]
+      }
+    }
+  ]
}
</code></pre></div><p>\u6B64\u65F6\u518D\u6784\u5EFA\u4E00\u6B21\uFF0C\u56FE\u7247\u8F93\u51FA <code>webpack.svg</code></p><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A svg \u56FE\u7247\u5927\u5C0F\u662F 3.7kb\uFF0C\u5E76\u4E0D\u662F\u6784\u5EFA\u6210\u5355\u72EC\u6587\u4EF6\u589E\u52A0\u4E00\u6B21 http \u8BF7\u6C42\uFF0C\u5E0C\u671B\u5C06\u5C0F\u6587\u4EF6\u76F4\u63A5\u5185\u5D4C\u5230\u5F15\u7528\u6587\u4EF6\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528 <code>url-loader</code></p><p><code>url-loader</code> \u9ED8\u8BA4\u5C06\u6587\u4EF6\u5C3A\u5BF8\u5C0F\u4E8E <strong>8kb</strong> \u7684\u6587\u4EF6\u4EE5 <code>base64</code> \u683C\u5F0F\u7F16\u7801\u5185\u5D4C\uFF0C\u7B49\u4E8E\u6216\u5927\u4E8E 8kb \u65F6\uFF0C\u9ED8\u8BA4\u91C7\u7528 <code>file-loader</code>\u5904\u7406\u8F93\u51FA\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55\u4E2D\u3002</p><div class="language-"><pre><code>npm i -D url-loader
</code></pre></div><p>\u66F4\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><pre><code>output: {
-  path: path.resolve(__dirname, &#39;bundle-file&#39;),
+  path: path.resolve(__dirname, &#39;bundle-url&#39;),
  filename: &#39;[name].js&#39;,
},

{
  test: /\\.svg$/i,
-  use: [
-    {
-      loader: &#39;file-loader&#39;,
-      options: {
-        name: &#39;[name].[ext]&#39;, // \u53EF\u7528\u7684\u53D8\u91CF\u5360\u4F4D\u7B26\u5305\u62EC\uFF1A[path] [name] [ext] [hash:n] [contenthash:n]
-      }
-    }
-  ]
+  user: [&#39;url-loader&#39;],
}
</code></pre></div><p>\u6B64\u65F6\uFF0C\u8F93\u51FA\u7684<code>main.css</code>\u4EE3\u7801\uFF1A</p><div class="language-css"><pre><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iM...<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span> 
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 <code>url-loader</code> \u4E2D\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9600\u503C\u6765\u9650\u5236\u662F\u5185\u5D4C\u8FD8\u662F\u590D\u5236\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u5B83\u7F16\u7801\u65B9\u5F0F\uFF0C\u6216\u81EA\u5B9A\u4E49\u7F16\u7801\u65B9\u6848\u3002</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8092</span><span class="token punctuation">,</span> <span class="token comment">// Boolean|Number \uFF0Cfalse\uFF0C\u5373\u59CB\u7EC8\u4EE5 file-loaer \u65B9\u5F0F\u5904\u7406\u6587\u4EF6\u3002\u5982\u679C\u662F nmuber\uFF0C\u5355\u4F4D\u5B57\u8282 b\uFF0C\u9ED8\u8BA4 8092b = 8kb</span>
        <span class="token literal-property property">minetype</span><span class="token operator">:</span> <span class="token string">&#39;mimetype/svg&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u6587\u4EF6\u7C7B\u578B</span>
        <span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">&#39;base64&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Boolean|String\uFF0Cfalse \u5173\u95ED\u7F16\u7801\uFF0C sring \u65F6\u9ED8\u8BA4 base64\uFF0C\u5176\u5B83\u652F\u6301\u7F16\u7801\u65B9\u5F0F\uFF1A&quot;utf8&quot;,&quot;utf16le&quot;,&quot;latin1&quot;,&quot;base64&quot;,&quot;hex&quot;,&quot;ascii&quot;,&quot;binary&quot;,&quot;ucs2&quot;</span>
        <span class="token function-variable function">generator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> mimetype<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> resourcePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> String<span class="token punctuation">,</span> <span class="token comment">// \u547D\u540D\u7528\u81EA\u5B9A\u4E49\u7684\u7F16\u7801\u65B9\u6848</span>
        <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 limit \u9650\u5236\u65F6\uFF0C\u6307\u5B9A\u8C03\u7528\u7684\u5904\u7406\u7A0B\u5E8F</span>
        <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528 file-loader \u65F6\u5904\u7406\u6A21\u5757\u7684\u8BED\u6CD5\u89C4\u8303\uFF0Ctrue \u65F6\u4F7F\u7528 ES Module\uFF1Bfalse \u65F6\u4F7F\u7528 CommonJS</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u4E8E SVG \u683C\u5F0F\u6765\u8BF4\uFF0C\u5E94\u8BE5\u907F\u514D\u4F7F\u7528 base64\uFF0C SVG \u4F7F\u7528\u7279\u5B9A\u7684 dataURI \u65B9\u6848\uFF0C\u53EF\u4EE5\u88AB\u538B\u7F29\u7684\u66F4\u5C0F\uFF0C\u63A8\u8350\u4F7F\u7528 mini-svg-data-uri \u6765\u538B\u7F29 SVG\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> svgToMiniDataURI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-svg-data-uri&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">generator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">svgToMiniDataURI</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5904\u7406 SVG \u7684 loader\uFF1A<code>svgo-loader</code></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;svgo-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="webpack-5-\u5904\u7406" tabindex="-1">webpack @5 \u5904\u7406 <a class="header-anchor" href="#webpack-5-\u5904\u7406" aria-hidden="true">#</a></h2><p><code>webpack@5</code> \u63D0\u4F9B\u4E86\u5185\u7F6E\u7684\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u80FD\u529B\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5B89\u88C5\u989D\u5916\u7684 loader\uFF0C\u4EC5\u9700\u8981\u7B80\u5355\u7684\u914D\u7F6E\u5C31\u80FD\u5B9E\u73B0\u9759\u6001\u8D44\u6E90\u7684\u6253\u5305\u548C\u5206\u76EE\u5F55\u5B58\u653E\u3002</p><p>\u5BF9\u5E94\u4E8E\u9759\u6001\u8D44\u6E90\u5904\u7406\u7684\u9700\u6C42\uFF1A</p><ul><li><code>raw-loder</code> \u5C06\u8D44\u6E90\u4E0D\u4F5C\u8F6C\u6362\u4EE5\u539F\u59CB\u5185\u5BB9\u5BFC\u5165\u4E3A\u5B57\u7B26</li><li><code>file-loader</code> \u5C06\u8D44\u6E90\u590D\u5236\u5230\u6307\u5B9A\u8DEF\u5F84\uFF0C\u5E76\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u66FF\u6362\u539F\u59CB\u8DEF\u5F84</li><li><code>url-loader</code> \u8BBE\u7F6E\u6587\u4EF6\u5927\u5C0F\u9600\u503C\uFF0C\u786E\u5B9A\u6587\u4EF6\u662F\u4EE5 data URI \u5185\u8054\u8FD8\u662F\u4EE5 file-loader \u590D\u5236</li></ul><p>webpack 5 \u5C06\u9759\u6001\u8D44\u6E90\u7C7B\u578B\u5206\u4E3A4\u79CD\uFF1A</p><ul><li><code>asset/source</code>: \u6807\u8BB0\u4E3A\u6B64\u7C7B\u578B\u7684\u8D44\u6E90\u5C06\u5BFC\u51FA\u539F\u59CB\u5185\u5BB9\uFF0C\u66FF\u4EE3 <code>raw-loader</code> \u7684\u5904\u7406</li><li><code>asset/resource</code>\uFF1A\u6807\u8BB0\u4E3A\u6B64\u7C7B\u578B\u7684\u8D44\u6E90\u5C06\u5BFC\u51FA\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\uFF0C\u5E76\u66FF\u6362\u5BFC\u5165 URL\uFF0C\u66FF\u4EE3 <code>file-loader</code>\u7684\u529F\u80FD</li><li><code>asset/inline</code>\uFF1A\u6807\u8BB0\u4E3A\u6B64\u7C7B\u578B\u7684\u8D44\u6E90\u5C06\u5BFC\u51FA\u4E00\u4E2A data URI\uFF0C\u5185\u5D4C\u5230 bundle \u4E2D\u3002\u66FF\u6362 <code>url-loader</code> \u529F\u80FD</li><li><code>asset</code>\uFF1A\u6807\u8BB0\u4E3A\u6B64\u7C7B\u578B\u7684\u8D44\u6E90\u5C06\u4F9D\u636E\u914D\u7F6E\u81EA\u52A8\u5B9E\u73B0\u662F\u5BFC\u51FA\u4E00\u4E2A data URI \u8FD8\u662F\u5BFC\u51FA\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u3002</li></ul><div class="language-"><pre><code>module: {
  rules: [
    // 1. \u63D0\u53D6\u5355\u72EC\u6587\u4EF6
    {
      test: /\\.svg$/i,
-     use: [&#39;file-loader&#39;],
+     type: &#39;asset/resource, // \u5355\u72EC\u6587\u4EF6
    },
    
    // 2. \u5185\u8054\u6587\u4EF6
    {
      test: /\\.svg$/i,
-     use: [&#39;url-loader&#39;],
+     type: &#39;asset/inline, // \u4EE5 data URI \u5185\u8054
    },
    {
      test: /\\.svg$/i,
-     use: [&#39;url-loader&#39;],
+     type: &#39;asset&#39;, // \u540C\u6837\u6839\u636E\u9ED8\u8BA4\u7684\u9600\u503C 8kb \u786E\u5B9A\u662F inline \u8FD8\u662F resource
    },

    // 3. \u81EA\u5B9A\u4E49\u6587\u4EF6\u5927\u5C0F\u9600\u503C
    {
      test: /\\.svg$/i,
-     use: [
-        {
-          loader: &#39;url-loader&#39;,
-          options: {
-            limit: 4 * 1024, // \u9600\u503C\u8BBE\u4E3A 4kb  
-          }
-        }
-     ],
+     type: &#39;asset&#39;,
+     parser: {
+       dataUrlCondition: {
+         maxSize: 4 * 1024, // \u9600\u503C\u8BBE\u4E3A 4kb  
+       }
+     }
    },

    // 4. \u81EA\u5B9A\u4E49\u6587\u4EF6\u7F16\u7801\u65B9\u5F0F\u548C\u6587\u4EF6\u7C7B\u578B
    {
      test: /\\.svg$/i,
-     use: [
-        {
-          loader: &#39;url-loader&#39;,
-          options: {
-            limit: 4 * 1024, // \u8BBE\u4E3A 4kb
-            minetype: &#39;mimetype/svg&#39;, // \u6307\u5B9A\u8F6C\u6362\u540E\u6587\u4EF6\u7C7B\u578B
-            encoding: &#39;base64&#39;, // Boolean|String\uFF0Cfalse \u5173\u95ED\u7F16\u7801\uFF0C sring \u65F6\u9ED8\u8BA4 base64\uFF0C\u5176\u5B83\u652F\u6301\u7F16\u7801\u65B9\u5F0F\uFF1A&quot;utf8&quot;,&quot;utf16le&quot;,&quot;latin1&quot;,&quot;base64&quot;,&quot;hex&quot;,&quot;ascii&quot;,&quot;binary&quot;,&quot;ucs2&quot;
-          }
-        }
-     ],
+     type: &#39;asset&#39;, 
+     parser: {
+       dataUrlCondition: {
+         maxSize: 4 * 1024, // \u9600\u503C\u8BBE\u4E3A 4kb  
+       }
+     },
+     generator: {
+       dataUrl: { // dataUrl \u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F\u914D\u7F6E\u7F16\u7801\u65B9\u5F0F\u548C\u6587\u4EF6\u7C7B\u578B
+         encoding: &#39;base64&#39;,     // \u7F16\u7801\u65B9\u5F0F
+         mimetype: &#39;mimetype/svg&#39;, // \u6587\u4EF6\u7C7B\u578B
+       }  
+     }
+    },

    // 6. \u81EA\u5B9A\u4E49\u6587\u4EF6 dataURI \u751F\u6210\u65B9\u6848
    {
      test: /\\.svg$/i,
-      use: [
-        {
-          loader: &#39;url-loader&#39;,
-          options: {
-            generator: (content) =&gt; svgToMiniDataURI(content.toString()), // \u81EA\u5B9A\u4E49 dataURI \u751F\u6210\u65B9\u5F0F
-          },
-        },
-      ],
+     generator: {
+       dataUrl: (content, { filename module} =&gt;{ // dataUrl \u4F7F\u7528\u51FD\u6570\u65B9\u5F0F\u81EA\u5B9A\u4E49\u7F16\u7801\u65B9\u6848
+          if (typeof content !== &#39;string&#39;) {
+              content = content.toString();
+            }
+            return svgToMiniDataURI(content.toString());
+       }
+     },
    },

    // 7. \u81EA\u5B9A\u4E49\u6587\u4EF6\u8F93\u51FA\u540D\u79F0
    {
      test: /\\.svg$/i,
-      use: [
-        {
-          loader: &#39;file-loader&#39;,
-          options: {
-            outputPath: &#39;images&#39;, 
-            name: &#39;[name].[ext][query]&#39;,
-          },
-        },
-      ],
-       {
-          loader: &#39;url-loader&#39;,
-          options: {
-            fallback: &#39;file-loader&#39;,
-            outputPath: &#39;images&#39;, 
-            name: &#39;[name].[ext][query]&#39;,
-          },
-        },
-      ],
+     // webpack@5 \u7B2C\u4E00\u79CD\u81EA\u5B9A\u4E49\u8D44\u6E90\u540D\u79F0\u65B9\u6CD5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u66F4\u7EC6\u81F4\u5230\u5177\u4F53\u7C7B\u578B
+     generator: {
+       filename: &#39;images/[name][ext]&#39;, // \u6CE8\u610F\u533A\u522B ext \u6CA1\u6709\u70B9  
+     },
    },
  ]
+    // webpack@5 \u7B2C\u4E8C\u79CD\u81EA\u5B9A\u4E49\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u540D\u79F0\u65B9\u6CD5\uFF0C\u5728 output \u4E2D\u5B9A\u4E49\uFF0C\u4F5C\u7528\u4E8E\u6240\u6709\u9759\u6001\u8D44\u6E90
  output: {
    path: path.resolve(__dirname, &#39;bundle-url&#39;),
    filename: &#39;[name].js&#39;,
    chunkFilename: &#39;[contenthash:8].js&#39;,
+   assetModuleFilename: &#39;images/[name][ext]&#39;,
  },
},
</code></pre></div><p>\u5F53\u7136\uFF0Cwebapck@5 \u4E5F\u652F\u6301\u517C\u5BB9\u6A21\u5F0F\uFF0C\u5982\u679C\u4E0D\u60F3\u91C7\u7528 webpack@5 \u8FD9\u79CD <code>asset module</code> \u7684\u6A21\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u56DE\u9000\u6210\u4F7F\u7528 <code>url-loader</code> \u8FD9\u7C7B\u914D\u7F6E</p><div class="language-"><pre><code>module.exports = {
  module: {
    rules: [
      {
        test: /\\.svg$/i,
-       type: &#39;asset&#39;,
+       type: &#39;javascript/auto&#39;,
+       use: [&#39;url-loader&#39;],
      }
    ]
  }
}
</code></pre></div><h2 id="\u7C7B-json-\u6587\u4EF6\u5904\u7406" tabindex="-1">\u7C7B JSON \u6587\u4EF6\u5904\u7406 <a class="header-anchor" href="#\u7C7B-json-\u6587\u4EF6\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5728 webpack@5 \u4E2D\u53EF\u4EE5\u901A\u8FC7 <code>parser.parse</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u7C7B json \u7684\u5904\u7406\u5668\u3002</p><div class="language-json5"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// json5 \u662F\u66F4\u63A5\u8FD1 javascript \u5BF9\u8C61\u7684 JSON \u683C\u5F0F\uFF0C\u53EF\u4EE5\u6CE8\u91CA\uFF0C\u4E0D\u7528\u4E25\u683C\u9650\u5236\u53CC\u5F15\u53F7\u7B49\u3002</span>
  <span class="token property unquoted">title</span><span class="token operator">:</span> <span class="token string">&#39;JSON5 Example&#39;</span><span class="token punctuation">,</span>
  <span class="token property unquoted">owner</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property unquoted">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom Preston-Werner&#39;</span><span class="token punctuation">,</span>
    <span class="token property unquoted">organization</span><span class="token operator">:</span> <span class="token string">&#39;GitHub&#39;</span><span class="token punctuation">,</span>
    <span class="token property unquoted">bio</span><span class="token operator">:</span> <span class="token string">&#39;GitHub Cofounder &amp; CEO\\n\\
Likes tater tots and beer.&#39;</span><span class="token punctuation">,</span>
    <span class="token property unquoted">dob</span><span class="token operator">:</span> <span class="token string">&#39;1979-05-27T07:32:00.000Z&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\uFF1A</p><div class="language-"><pre><code>+ const json5 = require(&#39;json5&#39;);
module.exports = {
  module: {
    rules: [
      {
        test: /\\.json5$/i,
-        loader: &#39;json5-loader&#39;,
-        type: &#39;javascript/auto&#39;,
+        type: &#39;json&#39;,
+        parser: {
+          parse: json5.parse,
+        },
      },
    ]
  }
}
</code></pre></div><p>\u6587\u4EF6\u4E2D\u5BFC\u5165\u5373\u53EF\u4EE5\u76F4\u63A5\u50CF\u5BF9\u8C61\u4E00\u6837\u8C03\u7528</p><div class="language-js"><pre><code><span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;./data.json5&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`JSON5 Example\`</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`Tom Preston-Werner\`</span>
</code></pre></div><p>\u540C\u7406\uFF0C<code>yaml / toml</code> \u7B49\u6587\u4EF6\u6DFB\u52A0\u5BF9\u5E94\u7684\u89E3\u6790\u5668\uFF0C\u540C\u6837\u53EF\u4EE5\u5904\u7406\u6210\u5BF9\u8C61\u76F4\u63A5\u8C03\u7528\u3002</p><div class="language-"><pre><code>+ const json5 = require(&#39;json5&#39;);
+ const toml = require(&#39;toml&#39;);
+ const yaml = require(&#39;yamljs&#39;);
module.exports = {
  module: {
    rules: [
      {
        test: /\\.json5$/i,
-        loader: &#39;json5-loader&#39;,
-        type: &#39;javascript/auto&#39;,
+        type: &#39;json&#39;,
+        parser: {
+          parse: json5.parse,
+        },
      },
+      {
+        test: /\\.toml$/i,
+        type: &#39;json&#39;,
+        parser: {
+          parse: toml.parse,
+        },
+      },
+      {
+        test: /\\.yaml$/i,
+        type: &#39;json&#39;,
+        parser: {
+          parse: yaml.parse,
+        },
      },
    ]
  }
}
</code></pre></div><div class="language-toml"><pre><code><span class="token key property">title</span> <span class="token punctuation">=</span> <span class="token string">&quot;TOML Example&quot;</span>

<span class="token punctuation">[</span><span class="token table class-name">owner</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;Tom Preston-Werner&quot;</span>
<span class="token key property">organization</span> <span class="token punctuation">=</span> <span class="token string">&quot;GitHub&quot;</span>
<span class="token key property">bio</span> <span class="token punctuation">=</span> <span class="token string">&quot;GitHub Cofounder &amp; CEO\\nLikes tater tots and beer.&quot;</span>
<span class="token key property">dob</span> <span class="token punctuation">=</span> <span class="token date number">1979-05-27T07:32:00Z</span>
</code></pre></div><div class="language-yaml"><pre><code><span class="token key atrule">title</span><span class="token punctuation">:</span> YAML Example
<span class="token key atrule">owner</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> Tom Preston<span class="token punctuation">-</span>Werner
  <span class="token key atrule">organization</span><span class="token punctuation">:</span> GitHub
  <span class="token key atrule">bio</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    GitHub Cofounder &amp; CEO
    Likes tater tots and beer.
  <span class="token key atrule">dob</span><span class="token punctuation">:</span> <span class="token datetime number">1979-05-27T07:32:00.000Z</span>
</code></pre></div><p>\u6587\u4EF6\u4E2D\u5F15\u5165</p><div class="language-js"><pre><code><span class="token keyword">import</span> toml <span class="token keyword">from</span> <span class="token string">&#39;./data.toml&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> yaml <span class="token keyword">from</span> <span class="token string">&#39;./data.yaml&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>toml<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`TOML Example\`</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>toml<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`Tom Preston-Werner\`</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>yaml<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`YAML Example\`</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>yaml<span class="token punctuation">.</span>owner<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output \`Tom Preston-Werner\`</span>
</code></pre></div>`,55),o=[e];function c(l,u,r,i,k,d){return a(),s("div",null,o)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
