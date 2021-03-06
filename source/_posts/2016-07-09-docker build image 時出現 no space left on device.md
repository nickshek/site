---
title: docker build image 時出現 no space left on device
categories:
    - docker
---
若發現明明電腦有好多空間，但是運行docker build時仍出現 no space left on device。則可以先運行docker info，若確認出現
Storage Driver: devicemapper                              ，則表示你的image 過了Base Device Size                  。
解決方法是找出docker.service，找出
```bash
ExecStart=/usr/bin/docker daemon -H fd://                                                                         
```
變為

```bash
ExecStart=/usr/bin/docker daemon --storage-opt dm.basesize=20G -H fd://                                                                         
```

之後請先參考自行備份[https://linuxconfig.org/docker-container-backup-and-recovery](https://linuxconfig.org/docker-container-backup-and-recovery)原有的container

再執行
```bash
systemctl            daemon-reload
service docker stop
service docker start
```
之後新加的image 就會增加了base size!
