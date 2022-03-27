import{_ as e,c as t,o as s,b as n,d as o}from"./app.9dbb06c5.js";const m='{"title":"\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Engineering/initial/project-directory.md"}',i={},a=n("h1",{id:"\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784",tabindex:"-1"},[o("\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784 "),n("a",{class:"header-anchor",href:"#\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784","aria-hidden":"true"},"#")],-1),r=n("p",null,"Vue@2.x \u9879\u76EE\u5DE5\u7A0B\u63A8\u8350\u76EE\u5F55\u7ED3\u6784",-1),c=n("blockquote",null,[n("p",null,[n("a",{href:"./../../Tools/node-tree-cli.html"},"\u751F\u6210\u76EE\u5F55\u6811\u5DE5\u5177 tree-node-cli")])],-1),l=n("div",{class:"language-"},[n("pre",null,[n("code",null,`Vue-Project
\u251C\u2500\u2500 public                                         // \u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939\uFF0C\u4E0D\u7ECF\u8FC7 webpack \u5904\u7406
\u2502   \u251C\u2500\u2500 iconfont                                   // \u5B57\u4F53\u56FE\u6807 \u963F\u91CC iconfont
\u2502   \u251C\u2500\u2500 favicon.ico                                // \u7F51\u7AD9\u7684 favicon \u56FE\u6807
\u2502   \u2514\u2500\u2500 index.html                                 // \u7F51\u7AD9\u7684\u57FA\u672C\u9875\u9762\u6A21\u677F
\u251C\u2500\u2500 src                                            // \u6E90\u4EE3\u7801\u4E3B\u76EE\u5F55
\u2502   \u251C\u2500\u2500 assets                                     // \u8D44\u6E90\u6587\u4EF6\u5939
\u2502   \u2502   \u251C\u2500\u2500 styles                                 // \u8BF7\u6C42\u63A5\u53E3
\u2502   \u2502   \u2514\u2500\u2500 images                                 // \u56FE\u7247
\u2502   \u251C\u2500\u2500 utils                                      // \u81EA\u5B9A\u4E49\u901A\u7528\u7684\u5DE5\u5177\u65B9\u6CD5
\u2502   \u2502   \u2514\u2500\u2500 help.js
\u2502   \u251C\u2500\u2500 constant                                   // \u9879\u76EE\u5E38\u91CF
\u2502   \u2502   \u2514\u2500\u2500 index.js
\u2502   \u251C\u2500\u2500 network                                    // \u7F51\u7EDC\u8BF7\u6C42\u76F8\u5173
\u2502   \u2502   \u251C\u2500\u2500 api                                    // \u8BF7\u6C42\u63A5\u53E3
\u2502   \u2502   \u2502   \u251C\u2500\u2500 login.js                           // \u4E1A\u52A1\u6A21\u5757\u63A5\u53E3
\u2502   \u2502   \u251C\u2500\u2500 test                                   // \u63A5\u53E3\u8C03\u8BD5\uFF08rest-client\u63D2\u4EF6 )
\u2502   \u2502   \u2502   \u2514\u2500\u2500 login.http                         
\u2502   \u2502   \u2514\u2500\u2500 axios                                  // axios \u8BF7\u6C42\u5E93
\u2502   \u2502       \u251C\u2500\u2500 index.js                           // axios \u8BF7\u6C42\u5C01\u88C5\uFF08\u8BF7\u6C42\u62E6\u622A\u548C\u54CD\u5E94\u62E6\u622A\u8BBE\u7F6E\uFF09
\u2502   \u2502       \u2514\u2500\u2500 _axios_config.js                   // axios \u8BF7\u6C42\u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 components                                 // \u5168\u5C40\u516C\u7528\u7684\u57FA\u7840\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 router                                     // \u8DEF\u7531
\u2502   \u2502   \u251C\u2500\u2500 index.js                               // \u8DEF\u7531\u6CE8\u518C\u548C\u8BBE\u7F6E\u62E6\u622A\u5668
\u2502   \u2502   \u2514\u2500\u2500 routes.js                              // \u9884\u7F6E\u7684\u9759\u6001\u8DEF\u7531
\u2502   \u251C\u2500\u2500 store                                      // vuex \u6570\u636E\u72B6\u6001
\u2502   \u2502   \u251C\u2500\u2500 login                                  // vuex modules \u4E1A\u52A1\u6A21\u5757
\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.js                           // states getters mutations actions \u5728\u4E00\u8D77\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 productManage                          // vuex modules \u4E1A\u52A1\u6A21\u5757
\u2502   \u2502   \u2502   \u251C\u2500\u2500 actions.js                         // states getters mutations actions \u5206\u5F00
\u2502   \u2502   \u2502   \u251C\u2500\u2500 getters.js
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.js                           // \u8BE5\u6A21\u5757states getters mutations actions \u5408\u5E76\u5BFC\u51FA
\u2502   \u2502   \u2502   \u251C\u2500\u2500 mutations.js
\u2502   \u2502   \u2502   \u251C\u2500\u2500 states.js
\u2502   \u2502   \u2502   \u2514\u2500\u2500 types.js
\u2502   \u2502   \u2514\u2500\u2500 index.js                               // vuex\u6CE8\u518C
\u2502   \u251C\u2500\u2500 views                                      // \u9875\u9762\u89C6\u56FE
\u2502   \u2502   \u251C\u2500\u2500 layout                                 // \u5E03\u5C40\u9875\u9762
\u2502   \u2502   \u2502   \u251C\u2500\u2500 header.vue
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.vue
\u2502   \u2502   \u2502   \u2514\u2500\u2500 sidebar.vue
\u2502   \u2502   \u251C\u2500\u2500 login                                  // \u767B\u5F55\u9875\u9762
\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.vue
\u2502   \u2502   \u2514\u2500\u2500 storyManage                            // \u9875\u9762\u6A21\u5757
\u2502   \u2502       \u251C\u2500\u2500 components                         // \u5F53\u524D\u9875\u9762\u6A21\u5757\u7684\u7EC4\u4EF6
\u2502   \u2502       \u2502   \u2514\u2500\u2500 newAddStory.vue
\u2502   \u2502       \u251C\u2500\u2500 style                              // \u5F53\u524D\u9875\u9762\u6A21\u5757\u53CA\u76F8\u5173\u7EC4\u4EF6\u7684\u6837\u5F0F
\u2502   \u2502       \u2502   \u2514\u2500\u2500 newAddStory.less
\u2502   \u2502       \u2514\u2500\u2500 index.vue                          // \u9875\u9762\u6A21\u5757\u5165\u53E3\u9875\u9762
\u2502   \u251C\u2500\u2500 index.vue                                  // \u5165\u53E3\u9875\u9762
\u2502   \u2514\u2500\u2500 main.js                                    // \u7A0B\u5E8F\u4E3B\u5165\u53E3
\u251C\u2500\u2500 vue.config.js                                  // vue-cli3 \u7684\u9879\u76EE webpack \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .editorconfig                                  // \u7F16\u8F91\u5668\u683C\u5F0F\u914D\u7F6E
\u251C\u2500\u2500 .eslintrc.js                                   
\u251C\u2500\u2500 .eslintignore                                  
\u251C\u2500\u2500 .prettierrc.js                                 
\u251C\u2500\u2500 .prettierignore                                  
\u251C\u2500\u2500 .stylelintrc.js                                  
\u251C\u2500\u2500 .stylelintignore                                  
\u251C\u2500\u2500 .huskyrc.js                                   
\u251C\u2500\u2500 .lintstagedrc.js                                   
\u251C\u2500\u2500 .gitignore                                    
\u251C\u2500\u2500 babel.config.js                               
\u251C\u2500\u2500 package-lock.json                             
\u251C\u2500\u2500 package.json                                 
\u2514\u2500\u2500 README.md   
`)])],-1),d=[a,r,c,l];function u(p,g,j,x,_,h){return s(),t("div",null,d)}var f=e(i,[["render",u]]);export{m as __pageData,f as default};
