<template><div><p>若使用 <code v-pre>php -S localhost:8000</code>來進行development時，沒有使用control +C 結束程序，便會發生該問題，因此可以建立以下bashscript結束名為&quot;php&quot;的proceses</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-fe</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'[p]hp'</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$pid</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token function">kill</span> <span class="token variable">$pid</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">"Does not exist"</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


