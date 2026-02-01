import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>假設己經有一個HTTPS加密網站，為了令網站更快速。因此Socket.io使用了以下的javascript cdn :</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.socket.io/socket.io-1.3.4.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>但是socket.io server 會在 polling的請求回覆400 Bad request</p><p>解決方法是從Socket.io依賴的原始碼找出return Access-Control-Allow-Origin Header的地方,根據socket.io v1.3.5 的源始碼,return Access-Control-Allow-Origin Header的地方位於node_modules/socket.io/node_modules/engine.io/lib/transports/polling-xhr.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Returns headers for a response.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>http<span class="token punctuation">.</span>ServerRequest<span class="token punctuation">}</span></span> <span class="token parameter">request</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">extra</span> headers</span>
<span class="line"> * <span class="token keyword">@api</span> private</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">XHR</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">headers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  headers <span class="token operator">=</span> headers <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;headers&#39;</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> headers<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>將該function 改成</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Returns headers for a response.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>http<span class="token punctuation">.</span>ServerRequest<span class="token punctuation">}</span></span> <span class="token parameter">request</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">extra</span> headers</span>
<span class="line"> * <span class="token keyword">@api</span> private</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">XHR</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">headers</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  headers <span class="token operator">=</span> headers <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin <span class="token operator">==</span> <span class="token string">&quot;https://www.example-domain.com/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;https://cdn.socket.io/&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    headers<span class="token punctuation">[</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;headers&#39;</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> headers<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接新增　<code>headers[&#39;Access-Control-Allow-Origin&#39;] = &quot;https://cdn.socket.io/&quot;;</code>　雖然修改方法很醜。但至少可以令網站使用Socket.io CDN</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-04-15-Socket.io 1.3.5 cdn 同源問題.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150415Socket_io_1_3_5_cdn______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-04-15-Socket.io%201.3.5%20cdn%20%E5%90%8C%E6%BA%90%E5%95%8F%E9%A1%8C.html","title":"Socket.io 1.3.5 cdn 同源問題","lang":"zh-HK","frontmatter":{"title":"Socket.io 1.3.5 cdn 同源問題","date":"2015-04-15T00:00:00.000Z","tags":["socket.io"]},"git":{},"filePathRelative":"posts/2015-04-15-Socket.io 1.3.5 cdn 同源問題.md"}');
export {
  _20150415Socket_io_1_3_5_cdn______html as comp,
  data
};
