import{_ as n,c as s,o as a,a as t}from"./app.9dbb06c5.js";const g='{"title":"react-05: \u7EC4\u4EF6\u5D4C\u5957props.children","description":"","frontmatter":{},"headers":[],"relativePath":"FE-Framework/React/react-05-\u7EC4\u4EF6\u5D4C\u5957props.children.md"}',p={},c=t(`<h1 id="react-05-\u7EC4\u4EF6\u5D4C\u5957props-children" tabindex="-1">react-05: \u7EC4\u4EF6\u5D4C\u5957<code>props.children</code> <a class="header-anchor" href="#react-05-\u7EC4\u4EF6\u5D4C\u5957props-children" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u4E00\u8282\uFF0C\u6211\u4EEC\u63D0\u5230<code>this.props.children</code>\u6765\u83B7\u53D6\u7B2C\u4E09\u4E2A\u53C2\u6570\u7684\u503C\u663E\u793A h1 \u5143\u7D20\u7684\u5185\u5BB9\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\uFF0C\u901A\u8FC7<code>this.props.children</code>\u83B7\u53D6\u5D4C\u5957\u7684<code>li</code>\u5143\u7D20\u3002</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Ul</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> li_Angular <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> li_React <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> li_Vue <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> child <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Ul<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> li_Angular<span class="token punctuation">,</span> li_React<span class="token punctuation">,</span> li_Vue<span class="token punctuation">)</span><span class="token punctuation">,</span>
    child
<span class="token punctuation">)</span>
</code></pre></div><p>\u5173\u4E8E<code>this.props.children</code>\u6709\u8DA3\u7684\u662F\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u7684\u5F62\u5F0F\u8BBF\u95EE\u5176\u4E2D\u5143\u7D20\u3002</p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre></div><ul><li>\u4F46\u662F\u5982\u679C\u6CA1\u6709\u5B50\u5143\u7D20\uFF0C<code>this.props.children</code>\u662F<code>undefined</code>;</li><li>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u5B50\u5143\u7D20\u65F6\uFF0C\u5B83\u5C31\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4\u5F62\u5F0F\u4E86\u3002 <ul><li>\u5982\u679C\u4F20\u9012\u7684\u662F\u5F15\u53F7\u5B9A\u4E49\u7684\u5B57\u7B26\u4E32\u5185\u5BB9\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u503C</li><li>\u5982\u679C\u662F\u4E00\u4E2A react \u5143\u7D20\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</li></ul></li></ul><p>\u6CE8\u610F\u533A\u522B\u4EE5\u4E0B\u4E09\u79CD\u6253\u5370\u7ED3\u679C</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Ul</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> string_text <span class="token operator">=</span> <span class="token string">&#39;Hello React string&#39;</span>

<span class="token keyword">const</span> single_li <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello React single li&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> li_Angular <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> li_React <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;React&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> li_Vue <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> child <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token comment">// \u4E0D\u4F20\u9012\u503C\uFF0Cthis.props.children\u662Fundefined</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Ul<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// this.props.children\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32&#39;Hello React string&#39;</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Ul<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> string_text<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// this.props.children\u662F\u4E00\u4E2Areact\u5143\u7D20 sinle_li</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Ul<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> single_li<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// this.props.children\u662F\u4E00\u4E2A\u6570\u7EC4</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Ul<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> li_Angular<span class="token punctuation">,</span> li_React<span class="token punctuation">,</span> li_Vue<span class="token punctuation">)</span><span class="token punctuation">,</span>
    child
<span class="token punctuation">)</span>
</code></pre></div><p>\u6B64\u65F6\u5982\u679C\u5BF9 children \u957F\u5EA6\u4F7F\u7528<code>this.props.children.length</code>\u53BB\u5224\u65AD\u5C31\u4F1A\u4EA7\u751F bug\u3002\u56E0\u4E3A length \u662F\u5B57\u7B26\u4E32\u7684\u6709\u6548\u5C5E\u6027\uFF0C\u4F1A\u8FD4\u56DE\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u6216 undefined \u5C31\u4F1A\u62A5\u9519\u3002</p><p>\u6240\u4EE5 react \u63D0\u4F9B\u4E86<code>React.Children.count(this.props.children)</code>\u6765\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u51C6\u786E\u8BA1\u6570\u3002</p><p>React.Children \u63D0\u4F9B\u4E86\u7528\u4E8E\u5904\u7406 this.props.children \u4E0D\u900F\u660E\u6570\u636E\u7ED3\u6784\u7684\u5B9E\u7528\u65B9\u6CD5\u3002<a href="https://zh-hans.reactjs.org/docs/react-api.html#reactchildren" target="_blank" rel="noopener noreferrer">React.Children \u76F8\u5173 API</a></p><div class="language-js"><pre><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
</code></pre></div><p>\u603B\u7ED3\uFF1A</p><ul><li>\u4F7F\u7528<code>this.props.children</code>\u83B7\u53D6\u5D4C\u5957\u7684\u5B50\u5143\u7D20</li><li><code>this.props.children</code>\u7684\u503C\u7C7B\u578B\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u53EF\u80FD\u662F undefined\u3001\u5B57\u7B26\u4E32\u3001react \u5143\u7D20\u5BF9\u8C61\u3001\u6570\u7EC4</li><li><code>this.props.children</code>\u56E0\u4E3A\u503C\u7C7B\u578B\u4E0D\u786E\u5B9A\uFF0C\u6240\u4EE5\u4F7F\u7528<code>this.props.children.length</code>\u83B7\u53D6\u4E2A\u6570\u4F1A\u4EA7\u751F bug\uFF0C\u5E94\u8BE5\u4F7F\u7528<code>React.Children.count(this.props.children)</code>\u83B7\u53D6\u51C6\u786E\u4E2A\u6570</li><li>\u6269\u5C55\u4E86<code>React.Children</code>\u51E0\u4E2A API\uFF1A <code>React.Children.map</code>,<code>React.Children.forEach</code>,<code>React.Children.toArray</code>\uFF0C<code>React.Children.only</code></li></ul>`,15),e=[c];function o(l,u,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",o]]);export{g as __pageData,_ as default};
