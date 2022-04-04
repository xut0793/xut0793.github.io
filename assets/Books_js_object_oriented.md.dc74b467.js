import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";var p="/assets/js_08.3dd6f806.jpg";const b='{"title":"\u300AJavaScript \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u300B","description":"","frontmatter":{},"headers":[{"level":2,"title":"P5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1","slug":"p5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1"},{"level":2,"title":"P14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316","slug":"p14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316"},{"level":3,"title":"P21: \u6307\u6570\u8868\u793A\u6CD5","slug":"p21-\u6307\u6570\u8868\u793A\u6CD5"},{"level":3,"title":"P56\uFF1AparseInt(string, radix)","slug":"p56\uFF1Aparseint-string-radix"},{"level":2,"title":"P57\uFF1AparseFloat(string)","slug":"p57\uFF1Aparsefloat-string"},{"level":2,"title":"P59: URI/URL\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801","slug":"p59-uri-url\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801"},{"level":2,"title":"P85: \u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4","slug":"p85-\u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4"},{"level":2,"title":"P96: \u5185\u7F6E\u5BF9\u8C61 built-in Object","slug":"p96-\u5185\u7F6E\u5BF9\u8C61-built-in-object"},{"level":2,"title":"P180\uFF1A \u7EE7\u627F\u7684\u5B9E\u73B0","slug":"p180\uFF1A-\u7EE7\u627F\u7684\u5B9E\u73B0"},{"level":2,"title":"P248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F","slug":"p248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F"}],"relativePath":"Books/js_object_oriented.md"}',e={},o=t('<h1 id="\u300Ajavascript-\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u300B" tabindex="-1">\u300AJavaScript \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u300B <a class="header-anchor" href="#\u300Ajavascript-\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u300B" aria-hidden="true">#</a></h1><p><img src="'+p+`" alt=""> 2013\u5E743\u6708\u7B2C1\u7248</p><p>\u8FD9\u672C\u4E66\u7684\u91CD\u70B9\u7AE0\u8282\u96C6\u4E2D\u5728 JS \u6838\u5FC3\u7684\u6982\u5FF5\u4E0A\uFF1A</p><ul><li>\u51FD\u6570\uFF1A\u51FD\u6570\u3001\u4F5C\u7528\u57DF\u3001\u95ED\u5305</li><li>\u5BF9\u8C61\uFF1A\u5BF9\u8C61\u3001\u539F\u578B\u3001\u7EE7\u627F</li></ul><p>\u53E6\u5916\u8FD8\u6709\u4E00\u7AE0\u5BF9\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u7684 BOM DOM \u8BB2\u89E3\u4EE5\u503C\u5F97\u770B\u770B\u3002</p><p><div class="table-of-contents"><ul><li><a href="#p5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1">P5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1</a></li><li><a href="#p14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316">P14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316</a><ul><li><a href="#p21-\u6307\u6570\u8868\u793A\u6CD5">P21: \u6307\u6570\u8868\u793A\u6CD5</a></li><li><a href="#p56\uFF1Aparseint-string-radix">P56\uFF1AparseInt(string, radix)</a></li></ul></li><li><a href="#p57\uFF1Aparsefloat-string">P57\uFF1AparseFloat(string)</a></li><li><a href="#p59-uri-url\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801">P59: URI/URL\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801</a></li><li><a href="#p85-\u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4">P85: \u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4</a></li><li><a href="#p96-\u5185\u7F6E\u5BF9\u8C61-built-in-object">P96: \u5185\u7F6E\u5BF9\u8C61 built-in Object</a></li><li><a href="#p180\uFF1A-\u7EE7\u627F\u7684\u5B9E\u73B0">P180\uFF1A \u7EE7\u627F\u7684\u5B9E\u73B0</a></li><li><a href="#p248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F">P248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F</a></li></ul></div></p><h2 id="p5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1" tabindex="-1">P5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1 <a class="header-anchor" href="#p5\uFF1A\u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>OOP \u9762\u5411\u5BF9\u8C61\u7A0B\u5E8F\u8BBE\u8BA1\u4E2D\u7684\u6982\u5FF5\uFF1A</p><ul><li>\u5BF9\u8C61\uFF1A\u5C5E\u6027\u548C\u65B9\u6CD5</li><li>\u7C7B</li><li>\u5C01\u88C5</li><li>\u805A\u5408</li><li>\u591A\u6001</li><li>\u7EE7\u627F</li></ul><p>\u5BF9\u8C61\uFF1A\u901A\u8FC7 \u300AJavaScript \u4E13\u5BB6\u7F16\u7A0B\u300B\u4E00\u4E66\u6211\u4EEC\u4E86\u89E3\u5230\uFF0C\u5728\u7F16\u7A0B\u8303\u7574\u5185\uFF0C\u5BF9\u8C61\u662F\u5BF9\u73B0\u5B9E\u4E2D\u4E8B\u7269\u7684\u4E00\u79CD\u9690\u55BB\u8868\u8FBE\uFF0C\u4E5F\u5C31\u662F\u672C\u6587\u4E2D\u6240\u8BF4\u7684\uFF0C\u6240\u8C13\u5BF9\u8C61\uFF0C\u5B9E\u8D28\u4E0A\u662F\u6307\u73B0\u5B9E\u4E8B\u7269\u5728\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u4E2D\u7684\u8868\u73B0\u5F62\u5F0F\u3002\u800C\u8FD9\u91CC\u7684\u201C\u4E8B\u7269\u201D\u53EF\u4EE5\u662F\u4EFB\u4F55\u5BA2\u89C2\u5B58\u5728\u7684\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u67D0\u4E9B\u8F83\u4E3A\u62BD\u8C61\u7684\u6982\u5FF5\u3002\u6240\u4EE5\u5BF9\u8C61\u7684\u547D\u540D\u901A\u5E38\u662F\u540D\u8BCD\u5F62\u5F0F\uFF0C\u4EE3\u8868\u67D0\u7C7B\u4E8B\u7269\u3002</p><p>\u7C7B\uFF1A\u662F\u5BF9\u540C\u4E00\u7C7B\u5BF9\u8C61\u4E2D\u62BD\u8C61\u51FA\u6765\u5171\u540C\u7684\u90E8\u5206\u7EC4\u6210\u7684\u5BF9\u8C61\u6A21\u677F\u3002\u5728\u4F20\u7EDF\u7684\u9762\u5411\u5BF9\u8C61\u8BED\u8A00 C++ / JAVA\uFF0C\u5BF9\u8C61\u90FD\u662F\u57FA\u4E8E\u7C7B\u8FD9\u79CD\u6A21\u677F\u521B\u5EFA\u7684\u3002\u4F46\u662F\u5728 JS \u4E2D\uFF0C\u538B\u6839\u513F\u6CA1\u6709\u8FD9\u79CD\u7C7B\u7684\u6982\u5FF5\uFF0C\u8BE5\u8BED\u8A00\u7684\u4E00\u8282\u90FD\u662F\u57FA\u4E8E\u5BF9\u8C61\u7684\uFF0C\u5BF9\u8C61\u7684\u521B\u5EFA\u662F\u57FA\u4E8E\u53E6\u4E00\u5BF9\u8C61\u7684\uFF0CJS \u6240\u4F9D\u9760\u7684\u662F\u4E00\u5957\u57FA\u4E8E\u539F\u578B\u7684\u7CFB\u7EDF\u3002\uFF08\u539F\u578B\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF09\u3002</p><blockquote><p>\u6240\u4EE5\u6211\u4EEC\u8981\u660E\u767D\uFF0C\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u5B9E\u73B0\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u4E00\u79CD\u662F\u57FA\u4E8E\u7C7B\u7684\u9762\u5411\u5BF9\u8C61\u5B9E\u73B0\uFF0C\u4E00\u79CD\u662F\u57FA\u4E8E\u539F\u578B\u7684\u9762\u5411\u5BF9\u8C61\u7684\u5B9E\u73B0\u3002<br> \u8FD9\u91CC\u8BF4 JS \u6CA1\u6709\u7C7B\u7684\u6982\u5FF5\u8981\u4E0E ES6\u8BED\u6CD5\u4E2D class \u8BED\u6CD5\u6982\u5FF5\u533A\u5206\u5F00\u3002\u901A\u8FC7 JS \u8BED\u8A00\u7684\u6F14\u5316\u5386\u53F2\uFF0C\u4F60\u5C31\u4F1A\u53D1\u73B0\uFF0CJS \u8FD9\u95E8\u8BED\u8A00\u59CB\u7EC8\u5728\u4F7F\u7528\u539F\u578B\u8FD9\u5957\u884C\u7CFB\u7EDF\u53BB\u6A21\u62DF\u5B9E\u73B0 JAVA \u7684\u8BED\u8A00\u8BBE\u65BD\u3002</p></blockquote><p>\u5C01\u88C5\uFF1A\u4E24\u5C42\u610F\u601D</p><ul><li>\u5C06\u5BF9\u8C61\u7684\u7279\u5F81\u548C\u8868\u73B0\u901A\u8FC7\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u8FDB\u884C\u5C01\u88C5\uFF0C\u7EC4\u6210\u4E00\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\u3002\uFF08\u628A\u62BD\u8C61\u51FA\u6765\u7684\u6570\u636E\uFF08\u5C5E\u6027\uFF09\u548C\u5BF9\u6570\u636E\u7684\u64CD\u4F5C\uFF08\u65B9\u6CD5\uFF09\u5C01\u88C5\u6210\u5BF9\u8C61\uFF09</li><li>\u53E6\u4E00\u5C42\u5C01\u88C5\u7684\u610F\u601D\u6307\u4FE1\u606F\u7684\u9690\u85CF\uFF0C\u5373\u6570\u636E\u88AB\u4FDD\u62A4\u5728\u5BF9\u8C61\u5185\u90E8\uFF0C\u6570\u636E\u8BBF\u95EE\u53EA\u80FD\u901A\u8FC7\u88AB\u6388\u6743\u7684\u7279\u6743\u65B9\u6CD5\u6765\u8BBF\u95EE\u5BF9\u8C61\u6210\u5458\uFF08\u5BF9\u8C61\u5C5E\u6027\uFF09\u3002\u4E5F\u5305\u62EC\u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u53EF\u89C1\u6027\u3002</li></ul><p>\u805A\u5408\uFF1A\u6240\u8C13\u805A\u5408\uFF0C\u4E5F\u53EB\u7EC4\u5408\u3002\u5B9E\u9645\u4E0A\u662F\u6307\u5C06\u51E0\u4E2A\u73B0\u6709\u5BF9\u8C61\u5408\u5E76\u6210\u4E00\u4E2A\u65B0\u5BF9\u8C61\u7684\u8FC7\u7A0B\u3002\u5F3A\u8C03\u5C06\u591A\u4E2A\u5BF9\u8C61\u5408\u800C\u4E3A\u4E00\u7684\u80FD\u529B\u3002\u8FD9\u4E2A\u6982\u5FF5\u5728 JS \u5B9E\u8DF5\u8F83\u5C11\uFF0C\u5982\u679C\u8981\u8FBE\u5230\u7EC4\u5408\u591A\u4E2A\u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u6548\u679C\uFF0C\u4EE5\u524D\u53EF\u4EE5\u9010\u4E2A\u5BF9\u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5\u8FDB\u884C\u904D\u5386\u62F7\u8D1D\uFF0C\u4F46\u73B0\u4EE3 ES6 \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Object.assign()</code>\u7B80\u5355\u5B9E\u73B0\u5BF9\u8C61\u6D45\u62F7\u8D1D\u3002</p><p>\u7EE7\u627F\uFF1A\u7EE7\u627F\u7684\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u5B9E\u73B0\u5BF9\u73B0\u6709\u4EE3\u7801\u7684\u91CD\u7528\u3002\u5728\u4F20\u7EDF OOP \u4E2D\uFF0C\u7EE7\u627F\u90FD\u662F\u6307\u7C7B\u4E0E\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u4F46\u5728JS\u4E2D\u7531\u4E8E\u4E0D\u5B58\u5728\u7C7B\u7684\u6982\u5FF5\uFF0C\u7EE7\u627F\u53EA\u53D1\u751F\u5728\u5BF9\u8C61\u4E4B\u95F4\u3002 \u591A\u6001\uFF1A\u51FD\u6570\u91CD\u8F7D\uFF08\u57FA\u4E8E JS \u65E0\u9650\u5236\u51FD\u6570\u53C2\u6570\u6570\u91CF\u7684\u5B9E\u73B0\uFF0Carguments\u548C ES6\u7684rest\u53C2\u6570\uFF09\u548C\u65B9\u6CD5\u8986\u5199\uFF08\u57FA\u4E8E JS \u5728\u539F\u578B\u94FE\u67E5\u627E\u6700\u8FD1\u7684\u5C5E\u6027\u5B9E\u73B0\uFF09\u3002</p><h2 id="p14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316" tabindex="-1">P14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316 <a class="header-anchor" href="#p14\uFF1A\u53D8\u91CF\u521D\u59CB\u5316" aria-hidden="true">#</a></h2><p>\u6240\u8C13\u53D8\u91CF\u521D\u59CB\u5316\uFF0C\u5B9E\u9645\u4E0A\u6307\u7684\u662F\u53D8\u91CF\u9996\u6B21\u88AB\u8D4B\u503C\u7684\u65F6\u673A\u3002\u53EF\u4EE5\u6709\u4E24\u79CD\u65B9\u6CD5\u9009\u62E9\uFF1A</p><ul><li>\u53D8\u91CF\u5148\u58F0\u660E\uFF0C\u540E\u8D4B\u503C <code>let i; i = 1;</code></li><li>\u58F0\u660E\u548C\u8D4B\u503C\u5728\u4E00\u6761\u8BED\u53E5\u4E2D\u5B8C\u6210 <code>let i = 1;</code></li></ul><h3 id="p21-\u6307\u6570\u8868\u793A\u6CD5" tabindex="-1">P21: \u6307\u6570\u8868\u793A\u6CD5 <a class="header-anchor" href="#p21-\u6307\u6570\u8868\u793A\u6CD5" aria-hidden="true">#</a></h3><p>\u5728 JS \u4E2D\uFF0C\u6570\u503C\u7C7B\u578B\u53EF\u4EE5\u7528\u6307\u6570\u5F62\u5F0F\u8868\u793A\uFF1A1e1 \u6216\u8005 1e+1\u3002\u5728\u7406\u89E3\u4E0A\u53EF\u4EE5\u8FD9\u6837\u8BA4\u4E3A\uFF1A</p><ul><li>2e+3: \u5728\u6570\u5B57\u540E\u9762\u52A03\u4E2A0\uFF0C\u53732000</li><li>2e+3: \u5C06\u6570\u5B572\u7684\u5C0F\u6570\u70B9\u53F3\u79FB3\u4F4D\uFF0C\u53732000; 2e-3: \u5C06\u6570\u5B572\u7684\u5C0F\u6570\u70B9\u5DE6\u79FB3\u4F4D\uFF0C\u53730.002\u3002</li></ul><blockquote><p>\u5047\u60F3\u5728\u6574\u6570\u540E\u8DDF\u4E00\u4E2A\u5C0F\u6570\u3002<br>\u5728\u5341\u8FDB\u5236\u4E2D\uFF0Ce \u4EE3\u8868\u6307\u6570\u6839 10, e+3 \u7406\u89E3\u4E3A 10\u76843\u6B21\u65B9\u3002 e-3 \u7406\u89E3\u4E3A 10\u7684-3\u6B21\u65B9\uFF0C\u5373\u5C0F\u6570\u5F62\u5F0F\u3002</p></blockquote><h3 id="p56\uFF1Aparseint-string-radix" tabindex="-1">P56\uFF1A<code>parseInt(string, radix)</code> <a class="header-anchor" href="#p56\uFF1Aparseint-string-radix" aria-hidden="true">#</a></h3><p>\u8BE5\u5185\u7F6E\u7684\u5168\u5C40\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5C06\u6570\u503C\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5341\u8FDB\u5236\u6570\uFF0C\u4EE5\u524D\u5BF9\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E24\u4E2A\u8BA4\u77E5\u8BEF\u533A\uFF1A</p><ol><li>\u4EE5\u4E3A\u7B2C\u4E8C\u53C2\u6570radix\u662F\u6307\u60F3\u8981\u7684\u7ED3\u679C\u7684\u8FDB\u5236\uFF0C\u4F46\u4E8B\u5B9E\u4E0A\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u7528\u6765\u8868\u660E\u5F53\u524D\u7B2C\u4E00\u4E2A\u53C2\u6570\u4EE3\u8868\u7684\u8FDB\u5236\uFF0C\u800C\u4E0D\u662F\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7ED3\u679C\u7684\u8FDB\u5236\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u53EA\u80FD\u662F\u5341\u8FDB\u5236\u6570\u3002</li><li>\u7B2C\u4E8C\u53C2\u6570\u7F3A\u7701\u65F6\uFF0C\u4EE5\u4E3A\u9ED8\u8BA4\u662F10\u8FDB\u5236\u6570\uFF0C\u4F46\u4E8B\u5B9E\u4E0A\uFF0C\u65B9\u6CD5\u4F1A\u6839\u636E\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u8868\u793A\u5F62\u5F0F\u81EA\u52A8\u5224\u65AD\u3002</li></ol><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank" rel="noopener noreferrer">MDN parseInt</a>\u5982\u679C radix \u662F undefined\u30010\u6216\u672A\u6307\u5B9A\u7684\uFF0CJavaScript\u4F1A\u5047\u5B9A\u4EE5\u4E0B\u60C5\u51B5\uFF1A</p><ul><li>\u5982\u679C\u8F93\u5165\u7684 string\u4EE5 &quot;0x&quot;\u6216 &quot;0x&quot;\uFF08\u4E00\u4E2A0\uFF0C\u540E\u9762\u662F\u5C0F\u5199\u6216\u5927\u5199\u7684X\uFF09\u5F00\u5934\uFF0C\u90A3\u4E48radix\u88AB\u5047\u5B9A\u4E3A16\uFF0C\u5B57\u7B26\u4E32\u7684\u5176\u4F59\u90E8\u5206\u88AB\u89E3\u6790\u4E3A\u5341\u516D\u8FDB\u5236\u6570\u3002</li><li>\u5982\u679C\u8F93\u5165\u7684 string\u4EE5 &quot;0&quot;\uFF080\uFF09\u5F00\u5934\uFF0C radix\u88AB\u5047\u5B9A\u4E3A8\uFF08\u516B\u8FDB\u5236\uFF09\u621610\uFF08\u5341\u8FDB\u5236\uFF09\u3002\u5177\u4F53\u9009\u62E9\u54EA\u4E00\u4E2Aradix\u53D6\u51B3\u4E8E\u5BBF\u4E3B\u7684\u5B9E\u73B0\u3002ECMAScript 5 \u6F84\u6E05\u4E86\u5E94\u8BE5\u4F7F\u7528 10 (\u5341\u8FDB\u5236)\uFF0C\u4F46\u4E0D\u662F\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\u56E0\u6B64\uFF0C\u5728\u4F7F\u7528 parseInt \u65F6\uFF0C\u4E00\u5B9A\u8981\u6307\u5B9A\u4E00\u4E2A radix\u3002</li><li>\u5982\u679C\u8F93\u5165\u7684 string \u4EE5\u4EFB\u4F55\u5176\u4ED6\u503C\u5F00\u5934\uFF0C radix \u662F 10 (\u5341\u8FDB\u5236)\u3002</li><li>\u5982\u679C\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E0D\u80FD\u8F6C\u6362\u4E3A\u6570\u5B57\uFF0CparseInt\u4F1A\u8FD4\u56DE NaN\u3002</li></ul><blockquote><p>\u5BF9\u4E8E\u6CA1\u6709\u6307\u5B9A radix \u53C2\u6570\u65F6\u7684\u516B\u8FDB\u5236\u89E3\u6790\uFF0CECMAScript 5 \u89C4\u8303\u4E0D\u518D\u5141\u8BB8parseInt\u51FD\u6570\u7684\u5B9E\u73B0\u73AF\u5883\u628A\u4EE50\u5B57\u7B26\u5F00\u59CB\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u516B\u8FDB\u5236\u6570\u503C\u3002\u4F46\u5728\u4EE5\u524D ECMAScript 3\u4E2D\uFF0CECMAScript 3\u4EC5\u4EC5\u662F\u4E0D\u63D0\u5021\u8FD9\u79CD\u505A\u6CD5\u4F46\u5E76\u6CA1\u6709\u7981\u6B62\u8FD9\u79CD\u505A\u6CD5\u3002\u6240\u4EE5\u76F4\u81F32013\u5E74\uFF0C\u5F88\u591A\u5B9E\u73B0\u73AF\u5883\u5E76\u6CA1\u6709\u91C7\u53D6\u65B0\u7684\u89C4\u8303\u6240\u89C4\u5B9A\u7684\u505A\u6CD5, \u800C\u4E14\u7531\u4E8E\u5FC5\u987B\u517C\u5BB9\u65E7\u7248\u7684\u6D4F\u89C8\u5668\uFF0C\u6240\u4EE5\u6C38\u8FDC\u90FD\u8981\u660E\u786E\u7ED9\u51FAradix\u53C2\u6570\u7684\u503C.</p></blockquote><p>\u5982\u679C\u8981\u5C06\u67D0\u4E2A\u6570\u8F6C\u6362\u8FD4\u56DE\u6307\u5B9A\u8FDB\u5236\u7684\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528\u65B9\u6CD5\uFF1A<code>Number.prototype.toString(radix)</code></p><div class="language-js"><pre><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;0xF&quot;</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;015&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;015&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 15\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u5927\u90E8\u5206\u90FD\u9075\u5FAA ES5\u7684\u5B9E\u73B0\uFF0C\u90470\u6309\u5341\u8FDB\u5236\u8F6C\u6362\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u67D0\u4E2A\u5B58\u5728\u517C\u5BB9\u6027\u7684\u6D4F\u89C8\u5668\u63098\u8FDB\u5236\u8F6C\u6362\uFF0C\u8FD4\u56DE 13</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;015&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 13</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;08&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 0, \u56E0\u4E3A 8 \u5728\u8FDB\u5236\u6570\u4E2D\u4E0D\u662F\u6709\u6548\u6570\u5B57</span>


