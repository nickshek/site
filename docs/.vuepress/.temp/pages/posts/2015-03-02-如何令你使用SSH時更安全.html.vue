<template><div><p>要令SSH登入更安全，最簡單的方法是取消密碼登入。而使用公開金鑰。</p>
<p>在Client輸入</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>建議輸入passphrase。之後輸入</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>之後將產生的Public Key (e.g id_rsa.pub) 複製至SSH Server。</p>
<p>登入SSH Server，將Public Key的內容加至 .ssh/authorized_keys:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">cat</span> .ssh/id_rsa.pub <span class="token operator">>></span> .ssh/authorized_keys</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>之後開啟另一個Terminal 測試SSH登入是否只需要輸入passphrase來找替原本的使用者密碼</p>
<p>之後輸入<code v-pre>sudo vim /etc/ssh/sshd_config</code></p>
<p>將 Port 22 修改為其他Port，使用ssh 時用-p 選項指定PORT Number</p>
<p>將<code v-pre>#PasswordAuthentication yes</code> 改為<code v-pre>PasswordAuthentication no</code></p>
<p>重啟SSH Service就完成了</p>
</div></template>


