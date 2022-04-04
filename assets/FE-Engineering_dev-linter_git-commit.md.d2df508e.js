import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";var o="/assets/commitmessage1.7039c112.png",e="/assets/commitmessage2.45ecfcdf.png",p="/assets/commitmessage3.4c532a7e.png",c="/assets/commitmessage4.5084ba24.png",l="/assets/git-cz.b48c5833.jpg";const b='{"title":"Git Commit \u63D0\u4EA4\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49","slug":"\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49"},{"level":2,"title":"\u7528\u4EC0\u4E48\u89C4\u8303","slug":"\u7528\u4EC0\u4E48\u89C4\u8303"},{"level":2,"title":"\u89C4\u8303\u7684\u683C\u5F0F","slug":"\u89C4\u8303\u7684\u683C\u5F0F"},{"level":3,"title":"type: \u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B","slug":"type-\u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B"},{"level":3,"title":"scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4","slug":"scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4"},{"level":3,"title":"subject: \u7B80\u77ED\u7684\u63CF\u8FF0","slug":"subject-\u7B80\u77ED\u7684\u63CF\u8FF0"},{"level":3,"title":"body: \u6B63\u6587","slug":"body-\u6B63\u6587"},{"level":3,"title":"footer\uFF1A\u811A\u6CE8\u5185\u5BB9","slug":"footer\uFF1A\u811A\u6CE8\u5185\u5BB9"},{"level":3,"title":"revert","slug":"revert"},{"level":2,"title":"\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177 Commitlint","slug":"\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177-commitlint"},{"level":3,"title":"1. install \u5B89\u88C5","slug":"_1-install-\u5B89\u88C5"},{"level":3,"title":"2. Cli \u547D\u4EE4\u884C","slug":"_2-cli-\u547D\u4EE4\u884C"},{"level":3,"title":"3. \u914D\u7F6E\u6587\u4EF6 commitlint.config.js","slug":"_3-\u914D\u7F6E\u6587\u4EF6-commitlint-config-js"},{"level":3,"title":"4. Rule \u89C4\u5219\u683C\u5F0F","slug":"_4-rule-\u89C4\u5219\u683C\u5F0F"},{"level":2,"title":"\u4E0E Husky \u96C6\u6210\u81EA\u52A8\u6821\u9A8C","slug":"\u4E0E-husky-\u96C6\u6210\u81EA\u52A8\u6821\u9A8C"},{"level":2,"title":"Commitizen: \u66FF\u4EE3\u4F60\u7684 git commit","slug":"commitizen-\u66FF\u4EE3\u4F60\u7684-git-commit"},{"level":3,"title":"\u5168\u5C40\u5B89\u88C5","slug":"\u5168\u5C40\u5B89\u88C5"},{"level":3,"title":"\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5","slug":"\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5"},{"level":2,"title":"\u81EA\u52A8\u751F\u6210 Change Log","slug":"\u81EA\u52A8\u751F\u6210-change-log"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u4E0E VS Code \u96C6\u6210","slug":"\u4E0E-vs-code-\u96C6\u6210"},{"level":2,"title":"\u5B9E\u8DF5\u6848\u4F8B","slug":"\u5B9E\u8DF5\u6848\u4F8B"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Engineering/dev-linter/git-commit.md"}',i={},r=t('<h1 id="git-commit-\u63D0\u4EA4\u89C4\u8303" tabindex="-1">Git Commit \u63D0\u4EA4\u89C4\u8303 <a class="header-anchor" href="#git-commit-\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49">\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49</a></li><li><a href="#\u7528\u4EC0\u4E48\u89C4\u8303">\u7528\u4EC0\u4E48\u89C4\u8303</a></li><li><a href="#\u89C4\u8303\u7684\u683C\u5F0F">\u89C4\u8303\u7684\u683C\u5F0F</a><ul><li><a href="#type-\u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B">type: \u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B</a></li><li><a href="#scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4">scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4</a></li><li><a href="#subject-\u7B80\u77ED\u7684\u63CF\u8FF0">subject: \u7B80\u77ED\u7684\u63CF\u8FF0</a></li><li><a href="#body-\u6B63\u6587">body: \u6B63\u6587</a></li><li><a href="#footer\uFF1A\u811A\u6CE8\u5185\u5BB9">footer\uFF1A\u811A\u6CE8\u5185\u5BB9</a></li><li><a href="#revert">revert</a></li></ul></li><li><a href="#\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177-commitlint">\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177 Commitlint</a><ul><li><a href="#_1-install-\u5B89\u88C5">1. install \u5B89\u88C5</a></li><li><a href="#_2-cli-\u547D\u4EE4\u884C">2. Cli \u547D\u4EE4\u884C</a></li><li><a href="#_3-\u914D\u7F6E\u6587\u4EF6-commitlint-config-js">3. \u914D\u7F6E\u6587\u4EF6 commitlint.config.js</a></li><li><a href="#_4-rule-\u89C4\u5219\u683C\u5F0F">4. Rule \u89C4\u5219\u683C\u5F0F</a></li></ul></li><li><a href="#\u4E0E-husky-\u96C6\u6210\u81EA\u52A8\u6821\u9A8C">\u4E0E Husky \u96C6\u6210\u81EA\u52A8\u6821\u9A8C</a></li><li><a href="#commitizen-\u66FF\u4EE3\u4F60\u7684-git-commit">Commitizen: \u66FF\u4EE3\u4F60\u7684 git commit</a><ul><li><a href="#\u5168\u5C40\u5B89\u88C5">\u5168\u5C40\u5B89\u88C5</a></li><li><a href="#\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5">\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5</a></li></ul></li><li><a href="#\u81EA\u52A8\u751F\u6210-change-log">\u81EA\u52A8\u751F\u6210 Change Log</a></li><li><a href="#\u603B\u7ED3">\u603B\u7ED3</a></li><li><a href="#\u4E0E-vs-code-\u96C6\u6210">\u4E0E VS Code \u96C6\u6210</a></li><li><a href="#\u5B9E\u8DF5\u6848\u4F8B">\u5B9E\u8DF5\u6848\u4F8B</a></li><li><a href="#\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</a></li></ul></div></p><p>git \u662F\u73B0\u5728\u5E02\u9762\u4E0A\u6700\u6D41\u884C\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177\uFF0C\u4E66\u5199\u826F\u597D\u7684 commit message \u80FD\u5927\u5927\u63D0\u9AD8\u4EE3\u7801\u7EF4\u62A4\u7684\u6548\u7387\u3002\u4F46\u662F\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u7531\u4E8E\u7F3A\u5C11\u5BF9\u4E8E commit message \u7684\u7EA6\u675F\uFF0C\u5BFC\u81F4\u586B\u5199\u5185\u5BB9\u968F\u610F\u3001\u8D28\u91CF\u53C2\u5DEE\u4E0D\u9F50\uFF0C\u53EF\u8BFB\u6027\u4F4E\u4EA6\u96BE\u4EE5\u7EF4\u62A4\u3002</p><ul><li>\u5E38\u89C1\u7684\u4E0D\u89C4\u8303\u7684\u6548\u679C\uFF1A</li></ul><p><img src="'+o+'" alt=""></p><ul><li>\u89C4\u8303\u7684\u6548\u679C</li></ul><p><img src="'+e+`" alt=""></p><h2 id="\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49" tabindex="-1">\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49 <a class="header-anchor" href="#\u89C4\u8303\u5316\u63D0\u4EA4\u7684\u610F\u4E49" aria-hidden="true">#</a></h2><ol><li>\u63D0\u4F9B\u66F4\u591A\u7684\u5386\u53F2\u4FE1\u606F\uFF0C\u65B9\u4FBF\u5FEB\u901F\u6D4F\u89C8\u3002</li></ol><div class="language-js"><pre><code>git log <span class="token constant">HEAD</span> <span class="token operator">--</span>pretty<span class="token operator">=</span>format<span class="token operator">:</span><span class="token operator">%</span>s
</code></pre></div><p>\u4F7F\u7528\u4E0A\u9762\u547D\u4EE4\uFF0C\u6253\u5370\u63D0\u4EA4\u8BB0\u5F55\uFF0C\u6BCF\u4E2A commit \u5360\u636E\u4E00\u884C\u3002\u4F60\u53EA\u770B\u884C\u9996\uFF0C\u5C31\u77E5\u9053\u6BCF\u6B21\u63D0\u4EA4\u7684\u76EE\u7684\u3002</p><p><img src="`+p+'" alt=""></p><ol start="2"><li>\u901A\u8FC7\u5DE5\u5177 conventional-changelog \u53EF\u4EE5\u76F4\u63A5\u4ECE commit message \u8BB0\u5F55\u4E2D\u751F\u6210 Change log\u3002</li></ol><p><img src="'+c+`" alt=""></p><ol start="3"><li>\u53EF\u8BFB\u6027\u597D\uFF0C\u6E05\u6670\uFF0C\u4E0D\u5FC5\u6DF1\u5165\u770B\u4EE3\u7801\u5373\u53EF\u4E86\u89E3\u5F53\u524D commit \u7684\u4F5C\u7528\u3002</li><li>\u4E3A Code Reviewing \u505A\u51C6\u5907</li><li>\u63D0\u9AD8\u9879\u76EE\u7684\u6574\u4F53\u8D28\u91CF\uFF0C\u63D0\u9AD8\u4E2A\u4EBA\u5DE5\u7A0B\u7D20\u8D28</li></ol><h2 id="\u7528\u4EC0\u4E48\u89C4\u8303" tabindex="-1">\u7528\u4EC0\u4E48\u89C4\u8303 <a class="header-anchor" href="#\u7528\u4EC0\u4E48\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u6700\u65E9\u56E0\u4E3A Angular \u56E2\u961F\u7684 Commit Message \u63D0\u4EA4\u8BB0\u5F55\u683C\u5F0F\u5B9E\u8DF5\u7684\u6700\u597D\uFF0C\u6162\u6162\u5728\u793E\u533A\u4E2D\u88AB\u63A8\u5E7F\u3002</p><p>\u53D7\u5230\u4E86 Angular \u63D0\u4EA4\u51C6\u5219\u7684\u542F\u53D1\uFF0C\u5E76\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u4EE5\u5176\u4E3A\u4F9D\u636E\uFF0C\u5728\u793E\u533A\u4E2D\u5B9A\u4E49\u4E86<strong>\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\uFF08Conventional Commits\uFF09</strong>\uFF0C\u5B83\u662F\u4E00\u79CD\u5177\u6709\u66F4\u53EF\u8BFB\u542B\u4E49\u7684\u8F7B\u91CF\u7EA7\u7EA6\u5B9A\u3002 \u5B83\u5728\u57FA\u4E8E Angular \u56E2\u961F\u5185\u90E8\u7684\u51C6\u5219\u57FA\u7840\u4E0A\u9884\u5B9A\u4E49\u4E86\u4E00\u7EC4\u7528\u4E8E\u521B\u5EFA\u6E05\u6670\u7684\u63D0\u4EA4\u5386\u53F2\u7684\u7B80\u5355\u89C4\u5219\uFF1B</p><blockquote><p>\u5B98\u7F51 <a href="https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/" target="_blank" rel="noopener noreferrer">\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\uFF08Conventional Commits\uFF09</a></p></blockquote><h2 id="\u89C4\u8303\u7684\u683C\u5F0F" tabindex="-1">\u89C4\u8303\u7684\u683C\u5F0F <a class="header-anchor" href="#\u89C4\u8303\u7684\u683C\u5F0F" aria-hidden="true">#</a></h2><p>\u89C4\u8303\u7EA6\u5B9A\u63D0\u4EA4\u6D88\u606F\u7684\u683C\u5F0F\uFF1A</p><div class="language-"><pre><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;BLANK LINE&gt;
&lt;body&gt;
&lt;BLANK LINE&gt;
&lt;footer&gt;
</code></pre></div><p>\u540C HTTP \u6D88\u606F\u7684\u683C\u5F0F\u5DEE\u4E0D\u591A\uFF0C\u89C4\u8303\u683C\u5F0F\u5206\u4E3A header body footer \u4E09\u90E8\u5206\uFF0C\u5E76\u4EE5\u7A7A\u884C\u5206\u9694\u3002</p><h3 id="type-\u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B" tabindex="-1">type: \u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B <a class="header-anchor" href="#type-\u63D0\u4EA4\u6D88\u606F\u7684\u7C7B\u578B" aria-hidden="true">#</a></h3><p>type \u7528\u4E8E\u6307\u5B9A commit \u7684\u7C7B\u578B\u3002\u4F9D\u636E Angular \u89C4\u8303\uFF0C\u63D0\u4F9B\u4E86 type \u7C7B\u578B\u5305\u62EC\uFF1A</p><ul><li>fix: \u4FEE\u590D bug</li><li>feat: \u589E\u52A0\u65B0\u529F\u80FD</li><li>refactor: \u5373\u4E0D\u662F BUG \u4FEE\u590D\uFF0C\u4E5F\u4E0D\u662F\u65B0\u529F\u80FD\u7684\u4EE3\u7801\u6539\u52A8</li><li>style: \u4E0D\u5F71\u54CD\u4EE3\u7801\u542B\u4E49\u7684\u6539\u52A8\uFF0C\u4F8B\u5982\u53BB\u6389\u7A7A\u683C\u3001\u6539\u53D8\u7F29\u8FDB\u3001\u589E\u5220\u5206\u53F7</li><li>perf: \u63D0\u9AD8\u6027\u80FD\u7684\u6539\u52A8</li><li>test: \u6DFB\u52A0\u6D4B\u8BD5\u6216\u8005\u4FEE\u6539\u73B0\u6709\u6D4B\u8BD5</li><li>build: \u6784\u9020\u5DE5\u5177\u7684\u6216\u8005\u5916\u90E8\u4F9D\u8D56\u7684\u6539\u52A8\uFF0C\u4F8B\u5982 webpack\uFF0Cnpm, gulp, broccoli \u7B49</li><li>chore: \u4E0D\u4FEE\u6539 src \u6216\u8005 test \u7684\u5176\u4F59\u4FEE\u6539\uFF0C\u4F8B\u5982\u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</li><li>ci: \u4E0E CI\uFF08\u6301\u7EED\u96C6\u6210\u670D\u52A1\uFF09\u6709\u5173\u7684\u6539\u52A8\uFF0C\u4F8B\u5982 Travis, Circle, BrowserStack, SauceLabs</li><li>docs: \u53EA\u6539\u52A8\u4E86\u6587\u6863\u76F8\u5173\u7684\u5185\u5BB9</li><li>revert: \u6267\u884C git revert \u6253\u5370\u7684 message</li></ul><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540E\u9762\u4ECB\u7ECD\u7684<code>commitlint</code>\u5DE5\u5177\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>type-enum</code> \u7684\u503C\u3002\u4F46 fix feat \u4E00\u822C\u90FD\u662F\u5FC5\u8981\u7684\uFF0C\u5E76\u4E14\u5982\u679C type \u4E3A feat \u548C fix\uFF0C\u5219\u8BE5 commit \u5C06\u80AF\u5B9A\u51FA\u73B0\u5728 Change log \u4E4B\u4E2D\u3002</p><h3 id="scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4" tabindex="-1">scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4 <a class="header-anchor" href="#scope\uFF1A\u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4" aria-hidden="true">#</a></h3><p>scope \u7528\u4E8E\u63CF\u8FF0\u6539\u52A8\u7684\u8303\u56F4\uFF0C\u683C\u5F0F\u4E3A\u9879\u76EE\u540D/\u6A21\u5757\u540D\uFF0C\u4F8B\u5982\uFF1A <code>node-pc/common</code> <code>rrd-h5/activity</code>\u3002</p><ul><li>\u5982\u679C\u4E00\u6B21 commit \u4FEE\u6539\u591A\u4E2A\u6A21\u5757\uFF0C\u5EFA\u8BAE\u62C6\u5206\u6210\u591A\u6B21 commit\uFF0C\u4EE5\u4FBF\u66F4\u597D\u8FFD\u8E2A\u548C\u7EF4\u62A4\u3002</li><li>\u5982\u679C\u4F60\u7684\u4FEE\u6539\u5F71\u54CD\u4E86\u4E0D\u6B62\u4E00\u4E2A scope\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528*\u4EE3\u66FF\u3002</li></ul><h3 id="subject-\u7B80\u77ED\u7684\u63CF\u8FF0" tabindex="-1">subject: \u7B80\u77ED\u7684\u63CF\u8FF0 <a class="header-anchor" href="#subject-\u7B80\u77ED\u7684\u63CF\u8FF0" aria-hidden="true">#</a></h3><p>\u63CF\u8FF0\u5B57\u6BB5\u662F\u5FC5\u987B\u7684\uFF0C\u7D27\u63A5\u5728 \u7C7B\u578B/\u4F5C\u7528\u57DF \u524D\u7F00\u7684\u7A7A\u683C\u4E4B\u540E\u3002\u4E00\u822C\u90FD\u6709\u5B57\u7B26\u957F\u5EA6\u9650\u5236\uFF0C\u901A\u5E38\u662F 50 \u5B57\u7B26\u3002</p><p>\u5E76\u6CE8\u610F\uFF1A</p><ul><li>\u4EE5\u52A8\u8BCD\u5F00\u5934\uFF0C\u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u73B0\u5728\u65F6\uFF0C\u6BD4\u5982 change\uFF0C\u800C\u4E0D\u662F changed \u6216 changes</li><li>\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5C0F\u5199</li><li>\u7ED3\u5C3E\u4E0D\u52A0\u53E5\u53F7\uFF08.\uFF09</li></ul><h3 id="body-\u6B63\u6587" tabindex="-1">body: \u6B63\u6587 <a class="header-anchor" href="#body-\u6B63\u6587" aria-hidden="true">#</a></h3><p>body \u6B63\u6587\u53EF\u9009\uFF0C\u5982\u679C\u6709\uFF0C\u5FC5\u987B\u4E0E subject \u4E4B\u95F4\u7A7A\u4E00\u884C\uFF0C\u4F5C\u4E3A\u6B64\u6B21\u63D0\u4EA4\u66F4\u4E3A\u8BE6\u7EC6\u7684\u63CF\u8FF0\u3002</p><p>\u63CF\u8FF0\u901A\u5E38\u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u73B0\u5728\u65F6\uFF0C\u6BD4\u5982\u4F7F\u7528 change \u800C\u4E0D\u662F changed \u6216 changes\u3002\u5E76\u4E14\u5E94\u8BE5\u8BF4\u660E\u4EE3\u7801\u53D8\u52A8\u7684\u52A8\u673A\uFF0C\u4EE5\u53CA\u4E0E\u4EE5\u524D\u884C\u4E3A\u7684\u5BF9\u6BD4\u3002</p><h3 id="footer\uFF1A\u811A\u6CE8\u5185\u5BB9" tabindex="-1">footer\uFF1A\u811A\u6CE8\u5185\u5BB9 <a class="header-anchor" href="#footer\uFF1A\u811A\u6CE8\u5185\u5BB9" aria-hidden="true">#</a></h3><p>\u5982\u679C\u9700\u8981 footer , \u540C\u6837\u9700\u8981\u4E0E body \u6B63\u6587\u4E4B\u95F4\u7A7A\u4E00\u884C\u3002\u811A\u6CE8\u901A\u5E38\u7528\u4E8E\u63CF\u8FF0\u4EE5\u4E0B\u4E24\u7C7B\u5185\u5BB9\uFF1A</p><ul><li>Breaking Changes: \u4E0D\u517C\u5BB9\u6027\u7684\u6539\u53D8\u63CF\u8FF0\uFF0C\u4E14\u5FC5\u987B\u4EE5\u5927\u5199\u7684 <code>BREAKING CHANGE:</code>\u5F00\u5934\u3002\u5982 <code>BREAKING CHANGE: isolate scope bindings definition has changed.</code></li><li>close issue: \u5173\u95ED\u7684 issue id\u3002\u5982 <code>Closes #234</code></li></ul><h3 id="revert" tabindex="-1">revert <a class="header-anchor" href="#revert" aria-hidden="true">#</a></h3><p>\u8FD8\u6709\u4E00\u79CD\u7279\u6B8A\u60C5\u51B5\uFF0C\u5982\u679C\u5F53\u524D commit \u7528\u4E8E\u64A4\u9500\u4EE5\u524D\u7684 commit\uFF0C\u5219\u5FC5\u987B\u4EE5 revert:\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u7740\u88AB\u64A4\u9500 Commit \u7684 Header\u3002</p><div class="language-js"><pre><code><span class="token literal-property property">revert</span><span class="token operator">:</span> <span class="token function">feat</span><span class="token punctuation">(</span>pencil<span class="token punctuation">)</span><span class="token operator">:</span> add <span class="token string">&#39;graphiteWidth&#39;</span> option
</code></pre></div><h2 id="\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177-commitlint" tabindex="-1">\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177 Commitlint <a class="header-anchor" href="#\u7EA6\u675F\u89C4\u8303\u7684\u5DE5\u5177-commitlint" aria-hidden="true">#</a></h2><blockquote><p>\u4E0E\u5176\u8D39\u5C3D\u5FC3\u601D\u5730\u544A\u8BC9\u522B\u4EBA\u8981\u9075\u5B88\u67D0\u79CD\u89C4\u5219\uFF0C\u4EE5\u89C4\u907F\u67D0\u79CD\u75DB\u82E6\uFF0C\u5012\u4E0D\u5982\u4ECE\u5DE5\u5177\u5C42\u9762\u5C31\u6D88\u706D\u8FD9\u79CD\u75DB\u82E6</p></blockquote><p>\u540C ESLint \u5BF9 JS \u4EE3\u7801\u7684\u6821\u9A8C\uFF0C Stylelint \u5BF9 CSS \u4EE3\u7801\u7684\u6821\u9A8C\u529F\u80FD\u4E00\u6837\uFF0C <code>Commitlint</code> \u5DE5\u5177\u5C31\u662F\u7528\u6765\u6821\u9A8C\u4F60\u7684 commit message \u662F\u4E0D\u662F\u7B26\u5408\u6240\u63D0\u4EA4\u7684<strong>\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\uFF08Conventional Commits\uFF09</strong></p><p><a href="https://commitlint.js.org/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51 Commitlint</a></p><h3 id="_1-install-\u5B89\u88C5" tabindex="-1">1. install \u5B89\u88C5 <a class="header-anchor" href="#_1-install-\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm i -D @commitlint/cli
</code></pre></div><h3 id="_2-cli-\u547D\u4EE4\u884C" tabindex="-1">2. Cli \u547D\u4EE4\u884C <a class="header-anchor" href="#_2-cli-\u547D\u4EE4\u884C" aria-hidden="true">#</a></h3><div class="language-"><pre><code># \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u884C\u67E5\u770B\u53EF\u7528\u7684\u547D\u4EE4\u884C\u53C2\u6570
npx commitlint --help
</code></pre></div><blockquote><p><a href="https://commitlint.js.org/#/reference-cli" target="_blank" rel="noopener noreferrer">commitlint CLI</a></p></blockquote><h3 id="_3-\u914D\u7F6E\u6587\u4EF6-commitlint-config-js" tabindex="-1">3. \u914D\u7F6E\u6587\u4EF6 <code>commitlint.config.js</code> <a class="header-anchor" href="#_3-\u914D\u7F6E\u6587\u4EF6-commitlint-config-js" aria-hidden="true">#</a></h3><p>\u5E38\u7528\u7684\u63D0\u4F9B\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BBE\u7F6E commitlint \u5982\u4F55\u6821\u9A8C\u3002</p><div class="language-"><pre><code># \u9700\u6C42\u5148\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56
npm i -D @commitlint/config-conventional @commitlint/format conventional-changelog-atom
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// commitlint.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u540C ESLint \u4E00\u6837\uFF0C\u6240\u6709 rules \u90FD\u662F\u9ED8\u8BA4\u5173\u95ED\u7684\uFF0C\u5982\u679C\u4E0D\u60F3\u4E00\u6761\u6761\u5728 rulues \u91CC\u624B\u52A8\u914D\u7F6E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5\u9009\u62E9\u4E00\u4E2A\u5916\u90E8\u6269\u5C55\u6765\u7EE7\u627F\u89C4\u5219\uFF0C\u5B98\u65B9\u6307\u5B9A\u7684\u89C4\u5219\u6269\u5C55\u662F @commitlint/config-conventional\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 @commitlint/config-angular</span>
  <span class="token literal-property property">parserPreset</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog-atom&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u89C4\u5219\u89E3\u6790\u5668\uFF0C\u53EF\u4EE5\u9009\u7528\u5916\u90E8\u5B89\u88C5\u5305</span>
  <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;@commitlint/format&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A commitlint \u6821\u9A8C\u7ED3\u679C\u8F93\u51FA\u7684\u683C\u5F0F</span>
  <span class="token literal-property property">defaultIgnores</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u7684\u5FFD\u7565\u89C4\u5219</span>
  <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token parameter">commit</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> commit <span class="token operator">===</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679Ccommitlint\u5E94\u8BE5\u5FFD\u7565\u7ED9\u5B9A\u7684\u6D88\u606F\uFF0C\u5219\u8FD4\u56DEtrue\u7684\u51FD\u6570</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5177\u4F53\u8981\u8986\u76D6\u7684\u81EA\u5B9A\u4E49\u89C4\u5219</span>
    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_4-rule-\u89C4\u5219\u683C\u5F0F" tabindex="-1">4. Rule \u89C4\u5219\u683C\u5F0F <a class="header-anchor" href="#_4-rule-\u89C4\u5219\u683C\u5F0F" aria-hidden="true">#</a></h3><p>\u4E00\u6761\u89C4\u5219\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>Level \u9519\u8BEF\u7EA7\u522B\uFF1A0 1 2 <ul><li>0 : \u8BE5\u89C4\u5219\u4E0D\u751F\u6548</li><li>1 \uFF1Awarnnig \u751F\u6210\u8B66\u544A\uFF0C\u4F46\u4E0D\u9000\u51FA</li><li>2 \uFF1Aerror \u9519\u8BEF\uFF0C\u9000\u51FA\u7EC8\u6B62</li></ul></li><li>Applicable \u662F\u5426\u9002\u7528 <ul><li>always : \u59CB\u7EC8\u9002\u7528</li><li>never \uFF1A \u4E0D\u80FD\u7528</li></ul></li><li>Value \u89C4\u5219\u5177\u4F53\u503C</li></ul><p>\u5B98\u65B9\u63A8\u8350\u7684\u6269\u5C55 <code>@commitlint/config-conventional</code>\u7684\u914D\u7F6E\u503C <a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional" target="_blank" rel="noopener noreferrer">@commitlint/config-conventional</a></p><div class="language-js"><pre><code><span class="token comment">// commitlint.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ci&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;chore&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;feat&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;perf&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;refactor&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;revert&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;type-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lowerCase&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5C0F\u5199 value: lower-case  upper-case camel-case pascal-case kebab-case snake-case start-case sentence-case</span>
    <span class="token string-property property">&quot;type-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u80FD\u53EF\u4EE5\u4E3A\u7A7A</span>
    <span class="token string-property property">&quot;type-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;type-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;scope-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lowerCase&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;subject-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;subject-full-stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u7ED3\u5C3E\u662F\u5426\u9700\u8981\u4EE5 . \u7ED3\u5C3E</span>
    <span class="token string-property property">&quot;subject-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;subject-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;header-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;header-full-stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;header-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;header-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token string-property property">&quot;body-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body-leading-blank&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// body \u662F\u5426\u4EE5\u7A7A\u884C\u5F00\u59CB</span>
    <span class="token string-property property">&quot;body-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// body \u5B57\u7B26\u4E32\u957F\u5EA6</span>
    <span class="token string-property property">&quot;body-max-line-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;footer-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;footer-leading-blank&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;footer-max-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;footer-max-line-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;footer-min-length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token string-property property">&quot;references-empty&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;signed-off-by&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&#39;Signed-off-by:&#39;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u7684\u6D88\u606F\u7B7E\u540D</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E0E-husky-\u96C6\u6210\u81EA\u52A8\u6821\u9A8C" tabindex="-1">\u4E0E Husky \u96C6\u6210\u81EA\u52A8\u6821\u9A8C <a class="header-anchor" href="#\u4E0E-husky-\u96C6\u6210\u81EA\u52A8\u6821\u9A8C" aria-hidden="true">#</a></h2><div class="language-"><pre><code>npm install --save-dev husky
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\uFF0C\u6BCF\u6B21 git commit \u65F6\u5C31\u4F1A\u4F7F\u7528 <code>commitlint.config.js</code> \u89C4\u5219\u6821\u9A8C\u3002</p><h2 id="commitizen-\u66FF\u4EE3\u4F60\u7684-git-commit" tabindex="-1">Commitizen: \u66FF\u4EE3\u4F60\u7684 git commit <a class="header-anchor" href="#commitizen-\u66FF\u4EE3\u4F60\u7684-git-commit" aria-hidden="true">#</a></h2><blockquote><p><a href="https://zhuanlan.zhihu.com/p/34223150" target="_blank" rel="noopener noreferrer">\u4F18\u96C5\u7684\u63D0\u4EA4\u4F60\u7684 Git Commit Message</a> ---\u5173\u6CE8 Commitizen \u90E8\u5206</p></blockquote><p>\u5373\u4F7F\u4E0A\u9762\u7684\u63D2\u4EF6\u548C\u6B65\u9AA4\u90FD\u505A\u5B8C\u4E86\uFF0C\u4F46\u5B9E\u9645\u5728\u7F16\u5199 git commit \u65F6\u8FD8\u662F\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u6309\u7EA6\u5B9A\u5F0F\u89C4\u5219\u4E66\u5199\uFF1A</p><div class="language-"><pre><code>git commit -m &#39;fix(*): fixed some bug&#39;
</code></pre></div><p>\u8FD9\u6837\u4E5F\u662F\u5F88\u7D2F\u3002\u53EF\u4EE5\u4F7F\u7528 <code>Commitizen</code> \u5DE5\u5177\uFF0C\u5B83\u6309\u7167\u4F60\u63D0\u4F9B\u7684\u9002\u914D\u5668\u6A21\u5F0F\uFF0C\u5C06\u4E0A\u9762 git commit \u4FE1\u606F\u63D0\u4EA4\u8F6C\u4E3A\u6B65\u9AA4\u5F0F\u7684\u4E66\u5199\u3002</p><ul><li>commitizen/cz-cli: \u6211\u4EEC\u9700\u8981\u501F\u52A9\u5B83\u63D0\u4F9B\u7684 git cz \u547D\u4EE4\u66FF\u4EE3\u6211\u4EEC\u7684 git commit \u547D\u4EE4, \u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u7B26\u5408\u89C4\u8303\u7684 commit message.</li></ul><p>\u53E6\u5916\uFF0C\u9700\u8981\u4E3A commitizen \u6307\u5B9A\u4E00\u4E2A Adapter(\u9002\u914D\u5668)\uFF0C\u4F7F\u5F97 commitizen \u80FD\u6309\u7167\u9002\u914D\u5668\u6307\u5B9A\u7684\u89C4\u8303\u751F\u6210 commit message.</p><blockquote><p>\u8FD9\u91CC\u63D0\u4F9B\u4E86\u591A\u4E2A\u9002\u914D\u5668\u9009\u62E9<a href="https://github.com/commitizen/cz-cli#adapters" target="_blank" rel="noopener noreferrer">https://github.com/commitizen/cz-cli#adapters</a></p></blockquote><ul><li>cz-conventional-changelog: \u4E00\u4E2A\u7B26\u5408 Angular \u56E2\u961F\u89C4\u8303\u7684 preset\uFF0Ctype \u56FA\u5B9A.</li><li>cz-customizable\uFF1A\u4E00\u4E2A\u53EF\u4EE5\u81EA\u5B9A\u4E49\u89C4\u5219\u7684\u9002\u914D\u5668\uFF0C\u901A\u8FC7 .cz-config.js \u81EA\u5B9A\u4E49\u914D\u7F6E\u3002</li><li>cz-emoji: \u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528 emojis \u8868\u60C5\u8FDB\u884C\u683C\u5F0F\u5316 commit message \u7684\u9002\u914D\u5668\uFF0C\u5E76\u652F\u6301\u81EA\u5B9A\u4E49\u9009\u9879\u548C\u63CF\u8FF0\u3002</li></ul><p>\u4E0B\u9762\u4EE5 <code>commitizen</code> \u642D\u914D <code>cz-conventional-changelog</code> \u4F5C\u793A\u4F8B\u3002</p><h3 id="\u5168\u5C40\u5B89\u88C5" tabindex="-1">\u5168\u5C40\u5B89\u88C5 <a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u5168\u5C40\u6A21\u5F0F\u4E0B, \u9700\u8981 ~/.czrc \u914D\u7F6E\u6587\u4EF6, \u4E3A commitizen \u6307\u5B9A Adapter.</p><div class="language-"><pre><code>npm install -g commitizen cz-conventional-changelog
echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc
</code></pre></div><h3 id="\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5" tabindex="-1">\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5 <a class="header-anchor" href="#\u9879\u76EE\u5185\u5C40\u90E8\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u8FDB\u884C\u9879\u76EE\u672C\u5730\u5B89\u88C5</p><div class="language-"><pre><code>npm i -D commitizen cz-conventional-changelog
</code></pre></div><p>package.json \u4E2D\u914D\u7F6E:</p><div class="language-js"><pre><code><span class="token string-property property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-conventional-changelog&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u5168\u5C40\u5B89\u88C5\u8FC7 commitizen, \u90A3\u4E48\u5728\u5BF9\u5E94\u7684\u9879\u76EE\u4E2D\u6267\u884C <code>git cz or npm run commit</code> \u90FD\u53EF\u4EE5\u3002</p><p><img src="`+l+`" alt=""></p><h2 id="\u81EA\u52A8\u751F\u6210-change-log" tabindex="-1">\u81EA\u52A8\u751F\u6210 Change Log <a class="header-anchor" href="#\u81EA\u52A8\u751F\u6210-change-log" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u7684\u6240\u6709 Commit \u90FD\u7B26\u5408**\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\uFF08Conventional Commits\uFF09**\u7684\u683C\u5F0F\uFF0C\u90A3\u4E48\u53D1\u5E03\u65B0\u7248\u672C\u65F6\uFF0C \u8981\u751F\u6210 Change log \u5C31\u53EF\u4EE5\u7528\u811A\u672C\u81EA\u52A8\u751F\u6210\u3002</p><p>\u751F\u6210\u7684\u6587\u6863\u5305\u62EC\u4EE5\u4E0B\u4E09\u4E2A\u90E8\u5206\uFF1A</p><ul><li>New features</li><li>Bug fixes</li><li>Breaking changes</li></ul><p>\u6BCF\u4E2A\u90E8\u5206\u90FD\u4F1A\u7F57\u5217\u76F8\u5173\u7684 commit \uFF0C\u5E76\u4E14\u6709\u6307\u5411\u8FD9\u4E9B commit \u7684\u94FE\u63A5\u3002\u5F53\u7136\uFF0C\u751F\u6210\u7684\u6587\u6863\u5141\u8BB8\u624B\u52A8\u4FEE\u6539\uFF0C\u6240\u4EE5\u53D1\u5E03\u524D\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6DFB\u52A0\u5176\u4ED6\u5185\u5BB9\u3002</p><p><code>conventional-changelog-cli</code> \u63D2\u4EF6\u5C31\u662F\u751F\u6210 Change log \u7684\u5DE5\u5177\uFF0C\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5373\u53EF\u3002</p><div class="language-"><pre><code># \u5B89\u88C5
npm install -g conventional-changelog-cli

# \u8FDB\u5165\u9879\u76EE
cd my-project

# \u8FD0\u884C\u547D\u4EE4
conventional-changelog -p angular -i CHANGELOG.md -s
</code></pre></div><p>\u5982\u679C\u8FD9\u662F\u4F60\u7B2C\u4E00\u6B21\u7528\u8FD9\u4E2A\u5DE5\u5177\u751F\u6210 CHANGELOG \uFF0C\u5E76\u4E14\u8986\u76D6\u4E4B\u524D\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-"><pre><code>conventional-changelog -p angular -i CHANGELOG.md -s -r 0
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u628A\u8FD9\u4E2A\u547D\u4EE4\u5199\u6210 package.json \u7684 script \u547D\u4EE4\u4E2D\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>conventional-changelog-cli</code> \u63D2\u4EF6\u7684\u914D\u7F6E\u9879\uFF0C\u4F7F\u7528 <code>npx conventional-changelog-cli --help</code> \u67E5\u770B\uFF1A</p><div class="language-md"><pre><code>// options
-i, --infile              Read the CHANGELOG from this file \u6307\u5B9A CHANGELOG 
                          \u8F93\u5165\u6587\u4EF6\uFF0C\u7528\u4E8E\u5408\u5E76\u4E0A\u6B21\u7684 CHANGELOG \u8BB0\u5F55
-o, --outfile             Write the CHANGELOG to this file, If unspecified, it prints to stdout
                          \u6307\u5B9A CHANGELOG \u8F93\u51FA\u6587\u4EF6\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u8F93\u51FA\u5230\u547D\u4EE4\u7A97\u53E3
-s, --same-file           Outputting to the infile so you don not&#39;t need to specify the same file as outfile 
                          \u8F93\u51FA\u5230\u4E0E infile \u76F8\u540C\u7684\u6587\u4EF6\u4E2D\uFF0C\u6240\u4EE5\u5982\u679C\u8F93\u51FA\u6587\u4EF6\u4E0E\u8F93\u5165\u6587\u4EF6\u76F8\u540C\u65F6\uFF0C\u4E0D\u9700\u8981\u6307\u5B9A outfile
-p, --preset              Name of the preset you want to use. Must be one of the following:
                          angular, atom, codemirror, ember, eslint, express, jquery, jscs or jshint
                          CHANGELOG \u8F93\u51FA\u683C\u5F0F\u7684\u9884\u8BBE\uFF0C\u53EA\u80FD\u662F\u6307\u5B9A\u7684\u51E0\u79CD\u3002
-k, --pkg                 A filepath of where your package.json is located,Default is the closest package.json from cwd
                          \u6307\u5B9Apackage.json \u6587\u4EF6\u6240\u5728\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u6700\u8FD1\u7684 package.json
-a, --append              Should the newer release be appended to the older release,Default: false
                          \u65B0\u7248\u672C\u662F\u5426\u5E94\u8BE5\u9644\u52A0\u4E0A\u65E7\u7248\u672C\u4E0A\uFF0C\u9ED8\u8BA4\u503C false
-r, --release-count       How many releases to be generated from the latest, Default: 1
                          If 0, the whole changelog will be regenerated and the outfile will be overwritten
                          \u4ECE\u6700\u65B0\u7248\u672C\u751F\u6210\u591A\u5C11\u4E2A\u7248\u672C\uFF0C\u9ED8\u8BA4\u503C:1\u3002\u5982\u679C\u4E3A0\uFF0C\u5219\u5C06\u91CD\u65B0\u751F\u6210\u6574\u4E2A\u53D8\u66F4\u65E5\u5FD7\uFF0C\u5E76\u8986\u76D6 outfile
--skip-unstable           If given, unstable tags will be skipped, e.g., x.x.x-alpha.1, x.x.x-rc.2
                          \u662F\u5426\u9700\u8981\u8DF3\u8FC7\u4E0D\u7A33\u5B9A\u7684\u6807\u7B7E\uFF0C\u4F8B\u5982\uFF0Cx.x.x-alpha\u30021, x.x.x-rc.2
-u, --output-unreleased   Output unreleased changelog
                          \u8F93\u51FA\u672A\u53D1\u5E03\u7684\u53D8\u66F4\u65E5\u5FD7
-v, --verbose             Verbose output. Use this for debugging, Default: false
                          \u8BE6\u7EC6\u7684\u8F93\u51FA\u3002\u7528\u4E8E\u8C03\u8BD5\uFF0C\u9ED8\u8BA4\u503C:false
-n, --config              A filepath of your config script \u6307\u5B9A\u914D\u7F6E\u811A\u672C\u7684\u6587\u4EF6\u8DEF\u5F84
                          Example of a config script: https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-cli/test/fixtures/config.js
-c, --context             A filepath of a json that is used to define template variables
                          \u6307\u5B9A\u7528\u4E8E\u5B9A\u4E49\u6A21\u677F\u53D8\u91CF\u7684json\u6587\u4EF6\u8DEF\u5F84
-l, --lerna-package       Generate a changelog for a specific lerna package (:pkg-name@1.0.0)
                          \u4E3A\u7279\u5B9A\u7684lerna\u5305\u751F\u6210\u4E00\u4E2A\u53D8\u66F4\u65E5\u5FD7(:pkg-name@1.0.0)
-t, --tag-prefix          Tag prefix to consider when reading the tags
                          \u8BFB\u53D6 tag \u6807\u7B7E\u65F6\u8003\u8651\u5B9A\u4E49\u7684\u6807\u7B7E\u524D\u7F00 tag-prefix
--commit-path             Generate a changelog scoped to a specific directory
                          \u751F\u6210\u4E00\u4E2A\u4F5C\u7528\u4E8E\u7279\u5B9A\u76EE\u5F55\u7684\u53D8\u66F4\u65E5\u5FD7
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><div class="language-"><pre><code># \u7B2C\u4E00\u90E8\u5206\uFF1A commit message \u683C\u5F0F\u6821\u9A8C
# 1. \u5B89\u88C5 commitlint \u53CA\u6269\u5C55
npm i -D @commitlint/cli @commitlint/config-conventional

# 2. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6 commitlint.config.js
echo &quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot; &gt; commitlint.config.js

# 3. \u96C6\u6210 husky
npm install --save-dev husky

# 4. \u66F4\u6539 package.json \u6587\u4EF6\u914D\u7F6E
{
  &quot;husky&quot;: {
    &quot;hooks&quot;: {
      &quot;commit-msg&quot;: &quot;commitlint -E HUSKY_GIT_PARAMS&quot;
    }
  }
}

# \u7B2C\u4E8C\u90E8\u5206\uFF1A\u5B8C\u5584 git commit \u63D0\u4EA4\u65B9\u5F0F\uFF0C\u907F\u514D\u624B\u5199\u7EA6\u5B9A\u683C\u5F0F
# 5. \u7528 Commitizen: \u66FF\u4EE3\u4F60\u7684 git commit
npm i -D commitizen cz-conventional-changelog

# 6. \u66F4\u6539 package.json \u6587\u4EF6\u914D\u7F6E
&quot;script&quot;: {
    ...,
    &quot;commit&quot;: &quot;git-cz&quot;,
},
&quot;config&quot;: {
  &quot;commitizen&quot;: {
    &quot;path&quot;: &quot;node_modules/cz-conventional-changelog&quot;
  }
}

#\u7B2C\u4E09\u90E8\u5206\uFF1A\u81EA\u52A8\u751F\u6210 chnagelog
# 7. \u751F\u6210 CHANGELOG
npm i -D conventional-changelog-cli

# 8. \u5728package.json \u7684 script \u4E2D\u589E\u52A0\u547D\u4EE4
{
  &quot;script&quot;: {
    &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;
  }
}
</code></pre></div><h2 id="\u4E0E-vs-code-\u96C6\u6210" tabindex="-1">\u4E0E VS Code \u96C6\u6210 <a class="header-anchor" href="#\u4E0E-vs-code-\u96C6\u6210" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5<code>Git-commit-plugin For Vscode</code>\u63D2\u4EF6\u5305\u3002</li><li>\u4F7F\u7528 <code>ctrl + shift + p</code> \u8C03\u51FA\u547D\u4EE4\u7A97\u53E3\uFF0C\u8F93\u5165 <code>show git commit template</code></li><li>\u6839\u636E\u9009\u62E9\u9879\u63D0\u4EA4\u4FE1\u606F</li></ol><p>\u8FD9\u4E2A\u63D2\u4EF6\u6709\u4E09\u4E2A\u914D\u7F6E\u9879\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// vscode \u914D\u7F6E\u6587\u4EF6 setting.json</span>
<span class="token string-property property">&quot;GitCommitPlugin.MaxSubjectWords&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// Subject \u7B80\u77ED\u63CF\u8FF0\u884C\u7684\u5B57\u7B26\u957F\u5EA6</span>
<span class="token string-property property">&quot;GitCommitPlugin.ShowEmoji&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u7528 emoji \u8868\u60C5\u5B57\u7B26\uFF0C\u56E0\u4E3A\u5982\u679C\u5F00\u542F\u4E5F\uFF0C\u90A3 commitlint \u6821\u9A8C type \u8981\u66F4\u6539\u5339\u914D\u7684</span>
<span class="token string-property property">&quot;GitCommitPlugin.CustomCommitType&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u589E\u52A0\u81EA\u5B9A\u4E49\u7684\u63D0\u4EA4\u7C7B\u578B\uFF0C\u53EF\u4EE5\u76F4\u63A5 [&#39;ui&#39;, &#39;merge&#39;]\uFF0C\u6216\u8005\u50CF\u4E0B\u9762\u8BE6\u7EC6\u914D\u7F6E label detail</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ui&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4FEE\u590D\u4E86\u663E\u793A\u6548\u679C\uFF0C\u5982 css \u4FEE\u6539\u7B49&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;merge&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EE3\u7801\u5206\u652F\u5408&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u5B9E\u8DF5\u6848\u4F8B" tabindex="-1">\u5B9E\u8DF5\u6848\u4F8B <a class="header-anchor" href="#\u5B9E\u8DF5\u6848\u4F8B" aria-hidden="true">#</a></h2><p>\u8BE5\u5B9E\u8DF5\u4E3B\u8981\u60F3\u5B9E\u73B0\u4EE5\u4E0B\u76EE\u7684\uFF1A</p><ul><li>\u589E\u52A0 <code>merge / ui</code>\u4E24\u79CD\u63D0\u4EA4\u7C7B\u578B</li><li>\u63D0\u4EA4\u4EA4\u4E92\u63D0\u793A\u4FE1\u606F\u8F6C\u8BD1\u6210\u4E2D\u6587</li><li>\u7EDF\u4E00\u547D\u4EE4\u884C\u548CIDE\u63D2\u4EF6\u5DE5\u5177\u5BF9 commit \u7684\u4F7F\u7528</li></ul><p>\u6240\u4EE5 <code>commitizen</code> \u7684\u9002\u914D\u5668\u9009\u62E9\u4E86\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684 <code>cz-customizable</code></p><div class="language-"><pre><code># \u7B2C\u4E00\u90E8\u5206\uFF1A commit message \u683C\u5F0F\u6821\u9A8C
# 1. \u5B89\u88C5 commitlint \u53CA\u6269\u5C55
npm i -D @commitlint/cli @commitlint/config-conventional husky

# 2. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6 commitlint.config.js
touch commitlint.config.js

# 3. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u589E\u52A0 merge / ui \u63D0\u4EA4\u7C7B\u578B
module.exports = {
  extends: [&#39;@commitlint/config-conventional&#39;],
  rules: {
    &quot;type-enum&quot;: [2, &quot;always&quot;, [
      &quot;feat&quot;,
      &quot;fix&quot;,
      &quot;style&quot;,
      &quot;ui&quot;, 
      &quot;merge&quot;,
      &quot;refactor&quot;,
      &quot;perf&quot;,
      &quot;chore&quot;,
      &quot;docs&quot;,
      &quot;test&quot;,
      &quot;revert&quot;,
    ]],
  },
}

# 4. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6 husky.config.js
module.exports = {
  &quot;hooks&quot;: {
    &quot;commit-msg&quot;: &quot;commitlint -E HUSKY_GIT_PARAMS&quot;
  }
}

# \u7B2C\u4E8C\u90E8\u5206\uFF1A\u5B8C\u5584 git commit \u63D0\u4EA4\u65B9\u5F0F\uFF0C\u907F\u514D\u624B\u5199\u7EA6\u5B9A\u683C\u5F0F
# 5. \u7528 cz-customizable \u4F5C\u4E3A commitizen \u7684\u9002\u914D\u5668
npm i -D commitizen cz-customizable

# 6. \u4FEE\u6539 package.json \u914D\u7F6E
&quot;script&quot;: {
    &quot;commit&quot;: &quot;git-cz&quot;,
},
&quot;config&quot;: {
  &quot;commitizen&quot;: {
    &quot;path&quot;: &quot;cz-customizable&quot;
  }
}

# 7. \u521B\u5EFA cz-customizable \u7684\u914D\u7F6E\u6587\u4EF6 .cz-config.js\u3002\u5B8C\u6210\u81EA\u5B9A\u4E49\u63D0\u4EA4\u7C7B\u578B\uFF0C\u5E76\u6C49\u5316\u63D0\u793A\u4FE1\u606F
module.exports = {
  types: [
    { value: &#39;feat&#39;,      name: &#39;feat:      \u6DFB\u52A0\u65B0\u529F\u80FD&#39; },
    { value: &#39;fix&#39;,       name: &#39;fix:       \u4FEE\u590D BUG&#39; },
    { value: &#39;style&#39;,     name: &#39;style:     \u4FEE\u6539\u4E86\u6CA1\u6709\u5F71\u54CD\u903B\u8F91\u7684\u4EE3\u7801, \u5982\u7A7A\u683C\u3001\u7F29\u8FDB\u3001\u9017\u53F7\u7B49&#39; },
    { value: &#39;ui&#39;,        name: &#39;ui:        \u4FEE\u590D\u4E86\u663E\u793A\u6548\u679C\uFF0C\u5982 css \u4FEE\u6539\u7B49&#39; },
    { value: &#39;merge&#39;,     name: &#39;merge:     \u4EE3\u7801\u5206\u652F\u5408\u5E76&#39; },
    { value: &#39;refactor&#39;,  name: &#39;refactor:  \u4EE3\u7801\u91CD\u6784\uFF0C\u6CA1\u6709\u589E\u52A0\u65B0\u529F\u80FD\u6216\u8005\u4FEE\u590DBUG&#39; },
    { value: &#39;perf&#39;,      name: &#39;perf:      \u4F18\u5316\u76F8\u5173\uFF0C\u5982\u63D0\u5347\u6027\u80FD\u3001\u4F53\u9A8C\u7B49&#39; },
    { value: &#39;chore&#39;,     name: &#39;chore:     \u6539\u53D8\u6784\u5EFA\u6D41\u7A0B\uFF0C\u6216\u8005\u589E\u5220\u4F9D\u8D56\u5305\u3001\u5DE5\u5177\u7B49&#39; },
    { value: &#39;docs&#39;,      name: &#39;docs:      \u4FEE\u6539\u4E86\u6587\u6863&#39; },
    { value: &#39;test&#39;,      name: &#39;test:      \u6D4B\u8BD5\u7528\u4F8B\u76F8\u5173\u4FEE\u6539&#39; },
    { value: &#39;revert&#39;,    name: &#39;revert:    \u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C&#39; },
  ],
  messages: {
    type: &quot;\u9009\u62E9\u8981\u63D0\u4EA4\u7684\u66F4\u6539\u7C7B\u578B:\\n&quot;,
    scope: &#39;\u6307\u793A\u6B64\u66F4\u6539\u6D89\u53CA\u7684\u8303\u56F4(\u53EF\u9009):\\n&#39;,
    customScope: &#39;\u6307\u793A\u6B64\u6B21\u66F4\u6539\u6D89\u53CA\u7684\u6587\u4EF6\uFF0C\u591A\u4E2A\u6587\u4EF6\u7528\u201C*\u201D(\u53EF\u9009):&#39;,
    subject: &#39;\u4EE5\u52A8\u8BCD\u5F00\u5934\u7B80\u77ED\u5730\u63CF\u8FF0\u53D8\u5316(\u226450):\\n&#39;,
    body: &#39;\u63D0\u4F9B\u66F4\u8BE6\u7EC6\u7684\u53D8\u66F4\u63CF\u8FF0\uFF0C\u4F7F\u7528\u201C|\u201D\u6362\u884C(\u53EF\u9009):\\n&#39;,
    breaking: &#39;\u5217\u51FA\u4EFB\u4F55\u7834\u574F\u6027\u7684\u66F4\u6539(\u53EF\u9009):\\n&#39;,
    footer: &#39;\u5217\u51FA\u8FD9\u6B21\u66F4\u6539\u5173\u95ED\u7684\u95EE\u9898 ISSUES CLOSED\uFF0C\u5982: #31, #34\u3002(\u53EF\u9009):\\n&#39;,
    confirmCommit: &#39;\u60A8\u786E\u5B9A\u8981\u7EE7\u7EED\u6267\u884C\u4E0A\u9762\u7684\u63D0\u4EA4\u5417?&#39;,
  },
  allowCustomScopes: true,
  allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],
  subjectLimit: 50,
  skipQuestions: [&#39;breaking&#39;],
}

#\u7B2C\u4E09\u90E8\u5206\uFF1A\u81EA\u52A8\u751F\u6210 chnagelog
# 8. \u751F\u6210 CHANGELOG
npm i -D conventional-changelog-cli

# 9. \u5728package.json \u7684 script \u4E2D\u589E\u52A0\u547D\u4EE4
{
  &quot;script&quot;: {
    &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;
  }
}

# \u7B2C\u56DB\u90E8\uFF1Avscode \u5B89\u88C5 Git-commit-plugin For Vscode \u63D2\u4EF6\u5305
# 10. vscode \u914D\u7F6E\u6587\u4EF6 setting.json \u589E\u52A0\u63D2\u4EF6\u914D\u7F6E
&quot;GitCommitPlugin.MaxSubjectWords&quot;: 50,
&quot;GitCommitPlugin.ShowEmoji&quot;: false,
&quot;GitCommitPlugin.CustomCommitType&quot;: [
  {
    &quot;label&quot;: &quot;ui&quot;,
    &quot;detail&quot;: &quot;\u4FEE\u590D\u4E86\u663E\u793A\u6548\u679C\uFF0C\u5982 css \u4FEE\u6539\u7B49&quot;
  },
  {
    &quot;label&quot;: &quot;merge&quot;,
    &quot;detail&quot;: &quot;\u4EE3\u7801\u5206\u652F\u5408&quot;
  },
]
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/" target="_blank" rel="noopener noreferrer">\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\uFF08Conventional Commits\uFF09</a></li><li><a href="https://commitlint.js.org/#/" target="_blank" rel="noopener noreferrer">commitlint \u5B98\u7F51</a></li><li><a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional" target="_blank" rel="noopener noreferrer">@commitlint/config-conventional github</a></li><li><a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular commit message guidelines</a></li><li><a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli" target="_blank" rel="noopener noreferrer">conventional-changelog-cli github</a></li><li><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">Commitizen github</a></li><li><a href="https://segmentfault.com/a/1190000009048911#item-6" target="_blank" rel="noopener noreferrer">git commit \u89C4\u8303\u6307\u5357</a></li></ul>`,111),u=[r];function m(g,k,d,h,q,f){return s(),a("div",null,u)}var v=n(i,[["render",m]]);export{b as __pageData,v as default};
