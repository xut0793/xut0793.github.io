import{_ as t,c as n,o as a,a as s}from"./app.9dbb06c5.js";var e="/assets/node.d35574a0.png";const M='{"title":"DOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"DOM \u7B80\u4ECB","slug":"dom-\u7B80\u4ECB"},{"level":2,"title":"DOM \u53D1\u5C55","slug":"dom-\u53D1\u5C55"},{"level":3,"title":"DOM 1\u7EA7","slug":"dom-1\u7EA7"},{"level":3,"title":"DOM 2\u7EA7","slug":"dom-2\u7EA7"},{"level":3,"title":"DOM 3\u7EA7","slug":"dom-3\u7EA7"},{"level":2,"title":"DOM Core \u6838\u5FC3","slug":"dom-core-\u6838\u5FC3"},{"level":3,"title":"\u8282\u70B9\u7C7B\u578B","slug":"\u8282\u70B9\u7C7B\u578B"},{"level":2,"title":"DOM HTML","slug":"dom-html"},{"level":3,"title":"\u8282\u70B9API\u603B\u7ED3","slug":"\u8282\u70B9api\u603B\u7ED3"},{"level":2,"title":"DOM Style (CSSOM)","slug":"dom-style-cssom"},{"level":2,"title":"DOM Event","slug":"dom-event"}],"relativePath":"Browser/2-DOM/index.md"}',o={},p=s(`<h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#dom-\u7B80\u4ECB">DOM \u7B80\u4ECB</a></li><li><a href="#dom-\u53D1\u5C55">DOM \u53D1\u5C55</a><ul><li><a href="#dom-1\u7EA7">DOM 1\u7EA7</a></li><li><a href="#dom-2\u7EA7">DOM 2\u7EA7</a></li><li><a href="#dom-3\u7EA7">DOM 3\u7EA7</a></li></ul></li><li><a href="#dom-core-\u6838\u5FC3">DOM Core \u6838\u5FC3</a><ul><li><a href="#\u8282\u70B9\u7C7B\u578B">\u8282\u70B9\u7C7B\u578B</a></li></ul></li><li><a href="#dom-html">DOM HTML</a><ul><li><a href="#\u8282\u70B9api\u603B\u7ED3">\u8282\u70B9API\u603B\u7ED3</a></li></ul></li><li><a href="#dom-style-cssom">DOM Style (CSSOM)</a></li><li><a href="#dom-event">DOM Event</a></li></ul></div></p><h2 id="dom-\u7B80\u4ECB" tabindex="-1">DOM \u7B80\u4ECB <a class="header-anchor" href="#dom-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>DOM\uFF1ADocument Object Model\uFF08\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF09\u3002</p><p>\u5C06\u7528\u4E8E\u9875\u9762\u663E\u793A\u7684\u6807\u8BB0\u8BED\u8A00\uFF08XML/HTML/SVG\u7B49\uFF09\u8FDB\u884C\u5EFA\u6A21\uFF0C\u7528\u4E00\u9897\u903B\u8F91\u6811\u7684\u5BF9\u8C61\u5F62\u5F0F\u6765\u8868\u793A\u6587\u6863\uFF0C\u6587\u6863\u7684\u6BCF\u4E00\u4E2A\u6807\u8BB0\u90FD\u662F\u4E00\u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E00\u4E2A\u8282\u70B9\u90FD\u662F\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\u3002\u901A\u8FC7\u5EFA\u6A21\u7684\u5BF9\u8C61\u6765\u63D0\u4F9B\u64CD\u4F5C\u9875\u9762\u7684API\u63A5\u53E3\u7ED9\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8BA9\u5F00\u53D1\u8005\u901A\u8FC7DOM\u63D0\u4F9B\u7684API\u83B7\u5F97\u63A7\u5236\u9875\u9762\u5185\u5BB9\u548C\u7ED3\u6784\u7684\u4E3B\u52A8\u6743\u3002</p><p>DOM\u662F\u4E00\u79CD\u4E0E\u5E73\u53F0\u548C\u7F16\u7A0B\u8BED\u8A00\u65E0\u5173\u7684\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3(API)\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u88ABjavascript\u8BED\u8A00\u8C03\u7528\uFF0C\u8FD8\u53EF\u4EE5\u88AB\u5176\u5B83\u8BED\u8A00\uFF08\u5982Python\u7B49\uFF09\u8C03\u7528\u3002</p><p>DOM Core \u6838\u5FC3\u5B9A\u4E49\u4E86\u57FA\u7840\u4E86Node\u5BF9\u8C61\u53CA\u76F8\u5173\u8282\u70B9\u5BF9\u8C61\uFF08\u5982Document/Element\u7B49)\uFF0C\u7136\u540E\u4E0D\u540C\u7684\u6587\u6863\u7C7B\u578B\uFF08\u5982XML/HTML/SVG\uFF09\u57FA\u4E8ENode\u5BF9\u8C61\u53CA\u5B50\u5BF9\u8C61\u8FDB\u884C\u6269\u5C55\uFF0C\u5B9E\u73B0\u4E86\u9488\u5BF9\u81EA\u8EAB\u6587\u6863\u7279\u5F81\u7684\u5BF9\u8C61\uFF0C\u5982HTML\u6587\u6863\u5B9E\u73B0\u4E86HTMLDocument \u6216 HTMLElement\u7B49\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u7EE7\u627F\u4E86Node\u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E5F\u62E5\u6709\u81EA\u8EAB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u540C\u6837\u8FD8\u6709\u9488\u5BF9SVG\uFF08\u53EF\u4F38\u7F29\u77E2\u91CF\u6807\u8BB0\u8BED\u8A00\uFF09 / MathML(\u6570\u5B66\u6807\u8BC6\u8BED\u8A00) / SML(\u540C\u6B65\u591A\u5A92\u4F53\u96C6\u6210\u8BED\u8A00) / XUL \uFF08XML\u7528\u6237\u754C\u9762\u8BED\u8A00\uFF09\u7B49\u6807\u8BB0\u8BED\u8A00\u7684DOM\u5B9E\u73B0\u3002</p><h2 id="dom-\u53D1\u5C55" tabindex="-1">DOM \u53D1\u5C55 <a class="header-anchor" href="#dom-\u53D1\u5C55" aria-hidden="true">#</a></h2><p>\u5728\u65E9\u671F\uFF0C\u5FAE\u8F6F\u7684Internet Explorer 4\u548C\u7F51\u666F\u516C\u53F8\u7684Netscape Navigator 4 \u6D4F\u89C8\u5668\u4E0A\u5206\u522B\u5B9E\u73B0\u4E86DHMTL\uFF08Dynamic HTML \u52A8\u6001HTML)\u6280\u672F\uFF0C\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u7F51\u9875\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u811A\u672C\u8BED\u8A00\u4FEE\u6539\u9875\u9762\u5916\u89C2\u548C\u5185\u5BB9\u3002\u4F46\u540C\u4E00\u79CD\u6280\u672F\u5728\u4E24\u5BB6\u516C\u53F8\u7684\u5B9E\u73B0\u65B9\u5F0F\u76F8\u5DEE\u5F88\u5927\uFF0C\u540C\u6837\u8FD9\u53D8\u6210\u4E86\u65B0\u4E00\u4E2A\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u7684\u95EE\u9898\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u65E0\u6CD5\u901A\u8FC7\u4E00\u4E2AHTML\u9875\u9762\u80FD\u8FD0\u884C\u5728\u5F53\u65F6\u4E24\u4E2A\u4E3B\u6D41\u7684\u6D4F\u89C8\u5668\u4E2D\u3002\u8D1F\u8D23web\u6807\u51C6\u5236\u5B9A\u7684\u7EC4\u7EC7W3C\u5F00\u59CB\u7740\u624B\u5236\u5B9A\u7EDF\u4E00\u6807\u51C6\u3002</p><blockquote><p>DOM\u7EDF\u4E00\u6807\u51C6\u4E4B\u524D\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u5E38\u79F0\u4E3ADOM 0\u7EA7\u6807\u51C6\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u5B58\u5728\u7684\uFF0C\u53EA\u662F\u4F9D\u636E\u540E\u9762DOM\u7EA7\u522B\u5212\u5206\u7684\u65F6\u95F4\u70B9\u4F5C\u4E3A\u53C2\u7167\u4E00\u79CD\u666E\u904D\u8BF4\u6CD5\u800C\u5DF2\uFF0C\u5E76\u4E0D\u662F\u771F\u7684\u6807\u51C6\u3002</p></blockquote><h3 id="dom-1\u7EA7" tabindex="-1">DOM 1\u7EA7 <a class="header-anchor" href="#dom-1\u7EA7" aria-hidden="true">#</a></h3><p>1998\u5E7410\u6708\uFF0CW3C\u7EC4\u7EC7\u53D1\u5E03\u4E86DOM\u7684\u9996\u4E2A\u6807\u51C6\u89C4\u8303\u3002DOM 1\u7EA7\u7531\u4E24\u4E2A\u6A21\u5757\u7EC4\u6210\uFF1A</p><ul><li>DOM Core \u548C DOM HTML\u3002\u5176\u4E2DDOM Core\u5B9A\u4E49\u4E86\u6620\u5C04\u6587\u6863\u7684\u57FA\u7840\u7ED3\u6784\uFF0C\u5176\u4E2D\u6700\u4E3B\u8981\u7684\u662F\u6839\u8282\u70B9Node\u5BF9\u8C61\u548C\u6587\u6863\u5404\u79CD\u8282\u70B9\u7C7B\u578B\u5BF9\u8C61\u3002</li><li>DOM HTML\u5219\u5728DOM Core\u57FA\u7840\u4E0A\u52A0\u4EE5\u6269\u5C55\uFF0C\u6DFB\u52A0\u4E86\u9488\u5BF9HTML\u7684HTMLDocument \u3001HTMLElement\u7B49\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u5404\u7C7B\u5143\u7D20\u5BF9\u8C61\u3002</li></ul><h3 id="dom-2\u7EA7" tabindex="-1">DOM 2\u7EA7 <a class="header-anchor" href="#dom-2\u7EA7" aria-hidden="true">#</a></h3><p>DOM 2\u7EA7\u589E\u52A0\u4E86\u65B0\u7684\u6A21\u5757\uFF0C\u5176\u4E2D\u6700\u4E3B\u8981\u7684\u9488\u5BF9\u5143\u7D20\u6837\u5F0F\uFF08<strong>DOM Style</strong>\uFF09\u7684\u63A5\u53E3CSSStyleSheet\uFF0C\u4EE5\u53CA\u5B9A\u4E49\u4E86\u5143\u7D20\u4E8B\u4EF6\uFF08<strong>DOM Event</strong>\uFF09\u53CA\u76F8\u5173\u63A5\u53E3\uFF0C\u5982<code>addEventLister()</code>\u65B9\u6CD5\u3002</p><h3 id="dom-3\u7EA7" tabindex="-1">DOM 3\u7EA7 <a class="header-anchor" href="#dom-3\u7EA7" aria-hidden="true">#</a></h3><p>DOM 3\u7EA7\u7EE7\u7EED\u65B0\u589E\u4E86\u52A0\u8F7D\u548C\u4FDD\u5B58\u6587\u6863\u7684\u65B9\u6CD5\u7684 DOM Load and Save\u6A21\u5757\uFF0C\u4EE5\u53CADOM\u9A8C\u8BC1\uFF08DOM Validation\uFF09\u6A21\u5757\u3002\u5BF9DOM Core\u5BF9\u8C61\u7684\u6269\u5C55\u4E86\u4E00\u4E9B\u9488\u5BF9XML\u65B0\u7279\u6027\u7684\u6269\u5C55\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u4E3B\u8981\u5173\u6CE8\u548C\u5B66\u4E60\u7684\u662FDOM Core\u6838\u5FC3\u4E2D\u7684Node\u5BF9\u8C61\u3001\u9488\u5BF9HTML\u6587\u6863\u7684HTMLElement\u5BF9\u8C61\u3001\u9488\u5BF9HTML\u6587\u6863\u6837\u5F0F\u7684DOM Style\u6A21\u5757\u548C\u9488\u5BF9\u5143\u7D20\u4E8B\u4EF6\u7684DOM Event\u6A21\u5757\u3002\u638C\u63E1\u5176\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u6269\u5C55\u7684\u76F8\u5173\u5B50\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h2 id="dom-core-\u6838\u5FC3" tabindex="-1">DOM Core \u6838\u5FC3 <a class="header-anchor" href="#dom-core-\u6838\u5FC3" aria-hidden="true">#</a></h2><p>DOM\u5EFA\u6A21\u662F\u5C06HTML\u6216XML\u63CF\u7ED8\u7684\u9875\u9762\u7ED8\u5236\u6210\u4E00\u4E2A\u7531\u591A\u5C42\u8282\u70B9\u6784\u6210\u7684\u6811\u72B6\u7ED3\u6784\uFF0C\u4F9D\u636E\u6587\u6863\u4E2D\u4E0D\u540C\u7C7B\u578B\u7684\u5185\u5BB9\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u8282\u70B9\u7C7B\u578B\u3002</p><p>\u8FD9\u91CC\u4F9D\u636EHTML\u7C7B\u578B\u6587\u6863\u4E3A\u4F8B\uFF0C\u4EE5\u4E0B\u9762\u8FD9\u6BB5HTML\u4EE3\u7801\u751F\u6210DOM\u6811\u72B6\u7ED3\u6784\uFF1A</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test_class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8FD9\u662F\u4E00\u6BB5\u6CE8\u91CA --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test_id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F7F\u7528<a href="https://software.hixie.ch/utilities/js/live-dom-viewer/" target="_blank" rel="noopener noreferrer">Live DOM Viewer</a>\u5C55\u793A\u7684DOM\u6811\u7ED3\u6784\u5982\u4E0B\uFF1A</p><p><img src="`+e+`" alt=""></p><blockquote><p>HTML\u6587\u6863\u4E2D\u6362\u884C\u7B26\u4E0E\u7A7A\u767D\u7B26\u4E5F\u662F\u6587\u672C\u5B57\u7B26\uFF0C\u4E5F\u4F1A\u751F\u6210\u8282\u70B9\u6811\u8282\u70B9\u3002</p></blockquote><h3 id="\u8282\u70B9\u7C7B\u578B" tabindex="-1">\u8282\u70B9\u7C7B\u578B <a class="header-anchor" href="#\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a></h3><p>DOM Core\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2ANode\u63A5\u53E3\uFF08\u4E5F\u5C31\u662FNode\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6216\u8005\u8BF4Node\u7C7B\uFF09\uFF0CDOM\u6811\u4E2D\u7684\u6240\u6709\u8282\u70B9\u7C7B\u578B\u90FD\u4ECE\u8FD9\u4E2A\u63A5\u53E3\u7EE7\u627F\u4E00\u7EC4\u901A\u7528\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u6240\u6709\u7684\u8282\u70B9\u7C7B\u578B\u7F16\u7801\u3002</p><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39; = &#39;</span><span class="token operator">+</span>Node<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token constant">ELEMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">1</span>
<span class="token constant">ATTRIBUTE_NODE</span>  <span class="token operator">=</span> <span class="token number">2</span>
<span class="token constant">TEXT_NODE</span>  <span class="token operator">=</span> <span class="token number">3</span>
<span class="token constant">CDATA_SECTION_NODE</span>  <span class="token operator">=</span> <span class="token number">4</span>
<span class="token constant">ENTITY_REFERENCE_NODE</span>  <span class="token operator">=</span> <span class="token number">5</span>
<span class="token constant">ENTITY_NODE</span>  <span class="token operator">=</span> <span class="token number">6</span>
<span class="token constant">PROCESSING_INSTRUCTION_NODE</span>  <span class="token operator">=</span> <span class="token number">7</span>
<span class="token constant">COMMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">8</span>
<span class="token constant">DOCUMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">9</span>
<span class="token constant">DOCUMENT_TYPE_NODE</span>  <span class="token operator">=</span> <span class="token number">10</span>
<span class="token constant">DOCUMENT_FRAGMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">11</span>
<span class="token constant">NOTATION_NODE</span>  <span class="token operator">=</span> <span class="token number">12</span>
<span class="token comment">// Node.compareDocumentPosition(otherNode)\u8FD4\u56DE\u8282\u70B9\u4F4D\u7F6E\u7684\u5E38\u91CF</span>
<span class="token constant">DOCUMENT_POSITION_DISCONNECTED</span>  <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u4E0D\u5728\u540C\u4E00\u6587\u6863\u4E2D</span>
<span class="token constant">DOCUMENT_POSITION_PRECEDING</span>  <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// otherNode\u5728node\u4E4B\u524D</span>
<span class="token constant">DOCUMENT_POSITION_FOLLOWING</span>  <span class="token operator">=</span> <span class="token number">4</span> <span class="token comment">// otherNode\u5728node\u4E4B\u540E</span>
<span class="token constant">DOCUMENT_POSITION_CONTAINS</span>  <span class="token operator">=</span> <span class="token number">8</span> <span class="token comment">// otherNode\u5305\u542Bnode</span>
<span class="token constant">DOCUMENT_POSITION_CONTAINED_BY</span>  <span class="token operator">=</span> <span class="token number">16</span> <span class="token comment">// otherNode\u88ABnode\u5305\u542B</span>
<span class="token constant">DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC</span>  <span class="token operator">=</span> <span class="token number">32</span> <span class="token comment">// \u5F85\u5B9A</span>
</code></pre></div><p>\u5BF9\u5E94HTML\u6587\u6863\u8282\u70B9\u7C7B\u578B\uFF0C\u6211\u4EEC\u9700\u8981\u5173\u6CE8\u7684\u662F\uFF1A</p><div class="language-js"><pre><code><span class="token constant">ELEMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">// \u5143\u7D20\u8282\u70B9</span>
<span class="token constant">ATTRIBUTE_NODE</span>  <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment">// \u7279\u6027\u8282\u70B9</span>
<span class="token constant">TEXT_NODE</span>  <span class="token operator">=</span> <span class="token number">3</span>      <span class="token comment">//  \u6587\u672C\u8282\u70B9</span>
<span class="token constant">COMMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">8</span>   <span class="token comment">// \u6CE8\u91CA\u8282\u70B9</span>
<span class="token constant">DOCUMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">9</span>  <span class="token comment">// \u6587\u6863\u8282\u70B9</span>
</code></pre></div><p>\u5176\u4E2D\u6211\u4EEC\u6700\u9891\u7E41\u63A5\u89E6\u7684\u8282\u70B9\u7C7B\u578B\u5C31\u4E09\u7C7B\uFF1A</p><div class="language-js"><pre><code><span class="token constant">ELEMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">// \u5143\u7D20\u8282\u70B9</span>
<span class="token constant">TEXT_NODE</span>  <span class="token operator">=</span> <span class="token number">3</span>      <span class="token comment">//  \u6587\u672C\u8282\u70B9</span>
<span class="token constant">DOCUMENT_NODE</span>  <span class="token operator">=</span> <span class="token number">9</span>  <span class="token comment">// \u6587\u6863\u8282\u70B9</span>
</code></pre></div><p>\u8FD9\u4E09\u7C7B\u8282\u70B9\u7C7B\u578B\u5BF9\u5E94\u7684\u63A5\u53E3\u5206\u522B\u662F</p><ul><li>Element</li><li>Text</li><li>Document</li></ul><h2 id="dom-html" tabindex="-1">DOM HTML <a class="header-anchor" href="#dom-html" aria-hidden="true">#</a></h2><p>\u5728HTML\u6587\u6863\u5F62\u6210DOM\u6811\u4E2D\uFF0C\u4E0A\u8FF0\u4E09\u7C7B\u63A5\u53E3\u5728\u6D4F\u89C8\u5668\u7684JS\u4E2D\u7EE7\u627F\u5173\u7CFB\u5982\u4E0B\uFF08&lt;-\u8868\u793A\u4ECE\u5DE6\u4FA7\u7EE7\u627F\uFF09</p><ul><li>Object &lt;- Node &lt;- Document &lt;- HTMLDocument</li><li>Object &lt;- Node &lt;- Element &lt;- HTMLElement</li><li>Object &lt;- Node &lt;- Text</li></ul><p><code>Document</code>\u63A5\u53E3\u7528\u6765\u63CF\u8FF0\u4E86\u4EFB\u4F55\u7C7B\u578B\u7684\u6587\u6863\u7684\u901A\u7528\u5C5E\u6027\u4E0E\u65B9\u6CD5\u3002\u6839\u636E\u4E0D\u540C\u7684\u6587\u6863\u7C7B\u578B\uFF08\u4F8B\u5982HTML\u3001XML\u3001SVG\uFF0C...\uFF09\uFF0C\u8FD8\u80FD\u6D3E\u751F\u51FA\u5BF9\u5E94\u7C7B\u578B\u7684\u6587\u6863\u63A5\u53E3\uFF0C\u6BD4\u5982 HTML \u6587\u6863\uFF0C\u6D3E\u751F\u4E86 <code>HTMLDocument</code> \u63A5\u53E3\uFF0C\u9488\u5BF9XML \u548C SVG \u6587\u6863\u5219\u5B9E\u73B0\u4E86 <code>XMLDocument</code> \u63A5\u53E3\u3002</p><p><code>HTMLDocument</code>\u7C7B\u662F<code>Document</code>\u7C7B\u7684\u6D3E\u751F\u7C7B\uFF0C\u7EE7\u627F\u4E86Document\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD8\u589E\u52A0\u4E86HTML\u7279\u6709\u5C5E\u6027\u65B9\u6CD5\u548C\uFF0C\u5982cookie\u5C5E\u6027\u548C\u6587\u6863\u6253\u5F00<code>open()/close()/wirte()</code>\u7B49\u65B9\u6CD5\u3002\u5177\u4F53\u89C1\u540E\u9762\u3002</p><p><code>Element</code>\u63A5\u53E3\u63CF\u8FF0\u4E86\u6240\u6709\u76F8\u540C\u79CD\u7C7B\u7684\u5143\u7D20\u6240\u666E\u904D\u5177\u6709\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u662F\u4E00\u4E2A\u901A\u7528\u6027\u975E\u5E38\u5F3A\u7684\u6587\u6863\u5143\u7D20\u7684\u57FA\u7C7B\u3002</p><p>\u540C\u6837\u6839\u636E\u6587\u6863\u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u6D3E\u751F\u51FA\u4E00\u4E9B\u5BF9\u5E94\u6587\u6863\u7684\u63A5\u53E3\u6765\u63CF\u8FF0\u5BF9\u5E94\u6587\u6863\u4E2D\u5143\u7D20\u5177\u4F53\u7684\u884C\u4E3A\u3002\u6BD4\u5982HTML\u6587\u6863\u7684 <code>HTMLElement</code> \u63A5\u53E3\uFF0C\u662FHTML\u5143\u7D20\u63A5\u53E3\u7684\u57FA\u7840\u7C7B\uFF0C HTML\u6587\u6863\u4E2D\u7684\u6240\u6709\u5143\u7D20\u8282\u70B9\u90FD\u7EE7\u627F\u81F3HTMLElement\uFF0C\u5982 HTMLBodyElement / HTMLFormElement\u7B49\u3002</p><p>\u5F53\u7136DOM\u8282\u70B9\u64CD\u4F5C\u7684\u5927\u90E8\u5206\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u662F\u5B9A\u4E49\u5728\u901A\u7528\u7684<code>Doucment</code>\u7C7B\u548C<code>Element</code>\u7C7B\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u3002\u4E0B\u8868\u662F\u4E00\u4E2AAPI\u7684\u603B\u7ED3\uFF0C\u5177\u4F53\u5E94\u7528\u793A\u4F8B\u89C1\u4E0B\u7AE0\u3002</p><h3 id="\u8282\u70B9api\u603B\u7ED3" tabindex="-1">\u8282\u70B9API\u603B\u7ED3 <a class="header-anchor" href="#\u8282\u70B9api\u603B\u7ED3" aria-hidden="true">#</a></h3><p><strong>\u5C5E\u6027</strong></p><table><thead><tr><th>Node</th><th>Document</th><th>HTMLDocument</th><th>Element</th><th>HTMLElement</th></tr></thead><tbody><tr><td>nodeType</td><td>contentType</td><td>defaultView</td><td>tagName</td><td>style</td></tr><tr><td>nodeName</td><td>characterSet</td><td>cookie</td><td>id</td><td>dataset</td></tr><tr><td>nodeValue</td><td>documentURI</td><td>domain</td><td>attributes</td><td>title</td></tr><tr><td>textContent</td><td>all</td><td>location</td><td>classList</td><td>tabIndex</td></tr><tr><td>ownerDocument</td><td>doctype</td><td>URL</td><td>className</td><td>hidden</td></tr><tr><td>parentNode</td><td>documentElement</td><td>title</td><td>innerHTML</td><td>offsetWidth</td></tr><tr><td>childNodes</td><td>scripts</td><td>readyState</td><td>outerHTML</td><td>offsetHeight</td></tr><tr><td>firstChild</td><td>styleSheetSets</td><td>lastModified</td><td>previousElementSibling</td><td>offsetLeft</td></tr><tr><td>lastChild</td><td>head</td><td></td><td>nextElementSibling</td><td>offsetTop</td></tr><tr><td>previousSibling</td><td>body</td><td></td><td>clientWidth</td><td>offsetParent</td></tr><tr><td>nextSibling</td><td>forms</td><td></td><td>clientHeight</td><td></td></tr><tr><td></td><td>table</td><td></td><td>clientLeft</td><td></td></tr><tr><td></td><td>images</td><td></td><td>clientTop</td><td></td></tr><tr><td></td><td>anchors</td><td></td><td>scrollWidth</td><td></td></tr><tr><td></td><td>links</td><td></td><td>scrollHeight</td><td></td></tr><tr><td></td><td></td><td></td><td>scrollLeft</td><td></td></tr><tr><td></td><td></td><td></td><td>scrollTop</td><td></td></tr></tbody></table><p><strong>\u65B9\u6CD5</strong></p><table><thead><tr><th>Node</th><th>Document</th><th>HTMLDocument</th><th>Element</th><th>HTMLElement</th></tr></thead><tbody><tr><td>getRootNode()</td><td>createElement()</td><td>open()</td><td>hasAttribute()</td><td>HTMLElement.blur()</td></tr><tr><td>hasChildNodes()</td><td>createTextNode()</td><td>write()</td><td>hasAttributes()</td><td>HTMLElement.click()</td></tr><tr><td>isEqualNode()</td><td>createAttribute()</td><td>writeln()</td><td>getAttributeNames()</td><td>HTMLElement.focus()</td></tr><tr><td>contains()</td><td>createComment()</td><td>close()</td><td>getAttribute()</td><td></td></tr><tr><td>compareDocumentPosition()</td><td>getElementsByClassName()</td><td>execCommand()</td><td>setAttribute()</td><td></td></tr><tr><td>cloneNode()</td><td>getElementsByTagName()</td><td>queryCommandEnabled()</td><td>toggleAttribute()</td><td></td></tr><tr><td>appendChild()</td><td>getElementById()</td><td>queryCommandState()</td><td>removeAttribute()</td><td></td></tr><tr><td>insertBefore()</td><td>querySelectorAll()</td><td>queryCommandSupported()</td><td>getElementsByClassName()</td><td></td></tr><tr><td>replaceChild()</td><td>querySelector()</td><td>hasFocus()</td><td>getElementsByName()</td><td></td></tr><tr><td>removeChild()</td><td></td><td></td><td>getElementsByTagName()</td><td></td></tr><tr><td>normalize()</td><td></td><td></td><td>querySelectorAll()</td><td></td></tr><tr><td></td><td></td><td></td><td>querySelector()</td><td></td></tr><tr><td></td><td></td><td></td><td>matches()</td><td></td></tr><tr><td></td><td></td><td></td><td>insertAdjacentElement()</td><td></td></tr><tr><td></td><td></td><td></td><td>insertAdjacentHTML()</td><td></td></tr><tr><td></td><td></td><td></td><td>insertAdjacentText()</td><td></td></tr><tr><td></td><td></td><td></td><td>getBoundingClientRect()</td><td></td></tr><tr><td></td><td></td><td></td><td>scroll()</td><td></td></tr><tr><td></td><td></td><td></td><td>scrollBy()</td><td></td></tr><tr><td></td><td></td><td></td><td>scrollTo()</td><td></td></tr><tr><td></td><td></td><td></td><td>addEventListener()</td><td></td></tr><tr><td></td><td></td><td></td><td>removeEventListener()</td><td></td></tr></tbody></table><p>\u53EF\u4EE5\u770B\u5230<code>Document</code>\u63A5\u53E3\u548C<code>Element</code>\u63A5\u53E3\u90FD\u5B9E\u73B0\u4E86\u9009\u62E9\u5143\u7D20\u7684\u51E0\u4E2A\u65B9\u6CD5\uFF1A</p><p><code>getElementsByClassName()</code> / <code>getElementsByTagName()</code> / <code>getElementById()</code> / <code>querySelectorAll()</code> / <code>querySelector()</code></p><h2 id="dom-style-cssom" tabindex="-1">DOM Style (CSSOM) <a class="header-anchor" href="#dom-style-cssom" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u6587\u6863\u5F15\u5165CSS\u6837\u5F0F\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u5185\u8054\u5F0F\uFF1A\u5728\u5143\u7D20\u5F00\u59CB\u6807\u7B7E\u4E2D\u5B9A\u4E49sytle\u7279\u6027\uFF1B</li><li>\u5185\u5D4C\u5F0F\uFF1A\u5728head\u5143\u7D20\u4E2D\u4F7F\u7528<code>&lt;style&gt;</code>\u6807\u7B7E\uFF1B</li><li>\u5F15\u5165\u5F0F\uFF1A\u5728head\u5143\u7D20\u4E2D\u901A\u8FC7<code>&lt;link&gt;</code>\u6807\u7B7E\u5F15\u5165\u5916\u90E8\u5B9A\u4E49\u7684\u6837\u5F0F\u8868\u3002</li></ul><p>\u5728DOM 2\u7EA7\u52A0\u5165\u4E86\u201CDOM 2\u7EA7\u6837\u5F0F\u201D\u6A21\u5757\uFF0C\u56F4\u7ED5\u8FD9\u4E09\u79CD\u5B9A\u4E49\u6837\u5F0F\u7684\u673A\u5236\u63D0\u4F9B\u4E86\u4E00\u5957API\u3002\u63D0\u4F9B\u4E86\u4EE5\u4E0BAPI\u63A5\u53E3\uFF08\u6837\u5F0F\u64CD\u4F5C\u7684\u6784\u9020\u51FD\u6570\u6216\u53EB\u6837\u5F0F\u57FA\u7C7B\uFF09</p><ul><li>StyleSheet &lt;- CSSStyleSheet</li><li>cssRule &lt;- CSSStyleRule</li><li>CSSStyleDeclaration</li></ul><p>\u53E6\u5916\u4E00\u79CD\u662F\u901A\u8FC7\u64CD\u4F5C\u5143\u7D20class\u7279\u6027\u6765\u6539\u53D8\u5143\u7D20\u6837\u5F0F\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7<code>Element</code>\u63A5\u53E3\u7684\u65B9\u6CD5\uFF1A<code>getAttribute() / setAttribute() / toggleAttribute() / removeAttribute()</code>\u3002</p><h2 id="dom-event" tabindex="-1">DOM Event <a class="header-anchor" href="#dom-event" aria-hidden="true">#</a></h2><p>\u5143\u7D20\u4E8B\u4EF6\uFF08<strong>DOM Event</strong>\uFF09\u53CA\u76F8\u5173\u63A5\u53E3\u662F\u5728DOM 2\u7EA7\u589E\u52A0\u7684\u65B0\u6A21\u5757\uFF0C\u4E3B\u8981\u662F\u5728<code>Element</code>\u63A5\u53E3\u65B9\u6CD5\u4E2D\u589E\u52A0\u4E86<code>addEventLister() / removeEventListener()</code>\u65B9\u6CD5\u548C\u5B9A\u4E49\u4E86DOM\u7684\u4E8B\u4EF6\u6D41\u3002</p><ul><li>\u4E8B\u4EF6\u6D41</li><li>\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</li><li>\u4E8B\u4EF6\u5BF9\u8C61</li><li>\u4E8B\u4EF6\u7C7B\u578B\uFF1A\u7126\u70B9\u4E8B\u4EF6\u3001\u9F20\u6807\u4E8B\u4EF6\u3001\u6587\u672C\u4E8B\u4EF6\u3001\u952E\u76D8\u4E8B\u4EF6\u3001HTML5\u65B0\u589E\u4E8B\u4EF6\u7B49\u3002</li><li>\u4E8B\u4EF6\u59D4\u6258</li><li>\u8DE8\u6D4F\u89C8\u5668\u4E8B\u4EF6\uFF1A\u4E3B\u8981\u662F\u89E3\u51B3\u7279\u6B8A\u7684IE\u4E8B\u4EF6</li></ul><p>\u4E00\u6BB5\u4EE3\u7801\u611F\u89C9\u4E0B\u5404\u4E2A\u9636\u6BB5DOM\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u5199\u6CD5\uFF1A</p><blockquote><p>\u4E8B\u4EF6\u7684\u5904\u7406\u7A0B\u5E8F\u6709\u65F6\u4E5F\u53EB\u53E5\u67C4\u3001\u4E8B\u4EF6\u56DE\u8C03\u7B49</p></blockquote><div class="language-html"><pre><code><span class="token comment">&lt;!-- HTML\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F,\u5199\u5728HTML\u5143\u7D20\u4E0A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u70B9\u51FB<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">fun</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// DOM 0\u7EA7\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
<span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oDiv<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>  
oDiv<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u9664\u4E8B\u4EF6\u76D1\u542C</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// DOM 2\u7EA7\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F</span>
<span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span> 
oDiv<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
oDiv<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u79FB\u9664\u4E8B\u4EF6\u76D1\u542C</span>
</code></pre></div>`,66),d=[p];function l(c,r,i,u,k,m){return a(),n("div",null,d)}var D=t(o,[["render",l]]);export{M as __pageData,D as default};