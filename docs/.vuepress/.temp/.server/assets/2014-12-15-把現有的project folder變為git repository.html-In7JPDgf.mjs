import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>首先，在localhost建立一個假project</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/</span>
<span class="line"><span class="token function">mkdir</span> project1</span>
<span class="line"><span class="token builtin class-name">cd</span> project1/</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;HelloWorld!&quot;</span> <span class="token operator">&gt;&gt;</span> test.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>驗證是否確實將Hello World 寫入test.txt</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">cat</span> test.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>建立git repository</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>在remote host 建立bare repository,以下的blog詳細解釋了什麼是bare git repository</p><p><a href="http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/" target="_blank" rel="noopener noreferrer">http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/</a></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/</span>
<span class="line"><span class="token function">mkdir</span> project1.git</span>
<span class="line"><span class="token builtin class-name">cd</span> project1.git/</span>
<span class="line"><span class="token function">git</span> init <span class="token parameter variable">--bare</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在localhost,</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/project1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>新增remote origin url</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin ssh://<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>ip address<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>path to bare repo<span class="token operator">&gt;</span>/project1.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>萬一新增的url 有錯，可以透過下列指令更新remote origin url</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>最后，輸入我們最熟悉的git指令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> push origin master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-12-15-把現有的project folder變為git repository.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141215_____project_folder__git_repository_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-12-15-%E6%8A%8A%E7%8F%BE%E6%9C%89%E7%9A%84project%20folder%E8%AE%8A%E7%82%BAgit%20repository.html","title":"把現有的project folder變為git repository","lang":"zh-HK","frontmatter":{"title":"把現有的project folder變為git repository","date":"2014-12-15T00:00:00.000Z","tags":["git"]},"git":{},"filePathRelative":"posts/2014-12-15-把現有的project folder變為git repository.md"}');
export {
  _20141215_____project_folder__git_repository_html as comp,
  data
};
