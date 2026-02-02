---
title: 執行Laravel PHPUnit 時出現"Maximum function nesting level of '100' reached, aborting!"
date: 2016-07-10
tags:
  - Laravel 5
---

執行Laravel Project的PHPUnit 若出現
```
Maximum function nesting level of '100' reached, aborting!
```

而在其他電腦運行時又沒有問題，解決方法是相當容易。先在terminal執行
```bash
php --ini
```
確認php.ini 路徑，之後在php.ini加入
```
xdebug.max_nesting_level=300
```

即可。
