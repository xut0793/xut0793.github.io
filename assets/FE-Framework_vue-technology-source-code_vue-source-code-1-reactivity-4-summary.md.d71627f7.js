import{_ as e,c as r,o as a,a as c}from"./app.9dbb06c5.js";var t="/assets/vue-source-reacive.2684d93c.png";const m='{"title":"\u54CD\u5E94\u5F0F\u539F\u74064\uFF1A\u603B\u7ED3","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/vue-technology-source-code/vue-source-code-1-reactivity-4-summary.md"}',o={},i=c('<h1 id="\u54CD\u5E94\u5F0F\u539F\u74064\uFF1A\u603B\u7ED3" tabindex="-1">\u54CD\u5E94\u5F0F\u539F\u74064\uFF1A\u603B\u7ED3 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u74064\uFF1A\u603B\u7ED3" aria-hidden="true">#</a></h1><p>\u5173\u4E8E Vue \u54CD\u5E94\u5F0F\u6570\u636E\u603B\u7ED3\uFF1A \u4E00\u4E2A\u5C5E\u6027 key\uFF0C\u4E00\u4E2A proxy\uFF0C\u4E00\u4E2A observer\uFF0C \u4E8C\u4E2A dep\uFF0C \u4E09\u79CD watcher\u3002</p><ol><li>proxy\uFF1A\u5C5E\u6027\u4EE3\u7406</li><li>Observer\uFF1A\u53D8\u5316\u4FA6\u6D4B</li><li>Dep\uFF1A\u4F9D\u8D56\u6536\u96C6</li><li>Wactcher\uFF1A\u6D3E\u53D1\u66F4\u65B0</li></ol><p>\u7EC6\u8282\u70B9\uFF1A</p><ol><li>\u5BF9\u8C61 dep \u4E3A\u95ED\u5305\u5C5E\u6027\uFF0C\u6570\u7EC4 dep \u4E3A <code>value.__ob__.dep</code></li><li>\u4F9D\u8D56 watcher \u521B\u5EFA\u65F6\uFF0C\u5373\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6 <code>watcher.get</code></li><li>\u4F9D\u8D56\u6536\u96C6\u9700\u8981\u7ED5\u4E00\u5708\u7ECF\u8FC7 watcher \u81EA\u8EAB\uFF0C\u662F\u4E3A\u4E86\u5EFA\u7ACB watcher \u4E0E dep \u591A\u5BF9\u591A\u5173\u7CFB\u3002</li><li>\u4F9D\u8D56\u6536\u96C6\u5B8C\u6210\u540E\u9700\u8981\u6E05\u7406\u9648\u65E7\u7684\u4F9D\u8D56 <code>watcher.cleanupDeps</code></li><li>\u6D3E\u53D1\u66F4\u65B0\u6267\u884C <code>queueWatcher</code>\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5 run</li><li>\u4E09\u79CD\u4F9D\u8D56\u6267\u884C\u56DE\u8C03\u51FD\u6570\u4E0D\u540C</li></ol><p>\u6574\u4E2A data \u7684\u54CD\u5E94\u5F0F\u5904\u7406\u6D41\u7A0B\u56FE\uFF1A</p><p><img src="'+t+'" alt=""></p>',7),l=[i];function d(s,_,p,n,u,h){return a(),r("div",null,l)}var f=e(o,[["render",d]]);export{m as __pageData,f as default};
