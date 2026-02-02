---
title: 在ubuntu移除圖片的metadata
date: 2014-12-07
tags:
  - ubuntu
---

1.安裝exiftool:

```bash
sudo apt-get install libimage-exiftool-perl
```

2.讀取圖片資訊

```bash
exiftool example.jpg
```

3.移除圖片資訊
```bash
exiftool -all= example.jpg
```

4.原本的圖片會保留成example.jpg_original
