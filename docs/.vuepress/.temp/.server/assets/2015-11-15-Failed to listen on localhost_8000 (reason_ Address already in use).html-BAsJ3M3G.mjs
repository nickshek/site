import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若使用 <code>php -S localhost:8000</code>來進行development時，沒有使用control +C 結束程序，便會發生該問題，因此可以建立以下bashscript結束名為&quot;php&quot;的proceses</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-fe</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;[p]hp&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token function">kill</span> <span class="token variable">$pid</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Does not exist&quot;</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-11-15-Failed to listen on localhost_8000 (reason_ Address already in use).html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20151115Failed_to_listen_on_localhost_8000__reason__Address_already_in_use__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-11-15-Failed%20to%20listen%20on%20localhost_8000%20(reason_%20Address%20already%20in%20use).html","title":"Failed to listen on localhost:8000 (reason: Address already in use)","lang":"zh-HK","frontmatter":{"title":"Failed to listen on localhost:8000 (reason: Address already in use)","date":"2015-11-15T00:00:00.000Z","tags":["php"]},"git":{},"filePathRelative":"posts/2015-11-15-Failed to listen on localhost:8000 (reason: Address already in use).md"}');
export {
  _20151115Failed_to_listen_on_localhost_8000__reason__Address_already_in_use__html as comp,
  data
};
