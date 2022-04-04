import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";const k='{"title":"Git \u5E38\u7528\u64CD\u4F5C\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u4EE3\u7801\u4ED3\u5E93","slug":"\u521B\u5EFA\u4EE3\u7801\u4ED3\u5E93"},{"level":3,"title":"git clone \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93","slug":"git-clone-\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93"},{"level":3,"title":"git init \u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93","slug":"git-init-\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93"},{"level":2,"title":"git branch \u5206\u652F\u7BA1\u7406","slug":"git-branch-\u5206\u652F\u7BA1\u7406"},{"level":3,"title":"\u5206\u652F\u521B\u5EFA","slug":"\u5206\u652F\u521B\u5EFA"},{"level":3,"title":"\u5206\u652F\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4","slug":"\u5206\u652F\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4"},{"level":2,"title":"git status git add git commit \u6587\u4EF6\u7F16\u8F91","slug":"git-status-git-add-git-commit-\u6587\u4EF6\u7F16\u8F91"},{"level":2,"title":"git rm \u6587\u4EF6\u5220\u9664","slug":"git-rm-\u6587\u4EF6\u5220\u9664"},{"level":2,"title":"git remote \u8FDC\u7A0B\u4ED3\u5E93\u7BA1\u7406","slug":"git-remote-\u8FDC\u7A0B\u4ED3\u5E93\u7BA1\u7406"},{"level":3,"title":"\u5B9E\u8DF5\u6848\u4F8B","slug":"\u5B9E\u8DF5\u6848\u4F8B"},{"level":2,"title":"git log","slug":"git-log"},{"level":2,"title":"git stash","slug":"git-stash"},{"level":2,"title":"Git\u914D\u7F6Ecredential helper","slug":"git\u914D\u7F6Ecredential-helper"}],"relativePath":"Tools/git/usage.md"}',e={},o=t(`<h1 id="git-\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" tabindex="-1">Git \u5E38\u7528\u64CD\u4F5C\u547D\u4EE4 <a class="header-anchor" href="#git-\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a></h1><p>Git \u7684\u64CD\u4F5C\u6307\u4EE4\u975E\u5E38\u591A\uFF0C\u6B64\u5904\u4EC5\u9009\u4E00\u4E9B\u7B80\u5355\u7684\u65E5\u5E38\u64CD\u4F5C\u3002</p><p>\u5B89\u5229\u4E00\u7BC7\u975E\u5E38\u597D\u7684\u6559\u7A0B,\u7279\u522B\u662F\u56FE\u89E3 Git \u547D\u4EE4\u90E8\u5206\u3002<a href="https://github.com/geeeeeeeeek/git-recipes/wiki" target="_blank" rel="noopener noreferrer">\u6587\u6863\u94FE\u63A5</a> <a href="https://github.com/geeeeeeeeek/git-recipes/wiki/4.1-%E5%9B%BE%E8%A7%A3-Git-%E5%91%BD%E4%BB%A4" target="_blank" rel="noopener noreferrer">\u56FE\u89E3 Git \u547D\u4EE4</a></p><h2 id="\u521B\u5EFA\u4EE3\u7801\u4ED3\u5E93" tabindex="-1">\u521B\u5EFA\u4EE3\u7801\u4ED3\u5E93 <a class="header-anchor" href="#\u521B\u5EFA\u4EE3\u7801\u4ED3\u5E93" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u672C\u5730\u521D\u59CB\u5316\u4ED3\u5E93\uFF0C\u7136\u540E\u518D\u5173\u8054\u5230\u8FDC\u7A0B\u4ED3\u5E93</li><li>\u76F4\u63A5\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93</li></ul><p>\u5148\u8BB2\u7B80\u5355\u7684\uFF1A</p><h3 id="git-clone-\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><code>git clone</code> \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93 <a class="header-anchor" href="#git-clone-\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/geeeeeeeeek/git-recipes.git
</code></pre></div><p>\u514B\u9686\u7684\u9879\u76EE\u4F1A\u81EA\u52A8\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5173\u8054\u3002\u8FD9\u6837\u6211\u4EEC\u7F16\u8F91\u4FEE\u6539\u63D0\u4EA4\u540E\u53EF\u4EE5\u76F4\u63A5\u63A8\u9001\u8FDC\u7A0B\u4ED3\u5E93\u3002</p><h3 id="git-init-\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93" tabindex="-1"><code>git init</code> \u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93 <a class="header-anchor" href="#git-init-\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE\u76EE\u5F55</span>
<span class="token function">mkdir</span> git-projecct
<span class="token comment"># \u8FDB\u5165\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> git-project
<span class="token comment"># \u521D\u59CB\u5316\u672C\u5730git\u4ED3\u5E93</span>
<span class="token function">git</span> init
</code></pre></div><p><code>git init</code>\u64CD\u4F5C\u540E\u4F1A\u5728\u5F53\u524D\u7684\u76EE\u5F55\u4E0B\u589E\u52A0\u4E86\u4E00\u4E2A .git \u76EE\u5F55\uFF0C\u73B0\u5728\u5728\u4ED3\u5E93\u7684\u4EFB\u4F55\u64CD\u4F5C\u5C31\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528 git \u76F8\u5173\u547D\u4EE4\u8BB0\u5F55\u4E86\u3002</p><p>\u5982\u679C\u9700\u8981\u62C9\u53D6\u8FDC\u7A0B\u4EE3\u7801\u4ED3\u5E93\u7684\u4EE3\u7801\u6765\u5DE5\u4F5C\uFF0C\u5219\u9700\u8981\u5148\u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93\u3002</p><div class="language-bash"><pre><code><span class="token comment"># \u6DFB\u52A0\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u8DDF\u8E2A</span>
<span class="token function">git</span> remote <span class="token function">add</span> \u8FDC\u7A0B\u4ED3\u5E93\u540D\uFF08\u4E00\u822C\u5199\u4E3Aorigin\uFF09url
</code></pre></div><div class="language-bash"><pre><code><span class="token comment"># \u67E5\u770B\u672C\u4E5F\u4ED3\u5E93\u5DF2\u5173\u8054\u7684\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u67E5\u770B\u6240\u6709\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8BE6\u7EC6\u4FE1\u606F</span>
<span class="token function">git</span> remote show \u4ED3\u5E93\u540D
</code></pre></div><p>\u5173\u8054\u5B8C\u6210\u4E4B\u540E\u5C31\u53EF\u4EE5\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u4EE3\u7801\u5BF9\u5E94\u4E3B\u5206\u652F\u5230\u672C\u5730\u4ED3\u5E93\u8FDB\u884C\u7F16\u8F91\u4E86\uFF0C\u5E76\u4E14\u81EA\u52A8\u5EFA\u7ACB\u672C\u5730\u4ED3\u5E93\u5206\u652F\u4E0E\u8BE5\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u7684\u8FFD\u8E2A\u5173\u7CFB\u3002</p><div class="language-bash"><pre><code><span class="token function">git</span> pull <span class="token operator">&lt;</span>\u8FDC\u7A0B\u4E3B\u673A\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>\u672C\u5730\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre></div><h2 id="git-branch-\u5206\u652F\u7BA1\u7406" tabindex="-1"><code>git branch</code> \u5206\u652F\u7BA1\u7406 <a class="header-anchor" href="#git-branch-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a></h2><h3 id="\u5206\u652F\u521B\u5EFA" tabindex="-1">\u5206\u652F\u521B\u5EFA <a class="header-anchor" href="#\u5206\u652F\u521B\u5EFA" aria-hidden="true">#</a></h3><p>\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u57FA\u4E8E\u672C\u5730\u5206\u652F\u65B0\u5EFA</li><li>\u57FA\u4E8E\u8FDC\u7A0B\u5206\u652F\u65B0\u5EFA</li></ul><p><strong>\u57FA\u4E8E\u672C\u5730\u5206\u652F\u521B\u5EFA\u65B0\u5206\u652F</strong></p><div class="language-bash"><pre><code><span class="token comment"># \u57FA\u4E8E\u5F53\u524D\u5206\u652F\u65B0\u5EFA\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>
<span class="token comment"># \u5207\u6362\u5230\u65B0\u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>

