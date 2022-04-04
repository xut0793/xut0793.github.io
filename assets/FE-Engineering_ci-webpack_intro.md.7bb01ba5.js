import{_ as n}from"./chunks/module-tools.7400b5d1.js";import{_ as a,c as s,o as e,a as p}from"./app.f1e974b0.js";const h='{"title":"webpack \u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"What: webpack \u662F\u4EC0\u4E48","slug":"what-webpack-\u662F\u4EC0\u4E48"},{"level":2,"title":"Why\uFF1Awebpack \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898","slug":"why\uFF1Awebpack-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898"},{"level":2,"title":"webpack \u8BDE\u751F\u7684\u5386\u53F2","slug":"webpack-\u8BDE\u751F\u7684\u5386\u53F2"},{"level":2,"title":"How\uFF1Awebpack \u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528","slug":"how\uFF1Awebpack-\u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757 module","slug":"webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757-module"}],"relativePath":"FE-Engineering/ci-webpack/intro.md"}',o={},t=p('<h1 id="webpack-\u7B80\u4ECB" tabindex="-1">webpack \u7B80\u4ECB <a class="header-anchor" href="#webpack-\u7B80\u4ECB" aria-hidden="true">#</a></h1><blockquote><p>WWHD\u65B9\u6CD5\u8BBA\uFF1Awhat\u662F\u4EC0\u4E48\u3001why\u4E3A\u4EC0\u4E48\u7528\u5B83\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u3001how\u5982\u4F55\u4F7F\u7528\u3001deep\u6DF1\u5165\u7406\u89E3</p></blockquote><p><div class="table-of-contents"><ul><li><a href="#what-webpack-\u662F\u4EC0\u4E48">What: webpack \u662F\u4EC0\u4E48</a></li><li><a href="#why\uFF1Awebpack-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898">Why\uFF1Awebpack \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898</a></li><li><a href="#webpack-\u8BDE\u751F\u7684\u5386\u53F2">webpack \u8BDE\u751F\u7684\u5386\u53F2</a></li><li><a href="#how\uFF1Awebpack-\u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528">How\uFF1Awebpack \u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528</a></li><li><a href="#\u914D\u7F6E\u6587\u4EF6">\u914D\u7F6E\u6587\u4EF6</a></li><li><a href="#webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757-module">webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757 module</a></li></ul></div></p><h2 id="what-webpack-\u662F\u4EC0\u4E48" tabindex="-1">What: webpack \u662F\u4EC0\u4E48 <a class="header-anchor" href="#what-webpack-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>webpack</code> \u6700\u521D\u76EE\u7684\u662F\u4E00\u4E2A\u6A21\u5757\u6253\u5305\u5DE5\u5177<code>\uFF08module bundler\uFF09</code>\uFF0C\u5B83\u4F1A\u628A\u9075\u5FAA\u6A21\u5757\u89C4\u8303<code>(CommonJS / ES Module)</code>\u5F00\u53D1\u7684 <code>js</code> \u4EE3\u7801\uFF0C\u6253\u5305\u6784\u5EFA\u6210\u4E00\u4E2A <code>bundle.js</code> \u4F9B\u6D4F\u89C8\u5668\u4F7F\u7528\u3002</p><p>\u4F46\u968F\u7740 <code>webpack</code> \u9010\u6B65\u53D1\u5C55\uFF0C\u529F\u80FD\u8D8A\u6765\u8D8A\u4E30\u5BCC:</p><ul><li>\u4E0D\u5728\u53D7\u9650\u4E8E\u53EA\u6253\u5305 js \u4EE3\u7801\uFF0C\u4F9D\u8D56\u793E\u533A\u5F00\u53D1\u7684\u5404\u79CD <code>loader</code> \uFF0C\u57FA\u672C\u524D\u7AEF\u4F9D\u8D56\u7684\u5404\u79CD\u8D44\u6E90<code>\uFF08HTML/CSS/Image\u7B49\uFF09</code>\u90FD\u80FD\u8FDB\u884C\u5904\u7406\u3002</li><li>\u800C\u4E14 <code>webpack</code> \u5B9E\u73B0\u7684\u63D2\u4EF6\u673A\u5236\u548C\u793E\u533A\u5F00\u53D1\u7684\u65E0\u6570 <code>plugin</code>\uFF0C\u4E5F\u6A21\u7CCA\u4E86 <code>webpack</code> \u53EA\u80FD\u6253\u5305<code>(module bundler)</code> \u548C\u5DE5\u4F5C\u6D41\u4E2D tasks \u7684\u754C\u9650\uFF0C\u4F7F\u5F97 <code>webpack</code> \u96C6\u6210\u4E86 <code>workflow</code> \u5DE5\u5177 <code>grunt / gulp</code> \u7684\u529F\u80FD\u3002</li><li>\u6253\u5305\u8F93\u51FA\u7684 <code>bundle.js</code> \u4E5F\u4E0D\u5728\u5C40\u9650\u6D4F\u89C8\u5668\u4F7F\u7528\uFF0C\u4E5F\u53EF\u6253\u5305\u6784\u5EFA\u51FA node \u73AF\u5883\u53EF\u4EE5\u4F7F\u7528\u7684\u5236\u54C1\u3002</li></ul><blockquote><p>Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.</p><p>\u6253\u5305CommonJs/AMD\u6A21\u5757\u4F9B\u6D4F\u89C8\u5668\u4F7F\u7528\uFF0C\u5E76\u4E14\u5141\u8BB8\u5C06\u4F60\u7684\u4EE3\u7801\u5E93\u5206\u5272\u6210\u591A\u4E2Abundle\uFF0C\u6839\u636E\u9700\u8981\u52A0\u8F7D\u3002\u63D0\u4F9B\u52A0\u8F7D\u5668 loader \u9884\u5904\u7406\u6587\u4EF6\uFF0C\u5982 json, jsx, es7, css, less\uFF0C\u2026\u8FD8\u53EF\u4EE5\u4F7F\u7528 Plugin \u5B9A\u5236\u4F60\u9700\u8981\u7684\u529F\u80FD\u3002</p></blockquote><h2 id="why\uFF1Awebpack-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1">Why\uFF1Awebpack \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898 <a class="header-anchor" href="#why\uFF1Awebpack-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u4F34\u968F\u7740 <code>node.js</code> \u5728\u524D\u7AEF\u5DE5\u7A0B\u548C\u5DE5\u5177\u4E2D\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u524D\u7AEF\u4EE3\u7801\u5F00\u53D1\u57FA\u672C\u90FD\u662F\u7528\u6A21\u5757\u5316\u6765\u7EC4\u7EC7\u6587\u4EF6\uFF0C\u4F46\u53D7\u9650\u4E8E\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 <code>CommonJS</code> \u6A21\u5757\u89C4\u8303\u548C\u6D4F\u89C8\u5668\u9700\u8981\u7F51\u7EDC\u8BF7\u6C42\u7684\u4E3B\u8981\u539F\u56E0\uFF0C\u4E0D\u7BA1\u662F\u5728\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u8FD8\u662F\u751F\u4EA7\u670D\u52A1\u5668\u4E0A\uFF0C\u90FD\u662F\u9700\u8981\u628A\u6A21\u5757\u4EE3\u7801\u6253\u5305\u6210 <code>bundle</code> \u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528\u3002\u8FD9\u79CD\u9700\u6C42\u5C31\u6FC0\u53D1\u4E86 <code>browserify / webmake / webpack / rollup / parcel</code> \u7B49\u6253\u5305\u5DE5\u5177\u7684\u4EA7\u751F\u3002</p><p>\u73B0\u5728\u4F34\u968F\u7740 <code>ES module</code> \u89C4\u8303\u5728\u5404\u5927\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u7684\u60C5\u51B5\u4E0B\uFF0C\u4EA7\u751F\u4E86 <code>bundless</code> \u601D\u8DEF\u7684\u6253\u5305\u5DE5\u5177 <code>snowpack / vite</code>\uFF0C\u5728\u5F00\u53D1\u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u5145\u5206\u5229\u7528\u6D4F\u89C8\u5668\u6765\u7BA1\u7406\u548C\u7EC4\u7EC7 <code>ESM</code> \u89C4\u8303\u7684\u6A21\u5757\u3002\u4F46\u5728\u73B0\u5B9E\u7684\u524D\u7AEF\u9879\u76EE\u4E2D\u4F1A\u6709\u975E\u5E38\u591A\u7684\u6A21\u5757\u6587\u4EF6\u5173\u8054\uFF0C\u53D7\u9650\u4E8E\u6D4F\u89C8\u5668\u7F51\u7EDC\u8BF7\u6C42\u7684\u539F\u56E0\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u53EF\u80FD\u4EA7\u751F\u7011\u5E03\u5F0F\u8BF7\u6C42\uFF0C\u4ECD\u7136\u9700\u8981\u51CF\u5C11\u8D44\u6E90\u8BF7\u6C42\u7684\u53D1\u9001\uFF0C\u6240\u4EE5\u672A\u6765\u5728\u672C\u5730\u5F00\u53D1\u4F7F\u7528 <code>bundless</code>\u7684\u6253\u5305\u5DE5\u5177\uFF0C\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u4F7F\u7528 <code>bundle</code> \u7684\u6253\u5305\u5DE5\u5177\u76F8\u7ED3\u5408\u4F1A\u6210\u4E3A\u4E3B\u6D41\u3002</p><p><img src="'+n+`" alt=""></p><h2 id="webpack-\u8BDE\u751F\u7684\u5386\u53F2" tabindex="-1">webpack \u8BDE\u751F\u7684\u5386\u53F2 <a class="header-anchor" href="#webpack-\u8BDE\u751F\u7684\u5386\u53F2" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A<a href="https://zhuanlan.zhihu.com/p/71640308" target="_blank" rel="noopener noreferrer">Webpack \u8BDE\u751F\u8BB0</a></p></blockquote><p><code>webpack</code>\u521B\u5EFA\u8005\u662F Tobias Koppers\uFF0C\u7F51\u7EDC\u6635\u79F0\u53EB sokra\uFF0C\u5FB7\u56FD\u4EBA\u3002</p><p>sokra \u4E00\u5F00\u59CB\u662F\u5199 <code>Java</code> \u7684\uFF0CJava \u91CC\u9762\u6709\u4E2A\u5F88\u51FA\u540D\u7684\u6280\u672F\u53EB <code>GWT\uFF08Google Web Toolkit\uFF09</code>\uFF0C<code>GWT</code> \u4E3B\u8981\u76EE\u7684\u662F\u628A <code>Java</code> \u4EE3\u7801\u8F6C\u6362\u6210 <code>JavaScript</code>\uFF0C\u80FD\u8BA9\u540E\u7AEF\u5F00\u53D1\u76F4\u63A5\u5199\u524D\u7AEF\u4EE3\u7801\u3002<code>GWT</code> \u91CC\u9762\u6709\u4E2A\u7279\u6027\u529F\u80FD\u53EB <code>code splitting</code>\u3002\u4E8E\u662F\uFF0Csokra \u7ED9\u5B83\u5F53\u65F6\u7528\u6765\u505A\u524D\u7AEF\u9879\u76EE\u6253\u5305\u7684\u5DE5\u5177 <a href="https://github.com/medikoo/modules-webmake" target="_blank" rel="noopener noreferrer">modules-webmake</a>\u63D0\u4E86\u4E00\u4E2A <a href="https://github.com/medikoo/modules-webmake/issues/7" target="_blank" rel="noopener noreferrer">issue</a>\uFF0C\u5E0C\u671B\u4ED6\u4EEC\u4E5F\u80FD\u5728\u5DE5\u5177\u4E2D\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4F46\u662F <code>modules-webmake</code> \u7EF4\u62A4\u8005\u4E00\u76F4\u6CA1\u6709\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u8FD9\u4E2A issues \u73B0\u5728\u8FD8 open \u7740\u3002\u4E8E\u662F sokra \u5C31 follow \u4E86\u4E00\u4EFD modules-webmake \u4EE3\u7801 \uFF0C\u5728 github \u4E0A\u5F00\u4E86\u4E00\u4E2A\u65B0\u7684\u9879\u76EE webpack\uFF0C\u6765\u5B9E\u73B0\u5E76\u9A8C\u8BC1 <code>code splitting</code> \u529F\u80FD\u3002\u65F6\u95F4\u662F 2012\u5E743\u670810\u53F7\uFF0CWebpack\u8FD9\u4E2A\u4F1F\u5927\u7684\u9879\u76EE\u5C31\u8FD9\u6837\u8BDE\u751F\u4E86\uFF0C\u4F30\u8BA1 sokra \u5F53\u65F6\u4E5F\u6CA1\u60F3\u65E5\u540E Webpack \u4F1A\u8FD9\u4E48\u6D41\u884C\uFF0C\u6210\u4E3A\u524D\u7AEF\u5F00\u53D1\u7684\u6807\u914D\u3002</p><p><code>Webpack</code> \u8BDE\u751F\u4E86\uFF0C\u4F46\u5B83\u662F\u600E\u4E48\u6D41\u884C\u8D77\u6765\u4E86\u7684\u5462\uFF1F</p><p>2013 \u5E74\uFF0CFacebook \u5C06 <code>React</code> \u5F00\u6E90\u4E86\uFF0C\u8FD9\u662F\u5B83\u4EEC\u5728 2012 \u5E74\u5185\u90E8\u4F7F\u7528\u7684\u4E00\u4E2A\u524D\u7AEF\u6846\u67B6\u3002\u4E5F\u5C31\u662F\u5728 2013 \u5E74\uFF0CFacebook \u6536\u8D2D\u4E86 Instagram\uFF0C\u6240\u4EE5 Instagram \u4E5F\u662F\u7528\u7684 React \uFF0CInstagram \u662F\u4E00\u4E2A\u56FE\u7247\u7684\u793E\u4EA4\u7F51\u7AD9\uFF0C\u56FE\u7247\u8FD8\u662F\u9AD8\u6E05\u7684\uFF0C\u6240\u4EE5\u5BF9\u9875\u9762\u6027\u80FD\u8981\u6C42\u975E\u5E38\u9AD8\u3002</p><p>\u5728 2014 OSCON \u5927\u4F1A\uFF08OSCON \u662F\u52A8\u7269\u4E66 O&#39;Reilly \u7EC4\u7EC7\u7684\uFF09\uFF0CInstagram \u7684\u524D\u7AEF\u56E2\u961F\u5206\u4EAB\u4E86\u4ED6\u4EEC\u5BF9\u524D\u7AEF\u9875\u9762\u52A0\u8F7D\u6027\u80FD\u4F18\u5316\uFF0C\u5176\u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B\u5C31\u662F\u7528\u5230\u7684 <code>Webpack</code> \u7684 <code>code splitting</code>\u529F\u80FD\u3002\u8FD9\u5C31\u5728\u5F53\u65F6\u5F15\u8D77\u4E86\u5F88\u5927\u7684\u8F70\u52A8\uFF0C\u4E4B\u540E\u5927\u5BB6\u7EB7\u7EB7\u5F00\u59CB\u4F7F\u7528 <code>webpack</code>\uFF0C\u5E76\u7ED9 <code>Webpack</code> \u8D21\u732E\u4E86\u65E0\u6570\u7684 <code>loader</code> \u548C <code>plugins</code>\u3002</p><p>\u6240\u4EE5\u5927\u5BB6\u770B\u5230 2014\u5E74\u540E <code>Webpack</code> \u53D1\u5C55\u975E\u5E38\u8FC5\u731B\uFF0C\u7248\u672C\u66F4\u65B0\u975E\u5E38\u5FEB\uFF0C\u6700\u540E\u8FD9\u4E9B <code>plugins</code> \u4E5F\u6A21\u7CCA\u4E86 <code>module bundler</code> \u548C workflow \u5DE5\u5177\u4E2D <code>tasks</code> \u7684\u754C\u9650\uFF0C\u4E8E\u662F webpack \u628A\u524D\u7AEF workflow \u5DE5\u5177 <code>grunt/gulp</code> \u7684\u529F\u80FD\u4E5F\u57FA\u672C\u53D6\u4EE3\u4E86\u3002</p><h2 id="how\uFF1Awebpack-\u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528" tabindex="-1">How\uFF1Awebpack \u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#how\uFF1Awebpack-\u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u524D\u7AEF\u5DE5\u5177\u57FA\u672C\u90FD\u9075\u5FAA\u540C\u6837\u7684\u7ED3\u6784\uFF0C\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u5DE5\u5177\uFF1A</p><ul><li>\u6838\u5FC3\u529F\u80FD\u5E93\uFF1A webpack</li><li>\u547D\u4EE4\u884C\u5DE5\u5177\uFF1A webpack-cli</li><li>\u914D\u7F6E\u6587\u4EF6\uFF1A webpack.config.js</li><li>\u63D2\u4EF6\u4F53\u7CFB\uFF1Aplugins</li><li>webpack \u7279\u6709\u7684 loader</li></ul><p>\u5B89\u88C5\uFF1A</p><p>\u622A\u6B62 2021-02-10 \u65E5\uFF0C\u76EE\u524D\u6700\u65B0\u7248\u672C\uFF1A webpack@5.21.2 webpack-cli@4.5.0</p><div class="language-"><pre><code>npm install --save-dev webpack webpack-cli # \u672C\u5730\u5B89\u88C5
npm install -g webpack webpack-cli # \u5168\u5C40\u5B89\u88C5
</code></pre></div><p>\u57FA\u672C\u4F7F\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// src/index</span>
<span class="token keyword">import</span> hello <span class="token keyword">from</span> <span class="token string">&#39;.hello.js&#39;</span>
<span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// hello.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u547D\u4EE4\u884C\u6253\u5305</p><div class="language-"><pre><code># \u5982\u679C\u672C\u5730\u5B89\u88C5
npx webpack src/index.js -o dist/bundle.js 

# \u5982\u679C\u5168\u5C40\u5B89\u88C5
webpack src/index.js -o dist/bundle.js
</code></pre></div><p>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6 <code>webpack.config.js</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>Webpack</code> \u4F1A\u81EA\u52A8\u5BFB\u627E\u5230\u6839\u76EE\u5F55\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528\u5176\u914D\u7F6E\u4FE1\u606F\u8FDB\u884C\u6253\u5305\u3002</p><div class="language-"><pre><code>npx webpack
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u4EE3\u7801\u89E3\u91CA\uFF1A</p><p>\u56E0\u4E3A <code>Webpack</code> \u662F\u57FA\u4E8E <code>Node.js</code> \u6267\u884C\u7684\uFF0C\u6240\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5BFC\u51FA\u4E5F\u8981\u9075\u5FAA <code>CommonJS</code>\u89C4\u8303\uFF0C\u4F7F\u7528<code>module.exports</code>\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u7684\u5C5E\u6027\u5C31\u662F<code>Webpack</code>\u6253\u5305\u8981\u4F7F\u7528\u7684\u53C2\u6570\u3002</p><ul><li><code>entry</code>\u6307\u5B9A<code>Webpack</code>\u6784\u5EFA\u7684\u5165\u53E3\u6587\u4EF6\uFF0C</li><li><code>output</code>\u6307\u5B9A\u6253\u5305\u540E\u8D44\u6E90\u8F93\u51FA\u6587\u4EF6\uFF0C\u5176\u4E2D<code>path</code>\u8868\u793A\u8F93\u51FA\u7684\u8DEF\u5F84\uFF0C<code>filename</code>\u8868\u793A\u8F93\u51FA\u7684\u6587\u4EF6\u540D</li><li><code>mode</code>\u6307\u5B9AWebpack\u7684\u6253\u5305\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662F<code>production</code>\uFF0C\u8868\u793A\u7ED9\u751F\u4EA7\u73AF\u5883\u6253\u5305\u7684\u3002\u73B0\u5728\u6211\u4EEC\u8BBE\u7F6E\u6210<code>none</code>\uFF0C\u8FD9\u6837\u4EE3\u7801\u5C31\u4E0D\u4F1A\u538B\u7F29\u4E86\u3002</li><li><code>path</code>\u662F<code>Node.js</code>\u91CC\u7684\u8DEF\u5F84\u89E3\u6790\u6A21\u5757\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5176\u770B\u6210\u662F\u4E00\u4E2AJS\u666E\u901A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u6709\u4E00\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u4F9B\u6211\u4EEC\u4F7F\u7528\u3002\u6211\u4EEC\u73B0\u5728\u4F7F\u7528\u4E86\u5176<code>resolve</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5C06\u65B9\u6CD5\u53C2\u6570\u89E3\u6790\u6210\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u8FD4\u56DE\u3002<code>__dirname</code>\u662F<code>Node.js</code>\u7684\u5F53\u524D\u6A21\u5757\u8303\u56F4\u5185\u7684\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u8868\u793A\u5F53\u524D\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u8FD9\u6837\uFF0C<code>path.resolve(__dirname, &#39;./dist&#39;)</code>\u8868\u793A\u7684\u5176\u5B9E\u5C31\u662F\u5F53\u524D\u6587\u4EF6\u5939\u6839\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84<code>/dist</code>\u3002</li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><p><code>webpack.config.js</code>\u914D\u7F6E\u6587\u4EF6\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\u3001\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\u3001\u5BFC\u51FA\u4E00\u4E2A Promise \u5BF9\u8C61\u3001\u6216\u8005\u5BFC\u51FA\u591A\u4E2A\u5BF9\u8C61\u6216\u591A\u4E2A\u51FD\u6570\u6765\u6267\u884C\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570
 * \u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u5165\u53C2\uFF1Aenv , argv
 * - env: \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6765\u81EA webpack-cli \u5728\u547D\u4EE4\u884C\u4F7F\u7528\u65F6\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u3002\u6BD4\u5982\uFF1A
 *    webpack --env.production --env.platform=web
 *    \u90A3\u4E48\u6B64\u65F6\u51FD\u6570\u5165\u53C2 env = {production: true, platform: &#39;web&#39;} \u5177\u4F53\u5728 cli \u5982\u4F55\u914D\u7F6E\u73AF\u5883\u9009\u9879\u53C2\u8003[https://www.webpackjs.com/api/cli/#%E7%8E%AF%E5%A2%83%E9%80%89%E9%A1%B9]
 * - argv: \u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86 webpack-cli \u5728\u547D\u4EE4\u884C\u65F6\u4F7F\u7528\u7684\u914D\u7F6E\u53C2\u6570

 */</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u5165\u53C2 <code>env, argv</code>\uFF1A</p><ul><li>env: \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6765\u81EA webpack-cli \u5728\u547D\u4EE4\u884C\u4F7F\u7528\u65F6\u5BF9 <code>--env</code> \u9009\u9879\u7684\u914D\u7F6E\u503C\u3002</li><li>argv: \u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86 webpack-cli \u5728\u547D\u4EE4\u884C\u65F6\u4F7F\u7528\u7684\u5176\u5B83\u914D\u7F6E\u53C2\u6570</li></ul><p>\u6BD4\u5982\uFF1A <code>webpack --env.prod --env.platform=web --optimize-minimize --output-path=&#39;./dist&#39; --output-filename=bundle.js</code></p><p>\u5219\u51FD\u6570\u5165\u53C2\uFF1A</p><div class="language-js"><pre><code><span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">prod</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">&#39;web&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">argv</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;optimize-minimize&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;output-path&#39;</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;output-filename&#39;</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> argv</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> env<span class="token punctuation">.</span>prod <span class="token operator">?</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> argv<span class="token punctuation">[</span><span class="token string">&#39;output-path&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;dist&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> argv<span class="token punctuation">[</span><span class="token string">&#39;output-filename&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> argv<span class="token punctuation">[</span><span class="token string">&#39;optimize-minimize&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u53EA\u6709\u4F20\u5165 -p \u6216 --optimize-minimize</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u6216\u8005\u4F7F\u7528\u6570\u7EC4\u540C\u65F6\u5BFC\u51FA\u591A\u4E2A\u5BF9\u8C61\u6216\u51FD\u6570\uFF0C\u4F46\u8FD9\u79CD\u4E00\u822C\u4E0D\u5E38\u7528\u3002\u5177\u4F53\u53EF\u4EE5\u67E5\u770B\u5B98\u7F51\u793A\u4F8B<a href="https://www.webpackjs.com/configuration/configuration-types/" target="_blank" rel="noopener noreferrer">https://www.webpackjs.com/configuration/configuration-types/</a></p><h2 id="webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757-module" tabindex="-1">webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757 module <a class="header-anchor" href="#webpack\uFF1A\u4E00\u5207\u7686\u6A21\u5757-module" aria-hidden="true">#</a></h2><p>\u5728\u6A21\u5757\u5316\u7F16\u7A0B\u4E2D\uFF0C\u5F00\u53D1\u8005\u5C06\u7A0B\u5E8F\u5206\u89E3\u6210\u79BB\u6563\u529F\u80FD\u5757(discrete chunks of functionality)\uFF0C\u79F0\u4E4B\u4E3A<strong>\u6A21\u5757</strong>\u3002</p><p>\u6BCF\u4E2A\u6A21\u5757\u5177\u6709\u6BD4\u5B8C\u6574\u7A0B\u5E8F\u66F4\u5C0F\u7684\u63A5\u89E6\u9762\uFF0C\u4F7F\u5F97\u6821\u9A8C\u3001\u8C03\u8BD5\u3001\u6D4B\u8BD5\u8F7B\u800C\u6613\u4E3E\u3002 \u7CBE\u5FC3\u7F16\u5199\u7684\u6A21\u5757\u63D0\u4F9B\u4E86\u53EF\u9760\u7684\u62BD\u8C61\u548C\u5C01\u88C5\u754C\u9650\uFF0C\u4F7F\u5F97\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6BCF\u4E2A\u6A21\u5757\u90FD\u5177\u6709\u6761\u7406\u6E05\u695A\u7684\u8BBE\u8BA1\u548C\u660E\u786E\u7684\u76EE\u7684\u3002</p><p>\u4F46\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u53C8\u8981\u6574\u5408\u5404\u4E2A\u6A21\u5757\u529F\u80FD\uFF0C\u5C31\u50CF\u79EF\u6728\u901A\u8FC7\u51F9\u51F8\u70B9\u62FC\u88C5\u6210\u6574\u4F53\u73A9\u5177\u4E00\u6837\uFF0C\u5404\u4E2A\u6A21\u5757\u95F4\u4E5F\u9700\u8981\u4F7F\u7528\u7EDF\u4E00\u7684\u6A21\u5757\u89C4\u8303\u6765\u5B9A\u4E49\u6A21\u5757\u5BFC\u5165\u548C\u5BFC\u51FA\u7684\u63A5\u53E3\u3002\u4ECE\u6A21\u5757\u89C4\u8303\u53D1\u5C55\u7684\u65F6\u95F4\u987A\u5E8F\uFF0C\u5305\u62EC<code>CommonJS / AMD / CMD / UMD / ES Module</code>\u3002</p><p>\u5728 webpack \u4E16\u754C\u4E2D\uFF0C\u53EF\u4EE5\u89C6\u4E00\u5207\u7686\u6A21\u5757\u3002\u6BD4\u5982\u4EE3\u7801\u4E2D\u4EE5\u4E0B\u4F7F\u7528\u4EE5\u4E0B\u8BED\u53E5\u5BFC\u5165\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u89C6\u4E3A\u6A21\u5757\u8FDB\u884C\u5904\u7406\uFF1A</p><ul><li>ES module \u89C4\u8303\u4E2D\u7684 <code>import xx from xx</code> \u8BED\u53E5\u548C\u52A8\u6001\u5BFC\u5165\u8BED\u53E5 <code>import()</code></li><li>CommonJS \u89C4\u8303\u7684 <code>require()</code> \u8BED\u53E5</li><li>AMD <code>define / require</code> \u8BED\u53E5</li><li>css/sass/less \u6587\u4EF6\u4E2D\u7684 <code>@import</code> \u8BED\u53E5\u3002</li><li>css \u6837\u5F0F\u5C5E\u6027\u503C\u4E2D\u7684 <code>url(...)</code></li><li>HTML \u6587\u4EF6<code>&lt;img src=...&gt;</code>\u4E2D\u7684\u56FE\u7247\u94FE\u63A5(image url)</li></ul>`,53),c=[t];function l(r,i,d,u,k,b){return e(),s("div",null,c)}var g=a(o,[["render",l]]);export{h as __pageData,g as default};