import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";var p="/assets/heading.036652dd.jpg";const m='{"title":"\u6587\u672C\u7ED3\u6784\u8BED\u4E49\u5316\u5143\u7D20","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6807\u9898\uFF1Ah1-h6, hgroup","slug":"\u6807\u9898\uFF1Ah1-h6-hgroup"},{"level":2,"title":"\u6BB5\u843D p","slug":"\u6BB5\u843D-p"},{"level":2,"title":"\u5217\u8868 list","slug":"\u5217\u8868-list"},{"level":3,"title":"\u6709\u5E8F\u5217\u8868 Ordered List","slug":"\u6709\u5E8F\u5217\u8868-ordered-list"},{"level":3,"title":"\u65E0\u5E8F\u5217\u8868 Unordered List","slug":"\u65E0\u5E8F\u5217\u8868-unordered-list"},{"level":3,"title":"\u63CF\u8FF0\u5217\u8868 Description List","slug":"\u63CF\u8FF0\u5217\u8868-description-list"},{"level":2,"title":"\u663E\u793A\u9690\u85CF details summary","slug":"\u663E\u793A\u9690\u85CF-details-summary"}],"relativePath":"FE-Language/HTML/9-text-structural-semantics.md"}',o={},l=t('<h1 id="\u6587\u672C\u7ED3\u6784\u8BED\u4E49\u5316\u5143\u7D20" tabindex="-1">\u6587\u672C\u7ED3\u6784\u8BED\u4E49\u5316\u5143\u7D20 <a class="header-anchor" href="#\u6587\u672C\u7ED3\u6784\u8BED\u4E49\u5316\u5143\u7D20" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#\u6807\u9898\uFF1Ah1-h6-hgroup">\u6807\u9898\uFF1Ah1-h6, hgroup</a></li><li><a href="#\u6BB5\u843D-p">\u6BB5\u843D p</a></li><li><a href="#\u5217\u8868-list">\u5217\u8868 list</a><ul><li><a href="#\u6709\u5E8F\u5217\u8868-ordered-list">\u6709\u5E8F\u5217\u8868 Ordered List</a></li><li><a href="#\u65E0\u5E8F\u5217\u8868-unordered-list">\u65E0\u5E8F\u5217\u8868 Unordered List</a></li><li><a href="#\u63CF\u8FF0\u5217\u8868-description-list">\u63CF\u8FF0\u5217\u8868 Description List</a></li></ul></li><li><a href="#\u663E\u793A\u9690\u85CF-details-summary">\u663E\u793A\u9690\u85CF details summary</a></li></ul></div></p><p>HTML\uFF08HyperText Markup Language\uFF09\uFF0C\u5168\u79F0\u662F\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00\uFF0C\u63CF\u8FF0\u7F51\u9875\u7684\u5185\u5BB9\u548C\u7ED3\u6784\u3002\u73B0\u4EE3\u7F51\u9875\u5185\u5BB9\u79CD\u7C7B\u8D8A\u6765\u8D8A\u4E30\u5BCC\uFF0C\u771F\u5F97\u7B97\u662F\u201C\u8D85\u6587\u672C\u201D\u5185\u5BB9\u4E86\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u6587\u672C\uFF0C\u8FD8\u5305\u62EC\u56FE\u7248\u3001\u97F3\u89C6\u9891\u7B49\u5A92\u4F53\u5185\u5BB9\u3002\u4F46\u5728\u6700\u521D\uFF0CHTML\u7684\u4E3B\u8981\u5DE5\u4F5C\u662F\u7F16\u8F91\u6587\u672C\uFF0C\u5305\u62EC\u6587\u672C\u7ED3\u6784\u548C\u5185\u5BB9\u4E24\u90E8\u5206\uFF0C\u65E9\u671FHTML\u5DE5\u4F5C\u7EC4\u7684\u6709\u5F88\u591A\u51FA\u7248\u754C\u4E66\u7C4D\u6392\u7248\u7684\u4E13\u5BB6\uFF0C\u6240\u4EE5\u5728HTML\u8BED\u8A00\u4E2D\uFF0C\u5BF9\u6587\u672C\u8868\u793A\u7684\u6807\u7B7E\u6700\u591A\uFF0C\u4E5F\u662F\u8BED\u4E49\u6700\u4E30\u5BCC\u3002</p><p>\u6211\u4E00\u76F4\u8BA4\u4E3A\u5728\u6700\u521D\u5B66\u4E60html\u65F6\uFF0C\u53EF\u4EE5\u53C2\u8003word\u6587\u6863\u6216\u8005\u62A5\u7EB8\u6765\u7406\u89E3\uFF0C\u7F16\u5199html\u5C31\u50CF\u5F53\u521D\u5927\u5B66\u6BD5\u4E1A\u8BBA\u6587\u683C\u5F0F\u7684\u8981\u6C42\uFF0C\u6709\u7AE0\u8282\u3001\u8D44\u6E90\u5F15\u7528\u3001\u9875\u7709\u3001\u9875\u811A\u3001\u53C2\u8003\u5F15\u7528\u6807\u6CE8\u7B49\u3002</p><p><img src="'+p+`" alt=""></p><p>\u5927\u90E8\u5206\u7684\u6587\u672C\u7ED3\u6784\u4E3B\u8981\u7531\u6807\u9898\u548C\u6BB5\u843D\u7EC4\u6210\uFF0C\u53E6\u5916\u7684\u6587\u672C\u6392\u7248\u7ED3\u6784\u8FD8\u5217\u8868\uFF08\u6709\u5E8F\u5217\u8868\u3001\u65E0\u5E8F\u5217\u8868\u3001\u81EA\u5B9A\u4E49\u5217\u8868\uFF09</p><ul><li>\u6807\u9898\uFF1Ah1-h6, hgroup</li></ul><h2 id="\u6807\u9898\uFF1Ah1-h6-hgroup" tabindex="-1">\u6807\u9898\uFF1Ah1-h6, hgroup <a class="header-anchor" href="#\u6807\u9898\uFF1Ah1-h6-hgroup" aria-hidden="true">#</a></h2><p>\u6807\u9898(Heading)\u5143\u7D20\u5448\u73B0\u4E86\u516D\u4E2A\u4E0D\u540C\u7684\u7EA7\u522B\u7684\u6807\u9898\uFF0Ch1\u7EA7\u522B\u6700\u9AD8\uFF0C\u800C h6\u7EA7\u522B\u6700\u4F4E\u3002\u5BF9\u4E8E\u4E3B\u526F\u6807\u9898\u8FD8\u6709\u4E00\u4E2A\u6807\u9898\u7EC4\u5143\u7D20hgroup\u3002</p><blockquote><p>MDN\u6587\u6863\u5199\u660E\uFF0Chgroup\u5143\u7D20\u5DF2\u7ECF\u4ECEHTML5\uFF08W3C\uFF09\u89C4\u8303\u4E2D\u5220\u9664\uFF0C\u4F46\u662F\u5B83\u4ECD\u65E7\u5728 WHATWG \u7684 HTML \u7248\u672C\u91CC\u3002\u5927\u591A\u6570\u6D4F\u89C8\u5668\u90FD\u90E8\u5206\u5730\u5B9E\u73B0\uFF0C\u6240\u4EE5\u5B83\u4E0D\u592A\u53EF\u80FD\u5B8C\u5168\u5728\u6D4F\u89C8\u5668\u91CC\u6D88\u5931\u3002</p></blockquote><p>h1-h6\u6807\u9898\uFF0C\u5728\u6D4F\u89C8\u5668\u5B9E\u73B0\u4E2D\u90FD\u5E26\u6709\u5404\u81EA\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u8868\u73B0\u4E3A\u5B57\u53F7\u9010\u7EA7\u51CF\u5C0F\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u4E00\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u4E8C\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u4E09\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>\u56DB\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>\u4E94\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>\u516D\u7EA7\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6548\u679C\uFF1A <h1>\u4E00\u7EA7\u6807\u9898</h1><h2>\u4E8C\u7EA7\u6807\u9898</h2><h3>\u4E09\u7EA7\u6807\u9898</h3><h4>\u56DB\u7EA7\u6807\u9898</h4><h5>\u4E94\u7EA7\u6807\u9898</h5><h6>\u516D\u7EA7\u6807\u9898</h6></p><p>\u5982\u679C\u5728\u9875\u9762\u4E2D\uFF0C\u5B58\u5728\u4E3B\u526F\u6807\u9898\u6216\u6807\u9898\u548C\u63CF\u8FF0\u7684\u60C5\u5F62\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6807\u9898\u7EC4\u5143\u7D20\u6765\u5305\u88F9\uFF0C\u4F7F\u5F97\u9875\u9762\u8BED\u4E49\u66F4\u4E3A\u5B8C\u6574\uFF0C\u4E0D\u662F\u5B64\u7ACB\u7684\u4E24\u4E2A\u6807\u9898\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hgroup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Main title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Secondary title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hgroup</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><h2 id="\u6BB5\u843D-p" tabindex="-1">\u6BB5\u843D p <a class="header-anchor" href="#\u6BB5\u843D-p" aria-hidden="true">#</a></h2><p>\u540Cword\u5185\u5BB9\u4E00\u6837\uFF0C\u6BCF\u4E2A\u5206\u6BB5\u7684\u5185\u5BB9\u90FD\u7528\u4E00\u4E2Ap\u6807\u7B7E\u6765\u5305\u88F9\u5373\u53EF\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8FD9\u662F\u4E00\u6BB5\u793A\u4F8B\u6587\u5B57\uFF0C\u867D\u7136\u6587\u5B57\u5185\u5BB9\u8F83\u77ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5217\u8868-list" tabindex="-1">\u5217\u8868 list <a class="header-anchor" href="#\u5217\u8868-list" aria-hidden="true">#</a></h2><p>\u5217\u8868\u5728\u751F\u6D3B\u4E2D\u968F\u5904\u53EF\u89C1\u2014\u2014\u4ECE\u4F60\u7684\u8D2D\u7269\u6E05\u5355\u5230\u4F60\u7684\u56DE\u5BB6\u8DEF\u7EBF\u65B9\u6848\u5217\u8868\uFF0C\u518D\u5230\u4F60\u9075\u4ECE\u7684\u6559\u7A0B\u8BF4\u660E\u5217\u8868\u3002\u5728\u7F51\u7EDC\u4E0A\uFF0C\u5217\u8868\u4E5F\u5230\u5904\u5B58\u5728\uFF0C\u6211\u4EEC\u9700\u8981\u5B66\u4E60\u4E09\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u5217\u8868\u3002</p><h3 id="\u6709\u5E8F\u5217\u8868-ordered-list" tabindex="-1">\u6709\u5E8F\u5217\u8868 Ordered List <a class="header-anchor" href="#\u6709\u5E8F\u5217\u8868-ordered-list" aria-hidden="true">#</a></h3><p>\u6709\u5E8F\u7684\u5217\u8868\u662F\u6839\u636E\u9879\u76EE\u7684\u987A\u5E8F\u5217\u51FA\u6765\u7684\uFF0C\u5F3A\u8C03\u7684\u91CD\u70B9\u662F\u5217\u8868\u9879\u4E4B\u95F4\u662F\u6709\u987A\u5E8F\u5148\u540E\u5173\u7CFB\u7684\u3002</p><p>\u4F7F\u7528ol\u6807\u7B7E\u5305\u88F9\u5217\u8868\u9879li\uFF0C\u5217\u8868\u9879\u524D\u4F7F\u7528\u6570\u5B57\u6807\u8BC6\u3002</p><p>\u6BD4\u4F8B\u6307\u5F15\u65B9\u5411\u7684\u4F8B\u5B50\uFF0C\u5404\u9879\u662F\u6709\u5148\u540E\u987A\u5E8F\u6765\u6307\u5F15\u65B9\u5411\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u6CBF\u7740\u6761\u8DEF\u8D70\u5230\u5934<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u53F3\u8F6C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u76F4\u884C\u7A7F\u8FC7\u7B2C\u4E00\u4E2A\u5341\u5B57\u8DEF\u53E3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5728\u7B2C\u4E09\u4E2A\u5341\u5B57\u8DEF\u53E3\u5904\u5DE6\u8F6C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7EE7\u7EED\u8D70 300 \u7C73\uFF0C\u5B66\u6821\u5C31\u5728\u4F60\u7684\u53F3\u624B\u8FB9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u65E0\u5E8F\u5217\u8868-unordered-list" tabindex="-1">\u65E0\u5E8F\u5217\u8868 Unordered List <a class="header-anchor" href="#\u65E0\u5E8F\u5217\u8868-unordered-list" aria-hidden="true">#</a></h3><p>\u65E0\u5E8F\u7684\u5217\u8868\u4E2D\u9879\u76EE\u7684\u987A\u5E8F\u5E76\u4E0D\u91CD\u8981\uFF0C\u66F4\u50CF\u662F\u4E00\u4E2A\u6E05\u5355\u9879\u7684\u7F57\u5217\u3002</p><p>\u4F7F\u7528 ul \u6807\u7B7E\u5305\u88F9\u5217\u8868\u9879\u3002\u5217\u8868\u9879\u524D\u7528\u70B9\u6216\u5708\u8868\u793A\u3002</p><p>\u5982\u4E00\u4E2A\u9910\u70B9\u7684\u5217\u8868\u9879\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u8C46\u6D46<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u6CB9\u6761<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u8C46\u6C41<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u7126\u5708<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u63CF\u8FF0\u5217\u8868-description-list" tabindex="-1">\u63CF\u8FF0\u5217\u8868 Description List <a class="header-anchor" href="#\u63CF\u8FF0\u5217\u8868-description-list" aria-hidden="true">#</a></h3><p>\u63CF\u8FF0\u5217\u8868\u5305\u542B\u63CF\u8FF0\u672F\u8BED\uFF08description terms\uFF09\u548C\u63CF\u8FF0\u90E8\u5206\uFF08description description\uFF09\uFF0C\u5C5E\u4E8E\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u3002\u66F4\u9002\u7528\u4E8E\u8BCD\u6C47\u8868\uFF0C\u6216\u5176\u5B83\u672F\u8BED\u5B9A\u4E49\u3002</p><p>\u4F7F\u7528dl\u5305\u88F9\u5217\u8868\u9879\uFF0C\u5355\u4E2A\u5217\u8868\u9879\u7684\u7531dt\u5B9A\u4E49\u5217\u8868\u9879\u7684\u6807\u9898\uFF0Cdd\u5B9A\u4E49\u5217\u8868\u9879\u5185\u5BB9\u3002\u5176\u4E2Ddd\u5B9A\u4E49\u7684\u5185\u5BB9\u6709\u7F29\u8FDB\u6548\u679C\u3002</p><blockquote><p>.\u4E0D\u8981\u5C06\u5143\u7D20\uFF08\u4E5F\u4E0D\u8981\u7528 dl-dt-dd \u5143\u7D20\uFF09\u7528\u6765\u5728\u9875\u9762\u521B\u5EFA\u5177\u6709\u7F29\u8FDB\u6548\u679C\u7684\u5185\u5BB9\u3002\u867D\u7136\u8FD9\u6837\u7684\u7ED3\u679C\u6837\u5F0F\u770B\u4E0A\u53BB\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\uFF0C\u8FD9\u662F\u5F88\u7CDF\u7CD5\u7684\u505A\u6CD5\uFF0C\u5E76\u4E14\u8BED\u4E49\u4E5F\u4E0D\u6E05\u6670\u3002\u8981\u6539\u53D8\u63CF\u8FF0\u5217\u8868\u4E2D\u63CF\u8FF0\u7684\u7F29\u8FDB\u91CF\u8BF7\u4F7F\u7528 CSS \u3002</p></blockquote><p>\u4E00\u4E2Adl\u6807\u7B7E\u5305\u88F9\u7684dt dd\u6570\u91CF\u5E76\u6CA1\u6709\u9650\u5236\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4E00\u4E2Adt\u5BF9\u591A\u4E2Add\uFF0C\u6216\u76F8\u53CD\uFF0C\u6BD4\u5982\u4E0B\u9762\u4F8B\u5B50\u3002</p><div class="language-html"><pre><code>// dl \u548C dd \u4E00\u5BF9\u4E00
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Firefox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- other terms and definitions --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>

