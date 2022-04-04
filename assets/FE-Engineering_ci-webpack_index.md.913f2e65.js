import{_ as e,c as l,o as i,a as o}from"./app.f1e974b0.js";const m='{"title":"Webpack \u624B\u518C","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Engineering/ci-webpack/index.md"}',c={},a=o('<h1 id="webpack-\u624B\u518C" tabindex="-1">Webpack \u624B\u518C <a class="header-anchor" href="#webpack-\u624B\u518C" aria-hidden="true">#</a></h1><ol><li>\u57FA\u7840\u5165\u95E8 <code>intro.md</code><ol><li>\u4EC0\u4E48\u662F webpack\uFF1Fwebpack \u7528\u6765\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F</li><li>\u524D\u7AEF\u6A21\u5757\u5316\u53D1\u5C55\u7B80\u53F2</li><li>webpack \u5386\u53F2</li><li>webpack \u5B89\u88C5\u548C\u57FA\u672C\u4F7F\u7528</li><li>webpack \u4E16\u754C\u4E00\u5207\u7686\u6A21\u5757</li></ol></li><li>webpack \u914D\u7F6E\u9879 <code>config.md</code><ol><li>context \u914D\u7F6E\u5168\u5C40\u4E0A\u4E0B\u6587\u8DEF\u5F84</li><li>entry \u914D\u7F6E\u6A21\u5757\u6253\u5305\u7684\u5165\u53E3</li><li>targets \u914D\u7F6E\u6700\u7EC8\u6784\u5EFA\u76EE\u6807\u73AF\u5883</li><li>output \u914D\u7F6E\u6A21\u5757\u6253\u5305\u7ED3\u679C\u51FA\u53E3</li><li>resolve \u914D\u7F6E\u67E5\u627E\u6A21\u5757\u7684\u89C4\u5219</li><li>module \u914D\u7F6E\u6A21\u5757\u8F6C\u6362\u7684 loader</li><li>plugin \u914D\u7F6E\u63D2\u4EF6\uFF0C\u5BF9\u7F16\u8BD1\u5B8C\u6210\u540E\u7684\u5185\u5BB9\u8FDB\u884C\u4E8C\u5EA6\u52A0\u5DE5</li><li>performance \u914D\u7F6E\u6784\u5EFA\u65F6\u5982\u4F55\u63A7\u5236\u9884\u8BBE\u7684\u6027\u80FD\u9600\u503C</li><li>stats \u914D\u7F6E\u5982\u4F55\u663E\u793A\u6784\u5EFA\u4FE1\u606F</li><li>externals \u914D\u7F6E\u4E0D\u9700\u8981\u8FDB\u884C\u6253\u5305\u7684\u5916\u90E8\u6269\u5C55</li><li>optimization \u6784\u5EFA\u4F18\u5316\u7684\u9009\u9879\uFF0C\u538B\u7F29\u3001\u5206\u7247\u7B49</li><li>devtool \u914D\u7F6E js \u6587\u4EF6\u7684 source-map</li><li>devServer \u914D\u7F6E\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668</li><li>\u6574\u4F53\u914D\u7F6E\u6587\u4EF6</li></ol></li><li>webpack \u8FDB\u9636\u914D\u7F6E\uFF0C\u5B9E\u73B0\u76EE\u6807\uFF1A\u4EE3\u7801\u8F6C\u5316\u3001\u6A21\u5757\u5408\u5E76\u3001\u4EE3\u7801\u5206\u5272\u3001\u4EE3\u7801\u538B\u7F29\u3001\u6447\u6811\u4F18\u5316\u3001\u4F5C\u7528\u57DF\u63D0\u5347\u3001\u6587\u4EF6\u6307\u7EB9\u3001\u6301\u4E45\u7F13\u5B58\u3001\u6027\u80FD\u4F18\u5316 <ol><li>html: HtmlWebpackPlugin \u63D2\u4EF6\u4F7F\u7528</li><li>asset <ul><li>webpack@4.x: <code>file-loader</code>\u3001<code>url-loader</code>\u3001<code>raw-loader</code></li><li>webpack@5.x\uFF1A<code>asset/source</code>\u3001<code>asset/resource</code>\u3001<code>asset/inline</code>\u3001<code>asset</code></li></ul></li><li>css</li><li>CSS \u539F\u751F\u5904\u7406\u7684\u56DB\u79CD\u65B9\u5F0F: \u884C\u5185\u6837\u5F0F\u3001\u5185\u5D4C\u6837\u5F0F\u6807\u7B7E<code>&lt;style&gt;&lt;/style&gt;</code>\u3001\u94FE\u63A5\u5916\u90E8\u6837\u5F0F<code>&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot; /&gt;</code>\u3001\u5BFC\u5165\u6837\u5F0F<code>@import</code></li><li>css-loader</li><li>style-loader</li><li>mini-css-extract-plugin</li><li>css-minimizer-webpack-plugin</li><li>purgecss-webpack-plugin</li><li>css \u9884\u5904\u7406\u5668 scss / less /stylus</li><li>postcss</li><li>js <ol><li>\u5E38\u89C4\u9759\u6001\u5BFC\u5165\u6A21\u5757\u6253\u5305\u6784\u5EFA</li><li>\u52A8\u6001\u5BFC\u5165\u5B9E\u73B0\u61D2\u52A0\u8F7D\u3001\u9884\u52A0\u8F7D\u3001\u9884\u8BF7\u6C42\uFF0C\u53CA\u5176\u9B54\u6CD5\u6CE8\u91CA(Magic Comment)</li><li>\u4EE3\u7801\u63D0\u53D6\uFF1A</li><li>\u5728\u5165\u53E3 <code>entry</code> \u4E2D\u914D\u7F6E\uFF0C\u5206\u79BB bundle</li><li><code>import()</code>\u52A8\u6001\u61D2\u52A0\u8F7D\u4E5F\u4F1A\u6253\u5305\u6210\u72EC\u7ACB\u7684 bundle</li><li><code>externals</code>\u963B\u6B62\u5C06\u67D0\u4E9B\u4F9D\u8D56\u5305\u6253\u5305\u8FDB bundle \u4E2D\uFF0C\u800C\u662F\u901A\u8FC7\u5E94\u7528\u8FD0\u884C\u65F6\u4ECE\u5916\u90E8\u83B7\u53D6\u8FD9\u4E9B<em>\u6269\u5C55\u4F9D\u8D56(external dependencies)</em></li><li><code>optimization.splitChunks</code> \u914D\u7F6E\u7F13\u5B58\u7EC4<em>cacheGroup</em>\uFF0C\u4E3B\u52A8\u5207\u5272 bundle</li><li><code>DllPlugin</code> \u548C <code>DllReferencePlugin</code> \u5B9E\u73B0\u4E86\u62C6\u5206 bundle\u3002<code>DLL</code> \u4E00\u8BCD\u4EE3\u8868\u5FAE\u8F6F\u6700\u521D\u4F7F\u7528\u7684\u6280\u672F<strong>\u52A8\u6001\u94FE\u63A5\u5E93</strong>\u3002</li><li><code>runtimeChunk</code> \u8FD0\u884C\u65F6\u4EE3\u7801\u62BD\u79BB</li><li><code>IgnorePlugin</code>\u5FFD\u7565\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305\u4E2D\u90E8\u5206\u6307\u5B9A\u76EE\u5F55\u7684\u4EE3\u7801</li><li>\u4EE3\u7801\u538B\u7F29 <code>terser-webpack-plugin</code></li></ol></li><li>development <ol><li>watch \u914D\u7F6E</li><li>webpack-dev-server \u914D\u7F6E</li><li>DefinePlugin \u63D2\u4EF6</li><li>env \u73AF\u5883\u533A\u5206</li></ol></li><li>production <ul><li>DCE(Dead Code Elimination) \u6B7B\u4EE3\u7801\u6D88\u9664</li><li>Tree Shaking \u7684\u5B9E\u73B0</li><li>babel-loader \u914D\u7F6E\u9879 module: false</li><li>optimization.usedExports\uFF1A\u5F00\u542F\u5BF9 exports \u6709\u7528\u548C\u65E0\u7528\u5BFC\u5165\u7684\u6807\u8BC6</li><li>sideEffects \u526F\u4F5C\u7528\u53CA\u76F8\u5173\u7684 optimization.sideEffects, package.json.sideEffects</li><li>scope hoisting \u4F5C\u7528\u57DF\u63D0\u5347</li><li>\u6587\u4EF6\u54C8\u5E0C\u6307\u7EB9 <code>hash / chunkhash / comtenthash</code></li><li>\u6301\u4E45\u7F13\u5B58\u7B56\u7565</li><li>\u751F\u6210\u7A33\u5B9A\u7684\u6A21\u5757 ID\uFF1Awebpack@4.x \u4E2D\u53EF\u4EE5\u4F7F\u7528<code>NamedModulesPlugin</code> \u6216 <code>HashedModuleIdsPlugin</code> \u63D2\u4EF6\u6765\u7A33\u5B9A moduleId\uFF1B\u5728webpack@5.x \u4E2D\u53EF\u4EE5\u8BBE\u7F6E <code>optimization.moduleIds / optimization.chunkIds</code></li></ul></li><li>performance <ul><li>\u91CF\u5316 <ul><li>\u901F\u5EA6\u91CF\u5316\uFF1Aspeed-measure-webpack-plugin</li><li>\u4F53\u79EF\u91CF\u5316 <ol><li>\u751F\u6210 stat.json \u5728\u7EBF\u5206\u6790</li><li>webpack-bundle-analyzer \u56FE\u8868\u89C6\u56FE</li><li>webpack-visualizer-plugin \u997C\u72B6\u89C6\u56FE</li></ol></li></ul></li><li>\u901F\u5EA6\u4F18\u5316 <ol><li>\u7F29\u5C0F\u6587\u4EF6\u7684\u641C\u7D22\u8303\u56F4</li><li><code>exclude / include</code></li><li><code>resolve</code>: modules / mainFields / extensions / alias</li><li><code>noParse</code></li><li>\u5229\u7528\u8BA1\u7B97\u673A\u80FD\u529B\u4F18\u5316\u901F\u5EA6\uFF08\u591A\u6838\u3001\u591A\u8FDB\u7A0B\u3001\u591A\u7EBF\u7A0B\u3001\u5185\u5B58\u7A7A\u95F4\u7B49\uFF09</li><li>\u4F7F\u7528\u7F13\u5B58\uFF0C\u52A0\u5FEB\u4E8C\u6B21\u6784\u5EFA\u901F\u5EA6 1. babel-loader \u5F00\u542F\u7F13\u5B58: <code>cacheDirectory: true</code> 2. terser-webpack-plugin \u5F00\u542F\u7F13\u5B58: <code>cache: true</code> 3. \u4F7F\u7528 hard-source-webpack-plugin \u63D2\u4EF6 4. \u7A33\u5B9A moduleId \u548C chunkId\uFF0C\u5229\u7528 webpack \u81EA\u8EAB\u7684\u6784\u5EFA\u7F13\u5B58</li><li>\u5E76\u884C\u64CD\u4F5C 5. thread-loader \u591A\u7EBF\u7A0B\u5904\u7406 6. parallel-webpack \u591A\u8FDB\u7A0B\u5904\u7406 7. terser-webpack-plugin \u5F00\u542F parallel \u5C5E\u6027</li><li>\u9884\u6784\u5EFA <code>autodll-webpack-plugin</code></li><li>\u9884\u52A0\u8F7D <code>webpackPrefetch</code></li><li>\u5408\u7406\u4F7F\u7528 <code>sourceMap</code></li></ol></li><li>\u4F53\u79EF\u4F18\u5316 <ul><li>css \u63D0\u53D6\u72EC\u7ACB\u6587\u4EF6\u3001\u6587\u4EF6\u538B\u7F29\u3001\u65E0\u7528\u4EE3\u7801\u5220\u9664 --- \u89C1 <strong><a href="http://css.md" target="_blank" rel="noopener noreferrer">css.md</a></strong></li><li>js \u6587\u4EF6\u62C6\u5206 <code>optimization.splitChunks</code>\u3001\u5F02\u6B65\u4EE3\u7801\u52A0\u8F7D\u3001webpack \u8FD0\u884C\u65F6\u4EE3\u7801 runtime \u63D0\u53D6\u590D\u7528\u3001externals \u914D\u7F6E\u3001\u6587\u4EF6\u538B\u7F29\u3001Tree Shaking\u3001scope hosting --- \u89C1 <strong><a href="http://js.md" target="_blank" rel="noopener noreferrer">js.md</a></strong></li><li>image \u56FE\u7247\u538B\u7F29\u3001\u8F6C\u6210 base64 \u5D4C\u5165\u4EE3\u7801</li><li>icon \u7C7B\u56FE\u7247\u4F7F\u7528 css Sprite \u6765\u5408\u5E76\u56FE\u7247\u6210\u4E00\u5F20\u96EA\u78A7\u56FE\uFF0C\u6216\u8005\u4F7F\u7528\u5B57\u4F53\u6587\u4EF6 iconfont\u3002</li><li>Gzip \u538B\u7F29</li><li>IgnorePlugin \u63D2\u4EF6</li></ul></li><li>\u5347\u7EA7\u6700\u65B0\u7248\u672C\uFF1A<code>node / npm / webpack</code></li></ul></li></ol></li><li>webpack-chain \u4F7F\u7528</li></ol><ul><li><a href="https://segmentfault.com/a/1190000017547171" target="_blank" rel="noopener noreferrer">webpack-chain\u9879\u76EE\u4E2D\u6587\u7FFB\u8BD1</a></li><li><a href="https://mp.weixin.qq.com/s/99XZLeYh_tejNe713Q_14w" target="_blank" rel="noopener noreferrer">\u4E3A\u914D\u7F6E Webpack \u611F\u5230\u75DB\u4E0D\u6B32\u751F\uFF0C\u76F4\u5230\u6211\u9047\u5230\u4E86\u8FD9\u4E2A\u6D41\u5F0F\u914D\u7F6E\u65B9\u6848</a></li></ul><ol start="5"><li>webpack \u539F\u7406\u6D45\u6790 <ol><li>\u6253\u5305\u6587\u4EF6 bundle \u4E2D\u6A21\u5757\u52A0\u8F7D\u673A\u5236\u539F\u7406 <code>__wepback_require__</code></li><li>\u5F02\u6B65\u52A0\u8F7D\u7684\u539F\u7406 <code>import()</code>\uFF0C\u5305\u62EC\u9B54\u6CD5\u6CE8\u91CA\u5B9E\u73B0\u9884\u52A0\u8F7D\u3001\u9884\u8BF7\u6C42\u7684\u539F\u7406</li><li>tapable \u6E90\u7801</li><li>webpack \u6E90\u7801</li><li>webpack-dev-server \u6E90\u7801</li><li>webpack-HMR \u6E90\u7801</li><li>http-proxy</li><li>\u7F16\u5199 loader</li><li>\u7F16\u5199 plugin</li></ol></li><li>\u9879\u76EE\u5B9E\u8DF5 <ol><li>\u73AF\u5883\u53D8\u91CF</li><li>vue \u9879\u76EE <code>vue.config.js</code> \u914D\u7F6E\u5B9E\u8DF5</li><li>vue \u9879\u76EE\u4F18\u5316\u5B9E\u8DF5</li></ol></li></ol>',4),d=[a];function t(r,s,n,p,u,b){return i(),l("div",null,d)}var g=e(c,[["render",t]]);export{m as __pageData,g as default};