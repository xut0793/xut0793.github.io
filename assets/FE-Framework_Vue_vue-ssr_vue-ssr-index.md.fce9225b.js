import{_ as e,c as r,o as s,a as l}from"./app.9dbb06c5.js";const _='{"title":"Vue SSR \u670D\u52A1\u7AEF\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSR \u6982\u8FF0","slug":"ssr-\u6982\u8FF0"},{"level":2,"title":"Vue SSR \u7684\u5B9E\u73B0","slug":"vue-ssr-\u7684\u5B9E\u73B0"},{"level":2,"title":"vue-server-render \u6E90\u7801\u89E3\u6790","slug":"vue-server-render-\u6E90\u7801\u89E3\u6790"},{"level":2,"title":"Vue SSR \u7684\u6846\u67B6 Nuxt.js","slug":"vue-ssr-\u7684\u6846\u67B6-nuxt-js"}],"relativePath":"FE-Framework/Vue/vue-ssr/vue-ssr-index.md"}',i={},a=l('<h1 id="vue-ssr-\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1">Vue SSR \u670D\u52A1\u7AEF\u6E32\u67D3 <a class="header-anchor" href="#vue-ssr-\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a></h1><h2 id="ssr-\u6982\u8FF0" tabindex="-1">SSR \u6982\u8FF0 <a class="header-anchor" href="#ssr-\u6982\u8FF0" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u662FSSR\uFF0C\u5B83\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F18\u7F3A\u70B9\u3001\u76F8\u5173\u6982\u5FF5</p><h2 id="vue-ssr-\u7684\u5B9E\u73B0" tabindex="-1">Vue SSR \u7684\u5B9E\u73B0 <a class="header-anchor" href="#vue-ssr-\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u4E00\u6B65\u4E00\u6B65\u6DF1\u5165 Vue SSR</p><ul><li>\u8D77\u4E2A express \u670D\u52A1\uFF0C\u76F4\u51FA HTML</li><li>express \u670D\u52A1\u5229\u7528\u6A21\u677F\u5E26\u6570\u636E\u8FD4\u56DEHTML</li><li>\u4F7F\u7528 Vue-server-render \u751F\u6210\u6A21\u677F\u6E32\u67D3\uFF0C\u8FD4\u56DE HTML</li><li>\u5B9E\u73B0\u8DEF\u7531</li><li>\u5B9E\u73B0\u6570\u636E</li><li>\u5F02\u6B65\u7EC4\u4EF6\u548C\u70ED\u66F4\u65B0 bundle</li><li>\u7F13\u5B58</li></ul><h2 id="vue-server-render-\u6E90\u7801\u89E3\u6790" tabindex="-1">vue-server-render \u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#vue-server-render-\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><ol><li>webpack \u7F16\u8BD1\u9636\u6BB5 <ol><li>\u5165\u53E3 entry-client.js \u751F\u6210\u7528\u4E8E\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u6E32\u67D3\u7684 js \u6587\u4EF6\u548C\u4E00\u4EFD\u7528\u4E8Etemplate\u7EC4\u88C5\u7684json \u6587\u4EF6\uFF1Avue-ssr-server-bundle.json</li><li>\u670D\u52A1\u7AEF\u6253\u5305\u5165\u53E3 entry-server.js\uFF0C\u751F\u6210\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684 json \u6587\u4EF6\uFF1Avue-ssr-server-bundle.json</li></ol></li><li>\u521D\u59CB\u5316 renderer \u9636\u6BB5\uFF1A <ol><li>\u4F7F\u7528 vue-server-renderer \u7684 API \u4F1A\u5728node\u542F\u52A8\u65F6\u521D\u59CB\u5316\u4E00\u4E2Arenderer \u5355\u4F8B\u5BF9\u8C61</li></ol></li><li>\u6E32\u67D3\u9636\u6BB5\uFF1A <ol><li>\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u5F53\u7528\u6237\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0Crenderer.renderToString \u6216\u8005 renderer.renderToStream \u51FD\u6570\u5C06\u5B8C\u6210 vue\u7EC4\u4EF6\u5230 html \u7247\u6BB5\u7684\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\u3002</li></ol></li><li>HTML \u5185\u5BB9\u8F93\u51FA\u9636\u6BB5\uFF1A <ol><li>\u6E32\u67D3\u9636\u6BB5\u6211\u4EEC\u5DF2\u7ECF\u62FF\u5230\u4E86vue\u7EC4\u4EF6\u6E32\u67D3\u7ED3\u679C\uFF0C\u5B83\u662F\u4E00\u4E2Ahtml\u5B57\u7B26\u4E32\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u5C55\u793A\u9875\u9762\u6211\u4EEC\u8FD8\u9700\u8981css\u3001js \u7B49\u4F9D\u8D56\u8D44\u6E90\u7684\u5F15\u5165\u6807\u7B7E \u548C \u901A\u8FC7 store \u540C\u6B65\u6211\u4EEC\u5728\u670D\u52A1\u7AEF\u7684\u6E32\u67D3\u6570\u636E\uFF0C\u8FD9\u4E9B\u6700\u7EC8\u7EC4\u88C5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684 html \u62A5\u6587\u8F93\u51FA\u5230\u6D4F\u89C8\u5668\u4E2D\u3002</li></ol></li><li>\u5BA2\u6237\u7AEF\u6FC0\u6D3B\u9636\u6BB5 <ol><li>\u5F53\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E86\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE HTML\uFF0C\u7528\u6237\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230\u9875\u9762\u6E32\u67D3\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u7B49\u5F85js\u52A0\u8F7D\u548C\u6267\u884C\u3002\u4F46\u6B64\u65F6\u9875\u9762\u8FD8\u4E0D\u80FD\u4EA4\u4E92\uFF0C\u9700\u8981\u6FC0\u6D3B\u5BA2\u6237\u9875\u9762\uFF0C\u5373 hydirating \u8FC7\u7A0B\u3002</li></ol></li></ol><h2 id="vue-ssr-\u7684\u6846\u67B6-nuxt-js" tabindex="-1">Vue SSR \u7684\u6846\u67B6 Nuxt.js <a class="header-anchor" href="#vue-ssr-\u7684\u6846\u67B6-nuxt-js" aria-hidden="true">#</a></h2><ul><li>\u5165\u95E8</li><li>\u5B9E\u8DF5</li></ul>',10),t=[a];function n(d,u,o,h,v,c){return s(),r("div",null,t)}var p=e(i,[["render",n]]);export{_ as __pageData,p as default};
