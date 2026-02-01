<template><div><p>作為一個偏好使用Linux平台的Developer， 或會經常遇到一次性命名多個File的問題。
如果File數目不算多的話，還可以透過mv command 一一執行。
但是如果遇上成千隻呢?那肯定要想一個較有效率的方法!
逐一人手命名檔案不合理呢!</p>
<p>說實話，如果我自已遇到這個問題不懂思考如何解決，我自已都過不了自己那一關!</p>
<p>現在假設我們要把檔案名稱含有&quot;a_&quot;的名字改為&quot;abc_&quot;</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">shek@shek-pc:~/folder$ <span class="token function">ls</span> <span class="token parameter variable">-la</span></span>
<span class="line">total <span class="token number">8</span></span>
<span class="line">drwxrwxr-x   <span class="token number">2</span> shek shek <span class="token number">4096</span> Oct  <span class="token number">1</span> 01:53 <span class="token builtin class-name">.</span></span>
<span class="line">drwxr-xr-x <span class="token number">103</span> shek shek <span class="token number">4096</span> Oct  <span class="token number">1</span> 01:30 <span class="token punctuation">..</span></span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:30 a_b.txt</span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:30 a_c.txt</span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:53 b.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般來說命名多個檔案的linux command 會類似這樣:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">FILENAME</span> <span class="token keyword">in</span> *<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$FILENAME</span> Unix_<span class="token variable">$FILENAME</span><span class="token punctuation">;</span> <span class="token keyword">done</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>但我自已就想到用ls + awk + sed 解決這個問題，awk 和sed 非常實用，小弟真的要花點時間再深入看看awk 和 sed 有什麼其他功能...首先是要Filter我們想要的File名</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">shek@shek-pc:~/folder$ <span class="token function">ls</span> <span class="token parameter variable">-la</span> <span class="token operator">|</span> <span class="token function">grep</span> a <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $9}'</span></span>
<span class="line"></span>
<span class="line">a_b.txt</span>
<span class="line">a_c.txt</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後便行for loop了，為了安全起見還是不直接執行，列印了想行的command再執行</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">shek@shek-pc:~/folder$ <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-la</span> <span class="token operator">|</span> <span class="token function">grep</span> a <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $9}'</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token function">mv</span> <span class="token variable">$i</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $i<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">'s/a_/abc_/g'</span><span class="token variable">)</span></span> <span class="token punctuation">\</span><span class="token operator">&amp;</span><span class="token punctuation">\</span><span class="token operator">&amp;</span><span class="token punctuation">;</span> <span class="token keyword">done</span></span>
<span class="line"><span class="token function">mv</span> a_b.txt abc_b.txt <span class="token operator">&amp;&amp;</span></span>
<span class="line"><span class="token function">mv</span> a_c.txt abc_c.txt <span class="token operator">&amp;&amp;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後執行以下command 便完成了!</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">mv</span> a_b.txt abc_b.txt <span class="token operator">&amp;&amp;</span></span>
<span class="line"><span class="token function">mv</span> a_c.txt abc_c.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">shek@shek-pc:~/folder$ <span class="token function">ls</span> <span class="token parameter variable">-la</span></span>
<span class="line">total <span class="token number">8</span></span>
<span class="line">drwxrwxr-x   <span class="token number">2</span> shek shek <span class="token number">4096</span> Oct  <span class="token number">1</span> 02:02 <span class="token builtin class-name">.</span></span>
<span class="line">drwxr-xr-x <span class="token number">103</span> shek shek <span class="token number">4096</span> Oct  <span class="token number">1</span> 01:30 <span class="token punctuation">..</span></span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:30 abc_b.txt</span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:30 abc_c.txt</span>
<span class="line">-rw-rw-r--   <span class="token number">1</span> shek shek    <span class="token number">0</span> Oct  <span class="token number">1</span> 01:53 b.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


