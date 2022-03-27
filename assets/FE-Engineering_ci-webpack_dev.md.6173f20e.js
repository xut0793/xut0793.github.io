import{_ as n,c as s,o as a,a as p}from"./app.9dbb06c5.js";const y='{"title":"\u5F00\u53D1\u73AF\u5883\u6784\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"watch","slug":"watch"},{"level":2,"title":"webpack-dev-server","slug":"webpack-dev-server"},{"level":2,"title":"DefinePlugin","slug":"defineplugin"},{"level":2,"title":"\u73AF\u5883\u533A\u5206","slug":"\u73AF\u5883\u533A\u5206"}],"relativePath":"FE-Engineering/ci-webpack/dev.md"}',t={},o=p(`<h1 id="\u5F00\u53D1\u73AF\u5883\u6784\u5EFA" tabindex="-1">\u5F00\u53D1\u73AF\u5883\u6784\u5EFA <a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u6784\u5EFA" aria-hidden="true">#</a></h1><ol><li>\u57FA\u672C\u529F\u80FD\uFF1A\u81EA\u52A8\u6784\u5EFA watch / \u5F00\u53D1\u670D\u52A1\u5668 \u81EA\u52A8\u5237\u65B0 / \u70ED\u6A21\u5757\u66FF\u6362 / \u8DE8\u57DF\u4EE3\u7406 / source-map / DefinePlugin \u81EA\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF / \u73AF\u5883\u533A\u5206</li><li>\u4F18\u5316\u6784\u5EFA\u901F\u5EA6\u548C\u70ED\u66F4\u65B0\u901F\u5EA6: \u589E\u91CF\u6784\u5EFA\uFF08\u7F13\u5B58\uFF09/ \u591A\u8FDB\u7A0B</li></ol><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h2><p>webpack \u53EF\u4EE5\u76D1\u542C\u6587\u4EF6\u53D8\u5316\uFF0C\u5F53\u5B83\u4EEC\u4FEE\u6539\u540E\u4F1A\u91CD\u65B0\u7F16\u8BD1\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5F00\u542F <code>watch: true</code> \u5373\u53EF\u3002</p><blockquote><p>\u8FD9\u91CC watch: true \u5F00\u542F\u76D1\u542C\uFF0C\u90A3 webpack \u76D1\u542C\u7684\u662F\u90A3\u4E9B\u6587\u4EF6\u7684\u53D8\u5316\u5462\uFF1F\u76D1\u542C\u7684\u662F\u4ECE entry \u5165\u53E3\u5F00\u59CB\u5B8C\u6210\u89E3\u6790\u7684\u4F9D\u8D56\u56FE\u4E2D\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u5176\u4E2D\u7684\u6587\u4EF6\u4E00\u65E6\u53D8\u5316\uFF0C\u5C31\u4F1A\u89E6\u53D1\u91CD\u65B0\u6253\u5305\u6784\u5EFA\u3002</p></blockquote><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u542F\u7528 Watch \u6A21\u5F0F\u3002\u8FD9\u610F\u5473\u7740\u5728\u521D\u59CB\u6784\u5EFA\u4E4B\u540E\uFF0Cwebpack \u5C06\u7EE7\u7EED\u76D1\u542C\u4EFB\u4F55\u5DF2\u89E3\u6790\u7684\u4F9D\u8D56\u56FE\u4E2D\u6587\u4EF6\u7684\u66F4\u6539\u3002</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7406\u8BBA\u4E0A\uFF0C\u76D1\u542C\u5230\u6BCF\u4E00\u4E2A\u6587\u4EF6\u66F4\u6539\uFF0C\u90FD\u4F1A\u89E6\u53D1 webpack \u91CD\u65B0\u6784\u5EFA\u3002\u4F46\u8FD9\u6837\u9891\u7E41\u7684\u6784\u5EFA\u5E76\u4E0D\u9700\u8981\u3002</span>
    <span class="token comment">// \u6240\u4EE5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u6B64\u5C5E\u6027\u6765\u8BBE\u7F6E\u6784\u5EFA\u7684\u5EF6\u8FDF\u65F6\u95F4\u3002</span>
    <span class="token comment">// \u5F53\u7B2C\u4E00\u4E2A\u6587\u4EF6\u66F4\u6539\uFF0C\u4F1A\u5728\u91CD\u65B0\u6784\u5EFA\u524D\u589E\u52A0\u5EF6\u8FDF\u3002\u8FD9\u4E2A\u9009\u9879\u5141\u8BB8 webpack \u5C06\u8FD9\u6BB5\u65F6\u95F4\u5185\u8FDB\u884C\u7684\u4EFB\u4F55\u5176\u4ED6\u66F4\u6539\u90FD\u805A\u5408\u5230\u4E00\u6B21\u91CD\u65B0\u6784\u5EFA\u91CC\u3002\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D</span>
    <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

    <span class="token comment">// \u76D1\u542C\u5927\u91CF\u6587\u4EF6\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684 CPU \u6216\u5185\u5B58\u5360\u7528\u3002\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u6216\u8005glob\u6A21\u5F0F\u6392\u9664\u4E0D\u9700\u8981\u76D1\u542C\u7684\u6587\u4EF6\uFF0C\u50CF node_modules \u8FD9\u7C7B\u6587\u4EF6\u5939</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token string">&#39;**/node_modules&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/files/**/*.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/node_modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u8BBE\u7F6E\u68C0\u67E5\u6587\u4EF6\u53D8\u52A8\u7684\u8F6E\u8BE2\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF1B\u8BBE\u4E3A true \u65F6\u4EE5\u9ED8\u8BA4\u65F6\u95F4 1s \u5F00\u542F\u8F6E\u8BE2\u3002</span>
    <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>watch \u867D\u7136\u80FD\u76D1\u542C\u6587\u4EF6\u53D8\u5316\u89E6\u53D1 webpack \u91CD\u65B0\u6784\u5EFA\uFF0C\u4F46\u662F\u4E3A\u4E86\u770B\u5230\u6784\u5EFA\u7ED3\u679C\uFF0C\u4ECD\u9700\u8981\u624B\u52A8\u5237\u65B0\u6D4F\u89C8\u5668\u624D\u80FD\u9884\u89C8\u6700\u65B0\u6784\u5EFA\u6548\u679C\u3002\u4E3A\u4E86\u80FD\u5B9E\u73B0\u81EA\u52A8\u5237\u65B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u589E\u52A0 <code>devServer</code> \u5C5E\u6027\u6765\u4F7F\u7528 <code>webpack-dev-server</code>\u3002</p><h2 id="webpack-dev-server" tabindex="-1">webpack-dev-server <a class="header-anchor" href="#webpack-dev-server" aria-hidden="true">#</a></h2><p>\u4ECE <code>webpack@5.x</code> \u548C <code>webpack-cli@4.X</code> \u90FD\u8FDB\u884C\u4E86\u5927\u7248\u672C\u7684\u66F4\u65B0</p><ul><li>\u6BD4\u5982 webpack\u56E2\u961F\u5C06<code>webpack-dev-server</code>\u7684\u547D\u4EE4\u6539\u4E3A\u4E86<code>webpack serve</code> \u3002</li><li>\u5728\u4E4B\u524D webpack\u3001webpack-cli\u3001webpack-dev-server \u90FD\u662F\u6839\u636E\u6A21\u5757\u8DEF\u5F84\u8DE8\u5E93\u8C03\u7528\u3002\u6240\u4EE5\u53EA\u8981\u67D0\u4E2A\u5E93\u6587\u4EF6\u7ED3\u6784\u7A0D\u5FAE\u6539\u52A8\uFF0C\u5C31\u4F1A\u50CFwebpack-dev-server\u547D\u4EE4\u8FD9\u6837\u76F4\u63A5\u62A5\u9519\u3002 \u4E0D\u8FC7\u5728\u65B0\u7248\u672C\u4EE3\u7801\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u901A\u8FC7\u7EA6\u5B9A\u540D\u79F0\u8FDB\u884C\u8DE8\u5E93\u8C03\u7528\u3002\u5C3D\u53EF\u80FD\u964D\u4F4E\u4E86\u8026\u5408\u5EA6\u3002</li><li>\u76F8\u5BF9\u4E8E<code>webpack-dev-server@3.X</code>\uFF0C<code>webpack-dev-server@4.0.0beta.0</code>\u7248\u672C\u5BF9\u914D\u7F6E\u5C5E\u6027\u505A\u4E86\u66F4\u597D\u7684\u6574\u5408\uFF0C\u6BD4\u5982 <code>proxy / static / dev / client</code> \u7684\u5212\u5206\u3002</li></ul><blockquote><p>webpack-dev-server \u548C webpack-dev-middleware \u91CC Watch \u6A21\u5F0F\u9ED8\u8BA4\u5F00\u542F\u3002</p></blockquote><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// webpack-dev-server@4.0.0-beta.2 \u4E0E webpack-dev-server@3.x \u914D\u7F6E\u9879\u7ED3\u6784\u6709\u5F88\u5927\u7684\u4E0D\u540C\u3002</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//  \u670D\u52A1\u5668host\uFF0C\u9ED8\u8BA4\u4E3Alocalhost\uFF0C</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u670D\u52A1\u5668\u7AEF\u53E3\u53F7\uFF0C</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3A8080</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">7777</span><span class="token punctuation">,</span>

    <span class="token comment">//  string | boolean</span>
    <span class="token comment">//  \u542F\u52A8\u540E\u662F\u5426\u6253\u5F00\u6D4F\u89C8\u5668</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3Afalse\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3Atrue\uFF0C \u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
    <span class="token comment">//  \u5F53\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u6253\u5F00\u6307\u5B9A\u6D4F\u89C8\u5668</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// &#39;chrome&#39;</span>

    <span class="token comment">// \u6253\u5F00\u6D4F\u89C8\u5668\u540E\u9ED8\u8BA4\u6253\u5F00\u7684\u9875\u9762</span>
    <span class="token comment">//  string | Array&lt;string&gt;</span>
    <span class="token comment">//  \u5F53\u8BBE\u7F6E\u4E3AArray\u65F6\uFF0C\u4F1A\u6253\u5F00\u591A\u4E2A\u9875\u9762</span>
    <span class="token literal-property property">openPage</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// [&#39;&#39;, &#39;index.html&#39;], //&#39;index.html&#39;,</span>

    <span class="token comment">//  \u662F\u5426\u542F\u7528gzip\u538B\u7F29,</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3Afalse</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u662F\u5426\u542F\u52A8\u70ED\u66F4\u65B0\uFF08HMR\uFF09</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3Afalse\uFF0C</span>
    <span class="token comment">//  \u70ED\u66F4\u65B0\u4F7F\u7528\u7684\u662Fwebpack\u4E2DHotModuleReplacementPlugin</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u8BBE\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684IP\u5730\u5740\uFF0C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u4E0D\u5141\u8BB8\u4EFB\u4F55IP\u8BBF\u95EE\uFF0C</span>
    <span class="token comment">//  \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u6570\u7EC4\uFF0C\u4E0Ewebpack-devser@3.X \u7684allowedHosts\u4E00\u6837</span>
    <span class="token comment">//  \u6B64\u5C5E\u6027\u76F8\u5F53\u4E8Ewebpack-devser@3.X \u7684allowedHosts\u5C5E\u6027</span>
    <span class="token literal-property property">firewall</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u662F\u5426\u8BBE\u7F6EHTTP/2\u670D\u52A1\u5668\u3002</span>
    <span class="token comment">//  \u5BF9\u4E8EnodeV10\u4EE5\u4E0A\u7684\u7248\u672C  \u7531\u4E8Espdy\u6709\u95EE\u9898</span>
    <span class="token comment">//  \u6240\u4EE5\u5982\u679C\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528https\u4F5C\u4E3A\u670D\u52A1</span>
    <span class="token literal-property property">http2</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// // \u662F\u5426\u4F7F\u7528https\u5B89\u5168\u8FDE\u63A5</span>
    <span class="token comment">// //  boolean \u6216\u8005 object</span>
    <span class="token comment">// // \u5F53\u4E3Aobject\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B89\u5168\u8BC1\u4E66</span>
    <span class="token comment">// //  \u9ED8\u8BA4\u4E3Afalse\uFF0C\u4F46\u662F\u5F53\u5F00\u542Fhttp2\u5C5E\u6027\u65F6\uFF0C\u4F1A\u9ED8\u8BA4\u4F7F\u7528https    \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C dev-server\u4F7F\u7528HTTPS\u4E3AHTTP/2\u63D0\u4F9B\u670D\u52A1</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//  \u8BC1\u4E66\uFF0C\u8BC1\u4E66\u5C5E\u6027\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5728devServer\u4E0B\uFF0C\u5F53https\u8BBE\u7F6E\u4E3Aboolean\u65F6\uFF0C \u4E0Ehttps\u540C\u7EA7\u8BBE\u7F6E</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//fs.readFileSync(&#39;/path/to/server.key&#39;),</span>
      <span class="token literal-property property">cert</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//fs.readFileSync(&#39;/path/to/server.crt&#39;),</span>
      <span class="token literal-property property">ca</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//fs.readFileSync(&#39;/path/to/ca.pem&#39;),</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>


    <span class="token comment">//  \u670D\u52A1\u5668\u4EE3\u7406\u914D\u7F6E\uFF0C\u5F53\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1\u65F6\uFF0C\u524D\u7AEF\u8BF7\u6C42API\u9700\u8981\u6307\u5B9A\u5730\u5740</span>
    <span class="token comment">//  \u6B64\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406\u7684IP\u5730\u5740</span>
    <span class="token comment">//  \u4F8B\u5982\u5982\u4E0B\uFF0C\u5F53api\u8BF7\u6C42  /api/user\u771F\u5B9E\u5730\u5740\u4E3Ahttp://localhost:3000/user</span>
    <span class="token comment">//  \u8BE6\u60C5\u4F7F\u7528\u8BF7\u53C2\u8003\u5B98\u7F51https://webpack.js.org/configuration/dev-server/#devserverproxy</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//  pathRewrite\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u524D\u7F00\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6EpathRewrite\uFF1A /api/user\u771F\u5B9E\u5730\u5740\u4E3Ahttp://localhost:3000/api/user</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^/api&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//  HTTPS\u8BBE\u7F6E\u4E3A\u65E0\u6548\u8BC1\u4E66</span>
        <span class="token comment">// secure: false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u670D\u52A1\u5668\u8FD4\u56DE\u65F6\u52A0\u5165\u7684response\u7684\u81EA\u5B9A\u4E49header</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;X-Custom-Foo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u9759\u6001\u6587\u4EF6\u5C5E\u6027</span>
    <span class="token comment">//  \u6B64\u5C5E\u6027\u662F\u5BF9webpack-devser@3.X\u67D0\u4E9B\u5C5E\u6027\u7684\u6C47\u603B</span>
    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//  \u8981\u6302\u8F7D\u5728\u670D\u52A1\u5668\u4E0A\u9759\u6001\u6587\u4EF6\u7684\u672C\u5730\u76EE\u5F55</span>
      <span class="token comment">//  \u9ED8\u8BA4\u4E3A\u4E3A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55</span>
      <span class="token comment">//  \u5EFA\u8BAE\u4F7F\u7528\u7EDD\u5BF9\u5730\u5740</span>
      <span class="token comment">//  \u4F8B\u5982\u8BBE\u7F6E\u4E3A /assets\u540E\uFF0C \u4F1A\u52A0\u8F7D\u4F7F\u7528\u672C\u5730/assets\u76EE\u5F55\u4E0B\u7684\u9759\u6001\u6587\u4EF6\u5230\u670D\u52A1\u5668</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 contentBase\u5C5E\u6027</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>root<span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">//    \u6302\u8F7D\u5230\u670D\u52A1\u5668\u4E2D\u95F4\u4EF6\u7684\u53EF\u8BBF\u95EE\u865A\u62DF\u5730\u5740</span>
      <span class="token comment">//    \u4F8B\u5982\u8BBE\u7F6E\u4E3A/static\uFF0C\u5728\u8BBF\u95EE\u670D\u52A1\u5668\u9759\u6001\u6587\u4EF6\u65F6\uFF0C\u5C31\u9700\u8981\u4F7F\u7528/static\u524D\u7F00</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 contentBasePublicPath\u5C5E\u6027</span>
      <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//   \u8BBE\u7F6E\u6302\u5728\u9759\u6001\u6587\u4EF6\u65F6\u4F7F\u7528\u7684\u53C2\u6570</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 staticOptions\u5C5E\u6027</span>
      <span class="token literal-property property">staticOptions</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u662F\u5426\u52A0\u5165serve-index\u4E2D\u95F4\u4EF6\uFF0C\u9ED8\u8BA4\u4E3Atrue</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684  //  \u662F\u5426\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE\u9759\u6001\u6587\u4EF6\u5217\u8868\u3002</span>
      <span class="token comment">//  \u9ED8\u8BA4\u4E3Atrue\uFF0Cwebpack-dev-server\u4F7F\u7528\u7684\u662Fserve-index\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 serveIndex\u5C5E\u6027</span>
      <span class="token literal-property property">serveIndex</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u662F\u5426\u4F7F\u7528chokidar\u5E93\u8FDB\u884C\u76D1\u542C\u9759\u6001\u6587\u4EF6\u53D8\u5316\u3002</span>
      <span class="token comment">//  webpack\u4F7F\u7528\u7684\u662F\u6587\u4EF6\u7CFB\u7EDF\u7684\u7684\u53D8\u5316\u901A\u77E5\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u53EF\u80FD\u4F1A\u4E0D\u7BA1\u7528\uFF0C\u4F8B\u5982\u4F7F\u7528\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF</span>
      <span class="token comment">//  \u6240\u4EE5\u53EF\u4EE5\u8BBE\u7F6E\u5C5E\u6027\u4F7F\u7528chokidar\u5E93\u8FDB\u884C\u8F6E\u8BE2\u68C0\u6D4B\u6587\u4EF6\u53D8\u5316\u3002</span>
      <span class="token comment">//  \u6B64\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E3Aboolean\u7C7B\u578B\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5BF9\u8C61\u7C7B\u578B\u6307\u5B9A\u8F6E\u8BE2\u65F6\u95F4(\u6BEB\u79D2\u6570\uFF09</span>
      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 watchOptions\u5C5E\u6027</span>
      <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">3000</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// webpack-dev-middleware\u4E2D\u95F4\u4EF6\u4F7F\u7528\u7684\u5C5E\u6027</span>
    <span class="token literal-property property">dev</span><span class="token operator">:</span><span class="token punctuation">{</span>

      <span class="token comment">//  \u8BBE\u7F6E\u670D\u52A1\u5668response\u52A0\u5165\u7684\u81EA\u5B9A\u4E49header\u4FE1\u606F</span>
      <span class="token comment">//  \u6B64\u5C5E\u6027\u5728webpack-dev-middleware\u4E2D\u95F4\u4EF6\u4F7F\u7528</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//  \u54CD\u5E94\u5934\u6DFB\u52A0\u6570\u636E</span>
        <span class="token string-property property">&#39;X-Dev-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;X-Dev-Header&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">serverSideRender</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">//   \u8BBE\u7F6Ewebpack-dev-middleware\u4E2D\u95F4\u4EF6\u7684mimeTypes</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 mimeTypes\u5C5E\u6027</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 mimeTypes\u5C5E\u6027</span>
      <span class="token literal-property property">mimeTypes</span><span class="token operator">:</span><span class="token punctuation">{</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u662F\u5426\u5C06\u6253\u5305\u7ED3\u679C\u5199\u5165\u5230\u78C1\u76D8\u4E4B\u4E2D</span>
      <span class="token comment">//  \u9ED8\u8BA4\u4E3Afalse</span>
      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 writeToDisk\u5C5E\u6027</span>
      <span class="token literal-property property">writeToDisk</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

      <span class="token comment">// \u8BBE\u7F6E\u6253\u5305\u6587\u4EF6\u5B58\u50A8\u7684\u76EE\u5F55\u5730\u5740\u3002\u6B64\u5C5E\u6027\u7531webpack-dev-middleware\u8BBE\u7F6E</span>
      <span class="token comment">// \u4F8B\u5982\u5F53\u8BBE\u7F6E\u4E3A/public,\u90A3\u4E48\u8BBF\u95EE\u670D\u52A1\u5668\u6240\u6709\u4FE1\u606F\u90FD\u9700\u8981\u52A0\u5165/public\u524D\u7F00</span>
      <span class="token comment">// \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 publicPath\u5C5E\u6027</span>
      <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u8BBE\u7F6E\u6839\u76EE\u5F55\u6240\u6307\u5411\u7684\u9875\u9762\u3002</span>
      <span class="token comment">//  \u4F8B\u5982localhost:8080\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5230index.html\u662F\u56E0\u4E3A\u9ED8\u8BA4\u503C\u4E3Aindex.html</span>
      <span class="token comment">//  \u9ED8\u8BA4\u503C\u4E5F\u662Findex.html</span>
      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 index\u5C5E\u6027</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//  none&quot; | &quot;summary&quot; | &quot;errors-only&quot; | &quot;errors-warnings&quot; | &quot;minimal&quot; | &quot;normal&quot; | &quot;detailed&quot; | &quot;verbose&quot; | boolean | object { \u2026 }</span>
      <span class="token comment">//   \u8BBE\u7F6E\u6253\u5305\u6587\u4EF6\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\uFF0C\u4F1A\u8F93\u51FA\u5728\u670D\u52A1\u5668\u7EC8\u7AEF</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 stats\u5C5E\u6027</span>
      <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token string">&#39;minimal&#39;</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u81EA\u5B9A\u4E49\u6253\u5305\u6587\u4EF6\u7684\u8F93\u51FA\u6D41</span>
      <span class="token comment">//  \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8F93\u5165\u6D41\u4E3Amemory</span>
      <span class="token literal-property property">outputFileSystem</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>


      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

      <span class="token literal-property property">serverSideRender</span><span class="token operator">:</span> <span class="token keyword">undefined</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u8BBE\u7F6EWebSocket\u5BA2\u6237\u7AEF\u7684\u4E00\u4E9B\u5C5E\u6027</span>
    <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
      <span class="token comment">//  \u63A8\u9001\u5BA2\u6237\u7AEF\u65E5\u5FD7\u7EA7\u522B\uFF0C</span>
      <span class="token comment">//  \u5C5E\u6027\u5177\u6709 &quot;none&quot; | &quot;error&quot; | &quot;warn&quot; | &quot;info&quot; | &quot;log&quot; | &quot;verbose&quot;</span>
      <span class="token comment">//  \u4F8B\u5982\u8BBE\u7F6Eerror \uFF0CWS\u5E76\u4E0D\u662F\u63A8\u9001\u6253\u5305\u8B66\u544A\u548C\u6D88\u606F\uFF0C WS\u5BA2\u6237\u7AEF\u4F1A\u5C06\u65E5\u5FD7\u6253\u5370\u5728\u63A7\u5236\u53F0\u4E0A</span>
      <span class="token comment">//  \u5982\u679C\u8BBE\u7F6E\u4E3Anone\uFF0C \u5C31\u7B97\u6253\u5305\u5931\u8D25\u4E5F\u4E0D\u4F1A\u6709\u6D88\u606F</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 clientLogLevel\u5C5E\u6027</span>
      <span class="token literal-property property">logging</span><span class="token operator">:</span> <span class="token string">&#39;verbose&#39;</span><span class="token punctuation">,</span>
        
      <span class="token comment">//   \u662F\u5426\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u6253\u5370\u6253\u5305\u8FDB\u5EA6\uFF0C</span>
      <span class="token comment">//   \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 progress\u5C5E\u6027</span>
      <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 sockPath\u5C5E\u6027</span>
      <span class="token comment">// path: &#39;&#39;,</span>
      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 sockHost\u5C5E\u6027</span>
      <span class="token comment">// host: &#39;&#39;,</span>
      <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-dev-server@3.X\u7684 sockPort\u5C5E\u6027</span>
      <span class="token comment">// port: &#39;&#39;,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u8BBE\u7F6E\u7F16\u8BD1\u51FA\u9519\u6216\u8B66\u544A\u540E\uFF0C\u9875\u9762\u662F\u5426\u4F1A\u76F4\u63A5\u663E\u793A\u4FE1\u606F\uFF0C boolean | {}</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3Afalse\uFF0C\u5F53\u5931\u8D25\u540E\u4F1A\u663E\u793A\u7A7A\u767D\u9875</span>
    <span class="token comment">//  \u8BBE\u7F6E\u4E3Atrue\u540E\uFF0C\u7F16\u8BD1\u5931\u8D25\u4F1A\u663E\u793A\u9519\u8BEF/\u8B66\u544A\u7684\u8986\u76D6\u5C42,\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3Aobject\uFF0C\u663E\u793A\u591A\u79CD\u7C7B\u578B\u4FE1\u606F</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">warning</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token keyword">public</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

    <span class="token comment">// \u662F\u5426\u8981\u6CE8\u5165WebSocket\u5BA2\u6237\u7AEF\u3002\u4E5F\u5C31\u662F\u662F\u5426\u8981\u8FDB\u884C\u957F\u94FE\u63A5\u901A\u8BAF</span>
    <span class="token comment">// boolean | function (compilerConfig) =&gt; boolean</span>
    <span class="token comment">//  \u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Afalse\uFF0C\u90A3\u4E48hot\u3001overlay\u7B49\u529F\u80FD\u90FD\u4F1A\u5931\u6548</span>
    <span class="token comment">//  \u9ED8\u8BA4\u4E3Atrue\uFF0C  \u6709\u5174\u8DA3\u7684\u8BF8\u541B\u53EF\u4EE5\u8BBE\u7F6E\u4E3Afalse\u6D4B\u8BD5\u4E00\u4E0B</span>
    <span class="token literal-property property">injectClient</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u662F\u5426\u6CE8\u5165HMR\uFF0C \u8FD9\u4E2A\u5C5E\u6027\u662FinjectClient\u7684\u5B50\u96C6\u3002\u53EA\u5F71\u54CD\u70ED\u66F4\u65B0</span>
    <span class="token literal-property property">injectHot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//	\u662F\u5426\u5F00\u542F\u81EA\u52A8\u5237\u65B0\u6D4F\u89C8\u5668\u529F\u80FD</span>
    <span class="token comment">//	\u6B64\u5C5E\u6027\u4F18\u5148\u7EA7\u4F4E\u4E8Ehot</span>
    <span class="token literal-property property">liveReload</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u662F\u5426\u5F00\u542FZeroConf\u7F51\u7EDC</span>
    <span class="token operator">**</span>bonjour<span class="token operator">**</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    
    <span class="token comment">//  \u662F\u5426\u5C06\u6240\u6709404\u9875\u9762\u90FD\u8DF3\u8F6C\u5230index.html</span>
    <span class="token comment">//  boolean | object</span>
    <span class="token comment">//  \u5F53\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u6216\u4E3Aobject\u65F6\u5E76\u4E14\u4F7F\u7528HTML5 API\u65F6 \u6240\u6709404\u9875\u9762\u4F1A\u8DF3\u8F6C\u5230index.html</span>
    <span class="token comment">//  \u4F7F\u7528\u7684connect-history-api-fallback\u5E93 \u8BBE\u7F6E\u4E3A\u5BF9\u8C61\uFF0C\u5219\u4F1A\u5C06\u6B64\u5BF9\u8C61\u4F20\u53C2\u7ED9connect-history-api-fallback\u5E93</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      
    <span class="token comment">//  \u662F\u5426\u4F7F\u7528\u5C40\u57DF\u7F51IP\u6253\u5F00\u9875\u9762</span>
    <span class="token literal-property property">useLocalIp</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    
    <span class="token comment">//  \u662F\u5426\u76D1\u542Cnode\u4E2Dstdin.end\u4E8B\u4EF6\uFF0C \u5173\u95ED\u670D\u52A1\u5668</span>
    <span class="token literal-property property">stdin</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u7EC8\u6B62\u4FE1\u53F7\uFF0C\u8BBE\u7F6E\u4E3Atrue\u65F6 \u76D1\u542C[&#39;SIGINT&#39;, &#39;SIGTERM&#39;];\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u89E6\u53D1\u540E\u7ED3\u675F\u8FDB\u7A0B</span>
    <span class="token comment">//  \u76EE\u524Ddev-server\u5F3A\u5236\u5C06\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u4E86\uFF0C\u6240\u4EE5\u6539\u4E3Afalse\u4E0D\u7BA1\u7528\u3002</span>
    <span class="token literal-property property">setupExitSignals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u8BBE\u7F6EWebSocket</span>
    <span class="token comment">//  \u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528\u7684WebSocket\u5E93\u3002\u5185\u7F6E\u7684\u5E93\u4E3Asockjs\u548Cws</span>
    <span class="token comment">//  \u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8BBE\u7F6EWebSocket Server\u548CWebSocket Client</span>
    <span class="token literal-property property">transportMode</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token comment">//  \u8BBE\u7F6E\u4F7F\u7528\u7684WebSocket\uFF0C \u503C\u4E3A sockjs\u6216\u8005ws</span>
      <span class="token comment">//  sockjs \u4F7F\u7528\u7684sockjs\u5E93</span>
      <span class="token comment">//  ws \u4F7F\u7528\u7684ws\u5E93</span>
      <span class="token comment">//  webpack-dev-server@4.X\u4F7F\u7528\u7684\u662FWS  webpack-dev-server@3.X \u4F7F\u7528\u7684\u662Fsockjs</span>
      <span class="token comment">//  \u76EE\u524D\u5728webpack-dev-server@4.X\u4F7F\u7528sockjs\u4F1A\u51FA\u9519\uFF0C webpack-dev-server@3.X\u4F7F\u7528WS\u4E5F\u4F1A\u62A5\u9519</span>
        <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token string">&#39;ws&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  \u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u94A9\u5B50\u5C5E\u6027</span>
    <span class="token comment">//  \u4F18\u5148\u4E8Eserver\u5185\u90E8\u4E2D\u95F4\u4EF6\u6267\u884C</span>
    <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-devser@3.X \u7684before\u51FD\u6570</span>
    <span class="token function-variable function">onBeforeSetupMiddleware</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> server<span class="token punctuation">,</span> compiler</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token comment">//console.log(&#39;\u6211\u662Fbefore&#39;, compiler.options)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  server\u5185\u90E8\u6267\u884C\u5B8C\u6240\u6709\u4E2D\u95F4\u4EF6\u540E\u6267\u884C\u5F53\u524D\u4E2D\u95F4\u4EF6</span>
    <span class="token comment">//  \u76F8\u5F53\u4E8Ewebpack-devser@3.X \u7684after\u51FD\u6570</span>
    <span class="token function-variable function">onAfterSetupMiddleware</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> server<span class="token punctuation">,</span> compiler</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//  dev-server\u63D0\u4F9B\u7684\u5F53\u670D\u52A1\u5668\u542F\u52A8\u540E\u6267\u884C\u7684\u94A9\u5B50\u51FD\u6570</span>
    <span class="token function-variable function">onListening</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">server</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// const port = server.listeningApp.address().port;</span>
      <span class="token comment">// console.log(&#39;Listening on port:&#39;, port);</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="defineplugin" tabindex="-1">DefinePlugin <a class="header-anchor" href="#defineplugin" aria-hidden="true">#</a></h2><p><code>DefinePlugin</code> \u5141\u8BB8\u521B\u5EFA\u4E00\u4E2A\u5728\u7F16\u8BD1\u65F6\u53EF\u4EE5\u914D\u7F6E\u7684\u5168\u5C40\u5E38\u91CF\u3002\u5B9A\u4E49\u7684\u5E38\u91CF\u53EF\u4EE5\u5728webpack\u6253\u5305\u8303\u56F4\u5185\u4EFB\u610Fjavascript\u73AF\u5883\u5185\u8BBF\u95EE\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u8FD9\u4E2A\u63D2\u4EF6\u76F4\u63A5\u6267\u884C\u6587\u672C\u66FF\u6362\uFF0C\u7ED9\u5B9A\u7684\u503C\u5FC5\u987B\u5305\u542B\u5B57\u7B26\u4E32\u672C\u8EAB\u5185\u7684\u5B9E\u9645\u5F15\u53F7\u3002\u6240\u4EE5\u901A\u5E38\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\u6765\u8FBE\u5230\u8FD9\u4E2A\u6548\u679C\uFF1A</p><ul><li>\u4F7F\u7528 &#39;&quot;production&quot;&#39;</li><li>\u6216\u8005\u4F7F\u7528 JSON.stringify(&#39;production&#39;)</li></ul></div><p>\u7528\u6CD5\uFF1A</p><p>\u6BCF\u4E2A\u4F20\u8FDB DefinePlugin \u7684\u952E\u503C\u90FD\u662F\u4E00\u4E2A\u6807\u5FD7\u7B26\u6216\u8005\u591A\u4E2A\u7528 . \u8FDE\u63A5\u8D77\u6765\u7684\u6807\u5FD7\u7B26\u3002</p><ul><li>\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5B83\u4F1A\u88AB\u5F53\u4F5C\u4E00\u4E2A\u4EE3\u7801\u7247\u6BB5\u6765\u4F7F\u7528\u3002</li><li>\u5982\u679C\u8FD9\u4E2A\u503C\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u5B83\u4F1A\u88AB\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32(\u5305\u62EC\u51FD\u6570)\u3002</li><li>\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u6240\u6709\u7684 key \u4F1A\u88AB\u540C\u6837\u7684\u65B9\u5F0F\u5B9A\u4E49\u3002</li><li>\u5982\u679C\u5728\u4E00\u4E2A key \u524D\u9762\u52A0\u4E86 typeof,\u5B83\u4F1A\u88AB\u5B9A\u4E49\u4E3A typeof \u8C03\u7528\u3002</li></ul><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token constant">PRODUCTION</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token constant">VERSION</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&quot;5fa3b9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token constant">BROWSER_SUPPORTS_HTML5</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token constant">TWO</span><span class="token operator">:</span> <span class="token string">&quot;1+1&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;typeof window&quot;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">PRODUCTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Debug info&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">PRODUCTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Production log&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>webpack \u7F16\u8BD1\u6A21\u5757\u540E\u7684\u7ED3\u679C\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Debug info&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Production log&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u89E3\u6790\u5165\u53C2\u7684\u6E90\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
  * Walk definitions
  * @param {Object} definitions Definitions map \u5373 new webpack.DefinePlugin(definitions)
  * @param {string} prefix Prefix string
  * @returns {void}
  */</span>
<span class="token keyword">const</span> <span class="token function-variable function">walkDefinitionsForValues</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">definitions<span class="token punctuation">,</span> prefix</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> definitions<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token function">toCacheVersion</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5E8F\u5217\u5316 value \u7684\u503C\uFF0C\u57FA\u672C\u8F6C\u4E3A String\uFF0C\u5373 &#39;&quot;PRODUCTION&quot;&#39;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token constant">VALUE_DEP_PREFIX</span> <span class="token operator">+</span> prefix <span class="token operator">+</span> key<span class="token punctuation">;</span> <span class="token comment">// webpack/DefinePluginPRODUCTION</span>

    <span class="token comment">// \u7701\u7565\u4EE3\u7801...</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      code <span class="token operator">&amp;&amp;</span>
      <span class="token keyword">typeof</span> code <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token punctuation">(</span>code <span class="token keyword">instanceof</span> <span class="token class-name">RuntimeValue</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token punctuation">(</span>code <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">walkDefinitionsForValues</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> prefix <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">walkDefinitionsForValues</span><span class="token punctuation">(</span>definitions<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">toCacheVersion</span> <span class="token operator">=</span> <span class="token parameter">code</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;-0&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token keyword">instanceof</span> <span class="token class-name">RuntimeValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> code<span class="token punctuation">.</span><span class="token function">getCacheVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span> <span class="token operator">&amp;&amp;</span> code<span class="token punctuation">.</span>toString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> code<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> code <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">&amp;&amp;</span> code<span class="token punctuation">.</span>toString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> code<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token comment">/**
   * new webpack.DefinePlugin({
   *  OBJECT: {
   *    foo: &#39;bar&#39;,
   *    test: &#39;test&#39;,
   *  }
   * })
   * 
   * \u5904\u7406\u4E3A\uFF1A
   * OBJECT: &quot;foo: &#39;bar&#39;, test: &#39;test&#39;&quot;
   */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> code <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> items <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
			key<span class="token punctuation">,</span>
			<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">toCacheVersion</span><span class="token punctuation">(</span>code<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> code <span class="token operator">===</span> <span class="token string">&quot;bigint&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> code <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u73AF\u5883\u533A\u5206" tabindex="-1">\u73AF\u5883\u533A\u5206 <a class="header-anchor" href="#\u73AF\u5883\u533A\u5206" aria-hidden="true">#</a></h2><p>\u89C1 <code>env.md</code> \u6587\u6863</p>`,28),e=[o];function c(l,r,k,u,i,m){return a(),s("div",null,e)}var b=n(t,[["render",c]]);export{y as __pageData,b as default};
