<template><div><p>在package,json內，將dependencies入面所有版本的號碼改成*，例如</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token property">"dependencies"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"socket.io"</span> <span class="token operator">:</span> <span class="token string">"0.9.12"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"redis"</span><span class="token operator">:</span> <span class="token string">"0.7.3"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改為</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token property">"dependencies"</span> <span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"socket.io"</span> <span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"redis"</span><span class="token operator">:</span> <span class="token string">"*"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再執行<code v-pre>npm update --save</code></p>
</div></template>


