<template><div><p>首先，在localhost建立一個假project</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/</span>
<span class="line"><span class="token function">mkdir</span> project1</span>
<span class="line"><span class="token builtin class-name">cd</span> project1/</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"HelloWorld!"</span> <span class="token operator">>></span> test.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>驗證是否確實將Hello World 寫入test.txt</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">cat</span> test.txt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>建立git repository</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在remote host 建立bare repository,以下的blog詳細解釋了什麼是bare git repository</p>
<p><a href="http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/" target="_blank" rel="noopener noreferrer">http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/</span>
<span class="line"><span class="token function">mkdir</span> project1.git</span>
<span class="line"><span class="token builtin class-name">cd</span> project1.git/</span>
<span class="line"><span class="token function">git</span> init <span class="token parameter variable">--bare</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在localhost,</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> ~/project1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>新增remote origin url</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin ssh://<span class="token operator">&lt;</span>username<span class="token operator">></span>@<span class="token operator">&lt;</span>ip address<span class="token operator">></span>/<span class="token operator">&lt;</span>path to bare repo<span class="token operator">></span>/project1.git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>萬一新增的url 有錯，可以透過下列指令更新remote origin url</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>url<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>最后，輸入我們最熟悉的git指令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">git</span> push origin master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


