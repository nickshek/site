import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>1.安裝exiftool:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libimage-exiftool-perl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>2.讀取圖片資訊</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">exiftool example.jpg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>3.移除圖片資訊</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">exiftool <span class="token parameter variable">-all</span><span class="token operator">=</span> example.jpg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>4.原本的圖片會保留成example.jpg_original</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-12-07-在ubuntu移除圖片的metadata.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141207__ubuntu_____metadata_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-12-07-%E5%9C%A8ubuntu%E7%A7%BB%E9%99%A4%E5%9C%96%E7%89%87%E7%9A%84metadata.html","title":"在ubuntu移除圖片的metadata","lang":"zh-HK","frontmatter":{"title":"在ubuntu移除圖片的metadata","date":"2014-12-07T00:00:00.000Z","tags":["ubuntu"]},"git":{},"filePathRelative":"posts/2014-12-07-在ubuntu移除圖片的metadata.md"}');
export {
  _20141207__ubuntu_____metadata_html as comp,
  data
};
