import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>假設我們要改變sub_anonrums table的title,將其欄位種類由:text改為:string方法如下:</p><p>1.在project下新增一個migration file</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">rails g migration change_sub_anonrums_title_format</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>2.移除migration 下的change 方法,改為使用up 和down方法,migration file 的source code 如下所示: \\</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ChangeSubAnonrumsTitleFormat</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration</span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">up</span></span></span>
<span class="line">    change_column <span class="token symbol">:sub_anonrums</span><span class="token punctuation">,</span> <span class="token symbol">:title</span><span class="token punctuation">,</span> <span class="token symbol">:string</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">down</span></span></span>
<span class="line">    change_column <span class="token symbol">:sub_anonrums</span><span class="token punctuation">,</span> <span class="token symbol">:title</span><span class="token punctuation">,</span> <span class="token symbol">:text</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.執行 rake db:migrate</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-11-26-在rails migration改變column type.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141126__rails_migration__column_type_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-11-26-%E5%9C%A8rails%20migration%E6%94%B9%E8%AE%8Acolumn%20type.html","title":"在rails migration改變column type","lang":"zh-HK","frontmatter":{"title":"在rails migration改變column type","date":"2014-11-26T00:00:00.000Z","tags":["rails"]},"git":{},"filePathRelative":"posts/2014-11-26-在rails migration改變column type.md"}');
export {
  _20141126__rails_migration__column_type_html as comp,
  data
};
