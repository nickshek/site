import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>在terminal 輸入 <code>curl http://it-ebooks-api.info/v1/search/python </code> ，輸出是一堆壓縮了的JSON。</p><p>只要輸入 <code>curl http://it-ebooks-api.info/v1/search/python | python -mjson.tool</code> ，便能輸出整理好的JSON了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-11-在Linux terminal列輸出己整理的JSON.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150111__Linux_terminal_______JSON_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-11-%E5%9C%A8Linux%20terminal%E5%88%97%E8%BC%B8%E5%87%BA%E5%B7%B1%E6%95%B4%E7%90%86%E7%9A%84JSON.html","title":"在Linux terminal列輸出己整理的JSON","lang":"zh-HK","frontmatter":{"title":"在Linux terminal列輸出己整理的JSON","date":"2015-01-11T00:00:00.000Z","tags":["linux"]},"git":{},"filePathRelative":"posts/2015-01-11-在Linux terminal列輸出己整理的JSON.md"}');
export {
  _20150111__Linux_terminal_______JSON_html as comp,
  data
};
