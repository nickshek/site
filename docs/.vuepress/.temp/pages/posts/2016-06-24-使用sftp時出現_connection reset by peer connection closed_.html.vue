<template><div><p>若新加的sftp帳戶發現，出現connection reset by peer connection closed的錯誤訊息，應該先用cat 查看/etc/rsyslog.conf了解找出出現
auth,authpriv.*　的行數，便清楚需要查看那個log file以獲取進一步的資訊。若系統是Centos，多數是查看/var/log/secure，ubuntu 則查看
/var/log/auth.log。</p>
<p>以下頁面清楚說明如何fix SFTP的問題，我遇到的情況是</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">sshd[12399]: fatal: bad ownership or modes for chroot directory component "/path/of/chroot/directory/"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>解決方法是確保chroot的路徑的所有資料夾都是由root 擁有及所有path都是安全的。若有任何一個資料夾的權限是777，應該把資料夾改為775或755。</p>
<p>參考 : <a href="https://wiki.archlinux.org/index.php/SFTP_chroot" target="_blank" rel="noopener noreferrer">https://wiki.archlinux.org/index.php/SFTP_chroot</a></p>
</div></template>


