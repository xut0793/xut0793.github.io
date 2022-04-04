import{_ as n,c as a,o as s,a as t}from"./app.f1e974b0.js";const m='{"title":"react-13: JSX","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/React/react-13-JSX\u4F53\u9A8C.md"}',p={},o=t(`<h1 id="react-13-jsx" tabindex="-1">react-13: JSX <a class="header-anchor" href="#react-13-jsx" aria-hidden="true">#</a></h1><p>\u8FC4\u4ECA\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684\u793A\u4F8B\u4EE3\u7801\u90FD\u5728\u4F7F\u7528<code>React.createElement</code>\u521B\u5EFA<code>React</code>\u5143\u7D20\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u521B\u5EFA\u4E0B\u9762\u8FD9\u4E2A HTML \u7ED3\u6784\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u94FE\u63A5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u770B\u770B\u4F7F\u7528\u539F\u6765<code>React.createElement</code>\u65B9\u6CD5\u5982\u4F55\u5B8C\u6210\u4E0A\u9762\u7684\u7ED3\u6784</p><div class="language-js"><pre><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
        <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
            <span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">null</span><span class="token punctuation">,</span>
            React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
                <span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span>
                <span class="token keyword">null</span><span class="token punctuation">,</span>
                React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
                    <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;wwww.baidu.com&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;\u94FE\u63A5&#39;</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u8FD8\u662F\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u3001\u6837\u5F0F\u548C\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u7ED3\u6784\uFF0C\u5DF2\u7ECF\u5982\u6B64\u5D4C\u5957\u548C\u9EBB\u70E6\u4E86\u3002\u5199\u8FD9\u6837\u7684\u4EE3\u7801\u7EDD\u5BF9\u6CA1\u6709\u6109\u60A6\u7684\u5FC3\u60C5\u3002\u6240\u4EE5 React \u56E2\u961F\u91CD\u65B0\u521B\u9020\u4E86 JSX \u8BED\u6CD5\u6765\u6539\u5584\u8FD9\u79CD\u5199\u6CD5\uFF0C\u8FD9\u662F React \u6700\u4F1F\u5927\u7684\u8BBE\u8BA1\u4E4B\u4E00\u3002 \u6211\u4EEC\u5148\u76F4\u89C2\u611F\u89C9\u4E0B\u7528 JSX \u91CD\u5199\u4E0A\u9762\u7684\u7ED3\u6784\uFF1A</p><div class="language-js"><pre><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;www.baidu.com&quot;</span><span class="token operator">&gt;</span>\u94FE\u63A5<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u770B\u8D77\u6765\u51E0\u4E4E\u548C HTML \u4EE3\u7801\u4E00\u6837\u3002\u8FD9\u5C31\u662F JSX \u7684\u4F1F\u5927\u3002JSX \u662F\u4E00\u79CD\u7C7B XML \u8BED\u6CD5\u7684\u5C0F\u8BED\u8A00\uFF0C\u4F46\u5B83\u6539\u53D8\u4E86 React \u7EC4\u4EF6\u7684\u7F16\u5199\u65B9\u5F0F\u3002</p><p>JSX \u9700\u8981\u7531\u7F16\u8BD1\u5DE5\u5177\u8F6C\u79FB\u6210\u6807\u51C6\u7684 ES \u8BED\u6CD5\u3002\u6240\u5728\u6B63\u5F0F\u4F53\u9A8C\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u5728\u6D4F\u89C8\u5668\u5F15\u5165 babel \u8F6C\u8BD1\u5668\u6765\u5E2E\u6211\u4EEC\u628A JSX \u8BED\u53E5\u8F6C\u6210 ES \u8BED\u6CD5\u3002</p><p>\u6211\u4EEC\u8FD8\u662F\u4EE5\u6700\u521D\u7684<code>Hello React</code>\u6765\u505A\u4F8B\u5B50</p><p>\u7B2C\u4E00\u6B65\uFF1A\u5F15\u5165 babel</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://cdn.bootcss.com/babel-core/5.8.38/browser.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u7B2C\u4E8C\u6B65\uFF1Ascript \u6807\u7B7E\u5B9A\u4E49\u7C7B\u578B<code>type=&quot;text/babel&quot;</code></p><div class="language-js"><pre><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/babel&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u7B2C\u4E09\u6B65\uFF1A\u4E66\u5199 JSX</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Heloo React JSX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">.bgcolor</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://cdn.bootcss.com/babel-core/5.8.38/browser.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;script&gt;
        // React.createElement
         const root = document.getElementById(&#39;root&#39;)
        //  class HelloReact extends React.Component {
        //      render() {
        //          return React.createElement(
        //              &#39;h1&#39;,
        //              {
        //                  id: &#39;uid&#39;,
        //                  className: &#39;bgcolor&#39;,
        //                  style: { color: &#39;red&#39; },
        //                  onClick: function(e) {
        //                      alert(&#39;click&#39;)
        //                  }
        //              },
        //              &#39;Hello React&#39;
        //          )
        //      }
        //  }
        //  let el = React.createElement(HelloReact, null)
        //  ReactDOM.render(el, root)
    &lt;/script&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">// JSX</span>
        <span class="token keyword">class</span> <span class="token class-name">HelloReact</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>h1
                        id<span class="token operator">=</span><span class="token string">&quot;uid&quot;</span>
                        className<span class="token operator">=</span><span class="token string">&quot;bgcolor&quot;</span>
                        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
                        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token operator">&gt;</span>
                        Hello React
                    <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>HelloReact <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>JSX \u662F React.createElement()\u65B9\u6CD5\u7684\u8BED\u6CD5\u7CD6</strong>\uFF0C\u7ECF\u8F6C\u8BD1\u5668\u8F6C\u8BD1\u540E\u6700\u7EC8\u8FD8\u662F\u4F7F\u7528 React.createElement()\u521B\u5EFA React \u5143\u7D20\u3002\u4F46 JSX \u5927\u5927\u63D0\u4F9B\u4E86\u6211\u4EEC\u7F16\u5199 React \u4EE3\u7801\u7684\u6548\u7387\u548C\u4F53\u9A8C\u3002</p><p>\u4E0B\u4E00\u8282\u6211\u4EEC\u8BE6\u7EC6\u4E86\u89E3 JSX \u8BED\u6CD5</p>`,19),e=[o];function c(l,u,k,r,i,g){return s(),a("div",null,e)}var q=n(p,[["render",c]]);export{m as __pageData,q as default};
