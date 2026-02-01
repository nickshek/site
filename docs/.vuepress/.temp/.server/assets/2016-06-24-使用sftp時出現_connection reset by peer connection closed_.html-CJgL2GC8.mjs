import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若新加的sftp帳戶發現，出現connection reset by peer connection closed的錯誤訊息，應該先用cat 查看/etc/rsyslog.conf了解找出出現 auth,authpriv.*　的行數，便清楚需要查看那個log file以獲取進一步的資訊。若系統是Centos，多數是查看/var/log/secure，ubuntu 則查看 /var/log/auth.log。</p><p>以下頁面清楚說明如何fix SFTP的問題，我遇到的情況是</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">sshd[12399]: fatal: bad ownership or modes for chroot directory component &quot;/path/of/chroot/directory/&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>解決方法是確保chroot的路徑的所有資料夾都是由root 擁有及所有path都是安全的。若有任何一個資料夾的權限是777，應該把資料夾改為775或755。</p><p>參考 : <a href="https://wiki.archlinux.org/index.php/SFTP_chroot" target="_blank" rel="noopener noreferrer">https://wiki.archlinux.org/index.php/SFTP_chroot</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2016-06-24-使用sftp時出現_connection reset by peer connection closed_.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20160624___sftp____connection_reset_by_peer_connection_closed__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2016-06-24-%E4%BD%BF%E7%94%A8sftp%E6%99%82%E5%87%BA%E7%8F%BE_connection%20reset%20by%20peer%20connection%20closed_.html","title":"使用sftp時出現\\"connection reset by peer connection closed\\"","lang":"zh-HK","frontmatter":{"title":"使用sftp時出現\\"connection reset by peer connection closed\\"","date":"2016-06-24T00:00:00.000Z","tags":["linux"]},"git":{},"filePathRelative":"posts/2016-06-24-使用sftp時出現\\"connection reset by peer connection closed\\".md"}');
export {
  _20160624___sftp____connection_reset_by_peer_connection_closed__html as comp,
  data
};
