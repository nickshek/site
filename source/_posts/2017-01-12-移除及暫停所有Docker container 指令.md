---
title: 移除及暫停所有Docker container 指令
categories:
    - Docker
---
怕自己忘記了，放上這個blog。這個指令在開發Docker Image 時還是經常使用的。

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
