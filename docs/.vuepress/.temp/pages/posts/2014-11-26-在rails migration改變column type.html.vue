<template><div><p>假設我們要改變sub_anonrums table的title,將其欄位種類由:text改為:string方法如下:</p>
<p>1.在project下新增一個migration file</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">rails g migration change_sub_anonrums_title_format</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.移除migration 下的change 方法,改為使用up 和down方法,migration file 的source code 如下所示: \</p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ChangeSubAnonrumsTitleFormat</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration</span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">up</span></span></span>
<span class="line">    change_column <span class="token symbol">:sub_anonrums</span><span class="token punctuation">,</span> <span class="token symbol">:title</span><span class="token punctuation">,</span> <span class="token symbol">:string</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">down</span></span></span>
<span class="line">    change_column <span class="token symbol">:sub_anonrums</span><span class="token punctuation">,</span> <span class="token symbol">:title</span><span class="token punctuation">,</span> <span class="token symbol">:text</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.執行 rake db:migrate</p>
</div></template>


