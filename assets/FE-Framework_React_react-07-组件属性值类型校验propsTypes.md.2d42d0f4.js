import{_ as n,c as s,o as a,a as p}from"./app.9dbb06c5.js";const d='{"title":"react-07: \u7EC4\u4EF6\u5C5E\u6027\u503C\u7C7B\u578B\u7684\u6821\u9A8C propTypes","description":"","frontmatter":{},"headers":[{"level":3,"title":"React\u4E2D\u53EF\u4EE5\u901A\u8FC7propTypes\u9759\u6001\u5C5E\u6027\u6765\u5B9E\u73B0\u6821\u9A8C\u3002","slug":"react\u4E2D\u53EF\u4EE5\u901A\u8FC7proptypes\u9759\u6001\u5C5E\u6027\u6765\u5B9E\u73B0\u6821\u9A8C\u3002"},{"level":3,"title":"PropTypes\u5BF9\u8C61\u5305\u542B\u7684\u6240\u6709\u9A8C\u8BC1\u7C7B\u578B API \u6709:","slug":"proptypes\u5BF9\u8C61\u5305\u542B\u7684\u6240\u6709\u9A8C\u8BC1\u7C7B\u578B-api-\u6709"},{"level":3,"title":"\u793A\u4F8B\u90E8\u5206:","slug":"\u793A\u4F8B\u90E8\u5206"}],"relativePath":"FE-Framework/React/react-07-\u7EC4\u4EF6\u5C5E\u6027\u503C\u7C7B\u578B\u6821\u9A8CpropsTypes.md"}',t={},o=p(`<h1 id="react-07-\u7EC4\u4EF6\u5C5E\u6027\u503C\u7C7B\u578B\u7684\u6821\u9A8C-proptypes" tabindex="-1">react-07: \u7EC4\u4EF6\u5C5E\u6027\u503C\u7C7B\u578B\u7684\u6821\u9A8C propTypes <a class="header-anchor" href="#react-07-\u7EC4\u4EF6\u5C5E\u6027\u503C\u7C7B\u578B\u7684\u6821\u9A8C-proptypes" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u8BB2\u89E3\u4E86\u7EC4\u4EF6\u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u914D\u7F6E<code>defaultProps</code>\uFF0C\u540C\u6837\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5C5E\u6027\u4F20\u9012\u8FD8\u6D89\u53CA\u5230\u4E00\u4E2A\u503C\u7C7B\u578B\u7684\u95EE\u9898\u3002\u5982\u679C\u67D0\u4E2A\u5C5E\u6027\u5728\u7EC4\u4EF6\u5185\u90E8\u662F\u4F7F\u7528\u6570\u7EC4\u76F8\u5173\u65B9\u6CD5\u64CD\u4F5C\uFF0C\u5982\u679C\u6B64\u65F6\u4F20\u5165\u975E\u6570\u7EC4\u7C7B\u578B\u7684\u503C\u65F6\u5C31\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u62A5\u9519\u3002\u6240\u4EE5\u5BF9\u7EC4\u4EF6\u5C5E\u6027\u503C\u7684\u7C7B\u578B\u8FDB\u884C\u7EA6\u675F\u4E5F\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\u3002</p><h3 id="react\u4E2D\u53EF\u4EE5\u901A\u8FC7proptypes\u9759\u6001\u5C5E\u6027\u6765\u5B9E\u73B0\u6821\u9A8C\u3002" tabindex="-1"><code>React</code>\u4E2D\u53EF\u4EE5\u901A\u8FC7<code>propTypes</code>\u9759\u6001\u5C5E\u6027\u6765\u5B9E\u73B0\u6821\u9A8C\u3002 <a class="header-anchor" href="#react\u4E2D\u53EF\u4EE5\u901A\u8FC7proptypes\u9759\u6001\u5C5E\u6027\u6765\u5B9E\u73B0\u6821\u9A8C\u3002" aria-hidden="true">#</a></h3><p>\u5728<code>React v5.5</code>\u4EE5\u524D\u7248\u672C\u662F\u96C6\u6210\u3002\u4F46\u4E4B\u540E\u7684\u7248\u672C\u5DF2\u7ECF\u62C6\u5206\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u5305<code>prop-types</code>,\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728 HTML \u4E2D\u5F15\u5165<code>prop-types</code>\u7684 CDN \u94FE\u63A5(\u56E0\u4E3A\u6211\u4EEC\u4E4B\u524D\u4E00\u76F4\u5728 html \u6D4F\u89C8\u5668\u4F5C\u6F14\u793A,\u5982\u679C\u662F\u5DE5\u7A0B\u5316\u53EF\u4EE5 npm \u4E0B\u8F7D\u5305)\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>React propTypes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
        <span class="token attr-name">crossorigin</span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
        <span class="token attr-name">crossorigin</span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/prop-types/prop-types.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
                    <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
                    <span class="token keyword">null</span><span class="token punctuation">,</span>
                    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
        Hello<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;React&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C5E\u6027\u503C\u7C7B\u578B\u6821\u9A8C</span>
        Hello<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
        <span class="token punctuation">}</span>

        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u6B63\u5E38</span>

        ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// \u80FD\u663E\u793A,\u4F46\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u8B66\u544A\u4FE1\u606F</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230,\u540C\u4E0A\u8282\u9ED8\u8BA4\u503C\u5199\u6CD5\u5B8C\u5168\u4E00\u6837.\u540C\u6837,\u4E5F\u53EF\u4EE5\u7528\u8FD8\u5728\u63D0\u6848\u9636\u6BB5\u7684<code>static</code>\u8BED\u6CD5.</p><div class="language-js"><pre><code><span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
    <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;React&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5C5E\u6027\u503C\u7C7B\u578B\u6821\u9A8C</span>
    <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u6B63\u5E38</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// \u80FD\u663E\u793A,\u4F46\u63A7\u5236\u53F0\u4F1A\u6253\u5370\u8B66\u544A\u4FE1\u606F</span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u5C06\u67D0\u4E2A\u5C5E\u6027\u8BBE\u4E3A\u5FC5\u987B\u503C,\u53EF\u4EE5\u6DFB\u52A0<code>isRequired</code>,\u5982:</p><div class="language-js"><pre><code><span class="token comment">// \u5C5E\u6027\u503C\u7C7B\u578B\u6821\u9A8C</span>
Hello<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired <span class="token comment">// \u8868\u660Econtent\u5C5E\u6027\u5FC5\u9700\u4E14\u4E3Astring\u7C7B\u578B</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="proptypes\u5BF9\u8C61\u5305\u542B\u7684\u6240\u6709\u9A8C\u8BC1\u7C7B\u578B-api-\u6709" tabindex="-1"><code>PropTypes</code>\u5BF9\u8C61\u5305\u542B\u7684\u6240\u6709\u9A8C\u8BC1\u7C7B\u578B API \u6709: <a class="header-anchor" href="#proptypes\u5BF9\u8C61\u5305\u542B\u7684\u6240\u6709\u9A8C\u8BC1\u7C7B\u578B-api-\u6709" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/*************************
     * JS\u539F\u59CB\u7C7B\u578B\u9A8C\u8BC1
     ***************************/</span>
    <span class="token comment">// JS\u539F\u59CB\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u5168\u90E8\u9ED8\u8BA4\u662F\u53EF\u9009\u7684</span>
    <span class="token literal-property property">optionalArray</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalBool</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalFunc</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalNumber</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalObject</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalString</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalSymbol</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>symbol<span class="token punctuation">,</span>

    <span class="token comment">// \u53EF\u4EE5\u76F4\u63A5\u6E32\u67D3\u7684\u4EFB\u4F55\u4E1C\u897F\uFF0C\u53EF\u4EE5\u662F\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5143\u7D20\u6216\u6570\u7EC4</span>
    <span class="token literal-property property">optionalNode</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>node<span class="token punctuation">,</span>

    <span class="token comment">// React\u5143\u7D20</span>
    <span class="token literal-property property">optionalElement</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>element<span class="token punctuation">,</span>

    <span class="token comment">// \u6307\u5B9A\u662F\u67D0\u4E2A\u7C7B\u7684\u5B9E\u4F8B</span>
    <span class="token literal-property property">optionalMessage</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// \u53EF\u4EE5\u662F\u591A\u4E2A\u503C\u4E2D\u7684\u4E00\u4E2A</span>
    <span class="token literal-property property">optionalEnum</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;News&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Photos&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// \u53EF\u4EE5\u662F\u591A\u79CD\u7C7B\u578B\u4E2D\u7684\u4E00\u4E2A</span>
    <span class="token literal-property property">optionalUnion</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
        PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
        PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">/*************************
     * \u591A\u91CD\u5D4C\u5957\u7C7B\u578B\u68C0\u6D4B
     ***************************/</span>
    <span class="token comment">// \u9650\u5236\u6570\u7EC4\u5185\u7684\u5404\u9879\u5143\u7D20\u7684\u7C7B\u578B,\u53EA\u80FD\u662F\u67D0\u79CD\u7C7B\u578B\u503C\u7684\u6570\u7EC4</span>
    <span class="token literal-property property">optionalArrayOf</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u9650\u5236\u5BF9\u8C61\u5185\u5C5E\u6027\u503C\u53EA\u80FD\u662F\u7279\u5B9A\u7C7B\u578B\u5C5E\u6027\u503C</span>
    <span class="token literal-property property">optionalObjectOf</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">objectOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// \u9650\u5236\u5BF9\u8C61\u5404\u4E2Akey\u7684\u503C\u7C7B\u578B,\u5373value\u7684\u7C7B\u578B.\u5177\u6709\u76F8\u540C\u5C5E\u6027\u503C\u7684\u5BF9\u8C61</span>
    <span class="token literal-property property">optionalObjectWithShape</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">/********************************************
     * \u5FC5\u9700\u6027\u9A8C\u8BC1,\u5728\u4EFB\u610F\u503C\u7C7B\u578B\u9650\u5236\u540E\u9762\u6DFB\u52A0.isRequired
     *********************************************/</span>
    <span class="token comment">// \u5FC5\u9009\u6761\u4EF6\uFF0C\u53EF\u4EE5\u914D\u5408\u5176\u4ED6\u9A8C\u8BC1\u5668\uFF0C\u4EE5\u786E\u4FDD\u5728\u6CA1\u6709\u63D0\u4F9B\u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\u53D1\u51FA\u8B66\u544A</span>
    <span class="token literal-property property">requiredFunc</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>

    <span class="token comment">// \u5FC5\u9009\u6761\u4EF6\uFF0C\u63D0\u4F9B\u7684\u5C5E\u6027\u53EF\u4EE5\u4E3A\u4EFB\u610F\u7C7B\u578B</span>
    <span class="token literal-property property">requiredAny</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>any<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>

    <span class="token comment">/****************************************************************
     * \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219,\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A\u6B63\u5219\u9A8C\u8BC1\u89C4\u5219,\u5982\u679C\u4E0D\u5339\u914D,\u8FD4\u56DE\u4E00\u4E2AError\u5B9E\u4F8B
     *****************************************************************/</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u2018oneOfType\u2019\u9A8C\u8BC1\u5668\u3002\u5982\u679C\u63D0\u4F9B\u7684\u5C5E\u6027\u503C\u4E0D\u5339\u914D\u7684\u5B83\u5E94\u8BE5\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38</span>
    <span class="token comment">// \u6CE8\u610F\uFF1A\u4E0D\u80FD\u4F7F\u7528\u2018console.warn\u2019 \u548C throw</span>
    <span class="token function-variable function">customProp</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">matchme</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
                <span class="token string">&#39;Invalid prop \`&#39;</span> <span class="token operator">+</span>
                    propName <span class="token operator">+</span>
                    <span class="token string">&#39;\` supplied to&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&#39; \`&#39;</span> <span class="token operator">+</span>
                    componentName <span class="token operator">+</span>
                    <span class="token string">&#39;\`. Validation failed.&#39;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u81EA\u5B9A\u4E49\u2018arrayOf\u2019\u6216\u8005\u2018objectOf\u2019\u9A8C\u8BC1\u5668\u3002</span>
    <span class="token comment">// \u5B83\u4F1A\u8C03\u7528\u6BCF\u4E2A\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u7684key\uFF0C\u53C2\u6570\u524D\u4E24\u4E2A\u662F\u5BF9\u8C61\u5B83\u672C\u8EAB\u548C\u5F53\u524Dkey</span>
    <span class="token comment">// \u6CE8\u610F\uFF1A\u4E0D\u80FD\u4F7F\u7528\u2018console.warn\u2019 \u548C throw</span>
    <span class="token literal-property property">customArrayProp</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>
        <span class="token parameter">propValue<span class="token punctuation">,</span>
        key<span class="token punctuation">,</span>
        componentName<span class="token punctuation">,</span>
        location<span class="token punctuation">,</span>
        propFullName</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">matchme</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>propValue<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
                <span class="token string">&#39;Invalid prop \`&#39;</span> <span class="token operator">+</span>
                    propFullName <span class="token operator">+</span>
                    <span class="token string">&#39;\` supplied to&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&#39; \`&#39;</span> <span class="token operator">+</span>
                    componentName <span class="token operator">+</span>
                    <span class="token string">&#39;\`. Validation failed.&#39;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u793A\u4F8B\u90E8\u5206" tabindex="-1">\u793A\u4F8B\u90E8\u5206: <a class="header-anchor" href="#\u793A\u4F8B\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u9650\u5236\u5BF9\u8C61\u5404\u4E2Akey\u7684\u503C\u7C7B\u578B,\u5373value\u7684\u7C7B\u578B.\u5177\u6709\u76F8\u540C\u5C5E\u6027\u503C\u7684\u5BF9\u8C61</span>
<span class="token literal-property property">optionalObjectWithShape</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">optionalProperty</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">requiredProperty</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u793A\u4F8B</span>
<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>number
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u6307\u5B9A\u53EA\u6709\u4E00\u4E2A\u5B50\u5143\u7D20\u53EF\u4EE5\u4F5C\u4E3A\u5185\u5BB9\u4F20\u9012\u7ED9\u7EC4\u4EF6,\u4E14\u5FC5\u9700</span>
<span class="token literal-property property">optionalElement</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>element
<span class="token comment">// \u793A\u4F8B</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u5426\u5219\u4F1A\u7ED9\u51FA\u8B66\u544A</span>
        <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>element<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u81EA\u5B9A\u4E49\u2018oneOfType\u2019\u9A8C\u8BC1\u5668\u3002\u5982\u679C\u63D0\u4F9B\u7684\u5C5E\u6027\u503C\u4E0D\u5339\u914D\u7684\u5B83\u5E94\u8BE5\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38</span>
<span class="token function-variable function">customProp</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">matchme</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Invalid prop \`&#39;</span> <span class="token operator">+</span> propName <span class="token operator">+</span> <span class="token string">&#39;\` supplied to&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39; \`&#39;</span> <span class="token operator">+</span> componentName <span class="token operator">+</span> <span class="token string">&#39;\`. Validation failed.&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u793A\u4F8B: \u9A8C\u8BC1\u4E00\u4E2A\u90AE\u7BB1</span>
MyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">email</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> regx <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$</span><span class="token regex-delimiter">/</span></span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>regx<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Email validation failed!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5C5E\u6027\u7C7B\u578B\u6821\u9A8C\u4E0D\u4F1A\u5F3A\u5236\u6539\u53D8\u5C5E\u6027\u503C\u7684\u6570\u636E\u7C7B\u578B\u548C\u8F93\u51FA,\u53EA\u4F1A\u63D0\u4F9B\u8B66\u544A.\u4E5F\u5C31\u662F\u8BF4,\u5982\u679C\u5904\u4E8E\u5F00\u53D1\u73AF\u5883,\u5C5E\u6027\u7C7B\u578B\u4E0D\u5339\u914D,\u63A7\u5236\u53F0\u4F1A\u6536\u5230\u8B66\u544A\u4FE1\u606F.\u4F46\u5728\u751F\u4EA7\u73AF\u5883\u4E0B,React \u5185\u90E8\u4F1A\u6291\u5236\u8B66\u544A\u7684\u8F93\u51FA.</p></blockquote><blockquote><p>React.js \u63D0\u4F9B\u4E24\u79CD\u7248\u672C\u7684\u5305,\u4E00\u4E2A\u7528\u4E8E\u5F00\u53D1\u73AF\u5883\u4E0B,\u4F1A\u8F93\u51FA\u89C9\u89C1\u9519\u8BEF\u7684\u989D\u5916\u8B66\u544A,\u800C\u751F\u4EA7\u7248\u672C(mini)\u5305\u62EC\u6027\u80FD\u4F18\u5316\u5E76\u4E14\u5265\u79BB\u4E86\u6240\u6709\u9519\u8BEF\u4FE1\u606F.</p></blockquote>`,17),e=[o];function c(l,u,r,k,i,m){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