<span class="token comment"># \u6216\u8005\u4E00\u6B65\u5230\u4F4D\uFF0C\u65B0\u5EFA\u5E76\u5207\u6362\u5230\u65B0\u5206\u652F</span>
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>
</code></pre></div><p>\u6B64\u79CD\u65B9\u5F0F\u65B0\u5EFA\u7684\u5206\u652F\u5982\u679C\u9700\u8981\u5173\u8054\u5230\u8FDC\u7A0B\u4ED3\u5E93\u5BF9\u5E94\u7684\u5206\u652F\u65F6\uFF0C\u8FD8\u9700\u8981\u5EFA\u7ACB\u65B0\u5206\u652F\u4E0E\u8FDC\u7A0B\u5BF9\u5E94\u5206\u652F\u7684\u8DDF\u8E2A\u5173\u7CFB</p><div class="language-bash"><pre><code><span class="token comment"># \u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8DDF\u8E2A\u5173\u7CFBtrack</span>
<span class="token function">git</span> branch --set-upstream-to origin/<span class="token operator">&lt;</span>origin_branch_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>local_branch_name<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/local_branch_name<span class="token operator">&gt;</span>

<span class="token comment"># \u89E3\u9664\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u8DDF\u8E2A\u5173\u7CFB\uFF0C\u8FD9\u6837\u4E4B\u540E\u53EF\u4EE5\u4E0E\u5176\u5B83\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
<span class="token function">git</span> branch --unset-upstream
</code></pre></div><p><strong>\u57FA\u4E8E\u8FDC\u7A0B\u5206\u652F\u521B\u5EFA\u65B0\u5206\u652F</strong></p><p>\u8FD9\u79CD\u65B9\u5F0F\u521B\u5EFA\u7684\u65B0\u5206\u652F\u81EA\u52A8\u4E0E\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</p><div class="language-bash"><pre><code><span class="token comment"># \u57FA\u4E8E\u8FDC\u7A0B\u5206\u652F\u65B0\u5EFA\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> fetch origin <span class="token operator">&lt;</span>origin_branch_name<span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>local_branch_name<span class="token operator">&gt;</span>
<span class="token comment"># \u5207\u6362\u5230\u65B0\u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>local_branch_name<span class="token operator">&gt;</span>

