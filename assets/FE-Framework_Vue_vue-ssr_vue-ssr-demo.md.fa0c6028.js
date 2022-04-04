import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const m='{"title":"Vue SSR \u6F14\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"demo1: \u9759\u6001\u9875\u9762\u76F4\u63A5\u5410\u51FA","slug":"demo1-\u9759\u6001\u9875\u9762\u76F4\u63A5\u5410\u51FA"},{"level":2,"title":"demo2:\u670D\u52A1\u5668\u52A0\u5DE5\u6A21\u677F\u6570\u636E","slug":"demo2-\u670D\u52A1\u5668\u52A0\u5DE5\u6A21\u677F\u6570\u636E"},{"level":2,"title":"demo3: \u524D\u7AEF Ajax \u8BF7\u6C42\u6570\u636E\u66F4\u65B0\u9875\u9762\u5185\u5BB9","slug":"demo3-\u524D\u7AEF-ajax-\u8BF7\u6C42\u6570\u636E\u66F4\u65B0\u9875\u9762\u5185\u5BB9"},{"level":2,"title":"demo4: Vue SPA \u6A21\u5F0F","slug":"demo4-vue-spa-\u6A21\u5F0F"},{"level":2,"title":"demo5: Vue-Server-render","slug":"demo5-vue-server-render"},{"level":2,"title":"demo6: Vue SSR \u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u6784\u5E94\u7528","slug":"demo6-vue-ssr-\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u6784\u5E94\u7528"},{"level":2,"title":"demo7: \u540C\u6784\u5305\u542B\u8DEF\u7531","slug":"demo7-\u540C\u6784\u5305\u542B\u8DEF\u7531"},{"level":2,"title":"demo8: \u540C\u6B65\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6570\u636E","slug":"demo8-\u540C\u6B65\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6570\u636E"},{"level":2,"title":"demo9: \u9884\u53D6\u6570\u636E","slug":"demo9-\u9884\u53D6\u6570\u636E"},{"level":2,"title":"demo10\uFF1A\u4F7F\u7528 serverPrefetch \u9884\u6570\u636E\u548C renered \u540C\u6B65\u6570\u636E","slug":"demo10\uFF1A\u4F7F\u7528-serverprefetch-\u9884\u6570\u636E\u548C-renered-\u540C\u6B65\u6570\u636E"},{"level":2,"title":"demo11: \u6A21\u5757\u5316\u7F16\u7A0B","slug":"demo11-\u6A21\u5757\u5316\u7F16\u7A0B"},{"level":2,"title":"demo12: \u642D\u5EFA SFC \u5F00\u53D1\u73AF\u5883","slug":"demo12-\u642D\u5EFA-sfc-\u5F00\u53D1\u73AF\u5883"},{"level":2,"title":"demo13: Bundle Renderer","slug":"demo13-bundle-renderer"},{"level":3,"title":"SSR\u7CBE\u9AD3","slug":"ssr\u7CBE\u9AD3"}],"relativePath":"FE-Framework/Vue/vue-ssr/vue-ssr-demo.md"}',p={},o=t(`<h1 id="vue-ssr-\u6F14\u793A" tabindex="-1">Vue SSR \u6F14\u793A <a class="header-anchor" href="#vue-ssr-\u6F14\u793A" aria-hidden="true">#</a></h1><p>\u6309\u7167\u4EE5\u4E0B\u51E0\u70B9\u7F16\u5199\u793A\u4F8B\u4EE3\u7801\uFF1A</p><ul><li>\u6700\u521D\u7684 web \u9759\u6001\u9875\u9762\uFF0C\u63D0\u524D\u5199\u597D\u7684\u6574\u4E2A HTML \u9875\u9762\u90E8\u7F72\u5728\u670D\u52A1\u5668\u4E0A\uFF0C\u524D\u7AEF\u8BF7\u6C42\u540E\u76F4\u63A5\u5410\u51FA\uFF1B</li><li>\u518D\u5230\u670D\u52A1\u7AEF\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\uFF0C\u9884\u5B9A\u597D\u9875\u9762\u6A21\u677F\uFF0C\u6839\u636E\u524D\u7AEF\u8BF7\u6C42\u6240\u9700\u6C42\u7684\u6570\u636E\u6CE8\u5165\u6A21\u677F\u6E32\u67D3\u6210\u9875\u9762\u5410\u7ED9\u524D\u7AEF\u663E\u793A\uFF1B</li><li>\u518D\u5230\u524D\u7AEF ajax \u65F6\u4EE3\uFF0C\u7531\u524D\u7AEF\u8BF7\u6C42\u6570\u636E\uFF0C\u6CE8\u5165\u5230\u9875\u9762\u800C\u4E0D\u5237\u65B0\u9875\u9762\u8BF7\u6C42\uFF1B</li><li>\u518D\u5230\u524D\u7AEF SPA \u65F6\u4EE3\uFF0C\u9875\u9762\u6570\u636E\u548C HTML \u6E32\u67D3\u5168\u90E8\u7531\u524D\u7AEF js \u5B8C\u6210\uFF1B</li><li>\u518D\u5230\u73B0\u5728 SSR \u540C\u6784\u65B9\u6848</li></ul><h2 id="demo1-\u9759\u6001\u9875\u9762\u76F4\u63A5\u5410\u51FA" tabindex="-1">demo1: \u9759\u6001\u9875\u9762\u76F4\u63A5\u5410\u51FA <a class="header-anchor" href="#demo1-\u9759\u6001\u9875\u9762\u76F4\u63A5\u5410\u51FA" aria-hidden="true">#</a></h2><div class="language-HTML"><pre><code><span class="token comment">&lt;!-- index.html --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>SSR Demo 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>SSR Demo 1: HTML \u6587\u4EF6\u7531\u670D\u52A1\u5668\u76F4\u63A5\u8FD4\u56DE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>node \u539F\u751F http \u6A21\u5757\u521B\u5EFA\u670D\u52A1\u5668\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// server.js</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">200</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html;&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>node express \u6846\u67B6\u521B\u5EFA\u670D\u52A1\u5668\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// server.js</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo2-\u670D\u52A1\u5668\u52A0\u5DE5\u6A21\u677F\u6570\u636E" tabindex="-1">demo2:\u670D\u52A1\u5668\u52A0\u5DE5\u6A21\u677F\u6570\u636E <a class="header-anchor" href="#demo2-\u670D\u52A1\u5668\u52A0\u5DE5\u6A21\u677F\u6570\u636E" aria-hidden="true">#</a></h2><div class="language-ejs"><pre><code><span class="token comment">&lt;!-- index.ejs --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>ejs render<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> title </span><span class="token delimiter punctuation">%&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5217\u8868<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> index  </span><span class="token delimiter punctuation">%&gt;</span></span>: <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> item </span><span class="token delimiter punctuation">%&gt;</span></span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token punctuation">}</span><span class="token punctuation">)</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>ejs.render \u6E32\u67D3\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// server.js</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3001</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// fs.readFile \u5982\u679C\u672A\u6307\u5B9A\u7F16\u7801\uFF0C\u5219\u5728\u56DE\u8C03data\u8FD4\u56DE\u539F\u59CB\u7F13\u51B2\u533A\uFF0C\u800Cejs.redner\u671F\u671B\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</span>
  <span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index-template.ejs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> 

  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;demo2: \u670D\u52A1\u5668\u4F7F\u7528 ejs \u6E32\u67D3 html \u8FD4\u56DE&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> data<span class="token punctuation">)</span>

  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>ejs \u96C6\u6210\u5230 express \u4E2D\uFF0C\u4F5C\u4E3A\u5176\u6A21\u677F\u5F15\u64CE\u4F7F\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3002</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 1. \u8BBE\u7F6E server \u7684\u6A21\u677F\u5F15\u64CE\u4E3A ejs</span>
server<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. \u8BBE\u7F6Eejs\u6A21\u677F\u6587\u4EF6\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u662F\u6839\u76EE\u5F55\u4E0B\u7684 view \u6587\u4EF6\u5939\u4E0B\u5BFB\u627E\u6A21\u677F\u6587\u4EF6</span>
server<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span> __dirname<span class="token punctuation">)</span>

<span class="token comment">// 3. \u5728\u8DEF\u7531\u4E2D\u8C03\u7528 res.render \u65B9\u6CD5\u6E32\u67D3 html \u8FD4\u56DE</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;demo2: ejs \u4E0E express \u96C6\u6210\u6E32\u67D3\u8FD4\u56DE&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index-template&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo3-\u524D\u7AEF-ajax-\u8BF7\u6C42\u6570\u636E\u66F4\u65B0\u9875\u9762\u5185\u5BB9" tabindex="-1">demo3: \u524D\u7AEF Ajax \u8BF7\u6C42\u6570\u636E\u66F4\u65B0\u9875\u9762\u5185\u5BB9 <a class="header-anchor" href="#demo3-\u524D\u7AEF-ajax-\u8BF7\u6C42\u6570\u636E\u66F4\u65B0\u9875\u9762\u5185\u5BB9" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Ajax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>demo3: \u524D\u7AEFAjax\u8BF7\u6C42\u6570\u636E\u5E76\u6E32\u67D3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">function</span> <span class="token function">initContent</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> elContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> elLiStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
  
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elLiStr <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;li&gt;\u5217\u8868</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    elLiStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;li&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  elContainer<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> elLiStr
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getInitData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1AXMLHttpRequest</span>
  <span class="token keyword">function</span> <span class="token function">handleResponseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response
      <span class="token function">initContent</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> handleResponseData<span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token comment">// \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1Afetch</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">initContent</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getInitData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3003</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;applicatiion/json&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo4-vue-spa-\u6A21\u5F0F" tabindex="-1">demo4: Vue SPA \u6A21\u5F0F <a class="header-anchor" href="#demo4-vue-spa-\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token comment">&lt;!-- index.html --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;demo4: vue \u5BA2\u6237\u7AEF\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4E3B\u5E94\u7528</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ComList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;Vue SPA&lt;/h1&gt;
      &lt;com-List /&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3004</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6DFB\u52A0 Vue-router\uFF0C\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8DEF\u7531\u3002\u5E76\u4E14\u5C06 html \u4E0E js \u5206\u79BB\u3002</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- index.tempalte.html --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u8FD9\u91CC\u9700\u8981\u6DFB\u52A0 defer \u5C5E\u6027\uFF0C\u6216\u8005\u5C06\u6B64\u5F15\u7528\u79FB\u5230 body \u4E0B\u9762 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./vue-render.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">/** vue-render.js*/</span>
<span class="token comment">// \u9996\u9875</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5217\u8868\u9875</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;demo4: vue \u5BA2\u6237\u7AEF\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BA1\u6570\u5668\u9875</span>
<span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h2&gt;Vue \u5B9A\u4E49\u4E8B\u4EF6\u8BA1\u6570\u5668&lt;/h2&gt;
    &lt;div&gt;
      &lt;button @click=&quot;minus&quot;&gt;-&lt;/button&gt;
      &lt;span&gt;{{number}}&lt;/span&gt;
      &lt;button @click=&quot;plus&quot;&gt;+&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E3B\u5E94\u7528</span>
<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list/99&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><p>\u670D\u52A1\u5668\u4EE3\u7801\uFF1A server-router.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3004</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/vue-render.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./vue-render.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u91CC\u4F7F\u7528 * \u53F7\u5339\u914D\uFF0C\u5E76\u79F0\u5230 /vue-router.js \u4E0B\u9762\uFF0C\u8FD9\u6837\u5373\u4F7F\u9875\u9762\u8DEF\u7531\u4E3A /list/99 \u6216 /counter \u4E5F\u53EF\u6E32\u67D3\u9875\u9762\uFF0C\u4E0D\u4F1A\u62A5\u9519</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo5-vue-server-render" tabindex="-1">demo5: Vue-Server-render <a class="header-anchor" href="#demo5-vue-server-render" aria-hidden="true">#</a></h2><p>\u5728\u670D\u52A1\u7AEF\u7684\u6E32\u67D3\u903B\u8F91\u4E3B\u8981\u5206\u4E3A\u4E24\u6B65\uFF1A</p><ol><li>\u4F7F\u7528 new Vue \u751F\u6210\u4E00\u4E2A\u5E94\u7528\u6784\u9020\u5668</li><li>\u4F7F\u7528 Vue \u7684\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u63D2\u4EF6 vue-server-renderer \uFF0C\u5C06\u5F53\u524D\u7684\u7EC4\u4EF6\u6784\u9020\u5668\u6E32\u67D3\u6210\u4E00\u6BB5 html \u7247\u6BB5\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u6E32\u67D3\u5668\u6E32\u67D3</li></ol><p>\u6B64\u65F6 vue-server-renderer \u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8E ejs \u4E00\u6837\u7684\u6A21\u677F\u5F15\u64CE\u4F5C\u7528\u3002</p><p>\u4EE5\u4E0B\u7684\u4F8B\u5B50\u9700\u8981\u672C\u5730\u5DE5\u7A0B\u5B89\u88C5 vue \u548C vue-server-renderer \u5305\uFF0C\u4E14\u8981\u6C42\u7248\u672C\u4E00\u6837\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * \u7B2C\u4E00\u79CD\u60C5\u5F62\uFF1A
 * \u6B64\u65F6\u76F4\u63A5\u8FD4\u56DE\u7684\u5C31\u662F vueApp.$options.template \u6E32\u67D3\u51FA\u7684\u5B57\u7B26\u4E32\uFF1A
 * &lt;div data-server-rendered=&quot;true&quot;&gt;&lt;h1&gt;Hello Vue SSSR&lt;/h1&gt;&lt;/div&gt;
 * \u5E76\u6CA1\u6709\u5305\u542B\u6807\u51C6\u7684HTML\u7ED3\u6784\uFF1Ahtml - head -body
 * \u53E6\u5916\u6CE8\u610F\u4E00\u70B9\uFF1A\u7531 vue-server-renderer \u6E32\u67D3\u51FA\u7684\u5E94\u7528\u6839\u8282\u70B9\u4E0A\u4F1A\u81EA\u52A8\u6DFB\u52A0 vue \u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6807\u5FD7\u5C5E\u6027\uFF1Adata-server-rendered=&quot;true&quot;
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR --fragments&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">htmlStr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E3A\u4E86\u663E\u793A\u5B8C\u6574\u7684HTML\u7ED3\u6784\uFF0C\u6211\u4EEC\u53EF\u4EE5\u624B\u52A8\u62FC\u63A5\u5B8C\u6210\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u7B2C\u4E8C\u79CD\u60C5\u5F62\uFF1A
 * \u53EF\u4EE5\u4F7F\u7528\u6A21\u677F\u5B57\u7B26\u4E32\u62FC\u63A5\u51FAHTML\u7ED3\u6784\u6807\u7B7E
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR -- html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">htmlStr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
      &lt;head&gt;&lt;title&gt;vue-ssr-html&lt;/title&gt;&lt;/head&gt;
      &lt;body&gt;
        </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>htmlStr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      &lt;/body&gt;
    &lt;/html&gt;</span><span class="token template-punctuation string">\`</span></span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6216\u8005\u63D0\u4F9B\u4E00\u4E2A\u7528\u4E8Ehtml\u6E32\u67D3\u7684\u6A21\u677F\u6587\u4EF6</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr template<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5751\uFF1A\u6CE8\u91CA\u4E2D\u4E0D\u80FD\u5B58\u5728\u7A7A\u683C --&gt;</span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u670D\u52A1\u7AEF\u4EE3\u7801\u66F4\u6539\u903B\u8F91\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u7B2C\u4E09\u79CD\u60C5\u5F62:
 * \u63D0\u4F9B\u4E00\u4E2A html \u6A21\u677F\uFF0C\u7528\u4E8E vueServerRender \u5C06\u6E32\u67D3\u51FA\u7684 html \u7247\u6BB5\u5B57\u7B26\u4E32\u63D2\u5165\u5230\u6A21\u677F\u6307\u5B9A\u4F4D\u7F6E\u4E2D\u8FD4\u56DE
 * \u6A21\u677F\u4E2D\u63D0\u4F9B\u7684\u63D2\u5165\u5185\u5BB9\u7684\u4F4D\u7F6E\u6807\u8BC6\u662F\uFF1A&lt;!--vue-ssr-outlet--&gt;
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> rendererWithTemplate <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template <span class="token comment">// \u521B\u5EFA\u6E32\u67D3\u5668\u65F6\u901A\u8FC7\u914D\u7F6E\u53C2\u6570\u63D0\u4F9B\u9875\u9762\u6A21\u677F</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR -- tmplate&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  rendererWithTemplate<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4EE5\u4E0A\u5410\u7ED9\u6D4F\u89C8\u5668\u6E32\u67D3\u7684\u90FD\u662F\u9759\u6001\u5185\u5BB9\uFF0C\u4E0B\u9762\u6D4B\u8BD5\u4E0B\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E8B\u4EF6\u7684\u8BA1\u6570\u5668 Vue \u7EC4\u4EF6\u662F\u5426\u6709\u6548</p><div class="language-js"><pre><code>server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR -- event -- counter&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
      &lt;div&gt;
        &lt;button @click=&quot;minus&quot;&gt;minus&lt;/button&gt;
        &lt;span&gt;{{ count }}&lt;/span&gt;
        &lt;button @click=&quot;plus&quot;&gt;plus&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  rendererWithTemplate<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E8B\u5B9E\u8BC1\u660E\uFF0C\u8BA1\u6570\u5668\u7EC4\u4EF6\u53EA\u662F\u89C6\u56FE\u6E32\u67D3\u6210\u529F\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u5E76\u6CA1\u6709\u751F\u6548\u3002</p><p>\u56E0\u4E3A Vue SSR \u4E2D\u7684 renderer \u53EA\u8D1F\u8D23\u628A\u5F53\u524D\u72B6\u6001\u4E0B Vue \u7EC4\u4EF6\u6E32\u67D3\u6210 html \u7247\u6BB5\u5B57\u7B26\u4E32\u4F9B\u6D4F\u89C8\u5668\u6E32\u67D3\uFF0C\u800C\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u4E8B\u4EF6\u89E6\u53D1\u54CD\u5E94\u5F0F\u66F4\u65B0\u89C6\u56FE\u7684\u529F\u80FD\u4ECD\u7136\u9700\u8981\u5BA2\u6237\u7AEF\u63D0\u4F9B\uFF0C\u8FD9\u5C31\u662F\u540C\u6784\u3002</p><p>\u7B80\u5355\u7406\u89E3 SSR \u540C\u6784\uFF1A\u5C31\u662F\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u9700\u8981\u540C\u65F6\u6E32\u67D3\u5F53\u524D\u72B6\u6001\u7684\u9875\u9762\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u90E8\u5206\u76F8\u5F53\u4E8E\u5F53\u524D\u6570\u636E\u72B6\u6001\u4E0B\u9875\u9762\u7684\u4E00\u4E2A\u5FEB\u7167\uFF0C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u540E\uFF0C\u6D4F\u89C8\u5668\u4ECD\u7136\u9700\u8981\u7531\u5BA2\u6237\u7AEF\u6765\u6FC0\u6D3B\u76F8\u5173\u4E8B\u4EF6\u548C\u54CD\u5E94\u5F0F\u66F4\u65B0\u7684\u529F\u80FD\u3002</p><h2 id="demo6-vue-ssr-\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u6784\u5E94\u7528" tabindex="-1">demo6: Vue SSR \u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u6784\u5E94\u7528 <a class="header-anchor" href="#demo6-vue-ssr-\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u540C\u6784\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u53C2\u7167 demo4 \u6D4F\u89C8\u5668 SPA \u7684\u4EE3\u7801\uFF0C\u5728\u6A21\u677F\u4E2D\u6DFB\u52A0 vue \u7684 cdn \u94FE\u63A5\uFF0C\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u9700\u8981\u7684\u4EE3\u7801\u3002</p><p>\u6CE8\u610F\u5BA2\u6237\u7AEF\u6E32\u67D3\u4EA7\u751F\u7684 vueApp \u9700\u6C42\u4E0E\u6E32\u67D3\u7AEF\u4FDD\u6301\u4E00\u81F4\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./render-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BA2\u6237\u7AEF\u6E32\u67D3\u903B\u8F91 render-client.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR -- event -- counter&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// $mount \u7684\u6302\u8F7D\u70B9\u6DFB\u52A0\u5230\u8FD9\u91CC id=&quot;app&quot;</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;div&gt;
      &lt;button @click=&quot;minus&quot;&gt;minus&lt;/button&gt;
      &lt;span&gt;{{ count }}&lt;/span&gt;
      &lt;button @click=&quot;plus&quot;&gt;plus&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
vueApp<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// \u5BA2\u6237\u7AEF\u6302\u8F7D\u5E94\u7528</span>
</code></pre></div><p>\u6B64\u65F6\u670D\u52A1\u7AEF\u4EE3\u7801\u6DFB\u52A0\u5BF9 render-client.js \u8BF7\u6C42\u7684\u54CD\u5E94</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> rendererWithTemplate <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vueApp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello Vue SSSR -- event -- counter&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// $mount \u7684\u6302\u8F7D\u70B9\u6DFB\u52A0\u5230\u8FD9\u91CC id=&quot;app&quot;</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
      &lt;div&gt;
        &lt;button @click=&quot;minus&quot;&gt;minus&lt;/button&gt;
        &lt;span&gt;{{ count }}&lt;/span&gt;
        &lt;button @click=&quot;plus&quot;&gt;plus&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  rendererWithTemplate<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>vueApp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/render-client.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./render-client.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u518D\u70B9\u51FB\u9875\u9762\u53EF\u4EE5\u53D1\u73B0\u4E8B\u4EF6\u7ED1\u5B9A\u751F\u6548\u4E86\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4E0Edemo4\u4F8B\u5B50\u76F4\u63A5\u5BA2\u6237\u7AEF\u6E32\u67D3\u6700\u5927\u7684\u533A\u522B\u662F\uFF0C\u9488\u5BF9\u9996\u9875\u8DEF\u7531\u8BF7\u6C42\u8FD4\u56DE\u7684 html \u7ED3\u6784\u3002</p><p>demo4 \u8FD4\u56DE\u7684\u53EA\u662F\u4E00\u4E2A\u7A7A\u7684\u8282\u70B9<code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>\uFF0C\u4F46\u6B64\u65F6\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u540C\u6784\u5E94\u7528\u540E\uFF0C\u9996\u9875\u8FD4\u56DE\u7684html\u5305\u542B\u5B8C\u6574\u5185\u5BB9\uFF0C\u5E76\u4E14\u9875\u9762\u53EF\u4EA4\u4E92\u3002</p><p>\u6B64\u65F6\u4F60\u53EF\u80FD\u4F1A\u7591\u60D1\uFF0C\u867D\u7136\u9996\u9875\u8BF7\u6C42\u670D\u52A1\u7AEF\u8FD4\u56DE\u4E86\u5B8C\u6574\u7684HTML\u7ED3\u6784\uFF0C\u4F46\u5BA2\u6237\u7AEF vue \u4EE3\u7801\u4E5F\u4EA7\u751F\u4E86\u4F5C\u7528\uFF0C\u90A3\u9875\u9762\u662F\u4E0D\u662F\u88AB\u6E32\u67D3\u4E86\u4E24\u6B21\u5462\uFF1F</p><p>\u53EF\u4EE5\u4FDD\u6301\u8FD9\u4E2A\u7591\u95EE\uFF0C\u7B49\u540E\u9762\u7ED3\u5408 vue \u6E90\u7801\u548C vue-server-renderer \u6E90\u7801\u89E3\u6790\u7684\u65F6\u95F4\u5C31\u4F1A\u627E\u5230\u7B54\u6848\u3002</p><h2 id="demo7-\u540C\u6784\u5305\u542B\u8DEF\u7531" tabindex="-1">demo7: \u540C\u6784\u5305\u542B\u8DEF\u7531 <a class="header-anchor" href="#demo7-\u540C\u6784\u5305\u542B\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u5305\u542B\u8DEF\u7531\u7684\u5E94\u7528\u540C\u6784\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u7684\u76EE\u6807\u662F\uFF1A</p><ol><li>\u8DEF\u7531\u5728\u5BA2\u6237\u7AEF\u751F\u6548\uFF0C\u5373\u8DEF\u7531\u5B8C\u5168\u7531\u5BA2\u6237\u7AEF\u63A7\u5236\uFF0C\u5207\u6362\u8DEF\u7531\u65F6\u4E0D\u4EA7\u751F\u65B0\u7684\u9875\u9762\u8BF7\u6C42</li><li>\u5728\u4E0D\u540C\u8DEF\u7531\u5730\u5740\u4E0B\u5237\u65B0\u9875\u9762\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5F53\u524D\u8DEF\u7531\u4E0B\u7684 HTML \u5185\u5BB9\u3002\u800C\u4E0D\u662F\u4E00\u76F4\u662F\u9996\u9875\u5185\u5BB9</li></ol><div class="language-html"><pre><code><span class="token comment">&lt;!-- index.template.html --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./render-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BA2\u6237\u7AEF\u521B\u5EFA\u5E94\u7528\u903B\u8F91\u62BD\u79BB\u5230 render-client.js</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u7EC4\u4EF6
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8DEF\u7531: \u5217\u8868\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h2&gt;\u8DEF\u7531\uFF1A\u8BA1\u6570\u5668&lt;/h2&gt;
    &lt;div&gt;
      &lt;button @click=&quot;minus&quot;&gt;-&lt;/button&gt;
      &lt;span&gt;{{number}}&lt;/span&gt;
      &lt;button @click=&quot;plus&quot;&gt;+&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u670D\u52A1\u7AEF\u521B\u5EFA\u5E94\u7528\u7684\u903B\u8F91\u62BD\u79BB\u5230 render-server.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u7EC4\u4EF6
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8DEF\u7531: \u5217\u8868\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">minus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h2&gt;\u8DEF\u7531\uFF1A\u8BA1\u6570\u5668&lt;/h2&gt;
    &lt;div&gt;
      &lt;button @click=&quot;minus&quot;&gt;-&lt;/button&gt;
      &lt;span&gt;{{number}}&lt;/span&gt;
      &lt;button @click=&quot;plus&quot;&gt;+&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

exports<span class="token punctuation">.</span>app <span class="token operator">=</span> app
exports<span class="token punctuation">.</span>router <span class="token operator">=</span> router
</code></pre></div><p>\u53EF\u4EE5\u5BF9\u5E94\u4E0B render-client.js \u548C render-server.js \u7684\u4EE3\u7801\uFF0C\u5BF9 vue \u5E94\u7528\u76F8\u5173\u7684\u4EE3\u7801\u5B8C\u5168\u4E00\u6837\uFF0C\u5DEE\u5F02\u7684\u4EE3\u7801\u662F\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u624B\u52A8\u6302\u8F7D\u5E94\u7528\uFF1A<code>app.$mount(&#39;#app&#39;)</code></li><li>\u670D\u52A1\u7AEF\u5BFC\u51FA\u5E94\u7528\uFF1A<code>exports.app = app</code></li></ul><p>\u6B64\u65F6\u670D\u52A1\u5668 server.js \u7684\u4EE3\u7801\u4FEE\u6539\u4E3A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./render-server.js&#39;</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/render-client.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./render-client.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u786E\u4FDD\u9875\u9762\u5237\u65B0\u65F6\uFF0C\u6E32\u67D3\u5F53\u524D\u8DEF\u7531\u4E0B\u7684\u9875\u9762\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF
   * router.push \u786E\u4FDD\u5F53\u524D\u670D\u52A1\u5668\u521B\u5EFA\u7684 vue \u5E94\u7528\u5207\u6362\u5230\u5BF9\u5E94\u8DEF\u7531\u7684\u7EC4\u4EF6\u4E0A
   * \u5173\u4E8E router \u76F8\u5173API\uFF0C\u67E5\u770B vue-router \u5B98\u65B9\u6587\u6863
   */</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u5751\uFF1Avue-router 2.x \u5347\u7EA7\u540E\uFF0C\u9700\u8981\u589E\u52A0 catch \u6355\u83B7\uFF0C\u4E0D\u7136\u91CD\u590D\u5237\u65B0\u9875\u9762\u4F1A\u62A5\u9519</span>
  router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchedComponents <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getMatchedComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matchedComponents<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Not Found!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;renderToString Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo8-\u540C\u6B65\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6570\u636E" tabindex="-1">demo8: \u540C\u6B65\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6570\u636E <a class="header-anchor" href="#demo8-\u540C\u6B65\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6570\u636E" aria-hidden="true">#</a></h2><p>Vue SSR \u4E2D\u6570\u636E\u72B6\u6001\u7684\u540C\u6B65\u9700\u8981\u901A\u8FC7 Vuex \u6765\u5B9E\u73B0\u3002</p><p>\u5728HTML\u6A21\u677F\u4E2D\u589E\u52A0 vuex \u7684 CDN \u94FE\u63A5\uFF0C\u5E76\u4E14\u9879\u76EE\u4E0B\u5B89\u88C5 vuex \u5305\uFF1A</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./render-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BA2\u6237\u7AEF\u62BD\u79BB\u7684\u5E94\u7528\u4EE3\u7801\u589E\u52A0 vuex \u5B9E\u4F8B\u5316\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u7EC4\u4EF6
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8DEF\u7531: \u5217\u8868\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;\u8BA1\u6570\u5668: \u4ECE store \u8BFB\u53D6 count&lt;/h1&gt;
    &lt;h2&gt;{{ $store.state.count }}&lt;/h2&gt;
    &lt;div&gt;
      &lt;button @click=&quot;increase&quot;&gt;\u52A010&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u6570\u636E\u72B6\u6001 store
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token operator">+</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> n
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u540C\u6B65 store.state \u7684\u5173\u952E\u4EE3\u7801
 * \u7528\u6765\u540C\u6B65\u670D\u52A1\u7AEF\u7684 store\u3000\u5230\u5BA2\u6237\u7AEF\u3000store, \u4ECE\u800C\u4F7F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u521D\u65F6\u72B6\u6001\u4E00\u81F4
 */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><p>\u670D\u52A1\u7AEF\u62BD\u79BB\u7684\u5E94\u7528\u903B\u8F91\u4EE3\u7801\uFF1Arender-server.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vuex <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vuex&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u7B2C\u4E00\u79CD\u60C5\u5F62\uFF1A
 * \u6240\u6709\u8BF7\u6C42\u5171\u4EAB\u540C\u4E00\u4E2A\u5E94\u7528 app\uFF0C\u5F88\u5BB9\u6613\u5BFC\u81F4\u4EA4\u53C9\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3 (cross-request state pollution)\u3002
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8DEF\u7531: \u5217\u8868\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;\u8BA1\u6570\u5668: \u4ECE store \u8BFB\u53D6 count&lt;/h1&gt;
    &lt;h2&gt;{{ $store.state.count }}&lt;/h2&gt;
    &lt;div&gt;
      &lt;button @click=&quot;increase&quot;&gt;\u52A010&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u6570\u636E\u72B6\u6001 store
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increase</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token operator">+</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> n
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store
<span class="token punctuation">}</span>
</code></pre></div><p>\u670D\u52A1\u7AEF\u4EE3\u7801\uFF1Aserver.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7B2C\u4E00\u79CD\u60C5\u5F62\uFF1A\u6240\u6709\u8BF7\u6C42\u5171\u4EAB\u540C\u4E00\u4E2A\u5E94\u7528 app\uFF0C\u5F88\u5BB9\u6613\u5BFC\u81F4\u4EA4\u53C9\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3 (cross-request state pollution)\u3002</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./render-server.js&#39;</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/render-client.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./render-client.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchedComponents <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getMatchedComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matchedComponents<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Not Found!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u6BCF\u6B21\u8BF7\u6C42\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u52A0 200\uFF0C\u76EE\u7684\u6709\u4E24\u4E2A\uFF1A
     * 1. \u9A8C\u8BC1\u6570\u636E\u72B6\u6001\u5355\u4F8B\u7684\u95EE\u9898: \u6BCF\u8BF7\u6C42\u4E00\u6B21\uFF0C\u521D\u59CB\u503C\u52A0 200\u3002
     * 2. \u9A8C\u8BC1\u6D4F\u89C8\u5668\u6253\u5F00\u7684\u9875\u9762\u663E\u793A 200\uFF0C\u5E76\u4E14\u9875\u9762\u8BF7\u6C42\u8FD4\u56DE\u7684 window.__INITIAL_STATE__.state.count \u4E3A 2000\uFF0C\u8BF4\u660E\u9875\u9762\u6E32\u67D3\u662F\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u800C\u4E0D\u662F\u5BA2\u6237\u7AEF\u4F5C\u7528\u7684\u3002
     */</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token comment">/**
     * \u670D\u52A1\u5668\u6E32\u67D3\u65F6\u89E6\u53D1 store \u66F4\u65B0\u540E\u7684 state \u9700\u8981\u901A\u8FC7 renderToString \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u5B9A\u4E49\u4E00\u4E2Arenderer\u6E32\u67D3\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61 context
     * \u6B64\u65F6 renderToString \u5185\u90E8\u4F1A\u901A\u8FC7 renderState \u65B9\u6CD5
     * \u5728\u4E0A\u8FF0\u521B\u5EFA renderer \u65F6\u4F20\u5165\u7684 index.template.html \u4E2D\u81EA\u52A8\u6DFB\u52A0\u4E00\u6BB5 script \u4EE3\u7801:
     * &lt;script&gt;window.____INITIAL_STATE__ = context.state;&lt;/script&gt;
     */</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
    <span class="token punctuation">}</span>
    renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6D4F\u89C8\u5668\u8DEF\u7531\u5207\u6362\u5230\u8BA1\u6570\u5668 /counter\uFF0C\u9875\u9762\u6E32\u67D3 count \u503C\u662F 200\uFF0C\u67E5\u770B\u8FD4\u56DE\u7684 html \u6570\u636E\u7ED3\u679C<code>window.__INITIAL_STATE__={&quot;count&quot;:200}</code></p><p>\u6B64\u65F6\uFF0C\u4F60\u53EF\u4EE5\u591A\u6B21\u5237\u65B0\u8BE5\u9875\u9762\uFF0C\u4F1A\u53D1\u73B0 count \u7684\u503C\u4E00\u76F4\u5728\u52A0200\uFF0C\u8FD9\u5C31\u662F<strong>\u6570\u636E\u72B6\u6001\u5355\u4F8B</strong>\u9020\u6210\u7684\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3\u3002</p><p>\u5F53\u6211\u4EEC\u5728\u7F16\u5199\u7EAF\u5BA2\u6237\u7AEF (client-only) \u7684 SPA \u5E94\u7528\u65F6\uFF0C\u6211\u4EEC\u6BCF\u4E2A\u4EBA\u7684\u6D4F\u89C8\u5668\u73AF\u5883\u9875\u9762\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u6BCF\u6B21\u6253\u5F00\u4E00\u4E2A SPA \u9875\u9762\uFF0C\u90FD\u4F1A\u521B\u5EFA\u72EC\u7ACB\u7684\u5E94\u7528\u5355\u4F8B\uFF0C\u4E0D\u4F1A\u6709\u5F71\u54CD\u3002\u4F46\u662F\uFF0CNode.js \u670D\u52A1\u5668\u662F\u4E00\u4E2A\u957F\u671F\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002\u5F53\u6211\u4EEC\u7684\u4EE3\u7801\u8FDB\u5165\u8BE5\u8FDB\u7A0B\u65F6\uFF0C\u5B83\u5C06\u8FDB\u884C\u4E00\u6B21\u53D6\u503C\u5E76\u7559\u5B58\u5728\u5185\u5B58\u4E2D\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u521B\u5EFA\u4E00\u4E2A\u5355\u4F8B\u5E94\u7528\uFF0C\u53EA\u8981\u670D\u52A1\u672A\u91CD\u542F\uFF0C\u5B83\u90FD\u662F\u540C\u4E00\u4E2A\u5E94\u7528\u3002\u8FD9\u6837\u5C31\u5BFC\u81F4\u5E94\u7528\u72B6\u6001\u4F1A\u5728\u6BCF\u4E2A\u4F20\u5165\u7684\u8BF7\u6C42\u4E4B\u95F4\u5171\u4EAB\uFF0C\u9020\u6210\u5E94\u7528\u7684\u4EA4\u53C9\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3 (cross-request state pollution)\u3002</p><blockquote><p><a href="https://ssr.vuejs.org/zh/guide/structure.html#%E9%81%BF%E5%85%8D%E7%8A%B6%E6%80%81%E5%8D%95%E4%BE%8B" target="_blank" rel="noopener noreferrer">Vue SSR \u6307\u5357\uFF1A\u907F\u514D\u72B6\u6001\u5355\u4F8B</a></p></blockquote><p>\u6240\u4EE5\uFF0C\u6211\u4EEC<strong>\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Vue \u5B9E\u4F8B</strong>\u3002\u8FD9\u4E0E\u6BCF\u4E2A\u7528\u6237\u5728\u81EA\u5DF1\u7684\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u65B0\u5E94\u7528\u7A0B\u5E8F\u7684\u5B9E\u4F8B\u7C7B\u4F3C\u3002\u6240\u4EE5\u5C06 render-server.js \u7684\u4E1A\u52A1\u4EE3\u7801\u5305\u88C5\u5728\u4E00\u4E2A\u53EF\u91CD\u590D\u6267\u884C\u7684\u5DE5\u5382\u51FD\u6570\u4E2D\u3002</p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vuex <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vuex&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u7B2C\u4E8C\u79CD\u60C5\u5F62\uFF1A
 * \u4E3A\u4E86\u907F\u514D\u6570\u636E\u72B6\u6001\u5355\u4F8B\u7684\u60C5\u51B5\uFF0C\u4F7F\u7528 createApp \u5DE5\u5382\u51FD\u6570\uFF0C\u4E3A\u6BCF\u4E00\u6B21\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E94\u7528 app
 */</span>
<span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8DEF\u7531: \u5217\u8868\u6E32\u67D3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;{{ title }}&lt;/h1&gt;
      &lt;ul&gt;
        &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> ComCounter <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Counter&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
      &lt;h1&gt;\u8BA1\u6570\u5668: \u4ECE store \u8BFB\u53D6 count&lt;/h1&gt;
      &lt;h2&gt;{{ $store.state.count }}&lt;/h2&gt;
      &lt;div&gt;
        &lt;button @click=&quot;increase&quot;&gt;\u52A010&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
      &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
      &lt;router-link to=&quot;/list&quot;&gt;\u5217\u8868&lt;/router-link&gt;
      &lt;router-link to=&quot;/counter&quot;&gt;\u8BA1\u6570\u5668&lt;/router-link&gt;
      &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token comment">/**
   * \u8DEF\u7531
   */</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/counter&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComCounter<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
    routes
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token comment">/**
   * \u6570\u636E\u72B6\u6001 store
   */</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increase</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token operator">+</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> n
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> app<span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
    store
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>createApp <span class="token operator">=</span> createApp
</code></pre></div><p>\u6B64\u65F6\uFF0C\u670D\u52A1\u7AEF\u4EE3\u7801\u903B\u8F91\u53D8\u66F4\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u7B2C\u4E00\u79CD\u60C5\u5F62\uFF1A\u6240\u6709\u8BF7\u6C42\u5171\u4EAB\u540C\u4E00\u4E2A\u5E94\u7528 app\uFF0C\u5F88\u5BB9\u6613\u5BFC\u81F4\u4EA4\u53C9\u8BF7\u6C42\u72B6\u6001\u6C61\u67D3 (cross-request state pollution)\u3002</span>
<span class="token comment">// const { app, router, store } = require(&#39;./render-server.js&#39;)</span>

<span class="token comment">// \u7B2C\u4E8C\u79CD\u60C5\u5F62\uFF1A\u4E3A\u4E86\u907F\u514D\u6570\u636E\u72B6\u6001\u5355\u4F8B\u7684\u60C5\u51B5\uFF0C\u4F7F\u7528 createApp \u5DE5\u5382\u51FD\u6570\uFF0C\u4E3A\u6BCF\u4E00\u6B21\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E94\u7528 app</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./render-server.js&#39;</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/render-client.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./render-client.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5E94\u7528\u5B9E\u4F8B</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchedComponents <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getMatchedComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matchedComponents<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Not Found!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increase&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
    <span class="token punctuation">}</span>
    renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server Error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo9-\u9884\u53D6\u6570\u636E" tabindex="-1">demo9: \u9884\u53D6\u6570\u636E <a class="header-anchor" href="#demo9-\u9884\u53D6\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5E94\u7528\u7684\u6570\u636E\u5F80\u5F80\u90FD\u662F\u901A\u8FC7\u53D1\u9001\u8BF7\u6C42\uFF0C\u63A5\u53E3\u8FD4\u56DE\u7684\u3002\u6240\u4EE5\u5728\u670D\u52A1\u7AEF\u6E32\u67D3 app \u5E94\u7528\u524D\uFF0C\u9700\u8981\u63D0\u524D\u62FF\u5230\u5F53\u524D\u9875\u9762\u6E32\u67D3\u6240\u4F9D\u8D56\u7684\u6570\u636E\u3002</p><p>\u8FD9\u91CC\u9700\u8981\u4F7F\u7528 axios \u5E93\uFF0C\u5B83\u5373\u53EF\u4EE5\u5E94\u7528\u5728\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u4E5F\u53EF\u4EE5\u5E94\u7528\u5728 node \u73AF\u5883\u3002\u6211\u4EEC\u90FD\u5728 <code>store.actions</code> \u4E2D\u8FDB\u884C\u6570\u636E\u8BF7\u6C42\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./render-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BA2\u6237\u7AEF\u4E1A\u52A1\u4EE3\u7801 render-client.js</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u7EC4\u4EF6
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;SSR \u6570\u636E\u9884\u53D6&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u8FD9\u91CC\u8981 return \u51FA\u53BB\uFF0C\u56E0\u4E3A server.js \u4E2D\u53EF\u80FD\u9700\u8981\u5728 then \u4E2D\u5904\u7406\u989D\u5916\u903B\u8F91
     */</span>
    <span class="token keyword">return</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;fetchList&#39;</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> <span class="token punctuation">{</span> asyncData <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">$store</span><span class="token operator">:</span>store<span class="token punctuation">,</span> <span class="token literal-property property">$route</span><span class="token operator">:</span>route <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>store<span class="token punctuation">,</span> route<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async data is successed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list/99&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u6570\u636E\u72B6\u6001 store
 */</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list <span class="token operator">=</span> payload
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/**
       * \u5751\u4E00\uFF1A \u9700\u8981\u533A\u5206\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u73AF\u5883\u533A\u522B
       * \u670D\u52A1\u7AEF\u5982\u679C\u76F4\u63A5\u7528 /\uFF0C\u6307\u5411\u7684\u662F localhost:80
       */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span>default<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;payload params.id in client broswer&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/list</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_LIST&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u4F7F\u7528 store \u9700\u8981\u7684\u5173\u952E\u4EE3\u7801
 * \u7528\u6765\u540C\u6B65\u670D\u52A1\u7AEF\u7684 store\u3000\u5230\u5BA2\u6237\u7AEF\u3000store, \u4ECE\u800C\u4F7F\u5176\u4E00\u81F4
 */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div><p>\u670D\u52A1\u7AEF\u4E1A\u52A1\u903B\u8F91 render.server.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vuex <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vuex&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
 * \u7EC4\u4EF6
 */</span>
<span class="token keyword">const</span> ComIndex <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;SSR \u6570\u636E\u9884\u53D6&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u8FD9\u91CC\u8981 return \u51FA\u53BB\uFF0C\u56E0\u4E3A server.js \u4E2D\u9700\u8981\u5728 then \u4E2D\u5904\u7406state \u540C\u6B65
     */</span>
    <span class="token keyword">return</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;fetchList&#39;</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> <span class="token punctuation">{</span> asyncData <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">$store</span><span class="token operator">:</span>store<span class="token punctuation">,</span> <span class="token literal-property property">$route</span><span class="token operator">:</span>route <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>store<span class="token punctuation">,</span> route<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async data is successed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list/99&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u8DEF\u7531
 */</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComIndex<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ComList<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u6570\u636E\u72B6\u6001 store
 */</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>list <span class="token operator">=</span> payload
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">/**
       * \u5751\u4E00\uFF1A \u9700\u8981\u533A\u5206\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u73AF\u5883\u533A\u522B
       * \u670D\u52A1\u7AEF\u5982\u679C\u76F4\u63A5\u7528 /\uFF0C\u6307\u5411\u7684\u662F localhost:80
       */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span>default<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/**
       * \u5751\u4E8C\uFF1A\u8FD9\u91CC\u8981 return \u51FA\u53BB\uFF0C\u56E0\u4E3A server.js \u4E2D\u9700\u8981\u5728 then \u4E2D\u5904\u7406 store.state \u7684\u540C\u6B65
       */</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;payload params.id server&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/list</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_LIST&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> app<span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
    store
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>createApp <span class="token operator">=</span> createApp
</code></pre></div><p>\u6B64\u65F6\uFF0C\u5728\u670D\u52A1\u7AEF server.js \u4E2D\u5728\u7EC4\u4EF6\u6E32\u67D3\u524D\uFF0C\u9700\u8981\u9884\u53D6\u6570\u636E\u7528\u4E8E\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6E32\u67D3</p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./render-server.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F02\u6B65\u83B7\u53D6\u6570\u636E\u7684 api</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u5751\u4E00\uFF1A
 * \u5F53\u5728 /list/99 \u9875\u9762\u5237\u65B0\u65F6\uFF0C\u4F1A\u8BF7\u6C42 /list/render-client.js
 * \u6240\u4EE5\u6B64\u5904 get url \u5E94\u8BE5\u8981\u7528\u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u7136\u76F4\u63A5 get(/render-client.js, fn) \u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668 script \u89E3\u6790\u9519\u8BEF\uFF1A
 * render-client.js: Uncaught SyntaxError: Unexpected token &#39;&lt;&#39;
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/*render-client.js$/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./render-client.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchedComponents <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">getMatchedComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matchedComponents<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Not Found!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/**
     * \u5751\u4E8C\uFF1A
     * \u6309\u7167 vue ssr \u5B98\u7F51\u4E0A\u76F4\u63A5\u5199 Component.asyncData, \u4F1A\u83B7\u53D6\u4E0D\u5230\u503C undefined\uFF0C
     * \u901A\u8FC7\u6253\u5370\u51FA\u6765 Component\uFF0C\u53D1\u73B0\u6302\u8F7D\u5728 Componet.options.asyncData
     */</span>
    <span class="token comment">// \u904D\u5386\u5F53\u524D\u8DEF\u7531\u6355\u83B7\u5230\u7684\u6BCF\u4E2A\u7EC4\u4EF6\uFF0C\u8C03\u7528\u7EC4\u4EF6\u4E2D\u7684 asyncData \u53D1\u8D77\u6570\u636E\u8BF7\u6C42</span>
    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>matchedComponents<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">Component</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>options<span class="token punctuation">.</span>asyncData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Component<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          store<span class="token punctuation">,</span>
          <span class="token literal-property property">route</span><span class="token operator">:</span> router<span class="token punctuation">.</span>currentRoute
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u9884\u53D6\u6570\u636E\u540E\uFF0C\u540C\u6B65\u6700\u65B0\u7684 state </span>
      <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span> store<span class="token punctuation">.</span>state
      <span class="token punctuation">}</span>
      renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server renderToString&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server asyncData&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo10\uFF1A\u4F7F\u7528-serverprefetch-\u9884\u6570\u636E\u548C-renered-\u540C\u6B65\u6570\u636E" tabindex="-1">demo10\uFF1A\u4F7F\u7528 serverPrefetch \u9884\u6570\u636E\u548C renered \u540C\u6B65\u6570\u636E <a class="header-anchor" href="#demo10\uFF1A\u4F7F\u7528-serverprefetch-\u9884\u6570\u636E\u548C-renered-\u540C\u6B65\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5728 Vue SSR \u5B98\u65B9\u6587\u6863\u5BF9\u9884\u53D6\u6570\u636E\u7684\u8BB2\u89E3\u8FD8\u662F\u4F7F\u7528<code>asyncData ()</code>\u914D\u5408<code>router.getMatchedComponents ()</code>\u65B9\u6CD5\u4E2D\u83B7\u53D6\u7684\u7EC4\u4EF6\u4E2D\u8BF7\u6C42\u6570\u636E\u63A5\u53E3\u3002</p><p>\u4F46\u662F\u5728 vue 2.6.x \u65B0\u7248\u672C\u53D1\u5E03\u540E\uFF0C\u5176\u65F6\u9488\u5BF9\u670D\u52A1\u7AEF\u6E32\u67D3\u589E\u52A0\u4E86\u4E00\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\uFF1AserverPrefetch\uFF0C vue-server-renderer \u4F1A\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5B83\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2Apromise\uFF0C\u8C03\u7528\u65F6\u673A\u5728\u6A21\u677F compiler \u7F16\u8BD1\u540E\uFF0C\u5728 vm._render \u524D\u81EA\u52A8\u8C03\u7528\u8BE5\u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token comment">// vue-server-renderer \u6E90\u7801</span>
<span class="token keyword">var</span> <span class="token constant">LIFECYCLE_HOOKS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;activated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;deactivated&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;errorCaptured&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;serverPrefetch&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u8C03\u7528\u65F6\u673A</span>
<span class="token keyword">function</span> <span class="token function">createRenderFunction</span> <span class="token punctuation">(</span> <span class="token parameter">modules<span class="token punctuation">,</span> directives<span class="token punctuation">,</span> isUnaryTag<span class="token punctuation">,</span> cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">render</span> <span class="token punctuation">(</span> <span class="token parameter">component<span class="token punctuation">,</span> write<span class="token punctuation">,</span> userContext<span class="token punctuation">,</span> done</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    warned <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 1. \u751F\u6210\u6E32\u67D3\u4E0A\u4E0B\u6587</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RenderContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">activeInstance</span><span class="token operator">:</span> component<span class="token punctuation">,</span>
      <span class="token literal-property property">userContext</span><span class="token operator">:</span> userContext<span class="token punctuation">,</span>
      <span class="token literal-property property">write</span><span class="token operator">:</span> write<span class="token punctuation">,</span> 
      <span class="token literal-property property">done</span><span class="token operator">:</span> done<span class="token punctuation">,</span> 
      <span class="token literal-property property">renderNode</span><span class="token operator">:</span> renderNode<span class="token punctuation">,</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> modules<span class="token punctuation">,</span> 
      <span class="token literal-property property">isUnaryTag</span><span class="token operator">:</span> isUnaryTag<span class="token punctuation">,</span> 
      <span class="token literal-property property">directives</span><span class="token operator">:</span> directives<span class="token punctuation">,</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> cache
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. \u5B89\u88C5\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5DE5\u5177\u51FD\u6570</span>
    <span class="token function">installSSRHelpers</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3. \u7F16\u8BD1\u7EC4\u4EF6\u751F\u6210 $options.render \u5C5E\u6027\uFF0C\u5373\u751F\u6210 compiled \u7F16\u8BD1\u6A21\u677F\uFF0C\u751F\u6210$options.render \u548C $options.staticRenderFns\uFF0C\u540C Vue \u6E90\u7801\u7F16\u8BD1\u9636\u6BB5\u4E00\u6837 </span>
    <span class="token function">normalizeRender</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// 5. \u6E32\u67D3\u7EC4\u4EF6\uFF0C\u6BD4\u8F83\u4E0B vue \u6E90\u7801\uFF1A vm._update(vm._render(), hydrating), \u5DEE\u5F02\u5C31\u662F _update \u8FC7\u7A0B\uFF0C\u5373 patch \u8FC7\u7A0B</span>
      <span class="token comment">// Vue.prototype._render \u5173\u952E\u4EE3\u7801\u5C31\u662F\u6267\u884C\u7F16\u8BD1\u751F\u6210\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u5373 with \u8BED\u53E5</span>
      <span class="token comment">// vnode = component.$options.render.call(vm, vm.$createElement);</span>
      <span class="token function">renderNode</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 4. \u7B49\u5F85\u7EC4\u4EF6 serverPrefetch \u6267\u884C\uFF0C\u83B7\u53D6\u7EC4\u4EF6\u4F9D\u8D56\u7684\u6570\u636E</span>
    <span class="token function">waitForServerPrefetch</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 4. \u7B49\u5F85\u7EC4\u4EF6 serverPrefetch \u6267\u884C\uFF0C\u83B7\u53D6\u7EC4\u4EF6\u4F9D\u8D56\u7684\u6570\u636E
 */</span>
<span class="token keyword">function</span> <span class="token function">waitForServerPrefetch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> handlers <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>serverPrefetch<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> handlers <span class="token operator">=</span> <span class="token punctuation">[</span>handlers<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> result<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728<code>serverPrefetch()</code>\u6267\u884C\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u77E5\u9053\u5E94\u7528\u5728\u4EC0\u4E48\u65F6\u5019\u6E32\u67D3\u5B8C\u6210\u3002\u5728vue-server-renderer \u4E0A\u4E0B\u6587\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>rendered()</code>\u94A9\u5B50\u65B9\u6CD5\uFF0C\u5B83\u4F1A\u5728\u670D\u52A1\u5668\u7AEF\u5B8C\u6210\u9875\u9762\u6E32\u67D3 render \u540E\uFF0C\u5728\u8C03\u7528 templateRender \u62FC\u63A5\u8FD4\u56DE\u7684 HTML \u7247\u6BB5\u524D\u8C03\u7528\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u8C03\u7528\u65F6\u673A</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> write<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>rendered<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6B64\u5904\u5B8C\u6210\u6E32\u67D3\u8C03\u7528</span>
      context<span class="token punctuation">.</span><span class="token function">rendered</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5F00\u59CB\u62FC\u88C5 html</span>
        <span class="token keyword">var</span> res <span class="token operator">=</span> templateRenderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">!==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> html<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cb</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6240\u4EE5\u540C\u6784\u5E94\u7528\u65F6\uFF0C\u9884\u53D6\u6570\u636E\u548C\u540C\u6B65state \u7684\u4EE3\u7801\u53EF\u4EE5\u66F4\u6539\u5982\u4E0B\uFF1A</p><p>\u5728\u9700\u8981\u9884\u53D6\u6570\u636E\u7684\u7EC4\u4EF6 ComList \u4E2D\u8C03\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> ComList <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ComList&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;SSR \u6570\u636E\u9884\u53D6&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token comment">// asyncData({ store, route }) {</span>
    <span class="token comment">//   return store.dispatch(&#39;fetchList&#39;, route.params.id)</span>
    <span class="token comment">// },</span>
    <span class="token comment">// beforeMount() {</span>
    <span class="token comment">//   const { $options: { asyncData }, $store:store, $route:route } = this</span>
    <span class="token comment">//   asyncData({store, route}).then(() =&gt; {</span>
    <span class="token comment">//     console.log(&#39;async data is successed&#39;);</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// },</span>
  <span class="token keyword">async</span> <span class="token function">serverPrefetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * serverPrefetch \u5728 Vue \u4E2D\u662F\u4F5C\u4E3A\u5176\u751F\u547D\u5468\u671F\u7684\u4E00\u4E2A\u94A9\u5B50\u51FD\u6570\uFF0CLIFECYCLE_HOOKS\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u50CF\u5176\u5B83\u94A9\u5B50\u4E00\u6837\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528\uFF0C\u6216\u8005\u5B9A\u4E49\u591A\u4E2A\uFF0C\u6216\u8005\u76F4\u63A5\u5B9A\u4E49\u6210\u6570\u7EC4
     * \u5728 Vue \u89E3\u6790\u4E4B\u540E\u6700\u7EC8\u4F1A\u50CF\u5176\u5B83\u94A9\u5B50\u51FD\u6570\u4E00\u6837\u53D8\u6210\u6570\u7EC4\u5F62\u5F0F\u3002
     * \u533A\u522B\u662F\uFF1AserverPrefetch \u94A9\u5B50\u53EA\u5728 Vue \u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5305 vue-server-renderer \u5185\u90E8\u88AB\u81EA\u52A8\u8C03\u7528\u3002\u8C03\u7528\u65F6\u673A\u5728\u6A21\u677F compiler \u7F16\u8BD1\u540E\uFF0C\u5728 vm._render \u524D\u81EA\u52A8\u8C03\u7528\u8BE5\u51FD\u6570
     * \u5728\u5BA2\u6237\u7AEF\u6E32\u67D3\u65F6\u4E0D\u4F1A\u88AB\u8C03\u7528\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u751F\u547D\u5468\u671F\u94A9\u5B50\u4E2D\u624B\u52A8\u8C03\u7528\u3002\u5B83\u6302\u8F7D\u5728 this.$options.__proto__ \u539F\u578B\u5BF9\u8C61\u4E0A\u3002
     */</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;fetchList&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E5F\u53EF\u4EE5\u5199\u6210\u51FD\u6570\u5F62\u5F0F,\u53EF\u4EE5\u89E6\u53D1\u591A\u4E2A\u8BF7\u6C42
   * \u4F46\u8FD9\u65F6\uFF0CbeforeMount \u91CC\u7684\u4EE3\u7801\u9700\u8981\u5BF9\u5E94\u51FD\u6570\u83B7\u53D6
   */</span>
  <span class="token comment">// serverPrefetch: [</span>
  <span class="token comment">//   async () =&gt; await this.$store.dispatch(&#39;fetchList&#39;, this.$route.params.id),</span>
  <span class="token comment">// ],</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u5751\uFF1A
     * 1.\u5728\u5BA2\u6237\u7AEF serverPrefetch \u59CB\u7EC8\u88AB Vue \u89E3\u6790\u6210\u6570\u7EC4\uFF0C\u6240\u4EE5\u660E\u786E\u5355\u4E2A\u65F6\uFF0C\u9700\u8981 [0]
     * 2.serverPrefetch \u5185\u7684\u9700\u8981\u4F7F\u7528 call \u7ED1\u5B9A\u8C03\u7528\u4E0A\u4E0B\u6587
     */</span>
    <span class="token comment">// const { $options: { serverPrefetch } } = this</span>
    <span class="token comment">// serverPrefetch[0].call(this).then(() =&gt; {</span>
    <span class="token comment">//   console.log(&#39;async data is successed&#39;);</span>
    <span class="token comment">// })</span>

    <span class="token comment">/**
     * \u53EF\u4EE5\u76F4\u63A5\u5199\u6210\u517C\u5BB9\u5355\u4E2A\u51FD\u6570\u6216\u6570\u7EC4\u5F62\u5F0F\u7684\u4EE3\u7801\u903B\u8F91
     * \u4EE5\u4E0B\u517C\u5BB9\u4EE3\u7801\u5B9E\u9645\u4E0A\u4E5F\u662F vue-server-renderer \u4E2D\u8C03\u7528 serverPrefetch \u7684\u6E90\u7801
     */</span>
    <span class="token keyword">let</span> handlers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>serverPrefetch<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handlers <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> handlers <span class="token operator">=</span> <span class="token punctuation">[</span>handlers<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">/**
           * \u5751\uFF1A serverPrefetch \u5185\u7684\u9700\u8981\u4F7F\u7528 call \u7ED1\u5B9A\u8C03\u7528\u4E0A\u4E0B\u6587
           */</span>
          <span class="token keyword">let</span> result <span class="token operator">=</span> handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> result<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            promises<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;serverPrefetch called&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span>

      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7531\u4E8E serverPrefetch \u5185\u7684\u6570\u636E\u8BF7\u6C42\u65B9\u6CD5\u4F1A\u88AB vue-server-renderer \u81EA\u52A8\u8C03\u7528\uFF0C\u6240\u4EE5\u5728\u670D\u52A1\u7AEF server.js \u4E2D\u4EE3\u7801\u4E2D\u53EA\u9700\u8981\u5728 rendered \u56DE\u8C03\u4E2D\u4F20\u5165\u540C\u6B65 state \u7684\u4EE3\u7801\u903B\u8F91\u5373\u53EF</p><div class="language-js"><pre><code>server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u540C serverPretch \u94A9\u5B50\u51FD\u6570\u4E00\u6837\uFF0C\u7B97\u662F vue SSR \u6E32\u67D3\u4E13\u6709\u7684\u4E00\u4E2A\u94A9\u5B50\u51FD\u6570\u5427\uFF0C
     * \u5B83\u4F1A\u5728\u670D\u52A1\u5668\u7AEF\u5B8C\u6210\u9875\u9762\u6E32\u67D3 render \u540E\uFF0C\u5728\u8C03\u7528 templateRender \u62FC\u63A5\u8FD4\u56DE\u7684 HTML \u7247\u6BB5\u524D\u8C03\u7528\u3002
     * \u8FD9\u4E2A\u65F6\u673A\u521A\u597D\u53EF\u4EE5\u5904\u7406\u540C\u6B65 store.state \u7684\u64CD\u4F5C
     */</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">rendered</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span>state
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;renderToString error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server renderToString error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="demo11-\u6A21\u5757\u5316\u7F16\u7A0B" tabindex="-1">demo11: \u6A21\u5757\u5316\u7F16\u7A0B <a class="header-anchor" href="#demo11-\u6A21\u5757\u5316\u7F16\u7A0B" aria-hidden="true">#</a></h2><p>SSR \u5C5E\u4E8E\u540C\u6784\u5E94\u7528\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u51E0\u4E4E\u9700\u8981\u5904\u7406\u76F8\u540C\u7684\u5E94\u7528\u903B\u8F91\uFF0C\u4ECE\u4E0A\u9762\u7684\u51E0\u4E2A demo \u4E5F\u53EF\u4EE5\u770B\u51FA\uFF0C<code>render-client.js</code> \u548C <code>render-server.js</code>\u4EE3\u7801\u51E0\u4E4E\u90FD\u662F\u76F8\u540C\u7684\u4EE3\u7801\uFF0C\u5374\u4E00\u76F4\u91CD\u590D\u4E66\u5199\u3002\u6211\u4EEC\u9700\u8981\u5C06\u4EE3\u7801\u903B\u8F91\u8FDB\u884C\u62C6\u5206\uFF0C\u5C06\u5171\u540C\u7684\u903B\u8F91\u4EE3\u7801\u62BD\u79BB\u6210\u72EC\u7ACB\u7684\u6A21\u5757\u8FDB\u884C\u5F15\u7528\u3002</p><p>\u6A21\u5757\u5316\u4E4B\u540E\uFF0C\u5BF9\u5BA2\u6237\u7AEF\u5F15\u7528\uFF0C\u9700\u8981\u4F7F\u7528\u6A21\u5757\u6253\u5305\u5DE5\u5177\u5408\u5E76\u6210\u4E00\u4E2A <code>client-bundle.js</code> \u6587\u4EF6\u4F9B\u5BA2\u6237\u7AEF\u5F15\u7528\u3002\u800C\u670D\u52A1\u7AEF\u672C\u8EAB\u5C31\u652F\u6301\u6A21\u5757\u5316\u5F15\u7528\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4E0D\u9700\u8981\u6253\u5305\u6784\u5EFA\u3002</p><ol><li>\u5C06 createApp \u7684\u4EE3\u7801\u8FDB\u884C\u62C6\u5206\u6210 app / router / store \u5404\u81EA\u72EC\u7ACB\u7684\u6A21\u5757</li><li>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5DEE\u5F02\u90E8\u5206\u5206\u4E3A\u4E24\u4E2A\u6587\u4EF6\uFF0C\u4E5F\u662F\u6253\u5305\u6784\u5EFA\u7684\u5165\u53E3\u6587\u4EF6\uFF1A<code>entry-client.js</code> \u548C <code>entry-server.js</code></li><li>\u5BF9\u4E8E\u9875\u9762\u7EC4\u4EF6\u90E8\u5206\u4EE3\u7801\u62BD\u79BB\u5230 components.js \u6587\u4EF6\u4E2D\u3002\u4E0B\u4E00\u4E2Ademo \u518D\u5B9E\u73B0\u914D\u7F6E .vue \u5355\u6587\u4EF6\u7EC4\u4EF6\uFF0C\u672C demo \u4E3B\u8981\u5728\u4E8E\u4EE3\u7801\u62BD\u79BB\u4EE5\u53CA\u5BA2\u6237\u7AEF bundle \u7684\u6784\u5EFA\u3002</li></ol><p><strong>\u7EC4\u4EF6\u6A21\u5757</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> Home <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u8FD9\u662F\u9996\u9875&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> List <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;List&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>list
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
    &lt;h1&gt;SSR \u6570\u636E\u9884\u53D6&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;item&quot;&gt;\u5217\u8868{{ index }}: {{ item }}&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">serverPrefetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;fetchList&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">$options</span><span class="token operator">:</span> <span class="token punctuation">{</span> serverPrefetch <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
     <span class="token comment">/**
     * \u5751\uFF1A
     * 1.\u5728\u5BA2\u6237\u7AEF serverPrefetch \u59CB\u7EC8\u88AB Vue \u89E3\u6790\u6210\u6570\u7EC4\uFF0C\u6240\u4EE5\u660E\u786E\u5355\u4E2A\u65F6\uFF0C\u9700\u8981 [0]
     * 2.serverPrefetch \u5185\u7684\u9700\u8981\u4F7F\u7528 call \u7ED1\u5B9A\u8C03\u7528\u4E0A\u4E0B\u6587
     */</span>
    serverPrefetch<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async data is successed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;app&quot;&gt;
    &lt;router-link to=&quot;/&quot;&gt;\u9996\u9875&lt;/router-link&gt;
    &lt;router-link to=&quot;/list/99&quot;&gt;\u5217\u8868&lt;/router-link&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
  &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  App<span class="token punctuation">,</span>
  Home<span class="token punctuation">,</span>
  List
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u8DEF\u7531 router</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Home<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./components.js&#39;</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/list/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> List<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
    routes
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> router
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u6570\u636E\u4ED3\u5E93</strong> store</p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Vuex <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vuex&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">SET_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>list <span class="token operator">=</span> payload
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">/**
         * \u5751\u4E00\uFF1A \u9700\u8981\u533A\u5206\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u73AF\u5883\u533A\u522B
         * \u670D\u52A1\u7AEF\u5982\u679C\u76F4\u63A5\u7528 /\uFF0C\u6307\u5411\u7684\u662F localhost:80
         */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          axios<span class="token punctuation">.</span>default<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/**
         * \u5751\u4E8C\uFF1A\u8FD9\u91CC\u8981 return \u51FA\u53BB\uFF0C\u56E0\u4E3A server.js \u4E2D\u9700\u8981\u5728 then \u4E2D\u5904\u7406 state \u540C\u6B65
         */</span>
        <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/list</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_LIST&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> store
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5E94\u7528 app</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> Vue <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createRouter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./store.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./components.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
    store
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>createApp <span class="token operator">=</span> createApp
</code></pre></div><p><strong>\u5BA2\u6237\u7AEF\u5165\u53E3 entry-client.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./app.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> store<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  store<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>__INITIAL_STATE__<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>\u670D\u52A1\u7AEF\u5165\u53E3 entry-server.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./app.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">_createApp</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> store <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> context
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    router<span class="token punctuation">.</span><span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function-variable function">rendered</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span>state <span class="token operator">=</span> store<span class="token punctuation">.</span>state
      <span class="token punctuation">}</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>createApp <span class="token operator">=</span> _createApp
</code></pre></div><p><strong>\u670D\u52A1\u5668 server.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./entry-server.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * serverPrefetch api \u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;api list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * script \u8D44\u6E90\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/*client-bundle.js$/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./client-app-bundle.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * favicon.ico \u56FE\u6807\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u9875\u9762\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page url&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url
  <span class="token punctuation">}</span>

  <span class="token function">createApp</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;renderToString error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server renderToString&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;createApp error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server createApp&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>\u9875\u9762\u6A21\u677F\u6587\u4EF6</strong></p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>client-app-bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>\u6253\u5305\u914D\u7F6E webpack.config.js</strong></p><p>\u8FD9\u91CC\u4F7F\u7528 webpack \u8FDB\u884C\u6A21\u5757\u6253\u5305\uFF0C\u6240\u4EE5\u9700\u8981\u672C\u5730\u5B89\u88C5 webpack \uFF1A <code>npm i -S webapck</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;client-bundle&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./entry-client.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5751\uFF1A</span>
        <span class="token comment">// vue \u7684\u6784\u5EFA\u7248\u672C\u5927\u4F53\u5206\u4E3A\u4E24\u79CD\uFF1A\u53EA\u5305\u542B\u8FD0\u884C\u65F6\u7684\u7248\u672C \u548C \u8FD0\u884C\u65F6 + \u6A21\u677F\u7F16\u8BD1\u5668\u7684\u5B8C\u6574\u7248\uFF0C</span>
        <span class="token comment">// \u800C\u5728node_modules/vue/package.json/ \u4E2D main \u5B57\u6BB5\u9ED8\u8BA4\u662F vue.runtime.esm.js, \u5373\u53EA\u542B\u8FD0\u884C\u65F6\u7684\u7248\u672C\uFF0C\u8FD9\u4E2A\u7248\u672C\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u8FD0\u884C\uFF0C</span>
        <span class="token comment">// \u6240\u4EE5\u5728\u6253\u5305\u65F6\u9700\u8981\u6307\u660E\u8BA9 webpack \u6253\u5305\u5305\u542B\u7F16\u8BD1\u5668\u7684\u5B8C\u6574\u7248\u8FDB\u884C\u6784\u5EFA\u3002 </span>
        <span class="token comment">// vue-router / vuex \u662F\u56E0\u4E3A\u6A21\u5757\u89C4\u8303\u95EE\u9898\uFF0C\u9ED8\u8BA4\u662F comonJS \u89C4\u8303\u7684\u5305\uFF0C\u6240\u4EE5\u9700\u8981\u6307\u5B9A\u6784\u5EFA esm \u6216 UMD \u7684\u5305\u3002</span>

        <span class="token comment">// resolve.alias \u5C31\u53EF\u4EE5\u6307\u5B9A webpack \u5728\u6784\u5EFA\u65F6\u4ECE\u54EA\u4E2A\u8DEF\u5F84\u4E2D\u89E3\u6790\u4F9D\u8D56\u5305</span>

        <span class="token string-property property">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vue-router$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue-router/dist/vue-router.js&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;vuex$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vuex/dist/vuex.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u8FDB\u5165\u76EE\u5F55\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u6784\u5EFA\u7684\u547D\u4EE4<code>npx webapck --config webpack.config.js --progress</code></p><p>\u6700\u540E <code>node server.js</code>\u542F\u52A8\u670D\u52A1\u5373\u53EF\u3002</p><h2 id="demo12-\u642D\u5EFA-sfc-\u5F00\u53D1\u73AF\u5883" tabindex="-1">demo12: \u642D\u5EFA SFC \u5F00\u53D1\u73AF\u5883 <a class="header-anchor" href="#demo12-\u642D\u5EFA-sfc-\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>.vue</code> \u6587\u4EF6\u6765\u5F00\u53D1 vue \u7EC4\u4EF6\u3002\u56E0\u4E3A\u670D\u52A1\u7AEF\u4EE3\u7801\u8FD0\u884C\u5728 NODE \u73AF\u5883\u4E2D\uFF0C\u5E76\u4E0D\u80FD\u8BC6\u522B <code>.vue</code> \u6587\u4EF6\uFF0C\u6240\u4EE5\u6B64\u65F6\u6211\u4EEC\u8FDE\u670D\u52A1\u7AEF\u4EE3\u7801\u90FD\u8981\u8FDB\u884C\u6253\u5305\u6784\u5EFA\u4E86\u3002</p><p>\u5728\u6A21\u5757\u6784\u5EFA\u65F6\uFF0C\u4E0D\u7BA1\u662F\u5BA2\u6237\u7AEF\u8FD8\u662F\u670D\u52A1\u7AEF\uFF0C\u73B0\u5728\u90FD\u662F\u9700\u8981\u4F7F\u7528 <code>vue-loader</code>\u6765\u89E3\u6790 <code>.vue</code>\u6587\u4EF6\uFF0C\u53C8\u56E0\u4E3A<code>vue-loader</code>\u4F9D\u8D56 vue \u6A21\u677F\u7F16\u8BD1\u63D2\u4EF6 <code>vue-template-compiler</code>\uFF0C\u6240\u4EE5\u9700\u8981\u90FD\u5B89\u88C5\u3002</p><blockquote><p><code>vue / vue-server-renderer / vue-template-compiler</code> \u4E09\u4E2A\u5305\u9700\u8981\u7248\u672C\u4E00\u81F4\u3002</p></blockquote><div class="language-bash"><pre><code><span class="token function">npm</span> i -S vue-loader vue-template-compiler@2.6.12
</code></pre></div><p>\u4E00\u3001\u5C06 <code>components.js</code> \u7684\u4EE3\u7801\u62C6\u5206\u6210 <code> App.vue / Home.vue / List.vue / Counter.vue</code></p><p>\u4E8C\u3001\u6253\u5305\u6784\u5EFA\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0<code>vue-loader</code>\u76F8\u5173\u4EE3\u7801\uFF0C\u5E76\u65B0\u589E\u670D\u52A1\u7AEF\u6784\u5EFA\u914D\u7F6E\u6587\u4EF6</p><p><strong>\u5BA2\u6237\u7AEF\u6784\u5EFA webapck.client.config.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-client.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;built-client-bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u670D\u52A1\u7AEF\u6784\u5EFA webapck.server.config.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u7531\u4E8E\u4F7F\u7528\u4E86 .vue \u6587\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528 vue-loader
 */</span>
<span class="token keyword">const</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-server.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;built-server-bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;commonjs2&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5173\u952E\u70B9</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E09\u3001\u6A21\u677F\u5F15\u7528 <code>built-client-bundle.js</code>\uFF0C\u670D\u52A1\u5668\u8C03\u7528 <code>built-server-bundle.js</code></p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue ssr<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dist/built-client-bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">8000</span>

<span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// const { createApp } = require(&#39;./entry-server.js&#39;)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/built-server-bundle.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * serverPrefetch api \u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;api list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * script \u8D44\u6E90\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/*built-client-bundle.js$/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> js <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/built-client-bundle.js&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * favicon.ico \u56FE\u6807\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u9875\u9762\u8BF7\u6C42
 */</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page url&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url
  <span class="token punctuation">}</span>

  <span class="token function">createApp</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;renderToString error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server renderToString&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;createApp error&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server createApp&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u56DB\u3001\u6700\u540E\u6784\u5EFA\u6A21\u5757\u548C\u8FD0\u884C\u670D\u52A1</p><div class="language-bash"><pre><code>npx webapck --config webpack.client.config.js --progress
npx webapck --config webpack.server.config.js --progress
<span class="token function">node</span> server.js\`
</code></pre></div><h2 id="demo13-bundle-renderer" tabindex="-1">demo13: Bundle Renderer <a class="header-anchor" href="#demo13-bundle-renderer" aria-hidden="true">#</a></h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u670D\u52A1\u7AEF\u6E32\u67D3\u4F7F\u7528 <code>vue-server-renderer</code> \u7684 API \u662F\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> vueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> template
<span class="token punctuation">}</span><span class="token punctuation">)</span>

renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">,</span> cb<span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u6837\u6BCF\u6B21\u7F16\u8F91\u8FC7\u5E94\u7528\u7A0B\u5E8F\u6E90\u4EE3\u7801\u4E4B\u540E\uFF0C\u90FD\u5FC5\u987B\u505C\u6B62\uFF0C\u91CD\u65B0\u6784\u5EFA\u4F9D\u8D56\u7684 bundle \uFF0C\u5E76\u91CD\u542F\u670D\u52A1\u3002\u5B9E\u9645\u5F00\u53D1\u4E2D\u6548\u7387\u5F88\u4F4E\u3002\u53E6\u5916\uFF0CNode.js \u672C\u8EAB\u4E0D\u652F\u6301 source map\uFF0C\u4E0D\u5229\u4E8E\u5F00\u53D1\u8C03\u8BD5\u3002</p><p><code>vue-server-renderer</code> \u63D0\u4F9B\u4E00\u4E2A\u540D\u4E3A <code>createBundleRenderer</code> \u7684 API\uFF0C\u914D\u5408 <code>vue-server-renderer</code> \u63D0\u4F9B\u7684\u4E24\u4E2A\u5206\u522B\u7528\u4E8E\u5BA2\u6237\u7AEF\u6784\u5EFA\u548C\u670D\u52A1\u7AEF\u6784\u5EFA\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u5F00\u53D1\u4E0A\u66F4\u6709\u6548\u7387\u3002</p><ul><li>\u5185\u7F6E\u7684 source map \u652F\u6301\uFF08\u5728 webpack \u914D\u7F6E\u4E2D\u4F7F\u7528 <code>devtool: &#39;source-map&#39;</code>\uFF09</li><li>\u5728\u5F00\u53D1\u73AF\u5883\u751A\u81F3\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u70ED\u91CD\u8F7D\uFF08\u901A\u8FC7\u8BFB\u53D6\u66F4\u65B0\u540E\u7684 bundle\uFF0C\u7136\u540E\u91CD\u65B0\u521B\u5EFA renderer \u5B9E\u4F8B\uFF09</li><li>\u5173\u952E CSS(critical CSS) \u6CE8\u5165\uFF08\u5728\u4F7F\u7528 <code>*.vue</code> \u6587\u4EF6\u65F6\uFF09\uFF1A\u81EA\u52A8\u5185\u8054\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u7528\u5230\u7684\u7EC4\u4EF6\u6240\u9700\u7684CSS\u3002</li><li>\u4F7F\u7528 <a href="https://ssr.vuejs.org/zh/api/#clientmanifest" target="_blank" rel="noopener noreferrer">clientManifest</a> \u8FDB\u884C\u8D44\u6E90\u6CE8\u5165\uFF1A\u81EA\u52A8\u63A8\u65AD\u51FA\u6700\u4F73\u7684\u9884\u52A0\u8F7D(preload)\u548C\u9884\u53D6(prefetch)\u6307\u4EE4\uFF0C\u4EE5\u53CA\u521D\u59CB\u6E32\u67D3\u6240\u9700\u7684\u4EE3\u7801\u5206\u5272 chunk\u3002</li></ul><p>\u200B \u4E0A\u8FF0\u4F18\u70B9\uFF0C\u6700\u5173\u952E\u7684\u662F\u6700\u540E\u4E00\u6B65\uFF0C\u5BF9\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\u975E\u5E38\u6709\u4EF7\u503C\uFF0C\u7701\u53BB\u4E86\u4EBA\u5DE5\u7EF4\u62A4\u5F88\u591A\u7684\u4F9D\u8D56\u6587\u4EF6\u3002</p><p><strong>\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6 webpack.client.config.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueSSRClientPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer/client-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-client.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist/client&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;/dist/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[chunkhash:8].js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;manifest&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">Infinity</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">VueSSRClientPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u670D\u52A1\u7AEF\u914D\u7F6E\u6587\u4EF6 webpack.server.config.js</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueSSRServerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer/server-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> VueLoaderPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader/lib/plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../entry-server.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist/server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;built-server-bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;commonjs2&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">VueSSRServerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u8FF0\u6784\u5EFA\u914D\u7F6E\uFF0C\u8FDB\u884C\u6253\u5305\u540E\uFF1A</p><ul><li><p>\u670D\u52A1\u7AEF\u4EA7\u751F\u7684\u6587\u4EF6: <code>dist/server/</code></p><ul><li><code>vue-ssr-server-bundle.json</code></li></ul></li><li><p>\u5BA2\u6237\u7AEF\u4EA7\u751F\u7684\u6587\u4EF6\uFF1A<code>dist/client/</code></p><ul><li><code>vue-ssr-client-manifest.json</code></li><li>manifest.xxxx.js</li><li>app.xxx.js</li></ul></li></ul><p>\u6B64\u65F6\u5728\u670D\u52A1\u7AEF\u4EE3\u7801 server.js \u6587\u4EF6\u9700\u8981\u8FD9\u6837\u4FEE\u6539\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token keyword">const</span> VueServerRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;./index.template.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> serverBundle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/server/vue-ssr-server-bundle.json&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> clientManifest <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/client/vue-ssr-client-manifest.json&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> VueServerRenderer<span class="token punctuation">.</span><span class="token function">createBundleRenderer</span><span class="token punctuation">(</span>serverBundle<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">runInNewContext</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  template<span class="token punctuation">,</span>
  clientManifest
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0C\u6DFB\u52A0\u9759\u6001\u6587\u4EF6\u670D\u52A1</span>
server<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/dist&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/client/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F02\u6B65\u6570\u636E\u8BF7\u6C42\u63A5\u53E3</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/favicon.ico&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span> req<span class="token punctuation">.</span>url<span class="token punctuation">}</span>
  <span class="token comment">/**
   * \u4F7F\u7528 bundle renderer \u4E4B\u540E\uFF0C\u4F1A\u81EA\u52A8\u5B8C\u6210 createApp \u7684\u8C03\u7528\uFF0C\u53EA\u9700\u8981\u4F20\u5165 context
   */</span>
  <span class="token comment">// createApp(context).then(app =&gt; {</span>
  <span class="token comment">//   if (app) {</span>
  <span class="token comment">//     renderer.renderToString(app, context).then(html =&gt; fn)</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// })</span>
  renderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">html</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Internal Server&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server is runnig at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6B64\u65F6\u9875\u9762\u6A21\u677F\u6587\u4EF6\uFF0C\u66F4\u4E3A\u5E72\u51C0\uFF0Cbundle renderer \u8FD4\u56DE\u65F6\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E0A\u5BF9\u5E94\u7684 script</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue-ssr-bundle-render<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--vue-ssr-outlet--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>node server.js</code>\u5F00\u542F\u670D\u52A1\u540E\uFF0C\u6253\u5F00\u9996\u9875\u8FD4\u56DE\u7684 html \u7ED3\u6784\u5982\u4E0B\uFF0Cbundle render \u4F1A\u6839\u636E\u4F20\u5165\u7684 <code>json</code> \u6587\u4EF6\uFF0C\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E9B\u9700\u8981\u7684\u4F9D\u8D56\uFF0C\u5E76\u6DFB\u52A0\u5BF9\u5E94\u7684\u5C5E\u6027\u5982 <code>preload / defer</code>\u7B49\uFF0C\u8FDB\u884C\u9875\u9762\u6E32\u67D3\u4F18\u5316\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue-ssr-bundle-render<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dist/manifest.d7ae4301.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dist/app.16fbf016.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-server-rendered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-v-101b4966</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>router-link-exact-active router-link-active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-v-101b4966</span><span class="token punctuation">&gt;</span></span>\u9996\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/list/99<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">data-v-101b4966</span><span class="token punctuation">&gt;</span></span>\u5217\u8868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-d0f197da</span> <span class="token attr-name">data-v-101b4966</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">data-v-d0f197da</span><span class="token punctuation">&gt;</span></span>This is Home page!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dist/manifest.d7ae4301.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dist/app.16fbf016.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>\u5173\u4E8E bundle render \u6784\u5EFA\u540E\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\uFF0C\u53C2\u8003 <a href="https://zhuanlan.zhihu.com/p/61348429" target="_blank" rel="noopener noreferrer">Vue SSR\u6DF1\u5EA6\u5256\u6790</a></p></blockquote><h3 id="ssr\u7CBE\u9AD3" tabindex="-1">SSR\u7CBE\u9AD3 <a class="header-anchor" href="#ssr\u7CBE\u9AD3" aria-hidden="true">#</a></h3><ul><li>\u670D\u52A1\u7AEF\u5C06Vue\u7EC4\u4EF6\u6E32\u67D3\u4E3AHTML \u5B57\u7B26\u4E32\uFF0C\u5E76\u5C06html\u5B57\u7B26\u4E32\u76F4\u63A5\u53D1\u9001\u5230\u6D4F\u89C8\u5668</li><li>\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u662F\u72EC\u7ACB\u7684\u5E94\u7528\u7A0B\u5E8F\u5B9E\u4F8B\uFF0C\u4E0D\u4F1A\u6709\u4EA4\u53C9\u8BF7\u6C42\u9020\u6210\u7684\u72B6\u6001\u6C61\u67D3</li></ul>`,169),e=[o];function c(u,l,k,i,r,g){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
