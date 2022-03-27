import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const m='{"title":"Browserslist","description":"","frontmatter":{},"headers":[{"level":2,"title":"browserslist \u914D\u7F6E\u6587\u4EF6","slug":"browserslist-\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"browserslist \u67E5\u8BE2\u8DEF\u5F84","slug":"browserslist-\u67E5\u8BE2\u8DEF\u5F84"},{"level":2,"title":"browserslist \u914D\u7F6E\u8BED\u6CD5","slug":"browserslist-\u914D\u7F6E\u8BED\u6CD5"}],"relativePath":"FE-Engineering/initial/browserslist.md"}',p={},o=t(`<h1 id="browserslist" tabindex="-1">Browserslist <a class="header-anchor" href="#browserslist" aria-hidden="true">#</a></h1><p>Browserslist \u53EB\u505A\u76EE\u6807\u73AF\u5883\u914D\u7F6E\u8868\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u7684\u524D\u7AEF\u5DE5\u5177\u4E4B\u95F4\u5171\u4EAB\u76EE\u6807\u6D4F\u89C8\u5668\u6216Node\u73AF\u5883\u3002</p><p>\u6BD4\u5982 babel \u4F7F\u7528\u4E86 @babel/preset-env \u8FD9\u4E2A\u9884\u8BBE\uFF0C\u6B64\u65F6 babel \u5C31\u662F\u8BFB\u53D6 browserslist \u7684\u914D\u7F6E\u6765\u786E\u5B9A\u54EA\u4E9B ES next \u8BED\u6CD5\u9700\u8981\u8F6C\u6362\u6210\u517C\u5BB9\u8BED\u6CD5\u3002\u6BD4\u5982 browserslist \u914D\u7F6E\u7684\u76EE\u6807\u6D4F\u89C8\u5668\u652F\u6301\u7BAD\u5934\u51FD\u6570\uFF0C\u90A3 babel \u5C31\u4E0D\u4F1A\u8F6C\u8BD1\u4EE3\u7801\u4E2D\u7684\u7BAD\u5934\u4EE3\u7801\u3002 \u53E6\u5916\u6BD4\u5982 Autoprefixer\u3001postcss \u7B49\u5C31\u53EF\u4EE5\u6839\u636E\u6211\u4EEC\u7684browserslist\uFF0C\u6765\u81EA\u52A8\u5224\u65AD\u662F\u5426\u8981\u589E\u52A0 CSS \u524D\u7F00\uFF08\u4F8B\u5982&quot;-webkit-&quot;\uFF09\u3002</p><p>\u622A\u6B62\u76EE\u524D\uFF0C\u6709\u4EE5\u4E0B\u5DE5\u5177\u4F1A\u81EA\u52A8\u8BFB\u53D6\u9879\u76EE\u4E2D\u7684 browserslist \u4FE1\u606F\uFF1A</p><ul><li>Autoprefix</li><li>babel</li><li>postcss-preset-env</li><li>postcss-normalize</li><li>eslint</li><li>stylelint</li></ul><blockquote><p>\u5177\u4F53\u5DE5\u5177\u5BF9\u5E94\u7684\u914D\u7F6E\u4F8B\u5B50\u53EF\u4EE5\u67E5\u770B <a href="https://github.com/browserslist/browserslist-example" target="_blank" rel="noopener noreferrer">browserslist</a></p></blockquote><h2 id="browserslist-\u914D\u7F6E\u6587\u4EF6" tabindex="-1">browserslist \u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#browserslist-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p>browserslist \u914D\u7F6E\u53EF\u4EE5\u76F4\u63A5\u5199\u5728 package.json \u6587\u4EF6\u7684 <code>browserslist</code> \u5C5E\u6027\u4E2D</p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">]</span> <span class="token comment">// browserslist \u9ED8\u8BA4\u914D\u7F6E</span>
  <span class="token comment">// \u7B49\u6548\u4E8E</span>
  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&gt; 0.5%&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Firefox ESR&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;not dead&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0A\u5355\u72EC\u5EFA\u7ACB\u914D\u7F6E\u6587\u4EF6 <code>.browserslistrc</code></p><div class="language-"><pre><code># Browsers that we support 
&gt; 0.5%
last 2 versions
Firefox ESR
not dead
</code></pre></div><h2 id="browserslist-\u67E5\u8BE2\u8DEF\u5F84" tabindex="-1">browserslist \u67E5\u8BE2\u8DEF\u5F84 <a class="header-anchor" href="#browserslist-\u67E5\u8BE2\u8DEF\u5F84" aria-hidden="true">#</a></h2><p>Browserslist \u4F1A\u6309\u4EE5\u4E0B\u8DEF\u5F84\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\uFF1A</p><ul><li>\u5DE5\u5177\u4F20\u5165\u7684\u914D\u7F6E\u9009\u9879\u3002\u4F8B\u5982 Autoprefixer \u4F7F\u7528\u65F6\u4F20\u5165\u7684 browsers \u9009\u9879\u3002</li><li>package.json \u4E2D browserslist \u5C5E\u6027\u503C\uFF0C\u63A8\u8350\u8FD9\u79CD\u65B9\u5F0F\u3002</li><li>.browserslistrc \u5F53\u524D\u6216\u7236\u76EE\u5F55\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u3002</li><li>BROWSERSLIST \u73AF\u5883\u53D8\u91CF\u3002</li></ul><p>\u5982\u679C\u4E0A\u8FF0\u65B9\u6CD5\u6CA1\u6709\u4EA7\u751F\u6709\u6548\u7ED3\u679C\uFF0C\u5219 Browserslist \u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF1A <code>&gt; 0.5%, last 2 versions, Firefox ESR, not dead</code>\u3002</p><h2 id="browserslist-\u914D\u7F6E\u8BED\u6CD5" tabindex="-1">browserslist \u914D\u7F6E\u8BED\u6CD5 <a class="header-anchor" href="#browserslist-\u914D\u7F6E\u8BED\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>\u5177\u4F53\u914D\u7F6E\u5217\u8868 \u67E5\u770B <a href="https://github.com/browserslist/browserslist#full-list" target="_blank" rel="noopener noreferrer">https://github.com/browserslist/browserslistv</a></p></blockquote><p>Browserslist \u7684\u6570\u636E\u90FD\u662F\u6765\u81EA <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">Can I Use</a> \u7F51\u7AD9\u7684\u67E5\u8BE2\u7ED3\u679C\u3002</p><p>\u67E5\u8BE2\u8BED\u53E5\u4E2D\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5B57\uFF1A <code>or\uFF08\u5E76\u96C6\uFF09 / and\uFF08\u4EA4\u96C6\uFF09 / not\uFF08\u6392\u9664\uFF09</code></p><div class="language-"><pre><code>defaults\uFF1A                                             Browserslist \u7684\u9ED8\u8BA4\u503C\uFF08&gt; 0.5%, last 2 versions, Firefox ESR, not dead\uFF09\u3002

&gt; 5%\uFF1A                                                 \u901A\u8FC7\u5168\u5C40\u4F7F\u7528\u60C5\u51B5\u7EDF\u8BA1\u4FE1\u606F\u9009\u62E9\u7684\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u5373\u5E02\u573A\u4EFD\u989D\u5927\u4E8E 5% \u7684\u6D4F\u89C8\u5668\u3002 &gt;=\uFF0C&lt; \u548C &lt;= \u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002
  &gt; 5% in US\uFF1A                                         \u4F7F\u7528\u7F8E\u56FD\u4F7F\u7528\u60C5\u51B5\u7EDF\u8BA1\u4FE1\u606F\u3002\u5B83\u63A5\u53D7\u4E24\u4E2A\u5B57\u6BCD\u7684\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801\u3002
  &gt; 5% in alt-AS\uFF1A                                     \u4F7F\u7528\u4E9A\u6D32\u5730\u533A\u4F7F\u7528\u60C5\u51B5\u7EDF\u8BA1\u4FE1\u606F\u3002\u6709\u5173\u6240\u6709\u533A\u57DF\u4EE3\u7801\u7684\u5217\u8868\uFF0C\u8BF7\u53C2\u89C1caniuse-lite/data/regions\u3002
  &gt; 5% in my stats\uFF1A                                   \u4F7F\u7528\u81EA\u5B9A\u4E49\u7528\u6CD5\u6570\u636E\u3002
  &gt; 5% in browserslist-config-mycompany stats\uFF1A        \u4F7F\u7528\u6765\u81EA\u7684\u81EA\u5B9A\u4E49\u4F7F\u7528\u60C5\u51B5\u6570\u636E browserslist-config-mycompany/browserslist-stats.json\u3002
  cover 99.5%\uFF1A                                        \u63D0\u4F9B\u8986\u76D6\u7387\u7684\u6700\u53D7\u6B22\u8FCE\u7684\u6D4F\u89C8\u5668\u3002
  cover 99.5% in US\uFF1A                                  \u4E0E\u4E0A\u8FF0\u76F8\u540C\uFF0C\u4F46\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801\u7531\u4E24\u4E2A\u5B57\u6BCD\u7EC4\u6210\u3002
  cover 99.5% in my stats\uFF1A                            \u4F7F\u7528\u81EA\u5B9A\u4E49\u7528\u6CD5\u6570\u636E\u3002

dead\uFF1A                                                 24\u4E2A\u6708\u5185\u6CA1\u6709\u5B98\u65B9\u652F\u6301\u6216\u66F4\u65B0\u7684\u6D4F\u89C8\u5668\u3002\u73B0\u5728\u662F IE 10\uFF0CIE_Mob 11\uFF0CBlackBerry 10\uFF0CBlackBerry 7\uFF0C Samsung 4\u548COperaMobile 12.1\u3002

last 2 versions\uFF1A                                      \u6BCF\u4E2A\u6D4F\u89C8\u5668\u7684\u6700\u540E2\u4E2A\u7248\u672C\u3002
  last 2 Chrome versions\uFF1A                             \u6700\u8FD12\u4E2A\u7248\u672C\u7684Chrome\u6D4F\u89C8\u5668\u3002
  last 2 major versions and last 2 iOS major versions\uFF1A\u6700\u8FD12\u4E2A\u4E3B\u8981\u7248\u672C\u7684\u6240\u6709\u6B21\u8981/\u8865\u4E01\u7248\u672C\u3002

node 10 and node 10.4\uFF1A                                \u9009\u62E9\u6700\u65B0\u7684Node.js 10.4.x\u7248\u672C\u3002
  current node\uFF1A                                       Browserslist \u73B0\u5728\u4F7F\u7528\u7684Node.js\u7248\u672C\u3002
  maintained node versions\uFF1A                           \u6240\u6709 Node.js\u7248\u672C\uFF0C\u4ECD\u7531 Node.js Foundation \u7EF4\u62A4\u3002

iOS 7\uFF1A                                                \u76F4\u63A5\u4F7F\u7528iOS \u6D4F\u89C8\u5668\u7248\u672C7\u3002
  Firefox &gt; 20\uFF1A                                       Firefox\u7684\u7248\u672C\u9AD8\u4E8E20 &gt;=\uFF0C&lt;\u5E76\u4E14&lt;=\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002\u5B83\u4E5F\u53EF\u4EE5\u4E0ENode.js\u4E00\u8D77\u4F7F\u7528\u3002
  ie 6-8\uFF1A                                             \u9009\u62E9\u4E00\u4E2A\u5305\u542B\u8303\u56F4\u7684\u7248\u672C\u3002
  Firefox ESR\uFF1A                                        \u6700\u65B0\u7684[Firefox ESR]\u7248\u672C\u3002
  PhantomJS 2.1 or PhantomJS 1.9\uFF1A                     \u9009\u62E9\u7C7B\u4F3C\u4E8EPhantomJS\u8FD0\u884C\u65F6\u7684Safari\u7248\u672C\u3002

since 2015 or last 2 years\uFF1A                           \u81EA2015\u5E74\u4EE5\u6765\u53D1\u5E03\u7684\u6240\u6709\u7248\u672C\uFF08since 2015-03\u4EE5\u53CAsince 2015-03-10\uFF09\u6216\u8005\u6700\u8FD1 2 \u5E74\u53D1\u5E03\u7684\u6240\u6709\u7248\u672C\u3002
unreleased versions or unreleased Chrome versions\uFF1A    Alpha\u548CBeta\u7248\u672C\u3002
not ie &lt;= 8\uFF1A                                          \u6392\u9664\u5148\u524D\u67E5\u8BE2\u9009\u62E9\u7684\u6D4F\u89C8\u5668\u3002
extends browserslist-config-mycompany\uFF1A                \u4ECEbrowserslist-config-mycompanynpm\u5305\u4E2D\u67E5\u8BE2 \u3002
supports es6-module\uFF1A                                  \u652F\u6301\u7279\u5B9A\u529F\u80FD\u7684\u6D4F\u89C8\u5668\u3002 es6-module\u8FD9\u662F \u201Ccan i use\u201D \u9875\u9762 feat \u7684 URL\u4E0A\u7684\u53C2\u6570\u3002\u6709\u5173\u6240\u6709\u53EF\u7528\u529F\u80FD\u7684\u5217\u8868\uFF0C\u8BF7\u53C2\u89C1 caniuse-lite/data/features
browserslist config\uFF1A                                  \u5728Browserslist\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u6D4F\u89C8\u5668\u3002\u5728\u5DEE\u5F02\u670D\u52A1\u4E2D\u5F88\u6709\u7528\uFF0C\u53EF\u7528\u4E8E\u4FEE\u6539\u7528\u6237\u7684\u914D\u7F6E\uFF0C\u4F8B\u5982 browserslist config and supports es6-module\u3002
</code></pre></div><p>\u5199\u597D\u7684\u67E5\u8BE2\u8BED\u53E5\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC8\u7AEF\u4E0A\u8FD0\u884C\u67E5\u770B\u7ED3\u679C\uFF1A\u5982 <code>npx browserslist &#39;&gt; 0.5%, not IE 11&#39;</code>\uFF0C\u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u7684\u6D4F\u89C8\u5668\u6570\u7EC4</p><div class="language-js"><pre><code><span class="token comment">// npx browserslist &#39;&gt; 0.5%, not IE 11&#39;</span>
and_chr <span class="token number">76</span>  
and_ff <span class="token number">68</span>   
and_qq <span class="token number">1.2</span>  
and_uc <span class="token number">12.12</span>
android <span class="token number">76</span>  
baidu <span class="token number">7.12</span>
chrome <span class="token number">77</span>
chrome <span class="token number">76</span>
chrome <span class="token number">75</span>
chrome <span class="token number">74</span>
edge <span class="token number">18</span>
edge <span class="token number">17</span>
firefox <span class="token number">69</span>
firefox <span class="token number">68</span>
firefox <span class="token number">60</span>
ie <span class="token number">11</span>
ie_mob <span class="token number">11</span>
ios_saf <span class="token number">13</span>
ios_saf <span class="token number">12.2</span><span class="token operator">-</span><span class="token number">12.3</span>
ios_saf <span class="token number">12.0</span><span class="token operator">-</span><span class="token number">12.1</span>
kaios <span class="token number">2.5</span>
op_mini all
op_mob <span class="token number">46</span>
opera <span class="token number">62</span>
opera <span class="token number">60</span>
safari <span class="token number">13</span>
safari <span class="token number">12.1</span>
samsung <span class="token number">9.2</span>
samsung <span class="token number">8.2</span>
</code></pre></div><p>\u770B\u4E00\u6BB5 <code>@babel/preset-env</code>\uFF0C\u5BF9\u76EE\u6807\u6D4F\u89C8\u5668\u7684\u5904\u7406\u4EE3\u7801\uFF1A</p><div class="language-json"><pre><code><span class="token comment">// .babelrc.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;browsers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;safari 7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;current&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// babel-preset-env/src/index.js</span>
<span class="token keyword">import</span> getTargets <span class="token keyword">from</span> <span class="token string">&quot;./targets-parser&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> targets <span class="token operator">=</span> <span class="token function">getTargets</span><span class="token punctuation">(</span>validatedOptions<span class="token punctuation">.</span>targets<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// validatedOptions.targets \u5C31\u662F\u4E0A\u8FF0\u914D\u7F6E\u5BF9\u8C61\u4E2D\u7684 targets</span>

<span class="token comment">// babel-preset-env/src/targets-parser.js</span>
<span class="token keyword">import</span> browserslist <span class="token keyword">from</span> <span class="token string">&quot;browserslist&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> semver <span class="token keyword">from</span> <span class="token string">&quot;semver&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> browserNameMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">android</span><span class="token operator">:</span> <span class="token string">&quot;android&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">and_chr</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&quot;edge&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&quot;firefox&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&quot;ie&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ios_saf</span><span class="token operator">:</span> <span class="token string">&quot;ios&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&quot;safari&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Convert version to a semver value.</span>
<span class="token comment">// 2.5 -&gt; 2.5.0; 1 -&gt; 1.0.0;</span>
<span class="token keyword">const</span> <span class="token function-variable function">semverify</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">version</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> version <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">&amp;&amp;</span> semver<span class="token punctuation">.</span><span class="token function">valid</span><span class="token punctuation">(</span>version<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> version<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> split <span class="token operator">=</span> version<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>split<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    split<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> split<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6821\u9A8C\u914D\u7F6E\u53C2\u6570 &quot;browsers&quot;: [&quot;last 2 versions&quot;, &quot;safari 7&quot;],</span>
<span class="token keyword">const</span> <span class="token function-variable function">isBrowsersQueryValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">browsers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">typeof</span> browsers <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">||</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>browsers<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// broswers \u4E2D\u540C\u4E00\u6D4F\u89C8\u5668\u7248\u672C\u53D6\u6700\u5C0F\u503C</span>
<span class="token keyword">const</span> <span class="token function-variable function">semverMin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> second</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> first <span class="token operator">&amp;&amp;</span> semver<span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> second<span class="token punctuation">)</span> <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
  browsers = [
    &quot;and_chr 76&quot;,
    &quot;android 76&quot;, 
    &quot;baidu 7.12&quot;,
    &quot;chrome 74&quot;,
    &quot;ios_saf 12.2-12.3&quot;,
  ]
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">getLowestVersions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">browsers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> browsers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">all<span class="token punctuation">,</span> browser</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>browserName<span class="token punctuation">,</span> browserVersion<span class="token punctuation">]</span> <span class="token operator">=</span> browser<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> normalizedBrowserName <span class="token operator">=</span> browserNameMap<span class="token punctuation">[</span>browserName<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>normalizedBrowserName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> all<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// Browser version can return as &quot;10.0-10.2&quot;</span>
        <span class="token keyword">const</span> splitVersion <span class="token operator">=</span> browserVersion<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> parsedBrowserVersion <span class="token operator">=</span> <span class="token function">semverify</span><span class="token punctuation">(</span>splitVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>

        all<span class="token punctuation">[</span>normalizedBrowserName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">semverMin</span><span class="token punctuation">(</span>
          all<span class="token punctuation">[</span>normalizedBrowserName<span class="token punctuation">]</span><span class="token punctuation">,</span>
          parsedBrowserVersion<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

      <span class="token keyword">return</span> all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">outputDecimalWarning</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">decimalTargets</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>decimalTargets <span class="token operator">||</span> <span class="token operator">!</span>decimalTargets<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Warning, the following targets are using a decimal version:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  decimalTargets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> target<span class="token punctuation">,</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token string">&quot;We recommend using a string for minor/patch versions to avoid numbers like 6.10&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;getting parsed as 6.1, which can lead to unexpected behavior.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> targetParserMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">__default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>target<span class="token punctuation">,</span> <span class="token function">semverify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Parse \`node: true\` and \`node: &quot;current&quot;\` to version</span>
  <span class="token function-variable function">node</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> parsed <span class="token operator">=</span> value <span class="token operator">===</span> <span class="token boolean">true</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token string">&quot;current&quot;</span>
      <span class="token operator">?</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>node
      <span class="token operator">:</span> <span class="token function">semverify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>target<span class="token punctuation">,</span> parsed<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Only valid value for Uglify is \`true\`</span>
  <span class="token function-variable function">uglify</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>target<span class="token punctuation">,</span> value <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getTargets</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">targets <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> targetOpts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Parse browsers target via browserslist</span>
  <span class="token comment">// \u89E3\u6790 targets.borwsers \u5C5E\u6027</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isBrowsersQueryValid</span><span class="token punctuation">(</span>targets<span class="token punctuation">.</span>browsers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetOpts <span class="token operator">=</span> <span class="token function">getLowestVersions</span><span class="token punctuation">(</span><span class="token function">browserslist</span><span class="token punctuation">(</span>targets<span class="token punctuation">.</span>browsers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Parse remaining targets</span>
  <span class="token comment">// \u89E3\u6790\u5269\u4F59\u7684 targets \u5C5E\u6027</span>
  <span class="token keyword">const</span> parsed <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>targets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">results<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">!==</span> <span class="token string">&quot;browsers&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> targets<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// Warn when specifying minor/patch as a decimal</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">%</span> <span class="token number">1</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          results<span class="token punctuation">.</span>decimalWarnings<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Check if we have a target parser?</span>
        <span class="token keyword">const</span> parser <span class="token operator">=</span> targetParserMap<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">||</span> targetParserMap<span class="token punctuation">.</span>__default<span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>parsedTarget<span class="token punctuation">,</span> parsedValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parser</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>parsedValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          results<span class="token punctuation">.</span>targets<span class="token punctuation">[</span>parsedTarget<span class="token punctuation">]</span> <span class="token operator">=</span> parsedValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> results<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> targetOpts<span class="token punctuation">,</span>
      <span class="token literal-property property">decimalWarnings</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">outputDecimalWarning</span><span class="token punctuation">(</span>parsed<span class="token punctuation">.</span>decimalWarnings<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> parsed<span class="token punctuation">.</span>targets<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getTargets<span class="token punctuation">;</span>
</code></pre></div><p><code>@babel/preset-env</code> \u63D2\u4EF6\u4ED3\u5E93\u5185\u7EF4\u62A4\u4E86\u4E00\u4EFD\u5404\u79CD\u4E0D\u540C\u6D4F\u89C8\u5668 API\uFF0C\u5BF9\u5E94\u6D4F\u89C8\u5668\u7248\u672C\u7684 json \u6570\u636E\uFF0C\u5F53\u89E3\u6790\u51FA\u76EE\u6807\u6D4F\u89C8\u5668\u540E\u5C31\u53EF\u4EE5\u5339\u914D\u51FA\u9700\u8981\u5904\u7406\u517C\u5BB9 API \uFF0C\u7136\u540E\u52A0\u8F7D\u5BF9\u5E94 API \u7684\u63D2\u4EF6\u3002</p><div class="language-json"><pre><code><span class="token comment">// plugins.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;check-es2015-constants&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;49&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opera&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;electron&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transform-es2015-arrow-functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;47&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;45&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;opera&quot;</span><span class="token operator">:</span> <span class="token string">&quot;34&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;electron&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.36&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7701\u7565\u66F4\u591A....</span>
</code></pre></div>`,27),e=[o];function c(u,r,l,i,k,d){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{m as __pageData,q as default};