<span class="token comment"># \u6216\u8005\u4E00\u6B65\u5230\u4F4D\uFF0C\u65B0\u5EFA\u5E76\u5207\u6362</span>
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>local_branch_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>origin/origin_branch_name<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u5206\u652F\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" tabindex="-1">\u5206\u652F\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4 <a class="header-anchor" href="#\u5206\u652F\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u67E5\u770B\u672C\u5730\u5206\u652F\u60C5\u51B5\uFF1A</span>
<span class="token function">git</span> branch -v

<span class="token comment">#\u67E5\u770B\u8FDC\u7A0B\u5206\u652F\u60C5\u51B5\uFF1A</span>
<span class="token function">git</span> branch -r

<span class="token comment">#\u67E5\u770B\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\uFF1A</span>
<span class="token function">git</span> branch -a

<span class="token comment">#\u67E5\u770B\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u8DDF\u8E2A\u5173\u7CFB\uFF1A</span>
<span class="token function">git</span> branch -vv

<span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F\uFF1A</span>
<span class="token function">git</span> branch -d <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF1A</span>
<span class="token function">git</span> push origin -d <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>

<span class="token comment"># \u4FEE\u526A\u8FDC\u7A0B\u5DF2\u5220\u9664\u7684\u5206\u652F\uFF1A</span>
<span class="token function">git</span> remote prune origin

