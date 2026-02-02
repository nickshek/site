---
title: 在Linux terminal列輸出己整理的JSON
date: 2015-01-11
tags:
  - linux
---

在terminal 輸入 ```curl http://it-ebooks-api.info/v1/search/python ``` ，輸出是一堆壓縮了的JSON。

只要輸入 ```curl http://it-ebooks-api.info/v1/search/python | python -mjson.tool``` ，便能輸出整理好的JSON了。
