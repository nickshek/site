<template><div><p>在terminal 輸入 <code v-pre>curl http://it-ebooks-api.info/v1/search/python </code> ，輸出是一堆壓縮了的JSON。</p>
<p>只要輸入 <code v-pre>curl http://it-ebooks-api.info/v1/search/python | python -mjson.tool</code> ，便能輸出整理好的JSON了。</p>
</div></template>


