import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";var p="/assets/components.e5f47a78.png",o="/assets/components-1.d5b368e2.png";const _='{"title":"31 \u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5F15\u7528\u65B9\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/Vue/vue-tutorial/vue-29-component-ref.md"}',e={},c=t('<h1 id="_31-\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5F15\u7528\u65B9\u5F0F" tabindex="-1">31 \u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5F15\u7528\u65B9\u5F0F <a class="header-anchor" href="#_31-\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5F15\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h1><ul><li><code>ref / $refs</code></li><li><code>$root</code></li><li><code>$parent</code></li><li><code>$children</code></li><li>\u6269\u5C55\u67E5\u627E\u4EFB\u610F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65B9\u6CD5</li></ul><p>\u5728vue\u5F00\u53D1\u7684\u9879\u76EE\u4E2D\uFF0C\u901A\u5E38\u4F1A\u4EE5\u4E00\u68F5\u5D4C\u5957\u7684\u7EC4\u4EF6\u6811\u7684\u5F62\u5F0F\u6765\u7EC4\u7EC7\u9879\u76EE\u3002</p><ul><li>\u90FD\u5B58\u5728\u7740\u4E00\u4E2A\u6839\u7EC4\u4EF6</li><li>\u7EC4\u4EF6\u540C\u65F6\u4E5F\u90FD\u662F Vue \u5B9E\u4F8B\uFF0C\u7EC4\u4EF6\u95F4\u53EF\u4EE5\u5D4C\u5957\u4F7F\u7528\uFF0C\u5F62\u6210\u4E86\u6811\u72B6\u7684\u7EA7\u8054\u5F62\u5F0F\uFF0C\u4E5F\u5C31\u5F62\u6210\u4E86\u7236\u5B50\u7EC4\u4EF6\u3001\u5144\u5F1F\u7EC4\u4EF6\u3001\u7956\u5148\u6216\u540E\u4EE3\u7EC4\u4EF6\u8FD9\u4E9B\u5173\u7CFB\u3002 <img src="'+p+'" alt=""></li></ul><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6709\u65F6\u9700\u8981\u83B7\u53D6\u67D0\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u6765\u5F15\u7528\u5176\u6570\u636E\u6216\u65B9\u6CD5\u3002\u5728\u524D\u9762\u8BB2\u89E3\u7EC4\u4EF6API\u7684<code>event</code>\u65F6\uFF0C\u901A\u8FC7<code>ref / $refs</code>\u8C03\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u6765\u8FDB\u884C\u4E8B\u4EF6\u76D1\u542C\u548C\u89E6\u53D1\u3002\u4F46<code>$refs</code>\u53EA\u80FD\u5F15\u7528\u8BE5\u7EC4\u4EF6\u4E0B\u7684\u5B50\u7EC4\u4EF6\u3002</p><p>\u4F46\u5B9E\u9645\u4E0A<code>vue</code>\u8FD8\u63D0\u4F9B\u5176\u5B83\u51E0\u4E2AAPI\u6765\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B<code>$root / $parent / $children</code>\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E9B\u6765\u6269\u5C55\u67E5\u627E\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u4FBF\u6377\u65B9\u6CD5\u3002 <img src="'+o+`" alt=""></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> child1 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u5B50\u7EC4\u4EF61&lt;child1_1&gt;&lt;/child1_1&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> child1_1 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u5B50\u7EC4\u4EF61_1\uFF0C\u70B9\u51FB\u6253\u5370&lt;/button&gt;
        &lt;child1_1_1&gt;&lt;/child1_1_1&gt;
        &lt;child1_1_2 ref=&quot;child1_1_2&quot;&gt;&lt;/child1_1_2/&gt;
        &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$root:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$parent:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$children:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$children[0]:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$children[1]:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.$refs.child1_1_2:&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>child1_1_2<span class="token punctuation">.</span>$vnode<span class="token punctuation">.</span>tag<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> child1_1_1 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u5B50\u7EC4\u4EF61_1_1&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> child1_1_2 <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u5B50\u7EC4\u4EF61_1_2&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child1&#39;</span><span class="token punctuation">,</span>child1<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child1_1&#39;</span><span class="token punctuation">,</span>child1_1<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child1_1_1&#39;</span><span class="token punctuation">,</span>child1_1_1<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child1_1_2&#39;</span><span class="token punctuation">,</span>child1_1_2<span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-"><pre><code>this: vue-component-2-child1_1
