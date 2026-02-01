import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="關於我" tabindex="-1"><a class="header-anchor" href="#關於我"><span>關於我</span></a></h1><h2 id="nick-shek" tabindex="-1"><a class="header-anchor" href="#nick-shek"><span>Nick Shek</span></a></h2><p>歡迎來到我的個人部落格！</p><p>這裡記錄了我在軟體開發過程中的經驗、學習筆記和技術分享。</p><h3 id="技術興趣" tabindex="-1"><a class="header-anchor" href="#技術興趣"><span>技術興趣</span></a></h3><ul><li>Web Development</li><li>DevOps</li><li>System Administration</li><li>Automation</li></ul><h3 id="聯絡方式" tabindex="-1"><a class="header-anchor" href="#聯絡方式"><span>聯絡方式</span></a></h3><ul><li>GitHub: <a href="https://github.com/nickshek" target="_blank" rel="noopener noreferrer">nickshek</a></li><li>Website: <a href="https://nickshek.github.io" target="_blank" rel="noopener noreferrer">nickshek.github.io</a></li></ul><hr><p><em>本站使用 VuePress 構建</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/about/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/about/","title":"關於我","lang":"zh-HK","frontmatter":{},"git":{},"filePathRelative":"about/README.md"}');
export {
  index_html as comp,
  data
};
