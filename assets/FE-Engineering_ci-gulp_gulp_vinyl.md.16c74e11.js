import{_ as n,c as s,o as a,a as e}from"./app.f1e974b0.js";const m='{"title":"Gulp \u865A\u62DF\u6587\u4EF6\u683C\u5F0F Vinyl","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vinyl","slug":"vinyl"},{"level":2,"title":"Vinyl-fs","slug":"vinyl-fs"},{"level":2,"title":"Stream \u8F6C\u6362","slug":"stream-\u8F6C\u6362"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Engineering/ci-gulp/gulp_vinyl.md"}',t={},o=e(`<h1 id="gulp-\u865A\u62DF\u6587\u4EF6\u683C\u5F0F-vinyl" tabindex="-1">Gulp \u865A\u62DF\u6587\u4EF6\u683C\u5F0F Vinyl <a class="header-anchor" href="#gulp-\u865A\u62DF\u6587\u4EF6\u683C\u5F0F-vinyl" aria-hidden="true">#</a></h1><p><code>Gulp</code>\u662F\u57FA\u4E8E <code>Node Stream</code>\u7684\u6784\u5EFA\u5DE5\u5177\uFF0C\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u662F <code>Gulp</code>\u672C\u8EAB\u4F7F\u7528\u4E86 <code>Node Stream</code>\u3002</p><p>\u4E0A\u4E00\u7AE0\u7B80\u5355\u4ECB\u7ECD\u4E86 <code>Stream</code>\u7684\u6982\u5FF5\u3002\u867D\u7136 <code>Node</code>\u4E2D\u53EF\u4EE5\u901A\u8FC7<code>require(&#39;stream&#39;)</code>\u76F4\u63A5\u5F15\u7528<code>Stream</code>\uFF0C\u4F46\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\u5F88\u5C11\u4F1A\u9700\u6C42\u8FD9\u6837\u76F4\u63A5\u4F7F\u7528\u5E95\u5C42\u7684<code>Stream</code>\u3002\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7528\u7684\u90FD\u662F <code>Stream Consumers \u6D41\u7684\u6D88\u8D39\u8005</code>\uFF0C\u4E5F\u5C31\u662F\u5177\u6709<code>Stream</code>\u7279\u6027\u7684\u5404\u79CD\u5B50\u7C7B\u3002</p><p>\u6BD4\u5982<code>Node</code>\u4E2D\u5C31\u6709\u8BB8\u591A\u6838\u5FC3\u6A21\u5757\u7528\u5230\u4E86<code>Stream</code>\uFF0C\u5B83\u4EEC\u5C31\u662F<code>Stream Consumers</code>\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u7684HTTP\uFF1A \u8BF7\u6C42\u670D\u52A1\u5668\u4F1A\u4EA7\u751F\u53EF\u5199\u6D41\uFF0C\u63A5\u6536\u670D\u52A1\u5668\u54CD\u5E94\u4EA7\u751F\u53EF\u8BFB\u6D41</li><li>\u670D\u52A1\u5668\u7684HTTP\uFF1A \u63A5\u53D7\u5BA2\u6237\u7684\u8BF7\u6C42\u662F\u53EF\u8BFB\u6D41\uFF0C\u54CD\u5E94\u5BA2\u6237\u7AEF\u662F\u53EF\u5199\u6D41</li><li>\u6587\u4EF6\u64CD\u4F5Cfs\uFF1A \u521B\u5EFA\u53EF\u5199\u6D41<code>fs.createWriteStream()</code>\uFF0C\u521B\u5EFA\u53EF\u8BFB\u6D41<code>fs.createReadStream()</code></li><li>node\u7684\u8F93\u5165\u8F93\u51FA\uFF1A \u8F93\u5165\u4E3A\u53EF\u8BFB\u6D41<code>process.stdin</code>\uFF0C\u8F93\u51FA\u4E3A\u53EF\u5199\u6D41<code>process.stdout </code>\u6216 <code>process.stderr</code></li><li>\u8FD8\u6709\u5176\u5B83 <code>crypto</code>\u3001<code>zlib</code>\u3001<code>TCP socket</code>\u3001<code>child_process</code>\u5B50\u8FDB\u7A0B\u64CD\u4F5C\u7B49</li></ul><p>\u6240\u4EE5<code>Gulp</code>\u4F7F\u7528\u7684<code>Stream</code>\u4E5F\u4E0D\u662F\u539F\u751F\u7684<code>Node Stream</code>\uFF0C\u5B9E\u9645\u4E0A <code>gulp.src / gulp.dest</code>\u4EE5\u53CA\u63D2\u4EF6\u64CD\u4F5C\u7684\u6D41\u5E94\u8BE5\u53EB\u505A<code>Vinyl File Object Stream</code>\uFF0C\u4E5F\u7B97\u662F\u4E00\u79CD<code>Stream Consumers</code>\u3002\u900F\u8FC7 <code>gulp</code>\u7684\u6E90\u7801\u53D1\u73B0\uFF0C\u5185\u90E8\u4F9D\u8D56\u7684\u5176\u5B9E\u90FD\u662F\u540C\u4E00\u79CD\u6D41\u6A21\u5F0F<code>vinyl-fs</code>\u3002</p><blockquote><p><code>Stream Consumers</code> &gt;&gt; <code>Stream</code>\u7EE7\u627F\u4E8E<code>Node</code>\u4E8B\u4EF6\u5BF9\u8C61<code>EventEmitter</code>\u3002\u5373 <code>Stream</code>\u662F <code>EventEmitter</code>\u7684\u5B9E\u4F8B\u3002</p></blockquote><div class="language-js"><pre><code><span class="token comment">// gulp \u4F9D\u8D56\u7684\u6700\u4E3B\u8981\u7684\u4E24\u4E2A\u6838\u5FC3\u6A21\u5757</span>
<span class="token keyword">var</span> Undertaker <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;undertaker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> vfs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vinyl-fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D gulp4.0 \u6240\u4F7F\u7528\u7684 vinyl-fs \u7248\u672C\u662F v2.0.0</span>

util<span class="token punctuation">.</span><span class="token function">inherits</span><span class="token punctuation">(</span>Gulp<span class="token punctuation">,</span> Undertaker<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undertaker \u5B9E\u73B0\u4E86 task / series / parallel</span>
<span class="token class-name">Gulp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>src <span class="token operator">=</span> vfs<span class="token punctuation">.</span>src<span class="token punctuation">;</span>
<span class="token class-name">Gulp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>dest <span class="token operator">=</span> vfs<span class="token punctuation">.</span>dest<span class="token punctuation">;</span>
</code></pre></div><p><code>vinyl-fs </code>\u5176\u5B9E\u662F\u5728<code>vinyl</code>\u6A21\u5757\u7684\u57FA\u7840\u4E0A\u505A\u4E86\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u4E86\u89E3 <code>vinyl</code>\u3002</p><h2 id="vinyl" tabindex="-1"><code>Vinyl</code> <a class="header-anchor" href="#vinyl" aria-hidden="true">#</a></h2><p><code>Vinyl</code>\u865A\u62DF\u6587\u4EF6\u683C\u5F0F\uFF0C\u53EF\u4EE5\u628A\u5B83\u770B\u505A\u662F\u4E00\u4E2A\u6587\u4EF6\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u901A\u8FC7\u5B83\u53EF\u4EE5\u8F7B\u677E\u6784\u5EFA\u5355\u4E2A\u6587\u4EF6\u7684<strong>\u5143\u6570\u636E\u63CF\u8FF0\u5BF9\u8C61</strong><code>metadata object</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5728 gulp/Vinyl \u6E90\u7801\u4E2D\u53EF\u4EE5\u770B\u5230 Vinyl \u88AB\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u6784\u9020\u51FD\u6570 File\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E9B\u63CF\u8FF0\u6587\u4EF6\u7684\u5C5E\u6027\u548C\u539F\u578B\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// \u8BFB\u53D6\u7684\u672C\u5730\u6587\u4EF6 file</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>stat <span class="token operator">=</span> file<span class="token punctuation">.</span>stat <span class="token operator">||</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>contents <span class="token operator">=</span> file<span class="token punctuation">.</span>contents <span class="token operator">||</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>cwd <span class="token operator">=</span> file<span class="token punctuation">.</span>cwd <span class="token operator">||</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> file<span class="token punctuation">.</span>base<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_isVinyl <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_symlink <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7701\u7565...</span>
<span class="token punctuation">}</span>
<span class="token class-name">File</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isBuffer <span class="token operator">=</span> fn
<span class="token class-name">File</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isStream <span class="token operator">=</span> fn
<span class="token class-name">File</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>isNull <span class="token operator">=</span> fn
<span class="token comment">// \u7701\u7565...</span>
</code></pre></div><p>\u901A\u8FC7<code>Vinyl</code>\u751F\u6210\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u83B7\u53D6\u5230\u8BE5\u6587\u4EF6\u6240\u5BF9\u5E94\u7684\u6570\u636E\u5185\u5BB9*\uFF08Buffer\u7C7B\u578B\uFF09*\u3001\u8DEF\u5F84\u3001\u6587\u4EF6\u540D\u7B49\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5B98\u7F51\u793A\u4F8B</span>
<span class="token keyword">const</span> Vinyl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vinyl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vinyl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cwd</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/test/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/test/file.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">contents</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span><span class="token string">&#39;var x = 123&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

file<span class="token punctuation">.</span>relative <span class="token operator">===</span> <span class="token string">&#39;file.js&#39;</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span>contents<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;var x = 123&#39;</span>
file<span class="token punctuation">.</span>dirname <span class="token operator">===</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span>basename <span class="token operator">===</span> <span class="token string">&#39;file.js&#39;</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span>stem <span class="token operator">===</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span>extname <span class="token operator">=</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">;</span>
file<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">&#39;/specs/file.js&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong><code>Vinyl</code>\u7684\u610F\u4E49</strong></p><p><code>Gulp</code>\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u4F7F\u7528 <code>Node Stream</code>\u5462\uFF1F</p><div class="language-js"><pre><code>gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;./styles/**/*.css&#39;</span><span class="token punctuation">)</span>
  		<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;./stylesheets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u770B\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u867D\u7136\u8FD9\u6BB5\u4EE3\u7801\u6CA1\u6709\u7528\u5230\u4EFB\u4F55\u63D2\u4EF6\uFF0C\u53EA\u7528\u5230\u6700\u57FA\u672C\u7684<code>gulp.src / gulp.dest</code>\u3002\u8FD9\u6BB5\u4EE3\u7801\u662F\u6709\u6548\u679C\u7684\uFF0C\u5C31\u662F\u5C06\u4E00\u4E2A\u76EE\u5F55\u4E0B\u7684\u5168\u90E8\u6837\u5F0F\u6587\u4EF6\u90FD\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u76EE\u5F55\uFF0C\u8FD9\u5176\u4E2D\u6700\u91CD\u8981\u7684\u4E00\u70B9\uFF0C\u90A3\u5C31\u662F\u539F\u76EE\u5F55\u4E0B\u6240\u6709\u7684\u6587\u4EF6\u6811\uFF0C\u5305\u542B\u5B50\u76EE\u5F55\u3001\u6587\u4EF6\u540D\u7B49\u4FE1\u606F\u90FD\u539F\u5C01\u4E0D\u52A8\u7684\u4FDD\u7559\u590D\u5236\u4E86\u53E6\u4E00\u4E2A\u76EE\u5F55\u4E0B\u3002</p><p>\u4F46\u666E\u901A\u7684 <code>Node Stream</code>\u53EA\u4F20\u8F93 <code>String</code>\u6216<code>Buffer</code>\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u53EA\u5173\u6CE8\u4E0A\u8FF0\u6587\u4EF6\u7684\u5185\u5BB9\u90E8\u5206\u3002\u4F46<code>Gulp</code>\u4E0D\u53EA\u7528\u5230\u4E86\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u800C\u4E14\u8FD8\u7528\u5230\u4E86\u8FD9\u4E2A\u6587\u4EF6\u7684\u76F8\u5173\u65E0\u4FE1\u606F\uFF0C\u6BD4\u5982\u8DEF\u5F84\u3002\u56E0\u4E3A <code>Gulp</code>\u7684<code>Stream</code>\u662F\u5BF9\u8C61\u98CE\u683C\u7684\uFF0C\u4E5F\u5C31\u662F<code>Vinyl File Object Steam</code>\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48 <code>Gulp</code>\u7C7B\u578B\u7684<code>Stream Consumers</code>\u62E5\u6709<code>contents / path / base</code>\u8FD9\u4E9B\u5C5E\u6027\u4E86\u3002</p><h2 id="vinyl-fs" tabindex="-1"><code>Vinyl-fs</code> <a class="header-anchor" href="#vinyl-fs" aria-hidden="true">#</a></h2><p>Vinyl \u867D\u7136\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u6765\u63CF\u8FF0\u4E00\u4E2A\u6587\u4EF6\u3001\u8BBE\u7F6E\u6216\u83B7\u53D6\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u4F46\u8FD8\u6CA1\u80FD\u4FBF\u6377\u5730\u4E0E<code>Node</code>\u7684\u6587\u4EF6\u7CFB\u7EDF<code>fs</code>\u8FDB\u884C\u63A5\u5165\u3002</p><p>\u6211\u4EEC\u5E0C\u671B\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26\u7684\u5F62\u5F0F\u6765\u7B80\u5355\u5730\u5339\u914D\u5230\u60F3\u8981\u7684\u6587\u4EF6\uFF0C\u628A\u5B83\u4EEC\u8F6C\u4E3A\u53EF\u4EE5\u5904\u7406\u7684 Streams\uFF0C\u505A\u4E00\u756A\u52A0\u5DE5\u540E\uFF0C\u518D\u628A\u8FD9\u4E9B Streams \u8F6C\u6362\u4E3A\u5904\u7406\u5B8C\u7684\u6587\u4EF6\u3002</p><p><code>Vinyl-fs</code> \u5C31\u662F\u5B9E\u73B0\u8FD9\u79CD\u9700\u6C42\u7684\u4E00\u4E2A <code>Vinyl</code> \u9002\u914D\u5668\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> vfs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vinyl-fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

vfs<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;./js/**/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!./js/vendor/*.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;./output&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>Vinyl-fs</code> \u7684 <code>.src</code> \u63A5\u53E3\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u901A\u914D\u7B26\uFF0C\u5C06\u5339\u914D\u5230\u7684\u6587\u4EF6\u8F6C\u4E3A <code>Vinyl File Object Stream</code>\uFF0C\u800C <code>.dest</code> \u63A5\u53E3\u53C8\u80FD\u6D88\u8D39\u8FD9\u4E2A <code>Stream</code>\uFF0C\u5E76\u751F\u6210\u5BF9\u5E94\u6587\u4EF6\u3002</p><p>\u5373 <code>Gulp.src</code>\u8BFB\u53D6\u6587\u4EF6\u65F6\uFF0C\u5C06\u751F\u6210\u4E00\u4E2A <code>Vinyl</code>\u5BF9\u8C61\u6765\u8868\u793A\u6587\u4EF6\uFF0C\u5305\u62EC\u6587\u4EF6\u8DEF\u5F84\u3001\u5185\u5BB9\u548C\u5176\u5B83\u6587\u4EF6\u65E0\u6570\u636E\u3002\u8FD9\u4E2A <code>Vinyl</code>\u5BF9\u8C61\u53EF\u4EE5\u4F7F\u7528 gulp \u63D2\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>Glup.dest</code>\u5C06\u8FD9\u4E2A\u6587\u4EF6\u5BF9\u8C61\u6301\u4E45\u5316\u5230\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5373\u672C\u5730\u786C\u76D8\u91CC\u3002</p><p><code>vfs.src</code>\u63A5\u53E3\u6240\u4F20\u5165\u7684 \u201C\u901A\u914D\u7B26\u201D\u662F\u6709\u4E2A\u4E13\u95E8\u672F\u8BED\u7684\uFF0C\u53EB\u505A <code>Glob</code></p><blockquote><p>\u6240\u8C13\u7684 GLOB \u6A21\u5F0F\u662F\u6307 shell \u6240\u4F7F\u7528\u7684<strong>\u7B80\u5316\u4E86\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</strong>\uFF1A \u2474 \u661F\u53F7\uFF08*\uFF09\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF1B \u2475 [abc]\u5339\u914D\u4EFB\u4F55\u4E00\u4E2A\u5217\u5728\u65B9\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\uFF08\u8FD9\u4E2A\u4F8B\u5B50\u8981\u4E48\u5339\u914D\u4E00\u4E2A a\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2A b\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2A c\uFF09\uFF1B \u2476 \u95EE\u53F7\uFF08?\uFF09\u53EA\u5339\u914D\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF1B \u2477 \u5982\u679C\u5728\u65B9\u62EC\u53F7\u4E2D\u4F7F\u7528\u77ED\u5212\u7EBF\u5206\u9694\u4E24\u4E2A\u5B57\u7B26\uFF0C\u8868\u793A\u6240\u6709\u5728\u8FD9\u4E24\u4E2A\u5B57\u7B26\u8303\u56F4\u5185\u7684\u90FD\u53EF\u4EE5\u5339\u914D\uFF08\u6BD4\u5982 [0-9] \u8868\u793A\u5339\u914D\u6240\u6709 0 \u5230 9 \u7684\u6570\u5B57\uFF09\u3002</p></blockquote><p>\u5728 <code>vinyl-fs</code> \u4E2D\uFF0C\u662F\u4F7F\u7528 <a href="https://github.com/gulpjs/glob-stream/tree/v5.0.0" target="_blank" rel="noopener noreferrer">glob-stream</a> *&lt;v5.0.0&gt;<em>\u901A\u8FC7\u7B97\u6CD5</em>\uFF08<a href="https://github.com/isaacs/minimatch" target="_blank" rel="noopener noreferrer">minimatch</a>\uFF09*\u6765\u89E3\u6790 GLOB \u7684\uFF0C\u5B83\u4F1A\u62FF\u7B26\u5408\u4E0A\u8FF0 GLOB \u6A21\u5F0F\u89C4\u8303\u7684 pattern \u53C2\u6570\u53BB\u5339\u914D\u76F8\u5E94\u7684\u6587\u4EF6\u3002</p><blockquote><p><code>glob-stream</code> \u53C8\u662F\u501F\u52A9\u4E86 <a href="https://github.com/isaacs/node-glob" target="_blank" rel="noopener noreferrer">node-glob</a> \u6765\u5339\u914D\u6587\u4EF6\u5217\u8868\u7684\u3002</p></blockquote><p><code>glob-stream</code>\u5339\u914D\u5230\u6587\u4EF6\u540E\u6240\u521B\u5EFA\u7684\u6D41\u4E2D\uFF0C\u5199\u5165\u7684\u6570\u636E\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>stream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cwd</span><span class="token operator">:</span> opt<span class="token punctuation">.</span>cwd<span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> basePath<span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u7ED3\u6784\u6B63\u662F\u521B\u5EFA <code>Vinyl</code>\u5B9E\u4F8B\u6240\u9700\u8981\u4F20\u5165\u7684<code>file</code>\u914D\u7F6E\u53C2\u6570\u3002</p><h2 id="stream-\u8F6C\u6362" tabindex="-1">Stream \u8F6C\u6362 <a class="header-anchor" href="#stream-\u8F6C\u6362" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u8BA9<code>Gulp</code>\u53EF\u4EE5\u66F4\u591A\u5730\u590D\u7528<code>Node</code>\u751F\u6001\u4F53\u7CFB\u7684<code>Stream</code>\uFF0C\u51FA\u73B0\u4E86\u8BB8\u591A <code>Stream</code>\u8F6C\u6362\u63D2\u4EF6\u3002</p><p><strong>vinyl-source-stream</strong></p><p>\u53EF\u4EE5\u628A\u666E\u901A\u7684 <code>Node Stream</code>\u8F6C\u6362\u4E3A <code>Vinyl File Object Stream</code>\u3002\u8FD9\u6837\u5C31\u76F8\u5F53\u4E8E\u53EF\u4EE5\u628A\u666E\u901A\u7684<code>node stream</code>\u8FDE\u63A5\u5230<code>Glup</code>\u4F53\u7CFB\u5185\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vinyl-source-steam&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> nodeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./test.txt&#39;</span><span class="token punctuation">)</span>
nodeStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;./dest&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u7684 stream \u7BA1\u9053\uFF0C\u4F5C\u4E3A\u8D77\u59CB\u7684\u5E76\u4E0D\u662F<code>gulp.src</code>\uFF0C\u800C\u662F\u666E\u901A\u7684 <code>node stream</code>\u3002\u4F46\u662F\u7ECF\u8FC7<code>vinyl-source-stream</code>\u7684\u8F6C\u6362\u540E\uFF0C\u5C31\u53EF\u4EE5\u7528<code>gulp.dest</code>\u8FDB\u884C\u8F93\u51FA\u3002</p><p>\u6211\u4EEC\u77E5\u9053 <code>vinyl</code>\u81F3\u5C11\u8981\u6709<code>contents</code>\u548C<code>path</code>\u5C5E\u6027\uFF0C\u800C\u8FD9\u91CC\u901A\u8FC7 <code>fs.createReadStream</code> \u83B7\u53D6\u5230\u7684\u53EA\u662F <code>contents</code>\uFF0C\u56E0\u4E3A\u8FD8\u8981\u6307\u5B9A\u4E00\u4E2A <code>filename</code>\u4F5C\u4E3A<code>path</code>\uFF0C\u5373<code>source([filename])</code>\u3002</p><p><code>vinyl-source-stream</code>\u4E2D\u7684<code>stream</code>\u6307\u7684\u662F\u751F\u6210\u7684<code>Vinyl File Object Stream</code>\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u7684 <code>contents</code>\u7C7B\u578B\u662F<code>stream</code>\u3002\u7C7B\u4F3C\u7684\u8FD8\u6709<code>vinyl-source-buffer</code>\uFF0C\u5B83\u7684\u4F5C\u7528\u76F8\u540C\uFF0C\u53EA\u662F\u751F\u6210\u7684<code>contents</code>\u7C7B\u578B\u662F<code>Buffer</code>\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/vajoy/p/6357476.html" target="_blank" rel="noopener noreferrer">gulp\u6E90\u7801\u89E3\u6790\uFF08\u4E8C\uFF09\u2014\u2014 vinyl-fs</a></li><li><a href="https://segmentfault.com/a/1190000003770541" target="_blank" rel="noopener noreferrer">\u63A2\u7A76Gulp\u7684Stream</a></li><li><a href="https://www.gulpjs.com.cn/docs/api/vinyl/#%E9%80%89%E9%A1%B9" target="_blank" rel="noopener noreferrer">Vinyl \u5B9E\u4F8B\u5177\u4F53\u5C5E\u6027\u548C\u65B9\u6CD5</a></li></ul>`,43),p=[o];function c(l,r,u,i,d,k){return a(),s("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};