<template><div><p>若發現明明電腦有好多空間，但是運行docker build時仍出現 no space left on device。則可以先運行docker info，若確認出現
Storage Driver: devicemapper������������������������������，則表示你的image 過了Base Device Size������������������。
解決方法是找出docker.service，找出</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/docker daemon <span class="token parameter variable">-H</span> fd://�������������������������������������������������������������������������</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>變為</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/docker daemon --storage-opt <span class="token assign-left variable">dm.basesize</span><span class="token operator">=</span>20G <span class="token parameter variable">-H</span> fd://�������������������������������������������������������������������������</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>之後請先參考自行備份<a href="https://linuxconfig.org/docker-container-backup-and-recovery" target="_blank" rel="noopener noreferrer">https://linuxconfig.org/docker-container-backup-and-recovery</a>原有的container</p>
<p>再執行</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">systemctl����������� daemon-reload</span>
<span class="line"><span class="token function">service</span> <span class="token function">docker</span> stop</span>
<span class="line"><span class="token function">service</span> <span class="token function">docker</span> start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後新加的image 就會增加了base size!</p>
</div></template>


