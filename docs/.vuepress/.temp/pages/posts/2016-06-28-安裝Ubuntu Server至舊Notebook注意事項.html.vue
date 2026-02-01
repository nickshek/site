<template><div><p>若家中有Notebook 不再使用，用來安裝Ubuntu Server 是一個好主意。Ubuntu Server 的下載連結如下:</p>
<p><a href="http://www.ubuntu.com/download/server" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/server</a></p>
<p>下載完iso 後便可以參考以下連結去建立USB安裝碟</p>
<p>Windows: <a href="http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows</a></p>
<p>Ubuntu: <a href="http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu" target="_blank" rel="noopener noreferrer">http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu</a></p>
<p>安裝後，為了避免開機後合上Notebook後會進入睡眠狀態，可以修改<code v-pre>/etc/systemd/logind.conf</code>
加入<code v-pre>HandleLidSwitch=ignore</code> 。
最後執行<code v-pre>sudo service restart systemd-logind</code></p>
</div></template>


