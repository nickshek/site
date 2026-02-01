import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/","title":"","lang":"zh-HK","frontmatter":{"home":true,"heroText":"Nick Shek","tagline":"個人部落格 - 技術分享與筆記","actions":[{"text":"瀏覽文章 →","link":"/posts/","type":"primary"},{"text":"關於我","link":"/about/","type":"secondary"}],"features":[{"title":"技術分享","details":"分享開發經驗、技術筆記和解決方案"},{"title":"持續學習","details":"記錄學習過程和心得"},{"title":"開源貢獻","details":"參與開源項目，回饋社群"}],"footer":"Copyright © 2014-2026 Nick Shek"},"git":{},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
