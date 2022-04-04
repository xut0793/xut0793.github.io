import{_ as n,c as a,o as s,a as t}from"./app.fa011131.js";const m='{"title":"\u6587\u4EF6\u8DEF\u5F84 path","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206","slug":"\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206"},{"level":2,"title":"\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02","slug":"\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02"},{"level":2,"title":"\u5F15\u5165 path","slug":"\u5F15\u5165-path"},{"level":2,"title":"path \u7684 API","slug":"path-\u7684-api"}],"relativePath":"Server/node/path.md"}',p={},o=t(`<h1 id="\u6587\u4EF6\u8DEF\u5F84-path" tabindex="-1">\u6587\u4EF6\u8DEF\u5F84 path <a class="header-anchor" href="#\u6587\u4EF6\u8DEF\u5F84-path" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206">\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206</a></li><li><a href="#\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02">\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02</a></li><li><a href="#\u5F15\u5165-path">\u5F15\u5165 path</a></li><li><a href="#path-\u7684-api">path \u7684 API</a></li></ul></div></p><p>\u8FD9\u4E00\u8282\u4E3B\u8981\u4E3A\u6587\u4EF6\u7CFB\u7EDF\u4F5C\u7684\u524D\u7F6E\u77E5\u8BC6\uFF0Cnode \u7684\u5185\u7F6E\u5DE5\u4F5C\u6A21\u5757 path \u63D0\u4F9B\u7528\u4E8E\u5904\u7406\u6587\u4EF6\u8DEF\u5F84\u548C\u76EE\u5F55\u8DEF\u5F84\u7684\u5B9E\u7528\u65B9\u6CD5\u3002</p><h2 id="\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206" tabindex="-1">\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206 <a class="header-anchor" href="#\u8DEF\u5F84\u7684\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u250C\u2500windonws\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502          dir        \u2502    base    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u252C              \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 root \u2502              \u2502 name \u2502 ext \u2502
&quot; C:\\      path\\dir   \\ file  .txt &quot;
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2510
&quot;  /    home/user/dir / file  .txt &quot;
\u2502 root \u2502              \u2502 name \u2502 ext \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2534              \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502          dir        \u2502    base    \u2502
\u2514\u2500POSIX\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre></div><h2 id="\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02" tabindex="-1">\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02 <a class="header-anchor" href="#\u8DEF\u5F84\u5206\u9694\u7B26\u5DEE\u5F02" aria-hidden="true">#</a></h2><p>\u56E0\u4E3A\u5728 POSIX \u548C Windows \u4E24\u4E2A\u4E0D\u540C\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u8DEF\u5F84\u5206\u9694\u7B26\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6240\u4EE5 path \u5728\u8FD9\u4E24\u4E2A\u7CFB\u7EDF\u4E0A\u7684\u4F7F\u7528\u6709\u4E9B\u5FAE\u5C0F\u5DEE\u5F02\u3002</p><blockquote><p>\u53EF\u79FB\u690D\u64CD\u4F5C\u7CFB\u7EDF\u63A5\u53E3\uFF08\u82F1\u8BED\uFF1APortable Operating System Interface\uFF0C\u7F29\u5199\u4E3A POSIX\uFF0C\u6700\u540E\u7684 X \u5219\u8868\u660E\u5176\u5BF9 Unix API \u7684\u4F20\u627F\u3002\uFF09\u662F IEEE \u4E3A\u8981\u5728\u5404\u79CD UNIX \u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FD0\u884C\u7684\u8F6F\u4EF6\u5B9A\u4E49 API \u7684\u4E00\u7CFB\u5217\u4E92\u76F8\u5173\u8054\u7684\u6807\u51C6\u7684\u603B\u79F0\u3002Linux \u7CFB\u7EDF\u57FA\u672C\u4E0A\u5B9E\u73B0\u4E86 POSIX \u6807\u51C6\uFF0Cwindows \u90E8\u5206\u5B9E\u73B0\u4E86 POSIX \u6807\u51C6\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">let</span> sep <span class="token operator">=</span> path<span class="token punctuation">.</span>sep
<span class="token comment">// \u63D0\u4F9B\u5E73\u53F0\u7279\u5B9A\u7684\u8DEF\u5F84\u7247\u6BB5\u5206\u9694\u7B26</span>
<span class="token comment">// Windows \u4E0A\u662F \\\u3002 \u5982\uFF1A C:\\temp\\foo\\</span>
<span class="token comment">// POSIX \u4E0A\u662F /\u3002 \u5982\uFF1A /foo/bar/baz/asdf</span>
</code></pre></div><p>\u4F46\u5728 Windows \u4E0A\uFF0C\u6B63\u659C\u6760\uFF08/\uFF09\u548C\u53CD\u659C\u6760\uFF08\\\uFF09\u90FD\u662F\u53EF\u88AB\u63A5\u53D7\u7684\u8DEF\u5F84\u7247\u6BB5\u5206\u9694\u7B26\u3002\u6240\u4EE5\u8FD9\u4E2A\u5DEE\u5F02\u57FA\u672C\u53EF\u5FFD\u7565\u3002\u5728 wondows \u5E73\u53F0\u4EE3\u7801\u4E2D\u4ECD\u53EF\u4EE5\u4F7F\u7528\u6B63\u659C\u6760<code>/</code>\u6765\u89E3\u6790\u8DEF\u5F84\u3002</p><h2 id="\u5F15\u5165-path" tabindex="-1">\u5F15\u5165 path <a class="header-anchor" href="#\u5F15\u5165-path" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="path-\u7684-api" tabindex="-1">path \u7684 API <a class="header-anchor" href="#path-\u7684-api" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment">// \u5224\u65AD\u8DEF\u5F84\u662F\u5426\u662F\u7EDD\u5BF9\u8DEF\u5F84</span>
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8DEF\u5F84\u6269\u5C55\u540D\uFF0Cext\u90E8\u5206</span>
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> ext<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u53E3\u5F84\u6587\u4EF6\u540D\u3002\u5982\u679C\u4E0D\u5E26ext\u53C2\u6570\u5219\u4E3Aname+ext\u90E8\u5206\uFF0C\u5982\u679C\u5E26\u4E86ext\u53C2\u6570\uFF0C\u5219\u53EA\u8F93\u51FAname\u90E8\u5206</span>
path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8DEF\u5F84\u76EE\u5F55\u540D\uFF0Cdir\u90E8\u5206</span>

path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u6574\u4E2A\u8DEF\u5F84\u89E3\u6790\u6210\u5BF9\u8C61</span>
path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>pathObject<span class="token punctuation">)</span> <span class="token comment">// \u4ECE\u5BF9\u8C61\u8FD4\u56DE\u8DEF\u5F84\u5B57\u7B26\u4E32\u3002 \u4E0E path.parse() \u76F8\u53CD\u3002</span>
path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment">// \u89C4\u8303\u5316\u8DEF\u5F84\uFF0C\u89E3\u6790\u8DEF\u5F84\u4E2D&#39;..&#39; \u548C &#39;.&#39; \u7247\u6BB5</span>

path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5408\u5E76\u7ED9\u5B9A\u7684\u51E0\u6BB5\u8DEF\u5F84\uFF0C\u6210\u89C4\u8303\u5316\u7684\u8DEF\u5F84</span>
path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// \u5408\u5E76\u8DEF\u5F84\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6309\u7ED9\u5B9A\u7684\u8DEF\u5F84\u5E8F\u5217\u4ECE\u53F3\u5230\u5DE6\u8FDB\u884C\u5904\u7406\uFF0C\u76F4\u5230\u9047\u5230\u7B2C\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u4E3A\u6B62\u3002</span>
<span class="token comment">// \u5982\u679C\u90FD\u6CA1\u6709\u7EDD\u5BF9\u8DEF\u5F84\u52A0\u4E0A\u5F53\u524D\u76EE\u5F55\u5373__dirname</span>
</code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token string">&#39;C:\\\\path\\\\dir\\\\file.txt&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// .txt</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// file.txt</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&#39;.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// file</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// C:\\path\\dir</span>

<span class="token keyword">let</span> pathObject <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathObject<span class="token punctuation">)</span>
<span class="token comment">/**
\u8FD4\u56DE\uFF1A
    { 
        root: &#39;C:\\\\&#39;,
        dir: &#39;C:\\\\path\\\\dir&#39;,
        base: &#39;file.txt&#39;,
        ext: &#39;.txt&#39;,
        name: &#39;file&#39;
    }
*/</span>
<span class="token keyword">let</span> p1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>pathObject<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token comment">// C:\\path\\dir\\file.txt</span>
</code></pre></div><div class="language-js"><pre><code>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\temp\\\\\\\\foo\\\\bar\\\\..\\\\&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE: &#39;C:\\\\temp\\\\foo\\\\&#39;</span>
</code></pre></div><div class="language-js"><pre><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz/asdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;quux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE: &#39;/foo/bar/baz/asdf&#39;</span>
<span class="token comment">// \u5982\u679C\u5176\u4E2D\u6709\u4EFB\u4F55\u8DEF\u5F84\u7247\u6BB5\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u629B\u51FA TypeError</span>
</code></pre></div><div class="language-js"><pre><code>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./baz&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE: &#39;/foo/bar/baz&#39;</span>

path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/tmp/file/&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD4\u56DE: &#39;/tmp/file&#39;</span>
<span class="token comment">// \u4ECE\u540E\u5F80\u524D\uFF0C\u80FD\u89E3\u6790\u6210\u7EDD\u5BF9\u8DEF\u5F84\u5C31\u505C\u6B62</span>

path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;wwwroot&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;static_files/png/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../gif/image.gif&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD8\u672A\u751F\u6210\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219\u6DFB\u52A0__dirname\uFF0C\u5982\u679C\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u662F /home/myself/node\uFF0C</span>
<span class="token comment">// \u5219\u8FD4\u56DE &#39;/home/myself/node/wwwroot/static_files/gif/image.gif&#39;</span>
</code></pre></div>`,19),e=[o];function c(l,u,i,k,r,h){return s(),a("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};