<span class="token number">16.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// F \u5982\u679C\u76F4\u63A5\u6570\u503C\u6253\u70B9\uFF0C\u89E3\u91CA\u5668\u4F1A\u5C06\u7B2C\u6570\u5B57\u7D27\u8DDF\u7684\u7B2C\u4E00\u70B9\u8BA4\u4E3A\u662F\u5C0F\u6570\u70B9\uFF0C\u5C0F\u6570\u70B9\u540E\u9762\u63A5\u5B57\u7B26\u4F1A\u62A5\u9519\u3002\u6240\u4EE5\u6570\u5B57\u8981\u76F4\u63A5\u8C03\u7528\u65B9\u6CD5\uFF0C\u9700\u8981\u4E24\u4E2A\u70B9</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// F, \u7528\u6784\u9020\u51FD\u6570\u5305\u88C5\uFF0C\u9690\u5F0F\u8F6C\u6210\u5305\u88C5\u5BF9\u8C61\uFF0C\u6253\u70B9\u8C03\u7528\u65B9\u6CD5</span>
<span class="token keyword">new</span> <span class="token class-name">Nubmer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// F, \u663E\u5F0F\u8F6C\u6362\u6210\u5305\u88C5\u5BF9\u8C61\u6253\u70B9\u8C03\u7528</span>
</code></pre></div><h2 id="p57\uFF1Aparsefloat-string" tabindex="-1">P57\uFF1A<code>parseFloat(string)</code> <a class="header-anchor" href="#p57\uFF1Aparsefloat-string" aria-hidden="true">#</a></h2><p>\u4E0D\u540C\u4E8E parseInt\uFF0C parseFloat\u53EA\u5305\u542B\u4E00\u4E2A\u53C2\u6570\u3002\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u5341\u8FDB\u5236\u7684\u5C0F\u6570\u8868\u793A\u3002</p><p>\u89C4\u5219\u662F\uFF1A</p><ul><li>\u5982\u679C parseFloat \u5728\u89E3\u6790\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E86**\u6B63\u53F7\uFF08+\uFF09\u3001\u8D1F\u53F7\uFF08- U+002D HYPHEN-MINUS\uFF09\u3001\u6570\u5B57\uFF080-9\uFF09\u3001\u5C0F\u6570\u70B9\uFF08.\uFF09\u3001\u6216\u8005\u79D1\u5B66\u8BB0\u6570\u6CD5\u4E2D\u7684\u6307\u6570\uFF08e \u6216 E\uFF09**\u4EE5\u5916\u7684\u5B57\u7B26\uFF0C\u5219\u5B83\u4F1A\u5FFD\u7565\u8BE5\u5B57\u7B26\u4EE5\u53CA\u4E4B\u540E\u7684\u6240\u6709\u5B57\u7B26\uFF0C\u8FD4\u56DE\u5F53\u524D\u5DF2\u7ECF\u89E3\u6790\u5230\u7684\u6D6E\u70B9\u6570\u3002</li><li>\u7B2C\u4E8C\u4E2A\u5C0F\u6570\u70B9\u7684\u51FA\u73B0\u4E5F\u4F1A\u4F7F\u89E3\u6790\u505C\u6B62\uFF08\u5728\u8FD9\u4E4B\u524D\u7684\u5B57\u7B26\u90FD\u4F1A\u88AB\u89E3\u6790\uFF09\u3002</li><li>\u53C2\u6570\u9996\u4F4D\u548C\u672B\u4F4D\u7684\u7A7A\u767D\u7B26\u4F1A\u88AB\u5FFD\u7565\u3002</li><li>\u5982\u679C\u53C2\u6570\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E0D\u80FD\u88AB\u89E3\u6790\u6210\u4E3A\u6570\u5B57,\u5219 parseFloat \u8FD4\u56DE NaN\u3002</li><li>parseFloat \u4E5F\u53EF\u4EE5\u89E3\u6790\u5E76\u8FD4\u56DE Infinity\u3002</li><li>parseFloat\u89E3\u6790 BigInt \u4E3A Numbers, \u4E22\u5931\u7CBE\u5EA6\u3002\u56E0\u4E3A\u672B\u4F4D n \u5B57\u7B26\u88AB\u4E22\u5F03\u3002</li><li>parseFloat \u4E5F\u53EF\u4EE5\u8F6C\u6362\u4E00\u4E2A\u5DF2\u7ECF\u5B9A\u4E49\u4E86 toString \u6216\u8005 valueOf \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u5B83\u8FD4\u56DE\u7684\u503C\u548C\u5728\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u7ED3\u679C\u4E0A\u8C03\u7528 parseFloat \u503C\u76F8\u540C\u3002</li></ul><div class="language-js"><pre><code><span class="token comment">// \u4EE5\u4E0B\u90FD\u8FD4\u56DE 3.14</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.14.159&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;  3.14  &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;314e-2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;0.0314E+2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.14some non-digit characters&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&quot;3.14&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;FF2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre></div><h2 id="p59-uri-url\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801" tabindex="-1">P59: URI/URL\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801 <a class="header-anchor" href="#p59-uri-url\u7684\u7F16\u7801\u548C\u8FD4\u7F16\u7801" aria-hidden="true">#</a></h2><ul><li><code>encodeURI() / encodeURIComponent()</code></li><li><code>decodeURI() / decodeURIComponent()</code></li></ul><p>\u5728 URL (Uniform Resource Locator \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26) \u6216 URI (Uniform Resource Identifier \u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26)\u4E2D\uFF0C\u6709\u4E00\u4E9B\u5B57\u7B26\u662F\u5177\u6709\u7279\u6B8A\u542B\u4E49\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4E0D\u8F6C\u6362\u539F\u6837\u8FDB\u884C\u4F20\u8F93\u7684\u8BDD\uFF0C\u53EF\u80FD\u4F1A\u4E0E JSON \u683C\u5F0F\u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u5B57\u7B26\u51B2\u7A81\uFF0C\u6216\u8005\u4E0E\u5176\u5B83\u7F51\u7EDC\u534F\u8BAE\u4E2D\u7279\u6B8A\u5B57\u7B26\u51B2\u7A81\u5BFC\u81F4\u5931\u8D25\u3002\u6B64\u65F6\u6211\u4EEC\u5C31\u9700\u8981\u5C06\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u7684 URL \u8FDB\u884C\u8F6C\u6362\u5305\u88C5\u4E00\u4E0B\u518D\u8FDB\u884C\u4F20\u8F93\u3002</p><p>\u5728\u5168\u5C40\u5BF9\u8C61\u4E2D\u63D0\u4F9B\u4E86\u8F6C\u6362\u5305\u88C5\u7684\u65B9\u6CD5\uFF1A encodeURI / encodeURIComponent</p><p>\u4E24\u8005\u7684\u4E0D\u540C\u5728\u4E8E\uFF1AencodeURI\u80FD\u8F6C\u6362\u6210\u4E00\u4E2A\u53EF\u7528\u7684URL\uFF0C\u76F8\u5F53\u4E8E\u4F1A\u667A\u80FD\u8BC6\u522B\u6B63\u5E38URL\u90E8\u5206\u7684\u5B57\u7B26\u4E0D\u8FDB\u884C\u8F6C\u6362\u3002\u4F46 encodeURIComponent \u5219\u5C06\u8981\u8F6C\u6362\u7684\u5165\u53C2\u90FD\u5F53\u4F5C\u53EA\u662F URL \u4E2D\u9700\u8981\u8F6C\u6362\u7684\u90A3\u4E00\u90E8\u5206\uFF08component\uFF09\uFF0C\u5C06\u6240\u6709\u5B57\u7B26\u90FD\u8FDB\u884C\u4E86\u8F6C\u6362\u3002</p><div class="language-js"><pre><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com/scr ipt.php?q=this and that&#39;</span><span class="token punctuation">;</span>
<span class="token function">encodeURI</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// http://www.baidu.com/scr%20ipt.php?q=this%20and%20that</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// http%3A%2F%2Fwww.baidu.com%2Fscr%20ipt.php%3Fq%3Dthis%20and%20that   \u5C06\u6B63\u5E38\u7684 http://www.baidu.com/ \u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u4E5F\u8F6C\u6362\u4E86\u3002</span>
</code></pre></div><p>\u5BF9\u5E94\u7684\u4E5F\u6709\u4E24\u4E2A\u53CD\u8F6C\u4E49\u7684\u51FD\u6570 <code>decodeURI() / decodeURIComponent()</code></p><div class="language-js"><pre><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com/scr ipt.php?q=this and that&#39;</span><span class="token punctuation">;</span>
<span class="token function">encodeURI</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// http://www.baidu.com/scr%20ipt.php?q=this%20and%20that</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// http%3A%2F%2Fwww.baidu.com%2Fscr%20ipt.php%3Fq%3Dthis%20and%20that   \u5C06\u6B63\u5E38\u7684 http://www.baidu.com/ \u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u4E5F\u8F6C\u6362\u4E86\u3002</span>

