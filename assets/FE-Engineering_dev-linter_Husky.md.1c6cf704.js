import{_ as s,c as n,o as a,a as t}from"./app.9dbb06c5.js";const h='{"title":"Husky","description":"","frontmatter":{},"headers":[{"level":2,"title":"git hooks","slug":"git-hooks"},{"level":2,"title":"Husky","slug":"husky-1"},{"level":2,"title":"Husky \u4E0E lint-staged \u914D\u5408\u4F7F\u7528","slug":"husky-\u4E0E-lint-staged-\u914D\u5408\u4F7F\u7528"}],"relativePath":"FE-Engineering/dev-linter/Husky.md"}',p={},o=t(`<h1 id="husky" tabindex="-1">Husky <a class="header-anchor" href="#husky" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#git-hooks">git hooks</a></li><li><a href="#husky-1">Husky</a></li><li><a href="#husky-\u4E0E-lint-staged-\u914D\u5408\u4F7F\u7528">Husky \u4E0E lint-staged \u914D\u5408\u4F7F\u7528</a></li></ul></div></p><blockquote><p>Git hooks made easy<br>Husky can prevent bad git commit, git push and more \u{1F436} woof! ---<a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">Husky github</a></p></blockquote><p>Husky \u63D2\u4EF6\u7684\u76EE\u7684\u662F\u8BA9 git hooks \u64CD\u4F5C\u66F4\u7B80\u5355\uFF0C\u80FD\u591F\u5E2E\u4F60\u963B\u6321\u4F4F\u4E0D\u597D\u7684\u4EE3\u7801\u63D0\u4EA4\u548C\u63A8\u9001\u3002</p><blockquote><p>\u8BD5\u60F3\u5982\u679C\u5C06\u4EE3\u7801\u5DF2\u7ECF push \u5230\u8FDC\u7A0B\u540E\uFF0C\u518D\u8FDB\u884C\u626B\u63CF\u53D1\u73B0\u591A\u4E86\u4E00\u4E2A\u5206\u53F7\u7136\u540E\u88AB\u6253\u56DE\u4FEE\u6539\u540E\u624D\u80FD\u53D1\u5E03\uFF0C\u8FD9\u6837\u662F\u4E0D\u662F\u5F88\u5D29\u6E83\uFF0C\u6700\u597D\u7684\u65B9\u5F0F\u81EA\u7136\u662F\u786E\u4FDD\u672C\u5730\u7684\u4EE3\u7801\u5DF2\u7ECF\u901A\u8FC7\u68C0\u67E5\u624D\u80FD push \u5230\u8FDC\u7A0B\uFF0C\u8FD9\u6837\u624D\u80FD\u4ECE\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u786E\u4FDD\u5E94\u7528\u7684\u7EBF\u4E0A\u8D28\u91CF\uFF0C\u540C\u65F6\u4E5F\u80FD\u591F\u907F\u514D lint \u7684\u53CD\u9988\u6D41\u7A0B\u8FC7\u957F\u7684\u95EE\u9898\u3002<br>\u90A3\u4E48\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u8FDB\u884C\u626B\u63CF\u68C0\u67E5\u5462\uFF1F\u8FD9\u4E2A\u65F6\u673A\u81EA\u7136\u800C\u7136\u662F\u672C\u5730\u8FDB\u884C git commit \u7684\u65F6\u5019\uFF0C\u5982\u679C\u80FD\u5728\u672C\u5730\u6267\u884C git commit \u64CD\u4F5C\u65F6\u80FD\u591F\u89E6\u53D1\u5BF9\u4EE3\u7801\u68C0\u67E5\u5C31\u662F\u6700\u597D\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u8FD9\u91CC\u5C31\u9700\u8981\u4F7F\u7528\u7684 git hook\u3002</p></blockquote><h2 id="git-hooks" tabindex="-1">git hooks <a class="header-anchor" href="#git-hooks" aria-hidden="true">#</a></h2><p>git \u7684 hook \u53EF\u4EE5\u7406\u89E3\u6210\u5F53\u6267\u884C\u5982 git add\u3001git commit \u7B49 git \u64CD\u4F5C\u65F6\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u5728 git hook \u4E0D\u540C\u94A9\u5B50\u91CC\u7F16\u5199\u4E00\u4E9B\u547D\u4EE4\u811A\u672C\uFF0C\u5C31\u53EF\u4EE5\u5728 git \u64CD\u4F5C\u65F6\u89E6\u53D1\u4EE3\u7801\u76F8\u5E94\u811A\u672C\u6267\u884C\u3002</p><p>\u53EF\u4EE5\u67E5\u770B .git \u6587\u4EF6\u4E0B\u7684 hooks \u76EE\u5F55\uFF0C\u8FD9\u91CC\u5B58\u653E\u7684\u662F git \u76F8\u5173\u64CD\u4F5C\u7684\u4E00\u4E9B\u811A\u672C\u4F8B\u5B50\u3002</p><blockquote><p>\u4E00\u822C.git \u4E3A\u9690\u85CF\u6587\u4EF6\uFF0C\u53EF\u4EE5\u628A\u9879\u76EE\u62D6\u5165 IDE \u4E2D\u67E5\u770B, .git \u6587\u4EF6\u91CC\u7684\u5185\u5BB9\u4E00\u822C\u4E0D\u5141\u8BB8\u624B\u52A8\u66F4\u6539\u7684\u3002\u4E5F\u53EF\u4EE5\u5728\u6587\u4EF6\u5939\u4E2D\u52FE\u9009\u663E\u793A\u9690\u85CF\u6587\u4EF6\u67E5\u770B\u5230\u3002</p></blockquote><div class="language-js"><pre><code>cd<span class="token punctuation">.</span>git <span class="token operator">/</span> hooks<span class="token punctuation">;</span>
ls <span class="token operator">-</span> l<span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230 pre-commit / pre-push \u7B49\u811A\u672C\u6587\u4EF6</p><div class="language-"><pre><code>-rwxr-xr-x 1 40389 197609  478 10\u6708 13  2019 applypatch-msg.sample*
-rwxr-xr-x 1 40389 197609  896 10\u6708 13  2019 commit-msg.sample*
-rwxr-xr-x 1 40389 197609 3327 10\u6708 13  2019 fsmonitor-watchman.sample*
-rwxr-xr-x 1 40389 197609  189 10\u6708 13  2019 post-update.sample*
-rwxr-xr-x 1 40389 197609  424 10\u6708 13  2019 pre-applypatch.sample*
-rwxr-xr-x 1 40389 197609 1638 10\u6708 13  2019 pre-commit.sample*
-rwxr-xr-x 1 40389 197609 1492 10\u6708 13  2019 prepare-commit-msg.sample*
-rwxr-xr-x 1 40389 197609 1348 10\u6708 13  2019 pre-push.sample*
-rwxr-xr-x 1 40389 197609 4898 10\u6708 13  2019 pre-rebase.sample*
-rwxr-xr-x 1 40389 197609  544 10\u6708 13  2019 pre-receive.sample*
-rwxr-xr-x 1 40389 197609 3610 10\u6708 13  2019 update.sample*
</code></pre></div><p>\u4E0A\u56FE\u4E3A\u5404\u4E2A\u94A9\u5B50\u7684\u6848\u4F8B\u811A\u672C\uFF0C\u53EF\u4EE5\u628A sample \u53BB\u6389\uFF0C\u76F4\u63A5\u7F16\u5199 shell \u811A\u672C\u6765\u6267\u884C\u3002\u4F46\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6\u6765\u4F7F\u94A9\u5B50\u751F\u6548\u3002\u5E38\u7528\u7684\u63D2\u4EF6\u5305\u62EC <code>Husky</code> \u548C <code>pre-commit</code>\uFF0C\u8FD9\u91CC\u4ECB\u7ECD <code>Husky</code> \u7684\u4F7F\u7528\u3002</p><h2 id="husky-1" tabindex="-1">Husky <a class="header-anchor" href="#husky-1" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-"><pre><code># npm
npm install husky --save-dev

# yarn
yarn add husky --dev
</code></pre></div><ol start="2"><li>\u5728 package.json \u4E2D\u914D\u7F6E</li></ol><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm test&quot;</span><span class="token punctuation">,</span> <span class="token comment">// hooks \u7684 key \u5BF9\u5E94\u76F8\u5E94\u7684 git \u94A9\u5B50\uFF0C\u503C\u4E3A script \u5BF9\u5E94\u7684\u547D\u4EE4\uFF0C\u6216\u5176\u5B83\u5B57\u6BB5\u9879\u914D\u7F6E</span>
      <span class="token property">&quot;pre-push&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm test&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;...&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E4B\u540E\uFF0C\u5BF9\u9879\u76EE\u6267\u884C <code>git commit -m &#39;something&#39;</code>\u5C31\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u547D\u540D\u6267\u884C\u3002</p><h2 id="husky-\u4E0E-lint-staged-\u914D\u5408\u4F7F\u7528" tabindex="-1">Husky \u4E0E lint-staged \u914D\u5408\u4F7F\u7528 <a class="header-anchor" href="#husky-\u4E0E-lint-staged-\u914D\u5408\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-"><pre><code># \u5B89\u88C5
npm install lint-staged husky --save-dev
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span> <span class="token comment">// \u5728\u4EE3\u7801commit\u524D\u6267\u884C\u5C06\u52A0\u5165\u5230stage\u6682\u5B58\u533A\u7684\u6587\u4EF6\u8FDB\u884C\u68C0\u67E5\uFF0C\u6309\u7167\u4E0B\u9762&quot;lint-staged&quot;\u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u68C0\u67E5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9staged\u7684\u6587\u4EF6\u8FDB\u884Clint\uFF0C\u907F\u514D\u5BF9\u6574\u4E2A\u9879\u76EE\u8FDB\u884Clint\u4EE3\u7801\u5E9E\u5927\u4E14\u7F13\u6162</span>
  <span class="token string-property property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;linters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;src/**/*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">// \u5339\u914D.js\u6587\u4EF6\u4E00\u4E0B\u547D\u4EE4</span>
        <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6267\u884Ceslint\u8FDB\u884C\u626B\u63CF\u8FDB\u884Cfix</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6267\u884Cprettier\u811A\u672C,\u5BF9\u4EE3\u7801\u955C\u50CF\u683C\u5F0F\u5316</span>
        <span class="token string">&quot;git add&quot;</span> <span class="token comment">//\u4E0A\u8FF0\u4E24\u9879\u4EFB\u52A1\u5B8C\u6210\u540E\u5BF9\u4EE3\u7801\u91CD\u65B0add\u3002</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;src/**/*.vue&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;git add&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;src/**/*.scss&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;stylelint --syntax=scss --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;git add&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/static/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/public/&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),e=[o];function c(r,u,i,l,k,d){return a(),n("div",null,e)}var m=s(p,[["render",c]]);export{h as __pageData,m as default};