<span class="token comment"># \u65B0\u5206\u652F\u9996\u6B21\u63A8\u9001\uFF0C\u5E76\u5EFA\u7ACB\u8DDF\u8E2A\u5173\u7CFB -u</span>
<span class="token function">git</span> push -u origin <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>
</code></pre></div><h2 id="git-status-git-add-git-commit-\u6587\u4EF6\u7F16\u8F91" tabindex="-1"><code>git status</code> <code>git add</code> <code>git commit</code> \u6587\u4EF6\u7F16\u8F91 <a class="header-anchor" href="#git-status-git-add-git-commit-\u6587\u4EF6\u7F16\u8F91" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">git</span> status
</code></pre></div><div class="language-"><pre><code>git status \u5C55\u793A\u4FE1\u606F\u7684\u4E09\u79CD\u5206\u7C7B\uFF1A
1\u3001Untracked files: (\u6CA1\u6709tracked\u8FC7\u7684\u6587\u4EF6, \u5373\u4ECE\u6CA1\u6709add\u8FC7\u7684\u6587\u4EF6)
2\u3001Changes not staged for commit: (\u6709\u4FEE\u6539, \u4F46\u662F\u6CA1\u6709\u88AB\u6DFB\u52A0\u5230stage\u533A\u7684\u6587\u4EF6)
3\u3001Changes to be committed: (\u5DF2\u7ECF\u5728stage\u533A, \u7B49\u5F85\u6DFB\u52A0\u5230git\u672C\u5730\u4ED3\u5E93\u4E2D\u7684\u6587\u4EF6)
</code></pre></div><div class="language-bash"><pre><code><span class="token function">git</span> <span class="token function">add</span>
</code></pre></div><div class="language-"><pre><code># \u5C06\u6240\u6709\u4FEE\u6539\u6DFB\u52A0\u5230\u6682\u5B58\u533A
git add .

# \u628A&lt;path&gt;\u4E2D\u6240\u6709\u8DDF\u8E2A\u6587\u4EF6\u4E2D\u88AB\u4FEE\u6539\u8FC7\u6216\u5DF2\u5220\u9664\u6587\u4EF6\u7684\u4FE1\u606F\u6DFB\u52A0\u5230\u7D22\u5F15\u5E93\u3002\u5B83\u4E0D\u4F1A\u5904\u7406\u90A3\u4E9B\u4E0D\u88AB\u8DDF\u8E2A\u7684\u6587\u4EF6\u3002\u7701\u7565&lt;path&gt;\u8868\u793A . ,\u5373\u5F53\u524D\u76EE\u5F55\u3002
git add -u [&lt;path&gt;]

# \u8868\u793A\u628A\u4E2D\u6240\u6709\u8DDF\u8E2A\u6587\u4EF6\u4E2D\u88AB\u4FEE\u6539\u8FC7\u6216\u5DF2\u5220\u9664\u6587\u4EF6\u548C\u6240\u6709\u672A\u8DDF\u8E2A\u7684\u6587\u4EF6\u4FE1\u606F\u6DFB\u52A0\u5230\u7D22\u5F15\u5E93\u3002\u7701\u7565&lt;path&gt;\u8868\u793A . ,\u5373\u5F53\u524D\u76EE\u5F55\u3002
git add -A: [&lt;path&gt;]

# \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7git add -i \u547D\u4EE4\u67E5\u770B\u4E2D\u88AB\u6240\u6709\u4FEE\u6539\u8FC7\u6216\u5DF2\u5220\u9664\u6587\u4EF6\u4F46\u6CA1\u6709\u63D0\u4EA4\u7684\u6587\u4EF6\uFF0C\u5E76\u901A\u8FC7\u5176revert\u5B50\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B&lt;path&gt;\u4E2D\u6240\u6709\u672A\u8DDF\u8E2A\u7684\u6587\u4EF6\uFF0C\u540C\u65F6\u8FDB\u5165\u4E00\u4E2A\u5B50\u547D\u4EE4\u7CFB\u7EDF\u3002
git add -i [&lt;path&gt;]
</code></pre></div><div class="language-bash"><pre><code><span class="token function">git</span> commit
</code></pre></div><div class="language-bash"><pre><code><span class="token comment"># \u4FE1\u606F\u5907\u6CE8\u6700\u597D\u7B26\u5408\u4E00\u5B9A\u7EA6\u5B9A\uFF0C\u80FD\u53D8\u66F4\u7684\u7C7B\u578B\uFF0C\u5F71\u54CD\u8303\u56F4\uFF0C\u5907\u6CE8\u8BF4\u660E</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;fix&lt;all&gt; the commit message&quot;</span>

<span class="token comment"># \u4F1A\u5148\u628A\u6240\u6709\u5DF2\u7ECFtrack\u7684\u6587\u4EF6\u7684\u6539\u52A8\`git add\`\u8FDB\u6765\uFF0C\u7136\u540E\u63D0\u4EA4(\u6709\u70B9\u50CFsvn\u7684\u4E00\u6B21\u63D0\u4EA4,\u4E0D\u7528\u5148\u6682\u5B58)\u3002\u5BF9\u4E8E\u6CA1\u6709track\u7684\u6587\u4EF6,\u8FD8\u662F\u9700\u8981\u6267\u884C\`git add &lt;file&gt;\` \u547D\u4EE4\u3002</span>
<span class="token function">git</span> commit -a

