---
title: Setting Up Raspberry Pi 5 with Sipeed Maix4-HAT + Qwen2.5-7B-Instruct for AI Inference
date: 2026-02-24
tags:
  - Raspberry Pi
  - AI
  - LLM
---

Recently, I got my hands on the Sipeed Maix4-HAT. I decided to set it up on my Raspberry Pi 5 to run the Qwen2.5-7B-Instruct model for AI inference. Here's a step-by-step guide on how I did it.

## Assumptions

- You have a Raspberry Pi 5 with Raspberry Pi OS installed.
- You have connected the Sipeed Maix4-HAT to your Raspberry Pi 5.
- You have a 128GB+ SD card for the OS and model storage.

## Driver Setup

### Step 1: Update the System

First, I made sure to update my Raspberry Pi 5 to the latest version of Raspberry Pi OS. I ran the following commands in the terminal:

```bash
sudo apt update
sudo apt upgrade -y
```

### Step 2: Enable PCIe x1 Interface

Next, enable Raspberry Pi 5's PCIe x1 interface:

```bash
sudo raspi-config
```

Navigate to **6 Advanced Options → A8 PCIe Speed → Select Yes** and enable it.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  1 System Options       Configure system settings                            │
│  2 Display Options      Configure display settings                           │
│  3 Interface Options    Configure connections to peripherals                 │
│  4 Performance Options  Configure performance settings                       │
│  5 Localisation Options Configure language and regional settings             │
│  6 Advanced Options     Configure advanced settings                          │
│  8 Update               Update this tool to the latest version               │
│  9 About raspi-config   Information about this configuration tool            │
└──────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  A1 Expand Filesystem       Ensures that all of the SD card is available     │
│  A2 Network Interface Names Enable/disable predictable network i/f names     │
│  A3 Network Proxy Settings  Configure network proxy settings                 │
│  A4 Boot Order              Choose boot device priority (SD/net/USB/NVMe)    │
│  A5 Bootloader Version      Selects the latest or factory default bootloader │
│  A6 Beta Access             Select beta or release software repository       │
│  A7 Wayland                 Switch between X and Wayland backends            │
│  A8 PCIe Speed              Set PCIe x1 port speed                           │
│  A9 Network Install UI      Select display of bootloader network install UI  │
│  A10 Libliftoff             Enable/disable libliftoff hardware overlays      │
│  A11 Shutdown Behaviour     Configure shutdown behavior                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

After enabling the PCIe x1 interface, reboot your Raspberry Pi 5 to apply the changes.

### Step 3: Verify Accelerator Card Detection

After rebooting, verify that the accelerator card is detected with `lspci`:

```bash
$ lspci
0001:00:00.0 PCI bridge: Broadcom Inc. and subsidiaries BCM2712 PCIe Bridge (rev 30)
0001:01:00.0 Multimedia video controller: Axera Semiconductor Co., Ltd Device 0650 (rev 01)
0002:00:00.0 PCI bridge: Broadcom Inc. and subsidiaries BCM2712 PCIe Bridge (rev 30)
0002:01:00.0 Ethernet controller: Raspberry Pi Ltd RP1 PCIe 2.0 South Bridge
```

### Step 4: Install AXCL Software

