import{_ as n,c as s,o as a,a as p}from"./app.fa011131.js";var t="/assets/css-loader-log.7ce2bbbe.png";const y='{"title":"CSS \u6837\u5F0F\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS \u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F","slug":"css-\u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F"},{"level":2,"title":"webapck \u6253\u5305 css","slug":"webapck-\u6253\u5305-css"},{"level":2,"title":"css-loader","slug":"css-loader"},{"level":2,"title":"style-loader","slug":"style-loader"},{"level":2,"title":"mini-css-extract-plugin","slug":"mini-css-extract-plugin"},{"level":3,"title":"\u914D\u7F6E\u9879","slug":"\u914D\u7F6E\u9879"},{"level":3,"title":"publicPath","slug":"publicpath"},{"level":3,"title":"filename","slug":"filename"},{"level":3,"title":"chunkFilename","slug":"chunkfilename"},{"level":2,"title":"\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u591A\u4E2A\u72EC\u7ACB\u7684 css \u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A","slug":"\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u591A\u4E2A\u72EC\u7ACB\u7684-css-\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A"},{"level":2,"title":"css-minimizer-webpack-plugin","slug":"css-minimizer-webpack-plugin"},{"level":3,"title":"\u914D\u7F6E\u9009\u9879 options","slug":"\u914D\u7F6E\u9009\u9879-options"},{"level":3,"title":"cssnano \u538B\u7F29\u9009\u9879 minimizerOptions","slug":"cssnano-\u538B\u7F29\u9009\u9879-minimizeroptions"},{"level":2,"title":"purgecss-webpack-plugin","slug":"purgecss-webpack-plugin"},{"level":2,"title":"css \u9884\u5904\u7406\u5668","slug":"css-\u9884\u5904\u7406\u5668"},{"level":3,"title":"postcss","slug":"postcss"}],"relativePath":"FE-Engineering/ci-webpack/css.md"}',e={},o=p(`<h1 id="css-\u6837\u5F0F\u5904\u7406" tabindex="-1">CSS \u6837\u5F0F\u5904\u7406 <a class="header-anchor" href="#css-\u6837\u5F0F\u5904\u7406" aria-hidden="true">#</a></h1><ol><li>\u539F\u751F css \u5728 html \u4E2D\u6302\u8F7D\u7684\u5F62\u5F0F</li><li>css-loader \u5C06 css \u5185\u5BB9\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u63D2\u5165\u6570\u7EC4\uFF0C\u8F6C\u4E3A webpack \u53EF\u8BC6\u522B\u7684 js \u6A21\u5757</li><li>style-loader \u5C06\u6570\u7EC4\u4E2D css \u5185\u5BB9\u63D0\u53D6\u51FA\u6765\uFF0C\u4EE5 <code>style</code> \u6807\u7B7E\u7684\u5F62\u5F0F\u6CE8\u5165\u5230html \u4E2D</li><li>miniCssExtractPlugin \u5C06\u6570\u7EC4\u4E2D\u7684 css \u5185\u5BB9\u63D0\u53D6\u51FA\u6765\uFF0C\u4EE5 <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot;&gt;</code> \u6807\u7B7E\u5F62\u5F0F\u6CE8\u5165\u5230 html \u4E2D</li><li>\u5F02\u6B65 css \u7684 chunk \u63D0\u53D6\u548C\u547D\u540D</li><li>\u5C06\u591A\u4E2A css chunk \u5408\u5E76\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D</li><li>css-minimizer-webpack-plugin \u538B\u7F29 css</li><li>pureCss \u53BB\u9664 css \u6B7B\u4EE3\u7801</li><li>css \u9884\u5904\u7406\u5668\u914D\u7F6E</li></ol><h2 id="css-\u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F" tabindex="-1">CSS \u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F <a class="header-anchor" href="#css-\u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>HTML \u6587\u4EF6\u4E2D\u63D2\u5165 CSS \u6709\u56DB\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u5185\u8054\u6837\u5F0F\uFF0C\u4E5F\u79F0\u4E3A\u884C\u5185\u6837\u5F0F</li><li>\u5185\u5D4C\u6837\u5F0F\uFF0C\u5373\u901A\u8FC7 <code>&lt;style&gt;&lt;/style&gt;</code> \u5143\u7D20\u5199\u5165\u6837\u5F0F</li><li>\u94FE\u63A5\u5916\u90E8\u6837\u5F0F\uFF0C\u5373\u901A\u8FC7 <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot;&gt;</code> \u5143\u7D20\u94FE\u63A5\u5230\u5355\u72EC\u7684 css \u6587\u4EF6\u3002</li><li><code>@import</code> \u5BFC\u5165\u6837\u5F0F</li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- 1. \u884C\u5185\u6837\u5F0F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>greet<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>orange<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>18px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Hello CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 2. \u5185\u5D4C\u6837\u5F0F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.greet</span> <span class="token punctuation">{</span>
       <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4F46\u662F\u4E00\u822C\u76F4\u63A5\u4E0D\u76F4\u63A5\u4F7F\u7528media\uFF0C\u800C\u662F\u4F7F\u7528@media\uFF0C\u53EF\u4EE5\u907F\u514D\u6587\u6863\u4E2D\u591A\u4E2Astyle\u5143\u7D20 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (min-width: 600px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.greet</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 3. \u94FE\u63A5\u6837\u5F0F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./greet.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desktop.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (min-width: 600px)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- \u6307\u5B9A\u5A92\u4F53\u67E5\u8BE2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 4. @import \u5BFC\u5165\u6837\u5F0F --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* \u4EE5\u4E0B3\u79CD\u65B9\u5F0F\u90FD\u6709\u6548\uFF1A
        1. \u5F53\u4F7F\u7528url(url)\u7684\u65B9\u5F0F\u65F6\uFF0C\u5305\u4F4F\u8DEF\u5F84\u7684\u5F15\u53F7\u53EF\u6709\u53EF\u65E0\uFF1B
        2. \u5F53\u76F4\u63A5\u4F7F\u7528url\u65F6\uFF0C\u5305\u4F4F\u8DEF\u5F84\u7684\u5F15\u53F7\u5FC5\u987B\u4FDD\u7559\u3002
        3. \u5FC5\u987B\u5728 CSS \u6837\u5F0F\u8868\u5934\u90E8\u6700\u5148\u58F0\u660E\u3002
        4. \u5176\u540E\u7684\u5206\u53F7\u662F\u5FC5\u9700\u7684\uFF0C\u5982\u679C\u7701\u7565\u4E86\u6B64\u5206\u53F7\uFF0C\u5916\u90E8\u6837\u5F0F\u8868\u5C06\u65E0\u6CD5\u6B63\u786E\u5BFC\u5165\uFF0C\u5E76\u4F1A\u751F\u6210\u9519\u8BEF\u4FE1\u606F\u3002
    */</span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./greet.css&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./greet.css<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;./greet.css&#39;</span><span class="token punctuation">;</span></span>

    <span class="token comment">/* \u4E5F\u652F\u6301\u6307\u5B9A\u5BFC\u5165\u7684\u6837\u5F0F\u7528\u4E8E\u90A3\u79CD\u751F\u6548\u7684\u5A92\u4F53\u67E5\u8BE2 */</span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>example.css<span class="token punctuation">)</span></span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-width</span><span class="token punctuation">:</span>500px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-width</span><span class="token punctuation">:</span>1024px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="webapck-\u6253\u5305-css" tabindex="-1">webapck \u6253\u5305 css <a class="header-anchor" href="#webapck-\u6253\u5305-css" aria-hidden="true">#</a></h2><p>\u5728 webpack \u4E16\u754C\u4E2D\uFF0C\u53EF\u4EE5\u89C6\u4E00\u5207\u7686\u6A21\u5757\u3002</p><p>\u4EE3\u7801\u4E2D\u4EE5\u4E0B\u4F7F\u7528\u4EE5\u4E0B\u8BED\u53E5\u5BFC\u5165\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u89C6\u4E3A\u6A21\u5757\u8FDB\u884C\u5904\u7406\uFF1A</p><ul><li>ES module \u89C4\u8303\u4E2D\u7684 <code>import xx from xx</code> \u8BED\u53E5\u548C\u52A8\u6001\u5BFC\u5165\u8BED\u53E5 <code>import()</code></li><li>CommonJS \u89C4\u8303\u7684 <code>require()</code> \u8BED\u53E5</li><li>AMD <code>define / require</code> \u8BED\u53E5</li><li>css/sass/less \u6587\u4EF6\u4E2D\u7684 <code>@import</code> \u8BED\u53E5\u3002</li><li>css \u6837\u5F0F\u5C5E\u6027\u503C\u4E2D\u7684 <code>url(...)</code></li><li>HTML \u6587\u4EF6<code>&lt;img src=...&gt;</code>\u4E2D\u7684\u56FE\u7247\u94FE\u63A5(image url)</li></ul><p>\u4F46\u662F webpack \u9ED8\u8BA4\u53EA\u5904\u7406 <code>.js</code> \u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u6240\u4EE5\u5BF9<code>.css</code>\u6837\u5F0F\u6587\u4EF6\uFF0C\u9700\u8981\u914D\u7F6E\u4E00\u4E2A\u7279\u6B8A\u7684\u6A21\u5757\u9884\u5904\u7406\u5668 <code>loader</code> \u6765\u5C06 css \u6587\u4EF6\u8F6C\u4E3A js \u6587\u4EF6\u3002\u8FD9\u6837 webpack \u5C31\u53EF\u4EE5\u8FDB\u884C\u540E\u7EED\u7684\u6253\u5305\u3001\u63D0\u53D6\u3001\u538B\u7F29\u7B49\u63D2\u4EF6\u7684\u64CD\u4F5C\u3002</p><div class="language-css"><pre><code><span class="token comment">/* index.css */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.css&#39;</span> <span class="token comment">// \u76F4\u63A5\u5BFC\u5165 css \u6587\u4EF6</span>

<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack css&#39;</span>
  eleDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u4E3A\u8BE5\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A\u7C7B\u540D hello\uFF0C\u4EE5\u4FBF\u6837\u5F0F\u751F\u6548</span>
  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>webpack \u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../css-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle-no-css-loader.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-"><pre><code>npx webpack --config=./css-demo/webpack.config.js
</code></pre></div><p>\u6B64\u65F6\uFF0Cwebpack \u4F1A\u62A5\u9519\uFF0C\u63D0\u793A\u9700\u8981\u914D\u7F6E\u5408\u9002\u7684 loader \u5904\u7406 css \u7C7B\u578B\u7684\u6587\u4EF6\u3002</p><div class="language-"><pre><code>Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
</code></pre></div><h2 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0 css \u6587\u4EF6\u7684\u52A0\u8F7D\u5668 <code>css-loader</code></p><div class="language-"><pre><code>npm i -D css-loader
</code></pre></div><p>\u66F4\u6539\u914D\u7F6E\uFF0C\u5E76\u6DFB\u52A0 <code>HtmlWebpackPlugin</code> \u4EE5\u4FBF\u81EA\u52A8\u5C06 bundle \u6CE8\u5165 html \u4E2D\u3002</p><div class="language-"><pre><code>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const path = require(&#39;path&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-css&#39;),
-    filename: &#39;bundle-no-css-loader.js&#39;,
+    filename: &#39;bundle-css-loader.js&#39;,
  },
+  module: {
+    rules: [
+      {
+        test: /\\.css$/i,
+        use: [&#39;css-loader&#39;],
+      },
+    ]
+  },
+ plugins: [
  new HtmlWebpackPlugin(),
   ]
}
</code></pre></div><p>\u6B64\u65F6\u518D\u6267\u884C\u6253\u5305\u547D\u540D\uFF0C\u6CA1\u6709\u62A5\u9519\uFF0C\u5E76\u4E14\u6B63\u786E\u751F\u6210\u4E86 <code>bundle-css-loader.js</code>\uFF0C\u6B64\u65F6\u6253\u5F00\u751F\u6210\u7684 <code>index.html</code>\uFF0C\u4F1A\u53D1\u73B0\u6837\u5F0F\u5E76\u6CA1\u6709\u751F\u6548\u3002\u4F46\u662F\u6253\u5F00 <code>bundle-css-loader.js</code> \u4F1A\u53D1\u73B0 css \u4EE3\u7801\u5DF2\u7ECF\u6784\u5EFA\u5230 bundle.js \u4E2D\u3002</p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  __webpack_require__<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>__webpack_exports__<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>__WEBPACK_DEFAULT_EXPORT__<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565\u5176\u5B83\u4EE3\u7801</span>
  ___CSS_LOADER_EXPORT___<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token string">&quot;.hello {\\r\\n  color: red;\\r\\n  font-weight: 600;\\r\\n}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Exports</span>
  <span class="token keyword">const</span> __WEBPACK_DEFAULT_EXPORT__ <span class="token operator">=</span> <span class="token punctuation">(</span>___CSS_LOADER_EXPORT___<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>\u53EF\u4EE5\u53D1\u73B0 <code>css-loader</code> \u7684\u4F5C\u7528\u4EC5\u4EC5\u53EA\u662F\u5C06 <code>.css</code> \u6587\u4EF6\u7684\u5185\u5BB9\u7EC4\u88C5\u6210\u4E00\u4E2A\u6570\u7EC4 <code>[id, content]</code>\uFF0C\u7136\u540E\u518D push \u5230\u4E86\u53E6\u4E00\u4E2A\u6570\u7EC4<code>___CSS_LOADER_EXPORT___</code>\u4E2D\u5B58\u653E\uFF0C\u7136\u540E\u5BFC\u51FA\u8FD9\u6B64\u6570\u7EC4\uFF0C\u8FD9\u6837\u5C31\u628A <code>.css</code> \u6587\u4EF6\u53D8\u6210\u4E86 webpack \u53EF\u5904\u7406\u7684 <code>js</code> \u4EE3\u7801\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u6539\u4E0B\u4EE3\u7801\uFF0C\u6253\u5370\u51FA css-loader \u88AB\u5904\u7406\u540E\u7684\u6837\u5B50</p><div class="language-"><pre><code>// index.js
- import &#39;./index.css&#39; // \u76F4\u63A5\u5BFC\u5165 css \u6587\u4EF6
+ import css from &#39;./index.js&#39;
+ console.log(&#39;css&#39;, css)

// \u7701\u7565\u4EE3\u7801
</code></pre></div><p>\u518D\u6B21\u6253\u5305\u540E\uFF0C\u8FD0\u884C <code>index.html</code> \u770B\u4E0B\u63A7\u5236\u53F0\u7684\u6253\u5370\u6570\u636E</p><p><img src="`+t+`" alt=""></p><p>\u770B\u5230\u8FD9\u4E2A\u8F93\u51FA\u7ED3\u6784\uFF0C\u5982\u679C\u624B\u5DE5\u5904\u7406\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u5199 js \u4EE3\u7801\u628A css \u5185\u5BB9\u63D0\u53D6\u51FA\u6765\uFF0C\u63D2\u5165\u5230 <code>style</code> \u6807\u7B7E\u4E2D\uFF0C\u4F7F\u6837\u5F0F\u751F\u6548\u3002</p><p>\u7EE7\u7EED\u5728 index.js \u4E2D\u589E\u52A0\u5982\u4E0B\u4EE3\u7801</p><div class="language-"><pre><code>import css from &#39;./index.css&#39;
console.log(&#39;css&#39;, css)

function genElement() {
  const eleDiv = document.createElement(&#39;div&#39;)
  eleDiv.textContent = &#39;Hello webpack css&#39;
  eleDiv.classList.add(&#39;hello&#39;)

+  const eleStyle = document.createElement(&#39;style&#39;)
+  eleStyle.textContent = css[0][1]
+  document.head.appendChild(eleStyle)

  return eleDiv
}
document.body.appendChild(genElement())
</code></pre></div><p>\u6B64\u65F6\u518D\u6B21\u6253\u5305\uFF0C\u53EF\u4EE5\u53D1\u73B0\u6837\u5F0F\u751F\u6548\u4E86\uFF0C\u5E76\u4E14\u6253\u5F00\u63A7\u5236\u53F0\u7684 element \u9762\u677F\u770B\u5230\u63D2\u5165\u7684 style \u6807\u7B7E\u7684\u6837\u5F0F\u5185\u5BB9\u3002</p><p>\u6240\u4EE5\u63D0\u53D6 <code>css-loader</code> \u5904\u7406\u540E\u7684 css \u5185\u5BB9\u5230 style \u6807\u7B7E\u4E0A\u7684\u5DE5\u4F5C\uFF0C\u5C31\u662F <code>style-loader</code> \u7684\u4F5C\u7528\u3002</p><h2 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader" aria-hidden="true">#</a></h2><div class="language-"><pre><code>npm i -D style-loader
</code></pre></div><p>\u66F4\u6539\u914D\u7F6E</p><div class="language-"><pre><code>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
const path = require(&#39;path&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-css&#39;),
    filename: &#39;bundle-css-style-loader.js&#39;,
   },
  module: {
     rules: [
       {
         test: /\\.css$/i,
-         use: [&#39;css-loader&#39;],
+         use: [&#39;style-loader&#39;, &#39;css-loader&#39;],
       },
     ]
   },
  plugins: [
   new HtmlWebpackPlugin(),
  ]
}
</code></pre></div><p>\u53BB\u6389 <code>index.js</code> \u4E2D\u624B\u52A8\u5904\u7406 css \u5185\u5BB9\u7684\u4EE3\u7801\u3002</p><p>\u6B64\u65F6\u518D\u6B21\u6253\u5305\uFF0Chtml \u6837\u5F0F\u5C31\u81EA\u52A8\u751F\u6548\u4E86<code>&lt;style&gt;&lt;/style&gt;</code> \u6807\u7B7E\u7684\u5F62\u5F0F\u6CE8\u5165\u5230html \u4E2D\u751F\u6548\u4E86\u3002</p><p>\u8FD9\u91CC\u8981\u6CE8\u610F\u7684 <code>use</code> \u4E2D\u914D\u7F6E <code>loader</code> \u7684\u6267\u884C\u987A\u5E8F\uFF1A<strong>\u914D\u7F6E\u591A\u4E2A loader \u65F6\uFF0C\u6267\u884C\u987A\u5E8F\u9ED8\u8BA4\u662F\u4ECE\u53F3\u5230\u5DE6\u6267\u884C\u7684</strong>\u3002</p><p>style-loader \u662F\u5B9E\u73B0\u4E86 css \u7684\u5185\u5D4C\u6837\u5F0F\uFF0C\u5373\u63D0\u53D6 css \u5199\u5165 <code>&lt;style&gt;&lt;/style&gt;</code>\u5143\u7D20\u91CC\u3002\u4F46\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u66F4\u7ECF\u5E38\u5B9E\u73B0\u7684\u662F\u94FE\u63A5\u6837\u5F0F\u7684\u5B9E\u73B0\u3002\u5373\u5982\u4F55\u628A css \u5185\u5BB9\u63D0\u53D6\u5230\u4E00\u4E2A\u5355\u72EC\u6587\u4EF6\u91CC\uFF0C\u901A\u8FC7 <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot;&gt;</code> \u7684\u65B9\u5F0F\u5F15\u5165\u5462\uFF1F</p><p>\u5C31\u662F\u9700\u8981\u4F7F\u7528 <code>mini-css-extract-plugin</code> \u63D2\u4EF6</p><h2 id="mini-css-extract-plugin" tabindex="-1">mini-css-extract-plugin <a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u63D2\u4EF6\u6709\u4E24\u90E8\u5206\u529F\u80FD\uFF0C\u5373\u6709 <code>loader</code> \u529F\u80FD\uFF0C\u4E5F\u6709 <code>plugin</code> \u529F\u80FD\u3002</p><div class="language-"><pre><code>npm i -D mini-css-extract-plugin
</code></pre></div><p>\u57FA\u7840\u914D\u7F6E</p><div class="language-"><pre><code>const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
- const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
-    path: path.resolve(__dirname, &#39;bundle-css&#39;),
-    filename: &#39;bundle-css-style-loader.js&#39;,
+    path: path.resolve(__dirname, &#39;bundle-extract&#39;),
+    filename: &#39;bundle-css-extract.js&#39;,
  },
  module: {
    rules: [
      {
         test: /\\.css$/i,
-        use: [&#39;style-loader&#39;, &#39;css-loader&#39;],
+        use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;]
       },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
+   new MiniCssExtractPlugin()
  ]
}
</code></pre></div><p>\u6B64\u65F6\u6267\u884C\u518D\u6B21\u6267\u884C\u6253\u5305\uFF0C\u4F1A\u53D1\u73B0 <code>bundle-extract</code> \u76EE\u5F55\u4E0B\u591A\u51FA\u4E86\u4E00\u4E2A <code>main.css</code> \u7684\u6587\u4EF6\uFF0C\u6B63\u662F\u88AB\u63D0\u53D6\u51FA\u6765\u7684\u6837\u5F0F\u4EE3\u7801\u3002</p><p>\u5E76\u4E14\u56E0\u4E3A <code>HtmlWebpackPlugin</code> \u63D2\u4EF6\u7684\u4F5C\u7528\uFF0C<code>index.html</code>\u4E2D\u81EA\u52A8\u6CE8\u5165\u4E86<code>&lt;link href=&quot;main.css&quot; rel=&quot;stylesheet&quot;&gt;</code>\uFF0C\u4F7F\u6837\u5F0F\u751F\u6548\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Webpack App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u914D\u7F6E\u9879" tabindex="-1">\u914D\u7F6E\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// plugin \u7684\u914D\u7F6E\u9879</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// \u4E3A\u63D0\u53D6\u7684css\u6587\u4EF6\u547D\u540D\uFF0C\u5360\u4F4D\u7B26\u540C output.filename</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[id].css&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u4E3A\u63D0\u53D6\u5F02\u6B65\u52A0\u8F7D\u7684 css \u6587\u4EF6\u547D\u540D</span>
    <span class="token literal-property property">ignoreOrder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>         <span class="token comment">// \u5FFD\u7565\u6837\u5F0F\u987A\u5E8F\u51B2\u7A81</span>
    <span class="token literal-property property">insert</span><span class="token operator">:</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">,</span>             <span class="token comment">// \u6307\u5B9A &lt;link href=&quot;&quot; rel=&quot;stylesheet&quot;&gt; \u5143\u7D20\u7684\u63D2\u5165\u4F4D\u7F6E</span>
    <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>             <span class="token comment">// \u53EF\u4EE5\u4E3A\u63D2\u5165\u7684 link \u8BBE\u7F6E\u989D\u5916\u7684\u5C5E\u6027</span>
    <span class="token literal-property property">linkType</span><span class="token operator">:</span> <span class="token string">&#39;text/css&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// \u6307\u5B9A\u63D2\u5165\u7684link \u6807\u7B7E\u7C7B\u578B</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token comment">// loader \u7684\u914D\u7F6E\u9879</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/public/css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// </span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false \u65F6\u4F7F\u7528 CommonJS \u89C4\u8303\u5BFC\u51FA</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u9ED8\u8BA4\u503C undefined</span>
                <span class="token literal-property property">namedExport</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528/\u7981\u7528 ES \u6A21\u5757\u547D\u540D\u5BFC\u51FA</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4E0A\u8FF0\u9009\u9879\u5C5E\u6027\u5177\u4F53\u53EF\u4EE5\u67E5\u9605 webpack \u5B98\u65B9\u6587\u6863\u63CF\u8FF0\u3002\u6211\u4EEC\u9700\u8981\u5173\u6CE8\u7684\u51E0\u4E2A\u5C5E\u6027\u662F\uFF1A<code>filename / chunkFilename / puglicPath</code></p><h3 id="publicpath" tabindex="-1">publicPath <a class="header-anchor" href="#publicpath" aria-hidden="true">#</a></h3><p>\u4F5C\u4E3A loader \u7684\u914D\u7F6E\u5C5E\u6027 <code>publicPath</code> \uFF0C\u4E3B\u8981\u662F\u4E3A CSS \u5185\u7684\u5F15\u7528\u56FE\u7247\u3001\u5B57\u4F53\u6587\u4EF6\u7B49\u5916\u90E8\u8D44\u6E90\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u516C\u5171\u8DEF\u5F84:</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;iconfont.eot?t=1607590565356&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./images/smile.png&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u673A\u5236\u7C7B\u4F3C\u4E8E output.publicPath \u6307\u5B9A HTML \u6587\u4EF6\u6240\u4F9D\u8D56\u7684 css \u3001image \u8D44\u6E90\u516C\u5171\u8DEF\u5F84\u4E00\u6837\u3002</p><p>\u9ED8\u8BA4\u503C\u5C31\u662F output.publicPath</p><p>\u6240\u4EE5\u8FD9\u91CC\u57FA\u672C\u4E0D\u5728\u8FD9\u91CC\u914D\u7F6E\uFF0C\u8BA9\u5B83\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF0C\u4E5F\u8BA9\u9759\u6001\u8D44\u6E90\u7EDF\u4E00\u5728 output.publicPath \u914D\u7F6E\u751F\u6548\u3002</p><p>\u4F46\u6709\u4E00\u79CD\u60C5\u51B5\u9700\u8981\u6CE8\u610F\uFF0C\u5FC5\u987B\u914D\u7F6E\u8BE5\u5C5E\u6027:</p><ul><li>\u5047\u5982\u6211\u4EEC\u9700\u8981\u4E1A\u52A1\u4EE3\u7801\u7EC4\u4EF6\u4EE3\u7801\u4E2D\uFF0Ccss\u6587\u4EF6\u548C\u56FE\u7247\u662F\u540C\u4E00\u7EA7\uFF1A</li></ul><div class="language-"><pre><code>|- src
  |-- header
    |--header.css
    |-- avatar.jpg
</code></pre></div><p>\u7136\u540E\u5728 css \u6587\u4EF6\u4E2D\u5F15\u7528\u56FE\u7247\u7684\u8DEF\u5F84\u662F\u8FD9\u6837\u5199\u7684</p><div class="language-css"><pre><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./avatar.jpg&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6784\u5EFA\u7ED3\u679C\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B HTML \u6240\u4F9D\u8D56\u7684\u9759\u6001\u8D44\u6E90\u90FD\u653E\u5728 <code>assets</code>\u76EE\u5F55\u4E0B\uFF0C\u5176\u4E2D\u53C8\u518D\u5206\u4E3A<code>js/css/images</code>\u8FD9\u6837\u7684\u5C42\u7EA7\uFF1A</p><div class="language-"><pre><code>|- dist
  |-- index.html
  |-- assets
    |-- js
      |-- main.js
    |-- css
      |-- main.css
    |-- images
      |-- avatar.jpg
</code></pre></div><p>\u5982\u679C\u6B64\u65F6\u6309\u4E0B\u9762\u8FD9\u6837\u914D\u7F6E\u6253\u5305\u3002</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../css-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// \u9759\u6001\u8D44\u6E90\u76EE\u5F55 assets</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].js&#39;</span><span class="token punctuation">,</span>                   <span class="token comment">// js \u7684\u8D44\u6E90\u5C31\u662F\u653E\u5728 assets/js/main.js</span>
    <span class="token literal-property property">assetModuleFilename</span><span class="token operator">:</span> <span class="token string">&#39;images/[name][ext]&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// webpack 5.x \u914D\u7F6E\u56FE\u7247\u3001\u5B57\u4F53\u7B49\u9759\u6001\u8D44\u6E90\u7684\u8F93\u51FA\u8DEF\u5F84 assets/images/avatr.js</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span> <span class="token comment">// webpack 5.x \u5BF9 assets source \u9759\u6001\u8D44\u6E90\u7684\u914D\u7F6E\u6539\u4E3A\u8FD9\u79CD\u65B9\u5F0F\u642D\u914D output.assetModuleFilename \u914D\u7F6E\u8F93\u51FA\uFF0C\u4E0D\u7528\u518D\u4F7F\u7528 file-loader \u6216\u8005 url-loader</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name].css&#39;</span> <span class="token comment">// \u914D\u7F6E css \u8F93\u51FA\u76EE\u5F55\u53CA\u6587\u4EF6\u540D assets/css/main.css</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u6837\u6253\u5305\u6784\u5EFA\u540E\uFF0C\u6D4F\u89C8\u5668\u6253\u5F00 index.html \u6587\u4EF6\u63A7\u5236\u53F0\u4F1A\u63D0\u793A\u56FE\u7247\u52A0\u8F7D\u62A5\u9519\u3002\u6253\u5F00 main.css \u53EF\u4EE5\u770B\u5230\u56FE\u7247\u7684\u5F15\u7528\u8DEF\u5F84</p><div class="language-js"><pre><code><span class="token punctuation">.</span>header <span class="token punctuation">{</span>
  background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&#39;./images/avatar.jpg&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u4E2A\u8DEF\u5F84\u53D8\u6210\u7EDD\u5BF9\u8DEF\u5F84\u662F\uFF1A/assets/css/images/avatar.jpg\uFF0C\u660E\u663E\u662F\u9519\u7684\uFF0C\u6B63\u786E\u7684\u5F15\u7528\u8DEF\u5F84\u5E94\u8BE5\u662F /assets/images/avatar.jpg</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\uFF0C\u6B64\u65F6\u6211\u4EEC\uFF0C\u53EF\u4EE5\u7528 <code>MiniCssExtractPlugin.loader</code>\u4E2D\u7684 <code>publicPath</code>\u6765\u6307\u5B9Acss\u6587\u4EF6\u6240\u4F9D\u8D56\u56FE\u7247\u7684\u516C\u5171\u8DEF\u5F84\uFF0C\u6765\u4FEE\u590D\u4E0A\u9762\u7684\u95EE\u9898\uFF1A</p><div class="language-"><pre><code>module: {
    rules: [
      {
        test: /\\.css$/i,
-        use: [MiniCssExtractPlugin.loader, &#39;css-loader&#39;]
+        use: [
+           {
+               loader: MiniCssExtractPlugin.loader,
+               options: {
+                   publicPath: &#39;../&#39;,  
+               }
+           },
+           &#39;css-loader&#39;
+         ]
      },
    ]
  }
</code></pre></div><p>\u8FD9\u5C31\u662F <code>MiniCssExtractPlugin.loader</code>\u4E2D\u7684 <code>publicPath</code> \u7684\u610F\u4E49\uFF0C\u7528\u6765\u6307\u5B9A css \u6587\u4EF6\u4E2D\u6240\u4F9D\u8D56\u7684\u516C\u5171\u8D44\u6E90\u7684\u516C\u5171\u8DEF\u5F84\uFF0C\u57FA\u672C\u662F\u56FE\u7247\u6216\u5B57\u4F53\u6587\u4EF6\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u65F6\u5728\u6253\u5305\u6784\u5EFA\u65F6\u8981\u6CE8\u610F\u7684\u95EE\u9898\u3002</p><h3 id="filename" tabindex="-1">filename <a class="header-anchor" href="#filename" aria-hidden="true">#</a></h3><p><code>new MiniCssExtractPlugin(options)</code> \u63D2\u4EF6\u914D\u7F6E\u5BF9\u8C61\u4E2D\u7684 <code>options.filename</code>\uFF0C\u5982\u4E0A\u6240\u793A\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E86\u63D0\u53D6\u7684css \u6587\u4EF6\u5B58\u653E\u76EE\u5F55\u548C\u6587\u4EF6\u540D\u3002\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u5360\u4F4D\u7B26\u547D\u540D\uFF0C\u89C4\u5219\u540C <code>output.filename</code> \u4E00\u6837\u3002</p><h3 id="chunkfilename" tabindex="-1">chunkFilename <a class="header-anchor" href="#chunkfilename" aria-hidden="true">#</a></h3><p><code>chunkFilename</code>\u4E3B\u8981\u662F\u5BF9\u5F02\u6B65\u5165\u53E3\u6587\u4EF6\u4E2D\u6253\u5305\u5176\u6240\u4F9D\u8D56css\u6587\u4EF6\u7684\u547D\u540D\u3002\u9ED8\u8BA4\u662F <code>[id].css</code></p><p>\u5728\u6700\u65B0 webpack \u6784\u5EFA\u9879\u76EE\u4E2D\uFF0C\u4EE5 <code>import(path/to)</code>\u6240\u5F15\u7528\u7684\u6A21\u5757\u4F1A\u4F5C\u4E3A\u5F02\u6B65\u6A21\u5757\u7684\u5165\u53E3\u8FDB\u884C\u6253\u5305\uFF0C\u90A3\u5982\u679C\u8FD9\u4E2A\u5F02\u6B65\u6A21\u5757\u4E2D\u6709 css \u6A21\u5757\uFF0C\u8FD9\u4E2Acss\u6A21\u5757\u5C31\u4F1A\u4EE5 <code>chunkFilename</code> \u914D\u7F6E\u547D\u540D\u3002</p><blockquote><p>\u5F02\u6B65\u6A21\u5757\u5177\u4F53\u53EF\u4EE5 js-demo \u4E2D\u8BB2\u89E3\u3002</p></blockquote><p>\u5EFA\u7ACB\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757 <code>async-other.js</code>\uFF0C\u5176\u4E2D\u5F15\u7528\u4E86 <code>async-other.css</code>\u3002\u8FD9\u6BB5js \u4EE3\u7801\u53EA\u6709\u5F53\u9875\u9762\u4E2D\u6309\u94AE\u70B9\u51FB\u65F6\u624D\u4F1A\u52A0\u8F7D\u5230\u9875\u9762\u751F\u6548\uFF0C\u5305\u62EC\u6837\u5F0F\uFF0C\u6240\u4EE5\u79F0\u4E3A\u5F02\u6B65\u52A0\u8F7D\uFF0C\u4E5F\u53EB\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u53EA\u6709\u7528\u5230\u4E86\u624D\u52A0\u8F7D\u3002</p><div class="language-js"><pre><code><span class="token comment">// async-other.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./async.css&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> targetEle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">How are you ? </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  eleDiv<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;greet&#39;</span><span class="token punctuation">)</span>
  targetEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleDiv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4FEE\u6539\u4E0B index.js \u4EE3\u7801</p><div class="language-"><pre><code>// index.js
import &#39;./index.css&#39;
function genElement() {
  const eleDiv = document.createElement(&#39;div&#39;)
  eleDiv.classList.add(&#39;hello&#39;)
  const eleP = document.createElement(&#39;p&#39;)
  eleP.textContent = &#39;Hello webpack css&#39;
  eleDiv.appendChild(eleP)

+  // \u542F\u52A8\u5F02\u6B65\u52A0\u8F7D\u7684\u6309\u94AE
+  const eleBtn = document.createElement(&#39;button&#39;)
+  eleBtn.textContent = &#39;Click me to load async-other.js&#39;
+  eleBtn.onclick = function() {
+    import(&#39;./async-other.js&#39;).then(() =&gt; {
+      console.log(&#39;\u5F02\u6B65\u52A0\u8F7D\u6210\u529F&#39;)
+    })
+  }
  return eleDiv
}
document.body.appendChild(genElement())
</code></pre></div><p>\u6B64\u65F6\u8981\u6267\u884C\u6784\u5EFA\u547D\u540D\uFF0C\u6253\u5305\u7ED3\u679C\u6587\u4EF6\u4E2D\u4F1A\u591A\u51FA\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5206\u522B\u662F <code>1.js</code> \u548C <code>1.css</code>\uFF0C\u5176\u65F6\u5C31\u5206\u522B\u5BF9\u5E94 <code>async-other.js</code> \u548C <code>async.css</code></p><p>\u5982\u679C\u60F3\u8981\u5F02\u6B65\u6A21\u5757\u6253\u5305\u51FA\u7684\u6587\u4EF6\u540D\u66F4\u76F4\u89C2\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>chunkFilename</code>\u5C5E\u6027\u3002</p><div class="language-"><pre><code>module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-async&#39;),
    filename: &#39;js/[name].js&#39;,
    assetModuleFilename: &#39;images/[name][ext]&#39;,
+   chunkFilename: &#39;js/[name].js&#39;, // \u5BF9\u5E94\u7740\u5F02\u6B65\u52A0\u8F7D\u7684 js \u6587\u4EF6\u547D\u540D  
  },
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: &#39;../&#39;
            },
          },
          &#39;css-loader&#39;
        ],
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: &#39;asset/resource&#39;,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: &#39;css/[name].css&#39;,
+     chunkFilename: &#39;css/[name].css&#39;,      
    })
  ],
};
</code></pre></div><p>\u6B64\u65F6\u9700\u8981\u5728\u5BF9 <code>index.js</code>\u4E2D\u5F02\u6B65\u5F15\u5165\u7684\u4EE3\u7801\u6DFB\u52A0 webpack \u7684\u9B54\u6CD5\u6CE8\u91CA\uFF1A</p><div class="language-"><pre><code>eleBtn.onclick = function() {
-  import(&#39;./async-other.js&#39;).then(() =&gt; {
+  import(/*  webpackChunkName: &#39;async&#39; */ &#39;./async-other.js&#39;).then(() =&gt; {
    console.log(&#39;\u5F02\u6B65\u52A0\u8F7D\u6210\u529F&#39;)
  })
}
</code></pre></div><p>\u6B64\u65F6\uFF0C\u5F02\u6B65\u63D0\u53D6\u7684\u6587\u4EF6\u540D\u79F0\u4E0D\u518D\u662F\u9ED8\u8BA4\u7684 <code>1.js / 1.css</code>\uFF0C\u800C\u662F\u5177\u4F53\u7684\u540D\u79F0 <code>async.js / async.css</code>\u3002</p><p>\u5BF9\u6BD4\u4E00\u4E0B\uFF0C\u9700\u8981\u6CE8\u610F\u5BF9 <code>chunkFilename</code> \u5C5E\u6027\u547D\u540D\u4E2D\u7684\u53D8\u91CF\u5360\u4F4D\u7B26 <code>[name]</code>\uFF0C\u4E0E<code>filename</code> \u5C5E\u6027\u4E2D\u7684\u53D8\u91CF\u5360\u4F4D\u7B26 <code>[name]</code> \u7684\u503C\u662F\u4E0D\u540C\u7684\u3002</p><ul><li><code>filename</code>\u5C5E\u6027\u4E2D\u7684 <code>[name]</code> \u503C\u662F\u4F9D\u636E <code>entry</code> \u7684\u503C\u6765\u51B3\u5B9A\u7684\u3002\u5982\u679C\u662F\u5B57\u7B26\u4E32\u548C\u6570\u7EC4\u5F62\u5F0F\u5219\u4E3A <code>main</code>\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5219\u4E3A\u5BF9\u8C61\u7684 key \u503C\u3002</li><li><code>chunkFilename</code> \u5C5E\u6027\u4E2D\u7684 <code>[name]</code> \u662F\u4F9D\u8D56\u4E8E webpack \u7279\u6B8A\u7684\u9B54\u6CD5\u6CE8\u91CA\u6765\u751F\u6210\u7684\u3002\u5373\u9700\u8981\u5728 <code>import(/* webpackChunkName: &#39;async&#39; */ &#39;./async-other.js&#39;)</code></li><li><code>assetModuleFilename</code> \u5C5E\u6027\u4E2D\u7684 <code>[name]</code>\u662F\u57FA\u4E8E\u9759\u6001\u6587\u4EF6\u539F\u672C\u6587\u4EF6\u540D\u7684\u3002</li></ul><h2 id="\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u591A\u4E2A\u72EC\u7ACB\u7684-css-\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A" tabindex="-1">\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u591A\u4E2A\u72EC\u7ACB\u7684 css \u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A <a class="header-anchor" href="#\u5C06\u63D0\u53D6\u51FA\u6765\u7684\u591A\u4E2A\u72EC\u7ACB\u7684-css-\u6587\u4EF6\u5408\u5E76\u6210\u4E00\u4E2A" aria-hidden="true">#</a></h2><p>\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u6309\u7EC4\u4EF6\u7EC4\u7EC7\u4EE3\u7801\uFF0C\u5927\u90E8\u5206 CSS \u6837\u5F0F\u6587\u4EF6\u90FD\u8DDF\u7EC4\u4EF6\u7EC4\u7EC7\u5728\u4E00\u5757\uFF0C\u5982\u679C\u9879\u76EE\u7EC4\u4EF6\u6BD4\u8F83\u591A\uFF0C\u4E0D\u7BA1\u662F\u5165\u53E3 chunk \u8FD8\u662F\u5F02\u6B65 chunk\uFF0C\u6309\u4E0A\u9762\u7684\u914D\u7F6E\u6253\u5305\u7ED3\u675F\u540E\u80AF\u5B9A\u4F1A\u4EA7\u751F\u591A\u4E2A\u72EC\u7ACB\u7684 CSS \u6587\u4EF6\u3002\u4F46\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u63D0\u53D6\u7684\u591A\u4E2A\u72EC\u7ACB css \u6587\u4EF6\u6253\u5305\u6784\u5EFA\u5230\u4E00\u4E2A\u72EC\u7ACB\u7684\u6837\u5F0F\u6587\u4EF6\u3002</p><p>\u6B64\u65F6\u5C31\u662F\u9700\u8981\u901A\u8FC7<code>optimization.splitChunks</code>\u914D\u7F6E\u4E2D\u81EA\u5B9A\u4E49 <code>cacheGroups</code> \u6765\u5C06\u591A\u4E2A\u72EC\u7ACB chunk \u5408\u5E76\u6210\u4E00\u4E2A chunk \u8F93\u51FA\u3002</p><div class="language-"><pre><code>module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;bundle-async&#39;),
    filename: &#39;js/[name].js&#39;,
    assetModuleFilename: &#39;images/[name][ext]&#39;,
    chunkFilename: &#39;js/[name].js&#39;, // \u5BF9\u5E94\u7740\u5F02\u6B65\u52A0\u8F7D\u7684 js \u6587\u4EF6\u547D\u540D  
  },
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: &#39;../&#39;
            },
          },
          &#39;css-loader&#39;
        ],
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: &#39;asset/resource&#39;,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: &#39;css/[name].css&#39;,
      chunkFilename: &#39;css/[name].css&#39;,      
    })
  ],
+  optimization: {
+    splitChunks: {
+       cacheGroups: {  
+         styles: {
+           name: &#39;style-split-merge&#39;, // \u9ED8\u8BA4\u4F1A\u4EE5 key \u52A0splitChunks.atuomaticNameDelimiter \u8FDE\u63A5\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u62FC\u63A5\u800C\u6210,\u5982 vendors~a~b~c.js
+           filename: &#39;css/[name].css&#39;, // \u8FD9\u91CC\u7684\u53D8\u91CF\u5360\u4F4D\u7B26 name \u5C31\u4F1A\u662F\u4E0A\u9762\u81EA\u5B9A\u4E49\u7684 name: style-split-merge\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u8F93\u51FA\u6587\u4EF6\u540D\u662F css/style-split-merge.css
+           type: &#39;css/mini-extract&#39;, // \u8BC6\u522B\u9700\u8981\u5408\u5E76\u7684 css \u4E3A miniCssExtractPlugin \u5904\u7406\u540E\u7684 chunk\u3002\u5728 webpack 4.x \u4E2D\u4F7F\u7528 test: /\\.css$/i \u4EE3\u66FF\u3002
+           chunks: &#39;all&#39;,
+           enforce: true, // \u5F3A\u5236\u5408\u5E76\uFF0C\u544A\u8BC9 webpack \u5FFD\u7565\u9ED8\u8BA4\u7684 \`splitChunks.minSize\`\u3001\`splitChunks.minChunks\`\u3001\`splitChunks.maxAsyncRequests\` \u548C \`splitChunks.maxInitialRequests\` \u9009\u9879\uFF0C\u5E76\u59CB\u7EC8\u4E3A\u6B64\u7F13\u5B58\u7EC4\u521B\u5EFA chunk\u3002
+         }
+      },
+    },
+  },
};
</code></pre></div><p>\u6B64\u65F6\u8F93\u51FA\u76EE\u5F55\u4E2D\uFF0C\u4E0D\u518D\u662F\u4E24\u4E2A css \u6587\u4EF6 <code>main.css</code>\u3001<code>async.css</code>\uFF0C\u800C\u662F\u63D0\u53D6\u5408\u5E76\u6210\u4E00\u4E2A<code>style-split-merge.css</code>\u3002</p><h2 id="css-minimizer-webpack-plugin" tabindex="-1">css-minimizer-webpack-plugin <a class="header-anchor" href="#css-minimizer-webpack-plugin" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\uFF0C\u5BF9\u6784\u5EFA\u51FA\u6765\u7684 css \u6587\u4EF6\u53EF\u4EE5\u8FDB\u884C\u538B\u7F29\uFF0C\u6BD4\u5982\u53BB\u9664\u6CE8\u91CA\u3001\u591A\u4F59\u7684\u7A7A\u884C\u3001\u5408\u5E76css\u89C4\u5219\u4E3A\u7B80\u5199\u5F62\u5F0F\u7B49\uFF0C\u8FDB\u4E00\u6B65\u51CF\u5C11 css \u6587\u4EF6\u7684\u4F53\u79EF\u3002</p><p>\u6211\u4EEC\u9700\u8981\u7528\u5230 <code>css-minimizer-webpack-plugin</code> \u63D2\u4EF6</p><div class="language-"><pre><code>npm install css-minimizer-webpack-plugin --save-dev
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E</p><div class="language-js"><pre><code>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 <code>style-split-merge.css</code>\u7531\u4E0A\u4E00\u6B65\u7684 313b \u7ECF\u8FC7\u63D2\u4EF6\u538B\u7F29\u53D8\u6210\u4E86 174b\u3002</p><div class="language-css"><pre><code><span class="token comment">/* \u538B\u7F29\u524D */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 200px;
  height: 200px;
  border: 1px solid orange; */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/avatar.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.greet</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css"><pre><code><span class="token comment">/* \u538B\u7F29\u540E\uFF0C\u53D8\u6210\u4E00\u884C */</span>
<span class="token selector">.hello</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid orange<span class="token punctuation">;</span><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/avatar.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">}</span><span class="token selector">.greet,.hello</span><span class="token punctuation">{</span><span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">}</span><span class="token selector">.greet</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>orange<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3A\u4E86\u770B\u5230\u538B\u7F29\u540E\uFF0C\u9664\u4E86\u79FB\u52A8\u6362\u884C\u7B26\u53D8\u6210\u4E00\u884C\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u53D8\u5316\uFF0C\u6211\u4EEC\u628A\u538B\u7F29\u540E\u7684css \u683C\u5F0F\u4E0B\uFF1A</p><div class="language-css"><pre><code><span class="token comment">/* \u538B\u7F29\u540E\uFF0C\u683C\u5F0F\u5316\u67E5\u770B */</span>
<span class="token selector">.hello</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid orange<span class="token punctuation">;</span><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/avatar.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>218<span class="token punctuation">,</span> 202<span class="token punctuation">,</span> 202<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token selector">.greet,.hello</span><span class="token punctuation">{</span><span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">}</span>
<span class="token selector">.greet</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>orange<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u538B\u7F29\u63D2\u4EF6\u5220\u9664\u4E86\u6CE8\u91CA\uFF0C\u5BF9\u591A\u4E2A\u7C7B\u4E2D\u91CD\u590D\u7684\u89C4\u5219\u63D0\u53D6\u6210\u516C\u7528\u89C4\u5219\u3002</p><h3 id="\u914D\u7F6E\u9009\u9879-options" tabindex="-1">\u914D\u7F6E\u9009\u9879 options <a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879-options" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u8FD9\u4E9B\u9ED8\u8BA4\u7684\u538B\u7F29\u9009\u9879\u5916\uFF0C\u770B\u4E0B <code>css-minimizer-webpack-plugin</code> \u8FD8\u53EF\u914D\u7F6E\u54EA\u4E9B\u5E38\u7528\u7684\u9009\u9879\uFF1A</p><div class="language-js"><pre><code><span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;/\\.css(\\?.*)?$/i&#39;</span><span class="token punctuation">,</span> <span class="token comment">// String|RegExp|Array&lt;String|RegExp&gt;</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// String|RegExp|Array&lt;String|RegExp&gt;</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// String|RegExp|Array&lt;String|RegExp&gt;</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Boolean | String, \u542F\u7528\u7F13\u5B58\u6216\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7F13\u5B58\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u7F13\u5B58\u76EE\u5F55\uFF1Anode_modules/.cache/css-minimizer-webpack-plugin\u3002\u5728 webpack@5 \u4E2D\uFF0C\u6B64\u9009\u9879\u4F1A\u88AB\u5FFD\u7565\uFF0C\u6539\u6210\u76F4\u63A5\u5728 webpack.config.js \u65B0\u589E\u7684\u9876\u5C42\u914D\u7F6E\u5B57\u6BB5 cache \u8BBE\u7F6E\u3002</span>
      <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Boolean | Number\uFF0C\u542F\u7528\u591A\u8FDB\u7A0B\u5E76\u53D1\u6267\u884C\u538B\u7F29\uFF0C\u63D0\u5347\u901F\u5EA6\uFF0C\u9ED8\u8BA4\u5E76\u53D1\u8FDB\u7A0B\u6570 os.cpus().length - 1</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u8BBE\u4E3A true \uFF0C\u9ED8\u8BA4\u4F7F\u7528 {inline: false},</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6307\u5B9A css \u538B\u7F29\u5668\uFF0C\u9ED8\u8BA4\u4F7F\u7528 cssnano \u538B\u7F29\u5668</span>
      <span class="token literal-property property">minimizerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u538B\u7F29\u5668 cssnano \u7684\u538B\u7F29\u9009\u9879</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="cssnano-\u538B\u7F29\u9009\u9879-minimizeroptions" tabindex="-1">cssnano \u538B\u7F29\u9009\u9879 minimizerOptions <a class="header-anchor" href="#cssnano-\u538B\u7F29\u9009\u9879-minimizeroptions" aria-hidden="true">#</a></h3><p><code>cssnano</code> \u662F\u4E00\u4E2A\u57FA\u4E8E <code>postcss</code> \u7684\u538B\u7F29\u5668\uFF0C\u4E5F\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A postcss \u63D2\u4EF6\u5305\uFF0C\u5B83\u6C47\u96C6\u4E86\u5927\u7EA6 30 \u4E2A <code>post-css</code> \u7684\u63D2\u4EF6\u3002\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E09\u79CD\u9884\u8BBE\u89C4\u5219\uFF1A<code>default / advanced / lite</code>\uFF0C\u6BCF\u4E00\u4E2A\u9884\u8BBE\u5F00\u542F\u4E86\u4E0D\u540C\u7684 postcss \u63D2\u4EF6\u529F\u80FD\uFF0C\u5176\u4E2D <code>advanced</code> \u9884\u8BBE\u57FA\u672C\u542F\u7528\u4E86\u5168\u90E8\u63D2\u4EF6\u3002 \u5177\u4F53\u89C1\u5B98\u7F51 <a href="https://cssnano.co/docs/optimisations/" target="_blank" rel="noopener noreferrer">cssnano:https://cssnano.co/docs/optimisations/</a></p><p>\u5982\u679C\u6211\u4EEC\u8981\u4F7F\u7528\u67D0\u79CD\u9884\u8BBE\uFF0C\u53C8\u9700\u8981\u81EA\u5B9A\u4E49\u90E8\u5206\u89C4\u5219\uFF0C\u53EF\u4EE5\u50CF\u8FD9\u6837\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">minimizerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u9884\u8BBE\u89C4\u5219</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">discardComments</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">removeAll</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u8986\u76D6\u9884\u8BBE\u9ED8\u8BA4\u503C</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5177\u4F53\u7684\u63D2\u4EF6\u89C4\u5219\u53EF\u4EE5\u67E5\u770B\u5177\u4F53\u7684 postcss \u63D2\u4EF6 npm \u5305\u8BF4\u660E\u3002\u6DFB\u52A0 <code>postcss-</code> \u524D\u7F00\u641C\u7D22\uFF0C\u6BD4\u5982 <code>postcss-discard-comments</code>\u8FD9\u4E2A\u63D2\u4EF6\u7684\u9009\u9879\u5305\u62EC\u4E24\u4E2A\uFF1A<code>{removeAll: Boolean, removeAllButFirst: Boolean}</code></p><blockquote><p>css-loader \u4E5F\u81EA\u5E26\u4E86 cssnano \u3002\u5982\u679C\u6211\u4EEC\u4E0D\u9700\u8981\u63D0\u53D6\u5355\u72EC\u7684 css \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 css-loader \u7684 options \u4E2D\u5F00\u542F cssnano\u3002</p></blockquote><h2 id="purgecss-webpack-plugin" tabindex="-1">purgecss-webpack-plugin <a class="header-anchor" href="#purgecss-webpack-plugin" aria-hidden="true">#</a></h2><p><code>purgecss-webpack-plugin</code> \u57FA\u4E8E <a href="https://purgecss.com/" target="_blank" rel="noopener noreferrer">purgecss</a></p><div class="language-"><pre><code>npm i -D purgecss-webpack-plugin glob-all
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E3A\u4E86\u66F4\u597D\u770B\u6E05\u7406\u540E\u7684 css \u6587\u4EF6\uFF0C\u6211\u4EEC\u6682\u65F6\u53BB\u6389\u538B\u7F29\u63D2\u4EF6</p><div class="language-"><pre><code>const path = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)
- const CssMinimizerPlugin = require(&#39;css-minimizer-webpack-plugin&#39;);
+ const PurgecssPlugin = require(&#39;purgecss-webpack-plugin&#39;)
+ const glob = require(&#39;glob-all&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../css-demo&#39;),
  entry: &#39;./index.js&#39;,
  output: {
-    path: path.resolve(__dirname, &#39;bundle-minify&#39;),
+    path: path.resolve(__dirname, &#39;bundle-purge&#39;),
    filename: &#39;js/[name].js&#39;,
    assetModuleFilename: &#39;images/[name][ext]&#39;,
    chunkFilename: &#39;js/[name].js&#39;,
  },
  module: {
    rules: [
      {
        test: /\\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: &#39;../&#39;
            },
          },
          &#39;css-loader&#39;
        ],
      },
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: &#39;asset/resource&#39;,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: &#39;css/[name].css&#39;,
      chunkFilename: &#39;css/[name].css&#39;,
    }),
+    new PurgecssPlugin({
+      paths: glob.sync(path.resolve(__dirname, &#39;../css-demo/*.js&#39;),  { nodir: true }),
+    }),
  ],
  optimization: {
-      minimize: true,
-      minimizer: [
-        // \u5728 webpack@5 \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 \`...\` \u8BED\u6CD5\u6765\u4FDD\u7559\u9ED8\u8BA4\u7684 js \u538B\u7F29\u9009\u9879\u3002
-        // \u5982\u679C\u662F webpack@4 \u4E2D\uFF0C\u9700\u8981\u624B\u52A8\u8865\u5145\u9ED8\u8BA4\u7684 js \u538B\u7F29\u63D2\u4EF6\uFF0C\u5373 \`new TerserWebpackPlugin()\`
-        &#39;...&#39;,
-        new CssMinimizerPlugin(),
-      ],
    splitChunks: {
      cacheGroups: {
        styles: {
-          name: &#39;css-split-merge&#39;, // \u9ED8\u8BA4\u4F1A\u4EE5 key \u52A0splitChunks.atuomaticNameDelimiter \u8FDE\u63A5\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u62FC\u63A5\u800C\u6210,\u5982 vendors~a~b~c.js
+          name: &#39;css-purged&#39;,
          filename: &#39;css/[name].css&#39;, // \u8FD9\u91CC\u7684\u53D8\u91CF\u5360\u4F4D\u7B26 name \u5C31\u4F1A\u662F\u4E0A\u9762\u81EA\u5B9A\u4E49\u7684 name: style-split-merge\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u8F93\u51FA\u6587\u4EF6\u540D\u662F css/style-split-merge.css
          type: &#39;css/mini-extract&#39;,
          // For webpack@4
          // test: /\\.css$/,
          chunks: &#39;all&#39;,
          enforce: true, // \u5F3A\u5236\u5408\u5E76\uFF0C\u544A\u8BC9 webpack \u5FFD\u7565\u9ED8\u8BA4\u7684 \`splitChunks.minSize\`\u3001\`splitChunks.minChunks\`\u3001\`splitChunks.maxAsyncRequests\` \u548C \`splitChunks.maxInitialRequests\` \u9009\u9879\uFF0C\u5E76\u59CB\u7EC8\u4E3A\u6B64\u7F13\u5B58\u7EC4\u521B\u5EFA chunk\u3002
        },
      },
    },
  },
};
</code></pre></div><p>\u5728 <code>index.css / base.css / aync.css</code> \u4E2D\u5206\u522B\u589E\u52A0\u4E00\u4E9B\u6CA1\u6709\u7528\u5230\u7684 css \u89C4\u5219 <code>test-</code>\u5F00\u5934\uFF0C\u4F7F\u7528 <code>purgecss-webpack-plugin</code>\u524D\u540E\u5BF9\u6BD4\uFF1A</p><div class="language-css"><pre><code><span class="token comment">/* \u4F7F\u7528\u524D\u6784\u5EFA\u7ED3\u679C */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test-base</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 200px;
  height: 200px;
  border: 1px solid orange; */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/avatar.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test-index</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.greet</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test-async</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u5F00\u542F purgecss-webpack-pulgin \u63D2\u4EF6\u540E\u6784\u5EFA\u7ED3\u679C\uFF0C\u6548\u679C\u660E\u663E */</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 200px;
  height: 200px;
  border: 1px solid orange; */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/avatar.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.greet</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-\u9884\u5904\u7406\u5668" tabindex="-1">css \u9884\u5904\u7406\u5668 <a class="header-anchor" href="#css-\u9884\u5904\u7406\u5668" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u4F7F\u7528<code>less / scss / stylus</code> \u6765\u4E66\u5199 css \u4EE3\u7801\u65F6\uFF0C\u9700\u8981\u914D\u7F6E\u5BF9\u5E94\u9884\u5904\u7406\u5668\u7684 loader <code>less-loader / sass-loader / stylus-loader</code> \u6765\u8FDB\u884C\u524D\u7F6E\u7684\u9884\u5904\u7406\u3002</p><div class="language-"><pre><code>npm i -D less less-loader
npm i -D node-sass sass-loader
npm i -D stylus stylus-loader
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
      1. less-loader / sass-loader / stylus-loader \u5C06\u5BF9\u5E94\u540E\u7F00\u6587\u4EF6\u7FFB\u8BD1\u6210 css
      2. css-loader \u5C06 CSS \u8F6C\u5316\u6210 CommonJS \u6A21\u5757
      3. style-loader \u5C06 JS \u5B57\u7B26\u4E32\u751F\u6210\u4E3A style \u8282\u70B9
    */</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6BCF\u4E2A loader \u7684 options \u57FA\u672C\u90FD\u6709\u5BF9\u5E94\u5404\u81EA <code>less / scss / stylus</code> \u5305\u7684\u7F16\u8BD1\u9009\u9879\uFF0C\u548C <code>sourceMap</code> \u9009\u9879\u3002</p><div class="language-js"><pre><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// scss \u5BF9\u5E94 sassOptions; stylus \u5BF9\u5E94 stylusOptions</span>
            <span class="token comment">// \u5177\u4F53\u9009\u9879\u53EF\u4EE5\u901A\u8FC7 lessc --help \u6216\u8005\u67E5\u770B\u5B98\u7F51\u4E2D\u5BF9\u5E94 cli \u4F7F\u7528\u65B9\u5F0F</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="postcss" tabindex="-1">postcss <a class="header-anchor" href="#postcss" aria-hidden="true">#</a></h3><p><code>postcss-loader</code> \u4E00\u822C\u7528\u5728 <code>css-loader</code>\u4E4B\u524D\uFF0C\u9884\u5904\u7406\u5668 <code>less-loader / sass-loader / stylus-loader</code> \u4E4B\u540E\u3002</p><div class="language-"><pre><code>npm install --save-dev postcss-loader postcss
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>postcss-loader</code> \u7684 options \u540C\u6837\u6709\u4E24\u4E2A\u5E38\u7528\u7684\u914D\u7F6E\u9879\uFF1A<code>sourceMap / postcssOptions</code></p><p>\u5982\u679C\u662F\u7B80\u5355\u4F7F\u7528 <code>postcss-loader</code> \u5B9E\u73B0\u529F\u80FD\uFF0C\u90A3\u53EF\u4EE5\u5C06 <code>postcss</code> \u76F8\u5173\u63D2\u4EF6\u76F4\u63A5\u914D\u7F6E\u5728 <code>postcssOptions</code>\u4E2D\uFF0C\u4F46\u5982\u679C\u529F\u80FD\u7A0D\u590D\u6742\u7684\u9879\u76EE\uFF0C\u5EFA\u8BAE\u5728\u6839\u76EE\u5F55\u5EFA\u7ACB\u914D\u7F6E\u6587\u4EF6 <code>postcss.config.js</code>\u6765\u4F7F\u7528\u3002<code>postcss-loader</code>\u4E5F\u4F1A\u81EA\u52A8\u5339\u914D\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\u9879\u3002</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> 
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token operator">?</span>String<span class="token punctuation">,</span> <span class="token comment">//  \u6307\u5B9A CSS =&gt; AST \u7684\u89E3\u6790\u5668\uFF0C\u6709\u9ED8\u8BA4 parser</span>
                <span class="token literal-property property">stringifier</span><span class="token operator">:</span> <span class="token operator">?</span>String<span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A AST =&gt; CSS \u7684\u62FC\u63A5\u5668, \u6709\u9ED8\u8BA4 stringifer</span>
                <span class="token literal-property property">syntax</span><span class="token operator">:</span> <span class="token operator">?</span>String<span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u8BED\u6CD5\u8F6C\u8BD1\u5668\uFF0Csyntax \u5176\u65F6\u5C31\u662F\u4E00\u4E2A\u540C\u65F6\u5305\u542B parser \u548C  stringifier \u7684\u5BF9\u8C61\u5E93</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&quot;autoprefixer&quot;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token comment">// \u914D\u7F6E preset-env \u5BF9\u5E94\u7684\u9009\u9879</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6216\u8005\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6 <code>postcss.config.js</code>, Loader \u5C06\u4F1A\u81EA\u52A8\u641C\u7D22\u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token comment">// webapck.config.js</span>
<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token comment">// postcss.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5176\u4ED6\u9009\u9879</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5173\u4E8E <code>postcss</code> \u5B66\u4E60\u603B\u7ED3\u8BF7\u79FB\u6B65\u67E5\u9605postcss \u7AE0\u8282</p>`,142),c=[o];function l(u,r,i,k,d,g){return a(),s("div",null,c)}var h=n(e,[["render",l]]);export{y as __pageData,h as default};
