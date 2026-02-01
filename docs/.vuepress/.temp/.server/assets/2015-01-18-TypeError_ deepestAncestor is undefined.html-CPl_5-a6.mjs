import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>使用react.js遇到一個奇怪的問題 : TypeError: deepestAncestor is undefined</p><p>但是當按F5問題又消失了，去其他頁面有時會有這個問題。</p><p>根據 <a href="http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined</a></p><p>可能係turbolink關係，載入了二個不同版本的react。</p><p>我的暫時解決方法是在rails內的application.js暫時不用turbolink。將</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> turbolinks</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react_ujs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>變為</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react_ujs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-18-TypeError_ deepestAncestor is undefined.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150118TypeError__deepestAncestor_is_undefined_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-18-TypeError_%20deepestAncestor%20is%20undefined.html","title":"TypeError: deepestAncestor is undefined","lang":"zh-HK","frontmatter":{"title":"TypeError: deepestAncestor is undefined","date":"2015-01-18T00:00:00.000Z","tags":["react.js"]},"git":{},"filePathRelative":"posts/2015-01-18-TypeError: deepestAncestor is undefined.md"}');
export {
  _20150118TypeError__deepestAncestor_is_undefined_html as comp,
  data
};
