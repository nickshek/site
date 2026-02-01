import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>要令SSH登入更安全，最簡單的方法是取消密碼登入。而使用公開金鑰。</p><p>在Client輸入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>建議輸入passphrase。之後輸入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>之後將產生的Public Key (e.g id_rsa.pub) 複製至SSH Server。</p><p>登入SSH Server，將Public Key的內容加至 .ssh/authorized_keys:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">cat</span> .ssh/id_rsa.pub <span class="token operator">&gt;&gt;</span> .ssh/authorized_keys</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>之後開啟另一個Terminal 測試SSH登入是否只需要輸入passphrase來找替原本的使用者密碼</p><p>之後輸入<code>sudo vim /etc/ssh/sshd_config</code></p><p>將 Port 22 修改為其他Port，使用ssh 時用-p 選項指定PORT Number</p><p>將<code>#PasswordAuthentication yes</code> 改為<code>PasswordAuthentication no</code></p><p>重啟SSH Service就完成了</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-03-02-如何令你使用SSH時更安全.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150302_______SSH_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-03-02-%E5%A6%82%E4%BD%95%E4%BB%A4%E4%BD%A0%E4%BD%BF%E7%94%A8SSH%E6%99%82%E6%9B%B4%E5%AE%89%E5%85%A8.html","title":"如何令你使用SSH時更安全?","lang":"zh-HK","frontmatter":{"title":"如何令你使用SSH時更安全?","date":"2015-03-02T00:00:00.000Z","tags":["linux"]},"git":{},"filePathRelative":"posts/2015-03-02-如何令你使用SSH時更安全.md"}');
export {
  _20150302_______SSH_____html as comp,
  data
};
