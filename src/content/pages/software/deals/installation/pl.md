---
title: Instalacja
description: Jak zainstalować i używać Deals
---

Aplikacja Deals może być na razie używana na dwa sposoby. Pierwszy to przeglądarka: wystarczy wejść na stronę [Metalogrom Deals](https://deals.metalogrom.com). Drugi to instalacja na urządzeniu jako interfejs wiersza poleceń (CLI). Niektórym ta opcja może odpowiadać bardziej, ponieważ aplikacja jest trochę szybsza, ale trzeba się czuć swobodnie z obsługą terminala. Nie każdy to lubi.

---

## Linux i macOS

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | sh
```

To polecenie instaluje `deals` w katalogu `~/.local/bin`. Jeśli ten katalog nie jest dodany do zmiennej środowiskowej `PATH`, skrypt poinformuje cię o tym. Aby zainstalować w innym miejscu:

```bash
curl -fsSL https://deals-api.metalogrom.com/install-cli | INSTALL_DIR=/usr/local/bin sh
```

(Zapis do `/usr/local/bin` zwykle wymaga uprawnień administratora, więc na końcu tego polecenia użyj `sudo sh`.)

Sprawdź, czy wszystko działa:

```bash
deals version
```

Aby zaktualizować aplikację, uruchom to samo polecenie ponownie.

---

## Windows

Pobierz plik `deals_windows_amd64.zip` z
[najnowszego wydania](https://github.com/maksymiliankarol/deals-cli/releases/latest),
rozpakuj go i umieść `deals.exe` w folderze dodanym do zmiennej `PATH`.