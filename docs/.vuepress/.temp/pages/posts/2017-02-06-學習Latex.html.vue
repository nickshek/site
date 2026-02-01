<template><div><p>近期對Latex相當有興趣， 之前曾經稍為在Wiki了解過Latex，覺得Symbol好像看起來好像好複雜，所以便提不起興趣學了。
直至近期發現好多整齊漂亮的pdf文件原來都是由Latex的編譯器建立，便開始想了解一下，當學習一個全新的markup language。
以下的範例會建立一個pdf文件，簡單地記綠「Today I Learned」，好像<a href="https://github.com/thoughtbot/til" target="_blank" rel="noopener noreferrer">https://github.com/thoughtbot/til</a> 或 <a href="https://github.com/jbranchaud/til" target="_blank" rel="noopener noreferrer">https://github.com/jbranchaud/til</a>，只是用Latex編寫而已，雖然這個情況或者用markdown會比較合適，但是用來練習Latex也不錯:</p>
<p>首先安裝 texlive:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">sudo apt-get install texlive-full</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Text Editor 我覺得用atom便好了無需再額多安裝 texmaker。反正本身電腦只使用了128G SSD， 沒有太多空間...</p>
<p>之後把以下原始碼儲存為main.tex，不妨花點時間了解一下latex語法，推薦不妨抽少少時間看看<a href="https://tobi.oetiker.ch/lshort/lshort.pdf" target="_blank" rel="noopener noreferrer">Latex in 157 minutes</a></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line"></span>
<span class="line">\documentclass{article}</span>
<span class="line"></span>
<span class="line">\usepackage{hyperref}</span>
<span class="line"></span>
<span class="line">\RequirePackage{fontspec}</span>
<span class="line">\RequirePackage{xeCJK}</span>
<span class="line"></span>
<span class="line">\setCJKmainfont{Droid Sans Fallback}</span>
<span class="line">\XeTeXlinebreaklocale "zh"</span>
<span class="line">\XeTeXlinebreakskip = 0pt plus 1pt</span>
<span class="line"></span>
<span class="line">\title{Today I learned.今日我所學}</span>
<span class="line">\author{Nick Shek}</span>
<span class="line">\date{2017-02-07}</span>
<span class="line"></span>
<span class="line">\begin{document}</span>
<span class="line"></span>
<span class="line">\maketitle</span>
<span class="line"></span>
<span class="line">\clearpage</span>
<span class="line"></span>
<span class="line">\tableofcontents</span>
<span class="line"></span>
<span class="line">\clearpage</span>
<span class="line"></span>
<span class="line">\section{MySQL}</span>
<span class="line"></span>
<span class="line">\begin{itemize}</span>
<span class="line">\item Setting up MySQL replication without the downtime: \href{https://plusbryan.com/mysql-replication-without-downtime}{https://plusbryan.com/mysql-replication-without-downtime}</span>
<span class="line">\end{itemize}</span>
<span class="line"></span>
<span class="line">\section{Latex}</span>
<span class="line"></span>
<span class="line">\begin{itemize}</span>
<span class="line">\item Latex 中文化解決方案:</span>
<span class="line">  \begin{itemize}</span>
<span class="line">    \item \href{https://goo.gl/6ajvrM}{https://goo.gl/6ajvrM}</span>
<span class="line">    \item \href{http://pangomi.blogspot.hk/2012/11/latex-in-ubuntu.html}{http://pangomi.blogspot.hk/2012/11/latex-in-ubuntu.html}</span>
<span class="line">  \end{itemize}</span>
<span class="line">\item Create Table of contents in Latex \href{https://www.sharelatex.com/learn/Table\_of\_contents}{https://www.sharelatex.com/learn/Table\_of\_contents}</span>
<span class="line">\end{itemize}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">\end{document}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>確保Droid Sans Fallback字型已經安裝後，執行</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">xelatex main.tex</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如無意外，便能成功建立一個pdf，及中文字型能正確顯示。</p>
<p>參考了不同網站後，現在總算能輕鬆建立pdf，而pdf本身能顯示中文。
了解Latex基本Symbol後，其實建立一份Latex 沒有想像中那麼複雜。</p>
<p>如有興趣，也不妨看看: <a href="https://github.com/nickshek/latex-til" target="_blank" rel="noopener noreferrer">https://github.com/nickshek/latex-til</a></p>
<p>有時間的話會不定期更新</p>
<p>Source: <a href="http://milq.github.io/install-latex-ubuntu-debian/" target="_blank" rel="noopener noreferrer">http://milq.github.io/install-latex-ubuntu-debian/</a></p>
</div></template>


