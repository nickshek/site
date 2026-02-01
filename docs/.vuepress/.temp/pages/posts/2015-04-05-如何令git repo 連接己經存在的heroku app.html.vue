<template><div><p>假設你己經在<a href="https://toolbelt.heroku.com/" target="_blank" rel="noopener noreferrer">https://toolbelt.heroku.com/</a>下載了heroku 工具程式.若想把原本的應用程式連接至heroku只需要在程式的根目錄輸入<code v-pre>heroku create</code>,但是這樣會建立了一個全新的heroku程式。</p>
<p>若我在heroku己經有一個應用程式為 project , 我想將原本的git 連接至 project 而不是重新建立一個新的應用程式,只需要在程式的根目錄輸入 <code v-pre>heroku git:remote -a project</code></p>
</div></template>


