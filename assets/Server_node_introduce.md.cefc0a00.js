import{_ as a,c as s,o,a as n}from"./app.fa011131.js";var p="/assets/libuv.5aed98cf.png",e="/assets/event_loop.1d7865a5.png";const I='{"title":"Node \u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"libuv\u5E93","slug":"libuv\u5E93"},{"level":2,"title":"Node \u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F","slug":"node-\u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F"},{"level":3,"title":"\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A","slug":"\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A"},{"level":3,"title":"\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A","slug":"\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A"},{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E8B\u4EF6\u5FAA\u73AF"}],"relativePath":"Server/node/introduce.md"}',t={},r=n(`<h1 id="node-\u4ECB\u7ECD" tabindex="-1">Node \u4ECB\u7ECD <a class="header-anchor" href="#node-\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p><div class="table-of-contents"><ul><li><a href="#libuv\u5E93">libuv\u5E93</a></li><li><a href="#node-\u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F">Node \u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F</a><ul><li><a href="#\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A">\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A</a></li><li><a href="#\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A">\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A</a></li></ul></li><li><a href="#\u4E8B\u4EF6\u5FAA\u73AF">\u4E8B\u4EF6\u5FAA\u73AF</a></li></ul></div></p><p>\u5728web\u6D4F\u89C8\u5668\u91CC\u53EF\u4EE5\u8FD0\u884CJS\u4EE3\u7801\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4E3AJS\u4EE3\u7801\u7684\u8FD0\u884C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5408\u9002\u7684\u73AF\u5883\uFF0C\u6BD4\u5982JS\u5F15\u64CE\u53EF\u4EE5\u5C06JS\u4EE3\u7801\u7F16\u8BD1\u6210\u7535\u8111\u53EF\u6267\u884C\u4EE3\u7801\u3002JS\u80FD\u591F\u64CD\u4F5C\u7F51\u9875\uFF0C\u662F\u56E0\u4E3A\u6D4F\u89C8\u5668\u4E3AJS\u63D0\u4F9BDOM\u76F8\u5173\u7684API\u4F9B\u5176\u8C03\u7528\u3002\u6240\u4EE5\u6211\u4EEC\u7ECF\u5E38\u8BF4\u6D4F\u89C8\u5668\u662FJS\u7684\u5BBF\u4E3B\uFF0CJS\u5BC4\u751F\u4E8E\u6D4F\u89C8\u5668\u624D\u80FD\u4F7F\u7528\u3002</p><p>\u76F4\u5230NODE\u51FA\u73B0\uFF0CJS\u7684\u5BBF\u4E3B\u73AF\u5883\u53C8\u591A\u4E86\u4E00\u4E2A\u3002JS\u901A\u8FC7\u5BC4\u751F\u4E8ENODE\u8FD9\u4E2A\u65B0\u5BBF\u4E3B\uFF0C\u5B9E\u73B0\u4E86\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7AEF\u4F7F\u7528JS\u8BED\u8A00\u5F00\u53D1\u5E94\u7528\u3002</p><p>\u90A3NODE\u4E4B\u6240\u4EE5\u80FD\u6210\u4E3AJS\u65B0\u4E00\u79CD\u5BBF\u4E3B\u73AF\u5883\uFF0C\u662F\u56E0\u4E3ANODE\u4E5F\u4E3AJS\u7684\u8FD0\u884C\u642D\u5EFA\u4E86\u4E00\u4E2A\u5408\u9002\u7684\u73AF\u5883\u3002\u4F46\u662FNode \u4E0D\u662F\u4E00\u4E2A\u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5B83\u662F\u201C\u7AD9\u5728\u5DE8\u4EBA\u80A9\u8180\u4E0A\u201D\u8FDB\u884C\u4E00\u7CFB\u5217\u62FC\u51D1\u548C\u5C01\u88C5\u5F97\u5230\u7684\u7ED3\u679C\uFF0Cnode.js\u4F7F\u7528\u4E86Google\u7684V8\u89E3\u6790\u5F15\u64CE\u548CMarc Lehmann\u7684libev\u3002</p><p>Node\u4F7F\u7528V8\uFF08Chrome V8\uFF09\u4F5C\u4E3A JavaScript \u89E3\u6790\u5F15\u64CE\uFF0CV8\u662F\u7531\u8C37\u6B4C\u5F00\u6E90\uFF0C\u4EE5 C++ \u8BED\u8A00\u7F16\u5199\uFF0C\u5177\u6709\u9AD8\u6027\u80FD\u548C\u8DE8\u5E73\u53F0\u7684\u7279\u6027\u7684\uFF0C\u540C\u65F6\u4E5F\u7528\u4E8E Chrome \u6D4F\u89C8\u5668\u3002</p><p>\u53E6\u5916\u5728\u6D4F\u89C8\u5668\u7AEF\u6709\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u6765\u5B9E\u73B0JS\u8FD0\u884C\u5F02\u6B65I/O\u7684\u9AD8\u6027\u80FD\u3002\u5728NODE\u540C\u6837\u5B9E\u73B0\u4E86\u4E00\u4E2Alibuv\u5E93\uFF0C\u5B9E\u9645\u4E0A\u5B83\u624D\u662F\u4E3A Node \u91CD\u65B0\u5F00\u53D1\u7684\uFF0C\u4F7F\u7528C\u8BED\u8A00\u7F16\u5199\u3002libuv\u5E93\u5B9E\u73B0\u4E86\u8DE8\u5E73\u53F0\u7684\u4E8B\u4EF6\u5FAA\u73AF\u3002\u4F5C\u4E3A\u4E00\u4E2A\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u4E0A\u7684\u4E2D\u95F4\u5C42\uFF0Clibuv \u4F7F\u5F97\u5F00\u53D1\u8005\u4F7F\u7528JS\u8BED\u8A00\u5F00\u53D1\u65F6\u4E0D\u7528\u50CF\u4F20\u7EDF\u540E\u7AEF\u8BED\u8A00\u4E00\u6837\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u7BA1\u7406\u7EBF\u7A0B\uFF0C\u800C\u53EA\u9700\u8981\u8C03\u7528\u7531libuv\u5E93\u63D0\u4F9B\u7684API\u6765\u8F7B\u677E\u7684\u5B9E\u73B0\u5F02\u6B65I/O\u3002</p><div class="language-js"><pre><code>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
  <span class="token operator">|</span>  Node                        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">|</span> Javascript <span class="token operator">|</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">|</span> <span class="token constant">V8</span> engine  <span class="token operator">|</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">|</span> libuv      <span class="token operator">|</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>        <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>        <span class="token operator">|</span>
  <span class="token operator">|</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>   <span class="token operator">|</span>
  <span class="token operator">|</span>  <span class="token operator">|</span> \u7F51\u5361 <span class="token operator">|</span>  <span class="token operator">|</span> \u786C\u76D8 <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">...</span> <span class="token operator">|</span>   <span class="token operator">|</span>
  <span class="token operator">|</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>   <span class="token operator">|</span>
  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
</code></pre></div><p>V8\u5F15\u64CE\u5BF9JS\u4EE3\u7801\u89E3\u6790\u539F\u7406\u5728\u6D4F\u89C8\u7AEF\u7684\u7B14\u8BB0\u6765\u5199\u3002\u8FD9\u91CC\u6211\u4EEC\u4ECB\u7ECD\u4E0Blibuv\u5E93\u3002</p><h2 id="libuv\u5E93" tabindex="-1">libuv\u5E93 <a class="header-anchor" href="#libuv\u5E93" aria-hidden="true">#</a></h2><p><a href="http://luohaha.github.io/Chinese-uvbook/index.html" target="_blank" rel="noopener noreferrer">libuv\u4E2D\u6587\u6559\u7A0B</a></p><p>Libuv\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\uFF0C\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65I/O\u5E93\uFF0C\u5B83\u672C\u8EAB\u662F\u7531C\u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u5177\u6709\u5F88\u9AD8\u7684\u53EF\u79FB\u690D\u6027\u3002libuv\u5C01\u88C5\u4E86\u4E0D\u540C\u5E73\u53F0\u5E95\u5C42\u5BF9\u4E8E\u5F02\u6B65IO\u6A21\u578B\u7684\u5B9E\u73B0\uFF0C\u4F7F\u5F97\u5B83\u672C\u8EAB\u5177\u5907\u5728Windows, Linux\u90FD\u53EF\u4F7F\u7528\u7684\u8DE8\u5E73\u53F0\u80FD\u529B\u3002</p><p>Libuv\u5E93\u4E13\u4E3ANode.js\u800C\u8BBE\u8BA1\uFF0C\u4F46\u662F\u540E\u6765\u56E0\u4E3A\u5B83\u8FD9\u79CD\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65IO\u7684\u9AD8\u6548\u6A21\u578B\u9010\u6B65\u88AB\u5F88\u591A\u8BED\u8A00\u548C\u9879\u76EE\u91C7\u7EB3\u800C\u6210\u4E3A\u4E00\u4E2A\u901A\u7528\u5E93\uFF0C\u4F5C\u4E3A\u5176\u5B83\u9879\u76EE\u7684\u5E95\u5C42\u5E93\u6765\u4F7F\u7528\uFF0C\u50CF Luvit, Julia, pyuv\u7B49\u3002</p><blockquote><p>Nodejs\u521A\u51FA\u6765\u7684\u65F6\u5019\u5E76\u4E0D\u662F\u4F7F\u7528libuv\uFF0C\u800C\u662FMarc Lehmann\u5F00\u53D1\u7684libev\u3002libev\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u5F02\u6B65IO\u7684\u5E93\uFF0C\u4F46\u662F\u5B83\u53EA\u80FD\u5728POSIX\u6807\u51C6\u4E0B\u7684unix\u6216linux\u7CFB\u7EDF\u4F7F\u7528\u3002\u968F\u7740nodejs\u88AB\u8D8A\u6765\u8D8A\u591A\u4EBA\u4F7F\u7528\uFF0C\u7531\u4E8Ewindows\u7684\u7528\u6237\u91CF\u5DE8\u5927\uFF0C\u6240\u4EE5\u5F00\u59CB\u8003\u8651Nodejs\u7684\u6709windows\u5E73\u53F0\u7684\u5B9E\u73B0\u3002\u8FD9\u65F6\u5019Nodejs\u5728libev\u57FA\u7840\u4E0A\u5F00\u53D1\u4E86libuv\u5E93\u6765\u4F5C\u4E3A\u62BD\u8C61\u5C01\u88C5\u5C42\uFF0C\u56E0\u4E3Alibev\u5DF2\u7ECF\u5728linux\u7CFB\u7EDF\u4E0B\u5C01\u88C5\u4E86epoll \u6216 kqueue\u7684\u8C03\u7528\uFF0C\u800C\u5728window\u7CFB\u7EDF\u4E0B\u4E0Eepoll\u6216\u8005kqueue\u529F\u80FD\u76F8\u540C\u7684\u673A\u5236\u662FIOCP\uFF0C\u6240\u4EE5\u5728Windows\u5E73\u53F0\u4E0A\u5BF9\u7CFB\u7EDF\u539F\u751F\u7684IOCP\u8FDB\u884C\u5C01\u88C5\uFF0C\u81EA\u6B64\u4E4B\u540E\u4F7FNodejs\u5177\u5907\u4E86\u8DE8\u5E73\u53F0\u80FD\u529B\uFF0C\u7531Libuv\u4F5C\u4E3A\u4E2D\u95F4\u5C42\u672C\u8EAB\u63D0\u4F9B\u7684\u8DE8\u5E73\u53F0\u7684\u62BD\u8C61\uFF0C\u6839\u636E\u8FD0\u884C\u7CFB\u7EDF\u73AF\u5883\u6765\u51B3\u5B9A\u8C03\u7528\u90A3\u4E9B\u7CFB\u7EDF\u5C42\u539F\u751F\u63D0\u4F9B\u7684\u76F8\u5173I/O\u7684API\u3002\u5982Window\u7CFB\u7EDF\u4E0B\u4F7F\u7528IOCP\u3002\u540E\u6765\u5728node-v0.9.0\u7248\u672C\u4E2D\uFF0Clibuv\u79FB\u9664\u4E86libev\u7684\u5185\u5BB9\u3002</p></blockquote><p>libuv\u5E93\u63D0\u4F9B\u4E86\u5F88\u591A\u6838\u5FC3\u5DE5\u5177\u6A21\u5757\uFF0C\u4F8B\u5982\u5B9A\u65F6\u5668\uFF0C\u975E\u963B\u585E\u7684\u7F51\u7EDC\u652F\u6301\uFF0C\u5F02\u6B65\u6587\u4EF6\u7CFB\u7EDF\u8BBF\u95EE\uFF0C\u5B50\u8FDB\u7A0B\u7B49\u3002</p><p><img src="`+p+'" alt=""></p><p>\u4ECE\u5DE6\u5F80\u53F3\u53EF\u5206\u4E3A\u4E24\u90E8\u5206\uFF0CNetwork I/O\u7684\u76F8\u5173\u90E8\u5206\uFF0C\u548C\u53E6\u4E00\u90E8\u5206File I/O\uFF0CDNS Ops\u548CUser Code\u7B49\u7EC4\u6210\u3002 \u4ECE\u4E0A\u5F80\u4E0B\u770B\uFF0C\u4E0A\u9762\u4E3A\u5BF9\u5916\u4F7F\u7528\u7684\u5E94\u7528\u5C42\uFF0C\u4E0B\u9762\u4E3A\u5185\u90E8\u8C03\u7528\u7684\u5E95\u5C42\u63A5\u53E3</p><p>\u90A3\u73B0\u7684\u95EE\u9898\u662F\u5F53\u5927\u91CFI/O\u8BF7\u6C42\u8FDB\u5165\u540E\uFF0Cnode\u662F\u5982\u4F55\u7EC4\u7EC7\u548C\u8C03\u7528\u8FD9\u4E9B\u5185\u90E8I/O\u6A21\u5757\uFF0C\u5E76\u4E14\u662F\u5982\u4F55\u63A5\u53D7\u548C\u6267\u884C\u5B83\u4EEC\u8FD4\u56DE\u7684\u7ED3\u679C\u5462\uFF1F</p><h2 id="node-\u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F" tabindex="-1">Node \u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F <a class="header-anchor" href="#node-\u600E\u4E48\u51B3\u5B9A\u4E0B\u4E00\u6B65\u8BE5\u8FD0\u884C\u54EA\u4E9B\u4EE3\u7801\uFF1F" aria-hidden="true">#</a></h2><p>\u5728 Node \u4E2D\u7EF4\u62A4\u7740\u4E24\u4E2A\u7C7B\u578B\u7684\u7EBF\u7A0B\uFF1A</p><h3 id="\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\uFF08\u4E5F\u79F0\u4E3A\u4E3B\u7EBF\u7A0B\uFF09\uFF1A" aria-hidden="true">#</a></h3><p>\u4E3B\u7EBF\u7A0B\u662Fnode\u542F\u52A8\u65F6\u6267\u884C\u7684\u7EBF\u7A0B\u3002\u8D1F\u8D23\u4EFB\u52A1\u7684\u7F16\u6392\uFF0C\u5305\u62EC\u6240\u6709\u4E8B\u4EF6\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CAI/O\u7684\u5F02\u6B65\u8BF7\u6C42\u7B49\u3002</p><p>node\u542F\u52A8\u65F6\uFF0C\u4F1A\u5B8C\u6210\u4E00\u7CFB\u5217\u7684\u521D\u59CB\u5316\u64CD\u4F5C\u4E4B\u540E\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u3002\u6BD4\u5982\uFF1A\u540C\u6B65\u4EFB\u52A1 \u53D1\u51FA\u5F02\u6B65\u8BF7\u6C42 \u89C4\u5212\u5B9A\u65F6\u5668\u751F\u6548\u7684\u65F6\u95F4 \u6267\u884Cprocess.nextTick() \u5904\u7406 require \u52A0\u8F7D\u7684\u6A21\u5757 \u6CE8\u518C\u4E8B\u4EF6\u56DE\u8C03\uFF0C\u542F\u52A8V8 engine\uFF0C\u7B49\u7B49\u3002</p><h3 id="\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A" tabindex="-1">\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A <a class="header-anchor" href="#\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\uFF1A" aria-hidden="true">#</a></h3><p>\u7EBF\u7A0B\u6C60\u7684\u6570\u91CF\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CFUV_THREADPOOL_SIZE\u914D\u7F6E\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7128\u4E2A\uFF0C\u9ED8\u8BA4\u4E3A4\u4E2A\u3002\u5B83\u4E13\u95E8\u5904\u7406\u7E41\u91CD\u7684\u9AD8\u6210\u672C\u4EFB\u52A1\u3002</p><ul><li><strong>I/O \u5BC6\u96C6\u578B\u4EFB\u52A1</strong> DNS\uFF1A\u7528\u4E8E DNS \u89E3\u6790\u7684\u6A21\u5757\uFF0Cdns.lookup(), dns.lookupService() FS\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF API\uFF0C\u9664\u4E86 fs.FSWatcher() \u548C\u663E\u5F0F\u8C03\u7528 API \u5982 fs.readFileSync() \u4E4B\u5916</li><li><strong>CPU \u5BC6\u96C6\u578B\u4EFB\u52A1</strong> Crypto\uFF1A\u7528\u4E8E\u52A0\u5BC6\u7684\u6A21\u5757 Zlib\uFF1A\u7528\u4E8E\u538B\u7F29\u7684\u6A21\u5757\uFF0C\u9664\u4E86\u90A3\u4E9B\u663E\u5F0F\u540C\u6B65\u8C03\u7528\u7684 API \u4E4B\u5916</li></ul><p>\u4E8B\u4EF6\u8F6E\u8BE2\u7EBF\u7A0B\u672C\u8EAB\u5E76\u4E0D\u7EF4\u62A4\u961F\u5217\uFF0C\u5B83\u6301\u6709\u4E00\u5806\u8981\u6C42\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u5E26I/O\u673A\u5236\u53BB\u76D1\u542C\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002 \u8FD9\u4E9B\u6587\u4EF6\u63CF\u8FF0\u7B26\u53EF\u80FD\u4EE3\u8868\u4E00\u4E2A\u7F51\u7EDC\u5957\u63A5\u5B57\uFF0C\u4E00\u4E2A\u76D1\u542C\u7684\u6587\u4EF6\u7B49\u7B49\u3002 \u5F53\u64CD\u4F5C\u7CFB\u7EDF\u786E\u5B9A\u67D0\u4E2A\u6587\u4EF6\u7684\u63CF\u8FF0\u7B26\u53D1\u751F\u53D8\u5316\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u5C06\u628A\u5B83\u8F6C\u6362\u6210\u5408\u9002\u7684\u4E8B\u4EF6\uFF0C\u7136\u540E\u89E6\u53D1\u4E0E\u8BE5\u4E8B\u4EF6\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u5219\u4F7F\u7528\u4E00\u4E2A\u771F\u5B9E\u7684\u961F\u5217\uFF0C\u91CC\u8FB9\u88C5\u7684\u90FD\u662F\u8981\u88AB\u5904\u7406\u7684\u4EFB\u52A1\u3002 \u4E00\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u4ECE\u8FD9\u4E2A\u961F\u5217\u4E2D\u53D6\u51FA\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5F00\u59CB\u5904\u7406\u5B83\u3002\u5F53\u5B8C\u6210\u4E4B\u540E\u8FD9\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u5411\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u4E2D\u53D1\u51FA\u4E00\u4E2A\u201C\u81F3\u5C11\u6709\u4E00\u4E2A\u4EFB\u52A1\u5B8C\u6210\u4E86\u201D\u7684\u6D88\u606F\uFF0C\u7136\u540E\u4E8B\u4EF6\u5FAA\u73AF\u7EBF\u7A0B\u89E6\u53D1\u4E0E\u8BE5\u4EFB\u52A1\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h2 id="\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u8D44\u6599\uFF1A<a href="https://juejin.im/post/5d439f016fb9a06b29752d5a" target="_blank" rel="noopener noreferrer">\u4ECE\u6E90\u7801\u89E3\u8BFB Node \u4E8B\u4EF6\u5FAA\u73AF</a></p><p>\u4E8B\u4EF6\u5FAA\u73AF\u662F Node \u7684\u6267\u884C\u6A21\u578B\uFF0C\u6267\u884C\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8D1F\u8D23\u5BF9\u5904\u7406\u7C7B\u4F3C\u7F51\u7EDC I/O \u7684\u975E\u963B\u585E\u5F02\u6B65\u8BF7\u6C42\u7B49\u3002\u540C\u65F6\u8FD8\u534F\u540C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u5904\u7406\u8BF8\u5982\u6587\u4EF6 I/O \u7B49\u9AD8\u6210\u672C\u4EFB\u52A1\u3002</p><p>\u5F53node\u542F\u52A8\u65F6\uFF0C\u4F1A\u5B8C\u6210\u4E00\u7CFB\u5217\u7684\u521D\u59CB\u5316\u64CD\u4F5C\u4E4B\u540E\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u3002\u6BD4\u5982\uFF1A\u540C\u6B65\u4EFB\u52A1 \u53D1\u51FA\u5F02\u6B65\u8BF7\u6C42 \u89C4\u5212\u5B9A\u65F6\u5668\u751F\u6548\u7684\u65F6\u95F4 \u6267\u884Cprocess.nextTick() \u5904\u7406 require \u52A0\u8F7D\u7684\u6A21\u5757 \u6CE8\u518C\u4E8B\u4EF6\u56DE\u8C03\u7B49\u7B49\u3002</p><blockquote><p>\u6211\u4EEC\u901A\u5E38\u5B9A\u4E49node\u5177\u6709\u4E8B\u4EF6\u9A71\u52A8\u3001\u5355\u7EBF\u7A0B\u3001\u5F02\u6B65 I/O \u7B49\u7279\u6027\u3002\u5176\u4E2D\u7684\u5355\u7EBF\u7A0B\u6307\u7684node\u8FD0\u884C\u7684\u4E3B\u7EBF\u7A0B\u3002</p></blockquote><p><img src="'+e+'" alt=""></p><p>\u4E0A\u56FE\u63CF\u8FF0\u4E86 Node \u7684\u8FD0\u884C\u539F\u7406\uFF0C\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4ECE\u4E0A\u5230\u4E0B\uFF0CNode \u88AB\u5206\u4E3A\u4E86\u56DB\u5C42\uFF1A</p><ul><li>\u5E94\u7528\u5C42\u3002JavaScript \u4EA4\u4E92\u5C42\uFF0C\u5E38\u89C1\u7684\u5C31\u662F Node \u7684\u6A21\u5757\uFF0C\u5982 http\uFF0Cfs\uFF0C\u6211\u4EEC\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u8C03\u7528\u7684API\u5C31\u662F\u8FD9\u5C42\u66B4\u9732\u51FA\u6765\u7684\u3002</li><li>V8 \u5F15\u64CE\u5C42\u3002\u5229\u7528 V8 \u6765\u89E3\u6790 JavaScript \u8BED\u6CD5\uFF0C\u8FDB\u800C\u548C\u4E0B\u5C42 API \u4EA4\u4E92</li><li>Node \u6865\u63A5\u5C42\u3002\u4E3A\u4E0A\u5C42\u6A21\u5757\u63D0\u4F9B\u548C\u7CFB\u7EDF\u5E95\u5C42\u7684\u8C03\u7528\u6216\u4EA4\u4E92\u7684\u8F6C\u8BD1\u901A\u4FE1</li><li>libuv \u5C42\u3002\u8DE8\u5E73\u53F0\u7684\u5E95\u5C42\u5C01\u88C5\uFF0C\u5B9E\u73B0\u4E86\u4E8B\u4EF6\u5FAA\u73AF\u3001\u6587\u4EF6\u64CD\u4F5C\u7B49\uFF0C\u662F Node \u5B9E\u73B0\u5F02\u6B65\u7684\u6838\u5FC3\u3002\u5B83\u5C06\u4E0D\u540C\u7684\u4EFB\u52A1\u5206\u914D\u7ED9\u4E0D\u540C\u7684\u7EBF\u7A0B\uFF0C\u5F62\u6210\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\uFF08event loop\uFF09\uFF0C\u4EE5\u5F02\u6B65\u7684\u65B9\u5F0F\u5C06\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\u7ED9 V8 \u5F15\u64CE\u3002</li></ul><p>\u8FD9\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u7ED9Node\u5E26\u6765\u4E86\u7A81\u51FA\u7684\u4F18\u52BF\uFF1A</p><p><strong>\u57FA\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u4EE5\u6784\u9020\u9AD8\u6027\u80FD\u670D\u52A1\u5668</strong></p><p>\u9AD8\u6027\u80FD\u8868\u73B0\u4E3A\u66F4\u5C11\u7684\u5185\u5B58\u5360\u7528\u548C\u66F4\u4F4E\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u4EE3\u4EF7\u3002 \u7ECF\u5178\u7684\u670D\u52A1\u5668\u6A21\u578B\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li><p>\u540C\u6B65\u5F0F\u3002\u4E00\u6B21\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5176\u4ED6\u8BF7\u6C42\u90FD\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\u3002</p></li><li><p>\u6BCF\u8FDB\u7A0B/\u6BCF\u8BF7\u6C42\u3002\u4F1A\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u591A\u4E2A\u8BF7\u6C42\uFF0C\u4F46\u7531\u4E8E\u7CFB\u7EDF\u8D44\u6E90\u6709\u9650\uFF0C\u4E0D\u5177\u5907\u6269\u5C55\u6027\u3002</p></li><li><p>\u6BCF\u7EBF\u7A0B/\u6BCF\u8BF7\u6C42\u3002\u4F1A\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u867D\u7136\u7EBF\u7A0B\u6BD4\u8FDB\u7A0B\u8F7B\u91CF\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5927\u578B\u7AD9\u70B9\u800C\u8A00\uFF0C\u4F9D\u7136\u4E0D\u591F\u3002\u56E0\u4E3A\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u8981\u5360\u7528\u4E00\u5B9A\u5185\u5B58\uFF0C\u5F53\u5927\u5E76\u53D1\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u5185\u5B58\u5C06\u4F1A\u5F88\u5FEB\u8017\u5149\u3002</p></li><li><p>\u4E8B\u4EF6\u9A71\u52A8\u3002\u901A\u8FC7\u4E8B\u4EF6\u9A71\u52A8\u7684\u65B9\u5F0F\u5904\u7406\u8BF7\u6C42\uFF0C\u65E0\u9700\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u989D\u5916\u7684\u7EBF\u7A0B\uFF0C\u53EF\u4EE5\u7701\u53BB\u521B\u5EFA\u548C\u9500\u6BC1\u7EBF\u7A0B\u7684\u5F00\u9500\uFF0C\u540C\u65F6\u64CD\u4F5C\u7CFB\u7EDF\u5728\u8C03\u5EA6\u4EFB\u52A1\u65F6\u56E0\u4E3A\u7EBF\u7A0B\u8F83\u5C11\uFF0C\u4E0A\u4E0B\u6587\u5207\u6362\u7684\u4EE3\u4EF7\u8F83\u4F4E\u3002\u8FD9\u79CD\u6A21\u5F0F\u88AB\u5F88\u591A\u5E73\u53F0\u6240\u91C7\u7528\uFF0C\u5982 Nginx(C)\u3001Event Machine(Ruby)\u3001AnyEvent(Perl)\u3001Twisted(Python)\uFF0C\u4EE5\u53CA\u672C\u6587\u8BA8\u8BBA\u7684 Node\u3002</p><p>\u4E8B\u4EF6\u9A71\u52A8\u7684\u5B9E\u8D28\uFF0C\u662F\u901A\u8FC7\u4E3B\u5FAA\u73AF\u6765\u52A0\u8F7D\u4E8B\u4EF6\u7684\u89E6\u53D1\u6765\u8FD0\u884C\u7A0B\u5E8F\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48 Ryan Dahl \u504F\u504F\u9009\u4E86 JavaScript \u5462\uFF1F\u5728\u5F00\u53D1 Node \u65F6\uFF0CRyan Dahl \u66FE\u7ECF\u8BC4\u4F30\u8FC7\u591A\u79CD\u8BED\u8A00\u3002\u6700\u7EC8\u7ED3\u8BBA\u4E3A\uFF1AC \u7684\u5F00\u53D1\u95E8\u69DB\u9AD8\uFF0C\u53EF\u4EE5\u9884\u89C1\u4E0D\u4F1A\u6709\u592A\u591A\u5F00\u53D1\u8005\u5C06\u5176\u4F5C\u4E3A\u65E5\u5E38\u7684\u4E1A\u52A1\u5F00\u53D1\uFF1BLua \u81EA\u8EAB\u5DF2\u7ECF\u5305\u542B\u5F88\u591A\u963B\u585E I/O \u5E93\uFF0C\u4E3A\u5176\u6784\u5EFA\u975E\u963B\u585E I/O \u5E93\u4E5F\u65E0\u6CD5\u6539\u53D8\u4EBA\u4EEC\u7EE7\u7EED\u4F7F\u7528\u963B\u585E I/O \u5E93\u7684\u4E60\u60EF\uFF1BRuby \u7684\u865A\u62DF\u673A\u6027\u80FD\u4E0D\u591F\u9AD8\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0CJavaScript \u6BD4 C \u5F00\u53D1\u95E8\u69DB\u4F4E\uFF0C\u6BD4 Lua \u5386\u53F2\u5305\u88B1\u5C11\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u5DF2\u7ECF\u6709\u5E7F\u6CDB\u7684\u4E8B\u4EF6\u9A71\u52A8\u5E94\u7528\uFF0CV8 \u5F15\u64CE\u53C8\u5177\u6709\u8D85\u9AD8\u6027\u80FD\uFF0C\u4E8E\u662F\uFF0CJavascript \u5C31\u6210\u4E3A\u4E86 Node \u7684\u5F00\u53D1\u8BED\u8A00\u3002</p></blockquote></li></ul><p><strong>\u57FA\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u4EE5\u5B9E\u73B0\u5F02\u6B65\u4EFB\u52A1\u8C03\u5EA6</strong></p><p>\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u5206\u4E3A\u771F\u5B9E\u5F02\u6B65 I/O \u548C\u975E\u771F\u5B9E I/O \u7684\u5F02\u6B65\u64CD\u4F5C\u4E24\u79CD\u3002</p><ul><li><p>\u771F\u5B9E\u5F02\u6B65 I/O \u7684\u5B9E\u8D28\u662F\u6307 I/O \u64CD\u4F5C\u4E0E CPU \u64CD\u4F5C\u5206\u79BB\u7684\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u975E\u963B\u585E\u7684\u8C03\u7528\u5E95\u5C42\u63A5\u53E3\u3002\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u6709\u7F51\u7EDC\u901A\u4FE1\u3001\u78C1\u76D8 I/O\u3001\u6570\u636E\u5E93\u8BBF\u95EE\u7B49\u3002</p></li><li><p>\u975E\u771F\u5B9E I/O \u7684\u5F02\u6B65\u64CD\u4F5C\u5B9E\u8D28\u662F\u7A0B\u5E8F\u8BBE\u8BA1\u7684\u4E00\u79CD\u6A21\u5F0F\uFF0C\u5F02\u6B65\u6267\u884C\u903B\u8F91\u8FD8\u662F\u5728CPU\u4E2D\u6267\u884C\u3002\u5982\u5F02\u6B65\u64CD\u4F5C\u7684\u5B9A\u65F6\u5668\uFF0C\u5982 setTimeout\u3001setInterval\uFF0C\u4EE5\u53CA process.nextTick\u3001setImmediate\u3001promise\u3002</p><blockquote><p>\u90A3\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u8981\u5B9E\u73B0\u8FD9\u79CD\u975E\u771F\u5B9E\u7684I/O\u5F02\u6B65\u6A21\u5F0F\u5462\uFF1F\u4E00\u4E2A Node \u8FDB\u7A0B\u53EA\u6709\u4E00\u4E2A\u4E3B\u7EBF\u7A0B\uFF0C\u5728\u4EFB\u4F55\u65F6\u523B\u90FD\u53EA\u6709\u4E00\u4E2A\u4E8B\u4EF6\u5728\u6267\u884C\u3002\u5982\u679C\u8FD9\u4E2A\u4E8B\u4EF6\u5360\u7528\u5927\u91CF CPU \u65F6\u95F4\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5C31\u8981\u7B49\u5F85\u5F88\u4E45\u3002\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528 process.nextTick()\u3001nextTick\u3001setImmediate\u3001promise\u7B49\u628A\u590D\u6742\u7684\u5DE5\u4F5C\u62C6\u6563\uFF0C\u53D8\u6210\u4E00\u4E2A\u4E2A\u8F83\u5C0F\u7684\u4E8B\u4EF6\u53BB\u6267\u884C\u3002\u5FAA\u73AF\u7684\u5B58\u5728\u4F7F\u5F97\u8FD9\u4E2A\u4E8B\u4EF6\u6BCF\u6B21\u6267\u884C\u4E00\u70B9\uFF0C\u591A\u6B21\u5FAA\u73AF\u540E\u5B8C\u6210\u4E8B\u4EF6\u3002\u8FD9\u6837\u4E8B\u4EF6\u5373\u5B8C\u6210\u4E86\u4E5F\u6CA1\u6709\u963B\u585E\u5176\u5B83\u4E8B\u4EF6\u7684\u6267\u884C\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u8FC7\u7A0B\u8FC7\u7A0B\u4E2D\u4F1A\u6267\u884C\u5176\u5B83\u8FDB\u5165\u7684\u4E8B\u4EF6\u3002</p></blockquote></li></ul><p>\u8FD9\u91CC\u6700\u5173\u952E\u5C31\u662F\u4E3B\u7EBF\u7A0B\u4E2D\u4E8B\u4EF6\u5FAA\u73AF\u7684\u673A\u5236\u3002\u4E0B\u8282\u8BB2\u89E3\u3002</p>',44),l=[r];function c(i,k,d,u,h,v){return o(),s("div",null,l)}var O=a(t,[["render",c]]);export{I as __pageData,O as default};