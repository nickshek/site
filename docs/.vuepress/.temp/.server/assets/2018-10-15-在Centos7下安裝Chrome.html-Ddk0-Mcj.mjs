import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>輸入以下指令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">vi</span>  /etc/yum.repos.d/google.repo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>貼上以下內容</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token punctuation">[</span>google64<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span>Google - x86_64</span>
<span class="line"><span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://dl.google.com/linux/rpm/stable/x86_64</span>
<span class="line"><span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://dl-ssl.google.com/linux/linux_signing_key.pub</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後再輸入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> google-chrome-stable</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2018-10-15-在Centos7下安裝Chrome.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20181015__Centos7___Chrome_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2018-10-15-%E5%9C%A8Centos7%E4%B8%8B%E5%AE%89%E8%A3%9DChrome.html","title":"在Centos7下安裝Chrome","lang":"zh-HK","frontmatter":{"title":"在Centos7下安裝Chrome","date":"2018-10-15T00:00:00.000Z"},"git":{},"filePathRelative":"posts/2018-10-15-在Centos7下安裝Chrome.md"}');
export {
  _20181015__Centos7___Chrome_html as comp,
  data
};
