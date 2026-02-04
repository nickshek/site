---
title: Securing the Host Machine for openclaw Installation
date: 2026-02-04
tags:
  - openclaw
  - security
  - hardening
---

When installing openclaw, it is important to ensure that the host machine is properly secured to prevent unauthorized access and potential vulnerabilities. Here are some steps to enhance the security of the host machine when installing openclaw:

## Install on a Dedicated Machine

Use a dedicated machine for openclaw installation to minimize the attack surface and isolate it from other services.

## Install fail2ban

On my raspberry pi, I installed fail2ban to protect against brute-force attacks. You can install it using the following commands:

```bash
sudo apt-get update
sudo apt-get install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
sudo systemctl status fail2ban
```

## Restrict Telegram Bot Access

If you are using a Telegram bot with openclaw, ensure that the bot is configured to only accept messages from authorized users. e.g.

```
$ cat ~/.openclaw/openclaw.json
    ...
    "telegram": {
      "enabled": true,
      "dmPolicy": "allowlist",
      "botToken": "<YOUR_BOT_TOKEN>",
      "allowFrom": [
        "<YOUR_TELEGRAM_USER_ID>"
      ],
      "groupPolicy": "allowlist",
      "streamMode": "partial"
    }
    ...
```

## Regular Updates

Keep the host machine's operating system and all installed packages up to date with the latest security patches.

On the ubuntu system, we can also enable automatic security updates by installing the unattended-upgrades package:

```bash
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```
## Run security Audits

Regularly run security audits using tools like Lynis or OpenVAS to identify and address potential vulnerabilities.

``bash
openclaw security audit --deep
```

For the VPS installation, you may also want to have a look on the X post: https://x.com/BitsagaRob/status/2015757134760202469
