---
title: Bootstrap Studio 5.5.1 running on Linux
description: Bootstrap Studio 5.5.1 running on Linux
pubDate: '2021-02-04'
updatedDate: '2024-12-01T03:51:14.404Z'
heroImage: ''
categories:
  - linux
  - tips-tricks
tags: []
---

Just installed Manjaro KDE Plasma today after Deepin 20 totally let me down. One of my worries when switching to Manjaro is software availability (or lack thereof). Most pre-packaged softwares on Linux comes in either Debian flavor (.deb) or Red Hat flavor (.rpm), and Manjaro is well, neither. It's Arch-based.

Luckily, its user repo is pretty massive. I was able to find almost everything I wanted on AUR (Arch User Repository), and pretty much everything is up-to-date, unlike Deepin's shitty 'App Store'. Proprietary softwares however, are harder to come by.

One of them is Bootstrap Studio.

I was super relieved however, to learn that the developer chose to release the linux binary as an AppImage as opposed to DEB or RPM. Which means it's super convenient to work with.

Since it's electron-based, it basically uses the same binaries for Windows, OS X and Linux. So if you wanted to, you can replace `app.asar` with the same file from another platform and it would just works™.

Why would you want to do that? Well if you're here then chances are you already know why.

What you basically want to do is grab the AppImage, run it with the flag `--appimage-extract`, which will extract everything to a folder called `squashfs-root.` Just go in there, replace the file, then repack everything with the command `appimagetool -v squashfs-root` and you will have what you want.

Just don't tell anybody about this, m'kay?