<span class="token comment"># \u589E\u8865\u63D0\u4EA4\uFF0C\u4F1A\u4F7F\u7528\u4E0E\u5F53\u524D\u63D0\u4EA4\u8282\u70B9\u76F8\u540C\u7684\u7236\u8282\u70B9\u8FDB\u884C\u4E00\u6B21\u65B0\u7684\u63D0\u4EA4\uFF0C\u65E7\u7684\u63D0\u4EA4\u5C06\u4F1A\u88AB\u53D6\u6D88\u3002</span>
<span class="token function">git</span> commit --amend
</code></pre></div><h2 id="git-rm-\u6587\u4EF6\u5220\u9664" tabindex="-1"><code>git rm</code> \u6587\u4EF6\u5220\u9664 <a class="header-anchor" href="#git-rm-\u6587\u4EF6\u5220\u9664" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u7269\u7406\u5220\u9664\u7535\u8111\u6587\u4EF6\uFF0Cshell\u547D\u4EE4\uFF1A rm</span>
<span class="token function">rm</span> file_name
<span class="token function">rm</span> -r dir_name

<span class="token comment"># \u5220\u9664git\u672C\u5730\u4ED3\u5E93\u7684\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> file_name

<span class="token comment"># \u5220\u9664\u6587\u4EF6\u5939</span>
<span class="token function">git</span> <span class="token function">rm</span> -r dir_name

<span class="token comment"># \u67E5\u770B\u8981\u5220\u9664\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u5E76\u6CA1\u6709\u6267\u884C\u5220\u9664</span>
<span class="token function">git</span> <span class="token function">rm</span> -n file_name

<span class="token comment"># \u5220\u9664\u6682\u5B58\u533A\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> --cache

<span class="token comment"># \u5C06\u5220\u9664\u6587\u4EF6\u4FE1\u606F\u63D0\u4EA4git commit\u624D\u7B97\u5B8C\u6574\u5220\u9664</span>
<span class="token function">git</span> commit

<span class="token comment"># \u4F7F\u7528 git rm \u5220\u9664\u6587\u4EF6\u4E86\u4F46\u8FD8\u6CA1\u8865git commit \u65F6,\u60F3\u6062\u590D\u53EF\u4EE5\u4F7F\u7528git add -i \u9009\u62E9revert, \u518Dgit checkout -- filename</span>
</code></pre></div><h2 id="git-remote-\u8FDC\u7A0B\u4ED3\u5E93\u7BA1\u7406" tabindex="-1"><code>git remote</code> \u8FDC\u7A0B\u4ED3\u5E93\u7BA1\u7406 <a class="header-anchor" href="#git-remote-\u8FDC\u7A0B\u4ED3\u5E93\u7BA1\u7406" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u6DFB\u52A0\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u8DDF\u8E2A\uFF1A</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>\u8FDC\u7A0B\u4E3B\u673A\u540D <span class="token punctuation">(</span>\u9ED8\u8BA4origin<span class="token punctuation">)</span><span class="token operator">&gt;</span> url

<span class="token comment"># \u67E5\u770B\u672C\u5730\u5DF2\u8DDF\u8E2A\u7684\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93\uFF1A</span>
<span class="token comment"># \u53EA\u663E\u793A\u8FDC\u7A0B\u4ED3\u5E93\u540D</span>
<span class="token function">git</span> remote
<span class="token comment"># \u9700\u8981\u663E\u793Aurl\u4FE1\u606F</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u67E5\u770B\u6240\u6709\u6307\u5B9A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8BE6\u7EC6\u4FE1\u606F,\u5305\u62EC\u6240\u6709\u5206\u652F</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>\u4ED3\u5E93\u540D<span class="token operator">&gt;</span>

