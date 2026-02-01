import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>假設你己經在<a href="https://toolbelt.heroku.com/" target="_blank" rel="noopener noreferrer">https://toolbelt.heroku.com/</a>下載了heroku 工具程式.若想把原本的應用程式連接至heroku只需要在程式的根目錄輸入<code>heroku create</code>,但是這樣會建立了一個全新的heroku程式。</p><p>若我在heroku己經有一個應用程式為 project , 我想將原本的git 連接至 project 而不是重新建立一個新的應用程式,只需要在程式的根目錄輸入 <code>heroku git:remote -a project</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-04-05-如何令git repo 連接己經存在的heroku app.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150405____git_repo________heroku_app_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-04-05-%E5%A6%82%E4%BD%95%E4%BB%A4git%20repo%20%E9%80%A3%E6%8E%A5%E5%B7%B1%E7%B6%93%E5%AD%98%E5%9C%A8%E7%9A%84heroku%20app.html","title":"如何令git repo 連接己經存在的heroku app?","lang":"zh-HK","frontmatter":{"title":"如何令git repo 連接己經存在的heroku app?","date":"2015-04-05T00:00:00.000Z","tags":["heroku"]},"git":{},"filePathRelative":"posts/2015-04-05-如何令git repo 連接己經存在的heroku app.md"}');
export {
  _20150405____git_repo________heroku_app_html as comp,
  data
};
