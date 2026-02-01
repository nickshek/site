import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CxfDVmok.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>根據<a href="https://github.com/bundler/bundler/blob/master/ISSUES.md" target="_blank" rel="noopener noreferrer">https://github.com/bundler/bundler/blob/master/ISSUES.md</a>，解決方是執行以下程式碼，重新安裝 dependencies :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># remove user-specific gems and git repos</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bundle/ ~/.gem/bundler/ ~/.gems/cache/bundler/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove system-wide git repos and git checkouts</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$GEM_HOME</span>/bundler/ <span class="token variable">$GEM_HOME</span>/cache/bundler/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove project-specific settings</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .bundle/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove project-specific cached gems and repos</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> vendor/cache/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove the saved resolve of the Gemfile</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> Gemfile.lock</span>
<span class="line"></span>
<span class="line"><span class="token comment"># uninstall the rubygems-bundler and open_gem gems</span></span>
<span class="line">rvm gemset use global <span class="token comment"># if using rvm</span></span>
<span class="line">gem uninstall rubygems-bundler open_gem</span>
<span class="line"></span>
<span class="line"><span class="token comment"># try to install one more time</span></span>
<span class="line">bundle <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2015-01-26-react-rails.git (at master) is not yet checked out. Run _bundle install_ first.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20150126ReactRails_git__at_master__is_not_yet_checked_out__Run__bundle_install__first_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2015-01-26-react-rails.git%20(at%20master)%20is%20not%20yet%20checked%20out.%20Run%20_bundle%20install_%20first.html","title":"git://github.com/reactjs/react-rails.git (at master) is not yet checked out. Run `bundle install` first.","lang":"zh-HK","frontmatter":{"title":"git://github.com/reactjs/react-rails.git (at master) is not yet checked out. Run `bundle install` first.","date":"2015-01-26T00:00:00.000Z","tags":["rails"]},"git":{},"filePathRelative":"posts/2015-01-26-react-rails.git (at master) is not yet checked out. Run `bundle install` first.md"}');
export {
  _20150126ReactRails_git__at_master__is_not_yet_checked_out__Run__bundle_install__first_html as comp,
  data
};
