import{_ as t,c as d,o as e,a as o}from"./app.9dbb06c5.js";const _='{"title":"Node \u8282\u70B9\u57FA\u7C7B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":2,"title":"NodeList \u7C7B\u6570\u7EC4","slug":"nodelist-\u7C7B\u6570\u7EC4"}],"relativePath":"Browser/2-DOM/Node.md"}',r={},n=o(`<h1 id="node-\u8282\u70B9\u57FA\u7C7B" tabindex="-1">Node \u8282\u70B9\u57FA\u7C7B <a class="header-anchor" href="#node-\u8282\u70B9\u57FA\u7C7B" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u5C5E\u6027\u548C\u65B9\u6CD5">\u5C5E\u6027\u548C\u65B9\u6CD5</a></li><li><a href="#nodelist-\u7C7B\u6570\u7EC4">NodeList \u7C7B\u6570\u7EC4</a></li></ul></div></p><p>DOM 1\u7EA7\u5728DOM Core\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2ANode\u63A5\u53E3\uFF08\u4E5F\u5C31\u662FNode\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6216\u8005\u8BF4Node\u7C7B\uFF09\uFF0CDOM\u6811\u4E2D\u7684\u6240\u6709\u8282\u70B9\u7C7B\u578B\u90FD\u4ECE\u8FD9\u4E2A\u63A5\u53E3\u7EE7\u627F\u4E00\u7EC4\u901A\u7528\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><blockquote><p>\u5728Javscript\u8BED\u8A00\u5B9E\u73B0\u7684DOM\u63A5\u53E3\u4E2D\uFF0CNode\u5BF9\u8C61\u662F\u4ECEOjbect\u63A5\u53E3\uFF08Object\u662FJS\u4E2D\u7684\u57FA\u7C7B\uFF09\u7EE7\u627F\u6765\u7684\uFF0C\u6240\u6709\u4E5F\u62E5\u6709JS\u4E2D\u5BF9\u8C61\u7684\u57FA\u672C\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">typeof</span> Node  <span class="token comment">// &#39;function&#39;</span>
Node <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">isProtoTypeOf</span><span class="token punctuation">(</span>Node<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1">\u5C5E\u6027\u548C\u65B9\u6CD5 <a class="header-anchor" href="#\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>DOM\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u7F16\u7A0B\u8BED\u8A00\u64CD\u4F5C\u6587\u6863\u63D0\u4F9B\u7F16\u7A0B\u63A5\u53E3\u3002\u800C\u5728\u811A\u672C\u8BED\u8A00\u4E2D\u5BF9\u6587\u6863\u7684\u64CD\u4F5C\u65E0\u975E\u5C31\u662F\u589E\u5220\u6539\u67E5\uFF08\u521B\u5EFA\u8282\u70B9\u3001\u6DFB\u52A0\u8282\u70B9\u3001\u5220\u9664\u8282\u70B9\u3001\u66FF\u6362\u6216\u79FB\u52A8\u8282\u70B9\u3001\u9009\u4E2D\u8282\u70B9\u7B49\uFF09\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u6765\u770B\u4E0BNode\u63A5\u53E3\u63D0\u4F9B\u7684\u901A\u7528\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u6302\u8F7D\u5728\u539F\u578B<code>Node.prototype</code>\u4E0A\u3002</p><p>\u4ECE\u6D4F\u89C8\u5668console\u9762\u677F\u4E0A\u8F93\u5165<code>Node.prototype</code>\u56DE\u8F66\u5373\u53EF\u770B\u5230</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u8282\u70B9\u672C\u8EAB\u4FE1\u606F\u76F8\u5173</td><td></td></tr><tr><td>nodeType</td><td>\u53EA\u8BFB\uFF0C\u8FD4\u56DE\u6570\u5B57\u4EE3\u8868\u8282\u70B9\u7C7B\u578B\uFF0C\u5982\u5143\u7D20\u8282\u70B9 1\uFF0C\u6587\u672C\u8282\u70B9 3</td></tr><tr><td>nodeName</td><td>\u53EA\u8BFB\uFF0C\u4F9D\u8282\u70B9\u7C7B\u578B\u8FD4\u56DE\uFF0C\u5982\u679C\u662F\u5143\u7D20\u8282\u70B9\u5219\u59CB\u7EC8\u8FD4\u56DE\u6807\u7B7E\u540D\uFF08\u5927\u5199\uFF09\uFF0C\u6587\u672C\u8282\u70B9\u4E3A&#39;#text&#39;\uFF0C\u6587\u6863\u8282\u70B9\u4E3A&#39;#document&#39;</td></tr><tr><td>nodeValue</td><td>\u53EF\u8BFB\u5199\uFF0C\u5982\u679C\u662F\u5143\u7D20\u8282\u70B9\u5219\u4E3Anull\uFF0C\u5982\u679C\u6587\u672C\u8282\u70B9\u5219\u8FD4\u56DE\u8282\u70B9\u5185\u5BB9</td></tr><tr><td>textContent</td><td>\u53EF\u8BFB\u5199\uFF0C\u8FD4\u56DE\u6216\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u5185\u6240\u6709\u5B50\u7ED3\u70B9\u53CA\u5176\u540E\u4EE3\u7684\u6587\u672C\u5185\u5BB9</td></tr><tr><td>\u8282\u70B9\u5173\u7CFB\u76F8\u5173</td><td></td></tr><tr><td>ownerDocument</td><td>\u8FD4\u56DE\u8FD9\u4E2A\u8282\u70B9\u7684\u6839\u8282\u70B9\uFF0C\u5373 Document\u5BF9\u8C61</td></tr><tr><td>parentNode</td><td>\u8FD4\u56DE\u4E00\u4E2A\u5F53\u524D\u7ED3\u70B9\u7684\u7236\u8282\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u6216\u5F53\u524D\u7ED3\u70B9\u5DF2\u7ECF\u662F\u6839\u8282\u70B9\u5219\u4E3Anull</td></tr><tr><td>parentElement</td><td>\u8FD4\u56DE\u4E00\u4E2A\u5F53\u524D\u8282\u70B9\u7684\u7236\u5143\u7D20\u8282\u70B9 \u3002 \u5982\u679C\u5F53\u524D\u8282\u70B9\u6CA1\u6709\u7236\u8282\u70B9\u6216\u8005\u8BF4\u7236\u8282\u70B9\u4E0D\u662F\u4E00\u4E2A\u5143\u7D20(Element), \u8FD9\u4E2A\u5C5E\u6027\u8FD4\u56DEnull</td></tr><tr><td>childNodes</td><td>\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E86\u6240\u6709\u5B50\u8282\u70B9\u7684\u5B9E\u65F6\u7684NodeList\u7C7B\u6570\u7EC4\u5BF9\u8C61</td></tr><tr><td>firstChild</td><td>\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5982\u679C\u8BE5\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u5219\u8FD4\u56DEnull\u3002</td></tr><tr><td>lastChild</td><td>\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u5982\u679C\u8BE5\u8282\u70B9\u6CA1\u6709\u5B50\u8282\u70B9\u5219\u8FD4\u56DEnull\u3002</td></tr><tr><td>previousSibling</td><td>\u8FD4\u56DE\u4E00\u4E2A\u5F53\u524D\u8282\u70B9\u540C\u8F88\u7684\u524D\u4E00\u4E2A\u7ED3\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u8FD4\u56DEnull</td></tr><tr><td>nextSibling</td><td>\u8FD4\u56DE\u4E0E\u8BE5\u8282\u70B9\u540C\u7EA7\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u6CA1\u6709\u8FD4\u56DEnull\u3002</td></tr></tbody></table><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u67E5\u8BE2\u8282\u70B9\u76F8\u5173\u65B9\u6CD5</td><td></td></tr><tr><td>getRootNode()</td><td>\u8FD4\u56DE\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u6839\u7ED3\u70B9</td></tr><tr><td>hasChildNodes()</td><td>\u5E03\u5C14\u503C\uFF0C\u6765\u8868\u793A\u8BE5\u5143\u7D20\u662F\u5426\u5305\u542B\u6709\u5B50\u8282\u70B9\u3002</td></tr><tr><td>isEqualNode()</td><td>\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u4E24\u4E2A\u8282\u70B9\u662F\u5426\u4E25\u683C\u76F8\u7B49\uFF08\u6709\u591A\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u624D\u5B8C\u5168\u76F8\u7B49\uFF0C\u89C1\u4E0B\u9762)</td></tr><tr><td>contains()</td><td>\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u4F20\u5165\u7684\u8282\u70B9\u662F\u5426\u4E3A\u8BE5\u8282\u70B9\u7684\u540E\u4EE3\u8282\u70B9</td></tr><tr><td>compareDocumentPosition()</td><td>\u6BD4\u8F83\u5F53\u524D\u8282\u70B9\u4E0E\u6587\u6863\u4E2D\u7684\u53E6\u4E00\u8282\u70B9\u7684\u4F4D\u7F6E\u3002\u5177\u4F53\u89C1\u6700\u4E0A\u9762\u8282\u70B9\u7C7B\u578B\u7684\u6253\u5370\u503C</td></tr><tr><td>\u64CD\u4F5C\u8282\u70B9\u76F8\u5173\u65B9\u6CD5</td><td></td></tr><tr><td>cloneNode()</td><td>\u53C2\u6570\u4E3A\u5E03\u5C14\u503C\uFF0Ctrue\u65F6\u9009\u62E9\u514B\u9686\u8FD9\u4E2A\u8282\u70B9\u4E0B\u7684\u6240\u6709\u5185\u5BB9\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cfalse\uFF0C\u5F53\u524D\u8282\u70B9\u4E0B\u88AB\u514B\u9686\u3002</td></tr><tr><td>appendChild()</td><td>\u5C06\u4F5C\u4E3A\u53C2\u6570\u7684\u8282\u70B9\u4F5C\u4E3A\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u6DFB\u52A0\u5230\u5F53\u524D\u8282\u70B9\u3002</td></tr><tr><td>insertBefore()</td><td>\u4F20\u5165\u4E24\u4E2A\u8282\u70B9\u4F5C\u4E3A\u4E24\u4E2A\u53C2\u6570\uFF0C\u5C06\u7B2C\u4E00\u4E2A\u53C2\u6570\u8282\u70B9\u63D2\u5165\u5230\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8282\u70B9\u4E4B\u524D</td></tr><tr><td>replaceChild()</td><td>\u4F7F\u7528\u4F20\u5165\u7684\u8282\u70B9\u66FF\u6362\u5F53\u524D\u8282\u70B9</td></tr><tr><td>removeChild()</td><td>\u5220\u9664\u5F53\u524D\u8282\u70B9</td></tr><tr><td>normalize()</td><td>\u5408\u5E76\u8BE5\u5143\u7D20\u4E0B\u7684\u6240\u6709\u6587\u672C\u8282\u70B9\u4E3A\u4E00\u4E2A\u6587\u672C\u8282\u70B9</td></tr></tbody></table><h2 id="nodelist-\u7C7B\u6570\u7EC4" tabindex="-1">NodeList \u7C7B\u6570\u7EC4 <a class="header-anchor" href="#nodelist-\u7C7B\u6570\u7EC4" aria-hidden="true">#</a></h2><p>NodeList\u662F\u4E00\u4E2A\u8282\u70B9\u96C6\u5408\u7684\u7C7B\u6570\u7EC4\uFF0C\u6709\u70B9\u7C7B\u4F3C\u51FD\u6570\u4E2D\u7684arguments\u5BF9\u8C61\u3002\u6709\u957F\u5EA6\u503Clength\u5C5E\u6027\u3002</p><p>\u5BF9\u4E8ENodeList\u6700\u91CD\u8981\u662F\u7684\u8981\u7406\u89E3\u4E00\u70B9\uFF1A\u5F53\u67E5\u8BE2\u5F97\u5230\u4E00\u4E2ANodeList\u96C6\u5408\uFF0C\u5B83\u91CC\u7684\u8282\u70B9\u5BF9\u8C61\u90FD\u662F\u52A8\u6001\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u5F53\u6587\u6863\u7ED3\u6784\u6709\u53D8\u5316\uFF0C\u5DF2\u7ECF\u83B7\u53D6\u5230NodeList\u96C6\u5408\u5185\u7684\u8282\u70B9\u5BF9\u8C61\u4E5F\u662F\u4F1A\u66F4\u65B0\u7684\u3002\u56E0\u6B64\u5B83\u59CB\u7EC8\u90FD\u4F1A\u4FDD\u5B58\u7740\u6700\u65B0\u7684\u3001\u6700\u51C6\u786E\u7684\u8282\u70B9\u4FE1\u606F\u3002</p><p>\u5728JS\u4E2D\u5F15\u7528NodeList\u5BF9\u8C61\u90FD\u4F1A\u5B9E\u65F6\u8FDB\u884C\u4E00\u6B21\u6587\u6863\u67E5\u8BE2\uFF0C\u6240\u4EE5\u5728\u5B9E\u9645\u4E2D\u4F1A\u8003\u8651\u5230\u8FD9\u6BB5\u4EE3\u7801\u8FD0\u884C\u6027\u80FD\u95EE\u9898\u548C\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\u7684\u95EE\u9898\u3002\u6B63\u5E38\u64CD\u4F5C\u5E94\u8BE5\u5C3D\u91CF\u51CF\u5C11\u8BBF\u95EENodeList\u7684\u6B21\u6570\uFF0C\u6216\u8005\u83B7\u53D6\u7684\u96C6\u5408\u5BF9\u8C61\u7528\u53D8\u91CF\u7F13\u5B58\u8D77\u6765\u3002</p>`,15),a=[n];function s(l,i,c,p,h,u){return e(),d("div",null,a)}var m=t(r,[["render",s]]);export{_ as __pageData,m as default};