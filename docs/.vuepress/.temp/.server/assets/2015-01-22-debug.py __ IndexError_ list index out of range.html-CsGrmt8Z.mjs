import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若該錯誤來自Django項目的debug.py，解決方法是修改_get_lines_from_file方法，把以下這一行:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">source <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>改為</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line">source <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-22-debug.py __ IndexError_ list index out of range.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150122Debug_py____IndexError__list_index_out_of_range_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-22-debug.py%20__%20IndexError_%20list%20index%20out%20of%20range.html","title":"debug.py => IndexError: list index out of range","lang":"zh-HK","frontmatter":{"title":"debug.py => IndexError: list index out of range","date":"2015-01-22T00:00:00.000Z","tags":["django"]},"git":{},"filePathRelative":"posts/2015-01-22-debug.py => IndexError: list index out of range.md"}');
export {
  _20150122Debug_py____IndexError__list_index_out_of_range_html as comp,
  data
};
