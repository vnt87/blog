---
title: Google Drive File Stream alternative for Linux
description: Google Drive File Stream alternative for Linux
pubDate: '2021-02-16'
updatedDate: '2024-12-01T03:51:14.424Z'
heroImage: ''
categories:
  - linux
  - tips-tricks
tags: []
---

A cloud drive is more or less an essential part of everybody's workflow these days. For those utilizing Google's service like I am, then Drive File Stream (now renamed to Google Drive, again) is one of the first installer you run whenever you setup a new Windows or Mac OS system. Its biggest appeal comparing to a traditional sync client like Mega.nz or Dropbox is that it doesn't take up a shit ton of space on your own hard drive, because the files aren't actually synchronized with your computer. They are only downloaded on an on-access basis. Now this is not something that most people who's using Google's 15GB drive would be concerned about, but for people like me who's approaching 4TB, local synchronization is pretty much out of the question.

Google's lack of attention for a native Linux client for Drive File Stream has always been one of the major hurdles to people like me who were looking to migrate my entire workflow to Linux (along with Adobe's apps, but the recent rise of web based design tools like Figma has greatly mitigate my need on Adobe). Luckily, like everything else with Linux, when a multi billion dollar corporation fails to provide a tool, the open source community steps in and save the day.

Introducing [google-drive-ocamlfuse](https://astrada.github.io/google-drive-ocamlfuse/), more or less the closest you can get to Drive File Stream on Linux
