import{_ as e,c as r,o as t,a as i}from"./app.f1e974b0.js";var o="/assets/browser_process.1de85af3.png";const h='{"title":"render \u6E32\u67D3\u673A\u5236","description":"","frontmatter":{},"headers":[],"relativePath":"Browser/4-render/render.md"}',l={},n=i('<h1 id="render-\u6E32\u67D3\u673A\u5236" tabindex="-1">render \u6E32\u67D3\u673A\u5236 <a class="header-anchor" href="#render-\u6E32\u67D3\u673A\u5236" aria-hidden="true">#</a></h1><p>\u4ECE\u4E00\u9053\u7ECF\u5178\u7684\u9762\u8BD5\u9898\u5C55\u5F00\uFF1A</p><p>\u5728\u6D4F\u89C8\u5668\u91CC\uFF0C\u4ECE\u8F93\u5165 URL \u5230\u9875\u9762\u5C55\u793A\uFF0C\u8FD9\u4E2D\u95F4\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F</p><p><img src="'+o+'" alt=""></p><ol><li>\u89E6\u53D1\u5F53\u524D\u9875\u7684\u5378\u8F7D\u4E8B\u4EF6\u548C\u6536\u96C6\u9700\u8981\u91CA\u653E\u5185\u5B58</li><li><b>\u5408\u6210URL\uFF1A</b>\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u7528\u6237\u8F93\u5165\u7684\u4FE1\u606F\u5224\u65AD\u662F\u641C\u7D22\u8FD8\u662F\u7F51\u5740\uFF0C\u5982\u679C\u662F\u641C\u7D22\u5185\u5BB9\uFF0C\u5C31\u5C06\u641C\u7D22\u5185\u5BB9+\u9ED8\u8BA4\u641C\u7D22\u5F15\u64CE\u5408\u6210\u65B0\u7684URL\uFF1B\u5982\u679C\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\u7B26\u5408URL\u89C4\u5219\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u6839\u636EURL\u534F\u8BAE\uFF0C\u5728\u8FD9\u6BB5\u5185\u5BB9\u4E0A\u52A0\u4E0A\u534F\u8BAE\u5408\u6210\u5408\u6CD5\u7684URL\u3002\u6B64\u65F6\u6D4F\u89C8\u5668\u5BFC\u822A\u680F\u663E\u793Aloading\u72B6\u6001\uFF0C\u4F46\u662F\u9875\u9762\u8FD8\u662F\u5448\u73B0\u524D\u4E00\u4E2A\u9875\u9762\uFF0C\u8FD9\u662F\u56E0\u4E3A\u65B0\u9875\u9762\u7684\u54CD\u5E94\u6570\u636E\u8FD8\u6CA1\u6709\u83B7\u5F97\u3002\u6D89\u53CAURI URL URN\u6982\u5FF5\u89E3\u91CA</li><li><b>\u4F20\u9001URL\uFF1A</b>\u6D4F\u89C8\u5668\u901A\u8FC7\u8FDB\u7A0B\u95F4\u901A\u4FE1\uFF08IPC\uFF09\u5C06URL\u8BF7\u6C42\u53D1\u9001\u7ED9\u7F51\u7EDC\u8FDB\u7A0B</li><li><b>\u67E5\u627E\u7F13\u5B58\uFF1A</b>\u7F51\u7EDC\u8FDB\u7A0B\u83B7\u53D6\u5230URL\uFF0C\u5148\u53BB\u672C\u5730\u7F13\u5B58\u4E2D\u67E5\u627E\u662F\u5426\u6709\u7F13\u5B58\u6587\u4EF6\uFF0C\u5982\u679C\u6709\uFF0C\u62E6\u622A\u8BF7\u6C42\uFF0C\u76F4\u63A5200\u8FD4\u56DE\uFF1B\u5426\u5219\uFF0C\u8FDB\u5165\u7F51\u7EDC\u8BF7\u6C42\u8FC7\u7A0B\u3002\u6D89\u53CA[web\u7F13\u5B58\u77E5\u8BC6]</li><li><b>DNS\u5BFB\u5740\uFF1A</b>\u7F51\u7EDC\u8FDB\u7A0B\u8BF7\u6C42DNS\u8FD4\u56DE\u57DF\u540D\u5BF9\u5E94\u7684IP\u548C\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u4E4B\u524DDNS\u6570\u636E\u7F13\u5B58\u670D\u52A1\u7F13\u5B58\u8FC7\u5F53\u524D\u57DF\u540D\u4FE1\u606F\uFF0C\u5C31\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u4FE1\u606F\uFF1B\u5426\u5219\uFF0C\u53D1\u8D77\u8BF7\u6C42\u83B7\u53D6\u6839\u636E\u57DF\u540D\u89E3\u6790\u51FA\u6765\u7684IP\u548C\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u6CA1\u6709\u7AEF\u53E3\u53F7\uFF0Chttp\u9ED8\u8BA480\uFF0Chttps\u9ED8\u8BA4443\u3002\u5982\u679C\u662Fhttps\u8BF7\u6C42\uFF0C\u8FD8\u9700\u8981\u5EFA\u7ACBTLS\u8FDE\u63A5\u3002</li><li><b>TCP\u8FDE\u63A5\u6392\u961F\uFF1A</b>Chrome \u6709\u4E2A\u673A\u5236\uFF0C\u540C\u4E00\u4E2A\u57DF\u540D\u540C\u65F6\u6700\u591A\u53EA\u80FD\u5EFA\u7ACB 6 \u4E2ATCP \u8FDE\u63A5\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u540C\u65F6\u6709 10 \u4E2A\u8BF7\u6C42\u53D1\u751F\uFF0C\u90A3\u4E48\u5176\u4E2D 4 \u4E2A\u8BF7\u6C42\u4F1A\u8FDB\u5165\u6392\u961F\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u81F3\u8FDB\u884C\u4E2D\u7684\u8BF7\u6C42\u5B8C\u6210\u3002\u5982\u679C\u5F53\u524D\u8BF7\u6C42\u6570\u91CF\u5C11\u4E8E6\u4E2A\uFF0C\u4F1A\u76F4\u63A5\u5EFA\u7ACBTCP\u8FDE\u63A5\u3002</li><li><b>TCP\u5EFA\u7ACB\u8FDE\u63A5\uFF1A</b>TCP\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACB\u8FDE\u63A5</li><li><b>HTTP\u8BF7\u6C42\u6784\u5EFA\uFF1A</b>\u6784\u5EFAhttp\u8BF7\u6C42\uFF0C\u5E76\u4E14\u52A0\u4E0ATCP\u5934\u90E8\u2014\u2014\u5305\u62EC\u6E90\u7AEF\u53E3\u53F7\u3001\u76EE\u7684\u7A0B\u5E8F\u7AEF\u53E3\u53F7\u548C\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u5B8C\u6574\u6027\u7684\u5E8F\u53F7\uFF0C\u5411\u4E0B\u4F20\u8F93\u3002\u6D89\u53CA[HTTP\u603B\u7ED3]</li><li>\u7F51\u7EDC\u5C42\u5728\u6570\u636E\u5305\u4E0A\u52A0\u4E0AIP\u5934\u90E8\u2014\u2014\u5305\u62EC\u6E90IP\u5730\u5740\u548C\u76EE\u7684IP\u5730\u5740\uFF0C\u7EE7\u7EED\u5411\u4E0B\u4F20\u8F93\u5230\u5E95\u5C42</li><li>\u5E95\u5C42\u901A\u8FC7\u7269\u7406\u7F51\u7EDC\u4F20\u8F93\u7ED9\u76EE\u7684\u670D\u52A1\u5668\u4E3B\u673A</li><li>\u76EE\u7684\u670D\u52A1\u5668\u4E3B\u673A\u7F51\u7EDC\u5C42\u63A5\u6536\u5230\u6570\u636E\u5305\uFF0C\u89E3\u6790\u51FAIP\u5934\u90E8\uFF0C\u8BC6\u522B\u51FA\u6570\u636E\u90E8\u5206\uFF0C\u5C06\u89E3\u5F00\u7684\u6570\u636E\u5305\u5411\u4E0A\u4F20\u8F93\u5230\u4F20\u8F93\u5C42</li><li>\u76EE\u7684\u670D\u52A1\u5668\u4E3B\u673A\u4F20\u8F93\u5C42\u83B7\u53D6\u5230\u6570\u636E\u5305\uFF0C\u89E3\u6790\u51FATCP\u5934\u90E8\uFF0C\u8BC6\u522B\u7AEF\u53E3\uFF0C\u5C06\u89E3\u5F00\u7684\u6570\u636E\u5305\u5411\u4E0A\u4F20\u8F93\u5230\u5E94\u7528\u5C42</li><li>\u5E94\u7528\u5C42HTTP\u89E3\u6790\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u4F53\uFF0C\u5982\u679C\u9700\u8981\u91CD\u5B9A\u5411\uFF0CHTTP\u76F4\u63A5\u8FD4\u56DEHTTP\u54CD\u5E94\u6570\u636E\u7684\u72B6\u6001statusCode=301\u6216\u8005302\uFF0C\u540C\u65F6\u5728\u8BF7\u6C42\u5934\u7684Location\u5B57\u6BB5\u4E2D\u9644\u4E0A\u91CD\u5B9A\u5411\u5730\u5740\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636EstatusCode\u548CLocation\u8FDB\u884C\u91CD\u5B9A\u5411\u64CD\u4F5C\uFF1B\u5982\u679C\u4E0D\u662F\u91CD\u5B9A\u5411\uFF0C\u9996\u5148\u670D\u52A1\u5668\u8FD8\u4F1A\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u662F\u5426\u6709<code>If-None-Match</code> \u6216\u8005<code>If-Modified-Since</code>\u5B57\u6BB5\u7684\u503C\u6765\u6821\u9A8C\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u88AB\u66F4\u65B0\uFF0C\u5982\u679C\u6CA1\u6709\u66F4\u65B0\uFF0C\u5C31\u8FD4\u56DE304\u72B6\u6001\u7801\uFF0C\u76F8\u5F53\u4E8E\u544A\u8BC9\u6D4F\u89C8\u5668\u4E4B\u524D\u7684\u7F13\u5B58\u8FD8\u53EF\u4EE5\u4F7F\u7528\uFF0C\u5C31\u4E0D\u8FD4\u56DE\u65B0\u6570\u636E\u4E86\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u65B0\u6570\u636E\uFF0C200\u7684\u72B6\u6001\u7801\uFF0C\u5E76\u4E14\u5982\u679C\u60F3\u8981\u6D4F\u89C8\u5668\u7F13\u5B58\u6570\u636E\u7684\u8BDD\uFF0C\u5C31\u8BBE\u7F6E\u76F8\u5E94\u7684\u54CD\u5E94\u5934\u5B57\u6BB5\uFF1A<code>Cache-Control \u6216 Expires</code>\u3002\u6D89\u53CA[HTTP Cache \u7F13\u5B58\u7B56\u7565]</li><li>\u54CD\u5E94\u6570\u636E\u53C8\u987A\u7740\u5E94\u7528\u5C42\u2014\u2014\u4F20\u8F93\u5C42\u2014\u2014\u7F51\u7EDC\u5C42\u2014\u2014\u7F51\u7EDC\u5C42\u2014\u2014\u4F20\u8F93\u5C42\u2014\u2014\u5E94\u7528\u5C42\u7684\u987A\u5E8F\u8FD4\u56DE\u5230\u7F51\u7EDC\u8FDB\u7A0B</li><li>\u6570\u636E\u4F20\u8F93\u5B8C\u6210\uFF0C<strong>TCP\u56DB\u6B21\u6325\u624B\u65AD\u5F00\u8FDE\u63A5</strong>\u3002\u5982\u679C\uFF0C\u6D4F\u89C8\u5668\u6216\u8005\u670D\u52A1\u5668\u5728HTTP\u5934\u90E8\u52A0\u4E0A\u5982\u4E0B\u4FE1\u606F<code>Connection:Keep-Alive</code>\uFF0CTCP\u5C31\u4E00\u76F4\u4FDD\u6301\u8FDE\u63A5\u3002\u4FDD\u6301TCP\u8FDE\u63A5\u53EF\u4EE5\u7701\u4E0B\u4E0B\u6B21\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u63D0\u5347\u8D44\u6E90\u8BF7\u6C42\u52A0\u8F7D\u901F\u5EA6\uFF0C\u56E0\u4E3A\u5EFA\u7ACBTCP\u8FDE\u63A5\u662F\u975E\u5E38\u6D88\u8017\u8D44\u6E90\u548C\u65F6\u95F4\u7684\u3002\u6D89\u53CA[\u77ED\u8FDE\u63A5/\u957F\u8FDE\u63A5/\u6D41\u6C34\u7EBF\u8FDE\u63A5]</li><li>\u7F51\u7EDC\u8FDB\u7A0B\u5C06\u83B7\u53D6\u5230\u7684\u6570\u636E\u5305\u8FDB\u884C\u89E3\u6790\uFF0C\u6839\u636E\u54CD\u5E94\u5934\u4E2D\u7684<code>Content-type</code>\u6765\u5224\u65AD\u54CD\u5E94\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u5B57\u8282\u6D41\u7C7B\u578B\uFF0C\u5C31\u5C06\u8BE5\u8BF7\u6C42\u4EA4\u7ED9\u4E0B\u8F7D\u7BA1\u7406\u5668\uFF0C\u8BE5\u5BFC\u822A\u6D41\u7A0B\u7ED3\u675F\uFF0C\u4E0D\u518D\u8FDB\u884C\uFF1B\u5982\u679C\u662F<code>text/html</code>\u7C7B\u578B\uFF0C\u5C31\u901A\u77E5\u6D4F\u89C8\u5668\u8FDB\u7A0B\u83B7\u53D6\u5230\u6587\u6863\u51C6\u5907\u6E32\u67D3\u3002\u6D89\u53CA[MIME \u6807\u8BC6\u8D44\u6E90\u7C7B\u578B]</li><li>\u6D4F\u89C8\u5668\u8FDB\u7A0B\u83B7\u53D6\u5230\u901A\u77E5\uFF0C\u6839\u636E\u5F53\u524D\u9875\u9762B\u662F\u5426\u662F\u4ECE\u9875\u9762A\u6253\u5F00\u7684\u5E76\u4E14\u548C\u9875\u9762A\u662F\u5426\u662F\u540C\u4E00\u4E2A\u7AD9\u70B9\uFF08\u6839\u57DF\u540D\u548C\u534F\u8BAE\u4E00\u6837\u5C31\u88AB\u8BA4\u4E3A\u662F\u540C\u4E00\u4E2A\u7AD9\u70B9\uFF09\uFF0C\u5982\u679C\u6EE1\u8DB3\u4E0A\u8FF0\u6761\u4EF6\uFF0C\u5C31\u590D\u7528\u4E4B\u524D\u7F51\u9875\u7684\u8FDB\u7A0B\uFF0C\u5426\u5219\uFF0C\u65B0\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u6E32\u67D3\u8FDB\u7A0B</li><li>\u6D4F\u89C8\u5668\u4F1A\u53D1\u51FA\u201C\u63D0\u4EA4\u6587\u6863\u201D\u7684\u6D88\u606F\u7ED9\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u6536\u5230\u6D88\u606F\u540E\uFF0C\u4F1A\u548C\u7F51\u7EDC\u8FDB\u7A0B\u5EFA\u7ACB\u4F20\u8F93\u6570\u636E\u7684\u201C\u7BA1\u9053\u201D\uFF0C\u6587\u6863\u6570\u636E\u4F20\u8F93\u5B8C\u6210\u540E\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u8FD4\u56DE\u201C\u786E\u8BA4\u63D0\u4EA4\u201D\u7684\u6D88\u606F\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B</li><li>\u6D4F\u89C8\u5668\u6536\u5230\u201C\u786E\u8BA4\u63D0\u4EA4\u201D\u7684\u6D88\u606F\u540E\uFF0C\u4F1A\u66F4\u65B0\u6D4F\u89C8\u5668\u7684\u9875\u9762\u72B6\u6001\uFF0C\u5305\u62EC\u4E86\u5B89\u5168\u72B6\u6001\u3001\u5730\u5740\u680F\u7684 URL\u3001\u524D\u8FDB\u540E\u9000\u7684\u5386\u53F2\u72B6\u6001\uFF0C\u5E76\u66F4\u65B0web\u9875\u9762\uFF0C\u6B64\u65F6\u7684web\u9875\u9762\u662F\u7A7A\u767D\u9875</li><li>\u6E32\u67D3\u8FDB\u7A0B\u5BF9\u6587\u6863\u8FDB\u884C\u9875\u9762\u89E3\u6790\u548C\u5B50\u8D44\u6E90\u52A0\u8F7D\uFF0CHTML \u901A\u8FC7HTM \u89E3\u6790\u5668\u8F6C\u6210<strong>DOM</strong>\uFF08\u4E8C\u53C9\u6811\u7C7B\u4F3C\u7ED3\u6784\u7684\u4E1C\u897F\uFF09\uFF0CCSS\u901A\u8FC7CSS\u89E3\u91CA\u5668\u8F6C\u6210<strong>CSSOM</strong>\uFF0CJS\u6267\u884C\u4F1A\u963B\u585EDOM\u89E3\u6790\uFF0CCSS\u52A0\u8F7D\u89E3\u6790\u4F1A\u963B\u585EJS\u7684\u6267\u884C\u3002</li><li>DOM\u548CCSSOM\u7ED3\u5408\uFF0C\u5F62\u6210<strong>render</strong>\uFF0C\u4E3B\u8981\u662F\u8FDB\u884C\u6837\u5F0F\u8BA1\u7B97\uFF08\u4E0D\u5305\u542BHTML\u7684\u5177\u4F53\u5143\u7D20\u548C\u5143\u7D20\u8981\u753B\u7684\u5177\u4F53\u4F4D\u7F6E\uFF09\u3002</li><li><b>Layout</b> \u5E03\u5C40\u9636\u6BB5\uFF1A\u9700\u8981\u5B8C\u6210\u4E24\u4EF6\u4E8B\uFF1A\u521B\u5EFA\u5E03\u5C40\u6811\u548C\u5E03\u5C40\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u51FA\u6BCF\u4E2A\u5143\u7D20\u5177\u4F53\u7684\u5BBD\u9AD8\u989C\u8272\u4F4D\u7F6E\u3002</li><li>\u6839\u636E\u6837\u5F0F\u89C4\u5219\uFF0C\u8FDB\u884C\u5206\u5C42<strong>layer</strong></li><li>\u6839\u636E\u5206\u5C42\u4FE1\u606F\uFF0C\u9010\u5C42\u5F00\u59CB\u7ED8\u5236<strong>Paint</strong></li><li>\u7ED8\u5236\u6570\u636E\u5355\u72EC\u5728\u5408\u6210\u7EBF\u7A0B\u8FDB\u884C\u5206\u5757<strong>Tiles</strong></li><li>\u6BCF\u5757\u8FDB\u884C\u5149\u6805\u5316<strong>Rester</strong></li><li>\u6700\u540E\u5C06\u5149\u6805\u5316\u540E\u7684\u50CF\u7D20\u4FE1\u606F\u63D0\u4EA4\u7ED9\u6D4F\u89C8\u5668\u8FDB\u884C\u663E\u793A\u5728\u5C4F\u5E55\u4E2D</li></ol><p><strong>\u53C2\u8003\u8D44\u6599</strong></p><p><a href="https://time.geekbang.org/column/intro/216" target="_blank" rel="noopener noreferrer">\u6781\u5BA2\u4E13\u680F-\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5</a><br><a href="http://www.dailichun.com/2018/03/12/whenyouenteraurl.html" target="_blank" rel="noopener noreferrer">\u4ECE\u8F93\u5165URL\u5230\u9875\u9762\u52A0\u8F7D\u7684\u8FC7\u7A0B\uFF1F\u5982\u4F55\u7531\u4E00\u9053\u9898\u5B8C\u5584\u81EA\u5DF1\u7684\u524D\u7AEF\u77E5\u8BC6\u4F53\u7CFB\uFF01</a></p>',7),s=[n];function a(c,d,T,p,_,P){return t(),r("div",null,s)}var C=e(l,[["render",a]]);export{h as __pageData,C as default};