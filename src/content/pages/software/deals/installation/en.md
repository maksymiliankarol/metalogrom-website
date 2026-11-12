---
title: Installation
description: How to install and use Deals
---

The Deals app can be used in two ways for now. The first is in the browser, by visiting the [Metalogrom Deals](https://deals.metalogrom.com). The second is by installing it on your device as a Command Line Interface (CLI). Some may find this option better because the app is a bit faster that way, but you need to be comfortable with terminals and a little code.

---

## Linux and macOS

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | sh
```

This installs `deals` into `~/.local/bin`. If that directory isn't added to your `PATH` environment variable, the script tells you. To install somewhere else:

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | INSTALL_DIR=/usr/local/bin sh
```

(Writing to `/usr/local/bin` usually needs root, so use `sudo sh` at the end of that command.)

Check it worked:

```bash
deals version
```

To upgrade, run the same command again.

---

## Windows

Download `deals_windows_amd64.zip` from the
[latest release](https://github.com/maksymiliankarol/deals-cli/releases/latest),
unzip it, and put `deals.exe` in a folder added to your `PATH` environment variable.