this.$root: Vue\xA0{_uid: 0, _isVue: true, $options: {\u2026}, _renderProxy: Proxy, _self: Vue,\xA0\u2026}
this.$parent: vue-component-1-child1
this.$children:\xA0[VueComponent, VueComponent]
this.$children[0]: vue-component-3-child1_1_1
this.$children[1]: vue-component-4-child1_1_2
this.$refs.child1_1_2: vue-component-4-child1_1_2
</code></pre></div><h4 id="\u6839\u636E\u7EC4\u4EF6\u540D\u79F0\u67E5\u627E\u4EFB\u610F\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1">\u6839\u636E\u7EC4\u4EF6\u540D\u79F0\u67E5\u627E\u4EFB\u610F\u7EC4\u4EF6\u5B9E\u4F8B <a class="header-anchor" href="#\u6839\u636E\u7EC4\u4EF6\u540D\u79F0\u67E5\u627E\u4EFB\u610F\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p><a href="https://github.com/icarusion/vue-component-book" target="_blank" rel="noopener noreferrer">\u70B9\u51FB\u67E5\u770B\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://github.com/icarusion/vue-component-book</a></p><p>\u573A\u666F\uFF1A</p><ul><li>\u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0A\u627E\u5230\u6700\u8FD1\u7684\u6307\u5B9A\u7EC4\u4EF6</li><li>\u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0A\u627E\u5230\u6240\u6709\u7684\u6307\u5B9A\u7EC4\u4EF6</li><li>\u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0B\u627E\u5230\u6700\u8FD1\u7684\u6307\u5B9A\u7EC4\u4EF6</li><li>\u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0B\u627E\u5230\u6240\u6709\u6307\u5B9A\u7684\u7EC4\u4EF6</li><li>\u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u627E\u5230\u6307\u5B9A\u7EC4\u4EF6\u7684\u5144\u5F1F\u7EC4\u4EF6</li></ul><p>\u5B9E\u73B0\uFF1A \u7ED3\u5408<code>$parent / $children</code>\uFF0C\u901A\u8FC7\u9012\u5F52\u3001\u904D\u5386\u67E5\u627E\u4E0E\u6307\u5B9A\u7EC4\u4EF6\u7684name\u9009\u9879\u5339\u914D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0A\u627E\u5230\u6700\u8FD1\u7684\u6307\u5B9A\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">findComponentUpward</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parent <span class="token operator">=</span> context<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name <span class="token operator">||</span> <span class="token punctuation">[</span>componentName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> parent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0A\u627E\u5230\u6240\u6709\u7684\u6307\u5B9A\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">findComponentsUpward</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> parent <span class="token operator">=</span> context<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name <span class="token operator">===</span> componentName<span class="token punctuation">)</span> parents<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> parents<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">findComponentsUpward</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0B\u627E\u5230\u6700\u8FD1\u7684\u6307\u5B9A\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">findComponentDownward</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> childrens <span class="token operator">=</span> context<span class="token punctuation">.</span>$children<span class="token punctuation">;</span>
    <span class="token keyword">let</span> children <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>childrens<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> child <span class="token keyword">of</span> childrens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> name <span class="token operator">=</span> child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> componentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                children <span class="token operator">=</span> child<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                children <span class="token operator">=</span> <span class="token function">findComponentDownward</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5411\u4E0B\u627E\u5230\u6240\u6709\u6307\u5B9A\u7684\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">findComponentsDownward</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> context<span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">components<span class="token punctuation">,</span> child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name <span class="token operator">===</span> componentName<span class="token punctuation">)</span> components<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> foundChilds <span class="token operator">=</span> <span class="token function">findComponentsDownward</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> components<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>foundChilds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u7531\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u627E\u5230\u6307\u5B9A\u7EC4\u4EF6\u7684\u5144\u5F1F\u7EC4\u4EF6</span>
<span class="token comment">// \u6BCF\u4E2Avue\u7EC4\u4EF6\u5B9E\u4F8B\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684_uid</span>
<span class="token keyword">function</span> <span class="token function">findBrothersComponents</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> exceptMe <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> context<span class="token punctuation">.</span>$parent<span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> item<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>name <span class="token operator">===</span> componentName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>_uid <span class="token operator">===</span> context<span class="token punctuation">.</span>_uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exceptMe<span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),u=[c];function l(i,k,r,d,m,h){return a(),s("div",null,u)}var f=n(e,[["render",l]]);export{_ as __pageData,f as default};
