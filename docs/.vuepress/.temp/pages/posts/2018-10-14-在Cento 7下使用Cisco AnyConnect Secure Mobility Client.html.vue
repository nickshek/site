<template><div><p>若你只有windows 或 mac os 版本的Cisco AnyConnect Secure Mobility Client，而想在Centos 下使用和Cisco AnyConnect Secure Mobility Client功能相同的軟件，
可以考慮安裝openconnet</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> openconnect</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用方式:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> openconnect <span class="token operator">&lt;</span>vpn ip<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>輸入username + password即可</p>
<p>留意到resolv.conf 更新了</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">cat</span> /etc/resolv.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>按ctrl + c 即可斷開VPN連接</p>
</div></template>


