import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const q='{"title":"\u5DE5\u5177\u94FE\u6574\u5408\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u7EDF\u4E00 IDE \u914D\u7F6E EditorConfig","slug":"_1-\u7EDF\u4E00-ide-\u914D\u7F6E-editorconfig"},{"level":2,"title":"2. \u4F7F\u7528 Prettier \u4F5C\u4E3A\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C","slug":"_2-\u4F7F\u7528-prettier-\u4F5C\u4E3A\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C"},{"level":2,"title":"3. \u4F7F\u7528 ESLint \u6821\u9A8C JS \u7C7B\u4EE3\u7801\u8D28\u91CF","slug":"_3-\u4F7F\u7528-eslint-\u6821\u9A8C-js-\u7C7B\u4EE3\u7801\u8D28\u91CF"},{"level":2,"title":"4. \u4F7F\u7528 Stylelint \u6821\u9A8C CSS \u7C7B\u4EE3\u7801","slug":"_4-\u4F7F\u7528-stylelint-\u6821\u9A8C-css-\u7C7B\u4EE3\u7801"},{"level":2,"title":"5. \u96C6\u6210\u5230 Git \u6D41\u7A0B\u4E2D","slug":"_5-\u96C6\u6210\u5230-git-\u6D41\u7A0B\u4E2D"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Engineering/dev-linter/practice.md"}',p={},o=t(`<h1 id="\u5DE5\u5177\u94FE\u6574\u5408\u914D\u7F6E" tabindex="-1">\u5DE5\u5177\u94FE\u6574\u5408\u914D\u7F6E <a class="header-anchor" href="#\u5DE5\u5177\u94FE\u6574\u5408\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u96C6\u6210 EditorConfig + ESLint + Prettier + Stylelint + Husky + lint-staged \u7684\u6574\u6761\u5DE5\u5177\u94FE\uFF0C\u5E76\u5B9E\u73B0\u81EA\u52A8\u5316\u7684\u4EE3\u7801\u6821\u9A8C\u3002</p><p>\u4E3B\u8981\u4E3A\u4E09\u4E2A\u5C42\u6B21\uFF1A</p><ol><li>IDE \u96C6\u6210: .editorconfig\u3001ESLint\u3001Prettier</li><li>Git \u96C6\u6210\uFF1Ahusky\u3001lint-staged</li><li>CI \u96C6\u6210\uFF1Anpm run lint</li></ol><h2 id="_1-\u7EDF\u4E00-ide-\u914D\u7F6E-editorconfig" tabindex="-1">1. \u7EDF\u4E00 IDE \u914D\u7F6E EditorConfig <a class="header-anchor" href="#_1-\u7EDF\u4E00-ide-\u914D\u7F6E-editorconfig" aria-hidden="true">#</a></h2><ul><li>VS Code \u9700\u8981\u5B89\u88C5\u63D2\u4EF6 <code>EditorConfig for VS Code</code>\uFF0C\u7136\u540E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u53F3\u952E\uFF0C\u70B9\u51FB\u6700\u53F3\u7684\u83DC\u5355\u9879\uFF1A <code>Generate .editorconfig</code>\uFF0C\u76F4\u63A5\u751F\u6210 .editorconfig \u6587\u4EF6\u3002</li></ul><div class="language-"><pre><code># editorconfig.org
root = true

[*]
charset = utf-8
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

# Markdown \u8BED\u8A00\u4E2D\u5C3E\u968F\u7A7A\u683C\u662F\u6709\u610F\u4E49\u7684\uFF0C\u6BD4\u5982\u884C\u5C3E\u4E24\u4E2A\u7A7A\u683C\u76F8\u5F53\u63A7\u884C, 2 trailing spaces = linebreak (&lt;br /&gt;)\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u7279\u6B8A\u6307\u5B9A\u5FFD\u7565
# See https://daringfireball.net/projects/markdown/syntax#p
[*.md]
trim_trailing_whitespace = false
</code></pre></div><ul><li>VS Code \u5B89\u88C5 <code>Prettier-Code formatter</code> <code>ESLint</code> <code>stylelint</code> \u63D2\u4EF6</li></ul><p>\u5B89\u88C5\u540E\uFF0C\u8C03\u6574\u76F8\u5173\u914D\u7F6E\uFF0C\u6700\u7EC8\u914D\u7F6E\u6587\u4EF6:</p><div class="language-json"><pre><code><span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="_2-\u4F7F\u7528-prettier-\u4F5C\u4E3A\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C" tabindex="-1">2. \u4F7F\u7528 Prettier \u4F5C\u4E3A\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C <a class="header-anchor" href="#_2-\u4F7F\u7528-prettier-\u4F5C\u4E3A\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5</li></ul><div class="language-"><pre><code>npm install --save-dev --save-exact prettier
</code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6 .pretterrc.js</li></ul><p>\u89C6\u81EA\u5DF1\u9700\u8981\u66F4\u6539</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u6BCF\u884C\u6700\u591A\u591A\u5C11\u4E2A\u5B57\u7B26\u6362\u884C\u9ED8\u8BA480</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u5236\u8868\u7B26\u6216\u662F\u7A7A\u683C\u7F29\u8FDB\u884C, \u9ED8\u8BA4 false\u3002</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">//tab\u7F29\u8FDB\u5927\u5C0F,\u9ED8\u8BA4\u4E3A2</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">//\u8BED\u53E5\u6C42\u5C3E\u662F\u5426\u4F7F\u7528\u5206\u53F7, \u9ED8\u8BA4true</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//\u4F7F\u7528\u5355\u5F15\u53F7, \u9ED8\u8BA4false(\u5728jsx\u4E2D\u914D\u7F6E\u65E0\u6548, jsx\u4F7F\u7528 jsxSingleQuote, \u9ED8\u8BA4\u90FD\u662F\u53CC\u5F15\u53F7)</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u66F4\u6539\u5BF9\u8C61\u5C5E\u6027\u5F15\u53F7\u7684\u7684\u65F6\u673A</span>
  <span class="token comment">// &quot;as-needed&quot; -\u4EC5\u5728\u9700\u8981\u65F6\u5728\u5BF9\u8C61\u5C5E\u6027\u5468\u56F4\u6DFB\u52A0\u5F15\u53F7\uFF0C \u9ED8\u8BA4\u503C\u3002</span>
  <span class="token comment">// &quot;consistent&quot; -\u5982\u679C\u5BF9\u8C61\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2A\u5C5E\u6027\u9700\u8981\u7528\u5F15\u53F7\u5F15\u8D77\u6765\uFF0C\u8BF7\u7528\u6240\u6709\u5C5E\u6027\u5F15\u8D77\u6765\u3002</span>
  <span class="token comment">// &quot;preserve&quot; -\u5C0A\u91CD\u5BF9\u8C61\u5C5E\u6027\u4E2D\u5F15\u53F7\u7684\u8F93\u5165\u4F7F\u7528\u3002</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u884C\u5C3E\u9017\u53F7,\u9ED8\u8BA4none,\u53EF\u9009 none|es5|all</span>
  <span class="token comment">// &quot;es5&quot; -\u5728ES5\u4E2D\u6709\u6548\u7684\u7ED3\u5C3E\u9017\u53F7\uFF08\u5BF9\u8C61\uFF0C\u6570\u7EC4\u7B49\uFF09,\u9ED8\u8BA4\u503C</span>
  <span class="token comment">// &quot;none&quot; -\u6CA1\u6709\u5C3E\u968F\u9017\u53F7\u3002</span>
  <span class="token comment">// &quot;all&quot;-\u5C3D\u53EF\u80FD\u5728\u7ED3\u5C3E\u52A0\u4E0A\u9017\u53F7\uFF08\u5305\u62EC\u51FD\u6570\u53C2\u6570\uFF09\u3002\u8FD9\u9700\u8981\u8282\u70B98\u6216\u8F6C\u6362</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u8C61\u4E2D\u6587\u5B57\u4E0E\u5927\u62EC\u53F7\u7684\u7A7A\u683C \u9ED8\u8BA4true</span>
  <span class="token comment">// true: { foo: bar }</span>
  <span class="token comment">// false: {foo: bar}</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u53C2\u6570\u62EC\u53F7 \u9ED8\u8BA4always \u53EF\u9009 avoid| always</span>
  <span class="token comment">// avoid \u80FD\u7701\u7565\u62EC\u53F7\u7684\u65F6\u5019\u5C31\u7701\u7565 \u4F8B\u5982x =&gt; x</span>
  <span class="token comment">// always \u603B\u662F\u6709\u62EC\u53F7 \uFF08x) =&gt; x</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//\u884C\u7ED3\u5C3E\u7684\u98CE\u683C&lt;auto | lf | crlf | cr&gt;</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx\u8BED\u6CD5\u4E2D\u7684\u5F15\u53F7</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// JSX\u6807\u7B7E\u95ED\u5408\u4F4D\u7F6E \u9ED8\u8BA4false</span>
  <span class="token comment">// false: &lt;div</span>
  <span class="token comment">//          className=&quot;&quot;</span>
  <span class="token comment">//          style={{}}</span>
  <span class="token comment">//       &gt;</span>
  <span class="token comment">// true: &lt;div</span>
  <span class="token comment">//          className=&quot;&quot;</span>
  <span class="token comment">//          style={{}} &gt;</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// HTML\u7A7A\u683C\u654F\u611F\u6027</span>
  <span class="token comment">// &quot;css&quot;-\u9075\u5B88CSS display\u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u3002</span>
  <span class="token comment">// &quot;strict&quot; -\u7A7A\u767D\u88AB\u8BA4\u4E3A\u662F\u654F\u611F\u7684\u3002</span>
  <span class="token comment">// &quot;ignore&quot; -\u7A7A\u767D\u88AB\u8BA4\u4E3A\u662F\u4E0D\u654F\u611F\u7684\u3002</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// Vue\u6587\u4EF6\u811A\u672C\u548C\u6837\u5F0F\u6807\u7B7E\u7F29\u8FDB</span>
  <span class="token comment">// &quot;false&quot; -\u4E0D\u8981\u7F29\u8FDBVue\u6587\u4EF6\u4E2D\u7684\u811A\u672C\u548C\u6837\u5F0F\u6807\u7B7E\u3002</span>
  <span class="token comment">// &quot;true&quot; -\u5728Vue\u6587\u4EF6\u4E2D\u7F29\u8FDB\u811A\u672C\u548C\u6837\u5F0F\u6807\u7B7E\u3002</span>
  <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u5728\u6587\u4EF6\u5934\u90E8\u63D2\u5165\u4E00\u4E2A\u7279\u6B8A\u7684@format\u6807\u8BB0\uFF0C\u9ED8\u8BA4 false</span>
  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u9700\u8981\u7F16\u8BD1\u6307\u793A\uFF0C\u9ED8\u8BA4 false</span>
  <span class="token comment">/**
   * @prettier
   */</span>
  <span class="token comment">// \u6216</span>
  <span class="token comment">/**
   * @format
   */</span>
  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u5FFD\u7565\u6587\u4EF6 .prettierignor</li></ul><div class="language-"><pre><code>/dist/
/node_modules/
/static/
/public/
</code></pre></div><h2 id="_3-\u4F7F\u7528-eslint-\u6821\u9A8C-js-\u7C7B\u4EE3\u7801\u8D28\u91CF" tabindex="-1">3. \u4F7F\u7528 ESLint \u6821\u9A8C JS \u7C7B\u4EE3\u7801\u8D28\u91CF <a class="header-anchor" href="#_3-\u4F7F\u7528-eslint-\u6821\u9A8C-js-\u7C7B\u4EE3\u7801\u8D28\u91CF" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5\uFF1A\u56E0\u4E3A\u9700\u8981\u4E0E Prettier \u96C6\u6210\uFF0C\u6240\u4EE5\u76F8\u5173\u63D2\u4EF6\u4E5F\u8981\u5B89\u88C5</li></ul><div class="language-js"><pre><code>npm i <span class="token operator">-</span><span class="token constant">D</span> eslint babel<span class="token operator">-</span>eslint eslint<span class="token operator">-</span>config<span class="token operator">-</span>aribnb eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>prettier
</code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6 .eslintrc.js</li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2018</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">globalReturn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">impliedStrict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;plugin:vue/essential&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aribnb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// required to lint *.vue files</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// add your custom rules here</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// allow async-await</span>
    <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// allow debugger during development</span>
    <span class="token string-property property">&quot;no-debugger&quot;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;error&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u6392\u9664\u6587\u4EF6 .eslintignor</li></ul><div class="language-"><pre><code># .eslintignor
/node_modules/
/build/
/public/
/dist/
src/assets/
</code></pre></div><h2 id="_4-\u4F7F\u7528-stylelint-\u6821\u9A8C-css-\u7C7B\u4EE3\u7801" tabindex="-1">4. \u4F7F\u7528 Stylelint \u6821\u9A8C CSS \u7C7B\u4EE3\u7801 <a class="header-anchor" href="#_4-\u4F7F\u7528-stylelint-\u6821\u9A8C-css-\u7C7B\u4EE3\u7801" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5\uFF1A\u56E0\u4E3A\u9700\u8981\u4E0E Prettier \u96C6\u6210\uFF0C\u6240\u4EE5\u76F8\u5173\u63D2\u4EF6\u4E5F\u8981\u5B89\u88C5</li></ul><div class="language-"><pre><code>npm i -D stylelint stylelint-config-standard stylelint-order stylelint-config-prettier stylelint-plugin-prettier
</code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6 .stylelintrc.js</li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-prettier/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;order/order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;custom-properties&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;dollar-variables&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;declarations&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;rules&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;at-rules&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;order/properties-order&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;display&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5FFD\u7565\u6587\u4EF6 .stylelintignor</li></ul><div class="language-"><pre><code># .eslintignor
/node_modules/
/build/
/public/
/dist/
src/assets/
</code></pre></div><h2 id="_5-\u96C6\u6210\u5230-git-\u6D41\u7A0B\u4E2D" tabindex="-1">5. \u96C6\u6210\u5230 Git \u6D41\u7A0B\u4E2D <a class="header-anchor" href="#_5-\u96C6\u6210\u5230-git-\u6D41\u7A0B\u4E2D" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5 Husky \u548C lint-staged</li></ul><div class="language-"><pre><code>npm i -D husky lint-staged
</code></pre></div><ul><li>\u914D\u7F6E</li></ul><p>\u5728 package.json \u4E2D\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span> <span class="token comment">// \u5728\u4EE3\u7801commit\u524D\u6267\u884C\u5C06\u52A0\u5165\u5230stage\u6682\u5B58\u533A\u7684\u6587\u4EF6\u8FDB\u884C\u68C0\u67E5\uFF0C\u6309\u7167\u4E0B\u9762&quot;lint-staged&quot;\u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u68C0\u67E5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9staged\u7684\u6587\u4EF6\u8FDB\u884Clint\uFF0C\u907F\u514D\u5BF9\u6574\u4E2A\u9879\u76EE\u8FDB\u884Clint\u4EE3\u7801\u5E9E\u5927\u4E14\u7F13\u6162</span>
  <span class="token string-property property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;linters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;src/**/*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">// \u5339\u914D.js\u6587\u4EF6\u4E00\u4E0B\u547D\u4EE4</span>
        <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6267\u884Ceslint\u8FDB\u884C\u626B\u63CF\u8FDB\u884Cfix</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6267\u884Cprettier\u811A\u672C,\u5BF9\u4EE3\u7801\u955C\u50CF\u683C\u5F0F\u5316</span>
        <span class="token string">&quot;git add&quot;</span> <span class="token comment">//\u4E0A\u8FF0\u4E24\u9879\u4EFB\u52A1\u5B8C\u6210\u540E\u5BF9\u4EE3\u7801\u91CD\u65B0add\u3002</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;src/**/*.vue&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;git add&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;src/**/*.scss&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;stylelint --syntax=scss --fix&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;git add&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/static/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/public/&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u65B0\u7248\u672C\uFF0C\u4E5F\u53EF\u4EE5\u4FBF ESLint \u4E00\u6837\u5355\u72EC\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6<code>huskyrc.js</code> <code>lintstagedrc.js</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// huskyrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// lintstagedrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;src/**/*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u5339\u914D.js\u6587\u4EF6\u4E00\u4E0B\u547D\u4EE4</span>
    <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6267\u884Ceslint\u8FDB\u884C\u626B\u63CF\u8FDB\u884Cfix</span>
    <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6267\u884Cprettier\u811A\u672C,\u5BF9\u4EE3\u7801\u955C\u50CF\u683C\u5F0F\u5316</span>
    <span class="token string">&quot;git add&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4E0A\u8FF0\u4E24\u9879\u4EFB\u52A1\u5B8C\u6210\u540E\u5BF9\u4EE3\u7801\u91CD\u65B0add\u3002</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;src/**/*.vue&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;git add&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;src/**/*.scss&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint --syntax=scss --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;git add&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/static/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/public/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.im/post/5c67fcaae51d457fcb4078c9" target="_blank" rel="noopener noreferrer">eslint+husky+prettier+lint-staged \u63D0\u5347\u524D\u7AEF\u5E94\u7528\u8D28\u91CF</a></li><li><a href="https://blog.csdn.net/dudufine/arhttps://efe.baidu.com/tags/Lint/ticle/details/106323543" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u5DE5\u7A0B\u5316\u4E4B\u2014\u2014\u4EE3\u7801\u89C4\u8303\u4E94\u90E8\u66F2</a></li></ul>`,43),e=[o];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{q as __pageData,m as default};
