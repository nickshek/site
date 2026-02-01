import _sfc_main from "https://gist.github.com/octocat/0831f3fbd83ac4d46451.js?vue&type=script&src=true&lang.js";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>修改以下的OLD_EMAIL，CORRECT_NAME 及 CORRECT_EMAIL 的值再把以下script移至想更新的git repository 再執行就可以了</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-02-24-更新git branch所有舊有的電子郵件地址.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150224___git_branch____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-02-24-%E6%9B%B4%E6%96%B0git%20branch%E6%89%80%E6%9C%89%E8%88%8A%E6%9C%89%E7%9A%84%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6%E5%9C%B0%E5%9D%80.html","title":"更新git branch所有舊有的電子郵件地址","lang":"zh-HK","frontmatter":{"title":"更新git branch所有舊有的電子郵件地址","date":"2015-02-24T00:00:00.000Z","tags":["git"]},"git":{},"filePathRelative":"posts/2015-02-24-更新git branch所有舊有的電子郵件地址.md"}');
export {
  _20150224___git_branch____________html as comp,
  data
};
