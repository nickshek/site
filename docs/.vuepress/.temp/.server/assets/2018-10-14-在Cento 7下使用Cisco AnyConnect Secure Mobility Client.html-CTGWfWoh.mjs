import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若你只有windows 或 mac os 版本的Cisco AnyConnect Secure Mobility Client，而想在Centos 下使用和Cisco AnyConnect Secure Mobility Client功能相同的軟件， 可以考慮安裝openconnet</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> openconnect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>使用方式:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> openconnect <span class="token operator">&lt;</span>vpn ip<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>輸入username + password即可</p><p>留意到resolv.conf 更新了</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">cat</span> /etc/resolv.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>按ctrl + c 即可斷開VPN連接</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20181014__Cento_7___Cisco_AnyConnect_Secure_Mobility_Client_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2018-10-14-%E5%9C%A8Cento%207%E4%B8%8B%E4%BD%BF%E7%94%A8Cisco%20AnyConnect%20Secure%20Mobility%20Client.html","title":"在Cento 7下使用Cisco AnyConnect Secure Mobility Client","lang":"zh-HK","frontmatter":{"title":"在Cento 7下使用Cisco AnyConnect Secure Mobility Client","date":"2018-10-14T00:00:00.000Z"},"git":{},"filePathRelative":"posts/2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.md"}');
export {
  _20181014__Cento_7___Cisco_AnyConnect_Secure_Mobility_Client_html as comp,
  data
};