// dl \u548C dd \u4E00\u5BF9\u591A\uFF1A\u5355\u6761\u672F\u8BED\u5BF9\u5E94\u591A\u4E2A\u63CF\u8FF0
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Firefox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox,
      is a mostly herbivorous mammal, slightly larger than a domestic cat
      (60 cm long).<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- other terms and definitions --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>

// dl \u548C li \u591A\u5BF9\u4E00
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Firefox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Mozilla Firefox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Fx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- other terms and definitions --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>

// \u4E5F\u53EF\u4EE5\u662F\u591A\u5BF9\u591A\u3002
</code></pre></div><p>\u4E0D\u540C\u5217\u8868\u5355\u4E5F\u53EF\u4EE5\u76F8\u4E92\u5D4C\u5957</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u8C46\u6D46
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u751C\u5473<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>l</span><span class="token punctuation">&gt;</span></span>\u54B8\u5473<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u6CB9\u6761<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u8C46\u6C41<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>\u7126\u5708<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>\u751C\u5473<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>\u54B8\u5473<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
  &lt;/&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u663E\u793A\u9690\u85CF-details-summary" tabindex="-1">\u663E\u793A\u9690\u85CF details summary <a class="header-anchor" href="#\u663E\u793A\u9690\u85CF-details-summary" aria-hidden="true">#</a></h2><p><code>&lt;details&gt;</code>\u5143\u7D20\u53EF\u521B\u5EFA\u4E00\u4E2A\u6302\u4EF6\uFF0C\u4EC5\u5728\u88AB\u5207\u6362\u6210\u5C55\u5F00\u72B6\u6001\u65F6\uFF0C\u5B83\u624D\u4F1A\u663E\u793A\u5185\u542B\u7684\u4FE1\u606F\u3002<br><code>&lt;summary&gt;</code> \u5143\u7D20\u53EF\u4E3A\u8BE5\u90E8\u4EF6\u63D0\u4F9B\u6982\u8981\u6216\u8005\u6807\u9898\u3002 \u793A\u4F8B\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u663E\u793Asummary\u5143\u7D20\u5185\u5BB9\u4F5C\u4E3A\u6807\u9898.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><details><summary>\u6807\u9898</summary><p>\u663E\u793Asummary\u5143\u7D20\u5185\u5BB9\u4F5C\u4E3A\u6807\u9898.</p></details><p><strong>\u5EF6\u4F38\u5185\u5BB9\uFF1A</strong></p><ul><li>\u5982\u679Cdetails\u5143\u7D20\u7F3A\u5C11summary\uFF0C\u5219\u9ED8\u8BA4\u6807\u9898\u4E3ADetails(\u4E2D\u6587\u663E\u793A&quot;\u8BE6\u7EC6\u4FE1\u606F&quot;)</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u4F7F\u7528\u9ED8\u8BA4\u5185\u5BB9\u663E\u793A\u201C\u8BE6\u7EC6\u4FE1\u606F\u201D.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><details><p>\u4F7F\u7528\u9ED8\u8BA4\u5185\u5BB9\u663E\u793A\u201C\u8BE6\u7EC6\u4FE1\u606F\u201D.</p></details><ul><li>details\u6709\u4E00\u4E2A<code>open</code>\u7684\u5E03\u5C14\u503C\u5C5E\u6027\u3002details\u5143\u7D20\u9ED8\u8BA4\u662F\u9690\u85CF\u72B6\u6001\uFF0C\u5982\u679C\u52A0\u4E86Open\u7279\u6027\uFF0C\u5219\u4E3A\u663E\u793A\u72B6\u6001</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token attr-name">open</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>open\u9ED8\u8BA4\u663E\u793A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u4F7F\u7528open\u7279\u6027\uFF0C\u9ED8\u8BA4\u663E\u793A\uFF0C\u8FD9\u662F\u5E03\u5C14\u503C\u7279\u6027.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><details open><summary>open\u7279\u6027</summary><p>\u4F7F\u7528open\u7279\u6027\uFF0C\u9ED8\u8BA4\u663E\u793A\uFF0C\u8FD9\u662F\u5E03\u5C14\u503C\u7279\u6027.</p></details><ul><li>summary\u5143\u7D20\u9ED8\u8BA4\u663E\u793A\u7684\u7BAD\u5934\u6807\u8BC6\u53EF\u4EE5\u901A\u8FC7css\u4FEE\u6539</li></ul><p>summary\u5143\u7D20\u7684list-style\uFF0C\u5305\u62EClist-style-type list-style-image</p><div class="language-css"><pre><code><span class="token selector">details &gt; summary</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px 6px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 15em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* chrome\u4E0D\u517C\u5BB9\uFF0C\u4F7F\u7528\u5176\u4E3A\u5143\u7D20 */</span>
<span class="token selector">details &gt; summary::-webkit-details-marker</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>details\u7684\u663E\u793A\u9690\u85CF\u5207\u6362\u53EF\u4EE5\u901A\u8FC7\u81EA\u8EAB\u7684toggle\u4E8B\u4EF6\u6765\u76D1\u542C\u3002</li></ul><div class="language-js"><pre><code>details<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>details<span class="token punctuation">.</span>open<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* the element was toggled open */</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">/* the element was toggled closed */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,54),e=[l];function c(u,i,k,g,d,r){return s(),a("div",null,e)}var v=n(o,[["render",c]]);export{m as __pageData,v as default};