<span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// http://www.baidu.com/scr ipt.php?q=this and that</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// http://www.baidu.com/scr ipt.php?q=this and that</span>
</code></pre></div><h2 id="p85-\u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4" tabindex="-1">P85: \u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4 <a class="header-anchor" href="#p85-\u54C8\u5E0C\u8868\u548C\u7D22\u5F15\u6570\u7EC4" aria-hidden="true">#</a></h2><p>\u5728\u4E00\u4E9B\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u4E2D\uFF0C\u901A\u5E38\u90FD\u4F1A\u5B58\u5728\u7740\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u7EC4\u5F62\u5F0F\uFF1A</p><ul><li>\u4E00\u822C\u6027\u6570\u7EC4\uFF1A\u4E5F\u53EB\u7D22\u5F15\u578B\u6570\u7EC4\uFF0C\u6216\u53EB\u679A\u4E3E\u578B\u6570\u7EC4\uFF08\u901A\u5E38\u4EE5\u6570\u5B57\u4E3A\u952E\u503C\uFF09</li><li>\u5173\u8054\u578B\u6570\u7EC4\uFF1A\u4E5F\u53EB\u54C8\u5E0C\u8868\uFF0C\u6216\u53EB\u6563\u5217\u8868\uFF0C\u662F\u4E00\u79CD key-value\u7684\u6570\u7EC4\u7ED3\u6784\uFF08\u901A\u5E38\u4EE5\u5B57\u7B26\u4E32\u4E3A\u952E\u503C\uFF09</li></ul><p>\u5728 JS \u4E2D\uFF0C\u6211\u4EEC\u4F1A\u7528 Array \u6570\u7EC4\u6765\u8868\u793A\u7D22\u5F15\u6570\u7EC4\uFF0C\u800C\u7528 Object \u5BF9\u8C61\u6765\u8868\u793A\u5173\u8054\u6570\u7EC4\u3002\u6240\u4EE5\u5728 JS \u4E2D\u8981\u8868\u793A\u54C8\u5E0C\u8868\uFF0C\u5C31\u5FC5\u987B\u7528\u5230\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token comment">// \u7D22\u5F15\u578B\u6570\u7EC4</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// \u54C8\u5E0C\u8868</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;3&#39;</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="p96-\u5185\u7F6E\u5BF9\u8C61-built-in-object" tabindex="-1">P96: \u5185\u7F6E\u5BF9\u8C61 built-in Object <a class="header-anchor" href="#p96-\u5185\u7F6E\u5BF9\u8C61-built-in-object" aria-hidden="true">#</a></h2><p>\u5185\u7F6E\u5BF9\u8C61\u5927\u81F4\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ul><li>\u6570\u636E\u5C01\u88C5\u7C7B\uFF1A\u5373\u5BF9\u5E94\u57FA\u672C\u7C7B\u578B\u7684\u6784\u9020\u5668\u5BF9\u8C61\uFF0C\u5305\u62EC Object / Array / Function / Boolean / String / Number</li><li>\u5DE5\u5177\u7C7B\u5BF9\u8C61\uFF1AMath / Date / RegExp</li><li>\u9519\u8BEF\u7C7B\u5BF9\u8C61\uFF1AError / TypeError / RangeError \u7B49\u3002</li></ul><blockquote><p><a href="https://biz.51cto.com/art/202005/616337.htm" target="_blank" rel="noopener noreferrer">\u6F2B\u8BDD\uFF1A\u4E3A\u4EC0\u4E48\u8BA1\u7B97\u673A\u8D77\u59CB\u65F6\u95F4\u662F1970\u5E741\u67081\u65E50\u65F60\u52060\u79F0\uFF1F</a><br><a href="https://zhuanlan.zhihu.com/p/72516872" target="_blank" rel="noopener noreferrer">\u8BA1\u7B97\u673A\u5143\u5E74(\u7EAA\u5E74 Epoch Time)\u548CUTC</a><br><a href="https://www.cnblogs.com/xwdreamer/p/8761825.html" target="_blank" rel="noopener noreferrer">UTC\u65F6\u95F4\u3001GMT\u65F6\u95F4\u3001\u672C\u5730\u65F6\u95F4\u3001Unix\u65F6\u95F4\u6233</a></p></blockquote><blockquote><p>Unix\u65F6\u95F4\u6233\u662F\u79D2\uFF0C\u800C\u901A\u8FC7 JS \u7684 new Date().getTime() \u83B7\u53D6\u7684\u65F6\u95F4\u6233\u662F \u6BEB\u79D2 \u5355\u4F4D\u3002</p></blockquote><h2 id="p180\uFF1A-\u7EE7\u627F\u7684\u5B9E\u73B0" tabindex="-1">P180\uFF1A \u7EE7\u627F\u7684\u5B9E\u73B0 <a class="header-anchor" href="#p180\uFF1A-\u7EE7\u627F\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u5728 JS \u4E2D\uFF0C\u7EE7\u627F\u7684\u76EE\u7684\u662F\u5B9E\u4F8B\u4EE3\u7801\u590D\u7528\uFF0C</p><p>\u7EE7\u627F\u7684\u5B9E\u73B0\u5206\u4E3A\u56DB\u79CD\uFF1A</p><ul><li><code>Object.create()</code></li><li>\u6784\u9020\u5668 <code>new + F</code></li><li>ES6\u65B0\u8BED\u6CD5 Class</li><li>\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u62F7\u8D1D\uFF08\u6D45\u62F7\u8D1D\u548C\u6DF1\u62F7\u8D1D\uFF09</li></ul><p>\u5177\u4F53\u770B\u4E66\u4E2D\u8868\u4E2D\u603B\u7ED3</p><h2 id="p248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1">P248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F <a class="header-anchor" href="#p248\uFF1A\u7F16\u7A0B\u6A21\u5F0F\u4E0E\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u4EC0\u4E48\u662F\u6A21\u5F0F\uFF1F</li></ol><p>\u6A21\u5F0F\uFF0C\u7B80\u5355\u8BF4\uFF0C\u5C31\u662F\u4E13\u95E8\u4E3A\u67D0\u4E9B\u5E38\u89C1\u95EE\u9898\u603B\u7ED3\u51FA\u7684\u4F18\u79C0\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><blockquote><p>\u5F53\u6211\u4EEC\u9762\u5BF9\u4E00\u4E2A\u65B0\u7684\u7F16\u7A0B\u95EE\u9898\u65F6\uFF0C\u5F80\u5F80\u4F1A\u7ACB\u523B\u53D1\u73B0\u773C\u524D\u7684\u8FD9\u4E2A\u95EE\u9898\u4E0E\u6211\u4EEC\u4E4B\u524D\u89E3\u51B3\u8FC7\u7684\u67D0\u4E2A\u95EE\u9898\u6709\u5F88\u591A\u76F8\u4F3C\u4E4B\u5904\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u4F60\u6216\u8BB8\u5C31\u4F1A\u8003\u8651\u5C06\u8FD9\u4E9B\u95EE\u9898\u603B\u7ED3\u3001\u62BD\u8C61\u3001\u5F52\u7C7B\uFF0C\u4EE5\u5BFB\u6C42\u4E00\u4E2A\u901A\u7528\u6027\u7684\u89E3\u51B3\u65B9\u6848\u3002\u800C\u6240\u8C13\u6A21\u5F0F\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u7CFB\u5217\u7ECF\u8FC7\u5B9E\u6218\u8BC1\u660E\u7684\uFF0C\u9488\u5BF9\u67D0\u7C7B\u95EE\u9898\uFF0C\u5177\u6709\u53EF\u91CD\u7528\u6027\u7684\u89E3\u51B3\u65B9\u6848\u3002\u6A21\u5F0F\u88AB\u5F53\u505A\u4E00\u4E2A\u672F\u8BED\u6765\u4F7F\u7528\uFF0C\u5E76\u547D\u540D\uFF0C\u4EE5\u4F7F\u4EA4\u6D41\u53D8\u5F97\u66F4\u5BB9\u6613\u800C\u5DF2\u3002</p></blockquote><p>\u672C\u7AE0\u8BA8\u8BBA\u7684\u6A21\u5F0F\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li>\u7F16\u7A0B\u6A21\u5F0F\uFF1A \u4E00\u4E9B\u4E13\u95E8\u4E3A JS \u8BED\u8A00\u5F00\u53D1\u51FA\u7684\u6700\u4F73\u5B9E\u8DF5\u65B9\u6848</li><li>\u8BBE\u8BA1\u6A21\u5F0F\uFF1A \u8FD9\u4E9B\u6A21\u5F0F\u4E0E\u5177\u4F53\u8BED\u8A00\u5B9E\u73B0\u65E0\u5173\uFF0C\u4E3B\u8981\u6765\u81EA\u201CGoF\u7684\u300A\u8BBE\u8BA1\u6A21\u5F0F\u300B\u201D\u4E00\u4E66</li></ul><blockquote><p>\u300A\u8BBE\u8BA1\u6A21\u5F0F\uFF1A\u53EF\u5229\u7528\u7684\u9762\u5411\u5BF9\u8C61\u8F6F\u4EF6\u7684\u57FA\u7840\u300B\u662F\u8F6F\u4EF6\u5DE5\u7A0B\u9886\u57DF\u6709\u5173\u8F6F\u4EF6\u8BBE\u8BA1\u7684\u4E00\u672C\u4E66\uFF0C\u63D0\u51FA\u548C\u603B\u7ED3\u4E86\u5BF9\u4E00\u4E9B\u5E38\u89C1\u8F6F\u4EF6\u8BBE\u8BA1\u95EE\u9898\u7684\u6807\u51C6\u89E3\u51B3\u65B9\u6848\uFF0C\u79F0\u4E3A\u8F6F\u4EF6\u8BBE\u8BA1\u6A21\u5F0F\u3002\u8BE5\u4E66\u7684\u4F5C\u8005\u6709\u56DB\u4E2A\u4EBA\uFF0C\u901A\u5E38\u79F0\u4E3A\u201C\u56DB\u4EBA\u5E2E\u201D\uFF08Gang of Four, GoF)</p></blockquote><ol start="2"><li>\u7F16\u7A0B\u6A21\u5F0F</li></ol><ul><li>\u884C\u4E3A\u9694\u79BB\uFF08\u5173\u6CE8\u70B9\u5206\u79BB\uFF09</li><li>\u547D\u540D\u7A7A\u95F4</li><li>\u521D\u59CB\u5316\u5206\u652F</li><li>\u5EF6\u8FDF\u5B9A\u4E49</li><li>\u914D\u7F6E\u5BF9\u8C61</li><li>\u79C1\u6709\u53D8\u91CF\u548C\u65B9\u6CD5</li><li>\u7279\u6743\u65B9\u6CD5</li><li>\u79C1\u6709\u51FD\u6570\u7684\u516C\u6709\u5316</li><li>\u81EA\u6267\u884C\u51FD\u6570</li><li>\u94FE\u5F0F\u8C03\u7528</li></ul><ol start="3"><li>\u8BBE\u8BA1\u6A21\u5F0F</li></ol><ul><li>\u521B\u5EFA\u578B\u6A21\u5F0F\uFF1A \u6D89\u53CA\u5BF9\u8C61\u7684\u521B\u5EFA\u548C\u521D\u59CB\u5316</li><li>\u7ED3\u6784\u578B\u6A21\u5F0F\uFF1A \u63CF\u8FF0\u4E86\u5982\u4F55\u7EC4\u5408\u5BF9\u8C61\u4EE5\u63D0\u4F9B\u65B0\u7684\u529F\u80FD</li><li>\u884C\u4E3A\u578B\u6A21\u5F0F\uFF1A \u63CF\u8FF0\u4E86\u5BF9\u8C61\u4E4B\u95F4\u7684\u901A\u4FE1</li></ul>`,70),l=[o];function c(i,r,u,k,d,h){return s(),a("div",null,l)}var g=n(e,[["render",c]]);export{b as __pageData,g as default};