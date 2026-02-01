<template><div><p>在以下的Stack Overflow網址，有人寫了一句相當強大的regular expression來完成該使命</p>
<p>stackoverflow : <a href="http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex/10315969#10315969" target="_blank" rel="noopener noreferrer">jQuery Youtube URL Validation with regex</a></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * JavaScript function to match (and return) the video Id</span>
<span class="line"> * of any valid Youtube Url, given as input string.</span>
<span class="line"> * <span class="token keyword">@author</span>: Stephan Schmitz eyecatchup@gmail.com</span>
<span class="line"> * <span class="token keyword">@url</span>: http://stackoverflow.com/a/10315969/624466</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ytVidId</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&amp;v=))((\w|-){11})(?:\S+)?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> RegExp<span class="token punctuation">.</span>$1 <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的程式碼用Python完成同樣功能 ，再抽一些較有代表性例子用作doctest :</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">import</span> re</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">isYouTubeURL</span><span class="token punctuation">(</span>youtube_url<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""return the video Id of any valid Youtube Url as string</span>
<span class="line"></span>
<span class="line">    >>> isYouTubeURL("https://www.youtube.com/watch?v=T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("https://www.youtube.com/watch?feature=youtu.be&amp;v=T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("http://www.youtube.com/watch?v=T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("www.youtube.com/watch?v=T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("youtube.com/watch?v=T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("https://youtu.be/T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("http://youtu.be/T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("youtu.be/T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("www.youtube.com/embed/T2UW7VawmGI")</span>
<span class="line">    'T2UW7VawmGI'</span>
<span class="line">    >>> isYouTubeURL("")</span>
<span class="line">    >>> isYouTubeURL("http://www.geekblog.tk/?v=T2UW7VawmGI")</span>
<span class="line">    """</span></span>
<span class="line">    youtube_regex <span class="token operator">=</span> <span class="token string">r"^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&amp;v=))(?P&lt;YouTubeID>(\w|-){11})(?:\S+)?$"</span></span>
<span class="line">    sreMatch <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span>youtube_regex<span class="token punctuation">,</span> youtube_url<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> sreMatch<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">"YouTubeID"</span><span class="token punctuation">)</span> <span class="token keyword">if</span> sreMatch <span class="token keyword">else</span> <span class="token boolean">None</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">import</span> doctest</span>
<span class="line">    doctest<span class="token punctuation">.</span>testmod<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假設將以下的Python程式碼儲存成youtube.py，執行 <code v-pre>python youtube.py -v</code> 便可以執行doctest了。</p>
</div></template>


