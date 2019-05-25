---
title: 在Cento 7下使用Cisco AnyConnect Secure Mobility Client
---

若你只有windows 或 mac os 版本的Cisco AnyConnect Secure Mobility Client，而想在Centos 下使用和Cisco AnyConnect Secure Mobility Client功能相同的軟件，
可以考慮安裝openconnet

```bash
sudo yum install openconnect
```

使用方式:

```bash
sudo openconnect <vpn ip>
```

輸入username + password即可


留意到resolv.conf 更新了

```bash
sudo cat /etc/resolv.conf
```

按ctrl + c 即可斷開VPN連接
