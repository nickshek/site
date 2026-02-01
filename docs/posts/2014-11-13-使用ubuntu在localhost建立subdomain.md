---
title: 使用ubuntu在localhost建立subdomain
date: 2014-11-13
tags:
  - apache
---

有好多時候，我們需要在localhost測試多個project無論是(php,Ruby,Python的項目)。在localhost建立subdomain可以讓我們在同一主機測試不同項目:

php項目1的URL : http://localhost/project1/

php項目2的URL : http://localhost/project2/

我們的最終目的是改變以上的項目的URL為:

php項目1的URL : http://project1.localhost/

php項目2的URL : http://project2.localhost/

1.首先修改/etc/hosts:

```bash
sudo nano /etc/hosts
```

  在/etc/hosts加入以下原始碼:

```
127.0.0.1       project1.localhost
127.0.0.1       project2.localhost
```

2.在/etc/apache2/sites-available/新增project1和project2的configure file:

  project1.conf

```apache
<VirtualHost *:80>
  # The ServerName directive sets the request scheme, hostname and port that
  # the server uses to identify itself. This is used when creating
  # redirection URLs. In the context of virtual hosts, the ServerName
  # specifies what hostname must appear in the request's Host: header to
  # match this virtual host. For the default virtual host (this file) this
  # value is not decisive as it is used as a last resort host regardless.
  # However, you must set it for any further virtual host explicitly.
  ServerName project1.localhost

  ServerAdmin webmaster@localhost
  DocumentRoot /var/www/html/project1

  # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
  # error, crit, alert, emerg.
  # It is also possible to configure the loglevel for particular
  # modules, e.g.
  #LogLevel info ssl:warn

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined

  # For most configuration files from conf-available/, which are
  # enabled or disabled at a global level, it is possible to
  # include a line for only one particular virtual host. For example the
  # following line enables the CGI configuration for this host only
  # after it has been globally disabled with "a2disconf".
  #Include conf-available/serve-cgi-bin.conf
</VirtualHost>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

  project2.conf

```apache
<VirtualHost *:80>
    # The ServerName directive sets the request scheme, hostname and port that
    # the server uses to identify itself. This is used when creating
    # redirection URLs. In the context of virtual hosts, the ServerName
    # specifies what hostname must appear in the request's Host: header to
    # match this virtual host. For the default virtual host (this file) this
    # value is not decisive as it is used as a last resort host regardless.
    # However, you must set it for any further virtual host explicitly.
    ServerName project2.localhost

    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/project2

    # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
    # error, crit, alert, emerg.
    # It is also possible to configure the loglevel for particular
    # modules, e.g.
    #LogLevel info ssl:warn

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    # For most configuration files from conf-available/, which are
    # enabled or disabled at a global level, it is possible to
    # include a line for only one particular virtual host. For example the
    # following line enables the CGI configuration for this host only
    # after it has been globally disabled with "a2disconf".
    #Include conf-available/serve-cgi-bin.conf
</VirtualHost>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

3.用a2ensite令該二個virtual hosts的設定生效:

```bash
sudo a2ensite /etc/apache2/sites-available/project1.conf
sudo a2ensite /etc/apache2/sites-available/project2.conf
```

4.輸入 ```sudo service apache2 restart``` 重新啟動apache2
