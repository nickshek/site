---
title: 利用regular expression判斷URL是否為YouTube URL，且return youtube video ID
date: 2014-12-30
tags:
  - python
---

在以下的Stack Overflow網址，有人寫了一句相當強大的regular expression來完成該使命

stackoverflow : [jQuery Youtube URL Validation with regex](http://stackoverflow.com/questions/2964678/jquery-youtube-url-validation-with-regex/10315969#10315969)

```javascript
/**
 * JavaScript function to match (and return) the video Id
 * of any valid Youtube Url, given as input string.
 * @author: Stephan Schmitz eyecatchup@gmail.com
 * @url: http://stackoverflow.com/a/10315969/624466
 */
function ytVidId(url) {
  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return (url.match(p)) ? RegExp.$1 : false;
}
```

以下的程式碼用Python完成同樣功能 ，再抽一些較有代表性例子用作doctest :

```python
import re

def isYouTubeURL(youtube_url):
    """return the video Id of any valid Youtube Url as string

    >>> isYouTubeURL("https://www.youtube.com/watch?v=T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("https://www.youtube.com/watch?feature=youtu.be&v=T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("http://www.youtube.com/watch?v=T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("www.youtube.com/watch?v=T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("youtube.com/watch?v=T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("https://youtu.be/T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("http://youtu.be/T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("youtu.be/T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("www.youtube.com/embed/T2UW7VawmGI")
    'T2UW7VawmGI'
    >>> isYouTubeURL("")
    >>> isYouTubeURL("http://www.geekblog.tk/?v=T2UW7VawmGI")
    """
    youtube_regex = r"^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))(?P<YouTubeID>(\w|-){11})(?:\S+)?$"
    sreMatch = re.match(youtube_regex, youtube_url)
    return sreMatch.group("YouTubeID") if sreMatch else None

if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

假設將以下的Python程式碼儲存成youtube.py，執行 ```python youtube.py -v``` 便可以執行doctest了。
