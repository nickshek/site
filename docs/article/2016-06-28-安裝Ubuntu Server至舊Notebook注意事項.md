---
title: 安裝Ubuntu Server至舊Notebook注意事項
date: 2016-06-28
tags:
  - Ubuntu
---

若家中有Notebook 不再使用，用來安裝Ubuntu Server 是一個好主意。Ubuntu Server 的下載連結如下:

[http://www.ubuntu.com/download/server](http://www.ubuntu.com/download/server)

下載完iso 後便可以參考以下連結去建立USB安裝碟

Windows: [http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows)

Ubuntu: [http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu)

安裝後，為了避免開機後合上Notebook後會進入睡眠狀態，可以修改```/etc/systemd/logind.conf```
加入```HandleLidSwitch=ignore``` 。
最後執行```sudo service restart systemd-logind```
