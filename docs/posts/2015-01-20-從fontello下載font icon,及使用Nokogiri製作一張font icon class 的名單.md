---
title: "從http://fontello.com/下載font icon,及使用Nokogiri製作一張font icon class 的名單"
date: 2015-01-20
tags:
  - ruby
---

從[http://fontello.com/](http://fontello.com/)下載font icon，zip檔入面有demo.html，列出如何使用fontello icon ，我的目的是利Nokogiri在rake task以ruby list 形式列印出所有class name，以下是該rake task的程式碼 :

```ruby
namespace :dev do
  task :font_icon_list do
    text = open(Rails.root.join('doc', 'fontello-c340d124','demo.html')).read
    html_doc = Nokogiri::HTML(text)
    font_icon_list = html_doc.xpath(%{//div[@class="row"]//div//span[@class="i-name"]//text()})
    font_icon_list_code = %{["#{font_icon_list.to_a.join(%{","})}"]}
    puts font_icon_list_code
  end
end
```

最後執行rake task輸出結果

```bash
rake dev:font_icon_list > result.txt
```
