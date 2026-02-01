import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>從<a href="http://fontello.com/" target="_blank" rel="noopener noreferrer">http://fontello.com/</a>下載font icon，zip檔入面有demo.html，列出如何使用fontello icon ，我的目的是利Nokogiri在rake task以ruby list 形式列印出所有class name，以下是該rake task的程式碼 :</p><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre><code class="language-ruby"><span class="line">namespace <span class="token symbol">:dev</span> <span class="token keyword">do</span></span>
<span class="line">  task <span class="token symbol">:font_icon_list</span> <span class="token keyword">do</span></span>
<span class="line">    text <span class="token operator">=</span> open<span class="token punctuation">(</span>Rails<span class="token punctuation">.</span>root<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;doc&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;fontello-c340d124&#39;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&#39;demo.html&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read</span>
<span class="line">    html_doc <span class="token operator">=</span> Nokogiri<span class="token double-colon punctuation">::</span><span class="token constant">HTML</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span></span>
<span class="line">    font_icon_list <span class="token operator">=</span> html_doc<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">%{//div[@class=&quot;row&quot;]//div//span[@class=&quot;i-name&quot;]//text()}</span></span><span class="token punctuation">)</span></span>
<span class="line">    font_icon_list_code <span class="token operator">=</span> <span class="token operator">%</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">font_icon_list<span class="token punctuation">.</span>to_a<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">%{&quot;,&quot;}</span></span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line">    puts font_icon_list_code</span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後執行rake task輸出結果</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">rake dev:font_icon_list <span class="token operator">&gt;</span> result.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-20-從fontello下載font icon_及使用Nokogiri製作一張font icon class 的名單.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150120__fontello__font_icon____Nokogiri____font_icon_class_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-20-%E5%BE%9Efontello%E4%B8%8B%E8%BC%89font%20icon_%E5%8F%8A%E4%BD%BF%E7%94%A8Nokogiri%E8%A3%BD%E4%BD%9C%E4%B8%80%E5%BC%B5font%20icon%20class%20%E7%9A%84%E5%90%8D%E5%96%AE.html","title":"從http://fontello.com/下載font icon,及使用Nokogiri製作一張font icon class 的名單","lang":"zh-HK","frontmatter":{"title":"從http://fontello.com/下載font icon,及使用Nokogiri製作一張font icon class 的名單","date":"2015-01-20T00:00:00.000Z","tags":["ruby"]},"git":{},"filePathRelative":"posts/2015-01-20-從fontello下載font icon,及使用Nokogiri製作一張font icon class 的名單.md"}');
export {
  _20150120__fontello__font_icon____Nokogiri____font_icon_class_____html as comp,
  data
};
