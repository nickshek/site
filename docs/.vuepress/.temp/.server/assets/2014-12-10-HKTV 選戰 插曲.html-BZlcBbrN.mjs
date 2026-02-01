import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>值得你付出8元去下載這首歌以支持香港音樂</p><p>ITunes下載連結<a href="https://itunes.apple.com/hk/album/ill-be-there-hktv-ju-ji-xuan/id946282372?i=946282373" target="_blank" rel="noopener noreferrer">陳詩慧 Eva Chan - I’ll Be There</a></p><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/AsHKOH03mxw" frameborder="0" allowfullscreen></iframe></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-12-10-HKTV 選戰 插曲.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141210HKTV_______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-12-10-HKTV%20%E9%81%B8%E6%88%B0%20%E6%8F%92%E6%9B%B2.html","title":"HKTV 選戰 插曲","lang":"zh-HK","frontmatter":{"title":"HKTV 選戰 插曲","date":"2014-12-10T00:00:00.000Z","tags":["HKTV"]},"git":{},"filePathRelative":"posts/2014-12-10-HKTV 選戰 插曲.md"}');
export {
  _20141210HKTV_______html as comp,
  data
};