<span class="token comment"># \u91CD\u547D\u540D\u672C\u5730\u5DF2\u8DDF\u8E2A\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF1A</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>old_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new_name<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u4E00\u4E2A\u5DF2\u8DDF\u8E2A\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF1A</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>\u4ED3\u5E93\u540D<span class="token operator">&gt;</span>

<span class="token comment"># \u8FDC\u7A0B\u4ED3\u5E93\u7684url\u6539\u53D8\u540E\u9700\u8981\u5728\u672C\u5730\u66F4\u6362</span>
<span class="token comment"># \uFF08\u5E38\u89C1\u7684\u60C5\u5F62\u662F\u8FDC\u7A0B\u4ED3\u5E93\u53D8\u66F4\u4E86\u9879\u76EE\u6240\u6709\u8005\u65F6\uFF0Curl\u4F1A\u6539\u53D8\uFF0C\u6B64\u65F6\u672C\u5730\u9700\u8981\u91CD\u65B0\u66F4\u6539url\uFF09</span>
<span class="token function">git</span> remote set-url <span class="token operator">&lt;</span>\u4ED3\u5E93\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new_url<span class="token operator">&gt;</span>
<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u7684url</span>
<span class="token function">git</span> remote get-url <span class="token operator">&lt;</span>\u4ED3\u5E93\u540D<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u5B9E\u8DF5\u6848\u4F8B" tabindex="-1">\u5B9E\u8DF5\u6848\u4F8B <a class="header-anchor" href="#\u5B9E\u8DF5\u6848\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u5B9E\u8DF5 1\uFF1A\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u51E0\u4E2A\u6B65\u9AA4:</strong></p><div class="language-bash"><pre><code><span class="token comment"># 1\u3001\u5148\u6267\u884C\u62C9\u53D6\u6700\u65B0\u4EE3\u7801</span>
<span class="token function">git</span> pull

<span class="token comment">#2\u3001\u5728\u672C\u5730git\u4ED3\u5E93\u6267\u884C\u5220\u9664\uFF0C\u5982\u679C\u662F\u76EE\u5F55\u6DFB\u52A0 -r</span>
<span class="token function">rm</span> name
<span class="token function">git</span> <span class="token function">rm</span> name

<span class="token comment"># 3\u3001\u63D0\u4EA4\u5220\u9664\u64CD\u4F5C</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;delete name&#39;</span>

<span class="token comment"># 4\u3001\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u624D\u80FD\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6\u5939\u5220\u9664</span>
<span class="token function">git</span> push
</code></pre></div><p><strong>\u5B9E\u8DF5 2\uFF1A\u8FDC\u7A0B\u4ED3\u5E93\u7684 url \u53D8\u66F4\uFF0C\u9700\u8981\u91CD\u65B0\u7ED1\u5B9A</strong></p><p>\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><div class="language-"><pre><code>1. \u76F4\u63A5\u4FEE\u6539 url \u547D\u4EE4\uFF1A git remote set-url origin new_url \u6B64\u65F6\u5206\u652F\u7684\u8FDC\u7A0B\u8DDF\u8E2A\u5173\u7CFB\u4F1A\u81EA\u52A8\u66F4\u65B0\u8FFD\u8E2A\u5173\u7CFB

2. \u5148\u76F4\u63A5\u5220\u9664\u8DDF\u8E2A\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u518D\u91CD\u65B0\u7ED1\u5B9A\u4E00\u4E2A\u65B0 url\uFF1A
    git remote rm origin git remote add origin new_url \u6B64\u65F6\u5F15\u7528\u5206\u652F\u7684\u5173\u7CFB\u9700\u8981\u91CD\u65B0\u7ED1\u5B9A\u8DDF\u8E2A\u5173\u7CFB
    git branch --set-upstream-to=origin/origin_branch_name
