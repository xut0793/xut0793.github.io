import{_ as e,c as n,o as t,a as s}from"./app.9dbb06c5.js";const _='{"title":"\u751F\u6210\u76EE\u5F55\u6811 tree-node-cli","description":"","frontmatter":{},"headers":[{"level":2,"title":"window \u81EA\u5E26\u7684\u547D\u4EE4\u884C\u547D\u4EE4tree","slug":"window-\u81EA\u5E26\u7684\u547D\u4EE4\u884C\u547D\u4EE4tree"},{"level":2,"title":"\u5728 Git Bash \u4E2D\u4F7F\u7528tree-node-cli","slug":"\u5728-git-bash-\u4E2D\u4F7F\u7528tree-node-cli"}],"relativePath":"Tools/node-tree-cli.md"}',a={},o=s(`<h1 id="\u751F\u6210\u76EE\u5F55\u6811-tree-node-cli" tabindex="-1">\u751F\u6210\u76EE\u5F55\u6811 tree-node-cli <a class="header-anchor" href="#\u751F\u6210\u76EE\u5F55\u6811-tree-node-cli" aria-hidden="true">#</a></h1><p>\u5728\u5E73\u5E38\u5199\u9879\u76EE\u6587\u6863\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u9700\u8981\u9879\u76EE\u7684\u6587\u6863\u6811\uFF0C\u7C7B\u4F3C\u8FD9\u6837\uFF1A</p><div class="language-"><pre><code>ts-node-project
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 index.ts
\u2514\u2500\u2500 package.json
</code></pre></div><p>\u90A3\u8FD9\u4E2A\u662F\u600E\u4E48\u751F\u6210\u7684\u5462\uFF1F\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><h2 id="window-\u81EA\u5E26\u7684\u547D\u4EE4\u884C\u547D\u4EE4tree" tabindex="-1">window \u81EA\u5E26\u7684\u547D\u4EE4\u884C\u547D\u4EE4<code>tree</code> <a class="header-anchor" href="#window-\u81EA\u5E26\u7684\u547D\u4EE4\u884C\u547D\u4EE4tree" aria-hidden="true">#</a></h2><p><strong>\u8BED\u6CD5\uFF1A</strong></p><div class="language-"><pre><code>tree [&lt;Drive&gt;:][&lt;Path&gt;] [/F] [/A]

&lt;Drive &gt;\uFF1A	\u6307\u5B9A\u5305\u542B\u8981\u663E\u793A\u5176\u76EE\u5F55\u7ED3\u6784\u7684\u78C1\u76D8\u7684\u9A71\u52A8\u5668\u3002
&lt;Path &gt;	    \u6307\u5B9A\u8981\u663E\u793A\u5176\u76EE\u5F55\u7ED3\u6784\u7684\u76EE\u5F55\u3002
/F	        \u663E\u793A\u6BCF\u4E2A\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u7684\u540D\u79F0\u3002
/A	        \u6307\u5B9A\u6811\u5C06\u4F7F\u7528\u6587\u672C\u5B57\u7B26\u800C\u4E0D\u662F\u56FE\u5F62\u5B57\u7B26\u6765\u663E\u793A\u94FE\u63A5\u5B50\u76EE\u5F55\u7684\u884C\u3002
/?	        \u5728\u547D\u4EE4\u63D0\u793A\u7B26\u4E0B\u663E\u793A\u5E2E\u52A9\u3002
</code></pre></div><blockquote><p>\u5982\u679C\u672A\u6307\u5B9A\u9A71\u52A8\u5668\u6216\u8DEF\u5F84\uFF0C\u6811\u5C06\u663E\u793A\u4ECE\u5F53\u524D\u9A71\u52A8\u5668\u7684\u5F53\u524D\u76EE\u5F55\u5F00\u59CB\u7684\u6811\u72B6\u7ED3\u6784\u3002</p></blockquote><p><strong>\u793A\u4F8B\uFF1A</strong> \u5BFC\u51FA\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u5939/\u6587\u4EF6\u7684\u76EE\u5F55\u6811\u5230 tree.txt \u6587\u4EF6\u4E2D\u3002</p><div class="language-bash"><pre><code>tree /F <span class="token operator">&gt;</span>tree.txt
</code></pre></div><p>\u4F46\u662F\u8FD9\u4E2A\u547D\u4EE4\u9009\u9879\u592A\u7B80\u5355\u4E86\uFF0C\u5E26\u6765\u5F88\u591A\u95EE\u9898\uFF0C\u6BD4\u5982\u4E00\u822C\u9879\u76EE\u4E2D\u90FD\u6709<code>node_modules</code>\u6587\u4EF6\u5939\uFF0C\u9879\u76EE\u8DEF\u5F84\u5D4C\u5957\u5F88\u6DF1\uFF0C\u4F46\u662F\u7528\u8FD9\u4E2A\u547D\u4EE4\u6CA1\u529E\u6CD5\u6392\u9664\u6389\u5BF9\u8BE5\u6587\u4EF6\u5939\u7684\u89E3\u6790\u3002</p><p>\u6240\u4EE5\u5982\u679C\u662F\u4E00\u4E2A\u76EE\u5F55\u5F88\u6DF1\u7684\u8BDD\uFF0C\u4F1A\u751F\u6210\u5F88\u5927\u7684\u6811\u7ED3\u6784\u3002</p><p>\u6240\u4EE5\u4E00\u822C\u90FD\u91C7\u7528\u7B2C\u4E09\u65B9\u7684\u6811\u751F\u6210\u5DE5\u5177\u3002</p><h2 id="\u5728-git-bash-\u4E2D\u4F7F\u7528tree-node-cli" tabindex="-1">\u5728 Git Bash \u4E2D\u4F7F\u7528<code>tree-node-cli</code> <a class="header-anchor" href="#\u5728-git-bash-\u4E2D\u4F7F\u7528tree-node-cli" aria-hidden="true">#</a></h2><p><code>tree-node-cli</code>\u662F\u57FA\u4E8E node \u7684\u4E00\u4E2A\u5DE5\u5177\u5305\uFF1A</p><p><strong>\u5168\u5C40\u5B89\u88C5\uFF1A</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -g tree-node-cli
</code></pre></div><p><strong>\u547D\u4EE4\u9009\u9879\uFF1A</strong></p><p>\u7535\u8111\u4E0A\u9700\u8981\u5B89\u88C5<code>Git</code>\u5DE5\u5177\uFF0C\u7136\u540E\u53F3\u952E\u6253\u5F00<code>Git Bash</code>\uFF0C\u8F93\u5165<code>tree -h</code>\u67E5\u770B\u6240\u6709\u547D\u4EE4\u9009\u9879\uFF1A</p><div class="language-bash"><pre><code>$ tree -h
Usage: tree <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Options:
  -V, --version             \u8F93\u51FA\u7248\u672C\u53F7
  -h, --help                \u8F93\u51FA\u4F7F\u7528\u65B9\u6CD5

  -a, --all-files           \u6240\u6709\u7684\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u7684\u6587\u4EF6\uFF0C\u90FD\u4F1A\u88AB\u6253\u5370\u51FA\u6765\u3002
  --dirs-first              \u5728\u6811\u72B6\u7ED3\u679C\u4E2D\u4F18\u5148\u5217\u51FA\u76EE\u5F55.
  -d, --dirs-only           \u53EA\u8F93\u51FA\u76EE\u5F55\u7ED3\u6784.
  -I, --exclude <span class="token punctuation">[</span>patterns<span class="token punctuation">]</span>  \u6392\u9664\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u3002E.g. <span class="token string">&quot;node_modules|coverage&quot;</span><span class="token builtin class-name">.</span>
  -L, --max-depth <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>       \u663E\u793A\u6700\u5927\u7684\u5C42\u7EA7\u6DF1\u5EA6.
  -r, --reverse             \u6309\u5B57\u6BCD\u53CD\u5E8F\u6392\u5217\u8F93\u51FA.
  -F, --trailing-slash      \u4E3A\u76EE\u5F55\u7ED3\u5C3E\u6DFB\u52A0 /
</code></pre></div><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-bash"><pre><code><span class="token comment"># \u5728 GIt Bash\u4E2D\u8F93\u5165</span>
$ tree --dirs-first -L <span class="token number">3</span> -I <span class="token string">&quot;node_modules|.vscode&quot;</span> <span class="token operator">&gt;</span>tree.md
</code></pre></div><p>\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B 3 \u5C42\u6587\u4EF6\u7ED3\u6784\uFF0C\u4F46\u6392\u9664<code>node_modules</code>\u548C<code>.vscode</code>\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u4EE5\u76EE\u5F55\u5728\u524D\u7684\u5F62\u5F0F\u8F93\u51FA\u5230 <a href="http://tree.md" target="_blank" rel="noopener noreferrer">tree.md</a> \u6587\u4EF6\u3002</p><div class="language-"><pre><code>ts-node
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 tree.md
\u251C\u2500\u2500 tsconfig.json
\u2514\u2500\u2500 tslint.json
</code></pre></div>`,24),r=[o];function d(c,p,i,l,g,h){return t(),n("div",null,r)}var v=e(a,[["render",d]]);export{_ as __pageData,v as default};
