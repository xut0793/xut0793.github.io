import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const g='{"title":"entry \u4E0D\u540C\u7C7B\u578B\u503C\u65F6\u7684\u6784\u5EFA\u7ED3\u679C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B57\u7B26\u4E32 string","slug":"\u5B57\u7B26\u4E32-string"},{"level":2,"title":"\u6709\u6A21\u5757\u4F9D\u8D56\u7684\u60C5\u51B5","slug":"\u6709\u6A21\u5757\u4F9D\u8D56\u7684\u60C5\u51B5"},{"level":2,"title":"\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u5165\u53E3","slug":"\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u5165\u53E3"},{"level":2,"title":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u72EC\u7ACB\u6A21\u5757","slug":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u72EC\u7ACB\u6A21\u5757"},{"level":2,"title":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757","slug":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757"},{"level":2,"title":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5728\u5165\u53E3\u5B9A\u4E49\u8F93\u51FA\u6587\u4EF6\u540D","slug":"\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5728\u5165\u53E3\u5B9A\u4E49\u8F93\u51FA\u6587\u4EF6\u540D"}],"relativePath":"FE-Engineering/ci-webpack/entry.md"}',p={},e=t(`<h1 id="entry-\u4E0D\u540C\u7C7B\u578B\u503C\u65F6\u7684\u6784\u5EFA\u7ED3\u679C" tabindex="-1">entry \u4E0D\u540C\u7C7B\u578B\u503C\u65F6\u7684\u6784\u5EFA\u7ED3\u679C <a class="header-anchor" href="#entry-\u4E0D\u540C\u7C7B\u578B\u503C\u65F6\u7684\u6784\u5EFA\u7ED3\u679C" aria-hidden="true">#</a></h1><p><code>entry</code>\u7684\u503C\u53EF\u4EE5\u662F\uFF1A</p><ul><li>\u5B57\u7B26\u4E32 <code>string</code></li><li>\u5B57\u7B26\u4E32\u6570\u7EC4<code>[string]</code></li><li>\u63CF\u8FF0\u7B26\u5BF9\u8C61\u952E\u503C\u5BF9\u5F62\u5F0F\uFF1A <code>object {key: string | [string] }</code></li></ul><blockquote><p>webpack 5.x \u5165\u53E3\u6587\u4EF6\u7684\u914D\u7F6E\u65B0\u589E\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u6587\u4EF6\u4F9D\u8D56\u3001\u751F\u6210\u7C7B\u5E93\u7684\u683C\u5F0F\u7C7B\u578B\uFF08commonjs \u6216 amd\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u8FD0\u884C\u65F6\u7684\u540D\u5B57\uFF0C\u4EE5\u53CA\u4EE3\u7801\u5757\u52A0\u8F7D\u7684\u65B9\u5F0F</p></blockquote><p>\u73B0\u5728\u5206\u522B\u5BF9\u4E0D\u540C\u7C7B\u578B\u503C\u7684\u914D\u7F6E\uFF0C\u770B\u4E0B\u6253\u5305\u540E\u7684 bundle \u662F\u4EC0\u4E48\u6837\u7684\u7ED3\u679C\u3002</p><h2 id="\u5B57\u7B26\u4E32-string" tabindex="-1">\u5B57\u7B26\u4E32 string <a class="header-anchor" href="#\u5B57\u7B26\u4E32-string" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// index.js</span>
<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span>
  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u8FD0\u884C\uFF1A</p><div class="language-"><pre><code>npx webpack --config=./entry-demo/webpack.config.js
</code></pre></div><p>\u6253\u51FA\u6765\u7684 <code>bundle.js</code>\uFF0C\u8DDF\u6211\u4EEC\u76F4\u63A5\u5F15\u7528 <code>index.js</code> \u6CA1\u6709\u4EC0\u4E48\u592A\u591A\u533A\u522B\uFF0C\u53EA\u662F\u5728 <code>bundle.js</code> \u4E2D\u5305\u4E86\u4E00\u5C42 IIFE \u81EA\u6267\u884C\u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token comment">// bundle.js</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span>
  <span class="token keyword">return</span> eleDiv
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u6E90\u7801\u4E2D <code>index.js</code> \u4E2D\u6CA1\u6709\u4EFB\u52A1\u6A21\u5757\u4F9D\u8D56\u3002\u73B0\u5728\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u6A21\u5757\u4F9D\u8D56\u3002</p><h2 id="\u6709\u6A21\u5757\u4F9D\u8D56\u7684\u60C5\u51B5" tabindex="-1">\u6709\u6A21\u5757\u4F9D\u8D56\u7684\u60C5\u51B5 <a class="header-anchor" href="#\u6709\u6A21\u5757\u4F9D\u8D56\u7684\u60C5\u51B5" aria-hidden="true">#</a></h2><p>\u589E\u52A0\u4E00\u4E2A\u4F9D\u8D56\u6A21\u5757 utils.js</p><div class="language-js"><pre><code><span class="token comment">// utils.js</span>
<span class="token comment">/**
 * \u751F\u6210\u6307\u5B9A\u4F4D\u6570\u7684\u968F\u673A\u6574\u6570
 */</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">genRandomNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u6539 index.js \u4EE3\u7801</p><div class="language-"><pre><code>+const { genRandomNumber } = require(&#39;./utils.js&#39;)

function genElement() {
  const eleDiv = document.createElement(&#39;div&#39;)
  eleDiv.textContent = &#39;Hello webpack&#39;

+  const eleBtn = document.createElement(&#39;button&#39;)
+  eleBtn.textContent = &#39;Click me to generate random number: 0&#39;
+  eleBtn.onclick = function() {
+    eleBtn.textContent = \`Click me to generate random number: \${genRandomNumber(2)}\`
+  }
+  eleDiv.appendChild(eleBtn)

  return eleDiv
}
document.body.appendChild(genElement())
</code></pre></div><p>\u66F4\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u5BF9\u6BD4\uFF0C\u6539\u4E0B\u8F93\u51FA\u6587\u4EF6\u7684\u547D\u540D</p><div class="language-"><pre><code>const path = require(&#39;path&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../entry-demo&#39;),
  entry: &#39;./index.js&#39;,
   output: {
-   filename: &#39;bundle.js&#39;, 
+   filename: &#39;bundle-utils.js&#39;,
    path: path.resolve(__dirname),
  }
}
</code></pre></div><p>\u6B64\u65F6\u8F93\u51FA\u7684 bundle-utils.js \u4E3A\uFF1A</p><ul><li>\u5F15\u5165\u7684\u4F9D\u8D56\u6A21\u5757\u88AB\u653E\u5728\u4E86 <code>__webpack_modules__</code> \u6570\u7EC4\u4E2D\uFF0C\u4E14\u4F5C\u4E3A\u7B2C\u4E8C\u9879\u5143\u7D20\uFF0C\u540C\u6837\u88AB\u5305\u4E86\u4E00\u5C42\u51FD\u6570\uFF0C\u4F20\u5165\u4E86\u6A21\u5757\u5185\u901A\u7528\u7684 <code>module</code> \u548C <code>exports</code>\u3002</li><li>\u5F15\u5165\u4E86webpack \u8FD0\u884C\u65F6\u4EE3\u7801\uFF0C\u81EA\u5B9A\u4E49\u7684\u6A21\u5757\u52A0\u8F7D\u51FD\u6570<code>__webpack_require__</code>\uFF0C\u5B9E\u73B0\u4E86\u7C7B\u4F3C node \u4E2D <code>require</code> \u51FD\u6570\u7684\u529F\u80FD\u3002</li><li>\u6709\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF <code>__webpack_module_cache__</code> \u7F13\u5B58\u6240\u6709\u5DF2\u52A0\u8F7D\u7684\u6A21\u5757\u3002</li></ul><blockquote><p>\u901A\u8FC7 __webpack_require__\u51FD\u6570\u7684\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3 node \u4E2D CommonJS \u6A21\u5757\u89C4\u8303\u4E2D\uFF0C\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7684\u53D8\u91CF module.exports / exports \u5176\u5B9E\u662F require \u51FD\u6570\u4E2D\u7684\u79C1\u6709\u53D8\u91CF\u3002</p></blockquote><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpackBootstrap</span>
  <span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">__unused_webpack_module<span class="token punctuation">,</span> exports</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">/**
       * \u751F\u6210\u6307\u5B9A\u4F4D\u6570\u7684\u968F\u673A\u6574\u6570
       */</span>
      exports<span class="token punctuation">.</span><span class="token function-variable function">genRandomNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">/************************************************************************/</span>
  <span class="token comment">// The module cache</span>
  <span class="token keyword">var</span> __webpack_module_cache__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// The require function</span>
  <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Check if module is in cache</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> __webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Create a new module (and put it into the cache)</span>
    <span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>__webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// no module.id needed</span>
      <span class="token comment">// no module.loaded needed</span>
      <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Execute the module function</span>
    __webpack_modules__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Return the exports of the module</span>
    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/************************************************************************/</span>
  <span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.</span>
  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> genRandomNumber <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> eleBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      eleBtn<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Click me to generate random number: 0&#39;</span><span class="token punctuation">;</span>
      eleBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        eleBtn<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Click me to generate random number: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">genRandomNumber</span><span class="token punctuation">(</span>
          <span class="token number">2</span>
        <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      eleDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleBtn<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> eleDiv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5176\u4E2D\u7F13\u5B58\u5DF2\u52A0\u8F7D\u6A21\u5757\u7684\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u62C6\u5F00\u6765\u770B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// Create a new module (and put it into the cache) \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 module\uFF0C\u540C\u65F6\u5C06\u8BE5\u6A21\u5757\u7F13\u5B58</span>
<span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">(</span>__webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u76F8\u5F53\u4E8E</span>
<span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
__webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> module

<span class="token comment">// \u56E0\u4E3A\u5BF9\u8C61\u7684\u5F15\u7528\u5173\u7CFB\uFF0C\u6587\u4EF6\u6A21\u5757\u548C\u7F13\u5B58\u6A21\u5757\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B58\u653E\u5728\u540C\u4E00\u4E2A\u7269\u7406\u5730\u5740\u3002</span>
</code></pre></div><h2 id="\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u5165\u53E3" tabindex="-1">\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u5165\u53E3 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u5165\u53E3" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757 <code>green.js</code></p><div class="language-js"><pre><code>globalThis<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  globalThis<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u6539\u4E0B index.js \u4EE3\u7801</p><div class="language-"><pre><code>- const { genRandomNumber } = require(&#39;./utils.js&#39;)

function genElement() {
  const eleDiv = document.createElement(&#39;div&#39;)
  eleDiv.textContent = &#39;Hello webpack&#39;

  const eleBtn = document.createElement(&#39;button&#39;)
- eleBtn.textContent = &#39;Click me to generate random number: 0&#39;
- eleBtn.onclick = function() {
-   eleBtn.textContent = \`Click me to generate random number: \${genRandomNumber(2)}\`
- }
+  eleBtn.textContent = &#39;Click me to greet Tom&#39;
+  eleBtn.onclick = function() {
+     globalThis.greet(&#39;Tom&#39;) // \u5168\u5C40\u53D8\u91CF\u4F7F\u7528  
+   }
  eleDiv.appendChild(eleBtn)

  return eleDiv
}
document.body.appendChild(genElement())
</code></pre></div><p>\u66F4\u6539\u914D\u7F6E\u6587\u4EF6 entry \u503C\u4E3A\u6570\u7EC4\u5F62\u5F0F</p><div class="language-"><pre><code>const path = require(&#39;path&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../entry-demo&#39;),
-  entry: &#39;./index.js&#39;,
+  entry: [&#39;./greet.js&#39;, &#39;./index.js&#39;],
   output: {
-   filename: &#39;bundle-utils.js&#39;,
+   filename: &#39;bundle-greet.js&#39;, 
    path: path.resolve(__dirname),
  }
}
</code></pre></div><p>\u6B64\u65F6\u6211\u4EEC\u770B\u4E0B <code>greet.js</code> \u6587\u4EF6\u662F\u5982\u4F55\u88AB\u6784\u5EFA\u7684</p><div class="language-js"><pre><code><span class="token comment">// bundle-greet.js</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpackBootstrap</span>
  <span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.</span>
  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    globalThis<span class="token punctuation">.</span><span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      globalThis<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.</span>
  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> eleBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      eleBtn<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Click me to greet Tom&#39;</span><span class="token punctuation">;</span>
      eleBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        globalThis<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      eleDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>eleBtn<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> eleDiv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0E\u6700\u521D\u7684 bundle.js \u5BF9\u6BD4\uFF0C\u591A\u4E86\u76F4\u63A5\u6CE8\u5165\u7684 greet,js \u7684\u4EE3\u7801</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpackBootstrap</span>
  <span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eleDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eleDiv<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;Hello webpack&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> eleDiv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">genElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8DDF\u6700\u521D\u7684 <code>bundle.js</code> \u7684\u533A\u522B\u5F88\u660E\u663E\uFF0C\u5982\u679C<code>entry</code>\u914D\u7F6E\u6210\u6570\u7EC4\u5F62\u5F0F\uFF0C\u5219\u4F1A\u5C06\u6570\u7EC4\u4E2D\u9664\u6700\u540E\u4E00\u9879\u5916\u7684\u6A21\u5757\u4EE3\u7801\u76F4\u63A5\u6CE8\u5165\u5230\u5168\u5C40\u4EE3\u7801\u4E2D\uFF0C\u7136\u540E\u518D\u4EE5\u6700\u540E\u4E00\u9879\u4E3A\u5165\u53E3\u8FDB\u884C\u6253\u5305\u6784\u5EFA\u3002</p><p>\u6240\u4EE5\u5982\u679C\u8981\u5C06 <code>entry</code>\u914D\u7F6E\u6210\u6570\u7EC4\u5F62\u5F0F\uFF0C\u4E00\u822C\u4E3A\u4E00\u4E9B\u53EF\u72EC\u7ACB\u4F7F\u7528\u7684\u6CA1\u6709\u4F9D\u8D56\u7684\u5355\u72EC\u6A21\u5757\uFF0C\u5982 <code>jQuery / lodash</code> \u8FD9\u4E9B\u3002</p><p>\u5BF9\u4E00\u4E9B\u5927\u578B\u4F9D\u8D56\u7684\u72EC\u7ACB\u6A21\u5757\uFF0C\u5982\u679C\u7528<code>entry</code> \u914D\u7F6E\u6210\u6570\u7EC4\u5F62\u5F0F</p><div class="language-js"><pre><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jQuery&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>\u56E0\u4E3A\u6CE8\u5165\u7684\u4EE3\u7801\uFF0C\u5FC5\u987B\u4F7F\u5F97\u6700\u7EC8\u7684 bundle.js \u7279\u522B\u5927\u3002\u6B64\u65F6\u53EF\u4EE5\u91C7\u7528\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\u63D0\u53D6\u51FA\u72EC\u7ACB\u6A21\u5757\u3002</p><blockquote><p>\u6240\u4EE5\u4E00\u822Centry \u914D\u7F6E\u6570\u7EC4\u5F62\u5F0F\u662F\u975E\u5E38\u5C11\u7684</p></blockquote><h2 id="\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u72EC\u7ACB\u6A21\u5757" tabindex="-1">\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u72EC\u7ACB\u6A21\u5757 <a class="header-anchor" href="#\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u72EC\u7ACB\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u66F4\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><pre><code>const path = require(&#39;path&#39;)
module.exports = {
  mode: &#39;none&#39;,
  context: path.resolve(__dirname, &#39;../entry-demo&#39;),
-   entry: [&#39;./greet.js&#39;, &#39;./index.js&#39;],
+   entry: {
+     index: &#39;./index.js&#39;,
+     greet: &#39;./greet.js&#39;, 
+   },
    output: {
-   filename: &#39;bundle-greet.js&#39;, 
-    path: path.resolve(__dirname),
+   filename: &#39;[name].bundle.js&#39;,
+   path: path.resolve(__dirname, &#39;bundle-object&#39;),
  }
}
</code></pre></div><p>\u6B64\u65F6\u9700\u8981\u66F4\u6539<code>index.html</code>\u5F15\u5165\u4E24\u4E2A js \u6587\u4EF6</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- &lt;script src=&quot;./bundle.js&quot;&gt;&lt;/script&gt; --&gt;</span>
  <span class="token comment">&lt;!-- &lt;script src=&quot;./bundle-utils.js&quot;&gt;&lt;/script&gt; --&gt;</span>
  <span class="token comment">&lt;!-- &lt;script src=&quot;./bundle-greet.js&quot;&gt;&lt;/script&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./bundle-object/greet.bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./bundle-object/index.bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5982\u679C\u5728\u5C06\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u7684\u4E24\u4E2A\u6A21\u5757\u5206\u79BB\u6210\u4E24\u4E2A bundle\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5165\u53E3\u91CC\u66F4\u6539\u8BBE\u7F6E\u3002</p><h2 id="\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757" tabindex="-1">\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757 <a class="header-anchor" href="#\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF1A\u5206\u79BB\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0A\u4E00\u4E2A utils.js \u4E3A\u4F8B\uFF0C\u66F4\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">&#39;utils&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token string">&#39;./utils.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-depend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5728\u5165\u53E3\u5B9A\u4E49\u8F93\u51FA\u6587\u4EF6\u540D" tabindex="-1">\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5728\u5165\u53E3\u5B9A\u4E49\u8F93\u51FA\u6587\u4EF6\u540D <a class="header-anchor" href="#\u63CF\u8FF0\u7B26\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5728\u5165\u53E3\u5B9A\u4E49\u8F93\u51FA\u6587\u4EF6\u540D" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// TODO: \u5931\u8D25\uFF0C\u5728\u5165\u53E3\u4F7F\u7528 [ext] \u65E0\u6CD5\u88AB\u8F6C\u6362</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// filename: &#39;[name][ext]&#39;, // \u5931\u8D25\uFF0C\u5728\u5165\u53E3\u4F7F\u7528 [ext] \u65E0\u6CD5\u88AB\u8F6C\u6362</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle-entry-filename&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,52),o=[e];function c(l,u,i,k,r,d){return a(),s("div",null,o)}var _=n(p,[["render",c]]);export{g as __pageData,_ as default};
