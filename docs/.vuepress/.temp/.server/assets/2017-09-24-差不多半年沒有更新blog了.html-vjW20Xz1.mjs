import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>這半年都沒有把自己遇到的IT問題更新在這個blog呢，看來還是需要加把勁更新一下個blog呢。不進則退。</p><p>這半年接主要觸到的而掌握技術有 ansible 和 vue.js + nuxt + webpack + es6 等等，但做了web developer這麼耐，居然還未在這個網頁有好好整理自己曾經開過而闗閉了的網站，還有希望在不久的未來，建立一個多人使用的高質素網站呢!畢竟我是一個developer，沒有屬於自己的網站也不太合理吧。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2017-09-24-差不多半年沒有更新blog了.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20170924__________blog__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2017-09-24-%E5%B7%AE%E4%B8%8D%E5%A4%9A%E5%8D%8A%E5%B9%B4%E6%B2%92%E6%9C%89%E6%9B%B4%E6%96%B0blog%E4%BA%86.html","title":"差不多半年沒有更新blog了","lang":"zh-HK","frontmatter":{"title":"差不多半年沒有更新blog了","date":"2017-09-24T00:00:00.000Z"},"git":{},"filePathRelative":"posts/2017-09-24-差不多半年沒有更新blog了.md"}');
export {
  _20170924__________blog__html as comp,
  data
};
