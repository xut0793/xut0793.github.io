import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const q='{"title":"lint-staged","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Engineering/dev-linter/lint-staged.md"}',o={},p=t(`<h1 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a></h1><p><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged github</a></p><blockquote><p>Run linters against staged git files and don&#39;t let \u{1F4A9} slip into your code base!<br>\u9488\u5BF9\u6682\u5B58\u7684 git \u6587\u4EF6\u8FD0\u884C linters\uFF0C\u4E0D\u8981\u8BA9 \u{1F4A9} \u8FDB\u5165\u60A8\u7684\u4EE3\u7801\u5E93\uFF01</p></blockquote><p>lint-staged \u4ECE\u540D\u5B57\u53EF\u4EE5\u770B\u533A\uFF0C\u53EA\u6821\u9A8C lint \u63D0\u4EA4\u5230\u6682\u5B58\u533A staged \u7684\u4EE3\u7801\u3002\u5373\u6BCF\u6B21\u53EA\u5BF9\u5F53\u524D\u4FEE\u6539\u540E\u8FDB\u884C git add \u52A0\u5165\u5230 stage \u533A\u7684\u6587\u4EF6\u8FDB\u884C\u626B\u63CF\u6821\u9A8C\uFF0C\u907F\u514D\u5BF9\u9879\u76EE\u4E2D\u8FDB\u884C\u5168\u9879\u76EE\u626B\u63CF\u6240\u4F1A\u589E\u52A0\u4E86\u68C0\u67E5\u590D\u6742\u5EA6\u548C\u65F6\u957F\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u68C0\u67E5\u6211\u4EEC\u8981\u63D0\u4EA4\u7684\u4EE3\u7801\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u907F\u514D\u7684\u53E6\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u5F53\u9488\u5BF9\u4EE5\u524D\u7684\u672A\u4E25\u683C\u8FDB\u884C\u4EE3\u7801\u89C4\u8303\u5316\u7684\u5386\u53F2\u4EE3\u7801\u65F6\uFF0C\u5982\u679C\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0C\u672A\u505A lint-staged \u9650\u5236\uFF0C\u5BF9\u5305\u62EC\u5176\u4ED6\u672A\u4FEE\u6539\u6587\u4EF6\u5728\u5185\u7684\u5168\u9879\u76EE\u4EE3\u7801\u90FD\u8FDB\u884C\u68C0\u67E5\uFF0C\u4E00\u4E0B\u51FA\u73B0\u6210\u767E\u4E0A\u5343\u4E2A\u9519\u8BEF\uFF0C\u4F30\u8BA1\u4F1A\u5413\u5F97\u7ACB\u9A6C\u5220\u6389\u7BA1\u7406 eslint \u7684\u914D\u7F6E\uFF0C\u5192\u51FA\u4E00\u8EAB\u51B7\u6C57\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4F7F\u7528 lint-staged \u5DE5\u5177\u53EA\u6821\u9A8C\u5F53\u524D\u88AB\u52A0\u5165\u5230 stage \u533A\u7684\u6587\u4EF6\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5B89\u88C5</span>
npm install lint<span class="token operator">-</span>staged <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9staged\u7684\u6587\u4EF6\u8FDB\u884Clint\uFF0C\u907F\u514D\u5BF9\u6574\u4E2A\u9879\u76EE\u8FDB\u884Clint\u4EE3\u7801\u5E9E\u5927\u4E14\u7F13\u6162</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;src/**/*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u5339\u914D.js\u6587\u4EF6\u4E00\u4E0B\u547D\u4EE4</span>
      <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6267\u884Ceslint\u8FDB\u884C\u626B\u63CF\u8FDB\u884Cfix</span>
      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6267\u884Cprettier\u811A\u672C,\u5BF9\u4EE3\u7801\u955C\u50CF\u683C\u5F0F\u5316</span>
      <span class="token string">&quot;git add&quot;</span> <span class="token comment">//\u4E0A\u8FF0\u4E24\u9879\u4EFB\u52A1\u5B8C\u6210\u540E\u5BF9\u4EE3\u7801\u91CD\u65B0add\u3002</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;src/**/*.vue&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;git add&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;src/**/*.scss&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;stylelint --syntax=scss --fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;git add&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/static/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/public/&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4ECE v3.1 \u5F00\u59CB\uFF0C\u60A8\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E\uFF1A</p><ul><li>lint-staged \u5728\u4F60\u7684\u5BF9\u8C61 package.json</li><li>.lintstagedrc JSON \u6216 YML \u683C\u5F0F\u7684\u6587\u4EF6</li><li>lint-staged.config.js JS \u683C\u5F0F\u7684\u6587\u4EF6</li></ul><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your-cmd&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// .lintstagedrc.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your-cmd&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u4E8E lint-staged \u4E0E husky \u96C6\u6210\u4F7F\u7528\uFF0C\u53C2\u8003 <a href="./Husky.html">Husky</a></p>`,12),e=[p];function c(l,i,u,r,k,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{q as __pageData,m as default};
