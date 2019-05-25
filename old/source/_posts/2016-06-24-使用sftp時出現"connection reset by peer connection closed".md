---
title: 使用sftp時出現"connection reset by peer connection closed"
categories:
    - linux
---
若新加的sftp帳戶發現，出現connection reset by peer connection closed的錯誤訊息，應該先用cat 查看/etc/rsyslog.conf了解找出出現
auth,authpriv.*　的行數，便清楚需要查看那個log file以獲取進一步的資訊。若系統是Centos，多數是查看/var/log/secure，ubuntu 則查看
/var/log/auth.log。

以下頁面清楚說明如何fix SFTP的問題，我遇到的情況是

```
sshd[12399]: fatal: bad ownership or modes for chroot directory component "/path/of/chroot/directory/"
```

解決方法是確保chroot的路徑的所有資料夾都是由root 擁有及所有path都是安全的。若有任何一個資料夾的權限是777，應該把資料夾改為775或755。

參考 : [https://wiki.archlinux.org/index.php/SFTP_chroot](https://wiki.archlinux.org/index.php/SFTP_chroot)
