---
title: Friendly ID中文問題
categories:
    - rails
---
主要在Gemfile加下以下指令以安裝 babosa

```ruby
gem "babosa"
```

再在需要中文URL的Model下override normalize_friendly_id方法:

```ruby
def normalize_friendly_id(input)
  input.to_s.to_slug.normalize.to_s
end
```

以下網誌有詳細解釋:

使用 Babosa 配合 Friendly_id 解決中文網址問題 : [http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/](http://blog.roachking.net/blog/2014/01/17/babosa-friendly-id-solve-chinese-problems/)
