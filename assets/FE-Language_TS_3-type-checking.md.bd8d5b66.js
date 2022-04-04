import{_ as n,c as s,o as a,a as t}from"./app.fa011131.js";const m='{"title":"\u7C7B\u578B\u68C0\u67E5 type checking","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u660E\u786E\u8D4B\u503C\u68C0\u67E5","slug":"\u660E\u786E\u8D4B\u503C\u68C0\u67E5"},{"level":2,"title":"\u53EF\u8D4B\u503C\u6027\u68C0\u67E5 [P148]","slug":"\u53EF\u8D4B\u503C\u6027\u68C0\u67E5-p148"},{"level":3,"title":"\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B [P139]","slug":"\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B-p139"},{"level":3,"title":"\u7C7B\u578B\u578B\u53D8 [P141]","slug":"\u7C7B\u578B\u578B\u53D8-p141"},{"level":2,"title":"\u591A\u4F59\u5C5E\u6027\u68C0\u67E5 [P151]","slug":"\u591A\u4F59\u5C5E\u6027\u68C0\u67E5-p151"},{"level":3,"title":"\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B(fresh object literal type)","slug":"\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B-fresh-object-literal-type"},{"level":2,"title":"\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09[p159]","slug":"\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09-p159"}],"relativePath":"FE-Language/TS/3-type-checking.md"}',p={},e=t(`<h1 id="\u7C7B\u578B\u68C0\u67E5-type-checking" tabindex="-1">\u7C7B\u578B\u68C0\u67E5 type checking <a class="header-anchor" href="#\u7C7B\u578B\u68C0\u67E5-type-checking" aria-hidden="true">#</a></h1><p>TypeScript\u662F\u4E00\u79CD\u5E26\u6709<strong>\u7C7B\u578B\u8BED\u6CD5</strong>\u7684JavaScript\u3002 TypeScript \u4E2D\u7684\u7C7B\u578B\u7CFB\u7EDF\u8981\u6C42\uFF1A\u663E\u5F0F<strong>\u58F0\u660E</strong>\u90E8\u5206\u7C7B\u578B\uFF0C\u7136\u540E\u5728\u7F16\u8BD1\u65F6\u4F1A<strong>\u63A8\u5BFC</strong>\u4F59\u4E0B\u7C7B\u578B\uFF0C\u5E76\u5728\u7F16\u8BD1\u65F6<strong>\u68C0\u67E5</strong>\u7C7B\u578B\u3002</p><p>\u524D\u9762\u8BB2\u89E3\u4E86</p><ul><li><a href="./1-type-declaration-1.1-basic-type.html">TS \u5982\u4F55\u58F0\u660E\u5404\u79CD\u7C7B\u578B</a></li><li><a href="./2-type-inference.html">TS \u5982\u4F55\u63A8\u5BFC\u7C7B\u578B</a></li></ul><p>\u8FD9\u4E00\u8282\u8BB2\u89E3 TS \u5982\u4F55\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>\u660E\u786E\u8D4B\u503C\u68C0\u67E5[P38]</li><li>\u53EF\u8D4B\u503C\u6027\u68C0\u67E5[P148] <ul><li>\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B[P139]</li><li>\u7C7B\u578B\u578B\u53D8 [P141] <ul><li>\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u578B\u53D8\uFF08\u534F\u53D8\uFF09</li><li>\u51FD\u6570\u7684\u578B\u53D8\uFF08\u53C2\u6570\u9006\u53D8\uFF0C\u8FD4\u56DE\u503C\u534F\u53D8\uFF09</li></ul></li></ul></li><li>\u591A\u4F59\u5C5E\u6027\u68C0\u67E5[P151] <ul><li>\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B(fresh object literal type)</li></ul></li><li>\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09[p159] <ul><li>switch \u7684 default \u5206\u652F\u589E\u52A0 never \u7C7B\u578B\u8D4B\u503C\u4FDD\u8BC1\u7A77\u5C3D\u6027\u3002<code>const exhaustiveCheck: never = val</code></li></ul></li></ul><h2 id="\u660E\u786E\u8D4B\u503C\u68C0\u67E5" tabindex="-1">\u660E\u786E\u8D4B\u503C\u68C0\u67E5 <a class="header-anchor" href="#\u660E\u786E\u8D4B\u503C\u68C0\u67E5" aria-hidden="true">#</a></h2><p>\u5148\u58F0\u660E\u53D8\u91CF\uFF0C\u518D\u5BF9\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u8D4B\u503C\u662F JS \u4E2D\u4E00\u79CD\u5E38\u89C1\u7684\u6A21\u5F0F\uFF0C\u5728 TS \u4E2D\u4E5F\u652F\u6301\uFF0C\u5E76\u4E14 TS \u7684\u7C7B\u578B\u7CFB\u7EDF\u4F1A\u786E\u4FDD\uFF0C\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u8BE5\u53D8\u91CF\u65F6\u5DF2\u7ECF\u660E\u786E\u4E3A\u5176\u8D4B\u503C\u4E86\u3002[P38]</p><div class="language-ts"><pre><code><span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">3</span> <span class="token comment">// Error TS2454: Variable &#39;i&#39; is used before being assigned.</span>

<span class="token comment">// \u5373\u4FBF\u6CA1\u6709\u663E\u5F0F\u6CE8\u89E3\u7C7B\u578B\uFF0C TS \u4E5F\u4F1A\u5F3A\u5236\u68C0\u67E5</span>
<span class="token keyword">let</span> a
<span class="token keyword">let</span> b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">3</span> <span class="token comment">// Error TS2532: Object is possibly &#39;undefined&#39;.</span>
</code></pre></div><h2 id="\u53EF\u8D4B\u503C\u6027\u68C0\u67E5-p148" tabindex="-1">\u53EF\u8D4B\u503C\u6027\u68C0\u67E5 [P148] <a class="header-anchor" href="#\u53EF\u8D4B\u503C\u6027\u68C0\u67E5-p148" aria-hidden="true">#</a></h2><p>TS \u5728\u5224\u65AD \u201C A \u7C7B\u578B\u662F\u5426\u53EF\u4EE5\u8D4B\u503C\u7ED9 B \u7C7B\u578B\uFF1F\u201D \u65F6\uFF0C\u9075\u5FAA\u51E0\u4E2A\u7B80\u5355\u7684\u89C4\u5219\uFF1A</p><ul><li><code>A &lt;: B</code>\uFF1A\u5982\u679C A \u662F B \u7684\u5B50\u7C7B\u578B\uFF0C\u90A3\u4E48\u5728\u53EF\u4EE5\u4F7F\u7528 B \u7684\u5730\u65B9\u4E5F\u53EF\u4EE5\u4F7F\u7528 A\u3002</li><li>A \u662F any \u7C7B\u578B\uFF0C\u56E0\u4E3A any \u65E2\u662F\u6240\u6709\u7C7B\u578B\u7684\u8D85\u7C7B\u578B\uFF0C\u4E5F\u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u5373 any \u662F <code>top type</code> \u4E5F\u662F <code>bottom type</code>\u3002</li></ul><p>\u8FD9\u91CC\u6D89\u53CA\u5230\u7C7B\u578B\u517C\u5BB9\u6027\u7684\u51E0\u4E2A\u6982\u5FF5\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B\u3001\u578B\u53D8\uFF08\u4E0D\u53D8\u3001\u534F\u53D8\u3001\u9006\u53D8\u3001\u53CC\u53D8\uFF09\u3002</p><h3 id="\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B-p139" tabindex="-1">\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B [P139] <a class="header-anchor" href="#\u7C7B\u578B\u517C\u5BB9\u6027\uFF1A\u8D85\u7C7B\u578B\u3001\u5B50\u7C7B\u578B-p139" aria-hidden="true">#</a></h3><p>\u5982\u679C\u7C7B\u578B A \u662F\u7C7B\u578B B \u7684\u5B50\u7C7B\u578B\uFF0C\u90A3\u8FD4\u8FC7\u6765\u8BF4\uFF0CB \u5C31\u662F A \u7684\u8D85\u7C7B\u578B\u3002</p><p>\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u4E00\u5957\u53E5\u6CD5\u8868\u793A\uFF1A<code>A &lt;: B</code> \u6307 A \u7C7B\u578B\u662F B \u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u6216\u8005\u4E3A\u540C\u79CD\u7C7B\u578B\uFF0C\u90A3\u5BF9\u5E94\u7684 <code>B &gt;: A</code> \u6307 B \u7C7B\u578B\u662F A \u7C7B\u578B\u7684\u8D85\u7C7B\u578B\uFF0C\u6216\u8005\u4E3A\u540C\u79CD\u7C7B\u578B\u3002</p><p>\u5BF9\u4E8E TS \u4E2D\u57FA\u7840\u7C7B\u578B\u7684\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u4E00\u79CD\u56FE\u6765\u8FF0[P27]\uFF1A</p><div class="language-"><pre><code>                                                             +---------+
                                                             | unknown |
                                                             +----+----+
                                                                  |
                                                                  v
                                                             +----v----+
                                                             |   any   |
                                                             +----+----+
                                                                  |
                                                                  v
     +------------+----------------------+-----------+-------------------------+------------+---------------------+
     |            |                      |           |            |            |            |                     |
     v            v                      v           v            v            v            v                     v
+----+---+   +----+----+            +----+----+  +---+-----+  +---+-----+  +---+-----+  +---+-----+          +----+----+
|  null  |   |  void   |            | boolean |  | string  |  | number  |  | bigint  |  | symbol  |          | object  |
+----+---+   +----+----+            +----+----+  +---+-----+  +---+-----+  +---------+  +----+----+          +----+----+
     |            |                      |           |            |                          |                    |
     |            |                      |           |            |                          |                    +-----------+--------------+
     |            |                      |           |            |                          |                    |           |              |
     |            v                      |           v            v                          v                    v           v              v
     |      +-----+-----+                |       +---+-----+  +---+-----+               +----+----+          +----+----+  +---+-----+  +-----+------+
     |      | undefined |                |       | string  |  | number  |               | unique  |          |  array  |  | function|  | constuctor |
     |      +-----+-----+                |       |  enum   |  |  enum   |               | symbol  |          +----+----+  +---+-----+  +-----+------+
     |            |                      |       +---+-----+  +---+-----+               +----+----+               |           |              |
     |            |                      |           |            |                          |                    v           |              |
     |            |                      |           |            |                          |                +---+-----+     |              |
     |            |                      |           |            |                          |                |  tuple  |     |              |
     |            |                      |           |            |                          |                +---+-----+     |              |
     |            |                      |           |            |                          |                    |           |              |
     v            v                      v           v            v                          v                    v           v              v
     +------------+----------------------+-----------+---------------------------------------+--------------------+-----------+--------------+
                                                                  |
                                                                  v
                                                              +--------+
                                                              |  any   |
                                                              +--------+
                                                                  |
                                                                  v
                                                              +--------+
                                                              | never  |
                                                              +--------+
</code></pre></div><ul><li>\u6240\u6709\u5B57\u9762\u91CF\u7C7B\u578B\u90FD\u662F\u5BF9\u5E94\u57FA\u7C7B\u578B\u7684\u5B50\u7C7B\u578B</li><li>\u6570\u5B57\u679A\u4E3E\u662F number \u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u5B57\u7B26\u4E32\u68C0\u4E3E\u662F string \u7684\u5B50\u7C7B\u578B</li><li>\u5143\u7EC4\u662F\u6570\u7EC4\u7684\u5B50\u7C7B\u578B</li><li>any \u5373\u662F top type \u4E5F\u662F bottom type\uFF0C\u5C31\u662F\u8BF4 any \u65E2\u662F\u6240\u6709\u7C7B\u578B\u7684\u8D85\u7C7B\u578B\uFF0C\u4E5F\u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C</li><li>unknown \u662F top type\uFF0C\u662F\u6240\u6709\u7C7B\u578B\u7684\u8D85\u7C7B\u578B</li><li>never \u662F bottom type\uFF0C\u662F\u6240\u6709\u7C7B\u578B\u7684\u5B50\u7C7B\u578B</li><li>\u8054\u5408\u7C7B\u578B\u662F\u5404\u4E2A\u6210\u5458\u7C7B\u578B\u7684\u8D85\u7C7B\u578B</li></ul><h3 id="\u7C7B\u578B\u578B\u53D8-p141" tabindex="-1">\u7C7B\u578B\u578B\u53D8 [P141] <a class="header-anchor" href="#\u7C7B\u578B\u578B\u53D8-p141" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E\u57FA\u7840\u7C7B\u578B\u6765\u8BF4\uFF0C\u5BF9\u7167\u4E0A\u56FE\u53EF\u4EE5\u5F88\u5BB9\u6613\u5224\u65AD A \u7C7B\u578B\u662F\u4E0D\u662F B \u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6CDB\u578B\uFF08\u53C2\u6570\u5316\u7C7B\u578B\uFF09\u6216\u8005\u5176\u5B83\u590D\u6742\u7C7B\u578B\u7684\u60C5\u5F62\uFF0C\u5C31\u4E0D\u662F\u90A3\u4E48\u76F4\u63A5\u660E\u786E\u4E86\u3002\u6BD4\u5982\uFF1A</p><ul><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7ED3\u6784\u5316\u7C7B\u578B A \u5BF9\u8C61\u662F\u7ED3\u6784\u5316\u7C7B\u578B B \u5BF9\u8C61\u7684\u5B50\u7C7B\u578B\uFF1F</li><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B <code>Array&lt;A&gt;</code> \u662F <code>Array&lt;B&gt;</code> \u7684\u5B50\u7C7B\u578B\uFF1F</li><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B\u51FD\u6570 <code>(a: A) =&gt; B</code> \u662F\u51FD\u6570 <code>(c: C) =&gt; D</code> \u7684\u5B50\u7C7B\u578B\uFF1F</li></ul><p>\u578B\u53D8\u5305\u542B\u56DB\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u4E0D\u53D8\uFF0C\u5C31\u662F\u8BF4\u53EA\u80FD\u662F\u7C7B\u578B T</li><li>\u534F\u53D8\uFF1A\u53EF\u4EE5\u662F\u7C7B\u578B T \u7684\u5B50\u7C7B\u578B\u6216\u76F8\u540C\u7C7B\u578B\uFF0C\u5373 <code>A &lt;: T</code></li><li>\u9006\u53D8\uFF1A\u53EF\u4EE5\u662F\u7C7B\u578B T \u7684\u8D85\u7C7B\u578B\u6216\u76F8\u540C\u7C7B\u578B\uFF0C\u5373 <code>A &gt;: T</code></li><li>\u53CC\u53D8\uFF1A\u5373\u53EF\u4EE5\u662F\u7C7B\u578B T \u7684\u5B50\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B83\u7684\u8D85\u7C7B\u578B\uFF0C\u6216\u8005\u76F8\u540C\u7C7B\u578B\uFF0C\u5373 <code>A &lt;: T</code> \u6216 <code>A &gt;: T</code></li></ul><h4 id="\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u578B\u53D8\uFF08\u534F\u53D8\uFF09" tabindex="-1">\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u578B\u53D8\uFF08\u534F\u53D8\uFF09 <a class="header-anchor" href="#\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u578B\u53D8\uFF08\u534F\u53D8\uFF09" aria-hidden="true">#</a></h4><p>TS \u7684\u7C7B\u578B\u7CFB\u7EDF\u91C7\u7528\u7684\u8BBE\u8BA1\u98CE\u683C\u662F\u7ED3\u6784\u5316\u7C7B\u578B(Structural type)\uFF0C\u800C\u4E0D\u662F\u540D\u4E49\u5316\u7C7B\u578B(Nominal type)\uFF0CTS \u7C7B\u578B\u7684\u8FD9\u79CD\u8BBE\u8BA1\u98CE\u683C\u662F\u76F4\u63A5\u6CBF\u7528 JS \u5BF9\u8C61\u6240\u91C7\u7528\u7ED3\u6784\u5316\u7C7B\u578B\u7684\u8BBE\u8BA1\u98CE\u683C\u3002 \u7ED3\u6784\u5316\u7C7B\u578B\u662F\u4E00\u79CD\u7F16\u7A0B\u8BBE\u8BA1\u98CE\u683C\uFF0C\u5B83\u53EA\u5173\u5FC3\u5BF9\u8C61\u6709\u54EA\u4E9B\u5C5E\u6027\uFF0C\u800C\u4E0D\u7BA1\u5C5E\u6027\u4F7F\u7528\u4EC0\u4E48\u540D\u79F0\u3002\u53EA\u8981\u4E24\u4E2A\u5BF9\u8C61\u7684\u7ED3\u6784\u6240\u63CF\u8FF0\u7684\u5C5E\u6027\u503C\u7684\u7C7B\u578B\u662F\u517C\u5BB9\u7684\uFF0C\u5C31\u8BA4\u4E3A\u4E24\u4E2A\u5BF9\u8C61\u7C7B\u578B\u662F\u517C\u5BB9\u7684\u3002</p><blockquote><p>\u7ED3\u6784\u5316\u7C7B\u578B\u4E5F\u88AB\u79F0\u4E3A\u7167\u9E2D\u5B50\u7C7B\u578B\uFF08duck typing\uFF09\uFF0C\u6307\u7684\u662F\u5F53\u770B\u5230\u4E00\u53EA\u9E1F\u8D70\u8D77\u6765\u50CF\u9E2D\u5B50\u3001\u6E38\u6CF3\u8D77\u6765\u50CF\u9E2D\u5B50\u3001\u53EB\u8D77\u6765\u4E5F\u50CF\u9E2D\u5B50\uFF0C\u90A3\u4E48\u8FD9\u53EA\u9E1F\u5C31\u53EF\u4EE5\u88AB\u79F0\u4E3A\u9E2D\u5B50\u3002 \u540D\u4E49\u5316\u7C7B\u578B\u8868\u793A\u7C7B\u578B\u82E5\u8981\u76F8\u7B49\uFF0C\u5C31\u5FC5\u987B\u5177\u6709\u76F8\u540C\u7684\u201C\u540D\u5B57\u201D</p></blockquote><p>\u6240\u4EE5\u8BF4\u5224\u65AD\u5BF9\u8C61\u7C7B\u578B\u7684\u517C\u5BB9\u6027\uFF0CTS \u7684\u884C\u4E3A\u662F\u8FD9\u6837\uFF1A<strong>\u5982\u679C A \u5BF9\u8C61\u53EF\u8D4B\u503C\u7ED9 B \u5BF9\u8C61\uFF0C\u90A3\u4E48\u4F1A\u68C0\u67E5 A \u5BF9\u8C61\u4E2D\u662F\u5426\u6709 B \u5BF9\u8C61\u58F0\u660E\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u4E14 A \u5BF9\u8C61\u4E2D\u8FD9\u4E2A\u5C5E\u6027\u7684\u7C7B\u578B\u5FC5\u987B\u662F B \u5BF9\u8C61\u5BF9\u5E94\u5C5E\u6027\u7684\u5B50\u7C7B\u578B</strong>\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4 TS \u5BF9\u7ED3\u6784\uFF08\u5BF9\u8C61\u3001\u7C7B\u3001\u6570\u7EC4\uFF09\u7684\u5C5E\u6027\u8FDB\u884C\u4E86\u534F\u53D8\u3002</p><p>\u540C\u6837\u7684\uFF0C\u5BF9\u4E8E\u6570\u7EC4\u6216\u5143\u7EC4\uFF0C\u5982\u679C\u6570\u7EC4 A \u4E2D\u5143\u7D20\u7684\u7C7B\u578B\u662F\u6570\u7EC4 B \u4E2D\u76F8\u540C\u7D22\u5F15\u5143\u7D20\u7684\u5B50\u7C7B\u578B\uFF0C\u90A3\u6570\u7EC4 A \u662F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u6570\u7EC4 B \u7684\u3002</p><blockquote><p>\u4E0D\u662F\u6240\u6709\u7F16\u7A0B\u8BED\u8A00\u90FD\u91C7\u7528\u8FD9\u79CD\u7ED3\u6784\u5316\u7C7B\u578B\u534F\u53D8\u7684\u89C4\u5219\u3002\u5728\u67D0\u4E9B\u8BED\u8A00\u4E2D\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B\u201C\u4E0D\u53D8\u201D\uFF0C\u6709\u4E9B\u8BED\u8A00\u5BF9\u53EF\u53D8\u5BF9\u8C61\u548C\u4E0D\u53EF\u53D8\u5BF9\u8C61\u6709\u4E0D\u540C\u7684\u89C4\u5219\uFF0C\u6709\u4E9B\u8BED\u8A00\u751A\u81F3\u8981\u663E\u5F0F\u6307\u5B9A\u5BF9\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u578B\u53D8\u7684\u53E5\u6CD5\u3002 \u4E0D\u5141\u8BB8\u578B\u53D8\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B\uFF0C\u5B89\u5168\u6027\u662F\u63D0\u9AD8\u4E86\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4\u7C7B\u578B\u7CFB\u7EDF\u7528\u8D77\u6765\u66F4\u70E6\u7410\uFF0C\u800C\u4E14\u4F1A\u7981\u6B62\u67D0\u4E9B\u5B9E\u9645\u4E0A\u5B89\u5168\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5 TS \u7C7B\u578B\u7CFB\u7EDF\u5728\u6613\u7528\u6027\u548C\u5B89\u5168\u6027\u4E0A\u505A\u51FA\u4E86\u6743\u8861\uFF0C\u9009\u62E9\u4E86\u534F\u53D8\u89C4\u5219\u3002[P144]</p></blockquote><div class="language-ts"><pre><code><span class="token comment">/**
 * \u7F29\u5199\u4E00\u4E2A\u5220\u9664\u7528\u6237\u7684\u51FD\u6570
 * \u5E94\u7528\u4E2D\u5B58\u5728\u4E09\u79CD\u7C7B\u578B\u7684\u7528\u6237\u5BF9\u8C61 ExistingUser NewUser LegacyUser
 */</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">delete</span> user<span class="token punctuation">.</span>id
	<span class="token keyword">return</span> user
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ExistingUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> existingUser<span class="token operator">:</span> ExistingUser <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">:</span> <span class="token number">123446</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;exsiting user&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">deleteUser</span><span class="token punctuation">(</span>existingUser<span class="token punctuation">)</span>
</code></pre></div><p>\u8981\u5224\u65AD\u51FD\u6570\u662F\u5426\u53EF\u4EE5\u63A5\u53D7 existingUser \u5165\u53C2\uFF0CTS \u7C7B\u578B\u68C0\u67E5\u7684\u53EF\u8D4B\u503C\u6027\u68C0\u67E5\u89C4\u5219\u4F1A\u68C0\u67E5 ExistingUser \u7C7B\u578B\u662F\u5426\u662F User \u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002 \u56E0\u4E3A deleteUser \u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\u53C2\u6570\uFF0C\u6839\u636E\u5BF9\u8C61\u7ED3\u6784\u5316\u7C7B\u578B\u7684\u534F\u53D8\u89C4\u5219\uFF0C\u4F1A\u5224\u65AD\u5B9E\u53C2\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u7C7B\u578B\u662F\u5426\u662F\u5F62\u53C2\u5BF9\u8C61\u5C5E\u6027\u7684\u5B50\u7C7B\u578B\u3002</p><p>\u4E0A\u4F8B\u4E2D\uFF1A\u51FD\u6570\u5F62\u53C2\u7684\u7C7B\u578B User \u662F <code>{id?:number, name: string}</code>\uFF0C\u800C\u6211\u4EEC\u4F20\u5165\u7684\u5B9E\u53C2\u7C7B\u578B ExistingUser \u662F <code>{id: number, name: string}</code>\uFF0C\u5176\u4E2D name \u5C5E\u6027\u90FD\u662F string\uFF0C\u7B26\u5408\u534F\u53D8\u89C4\u5219\uFF1B\u800C id \u5C5E\u6027\uFF0C\u4F20\u5165\u7684 number \u7C7B\u578B\u662F\u9884\u671F\u7C7B\u578B number | undefined \u7684\u5B50\u7C7B\u578B\uFF0C\u6240\u4EE5\u4F5C\u4E3A\u6574\u4F53 <code>{ id: number, name: string }</code> \u662F <code>{ id?: number, name: string }</code> \u7684\u5B50\u7C7B\u578B\uFF0C\u6240\u4EE5 <code>deleteUser(existingUser)</code> \u4E0D\u4F1A\u62A5\u9519\u3002</p><p>\u540C\u6837\u7684\uFF0C\u5982\u679C\u4F20\u5165\u4E00\u4E2A\u65B0\u7528\u6237\uFF0CNewUser \u4E2D id \u7C7B\u578B\u662F undefined, \u662F User \u4E2D\u53EF\u9009 Id \u5C5E\u6027\u7C7B\u578B number | undefined \u7684\u5B50\u7C7B\u578B\uFF0C\u6240\u4EE5 NewUser \u662F User \u7684\u5B50\u7C7B\u578B\u3002</p><div class="language-ts"><pre><code><span class="token comment">// \u8FD8\u672A\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u7684\u65B0\u7528\u6237\u6CA1\u6709 id</span>
<span class="token keyword">type</span> <span class="token class-name">NewUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newUser<span class="token operator">:</span> NewUser <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;new user&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">deleteUser</span><span class="token punctuation">(</span>newUser<span class="token punctuation">)</span>
</code></pre></div><p>\u4F46\u662F\u5982\u679C\u4F20\u5165\u4E00\u4E2A\u9057\u7559\u7684\u65E7\u7528\u6237\u6570\u636E\uFF0CLegacyUser \u4E2D\u53EF\u9009\u5C5E\u6027 id \u7684\u7C7B\u578B\u662F <code>number | string | undefined</code> \u662F User \u4E2D\u53EF\u9009\u5C5E\u6027 id \u7C7B\u578B <code>number | undefined</code> \u7684\u8D85\u7C7B\u578B\uFF0C\u6240\u4EE5\u6574\u4F53\u7C7B\u578B LegacyUser \u662F User \u7684\u8D85\u7C7B\u578B\uFF0C\u4E0D\u7B26\u5408\u7ED3\u6784\u5316\u7C7B\u578B\u534F\u53D8\u89C4\u5219\uFF0C\u4F5C\u4E3A\u51FD\u6570\u5B9E\u53C2\u4F1A\u63D0\u793A\u62A5\u9519\u3002</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">LegacyUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> legacyUser<span class="token operator">:</span> LegacyUser <span class="token operator">=</span> <span class="token punctuation">{</span>
	id<span class="token operator">:</span> <span class="token string">&#39;654321&#39;</span><span class="token punctuation">,</span>
	name<span class="token operator">:</span> <span class="token string">&#39;legacy user&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">deleteUser</span><span class="token punctuation">(</span>legacyUser<span class="token punctuation">)</span> 
<span class="token comment">// Error TS2345: Argument of type &#39;LegacyUser&#39; is not assignable to parameter of type &#39;User&#39;.</span>
<span class="token comment">// Types of property &#39;id&#39; are incompatible.</span>
<span class="token comment">//   Type &#39;string | number | undefined&#39; is not assignable to type &#39;number | undefined&#39;.</span>
<span class="token comment">//     Type &#39;string&#39; is not assignable to type &#39;number | undefined&#39;.</span>
</code></pre></div><h4 id="\u51FD\u6570\u7684\u578B\u53D8\uFF08\u53C2\u6570\u9006\u53D8\uFF0C\u8FD4\u56DE\u503C\u534F\u53D8\uFF09" tabindex="-1">\u51FD\u6570\u7684\u578B\u53D8\uFF08\u53C2\u6570\u9006\u53D8\uFF0C\u8FD4\u56DE\u503C\u534F\u53D8\uFF09 <a class="header-anchor" href="#\u51FD\u6570\u7684\u578B\u53D8\uFF08\u53C2\u6570\u9006\u53D8\uFF0C\u8FD4\u56DE\u503C\u534F\u53D8\uFF09" aria-hidden="true">#</a></h4><p>\u5BF9\u4E8E\u51FD\u6570\uFF0C\u5982\u679C\u8981\u51FD\u6570 A \u662F\u51FD\u6570 B \u7684\u5B50\u7C7B\u578B\uFF0C\u90A3\u4E48\u5FC5\u987B\u540C\u65F6\u7B26\u5408\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><ul><li>\u51FD\u6570\u53C2\u6570\u7B26\u5408\u9006\u53D8\u89C4\u5219\uFF1A\u51FD\u6570 A \u7684 this \u7C7B\u578B\u548C\u53C2\u6570\u7684\u7C7B\u578B\u90FD\u5FC5\u987B\u662F\u51FD\u6570 B \u7684 this \u7C7B\u578B\u548C\u5BF9\u5E94\u53C2\u6570\u7C7B\u578B\u7684\u8D85\u7C7B\u578B</li><li>\u51FD\u6570\u8FD4\u56DE\u503C\u7B26\u5408\u534F\u53D8\u89C4\u5219\uFF1A\u51FD\u6570 A \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u662F\u51FD\u6570 B \u8FD4\u56DE\u503C\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\u3002</li></ul><div class="language-ts"><pre><code><span class="token comment">// \u5F85\u8865\u5145\u4F8B\u5B50</span>
</code></pre></div><h2 id="\u591A\u4F59\u5C5E\u6027\u68C0\u67E5-p151" tabindex="-1">\u591A\u4F59\u5C5E\u6027\u68C0\u67E5 [P151] <a class="header-anchor" href="#\u591A\u4F59\u5C5E\u6027\u68C0\u67E5-p151" aria-hidden="true">#</a></h2><p>TS \u5728\u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u65F6\u4F1A\u505A\u534F\u53D8\uFF1A\u5982\u679C A \u5BF9\u8C61\u53EF\u8D4B\u503C\u7ED9 B \u5BF9\u8C61\uFF0C\u90A3\u4E48\u4F1A\u68C0\u67E5 A \u5BF9\u8C61\u4E2D\u662F\u5426\u6709 B \u5BF9\u8C61\u58F0\u660E\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u5E76\u4E14\u8981\u6C42 A \u5BF9\u8C61\u4E2D\u8FD9\u4E2A\u5C5E\u6027\u7C7B\u578B\u5FC5\u987B\u662F B \u5BF9\u8C61\u5BF9\u5E94\u5C5E\u6027\u7684\u5B50\u7C7B\u578B\u3002</p><p>\u4F46\u662F\u5982\u679C TS \u4E25\u5B88\u8FD9\u4E2A\u89C4\u5219\uFF0C\u800C\u4E0D\u505A\u989D\u5916\u7684\u68C0\u67E5\uFF0C\u5C06\u5BFC\u81F4\u4E00\u4E2A\u95EE\u9898\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// \u5047\u5982\u6709\u4E2A Options \u5BF9\u8C61\uFF0C\u6211\u4EEC\u628A\u5B83\u4F20\u7ED9\u7C7B\u505A\u4E9B\u914D\u7F6E</span>
<span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  cacheSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  env<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dev&#39;</span>
<span class="token punctuation">}</span>
calss <span class="token constant">API</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> options<span class="token operator">:</span> Options<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6B64\u65F6\u5B9E\u53C2\u7C7B\u578B\u7B26\u5408 Options \u7C7B\u578B\u7684\u58F0\u660E\uFF0C\u4E00\u5207\u6B63\u5E38
 */</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * \u5047\u5982\u73B0\u5728\u5B9E\u53C2\u6709\u4E00\u4E2A\u62FC\u5199\u9519\u8BEF\u7684\u5C5E\u6027 evn\uFF0CTS \u4F1A\u62A5\u9519\u63D0\u793A
 */</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
	evn<span class="token operator">:</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// Error TS2345: Argument of type &#39;{ baseURL: string; evn: string; }&#39; is not assignable to parameter of type &#39;Options&#39;.</span>
  <span class="token comment">//               Object literal may only specify known properties, and &#39;evn&#39; does not exist in type &#39;Options&#39;.</span>
  <span class="token comment">//               \u53C2\u6570\u7C7B\u578B&#39;{ baseURL: string; evn: string; }&#39;\u4E0D\u80FD\u8D4B\u503C\u7ED9\u7C7B\u578B\u4E3A&#39;Options&#39;\u7684\u53C2\u6570\u3002</span>
  <span class="token comment">//               \u5BF9\u8C61\u5B57\u9762\u91CF\u53EA\u80FD\u6307\u5B9A\u5DF2\u77E5\u7684\u5C5E\u6027\uFF0C\u800C&#39;evn&#39;\u5728\u7C7B\u578B&#39;Options&#39;\u4E2D\u4E0D\u5B58\u5728\u3002</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6839\u636E TS \u5BF9\u8C61\u7C7B\u578B\u7684\u53EF\u8D4B\u503C\u6027\u89C4\u5219\uFF0C\u5206\u6790\u8FD9\u4E2A\u5B9E\u53C2\u7C7B\u578B\u4E0E\u5F62\u53C2\u7C7B\u578B\u7684\u517C\u5BB9\u6027\uFF1A</p><ul><li>\u9884\u671F\u7684\u5F62\u53C2\u7C7B\u578B A \u662F <code>{ baseURL: string, cacheSize?: number, env?: &#39;prod&#39; | &#39;dev&#39;</code>\uFF0C\u800C\u4F20\u5165\u7684\u5B9E\u53C2\u7C7B\u578B B \u662F <code>{baseURL: string, evn: string }</code></li><li>\u6839\u636E\u7ED3\u6784\u5316\u7C7B\u578B\u534F\u53D8\u7684\u89C4\u5219\uFF0CB \u4E2D\u6709 A \u5728\u5FC5\u987B\u7684\u7C7B\u578B <code>baseURL: string</code>\uFF0C\u5BF9 A \u4E2D\u5176\u5B83\u5C5E\u6027\u7C7B\u578B\u90FD\u662F\u53EF\u9009\u7684\uFF0C\u6240\u4EE5\u4ECE\u8FD9\u91CC\u5224\u65AD B \u662F A \u7684\u5B50\u7C7B\u578B\uFF0C<code>B &lt;: A</code></li></ul><p>\u4F20\u5165\u51FD\u6570\u7684\u5B9E\u53C2\u7C7B\u578B\u662F\u5F62\u53C2\u7C7B\u578B\u7684\u5B50\u7C7B\u578B\uFF0CTS \u4E3A\u4EC0\u4E48\u8FD8\u8981\u62A5\u544A\u9519\u8BEF\uFF1F</p><p>\u8FD9\u5C31\u662F TS \u7C7B\u578B\u68C0\u67E5\u7684\u53E6\u4E00\u4E2A\u89C4\u5219\uFF1A\u591A\u4F59\u5C5E\u6027\u68C0\u67E5\u3002\u5177\u4F53\u884C\u4E3A\u662F\uFF1A</p><ul><li>\u5F53\u5C1D\u8BD5\u628A\u4E00\u4E2A<strong>\u65B0\u9C9C</strong>\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B(fresh object literal type) T \u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u7C7B\u578B U \u65F6\uFF0C\u5982\u679C T \u4E2D\u6709\u4E0D\u5728 U \u4E2D\u58F0\u660E\u7684\u5C5E\u6027\uFF0CTS \u5C06\u62A5\u9519\u3002</li></ul><h3 id="\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B-fresh-object-literal-type" tabindex="-1">\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B(fresh object literal type) <a class="header-anchor" href="#\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B-fresh-object-literal-type" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u7279\u522B\u6CE8\u610F\u8FD9\u4E2A <strong>\u65B0\u9C9C</strong> \u7684\u7406\u89E3\uFF1A</p><ul><li>\u65B0\u9C9C\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\uFF1A\u6307\u7684\u662F TS \u76F4\u63A5\u4ECE\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u63A8\u5BFC\u51FA\u6765\u7684\u7C7B\u578B\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\u6709\u7C7B\u578B\u65AD\u8A00\uFF0C\u6216\u8005\u628A\u5B83\u8D4B\u503C\u7ED9\u4E86\u4E00\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5B83\u5C06\u4E0D\u518D\u65B0\u9C9C\uFF0C\u5B83\u7684\u7C7B\u578B\u4E5F\u4F1A\u88AB\u62D3\u5BBD\u4E3A\u5E38\u89C4\u7684\u5BF9\u8C61\u7C7B\u578B\u3002</li></ul><div class="language-ts"><pre><code><span class="token comment">// \u5B9E\u53C2\u662F\u65B0\u9C9C\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9E\u53C2\u662F\u65B0\u9C9C\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u5C06\u6267\u884C\u591A\u4F59\u5C5E\u6027\u68C0\u67E5\u548C\u53EF\u8D4B\u503C\u6027\u68C0\u67E5\uFF0C\u62A5\u9519</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  badEnv<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Error TS2345</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9E\u53C2\u6267\u884C\u4E86\u7C7B\u578B\u65AD\u8A00\uFF0C\u4E0D\u518D\u662F\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4E0D\u4F1A\u6267\u884C\u591A\u4F59\u5C5E\u6027\u68C0\u67E5\uFF0C\u53EA\u6267\u884C\u53EF\u8D4B\u503C\u6027\u68C0\u67E5\uFF08\u89C1\u4E0A\u4F8B\u5206\u6790\u8FC7\u7A0B\uFF09\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u62A5\u9519\u3002</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  badEnv<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> Options<span class="token punctuation">)</span>

<span class="token comment">// \u5B57\u9762\u91CF\u7C7B\u578B\u8D4B\u503C\u7ED9\u4E86\u53D8\u91CF\uFF0C\u4E0D\u518D\u662F\u65B0\u9C9C\u5BF9\u8C61\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4E0D\u4F1A\u6267\u884C\u591A\u4F59\u5C5E\u6027\u68C0\u67E5\uFF0C\u53EA\u6267\u884C\u53EF\u8D4B\u503C\u6027\u68C0\u67E5\uFF08\u89C1\u4E0A\u4F8B\u5206\u6790\u8FC7\u7A0B\uFF09\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u62A5\u9519\u3002</span>
<span class="token keyword">let</span> badOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  badEnv<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span>badOptions<span class="token punctuation">)</span>

<span class="token comment">// \u663E\u5F0F\u6CE8\u89E3 options \u7684\u7C7B\u578B\u4E3A Options\uFF0C\u6B64\u65F6\u8D4B\u503C\u7684\u4ECD\u662F\u65B0\u9C9C\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u5E76\u5728 let options \u53D8\u91CF\u521D\u59CB\u5316\u65F6\u5C31\u6267\u884C\u591A\u4F59\u5C5E\u6027\u68C0\u67E5\u548C\u53EF\u8D4B\u503C\u6027\u68C0\u67E5\uFF0C\u800C\u4E0D\u662F\u5728\u51FD\u6570\u4F20\u5165\u5B9E\u53C2\u65F6\u68C0\u67E5\u3002</span>
<span class="token keyword">let</span> options<span class="token operator">:</span> Options <span class="token operator">=</span> <span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;https://api.site.com&#39;</span><span class="token punctuation">,</span>
  badEnv<span class="token operator">:</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Error TS2345</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name"><span class="token constant">API</span></span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09-p159" tabindex="-1">\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09[p159] <a class="header-anchor" href="#\u5168\u9762\u6027\u68C0\u67E5\uFF08\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09-p159" aria-hidden="true">#</a></h2><blockquote><p>\u7A0B\u5E8F\u5458\u7761\u89C9\u4E4B\u524D\u4F1A\u5728\u5E8A\u5934\u67DC\u4E0A\u653E\u4E24\u4E2A\u676F\u5B50\uFF0C\u4E00\u4E2A\u676F\u5B50\u88C5\u6EE1\u6C34\uFF0C\u9632\u6B62\u53E3\u6E34\uFF1B\u53E6\u4E00\u4E2A\u676F\u5B50\u7A7A\u7740\uFF0C\u9632\u6B62\u4E0D\u6E34\u3002 -----\u4F5A\u540D</p></blockquote><p>\u5168\u9762\u6027\u68C0\u67E5\uFF08\u4E5F\u79F0\u4E3A\u7A77\u5C3D\u6027\u68C0\u67E5\uFF09\u4E5F\u662F TS \u7C7B\u578B\u68C0\u67E5\u4E2D\u7684\u4E00\u9879\uFF0C\u5B83\u4F1A\u5728\u53D1\u73B0\u7F3A\u5C11\u67D0\u79CD\u5206\u652F\u5224\u65AD\u7684\u60C5\u51B5\u4E0B\u62A5\u9519\u63D0\u9192\uFF0C\u786E\u4FDD\u6240\u6709\u5206\u652F\u60C5\u51B5\u90FD\u88AB\u8986\u76D6\u3002\u8FD9\u6837\u80FD\u8BA9\u4EE3\u7801\u907F\u514D\u5F88\u591A\u95EE\u9898\u3002</p><blockquote><p>\u8FD9\u4E2A\u6982\u5FF5\u6E90\u81EA\u57FA\u4E8E\u6A21\u5F0F\u5339\u914D\u7684\u8BED\u8A00\uFF0C\u5982 Haskell OCaml \u7B49\u3002</p></blockquote><p>\u4E0D\u7BA1\u4F7F\u7528\u54EA\u79CD\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5(<code>switch / if / throw</code> \u7B49)\uFF0CTS \u90FD\u80FD\u5728\u672A\u6DB5\u76D6\u6240\u6709\u60C5\u51B5\u65F6\u505A\u51FA\u63D0\u9192\u3002</p><div class="language-ts"><pre><code><span class="token comment">// Error TS7030: Not all code paths return a value. \u4E0D\u662F\u6240\u6709\u7684\u4EE3\u7801\u8DEF\u5F84\u90FD\u8FD4\u56DE\u503C\u3002</span>
<span class="token keyword">function</span> <span class="token function">isBig</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">All</span> <span class="token operator">=</span> Foo <span class="token operator">|</span> Bar

<span class="token comment">// Error TS7030: Not all code paths return a value. \u4E0D\u662F\u6240\u6709\u7684\u4EE3\u7801\u8DEF\u5F84\u90FD\u8FD4\u56DE\u503C\u3002</span>
<span class="token keyword">function</span> <span class="token function">handleValue</span><span class="token punctuation">(</span>val<span class="token operator">:</span> All<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;foo&#39;</span><span class="token operator">:</span>
		<span class="token comment">// do something</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span>type
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u8981\u89E3\u51B3\u4E0A\u9762\u7684\u62A5\u9519\uFF0C\u5FC5\u987B\u7A77\u4E3E\u8054\u5408\u7C7B\u578B All \u4E2D type \u7684\u7C7B\u578B
 */</span>
 <span class="token keyword">function</span> <span class="token function">handleValue</span><span class="token punctuation">(</span>val<span class="token operator">:</span> All<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;foo&#39;</span><span class="token operator">:</span>
      <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Foo</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token keyword">type</span>
		<span class="token class-name"><span class="token keyword">case</span></span> <span class="token string">&#39;bar&#39;</span><span class="token operator">:</span>
		  <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Bar</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span>type
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u4E0A\u9762 handleValue \u51FD\u6570\u5BF9\u5206\u652F\u7A77\u5C3D\uFF0C\u5373\u4FBF\u540E\u9762\u6709\u4E00\u5929\u4F60\u7684\u540C\u4E8B\u6539\u4E86 All \u7684\u7C7B\u578B\uFF1Atype All = Foo | Bar | Baz\uFF0C\u4F46\u5B83\u5FD8\u8BB0\u4E86\u5728 \u5728 handleValue \u91CC\u9762\u52A0\u4E0A\u9488\u5BF9 Baz \u7684\u5904\u7406\u903B\u8F91\u3002\u4ECD\u7136\u4F1A\u63D0\u793A Error TS7030
 * \u4F46\u662F\u5982\u679C\u5BF9\u4E8E\u4F7F\u7528\u4E86 default \u9ED8\u8BA4\u5206\u652F\u65F6\uFF0C\u60C5\u51B5\u5C31\u4E0D\u4E00\u6837\u4E86\u3002\u4E0A\u8FF0\u9519\u8BEF\u4F1A\u6267\u884Cdefault\uFF0C\u9690\u85CF\u4E86\u9519\u8BEF\u3002
 */</span>
<span class="token keyword">function</span> <span class="token function">handleValue</span><span class="token punctuation">(</span>val<span class="token operator">:</span> All<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;foo&#39;</span><span class="token operator">:</span>
      <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Foo</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token keyword">type</span>
		<span class="token class-name"><span class="token keyword">case</span></span> <span class="token string">&#39;bar&#39;</span><span class="token operator">:</span>
		  <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Bar</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token keyword">type</span>
    <span class="token class-name"><span class="token keyword">default</span></span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A hack \u7684\u65B9\u6CD5\uFF0C\u5728 default \u5206\u652F\u4E2D\u505A\u4E00\u4E2A\u515C\u5E95\u5904\u7406\uFF1A \u5C06 val \u8D4B\u503C\u7ED9\u4E00\u4E2A never \u7C7B\u578B\u53D8\u91CF\u3002
 * \u5982\u679C val \u88AB\u7A77\u5C3D (exhaust)\u4E86\uFF0C\u90A3\u5728 default \u5206\u652F\uFF0Cval \u7684\u7C7B\u578B\u81EA\u7136\u5C31\u662F never\uFF0C\u8D4B\u503C\u7ED9 exhaustiveCheck \u53D8\u91CF\u4E0D\u4F1A\u62A5\u9519\u3002
 * \u5982\u679C\u4E34\u65F6\u589E\u52A0\u4E86 ALL \u7684\u7C7B\u578B\uFF0C\u53C8\u6CA1\u6709\u6DFB\u52A0\u5BF9\u5E94\u7684\u5904\u7406\u903B\u8F91\u65F6\uFF0C\u9057\u6F0F\u7684\u7C7B\u578B\u4F1A\u8FDB\u5165 default \u5206\u652F\uFF0C\u4E00\u4E2A\u975E never \u7C7B\u578B\u7684\u53D8\u91CF\u8D4B\u503C\u7ED9 never \u7C7B\u578B\u5C06\u4F1A\u62A5\u9519\u3002
 * \u6240\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u529E\u6CD5\uFF0C\u5BF9\u4F7F\u7528\u4E86 default \u5206\u652F\u7684\u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u786E\u4FDD switch \u603B\u662F\u7A77\u5C3D (exhaust) \u4E86\u6240\u6709 All \u7684\u7C7B\u578B\u3002
 */</span>
<span class="token keyword">function</span> <span class="token function">handleValue</span><span class="token punctuation">(</span>val<span class="token operator">:</span> All<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;foo&#39;</span><span class="token operator">:</span>
      <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Foo</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token keyword">type</span>
		<span class="token class-name"><span class="token keyword">case</span></span> <span class="token string">&#39;bar&#39;</span><span class="token operator">:</span>
		  <span class="token comment">// \u8FD9\u91CC val \u7C7B\u578B\u88AB\u7EC6\u5316\u4E3A Bar</span>
		<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token keyword">type</span>
    <span class="token class-name"><span class="token keyword">default</span></span><span class="token operator">:</span>
      <span class="token keyword">const</span> exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> val
      <span class="token keyword">return</span> <span class="token keyword">null</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u6DFB\u52A0\u4E00\u4E2A\u4E66\u4E2D\u9010\u6E10\u5B8C\u5584\u7C7B\u578B\u68C0\u67E5\u7684\u4F8B\u5B50\u3002</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Weekday</span> <span class="token operator">=</span> <span class="token string">&#39;Mon&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Tue&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Wed&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Thu&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Fri&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Day</span> <span class="token operator">=</span> Weekday <span class="token operator">|</span> <span class="token string">&#39;Sat&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Sun&#39;</span>

<span class="token keyword">function</span> <span class="token function">getNextDay</span><span class="token punctuation">(</span>w<span class="token operator">:</span> Weekday<span class="token punctuation">)</span><span class="token operator">:</span> Day <span class="token punctuation">{</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string">&#39;Mon&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token string">&#39;Tue&#39;</span>
		<span class="token keyword">case</span> <span class="token string">&#39;Tue&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token string">&#39;Wed&#39;</span>
		<span class="token keyword">case</span> <span class="token string">&#39;Wed&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token string">&#39;Thu&#39;</span>
		<span class="token keyword">case</span> <span class="token string">&#39;Thu&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token string">&#39;Fri&#39;</span>
		<span class="token keyword">case</span> <span class="token string">&#39;Fri&#39;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token string">&#39;Sat&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u5927\u90E8\u5206\u4EBA\u4F1A\u6539\u9020\u6210\u4F7F\u7528\u5BF9\u8C61\u6620\u5C04\u7684\u65B9\u5F0F\u3002
 * \u4EE3\u7801\u7F16\u5199\u88AB\u4E2D\u65AD\u4E86\uFF0C\u56DE\u5934\u53C8\u5FD8\u8BB0\u7EE7\u7EED\u8865\u5168\u65E5\u671F\uFF0C\u90A3\u4E0B\u6B21\u76F4\u63A5\u8BBF\u95EE\u5176\u5B83\u661F\u671F\u65F6\u5C31\u4F1A\u62A5\u9519\u3002
 */</span>
<span class="token keyword">let</span> nextDay <span class="token operator">=</span> <span class="token punctuation">{</span>
	Mon<span class="token operator">:</span> <span class="token string">&#39;Tue&#39;</span>
<span class="token punctuation">}</span>
nextDay<span class="token punctuation">.</span>Mon
nextDay<span class="token punctuation">.</span>Tue <span class="token comment">// Error TS2339: Property &#39;Tue&#39; does not exist on type &#39;{ Mon: string; }&#39;.</span>

<span class="token comment">/**
 * \u867D\u7136\u5728\u8BBF\u95EE\u65F6\u6709\u62A5\u9519\u63D0\u793A\uFF0C\u4F46\u662F\u5982\u679C\u52A0\u5F3A\u5BF9 nextDay \u58F0\u660E\u65F6\u7684\u7C7B\u578B\u5B89\u5168\u63AA\u65BD\uFF0C\u53EF\u4EE5\u8BA9\u9519\u8BEF\u63D0\u793A\u66F4\u4E3A\u53CB\u597D
 * 
 * \u6211\u4EEC\u7684\u9884\u671F\u662F nextDay \u5BF9\u8C61\u5C5E\u6027\u7684\u952E\u5FC5\u987B\u662F Weekday \u7C7B\u578B\uFF0C\u5C5E\u6027\u7684\u503C\u662F Day \u7C7B\u578B\uFF0C\u6B64\u65F6\u8981\u5982\u4F55\u8FDB\u884C\u7C7B\u578B\u6CE8\u89E3\u5462\uFF1F
 * 
 * \u4F7F\u7528\u5E38\u89C4\u7684\u5BF9\u8C61\u7684\u7D22\u5F15\u7C7B\u578B\u7B7E\u540D\uFF0C\u53EA\u80FD\u7EA6\u675F\u5C5E\u6027\u7684\u952E\u4E3A \`string | number | symbol\` \u7C7B\u578B\uFF0C\u4E0D\u80FD\u7EA6\u675F\u4E3A\u9884\u671F\u7684 Weekday \u7C7B\u578B\uFF0C\u4E0D\u80FD\u7EA6\u675F\u4E3A\u9884\u671F\u7684\u661F\u671F\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NextDay</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Day
<span class="token punctuation">}</span>
<span class="token keyword">let</span> nextDay<span class="token operator">:</span> NextDay <span class="token operator">=</span> <span class="token punctuation">{</span>
	Mon<span class="token operator">:</span> <span class="token string">&#39;Tue&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528 TS \u5185\u7F6E\u7684 Record \u5DE5\u5177\u7C7B\u578B\uFF0C\u6765\u63CF\u8FF0\u952E\u503C\u6709\u6620\u5C04\u5173\u7CFB\u7684\u5BF9\u8C61
 * Record \u7C7B\u578B\u76F8\u6BD4\u7D22\u5F15\u7B7E\u540D\u7684\u533A\u522B\uFF0C\u4F7F\u7528 Record \u53EF\u4EE5\u7EA6\u675F\u5BF9\u8C61\u7684\u952E\u4E3A string \u6216 number \u7684\u5B50\u7C7B\u578B\u3002
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NextDay</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>Weekday<span class="token punctuation">,</span> Day<span class="token operator">&gt;</span>
<span class="token comment">// \u6B64\u65F6\u5728\u5BF9\u8C61\u58F0\u660E\u65F6\u5C31\u4F1A\u63D0\u793A\u62A5\u9519\uFF0C\u800C\u4E0D\u662F\u5BF9\u8C61\u8BBF\u95EE\u65F6\u624D\u62A5\u9519\u63D0\u793A\uFF0C\u5E76\u4E14\u9519\u8BEF\u4FE1\u606F\u66F4\u53CB\u597D</span>
<span class="token comment">// Error TS2739: Type &#39;{ Mon: &quot;Tue&quot;; }&#39; is missing the following properties from type &#39;NextDay&#39;: Tue, Wed, Thu, Fri</span>
<span class="token keyword">let</span> nextDay<span class="token operator">:</span> NextDay <span class="token operator">=</span> <span class="token punctuation">{</span>
	Mon<span class="token operator">:</span> <span class="token string">&#39;Tue&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528 TS \u7684 in \u8FD0\u7B97\u7B26\uFF0C\u58F0\u660E\u6620\u5C04\u7C7B\u578B\uFF0C\u8FD9\u4E5F\u662F Record \u7C7B\u578B\u5185\u90E8\u5B9E\u73B0\u7684\u6E90\u7801\u3002
 */</span>
<span class="token keyword">type</span> <span class="token class-name">NextDay</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> Weekday<span class="token punctuation">]</span><span class="token operator">:</span> Day
<span class="token punctuation">}</span>
<span class="token comment">// Error TS2739: Type &#39;{ Mon: &quot;Tue&quot;; }&#39; is missing the following properties from type &#39;NextDay&#39;: Tue, Wed, Thu, Fri</span>
<span class="token keyword">let</span> nextDay<span class="token operator">:</span> NextDay <span class="token operator">=</span> <span class="token punctuation">{</span>
	Mon<span class="token operator">:</span> <span class="token string">&#39;Tue&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5B8C\u6574\u793A\u4F8B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Weekday</span> <span class="token operator">=</span> <span class="token string">&#39;Mon&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Tue&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Wed&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Thu&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Fri&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Day</span> <span class="token operator">=</span> Weekday <span class="token operator">|</span> <span class="token string">&#39;Sat&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Sun&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">NextDay</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>Weekday<span class="token punctuation">,</span> Day<span class="token operator">&gt;</span>
<span class="token keyword">let</span> nextDay<span class="token operator">:</span> NextDay <span class="token operator">=</span> <span class="token punctuation">{</span>
	Mon<span class="token operator">:</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span>
	Tue<span class="token operator">:</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span>
	Wed<span class="token operator">:</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span>
	Thu<span class="token operator">:</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span>
	Fri<span class="token operator">:</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5EF6\u4F38 Record \u7C7B\u578B\u7684\u5B9E\u73B0
 * keyof any \u7ED3\u679C\u662F string | number | symbol
 * K extends keyof any \u662F\u6CDB\u578B\u7EA6\u675F\uFF0CK \u53EA\u80FD\u4E3A  string | number | symbol \u8054\u5408\u7C7B\u578B\u7684\u5B50\u7C7B\u578B
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
</code></pre></div>`,64),o=[e];function c(l,r,k,i,u,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
