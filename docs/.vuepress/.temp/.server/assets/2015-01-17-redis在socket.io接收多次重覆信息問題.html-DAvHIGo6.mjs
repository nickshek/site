import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>在網上看到一個範例，展示了redis 如何配合socket.io進行互動的source code :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  redis<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這段程式碼有一個問題,就是會因為client的數目增加而令redis接收message的handler觸發多次，因此向每一個socket.io client 傳送了多次重覆的信息。解決方法是將redis的程式碼移出<code>io.on(&#39;connection&#39;, function(socket){ .. });</code> :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">redis<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">channel<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//socket.emit改為io.sockets.emit ,信息傳送給所有人</span></span>
<span class="line">  io<span class="token punctuation">.</span>sockets<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//當有新的connection要處理的程式碼</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-17-redis在socket.io接收多次重覆信息問題.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150117Redis_socket_io___________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-17-redis%E5%9C%A8socket.io%E6%8E%A5%E6%94%B6%E5%A4%9A%E6%AC%A1%E9%87%8D%E8%A6%86%E4%BF%A1%E6%81%AF%E5%95%8F%E9%A1%8C.html","title":"redis在socket.io接收多次重覆信息問題","lang":"zh-HK","frontmatter":{"title":"redis在socket.io接收多次重覆信息問題","date":"2015-01-17T00:00:00.000Z","tags":["node.js"]},"git":{},"filePathRelative":"posts/2015-01-17-redis在socket.io接收多次重覆信息問題.md"}');
export {
  _20150117Redis_socket_io___________html as comp,
  data
};
