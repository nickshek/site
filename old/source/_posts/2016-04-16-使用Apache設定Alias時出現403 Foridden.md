---
title: 使用Apache設定Alias時出現403 Foridden
categories:
    - apache
---
這個錯誤其實是好常見的 ，如果在apache 看見 access denied because search permissions are missing on a component of the path ，
即表示**根目錄至Alias 的目標資料夾**中任意一個資料夾沒有execute permission!例如:

如果你alias的目標資夾是 ```/usr/local/apache2/htdocs/foo``` ，請確保以下資料夾有execute permission

/
/usr/
/usr/local/
/usr/local/apache2/
/usr/local/apache2/htdocs/
/usr/local/apache2/htdocs/foo/

owner 無須設定是apache user
因此，解決方法如下

```
cd /usr/local/apache2/htdocs/foo

ls -la
chmod +x .
cd ..
# 重覆直至去到 /
```
