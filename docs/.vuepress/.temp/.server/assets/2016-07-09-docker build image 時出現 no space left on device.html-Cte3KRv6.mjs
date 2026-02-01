import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>若發現明明電腦有好多空間，但是運行docker build時仍出現 no space left on device。則可以先運行docker info，若確認出現 Storage Driver: devicemapper������������������������������，則表示你的image 過了Base Device Size������������������。 解決方法是找出docker.service，找出</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/docker daemon <span class="token parameter variable">-H</span> fd://�������������������������������������������������������������������������</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>變為</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/docker daemon --storage-opt <span class="token assign-left variable">dm.basesize</span><span class="token operator">=</span>20G <span class="token parameter variable">-H</span> fd://�������������������������������������������������������������������������</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>之後請先參考自行備份<a href="https://linuxconfig.org/docker-container-backup-and-recovery" target="_blank" rel="noopener noreferrer">https://linuxconfig.org/docker-container-backup-and-recovery</a>原有的container</p><p>再執行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">systemctl����������� daemon-reload</span>
<span class="line"><span class="token function">service</span> <span class="token function">docker</span> stop</span>
<span class="line"><span class="token function">service</span> <span class="token function">docker</span> start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後新加的image 就會增加了base size!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2016-07-09-docker build image 時出現 no space left on device.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20160709Docker_build_image_____no_space_left_on_device_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2016-07-09-docker%20build%20image%20%E6%99%82%E5%87%BA%E7%8F%BE%20no%20space%20left%20on%20device.html","title":"docker build image 時出現 no space left on device","lang":"zh-HK","frontmatter":{"title":"docker build image 時出現 no space left on device","date":"2016-07-09T00:00:00.000Z","tags":["docker"]},"git":{},"filePathRelative":"posts/2016-07-09-docker build image 時出現 no space left on device.md"}');
export {
  _20160709Docker_build_image_____no_space_left_on_device_html as comp,
  data
};
