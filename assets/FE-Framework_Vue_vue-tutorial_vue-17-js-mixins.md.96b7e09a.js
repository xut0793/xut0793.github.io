import{_ as n,c as s,o as a,a as p}from"./app.9dbb06c5.js";const y='{"title":"21 mixins","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528\uFF1A","slug":"\u57FA\u672C\u4F7F\u7528\uFF1A"},{"level":2,"title":"\u6DF7\u5165\u6CE8\u610F\u4E8B\u9879","slug":"\u6DF7\u5165\u6CE8\u610F\u4E8B\u9879"},{"level":2,"title":"\u6DF7\u5165\u5185\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303","slug":"\u6DF7\u5165\u5185\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303"},{"level":2,"title":"\u6DF7\u5165mixin\u7684\u6E90\u7801\u89E3\u8BFB","slug":"\u6DF7\u5165mixin\u7684\u6E90\u7801\u89E3\u8BFB"}],"relativePath":"FE-Framework/Vue/vue-tutorial/vue-17-js-mixins.md"}',t={},o=p(`<h1 id="_21-mixins" tabindex="-1">21 mixins <a class="header-anchor" href="#_21-mixins" aria-hidden="true">#</a></h1><p>\u6DF7\u5165\u662F\u4E00\u79CD\u5BF9\u91CD\u590D\u4EE3\u7801\u7684\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5728\u591A\u4E2A\u7EC4\u4EF6\u95F4\u590D\u7528\u4EE3\u7801\u3002</p><p>\u5982\u679C\u5728\u9879\u76EE\u4E2D\uFF0C\u5728\u591A\u4E2A\u7EC4\u4EF6\u95F4\u6709\u4E00\u6BB5\u903B\u8F91\u4EE3\u7801\u662F\u5171\u540C\u7684\u3002\u90A3\u5E38\u89C1\u7684\u5904\u7406\u65B9\u5F0F\u662F\uFF1A</p><ul><li>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u590D\u5236\u7C98\u8D34\u4EE3\u7801\uFF08\u663E\u7136\u8FD9\u662F\u6700\u4E0D\u597D\u65B9\u5F0F\uFF09</li><li>\u5C06\u4EE5\u5171\u540C\u7684\u4EE3\u7801\u903B\u8F91\u62BD\u79BB\u6210\u591A\u4E2A\u51FD\u6570\uFF0C\u5E76\u5B58\u50A8\u5230util\u6587\u4EF6\u91CC\uFF0C\u5728\u7EC4\u4EF6\u4F7F\u7528\u65F6\u5F15\u5165\u8FD9\u4E2A\u65B9\u6CD5\u3002</li><li>\u76F4\u63A5\u5C06\u5171\u540C\u7684\u4EE3\u7801\u5265\u79BB\u51FA\u6765\uFF0C\u5E76\u5B58\u50A8\u5230\u4F60\u5B9A\u4E49\u7684mixin\u6587\u4EF6\u91CC\uFF0C\u5728\u7EC4\u4EF6\u4F7F\u7528\u65F6\u5F15\u5165\uFF0C\u5E76\u5728\u5B9E\u4F8B\u9009\u9879\u4E2D\u5168\u5C40\u6DF7\u5165\uFF0C\u6216\u7EC4\u4EF6\u4E2D\u5C40\u90E8\u6DF7\u5165\u3002</li></ul><p>\u540E\u4E24\u79CD\u65B9\u5F0F\u5728\u601D\u60F3\u4E0A\u662F\u4E00\u81F4\u7684\uFF0C\u4F46\u662Fmixin\u6DF7\u5165\u6BD4\u65B9\u6CD5\u62BD\u79BB\u66F4\u4E3A\u5F7B\u5E95\uFF0C\u5728\u6DF7\u5165\u4E2D\u5B8C\u5168\u6309\u7167vue\u7684\u4EE3\u7801\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>method</code>\u6216\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\uFF0C\u53EF\u4EE5\u5305\u542B<code>this</code>\u5BF9\u8C61\u7B49\u3002\u800C\u62BD\u79BB\u6210\u5DE5\u5177\u65B9\u6CD5\u4E2D\uFF0C\u4E0D\u80FD\u4F7F\u7528vue\u76F8\u5173\u7684\u9009\u9879\u5C5E\u6027\uFF0C\u53EA\u80FD\u662F\u5C06\u91CD\u590D\u7684\u903B\u8F91\u4EE3\u7801\u81EA\u5B9A\u4E49\u6210\u51FD\u6570\u5F62\u5F0F\u3002</p><blockquote><p>\u6DF7\u5165\u5BF9\u8C61\u53EF\u4EE5\u5F15\u7528\u4EFB\u4F55<code>vue</code>\u7EC4\u4EF6\u6240\u80FD\u5F15\u7528\u7684\u4E1C\u897F\uFF0C\u5C31\u597D\u50CF\u5B83\u662F\u7EC4\u4EF6\u672C\u8EAB\u4E00\u6837</p></blockquote><h2 id="\u57FA\u672C\u4F7F\u7528\uFF1A" tabindex="-1">\u57FA\u672C\u4F7F\u7528\uFF1A <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528\uFF1A" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u5728\u9879\u76EE\u4E2D\u6709\u51E0\u4E2A\u7EC4\u4EF6\u90FD\u8981\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u8C03\u7528<code>getUserInfo</code>\u65B9\u6CD5\u3002\u5219\u53EF\u4EE5\u6309\u4E0B\u9762\u8FD9\u4E48\u64CD\u4F5C\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// userInfoMixin.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> userInfoMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">api/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// A\u7EC4\u4EF6\u5185\uFF0C\u5148\u5F15\u5165\uFF0C\u518D\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>userInfoMixin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;.mixins/userInfoMixin&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>userInfoMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> number
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76F4\u63A5\u8C03\u7528this\u6253\u70B9\u8C03\u7528\u6DF7\u5165\u7684\u65B9\u6CD5\uFF0C\u5C31\u50CF\u4F7F\u7528\u81EA\u8EAB\u5B9A\u4E49\u7684\u4E00\u6837</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> res
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F46\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EA\u867D\u5265\u79BB\u4E00\u4E2A\u5171\u540C\u7684\u65B9\u6CD5\u3002\u5728utils\u4E2D\u7ECF\u5E38\u7C7B\u4F3C\u8FD9\u4E48\u64CD\u4F5C\u3002\u5B9E\u9645\u4E0A\u6DF7\u5165\u53EF\u4EE5\u4F7F\u7528vue\u7EC4\u4EF6\u7684\u4EFB\u610F\u5C5E\u6027\uFF0C\u6240\u4EE5\u4E0A\u9762\u7684<code>data</code>\u4E2D\u7684<code>userInfo</code>\u548C<code>mounted</code>\u4E2D\u7684\u65B9\u6CD5\u8C03\u7528\u4EE3\u7801\u90FD\u662F\u91CD\u590D\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6309\u4E0B\u9762\u4F18\u5316\u540E\uFF0C\u8FD9\u6837\u6DF7\u5165\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// userInfoMixin.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> userInfoMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> res
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">api/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// A\u7EC4\u4EF6\u5185\uFF0C\u5148\u5F15\u5165\uFF0C\u518D\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>userInfoMixin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;.mixins/userInfoMixin&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>userInfoMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> number
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u867D\u7136\u6DF7\u5165\u4F7F\u7EC4\u4EF6\u7B80\u5316\u4E86\u5F88\u591A\uFF0C\u4F46\u662F\u8BA9\u8FFD\u8E2A\u6570\u636E\u7684\u6765\u6E90\u53D8\u5F97\u590D\u6742\u4E86\u3002\u5F53\u51B3\u5B9A\u5C06\u54EA\u4E9B\u4EE3\u7801\u653E\u5728\u6DF7\u5165\u5BF9\u8C61\u4E2D\uFF0C\u54EA\u4E9B\u4EE3\u7801\u4FDD\u7559\u5728\u7EC4\u4EF6\u4E2D\uFF0C\u4F60\u5FC5\u987B\u8861\u91CF\u8FD9\u6837\u505A\u7684\u4EE3\u4EF7\u548C\u6536\u76CA\u3002</p><h2 id="\u6DF7\u5165\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6DF7\u5165\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6DF7\u5165\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><p>\u5982\u679C\u6DF7\u5165\u5BF9\u8C61\u548C\u7EC4\u4EF6\u95F4\u6709\u91CD\u590D\u7684\u9009\u9879\uFF0C<code>vue</code>\u4F1A\u6839\u636E\u91CD\u590D\u7684\u9009\u9879\u7C7B\u578B\u6765\u533A\u522B\u5BF9\u5F85</p><ul><li>\u5BF9\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7684\u91CD\u590D\uFF0C\u4F1A\u5C06\u5B83\u4EEC\u6DFB\u52A0\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u5E76\u4F1A\u5168\u90E8\u6267\u884C\u3002</li><li>\u5BF9\u5176\u5B83\u91CD\u590D\u7684\u6570\u636E\u3001\u65B9\u6CD5\u3001\u8BA1\u7B97\u5C5E\u6027\u7B49\u975E\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u7EC4\u4EF6\u4E2D\u7684\u5C5E\u6027\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u4F1A\u8986\u76D6\u6DF7\u5165\u7684\u5BF9\u5E94\u9879\u3002</li></ul><div class="language-js"><pre><code><span class="token comment">//mixin</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> hi <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from mixin!&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//vue instance or component</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>hi<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from Vue instance!&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5F53\u7EC4\u4EF6\u521B\u5EFA\u65F6\uFF0C\`mixin\`\u6DF7\u5165\u4E2D\u4FE1\u606F\u4F1A\u5148\u4E8E\u7EC4\u4EF6\u4E2D\u4FE1\u606F\u7684\u8F93\u51FA\u3002</span>
    <span class="token operator">&gt;</span> hello from mixin<span class="token operator">!</span>
    <span class="token operator">&gt;</span> hello from Vue instance<span class="token operator">!</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//mixin</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> hi <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from mixin!&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//vue instance or component</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>hi<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from Vue instance!&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u7EC4\u4EF6\u5185\u7684\u65B9\u6CD5\u8986\u76D6\u4E86\`mixin\`\u7684\u540C\u540D\u65B9\u6CD5\u3002</span>
    <span class="token operator">&gt;</span> hello from Vue instance<span class="token operator">!</span>
    <span class="token operator">&gt;</span> hello from Vue instance<span class="token operator">!</span>
</code></pre></div><h2 id="\u6DF7\u5165\u5185\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303" tabindex="-1">\u6DF7\u5165\u5185\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303 <a class="header-anchor" href="#\u6DF7\u5165\u5185\u5BF9\u8C61\u7684\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u4F1A\u7279\u610F\u7528\u5230\u8FD9\u79CD\u51B2\u7A81\u7684\u8986\u76D6\uFF0C\u4F46\u6709\u65F6\u9700\u8981\u907F\u514D\u8FD9\u79CD\u51B2\u7A81\u8986\u76D6\uFF0C\u5728<code>vue</code>\u5B98\u65B9\u4EE3\u7801\u98CE\u683C\u6307\u5357\u4E2D\u5EFA\u8BAE\u5BF9\u4E8E\u6DF7\u5165\u7684\u79C1\u6709\u5C5E\u6027\uFF08\u4E0D\u5E94\u8BE5\u5728\u5728\u6DF7\u5165\u4E4B\u5916\u5728\u4F7F\u7528\u7684\u65B9\u6CD5\u3001\u6570\u636E\u6216\u8BA1\u7B97\u5C5E\u6027\uFF09,\u5E94\u8BE5\u5728\u5B83\u4EEC\u540D\u79F0\u524D\u9762\u6DFB\u52A0\u524D\u7F00<code>$_</code>\u4EE5\u793A\u533A\u5206\u3002\u6BD4\u5982\u4E0A\u9762\u4F1A\u88AB\u8986\u76D6\u7684\u65B9\u6CD5\u53EF\u4EE5\u547D\u540D\u6210<code>$_sayHello</code>\u3002\u8FD9\u5728\u5F00\u53D1\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6216\u63D2\u4EF6\u65F6\u6781\u4E3A\u91CD\u8981\uFF0C\u56E0\u4E3A\u7528\u6237\u5728\u4F7F\u7528\u63D2\u4EF6\u7684\u9879\u76EE\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u4F7F\u7528\u76F8\u540C\u7684\u5C5E\u6027\u540D\u79F0\uFF0C\u5982\u679C\u91CD\u540D\u4F1A\u9020\u6210BUG\u3002</p><h2 id="\u6DF7\u5165mixin\u7684\u6E90\u7801\u89E3\u8BFB" tabindex="-1">\u6DF7\u5165<code>mixin</code>\u7684\u6E90\u7801\u89E3\u8BFB <a class="header-anchor" href="#\u6DF7\u5165mixin\u7684\u6E90\u7801\u89E3\u8BFB" aria-hidden="true">#</a></h2><p>\u5176\u5B9E\u6E90\u7801\u4E2D<code>mixin</code>\u539F\u7406\u5E76\u4E0D\u590D\u6742\uFF0C\u53EA\u662F\u5C06<code>mixin</code>\u4E2D\u7684\u5BF9\u8C61\u4E0E<code>vue</code>\u81EA\u8EAB\u7684options\u5C5E\u6027\u5408\u5E76\u5728\u4E00\u8D77\u3002\u590D\u6742\u662F\u9700\u8981\u5224\u65AD\u6DF7\u5165\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5C5E\u6027\uFF0C\u6839\u636E\u5C5E\u6027\u4E0D\u540C\u91C7\u7528\u4E0D\u7528\u7684\u5408\u5E76\u7B56\u7565\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6587\u4EF6\u4F4D\u7F6E\uFF1A vue/src/core/index</span>
<span class="token comment">// vue\u5B9E\u4F8B\u521D\u59CB\u5316\u5168\u5C40API</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./global-api/index&#39;</span>
<span class="token function">initGlobalAPI</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u6587\u4EF6\u4F4D\u7F6E\uFF1A vue/src/core/goloba-api/index</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mixin&#39;</span>
<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u6587\u4EF6\u4F4D\u7F6E\uFF1Avue/src/core/global-api/mixin</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mergeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initMixin</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mixin</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> mixin<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// mergeOptions\u65B9\u6CD5\u5728\uFF1Avue/src/core/util/options</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mergeOptions</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...\u5176\u5B83\u4EE3\u7801</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> key
    <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u7EC4\u4EF6parent\u5185\u5DF2\u7ECF\u5904\u7406\u8FC7\u7684\u5C5E\u6027\uFF0C\u5219\u4E0D\u518D\u5904\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">mergeField</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strat <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> defaultStrat
        options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">strat</span><span class="token punctuation">(</span>parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> vm<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> options
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u540C\u7684\u5168\u5E76\u7B56\u7565</span>
strats<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* do something */</span><span class="token punctuation">}</span>
strats<span class="token punctuation">.</span><span class="token function-variable function">watch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* do something */</span><span class="token punctuation">}</span>
strats<span class="token punctuation">.</span>props <span class="token operator">=</span>
strats<span class="token punctuation">.</span>methods <span class="token operator">=</span>
strats<span class="token punctuation">.</span>inject <span class="token operator">=</span>
strats<span class="token punctuation">.</span><span class="token function-variable function">computed</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* do something */</span><span class="token punctuation">}</span>

<span class="token comment">// \u5BF9\u4E8Ecomponent / directive / filter \u7B49\u6A21\u677F\u4F9D\u8D56\u76F8\u5173\u7684\u5C5E\u6027\u7684\u6DF7\u5165\u7B56\u7565</span>
<span class="token constant">ASSET_TYPES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  strats<span class="token punctuation">[</span>type <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> mergeAssets
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u4E8E\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u6DF7\u5165\u7B56\u7565</span>
<span class="token constant">LIFECYCLE_HOOKS</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">hook</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  strats<span class="token punctuation">[</span>hook<span class="token punctuation">]</span> <span class="token operator">=</span> mergeHook
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/**
 * Hooks are merged as arrays.
 */</span>
<span class="token keyword">function</span> <span class="token function">mergeHook</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentVal</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">childVal</span><span class="token operator">:</span> <span class="token operator">?</span>Function <span class="token operator">|</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>Function<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> childVal
    <span class="token operator">?</span> parentVal
      <span class="token operator">?</span> parentVal<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
      <span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span>
        <span class="token operator">?</span> childVal
        <span class="token operator">:</span> <span class="token punctuation">[</span>childVal<span class="token punctuation">]</span>
    <span class="token operator">:</span> parentVal
  <span class="token keyword">return</span> res
    <span class="token operator">?</span> <span class="token function">dedupeHooks</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token operator">:</span> res
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dedupeHooks</span> <span class="token punctuation">(</span><span class="token parameter">hooks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hooks<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hooks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u63A8\u5165\u6570\u7EC4\u4E2D</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div>`,27),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
