import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const v='{"title":"vue \u9879\u76EE\u73AF\u5883\u53D8\u91CF\u7684\u8BBE\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"process","slug":"process"},{"level":2,"title":"process.env","slug":"process-env"},{"level":2,"title":"env.NODE_ENV","slug":"env-node-env"},{"level":2,"title":"process.argv","slug":"process-argv"},{"level":2,"title":"cross-env","slug":"cross-env"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528 cross-env","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528-cross-env"},{"level":3,"title":"\u6E90\u7801","slug":"\u6E90\u7801"},{"level":2,"title":".env \u6587\u4EF6\u548C mode \u6A21\u5F0F","slug":"env-\u6587\u4EF6\u548C-mode-\u6A21\u5F0F"},{"level":2,"title":"\u81EA\u5B9A\u4E49 vue-cli-plugin-xx \u63D2\u4EF6","slug":"\u81EA\u5B9A\u4E49-vue-cli-plugin-xx-\u63D2\u4EF6"},{"level":3,"title":"\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528 .env \u6587\u4EF6\u914D\u5408 mode","slug":"\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528-env-\u6587\u4EF6\u914D\u5408-mode"},{"level":3,"title":"\u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528 envCong.js \u6587\u4EF6\u548C vue.config.js \u4E2D\u5904\u7406","slug":"\u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528-envcong-js-\u6587\u4EF6\u548C-vue-config-js-\u4E2D\u5904\u7406"},{"level":3,"title":"\u65B9\u6848\u4E09\uFF1A\u81EA\u5B9A\u4E49 vue-cli-plugin \u63D2\u4EF6\u5904\u7406","slug":"\u65B9\u6848\u4E09\uFF1A\u81EA\u5B9A\u4E49-vue-cli-plugin-\u63D2\u4EF6\u5904\u7406"},{"level":2,"title":"vue-cli \u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u540C\u6B65\u53EF\u4EE5\u5728 node \u73AF\u5883\u4E2D\u548C\u5BA2\u6237\u7AEF .vue \u6587\u4EF6\u4E2D\u4F7F\u7528","slug":"vue-cli-\u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u540C\u6B65\u53EF\u4EE5\u5728-node-\u73AF\u5883\u4E2D\u548C\u5BA2\u6237\u7AEF-vue-\u6587\u4EF6\u4E2D\u4F7F\u7528"}],"relativePath":"FE-Engineering/ci-webpack/env.md"}',p={},o=t(`<h1 id="vue-\u9879\u76EE\u73AF\u5883\u53D8\u91CF\u7684\u8BBE\u7F6E" tabindex="-1">vue \u9879\u76EE\u73AF\u5883\u53D8\u91CF\u7684\u8BBE\u7F6E <a class="header-anchor" href="#vue-\u9879\u76EE\u73AF\u5883\u53D8\u91CF\u7684\u8BBE\u7F6E" aria-hidden="true">#</a></h1><p>\u5728 vue \u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u7279\u522B\u662F webpack \u914D\u7F6E\u6587\u4EF6\u4E2D\u7ECF\u5E38\u4F1A\u4F7F\u7528 env.NODE_ENV \u6216\u8005 process.<wbr>env.VUE_APP_XXX \u8FD9\u6837\u53D8\u91CF\u6765\u5224\u65AD\u73AF\u5883\u3002</p><p>\u5728\u4F7F\u7528\u4E2D\u5E38\u89C1\u7684\u7591\u95EE\uFF1A</p><ul><li>\u4E00\u6B65\u6B65\u8BA4\u8BC6 process \u3001 process.<wbr>env \u3001env.NODE_ENV</li><li>\u5728 run-script \u76F4\u63A5\u8BBE\u7F6E\u7684\u53D8\u91CF\u53EA\u80FD\u5728 node \u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5373\u5728 webpack \u6784\u5EFA\u811A\u672C\u4E2D\u4F7F\u7528\uFF0C\u4F46\u4E0D\u80FD\u5728\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</li><li>\u53EA\u6709 NODE_ENV\uFF0CBASE_URL \u548C\u4EE5 VUE_APP_ \u5F00\u5934\u7684\u53D8\u91CF\u5C06\u901A\u8FC7 webpack.DefinePlugin \u9759\u6001\u5730\u5D4C\u5165\u5230\u5BA2\u6237\u7AEF\u4FA7\u7684\u4EE3\u7801\u4E2D\u3002</li><li>\u8BA4\u8BC6 vue \u9879\u76EE\u6700\u65B0\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u6587\u4EF6 .env \u6587\u4EF6\u3002</li><li>\u4E86\u89E3 vue-cli \u5982\u4F55\u89E3\u6790 .env \u914D\u7F6E\u6587\u4EF6\u3002</li></ul><h2 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-hidden="true">#</a></h2><p><code>process</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E5F\u662F <code>global</code> \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5728 node \u73AF\u5883\u4E0B\u7684\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u8BBF\u95EE\u5230\u5B83\uFF0C\u800C\u65E0\u9700\u5F15\u5165\u989D\u5916\u6A21\u5757\u3002\u901A\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\u63D0\u4F9B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F7F\u6211\u4EEC\u53EF\u4EE5\u5BF9\u5F53\u524D\u8FD0\u884C\u7684\u7A0B\u5E8F\u7684 node \u8FDB\u7A0B\u8FDB\u884C\u8BBF\u95EE\u548C\u63A7\u5236\u3002</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process <span class="token operator">===</span> global<span class="token punctuation">.</span>process<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA\u4E00\u957F\u4E32\u5C5E\u6027\uFF0C\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F\uFF0C\u4E5F\u63D0\u4F9B\u4E00\u7CFB\u5217\u65B9\u6CD5\u83B7\u53D6\u76F8\u5173\u4FE1\u606F\uFF0C\u5982 process.cwd() \u83B7\u53D6\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55(current work directory)</span>
</code></pre></div><h2 id="process-env" tabindex="-1">process.<wbr>env <a class="header-anchor" href="#process-env" aria-hidden="true">#</a></h2><p><code>process.<wbr>env</code> \u5C5E\u6027\u4F1A\u8FD4\u56DE\u5305\u542B\u7528\u6237\u73AF\u5883\u76F8\u5173\u53C2\u6570\u7684\u5BF9\u8C61</p><blockquote><p><a href="https://zhuanlan.zhihu.com/p/67726501" target="_blank" rel="noopener noreferrer">\u4F60\u5E94\u8BE5\u77E5\u9053\u7684 Windows \u73AF\u5883\u53D8\u91CF</a></p></blockquote><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\uFF0C\u6839\u636E\u4E2A\u4EBA\u7535\u8111\u4E0A\u5B89\u88C5\u7684\u4E0D\u540C\u7A0B\u5E8F\uFF0C\u8F93\u51FA\u53D8\u91CF\u4F1A\u6709\u4E0D\u540C</span>
<span class="token punctuation">{</span>
  <span class="token constant">HOME</span><span class="token operator">:</span> <span class="token string">&#39;C:\\\\Users\\\\xuxx29099&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">HOMEPATH</span><span class="token operator">:</span> <span class="token string">&#39;\\\\Users\\\\xuxx29099&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">LANG</span><span class="token operator">:</span> <span class="token string">&#39;zh_CN.UTF-8&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">NODE_PATH</span><span class="token operator">:</span> <span class="token string">&#39;D:\\\\nvm\\\\node_global\\\\node_modules&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">USERDNSDOMAIN</span><span class="token operator">:</span> <span class="token string">&#39;HS.HANDSOME.COM.CN&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">USERNAME</span><span class="token operator">:</span> <span class="token string">&#39;xuxx29099&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7701\u7565\u66F4\u591A...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\uFF0C<code>process.<wbr>env</code>\u8F93\u51FA\u5BF9\u8C61\u7684\u60EF\u4F8B\u662F\u5927\u5199\u3002\u4F46\u5728 Windows \u64CD\u4F5C\u7CFB\u7EDF\u4E0A\uFF0C\u73AF\u5883\u53D8\u91CF\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002\u6240\u4EE5\u4EE5\u4E0B\u5C0F\u5199\u4ECD\u7136\u53EF\u4EE5\u6B63\u786E\u8F93\u51FA\uFF1A</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>usename<span class="token punctuation">)</span> <span class="token comment">// xuxx29099</span>
</code></pre></div><blockquote><p>\u4F46\u662F\u4FBF\u4E8E\u7A0B\u5E8F\u8DE8\u7CFB\u7EDF\u8FD0\u884C\uFF0C\u5C3D\u91CF\u7EDF\u4E00\u4F7F\u7528\u5927\u5199\u3002</p></blockquote><p>\u53E6\u5916\uFF0C<code>process.<wbr>env</code>\u8868\u793A\u7684\u5BF9\u8C61\u53EF\u4EE5\u8FDB\u884C\u4FEE\u6539\uFF0C\u6BD4\u5982\u589E\u52A0\u5C5E\u6027\u548C\u5220\u9664\u5C5E\u6027\u3002\u867D\u7136\u662F\u5728 node \u5168\u5C40\u5BF9\u8C61 process \u4E0A\u4FEE\u6539\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4FEE\u6539\u4EC5\u5BF9\u5F53\u524D\u8FDB\u7A0B\u6709\u6548\uFF0C\u4E0D\u4F1A\u53CD\u6620\u5230\u5176\u5B83\u8FDB\u7A0B\u6216\u7EBF\u7A0B\u4E2D\uFF08\u9664\u975E\u660E\u786E\u5730\u8981\u6C42\uFF09\u3002</p><div class="language-js"><pre><code><span class="token comment">// a.js</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FOO</span> <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FOO</span><span class="token punctuation">)</span>

<span class="token comment">// b.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FOO</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-"><pre><code>node a.js # \u8F93\u51FA bar
node b.js # \u8F93\u51FA undefined
</code></pre></div><p>\u5728 <code>process.<wbr>env</code> \u4E0A\u4E3A\u5C5E\u6027\u8D4B\u503C\u4F1A\u9690\u5F0F\u5730\u5C06\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</p><blockquote><p>\u5F53\u503C\u4E0D\u662F\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u6216\u5E03\u5C14\u503C\u65F6\uFF0CNode.js \u672A\u6765\u7684\u7248\u672C\u53EF\u80FD\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u5F15\u7528\u5BF9\u8C61\u8D4B\u503C\uFF0C\u5EFA\u8BAE\u7EDF\u4E00\u4F7F\u7528 <code>JSON.stringify</code>\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002</p></blockquote><div class="language-js"><pre><code>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt;  string null</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; string undefined</span>

process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; string true</span>
</code></pre></div><p>\u4F7F\u7528 <code>delete</code> \u53EF\u4EE5\u4ECE <code>process.<wbr>env</code> \u4E2D\u5220\u9664\u5C5E\u6027\u3002</p><div class="language-js"><pre><code>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TEST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ul><li><code>process.<wbr>env</code>\u5BF9\u8C61\u7684\u5C5E\u6027\u60EF\u4F8B\u662F\u5927\u5199\u3002</li><li><code>process.<wbr>env</code>\u5BF9\u8C61\u5C5E\u6027\u53EF\u4EE5\u8FDB\u884C\u4FEE\u6539\uFF0C\u5982\u589E\u52A0\u548C\u5220\u9664\u5C5E\u6027\uFF0C\u4E14\u4FEE\u6539\u53EA\u5BF9\u5F53\u524D process \u8FDB\u7A0B\u6709\u6548\u3002</li><li><code>process.<wbr>env</code> \u4E0A\u4E3A\u5C5E\u6027\u8D4B\u503C\u4F1A\u9690\u5F0F\u5730\u5C06\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</li><li><code>process.<wbr>env</code> \u4E0A\u7684\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528 <code>delete</code> \u5220\u9664\u3002</li></ul><h2 id="env-node-env" tabindex="-1">env.NODE_ENV <a class="header-anchor" href="#env-node-env" aria-hidden="true">#</a></h2><p><code>NODE_ENV</code> \u5E76\u4E0D\u662F <code>process.<wbr>env</code> \u5BF9\u8C61\u7684\u539F\u751F\u5C5E\u6027\u3002\u6B63\u5982\u4E0A\u9762 <code>process.<wbr>env</code> \u6240\u8BB2\u7684\uFF0C\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u6DFB\u52A0\u5C5E\u6027\uFF0C\u6240\u4EE5 env.NODE_ENV \u5C31\u662F\u5C5E\u4E8E\u81EA\u5B9A\u4E49\u6DFB\u52A0\u7684\u5C5E\u6027\u3002</p><p><code>NODE_ENV</code> \u6700\u65E9\u662F\u7531 <code>Express</code> \u6846\u67B6\u666E\u53CA\u7684\uFF0C\u6162\u6162\u53D8\u6210\u4E86\u4E00\u4E2A\u7EA6\u5B9A\u6210\u4FD7\u73AF\u5883\u53D8\u91CF\uFF0C\u7528\u6765\u6307\u5B9A\u8FD0\u884C js \u5E94\u7528\u7A0B\u5E8F\u7684\u73AF\u5883\uFF0C\u4F8B\u5982\u5F00\u53D1 development\uFF0C\u751F\u4EA7 production\uFF0C\u6D4B\u8BD5 test\u7B49\u73AF\u5883\u3002</p><blockquote><p><a href="https://dzone.com/articles/what-you-should-know-about-node-env" target="_blank" rel="noopener noreferrer">\u60A8\u5E94\u8BE5\u4E86\u89E3\u7684NODE_ENV</a><br>\u540C\u6837\u7684\uFF0C\u4E5F\u662F\u7531 Express \u666E\u53CA\u7684\u53D8\u91CF <code>process.<wbr>env.PORT</code></p></blockquote><h2 id="process-argv" tabindex="-1">process.argv <a class="header-anchor" href="#process-argv" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u5728 js \u6587\u4EF6\u4E2D\u76F4\u63A5\u8BBE\u7F6E <code>process.<wbr>env</code> \u5BF9\u8C61\u5C5E\u6027\uFF0C\u5E38\u89C1\u7684\u64CD\u4F5C\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u4F20\u5165\u53C2\u6570\uFF0C\u6216\u8005\u5728 run-script \u4E2D\u4F20\u5165\u53C2\u6570\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-"><pre><code># cmd powershell git-bash
node test.js a=1 b=2 c
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node test.js a=1 b=2 c&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u8FD9\u4E9B\u547D\u4EE4\u884C\u4F20\u5165\u7684\u53C2\u6570\u5728 js \u6587\u4EF6\u5185\u662F\u5982\u4F55\u88AB\u89E3\u6790\u5230\u7684\u5462\uFF1F</p><p>\u8FD9\u5C31\u662F\u5229\u7528\u4E86 node \u7684 process.argv \u5BF9\u8C61\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u5305\u542B\u5F53 Node.js \u8FDB\u7A0B\u88AB\u542F\u52A8\u65F6\u4F20\u5165\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002</p><div class="language-js"><pre><code><span class="token comment">// argstest.js</span>
process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-"><pre><code>node test.js a=1 b=2 c d
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u8F93\u51FA</span>
<span class="token number">0</span><span class="token operator">:</span> <span class="token constant">D</span><span class="token operator">:</span>\\nodejs\\node<span class="token punctuation">.</span>exe
<span class="token number">1</span><span class="token operator">:</span> <span class="token constant">E</span><span class="token operator">:</span>\\develop\\test\\argstest<span class="token punctuation">.</span>js
<span class="token number">2</span><span class="token operator">:</span> a<span class="token operator">=</span><span class="token number">1</span>
<span class="token number">3</span><span class="token operator">:</span> b<span class="token operator">=</span><span class="token number">2</span>
<span class="token number">4</span><span class="token operator">:</span> c
<span class="token number">5</span><span class="token operator">:</span> d
</code></pre></div><p>\u5176\u4E2D \uFF1A</p><ul><li><code>process.argv[0]</code> \u8868\u793A\u5F53\u524D node \u53EF\u6267\u884C\u6587\u4EF6(node.exe) \u6240\u5728\u8DEF\u5F84\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E5F\u8981\u4EE5\u4F7F\u7528 <code>process.execPath</code>\u548C<code>process.argv0</code>\u83B7\u53D6\u3002\u4F46\u6CE8\u610F<code>process.argv0</code>\u7A0D\u6709\u5DEE\u5F02\u3002</li><li><code>process.argv[1]</code> \u8868\u793A\u6B63\u88AB\u6267\u884C\u7684 JavaScript \u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li>\u5176\u4F59\u4E3A\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u4EE5\u7A7A\u683C\u4E3A\u8FB9\u754C\u8F93\u51FA\u3002</li></ul><p><code>process.argv</code> \u8981\u7279\u522B\u533A\u5206<code>process.execArgv</code>\uFF1A <code>process.execArgv</code> \u5C5E\u6027\u8FD4\u56DE\u5F53 Node.js \u8FDB\u7A0B\u88AB\u542F\u52A8\u65F6\uFF0CNode.js \u7279\u5B9A\u7684\u547D\u4EE4\u884C\u9009\u9879\u3002 \u8FD9\u4E9B\u7279\u5B9A\u7684\u9009\u9879\u4E0D\u4F1A\u5728 <code>process.argv</code> \u8FD4\u56DE\u7684\u6570\u7EC4\u4E2D\u51FA\u73B0\u3002 \u540C\u6837\u7684\uFF0C<code>process.execArgv</code> \u4E5F\u4E0D\u4F1A\u5305\u542B Node.js \u7684\u53EF\u6267\u884C\u811A\u672C\u540D\u79F0\u540E\u9762\u51FA\u73B0\u7684\u975E\u7279\u5B9A\u9009\u9879\u3002</p><div class="language-"><pre><code>node --harmony script.js --version
</code></pre></div><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>execArgv<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA [&#39;--harmony&#39;]</span>
consoe<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA [&#39;D:\\nodejs\\node.exe&#39;, &#39;E:\\develop\\test\\argstest.js&#39;, &#39;--version&#39;]</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ul><li>node \u547D\u4EE4\u884C\u8F93\u5165\u53C2\u6570\u4F1A\u5B58\u5165 <code>process.argv</code> \u6570\u7EC4\u4E2D\uFF0C\u4E14\u4ECE\u6570\u7EC4\u7B2C\u4E09\u9879\u5F00\u59CB\u3002\u7B2C\u4E00\u9879\u4E3Anode\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7B2C\u4E8C\u9879\u4E3A\u5F53\u524D\u88AB\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li>node \u547D\u4EE4\u884C\u4E0A\u7279\u5B9A\u547D\u4EE4\u53C2\u6570\u548C\u81EA\u5B9A\u4E49\u547D\u4EE4\u53C2\u6570\u533A\u522B\uFF1A<code>process.execArgv</code> \u548C <code>process.argv</code>\u3002</li></ul><h2 id="cross-env" tabindex="-1">cross-env <a class="header-anchor" href="#cross-env" aria-hidden="true">#</a></h2><p><code>cross-env</code>\u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u548C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u7684\u811A\u672C\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528-cross-env" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528 <code>cross-env</code> <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528-cross-env" aria-hidden="true">#</a></h3><p>\u662F\u4E3A\u4E86\u62B9\u5E73\u4E0D\u540C\u7CFB\u7EDF\u5BF9\u73AF\u5883\u53D8\u91CF\u64CD\u4F5C\u65B9\u5F0F\u7684\u5DEE\u5F02\uFF0C\u4E3B\u8981\u662F window \u7CFB\u7EDF\u5E73\u53F0\u548C POSIX \u7CFB\u7EDF\u5E73\u53F0\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</p><blockquote><p>\u53EF\u79FB\u690D\u64CD\u4F5C\u7CFB\u7EDF\u63A5\u53E3\uFF08\u82F1\u8BED\uFF1APortable Operating System Interface\uFF0C\u7F29\u5199\u4E3A POSIX\uFF0C\u6700\u540E\u7684 X \u5219\u8868\u660E\u5176\u5BF9 Unix API \u7684\u4F20\u627F\u3002\uFF09\u662F IEEE \u4E3A\u8981\u5728\u5404\u79CD UNIX \u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FD0\u884C\u7684\u8F6F\u4EF6\u5B9A\u4E49 API \u7684\u4E00\u7CFB\u5217\u4E92\u76F8\u5173\u8054\u7684\u6807\u51C6\u7684\u603B\u79F0\u3002Linux \u7CFB\u7EDF\u57FA\u672C\u4E0A\u5B9E\u73B0\u4E86 POSIX \u6807\u51C6\uFF0Cwindows \u90E8\u5206\u5B9E\u73B0\u4E86 POSIX \u6807\u51C6\u3002</p></blockquote><p>\u5728 linux \u7CFB\u7EDF\u4E0B\u64CD\u4F5C\u73AF\u5883\u53D8\u91CF</p><blockquote><p>git bash \u4E2D\u64CD\u4F5C\u540C linux \u7CFB\u7EDF\u3002</p></blockquote><div class="language-"><pre><code># \u67E5\u770B\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF
env

# \u8F93\u51FA\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\uFF0C\u4F7F\u7528 $ \u8868\u793A\u53D8\u91CF\u540D\u3002node\u4E2D\u5E38\u7528\u7684\u5230\u7684\u73AF\u5883\u53D8\u91CF\u662FNODE_ENV\uFF0C\u67E5\u770B\u662F\u5426\u5B58\u5728
echo $NODE_ENV

# \u5982\u679C\u4E0D\u5B58\u5728\u5219\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF0C\u4F7F\u7528 exprot \u6DFB\u52A0\u7684\u73AF\u5883\u53D8\u91CF\u662F\u4E34\u65F6\u7684\uFF0C\u53EA\u5728\u5F53\u524D shell \u73AF\u5883\u4E0B\u751F\u6548\uFF0C\u5173\u95ED shell \u540E\u5C06\u5931\u6548\u3002\u5982\u679C\u9700\u8981\u6C38\u4E45\u4FEE\u6539\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4FEE\u6539\u3002
export NODE_ENV=production

# \u73AF\u5883\u53D8\u91CF\u8FFD\u52A0\u503C
export path=$path:/home/download:/usr/local/

# \u67D0\u4E9B\u65F6\u5019\u9700\u8981\u5220\u9664\u73AF\u5883\u53D8\u91CF
unset NODE_ENV
</code></pre></div><p>\u5728 window \u7CFB\u7EDF\u7684 CMD \u4E2D\u64CD\u4F5C\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u540C\u6837\u7684\uFF0C\u547D\u4EE4\u884C\u4E2D\u8BBE\u7F6E\u548C\u4FEE\u6539\u7684\u73AF\u5883\u53D8\u91CF\u53EA\u4F1A\u5728\u5F53\u524D\u7A97\u53E3\u4E0B\u6709\u6548\uFF0C\u8BBE\u7F6E\u548C\u4FEE\u6539\u53EA\u662F\u4E34\u65F6\u7F13\u5B58\uFF0C\u4E00\u65E6\u5173\u95ED\u547D\u4EE4\u7A97\u53E3\uFF0C\u73AF\u5883\u53D8\u91CF\u5C31\u4F1A\u5931\u6548\u3002\u5982\u679C\u8981\u8BBE\u7F6E\u771F\u5B9E\u7684\u6301\u4E45\u6027\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u53BB\u6211\u7684\u7535\u8111-&gt;\u5C5E\u6027-&gt;\u66F4\u6539\u8BBE\u7F6E-&gt;\u9AD8\u7EA7-&gt;\u73AF\u5883\u53D8\u91CF\uFF0C\u6DFB\u52A0\u548C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7136\u540E\u6CE8\u9500/\u91CD\u542F\u3002</p><div class="language-"><pre><code># \u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF     
set

# \u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF     
set NODE_ENV

# \u6DFB\u52A0/\u66F4\u65B0\u73AF\u5883\u53D8\u91CF     
set NODE_ENV=development

# \u73AF\u5883\u53D8\u91CF\u8FFD\u52A0\u503C set \u53D8\u91CF\u540D=%\u53D8\u91CF\u540D%;\u8FFD\u52A0\u7684\u53D8\u91CF\u5185\u5BB9 
set path=%path%;C:\\web;C:\\Tools 

# \u5220\u9664\u73AF\u5883\u53D8\u91CF         
set NODE_ENV=
</code></pre></div><p>\u5728 window 10 \u4EE5\u4E0A\u7CFB\u7EDF\u4E2D\u4F7F\u7528 powershell \u7EC8\u7AEF\u4E0A\u64CD\u4F5C\u73AF\u5883\u53D8\u91CF\u3002</p><div class="language-"><pre><code># \u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF  
ls env:

# \u641C\u7D22\u73AF\u5883\u53D8\u91CF   
ls env:NODE*

# \u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF 
$env:NODE_ENV

# \u6DFB\u52A0/\u66F4\u65B0\u73AF\u5883\u53D8\u91CF 
$env:NODE_ENV=development

# \u73AF\u5883\u53D8\u91CF\u8FFD\u52A0\u503C
$env:path+=&quot;;c:\\your_path&quot;

# \u5220\u9664\u73AF\u5883\u53D8\u91CF        
del evn:NODE_ENV
</code></pre></div><p>\u6B63\u56E0\u4E3A\u5B58\u5728\u4E0D\u540C\u7CFB\u7EDF\u5E73\u53F0\u7684\u5DEE\u5F02\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u6765\u6267\u884C\u811A\u672C\u6587\u4EF6\u65F6\uFF0C\u53EF\u80FD\u8981\u4E3A\u4E0D\u540C\u73AF\u5883\u51C6\u5907\u4E0D\u540C\u7684 run-script \u547D\u4EE4\u3002</p><div class="language-js"><pre><code><span class="token comment">// test.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;run:windwos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_ENV=production &amp;&amp; node test.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;run:linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;export NODE_ENV=production &amp;&amp; node test.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728 linux \u5E73\u53F0\u4E0B\uFF0C\u53EF\u4EE5\u7701\u7565 export</span>
    <span class="token property">&quot;run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NODE_ENV=production node test.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u4E3A\u4E86\u907F\u514D\u4EE5\u4E0A\u8FD9\u79CD\u95EE\u9898\uFF0C\u56E0\u6B64 cross-env \u51FA\u73B0\u4E86\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 cross-env \u547D\u4EE4\uFF0C\u8FD9\u6837\u6211\u4EEC\u8BBE\u7F6E\u6216\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u65F6\u5C31\u4E0D\u5FC5\u62C5\u5FC3\u5E73\u53F0\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4 cross-env \u80FD\u591F\u63D0\u4F9B\u4E00\u4E2A\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u811A\u672C\uFF0C\u4F7F\u5F97\u6211\u4EEC\u5C31\u80FD\u591F\u4EE5unix\u65B9\u5F0F\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u7136\u540E\u5728windows\u4E0A\u4E5F\u80FD\u591F\u517C\u5BB9\u6267\u884C\u3002</p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production node test.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u591A\u4E2A\u73AF\u5883\u53D8\u91CF</span>
    <span class="token property">&quot;more&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env FIRST_ENV=one SECOND_ENV=two node ./my-program&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h3><p>\u57FA\u672C\u539F\u7406\u5C31\u662F <code>cross-env</code> \u4F5C\u4E3A\u6267\u884C\u547D\u4EE4\uFF0C<code>NODE_ENV=production node test.js</code>\u4E3A\u6267\u884C\u8BE5\u547D\u4EE4\u7684\u53C2\u6570\uFF0C<code>cross-env</code>\u901A\u8FC7\u89E3\u6790\u53C2\u6570\u83B7\u53D6\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u548C\u811A\u672C\u6267\u884C\u3002</p><blockquote><p><a href="https://github.com/kentcdodds/cross-env/blob/master/src/index.js" target="_blank" rel="noopener noreferrer">cross-env github</a></p></blockquote><div class="language-js"><pre><code><span class="token comment">// cross-env \u7684\u5165\u53E3\u6587\u4EF6 &quot;cross-env&quot;: &quot;src/bin/cross-env.js&quot;</span>
#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node
<span class="token keyword">const</span> crossEnv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span>
<span class="token function">crossEnv</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// process.argv.slice(2) \u622A\u53D6\u5230\u53C2\u6570\uFF1ANODE_ENV=production node test.js</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// src/index.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> crossEnv
<span class="token keyword">function</span> <span class="token function">crossEnv</span><span class="token punctuation">(</span><span class="token parameter">args<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// args = [&#39;NODE_ENV=production&#39;, &#39;node&#39;, &#39;test.js&#39;]</span>
  <span class="token comment">// \u901A\u8FC7 parseCommand \u51FD\u6570\u89E3\u6790\u51FA\u9884\u8BBE\u7684\u73AF\u5883\u53D8\u91CF \u6267\u884C\u547D\u4EE4 \u547D\u4EE4\u53C2\u6570</span>
  <span class="token comment">// parseCommand \u51FD\u6570\u5C06\u9996\u6B21\u5339\u914D\u4E0D\u5230 env=value \u5F62\u5F0F\u540E\u7684\u53C2\u6570\u4F5C\u4E3A\u7528\u6237\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\u548C\u53C2\u6570\uFF0C</span>
  <span class="token comment">// \u6240\u4EE5\u9700\u8981\u901A\u8FC7 cross-env \u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u90FD\u9700\u8981\u5728\u4E1A\u52A1\u547D\u4EE4\u4E4B\u524D\uFF0C\u4E4B\u540E\u7684\u4F5C\u4E3A\u4E1A\u52A1\u547D\u4EE4\u81EA\u8EAB\u6267\u884C\u7684\u53C2\u6570</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>envSetters<span class="token punctuation">,</span> command<span class="token punctuation">,</span> commandArgs<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parseCommand</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">getEnvVars</span><span class="token punctuation">(</span>envSetters<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u4F7F\u7528\u8BBE\u7F6E\u540E\u7684 env \u6267\u884C\u4E1A\u52A1\u547D\u4EE4</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> envSetterRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\w+)=(&#39;(.*)&#39;|&quot;(.*)&quot;|(.*))</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">function</span> <span class="token function">parseCommand</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> envSetters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> command <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> commandArgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> match <span class="token operator">=</span> envSetterRegex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> value

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> match<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> match<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> match<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      envSetters<span class="token punctuation">[</span>match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// No more env setters, the rest of the line must be the command and args</span>
      <span class="token keyword">let</span> cStart <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      cStart <span class="token operator">=</span> args
        <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token comment">// Regex:</span>
        <span class="token comment">// match &quot;\\&#39;&quot; or &quot;&#39;&quot;</span>
        <span class="token comment">// or match &quot;\\&quot; if followed by [$&quot;\\] (lookahead)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">a</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\\\\\\|(\\\\)?&#39;|([\\\\])(?=[$&quot;\\\\])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>
          <span class="token comment">// Eliminate all matches except for &quot;\\&#39;&quot; =&gt; &quot;&#39;&quot;</span>
          <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> <span class="token parameter">m</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token string">&#39;\\\\\\\\&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;\\\\&#39;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token string">&quot;\\\\&#39;&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&#39;&quot;</span>
            <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      command <span class="token operator">=</span> cStart<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      commandArgs <span class="token operator">=</span> cStart<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>envSetters<span class="token punctuation">,</span> command<span class="token punctuation">,</span> commandArgs<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getEnvVars</span><span class="token punctuation">(</span><span class="token parameter">envSetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> envVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>process<span class="token punctuation">.</span>env<span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APPDATA</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    envVars<span class="token punctuation">.</span><span class="token constant">APPDATA</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APPDATA</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="env-\u6587\u4EF6\u548C-mode-\u6A21\u5F0F" tabindex="-1">.env \u6587\u4EF6\u548C mode \u6A21\u5F0F <a class="header-anchor" href="#env-\u6587\u4EF6\u548C-mode-\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u5728 vue-cli 2.x \u6784\u5EFA\u7684\u9879\u76EE\u4E2D\uFF0C\u4F1A\u66B4\u9732 webpack \u6784\u5EFA\u6587\u4EF6\uFF0C\u5BF9\u591A\u73AF\u5883\u6784\u5EFA\u7684\u9700\u6C42\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539 webapck \u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\u4EE3\u7801\u3002\u5E38\u89C1\u7684\u4F5C\u6CD5\u662F\uFF1A</p><ul><li><ol><li>\u5EFA\u7ACB config \u6587\u4EF6\u5939\uFF0C\u521B\u5EFA\u5BF9\u5E94\u7684\u73AF\u5883\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982 env.dev.js</li></ol></li><li><ol><li>\u5728 run-script \u4E2D\u901A\u8FC7 cross-env \u8BBE\u7F6E\u5BF9\u5E94\u7684 NODE_ENV \u7684\u503C</li></ol></li><li><ol start="2"><li>\u5728\u5BF9\u5E94\u7684 webpack.config.js \u6587\u4EF6\u4E2D\u6839\u636E NODE_ENV \u7684\u503C\u83B7\u53D6\u5BF9\u5E94\u7684 env.[NODE_ENV].js \u6587\u4EF6\uFF0C\u5F97\u5230\u8BBE\u7F6E\u7684\u53D8\u91CF\uFF0C\u5199\u5165 process.<wbr>env \u4E2D\u3002</li></ol></li></ul><blockquote><p><a href="https://my.oschina.net/parchments/blog/3289586" target="_blank" rel="noopener noreferrer">vue-cli 2.0 vue-cli 3.0 \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</a><br><a href="https://www.cnblogs.com/luoxuemei/p/12124408.html" target="_blank" rel="noopener noreferrer">vue-cli4.0\u591A\u73AF\u5883\u914D\u7F6E\uFF0C\u53D8\u91CF\u4E0E\u6A21\u5F0F</a></p></blockquote><p>\u6240\u4EE5\u5728 vue-cli 2.x \u6784\u5EFA\u7684\u9879\u76EE\u4E2D\u7684 package.json \u7684 run-script \u547D\u4EE4\u4E2D\uFF0C\u6700\u663E\u8457\u7684\u7279\u70B9\u662F\u4F7F\u7528 <code>corss-env</code> \u914D\u7F6E\u73AF\u5883\u53D8\u91CF <code>NODE_ENV</code>\uFF0C\u800C webapck \u6784\u5EFA\u662F\u5177\u4F53\u662F\u6784\u5EFA\u5F00\u53D1\u5305\u8FD8\u662F\u751F\u4EA7\u5305\u5E76\u4E0D\u4E25\u91CD\u4F9D\u8D56\u4E8E NODE_ENV \u503C\uFF0C\u800C\u4E0D\u540C\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u660E\u7684webpack \u81EA\u8EAB\u7684 mode \u5C5E\u6027\u3002</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --inline --progress --config build/webpack.dev.conf.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node build/build.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=test node build/build.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build:uat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=uat node build/build.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production  node build/build.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u5728\u5347\u7EA7\u5230 vue-cli 3.x \u4E4B\u540E\uFF0C\u9690\u85CF\u4E86\u9879\u76EE\u7684 webpack \u914D\u7F6E\u6587\u4EF6\uFF0C\u63D0\u4F9B\u4E86 vue.config.js \u6587\u4EF6\u8FDB\u884C\u9879\u76EE\u914D\u7F6E\u3002\u5BF9\u4E8E\u9879\u76EE\u914D\u7F6E\u53D8\u91CF\u7684\u914D\u7F6E\u63D0\u4F9B\u4E86\u4F7F\u7528 .env \u6587\u4EF6\u914D\u5408 vue-cli-service \u7684\u6A21\u5F0F mode \u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u5904\u7406\u3002</p><p>\u5E76\u4E14\u8FD9\u91CC\u6709\u4E2A\u5F88\u5927\u533A\u522B\uFF0C\u5BF9\u9879\u76EE\u5185\u90E8 webpack \u5177\u4F53\u6784\u5EFA\u751F\u4EA7\u5305\u8FD8\u662F\u5F00\u53D1\u5305\u65F6\u4E25\u91CD\u4F9D\u8D56 env.NODE_ENV \u53D8\u91CF\u7684\u503C\uFF0C\u5E76\u4E14\u53EF\u9009\u7684\u503C\u6709 <code>development / production / test</code>\u3002</p><blockquote><p>\u5F53\u8FD0\u884C vue-cli-service \u547D\u4EE4\u65F6\uFF0C\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF\u90FD\u4ECE\u5BF9\u5E94\u7684\u73AF\u5883\u6587\u4EF6\u4E2D\u8F7D\u5165\u3002\u5982\u679C\u6587\u4EF6\u5185\u90E8\u4E0D\u5305\u542B NODE_ENV \u53D8\u91CF\uFF0C\u5B83\u7684\u503C\u5C06\u53D6\u51B3\u4E8E\u6A21\u5F0F\uFF0C\u4F8B\u5982\uFF0C\u5728 production \u6A21\u5F0F\u4E0B\u88AB\u8BBE\u7F6E\u4E3A &quot;production&quot;\uFF0C\u5728 test \u6A21\u5F0F\u4E0B\u88AB\u8BBE\u7F6E\u4E3A &quot;test&quot;\uFF0C\u9ED8\u8BA4\u5219\u662F &quot;development&quot;\u3002<br>NODE_ENV \u5C06\u51B3\u5B9A\u60A8\u7684\u5E94\u7528\u8FD0\u884C\u7684\u6A21\u5F0F\uFF0C\u662F\u5F00\u53D1\uFF0C\u751F\u4EA7\u8FD8\u662F\u6D4B\u8BD5\uFF0C\u56E0\u6B64\u4E5F\u51B3\u5B9A\u4E86\u521B\u5EFA\u54EA\u79CD webpack \u914D\u7F6E\u3002<br>\u4F8B\u5982\u901A\u8FC7\u5C06 NODE_ENV \u8BBE\u7F6E\u4E3A &quot;test&quot;\uFF0CVue CLI \u4F1A\u521B\u5EFA\u4E00\u4E2A\u4F18\u5316\u8FC7\u540E\u7684\uFF0C\u5E76\u4E14\u65E8\u5728\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u7684 webpack \u914D\u7F6E\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u5904\u7406\u56FE\u7247\u4EE5\u53CA\u4E00\u4E9B\u5BF9\u5355\u5143\u6D4B\u8BD5\u975E\u5FC5\u9700\u7684\u5176\u4ED6\u8D44\u6E90\u3002<br>\u540C\u7406\uFF0CNODE_ENV=development \u521B\u5EFA\u4E00\u4E2A webpack \u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u542F\u7528\u70ED\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u5BF9\u8D44\u6E90\u8FDB\u884C hash \u4E5F\u4E0D\u4F1A\u6253\u51FA vendor bundles\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5728\u5F00\u53D1\u7684\u65F6\u5019\u80FD\u591F\u5FEB\u901F\u91CD\u65B0\u6784\u5EFA\u3002<br>\u5F53\u4F60\u8FD0\u884C vue-cli-service build \u547D\u4EE4\u65F6\uFF0C\u65E0\u8BBA\u4F60\u8981\u90E8\u7F72\u5230\u54EA\u4E2A\u73AF\u5883\uFF0C\u5E94\u8BE5\u59CB\u7EC8\u628A NODE_ENV \u8BBE\u7F6E\u4E3A &quot;production&quot; \u6765\u83B7\u53D6\u53EF\u7528\u4E8E\u90E8\u7F72\u7684\u5E94\u7528\u7A0B\u5E8F\u3002<br> <a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">vue-cli \u6A21\u5F0F</a></p></blockquote><p>\u6240\u4EE5\u8BF4\uFF0C\u5728 vue-cli 3.x \u4EE5\u540E\uFF0C\u5982\u679C\u9700\u8981\u6784\u5EFA\u591A\u73AF\u5883\u4E0B\u7684\u751F\u4EA7\u5305\uFF0C\u4E0D\u80FD\u901A\u8FC7\u8BBE\u7F6E <code>cross-env NODE_ENV=xxx</code> \u6765\u533A\u5206\uFF0C\u800C\u662F\u901A\u8FC7\u5EFA\u7ACB\u4E0D\u540C\u7684 .env \u6587\u4EF6\uFF0C\u7136\u540E\u6307\u5B9A\u4E0D\u540C\u7684 --mode \u503C\u6765\u83B7\u53D6\u3002</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4 mode=development \u5BF9\u5E94 .env.development</span>
  <span class="token property">&quot;serveYT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --mode xxx&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94 .env.xxx \u6587\u4EF6\uFF0C\u5982\u679C .env.xxx \u5185\u90E8\u6709\u8BBE\u7F6E NODE_ENV \u503C\u5219\u5FC5\u987B\u4FDD\u8BC1\u4E3A NODE_ENV=development\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u51FA\u73B0 NODE_ENV\uFF0C\u6B64\u65F6\u4F1A\u6839\u636E serve \u81EA\u52A8\u5C06 NODE_ENV \u8BBE\u4E3A development</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4 mode=production \u5BF9\u5E94 .env.production</span>
  <span class="token property">&quot;buildYT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode uat&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94 .env.uat \u6587\u4EF6\uFF0C\u5982\u679C .env.uat \u5185\u90E8\u6709\u8BBE\u7F6E NODE_ENV \u503C\u5219\u5FC5\u987B\u4FDD\u8BC1\u4E3A NODE_ENV=production\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u51FA\u73B0 NODE_ENV\uFF0C\u6B64\u65F6\u4F1A\u6839\u636E build \u81EA\u52A8\u5C06 NODE_ENV \u8BBE\u4E3A production</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5173\u4E8E vue-cli-service \u52A0\u8F7D .env \u6587\u4EF6\u7684\u4F18\u5148\u7EA7\u987A\u5E8F\uFF0C\u53EF\u4EE5\u67E5\u770B<a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">vue-cli \u73AF\u5883\u53D8\u91CF</a></p><div class="language-"><pre><code>.env                # \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165
.env.local          # \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565
.env.[mode]         # \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165
.env.[mode].local   # \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565
</code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-"><pre><code>// .env
VUE_APP_TITLE=My App

// .env.uat
NODE_ENV=production
VUE_APP_TITLE=My App (uat)
</code></pre></div><ul><li><code>vue-cli-service build</code> \u4F1A\u52A0\u8F7D\u53EF\u80FD\u5B58\u5728\u7684 .env\u3001.env.production \u548C .env.production.local \u6587\u4EF6\u7136\u540E\u6784\u5EFA\u51FA\u751F\u4EA7\u73AF\u5883\u5E94\u7528\u3002</li><li><code>vue-cli-service build --mode uat</code> \u4F1A\u5728 uat \u6A21\u5F0F\u4E0B\u52A0\u8F7D\u53EF\u80FD\u5B58\u5728\u7684 .env\u3001.env.uat \u548C .env.uat.local \u6587\u4EF6\u7136\u540E\u6784\u5EFA\u51FA\u751F\u4EA7\u73AF\u5883\u5E94\u7528\u3002</li></ul><p>\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6839\u636E <code>NODE_ENV</code>\uFF0C\u6784\u5EFA\u51FA\u7684\u5E94\u7528\u90FD\u662F\u751F\u4EA7\u73AF\u5883\u5E94\u7528\uFF0C\u867D\u7136 .env \u73AF\u5883\u672A\u6307\u660E NODE_ENV \u7684\u503C\uFF0C\u4F46\u662F\u5728 <code>vue-cli-service build</code> \u4E2D\u4F1A\u6839\u636E <code>build</code>\u6307\u4EE4\u9ED8\u8BA4\u5C06 <code>NODE_ENV=production</code>\u3002\u5728 uat \u7248\u672C\u4E2D\uFF0C.env.uat \u4F18\u4E8E .env \u6587\u4EF6\uFF0C\u6240\u4EE5 process.<wbr>env.VUE_APP_TITLE \u88AB\u8986\u5199\u6210\u4E86\u53E6\u4E00\u4E2A\u503C My App (uat)\u3002</p><h2 id="\u81EA\u5B9A\u4E49-vue-cli-plugin-xx-\u63D2\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49 vue-cli-plugin-xx \u63D2\u4EF6 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-vue-cli-plugin-xx-\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u7684\u9879\u76EE\u73AF\u5883\u4F7F\u7528 .env \u6587\u4EF6\u914D\u5408 vue-cli-service \u7684 mode \u6A21\u5F0F\u53EF\u4EE5\u6EE1\u8DB3\u9700\u6C42\u3002\u4F46\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u9700\u8981\u7684\u73AF\u5883\u6BD4\u8F83\u591A\uFF0C\u4F8B\u5982 dev/prod/qa/uat/poc\u7B49\uFF0C\u5982\u679C\u518D\u52A0\u4E0A\u4E00\u4E2A\u5176\u5B83\u53D8\u91CF\uFF0C\u5982\u67D0\u4E2A\u73AF\u5883\u4E0B\u662F\u5426\u542F\u7528 cas \u5355\u70B9\u767B\u5F55\uFF0C\u90A3\u5BF9\u5E94\u8D77\u6765\u5C31\u66F4\u591A\u3002\u8FD9\u65F6\u5982\u679C\u76F4\u63A5\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA.env.XXX\u6587\u4EF6\uFF0C\u663E\u5F97\u6574\u4E2A\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u7ED3\u6784\u53D8\u5927\uFF0C\u800C\u4E14.env \u6587\u4EF6\u4E5F\u6CA1\u6709\u6761\u7406\uFF0C\u56E0\u6B64\u901A\u5E38\u8003\u8651\u628A\u4E0D\u540C\u73AF\u5883\u4E0B\u7684\u53D8\u91CF\u6587\u4EF6\u5F52\u7C7B\u5230js\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u5E76\u4E14\u5728\u73AF\u5883\u5207\u6362\u7684\u5224\u65AD\u5904\u7406\u4F7F\u7528\u7F16\u7801\u5904\u7406\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5B9E\u9645\u9700\u6C42\uFF1A</p><ol><li>\u73AF\u5883\u533A\u5206\uFF1Adev/prod/qa/uat/poc</li><li>\u672C\u5730\u5F00\u53D1\u65F6\uFF0C\u8981\u6C42 dev-server \u7684 proxy \u4EE3\u7406\u7684\u76EE\u6807\u5730\u5740\u6307\u5411\u4E0D\u540C\u73AF\u5883\u7684 URL\u3002\u5982\uFF1A dev =&gt; <a href="http://dev.hep.com" target="_blank" rel="noopener noreferrer">dev.hep.com</a>; qa =&gt; <a href="http://qa.hep.com" target="_blank" rel="noopener noreferrer">qa.hep.com</a> \u7B49\u3002</li><li>\u65E0\u8BBA\u662F\u5F00\u53D1\u8FD8\u662F\u751F\u4EA7\u65F6\uFF0Cprod/qa/uat \u90FD\u8981\u53EF\u4EE5\u5F00\u542F\u6216\u5173\u95ED cas \u5355\u70B9\u767B\u5F55\uFF0C\u5E76\u4E14 prod \u4F7F\u7528\u751F\u4EA7\u7684 cas \u767B\u5F55\u7F51\u5740 <a href="http://cas.hep.com" target="_blank" rel="noopener noreferrer">cas.hep.com</a>\uFF0C\u800C qa/uat \u4F7F\u7528\u6D4B\u8BD5\u7684 cas \u767B\u5F55\u7F51\u5740 <a href="http://cas-test.hep.com" target="_blank" rel="noopener noreferrer">cas-test.hep.com</a>\u3002</li></ol><h3 id="\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528-env-\u6587\u4EF6\u914D\u5408-mode" tabindex="-1">\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528 .env \u6587\u4EF6\u914D\u5408 mode <a class="header-anchor" href="#\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528-env-\u6587\u4EF6\u914D\u5408-mode" aria-hidden="true">#</a></h3><p>\u9700\u8981\u6307\u5B9A\u4EE5\u4E0B\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-"><pre><code>// env.development
VUE_APP_TARGET_URL=dev.hep.com

// env.qa
VUE_APP_TARGET_URL=qa.hep.com
VUE_APP_OPEN_CAS= true
VUE_APP_CAS_URL=cas-test.hep.com

// env.uat
VUE_APP_TARGET_URL=uat.hep.com
VUE_APP_OPEN_CAS= true
VUE_APP_CAS_URL=cas-test.hep.com

// env.production
VUE_APP_TARGET_URL=www.hep.com
VUE_APP_OPEN_CAS= true
VUE_APP_CAS_URL=cas.hep.com
</code></pre></div><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dev:qa&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --mode qa&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;dev:uat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --mode uat&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build:qa&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode qa&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;build:uat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode uat&quot;</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528-envcong-js-\u6587\u4EF6\u548C-vue-config-js-\u4E2D\u5904\u7406" tabindex="-1">\u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528 envCong.js \u6587\u4EF6\u548C vue.config.js \u4E2D\u5904\u7406 <a class="header-anchor" href="#\u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528-envcong-js-\u6587\u4EF6\u548C-vue-config-js-\u4E2D\u5904\u7406" aria-hidden="true">#</a></h3><p>\u56E0\u4E3A NODE_ENV \u53D8\u91CF\u88AB\u9650\u5236\u53EA\u80FD\u4F5C\u4E3A vue-cli \u5185\u90E8\u5224\u65AD webpack \u6784\u5EFA\u6A21\u5F0F\u7684\u4F9D\u636E\uFF0C\u6240\u4EE5\u4E0D\u53EF\u80FD\u901A\u8FC7\u5B83\u662F\u5224\u65AD\u6784\u5EFA\u73AF\u5883\u3002\u5982\u679C\u4F7F\u7528 .env \u6587\u4EF6\u53E6\u5916\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E5F\u540C\u4E0A\u9762\u4E00\u6837\u4F1A\u51FA\u73B0\u5F88\u591A .env \u6587\u4EF6\u3002\u53CD\u800C\u6BD4\u65B9\u6848\u4E00\u66F4\u70E6\u7410\u3002</p><h3 id="\u65B9\u6848\u4E09\uFF1A\u81EA\u5B9A\u4E49-vue-cli-plugin-\u63D2\u4EF6\u5904\u7406" tabindex="-1">\u65B9\u6848\u4E09\uFF1A\u81EA\u5B9A\u4E49 vue-cli-plugin \u63D2\u4EF6\u5904\u7406 <a class="header-anchor" href="#\u65B9\u6848\u4E09\uFF1A\u81EA\u5B9A\u4E49-vue-cli-plugin-\u63D2\u4EF6\u5904\u7406" aria-hidden="true">#</a></h3><p>\u8981\u5904\u7406\u591A\u73AF\u5883\u95EE\u9898\uFF0C\u81F3\u59CB\u81F3\u7EC8\u90FD\u8981\u4ECE run-script \u7684\u547D\u4EE4\u884C\u4E2D\u4F20\u5165\u73AF\u5883\u53D8\u91CF\u3002\u800C vue-cli 3.x \u4EE5\u4E0A\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 vue-cli-plugin \u63D2\u4EF6\u5728 vue-cli-service \u670D\u52A1\u542F\u52A8\u4E4B\u524D\u5904\u7406\u903B\u8F91\u3002</p><p>\u9488\u5BF9\u4E0A\u8FF0\u95EE\u9898\uFF0C\u53EF\u4EE5\u62C6\u6210\u4E24\u4E2A\u9700\u6C42\uFF1A\u5F00\u53D1\u65F6\u7684\u672C\u5730\u670D\u52A1\u7684\u4EE3\u7406 \u548C cas \u5355\u70B9\u767B\u5F55\u95EE\u9898\u3002\u4E3A\u4E86\u89E3\u8026\uFF0C\u5206\u6210\u4E24\u4E2A\u63D2\u4EF6\u5904\u7406\u3002</p><blockquote><p><a href="https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97" target="_blank" rel="noopener noreferrer">vue-cli \u63D2\u4EF6\u5F00\u53D1\u6307\u5357</a></p></blockquote><p>vue-cli-plugin-xx \u63D2\u4EF6\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u4E00\u4E2A js \u6587\u4EF6\u5BFC\u81F4\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u5165\u53C2 api \u548C options\u3002</p><div class="language-js"><pre><code><span class="token comment">// vue-cli-plugin-xx</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">api<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u63D2\u4EF6\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u5728 package.json \u589E\u52A0 vuePlugins \u5C5E\u6027\uFF0C\u6CE8\u518C vue-cli \u63D2\u4EF6</p><div class="language-json"><pre><code><span class="token comment">// package.json</span>
<span class="token property">&quot;vuePlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./build/vue-cli-plugin-setcas.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./build/vue-cli-plugin-setenv.js&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u4E8E\u63D2\u4EF6\u5165\u53C2 options \u5C31\u662F vue-config.js \u4E2D\u914D\u7F6E\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EF\u4EE5\u63D2\u4EF6\u5185\u4FEE\u6539\u6216\u589E\u52A0 vue-config.js \u7684\u914D\u7F6E\u5185\u5BB9\u3002\u5177\u4F53\u5BF9\u8C61\u5C5E\u6027\uFF1A</p><blockquote><p><a href="https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/options.js" target="_blank" rel="noopener noreferrer">cli-service/lib/options.js</a></p></blockquote><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;publicPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;outputDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;assetsDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;indexPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;filenameHashing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;runtimeCompiler&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;transpileDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;productionSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parallel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;lintOnSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devServer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5165\u53C2 api \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u5BF9\u8C61\u5C5E\u6027\u7684\u5C5E\u6027\u548C\u539F\u578B\u5C5E\u6027\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u9ED8\u8BA4\u5C5E\u6027\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// api \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B id \u548C service \u5BF9\u8C61\uFF0C\u4E3B\u8981\u5173\u6CE8\u7684\u662F service \u5BF9\u8C61\u63D0\u4F9B\u7684\u53EF\u64CD\u4F5C\u5C5E\u6027\uFF0C\u4E5F\u5C31\u662F vue-cli-service \u670D\u52A1\u76F8\u5173\u7684\u63A5\u53E3</span>
<span class="token comment">// \u4EE5\u4E0B\u662Fvue-cli \u6784\u5EFA\u9879\u76EE\u9ED8\u8BA4\u7684 service \u5BF9\u8C61\uFF0C\u5982\u679C\u4F7F\u7528 api.registerCommand \u6CE8\u518C\u4E86\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u90A3 commands \u4F1A\u51FA\u73B0\u81EA\u5B9A\u4E49\u547D\u4EE4\u76F8\u5173\u53C2\u6570\u3002</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local:./setenv.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;initialized&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;context&quot;</span><span class="token operator">:</span> <span class="token string">&quot;E:\\\\develop\\\\vue3-demo&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpackChainFns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;webpackRawConfigFns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;devServerConfigFns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start development server&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve [options] [entry]&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;--open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open browser on server start&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--copy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;copy url to clipboard on server start&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--stdin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;close when stdin ends&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify env mode (default: development)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify host (default: 0.0.0.0)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify port (default: 8080)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--https&quot;</span><span class="token operator">:</span> <span class="token string">&quot;use https (default: false)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify the public network URL for the HMR client&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--skip-plugins&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comma-separated list of plugin names to skip for this run&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build for production&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build [options] [entry|pattern]&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;--mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify env mode (default: production)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--dest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify output directory (default: dist)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--modern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build app targeting modern browsers with auto fallback&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--no-unsafe-inline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build app without introducing inline scripts&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app | lib | wc | wc-async (default: app)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--inline-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;include the Vue module in the final bundle of library or web component target&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--formats&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list of output formats for library builds (default: commonjs,umd,umd-min)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name for lib or web-component mode (default: \\&quot;name\\&quot; in package.json or entry filename)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file name for output, only usable for &#39;lib&#39; target (default: value of --name)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--no-clean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;do not remove the dist directory before building the project&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--report&quot;</span><span class="token operator">:</span> <span class="token string">&quot;generate report.html to help analyze bundle content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--report-json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;generate report.json to help analyze bundle content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--skip-plugins&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comma-separated list of plugin names to skip for this run&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;watch for changes&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--stdin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;close when stdin ends&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;inspect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inspect internal webpack config&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service inspect [options] [...paths]&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;--mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify env mode (default: development)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--rule &lt;ruleName&gt;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inspect a specific module rule&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--plugin &lt;pluginName&gt;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inspect a specific plugin&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--rules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list all module rule names&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--plugins&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list all plugin names&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--verbose&quot;</span><span class="token operator">:</span> <span class="token string">&quot;show full function definitions in output&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--skip-plugins&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comma-separated list of plugin names to skip for this run&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;help&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint and fix source files&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;usage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint [options] [...files]&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;--format [formatter]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify formatter (default: codeframe)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--no-fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;do not fix errors or warnings&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--no-fix-warnings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fix errors, but do not fix warnings&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--max-errors [limit]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify number of errors to make build failed (default: 0)&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;--max-warnings [limit]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specify number of warnings to make build failed (default: Infinity)&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;details&quot;</span><span class="token operator">:</span> <span class="token string">&quot;For more options, see https://eslint.org/docs/user-guide/command-line-interface#options&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pkgContext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;E:\\\\develop\\\\vue3-demo&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pkg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3-demo&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;core-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.5&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0-beta.1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;@vue/babel-plugin-jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0-rc.3&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@vue/cli-plugin-babel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.4.0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@vue/cli-plugin-eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.4.0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@vue/cli-service&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.4.0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@vue/compiler-sfc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0-beta.1&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;babel-eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.1.0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.7.2&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;eslint-plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.0-alpha.0&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;vue-cli-plugin-vue-next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~0.1.3&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;vuePlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./setenv.js&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;readme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ERROR: No README data found!&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3-demo@0.1.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:commands/serve&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:commands/build&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:commands/inspect&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:commands/help&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:config/base&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:config/css&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:config/prod&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;built-in:config/app&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/cli-plugin-babel&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/cli-plugin-eslint&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-plugin-vue-next&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local:./setenv.js&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pluginsToSkip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;inspect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;projectOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;publicPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outputDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;assetsDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;indexPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;filenameHashing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;runtimeCompiler&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;transpileDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;productionSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;parallel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;lintOnSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;devServer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u67E5\u770B vue-cli \u6E90\u7801\uFF0Capi \u662F PluginAPI \u7684\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u539F\u578B\u5C5E\u6027\u53EF\u4EE5\u67E5\u770B\uFF1A</p><blockquote><p><a href="https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/PluginAPI.js" target="_blank" rel="noopener noreferrer">PluginAPI</a></p></blockquote><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">PluginAPI</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * @param {string} id - Id of the plugin.
   * @param {Service} service - A vue-cli-service instance.
   */</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
    <span class="token keyword">this</span><span class="token punctuation">.</span>service <span class="token operator">=</span> service
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">version</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Current working directory.
   */</span>
  <span class="token function">getCwd</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>context
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Resolve path for a project.
   *
   * @param {string} _path - Relative path from project root
   * @return {string} The resolved absolute path.
   */</span>
  <span class="token function">resolve</span> <span class="token punctuation">(</span><span class="token parameter">_path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>context<span class="token punctuation">,</span> _path<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Check if the project has a given plugin.
   *
   * @param {string} id - Plugin id, can omit the (@vue/|vue-|@scope/vue)-cli-plugin- prefix
   * @return {boolean}
   */</span>
  <span class="token function">hasPlugin</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token function">matchesPluginId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Register a command that will become available as \`vue-cli-service [name]\`.
   *
   * @param {string} name
   * @param {object} [opts]
   *   {
   *     description: string,
   *     usage: string,
   *     options: { [string]: string }
   *   }
   * @param {function} fn
   *   (args: { [string]: string }, rawArgs: string[]) =&gt; ?Promise
   */</span>
  <span class="token function">registerCommand</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> opts<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> opts <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fn <span class="token operator">=</span> opts
      opts <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>commands<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> fn<span class="token punctuation">,</span> <span class="token literal-property property">opts</span><span class="token operator">:</span> opts <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Register a function that will receive a chainable webpack config
   * the function is lazy and won&#39;t be called until \`resolveWebpackConfig\` is
   * called
   *
   * @param {function} fn
   */</span>
  <span class="token function">chainWebpack</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>webpackChainFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Register
   * - a webpack configuration object that will be merged into the config
   * OR
   * - a function that will receive the raw webpack config.
   *   the function can either mutate the config directly or return an object
   *   that will be merged into the config.
   *
   * @param {object | function} fn
   */</span>
  <span class="token function">configureWebpack</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>webpackRawConfigFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Register a dev serve config function. It will receive the express \`app\`
   * instance of the dev server.
   *
   * @param {function} fn
   */</span>
  <span class="token function">configureDevServer</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>devServerConfigFns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Resolve the final raw webpack config, that will be passed to webpack.
   *
   * @param {ChainableWebpackConfig} [chainableConfig]
   * @return {object} Raw webpack config.
   */</span>
  <span class="token function">resolveWebpackConfig</span> <span class="token punctuation">(</span><span class="token parameter">chainableConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">resolveWebpackConfig</span><span class="token punctuation">(</span>chainableConfig<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Resolve an intermediate chainable webpack config instance, which can be
   * further tweaked before generating the final raw webpack config.
   * You can call this multiple times to generate different branches of the
   * base webpack config.
   * See https://github.com/mozilla-neutrino/webpack-chain
   *
   * @return {ChainableWebpackConfig}
   */</span>
  <span class="token function">resolveChainableWebpackConfig</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">resolveChainableWebpackConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * Generate a cache identifier from a number of variables
   */</span>
  <span class="token function">genCacheConfig</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> partialIdentifier<span class="token punctuation">,</span> configFiles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u5B9E\u73B0\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u4E3B\u8981\u662F\u4FEE\u6539\u5DF2\u7ECF\u5B58\u5728\u7684 cli-service \u547D\u4EE4\u3002</p><blockquote><p><a href="https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E4%BF%AE%E6%94%B9%E5%B7%B2%E7%BB%8F%E5%AD%98%E5%9C%A8%E7%9A%84-cli-service-%E5%91%BD%E4%BB%A4" target="_blank" rel="noopener noreferrer">\u4FEE\u6539\u5DF2\u7ECF\u5B58\u5728\u7684 cli-service \u547D\u4EE4</a></p></blockquote><div class="language-js"><pre><code><span class="token comment">// vue-cli-plugin-setenv.js&#39;</span>
<span class="token keyword">const</span> devServerProxyFn <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./devServerProxy&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u53EF\u4EE5\u79F0\u5230\u5355\u72EC\u6587\u4EF6\u5F15\u5165</span>
<span class="token comment">// module.exports = (targetURL) =&gt; {</span>
<span class="token comment">//   return {</span>
<span class="token comment">//     // \u9700\u6C42\u7BA1\u63A7\u63A5\u53E3</span>
<span class="token comment">//     &#39;/pm/hep-pm-server/&#39;: {</span>
<span class="token comment">//       target: targetURL,</span>
<span class="token comment">//       ws: true,</span>
<span class="token comment">//       changeOrigin: true,</span>
<span class="token comment">//     },</span>
<span class="token comment">//     // \u6548\u80FD\u5E73\u53F0CI/CD</span>
<span class="token comment">//     &#39;/hepcore&#39;: {</span>
<span class="token comment">//       target: targetURL,</span>
<span class="token comment">//       ws: true,</span>
<span class="token comment">//       changeOrigin: true,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">PROXY_TARGET_MAPPER</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./envConfig&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u53EF\u4EE5\u79F0\u5230\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u4E2D envConfig</span>
<span class="token comment">// const PROXY_TARGET_MAPPER = {</span>
<span class="token comment">//   vm: &#39;http://test.hep.qinglight.com&#39;,</span>
<span class="token comment">//   docker: &#39;http://test.c-mdl5s.hep.dev.xxx.com&#39;,</span>
<span class="token comment">//   qa: &#39;http://qa.c-mdl5s.hep.dev.xxx.com&#39;,</span>
<span class="token comment">//   prod: &#39;http://dev.xxx.com&#39;,</span>
<span class="token comment">// }</span>

<span class="token keyword">function</span> <span class="token function">isEmptyObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setenv</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> args<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> target<span class="token punctuation">,</span> <span class="token constant">VUE_APP</span> <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token comment">/**
   * \u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u4F7F\u7528 vue-cli-service serve \u6784\u5EFA\u65F6\uFF0C\u6839\u636E\u4F20\u5165\u53C2\u6570 target \u5224\u65AD devServer \u4EE3\u7406\u7684\u76EE\u6807\u5730\u5740 targetURL
   * \u5751\uFF1A\u56E0\u4E3A target \u53EA\u5728 srver \u65F6\u4F20\u5165\uFF0C\u4F46\u662F\u6CA1\u6709\u5199\u5165 process.<wbr>env \u5BF9\u8C61\u4E2D\uFF0C\u6240\u4EE5\u4E0D\u7BA1\u662F\u751F\u4EA7\u73AF\u5883\u8FD8\u662F\u5F00\u53D1\u73AF\u5883\uFF0C\u4E1A\u52A1\u4EE3\u7801\u4E2D\u90FD\u4E0D\u8981\u518D\u4F9D\u8D56\u73AF\u5883\u53D8\u91CF\uFF1Aprocess.<wbr>env.VUE_APP_TARGRT_URL
   * --target=vm \u865A\u62DF\u673A(\u9ED8\u8BA4) docder \u5BB9\u5668 qa
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>env <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>target<span class="token punctuation">)</span> target <span class="token operator">=</span> <span class="token string">&#39;vm&#39;</span>
    <span class="token keyword">const</span> targetURL <span class="token operator">=</span> <span class="token constant">PROXY_TARGET_MAPPER</span><span class="token punctuation">[</span>target<span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;targetURL&#39;</span><span class="token punctuation">,</span> targetURL<span class="token punctuation">)</span>
    <span class="token keyword">const</span> devServerProxy <span class="token operator">=</span> <span class="token function">devServerProxyFn</span><span class="token punctuation">(</span>targetURL<span class="token punctuation">)</span>

    <span class="token comment">/**
     * \u5982\u679C options.devServer.proxy = {} \u662F\u7A7A\u5BF9\u8C61\u4F1A\u62A5\u9519
     * \u6240\u4EE5 Object.assign \u5904\u7406\u540E\u7684 proxy \u5FC5\u987B\u662F\u6709\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5373\u53EA\u8981\u4FDD\u8BC1 deveServerProxy \u662F\u4E00\u4E2A\u975E\u7A7A\u7684\u5BF9\u8C61\u5373\u53EF\u3002
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEmptyObject</span><span class="token punctuation">(</span>devServerProxy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>proxy <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>proxy <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>devServer<span class="token punctuation">.</span>proxy<span class="token punctuation">,</span> devServerProxy<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u63D0\u4F9B\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4E0D\u9700\u8981\u5B9A\u4E49 .env \u73AF\u5883\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\u5728\u4E1A\u52A1\u903B\u8F91\u4E2D\u4F7F\u7528\uFF0C\u53EA\u9650\u5E03\u5C14\u503C\uFF0C\u6709\u4F20\u5165\u5219\u4E3A true\uFF0C\u672A\u4F20\u5165 false\u3002
   * \u5E76\u4E14\u505A\u5982\u4E0B\u7EA6\u5B9A\uFF1A
   * 1. \u5728\u6784\u5EFA\u547D\u4EE4\u4E2D\u4F20\u5165\u53D8\u91CF
   *    1.1 \u4F20\u5165\u4E00\u4E2A\uFF1Avue-cli-service build --VUE_APP=IS_QIANKUN&quot;
   *    1.2 \u4F20\u5165\u591A\u4E2A\uFF1Avue-cli-service build --VUE_APP=IS_QIANKUN --VUE_APP=IS_ANALYZ&quot;
   * 2. \u4E1A\u52A1\u4EE3\u7801\u4E2D\u5B9E\u73B0\u53D8\u91CF\uFF0C\u90FD\u6709 VUE_APP \u524D\u7F00\uFF0C\u5373\uFF1A
   *    process.<wbr>env.VUE_APP_IS_QIANKUN
   *    process.<wbr>env.VUE_APP_IS_ANALYZ
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token constant">VUE_APP</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> <span class="token constant">VUE_APP</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">VUE_APP_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">VUE_APP</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">VUE_APP_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">VUE_APP</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">api<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> commands <span class="token operator">=</span> api<span class="token punctuation">.</span>service<span class="token punctuation">.</span>commands
  <span class="token keyword">const</span> envKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>commands<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> env <span class="token keyword">of</span> envKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> fn <span class="token punctuation">}</span> <span class="token operator">=</span> commands<span class="token punctuation">[</span>env<span class="token punctuation">]</span>
    commands<span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setenv</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> args<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// vue-cli-plugin-setcas.js</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u5751\uFF1A\u4FDD\u8BC1\u672A\u5C3E\u6DFB\u52A0 / \u56E0\u4E3A\u5728 request.js \u548C nginx.conf \u4E2D\u6709\u7528\u5230
 */</span>
<span class="token keyword">const</span> <span class="token constant">CAS_URL_MAPPER</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;https://test-cas.hundsun.com/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hs</span><span class="token operator">:</span> <span class="token string">&#39;https://hs-cas.hundsun.com/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">poc</span><span class="token operator">:</span> <span class="token string">&#39;http://cas.devops.hs.net/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setCas</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u4E3B\u5E94\u7528 Frame \u4F7F\u7528 vue-cli-service build \u6784\u5EFA\u65F6\uFF0C\u9700\u8981\u6839\u636E\u4F20\u5165\u7684 cas \u7684\u503C\u66F4\u6539 nginx.conf \u914D\u7F6E\u53C2\u6570 __casHost__
   * \u5E76\u4E14\u8981\u914D\u5408\u5728\u6D41\u6C34\u7EBFnode\u6784\u5EFA\u4E3B\u5E94\u7528 Frame \u65F6\u589E\u52A0\u547D\u4EE4\uFF1Acp  nginx.conf dist/
   * \u540C\u6B65\u5728\u6839\u76EE\u5F55\u4E0B\u7684 dockerfile \u6587\u4EF6\u66F4\u6539\u547D\u4EE4\uFF1ACOPY /home/cicd-web/frame/nginx.conf /etc/nginx/nginx.conf
   *
   * \u4E0D\u7BA1\u5F00\u53D1\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\uFF0C\u5224\u65AD\u662F\u5426\u9700\u8981\u5F00\u542F cas \u767B\u5F55\uFF0C\u5E76\u4E14\u6839\u636E\u5B83\u7684\u503C\u5224\u65AD\u4F7F\u7528 test-cas \u8FD8\u662F hs-cas \u8FD8\u662F ip
   * --cas=test / hs / poc
   */</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> cas <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>cas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_USE_CAS_LOGIN</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_CAS_URL</span> <span class="token operator">=</span> <span class="token constant">CAS_URL_MAPPER</span><span class="token punctuation">[</span>cas<span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_USE_CAS_LOGIN</span> <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>env <span class="token operator">===</span> <span class="token string">&#39;build&#39;</span> <span class="token operator">&amp;&amp;</span> cas<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;env build cas&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_USE_CAS_LOGIN</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_CAS_URL</span><span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./nginx.conf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err

      data <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">__casHost__</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_CAS_URL</span> <span class="token operator">||</span> <span class="token constant">CAS_URL_MAPPER</span><span class="token punctuation">.</span>hs<span class="token punctuation">)</span>
      fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./nginx.conf&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> err
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nginx.conf\u6587\u4EF6\u4E2D\u53D8\u91CF\uFF1A__casHost__\u5199\u5165\u6210\u529F&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> build <span class="token punctuation">}</span> <span class="token operator">=</span> api<span class="token punctuation">.</span>service<span class="token punctuation">.</span>commands
  <span class="token keyword">const</span> fn <span class="token operator">=</span> build<span class="token punctuation">.</span>fn
  build<span class="token punctuation">.</span><span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setCas</span><span class="token punctuation">(</span><span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 package.json \u4E2D\u7684 run-script \u66F4\u6539\u4E3A\uFF1A</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --target=vm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:docker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --target=docker --cas=test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:qa&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --target=qa --cas=test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --target=prod --cas=hs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:cas-hs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --cas=hs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:cas-test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --cas=test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:cas-poc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --cas=poc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:sftp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build &amp;&amp; gulp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sftp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gulp&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="vue-cli-\u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u540C\u6B65\u53EF\u4EE5\u5728-node-\u73AF\u5883\u4E2D\u548C\u5BA2\u6237\u7AEF-vue-\u6587\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1">vue-cli \u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u540C\u6B65\u53EF\u4EE5\u5728 node \u73AF\u5883\u4E2D\u548C\u5BA2\u6237\u7AEF .vue \u6587\u4EF6\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#vue-cli-\u4E2D\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u5982\u4F55\u540C\u6B65\u53EF\u4EE5\u5728-node-\u73AF\u5883\u4E2D\u548C\u5BA2\u6237\u7AEF-vue-\u6587\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5982\u679C\u73AF\u5883\u53D8\u91CF\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u6587\u4EF6\u540C\u6B65\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528 <code>webpack.DefinePlugin</code> \u5B9A\u4E49\u3002\u4F46\u5728 @vue/cli@3.x \u7684\u5DE5\u7A0B\u9879\u76EE\u4E2D\uFF0C\u5728 .env \u6587\u4EF6\u4E2D\u5B9A\u4E49\u4EE5 <code>VUE_APP_XX</code>\u5F00\u5934\u7684\u53D8\u91CF\uFF0C\u811A\u624B\u67B6\u5185\u90E8\u4F1A\u81EA\u52A8\u4F7F\u7528 <code>DefinePlugin</code> \u63D2\u4EF6\u5B9A\u4E49\u4E3Anode \u7AEF\u548C\u6D4F\u89C8\u5668\u7AEF\u6587\u4EF6\u90FD\u53EF\u4F7F\u7528\u3002</p><blockquote><p>\u53EA\u6709 NODE_ENV\uFF0CBASE_URL \u548C\u4EE5 VUE_APP_ \u5F00\u5934\u7684\u53D8\u91CF\u5C06\u901A\u8FC7 webpack.DefinePlugin \u9759\u6001\u5730\u5D4C\u5165\u5230\u5BA2\u6237\u7AEF\u4FA7\u7684\u4EE3\u7801\u4E2D</p></blockquote><p>\u770B\u4E0B\u6E90\u7801\u4E2D\u5BF9\u8FD9\u4E9B\u53D8\u91CF\u7684\u5904\u7406\uFF1A</p><ol><li>\u73AF\u5883\u53D8\u91CF\u5B9A\u4E49\u5230 node \u7AEF\u7684 <code>process.<wbr>env</code> \u5BF9\u8C61\u4E0A</li></ol><div class="language-js"><pre><code><span class="token comment">// @vue/cli-server/lib/Server.js \u4E2D init \u51FD\u6570</span>
<span class="token comment">/**
   * service.init \u4E3B\u8981\u6709\u4E09\u4E2A\u529F\u80FD\uFF1A
   * 1. loadEnv \u52A0\u8F7D\u5BF9\u5E94\u6A21\u5F0F\u4E0B\u672C\u5730\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6
   * 2. loadUserOptions \u89E3\u6790 vue.config.js \u6216\u8005 package.vue
   * 3. apply \u6267\u884C\u6240\u6709\u88AB\u52A0\u8F7D\u7684\u63D2\u4EF6\uFF0C\u8FD9\u91CC\u5C31\u662F\u8BE5\u547D\u4EE4\u4E0B\u52A8\u6001\u751F\u6210 webpack \u914D\u7F6E config \u5E76\u6267\u884C
   */</span>
  <span class="token function">init</span> <span class="token punctuation">(</span><span class="token parameter">mode <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_CLI_MODE</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>initialized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>initialized <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode

    <span class="token comment">// load mode .env</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// load base .env</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token punctuation">}</span>

<span class="token comment">/**
 * \u52A0\u8F7D\u672C\u5730\u7684\u73AF\u5883\u6587\u4EF6\uFF0C\u73AF\u5883\u6587\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u8BBE\u7F6E\u67D0\u4E2A\u6A21\u5F0F\u4E0B\u7279\u6709\u7684\u53D8\u91CF
 * \u52A0\u8F7D\u73AF\u5883\u53D8\u91CF\u5176\u5B9E\u8981\u6CE8\u610F\u7684\u5C31\u662F\u4F18\u5148\u7EA7\u7684\u95EE\u9898\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D load \u51FD\u6570\u8C03\u7528\u987A\u5E8F\u5DF2\u7ECF\u4F53\u73B0\u4E86\uFF1A
 * \u5148\u52A0\u8F7D .env.mode.local\uFF0C\u7136\u540E\u52A0\u8F7D .env.mode \u6700\u540E\u518D\u52A0\u8F7D .env
 * \u7531\u4E8E dotenv-expand.js \u5E93\u4E2D\u6E90\u7801\uFF1A(https://github.com/motdotla/dotenv-expand/blob/master/lib/main.js)
 * value = environment.hasOwnProperty(key) ? environment[key] : (config.parsed[key] || &#39;&#39;)
 * \u6240\u4EE5\u73AF\u5883\u53D8\u91CF\u503C\u4E0D\u4F1A\u88AB\u8986\u76D6\uFF0C\u5373 .env.mode.local \u7684\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C.env.mode \u6B21\u4E4B\uFF0C.env \u4F18\u5148\u7EA7\u6700\u4F4E
 * \u53E6\u5916\uFF0C\u6CE8\u610F\u4E00\u70B9\uFF1A.env \u73AF\u5883\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\u4E0D\u4F1A\u8986\u76D6\u547D\u4EE4\u884C\u4E2D\u6267\u884C\u65F6\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u6BD4\u5982 corss-env NODE_ENV=development vue-cli-service serve
 * 
 * \u603B\u4E4B\u4E00\u53E5\u8BDD\uFF0C\u66F4\u65E9\u8BBE\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u4E0D\u4F1A\u88AB\u540E\u9762\u8BBE\u7F6E\u7684\u8986\u76D6\u3002
 * 
 * .env.mode.local \u4E0E .env.mode \u7684\u533A\u522B\u5C31\u662F\u524D\u8005\u4F1A\u88AB git \u8FFD\u8E2A\u6587\u4EF6\u65F6\u5FFD\u7565\u6389\u3002
 * 
 * \u5173\u4E8E\u73AF\u5883\u53D8\u91CF [node-expand_\u4F7F\u7528dotenv-expand\u638C\u63E1Node.js\u4E0A\u7684\u73AF\u5883\u53D8\u91CF](https://blog.csdn.net/weixin_26737625/article/details/108648901)
 */</span>
  <span class="token function">loadEnv</span> <span class="token punctuation">(</span><span class="token parameter">mode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;vue:env&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// path/.env.production || path/.env.development || ...</span>
    <span class="token keyword">const</span> basePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token comment">// path/.env.local.production</span>
    <span class="token keyword">const</span> localPath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.local</span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token parameter">envPath</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> env <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> envPath<span class="token punctuation">,</span> <span class="token literal-property property">debug</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">/**
         * dotenv-expand.js \u6E90\u7801\u6BD4\u8F83\u77ED\u7684 46\u884C\uFF1A(https://github.com/motdotla/dotenv-expand/blob/master/lib/main.js)
         * \u6709\u4E00\u53E5\u6838\u5FC3\u4EE3\u7801\uFF1A
         * var environment = config.ignoreProcessEnv ? {} : process.<wbr>env
         * value = environment.hasOwnProperty(key) ? environment[key] : (config.parsed[key] || &#39;&#39;)
         * for (var processKey in config.parsed) {
         *   environment[processKey] = config.parsed[processKey]
         * }
         * \u5373\u5DF2\u5B58\u5728 process.<wbr>env[key]=value \u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u4E0D\u4F1A\u88AB\u8986\u76D6
         * \u6240\u4EE5\u5148\u52A0\u8F7D .env.development \u518D\u52A0\u8F7D .env
         * \u5373 .env.development \u53D8\u91CF\u4F18\u5148\u7EA7\u9AD8\u4E8E .env
         */</span>
        <span class="token function">dotenvExpand</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token comment">// \u4F1A\u628A .env \u8BBE\u7F6E\u7684\u53D8\u91CF\u6302\u8F7D\u5230 process.<wbr>env \u5BF9\u8C61\u4E0A</span>
        <span class="token function">logger</span><span class="token punctuation">(</span>envPath<span class="token punctuation">,</span> env<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// only ignore error if file is not found</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;ENOENT&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">load</span><span class="token punctuation">(</span>localPath<span class="token punctuation">)</span>
    <span class="token function">load</span><span class="token punctuation">(</span>basePath<span class="token punctuation">)</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
  <span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u73AF\u5883\u53D8\u91CF\u901A\u8FC7 DefinePlugin \u6CE8\u5165\u5BA2\u6237\u7AEF</li></ol><div class="language-js"><pre><code><span class="token comment">// @vue/cli-service/lib/util/resolveClientEnv.js</span>
<span class="token keyword">const</span> prefixRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^VUE_APP_</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// \u6240\u4EE5\u53EA\u6709\u4EE5 VUE_APP_ \u5F00\u5934\u7684\u624D\u4F1A\u88AB\u6CE8\u5165\u5230 DefinePlugin \u4E2D</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">resolveClientEnv</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> raw</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prefixRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">||</span> key <span class="token operator">===</span> <span class="token string">&#39;NODE_ENV&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span> <span class="token operator">=</span> options<span class="token punctuation">.</span>publicPath

  <span class="token keyword">if</span> <span class="token punctuation">(</span>raw<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> env
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>env<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;process.<wbr>env&#39;</span><span class="token operator">:</span> env
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u4E2A\u51FD\u6570\u5728\u4E24\u4E2A\u5730\u65B9\u4F7F\u7528\uFF0C\u5373\u751F\u6210 webpack \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D config\uFF1Abase.js / app.js</span>

<span class="token comment">// @vue/cli-serverlib/config/base.js</span>
<span class="token keyword">const</span> resolveClientEnv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../util/resolveClientEnv&#39;</span><span class="token punctuation">)</span>
webpackConfig
  <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;define&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>webpack<span class="token punctuation">.</span>DefinePlugin<span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token function">resolveClientEnv</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// @vue/cli-serverlib/config/app.js</span>
<span class="token comment">// HTML plugin</span>
<span class="token keyword">const</span> resolveClientEnv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../util/resolveClientEnv&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> htmlOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> api<span class="token punctuation">.</span>service<span class="token punctuation">.</span>pkg<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
  <span class="token function-variable function">templateParameters</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> assets<span class="token punctuation">,</span> assetTags<span class="token punctuation">,</span> pluginOptions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// enhance html-webpack-plugin&#39;s built in template params</span>
    <span class="token keyword">let</span> stats
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// make stats lazy as it is expensive</span>
      <span class="token comment">// TODO: not sure if it&#39;s still needed as of &lt;https://github.com/jantimon/html-webpack-plugin/issues/780#issuecomment-390651831&gt;</span>
      <span class="token keyword">get</span> <span class="token function">webpack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> stats <span class="token operator">||</span> <span class="token punctuation">(</span>stats <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">compilation</span><span class="token operator">:</span> compilation<span class="token punctuation">,</span>
      <span class="token literal-property property">webpackConfig</span><span class="token operator">:</span> compilation<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
      <span class="token literal-property property">htmlWebpackPlugin</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">files</span><span class="token operator">:</span> assets<span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> pluginOptions
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">resolveClientEnv</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* raw */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

 webpackConfig
  <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HTMLPlugin<span class="token punctuation">,</span> <span class="token punctuation">[</span>htmlOptions<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u5177\u4F53\u53C2\u8003<a href="https://blog.csdn.net/icewfz/article/details/76640319" target="_blank" rel="noopener noreferrer">Node \u73AF\u5883\u53D8\u91CF env.NODE_ENV \u4E4Bwebpack\u5E94\u7528</a></li><li>vue-cli-service \u4E3A\u4EC0\u4E48\u53EA\u80FD\u4F7F\u7528 VUE_APP \u5F00\u5934\u7684\u53D8\u91CF<a href="https://segmentfault.com/a/1190000016194157" target="_blank" rel="noopener noreferrer">vue-cli 3 \u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F\u914D\u7F6E\u5B9E\u8DF5\u4E0E\u6E90\u7801\u5206\u6790</a></li><li>.env \u6587\u4EF6\u89E3\u6790\u811A\u672C <a href="https://github.com/motdotla/dotenv/blob/master/lib/main.js" target="_blank" rel="noopener noreferrer">dotenv</a></li></ul>`,125),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{v as __pageData,q as default};
