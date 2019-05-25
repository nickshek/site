---
title: 把現有的project folder變為git repository
categories:
    - git
---
首先，在localhost建立一個假project

```bash
cd ~/
mkdir project1
cd project1/
echo "HelloWorld!" >> test.txt
```

驗證是否確實將Hello World 寫入test.txt

```bash
cat test.txt
```

建立git repository

```bash
git init
```
在remote host 建立bare repository,以下的blog詳細解釋了什麼是bare git repository

[http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/)

```bash
cd ~/
mkdir project1.git
cd project1.git/
git init --bare
```

在localhost,

```bash
cd ~/project1
```

新增remote origin url

```bash
git remote add origin ssh://<username>@<ip address>/<path to bare repo>/project1.git
```

萬一新增的url 有錯，可以透過下列指令更新remote origin url

```bash
git remote set-url origin <url>
```

最后，輸入我們最熟悉的git指令

```bash
git push origin master
```
