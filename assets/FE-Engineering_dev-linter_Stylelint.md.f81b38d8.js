import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const m='{"title":"Stylelint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u547D\u4EE4\u884C","slug":"\u547D\u4EE4\u884C"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5","slug":"\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5"},{"level":2,"title":"stylelint \u4E0E Prettier \u96C6\u6210","slug":"stylelint-\u4E0E-prettier-\u96C6\u6210"},{"level":2,"title":"stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219","slug":"stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219"}],"relativePath":"FE-Engineering/dev-linter/Stylelint.md"}',p={},o=t(`<h1 id="stylelint" tabindex="-1">Stylelint <a class="header-anchor" href="#stylelint" aria-hidden="true">#</a></h1><p><a href="http://stylelint.cn/" target="_blank" rel="noopener noreferrer">Stylelint \u4E2D\u6587\u5B98\u7F51</a></p><p>Stylelint \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u73B0\u4EE3 CSS \u68C0\u6D4B\u5668\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5728\u6837\u5F0F\u8868\u4E2D\u9075\u5FAA\u4E00\u81F4\u7684\u7EA6\u5B9A\u548C\u907F\u514D\u9519\u8BEF\u3002</p><ul><li>\u6709\u8D85\u8FC7 150 \u6761\u89C4\u5219\uFF0C\u5305\u62EC\u8BED\u8A00\u7279\u6027\u65B9\u9762\u7684\u89C4\u5219\uFF0C\u4E5F\u6709\u6700\u4F73\u5B9E\u8DF5\u7684\u89C4\u5219\uFF0C\u4EE5\u53CA\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C\u7684\u89C4\u5219\u3002</li><li>\u652F\u6301\u6700\u65B0\u7684 CSS \u8BED\u6CD5\uFF0C\u5982 media\u3001calc()\u7B49\u51FD\u6570\u3001\u81EA\u5B9A\u4E49\u5C5E\u6027\u7B49</li><li>\u652F\u6301 CSS \u9884\u5904\u7406\u5668\u8BED\u6CD5\uFF0C\u5982 SCSS / LESS \u7B49\u3002</li><li>\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u6269\u5C55\u89C4\u5219\u3001\u63D2\u4EF6</li></ul><p>\u4F7F\u7528\u65B9\u5F0F\u57FA\u672C\u540C ESLint \u4E00\u6837\uFF1A</p><p><div class="table-of-contents"><ul><li><a href="#\u5B89\u88C5">\u5B89\u88C5</a></li><li><a href="#\u547D\u4EE4\u884C">\u547D\u4EE4\u884C</a></li><li><a href="#\u914D\u7F6E">\u914D\u7F6E</a><ul><li><a href="#\u914D\u7F6E\u6587\u4EF6">\u914D\u7F6E\u6587\u4EF6</a></li><li><a href="#\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5">\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5</a></li></ul></li><li><a href="#stylelint-\u4E0E-prettier-\u96C6\u6210">stylelint \u4E0E Prettier \u96C6\u6210</a></li><li><a href="#stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219">stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219</a></li></ul></div></p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-"><pre><code># npm
npm i -D stylelint

# yarm
yarm --dev stylelint
</code></pre></div><h2 id="\u547D\u4EE4\u884C" tabindex="-1">\u547D\u4EE4\u884C <a class="header-anchor" href="#\u547D\u4EE4\u884C" aria-hidden="true">#</a></h2><p>\u8BED\u6CD5\uFF1A</p><div class="language-js"><pre><code>stylelint <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token operator">|</span>dir<span class="token operator">|</span>glob<span class="token punctuation">]</span><span class="token operator">*</span>
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>stylelint --help</code> \u547D\u4EE4\u67E5\u770B\u53EF\u7528\u7684 option \u9009\u9879\u3002</p><p>\u5E38\u7528\u7684\u4E5F\u662F <code>--fix</code> \u81EA\u52A8\u4FEE\u590D\u9009\u9879\uFF0C\u53EF\u4EE5\u5BF9\u90E8\u5206\u89C4\u5219\u81EA\u52A8\u4FEE\u590D\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u540C ESLint \u4E00\u6837\uFF0C\u6709\u4E24\u79CD\u914D\u7F6E\u65B9\u5F0F\uFF1A</p><ul><li>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6 Configuration Files</li><li>\u4F7F\u7528\u6CE8\u91CA\u8BED\u6CD5 Configuration Comments</li></ul><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u6587\u4EF6\u540C\u6837\u9075\u5FAA Cosmiconfig \u89C4\u5219\uFF0C\u53EF\u4EE5\u662F\u4EE5\u4E0B\u4E00\u79CD\uFF1A</p><ul><li>stylelintrc.config.js</li><li>.stylelintrc.js</li><li>.stylelintrc.yaml</li><li>.stylelintrc.yml</li><li>.stylelintrc.json</li><li>.stylelintrc</li><li>package.json</li></ul><p>\u4E3B\u8981\u7684\u914D\u7F6E\u9879\u5305\u62EC\uFF1A</p><ul><li>rules</li><li>extends</li><li>plugins</li><li>defaultSeverity\uFF1A \u5168\u5C40\u6307\u5B9A\u6240\u6709\u89C4\u5219\u7684\u9ED8\u8BA4\u4E25\u91CD\u7EA7\u522B\uFF0Cwarning / error</li><li>processors: Processors \u662F stylelint \u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u9002\u7528\u4E8E\u547D\u4EE4\u884C\u6216 NODE API</li><li>ignoreFiles: \u5B57\u7B26\u4E32\u6216\u6570\u7EC4\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u7B26\u5408 glob \u5339\u914D\u6A21\u5F0F\u7684\u6587\u4EF6\u3002\u4E5F\u53EF\u4EE5\u5355\u72EC\u5B9A\u4E49 <code>.stylelintignore</code> \u6587\u4EF6</li></ul><h4 id="\u89C4\u5219-rules" tabindex="-1">\u89C4\u5219 Rules <a class="header-anchor" href="#\u89C4\u5219-rules" aria-hidden="true">#</a></h4><p>stylelint \u6709\u4E0A\u767E\u6761\u89C4\u5219\uFF0C\u53EF\u4EE5\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ul><li>Stylistic issues: \u7528\u4E8E\u6821\u5BF9\u98CE\u683C\u7684\u89C4\u5219 \uFF08\u4E3B\u8981\u9488\u5BF9\u7A7A\u683C\uFF08\u6BD4\u5982\u8BF4\u5192\u53F7\u9644\u8FD1\u7684\u7A7A\u683C\uFF09\u3001\u6362\u884C\u3001\u7F29\u8FDB\u7B49\u7B49\uFF09</li><li>Limit language features\uFF1A \u7528\u4E8E\u5224\u522B\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027\u7684\u89C4\u5219 \uFF08\u5224\u65AD\u5728 CSS \u9009\u62E9\u5668\u4E2D\u662F\u5426\u6709\u4F7F\u7528\u67D0\u4E2A ID\uFF0C\u6216\u8005\u5728\u67D0\u6761\u58F0\u660E\u5F53\u4E2D\u662F\u5426\u5E94\u7528\u4E86!important \u5173\u952E\u8BCD\uFF09</li><li>Possible errors\uFF1A\u7528\u4E8E\u5224\u65AD\u4EE3\u7801\u9519\u8BEF\u7684\u89C4\u5219 \uFF08\u68C0\u6D4B\u9519\u8BEF\u7684 HEX \u989C\u8272\u5199\u6CD5\u6216\u8005\u67D0\u6761\u7B80\u5199\u5C5E\u6027\u662F\u5426\u4F1A\u8986\u76D6\u5176\u4ED6\u7684\u58F0\u660E\u8BED\u53E5\uFF09\uFF0C\u89C4\u5219\u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u952E\u662F\u89C4\u5219\u7684\u540D\u79F0\uFF0C\u503C\u662F\u89C4\u5219\u914D\u7F6E\u3002\u6BCF\u4E2A\u89C4\u5219\u914D\u7F6E\u7B26\u5408\u4E0B\u5217\u683C\u5F0F\u4E4B\u4E00\uFF1A <ul><li>\u5355\u4E2A\u503C\uFF08primary option\uFF09</li><li>\u4E00\u4E2A\u6709\u4E24\u4E2A\u503C\u7684\u6570\u7EC4\uFF08[primary option,secondary option]\uFF09</li><li>null (\u5173\u95ED\u89C4\u5219)</li></ul></li></ul><blockquote><p><a href="https://ask.dcloud.net.cn/article/36067" target="_blank" rel="noopener noreferrer">Rules \u4E2D\u6587\u89E3\u91CA</a></p></blockquote><p>\u5355\u4E2A\u89C4\u5219\u914D\u7F6E\u7684\u503C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E25\u683C\u7A0B\u5EA6\u3001\u9519\u8BEF\u6D88\u606F\u3001\u5FFD\u89C6\u8303\u56F4</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;color-hex-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lowercase letters are easier to distinguish from numbers&quot;</span>
  <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;block&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Please use 2 spaces for indentation. Tabs make The Architect grumpy.&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;severity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>
  <span class="token punctuation">}</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6269\u5C55-extends" tabindex="-1">\u6269\u5C55 extends <a class="header-anchor" href="#\u6269\u5C55-extends" aria-hidden="true">#</a></h4><p>\u6700\u91CD\u8981\u7684\u662F\uFF0C\u6240\u6709\u89C4\u5219\u9ED8\u8BA4\u90FD\u662F\u5173\u95ED\u7684\uFF0C\u540C ESLint \u4E00\u6837\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u5728 rules \u5B57\u6BB5\u4E2D\u4E00\u6761\u4E00\u6761\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5916\u90E8\u5DF2\u5B9A\u4E49\u597D\u7684\u4E00\u7EC4\u89C4\u5219\u4F5C\u4E3A\u6269\u5C55\u3002\u5B98\u65B9\u63A8\u8350\u7684\u6269\u5C55\u63D2\u4EF6\u662F <code>stylelint-config-standard</code></p><p>extends \u7684\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u7EC4\u3002\u5F53\u4E3A\u6570\u7EC4\u65F6\uFF0C\u6570\u7EC4\u7B2C\u4E00\u9879\u62E5\u6709\u6700\u9AD8\u4F18\u5148\u7EA7\uFF0C\u4F1A\u8986\u76D6\u540E\u9762\u7684\uFF0C\u4F9D\u6B21\u7C7B\u63A8\u3002</p><blockquote><p>\u8FD9\u70B9\u4E0D\u540C\u4E8E ESLint \u4E2D extends \u914D\u7F6E\u6570\u7EC4\u65F6\u6700\u540E\u4E00\u9879\u8986\u76D6\u524D\u9762\u7684\u3002</p></blockquote><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6570\u7EC4\u5F62\u5F0F</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./myExtendableConfig&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u63D2\u4EF6-plugins" tabindex="-1">\u63D2\u4EF6 plugins <a class="header-anchor" href="#\u63D2\u4EF6-plugins" aria-hidden="true">#</a></h4><p>\u63D2\u4EF6\u662F\u7531\u793E\u533A\u521B\u5EFA\u7684\u989D\u5916\u7684\u89C4\u5219\u6216\u89C4\u5219\u96C6\uFF0C\u4E00\u4E2A\u63D2\u4EF6\u4E5F\u662F\u4E00\u4E2A npm \u5305\uFF0C\u9700\u8981\u5148\u5B89\u88C5\u540E\u6DFB\u52A0\u5230 plugins \u6570\u7EC4\u4E2D\u3002</p><p>\u4E00\u4E2A\u63D2\u4EF6\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u89C4\u5219\u6216\u4E00\u7EC4\u89C4\u5219\uFF0C\u4E00\u65E6\u4F60\u5728 &quot;plugins&quot; \u4E2D\u58F0\u660E\u4E86\u63D2\u4EF6\uFF0C\u5C31\u8981\u5728 &quot;rules&quot; \u4E2D\u58F0\u660E\u5B83\u7684\u89C4\u5219\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-order&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;order/order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;custom-properties&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dollar-variables&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;declarations&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;rules&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;at-rules&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><a href="https://github.com/hudochenkov/stylelint-order/tree/3cabbecd704672377b553ccf3554e1805d4b42c3" target="_blank" rel="noopener noreferrer">stylelint-order</a> \u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u5B9A\u4E49\u58F0\u660E\uFF0C\u4EE5\u53CA\u5C5E\u6027\u987A\u5E8F\u7684\u63D2\u4EF6\u3002<br> \u8FD9\u91CC\u6709\u4E00\u4E2A\u5177\u4F53\u5C5E\u6027\u6392\u5E8F\u7684\u4F8B\u5B50 <a href="https://github.com/hudochenkov/stylelint-config-hudochenkov/blob/master/order.js" target="_blank" rel="noopener noreferrer">stylelint-config-hudochenkov</a></p></blockquote><h3 id="\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5" tabindex="-1">\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5 <a class="header-anchor" href="#\u6CE8\u91CA\u5FFD\u7565\u8BED\u6CD5" aria-hidden="true">#</a></h3><ul><li>stylelint-disable / stylelint-enable</li><li>stylelint-disable-line</li><li>stylelint-disable-next-line</li></ul><p>\u4E0A\u9762\u6CE8\u91CA\u8BED\u6CD5\u540E\u9762\u90FD\u53EF\u4EE5\u63A5\u5177\u4F53\u89C4\u5219\u540D\uFF0C\u9017\u53F7\u5206\u9694</p><div class="language-css"><pre><code><span class="token comment">/* \u5757\u8BED\u6CD5 */</span>
<span class="token comment">/* stylelint-disable selector-no-id, declaration-no-important  */</span>
<span class="token selector">#id</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* stylelint-enable */</span>

<span class="token comment">/* \u884C\u8BED\u6CD5 */</span>
<span class="token selector">#id</span> <span class="token punctuation">{</span>
  <span class="token comment">/* stylelint-disable-line */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/* stylelint-disable-line declaration-no-important */</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="stylelint-\u4E0E-prettier-\u96C6\u6210" tabindex="-1">stylelint \u4E0E Prettier \u96C6\u6210 <a class="header-anchor" href="#stylelint-\u4E0E-prettier-\u96C6\u6210" aria-hidden="true">#</a></h2><p>\u540C Prettier \u4E0E ESLint \u96C6\u6210\u4E00\u6837\u5206\u6210\u4E24\u6B65\uFF1A</p><ol><li>\u7981\u7528 stylelint \u4E2D\u4E0E Prettier \u4EE3\u7801\u98CE\u683C\u51B2\u7A81\u7684\u90E8\u5206\u89C4\u5219\uFF0C\u8BA9 Prettier \u63A5\u7BA1\u8FD9\u4E9B\u804C\u8D23\u3002</li></ol><p>\u8FD9\u6B65\u9700\u8981\u5B89\u88C5 <code>stylelint-config-prettier</code> \u5305\u4F5C\u4E3A stylelint \u7684\u6269\u5C55</p><div class="language-js"><pre><code>npm i <span class="token operator">-</span><span class="token constant">D</span> stylelint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u8BA9 stylelint \u6267\u884C\u65F6\u80FD\u5148\u6267\u884C Prettier \u683C\u5F0F\uFF0C\u518D\u6267\u884C\u53EF\u4EE5\u5BFC\u81F4\u9519\u8BEF\u7684\u89C4\u5219</li></ol><p>\u8FD9\u6B65\u9700\u8981\u5B89\u88C5 <code>stylelint-pretter</code></p><div class="language-js"><pre><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev stylelint<span class="token operator">-</span>prettier

<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6216\u8005\u4E00\u6B65\u5230\u4F4D\u7684\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-prettier/recommended&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219" tabindex="-1"><code>stylelint-order</code>\u63A8\u8350\u6392\u5E8F\u89C4\u5219 <a class="header-anchor" href="#stylelint-order\u63A8\u8350\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u6392\u5E8F\u89C4\u5219\uFF1A1. Positioning 2. Box Model 3.Visual 4. Typography 5. Animation 6. Misc</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-config-standard&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylelint-prettier/recommended&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;stylelint-order&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-descending-specificity&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;selector-pseudo-element-no-unknown&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;v-deep&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5FFD\u7565 .vue \u4E2D\u4F7F\u7528\u7684 ::v-deep</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5B9A\u4E49\u58F0\u660E\u987A\u5E8F\uFF1A $themeColor @extend .class </span>
    <span class="token string-property property">&#39;order/order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;dollar-variables&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-properties&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;at-rules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;declarations&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;order/properties-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// Positioning \u4F4D\u7F6E\u5E03\u5C40</span>
      <span class="token string">&#39;position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;z-index&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;vertical-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-grow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-shrink&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-basis&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-direction&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-flow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;flex-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-area&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-template&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-template-areas&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-template-rows&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-template-columns&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-row&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-row-start&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-row-end&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-column&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-column-start&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-column-end&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-auto-rows&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-auto-columns&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-auto-flow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-row-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;grid-column-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;row-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;align-content&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;align-items&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;align-self&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;justify-content&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;justify-items&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;justify-self&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;order&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;float&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clear&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;object-fit&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-x&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-y&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-scrolling&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;clip&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">// Box Model \u76D2\u5B50\u6A21\u578B</span>
      <span class="token string">&#39;box-sizing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;margin-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;padding-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-collapse&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-left-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-right-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-right-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-left-radius&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image-source&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image-slice&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image-outset&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-image-repeat&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-right-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-left-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-corner-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-left-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-top-right-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-right-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;border-bottom-left-image&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">// Visual \u89C6\u89C9\u6548\u679C</span>
      <span class="token string">&#39;background&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-image&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-attachment&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-position-x&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-position-y&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-clip&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-origin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;background-repeat&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-decoration-break&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;box-shadow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;outline-offset&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;table-layout&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;caption-side&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;empty-cells&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-type&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;list-style-image&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">// Typography \u5B57\u4F53\u6392\u7248</span>
      <span class="token string">&#39;font&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-weight&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-variant&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-size-adjust&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-stretch&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;font-family&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;line-height&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;letter-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;quotes&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;counter-increment&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;counter-reset&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;-ms-writing-mode&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-align&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-align-last&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-decoration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-emphasis&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-emphasis-position&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-emphasis-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-emphasis-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-indent&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-justify&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-outline&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-transform&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-overflow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-overflow-ellipsis&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-overflow-mode&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;text-shadow&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;white-space&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-spacing&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;word-break&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;overflow-wrap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;tab-size&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;hyphens&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;interpolation-mode&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//</span>
      <span class="token string">&#39;opacity&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;visibility&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;cursor&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;pointer-events&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;user-select&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//</span>
      <span class="token string">&#39;unicode-bidi&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;direction&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;columns&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-span&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-count&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-fill&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-gap&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-rule&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-rule-width&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-rule-style&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;column-rule-color&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;break-before&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;break-inside&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;break-after&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;page-break-before&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;page-break-inside&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;page-break-after&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;orphans&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;widows&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;zoom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;max-zoom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;min-zoom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;user-zoom&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;orientation&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;fill&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;stroke&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">// Animation \u8FC7\u6E21/\u52A8\u753B</span>
      <span class="token string">&#39;transition&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-delay&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-timing-function&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-duration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transition-property&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;transform-origin&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-name&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-duration&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-play-state&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-timing-function&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-delay&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-iteration-count&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-direction&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;animation-fill-mode&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,55),e=[o];function c(l,i,r,u,k,g){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
