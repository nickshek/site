---
title: 思考在linux一次性重新命名多個file的問題
categories:
    - Linux
---
說實話，作為一個偏好使用Linux平台的Developer， 或會經常遇到一次性命名多個File的問題。
如果File數目不算多的話，還可以透過mv command 一一執行。
但是如果遇上成千隻呢?那肯定要想一個較有效率的方法!
逐一人手命名檔案不合理呢!

現在假設我們要把檔案名稱含有"a_"的名字改為"abc_"

```bash
shek@shek-pc:~/folder$ ls -la
total 8
drwxrwxr-x   2 shek shek 4096 Oct  1 01:53 .
drwxr-xr-x 103 shek shek 4096 Oct  1 01:30 ..
-rw-rw-r--   1 shek shek    0 Oct  1 01:30 a_b.txt
-rw-rw-r--   1 shek shek    0 Oct  1 01:30 a_c.txt
-rw-rw-r--   1 shek shek    0 Oct  1 01:53 b.txt
```

一般來說命名多個檔案的linux command 會類似這樣:
```bash
for FILENAME in *; do mv $FILENAME Unix_$FILENAME; done
```
但我自已就想到用ls + awk + sed 解決這個問題，awk 和sed 非常實用，小弟真的要花點時間再深入看看awk 和 sed 有什麼其他功能...首先是要Filter我們想要的File名
```bash
shek@shek-pc:~/folder$ ls -la | grep a | awk '{print $9}'

a_b.txt
a_c.txt

```

之後便行for loop了，為了安全起見還是不直接執行，列印了想行的command再執行
```bash
shek@shek-pc:~/folder$ for i in $(ls -la | grep a | awk '{print $9}'); do echo mv $i $(echo $i|sed 's/a_/abc_/g') \&\&; done
mv a_b.txt abc_b.txt &&
mv a_c.txt abc_c.txt &&
```

之後執行以下command 便完成了!
```bash
mv a_b.txt abc_b.txt &&
mv a_c.txt abc_c.txt
```

```bash
shek@shek-pc:~/folder$ ls -la
total 8
drwxrwxr-x   2 shek shek 4096 Oct  1 02:02 .
drwxr-xr-x 103 shek shek 4096 Oct  1 01:30 ..
-rw-rw-r--   1 shek shek    0 Oct  1 01:30 abc_b.txt
-rw-rw-r--   1 shek shek    0 Oct  1 01:30 abc_c.txt
-rw-rw-r--   1 shek shek    0 Oct  1 01:53 b.txt
```
