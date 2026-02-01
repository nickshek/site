import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若家中有Notebook 不再使用，用來安裝Ubuntu Server 是一個好主意。Ubuntu Server 的下載連結如下:</p><p><a href="http://www.ubuntu.com/download/server" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/server</a></p><p>下載完iso 後便可以參考以下連結去建立USB安裝碟</p><p>Windows: <a href="http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows</a></p><p>Ubuntu: <a href="http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu</a></p><p>安裝後，為了避免開機後合上Notebook後會進入睡眠狀態，可以修改<code>/etc/systemd/logind.conf</code> 加入<code>HandleLidSwitch=ignore</code> 。 最後執行<code>sudo service restart systemd-logind</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20160628___Ubuntu_Server__Notebook_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2016-06-28-%E5%AE%89%E8%A3%9DUbuntu%20Server%E8%87%B3%E8%88%8ANotebook%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85.html","title":"安裝Ubuntu Server至舊Notebook注意事項","lang":"zh-HK","frontmatter":{"title":"安裝Ubuntu Server至舊Notebook注意事項","date":"2016-06-28T00:00:00.000Z","tags":["Ubuntu"]},"git":{},"filePathRelative":"posts/2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.md"}');
export {
  _20160628___Ubuntu_Server__Notebook_____html as comp,
  data
};
