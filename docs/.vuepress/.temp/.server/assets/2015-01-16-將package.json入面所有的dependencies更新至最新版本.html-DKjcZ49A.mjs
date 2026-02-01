import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>在package,json內，將dependencies入面所有版本的號碼改成*，例如</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token property">&quot;dependencies&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;socket.io&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0.9.12&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;redis&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7.3&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改為</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token property">&quot;dependencies&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;socket.io&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;redis&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再執行<code>npm update --save</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-16-將package.json入面所有的dependencies更新至最新版本.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150116__package_json_____dependencies________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-16-%E5%B0%87package.json%E5%85%A5%E9%9D%A2%E6%89%80%E6%9C%89%E7%9A%84dependencies%E6%9B%B4%E6%96%B0%E8%87%B3%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC.html","title":"將package.json入面所有的dependencies更新至最新版本","lang":"zh-HK","frontmatter":{"title":"將package.json入面所有的dependencies更新至最新版本","date":"2015-01-16T00:00:00.000Z","tags":["node.js"]},"git":{},"filePathRelative":"posts/2015-01-16-將package.json入面所有的dependencies更新至最新版本.md"}');
export {
  _20150116__package_json_____dependencies________html as comp,
  data
};
