import{_ as n,c as s,o as a,a as t}from"./app.f1e974b0.js";const h='{"title":"Jest","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":3,"title":"describe / test","slug":"describe-test"},{"level":3,"title":"\u94A9\u5B50\u51FD\u6570","slug":"\u94A9\u5B50\u51FD\u6570"},{"level":2,"title":"Mock \u51FD\u6570","slug":"mock-\u51FD\u6570"},{"level":3,"title":"jest.fn()","slug":"jest-fn"},{"level":3,"title":"jest.mock()","slug":"jest-mock"},{"level":3,"title":"jest.spyOn()","slug":"jest-spyon"},{"level":2,"title":"\u5FEB\u7167 snapshot","slug":"\u5FEB\u7167-snapshot"},{"level":2,"title":"\u6D4B\u8BD5\u8986\u76D6\u7387 coverage","slug":"\u6D4B\u8BD5\u8986\u76D6\u7387-coverage"},{"level":2,"title":"\u5E38\u7528\u7684\u65AD\u8A00","slug":"\u5E38\u7528\u7684\u65AD\u8A00"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6jest.config.js","slug":"\u914D\u7F6E\u6587\u4EF6jest-config-js"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"FE-Engineering/dev-test/1-jest.md"}',p={},o=t(`<h1 id="jest" tabindex="-1">Jest <a class="header-anchor" href="#jest" aria-hidden="true">#</a></h1><p><code>Jest</code> \u662F\u4E00\u4E2A\u7531 Facebook \u5F00\u53D1\u7684\u6D4B\u8BD5\u8FD0\u884C\u5668 (test runner) \u3002\u6D4B\u8BD5\u8FD0\u884C\u5668\u5C31\u662F\u8FD0\u884C\u6D4B\u8BD5\u4EE3\u7801\u7684\u7A0B\u5E8F\u3002</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="describe-test" tabindex="-1"><code>describe / test</code> <a class="header-anchor" href="#describe-test" aria-hidden="true">#</a></h3><p><code>describe</code>,<code>test</code>\u4EE3\u8868\u4E00\u4E2A\u6267\u884C\u5757(\u4F5C\u7528\u57DF),\u53EF\u4EE5\u901A\u8FC7<code>describe</code>\u5757\u6765\u5C06\u6D4B\u8BD5\u5206\u7EC4,\u5982\u679C\u6CA1\u6709<code>describe</code>,\u90A3\u6574\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A describe.</p><p>\u6CE8\u610F\uFF1A\u591A\u5C42\u5D4C\u5957\u7684 <code>describe</code> \u65F6\u6267\u884C\u987A\u5E8F\uFF1A\uFF08\u5F85\u8865\u5145\u4F8B\u5B50\uFF09</p><h3 id="\u94A9\u5B50\u51FD\u6570" tabindex="-1">\u94A9\u5B50\u51FD\u6570 <a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u94A9\u5B50\u51FD\u6570\u4E3B\u8981\u7528\u4E8E\u7F16\u5199\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u6709\u4E24\u79CD\uFF1A</p><ol><li>\u5168\u5C40\u94A9\u5B50\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49</li></ol><ul><li>setupFiles</li><li>setupFilesAfterEnv</li><li>clearMocks</li><li>resetMocks</li><li>resetModules</li><li>restoreMocks</li></ul><ol start="2"><li>\u6D4B\u8BD5\u6587\u4EF6\u5185\u8272\u5B50\uFF0C\u5305\u62EC\uFF1A</li></ol><ul><li>beforeAll</li><li>afterAll</li><li>beforeEach</li><li>afterEach</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B,before \u548C after \u7684\u5757\u53EF\u4EE5\u5E94\u7528\u5230\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A\u6D4B\u8BD5. \u6B64\u5916\u53EF\u4EE5\u901A\u8FC7 describe \u5757\u6765\u5C06\u6D4B\u8BD5\u5206\u7EC4.</p><p>\u5F53 before \u548C after \u7684\u5757\u5728 describe \u5757\u5185\u90E8\u65F6,\u5219\u5176\u53EA\u9002\u7528\u4E8E\u8BE5 describe \u5757\u5185\u7684\u6D4B\u8BD5.</p><div class="language-js"><pre><code><span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5916 - beforeAll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">afterAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5916 - afterAll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5916 - beforeEach&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2 6</span>
<span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5916 - afterEach&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4 10</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5916 - test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;describe inside&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5185 - beforeAll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
  <span class="token function">afterAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5185 - afterAll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5185 - beforeEach&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 7</span>
  <span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5185 - afterEach&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 9</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5185 - test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 8</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="mock-\u51FD\u6570" tabindex="-1">Mock \u51FD\u6570 <a class="header-anchor" href="#mock-\u51FD\u6570" aria-hidden="true">#</a></h2><p>Jest \u4E2D\u7684\u4E09\u4E2A\u4E0E Mock \u51FD\u6570\u76F8\u5173\u7684 API,\u5206\u522B\u662F<code>jest.fn()</code>,<code>jest.spyOn()</code>,<code>jest.mock()</code></p><h3 id="jest-fn" tabindex="-1"><code>jest.fn()</code> <a class="header-anchor" href="#jest-fn" aria-hidden="true">#</a></h3><ul><li><code>jest.fn()</code>\u662F\u521B\u5EFA Mock \u51FD\u6570\u6700\u7B80\u5355\u7684\u65B9\u5F0F,\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u51FD\u6570\u5185\u90E8\u7684\u5B9E\u73B0,<code>jest.fn()</code>\u4F1A\u8FD4\u56DE<code>undefined</code>\u4F5C\u4E3A\u8FD4\u56DE\u503C</li><li><code>jest.fn()</code>\u6240\u521B\u5EFA\u7684 Mock \u51FD\u6570\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u8FD4\u56DE\u503C,\u5B9A\u4E49\u5185\u90E8\u5B9E\u73B0\u6216\u8FD4\u56DE Promise \u5BF9\u8C61</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ajaxMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../__mock__/ajax.mock&#39;</span>
<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;ajax_test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;ajax_\u662F\u5426\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mockFun1 <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    mockFun1<span class="token punctuation">.</span><span class="token function">mockReturnValueOnce</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockReturnValueOnce</span><span class="token punctuation">(</span><span class="token number">789</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> mockFun2 <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">456</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">ajaxMock</span><span class="token punctuation">(</span>mockFun1<span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">ajaxMock</span><span class="token punctuation">(</span>mockFun1<span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">ajaxMock</span><span class="token punctuation">(</span>mockFun2<span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>mockFun1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u88AB\u6267\u884C</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockFun1<span class="token punctuation">.</span>mock<span class="token punctuation">.</span>calls<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u6B21\u6570</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockFun2<span class="token punctuation">.</span>mock<span class="token punctuation">.</span>results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="jest-mock" tabindex="-1"><code>jest.mock()</code> <a class="header-anchor" href="#jest-mock" aria-hidden="true">#</a></h3><p>\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B,\u4E00\u4E9B\u8BF7\u6C42\u65B9\u6CD5\u53EF\u80FD\u6211\u4EEC\u5728\u5176\u4ED6\u6A21\u5757\u88AB\u8C03\u7528\u7684\u65F6\u5019,\u5E76\u4E0D\u9700\u8981\u8FDB\u884C\u5B9E\u9645\u7684\u8BF7\u6C42,\u53EF\u4EE5\u4F7F\u7528<code>jest.mock()</code>\u53BB mock \u6574\u4E2A\u6A21\u5757</p><div class="language-js"><pre><code><span class="token keyword">import</span> call <span class="token keyword">from</span> <span class="token string">&#39;../src/call&#39;</span>
<span class="token keyword">import</span> ajax <span class="token keyword">from</span> <span class="token string">&#39;../src/ajax&#39;</span>

jest<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;../src/ajax.js&#39;</span><span class="token punctuation">)</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;mock \u6574\u4E2A ajax.js\u6A21\u5757&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> call<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>ajax<span class="token punctuation">.</span>ajaxGetData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>ajax<span class="token punctuation">.</span>ajaxGetData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledTimes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="jest-spyon" tabindex="-1"><code>jest.spyOn()</code> <a class="header-anchor" href="#jest-spyon" aria-hidden="true">#</a></h3><p>jest.spyOn()\u65B9\u6CD5\u540C\u6837\u521B\u5EFA\u4E00\u4E2A mock \u51FD\u6570,\u4F46\u662F\u8BE5 mock \u51FD\u6570\u4E0D\u4EC5\u80FD\u591F\u6355\u83B7\u51FD\u6570\u7684\u8C03\u7528\u60C5\u51B5,\u8FD8\u53EF\u4EE5\u6B63\u5E38\u7684\u6267\u884C\u88AB spy \u7684\u51FD\u6570.\u5B9E\u9645\u4E0A,jest.spyOn()\u662F jest.fn()\u7684\u8BED\u6CD5\u7CD6,\u5B83\u521B\u5EFA\u4E86\u4E00\u4E2A\u548C\u88AB spy \u7684\u51FD\u6570\u5177\u6709\u76F8\u540C\u5185\u90E8\u4EE3\u7801\u7684 mock \u51FD\u6570.</p><div class="language-js"><pre><code><span class="token keyword">import</span> call <span class="token keyword">from</span> <span class="token string">&#39;../src/call&#39;</span>
<span class="token keyword">import</span> ajax <span class="token keyword">from</span> <span class="token string">&#39;../src/ajax&#39;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F7F\u7528jest.spyOn()\u76D1\u63A7ajax.ajaxGetData\u88AB\u6B63\u5E38\u8C03\u7528&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  expect<span class="token punctuation">.</span><span class="token function">assertions</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> spyFn <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>ajax<span class="token punctuation">,</span> <span class="token string">&#39;ajaxGetData&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> call<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>spyFn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>spyFn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledTimes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5FEB\u7167-snapshot" tabindex="-1">\u5FEB\u7167 snapshot <a class="header-anchor" href="#\u5FEB\u7167-snapshot" aria-hidden="true">#</a></h2><p>jest \u53EF\u4EE5\u5BF9\u6574\u4F53\u7684 html \u8FDB\u884C\u6D4B\u8BD5\u6709\u6CA1\u6709\u66F4\u6539,\u65B9\u6CD5\u5C31\u662F Snapshot \u6D4B\u8BD5(\u5FEB\u7167\u6D4B\u8BD5),\u76EE\u524D\u6765\u8BF4\u662F jest \u4E13\u6709\u7684\u6D4B\u8BD5\u65B9\u6CD5,\u901A\u8FC7\u5BF9\u6BD4\u524D\u540E\u7684\u5FEB\u7167,\u53EF\u4EE5\u5F88\u5FEB\u627E\u51FA UI \u7684\u53D8\u5316\u4E4B\u5904.</p><ul><li><code>wrapper.html()</code>\u83B7\u53D6\u6574\u4E2A DOM</li><li><code>toMatchSnapshot()</code>\u7B2C\u4E00\u6B21\u8FD0\u884C\u5FEB\u7167\u6D4B\u8BD5\u65F6\u4F1A\u751F\u6210\u4E00\u4E2A\u5FEB\u7167\u6587\u4EF6,\u4E4B\u540E\u6BCF\u6B21\u6267\u884C\u6D4B\u8BD5\u7684\u65F6\u5019,\u4F1A\u751F\u6210\u4E00\u4E2A\u5FEB\u7167,\u7136\u540E\u5BF9\u6BD4\u6700\u521D\u751F\u6210\u7684\u5FEB\u7167\u6587\u4EF6,\u5982\u679C\u6CA1\u6709\u53D1\u751F\u6539\u53D8,\u5219\u901A\u8FC7\u6D4B\u8BD5\uFF1B\u5426\u5219\u6D4B\u8BD5\u4E0D\u901A\u8FC7,\u540C\u65F6\u4F1A\u8F93\u51FA\u7ED3\u679C,\u5BF9\u6BD4\u4E0D\u5339\u914D\u7684\u5730\u65B9.</li><li>\u4EE3\u7801\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019,\u901A\u8FC7 \u63A7\u5236\u53F0 \u6309 u \u6765\u66F4\u65B0 \u5FEB\u7167</li><li>\u591A\u5904 test case \u66F4\u6539\u7684\u65F6\u5019,\u6309 i \u6765\u4EA4\u4E92\u5F0F\u7684 \u66F4\u65B0\u5FEB\u7167</li><li>Jest \u4F1A\u4E3A\u5FEB\u7167\u6D4B\u8BD5\u5728\u4E34\u8FD1\u6D4B\u8BD5\u6587\u4EF6\u7684\u5730\u65B9\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A <code>__snapshots__</code> \u76EE\u5F55\u3002</li></ul><div class="language-js"><pre><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;component DOM snapshot&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowMount</span><span class="token punctuation">(</span>MiniStep<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">steps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;step1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;step2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  wrapper<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6D4B\u8BD5\u8986\u76D6\u7387-coverage" tabindex="-1">\u6D4B\u8BD5\u8986\u76D6\u7387 coverage <a class="header-anchor" href="#\u6D4B\u8BD5\u8986\u76D6\u7387-coverage" aria-hidden="true">#</a></h2><p>jest \u6267\u884C\u5B8C\u4F1A\u751F\u6210\u4E00\u4E2A\u8986\u76D6\u7387\u7EDF\u8BA1\u8868, \u6240\u6709\u5728\u8986\u76D6\u7387\u7EDF\u8BA1\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u68C0\u6D4B,\u8986\u76D6\u7387\u6307\u6807:</p><ul><li>Statements: \u8BED\u53E5\u8986\u76D6\u7387,\u6267\u884C\u5230\u6BCF\u4E2A\u8BED\u53E5\uFF1B</li><li>Branches: \u5206\u652F\u8986\u76D6\u7387,\u6267\u884C\u5230\u6BCF\u4E2A if \u4EE3\u7801\u5757\uFF1B</li><li>Functions: \u51FD\u6570\u8986\u76D6\u7387,\u8C03\u7528\u5230\u7A0B\u5F0F\u4E2D\u7684\u6BCF\u4E00\u4E2A\u51FD\u6570\uFF1B</li><li>Lines: \u884C\u8986\u76D6\u7387, \u6267\u884C\u5230\u7A0B\u5E8F\u4E2D\u7684\u6BCF\u4E00\u884C</li></ul><div class="language-"><pre><code>=============================== Coverage summary ===============================
Statements   : 53.41% ( 47/88 )
Branches     : 30% ( 3/10 )
Functions    : 42.11% ( 16/38 )
Lines        : 56.63% ( 47/83 )
================================================================================
</code></pre></div><p>\u5982\u679C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E86\u8986\u76D6\u7387\u8F93\u51FA\u6587\u4EF6 <code>coverageReporters: [&#39;html&#39;, &#39;text-summary&#39;],</code> \u5176\u4E2D <code>text-summary</code>\uFF0C\u5BF9\u5E94\u63A7\u5236\u53F0\u7684\u8F93\u51FA\uFF0C\u5982\u4E0A\u56FE\u3002<code>html</code>\u5219\u4F1A\u5728 <code>coverage</code> \u76EE\u5F55\u4E0B\u6709 <code>index.html</code>\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u6253\u5F00\u6CE8\u610F\u5177\u4F53\u5404\u76EE\u5F55\u6587\u4EF6\u7684\u7EC6\u81F4\u8986\u76D6\u7387\u3002</p><h2 id="\u5E38\u7528\u7684\u65AD\u8A00" tabindex="-1">\u5E38\u7528\u7684\u65AD\u8A00 <a class="header-anchor" href="#\u5E38\u7528\u7684\u65AD\u8A00" aria-hidden="true">#</a></h2><ul><li>toBe()----\u6D4B\u8BD5\u5177\u4F53\u7684\u503C</li><li>toEqual()----\u6D4B\u8BD5\u5BF9\u8C61\u7C7B\u578B\u7684\u503C</li><li>toBeCalled()----\u6D4B\u8BD5\u51FD\u6570\u88AB\u8C03\u7528</li><li>toHaveBeenCalledTimes()----\u6D4B\u8BD5\u51FD\u6570\u88AB\u8C03\u7528\u7684\u6B21\u6570</li><li>toHaveBeenCalledWith()----\u6D4B\u8BD5\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u7684\u53C2\u6570</li><li>toBeNull()----\u7ED3\u679C\u662F null</li><li>toBeUndefined()----\u7ED3\u679C\u662F undefined</li><li>toBeDefined()----\u7ED3\u679C\u662F defined</li><li>toBeTruthy()----\u7ED3\u679C\u662F true</li><li>toBeFalsy()----\u7ED3\u679C\u662F false</li><li>toContain()----\u6570\u7EC4\u5339\u914D,\u68C0\u67E5\u662F\u5426\u5305\u542B</li><li>toMatch()----\u5339\u914D\u5B57\u7B26\u578B\u89C4\u5219,\u652F\u6301\u6B63\u5219</li><li>toBeCloseTo()----\u6D6E\u70B9\u6570</li><li>toThrow()----\u652F\u6301\u5B57\u7B26\u4E32,\u6D6E\u70B9\u6570,\u53D8\u91CF</li><li>toMatchSnapshot()----jest \u7279\u6709\u7684\u5FEB\u7167\u6D4B\u8BD5</li><li>.not.toBe()----\u524D\u9762\u52A0\u4E0A.not \u5C31\u662F\u5426\u5B9A\u5F62\u5F0F</li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6jest-config-js" tabindex="-1">\u914D\u7F6E\u6587\u4EF6jest.config.js <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6jest-config-js" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/*****************************************************************
   * \u6D4B\u8BD5\u73AF\u5883
   ****************************************************************/</span>
  <span class="token comment">// The test environment that will be used for testing</span>
  <span class="token comment">// \u7528\u4E8E\u6D4B\u8BD5\u7684\u6D4B\u8BD5\u73AF\u5883\u3002Jest\u4E2D\u7684\u9ED8\u8BA4\u73AF\u5883\u662F\u901A\u8FC7 jsdom \u5B9E\u73B0\u7684\u7C7B\u4F3C\u4E8E\u6D4F\u89C8\u5668\u7684\u73AF\u5883\u3002\u5982\u679C\u4F60\u6B63\u5728\u6784\u5EFAnode\u670D\u52A1\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 &#39;node&#39; \u503C\u8BBE\u7F6E\u7C7B node \u73AF\u5883</span>
  <span class="token literal-property property">testEnvironment</span><span class="token operator">:</span> <span class="token string">&#39;jsdom&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// Options that will be passed to the testEnvironment</span>
  <span class="token comment">// \u4F20\u9012\u7ED9testEnvironment\u7684\u9009\u9879</span>
  <span class="token literal-property property">testEnvironmentOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// This option sets the URL for the jsdom environment. It is reflected in properties such as location.href</span>
  <span class="token comment">// \u6B64\u9009\u9879\u8BBE\u7F6Ejsdom\u73AF\u5883\u7684URL\u3002</span>
  <span class="token literal-property property">testURL</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Adds a location field to test results</span>
  <span class="token literal-property property">testLocationInResults</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">/*****************************************************************
   * \u6A21\u5757\u8DEF\u5F84\u89E3\u6790
   *****************************************************************/</span>
  <span class="token comment">// The root directory that Jest should scan for tests and modules within</span>
  <span class="token comment">// Jest\u5E94\u8BE5\u626B\u63CF\u5176\u4E2D\u7684\u6D4B\u8BD5\u548C\u6A21\u5757\u7684\u6839\u76EE\u5F55</span>
  <span class="token comment">// \u5728\u4EFB\u4F55\u5176\u4ED6\u5C5E\u6027\u4E2D\u57FA\u4E8E\u8DEF\u5F84\u7684\u914D\u7F6E\u8BBE\u7F6E\u4E2D\u4F7F\u7528&#39;&lt;rootDir&gt;&#39;\u4F5C\u4E3A\u5B57\u7B26\u4E32\u4EE4\u724C\u5C06\u8FD4\u56DE\u6B64\u503C\u3002</span>
  <span class="token literal-property property">rootDir</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// A list of paths to directories that Jest should use to search for files in</span>
  <span class="token comment">// Jest\u5E94\u8BE5\u7528\u6765\u5728\u5176\u4E2D\u641C\u7D22\u6587\u4EF6\u7684\u76EE\u5F55\u7684\u8DEF\u5F84\u5217\u8868</span>
  <span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6839\u53EA\u6709\u4E00\u4E2A\u6761\u76EE&lt;rootDir&gt;\uFF0C\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u60A8\u5E0C\u671B\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\u6709\u591A\u4E2A\u6839\uFF0C\u4F8B\u5982\u6839:[&quot;&lt;rootDir&gt;/src/&quot;\uFF0C &quot;&lt;rootDir&gt;/tests/&quot;]\u3002</span>
  <span class="token literal-property property">roots</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;rootDir&gt;&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Run tests from one or more projects</span>
  <span class="token comment">// \u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u9879\u76EE\u8FD0\u884C\u6D4B\u8BD5, \u5F53\u4E3A\u9879\u76EE\u914D\u7F6E\u63D0\u4F9B\u4E00\u7EC4\u8DEF\u5F84\u6216glob\u6A21\u5F0F\u65F6\uFF0CJest\u5C06\u540C\u65F6\u5728\u6240\u6709\u6307\u5B9A\u9879\u76EE\u4E2D\u8FD0\u884C\u6D4B\u8BD5\u3002\u8FD9\u5BF9\u4E8E\u4E00\u4E2A\u4EBA\u6216\u8005\u540C\u65F6\u4ECE\u4E8B\u591A\u4E2A\u9879\u76EE\u7684\u65F6\u5019\u662F\u5F88\u597D\u7684\u3002</span>
  <span class="token comment">// projects: undefined,</span>
  <span class="token string-property property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;rootDir&gt;/packages/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&lt;rootDir&gt;/examples/*&quot;</span>
  <span class="token punctuation">]</span>

  <span class="token comment">// An array of directory names to be searched recursively up from the requiring module&#39;s location</span>
  <span class="token comment">// \u6307\u5B9A\u9700\u8981\u4ECE\u6240\u9700\u6A21\u5757\u7684\u4F4D\u7F6E\u4E0A\u9012\u5F52\u641C\u7D22\u7684\u76EE\u5F55\u540D\u6570\u7EC4\u3002</span>
  <span class="token comment">// \u8BBE\u7F6E\u6B64\u9009\u9879\u5C06\u8986\u76D6\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u4ECD\u7136\u5728node_modules\u4E2D\u641C\u7D22\u5305\uFF0C\u8BF7\u5C06\u5B83\u548C\u5176\u4ED6\u9009\u9879\u4E00\u8D77\u5305\u542B:[&quot;node_modules&quot;\uFF0C &quot;bower_components&quot;]</span>
  <span class="token literal-property property">moduleDirectories</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node_modules&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of file extensions your modules use</span>
  <span class="token comment">// \u6307\u5B9A jest \u53EF\u5339\u914D\u7684\u6587\u4EF6\u6269\u5C55\u540D\u3002\u5F53\u5F15\u5165\u7684\u6A21\u5757\u6587\u4EF6\u6CA1\u6709\u6307\u5B9A\u6587\u4EF6\u6269\u5C55\u540D\uFF0C\u90A3\u4E48Jest\u5C06\u4ECE\u8FD9\u91CC\u9010\u4E2A\u5BFB\u627E\u8FD9\u4E9B\u6269\u5C55\u540D\u3002\u7C7B\u4F3C webpack \u7684 resolve.extensions \u914D\u7F6E</span>
  <span class="token literal-property property">moduleFileExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module</span>
  <span class="token comment">// \u4ECE\u6B63\u5219\u8868\u8FBE\u5F0F\u5230\u6A21\u5757\u540D\u79F0\u7684\u6620\u5C04, \u7C7B\u4F3C webpack \u4E2D\u7684 resolve.alias, \u7136\u540E\u5728\u6D4B\u8BD5\u6587\u4EF6\u4E2D xxx.spec.js \u4E2D\u53EF\u4EE5\u4F7F\u7528 @ \u53BB\u6620\u5C04\u8DEF\u5F84</span>
  <span class="token comment">// moduleNameMapper: {},</span>
  <span class="token literal-property property">moduleNameMapper</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^@/(.*)$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&lt;rootDir&gt;/src/$1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp pattern strings, matched against all module paths before considered &#39;visible&#39; to the module loader</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E00\u4E2A\u5FFD\u7565\u5339\u914D\u6587\u4EF6\u7684\u6B63\u5219\u5B57\u7B26\u4E32\u6570\u7EC4\u3002</span>
  <span class="token comment">// \u8FD9\u4E9B\u8DEF\u5F84\u5BF9\u6A21\u5757\u52A0\u8F7D\u5668\u6765\u8BF4\u662F\u201C\u53EF\u89C1\u7684\u201D\u3002\u4F46\u5982\u679C\u7ED9\u5B9A\u6A21\u5757\u7684\u8DEF\u5F84\u4E0E\u8BBE\u7F6E\u503C\u5339\u914D\uFF0C\u90A3\u4E48\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u5B83\u5C06\u4E0D\u80FD\u88AB require()\u3002</span>
  <span class="token literal-property property">modulePathIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// The glob patterns Jest uses to detect test files</span>
  <span class="token comment">// \u5339\u914D\u9700\u8981\u6267\u884C\u7684\u6D4B\u8BD5\u6587\u4EF6</span>
  <span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4F1A\u5728__tests__\u6587\u4EF6\u5939\u4E2D\u67E5\u627E.js\u548C.jsx\u6587\u4EF6\uFF0C\u4EE5\u53CA\u4EFB\u4F55\u540E\u7F00\u4E3A.test\u6216.spec\u7684\u6587\u4EF6</span>
  <span class="token literal-property property">testMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/__tests__/**/*.[jt]s?(x)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/?(*.)+(spec|test).[tj]s?(x)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped</span>
  <span class="token comment">// \u8BE5\u6D4B\u8BD5\u8DEF\u5F84\u4E0B\u5339\u914D\u7684\u6D4B\u8BD5\u6587\u4EF6\u5C06\u88AB\u8DF3\u8FC7</span>
  <span class="token literal-property property">testPathIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\\\\\\\\node_modules\\\\\\\\&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// The regexp pattern or array of patterns that Jest uses to detect test files</span>
  <span class="token comment">// \u540C testMatch \u5C5E\u6027\uFF0C\u4E0D\u53EF\u4EE5\u4E24\u4E2A\u5C5E\u6027\u540C\u65F6\u8BBE\u7F6E</span>
  <span class="token literal-property property">testRegex</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// The directory where Jest should store its cached dependency information</span>
  <span class="token comment">// Jest\u7528\u6765\u50A8\u5B58\u4F9D\u8D56\u4FE1\u606F\u7F13\u5B58\u7684\u76EE\u5F55\u3002</span>
  <span class="token comment">// Jest \u5C1D\u8BD5\u53BB\u626B\u63CF\u4F60\u7684\u4F9D\u8D56\u6811\u4E00\u6B21\uFF08\u524D\u671F\uFF09\u5E76\u4E14\u628A\u4F9D\u8D56\u6811\u7F13\u5B58\u8D77\u6765\uFF0C\u5176\u76EE\u7684\u5C31\u662F\u62B9\u53BB\u67D0\u4E9B\u5728\u8FD0\u884C\u6D4B\u8BD5\u65F6\u9700\u8981\u8FDB\u884C\u7684\u6587\u4EF6\u7CFB\u7EDF\u6392\u5E8F\u3002</span>
  <span class="token comment">// \u8FD9\u4E00\u914D\u7F6E\u9009\u9879\u8BA9\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49Jest\u5C06\u7F13\u5B58\u6570\u636E\u50A8\u5B58\u5728\u78C1\u76D8\u7684\u54EA\u4E2A\u4F4D\u7F6E\u3002</span>
  <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Users\\\\xutao29099\\\\AppData\\\\Local\\\\Temp\\\\jest&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">/*****************************************************************
   * \u6D4B\u8BD5\u8986\u76D6\u7387\u76F8\u5173\u914D\u7F6E\u9879 coverage
   ****************************************************************/</span>

  <span class="token comment">// Indicates whether the coverage information should be collected while executing the test</span>
  <span class="token comment">// \u6307\u5B9A\u662F\u5426\u6536\u96C6\u6D4B\u8BD5\u65F6\u7684\u8986\u76D6\u7387\u4FE1\u606F\u3002</span>
  <span class="token comment">// \u7531\u4E8E\u8981\u5E26\u4E0A\u8986\u76D6\u7387\u641C\u96C6\u8BED\u53E5\u91CD\u65B0\u8BBF\u95EE\u6240\u6709\u6267\u884C\u8FC7\u7684\u6587\u4EF6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u8BA9\u4F60\u7684\u6D4B\u8BD5\u6267\u884C\u901F\u5EA6\u88AB\u660E\u663E\u51CF\u6162\u3002</span>
  <span class="token comment">// \u6240\u4EE5 run-script \u4E2D\u53EF\u4EE5\u914D\u7F6E\u4E24\u4E2A\u547D\u4EE4\uFF1Atest:unit: &#39;jest&#39; \u548C test:coverage: &#39;jest --coverage&#39;</span>
  <span class="token literal-property property">collectCoverage</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Indicates which provider should be used to instrument code for coverage</span>
  <span class="token comment">// \u6307\u5B9A\u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A\u7A0B\u5E8F\u6765\u68C0\u6D4B\u4EE3\u7801\u7684\u8986\u76D6\u7387</span>
  <span class="token literal-property property">coverageProvider</span><span class="token operator">:</span> <span class="token string">&#39;v8&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// The directory where Jest should output its coverage files</span>
  <span class="token comment">// \u6307\u5B9A Jest \u8F93\u51FA\u8986\u76D6\u4FE1\u606F\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4EE5\u4E0B\u8BBE\u7F6E\u4F1A\u5728\u6839\u76EE\u5F55\u521B\u5EFA coverage \u76EE\u5F55\u7528\u4E8E\u5B58\u5165\u8986\u76D6\u7387\u7EDF\u8BA1\u6587\u4EF6</span>
  <span class="token literal-property property">coverageDirectory</span><span class="token operator">:</span> <span class="token string">&#39;coverage&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of glob patterns indicating a set of files for which coverage information should be collected</span>
  <span class="token comment">// \u53EF\u4EE5\u7528\u4E00\u4E2A glob \u7684\u901A\u914D\u6A21\u5F0F \u7684\u6570\u7EC4\u6765\u6307\u51FA\u4EC5\u54EA\u4E9B\u6587\u4EF6\u9700\u8981\u4E91\u6536\u96C6\u8986\u76D6\u7387\u4FE1\u606F\u3002</span>
  <span class="token comment">// \u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u5339\u914D\u4E0A\u6307\u5B9A\u7684\u6A21\u5F0F\uFF0C\u5373\u4F7F\u6CA1\u6709\u5173\u4E8E\u5B83\u7684\u6D4B\u8BD5\u7528\u4F8B\u5B58\u5728\uFF0C\u6216\u4E5F\u6CA1\u6709\u4EFB\u4F55\u6D4B\u8BD5\u7528\u4F8B\u4F9D\u8D56\u5B83\uFF0C\u5B83\u7684\u8986\u76D6\u7387\u4FE1\u606F\u4E5F\u5C06\u88AB\u6536\u96C6\u3002</span>
  <span class="token comment">// \u8BE5\u9009\u9879\u8981\u6C42 collectCoverage \u88AB\u8BBE\u6210true\uFF0C\u6216\u8005\u901A\u8FC7 --coverage \u53C2\u6570\u6765\u8C03\u7528 Jest\u3002</span>
  <span class="token comment">// collectCoverageFrom: undefined,</span>
  <span class="token literal-property property">collectCoverageFrom</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.{js,jsx}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;!**/node_modules/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;!**/vendor/**&quot;</span><span class="token punctuation">]</span>

  <span class="token comment">// An array of regexp pattern strings used to skip coverage collection</span>
  <span class="token comment">// \u4F7F\u7528regexp\u6A21\u5F0F\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u6307\u5B9A\u7528\u4E8E\u8DF3\u8FC7\u8986\u76D6\u7387\u6536\u96C6\u7684\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u662F\u8DF3\u8FC7 node_modules</span>
  <span class="token comment">// coveragePathIgnorePatterns: [&quot;\\\\\\\\node_modules\\\\\\\\&quot;],</span>
  <span class="token literal-property property">coveragePathIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;rootDir&gt;/node_modules/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;rootDir&gt;/build/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Force coverage collection from ignored files using an array of glob patterns</span>
  <span class="token comment">// \u4F7F\u7528\u4E00\u7EC4glob\u6A21\u5F0F\u4ECE\u88AB\u5FFD\u7565\u7684\u6587\u4EF6\u5F3A\u5236\u6536\u96C6\u8986\u76D6\u7387</span>
  <span class="token literal-property property">forceCoverageMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A list of reporter names that Jest uses when writing coverage reports</span>
  <span class="token comment">// \u6307\u5B9A\u8986\u76D6\u7387\u62A5\u544A\u8F93\u51FA\u7684\u6587\u4EF6\u7C7B\u578B</span>
  <span class="token literal-property property">coverageReporters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lcov&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;clover&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// An object that configures minimum threshold enforcement for coverage results</span>
  <span class="token comment">// \u4E3A\u8986\u76D6\u7387\u8BBE\u7F6E\u6700\u5C0F\u9608\u503C\u7684\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\u9608\u503C\uFF0Cjest \u5C06\u8FD4\u56DE\u5931\u8D25\u3002</span>
  <span class="token comment">// \u5F53\u6307\u5B9A\u4E3A\u6B63\u6570\u65F6\uFF0C\u9608\u503C\u88AB\u8BA4\u4E3A\u662F\u6240\u9700\u7684\u6700\u5C0F\u767E\u5206\u6BD4\u3002\u4F8B\u5982\uFF1A\`statements: 90\` \u610F\u5473\u7740\u8BED\u53E5\u8986\u76D6\u7387\u6700\u5C0F\u662F90%</span>
  <span class="token comment">// \u5F53\u4E00\u4E2A\u9608\u503C\u88AB\u6307\u5B9A\u4E3A\u8D1F\u6570\u65F6\uFF0C\u5B83\u8868\u793A\u5141\u8BB8\u7684\u672A\u8986\u76D6\u5B9E\u4F53\u7684\u6700\u5927\u6570\u91CF\u3002\u4F8B\u5982\uFF1A\`statements: -10\` \u8868\u793A\u4E0D\u5141\u8BB8\u8D85\u8FC710\u4E2A\u672A\u8986\u76D6\u7684\u8BED\u53E5\u3002</span>
  <span class="token comment">// \u9608\u503C\u53EF\u4EE5\u6307\u5B9A\u4E3A\u5168\u5C40\u3001\u4EC5\u8DEF\u5F84\u3001\u6216\u5168\u5C40\u548C\u8DEF\u5F84\u540C\u65F6\u5B58\u5728\u3002</span>
  <span class="token comment">// \u5982\u679Cglobs\u6216\u8DEF\u5F84\u4E0Eglobal\u4E00\u8D77\u6307\u5B9A\uFF0C\u5339\u914D\u8DEF\u5F84\u7684\u8986\u76D6\u6570\u636E\u5C06\u4ECE\u6574\u4F53\u8986\u76D6\u4E2D\u51CF\u53BB\uFF0C\u9608\u503C\u5C06\u72EC\u7ACB\u5E94\u7528\u3002\u5BF9\u6240\u6709\u5339\u914Dglob\u7684\u6587\u4EF6\u5E94\u7528globs\u7684\u9608\u503C\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230path\u6307\u5B9A\u7684\u6587\u4EF6\uFF0C\u5C06\u8FD4\u56DE\u9519\u8BEF\u3002</span>
  <span class="token comment">// \u5982\u4E0B\u793A\u4F8B\u5168\u5C40\u5206\u652F 50% \u7684\u8986\u76D6\u7387\u5C06\u5E94\u7528\u9664 &quot;./src/components/**/*.js&quot; \u548C &quot;./src/api/very-important-module.js&quot; \u4EE5\u5916\u7684\u6240\u6709 collectCoverageFrom \u6307\u5B9A\u7684\u88AB\u6D4B\u8BD5\u6587\u4EF6</span>
  <span class="token comment">// coverageThreshold: undefined,</span>
  <span class="token literal-property property">coverageThreshold</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;branches&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// if \u8BED\u53E5\u5206\u652F</span>
      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;lines&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./src/components/**/*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;branches&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./src/api/very-important-module.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;branches&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;lines&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;statements&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/****************************************************
   * \u81EA\u5B9A\u4E49\u76F8\u5173\u5904\u7406\u5668
   ******************************************************/</span>
  <span class="token comment">// Allows you to use a custom runner instead of Jest&#39;s default test runner</span>
  <span class="token comment">// \u5141\u8BB8\u60A8\u4F7F\u7528\u81EA\u5B9A\u4E49\u8FD0\u884C\u5668\uFF0C\u800C\u4E0D\u662FJest\u7684\u9ED8\u8BA4\u6D4B\u8BD5\u8FD0\u884C\u5668 jest-runner</span>
  <span class="token literal-property property">runner</span><span class="token operator">:</span> <span class="token string">&quot;jest-runner&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// This option allows use of a custom test runner</span>
  <span class="token literal-property property">testRunner</span><span class="token operator">:</span> <span class="token string">&quot;jasmine2&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// A path to a custom resolver</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u8DEF\u5F84\u89E3\u6790\u5668</span>
  <span class="token literal-property property">resolver</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// This option allows the use of a custom results processor</span>
  <span class="token comment">// \u6B64\u9009\u9879\u5141\u8BB8\u4F7F\u7528\u81EA\u5B9A\u4E49\u7ED3\u679C\u5904\u7406\u7A0B\u5E8F</span>
  <span class="token literal-property property">testResultsProcessor</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// Use this configuration option to add custom reporters to Jest</span>
  <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// A map from regular expressions to paths to transformers</span>
  <span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u9884\u5904\u7406\u5668\uFF0C\u7528\u4E8E\u8F6C\u6362\u6E90\u6587\u4EF6\u4E3Ajest\u73AF\u5883\u53EF\u7528\u7684\u6587\u4EF6\u7C7B\u578B\u6216\u8BED\u6CD5</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E0D\u9700\u8981\u88AB transform \u8F6C\u6362\u5668\u5904\u7406\u7684\u6587\u4EF6\u8DEF\u5F84</span>
  <span class="token literal-property property">transformIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\\\\\\\\node_modules\\\\\\\\&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\\\\.pnp\\\\.[^\\\\\\\\]+$&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A list of paths to snapshot serializer modules Jest should use for snapshot testing</span>
  <span class="token comment">// \u7528\u4E8E\u5FEB\u7167\u6D4B\u8BD5\u7684\u5FEB\u7167\u5E8F\u5217\u5316\u5668\u6A21\u5757\u7684\u8DEF\u5F84\u5217\u8868</span>
  <span class="token comment">// snapshotSerializers: [],</span>
  <span class="token literal-property property">snapshotSerializers</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;jest-serializer-vue&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A path to a custom dependency extractor</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u4F9D\u8D56\u9879\u63D0\u53D6\u5668\u7684\u8DEF\u5F84</span>
  <span class="token literal-property property">dependencyExtractor</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// A preset that is used as a base for Jest&#39;s configuration</span>
  <span class="token comment">// \u7528\u4F5C Jest \u914D\u7F6E\u7684\u4E00\u4E2A\u9884\u8BBE\u63D2\u4EF6\uFF0C\u4F8B\u5982 preset: &#39;@vue/cli-plugin-unit-jest&#39;,</span>
  <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">/*********************************************************
   * \u5168\u5C40\u8C03\u7528\u8BBE\u7F6E
   *********************************************************/</span>
  <span class="token comment">// A path to a module which exports an async function that is triggered once before all test suites</span>
  <span class="token comment">// \u6307\u5B9A\u4E00\u4E2A\u6A21\u5757\u7684\u8DEF\u5F84\uFF0C\u8BE5\u6A21\u5757\u5BFC\u51FA\u5728\u6240\u6709\u6D4B\u8BD5\u5957\u4EF6\u4E4B\u524D\u89E6\u53D1\u4E00\u6B21\u7684\u5F02\u6B65\u51FD\u6570\uFF08return async fn \u6216 new Promise())</span>
  <span class="token literal-property property">globalSetup</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// A path to a module which exports an async function that is triggered once after all test suites</span>
  <span class="token comment">// \u6307\u5B9A\u4E00\u4E2A\u6A21\u5757\u7684\u8DEF\u5F84\uFF0C\u8BE5\u6A21\u5757\u5BFC\u51FA\u5728\u6240\u6709\u6D4B\u8BD5\u5957\u4EF6\u4E4B\u540E\u89E6\u53D1\u4E00\u6B21\u7684\u5F02\u6B65\u51FD\u6570\uFF08return async fn \u6216 new Promise())</span>
  <span class="token literal-property property">globalTeardown</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// A set of global variables that need to be available in all test environments</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E00\u7EC4\u53EF\u4EE5\u5728\u6240\u6709\u6D4B\u8BD5\u73AF\u5883\u4E2D\u53EF\u7528\u7684\u5168\u5C40\u53D8\u91CF</span>
  <span class="token comment">// \u5982\u679C\u4F60\u5728\u8FD9\u6307\u5B9A\u4E86\u4E00\u4E2A\u5168\u5C40\u5F15\u7528\u503C\uFF08\u4F8B\u5982\uFF0C\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\uFF09\uFF0C\u4E4B\u540E\u5728\u6D4B\u8BD5\u8FD0\u884C\u4E2D\u6709\u4E9B\u4EE3\u7801\u6539\u53D8\u4E86\u8FD9\u4E2A\u88AB\u5F15\u7528\u7684\u503C\uFF0C\u8FD9\u4E2A\u6539\u52A8\u5BF9\u4E8E\u5176\u4ED6\u6D4B\u8BD5\u4E0D\u4F1A\u751F\u6548\u3002</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// globals: {&quot;__DEV__&quot;: true},</span>

  <span class="token comment">// The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.</span>
  <span class="token comment">// \u7528\u4E8E\u8FD0\u884C\u6D4B\u8BD5\u7684\u6700\u5927\u5DE5\u4F5C\u7A0B\u5E8F\u6570\u91CF\u3002\u53EF\u4EE5\u6307\u5B9A\u4E3A\u767E\u5206\u6BD4 % \u6216\u4E00\u4E2A\u6570\u5B57\u3002</span>
  <span class="token comment">// maxWorkers: 10% \u5C06\u4F7F\u7528\u4F60\u7684CPU\u6570\u91CF\u768410% + 1 \u4F5C\u4E3A\u6700\u5927worker\u6570\u3002</span>
  <span class="token comment">// maxWorkers: 2 \u5C06\u4F7F\u7528\u6700\u591A2\u4E2A worker \u7EBF\u8DEF\u3002</span>
  <span class="token literal-property property">maxWorkers</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// The paths to modules that run some code to configure or set up the testing environment before each test</span>
  <span class="token comment">// \u6BCF\u4E2A\u6D4B\u8BD5\u6587\u4EF6\u90FD\u4F1A\u6784\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u4E0A\u4E0B\u6587\uFF0C\u5E76\u5BF9\u5176\u4E0A\u4E0B\u6587\u73AF\u5883\u8FDB\u884C\u4E00\u6B21\u5904\u7406,\u884C\u4E0B\u9762\u914D\u7F6E\u6587\u4EF6\u7684\u4EE3\u7801\u6765\u8BBE\u7F6E\u6BCF\u4E2A\u6D4B\u8BD5\u73AF\u5883\u7684\u4E0A\u4E0B\u6587</span>
  <span class="token comment">// \u8FD9\u6BB5\u4EE3\u7801\u5C06\u5728setupFilesAfterEnv\u4E4B\u524D\u6267\u884C\u3002</span>
  <span class="token comment">// setupTestFrameworkScriptFile \u5DF2\u5E9F\u5F03\uFF0C\u7528 setupFilesAfterEnv \u4EE3\u66FF</span>
  <span class="token literal-property property">setupFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// A list of paths to modules that run some code to configure or set up the testing framework before each test</span>
  <span class="token comment">// \u914D\u7F6E\u6587\u4EF6\u5217\u8868\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u8FD0\u884C\u4E00\u4E9B\u4EE3\u7801\u6765\u5728\u6BCF\u6B21\u6D4B\u8BD5\u4E4B\u524D\u914D\u7F6E\u6216\u8BBE\u7F6E\u6D4B\u8BD5\u6846\u67B6</span>
  <span class="token literal-property property">setupFilesAfterEnv</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// The number of seconds after which a test is considered as slow and reported as such in the results.</span>
  <span class="token literal-property property">slowTestThreshold</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>

  <span class="token comment">// All imported modules in your tests should be mocked automatically</span>
  <span class="token comment">// \u8BBE\u4E3A true \u65F6\uFF0C\u6D4B\u8BD5\u6587\u4EF6\u4E2D\u6240\u6709\u5BFC\u5165\u7684\u6A21\u5757\u90FD\u88AB\u81EA\u52A8\u6A21\u62DF\u3002\u4F46\u7C7B\u4F3C fs \u8FD9\u6837\u7684 Node \u6838\u5FC3\u6A21\u5757\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u6A21\u62DF\u7684\uFF0C\u5982\u679C\u9700\u8981\u53EF\u4EE5\u4F7F\u7528 \`jest.mock(&#39;fs&#39;)\` \u663E\u5F0F\u6307\u5B9A\u6A21\u62DF</span>
  <span class="token comment">// \u5F00\u542F\u81EA\u52A8\u6A21\u62DF\u4F1A\u6709\u4E00\u4E9B\u6027\u6D88\u8017\uFF0C\u5728\u4E00\u4E9B\u5927\u578B\u5DE5\u7A0B\u4F1A\u66F4\u660E\u663E\u3002</span>
  <span class="token comment">// \u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u503C false, \u7136\u540E\u901A\u8FC7\u4F7F\u7528 jest.mock(moduleName) \u628A\u9879\u76EE\u4E2D\u7684\u88AB\u6D4B\u6A21\u5757\u6587\u4EF6\u663E\u5F0F\u7684\u6307\u5B9A\u4E3A\u6A21\u62DF\u3002</span>
  <span class="token literal-property property">automock</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Automatically clear mock calls and instances between every test</span>
  <span class="token comment">// \u81EA\u52A8\u6E05\u9664\u6BCF\u4E2A\u6D4B\u8BD5\u4E4B\u95F4\u7684\u6A21\u62DF\u8C03\u7528\u548C\u5B9E\u4F8B</span>
  <span class="token comment">// \u7B49\u4EF7\u4E8E\u5728\u6BCF\u4E2A\u6D4B\u8BD5\u4E4B\u95F4\u8C03\u7528jest.clearAllMocks()\u3002\u8FD9\u4E0D\u4F1A\u5220\u9664\u53EF\u80FD\u5DF2\u7ECF\u63D0\u4F9B\u7684\u4EFB\u4F55\u6A21\u62DF\u5B9E\u73B0\u3002</span>
  <span class="token literal-property property">clearMocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// Automatically reset mock state between every test</span>
  <span class="token comment">// \u81EA\u52A8\u91CD\u7F6E\u6BCF\u4E2A\u6D4B\u8BD5\u4E4B\u95F4\u7684\u6A21\u62DF\u72B6\u6001</span>
  <span class="token literal-property property">resetMocks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Reset the module registry before running each individual test</span>
  <span class="token comment">// \u5728\u8FD0\u884C\u6BCF\u4E2A\u5355\u72EC\u7684\u6D4B\u8BD5\u4E4B\u524D\uFF0C\u91CD\u65B0\u8BBE\u7F6E\u6A21\u5757\u6CE8\u518C\u8868</span>
  <span class="token literal-property property">resetModules</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Automatically restore mock state between every test</span>
  <span class="token comment">// \u81EA\u52A8\u6062\u590D\u6BCF\u4E2A\u6D4B\u8BD5\u4E4B\u95F4\u7684\u6A21\u62DF\u72B6\u6001</span>
  <span class="token literal-property property">restoreMocks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Stop running tests after \`n\` failures</span>
  <span class="token comment">// \u9ED8\u8BA4\u503C 0\uFF0CJest \u4F1A\u8FD0\u884C\u6240\u6709\u7684\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u7136\u540E\u4EA7\u51FA\u6240\u6709\u7684\u9519\u8BEF\u5230\u63A7\u5236\u53F0\u4E2D\u76F4\u81F3\u7ED3\u675F\u3002</span>
  <span class="token comment">// bail \u914D\u7F6E\u9009\u9879\u53EF\u4EE5\u8BA9 Jest \u5728\u9047\u5230\u7B2C\u51E0\u4E2A\u5931\u8D25\u540E\u5C31\u505C\u6B62\u7EE7\u7EED\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u3002</span>
  <span class="token literal-property property">bail</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

  <span class="token comment">// Setting this value to &quot;fake&quot; allows the use of fake timers for functions such as &quot;setTimeout&quot;</span>
  <span class="token comment">// \u5C06\u6B64\u503C\u8BBE\u7F6E\u4E3A&quot;fake&quot;\u5141\u8BB8\u5BF9&quot;setTimeout&quot;\u7B49\u51FD\u6570\u4F7F\u7528\u5047\u8BA1\u65F6\u5668</span>
  <span class="token comment">// \u5F53\u4E00\u6BB5\u4EE3\u7801\u8BBE\u7F6E\u4E86\u6211\u4EEC\u4E0D\u5E0C\u671B\u5728\u6D4B\u8BD5\u4E2D\u7B49\u5F85\u7684\u957F\u8D85\u65F6\u65F6\uFF0C\u5047\u8BA1\u65F6\u5668\u662F\u6709\u7528\u7684\u3002</span>
  <span class="token literal-property property">timers</span><span class="token operator">:</span> <span class="token string">&quot;real&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Make calling deprecated APIs throw helpful error messages</span>
  <span class="token comment">// \u8BBE\u7F6E\u5F53\u8C03\u7528\u5E9F\u5F03\u7684 api \u65F6\u662F\u5426\u629B\u51FA\u6709\u7528\u7684\u9519\u8BEF\u6D88\u606F</span>
  <span class="token literal-property property">errorOnDeprecated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// Activates notifications for test results</span>
  <span class="token comment">// \u6FC0\u6D3B\u6D4B\u8BD5\u7ED3\u679C\u7684\u901A\u77E5\u3002</span>
  <span class="token literal-property property">notify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// An enum that specifies notification mode. Requires { notify: true }</span>
  <span class="token comment">// \u6307\u5B9A\u901A\u77E5\u6A21\u5F0F\u7684\u679A\u4E3E\u3002\u8981\u6C42{notify: true}</span>
  <span class="token literal-property property">notifyMode</span><span class="token operator">:</span> <span class="token string">&quot;failure-change&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them</span>
  <span class="token literal-property property">unmockedModulePathPatterns</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// Indicates whether each individual test should be reported during the run</span>
  <span class="token comment">// \u591A\u4E8E\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6\u8FD0\u884C\u65F6\u5C55\u793A\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u6D4B\u8BD5\u901A\u8FC7\u60C5\u51B5 Boolean</span>
  <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>

  <span class="token comment">// An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode</span>
  <span class="token comment">// \u5F53 jest \u8FD0\u884C\u5728 watch \u76D1\u89C6\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u6D4B\u8BD5\u6587\u4EF6\u66F4\u6539\u4E86\uFF0C\u4F1A\u89E6\u53D1\u91CD\u65B0\u8FD0\u884C\u6D4B\u8BD5\u3002\u4F46\u8BE5\u5C5E\u6027\u9879\u5339\u914D\u7684\u8DEF\u5F84\u4E2D\u6587\u4EF6\u5982\u679C\u53D1\u751F\u53D8\u5316\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u91CD\u65B0\u8FD0\u884C\u6D4B\u8BD5</span>
  <span class="token literal-property property">watchPathIgnorePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Whether to use watchman for file crawling</span>
  <span class="token comment">// \u662F\u5426\u4F7F\u7528cwatchman \u6293\u53D6\u6587\u4EF6</span>
  <span class="token literal-property property">watchman</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://doc.ebichu.cc/jest/docs/zh-Hans/configuration.html#content" target="_blank" rel="noopener noreferrer">Jest \u4E2D\u6587\u6587\u6863</a></li></ul>`,41),e=[o];function c(l,r,u,i,k,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
