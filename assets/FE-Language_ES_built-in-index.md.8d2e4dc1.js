import{_ as e,c as i,o as l,a}from"./app.f1e974b0.js";const f='{"title":"\u5185\u7F6E\u5BF9\u8C61\u5206\u7C7B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u8C61\u5206\u7C7B","slug":"\u5BF9\u8C61\u5206\u7C7B"},{"level":2,"title":"\u7406\u89E3\u6784\u9020\u51FD\u6570","slug":"\u7406\u89E3\u6784\u9020\u51FD\u6570"}],"relativePath":"FE-Language/ES/built-in-index.md"}',t={},o=a('<h1 id="\u5185\u7F6E\u5BF9\u8C61\u5206\u7C7B" tabindex="-1">\u5185\u7F6E\u5BF9\u8C61\u5206\u7C7B <a class="header-anchor" href="#\u5185\u7F6E\u5BF9\u8C61\u5206\u7C7B" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5BF9\u8C61\u5206\u7C7B">\u5BF9\u8C61\u5206\u7C7B</a></li><li><a href="#\u7406\u89E3\u6784\u9020\u51FD\u6570">\u7406\u89E3\u6784\u9020\u51FD\u6570</a></li></ul></div></p><p>\u5728\u57FA\u7840\u7684Object\u5BF9\u8C61\u7684\u57FA\u7840\u4E0A\uFF0C\u884D\u751F\u4E86\u5F88\u591A\u5B9E\u73B0\u7279\u5B9A\u529F\u80FD\u7684\u5BF9\u8C61\uFF0C\u5305\u542B\u8BED\u8A00\u89C4\u8303\u5B9A\u4E49\u7684\u5185\u7F6E\u5BF9\u8C61\u548C\u8BED\u8A00\u5BBF\u4E3B\u5B9A\u4E49\u7684\u5BF9\u8C61\u3002</p><h2 id="\u5BF9\u8C61\u5206\u7C7B" tabindex="-1">\u5BF9\u8C61\u5206\u7C7B <a class="header-anchor" href="#\u5BF9\u8C61\u5206\u7C7B" aria-hidden="true">#</a></h2><ul><li>\u5168\u5C40\u5BF9\u8C61 globalThis <ul><li>\u503C\u5C5E\u6027\uFF1ANaN Infinity undefined</li><li>\u51FD\u6570\u5C5E\u6027\uFF1AparseInt() parseFloat() isNaN() isFinite()</li><li>\u5904\u7406URI\u7684\u51FD\u6570\u5C5E\u6027\uFF1AdecodeURI() encodeURI() decodeURIComponent() encodeURIComponent()</li><li>\u7279\u6B8A\u7684\u5BF9\u8C61\u5C5E\u6027\uFF1AMath / JSON / Reflect / Intl</li><li>\u4F5C\u4E3A\u6784\u9020\u5668\u7684\u51FD\u6570\u5C5E\u6027\uFF1A <ul><li>\u521B\u5EFA\u57FA\u672C\u7C7B\u578B\u5305\u88C5\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\uFF1ABoolean() / Number() / String()</li><li>\u521B\u5EFA\u5F15\u7528\u7C7B\u578B\u5B9E\u4F8B\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\uFF1AObject() / Function() / Array() / Date() / RegExp() / Error()</li><li>ES next\u65B0\u589E\u7684\u6784\u9020\u51FD\u6570\uFF1ASet() / WeakSet() / Map() / WeakMap() / Promise() / Proxy() / ArrayBuffer() / TypeArray / DataView()</li></ul></li></ul></li><li>\u5BBF\u4E3B\u5BF9\u8C61 <ul><li>Window\u5168\u5C40\u5BF9\u8C61</li><li>DOM\u7C7B\u578B\u7684\u5BF9\u8C61</li><li>BOM\u7C7B\u578B\u7684\u5BF9\u8C61\u7B49\u3002</li></ul></li></ul><h2 id="\u7406\u89E3\u6784\u9020\u51FD\u6570" tabindex="-1">\u7406\u89E3\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#\u7406\u89E3\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u7406\u89E3\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u7684\u56DB\u4E2A\u7EF4\u5EA6</p><ol><li>\u4F5C\u4E3A\u7EAF\u51FD\u6570\uFF1A\u6709\u4E9B\u53EF\u4EE5\u6709\u7279\u6B8A\u4F5C\u7528\uFF0C\u5982 <code>Object() / Number()</code>\uFF1B\u6709\u4E9B\u4E0D\u80FD\u8FD9\u6837\u8C03\u7528\uFF0C\u5982<code>Date() / Math()</code></li><li>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u4F7F\u7528new\u8C03\u7528\uFF1A <code>new Object()</code>\uFF0C\u6709\u4E9B\u4E0D\u80FD\uFF0C\u5982<code>new Symbol() / new Math()</code></li><li>\u4F5C\u4E3A\u51FD\u6570\u5BF9\u8C61\uFF0C\u6709\u81EA\u5DF1\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A <code>Object / Math / Json</code></li><li>\u539F\u578B\u5BF9\u8C61\uFF0C\u5B9E\u4F8B\u53EF\u8C03\u7528\u7684\u65B9\u6CD5\u57FA\u672C\u90FD\u5B9A\u4E49\u5728\u539F\u578B\u5BF9\u8C61\u4E0A\uFF1A <code>Object.prototype / Date.prototype</code></li></ol><p>\u540E\u9762\u8BB2\u89E3\u5185\u7F6E\u5BF9\u8C61\u7684\u5185\u5BB9\u4E5F\u57FA\u4E8E\u4E0A\u8FF0\u56DB\u4E2A\u7EF4\u5EA6\u89E3\u8BFB\u3002</p>',9),n=[o];function r(d,c,s,h,p,u){return l(),i("div",null,n)}var b=e(t,[["render",r]]);export{f as __pageData,b as default};