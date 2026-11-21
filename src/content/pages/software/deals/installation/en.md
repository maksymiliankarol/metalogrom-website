---
title: Installation
description: How to install and use Deals
---

Deals is a command line app (CLI). You'll need to be comfortable with a terminal to use it.

## Linux and macOS

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | sh
```

This installs `deals` into `~/.local/bin`. If that directory isn't in your `PATH`, the script will tell you. To install somewhere else:

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | INSTALL_DIR=/usr/local/bin sh
```

Writing to `/usr/local/bin` usually needs root, so use `sudo sh` at the end of that command.

Check that it worked:

```bash
deals version
```

To upgrade, run:

```bash
deals update
```

It installs the latest version into the folder where `deals` currently lives. If that folder needs root (like `/usr/local/bin`), run `sudo deals update`.

`deals` also checks for a new version about once a day and prints a notice in your terminal when one is available.

## Windows

Download `deals_windows_amd64.zip` from the
[latest release](https://github.com/maksymiliankarol/deals-cli/releases/latest),
unzip it, and put `deals.exe` in a folder that's in your `PATH`.

To upgrade, download the zip again and replace `deals.exe`.