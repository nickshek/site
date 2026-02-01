import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>這個錯誤其實是好常見的 ，如果在apache 看見 access denied because search permissions are missing on a component of the path ， 即表示<strong>根目錄至Alias 的目標資料夾</strong>中任意一個資料夾沒有execute permission!例如:</p><p>如果你alias的目標資夾是 <code>/usr/local/apache2/htdocs/foo</code> ，請確保以下資料夾有execute permission</p><p>/ /usr/ /usr/local/ /usr/local/apache2/ /usr/local/apache2/htdocs/ /usr/local/apache2/htdocs/foo/</p><p>owner 無須設定是apache user 因此，解決方法如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">cd /usr/local/apache2/htdocs/foo</span>
<span class="line"></span>
<span class="line">ls -la</span>
<span class="line">chmod +x .</span>
<span class="line">cd ..</span>
<span class="line"># 重覆直至去到 /</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2016-04-16-使用Apache設定Alias時出現403 Foridden.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20160416___Apache__Alias___403_Foridden_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2016-04-16-%E4%BD%BF%E7%94%A8Apache%E8%A8%AD%E5%AE%9AAlias%E6%99%82%E5%87%BA%E7%8F%BE403%20Foridden.html","title":"使用Apache設定Alias時出現403 Foridden","lang":"zh-HK","frontmatter":{"title":"使用Apache設定Alias時出現403 Foridden","date":"2016-04-16T00:00:00.000Z","tags":["apache"]},"git":{},"filePathRelative":"posts/2016-04-16-使用Apache設定Alias時出現403 Foridden.md"}');
export {
  _20160416___Apache__Alias___403_Foridden_html as comp,
  data
};
