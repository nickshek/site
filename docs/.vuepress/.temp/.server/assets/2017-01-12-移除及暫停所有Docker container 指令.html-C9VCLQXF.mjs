import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>怕自己忘記了，放上這個blog。這個指令在開發Docker Image 時還是經常使用的。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2017-01-12-移除及暫停所有Docker container 指令.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20170112________Docker_container____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2017-01-12-%E7%A7%BB%E9%99%A4%E5%8F%8A%E6%9A%AB%E5%81%9C%E6%89%80%E6%9C%89Docker%20container%20%E6%8C%87%E4%BB%A4.html","title":"移除及暫停所有Docker container 指令","lang":"zh-HK","frontmatter":{"title":"移除及暫停所有Docker container 指令","date":"2017-01-12T00:00:00.000Z","tags":["Docker"]},"git":{},"filePathRelative":"posts/2017-01-12-移除及暫停所有Docker container 指令.md"}');
export {
  _20170112________Docker_container____html as comp,
  data
};
