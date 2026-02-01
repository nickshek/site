<template><div><p>根據<a href="https://github.com/bundler/bundler/blob/master/ISSUES.md" target="_blank" rel="noopener noreferrer">https://github.com/bundler/bundler/blob/master/ISSUES.md</a>，解決方是執行以下程式碼，重新安裝 dependencies :</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># remove user-specific gems and git repos</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bundle/ ~/.gem/bundler/ ~/.gems/cache/bundler/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove system-wide git repos and git checkouts</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$GEM_HOME</span>/bundler/ <span class="token variable">$GEM_HOME</span>/cache/bundler/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove project-specific settings</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .bundle/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove project-specific cached gems and repos</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> vendor/cache/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove the saved resolve of the Gemfile</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> Gemfile.lock</span>
<span class="line"></span>
<span class="line"><span class="token comment"># uninstall the rubygems-bundler and open_gem gems</span></span>
<span class="line">rvm gemset use global <span class="token comment"># if using rvm</span></span>
<span class="line">gem uninstall rubygems-bundler open_gem</span>
<span class="line"></span>
<span class="line"><span class="token comment"># try to install one more time</span></span>
<span class="line">bundle <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


