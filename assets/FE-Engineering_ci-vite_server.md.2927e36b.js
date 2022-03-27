import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const y='{"title":"server \u5F00\u53D1\u670D\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u539F\u751F node \u5F00\u542F\u4E00\u4E2A http \u670D\u52A1","slug":"\u539F\u751F-node-\u5F00\u542F\u4E00\u4E2A-http-\u670D\u52A1"},{"level":2,"title":"vite \u672C\u5730\u670D\u52A1","slug":"vite-\u672C\u5730\u670D\u52A1"},{"level":2,"title":"\u670D\u52A1\u521B\u5EFA createServer","slug":"\u670D\u52A1\u521B\u5EFA-createserver"},{"level":2,"title":"\u670D\u52A1\u5F00\u542F server.listen()","slug":"\u670D\u52A1\u5F00\u542F-server-listen"},{"level":2,"title":"\u670D\u52A1\u505C\u6B62","slug":"\u670D\u52A1\u505C\u6B62"}],"relativePath":"FE-Engineering/ci-vite/server.md"}',p={},o=t(`<h1 id="server-\u5F00\u53D1\u670D\u52A1" tabindex="-1">server \u5F00\u53D1\u670D\u52A1 <a class="header-anchor" href="#server-\u5F00\u53D1\u670D\u52A1" aria-hidden="true">#</a></h1><h2 id="\u539F\u751F-node-\u5F00\u542F\u4E00\u4E2A-http-\u670D\u52A1" tabindex="-1">\u539F\u751F node \u5F00\u542F\u4E00\u4E2A http \u670D\u52A1 <a class="header-anchor" href="#\u539F\u751F-node-\u5F00\u542F\u4E00\u4E2A-http-\u670D\u52A1" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token comment">// \u521B\u5EFA\u670D\u52A1\u5BF9\u8C61</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D\u4E16\u754C\\n&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u542F\u52A8 HTTP \u670D\u52A1\u5668\u76D1\u542C\u8FDE\u63A5</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u670D\u52A1\u5668\u8FD0\u884C\u5728 http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u505C\u6B62\u670D\u52A1\u5668\u63A5\u53D7\u65B0\u8FDE\u63A5</span>
server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u670D\u52A1\u5DF2\u5173\u95ED&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="vite-\u672C\u5730\u670D\u52A1" tabindex="-1">vite \u672C\u5730\u670D\u52A1 <a class="header-anchor" href="#vite-\u672C\u5730\u670D\u52A1" aria-hidden="true">#</a></h2><p>\u5728 CLI \u547D\u4EE4\u4E2D\uFF0C\u5F53\u6211\u4EEC\u8FD0\u884C <code>vite</code> \u6216 <code>vite server</code> \u547D\u4EE4\u65F6\uFF0C\u6267\u884C\u5982\u4E0B\u4EE3\u7801\uFF0C\u5F00\u542F\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./server&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    root<span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> options<span class="token punctuation">.</span>base<span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> options<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
    <span class="token literal-property property">configFile</span><span class="token operator">:</span> options<span class="token punctuation">.</span>config<span class="token punctuation">,</span>
    <span class="token literal-property property">logLevel</span><span class="token operator">:</span> options<span class="token punctuation">.</span>logLevel<span class="token punctuation">,</span>
    <span class="token literal-property property">clearScreen</span><span class="token operator">:</span> options<span class="token punctuation">.</span>clearScreen<span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token function">cleanOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">createLogger</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>logLevel<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error when starting dev server:\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>e<span class="token punctuation">.</span>stack<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> e <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u670D\u52A1\u521B\u5EFA-createserver" tabindex="-1">\u670D\u52A1\u521B\u5EFA <code>createServer</code> <a class="header-anchor" href="#\u670D\u52A1\u521B\u5EFA-createserver" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u4F1A\u7701\u7565\u90E8\u5206\u4EE3\u7801\uFF0C\u5173\u6CE8\u5F53\u524D\u4E3B\u9898\u7684\u903B\u8F91</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inlineConfig</span><span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> romise<span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u89E3\u6790 CLI \u4F20\u5165\u7684\u914D\u7F6E\u9879</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>inlineConfig<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4F7F\u7528 Connect \u4E2D\u95F4\u4EF6\u7ED3\u6784\u521B\u5EFA\u670D\u52A1\u5BF9\u8C61</span>
  <span class="token keyword">const</span> middlewares <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Connect<span class="token punctuation">.</span>Server
  <span class="token keyword">const</span> httpServer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveHttpServer</span><span class="token punctuation">(</span>serverConfig<span class="token punctuation">,</span> middlewares<span class="token punctuation">)</span>

  <span class="token comment">// \u7EC4\u88C5\u670D\u52A1\u5BF9\u8C61</span>
  <span class="token keyword">const</span> <span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> config<span class="token punctuation">,</span>
    middlewares<span class="token punctuation">,</span>
    httpServer<span class="token punctuation">,</span>
    <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">port<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">startServer</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> isRestart<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;SIGTERM&#39;</span><span class="token punctuation">,</span> exitProcess<span class="token punctuation">)</span>

      <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        watcher<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        container<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">closeHttpServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7701\u7565\u4E00\u5806\u4EE3\u7801\u4E2D\u95F4\u4EF6\u6CE8\u518C\u4EE3\u7801 middlewares.use(xxx)</span>

  <span class="token comment">// \u4E3A\u4E86\u517C\u5BB9\u670D\u52A1\u7AEF\u4F7F\u7528\uFF0C\u5728\u6D4F\u89C8\u5668\u4F7F\u7528\u65F6\uFF0C\u91CD\u5199 server.listen \u4EE3\u7801</span>
  <span class="token comment">// \u5728\u670D\u52A1\u7AEF\u65F6\uFF0Cvite \u672C\u8EAB\u4EE5\u4E2D\u95F4\u4EF6\u5F62\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5 middlewareMode = true\uFF0C\u4F46\u5728\u6D4F\u89C8\u5668\u7AEF middlewareMode = false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>middlewareMode <span class="token operator">&amp;&amp;</span> httpServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isOptimized <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> listen <span class="token operator">=</span> httpServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>
    httpServer<span class="token punctuation">.</span>listen <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">port</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isOptimized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          isOptimized <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          httpServer<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> server
<span class="token punctuation">}</span>

</code></pre></div><p>\u5173\u952E\u4EE3\u7801<code>const httpServer = await resolveHttpServer(serverConfig, middlewares)</code></p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/server/http.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">resolveHttpServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span> ServerOptions<span class="token punctuation">,</span> <span class="token literal-property property">app</span><span class="token operator">:</span> Connect<span class="token punctuation">.</span>Server<span class="token punctuation">,</span>  httpsOptions<span class="token operator">?</span><span class="token operator">:</span> ttpsServerOptions</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>HttpServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>httpsOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7701\u7565\u4EE3\u7801</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u670D\u52A1\u5F00\u542F-server-listen" tabindex="-1">\u670D\u52A1\u5F00\u542F <code>server.listen()</code> <a class="header-anchor" href="#\u670D\u52A1\u5F00\u542F-server-listen" aria-hidden="true">#</a></h2><p>\u670D\u52A1\u5F00\u542F <code>server.listen()</code> \u5B9E\u9645\u6267\u884C\u7684\u662F\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token literal-property property">server</span><span class="token operator">:</span>ViteDevServer <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">port<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">startServer</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> isRestart<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u770B <code>startServer(server, port, isRestart)</code> \u51FD\u6570\u903B\u8F91\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/server/index.ts</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">startServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer<span class="token punctuation">,</span> inlinePort<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">isRestart</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> httpServer <span class="token operator">=</span> server<span class="token punctuation">.</span>httpServer
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>httpServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot call server.listen in middleware mode.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> options <span class="token operator">=</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>server
  <span class="token keyword">const</span> port <span class="token operator">=</span> inlinePort <span class="token operator">||</span> options<span class="token punctuation">.</span>port <span class="token operator">||</span> <span class="token number">3000</span>
  <span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token function">resolveHostname</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>host<span class="token punctuation">)</span>

  <span class="token keyword">const</span> protocol <span class="token operator">=</span> options<span class="token punctuation">.</span>https <span class="token operator">?</span> <span class="token string">&#39;https&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;http&#39;</span>
  <span class="token keyword">const</span> info <span class="token operator">=</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>info
  <span class="token keyword">const</span> base <span class="token operator">=</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>base

  <span class="token keyword">const</span> serverPort <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">httpServerStart</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    port<span class="token punctuation">,</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> options<span class="token punctuation">.</span>strictPort<span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> hostname<span class="token punctuation">.</span>host<span class="token punctuation">,</span>
    <span class="token literal-property property">logger</span><span class="token operator">:</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>logger
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7701\u7565\u8C03\u8BD5\u4EE3\u7801</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>open <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isRestart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>open <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">?</span> options<span class="token punctuation">.</span>open <span class="token operator">:</span> base
    <span class="token function">openBrowser</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>protocol<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hostname<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>serverPort<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>logger
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> server
<span class="token punctuation">}</span>
</code></pre></div><p>\u5173\u952E\u4EE3\u7801\uFF1A<code>httpServerStart</code> \u51FD\u6570\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// vite/src/node/server/http.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">httpServerStart</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">httpServer</span><span class="token operator">:</span> HttpServer<span class="token punctuation">,</span>
  <span class="token literal-property property">serverOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> number
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> boolean <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token literal-property property">logger</span><span class="token operator">:</span> Logger
  <span class="token punctuation">}</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> port<span class="token punctuation">,</span> strictPort<span class="token punctuation">,</span> host<span class="token punctuation">,</span> logger <span class="token punctuation">}</span> <span class="token operator">=</span> serverOptions

    <span class="token comment">// \u7701\u7565\u4EE3\u7801 httpServer.on(&#39;error&#39;, onError) onError \u5B9E\u73B0</span>

    httpServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> host<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      httpServer<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> onError<span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u670D\u52A1\u505C\u6B62" tabindex="-1">\u670D\u52A1\u505C\u6B62 <a class="header-anchor" href="#\u670D\u52A1\u505C\u6B62" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u5F00\u542F\u672C\u5730\u670D\u52A1\uFF0C\u60F3\u8981\u505C\u6B62\u65F6\uFF0C\u5728\u547D\u4EE4\u884C\u7A97\u53E3\u6309 <code>Ctrl + C</code>\uFF0C\u5C31\u4F1A\u9000\u51FA\u5F53\u524D\u7684 node \u8FDB\u7A0B\uFF0C\u4E3B\u8981\u662F <code>Ctrl + C</code> \u4F1A\u5411\u8FDB\u7A0B\u53D1\u9001 <code>SIGTERM</code> \u4FE1\u53F7\uFF0C\u6240\u4EE5\u53EA\u8981\u5411\u8FDB\u7A0B\u6CE8\u518C\u8BE5\u4FE1\u53F7\u76D1\u542C\u4E8B\u4EF6\uFF0C\u5373\u53EF\u5904\u7406\u670D\u52A1\u9000\u51FA\u903B\u8F91\u3002</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inlineConfig</span><span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> romise<span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u89E3\u6790 CLI \u4F20\u5165\u7684\u914D\u7F6E\u9879</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>inlineConfig<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4F7F\u7528 Connect \u4E2D\u95F4\u4EF6\u7ED3\u6784\u521B\u5EFA\u670D\u52A1\u5BF9\u8C61</span>
  <span class="token keyword">const</span> middlewares <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Connect<span class="token punctuation">.</span>Server
  <span class="token keyword">const</span> httpServer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveHttpServer</span><span class="token punctuation">(</span>serverConfig<span class="token punctuation">,</span> middlewares<span class="token punctuation">)</span>
  <span class="token comment">// \u521B\u5EFA\u5173\u95ED\u670D\u52A1</span>
  <span class="token keyword">const</span> closeHttpServer <span class="token operator">=</span> <span class="token function">createServerCloseFn</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>

  <span class="token comment">// \u7EC4\u88C5\u670D\u52A1\u5BF9\u8C61</span>
  <span class="token keyword">const</span> <span class="token literal-property property">server</span><span class="token operator">:</span> ViteDevServer <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> config<span class="token punctuation">,</span>
    middlewares<span class="token punctuation">,</span>
    httpServer<span class="token punctuation">,</span>
    <span class="token function">listen</span><span class="token punctuation">(</span><span class="token parameter">port<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">startServer</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> isRestart<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>


    <span class="token keyword">async</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;SIGTERM&#39;</span><span class="token punctuation">,</span> exitProcess<span class="token punctuation">)</span>

      <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        watcher<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        container<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">closeHttpServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6CE8\u518C SIGTERM \u4FE1\u53F7\u76D1\u542C\u4E8B\u4EF6</span>
  <span class="token function-variable function">exitProcess</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  process<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;SIGTERM&#39;</span><span class="token punctuation">,</span> exitProcess<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 <code>server.close()</code> \u51FD\u6570\u4E2D\u5728\u5173\u95ED\u670D\u52A1<code>closeHttpServer()</code>\u7684\u540C\u65F6\uFF0C\u4E5F\u5904\u7406\u4E86 <code>watcher.close() / ws.close() / container.close()</code> \u7684\u5173\u95ED\u4E8B\u4EF6\u3002 \u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5148\u5173\u6CE8 <code>closeHttpServer()</code> \u51FD\u6570\u7684\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token keyword">const</span> closeHttpServer <span class="token operator">=</span> <span class="token function">createServerCloseFn</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">createServerCloseFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">server</span><span class="token operator">:</span> http<span class="token punctuation">.</span>Server <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> hasListened <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token comment">// TODO: \u6536\u96C6 socket \u5E76\u5728\u5173\u95ED\u65F6\u6E05\u9664\uFF0C\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</span>
  <span class="token keyword">const</span> openSockets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span>net<span class="token punctuation">.</span>Socket<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    openSockets<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      openSockets<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  server<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;listening&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    hasListened <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      openSockets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> s<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasListened<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),e=[o];function c(l,r,u,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{y as __pageData,f as default};
