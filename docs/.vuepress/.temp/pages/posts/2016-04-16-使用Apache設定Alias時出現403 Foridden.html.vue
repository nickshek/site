<template><div><p>這個錯誤其實是好常見的 ，如果在apache 看見 access denied because search permissions are missing on a component of the path ，
即表示<strong>根目錄至Alias 的目標資料夾</strong>中任意一個資料夾沒有execute permission!例如:</p>
<p>如果你alias的目標資夾是 <code v-pre>/usr/local/apache2/htdocs/foo</code> ，請確保以下資料夾有execute permission</p>
<p>/
/usr/
/usr/local/
/usr/local/apache2/
/usr/local/apache2/htdocs/
/usr/local/apache2/htdocs/foo/</p>
<p>owner 無須設定是apache user
因此，解決方法如下</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">cd /usr/local/apache2/htdocs/foo</span>
<span class="line"></span>
<span class="line">ls -la</span>
<span class="line">chmod +x .</span>
<span class="line">cd ..</span>
<span class="line"># 重覆直至去到 /</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


