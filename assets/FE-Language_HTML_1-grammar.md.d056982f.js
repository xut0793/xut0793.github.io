import{_ as t,c as a,o as n,a as s}from"./app.9dbb06c5.js";var e="/assets/html_element.a1f855b7.png";const g='{"title":"HTML \u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5143\u7D20\u7684\u7ED3\u6784","slug":"\u5143\u7D20\u7684\u7ED3\u6784"},{"level":3,"title":"\u5143\u7D20\u7684\u7279\u6027 Attribute","slug":"\u5143\u7D20\u7684\u7279\u6027-attribute"},{"level":3,"title":"HTML \u5185\u5BB9\u4E2D\u7684\u7A7A\u683C","slug":"html-\u5185\u5BB9\u4E2D\u7684\u7A7A\u683C"},{"level":3,"title":"HTML \u6CE8\u91CA","slug":"html-\u6CE8\u91CA"},{"level":3,"title":"HTML \u5B9E\u4F53","slug":"html-\u5B9E\u4F53"}],"relativePath":"FE-Language/HTML/1-grammar.md"}',o={},p=s('<h1 id="html-\u8BED\u6CD5" tabindex="-1">HTML \u8BED\u6CD5 <a class="header-anchor" href="#html-\u8BED\u6CD5" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5143\u7D20\u7684\u7ED3\u6784">\u5143\u7D20\u7684\u7ED3\u6784</a></li><li><a href="#\u5143\u7D20\u7684\u7279\u6027-attribute">\u5143\u7D20\u7684\u7279\u6027 Attribute</a></li><li><a href="#html-\u5185\u5BB9\u4E2D\u7684\u7A7A\u683C">HTML \u5185\u5BB9\u4E2D\u7684\u7A7A\u683C</a></li><li><a href="#html-\u6CE8\u91CA">HTML \u6CE8\u91CA</a></li><li><a href="#html-\u5B9E\u4F53">HTML \u5B9E\u4F53</a></li></ul></div></p><h3 id="\u5143\u7D20\u7684\u7ED3\u6784" tabindex="-1">\u5143\u7D20\u7684\u7ED3\u6784 <a class="header-anchor" href="#\u5143\u7D20\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><p>HTML\u6587\u6863\u7531\u4E00\u7CFB\u5217\u5143\u7D20\uFF08elements\uFF09\u7EC4\u6210\u3002\u5143\u7D20\u4E2D\u5305\u62EC\u5F00\u59CB\u6807\u7B7E\u3001\u7279\u6027\u3001\u5185\u5BB9\u548C\u7ED3\u675F\u6807\u7B7E\uFF0C\u5176\u4E2D\u5F00\u59CB\u6807\u7B7E\u662F\u5FC5\u987B\u7684\uFF0C\u7279\u6027\u3001\u5185\u5BB9\u3001\u7ED3\u675F\u6807\u7B7E\u662F\u975E\u5FC5\u987B\u7684\u3002</p><p><img src="'+e+`" alt=""></p><h4 id="\u7A7A\u5143\u7D20-\u81EA\u95ED\u5408\u6807\u7B7E" tabindex="-1">\u7A7A\u5143\u7D20 / \u81EA\u95ED\u5408\u6807\u7B7E <a class="header-anchor" href="#\u7A7A\u5143\u7D20-\u81EA\u95ED\u5408\u6807\u7B7E" aria-hidden="true">#</a></h4><p>\u6CA1\u6709\u5185\u5BB9\u7684\u5143\u7D20\u79F0\u4E3A\u7A7A\u5143\u7D20\uFF0C\u4E00\u822C\u6CA1\u6709\u5185\u5BB9\u7684\u5143\u7D20\u4E5F\u662F\u4F34\u968F\u7740\u6CA1\u6709\u7ED3\u675F\u6807\u7B7E\uFF0C\u6240\u4EE5\u4E5F\u79F0\u4E3A\u81EA\u95ED\u5408\u6807\u7B7E\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firefox-icon.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- \u81EA\u95ED\u5408\u6807\u7B7E\u7684 / \u5199\u548C\u4E0D\u5199\u90FD\u53EF\u4EE5\uFF0C\u4F46\u662F\u6700\u597D\u7EDF\u4E00\u4E00\u79CD\u5B9E\u8DF5\u89C4\u8303\u3002 --&gt;</span>
</code></pre></div><blockquote><p>\u5143\u7D20\u548C\u6807\u7B7E\u8FD9\u4E24\u4E2A\u672F\u8BED\u7ECF\u5E38\u4E92\u6362\u4F7F\u7528\uFF0C\u6307\u540C\u4E00\u4E2A\u610F\u601D\u3002\u4F46\u4E25\u683C\u610F\u4E49\u4E0A\u8BB2\uFF0C\u5143\u7D20\u5305\u62EC\u5F00\u59CB\u6807\u7B7E\u3001\u5185\u5BB9\u548C\u7ED3\u675F\u6807\u7B7E\u3002</p></blockquote><h3 id="\u5143\u7D20\u7684\u7279\u6027-attribute" tabindex="-1">\u5143\u7D20\u7684\u7279\u6027 Attribute <a class="header-anchor" href="#\u5143\u7D20\u7684\u7279\u6027-attribute" aria-hidden="true">#</a></h3><p>\u7279\u6027\u662F\u4E00\u4E2A\u540D\u503C\u5BF9\uFF0C\u4EE5<code>=</code>\u8FDE\u63A5\u540D\u79F0\u548C\u503C\uFF0C\u7279\u6027\u503C\u4EE5\u53CC\u5F15\u53F7\u6807\u8BC6\uFF0C\u591A\u4E2A\u7279\u6027\u4EE5\u7A7A\u683C\u5206\u9694\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.mozilla.org/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>The Mozilla homepage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u7279\u6027\u503C\u4EE5\u53CC\u5F15\u53F7\u6807\u8BC6\u975E\u5F3A\u5236\uFF0C\u5355\u5F15\u53F7\u3001\u53CC\u5F15\u53F7\u6216\u8005\u6CA1\u6709\u5F15\u53F7\u90FD\u53EF\u4EE5\uFF0C\u4F46\u6700\u4F73\u5B9E\u8DF5\u662F\u4EE5\u53CC\u5F15\u53F7\u5305\u88F9\u3002</li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u5982\u679C\u4E0D\u52A0\u5F15\u53F7\uFF0Ctitle\u7684\u503C\u4EE5\u7A7A\u683C\u5206\u9694\uFF0C\u5BFC\u81F4title\u7684\u503C\u4E3AThe\uFF0C\u5C06Mozilla \u548C homepage\u8BC6\u522B\u4E3A\u65E0\u6548\u7684html\u7279\u6027 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>https://www.mozilla.org/</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>The</span> <span class="token attr-name">Mozilla</span> <span class="token attr-name">homepage</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>_blank</span> <span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u81F3\u4E8E\u4F7F\u7528\u5355\u5F15\u53F7\u8FD8\u662F\u53CC\u5F15\u53F7\uFF0C\u5C31\u5C5E\u4E8E\u4EE3\u7801\u98CE\u683C\u95EE\u9898\uFF0C\u4E00\u822CJS\u53D8\u91CF\u503C\u4F7F\u7528\u5355\u5F15\u53F7\uFF0CHTML\u7279\u6027\u503C\u4F7F\u7528\u53CC\u5F15\u53F7 --&gt;</span>
</code></pre></div><ul><li>\u7279\u6027\u503C\u5982\u679C\u662F\u5E03\u5C14\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7701\u7565\u4E0D\u5199\uFF0C\u76F4\u63A5\u5199\u7279\u6027\u540D\u79F0\u8868\u793A\u3002</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u7B49\u6548\u4E8E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="html-\u5185\u5BB9\u4E2D\u7684\u7A7A\u683C" tabindex="-1">HTML \u5185\u5BB9\u4E2D\u7684\u7A7A\u683C <a class="header-anchor" href="#html-\u5185\u5BB9\u4E2D\u7684\u7A7A\u683C" aria-hidden="true">#</a></h3><p>HTML\u89E3\u91CA\u5668\u4F1A\u5C06\u8FDE\u7EED\u51FA\u73B0\u7684\u7A7A\u767D\u5B57\u7B26\u51CF\u5C11\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u7A7A\u683C\u7B26\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u72D7 \u72D7        \u5F88
         \u5446 \u840C\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u591A\u4F59\u7A7A\u683C\u4F1A\u88AB\u5FFD\u7565\uFF0C\u7B49\u6548\u4E8E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u72D7 \u72D7 \u5F88 \u5446 \u840C\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>\u90A3\u4E48\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4F1A\u4F7F\u7528\u90A3\u4E48\u591A\u7684\u7A7A\u767D\u5462? \u4E00\u822C\u90FD\u662F\u4E3A\u4E86\u53EF\u8BFB\u6027\u3002\u4F7F\u7528\u7A7A\u683C\u8FDB\u884C\u7F29\u8FDB\u5C06\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C\u4FBF\u4E8E\u9605\u8BFB\u3002</p></blockquote><h3 id="html-\u6CE8\u91CA" tabindex="-1">HTML \u6CE8\u91CA <a class="header-anchor" href="#html-\u6CE8\u91CA" aria-hidden="true">#</a></h3><p>\u5C06\u4E00\u6BB5HTML\u4E2D\u7684\u5185\u5BB9\u7F6E\u4E3A\u6CE8\u91CA\uFF0C\u4F60\u9700\u8981\u5C06\u5176\u7528\u7279\u6B8A\u7684\u8BB0\u53F7 <code>&lt;!--</code> \u548C <code>--&gt;</code> \u5305\u62EC\u8D77\u6765\u3002\u5177\u4F53\u89C1\u4E0A\u9762\u4EE3\u7801\u793A\u4F8B\u3002</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u8FD9\u662F\u4E00\u884C\u6CE8\u91CA\uFF0C\u4E0D\u662F\u663E\u793A\u5728\u9875\u9762\u4E0A --&gt;</span>
</code></pre></div><p>\u6CE8\u91CA\u662F\u88AB\u6D4F\u89C8\u5668\u5FFD\u7565\u7684\uFF0C\u6240\u4EE5\u5BF9\u7528\u6237\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u6CE8\u91CA\u7684\u76EE\u7684\u662F\u5141\u8BB8\u4F60\u5BF9\u4F60\u7684\u4EE3\u7801\u8FDB\u884C\u63CF\u8FF0\uFF0C\u65B9\u4FBF\u81EA\u5DF1\u65E5\u540E\u67E5\u770B\u6216\u522B\u4EBA\u9605\u8BFB\u4F60\u4EE3\u7801\u7684\u65F6\u5019\u66F4\u5FEB\u7406\u89E3\u8FD9\u6BB5\u4EE3\u7801\u7684\u610F\u4E49\u3002</p><h3 id="html-\u5B9E\u4F53" tabindex="-1">HTML \u5B9E\u4F53 <a class="header-anchor" href="#html-\u5B9E\u4F53" aria-hidden="true">#</a></h3><p>\u5B9E\u4F53\u6307\u7684\u662FHTML\u4E2D\u7279\u6B8A\u5B57\u7B26\u7684\u5F15\u7528\u3002</p><p>HTML\u4E2D\u67D0\u4E9B\u5B57\u7B26\u662F\u9884\u7559\u7684\uFF0C\u5FC5\u987B\u88AB\u66FF\u6362\u4E3A\u5B57\u7B26\u5B9E\u4F53\u3002\u5982\u5B57\u7B26 <code>&lt;</code>, <code>&gt;</code>,<code>&quot;</code>,<code>&#39;</code> \u548C <code>&amp;</code> \u662F\u5B57\u7B26\u662FHTML\u8BED\u6CD5\u81EA\u8EAB\u7684\u4E00\u90E8\u5206\u3002\u5982\u679C\u4F60\u771F\u7684\u60F3\u8981\u5728\u6587\u672C\u4E2D\u4F7F\u7528\u7B26\u53F7&amp;\u6216\u8005\u5C0F\u4E8E\u53F7, \u800C\u4E0D\u60F3\u8BA9\u5B83\u4EEC\u88AB\u6D4F\u89C8\u5668\u89C6\u4E3A\u4EE3\u7801\u88AB\u89E3\u91CA\uFF0C\u5C31\u5FC5\u987B\u5F15\u7528\u5B9E\u4F53\uFF08\u8868\u793A\u5B57\u7B26\u7684\u7279\u6B8A\u7F16\u7801\uFF09</p><p><strong>\u8BED\u6CD5\uFF1A\u6BCF\u4E2A\u5B57\u7B26\u5F15\u7528\u4EE5\u7B26\u53F7<code>&amp;</code>\u5F00\u59CB, \u4EE5\u5206\u53F7<code>;</code>\u7ED3\u675F\u3002</strong></p><table><thead><tr><th>\u663E\u793A\u7ED3\u679C</th><th>\u63CF\u8FF0</th><th>\u5B9E\u4F53\u540D\u79F0</th><th>\u5B9E\u4F53\u7F16\u53F7</th></tr></thead><tbody><tr><td><code></code></td><td>\u7A7A\u683C</td><td><code>&amp;nbsp;</code></td><td><code>&amp;#160;</code></td></tr><tr><td><code>&lt;</code></td><td>\u5C0F\u4E8E\u53F7</td><td><code>&amp;lt;</code></td><td><code>&amp;#60;</code></td></tr><tr><td><code>&gt;</code></td><td>\u5927\u4E8E\u53F7</td><td><code>&amp;gt;</code></td><td><code>&amp;#62;</code></td></tr><tr><td><code>&amp;</code></td><td>\u548C\u53F7</td><td><code>&amp;amp;</code></td><td><code>&amp;#38;</code></td></tr><tr><td><code>&quot;</code></td><td>\u5F15\u53F7</td><td><code>&amp;quot;</code></td><td><code>&amp;#34;</code></td></tr><tr><td><code>&#39;</code></td><td>\u6487\u53F7</td><td><code>&amp;apos;</code></td><td><code>&amp;#39;</code></td></tr><tr><td><code>\uFFE0</code></td><td>\u5206</td><td><code>&amp;cent;</code></td><td><code>&amp;#162;</code></td></tr><tr><td><code>\xA3</code></td><td>\u9551</td><td><code>&amp;pound;</code></td><td><code>&amp;#163;</code></td></tr><tr><td><code>\xA5</code></td><td>\u65E5\u5706</td><td><code>&amp;yen;</code></td><td><code>&amp;#165;</code></td></tr><tr><td><code>\u20AC</code></td><td>\u6B27\u5143</td><td><code>&amp;euro;</code></td><td><code>&amp;#8364;</code></td></tr><tr><td><code>\xA7</code></td><td>\u5C0F\u8282</td><td><code>&amp;sect;</code></td><td><code>&amp;#167;</code></td></tr><tr><td><code>\xA9</code></td><td>\u7248\u6743</td><td><code>&amp;copy;</code></td><td><code>&amp;#169;</code></td></tr><tr><td><code>\xAE</code></td><td>\u6CE8\u518C\u5546\u6807</td><td><code>&amp;reg;</code></td><td><code>&amp;#174;</code></td></tr><tr><td><code>\u2122</code></td><td>\u5546\u6807</td><td><code>&amp;trade;</code></td><td><code>&amp;#8482;</code></td></tr><tr><td><code>\xD7</code></td><td>\u4E58\u53F7</td><td><code>&amp;times;</code></td><td><code>&amp;#215;</code></td></tr><tr><td><code>\xF7</code></td><td>\u9664\u53F7</td><td><code>&amp;divide;</code></td><td><code>&amp;#247;</code></td></tr></tbody></table>`,29),d=[p];function c(l,u,r,i,m,k){return n(),a("div",null,d)}var v=t(o,[["render",c]]);export{g as __pageData,v as default};