After PCIe detection, install the AXCL package for model acceleration. In my case, I was unable to install the driver using `sudo apt install axcl_host_aarch64_V3.6.2_20250603154858_NO4873.deb` from the provided `AIDemos.tar.zst`. Instead, I downloaded the deb from [AXCL Runtime Releases](https://github.com/AXERA-TECH/axcl-runtime/releases) and installed it with the following commands:

```bash
wget https://github.com/AXERA-TECH/axcl-runtime/releases/download/V3.10.2/axcl_host_aarch64_V3.10.2_20251111020143_NO5046.deb
sudo apt install ./axcl_host_aarch64_V3.10.2_20251111020143_NO5046.deb
```

Reboot the Pi, then verify the installation with `axcl-smi`:

```bash
$ axcl-smi 
+------------------------------------------------------------------------------------------------+
| AXCL-SMI  V3.10.2_20251111020143                                Driver  V3.10.2_20251111020143 |
+-----------------------------------------+--------------+---------------------------------------+
| Card  Name                     Firmware | Bus-Id       |                          Memory-Usage |
| Fan   Temp                Pwr:Usage/Cap | CPU      NPU |                             CMM-Usage |
|=========================================+==============+=======================================|
|    0  AX8850                    V3.10.2 | 0001:01:00.0 |                148 MiB /      945 MiB |
|   --   41C                      -- / -- | 2%        0% |                 18 MiB /     7040 MiB |
+-----------------------------------------+--------------+---------------------------------------+

+------------------------------------------------------------------------------------------------+
| Processes:                                                                                     |
| Card      PID  Process Name                                                   NPU Memory Usage |
|================================================================================================|
```

## Installing Qwen2.5-7B-Instruct

### Step 1: Clone the Model Repository

First, install `git-lfs` if you don't have it:

```bash
sudo apt install git-lfs
```

Then clone the model from Hugging Face:

```bash
mkdir ~/Code
cd ~/Code
git clone https://huggingface.co/AXERA-TECH/Qwen2.5-7B-Instruct
```

### Step 2: Set Up Python Environment

Install Miniforge3 for Python environment management:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Create an `env.yml` file for the conda environment:

```yaml
name: llm
channels:
  - conda-forge
dependencies:
  - python=3.12
  - pip
  - pip:
    - transformers==5.2.0
    - jinja2==3.1.6
```

Install `screen` for session management (temporary — we will migrate to a systemd service later):

```bash
sudo apt install screen
```

### Step 3: Run the Model

Create the conda environment and run the tokenizer:

```bash
source ~/.bashrc
conda env create -f env.yml
screen -S llm
conda activate llm
cd ~/Code/Qwen2.5-7B-Instruct/
python qwen2.5_tokenizer_uid.py
```

In another terminal, execute the following to start the inference:

```bash
chmod u+x run_qwen2.5_7b_ctx_int4_axcl_aarch64.sh
chmod u+x main_axcl_aarch64
./run_qwen2.5_7b_ctx_int4_axcl_aarch64.sh
```

Example output:

```
prompt >> Hello World
[I][                      SetKVCache][ 614]: prefill_grpid:2 kv_cache_num:128 precompute_len:21 input_num_token:10
[I][                      SetKVCache][ 617]: current prefill_max_token_num:896
[I][                             Run][ 855]: input token num : 10, prefill_split_num : 1
[I][                             Run][ 887]: input_num_token:10
[I][                             Run][1016]: ttft: 930.97 ms
Hello! Welcome. Is there anything specific you'd like to know or discuss today?

[N][                             Run][1168]: hit eos,avg 4.26 token/s

prompt >> Who are you
[I][                      SetKVCache][ 614]: prefill_grpid:2 kv_cache_num:128 precompute_len:48 input_num_token:11
[I][                      SetKVCache][ 617]: current prefill_max_token_num:896
[I][                             Run][ 855]: input token num : 11, prefill_split_num : 1
[I][                             Run][ 887]: input_num_token:11
[I][                             Run][1016]: ttft: 929.71 ms
I'm Qwen, a large language model created by Alibaba Cloud. How can I assist you today?

[N][                             Run][1168]: hit eos,avg 4.30 token/s
```

## Conclusion

The Sipeed Maix4-HAT with the AX650N NPU delivers approximately **4.3 tokens/second** for Qwen2.5-7B-Instruct inference on the Raspberry Pi 5. While not blazingly fast, it's impressive for a low-power edge device and suitable for local AI experimentation.

## References

- [Sipeed Maix4-HAT Wiki](https://wiki.sipeed.com/hardware/en/maixIV/m4chat/pcie-slaveboard.html#Installation)
- [AXCL Runtime Releases](https://github.com/AXERA-TECH/axcl-runtime/releases)
- [Qwen2.5-7B-Instruct on Hugging Face](https://huggingface.co/AXERA-TECH/Qwen2.5-7B-Instruct)
