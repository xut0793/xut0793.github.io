import{_ as e,c as n,o,a}from"./app.9dbb06c5.js";const m='{"title":"\u5F00\u53D1\u73AF\u5883\u521D\u59CB\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"Node\u5B89\u88C5","slug":"node\u5B89\u88C5"},{"level":2,"title":"Git\u5B89\u88C5","slug":"git\u5B89\u88C5"},{"level":2,"title":"Vscode\u5B89\u88C5","slug":"vscode\u5B89\u88C5"},{"level":2,"title":"Powershell\u7F8E\u5316","slug":"powershell\u7F8E\u5316"}],"relativePath":"FE-Engineering/initial/dev-env.md"}',s={},l=a(`<h1 id="\u5F00\u53D1\u73AF\u5883\u521D\u59CB\u5316" tabindex="-1">\u5F00\u53D1\u73AF\u5883\u521D\u59CB\u5316 <a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u521D\u59CB\u5316" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u8FD9\u4E24\u5929\u7B14\u8BB0\u672C\u7535\u8111\u9891\u7E41\u84DD\u5C4F\uFF0C\u81EA\u52A8\u6B7B\u673A\u91CD\u542F\uFF0C\u6CA1\u529E\u6CD5\u53EA\u80FD\u62FF\u5230\u552E\u540E\u5904\u7406\u3002 \u91CD\u88C5\u7CFB\u7EDF\u540E\uFF0C\u7535\u8111\u7684\u5F00\u53D1\u73AF\u5883\u5C31\u5F97\u91CD\u65B0\u914D\u7F6E\u5566\u3002 \u6240\u4EE5\u5728\u8FD9\u91CC\u8BB0\u5F55\u4E0B\u6574\u4E2A\u73AF\u5883\u5B89\u88C5\u914D\u7F6E\u8FC7\u7A0B\u4E2D\u5404\u4E2A\u5DE5\u9F84\u8F6F\u4EF6\u7684\u5B89\u88C5\u53CA\u6CE8\u610F\u4E8B\u9879\u3002 \u514D\u5F97\u6BCF\u6B21\u90FD\u5F97\u8017\u4E0A\u4E00\u6574\u5929\uFF0C\u6BCF\u6B21\u5B89\u88C5\u67D0\u4E2A\u8F6F\u4EF6\u5DE5\u5177\u5C31\u5F97\u7F51\u4E0A\u67E5\u4E00\u5806\u8D44\u6599\u6765\u907F\u514D\u5404\u79CD\u5751\u3002</p><p>\u524D\u7AEF\u5F00\u53D1\u73AF\u5883\u57FA\u672C\u5F97\u914D\u7F6E\u8FD9\u4E9B\u8F6F\u4EF6\u5DE5\u5177\uFF1A</p><ul><li>nvm: Node Version Manager node \u7248\u672C\u7BA1\u7406\u5DE5\u5177</li><li>Git</li><li>vscode</li><li>powershell \u7F8E\u5316</li></ul><h2 id="node\u5B89\u88C5" tabindex="-1">Node\u5B89\u88C5 <a class="header-anchor" href="#node\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7Dnvm \u4E0B\u8F7D\u94FE\u63A5\uFF1A<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">nvm-windows</a></p><p>\u89E3\u538B\u5B89\u88C5\uFF0C\u5B89\u88C5\u8DEF\u5F84\u4E0D\u8981\u6709\u7A7A\u683C\uFF0C\u907F\u514D\u7248\u672C\u5207\u6362\u65F6\u610F\u5916\u9519\u8BEF</p></li><li><p>\u66F4\u6539\u4E0B\u8F7D\u6E90</p><div class="language-bash"><pre><code>nvm node_mirror: https://npm.taobao.org/mirrors/node/
</code></pre></div><div class="language-bash"><pre><code>nvm npm_mirror https://npm.taobao.org/mirrors/npm/
</code></pre></div></li><li><p>\u4F7F\u7528<code>nvm</code>\u5B89\u88C5<code>node</code></p><div class="language-bash"><pre><code>nvm <span class="token function">install</span> \u7248\u672C\u53F7 <span class="token comment">#\u53EF\u4EE5\u591A\u4E2A\u7A7A\u683C\u5206\u9694</span>
</code></pre></div></li><li><p>\u89E3\u51B3\u5168\u5C40\u5B89\u88C5\u5305\u7684\u5171\u7528\u95EE\u9898</p><ul><li>\u5728\u786E\u8BA4\u76EE\u5F55\u4E0B\u65B0\u5EFA\u5168\u5C40\u6A21\u5757\u5B58\u653E\u6587\u4EF6\u5939<code>node_gloabl</code> <code>node_cache</code></li><li>\u4FEE\u6539<code>npm</code>\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-bash"><pre><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;D:\\program<span class="token entity" title="\\n">\\n</span>vm<span class="token entity" title="\\n">\\n</span>ode_global&quot;</span>
</code></pre></div><div class="language-bash"><pre><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;D:\\program<span class="token entity" title="\\n">\\n</span>vm<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span>
</code></pre></div><ul><li>\u4FEE\u6539\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-bash"><pre><code><span class="token number">1</span>. \u7528\u6237\u53D8\u91CF path \u4E2D\u6DFB\u52A0 D:<span class="token punctuation">\\</span>program<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>node_global
<span class="token number">2</span>. \u7CFB\u7EDF\u53D8\u91CF\u4E2D\u65B0\u589E\u53D8\u91CF NODE_PATH \u53D8\u91CF\u503C\u4E3A D:<span class="token punctuation">\\</span>program<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>node_global<span class="token punctuation">\\</span>node_modules
</code></pre></div><p>\u5F00\u53D1\u6240\u9700\u7684node\u73AF\u5883\u914D\u7F6E\u5B8C\u6BD5\u3002</p></li></ol><blockquote><p>powershell\u9ED8\u8BA4\u9650\u5236\u811A\u672C\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728powershell\u4E2D\u8FD0\u884C\u5168\u5C40\u5B89\u88C5\u5305\u4F1A\u62A5\u9519\u3002\u6B64\u65F6\u9700\u8981\u89E3\u9664\u9650\u5236\uFF1A\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884Cpowershell\uFF0C\u8F93\u5165set-ExecutionPolicy RemoteSigned</p></blockquote><blockquote><p>\u53EF\u80FD\u8FD8\u4F1A\u9047\u5230nvm \u5B89\u88C5node\u6210\u529F\uFF0C\u4F46\u662F\u9644\u5E26\u7684npm\u5931\u8D25\uFF0C\u4E0D\u53EF\u7528\u3002\u6B64\u65F6\u9700\u8981\u624B\u52A8\u5B89\u88C5node\uFF0C\u518D\u628A\u6587\u4EF6\u5939\u79FB\u5165nvm\u76EE\u5F55\u4E0B\uFF0C\u4FEE\u6539\u4E3Anvm\u53EF\u8BC6\u522B\u7684\u4EE5node\u7248\u672C\u53F7\u547D\u540D\u3002</p></blockquote><h2 id="git\u5B89\u88C5" tabindex="-1">Git\u5B89\u88C5 <a class="header-anchor" href="#git\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li><p>\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u94FE\u63A5: <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></p></li><li><p>\u89E3\u538B\u70B9\u51FB\u5B89\u88C5\u3002</p><p>\u5B89\u88C5\u9009\u9879\u65F6\u53EF\u4EE5\u4E0D\u52FE\u9009Git-Gui\u3002</p></li><li><p>\u5B89\u88C5\u5B8C\u6210\u540E\u914D\u7F6E\u7528\u6237\u4FE1\u606F</p><p>\u52A0\u4E0A--global\uFF0C\u8FD9\u6837\u914D\u7F6E\u4E00\u6B21\uFF0C\u4EE5\u540Egit\u7684\u63D0\u4EA4\u5C31\u4E0D\u7528\u6BCF\u6B21\u90FD\u8F93\u5165\u7528\u6237\u540D\u548C\u90AE\u7BB1\u5566\u3002</p><div class="language-bash"><pre><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;your name&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;your email&quot;</span>
</code></pre></div></li></ol><h2 id="vscode\u5B89\u88C5" tabindex="-1">Vscode\u5B89\u88C5 <a class="header-anchor" href="#vscode\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u5B98\u7F51\u4E0B\u8F7D\u94FE\u63A5\uFF1A <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Vscode</a></li><li>\u70B9\u51FB\u5B89\u88C5 \u5B89\u88C5\u9009\u62E9\u65F6\u52FE\u9009\uFF0C\u914D\u7F6E\u53F3\u952E\u83DC\u5355\u9879\uFF0C\u65B9\u4FBF\u6587\u4EF6\u6216\u9879\u76EE\u6253\u5F00</li><li>\u914D\u7F6E\u63D2\u4EF6</li></ol><h2 id="powershell\u7F8E\u5316" tabindex="-1">Powershell\u7F8E\u5316 <a class="header-anchor" href="#powershell\u7F8E\u5316" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7D<a href="https://github.com/felixse/FluentTerminal/releases" target="_blank" rel="noopener noreferrer">Fluent Terminal</a>\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8EUWP\u548CWeb\u6280\u672F\u7684\u7EC8\u7AEF\u6A21\u62DF\u5668\u3002</p></li><li><p>\u4F7F\u7528\u7BA1\u7406\u5458\u6743\u9650\u542F\u52A8PowerShel\uFF0C\u5B89\u88C5\u4E24\u4E2A\u5305 <code>posh-git</code> <code>oh-my-posh</code></p><div class="language-bash"><pre><code>Install-Module posh-git -Scope CurrentUser
</code></pre></div><div class="language-bash"><pre><code>Install-Module oh-my-posh -Scope CurrentUser
</code></pre></div></li><li><p>\u4E0B\u8F7Dpowershell\u53EF\u7528\u7684\u5B57\u4F53</p><div class="language-"><pre><code>https://github.com/powerline/fonts/raw/master/SourceCodePro/Source Code Pro for Powerline.otf
</code></pre></div><p>\u4E0B\u4E0B\u8F7D\u5B8C\u53CC\u51FB\u6253\u5F00\uFF0C\u70B9\u51FB\u5B89\u88C5\u5373\u53EF</p></li><li><p>\u8BBE\u7F6EPowerShell\u542F\u52A8\u81EA\u52A0\u8F7D\u811A\u672C\uFF0C\u547D\u4EE4\u884C\u8F93\u5165$profile</p><p>\u4F1A\u663E\u793A\u4E00\u4E2A\u6587\u4EF6\u8DEF\u5F84\u3002\u63A5\u4E0B\u6765\u76F4\u63A5\u53BB\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u627E\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u7684\u8BDD\uFF0C\u76F4\u63A5\u53F3\u952E\u65B0\u5EFAtxt\uFF0C\u5199\u5165\u5982\u4E0B\u5185\u5BB9\u540E\uFF0C\u4FEE\u6539\u540E\u7F00\u540D\u4E3Aps1</p><p>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><pre><code>Import-Module DirColors
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme PowerLine
</code></pre></div><p>\u6700\u540E\u6253\u5F00\u7B2C\u4E00\u6B65\u4E0B\u8F7D\u5B89\u88C5\u5B8C\u6210\u7684Fluent Terminal\u5C31\u6210\u529F\u4E86\u3002</p></li></ol>`,15),t=[l];function i(p,r,c,d,u,h){return o(),n("div",null,t)}var v=e(s,[["render",i]]);export{m as __pageData,v as default};
