---
title: "Failed to listen on localhost:8000 (reason: Address already in use)"
date: 2015-11-15
tags:
  - php
---

若使用 ```php -S localhost:8000```來進行development時，沒有使用control +C 結束程序，便會發生該問題，因此可以建立以下bashscript結束名為"php"的proceses
```bash
#!/bin/bash
pid=$(ps -fe | grep '[p]hp' | awk '{print $2}')
if [[ -n $pid ]]; then
    kill $pid
else
    echo "Does not exist"
fi
```
