---
title: TypeError: deepestAncestor is undefined
categories:
    - react.js
---
使用react.js遇到一個奇怪的問題 : TypeError: deepestAncestor is undefined

但是當按F5問題又消失了，去其他頁面有時會有這個問題。

根據 [http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined](http://stackoverflow.com/questions/27153166/typeerror-when-using-react-cannot-read-property-firstchild-of-undefined)

可能係turbolink關係，載入了二個不同版本的react。

我的暫時解決方法是在rails內的application.js暫時不用turbolink。將

```ruby
//= require turbolinks
//= require react
//= require react_ujs
```

變為

```ruby
//= require react
//= require react_ujs
```
