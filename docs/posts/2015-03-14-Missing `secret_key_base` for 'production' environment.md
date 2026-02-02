---
title: Missing `secret_key_base` for 'production' environment, set this value in `config/secrets.yml`
date: 2015-03-14
tags:
  - rails
---

執行```rake secret``` 在.bashrc 或在apache 使用SetEnv指令 設定環境變數 SECRET_KEY_BASE 就完成了。不建議把 secret token 設定在 config/secrets.yml
