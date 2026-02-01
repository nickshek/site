import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>在以下的Stack Overflow網址，有人寫了一句相當強大的regular expression來完成該使命</p><p>stackoverflow : <a href="http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex/10315969#10315969" target="_blank" rel="noopener noreferrer">jQuery Youtube URL Validation with regex</a></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * JavaScript function to match (and return) the video Id</span>
<span class="line"> * of any valid Youtube Url, given as input string.</span>
<span class="line"> * <span class="token keyword">@author</span>: Stephan Schmitz eyecatchup@gmail.com</span>
<span class="line"> * <span class="token keyword">@url</span>: http://stackoverflow.com/a/10315969/624466</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ytVidId</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?:https?:\\/\\/)?(?:www\\.)?(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&amp;v=))((\\w|-){11})(?:\\S+)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> RegExp<span class="token punctuation">.</span>$1 <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的程式碼用Python完成同樣功能 ，再抽一些較有代表性例子用作doctest :</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token keyword">import</span> re</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">isYouTubeURL</span><span class="token punctuation">(</span>youtube_url<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;return the video Id of any valid Youtube Url as string</span>
<span class="line"></span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;https://www.youtube.com/watch?v=T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;https://www.youtube.com/watch?feature=youtu.be&amp;v=T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;http://www.youtube.com/watch?v=T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;www.youtube.com/watch?v=T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;youtube.com/watch?v=T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;https://youtu.be/T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;http://youtu.be/T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;youtu.be/T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;www.youtube.com/embed/T2UW7VawmGI&quot;)</span>
<span class="line">    &#39;T2UW7VawmGI&#39;</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;&quot;)</span>
<span class="line">    &gt;&gt;&gt; isYouTubeURL(&quot;http://www.geekblog.tk/?v=T2UW7VawmGI&quot;)</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line">    youtube_regex <span class="token operator">=</span> <span class="token string">r&quot;^(?:https?:\\/\\/)?(?:www\\.)?(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&amp;v=))(?P&lt;YouTubeID&gt;(\\w|-){11})(?:\\S+)?$&quot;</span></span>
<span class="line">    sreMatch <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span>youtube_regex<span class="token punctuation">,</span> youtube_url<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> sreMatch<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">&quot;YouTubeID&quot;</span><span class="token punctuation">)</span> <span class="token keyword">if</span> sreMatch <span class="token keyword">else</span> <span class="token boolean">None</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">import</span> doctest</span>
<span class="line">    doctest<span class="token punctuation">.</span>testmod<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假設將以下的Python程式碼儲存成youtube.py，執行 <code>python youtube.py -v</code> 便可以執行doctest了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141230___regular_expression__URL___YouTube_URL__return_youtube_video_ID_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-12-30-%E5%88%A9%E7%94%A8regular%20expression%E5%88%A4%E6%96%B7URL%E6%98%AF%E5%90%A6%E7%82%BAYouTube%20URL%EF%BC%8C%E4%B8%94return%20youtube%20video%20ID.html","title":"利用regular expression判斷URL是否為YouTube URL，且return youtube video ID","lang":"zh-HK","frontmatter":{"title":"利用regular expression判斷URL是否為YouTube URL，且return youtube video ID","date":"2014-12-30T00:00:00.000Z","tags":["python"]},"git":{},"filePathRelative":"posts/2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.md"}');
export {
  _20141230___regular_expression__URL___YouTube_URL__return_youtube_video_ID_html as comp,
  data
};
