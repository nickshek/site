---
title: Setup Raspberry Pi 5 with Tailscale
date: 2026-03-08
tags:
  - Raspberry Pi
  - Tailscale
---

In this article, I will guide you through the process of setting up Tailscale on a new Raspberry Pi 5 server. Tailscale is a secure VPN service that allows you to connect your devices together over the internet as if they were on the same local network.

Use Cases for Tailscale on Raspberry Pi 5:

- Grafana dashboard for monitoring your home network + VPS servers

To set up Tailscale on your Raspberry Pi 5, follow these steps:

First, you need to install Tailscale on your Raspberry Pi 5. You can do this by running the following command:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

After the installation is complete, you need to authenticate your Raspberry Pi 5 with your Tailscale account. Run the following command:

```bash
sudo tailscale up
```

This command will prompt you to log in to your Tailscale account and authorize the device. Follow the instructions in the terminal to complete the authentication process.

Once your Raspberry Pi 5 is connected to Tailscale, you can access it from any other device that is also connected to your Tailscale network. You can find the IP address of your Raspberry Pi 5 by running the following command:

```bash
tailscale ip
```

You can use this IP address to connect to your Raspberry Pi 5 from other devices on your Tailscale network, allowing you to access services running on your Raspberry Pi 5 securely from anywhere in the world.

To Enable Tailscale to start on boot, run the following command:

```bash
sudo systemctl enable tailscaled
```