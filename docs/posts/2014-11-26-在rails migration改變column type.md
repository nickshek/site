---
title: 在rails migration改變column type
date: 2014-11-26
tags:
  - rails
---

假設我們要改變sub_anonrums table的title,將其欄位種類由:text改為:string方法如下:

1.在project下新增一個migration file

```bash
rails g migration change_sub_anonrums_title_format
```

2.移除migration 下的change 方法,改為使用up 和down方法,migration file 的source code 如下所示: \

```ruby
class ChangeSubAnonrumsTitleFormat < ActiveRecord::Migration
  def up
    change_column :sub_anonrums, :title, :string
  end

  def down
    change_column :sub_anonrums, :title, :text
  end
end
```

3.執行 rake db:migrate
