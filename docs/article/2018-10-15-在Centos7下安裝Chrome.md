---
title: 在Centos7下安裝Chrome
date: 2018-10-15
---

輸入以下指令

```bash
vi  /etc/yum.repos.d/google.repo
```

貼上以下內容

```bash
[google64]
name=Google - x86_64
baseurl=http://dl.google.com/linux/rpm/stable/x86_64
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```
之後再輸入

```bash
sudo yum install -y google-chrome-stable
```
