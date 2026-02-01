---
title: "git://github.com/reactjs/react-rails.git (at master) is not yet checked out. Run `bundle install` first."
date: 2015-01-26
tags:
  - rails
---

根據[https://github.com/bundler/bundler/blob/master/ISSUES.md](https://github.com/bundler/bundler/blob/master/ISSUES.md)，解決方是執行以下程式碼，重新安裝 dependencies :

```bash
# remove user-specific gems and git repos
rm -rf ~/.bundle/ ~/.gem/bundler/ ~/.gems/cache/bundler/

# remove system-wide git repos and git checkouts
rm -rf $GEM_HOME/bundler/ $GEM_HOME/cache/bundler/

# remove project-specific settings
rm -rf .bundle/

# remove project-specific cached gems and repos
rm -rf vendor/cache/

# remove the saved resolve of the Gemfile
rm -rf Gemfile.lock

# uninstall the rubygems-bundler and open_gem gems
rvm gemset use global # if using rvm
gem uninstall rubygems-bundler open_gem

# try to install one more time
bundle install
```
