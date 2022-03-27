import{_ as e,c as o,o as r,a as l}from"./app.9dbb06c5.js";var i="/assets/multirepo-monorepo.079fd225.webp";const g='{"title":"Monorepo","description":"","frontmatter":{},"headers":[{"level":2,"title":"what: monorepo \u662F\u4EC0\u4E48","slug":"what-monorepo-\u662F\u4EC0\u4E48"},{"level":2,"title":"why: \u4E3A\u4EC0\u4E48\u7528 monorepo \uFF0C\u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u4E86\u95EE\u9898","slug":"why-\u4E3A\u4EC0\u4E48\u7528-monorepo-\uFF0C\u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u4E86\u95EE\u9898"},{"level":3,"title":"\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E","slug":"\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E"},{"level":3,"title":"\u4F9D\u8D56\u5B89\u88C5\u4E0E\u7BA1\u7406","slug":"\u4F9D\u8D56\u5B89\u88C5\u4E0E\u7BA1\u7406"},{"level":3,"title":"\u4EE3\u7801\u5F00\u53D1\u548C\u8C03\u8BD5","slug":"\u4EE3\u7801\u5F00\u53D1\u548C\u8C03\u8BD5"},{"level":3,"title":"\u5355\u5143\u6D4B\u8BD5","slug":"\u5355\u5143\u6D4B\u8BD5"},{"level":3,"title":"\u4EE3\u7801\u6784\u5EFA\u548C\u90E8\u7F72","slug":"\u4EE3\u7801\u6784\u5EFA\u548C\u90E8\u7F72"},{"level":3,"title":"\u9879\u76EE\u53D1\u5E03\u65F6\u66F4\u65B0\u7248\u672C\u53F7","slug":"\u9879\u76EE\u53D1\u5E03\u65F6\u66F4\u65B0\u7248\u672C\u53F7"},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"how: monrepo \u5B9E\u8DF5","slug":"how-monrepo-\u5B9E\u8DF5"},{"level":3,"title":"Monorepo \u7BA1\u7406\u6700\u4F73\u5B9E\u8DF5","slug":"monorepo-\u7BA1\u7406\u6700\u4F73\u5B9E\u8DF5"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Technology/micro-frontend/monorepo.md"}',n={},a=l('<h1 id="monorepo" tabindex="-1">Monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h1><h2 id="what-monorepo-\u662F\u4EC0\u4E48" tabindex="-1">what: monorepo \u662F\u4EC0\u4E48 <a class="header-anchor" href="#what-monorepo-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><blockquote><p>monorepo: monolithic repository \u5355\u4E00\u4ED3\u5E93</p></blockquote><p>Monorepo \u662F\u4E00\u79CD\u7BA1\u7406\u56E2\u961F\u4EE3\u7801\u7684\u65B9\u5F0F\uFF0C\u5B83\u6452\u5F03\u4E86\u4F20\u7EDF\u4E00\u4E2A\u9879\u76EE\u4E00\u4E2A\u4ED3\u5E93\u7684\u65B9\u5F0F\uFF0C\u800C\u662F\u5728\u4E00\u4E2A\u9879\u76EE\u4ED3\u5E93 (repo) \u4E2D\u7BA1\u7406\u591A\u4E2A\u5B50\u9879\u76EE (package)\u7684\u65B9\u5F0F\u3002</p><p><img src="'+i+`" alt=""></p><h2 id="why-\u4E3A\u4EC0\u4E48\u7528-monorepo-\uFF0C\u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u4E86\u95EE\u9898" tabindex="-1">why: \u4E3A\u4EC0\u4E48\u7528 monorepo \uFF0C\u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u4E86\u95EE\u9898 <a class="header-anchor" href="#why-\u4E3A\u4EC0\u4E48\u7528-monorepo-\uFF0C\u5B83\u89E3\u51B3\u4E86\u4EC0\u4E48\u4E86\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u8981\u77E5\u9053 monorepo \u65B9\u5F0F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF0C\u5C31\u9700\u8981\u5148\u4E86\u89E3\u4E0E\u4E4B\u5BF9\u5E94\u7684\u4F20\u7EDF\u591A\u9879\u76EE\u591A\u4ED3\u5E93\u65B9\u5F0F(multiple repository)\u7684\u5F0A\u7AEF\u3002</p><p>\u6211\u4EEC\u4ECE\u4E00\u4E2A\u9879\u76EE\u5F00\u53D1\u5DE5\u4F5C\u6D41\u7684\u89D2\u5EA6\u6765\u6BD4\u8F83\u4E24\u8005\u4F18\u52A3\u52BF\uFF1A</p><h3 id="\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>multirepo\uFF1A\u7C7B\u4F3Clinter\u4E4B\u7C7B\u914D\u7F6E\u3001CI/CD \u7684\u914D\u7F6E\u7B49\uFF0C\u6BCF\u4E2A\u72EC\u7ACB\u4ED3\u5E93\u90FD\u8981\u91CD\u590D\u4E00\u904D\uFF0C\u867D\u7136\u540C\u7C7B\u9879\u76EE\u53EF\u4EE5\u81EA\u5B9A\u4E49\u811A\u624B\u67B6\u6765\u7EDF\u4E00\uFF0C\u4F46\u50CF\u5168\u6808\u9879\u76EE\u524D\u540E\u7AEF\u9879\u76EE\u7ED3\u6784\u5DEE\u5F02\u8F83\u5927\u65F6\uFF0C\u65E0\u6CD5\u7EDF\u4E00\u811A\u624B\u67B6\uFF0C\u8FD9\u7C7B\u914D\u7F6E\u4EE3\u7801\u4ECD\u4F1A\u91CD\u590D\u914D\u7F6E</li><li>monorepo\uFF1A\u5355\u4E00\u4EE3\u7801\u4ED3\u5E93\u53EF\u4EE5\u5C06\u914D\u7F6E\u7EDF\u4E00\u6536\u655B\u5230\u6839\u76EE\u5F55\u4E0A\u914D\u7F6E\u3002</li></ul><h3 id="\u4F9D\u8D56\u5B89\u88C5\u4E0E\u7BA1\u7406" tabindex="-1">\u4F9D\u8D56\u5B89\u88C5\u4E0E\u7BA1\u7406 <a class="header-anchor" href="#\u4F9D\u8D56\u5B89\u88C5\u4E0E\u7BA1\u7406" aria-hidden="true">#</a></h3><p>multirepo\uFF1A\u4F9D\u8D56\u95EE\u9898\u4E3B\u8981\u96C6\u4E2D\u5728\u4EE5\u4E0B\u4E09\u4E2A\u65B9\u9762\uFF1A</p><ul><li>\u4F9D\u8D56\u91CD\u590D\u5B89\u88C5\uFF0C\u6D6A\u8D39\u78C1\u76D8\u7A7A\u95F4\uFF0C\u7279\u522B\u662F\u4E00\u4E9B\u5DE5\u5177\u6027\u4F9D\u8D56\u5305\uFF0C\u53EF\u80FD\u5728\u6BCF\u4E2A\u9879\u76EE\u91CC\u90FD\u4F1A\u88AB\u5B89\u88C5\u4E00\u904D\uFF1B</li><li>\u672C\u5730\u4F9D\u8D56 link \u5173\u7CFB\u96BE\u4EE5\u7BA1\u7406\uFF0C\u5F53\u591A\u4E2A\u9879\u76EE\u95F4\u6709\u4F9D\u8D56\u5173\u7CFB\u65F6\uFF0C\u9700\u8981\u4EBA\u4E3A\u7BA1\u7406 npm link \u548C npm unlink \u64CD\u4F5C</li></ul><p>\u53E6\u5916\u7684\u95EE\u9898\u662F npm / yarn \u8FD9\u4E24\u7C7B\u5305\u7BA1\u7406\u5668\u81EA\u8EAB\u91C7\u7528\u6241\u5E73\u5316\u4F9D\u8D56\u7BA1\u7406\u673A\u5236\u4EA7\u751F\u7684\u95EE\u9898\uFF1A</p><ul><li>\u9879\u76EE\u91CC node_modules \u4E2D\u7684\u4F9D\u8D56\u8DDF\u9879\u76EE package.json \u4E2D\u58F0\u660E\u7684\u4F9D\u8D56\u4E0D\u4E00\u81F4\uFF0C\u4E5F\u5C31\u4EA7\u751F\u4E86\u201C\u5E7D\u7075\u4F9D\u8D56\u201D\u95EE\u9898\u3002</li><li><strong>\u5E7D\u7075\u4F9D\u8D56 Phantom dependencies</strong>\uFF0C\u6307\u7684\u662F\u5728\u9879\u76EE\u5185\u53EF\u4EE5\u5F15\u7528\u672A\u5728 package.json \u4E2D\u5B9A\u4E49\u7684\u5305\u3002</li><li><strong>\u91CD\u590D\u4F9D\u8D56</strong>\uFF0C\u901A\u8FC7npm/yarn \u6241\u5E73\u5316\u4F9D\u8D56\u7BA1\u7406\u867D\u7136\u4F1A\u63D0\u5347\u4E00\u4E2A\u5171\u540C\u7248\u672C\u7684\u4F9D\u8D56\uFF0C\u4F46\u662F\u5F53\u4F9D\u8D56\u6709\u4E0D\u540C\u7248\u672C\u65F6\u4ECD\u4F1A\u88AB\u91CD\u590D\u5B89\u88C5\u5728\u5404\u81EA\u7684node_modules \u4E2D\u3002</li></ul><p>monorepo\uFF1A\u5355\u4E00\u4EE3\u7801\u5E93\u53EF\u4EE5\u501F\u52A9\u5DE5\u5177\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\u3002</p><h3 id="\u4EE3\u7801\u5F00\u53D1\u548C\u8C03\u8BD5" tabindex="-1">\u4EE3\u7801\u5F00\u53D1\u548C\u8C03\u8BD5 <a class="header-anchor" href="#\u4EE3\u7801\u5F00\u53D1\u548C\u8C03\u8BD5" aria-hidden="true">#</a></h3><ul><li>multirepo: <ul><li>\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4E0D\u7BA1\u662F\u5728 IDE \u8FD8\u662F\u547D\u4EE4\u884C\u7EC8\u7AEF\uFF0C\u591A\u4EE3\u7801\u5E93\u9700\u8981\u6765\u56DE\u5207\u6362\u3002</li><li>\u8C03\u8BD5\u4EE3\u7801\u65F6\uFF0C\u5982\u679C\u591A\u4E2A\u5B50\u9879\u76EE\u90FD\u4F9D\u8D56\u4E8E\u67D0\u4E9B\u5171\u540C\u7684\u6A21\u5757\u65F6\uFF0C\u5E38\u89C1\u7684\u505A\u6CD5\u662F\u5C06\u8FD9\u4E9B\u516C\u5171\u6A21\u5757\u4EE3\u7801\u53D1\u5E03\u6210 npm \u5305\uFF0C\u5404\u4E2A\u5B50\u9879\u76EE\u901A\u8FC7 npm \u5305\u5B89\u88C5\u6765\u4F7F\u7528\u3002\u4F46\u5982\u679C\u60F3\u8981\u672C\u5730\u8C03\u8BD5\u8FD9\u4E9B\u516C\u5171\u4F9D\u8D56\u5305\u65F6\uFF0C\u9700\u8981\u901A\u8FC7 npm link \u7684\u65B9\u5F0F\u5C06\u4F9D\u8D56\u5305\u94FE\u63A5\u5230\u9700\u8981\u8C03\u8BD5\u7684\u9879\u76EE\u4E2D\u3002\u4E00\u65E6 link \u7684\u9879\u76EE\u591A\u4E86\uFF0C\u624B\u52A8\u53BB\u7BA1\u7406 link / unlink \u64CD\u4F5C\u5C31\u5F88\u5FC3\u7D2F\u3002</li></ul></li></ul><h3 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1">\u5355\u5143\u6D4B\u8BD5 <a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a></h3><ul><li>multirepo: \u591A\u4E2A\u9879\u76EE\u591A\u4E2A\u4ED3\u5E93\u5C31\u8981\u591A\u5957\u5355\u5143\u6D4B\u8BD5\u7684\u914D\u7F6E\u548C\u811A\u672C\u547D\u4EE4\uFF0C\u7136\u540E\u591A\u4E2A\u9879\u76EE\u5206\u522B\u6267\u884C test \u7684 run-script \u547D\u4EE4\u3002</li><li>monorepo: \u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A <ul><li>\u5728\u6839\u76EE\u5F55\u4E0A\u7EDF\u4E00\u751F\u6210\u5355\u5143\u6D4B\u8BD5\u7684\u914D\u7F6E\uFF0C\u5168\u5C40\u8DD1 test \u7684 run-script \u547D\u4EE4\u3002\u597D\u5904\u662F\u53EF\u4EE5\u65B9\u4FBF\u7EDF\u8BA1\u6240\u6709\u4EE3\u7801\u7684\u6D4B\u8BD5\u8986\u76D6\u7387\u3002\u574F\u5904\u662F\u5982\u679Cpackages \u5404\u4E2A\u5B50\u9879\u76EE\u6BD4\u8F83\u5F02\u6784\uFF08\u5982\u5C0F\u7A0B\u5E8F\uFF0C\u5B89\u684C\u3001ios\u3001\u524D\u7AEF\uFF0Cnode \u670D\u52A1\u7AEF\u7B49\uFF09\uFF0C\u7EDF\u4E00\u7684\u6D4B\u8BD5\u914D\u7F6E\u4E0D\u592A\u597D\u7F16\u5199\u3002</li><li>\u6BCF\u4E2A package \u5355\u72EC\u8FDB\u884C\u5355\u6D4B\u914D\u7F6E\u548C test \u547D\u4EE4\uFF0C\u7136\u540E\u5728\u6839\u76EE\u5F55\u4E0B\u501F\u52A9\u5B9E\u73B0 monorepo \u65B9\u5F0F\u7684\u5DE5\u5177\u6279\u91CF\u6267\u884C test \u7684 run-script \u547D\u4EE4\u3002\u6BD4\u5982<code>\u200Byarn workspace run test</code>\u200B\uFF0C\u574F\u5904\u662F\u4E0D\u597D\u7EDF\u4E00\u6536\u96C6\u6240\u6709\u4EE3\u7801\u7684\u6D4B\u8BD5\u8986\u76D6\u7387\u3002</li></ul></li></ul><h3 id="\u4EE3\u7801\u6784\u5EFA\u548C\u90E8\u7F72" tabindex="-1">\u4EE3\u7801\u6784\u5EFA\u548C\u90E8\u7F72 <a class="header-anchor" href="#\u4EE3\u7801\u6784\u5EFA\u548C\u90E8\u7F72" aria-hidden="true">#</a></h3><ul><li>multirepo: \u8FD9\u4E2A\u9636\u6BB5\u95EE\u9898\u5927\u81F4\u4E0A\u540C\u9879\u76EE\u914D\u7F6E\u4E00\u6837\uFF0C\u4EE3\u7801\u6784\u5EFA\u5DE5\u5177\u7684\u914D\u7F6E\u548C\u811A\u672C\u547D\u4EE4\u4F1A\u5728\u5404\u4E2A\u9879\u76EE\u4ED3\u5E93\u91CC\u90FD\u5B9E\u73B0\u4E00\u5957\uFF0C\u65E0\u6CD5\u590D\u7528\u3002\u5728\u64CD\u4F5C\u4E0A\u9700\u8981\u4E0D\u65AD\u7684\u91CD\u590D <code>cd</code> \u547D\u4EE4\u5207\u6362\u76EE\u5F55\u3002</li><li>monorepo\uFF1A\u5C06\u8FD9\u4E9B\u811A\u672C\u7EDF\u4E00\u5230\u6839\u76EE\u5F55\u4E0A\u5B9E\u73B0\uFF0C\u7136\u540E\u6279\u91CF\u6267\u884C\u3002\u6BD4\u5982\u53EF\u4EE5\u4F7F\u7528 <code>scripty</code> \u5305\u7684\u529F\u80FD\u5C06\u6240\u6709\u811A\u672C\u6536\u655B\u5230\u6839\u76EE\u5F55\u4E0A\u7684 <code>scripts</code> \u76EE\u5F55\u4E2D\u3002</li></ul><p>\u5728 monorepo \u65B9\u5F0F\u4E0B\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u7A81\u51FA\u7684\u95EE\u9898\u662F\uFF1A</p><ul><li>\u5982\u4F55\u5B9E\u73B0\u589E\u91CF\u6784\u5EFA\uFF1A\u4E3B\u52A8\u8BC6\u522B\u51FA\u6709\u4EE3\u7801\u53D8\u52A8\u7684\u4ED3\u5E93\uFF0C\u5B9E\u73B0\u589E\u91CF\u6784\u5EFA\uFF0C\u51CF\u5C11\u6574\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u65F6\u95F4\u3002</li><li>\u5982\u4F55\u5B9E\u73B0\u4EE5\u62D3\u6251\u6392\u5E8F\u89C4\u5219\u8FDB\u884C\u6784\u5EFA\uFF1A\u5982\u679C\u5404\u4E2Apackage\u4E4B\u95F4\u5B58\u5728\u76F8\u4E92\u4F9D\u8D56\uFF0C\u6BD4\u5982\u9879\u76EEA\u4F9D\u8D56\u4E8E\u81EA\u5B9A\u4E49\u7684\u4E1A\u52A1\u7EC4\u4EF6\u5E93B\uFF0C\u5219\u9700\u8981\u7EC4\u4EF6\u5E93B\u6784\u5EFA\u6210\u529F\u540E\uFF0C\u6267\u884C\u9879\u76EEA\u7684\u6784\u5EFA\u3002</li></ul><blockquote><p>\u4E00\u4E2A\u8F83\u5927\u7684\u5DE5\u7A0B\u5F80\u5F80\u88AB\u5212\u5206\u6210\u8BB8\u591A\u5B50\u5DE5\u7A0B\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E9B\u5B50\u5DE5\u7A0B\u79F0\u4F5C\u6D3B\u52A8(activity)\u3002\u5728\u6574\u4E2A\u5DE5\u7A0B\u4E2D\uFF0C\u6709\u4E9B\u5B50\u5DE5\u7A0B(\u6D3B\u52A8)\u5FC5\u987B\u5728\u5176\u5B83\u6709\u5173\u5B50\u5DE5\u7A0B\u5B8C\u6210\u4E4B\u540E\u624D\u80FD\u5F00\u59CB\uFF0C\u6709\u4E9B\u53EF\u4EE5\u5B89\u6392\u5728\u4EFB\u4F55\u65F6\u95F4\u5F00\u59CB\u3002\u4E3A\u4E86\u5F62\u8C61\u5730\u53CD\u6620\u51FA\u6574\u4E2A\u5DE5\u7A0B\u4E2D\u5404\u4E2A\u5B50\u5DE5\u7A0B(\u6D3B\u52A8)\u4E4B\u95F4\u7684\u5148\u540E\u5173\u7CFB\uFF0C\u53EF\u7528\u4E00\u4E2A\u6709\u5411\u56FE\u6765\u8868\u793A\uFF0C\u6211\u4EEC\u628A\u8FD9\u79CD\u9876\u70B9\u8868\u793A\u6D3B\u52A8\u3001\u8FB9\u8868\u793A\u6D3B\u52A8\u95F4\u5148\u540E\u5173\u7CFB\u7684\u6709\u5411\u56FE\u79F0\u505A\u9876\u70B9\u6D3B\u52A8\u7F51(Activity On Vertex network)\uFF0C\u7B80\u79F0AOV\u7F51\u3002 \u4E00\u4E2AAOV\u7F51\u4E0D\u5E94\u8BE5\u5E26\u6709\u56DE\u8DEF\uFF0C\u56E0\u4E3A\u82E5\u5E26\u6709\u56DE\u8DEF\uFF0C\u5219\u56DE\u8DEF\u4E0A\u7684\u6240\u6709\u6D3B\u52A8\u90FD\u65E0\u6CD5\u8FDB\u884C\u3002\u6BD4\u5982\u4E00\u4E2A\u5177\u6709\u4E09\u4E2A\u9876\u70B9\u7684\u56DE\u8DEF\uFF0CA -&gt; B -&gt; C -&gt; A \u5F62\u6210\u4E86\u95ED\u73AF\uFF0C\u8FD9\u79CD\u60C5\u51B5\u82E5\u5728\u7A0B\u5E8F\u4E2D\u51FA\u73B0\uFF0C\u5219\u79F0\u4E3A\u6B7B\u9501\u6216\u6B7B\u5FAA\u73AF\uFF0C\u662F\u5FC5\u987B\u907F\u514D\u7684\u3002 \u4E00\u4E2AAOV\u7F51\u5E94\u8BE5\u662F\u4E00\u4E2A\u6709\u5411\u65E0\u73AF\u56FE\uFF0C\u6240\u6709\u6D3B\u52A8\u53EF\u6392\u5217\u6210\u4E00\u4E2A\u7EBF\u6027\u5E8F\u5217\uFF0C\u6211\u4EEC\u628A\u6B64\u5E8F\u5217\u53EB\u505A\u62D3\u6251\u5E8F\u5217(Topological order)\uFF0C\u7531AOV\u7F51\u6784\u9020\u62D3\u6251\u5E8F\u5217\u7684\u8FC7\u7A0B\u53EB\u505A\u62D3\u6251\u6392\u5E8F(Topological sort)\u3002AOV\u7F51\u7684\u62D3\u6251\u5E8F\u5217\u4E0D\u662F\u552F\u4E00\u7684\uFF0C\u6EE1\u8DB3\u4E0A\u8FF0\u5B9A\u4E49\u7684\u4EFB\u4E00\u7EBF\u6027\u5E8F\u5217\u90FD\u79F0\u4F5C\u5B83\u7684\u62D3\u6251\u5E8F\u5217\u3002\u6BD4\u5982\u597D\u50CF\u4F60\u65E9\u4E0A\u7A7F\u8863\u670D\uFF0C\u53EF\u4EE5\u5148\u7A7F\u4E0A\u8863\u4E5F\u53EF\u4EE5\u5148\u7A7F\u88E4\u5B50\uFF0C\u53EA\u8981\u4FDD\u8BC1\u5185\u8863\u5728\u5916\u5957\u4E4B\u524D\u7A7F\u5C31\u884C\u3002</p></blockquote><h3 id="\u9879\u76EE\u53D1\u5E03\u65F6\u66F4\u65B0\u7248\u672C\u53F7" tabindex="-1">\u9879\u76EE\u53D1\u5E03\u65F6\u66F4\u65B0\u7248\u672C\u53F7 <a class="header-anchor" href="#\u9879\u76EE\u53D1\u5E03\u65F6\u66F4\u65B0\u7248\u672C\u53F7" aria-hidden="true">#</a></h3><p>\u53D1\u7248\u7684\u65F6\u5019\u9700\u8981\u66F4\u65B0\u7248\u672C\u53F7\uFF0C\u73B0\u4EE3\u9879\u76EE\u5DE5\u7A0B\u57FA\u672C\u90FD\u662F\u9075\u5FAA\u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303(semVer: Semantic Versioning)\uFF1A<code>Major.minor.patch [-alpha / -beta / -rc]</code>\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u6D89\u53CA\u7684\u95EE\u9898\u662F\u5982\u679C\u66F4\u65B0\u7248\u672C\u53F7\uFF1F</p><ul><li>\u4E00\u79CD\u5C31\u662F\u6700\u539F\u59CB\u7684\u624B\u52A8\u66F4\u65B0\u7248\u672C\u53F7\uFF0C\u8FD9\u79CD\u5BB9\u6613\u5931\u8BEF\uFF0C\u5E76\u4E0D\u91C7\u7528\u3002</li><li>\u53E6\u4E00\u79CD\u662F\u6839\u636E git commit \u63D0\u4EA4\u8BB0\u5F55\u6765\u66F4\u65B0\u3002\u901A\u5E38\u7EA6\u5B9A\u89C4\u5219\u5982\u4E0B\uFF1A <ul><li>\u5B58\u5728fix\u63D0\u4EA4\uFF1A \u9700\u8981\u66F4\u65B0 patch \u7248\u672C</li><li>\u5B58\u5728feat\u63D0\u4EA4\uFF1A \u9700\u8981\u66F4\u65B0 minor \u7248\u672C</li><li>\u5B58\u5728BREAKING CHANGE\u63D0\u4EA4\uFF1A \u9700\u8981\u66F4\u65B0 major \u5927\u7248\u672C</li></ul></li></ul><blockquote><p>BREAKING CHANGE \u63D0\u4EA4\u662F\u5728\u811A\u6CE8 footer \u4E2D\u5305\u542B BREAKING CHANGE: \u6216 <code>&lt;type&gt;(scope)</code> \u540E\u9762\u6709\u4E00\u4E2A ! \u7684\u63D0\u4EA4<code>&lt;type&gt;(scope)!</code>\uFF0C\u8868\u793A\u5F15\u5165\u4E86\u7834\u574F\u6027\u53D8\u66F4\uFF08\u5B83\u548C\u8BED\u4E49\u5316\u7248\u672C\u4E2D\u7684 MAJOR \u76F8\u5BF9\u5E94\uFF09\u3002 \u7834\u574F\u6027\u53D8\u66F4\u53EF\u4EE5\u662F\u4EFB\u610F \u7C7B\u578B \u63D0\u4EA4\u7684\u4E00\u90E8\u5206\u3002</p></blockquote><div class="language-"><pre><code># \u5305\u542B\u4E86\u63CF\u8FF0\u5E76\u4E14\u811A\u6CE8\u4E2D\u6709\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E
feat: allow provided config object to extend other configs

BREAKING CHANGE: \`extends\` key in config file is now used for extending other config files

# \u5305\u542B\u4E86 ! \u5B57\u7B26\u4EE5\u63D0\u9192\u6CE8\u610F\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E
feat!: send an email to the customer when a product is shipped
feat(api)!: send an email to the customer when a product is shipped

# \u540C\u65F6\u5305\u542B\u4E86 ! \u548C BREAKING CHANGE \u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
</code></pre></div><p>\u91C7\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u6765\u786E\u5B9A\u7248\u672C\u53F7\u5C31\u9700\u8981\u4F7F\u7528\u5DE5\u5177\u914D\u5408\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303<a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer"> conventional commit</a> \u6765\u7EA6\u675F\u5F00\u53D1\u4EBA\u5458\u7684\u4EE3\u7801\u63D0\u4EA4\u4FE1\u606F\u3002</p><p>\u5728 monorepo \u65B9\u5F0F\u4E0B\uFF0C\u8FD8\u9700\u8981\u8003\u8651\u7684\u95EE\u9898\u662F\uFF1A</p><ul><li>\u6BCF\u4E2A\u5B50\u9879\u76EE\u662F\u5355\u72EC\u7248\u672C\u53F7\u66F4\u65B0\uFF0C\u8FD8\u662F\u591A\u4E2A\u9879\u76EE\u7EDF\u4E00\u7248\u672C\u53F7\u66F4\u65B0\uFF1F</li><li>\u5982\u679C\u662F\u5B50\u9879\u76EE\u72EC\u7ACB\u66F4\u65B0\u7248\u672C\u53F7\uFF0C\u4E14\u5B50\u9879\u76EE\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u65F6\uFF0C\u9700\u8981\u6309\u62D3\u6251\u6392\u5E8F\u89C4\u5219\u8FDB\u884C\u7248\u672C\u66F4\u65B0\uFF0C\u6BD4\u5982 ui-form \u4F9D\u8D56\u4E86ui-button\uFF0C\u5982\u679C ui-button \u53D1\u751F\u4E86\u7248\u672C\u53D8\u52A8\uFF0C\u9700\u8981\u81EA\u52A8\u7684\u5C06 ui-form \u4E2D\u4F9D\u8D56\u7684 ui-button \u66F4\u65B0\u4E3A\u6700\u65B0\u7248\u672C\u3002</li><li>\u5982\u679C\u5B50\u9879\u76EE\u72EC\u7ACB\u66F4\u65B0\u7248\u672C\u53F7\uFF0C\u9700\u8981\u5B9E\u73B0\u589E\u91CF\u66F4\u65B0\uFF0C\u6BD4\u5982 ui-form \u4F9D\u8D56\u4E86 ui-button\uFF0Cui-form \u53D1\u751F\u4E86\u7248\u672C\u53D8\u52A8\uFF0C\u53EA\u5BF9 ui-form \u8FDB\u884C\u7248\u672C\u53F7\u66F4\u65B0\uFF0C\u4E0D\u66F4\u65B0 ui-button \u7684\u7248\u672C\u53F7\u3002</li></ul><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p>monorepo \u4F18\u52BF\uFF1A \u76F8\u8F83\u4E8E\u4F20\u5165 multirepo \u65B9\u5F0F\u7684\u4F18\u70B9\uFF0C\u603B\u7ED3\u4E3A\u4E24\u4E2A\u65B9\u9762\uFF1A</p><ul><li><strong>\u7EDF\u4E00\u7BA1\u7406\u3001\u6279\u91CF\u64CD\u4F5C</strong>\uFF1A\u4E0D\u7BA1\u662F\u9879\u76EE\u521D\u59CB\u5316\u914D\u7F6E(linter)\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u9879\u76EE\u6784\u5EFA\u3001\u53D1\u5E03\u7684\u811A\u672C\u90FD\u53EF\u4EE5\u6536\u655B\u5230\u6839\u76EE\u5F55\u4E0B\u7EDF\u4E00\u7BA1\u7406\uFF0C\u53EF\u4EE5\u9009\u62E9\u6279\u91CF\u6267\u884C\u5B50\u9879\u76EE\u7684\u811A\u672C\u547D\u4EE4\u6216\u8005\u6307\u5B9A\u5B50\u9879\u76EE\u7684\u811A\u672C\u547D\u4EE4\u3002\u8FD8\u6709\u5C31\u662F\u5B50\u9879\u76EE\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u65F6\u9700\u8981\u81EA\u52A8\u8FDB\u884C\u62D3\u6251\u6392\u5E8F\u3002</li><li><strong>\u4F9D\u8D56\u63D0\u5347\uFF0C\u51CF\u5C11\u78C1\u76D8\u5360\u7528</strong>\uFF1A\u5C06\u5171\u540C\u4F9D\u8D56\u5305\u63D0\u5347\u5230\u6839\u76EE\u5F55\u4E0B\uFF0C\u5E76\u4E14\u81EA\u52A8\u5EFA\u7ACB\u672C\u5730\u4F9D\u8D56\u5173\u7CFB\u3002</li></ul><p>monorepo \u52A3\u52BF\uFF1A \u968F\u7740\u5355\u4E00\u4EE3\u7801\u7684\u53D1\u5C55\uFF0C\u4E0D\u7BA1\u662F\u5B50\u9879\u76EE\u7684\u589E\u52A0\u8FD8\u662F\u5176\u4E2D\u5355\u4E2A\u9879\u76EE\u4EE3\u7801\u91CF\u548C\u590D\u6742\u6027\u7684\u589E\u52A0\uFF0C\u5728\u9879\u76EE\u4EE3\u7801\u7248\u672C\u63A7\u5236\u3001CI/CD\u8FC7\u7A0B\u4E2D\u4F1A\u51FA\u73B0\u95EE\u9898\uFF1A</p><ul><li>CI/CD \u65F6\u95F4\u957F\uFF0C\u9879\u76EE\u5E9E\u5927\uFF0CIDE \u4E5F\u4F1A\u53D8\u5F97\u7F13\u6162\u3002</li><li>\u7248\u672C\u63A7\u5236\u7BA1\u7406\u8981\u6C42\u66F4\u4E25\u683C\uFF0C\u5355\u4E00\u4EE3\u7801\u5E93\u6BCF\u5929\u90FD\u8981\u5904\u7406\u5927\u91CF\u7684\u6570\u636E\u548C\u63D0\u4EA4\uFF0C\u4E3B\u7EBF\u4EE3\u7801\u7684\u7834\u574F\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u6BCF\u4E00\u4E2A\u5B50\u9879\u76EE\u7684\u56E2\u961F\u5F00\u53D1\u3002</li><li>\u9879\u76EE\u6743\u9650\u63A7\u5236\uFF1A\u65E0\u6CD5\u50CF\u591A\u9879\u76EE\u591A\u4ED3\u5E93\u90A3\u6837\u8FDB\u884C\u6743\u9650\u63A7\u5236\u7CBE\u51C6\u5230\u6BCF\u4E2A\u9879\u76EE\u6210\u5458</li></ul><p>\u6240\u4EE5\u8FD9\u662F\u4E00\u79CD\u6536\u76CA\u6743\u8861\u95EE\u9898\uFF0C\u867D\u7136\u591A\u4EE3\u7801\u4ED3\u5E93\u5141\u8BB8\u6BCF\u4E2A\u56E2\u961F\u72EC\u7ACB\u7BA1\u7406\u4ED6\u4EEC\u7684\u9879\u76EE\uFF0C\u4F46\u540C\u65F6\u4E5F\u963B\u788D\u4E86\u534F\u4F5C\u3002\u8BA9\u5F00\u53D1\u4EBA\u5458\u53EA\u5173\u6CE8\u81EA\u5DF1\u6240\u62E5\u6709\u7684\u90E8\u5206\uFF0C\u800C\u5FFD\u7565\u4E86\u6574\u4F53\u3002\u5355\u4E00\u4EE3\u7801\u5E93\u5C31\u50CF\u4E00\u4E2A\u67A2\u7EBD\uFF0C\u6BCF\u4E2A\u9879\u76EE\u56E2\u961F\u6210\u5458\u53EF\u4EE5\u66F4\u597D\u7684\u5BF9\u8BDD\u548C\u534F\u4F5C\u3002 \u73B0\u5728\u5728\u4E00\u4E9B\u77E5\u540D\u7684\u5DE5\u5177\u7C7B\u5E93\u7684\u9879\u76EE\u5DE5\u7A0B\u4E2D\u5DF2\u7ECF\u51FA\u73B0\u4E86\u5F88\u591A\u91C7\u7528 monorepo \u65B9\u5F0F\uFF0C\u6BD4\u5982 <code>Babel React Vue</code> \u7B49\u3002\u5728\u4F01\u4E1A\u9879\u76EE\u4E2D\uFF0C\u73B0\u9636\u6BB5\u968F\u7740\u5FAE\u524D\u7AEF\u7684\u5B9E\u8DF5\uFF0Cmonorepo \u9879\u76EE\u67B6\u6784\u65B9\u5F0F\u4F1A\u4E5F\u4F1A\u53D8\u5F97\u666E\u904D\u8D77\u6765\u3002</p><h2 id="how-monrepo-\u5B9E\u8DF5" tabindex="-1">how: monrepo \u5B9E\u8DF5 <a class="header-anchor" href="#how-monrepo-\u5B9E\u8DF5" aria-hidden="true">#</a></h2><p>monorepo \u53EA\u662F\u9879\u76EE\u4EE3\u7801\u7EC4\u7EC7\u7684\u4E00\u79CD\u67B6\u6784\u65B9\u5F0F\uFF0C\u5177\u4F53\u5982\u4F55\u843D\u5730\u8FD9\u79CD\u67B6\u6784\uFF0C\u9700\u8981\u76F8\u5E94\u7684\u5DE5\u5177\u6765\u5B9E\u73B0\u3002</p><ul><li>\u5728\u4F9D\u8D56\u5B89\u88C5\u548C\u7BA1\u7406\u65B9\u9762: <ul><li>npm@7.7 \u63D0\u4F9B\u4E86 npm workspace \u529F\u80FD\u652F\u6301 monorepo \u9879\u76EE\uFF1B</li><li>yarn \u63D0\u4F9B\u4E86 yarn workspace \u529F\u80FD\u6765\u652F\u6301 monorepo \u9879\u76EE\uFF1B</li><li>pnpm \u540C\u6837\u63D0\u4F9B\u4E86 pnpm workspace \u529F\u80FD\u6765\u652F\u6301 monorepo \u9879\u76EE\u3002</li></ul></li><li>\u5728\u9879\u76EE\u6784\u5EFA\u65B9\u9762\uFF1A <ul><li><a href="https://www.lernajs.cn/" target="_blank" rel="noopener noreferrer">Lerna</a>\uFF1A\u4E00\u4E2A\u7BA1\u7406\u5DE5\u5177\uFF0C\u7528\u4E8E\u7BA1\u7406\u5305\u542B\u591A\u4E2A\u8F6F\u4EF6\u5305\uFF08package\uFF09\u7684 JavaScript \u9879\u76EE\u3002</li><li><a href="https://rushjs.io/" target="_blank" rel="noopener noreferrer">Rush</a>\uFF1A\u5FAE\u8F6F\u7528\u4E8E JavaScript \u7684\u53EF\u6269\u5C55\u7684\u5355\u4E00\u4EE3\u7801\u5E93\u7BA1\u7406\u5668\uFF0C\u80FD\u591F\u4ECE\u4E00\u4E2A\u4EE3\u7801\u5E93\u6784\u5EFA\u548C\u90E8\u7F72\u591A\u4E2A\u5305\u3002</li><li><a href="https://buck.io" target="_blank" rel="noopener noreferrer">Buck</a>: Facebook \u5F00\u6E90\u7684\u5FEB\u901F\u6784\u5EFA\u7CFB\u7EDF\uFF0C\u652F\u6301\u5728\u591A\u79CD\u8BED\u8A00\u548C\u5E73\u53F0\u4E0A\u8FDB\u884C\u4E0D\u540C\u7684\u6784\u5EFA\u3002</li><li><a href="https://nx.dev/" target="_blank" rel="noopener noreferrer">Nx</a>: \u662F\u4E00\u4E2A\u667A\u80FD\u4E14\u53EF\u6269\u5C55\u7684\u6784\u5EFA\u6846\u67B6\uFF0C\u63D0\u4F9B\u5BF9 Monorepos \u7684\u6700\u4F73\u652F\u6301\u3002</li></ul></li><li>\u5728\u6E90\u4EE3\u7801\u7BA1\u7406\u65B9\u9762\uFF1A <ul><li>Git CODEOWNERS\uFF1A\u9879\u76EE\u4EE3\u7801\u6743\u9650\u63A7\u5236\uFF0C\u5141\u8BB8\u5B9A\u4E49\u54EA\u4E2A\u56E2\u961F\u62E5\u6709\u4EE3\u7801\u5E93\u4E2D\u7684\u5B50\u76EE\u5F55\u3002\u5F53\u6709\u4EBA\u63D0\u4EA4 pull request \u6216 push \u4EE3\u7801\u5230\u53D7\u4FDD\u62A4\u7684\u5206\u652F\u65F6\uFF0C\u4EE3\u7801\u6240\u6709\u8005\u4F1A\u81EA\u52A8\u88AB\u8981\u6C42\u8FDB\u884C\u5BA1\u67E5\u3002GitHub \u548C GitLab \u90FD\u652F\u6301\u8FD9\u4E00\u7279\u6027\u3002</li><li>\u4F7F\u7528 <a href="https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/" target="_blank" rel="noopener noreferrer">shallow clone</a>\u548C <a href="https://git-scm.com/docs/git-filter-branch" target="_blank" rel="noopener noreferrer">filter-branch</a>\u6765\u5904\u7406\u5927\u5BB9\u91CF\u4EE3\u7801\u5E93\u3002</li></ul></li></ul><p>\u6BCF\u4E2A\u90FD\u6709\u4E13\u957F\uFF0C\u6709\u4E9B\u5DE5\u5177\u4E5F\u80FD\u72EC\u7ACB\u5B9E\u8DF5 monorepo \u9879\u76EE\uFF0C\u4E5F\u80FD\u4E0E\u5176\u5B83\u5DE5\u5177\u7EC4\u5408\u4F7F\u7528\uFF0C\u5728\u5404\u81EA\u4E13\u957F\u7684\u65B9\u9762\u53D1\u6325\u4F5C\u7528\u3002</p><h3 id="monorepo-\u7BA1\u7406\u6700\u4F73\u5B9E\u8DF5" tabindex="-1">Monorepo \u7BA1\u7406\u6700\u4F73\u5B9E\u8DF5 <a class="header-anchor" href="#monorepo-\u7BA1\u7406\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a></h3><p>monorepo \u9879\u76EE\u7684\u6700\u4F73\u5B9E\u8DF5\uFF1A</p><ul><li>\u5B9A\u4E49\u4E00\u4E2A\u7684\u7EDF\u4E00\u7684\u76EE\u5F55\u7EC4\u7EC7\uFF0C\u666E\u904D\u7EA6\u5B9A\u4EE5 <code>lerna init</code> \u751F\u6210\u7684 <code>packages</code> \u76EE\u5F55\u4E0B\u7EC4\u7EC7\u5B50\u9879\u76EE</li><li>\u660E\u786E\u4E00\u5957git flow\u89C4\u5219\uFF1A\u57FA\u4E8E\u4E3B\u5E72\u7684\u5F00\u53D1\uFF0C\u7EF4\u62A4\u5206\u652F\u6574\u6D01\uFF0C\u4FDD\u6301\u8F83\u5C0F\u7684\u5206\u652F\u3002</li><li>\u660E\u786E\u9879\u76EE\u4F9D\u8D56\u9879\u4E0Epackage.json\u4E2D\u5BF9\u5E94\uFF0C\u5E76\u63D0\u4F9B\u516C\u5171\u4F9D\u8D56\uFF0C\u4E00\u6B21\u5347\u7EA7\u6240\u6709\u4F9D\u8D56\u9879\uFF0C\u8FEB\u4F7F\u6BCF\u4E2A\u9879\u76EE\u90FD\u8DDF\u4E0A\u4F9D\u8D56\u9879\u3002\u76EE\u524D\u4F7F\u7528 pnpm \u5B9E\u73B0\u3002</li><li>\u6E90\u4EE3\u7801\u7BA1\u7406\uFF0C\u4F7F\u7528Git\uFF0C\u5E76\u5B66\u4E60\u5982\u4F55\u4F7F\u7528 shallow clone \u548C filter-branch \u6765\u5904\u7406\u5927\u5BB9\u91CF\u4EE3\u7801\u5E93\u3002</li><li>\u9879\u76EE\u6784\u5EFA\uFF0C\u5BFB\u627E\u50CF Bazel \u6216 Buck \u8FD9\u6837\u7684\u667A\u80FD\u6784\u5EFA\u7CFB\u7EDF\uFF0C\u80FD\u5B9E\u73B0\u62D3\u6251\u6392\u5E8F\u89C4\u5219\u548C\u589E\u91CF\u6267\u884C\u7684\u529F\u80FD\uFF0C\u4EE5\u52A0\u901F\u6784\u5EFA\u548C\u6D4B\u8BD5\u3002</li><li>\u5982\u679C\u9700\u8981\u9650\u5236\u5BF9\u67D0\u4E9B\u9879\u76EE\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u8BF7\u4F7F\u7528 Git CODEOWERS\u3002</li><li>\u4F7F\u7528 CI/CD \u4E91\u5E73\u53F0\u6765\u5927\u89C4\u6A21\u6D4B\u8BD5\u548C\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u3002</li></ul><p>\u5E38\u7528\u7684\u5DE5\u5177\u7EC4\u5408\uFF1A</p><ul><li>npm workspace</li><li>yarn workspace</li><li>pnpm workspace</li><li>lerna + yarn workspace</li><li>rush + pnpm workspace</li><li>nx + pnpm workspace</li></ul><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://xie.infoq.cn/article/4f870ba6a7c8e0fd825295c92" target="_blank" rel="noopener noreferrer">5 \u5206\u949F\u641E\u61C2 Monorepo</a></li><li><a href="https://zhuanlan.zhihu.com/p/71385053" target="_blank" rel="noopener noreferrer">\u57FA\u4E8Elerna\u548Cyarn workspace\u7684monorepo\u5DE5\u4F5C\u6D41</a> --- \u4EE5\u5DE5\u4F5C\u6D41\u89D2\u5EA6\u5BF9\u6BD4\u4E86multirepo\u548Cmonorepo\u7684\u5DEE\u5F02</li><li><a href="https://juejin.cn/post/6950082433647640612" target="_blank" rel="noopener noreferrer">\u5F00\u6E90\u9879\u76EE\u90FD\u5728\u7528 monorepo\uFF0C\u4F46\u662F\u4F60\u77E5\u9053\u5C45\u7136\u6709\u90A3\u4E48\u591A\u5751\u4E48\uFF1F</a> --- \u4ECE multirepo \u75DB\u70B9\u5F15\u51FAmonorepo\u4F18\u52BF\u53CA\u5E26\u6765\u7684\u65B0\u95EE\u9898</li><li><a href="https://zhuanlan.zhihu.com/p/348898271" target="_blank" rel="noopener noreferrer">All in one\uFF1A\u9879\u76EE\u7EA7 monorepo \u7B56\u7565\u6700\u4F73\u5B9E\u8DF5</a> --- \u4E86\u89E3\u5230\u4E24\u4E2A\u5DE5\u5177Volta(\u9501\u5B9A\u73AF\u5883)\u3001Verdaccio(\u672C\u5730\u53D1\u5E03)</li><li><a href="https://zhihu.com/question/333587242" target="_blank" rel="noopener noreferrer">\u5982\u4F55\u8BC4\u4EF7 rushjs?</a></li></ul>`,51),t=[a];function p(h,c,s,u,d,m){return r(),o("div",null,t)}var k=e(n,[["render",p]]);export{g as __pageData,k as default};
