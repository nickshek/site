import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>主要在Gemfile加下以下指令以安裝 babosa</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line">gem <span class="token string-literal"><span class="token string">&quot;babosa&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>再在需要中文URL的Model下override normalize_friendly_id方法:</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">normalize_friendly_id</span></span><span class="token punctuation">(</span>input<span class="token punctuation">)</span></span>
<span class="line">  input<span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>to_slug<span class="token punctuation">.</span>normalize<span class="token punctuation">.</span>to_s</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下網誌有詳細解釋:</p><p>使用 Babosa 配合 Friendly_id 解決中文網址問題 : <a href="http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/" target="_blank" rel="noopener noreferrer">http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-12-20-Friendly ID中文問題.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141220Friendly_ID_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-12-20-Friendly%20ID%E4%B8%AD%E6%96%87%E5%95%8F%E9%A1%8C.html","title":"Friendly ID中文問題","lang":"zh-HK","frontmatter":{"title":"Friendly ID中文問題","date":"2014-12-20T00:00:00.000Z","tags":["rails"]},"git":{},"filePathRelative":"posts/2014-12-20-Friendly ID中文問題.md"}');
export {
  _20141220Friendly_ID_____html as comp,
  data
};
