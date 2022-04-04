import{_ as t,c as n,o as e,a as i}from"./app.fa011131.js";var l="/assets/github_vim.3c122870.png",o="/assets/gvim_ui.d594188b.png";const q='{"title":"vim \u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D"},{"level":2,"title":"\u8BA4\u8BC6 _vimrc","slug":"\u8BA4\u8BC6-vimrc"},{"level":2,"title":"\u914D\u7F6E _vimrc","slug":"\u914D\u7F6E-vimrc"},{"level":2,"title":"\u63D2\u4EF6 plugin","slug":"\u63D2\u4EF6-plugin"},{"level":2,"title":"\u4E3B\u9898","slug":"\u4E3B\u9898"},{"level":2,"title":"\u5B57\u4F53","slug":"\u5B57\u4F53"},{"level":2,"title":"\u672C\u673A\u914D\u7F6E _vimrc","slug":"\u672C\u673A\u914D\u7F6E-vimrc"}],"relativePath":"Tools/vim/install.md"}',u={},a=i('<h1 id="vim-\u5B89\u88C5" tabindex="-1">vim \u5B89\u88C5 <a class="header-anchor" href="#vim-\u5B89\u88C5" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u4E0B\u8F7D">\u4E0B\u8F7D</a></li><li><a href="#\u8BA4\u8BC6-vimrc">\u8BA4\u8BC6 _vimrc</a></li><li><a href="#\u914D\u7F6E-vimrc">\u914D\u7F6E _vimrc</a></li><li><a href="#\u63D2\u4EF6-plugin">\u63D2\u4EF6 plugin</a></li><li><a href="#\u4E3B\u9898">\u4E3B\u9898</a></li><li><a href="#\u5B57\u4F53">\u5B57\u4F53</a></li><li><a href="#\u672C\u673A\u914D\u7F6E-vimrc">\u672C\u673A\u914D\u7F6E _vimrc</a></li></ul></div></p><h2 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h2><p>\u5728 github \u7684 vim \u5B98\u65B9\u4ED3\u5E93\u5730\u5740\u4E0B\u8F7D\u5BF9\u5E94\u7684\u7248\u672C\u5B89\u88C5 <a href="https://github.com/vim/vim-win32-installer/releases" target="_blank" rel="noopener noreferrer">https://github.com/vim/vim-win32-installer/releases</a><img src="'+l+'" alt=""></p><p>\u4E5F\u53EF\u4EE5\u9009\u62E9 .exe \u6587\u4EF6\u4E0B\u8F7D\uFF0C\u76F4\u63A5\u4E00\u8DEF\u5B89\u88C5\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6253\u5F00 gVim\uFF0C\u9ED8\u8BA4\u754C\u9762\u5982\u4E0B\u56FE: <img src="'+o+`" alt=""></p><p>\u521D\u59CB\u9ED8\u8BA4\u754C\u9762\u975E\u5E38\u7C97\u7CD9\uFF0C\u6211\u4EEC\u8981\u5728\u6B64\u57FA\u7840\u4E0A\u8FDB\u884C\u4E00\u7CFB\u5217\u914D\u7F6E\uFF0C\u8FBE\u5230\u4E24\u4E2A\u76EE\u7684\uFF1A</p><ul><li>\u4F18\u5316\u754C\u9762UI\u6548\u679C</li><li>\u652F\u6301\u524D\u7AEF\u7F16\u7A0B\u8BED\u8A00 html css js vue \u7B49\u8BED\u6CD5\u9AD8\u4EAE</li></ul><h2 id="\u8BA4\u8BC6-vimrc" tabindex="-1">\u8BA4\u8BC6 _vimrc <a class="header-anchor" href="#\u8BA4\u8BC6-vimrc" aria-hidden="true">#</a></h2><p>Vim \u542F\u52A8\u65F6\uFF0C\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\uFF08_vimrc\uFF09\u6765\u8BBE\u7F6E Vim\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6B64\u6587\u4EF6\u6765\u5B9A\u5236\u9002\u5408\u81EA\u5DF1\u7684 Vim\u3002</p><p>Vim \u914D\u7F6E\u6587\u4EF6\u5206\u4E3A\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\u548C\u7528\u6237\u914D\u7F6E\u6587\u4EF6\uFF0CVim \u7528\u6237\u914D\u7F6E\u6587\u4EF6\u6BD4\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\u7684\u4F18\u5148\u7EA7\u9AD8\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0CVim \u542F\u52A8\u65F6\uFF0C\u4F1A\u4F18\u5148\u8BFB\u53D6 Vim \u7528\u6237\u914D\u7F6E\u6587\u4EF6\uFF08\u4F4D\u4E8E\u4E3B\u76EE\u5F55\u4E2D\u7684\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u4FEE\u6539\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u5373\u53EF\uFF08\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4FEE\u6539\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\uFF09\u3002</p><ul><li>\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E Vim \u7684\u5B89\u88C5\u76EE\u5F55\uFF08\u9ED8\u8BA4\u8DEF\u5F84\u4E3A /etc/_vimrc\uFF09\uFF1B</li><li>\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E\u4E3B\u76EE\u5F55 ~/_vimrc\uFF0C\u5373\u901A\u8FC7\u6267\u884C vim ~/_vimrc \u547D\u4EE4\u5373\u53EF\u5BF9\u6B64\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u5408\u7406\u4FEE\u6539\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CVim \u7528\u6237\u914D\u7F6E\u6587\u4EF6\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u521B\u5EFA\uFF0C\u6240\u4EE5\u5982\u679C\u5728\u8BE5\u8DEF\u5F84\u4E0B\u5982\u679C\u6CA1\u6709\uFF0C\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\u3002</li></ul><blockquote><p>windows \u7528\u6237\u4E3B\u76EE\u5F55\u8DEF\u5F84\uFF1AC:\\Users\\your computer name</p></blockquote><h2 id="\u914D\u7F6E-vimrc" tabindex="-1">\u914D\u7F6E _vimrc <a class="header-anchor" href="#\u914D\u7F6E-vimrc" aria-hidden="true">#</a></h2><p>\u7531\u4E8E vimrc \u91CC\u9762\u4F1A\u6709\u5F88\u591A\u7684\u914D\u7F6E\u9879\uFF0C\u4E3A\u4E86\u907F\u514D\u6DF7\u4E71\uFF0C\u5EFA\u8BAE\u6309\u7C7B\u578B\u5C06\u914D\u7F6E\u5206\u6210\u4E86\u51E0\u4E2A\u5C0F\u7EC4\uFF1A</p><ul><li>Startup - \u7F16\u8F91\u5668\u542F\u52A8\u65F6\u9700\u8981\u6DFB\u52A0\u7684\u4E00\u4E9B\u914D\u7F6E</li><li>General - \u901A\u7528\u914D\u7F6E</li><li>Lang &amp; Encoding - \u8BED\u8A00\u548C\u7F16\u7801</li><li>GUI - \u754C\u9762</li><li>Format - \u57FA\u672C\u7684\u4EE3\u7801\u683C\u5F0F</li><li>Keymap - \u901A\u7528\u7684\u5FEB\u6377\u952E</li><li>Plugin - \u63D2\u4EF6\u76F8\u5173\uFF08\u5305\u62EC\u548C\u5F53\u524D\u63D2\u4EF6\u76F8\u5173\u7684\u914D\u7F6E\u548C\u5FEB\u6377\u952E\u7B49\uFF09</li><li>Function - vimrc \u91CC\u9762\u7528\u5230\u7684\u5E38\u7528\u65B9\u6CD5</li></ul><blockquote><p>\u53C2\u8003\u94FE\u63A5 <a href="https://zhuanlan.zhihu.com/p/21328642" target="_blank" rel="noopener noreferrer">\u53EF\u80FD\u662F Windows \u4E0B\u6700\u6F02\u4EAE\u7684 Gvim \u914D\u7F6E\u4E86</a></p></blockquote><h2 id="\u63D2\u4EF6-plugin" tabindex="-1">\u63D2\u4EF6 plugin <a class="header-anchor" href="#\u63D2\u4EF6-plugin" aria-hidden="true">#</a></h2><p>vim \u7684\u63D2\u4EF6\u5206\u4E3A\u4E09\u79CD\uFF0C\u6BD4\u8F83\u5E38\u7528\u7684\u5C31\u662F\u7B2C\u4E8C\u79CD</p><ul><li>\u5728Github vim-scripts \u7528\u6237\u4E0B\u7684repos, \u53EA\u9700\u8981\u5199\u51FArepos\u540D\u79F0: Plugin &#39;\u63D2\u4EF6\u540D\u79F0&#39; \u5B9E\u9645\u4E0A\u662F Plugin &#39;vim-scripts/\u63D2\u4EF6\u4ED3\u5E93\u540D&#39; \u53EA\u662F\u6B64\u5904\u7684\u7528\u6237\u540D\u53EF\u4EE5\u7701\u7565</li><li>\u5728Github\u5176\u4ED6\u7528\u6237\u4E0B\u7684repos, \u9700\u8981\u5199\u51FA\u201D\u7528\u6237\u540D/repos\u540D\u201D: Plugin &#39;\u7528\u6237\u540D/\u63D2\u4EF6\u4ED3\u5E93\u540D&#39;</li><li>\u4E0D\u5728Github\u4E0A\u7684\u63D2\u4EF6\uFF0C\u9700\u8981\u5199\u51FAgit\u5168\u8DEF\u5F84: Plugin &#39;git clone \u540E\u9762\u7684\u5730\u5740&#39;, \u6216\u8005\uFF1A \u672C\u5730\u7684Git\u4ED3\u5E93(\u4F8B\u5982\u81EA\u5DF1\u7684\u63D2\u4EF6) Plugin file:///+\u672C\u5730\u63D2\u4EF6\u4ED3\u5E93\u7EDD\u5BF9\u8DEF\u5F84</li></ul><p>\u4F7F\u7528 Vundle \u6765\u7BA1\u7406\u63D2\u4EF6\uFF0C\u7B80\u8981\u547D\u4EE4</p><ul><li>:PluginList - \u5217\u51FA\u6240\u6709\u5DF2\u914D\u7F6E\u7684\u63D2\u4EF6</li><li>:PluginInstall - \u5B89\u88C5\u63D2\u4EF6,\u8FFD\u52A0 <code>!</code> \u7528\u4EE5\u66F4\u65B0\u6216\u4F7F\u7528 :PluginUpdate</li><li>:PluginSearch foo - \u641C\u7D22 foo ; \u8FFD\u52A0 <code>!</code> \u6E05\u9664\u672C\u5730\u7F13\u5B58</li><li>:PluginClean - \u6E05\u9664\u672A\u4F7F\u7528\u63D2\u4EF6,\u9700\u8981\u786E\u8BA4; \u8FFD\u52A0 <code>!</code> \u81EA\u52A8\u6279\u51C6\u79FB\u9664\u672A\u4F7F\u7528\u63D2\u4EF6</li></ul><p>\u5B89\u88C5</p><ul><li><ol><li>\u5B89\u88C5 Vundle: git clone <a href="https://github.com/VundleVim/Vundle.vim.git" target="_blank" rel="noopener noreferrer">https://github.com/VundleVim/Vundle.vim.git</a> ~/vimfiles/bundle/Vundle.vim</li></ol></li><li><ol start="2"><li>\u73B0\u4EE3 Windows \u5728\u7528\u6237\u6839\u76EE\u5F55\u65B0\u5EFA _vim \u800C\u4E0D\u662F\u65E7\u7684 .vim\uFF0C\u5E76\u5199\u5165\u63D2\u4EF6\uFF0C\u683C\u5F0F\uFF1APlugin &#39;plugin_name&#39;</li></ol></li><li><ol start="3"><li>\u6253\u5F00 vim\uFF0C\u8FD0\u884C :PluginInstall</li></ol></li></ul><p>\u6CE8\u610F\u4E8B\u9879</p><ol><li>\u5F00\u542F filetype off</li><li>set nocompatible \u53BB\u9664VI\u4E00\u81F4\u6027,\u5FC5\u987B</li><li>Plugin &#39;VundleVim/Vundle.vim&#39;</li><li>\u8BBE\u7F6E\u5305\u62ECvundle\u548C\u521D\u59CB\u5316\u76F8\u5173\u7684runtime path set rtp+=~/vimfiles/bundle/Vundle.vim \u8BBE\u7F6E\u5305\u62ECvundle\u548C\u521D\u59CB\u5316\u76F8\u5173\u7684runtime path call vundle#begin() \u53E6\u4E00\u79CD\u9009\u62E9, \u5C06vundle\u5B89\u88C5\u7684\u63D2\u4EF6\u72EC\u7ACB\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u5728\u4E0B\u9762\u6307\u5B9A\u8DEF\u5F84 call vundle#begin(&#39;~/some/path/here&#39;)</li><li>\u5B89\u88C5\u63D2\u4EF6\u7684\u547D\u4EE4\u5FC5\u987B\u653E\u5728vundle#begin\u548Cvundle#end\u4E4B\u95F4.</li></ol><h2 id="\u4E3B\u9898" tabindex="-1">\u4E3B\u9898 <a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a></h2><ul><li>\u5728 github \u4ED3\u5E93\u91CC\u627E\u5230\u4E3B\u9898\u5BF9\u5E94\u7684 .vim \u6587\u4EF6\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u6216\u8005\u590D\u5236\u6587\u4EF6\u5185\u5BB9\uFF0C\u5728 vim \u5B89\u88C5\u76EE\u5F55\u7684 color \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u4EE5\u5BF9\u5E94\u4E3B\u9898\u547D\u540D\u7684.vim\u6587\u4EF6\uFF0C\u7C98\u8D34\u4E4B\u524D\u590D\u5236\u7684\u5185\u5BB9\u3002</li><li>\u7136\u540E\u5728\u914D\u7F6E\u6587\u4EF6 _vimrc \u4E2D\u8BBE\u7F6E set colorscheme theme_name</li></ul><h2 id="\u5B57\u4F53" tabindex="-1">\u5B57\u4F53 <a class="header-anchor" href="#\u5B57\u4F53" aria-hidden="true">#</a></h2><p>\u5B57\u4F53\u5BB9\u6613\u8E29\u5751\uFF0C\u56E0\u4E3A\u5F88\u591A\u4E3B\u9898\u9700\u8981\u914D\u5408\u5BF9\u5E94\u7684\u5B57\u4F53\uFF0C\u7279\u522B\u662F\u914D\u7F6E\u72B6\u6001\u680F\u7684\u6837\u5F0F\uFF0C\u5982\u679C\u4F7F\u7528\u4EE5\u524D\u7684 powerline \u63D2\u4EF6\u6216\u8005\u73B0\u5728\u66F4\u65B0\u7684 airline \u63D2\u4EF6\uFF0C\u9700\u8981\u914D\u5408\u5B89\u88C5 powerline \u7ED3\u5C3E\u7684\u5B57\u4F53\u6587\u4EF6\u3002</p><ol><li>\u53C2\u8003\u7F51\u5740 <a href="https://github.com/powerline/fonts" target="_blank" rel="noopener noreferrer">https://github.com/powerline/fonts</a>\u4E0B\u8F7D\u5B57\u4F53\uFF0C\u5982\u679C\u6309 <a href="http://install.sh" target="_blank" rel="noopener noreferrer">install.sh</a> \u5B89\u88C5\u65E0\u6548\uFF0C\u5728 windows 10 \u7CFB\u7EDF\u4E2D\u6253\u5F00\u5B57\u4F53\u6587\u4EF6\uFF0C\u53CC\u51FB\u5373\u53EF\u5B89\u88C5\u5230\u672C\u673A\u4E0A\u3002</li><li>\u7136\u540E\u6253\u5F00Gvim \u5B57\u4F53\u8BBE\u7F6E\u9009\u62E9\u542B\u6709 prowerline \u7ED3\u5C3E\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u9690\u85CF\u4E86\u83DC\u5355\u680F\uFF0C\u53EF\u901A\u8FC7\u547D\u4EE4 :set guifont=* \u6253\u5F00\u5B57\u4F53\u9009\u62E9\u6846</li><li>\u4E0A\u8FF0\u8BBE\u7F6E\u53EA\u662F\u4E34\u65F6\u7684\uFF0C\u5982\u679C\u9700\u8981\u6BCF\u6B21\u542F\u52A8\u90FD\u4E0A\u6548\uFF0C\u9700\u8981\u5C06\u5B57\u4F53\u914D\u7F6E\u5199\u5165 _vimrc \u6587\u4EF6\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u67E5\u770B\u5F53\u524D\u5B57\u4F53\u8BBE\u7F6E\u4FE1\u606F :set guifont\uFF0C\u590D\u5236\u5E76\u5199\u5165\u914D\u7F6E\u6587\u4EF6</li><li>\u5728 _vimrc \u914D\u7F6E\u6587\u4EF6\u7684\u63D2\u4EF6\u914D\u7F6E\u9879\u4E2D\u589E\u52A0\u72B6\u6001\u680F\u63D2\u4EF6\uFF1APlugin &#39;vim-airline/vim-airline&#39; Plugin &#39;vim-airline/vim-airline-themes&#39;</li><li>\u6309 airline \u5B98\u65B9\u4ED3\u5E93\u6307\u5BFC\u6DFB\u52A0\u5982\u4E0B\u5FC5\u8981\u914D\u7F6E</li></ol><div class="language-"><pre><code>&quot; vim-airline
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
set t_Co=256
set guifont=Ubuntu_Mono_derivative_Powerlin:h12:cANSI:qDRAFT
</code></pre></div><h2 id="\u672C\u673A\u914D\u7F6E-vimrc" tabindex="-1">\u672C\u673A\u914D\u7F6E _vimrc <a class="header-anchor" href="#\u672C\u673A\u914D\u7F6E-vimrc" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&quot; \u7531\u4E8E vimrc \u91CC\u9762\u4F1A\u6709\u5F88\u591A\u7684\u914D\u7F6E\u9879\uFF0C\u4E3A\u4E86\u907F\u514D\u6DF7\u4E71\uFF0C\u8FDB\u884C\u5206\u7EC4\uFF0C\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://zhuanlan.zhihu.com/p/21328642
&quot; Startup - \u7F16\u8F91\u5668\u542F\u52A8\u65F6\u9700\u8981\u6DFB\u52A0\u7684\u4E00\u4E9B\u914D\u7F6E
&quot; General - \u901A\u7528\u914D\u7F6E
&quot; Lang &amp; Encoding - \u8BED\u8A00\u548C\u7F16\u7801
&quot; GUI - \u754C\u9762
&quot; Format - \u57FA\u672C\u7684\u4EE3\u7801\u683C\u5F0F
&quot; Keymap - \u901A\u7528\u7684\u5FEB\u6377\u952E
&quot; Plugin - \u63D2\u4EF6\u76F8\u5173\uFF08\u5305\u62EC\u548C\u5F53\u524D\u63D2\u4EF6\u76F8\u5173\u7684\u914D\u7F6E\u548C\u5FEB\u6377\u952E\u7B49\uFF09
&quot; Function - vimrc \u91CC\u9762\u7528\u5230\u7684\u5E38\u7528\u65B9\u6CD5

&quot; Startup {{{
&quot; \u6309\u7167\u6298\u53E0\u6240\u4F9D\u636E\u7684\u89C4\u5219\uFF0C\u53EF\u4EE5\u5206\u4E3AManual\uFF08\u624B\u5DE5\u6298\u53E0\uFF09\u3001Indent\uFF08\u7F29\u8FDB\u6298\u53E0\uFF09\u3001Marker\uFF08\u6807\u8BB0\u6298\u53E0\uFF09\u548CSyntax\uFF08\u8BED\u6CD5\u6298\u53E0\uFF09\u7B49\u51E0\u79CD\u3002
&quot; set foldmethod=marker \u542F\u7528\u6807\u8BB0\u6298\u53E0\uFF0C\u6240\u6709\u6587\u672C\u5C06\u6309\u7167\u7279\u5B9A\u6807\u8BB0\uFF08\u9ED8\u8BA4\u4E3A{{{\u548C}}}\uFF09\u81EA\u52A8\u6298\u53E0\u3002
&quot; za \u6253\u5F00/\u5173\u95ED\u5F53\u524D\u6298\u53E0 zo \u6253\u5F00\u5F53\u524D\u6298\u53E0 zc \u5173\u95ED\u5F53\u524D\u6253\u5F00\u7684\u6298\u53E0 zj\u79FB\u5230\u4E0B\u4E00\u4E2A\u6298\u53E0 zk\u79FB\u5230\u4E0A\u4E00\u4E2A\u6298\u53E0 zm \u5173\u95ED\u6240\u6709\u6298\u53E0 zr \u6253\u5F00\u6240\u6709\u6298\u53E0 zd \u5220\u9664\u5F53\u524D\u6298\u53E0
augroup ft_vim
  au!
  au FileType vim setlocal foldmethod=marker
augroup END
&quot; }}}

&quot; General {{{
set nocompatible                                   &quot; \u4E0D\u4E0E Vi \u517C\u5BB9\uFF08\u91C7\u7528 Vim \u81EA\u5DF1\u7684\u64CD\u4F5C\u547D\u4EE4\uFF09
set backspace=indent,eol,start                     &quot; vim\u9ED8\u8BA4\u4E0Evi\u76F8\u540C\uFF0Cbs\u952E\u4E0D\u80FD\u5220\u9664\uFF0C\u6240\u4EE5\u91CD\u8BBE\uFF0C\u5305\u62EC indent: \u5982\u679C\u7528\u4E86:set indent,:set ai \u7B49\u81EA\u52A8\u7F29\u8FDB\uFF0C\u60F3\u7528\u9000\u683C\u952E\u5C06\u5B57\u6BB5\u7F29\u8FDB\u7684\u5220\u6389\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u8FD9\u4E2A\u9009\u9879\u3002eol:\u5982\u679C\u63D2\u5165\u6A21\u5F0F\u4E0B\u5728\u884C\u5F00\u5934\uFF0C\u60F3\u901A\u8FC7\u9000\u683C\u952E\u5408\u5E76\u4E24\u884C\uFF0C\u9700\u8981\u8BBE\u7F6Eeol\u3002start\uFF1A\u8981\u60F3\u5220\u9664\u6B64\u6B21\u63D2\u5165\u524D\u7684\u8F93\u5165\uFF0C\u9700\u8BBE\u7F6E\u8FD9\u4E2A\u3002
set nobackup                                       &quot; \u5728\u4FDD\u6301\u9ED8\u8BA4writebackup\u9009\u9879\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u521B\u5EFA\u5907\u4EFD\u6587\u4EF6\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u4FDD\u5B58\u65F6\uFF0C\u4F1A\u989D\u5916\u521B\u5EFA\u4E00\u4E2A\u5907\u4EFD\u6587\u4EF6\uFF0C\u5B83\u7684\u6587\u4EF6\u540D\u662F\u5728\u539F\u6587\u4EF6\u540D\u7684\u672B\u5C3E\uFF0C\u518D\u6DFB\u52A0\u4E00\u4E2A\u6CE2\u6D6A\u53F7\uFF08\u301C\uFF09\u3002
set noswapfile                                     &quot; \u4E0D\u521B\u5EFA\u4EA4\u6362\u6587\u4EF6\u3002\u4EA4\u6362\u6587\u4EF6\u4E3B\u8981\u7528\u4E8E\u7CFB\u7EDF\u5D29\u6E83\u65F6\u6062\u590D\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u7684\u5F00\u5934\u662F.\u3001\u7ED3\u5C3E\u662F.swp\u3002
set history=1024                                   &quot; Vim \u9700\u8981\u8BB0\u4F4F\u591A\u5C11\u6B21\u5386\u53F2\u64CD\u4F5C
set autochdir                                      &quot; \u81EA\u52A8\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55\u3002\u8FD9\u4E3B\u8981\u7528\u5728\u4E00\u4E2A Vim \u4F1A\u8BDD\u4E4B\u4E2D\u6253\u5F00\u591A\u4E2A\u6587\u4EF6\u7684\u60C5\u51B5\uFF0C\u9ED8\u8BA4\u7684\u5DE5\u4F5C\u76EE\u5F55\u662F\u6253\u5F00\u7684\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u8BE5\u914D\u7F6E\u53EF\u4EE5\u5C06\u5DE5\u4F5C\u76EE\u5F55\u81EA\u52A8\u5207\u6362\u5230\uFF0C\u6B63\u5728\u7F16\u8F91\u7684\u6587\u4EF6\u7684\u76EE\u5F55\u3002
set whichwrap=b,s,&lt;,&gt;,[,]                          &quot; \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728 VIM \u4E2D\u5F53\u5149\u6807\u79FB\u5230\u4E00\u884C\u6700\u5DE6\u8FB9\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7EE7\u7EED\u6309\u5DE6\u952E\uFF0C\u5149\u6807\u4E0D\u80FD\u56DE\u5230\u4E0A\u4E00\u884C\u7684\u6700\u53F3\u8FB9\u3002\u540C\u6837\u5730\uFF0C\u5149\u6807\u5230\u4E86\u4E00\u884C\u6700\u53F3\u8FB9\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u80FD\u901A\u8FC7\u7EE7\u7EED\u6309\u53F3\u8DF3\u5230\u4E0B\u4E00\u884C\u7684\u6700\u5DE6\u8FB9\u3002\u4F46\u662F\uFF0C\u901A\u8FC7\u8BBE\u7F6E whichwrap \u6211\u4EEC\u53EF\u4EE5\u5BF9\u4E00\u90E8\u5206\u6309\u952E\u5F00\u542F\u8FD9\u9879\u529F\u80FD\u3002\u5982\u679C\u60F3\u5BF9\u67D0\u4E00\u4E2A\u6216\u51E0\u4E2A\u6309\u952E\u5F00\u542F\u5230\u5934\u540E\u81EA\u52A8\u6298\u5411\u4E0B\u4E00\u884C\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u628A\u9700\u8981\u5F00\u542F\u7684\u952E\u7684\u4EE3\u53F7\u5199\u5230 whichwrap \u7684\u53C2\u6570\u5217\u8868\u4E2D\uFF0C\u5404\u4E2A\u952E\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u5206\u9694\u3002
set nobomb                                         &quot; \u5220\u9664\u6587\u4EF6\u7684BOM
set clipboard+=unnamed                             &quot; Vim \u7684\u9ED8\u8BA4\u5BC4\u5B58\u5668\u548C\u7CFB\u7EDF\u526A\u8D34\u677F\u5171\u4EAB\u3002\u8FD9\u6837\u5728\u5176\u5B83\u5730\u65B9 copy \u4E86\u4E00\u6BB5\u6587\u5B57\u56DE\u5230 vim \u91CC\u9762\u53EF\u4EE5\u7C98\u8D34\u8FDB\u6765
set winaltkeys=no                                  &quot; \u8BBE\u7F6E alt \u952E\u4E0D\u6620\u5C04\u5230\u83DC\u5355\u680F\u3002windows \u4E0B\u5E94\u7528\u7A0B\u5E8F\u7684 alt \u662F\u7528\u6765\u5B9A\u4F4D\u83DC\u5355\u680F\u76EE\u7684\u5FEB\u6377\u952E\uFF0C\u6211\u4EEC\u9700\u8981\u7981\u7528\u5B83\uFF0C\u56E0\u4E3A\u6211\u4EEC\u540E\u9762\u5F88\u591A\u8BBE\u7F6E\u90FD\u9700\u8981\u4F7F\u7528 alt\uFF0C\u9700\u8981\u4F7F\u7528 alt \u6765\u5B9A\u4F4D\u83DC\u5355\u7684\u60C5\u51B5\u5F88\u5C11
&quot; }}}

&quot; Lang &amp; Encoding {{{
set fileencodings=utf-8,gbk2312,gbk,gb18030,cp936
set encoding=utf-8
set langmenu=zh_CN
let $LANG = &#39;en_US.UTF-8&#39;
&quot;language messages zh_CN.UTF-8
&quot; }}}

&quot; GUI {{{
colorscheme molokai
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim
set cursorline                          &quot; \u9AD8\u4EAE\u5F53\u524D\u884C
set hlsearch                            &quot; \u641C\u7D22\u7ED3\u679C\u9AD8\u4EAE
set number                              &quot; \u663E\u793A\u884C\u4E8B\u60C5
set showmatch                           &quot; \u663E\u793A\u62EC\u53F7\u5339\u914D
set lines=35 columns=140                &quot; \u8BBE\u7F6E\u542F\u52A8\u65F6\u7A97\u53E3\u5927\u5C0F\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5168\u5C4F 
set splitbelow                          &quot; \u5206\u5272\u51FA\u6765\u7684\u7A97\u53E3\u4F4D\u4E8E\u5F53\u524D\u7A97\u53E3\u4E0B\u8FB9/\u53F3\u8FB9
set splitright
set guioptions-=T                       &quot; \u4E0D\u663E\u793AGvim\u754C\u9762\u7684\u5DE5\u5177\u680F T \u83DC\u5355\u680F m \u5404\u79CD\u6EDA\u52A8\u6761L R B
set guioptions-=m
set guioptions-=L
set guioptions-=r
set guioptions-=b
set guioptions-=e                       &quot; \u4F7F\u7528\u5185\u7F6E tab \u6837\u5F0F\u800C\u4E0D\u662F gui
set list                                &quot; \u5982\u679C\u884C\u5C3E\u6709\u591A\u4F59\u7684\u7A7A\u683C\uFF08\u5305\u62EC Tab \u952E\uFF09\uFF0C\u8BE5\u914D\u7F6E\u5C06\u8BA9\u8FD9\u4E9B\u7A7A\u683C\u663E\u793A\u6210\u53EF\u89C1\u7684\u5C0F\u65B9\u5757\u3002
set listchars=tab:\xBB\u25A0,trail:\u25A0
set paste                               &quot; \u8BBE\u7F6E\u7C98\u8D34\u6A21\u5F0F\uFF1A\u5728Vim\u4E2D\u901A\u8FC7\u9F20\u6807\u53F3\u952E\u7C98\u8D34\u65F6\u4F1A\u5728\u884C\u9996\u591A\u51FA\u8BB8\u591A\u7F29\u8FDB\u548C\u7A7A\u683C\uFF0C\u901A\u8FC7set paste\u53EF\u4EE5\u5728\u63D2\u5165\u6A21\u5F0F\u4E0B\u7C98\u8D34\u5185\u5BB9\u65F6\u4E0D\u4F1A\u6709\u4EFB\u4F55\u683C\u5F0F\u53D8\u5F62\u3001\u80E1\u4E71\u7F29\u8FDB\u7B49\u95EE\u9898
set ruler                               &quot; \u663E\u793A\u5149\u6807\u5F53\u524D\u4F4D\u7F6E
set laststatus=2                        &quot; \u603B\u662F\u663E\u793A\u72B6\u6001\u680F
&quot; set statusline=%F%m%r%h%w\\ [FORMAT=%{&amp;ff}]\\ [TYPE=%Y]\\ [POS=%l,%v][%p%%]\\ %{strftime(\\&quot;%d/%m/%y\\ -\\ %H:%M\\&quot;)}  &quot; \u72B6\u6001\u884C\u663E\u793A\u7684\u5185\u5BB9\uFF08\u5305\u62EC\u6587\u4EF6\u7C7B\u578B\u548C\u89E3\u7801)
set statusline=[%F]%y%r%m%*%=[Line:%l/%L,Column:%c][%p%%]\\
&quot; }}}

&quot; Format {{{
set shiftwidth=2    &quot; &lt;&lt; &gt;&gt; \u7F29\u8FDB\u7684\u5217\u6570
set expandtab       &quot; \u5728\u63D2\u5165\u6A21\u5F0F\u4E0B\u6309tab\u8F93\u5165\u7A7A\u683C
set tabstop=2       &quot; tab\u952E\u8F93\u51652\u4E2A\u7A7A\u683C
set autoindent      &quot; \u65B0\u589E\u52A0\u7684\u884C\u548C\u524D\u4E00\u884C\u5177\u6709\u76F8\u540C\u7684\u7F29\u8FDB\u5F62\u5F0F
set smartindent     &quot; \u6BCF\u4E00\u884C\u90FD\u6709\u76F8\u540C\u7684\u7F29\u8FDB\u91CF\uFF0C\u76F4\u5230\u9047\u5230\u53F3\u5927\u62EC\u53F7 (}) \u53D6\u6D88\u7F29\u8FDB\u5F62\u5F0F\u3002\u5982\u679C\u67D0\u4E00\u884C\u4EE5 # \u5F00\u5934\uFF0C\u90A3\u4E48\u8BE5\u884C\u4E0D\u4F1A\u91C7\u7528\u4E0A\u8FF0\u7F29\u8FDB\u683C\u5F0F\u89C4\u5219\u3002\u53EF\u4EE5\u8BA4\u4E3Asmartindent\u662Fautoindent\u7684\u5347\u7EA7\u7248\u7F29\u8FDB\u65B9\u6CD5\u3002
set softtabstop=-1  &quot; \u8BBE\u4E3A\u8D1F\u6570\uFF0C\u4F1A\u4F7F\u7528 shiftwidth \u503C\uFF0C\u4E24\u8005\u4FDD\u6301\u4E00\u81F4\uFF0C\u65B9\u4FBF\u7EDF\u4E00\u7F29\u8FDB
syntax on           &quot; \u5F00\u542F\u8BED\u6CD5\u5411\u4EAE
&quot; }}}

&quot; Keymap {{{
let mapleader=&quot;,&quot;                                               &quot; \u8BBE\u7F6E leader \u952E\uFF0C\u4F7F\u7528 \uFF0C\u66FF\u6362\u9ED8\u8BA4\u7684 \\
nmap &lt;leader&gt;uv :source $HOME/_vimrc&lt;cr&gt; &quot; update vimrc         &quot; \u66F4\u65B0 update vimrc \u914D\u7F6E
nmap &lt;leader&gt;ev :tabnew $HOME/_vimrc&lt;cr&gt; &quot; edit vimrc           &quot; \u6253\u5F00\u7F16\u8F91 edit vimrc \u914D\u7F6E\u6587\u4EF6

&quot; tab \u64CD\u4F5C\u5FEB\u6377\u952E\u6620\u5C04
map &lt;leader&gt;tn :tabnew&lt;cr&gt;
map &lt;leader&gt;tc :tabclose&lt;cr&gt;
map &lt;leader&gt;th :tabp&lt;cr&gt;
map &lt;leader&gt;tl :tabn&lt;cr&gt;

&quot; \u7A97\u53E3\u5207\u6362\uFF1A\u5728\u5DF2\u5206\u5272\u7684\u7A97\u53E3\u5207\u6362 M \u4EE3\u8868 alt \u952E
nmap &lt;M-j&gt; &lt;C-W&gt;j    &quot; \u4E0B\u8FB9\u7A97\u53E3
nmap &lt;M-k&gt; &lt;C-W&gt;k    &quot; \u4E0A\u8FB9\u7A97\u53E3
nmap &lt;M-h&gt; &lt;C-W&gt;h    &quot; \u5DE6\u8FB9\u7A97\u53E3
nmap &lt;M-l&gt; &lt;C-W&gt;l    &quot; \u53F3\u8FB9\u7A97\u53E3
nmap &lt;M-c&gt; &lt;C-W&gt;c     &quot;\u5173\u95ED\u5F53\u524D\u5206\u5272\u7684\u7A97\u53E3 \u547D\u4EE4:close \u4E5F\u662F\u5173\u95ED\u5F53\u524D\u7A97\u53E3\uFF0C\u4F46\u6700\u540E\u4E00\u4E2A\u4F1A\u62A5\u9519

&quot; \u7A97\u53E3\u5927\u5C0F\u8C03\u6574\uFF1A ctrl + j,k,h,l \u8C03\u6574\u5206\u5272\u7A97\u53E3\u5927\u5C0F
nnoremap &lt;C-j&gt; :resize +5&lt;cr&gt;               &quot; \u5F80\u4E0B\u62C9\u957F
nnoremap &lt;C-k&gt; :resize -5&lt;cr&gt;               &quot; \u5F80\u4E0A\u7F29\u77ED
nnoremap &lt;C-h&gt; :vertical resize -5&lt;cr&gt;      &quot; \u5F80\u5DE6\u8FB9\u7F29\u7A84
nnoremap &lt;C-l&gt; :vertical resize +5&lt;cr&gt;      &quot; \u5F80\u53F3\u8FB9\u62C9\u5BBD

&quot; normal \u6807\u51C6\u6A21\u5F0F\u4E0B
nnoremap H ^          &quot; \u5C06\u5149\u6807\u79FB\u5230\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5904
nnoremap L $          &quot; \u5C06\u5149\u6807\u79FB\u5230\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u5904
nnoremap ^ H          &quot; \u5C06\u5149\u6807\u79FB\u52A8\u5F53\u524D\u7A97\u53E3\u7B2C\u4E00\u884C\u884C\u9996
nnoremap $ L          &quot; \u5C06\u5149\u6807\u79FB\u52A8\u7A97\u53E3\u6700\u540E\u4E00\u884C\u884C\u9996

&quot; visual \u89C6\u56FE\u6A21\u5F0F\u4E0B\u540C\u4E0A
vnoremap H ^
vnoremap L $
vnoremap ^ H
vnoremap $ L

&quot; \u547D\u4EE4\u6A21\u5F0F\u4E0B\u7684\u884C\u9996\u5C3E
cnoremap &lt;C-a&gt; &lt;home&gt;
cnoremap &lt;C-e&gt; &lt;end&gt;

&quot; \u63D2\u5165\u6A21\u5F0F\u79FB\u52A8\u5149\u6807 alt + jkhl \u4EE3\u66FF\u65B9\u5411\u7BAD\u5934
inoremap jj &lt;Esc&gt;
inoremap &lt;M-j&gt; &lt;Down&gt;
inoremap &lt;M-k&gt; &lt;Up&gt;
inoremap &lt;M-h&gt; &lt;left&gt;
inoremap &lt;M-l&gt; &lt;Right&gt;
&quot; \u63D2\u5165\u6A21\u5F0F\u4E0B(, [, {, \u201C\u7684\u65F6\u5019\u90FD\u4F1A\u81EA\u52A8\u8865\u5168\uFF0C\u5E76\u4E14\u628A\u5149\u6807\u79FB\u5230\u62EC\u53F7\u7684\u5185\u90E8
inoremap ( ()&lt;Esc&gt;i
inoremap [ []&lt;Esc&gt;i
inoremap { {}&lt;Esc&gt;i
inoremap &quot; &quot;&quot;&lt;Esc&gt;i

&quot; like IDE operator
inoremap &lt;C-BS&gt; &lt;Esc&gt;bdei               &quot; \u63D2\u5165\u6A21\u5F0F\u4E0B crtl + backspace \u5220\u9664\u6574\u4E2A\u5355\u8BCD
nnoremap vv ^vg_                        &quot; \u5168\u9009\u5F53\u524D\u884C
nnoremap &lt;F2&gt; :setlocal number!&lt;cr&gt;     &quot; f2 \u5F00\u5173\u884C\u53F7
nnoremap &lt;leader&gt;w :set wrap!&lt;cr&gt;       &quot; \u957F\u884C\u662F\u5426\u81EA\u52A8\u6362\u884C
imap &lt;C-v&gt; &quot;+gP                         &quot; crtl+v \u7C98\u8D34\u7CFB\u7EDF\u526A\u8D34\u677F\u5185\u5BB9
imap &lt;C-V&gt;		&quot;+gP
vmap &lt;C-c&gt; &quot;+y                          &quot; crtl+c \u590D\u5236\u5230\u7CFB\u7EDF\u526A\u8D34\u677F
vnoremap &lt;C-C&gt; &quot;+y
vnoremap &lt;BS&gt; d
cmap &lt;C-V&gt;		&lt;C-R&gt;+

exe &#39;inoremap &lt;script&gt; &lt;C-V&gt;&#39; paste#paste_cmd[&#39;i&#39;]
exe &#39;vnoremap &lt;script&gt; &lt;C-V&gt;&#39; paste#paste_cmd[&#39;v&#39;]

&quot; \u6253\u5F00\u5F53\u524D\u76EE\u5F55 windows
map &lt;leader&gt;ex :!start explorer %:p:h&lt;CR&gt;

&quot; \u6253\u5F00\u5F53\u524D\u76EE\u5F55CMD
map &lt;leader&gt;cmd :!start&lt;cr&gt;
&quot; \u6253\u5370\u5F53\u524D\u65F6\u95F4
map &lt;F3&gt; a&lt;C-R&gt;=strftime(&quot;%Y-%m-%d %a %I:%M %p&quot;)&lt;CR&gt;&lt;Esc&gt;

&quot; \u590D\u5236\u5F53\u524D\u6587\u4EF6/\u8DEF\u5F84\u5230\u526A\u8D34\u677F
nmap ,fn :let @*=substitute(expand(&quot;%&quot;), &quot;/&quot;, &quot;\\\\&quot;, &quot;g&quot;)&lt;CR&gt;
nmap ,fp :let @*=substitute(expand(&quot;%:p&quot;), &quot;/&quot;, &quot;\\\\&quot;, &quot;g&quot;)&lt;CR&gt;

&quot; \u8BBE\u7F6E\u5207\u6362Buffer\u5FEB\u6377\u952E&quot;
nnoremap &lt;C-left&gt; :bn&lt;CR&gt;
nnoremap &lt;C-right&gt; :bp&lt;CR&gt;

&quot; }}}

&quot; Plugin {{{
&quot; Vundle \u63D2\u4EF6\u7BA1\u7406\u7B80\u8981\u8BF4\u660E\uFF1A
&quot; vim \u7684\u63D2\u4EF6\u5206\u4E3A\u4E09\u79CD\uFF0C\u6BD4\u8F83\u5E38\u7528\u7684\u5C31\u662F\u7B2C\u4E8C\u79CD
&quot; 1. \u5728Github vim-scripts \u7528\u6237\u4E0B\u7684repos, \u53EA\u9700\u8981\u5199\u51FArepos\u540D\u79F0: Plugin &#39;\u63D2\u4EF6\u540D\u79F0&#39; \u5B9E\u9645\u4E0A\u662F Plugin &#39;vim-scripts/\u63D2\u4EF6\u4ED3\u5E93\u540D&#39; \u53EA\u662F\u6B64\u5904\u7684\u7528\u6237\u540D\u53EF\u4EE5\u7701\u7565
&quot; 2. \u5728Github\u5176\u4ED6\u7528\u6237\u4E0B\u7684repos, \u9700\u8981\u5199\u51FA\u201D\u7528\u6237\u540D/repos\u540D\u201D: Plugin &#39;\u7528\u6237\u540D/\u63D2\u4EF6\u4ED3\u5E93\u540D&#39;
&quot; 3. \u4E0D\u5728Github\u4E0A\u7684\u63D2\u4EF6\uFF0C\u9700\u8981\u5199\u51FAgit\u5168\u8DEF\u5F84: Plugin &#39;git clone \u540E\u9762\u7684\u5730\u5740&#39;, \u6216\u8005\uFF1A \u672C\u5730\u7684Git\u4ED3\u5E93(\u4F8B\u5982\u81EA\u5DF1\u7684\u63D2\u4EF6) Plugin file:///+\u672C\u5730\u63D2\u4EF6\u4ED3\u5E93\u7EDD\u5BF9\u8DEF\u5F84

&quot; \u7B80\u8981\u5E2E\u52A9\u6587\u6863
&quot; :PluginList       - \u5217\u51FA\u6240\u6709\u5DF2\u914D\u7F6E\u7684\u63D2\u4EF6
&quot; :PluginInstall    - \u5B89\u88C5\u63D2\u4EF6,\u8FFD\u52A0 \`!\` \u7528\u4EE5\u66F4\u65B0\u6216\u4F7F\u7528 :PluginUpdate
&quot; :PluginSearch foo - \u641C\u7D22 foo ; \u8FFD\u52A0 \`!\` \u6E05\u9664\u672C\u5730\u7F13\u5B58
&quot; :PluginClean      - \u6E05\u9664\u672A\u4F7F\u7528\u63D2\u4EF6,\u9700\u8981\u786E\u8BA4; \u8FFD\u52A0 \`!\` \u81EA\u52A8\u6279\u51C6\u79FB\u9664\u672A\u4F7F\u7528\u63D2\u4EF6

&quot; \u5FC5\u987B\u9879
&quot; 1. filetype off
&quot; 2. set nocompatible \u53BB\u9664VI\u4E00\u81F4\u6027,\u5FC5\u987B
&quot; 3. Plugin &#39;VundleVim/Vundle.vim&#39;
&quot; 4. \u8BBE\u7F6E\u5305\u62ECvundle\u548C\u521D\u59CB\u5316\u76F8\u5173\u7684runtime path
&quot;    set rtp+=~/vimfiles/bundle/Vundle.vim \u8BBE\u7F6E\u5305\u62ECvundle\u548C\u521D\u59CB\u5316\u76F8\u5173\u7684runtime path
&quot;    call vundle#begin()
&quot; \u53E6\u4E00\u79CD\u9009\u62E9, \u5C06vundle\u5B89\u88C5\u7684\u63D2\u4EF6\u72EC\u7ACB\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u5728\u4E0B\u9762\u6307\u5B9A\u8DEF\u5F84
&quot;     call vundle#begin(&#39;~/some/path/here&#39;)
&quot; 5. \u5B89\u88C5\u63D2\u4EF6\u7684\u547D\u4EE4\u5FC5\u987B\u653E\u5728vundle#begin\u548Cvundle#end\u4E4B\u95F4.

&quot; \u8E29\u5751
&quot; \u89E3\u51B3\u94FE\u63A5\uFF1Ahttps://github.com/VundleVim/Vundle.vim/wiki/Vundle-for-Windows
&quot; 1. \u5B89\u88C5 Vundle: git clone https://github.com/VundleVim/Vundle.vim.git ~/vimfiles/bundle/Vundle.vim
&quot; 2. \u73B0\u4EE3 Windows \u5728\u7528\u6237\u6839\u76EE\u5F55\u65B0\u5EFA _vim \u800C\u4E0D\u662F\u65E7\u7684 .vim
&quot; 3. \u6253\u5F00 vim\uFF0C\u8FD0\u884C :PluginInstall

filetype off
set shellslash
set rtp+=~/vimfiles/bundle/Vundle.vim
call vundle#begin(&#39;~/vimfiles/bundle&#39;)
Plugin &#39;VundleVim/Vundle.vim&#39;

Plugin &#39;fholgado/minibufexpl.vim&#39;
Plugin &#39;Shutnik/jshint2.vim&#39;
Plugin &#39;leshill/vim-json&#39;
Plugin &#39;mislav/vimfiles&#39;
Plugin &#39;leafgarland/typescript-vim&#39;
Plugin &#39;tpope/vim-markdown&#39;
Plugin &#39;tpope/vim-surround&#39;
Plugin &#39;tpope/vim-fugitive&#39;
Plugin &#39;marijnh/tern_for_vim&#39;
Plugin &#39;Xuyuanp/nerdtree-git-plugin&#39;
Plugin &#39;ctrlpvim/ctrlp.vim&#39;
Plugin &#39;vim-airline/vim-airline&#39;
Plugin &#39;vim-airline/vim-airline-themes&#39;

&quot; vim actions
Plugin &#39;easymotion/vim-easymotion&#39;

&quot; React
Plugin &#39;pangloss/vim-javascript&#39;
Plugin &#39;mxw/vim-jsx&#39;

&quot; Vue
Plugin &#39;posva/vim-vue&#39;

&quot; Es6
Plugin &#39;tomtom/tlib_vim&#39;
Plugin &#39;MarcWeber/vim-addon-mw-utils&#39;
Plugin &#39;garbas/vim-snipmate&#39;
Plugin &#39;isRuslan/vim-es6&#39;

call vundle#end()            &quot; \u5FC5\u987B
filetype plugin indent on    &quot; \u5FC5\u987B \u52A0\u8F7Dvim\u81EA\u5E26\u548C\u63D2\u4EF6\u76F8\u5E94\u7684\u8BED\u6CD5\u548C\u6587\u4EF6\u7C7B\u578B\u76F8\u5173\u811A\u672C
&quot; }}}

&quot; vim-airline
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
set t_Co=256
set guifont=Ubuntu_Mono_derivative_Powerlin:h12:cANSI:qDRAFT
</code></pre></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><ul><li><a href="https://www.jianshu.com/p/a0b452f8f720" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/a0b452f8f720</a></li><li><a href="https://github.com/VundleVim/Vundle.vim/blob/master/README_ZH_CN.md" target="_blank" rel="noopener noreferrer">Vundle \u4F7F\u7528</a></li><li><a href="https://github.com/VundleVim/Vundle.vim/wiki/Vundle-for-Windows" target="_blank" rel="noopener noreferrer">Vundle windows\u7CFB\u7EDF\u4E0B\u7684\u5B89\u88C5\u8DEF\u5F84</a></li></ul>`,35),r=[a];function s(m,p,g,c,d,v){return e(),n("div",null,r)}var b=t(u,[["render",s]]);export{q as __pageData,b as default};
