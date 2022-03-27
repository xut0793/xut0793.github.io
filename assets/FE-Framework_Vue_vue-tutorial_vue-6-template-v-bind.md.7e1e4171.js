import{_ as s,c as t,b as n,t as p,d as a,a as e,o}from"./app.9dbb06c5.js";const D='{"title":"6 \u7ED1\u5B9A\u5143\u7D20\u7279\u6027\u7684\u6307\u4EE4v-bind","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/Vue/vue-tutorial/vue-6-template-v-bind.md"}',c={},l=n("h1",{id:"_6-\u7ED1\u5B9A\u5143\u7D20\u7279\u6027\u7684\u6307\u4EE4v-bind",tabindex:"-1"},[a("6 \u7ED1\u5B9A\u5143\u7D20\u7279\u6027\u7684\u6307\u4EE4"),n("code",null,"v-bind"),a(),n("a",{class:"header-anchor",href:"#_6-\u7ED1\u5B9A\u5143\u7D20\u7279\u6027\u7684\u6307\u4EE4v-bind","aria-hidden":"true"},"#")],-1),u=a("\u56DE\u987E\u4E0B\uFF0C\u4ECEHTML\u5143\u7D20\u7684\u7ED3\u6784\u770B\uFF0C\u5728VUE\u6846\u67B6\u4E2D\uFF0C\u5185\u5BB9\u7531\u63D2\u503C"),i=a("\u548C"),k=n("code",null,"v-html",-1),r=a("\u7ED1\u5B9A\uFF1B"),d=n("code",null,"v-if",-1),g=a("\u548C"),v=n("code",null,"v-show",-1),_=a("\u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u7684\u53EF\u89C1\u6027\uFF1B"),b=n("code",null,"v-for",-1),m=a("\u53EF\u4EE5\u7528\u4E8E\u6279\u91CF\u751F\u6210\u5217\u8868\u5143\u7D20\u3002"),q=e(`<p>\u8FD9\u4E00\u8282\u4ECB\u7ECD\u4E0B\u7ED1\u5B9A\u5143\u7D20\u7279\u6027\u7684\u6307\u4EE4<code>v-bind</code>\u7684\u7528\u6CD5\uFF1A</p><div class="language-html"><pre><code>v-bind:attribute = value
v-bind:attribute = expression
// v-bind \u7B80\u5199 \uFF1A
:attribute = value
:attribute = expression
</code></pre></div><p><a href="https://jsrun.net/ydXKp/edit" target="_blank" rel="noopener noreferrer"> \u70B9\u51FB\u67E5\u770BDEMO v-bind on attribute</a></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>disabledForBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">disabledForBtn</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u5F53<code>disabledForBtn</code>\u4E3A\u771F\u503C\u65F6\uFF0C\u6309\u94AE\u88AB\u7981\u7528\uFF0C\u5373<code>disabled</code>\u7279\u6027\u751F\u6548\u3002\u5176\u4E2D<code>disabled</code>\u79F0\u4E3A\u6307\u4EE4<code>v-bind</code>\u7684\u53C2\u6570\uFF0C\u800C<code>=</code>\u540E\u9762\u7684\u503C\u5176\u5B83\u6307\u4EE4\u4E00\u6837\uFF0C\u53EF\u4EE5\u662F\u5177\u4F53\u7684\u5E03\u5C14\u503C\u7C7B\u578B\u503C\uFF0C\u4E5F\u53EF\u4EE5\u8868\u8FBE\u5F0F\u8BD5\u7B97\u7684\u7ED3\u679C\u503C\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>new Date().getHours() &gt; 12<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u901A\u5E38\u4E0D\u5EFA\u8BAE\u5C06\u590D\u6742\u8BA1\u7B97\u5199\u5728tempalte\u6A21\u677F\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u540E\u9762\u8981\u8BB2\u5230\u7684\u8BA1\u7B97\u5C5E\u6027\u6765\u8868\u8FBE\uFF0C\u4F7F\u4EE3\u7801\u66F4\u4E3A\u7B80\u6D01\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>isCanUseInput<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">canUseBtn</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token function-variable function">isCanUseInput</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">12</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u5728\u9875\u9762\u4E2D\u6709\u5927\u5199\u7279\u6027\u7ED1\u5B9A\uFF0C\u9700\u8981\u53CD\u590D\u4E66\u5199<code>v-bind</code>\u76F8\u5F53\u91CD\u590D\u5DE5\u4F5C\uFF0C\u6240\u4EE5Vue\u63D0\u4F9B\u4E86\u7B80\u5199\u65B9\u5F0F\uFF1A\u7528\u5192\u53F7<code>:</code>\u4EE3\u66FF<code>v-bind</code>\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>disabledForBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>  <span class="token attr-name">:disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>new Date().getHours() &gt; 12<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>  <span class="token attr-name">:disabled</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>isCanUseInput<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>\u65E0\u8BBA\u9009\u62E9\u7528<code>v-bind</code>\u8FD8\u662F\u7B80\u5199\u5192\u53F7\u7684\u5F62\u5F0F\uFF0C\u5EFA\u8BAE\u5728\u9875\u9762\u4E2D\u90FD\u5C3D\u91CF\u4FDD\u6301\u4E00\u81F4\u6027\u3002</p><p>HTML\u5143\u7D20\u4E2D\u6709\u4E24\u4E2A\u7279\u6B8A\u7684\u7279\u6027\uFF0C<code>class</code>\u548C<code>styel</code>\uFF0C\u4E0B\u4E00\u8282\u5177\u4F53\u8BB2\u89E3\u3002</p>`,14);function h(y,f,V,w,T,B){return o(),t("div",null,[l,n("p",null,[u,n("code",null,p(),1),i,k,r,d,g,v,_,b,m]),q])}var F=s(c,[["render",h]]);export{D as __pageData,F as default};