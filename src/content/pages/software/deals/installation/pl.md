---
title: Instalacja
description: Jak zainstalować i używać Deals
---

Deals to aplikacja działająca w wierszu poleceń (CLI). Do jej obsługi potrzebna jest swoboda w pracy z terminalem.

## Linux i macOS

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | sh
```

To polecenie instaluje `deals` w katalogu `~/.local/bin`. Jeśli tego katalogu nie ma w zmiennej `PATH`, skrypt da ci znać. Aby zainstalować w innym miejscu:

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | INSTALL_DIR=/usr/local/bin sh
```

Zapis do `/usr/local/bin` zwykle wymaga uprawnień administratora, więc na końcu tego polecenia użyj `sudo sh`.

Sprawdź, czy wszystko działa:

```bash
deals version
```

Aby zaktualizować aplikację, uruchom to samo polecenie jeszcze raz.

## Windows

Pobierz plik `deals_windows_amd64.zip` z
[najnowszego wydania](https://github.com/maksymiliankarol/deals-cli/releases/latest),
rozpakuj go i umieść `deals.exe` w folderze, który jest w zmiennej `PATH`.