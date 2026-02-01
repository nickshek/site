import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>執行<code>rake secret</code> 在.bashrc 或在apache 使用SetEnv指令 設定環境變數 SECRET_KEY_BASE 就完成了。不建議把 secret token 設定在 config/secrets.yml</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-03-14-Missing _secret_key_base_ for 'production' environment.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150314Missing__secret_key_base__for__production__environment_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-03-14-Missing%20_secret_key_base_%20for%20\'production\'%20environment.html","title":"Missing `secret_key_base` for \'production\' environment, set this value in `config/secrets.yml`","lang":"zh-HK","frontmatter":{"title":"Missing `secret_key_base` for \'production\' environment, set this value in `config/secrets.yml`","date":"2015-03-14T00:00:00.000Z","tags":["rails"]},"git":{},"filePathRelative":"posts/2015-03-14-Missing `secret_key_base` for \'production\' environment.md"}');
export {
  _20150314Missing__secret_key_base__for__production__environment_html as comp,
  data
};
