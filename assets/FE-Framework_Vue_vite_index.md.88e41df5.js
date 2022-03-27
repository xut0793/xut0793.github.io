import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const v='{"title":"vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite \u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A","slug":"vite-\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A"},{"level":2,"title":"CLI \u547D\u4EE4","slug":"cli-\u547D\u4EE4"},{"level":3,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"\u8FD0\u884C\u9879\u76EE","slug":"\u8FD0\u884C\u9879\u76EE"},{"level":2,"title":"vite \u4E3B\u8981\u529F\u80FD","slug":"vite-\u4E3B\u8981\u529F\u80FD"},{"level":2,"title":"\u63D2\u4EF6\u7CFB\u7EDF","slug":"\u63D2\u4EF6\u7CFB\u7EDF"},{"level":3,"title":"\u5B89\u88C5\u63D2\u4EF6","slug":"\u5B89\u88C5\u63D2\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6vite.config.js \u4E2D plugins \u6570\u7EC4\u4E2D\u6DFB\u52A0\u63D2\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6vite-config-js-\u4E2D-plugins-\u6570\u7EC4\u4E2D\u6DFB\u52A0\u63D2\u4EF6"},{"level":3,"title":"\u6307\u5B9A\u63D2\u4EF6\u5E94\u7528\u7684\u987A\u5E8F","slug":"\u6307\u5B9A\u63D2\u4EF6\u5E94\u7528\u7684\u987A\u5E8F"},{"level":3,"title":"\u6307\u5B9A\u63D2\u4EF6\u751F\u6548\u73AF\u5883","slug":"\u6307\u5B9A\u63D2\u4EF6\u751F\u6548\u73AF\u5883"},{"level":3,"title":"\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A vite \u63D2\u4EF6","slug":"\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A-vite-\u63D2\u4EF6"},{"level":2,"title":"\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406","slug":"\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406"},{"level":2,"title":"\u73AF\u5883\u53D8\u91CF","slug":"\u73AF\u5883\u53D8\u91CF"},{"level":2,"title":"npm \u4F9D\u8D56\u9884\u6784\u5EFA","slug":"npm-\u4F9D\u8D56\u9884\u6784\u5EFA"},{"level":2,"title":"vite \u914D\u7F6E\u6587\u4EF6 vite.config.js","slug":"vite-\u914D\u7F6E\u6587\u4EF6-vite-config-js"},{"level":3,"title":"\u914D\u7F6E\u7684\u4E09\u79CD\u5F62\u5F0F\uFF1A","slug":"\u914D\u7F6E\u7684\u4E09\u79CD\u5F62\u5F0F\uFF1A"},{"level":3,"title":"\u914D\u7F6E\u9009\u9879","slug":"\u914D\u7F6E\u9009\u9879"}],"relativePath":"FE-Framework/Vue/vite/index.md"}',p={},e=t(`<h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h1><p>Vite \u662F\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u80FD\u591F\u663E\u8457\u63D0\u5347\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u3002\u6700\u521D\u662F\u4E3A vue@3.x \u8BBE\u8BA1\u7684\u5F00\u53D1\u548C\u6784\u5EFA\u5DE5\u5177\uFF0Cvite@2.x \u5F00\u59CB\u4F5C\u4E3A\u4E00\u79CD\u901A\u7528\u578B\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u9664\u4E86vue\uFF0C\u8FD8\u9002\u7528\u4E8E react / svelte \u7B49\u524D\u7AEF\u6846\u67B6\u3002</p><h2 id="vite-\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A" tabindex="-1">vite \u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A <a class="header-anchor" href="#vite-\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A" aria-hidden="true">#</a></h2><ul><li>\u4E00\u4E2A\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5B83\u57FA\u4E8E \u539F\u751F ES \u6A21\u5757 \u63D0\u4F9B\u4E86 \u4E30\u5BCC\u7684\u5185\u5EFA\u529F\u80FD\uFF0C\u5982\u901F\u5EA6\u5FEB\u5230\u60CA\u4EBA\u7684 \u6A21\u5757\u70ED\u66F4\u65B0\uFF08HMR\uFF09\u3002</li><li>\u4E00\u5957\u6784\u5EFA\u6307\u4EE4\uFF0C\u5B83\u4F7F\u7528 Rollup \u6253\u5305\u4F60\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u5B83\u662F\u9884\u914D\u7F6E\u7684\uFF0C\u53EF\u8F93\u51FA\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u9AD8\u5EA6\u4F18\u5316\u8FC7\u7684\u9759\u6001\u8D44\u6E90\u3002</li></ul><h2 id="cli-\u547D\u4EE4" tabindex="-1">CLI \u547D\u4EE4 <a class="header-anchor" href="#cli-\u547D\u4EE4" aria-hidden="true">#</a></h2><p>vite \u5B8C\u5168\u53EF\u4EE5\u66FF\u4EE3 vue-cli \u6765\u521B\u5EFA\u672C\u5730\u9879\u76EE\uFF0C\u5E76\u8FDB\u884C\u5F00\u53D1\u548C\u6784\u5EFA\u3002</p><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm create vite
yarn create vite
pnpm create vite
</code></pre></div><p>\u7136\u540E\u6309\u7167\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C\u5373\u53EF\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u9644\u52A0\u7684\u547D\u4EE4\u884C\u9009\u9879\u76F4\u63A5\u6307\u5B9A\u9879\u76EE\u540D\u79F0\u548C\u4F60\u60F3\u8981\u4F7F\u7528\u7684\u6A21\u677F\u3002</p><div class="language-"><pre><code># npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
</code></pre></div><p>\u63D0\u4F9B\u7684\u9879\u76EE\u6A21\u677F\u5305\u62EC\uFF1A</p><div class="language-"><pre><code>vanilla: \u539F\u751Fjs\u9879\u76EE
vanilla-ts\uFF1A \u539F\u751FTS\u9879\u76EE
vue: vue \u9879\u76EE
vue-ts\uFF1Avue + Tyscript \u9879\u76EE\uFF0C\u4EE5\u4E0B\u540C\u7406
react
react-ts
preact
preact-ts
svelte
svelte-ts
lit
lit-ts
</code></pre></div><h3 id="\u8FD0\u884C\u9879\u76EE" tabindex="-1">\u8FD0\u884C\u9879\u76EE <a class="header-anchor" href="#\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a></h3><p>\u914D\u7F6E <code>package.json</code> \u4E2D <code>script</code> \u547D\u4EE4\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u522B\u540D\uFF1A\`vite dev\`\uFF0C\`vite serve\`</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E3A\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u4EA7\u7269</span>
    <span class="token property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span> <span class="token comment">// \u672C\u5730\u9884\u89C8\u751F\u4EA7\u6784\u5EFA\u4EA7\u7269</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u6307\u5B9A\u989D\u5916\u7684\u547D\u4EE4\u884C\u9009\u9879\uFF0C\u5982 --port \u6216 --https\u3002\u8FD0\u884C npx vite --help \u83B7\u5F97\u5B8C\u6574\u7684\u547D\u4EE4\u884C\u9009\u9879\u5217\u8868\u3002</p><h2 id="vite-\u4E3B\u8981\u529F\u80FD" tabindex="-1">vite \u4E3B\u8981\u529F\u80FD <a class="header-anchor" href="#vite-\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a></h2><ol><li>NPM \u4F9D\u8D56\u89E3\u6790\u548C\u9884\u6784\u5EFA\uFF0C\u5373\u652F\u6301 npm \u88F8\u6A21\u5757\u7684\u5BFC\u5165\uFF1A<code>import { someMethod } from &#39;my-dep&#39;</code> \u89E3\u6790\u4E3A\uFF1A<code>import { someMethod } from &#39;/node_modules/.vite/my-dep.js?v=f3sf2ebd&#39;</code></li><li>\u4E00\u5957\u539F\u751F ESM \u7684 HMR API</li><li>\u5929\u7136\u652F\u6301 typescript\uFF0C\u4F7F\u7528 esbuilt \u7F16\u8BD1 ts \u5230 js\uFF0C\u4F46ts\u7684\u7C7B\u578B\u6821\u9A8C\u548C\u63D0\u793A\u4ECD\u4F9D\u9760\u7F16\u8BD1\u5668</li><li>jsx \u548C tsx \u540C\u6837\u5F00\u7BB1\u5373\u7528</li><li>\u901A\u8FC7 <code>postcss-import</code> \u9884\u914D\u7F6E\u652F\u6301\u4E86 CSS @import \u5185\u8054\uFF0C\u540C\u6837\u652F\u6301 CSS Modules CSS \u9884\u5904\u7406\u5668</li><li>JSON \u5BFC\u5165\u5982\u540C js \u5BF9\u8C61\u4E00\u6837\uFF0C\u652F\u6301\u5177\u540D\u5BFC\u5165</li><li><code>import.<wbr>meta.glob</code> \u51FD\u6570\u652F\u6301\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u5BFC\u5165\u591A\u4E2A\u6A21\u5757\uFF0C\u7C7B\u4F3C webpack \u4E2D\u7684 <code>require.context</code> \u51FD\u6570</li></ol><h2 id="\u63D2\u4EF6\u7CFB\u7EDF" tabindex="-1">\u63D2\u4EF6\u7CFB\u7EDF <a class="header-anchor" href="#\u63D2\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5\u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code># \u67E5\u627E\u63D2\u4EF6\u53EF\u4EE5\u5728 awesoe-vite \u4E2D\u641C\u7D22\uFF0Cvite \u6216 rollup \u63D2\u4EF6
pnpm add -D @vitejs/plugin-legacy
</code></pre></div><h3 id="\u914D\u7F6E\u6587\u4EF6vite-config-js-\u4E2D-plugins-\u6570\u7EC4\u4E2D\u6DFB\u52A0\u63D2\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6<code>vite.config.js</code> \u4E2D plugins \u6570\u7EC4\u4E2D\u6DFB\u52A0\u63D2\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6vite-config-js-\u4E2D-plugins-\u6570\u7EC4\u4E2D\u6DFB\u52A0\u63D2\u4EF6" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token function">legacy</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="\u6307\u5B9A\u63D2\u4EF6\u5E94\u7528\u7684\u987A\u5E8F" tabindex="-1">\u6307\u5B9A\u63D2\u4EF6\u5E94\u7528\u7684\u987A\u5E8F <a class="header-anchor" href="#\u6307\u5B9A\u63D2\u4EF6\u5E94\u7528\u7684\u987A\u5E8F" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528 <code>enforce</code> \u4FEE\u9970\u7B26\u6765\u5F3A\u5236\u63D2\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u6B64\u65F6 plugins \u4E2D\u4F7F\u7528\u5BF9\u8C61\u5F62\u5F0F\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// pre\uFF1A\u5728 Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u524D\u8C03\u7528\u8BE5\u63D2\u4EF6</span>
<span class="token comment">// \u9ED8\u8BA4\uFF1A\u5728 Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u540E\u8C03\u7528\u8BE5\u63D2\u4EF6</span>
<span class="token comment">// post\uFF1A\u5728 Vite \u6784\u5EFA\u63D2\u4EF6\u4E4B\u540E\u8C03\u7528\u8BE5\u63D2\u4EF6</span>

<span class="token comment">// \u6CE8\u610F\u533A\u5206\u4E0A\u9762 \u6838\u5FC3\u63D2\u4EF6\u548C\u6784\u5EFA\u63D2\u4EF6 </span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token operator">...</span><span class="token function">legacy</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="\u6307\u5B9A\u63D2\u4EF6\u751F\u6548\u73AF\u5883" tabindex="-1">\u6307\u5B9A\u63D2\u4EF6\u751F\u6548\u73AF\u5883 <a class="header-anchor" href="#\u6307\u5B9A\u63D2\u4EF6\u751F\u6548\u73AF\u5883" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u6307\u5B9A\u63D2\u4EF6\u7684\u5E94\u7528\u8303\u56F4\u662F\u5728\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u63D2\u4EF6\u5728\u5F00\u53D1\u548C\u751F\u4EA7\u6A21\u5F0F\u4E2D\u90FD\u4F1A\u8C03\u7528\u3002\u53EF\u4EE5\u4F7F\u7528 <code>apply</code> \u5C5E\u6027\u6307\u660E\u5B83\u4EEC\u4EC5\u5728 &#39;build&#39; \u6216 &#39;serve&#39; \u6A21\u5F0F\u65F6\u8C03\u7528\u3002 plugins: [ { ...legacy(options), enforce: &#39;pre&#39;, apply: &#39;build&#39;, } ]</p><h3 id="\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A-vite-\u63D2\u4EF6" tabindex="-1">\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A vite \u63D2\u4EF6 <a class="header-anchor" href="#\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A-vite-\u63D2\u4EF6" aria-hidden="true">#</a></h3><p>\u5F85\u66F4\u65B0\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863<a href="https://cn.vitejs.dev/guide/api-plugin.html" target="_blank" rel="noopener noreferrer">\u63D2\u4EF6API</a></p><h2 id="\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406" tabindex="-1">\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406 <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406" aria-hidden="true">#</a></h2><p>pubilc \u76EE\u5F55\u7684\u5904\u7406\uFF1A</p><ol><li>\u6253\u5305\u65F6\u4F1A\u88AB\u5B8C\u6574\u590D\u5236\u5230\u76EE\u6807\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B\u3002</li><li>\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u5F15\u7528\u5176\u4E2D\u7684\u8D44\u6E90\u5FC5\u987B\u4EE5\u6839\u8DEF\u5F84\u542F\u59CB\u7684\u7EDD\u5BF9\u8DEF\u5F84\u8BBF\u95EE\uFF1A<code>/img.png</code> \u5728\u751F\u4EA7\u6784\u5EFA\u540E\u4F1A <code>public/img.png</code>\u3002</li><li>\u76F8\u5BF9\u8DEF\u5F84\u7684\u9759\u6001\u8D44\u6E90\u5F15\u7528\u9ED8\u8BA4\u8FD4\u56DE\u89E3\u6790\u540E\u7684\u8DEF\u5F84</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> imgUrl <span class="token keyword">from</span> <span class="token string">&#39;./img.png&#39;</span>
imgEl<span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl  <span class="token comment">// \u5728\u751F\u4EA7\u65F6\u4F1A\u88AB\u6784\u5EFA\u4E3A\uFF1AimgEL.src = /assets/img.xxx.png</span>
</code></pre></div><ol start="4"><li>\u901A\u8FC7\u7279\u6B8A\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u6307\u5B9A\u9759\u6001\u8D44\u6E90\u5BFC\u5165\u7684\u5F62\u5F0F</li></ol><div class="language-"><pre><code>?url \u540E\u7F00\u663E\u5F0F\u5BFC\u5165\u4E3A\u4E00\u4E2A URL
?raw \u540E\u7F00\u58F0\u660E\u4F5C\u4E3A\u5B57\u7B26\u4E32\u5F15\u5165
?worker \u6216 ?sharedworker \u540E\u7F00\u5BFC\u5165\u4E3A web worker \u811A\u672C
</code></pre></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h2><ol><li>Vite \u5728\u4E00\u4E2A\u7279\u6B8A\u7684 <code>import.<wbr>meta.env</code> \u5BF9\u8C61\u4E0A\u66B4\u9732\u73AF\u5883\u53D8\u91CF\u3002 \u9ED8\u8BA4\u652F\u6301\u7684\u73AF\u5883\u53D8\u91CF\uFF1A</li></ol><div class="language-"><pre><code>import.<wbr>meta.env.MODE: {string}       \u5E94\u7528\u8FD0\u884C\u7684\u6A21\u5F0F\u3002
import.<wbr>meta.env.BASE_URL: {string}   \u90E8\u7F72\u5E94\u7528\u65F6\u7684\u57FA\u672C URL\u3002\u4ED6\u7531base \u914D\u7F6E\u9879\u51B3\u5B9A\u3002
import.<wbr>meta.env.PROD: {boolean}      \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u751F\u4EA7\u73AF\u5883\u3002
import.<wbr>meta.env.DEV: {boolean}       \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u5F00\u53D1\u73AF\u5883 (\u6C38\u8FDC\u4E0E import.<wbr>meta.env.PROD\u76F8\u53CD)
</code></pre></div><ol start="2"><li>\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF Vite \u4F7F\u7528 dotenv \u4ECE\u4F60\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684<code>.env</code>\u6587\u4EF6\u52A0\u8F7D\u989D\u5916\u7684\u73AF\u5883\u53D8\u91CF\u3002\u5176\u4E2D\u53EA\u6709\u4EE5 <code>VITE_</code> \u4E3A\u524D\u7F00\u7684\u53D8\u91CF\u624D\u4F1A\u66B4\u9732\u7ED9\u7ECF\u8FC7 vite \u5904\u7406\u7684\u4EE3\u7801\u3002\u5982 <code>VITE_SOME_KEY=123</code> \u66B4\u9732\u4E3A <code>import.<wbr>meta.env.VITE_SOME_KEY</code> \u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u6E90\u7801\u3002 \u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5F0F\u7684\u73AF\u5883\u6587\u4EF6\uFF0C\u9996\u9009\u9700\u8981\u660E\u786E\u8BE5\u6A21\u5F0F\u662F\u7C7B\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u7C7B\u751F\u4EA7\u73AF\u5883\uFF0C\u7136\u540E\u5728\u5176\u4E2D\u660E\u786E <code>NODE_ENV</code> \u73AF\u5883\u53D8\u91CF\u7684\u503C\uFF0C\u8BA9 vite \u5B9E\u73B0\u751F\u4EA7\u6216\u5F00\u53D1\u76F8\u5173\u4F18\u5316\uFF0C\u6BD4\u5982 <code>vite build --mode qa</code></li></ol><div class="language-"><pre><code># .env.qa
NODE_ENV=production
VITE_QA_URL=xxxx
</code></pre></div><h2 id="npm-\u4F9D\u8D56\u9884\u6784\u5EFA" tabindex="-1">npm \u4F9D\u8D56\u9884\u6784\u5EFA <a class="header-anchor" href="#npm-\u4F9D\u8D56\u9884\u6784\u5EFA" aria-hidden="true">#</a></h2><ol><li>Vite \u7684\u5F00\u53D1\u670D\u52A1\u5668\u5C06\u6240\u6709\u4EE3\u7801\u89C6\u4E3A\u539F\u751F ES \u6A21\u5757\uFF0C\u5982\u679C\u5BFC\u5165\u7684\u7B2C\u4E09\u65B9\u4F9D\u8D56\u662F CommonJS \u6216 UMD \u89C4\u8303\uFF0C\u5219Vite \u4F1A\u6267\u884C\u667A\u80FD\u5BFC\u5165\u5206\u6790\uFF0C\u5C06\u4F9D\u8D56\u9879\u8F6C\u6362\u4E3A ESM \u89C4\u8303\u3002</li><li>\u914D\u7F6ENPM\u4F9D\u8D56\u662F\u5426\u6DFB\u52A0\u5230\u9884\u6784\u5EFA\u4E2D\uFF0C<code>vite.config.js</code> \u4E2D\u7684 <code>optimizeDeps.include</code> \u548C <code>optimizeDeps.exclude</code></li><li>Vite \u4F1A\u5C06\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u7F13\u5B58\u5230 <code>node_modules/.vite</code> \u76EE\u5F55\u4E2D\uFF0C\u5E76\u4E14\u91C7\u7528\u5F3A\u7F13\u5B58\uFF0C\u5373\u5728\u9996\u6B21\u8BF7\u6C42\u52A0\u8F7D\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\u6587\u4EF6\u540E\uFF0C\u8BBE\u7F6E HTTP \u54CD\u5E94\u5934 <code>cache-control:max-age=31536000,immutable</code>\u3002\u9884\u6784\u5EFA\u4F9D\u8D56\u8BF7\u6C42url\u4E0A\u4F1A\u6DFB\u52A0\u4E00\u4E2A\u65F6\u95F4\u6233\u4F5C\u4E3A query \u53C2\u6570t\uFF0C\u7528\u6765\u66F4\u65B0\u5DF2\u7F13\u5B58\u7684\u9884\u6784\u5EFA\u4F9D\u8D56\u65B9\u5F0F\u3002</li><li>\u5982\u679C\u9700\u8981\u66F4\u65B0\u9884\u6784\u5EFA\u7684\u4F9D\u8D56\uFF0C\u5206\u81EA\u52A8\u548C\u624B\u52A8\u4E24\u79CD\u65B9\u5F0F\uFF1A <ol><li>\u4EE5\u4E0B\u5176\u4E2D\u4E00\u9879\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u90FD\u4F1A\u81EA\u52A8\u91CD\u65B0\u8FD0\u884C\u9884\u6784\u5EFA\uFF1A</li></ol><ul><li><code>package.json</code> \u4E2D\u7684 <code>dependencies </code>\u5217\u8868</li><li>\u5305\u7BA1\u7406\u5668\u7684 lockfile\uFF0C\u4F8B\u5982 <code>package-lock.json</code>, <code>yarn.lock</code>\uFF0C\u6216\u8005 <code>pnpm-lock.yaml</code></li><li>\u5176\u5B83\u5728 <code>vite.config.js</code> \u76F8\u5173\u5B57\u6BB5\u4E2D\u914D\u7F6E\u8FC7\u7684</li></ul><ol start="2"><li>\u624B\u52A8\u66F4\u65B0\u9884\u6784\u5EFA\u4F9D\u8D56\uFF1A <ol><li>\u624B\u52A8\u5220\u9664 node_modules/.vite \u76EE\u5F55</li><li>\u5173\u95ED\u5F00\u53D1\u670D\u52A1\uFF0C\u518D\u4F7F\u7528\u6DFB\u52A0\u4E86 <code>--force</code> \u53C2\u6570\u7684\u547D\u4EE4\u91CD\u542F\u670D\u52A1\uFF1A<code>npm run dev --force</code></li></ol></li></ol></li></ol><h2 id="vite-\u914D\u7F6E\u6587\u4EF6-vite-config-js" tabindex="-1">vite \u914D\u7F6E\u6587\u4EF6 <code>vite.config.js</code> <a class="header-anchor" href="#vite-\u914D\u7F6E\u6587\u4EF6-vite-config-js" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E\u7684\u4E09\u79CD\u5F62\u5F0F\uFF1A" tabindex="-1">\u914D\u7F6E\u7684\u4E09\u79CD\u5F62\u5F0F\uFF1A <a class="header-anchor" href="#\u914D\u7F6E\u7684\u4E09\u79CD\u5F62\u5F0F\uFF1A" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u914D\u7F6E\u9009\u9879</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u901A\u8FC7 IDE \u5B9E\u73B0 TS \u7C7B\u578B\u7684\u667A\u80FD\u63D0\u793A\uFF0C\u5219\u5982\u4E0B\u4F7F\u7528\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u6839\u636E\u73AF\u5883\u5B9E\u73B0\u4E0D\u540C\u7684\u914D\u7F6E\uFF0C\u5219\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\u5BFC\u51FA\u914D\u7F6E\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// serve \u72EC\u6709\u914D\u7F6E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// build \u72EC\u6709\u914D\u7F6E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u914D\u7F6E\u9009\u9879" tabindex="-1">\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u9009\u9879\u57FA\u672C\u5212\u5206\u4E3A\uFF1A</p><ul><li>\u5171\u540C\u914D\u7F6E</li><li>css</li><li>resolve</li><li>server</li><li>build</li><li>optimizeDeps</li><li>ssr</li></ul><div class="language-js"><pre><code>mport <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	mode\uFF1A\u2018development<span class="token string">&#39;, // &#39;</span>development<span class="token string">&#39;\uFF08\u5F00\u53D1\u6A21\u5F0F\uFF09\uFF0C&#39;</span>production&#39;\uFF08\u751F\u4EA7\u6A21\u5F0F\uFF09\uFF0C\u5728\u914D\u7F6E\u4E2D\u6307\u660E\u6A21\u5F0F\uFF0C\u5C06\u4F1A\u628A serve \u548C build \u6A21\u5F0F\u4E0B\u90FD\u8986\u76D6\u6389\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C <span class="token operator">--</span>mode \u9009\u9879\u6765\u8986\u76D6\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u503C\u3002
	<span class="token literal-property property">root</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\uFF08index.html \u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\uFF09</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u57FA\u7840\u8DEF\u5F84</span>
	<span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4F5C\u4E3A\u9759\u6001\u8D44\u6E90\u670D\u52A1\u7684\u6587\u4EF6\u5939\uFF0C\u5728\u5F00\u53D1\u65F6\u76F4\u63A5\u4F7F\u7528 / \u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u751F\u6210\u6784\u5EFA\u65F6\u4F1A\u66FF\u6362\u4E3A pbulic/xx </span>
	<span class="token literal-property property">cacheDir</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/.vite&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8\u7F13\u5B58\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u5305\u62EC\u9884\u6784\u5EFA\u4F9D\u8D56\u7F13\u5B58\u76EE\u5F55\u548Cvite\u5176\u5B83\u67D0\u4E9B\u7F13\u5B58\u6587\u4EF6</span>
	envDir\uFF1A<span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u7528\u4E8E\u52A0\u8F7D .env \u6587\u4EF6\u7684\u76EE\u5F55</span>
	logLevel\uFF1A\u2019info<span class="token string">&#39;, // \u8C03\u6574\u63A7\u5236\u53F0\u8F93\u51FA\u65E5\u5FD7\u7684\u7EA7\u522B\uFF0C&#39;</span>info<span class="token string">&#39; | &#39;</span>warn<span class="token string">&#39; | &#39;</span>error<span class="token string">&#39; | &#39;</span>silent&#39;
	<span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsnext:main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsnext&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u6790\u5305\u7684\u5165\u53E3\u70B9\u65F6\u5C1D\u8BD5\u7684\u5B57\u6BB5\u5217\u8868</span>
		<span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5BFC\u5165\u65F6\u60F3\u8981\u7701\u7565\u7684\u6269\u5C55\u540D\u5217\u8868, \u4E0D\u5EFA\u8BAE\u5FFD\u7565\u81EA\u5B9A\u4E49\u5BFC\u5165\u7C7B\u578B\u7684\u6269\u5C55\u540D\uFF08\u4F8B\u5982\uFF1A.vue\uFF09\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5F71\u54CD IDE \u548C\u7C7B\u578B\u652F\u6301\u3002</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E CSS modules \u7684\u884C\u4E3A\uFF0C\u4F20\u5165 postcss-modules</span>
		postcss\uFF1A<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5185\u8054\u7684 PostCSS \u914D\u7F6E\uFF0C\u6216\u8005\u6307\u5B9A\u4E00\u4E2A postcss.config.js \u7684\u8DEF\u5F84\u3002\u5982\u679C\u63D0\u4F9B\u4E86\u8BE5\u5185\u8054\u914D\u7F6E\uFF0CVite \u5C06\u4E0D\u4F1A\u641C\u7D22\u5176\u4ED6 PostCSS \u914D\u7F6E\u6E90\u3002</span>
		preprocessorOptions\uFF1A<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u4F20\u9012\u7ED9 CSS \u9884\u5904\u7406\u5668\u7684\u9009\u9879</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">namedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u652F\u6301\u4ECE .json \u6587\u4EF6\u4E2D\u8FDB\u884C\u6309\u540D\u5BFC\u5165\uFF0C\u9ED8\u8BA4 true\uFF0C\u5373\u5B9E\u73B0 import { field } from &#39;/path/xx.json&#39;</span>
		<span class="token literal-property property">stringify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u542F\u6B64\u9879\uFF0C\u5219\u4F1A\u7981\u7528\u6309\u540D\u5BFC\u5165\u3002</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E ESbuild \u8F6C\u6362\u9009\u9879</span>
	<span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		entries\uFF1Astring <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">exclude</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">include</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">keepNames</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u670D\u52A1\u5668\u5E94\u8BE5\u76D1\u542C\u54EA\u4E2A IP \u5730\u5740\u3002 \u5982\u679C\u5C06\u6B64\u8BBE\u7F6E\u4E3A 0.0.0.0 \u5C06\u76D1\u542C\u6240\u6709\u5730\u5740\uFF0C\u5305\u62EC\u5C40\u57DF\u7F51\u548C\u516C\u7F51\u5730\u5740\u3002</span>
	<span class="token literal-property property">port</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u7AEF\u53E3\u5DF2\u7ECF\u88AB\u4F7F\u7528\uFF0CVite \u4F1A\u81EA\u52A8\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u53EF\u7528\u7684\u7AEF\u53E3</span>
	<span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u4E3A true \u65F6\u82E5\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\u5219\u4F1A\u76F4\u63A5\u9000\u51FA\uFF0C\u800C\u4E0D\u662F\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\u3002</span>
	<span class="token literal-property property">open</span><span class="token operator">:</span> boolean <span class="token operator">|</span> string<span class="token punctuation">,</span> <span class="token comment">// \u5728\u5F00\u53D1\u670D\u52A1\u5668\u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F\u3002</span>
	<span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token punctuation">,</span>
	<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219, \u4F20\u5165 http-proxy</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;modules&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u6700\u7EC8\u6784\u5EFA\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u76EE\u6807\u3002\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A Vite \u7279\u6709\u7684\u503C\u2014\u2014&#39;modules&#39;\uFF0C\u8FD9\u662F\u6307 \u652F\u6301\u539F\u751F ES \u6A21\u5757\u7684\u6D4F\u89C8\u5668\u3002\u53E6\u4E00\u4E2A\u7279\u6B8A\u503C\u662F \u201Cesnext\u201D</span>
	<span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84\uFF08\u76F8\u5BF9\u4E8E \u9879\u76EE\u6839\u76EE\u5F55).</span>
	<span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u82E5 outDir \u5728 root \u76EE\u5F55\u4E0B\uFF0C\u5219 Vite \u4F1A\u5728\u6784\u5EFA\u65F6\u6E05\u7A7A\u8BE5\u76EE\u5F55\u3002\u82E5 outDir \u5728\u6839\u76EE\u5F55\u4E4B\u5916\u5219\u4F1A\u629B\u51FA\u4E00\u4E2A\u8B66\u544A\u907F\u514D\u610F\u5916\u5220\u9664\u6389\u91CD\u8981\u7684\u6587\u4EF6\u3002</span>
	
	<span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u751F\u6210\u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u8DEF\u5F84\uFF08\u76F8\u5BF9\u4E8E build.outDir\uFF09\u3002</span>
	<span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token number">4096</span>\uFF0C<span class="token comment">// 4kb, \u5C0F\u4E8E\u6B64\u9608\u503C\u7684\u5BFC\u5165\u6216\u5F15\u7528\u8D44\u6E90\u5C06\u5185\u8054\u4E3A base64 \u7F16\u7801\uFF0C\u4EE5\u907F\u514D\u989D\u5916\u7684 http \u8BF7\u6C42\u3002\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5B8C\u5168\u7981\u7528\u6B64\u9879\u3002</span>
	
	<span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528/\u7981\u7528 CSS \u4EE3\u7801\u62C6\u5206\u3002\u5F53\u542F\u7528\u65F6\uFF0C\u5728\u5F02\u6B65 chunk \u4E2D\u5BFC\u5165\u7684 CSS \u5C06\u5185\u8054\u5230\u5F02\u6B65 chunk \u672C\u8EAB\uFF0C\u5E76\u5728\u5176\u88AB\u52A0\u8F7D\u65F6\u63D2\u5165\u3002\u5982\u679C\u7981\u7528\uFF0C\u6574\u4E2A\u9879\u76EE\u4E2D\u7684\u6240\u6709 CSS \u5C06\u88AB\u63D0\u53D6\u5230\u4E00\u4E2A CSS \u6587\u4EF6\u4E2D\u3002</span>
	<span class="token literal-property property">cleanCssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u9012\u7ED9 clean-css \u7684\u6784\u9020\u5668\u9009\u9879</span>
	
	<span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u540E\u662F\u5426\u751F\u6210 source map \u6587\u4EF6</span>
	<span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u4F7F\u7528\u54EA\u79CD\u6DF7\u6DC6\u5668 boolean | &#39;terser&#39; | &#39;esbuild&#39;</span>
	<span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u9012\u7ED9 Terser \u7684\u66F4\u591A minify \u9009\u9879</span>
	<span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// chunk \u5927\u5C0F\u8B66\u544A\u7684\u9650\u5236\uFF08\u4EE5 kbs \u4E3A\u5355\u4F4D\uFF09</span>
	<span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528/\u7981\u7528 brotli \u538B\u7F29\u5927\u5C0F\u62A5\u544A\u3002\u538B\u7F29\u5927\u578B\u8F93\u51FA\u6587\u4EF6\u53EF\u80FD\u4F1A\u5F88\u6162\uFF0C\u56E0\u6B64\u7981\u7528\u8BE5\u529F\u80FD\u53EF\u80FD\u4F1A\u63D0\u9AD8\u5927\u578B\u9879\u76EE\u7684\u6784\u5EFA\u6027\u80FD\u3002</span>
	
	<span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u4E3A\u5E93</span>
	<span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u5E95\u5C42\u7684 Rollup \u6253\u5305\u914D\u7F6E\u3002\u8FD9\u4E0E\u4ECE Rollup \u914D\u7F6E\u6587\u4EF6\u5BFC\u51FA\u7684\u9009\u9879\u76F8\u540C\uFF0C\u5E76\u5C06\u4E0E Vite \u7684\u5185\u90E8 Rollup \u9009\u9879\u5408\u5E76</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,55),o=[e];function c(l,r,i,u,k,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{v as __pageData,g as default};
