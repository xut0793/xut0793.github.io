import{_ as n,c as s,o as a,a as p}from"./app.fa011131.js";const y='{"title":"Assets \u9759\u6001\u8D44\u6E90\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML \u6587\u4EF6\u5904\u7406","slug":"html-\u6587\u4EF6\u5904\u7406"}],"relativePath":"FE-Engineering/ci-vite/assets.md"}',t={},o=p(`<h1 id="assets-\u9759\u6001\u8D44\u6E90\u5904\u7406" tabindex="-1">Assets \u9759\u6001\u8D44\u6E90\u5904\u7406 <a class="header-anchor" href="#assets-\u9759\u6001\u8D44\u6E90\u5904\u7406" aria-hidden="true">#</a></h1><p>\u540C\u6D4F\u89C8\u5668\u52A0\u8F7D\u7F51\u9875\u5E94\u7528\u4E00\u6837\uFF0C\u4EE5 html \u6587\u4EF6\u4E3A\u5165\u53E3\u89E3\u6790\u5404\u79CD\u7C7B\u578B\u7684\u9759\u6001\u8D44\u6E90\uFF0C\u5305\u62EC JS / CSS\uFF0C\u4EE5\u53CA\u56FE\u7247\u7B49\u5176\u5B83\u8D44\u6E90\u3002</p><p>\u540C\u6837\uFF0Cvite \u4EE5 index.html \u6587\u4EF6\u4E3A\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\uFF0CVite \u89E3\u6790 <code>&lt;script type=&quot;module&quot; src=&quot;...&quot;&gt;</code> \uFF0C\u8FD9\u4E2A\u6807\u7B7E\u6307\u5411\u4F60\u7684 JavaScript \u6E90\u7801\u3002\u751A\u81F3\u5185\u8054\u5F15\u5165 JavaScript \u7684 <code>&lt;script type=&quot;module&quot;&gt;</code> \u548C\u5F15\u7528 CSS \u7684 <code>&lt;link href&gt;</code> \u4E5F\u80FD\u5229\u7528 Vite \u7279\u6709\u7684\u529F\u80FD\u88AB\u89E3\u6790\uFF0C\u5305\u62EC\u5143\u7D20\u7684 src \u5C5E\u6027\u503C \u548C CSS \u4E2D <code>url()</code> \u51FD\u6570\u7684 URL \u5730\u5740\u94FE\u63A5\u4E5F\u5C06\u88AB\u89E3\u6790\u8F6C\u6362\u3002</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inlineConfig</span><span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>inlineConfig<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> root <span class="token operator">=</span> config<span class="token punctuation">.</span>root
  <span class="token keyword">const</span> serverConfig <span class="token operator">=</span> config<span class="token punctuation">.</span>server
  <span class="token keyword">let</span> <span class="token punctuation">{</span> middlewareMode <span class="token punctuation">}</span> <span class="token operator">=</span> serverConfig
  <span class="token keyword">if</span> <span class="token punctuation">(</span>middlewareMode <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewareMode <span class="token operator">=</span> <span class="token string">&#39;ssr&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> middlewares <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Connect<span class="token punctuation">.</span>Server

  <span class="token keyword">const</span> <span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer <span class="token operator">=</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">,</span>
    middlewares<span class="token punctuation">,</span>
    <span class="token literal-property property">transformIndexHtml</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be immediately set</span>
  <span class="token punctuation">}</span>

  server<span class="token punctuation">.</span>transformIndexHtml <span class="token operator">=</span> <span class="token function">createDevHtmlTransformFn</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token comment">// \u4E00\u5806\u4E2D\u95F4\u4EF6\u6CE8\u518C</span>
  <span class="token comment">// request timer</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">timeMiddleware</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// cors (enabled by default) \u8DE8\u57DF\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u5F00\u542F</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> cors <span class="token punctuation">}</span> <span class="token operator">=</span> serverConfig
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cors <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">corsMiddleware</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> cors <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span> <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">:</span> cors<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// proxy \u8BF7\u6C42\u4EE3\u7406</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> serverConfig
  <span class="token keyword">if</span> <span class="token punctuation">(</span>proxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">proxyMiddleware</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// base</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>base <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">baseMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// open in editor support</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/__open-in-editor&#39;</span><span class="token punctuation">,</span> <span class="token function">launchEditorMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// hmr reconnect ping</span>
  <span class="token comment">// Keep the named function. The name is visible in debug logs via \`DEBUG=connect:dispatcher ...\`</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/__vite_ping&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">viteHMRPingMiddleware</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;pong&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">//decode request url \u8DEF\u7531\u7F16\u7801</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">decodeURIMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// serve static files under /public \u516C\u5171\u8DEF\u5F84</span>
  <span class="token comment">// this applies before the transform middleware so that these files are served as-is without transforms.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>publicDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">servePublicMiddleware</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>publicDir<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// main transform middleware \u6700\u4E3B\u8981\u7684\u8D44\u6E90\u5904\u7406\u4E2D\u95F4\u4EF6\uFF0C\u6267\u884C\u63D2\u4EF6\u7684 hook: resolveId load transform</span>
  <span class="token comment">// 304\u8BF7\u6C42\u5904\u7406</span>
  <span class="token comment">// \u5982\u679C\u662F\u8BF7\u6C42 cacheDir \u76EE\u5F55\u5185\u7684\u6587\u4EF6\uFF0C\u8BBE\u7F6E max-age=31536000,immutable</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">transformMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// serve static files \u9759\u6001\u8D44\u6E90\u5904\u7406</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serveRawFsMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">serveStaticMiddleware</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// spa fallback</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>middlewareMode <span class="token operator">||</span> middlewareMode <span class="token operator">===</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
      <span class="token function">history</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">logger</span><span class="token operator">:</span> <span class="token function">createDebugger</span><span class="token punctuation">(</span><span class="token string">&#39;vite:spa-fallback&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// support /dir/ without explicit index.html</span>
        <span class="token literal-property property">rewrites</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token function">to</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> parsedUrl <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> rewritten <span class="token operator">=</span> parsedUrl<span class="token punctuation">.</span>pathname <span class="token operator">+</span> <span class="token string">&#39;index.html&#39;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> rewritten<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> rewritten
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/index.html</span><span class="token template-punctuation string">\`</span></span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>middlewareMode <span class="token operator">||</span> middlewareMode <span class="token operator">===</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// transform index.html</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">indexHtmlMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// handle 404s</span>
    <span class="token comment">// Keep the named function. The name is visible in debug logs via \`DEBUG=connect:dispatcher ...\`</span>
    middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">vite404Middleware</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// error handler</span>
  middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">errorMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token operator">!</span>middlewareMode<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>

  <span class="token keyword">return</span> server
<span class="token punctuation">}</span>
</code></pre></div><h2 id="html-\u6587\u4EF6\u5904\u7406" tabindex="-1">HTML \u6587\u4EF6\u5904\u7406 <a class="header-anchor" href="#html-\u6587\u4EF6\u5904\u7406" aria-hidden="true">#</a></h2><p>\u5173\u952E\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code>server<span class="token punctuation">.</span>transformIndexHtml <span class="token operator">=</span> <span class="token function">createDevHtmlTransformFn</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>

middlewares<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">indexHtmlMiddleware</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5148\u770B <code>indexHtmlMiddleware</code> \u4E2D\u95F4\u4EF6</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/server/middlewares/indexHtmls.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">indexHtmlMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer</span><span class="token punctuation">)</span><span class="token operator">:</span> Connect<span class="token punctuation">.</span>NextHandleFunction <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">viteIndexHtmlMiddleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53BB\u6389url\u4E2D\u7684 ? \u67E5\u8BE2\u53C2\u6570\u548C# hash\u53C2\u6570</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url <span class="token operator">&amp;&amp;</span> <span class="token function">cleanUrl</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token operator">?.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.html&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;sec-fetch-dest&#39;</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// filename = path.join(server.config.root, url.slice(1))</span>
      <span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token function">getHtmlFilename</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> server<span class="token punctuation">)</span> 

      <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
          html <span class="token operator">=</span> <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> html<span class="token punctuation">,</span> req<span class="token punctuation">.</span>originalUrl<span class="token punctuation">)</span>

          <span class="token keyword">return</span> <span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> html<span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D\u7684\u5173\u952E\u4EE3\u7801 <code>html = await server.transformIndexHtml(url, html, req.originalUrl)</code> \u5373\u662F\u5728 <code>createServer</code> \u4E2D\u8D4B\u503C\u7684 <code>server.transformIndexHtml = createDevHtmlTransformFn(server)</code></p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/server/middlewares/indexHtmls.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createDevHtmlTransformFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">html</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">originalUrl</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>preHooks<span class="token punctuation">,</span> postHooks<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">resolveHtmlTransforms</span><span class="token punctuation">(</span>server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">html</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">originalUrl</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">applyHtmlTransforms</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>preHooks<span class="token punctuation">,</span> devHtmlHook<span class="token punctuation">,</span> <span class="token operator">...</span>postHooks<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token function">getHtmlFilename</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> server<span class="token punctuation">)</span><span class="token punctuation">,</span>
      server<span class="token punctuation">,</span>
      originalUrl
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u89E3\u6790\u6240\u6709\u63D2\u4EF6\u94A9\u5B50 <code>transformIndexHtml</code>\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u5185\u90E8\u7684 <code>devHtmlHook</code> \u94A9\u5B50\u5904\u7406\u51FD\u6570</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/plugins/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolveHtmlTransforms</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugins</span><span class="token operator">:</span> readonly Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span>IndexHtmlTransformHook<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> IndexHtmlTransformHook<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">preHooks</span><span class="token operator">:</span> IndexHtmlTransformHook<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token literal-property property">postHooks</span><span class="token operator">:</span> IndexHtmlTransformHook<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> plugin <span class="token keyword">of</span> plugins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hook <span class="token operator">=</span> plugin<span class="token punctuation">.</span>transformIndexHtml
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> hook <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        postHooks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>hook<span class="token punctuation">.</span>enforce <span class="token operator">===</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        preHooks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hook<span class="token punctuation">.</span>transform<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        postHooks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hook<span class="token punctuation">.</span>transform<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>preHooks<span class="token punctuation">,</span> postHooks<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u51FD\u6570\u8D4B\u503C\u7ED9 <code>server.transformIndexHtml</code>\uFF0C\u63A5\u7740\u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0C\u5728html\u6587\u4EF6\u8BF7\u6C42\u5230\u6765\u65F6\u6267\u884C <code>html = await server.transformIndexHtml(url, html, req.originalUrl)</code> \u5B9E\u9645\u8FD4\u56DE\u7684\u662F <code>applyHtmlTransforms</code> \u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\u3002</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/plugins/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">applyHtmlTransforms</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">html</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">hooks</span><span class="token operator">:</span> IndexHtmlTransformHook<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">ctx</span><span class="token operator">:</span> IndexHtmlTransformContext</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">headTags</span><span class="token operator">:</span> HtmlTagDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token literal-property property">headPrependTags</span><span class="token operator">:</span> HtmlTagDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token literal-property property">bodyTags</span><span class="token operator">:</span> HtmlTagDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token literal-property property">bodyPrependTags</span><span class="token operator">:</span> HtmlTagDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> hook <span class="token keyword">of</span> hooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hook</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      html <span class="token operator">=</span> res
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token literal-property property">tags</span><span class="token operator">:</span> HtmlTagDescriptor<span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tags <span class="token operator">=</span> res
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        html <span class="token operator">=</span> res<span class="token punctuation">.</span>html <span class="token operator">||</span> html
        tags <span class="token operator">=</span> res<span class="token punctuation">.</span>tags
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> tag <span class="token keyword">of</span> tags<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag<span class="token punctuation">.</span>injectTo <span class="token operator">===</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          bodyTags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tag<span class="token punctuation">.</span>injectTo <span class="token operator">===</span> <span class="token string">&#39;body-prepend&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          bodyPrependTags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tag<span class="token punctuation">.</span>injectTo <span class="token operator">===</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          headTags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          headPrependTags<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// inject tags</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>headPrependTags<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">=</span> <span class="token function">injectToHead</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> headPrependTags<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>headTags<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">=</span> <span class="token function">injectToHead</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> headTags<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bodyPrependTags<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">=</span> <span class="token function">injectToBody</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> bodyPrependTags<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bodyTags<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">=</span> <span class="token function">injectToBody</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> bodyTags<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> html
<span class="token punctuation">}</span>
</code></pre></div><p><code>applyHtmlTransforms</code> \u51FD\u6570\u4E3B\u8981\u662F\u987A\u5E8F\u6267\u884C\u4F20\u5165\u7684\u94A9\u5B50\u51FD\u6570 <code>[...preHooks, devHtmlHook, ...postHooks]</code>\u3002\u6240\u4EE5\u91CD\u70B9\u5173\u6CE8\u5185\u90E8\u5B9E\u73B0\u7684\u51FD\u6570 <code>devHtmlHook</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/plugins/index.ts</span>
<span class="token comment">// const res = await hook(html, ctx)</span>
<span class="token keyword">const</span> <span class="token literal-property property">devHtmlHook</span><span class="token operator">:</span> <span class="token function-variable function">IndexHtmlTransformHook</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">html<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> htmlPath<span class="token punctuation">,</span> server<span class="token punctuation">,</span> originalUrl <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> server<span class="token operator">?.</span>config<span class="token operator">!</span>
  <span class="token keyword">const</span> base <span class="token operator">=</span> config<span class="token punctuation">.</span>base <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span>


  <span class="token comment">/*******************************
   * \u5047\u8BBE\u60A8\u6709\u4E00\u4E9B\u6E90\u4EE3\u7801\uFF0C\u60A8\u60F3\u5BF9\u5176\u8FDB\u884C\u4E00\u4E9B\u8F7B\u5FAE\u7684\u4FEE\u6539\uFF0C\u6BD4\u5982\u5728\u8FD9\u91CC\u548C\u90A3\u91CC\u66FF\u6362\u51E0\u4E2A\u5B57\u7B26\uFF0C\u7528\u9875\u7709\u548C\u9875\u811A\u5305\u88F9\u5B83\uFF0C\u7B49\u7B49\u3002
   * \u53E6\u4E00\u79CD\u9700\u6C42\uFF0C\u4F60\u5E0C\u671B\u5728\u672B\u5C3E\u751F\u6210\u4E00\u4E2A sourceMap\u3002\u4E3A\u6B64\u4F60\u53EF\u4EE5\u4F7F\u7528 MagicString \uFF0C\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u64CD\u4F5C\u5B57\u7B26\u4E32\u548C\u751F\u6210\u6E90\u6620\u5C04\u7684\u5C0F\u800C\u5FEB\u901F\u7684\u5B9E\u7528\u7A0B\u5E8F\u3002
   * var s = new MagicString( &#39;problems = 99&#39; );
   * s.overwrite( 0, 8, &#39;answer&#39; );
   * s.toString(); // &#39;answer = 99&#39;
  */</span>
  <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MagicString</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token keyword">let</span> scriptModuleIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">await</span> <span class="token function">traverseHtml</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> htmlPath<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">!==</span> NodeTypes<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// script tags</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> src<span class="token punctuation">,</span> isModule <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getScriptInfo</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isModule<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scriptModuleIndex<span class="token operator">++</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">processNodeUrl</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> s<span class="token punctuation">,</span> config<span class="token punctuation">,</span> htmlPath<span class="token punctuation">,</span> originalUrl<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isModule<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// inline js module. convert to src=&quot;proxy&quot;</span>
        s<span class="token punctuation">.</span><span class="token function">overwrite</span><span class="token punctuation">(</span>
          node<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>start<span class="token punctuation">.</span>offset<span class="token punctuation">,</span>
          node<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>end<span class="token punctuation">.</span>offset<span class="token punctuation">,</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;script type=&quot;module&quot; src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
            config<span class="token punctuation">.</span>base <span class="token operator">+</span> htmlPath<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?html-proxy&amp;index=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scriptModuleIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js&quot;&gt;&lt;/script&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// elements with [href/src] attrs</span>
    <span class="token keyword">const</span> assetAttrs <span class="token operator">=</span> assetAttrsConfig<span class="token punctuation">[</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>assetAttrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> p <span class="token keyword">of</span> node<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          p<span class="token punctuation">.</span>type <span class="token operator">===</span> NodeTypes<span class="token punctuation">.</span><span class="token constant">ATTRIBUTE</span> <span class="token operator">&amp;&amp;</span>
          p<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
          assetAttrs<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processNodeUrl</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> s<span class="token punctuation">,</span> config<span class="token punctuation">,</span> htmlPath<span class="token punctuation">,</span> originalUrl<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  html <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    html<span class="token punctuation">,</span>
    <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">src</span><span class="token operator">:</span> path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token constant">CLIENT_PUBLIC_PATH</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">injectTo</span><span class="token operator">:</span> <span class="token string">&#39;head-prepend&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">traverseHtml</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">html</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">filePath</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">visitor</span><span class="token operator">:</span> NodeTransform</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// lazy load compiler</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> parse<span class="token punctuation">,</span> transform <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@vue/compiler-dom&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// @vue/compiler-core doesn&#39;t like lowercase doctypes</span>
  html <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;!doctype\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;!DOCTYPE &#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">transform</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">nodeTransforms</span><span class="token operator">:</span> <span class="token punctuation">[</span>visitor<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> parseError <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loc</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>
      <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token function">formatParseError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Unable to parse </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>parseError<span class="token punctuation">.</span>loc<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>parseError<span class="token punctuation">.</span>frame<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
