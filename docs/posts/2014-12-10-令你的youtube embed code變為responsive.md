---
title: 令你的youtube embed code變為responsive
date: 2014-12-10
tags:
  - css
---

把youtube的Embed HTML由
```html
<iframe src="//www.youtube.com/embed/AsHKOH03mxw" frameborder="0" height="315" width="560"></iframe>
```
改成
```html
<div class="video-container">
  <iframe src="//www.youtube.com/embed/AsHKOH03mxw" frameborder="0" height="315" width="560"></iframe>
</div>
```
之後加入以下CSS
```css
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px; height: 0; overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```
