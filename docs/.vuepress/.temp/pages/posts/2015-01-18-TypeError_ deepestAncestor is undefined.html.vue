<template><div><p>使用react.js遇到一個奇怪的問題 : TypeError: deepestAncestor is undefined</p>
<p>但是當按F5問題又消失了，去其他頁面有時會有這個問題。</p>
<p>根據 <a href="http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined</a></p>
<p>可能係turbolink關係，載入了二個不同版本的react。</p>
<p>我的暫時解決方法是在rails內的application.js暫時不用turbolink。將</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> turbolinks</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react_ujs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>變為</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react</span>
<span class="line"><span class="token operator">/</span><span class="token operator">/=</span> <span class="token keyword">require</span> react_ujs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


