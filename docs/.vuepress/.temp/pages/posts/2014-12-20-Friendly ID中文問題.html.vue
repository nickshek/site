<template><div><p>主要在Gemfile加下以下指令以安裝 babosa</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line">gem <span class="token string-literal"><span class="token string">"babosa"</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>再在需要中文URL的Model下override normalize_friendly_id方法:</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">normalize_friendly_id</span></span><span class="token punctuation">(</span>input<span class="token punctuation">)</span></span>
<span class="line">  input<span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>to_slug<span class="token punctuation">.</span>normalize<span class="token punctuation">.</span>to_s</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下網誌有詳細解釋:</p>
<p>使用 Babosa 配合 Friendly_id 解決中文網址問題 : <a href="http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/" target="_blank" rel="noopener noreferrer">http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/</a></p>
</div></template>