</code></pre></div><p><strong>\u5B9E\u8DF5 3\uFF1A\u5C06\u8FDC\u7A0B\u4ED3\u5E93 old_origin \u7684\u5206\u652F\u5355\u72EC\u62C6\u51FA\u6765\uFF0C\u5230\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93 new_origin</strong></p><ol><li>\u8FDC\u7A0B\u65B0\u5EFA\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u5E76\u521D\u59CB\u5316 master \u5206\u652F</li><li>\u672C\u5730\u65B0\u5EFA\u4E00\u6587\u4EF6\u5939\uFF0C\u5E76\u521D\u59CB\u5316\u4E3A\u65B0\u7684\u672C\u5730\u4ED3\u5E93\uFF1A git init</li><li>\u5C06 old_origin \u7684\u76EE\u6807\u5206\u652F target \u68C0\u51FA\u5230\u672C\u5730\u4ED3\u5E93\u4F5C\u4E3A master \u5206\u652F\uFF1Agit fetch old_origin target \u7136\u540E git merge target</li><li>git add . \u7136\u540E git commit -m &#39;fetch target&#39; \u63D0\u4EA4\u672C\u6B21\u62C9\u53D6\u548C\u5168\u5E76\u7684\u4FEE\u6539\uFF0Cgit status \u67E5\u770B\u4FDD\u8BC1\u6E05\u7A7A\u6682\u533A</li><li>git remote set-url origin new_url \u5C06\u8FDC\u7A0B\u4ED3\u5E93\u91CD\u65B0\u7ED1\u5B9A\u5230\u65B0\u4ED3\u5E93\u7684 url</li><li>git fetch origin master</li><li>git merge --allow-unrelated-histories origin/master \u6B64\u65F6 merge \u56E0\u4E3A\u65E7\u4ED3\u5E93\u7684 commit \u8BB0\u5F55\u4E0E\u65B0\u4ED3\u5E93\u7684 commit \u6765\u6E90\u4E0D\u540C\uFF0C\u6240\u4EE5\u9700\u8981\u5E26\u4E0A--allow-unrelated-histories \u53C2\u6570\u5141\u8BB8\u5408\u5E76\u4E24\u8005\u7684\u63D0\u4EA4\u8BB0\u5F55\u3002</li><li>git push -u origin master \u9996\u6B21\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\u3002\u5982\u679C merge \u6B65\u9AA4\u6709\u51B2\u7A81\u9700\u8981\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u540E\u63A8\u9001\u3002\u6B64\u6B65\u9AA4\u4E5F\u53EF\u4EE5\u5206\u4E3A\u4E24\u6B65\uFF1A\u5148\u7ED1\u5B9A\u5206\u652F\u8DDF\u8E2A\u5173\u7CFB\uFF1Agit branch --set-upstream-to=origin/master \u7136\u540E git push</li></ol><p><strong>\u5B9E\u8DF5 4\uFF1A\u4FEE\u526A\u8FDC\u7A0B\u5206\u652F</strong></p><p>\u5728\u591A\u4E2A\u534F\u4F5C\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6210\u5458 A \u5220\u9664\u4E86\u8FDC\u7A0B\u5206\u652F branch_A, \u5728\u4EBA\u5458 B \u4E2D\u67E5\u770B\u65F6<code>git branch -a</code>\uFF0Cbranch_A \u5206\u652F\u4F1A\u4ECD\u7136\u663E\u793A\uFF0C\u8981\u4E0D\u663E\u793A\uFF0C\u9700\u8981\u4FEE\u526A\u5728\u672C\u5730\u7684\u8FDC\u7A0B\u5206\u652F\u6570\u636E\u3002</p><ol><li><code>git branch -a</code> \u6216 <code>git branch -r</code> \u65F6\uFF0C\u5F80\u5F80\u663E\u793A\u7684\u5206\u652F\u6BD4\u5B9E\u9645\u8FDC\u7A0B\u4EE3\u7801\u5E93\u7684\u5206\u652F\u66F4\u591A\uFF0C\u8FD9\u662F\u56E0\u4E3A\u672C\u5730\u5B58\u5728\u8FDC\u7A0B\u5DF2\u7ECF\u5220\u9664\u7684\u5E9F\u5F03\u5206\u652F</li><li><code>git remote show origin</code> \u53EF\u4EE5\u663E\u793A\u672C\u5730\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5305\u62EC\u6240\u6709\u5206\u652F\uFF0C\u5176\u4E2D\u5E9F\u5F03\u5206\u652F\u4F1A\u6807\u8BC6\u4E3A<strong>stale</strong>\uFF0C\u8868\u660E\u8BE5\u5206\u652F\u5728\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u4E0D\u5B58\u5728\u3002</li><li><code>git remote prune origin</code> \u53EF\u4EE5\u5220\u9664\u6389\u6807\u8BC6\u4E3A<strong>stale</strong>\u7684\u5206\u652F\uFF0C\u4F7F\u672C\u5730\u4ED3\u5E93\u5206\u652F\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u4E00\u81F4\u3002</li></ol><h2 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-hidden="true">#</a></h2><p><a href="https://www.jianshu.com/p/0805b5d5d893" target="_blank" rel="noopener noreferrer">git log \u7684\u4F7F\u7528</a></p><div class="language-bash"><pre><code><span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline
<span class="token function">git</span> log --pretty<span class="token operator">=</span>short
<span class="token function">git</span> log --pretty<span class="token operator">=</span>full
<span class="token function">git</span> log --pretty<span class="token operator">=</span>fuller
</code></pre></div><h2 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-hidden="true">#</a></h2><p><a href="https://blog.csdn.net/anhenzhufeng/article/details/78052418" target="_blank" rel="noopener noreferrer">git\u5207\u6362\u5230\u522B\u7684\u5206\u652F,\u8981\u6682\u65F6\u4FDD\u5B58\u5F53\u524D\u5206\u652F\u7684\u4FEE\u6539(\u4E0D\u60F3\u8FDB\u884Cadd \u548Ccommit)\u7684\u65B9\u6CD5 git stash</a><a href="https://www.jianshu.com/p/a4603dcffbad" target="_blank" rel="noopener noreferrer">Git\uFF082\uFF09-\u6682\u5B58\u533A\u7684\u4F5C\u7528\uFF08idea\u7248\u672C\u89E3\u51B3\u6682\u5B58\u533A\u5B58\u5728\u6587\u4EF6\u65F6pull\u548Cmerge\u95EE\u9898</a></p><h2 id="git\u914D\u7F6Ecredential-helper" tabindex="-1">Git\u914D\u7F6Ecredential helper <a class="header-anchor" href="#git\u914D\u7F6Ecredential-helper" aria-hidden="true">#</a></h2><p><a href="https://blog.csdn.net/wzy901213/article/details/84334163" target="_blank" rel="noopener noreferrer">Git\u914D\u7F6Ecredential helper</a></p><p>\u5F53\u4FEE\u6539 gitlab \u7528\u6237\u540D\u6216\u5BC6\u7801\u540E\u518D\u4F7F\u7528\u4F1A\u62A5\u9519\uFF1A</p><div class="language-js"><pre><code>
</code></pre></div><p>\u6B64\u65F6\uFF0C\u53EF\u4EE5\u6709\u4E24\u79CD\u65B9\u5F0F\u89E3\u51B3\uFF1A</p><ol><li>\u7B2C\u4E00\u79CD\uFF0Cwindows \u641C\u7D22 \u51ED\u636E\uFF0C\u6253\u5F00\u51ED\u636E\u7BA1\u7406\u67E5\u627E\u5230 gitlab \u51ED\u8BC1\u8FDB\u884C\u4FEE\u6539</li><li>\u7B2C\u4E8C\u79CD\uFF1A\u5148\u6E05\u9664\u51ED\u8BC1\uFF0C\u518D\u5B58\u50A8\u51ED\u8BC1\uFF1A</li></ol><div class="language-bash"><pre><code><span class="token comment"># \u91CD\u7F6E\u7528\u6237\u540D+\u5BC6\u7801</span>
<span class="token function">git</span> config --system --unset credential.helper

<span class="token comment"># \u5B58\u50A8\u7528\u6237\u540D+\u5BC6\u7801\uFF0C\u4F1A\u5728 $HOME \u76EE\u5F55\u751F\u6210 .git-credential \u6587\u4EF6\u660E\u6587\u5B58\u50A8 gitlab \u542B\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u5730\u5740</span>
<span class="token function">git</span> config --global credential.helper store

<span class="token comment"># \u4E4B\u540E\uFF0C\u624B\u52A8\u8F93\u5165\u4E00\u6B21\uFF0C\u540E\u9762\u5C31\u4E0D\u9700\u8981\u518D\u8F93\u5165\u3002</span>
</code></pre></div>`,65),p=[o];function c(i,r,l,g,d,m){return s(),a("div",null,p)}var u=n(e,[["render",c]]);export{k as __pageData,u as default};
