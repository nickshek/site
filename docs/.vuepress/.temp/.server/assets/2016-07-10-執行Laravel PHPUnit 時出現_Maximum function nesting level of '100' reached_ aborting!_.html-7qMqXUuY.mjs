import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>執行Laravel Project的PHPUnit 若出現</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Maximum function nesting level of &#39;100&#39; reached, aborting!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>而在其他電腦運行時又沒有問題，解決方法是相當容易。先在terminal執行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">php <span class="token parameter variable">--ini</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>確認php.ini 路徑，之後在php.ini加入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">xdebug.max_nesting_level=300</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>即可。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2016-07-10-執行Laravel PHPUnit 時出現_Maximum function nesting level of '100' reached_ aborting!_.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20160710___Laravel_PHPUnit_____Maximum_function_nesting_level_of__100__reached__aborting___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse(`{"path":"/posts/2016-07-10-%E5%9F%B7%E8%A1%8CLaravel%20PHPUnit%20%E6%99%82%E5%87%BA%E7%8F%BE_Maximum%20function%20nesting%20level%20of%20'100'%20reached_%20aborting!_.html","title":"執行Laravel PHPUnit 時出現\\"Maximum function nesting level of '100' reached, aborting!\\"","lang":"zh-HK","frontmatter":{"title":"執行Laravel PHPUnit 時出現\\"Maximum function nesting level of '100' reached, aborting!\\"","date":"2016-07-10T00:00:00.000Z","tags":["Laravel 5"]},"git":{},"filePathRelative":"posts/2016-07-10-執行Laravel PHPUnit 時出現\\"Maximum function nesting level of '100' reached, aborting!\\".md"}`);
export {
  _20160710___Laravel_PHPUnit_____Maximum_function_nesting_level_of__100__reached__aborting___html as comp,
  data
};
