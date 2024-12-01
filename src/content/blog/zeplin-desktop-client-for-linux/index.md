---
title: Zeplin Desktop client for Linux
description: Zeplin Desktop client for Linux
pubDate: '2018-11-10'
updatedDate: '2024-12-01T03:51:14.495Z'
heroImage: ''
categories:
  - linux
  - tips-tricks
tags:
  - deepin
  - figma
  - linux
  - natifier
  - native-zeplin
  - zeplin
  - zeplin-deepin
  - zeplin-linux
---

As mentioned in one of my [previous posts,](https://namvu.net/2018/10/30/installing-figma-client-on-deepin-linux-15-7-desktop/) we now have an excellent tool for screen design to work on right there on Linux. But what about design handoff? With Figma, normally you have 2 choices for handoff: one is Avocode, the other is Zeplin. Most people would prefer Zeplin since Avocode is a subscription based abomination. But there's one problem for Linux screen designer: Zeplin does not have a desktop client for Linux. Now this isn't much of an issue like other softwares because they have a webapp, but you can't integrate Figma with the webapp, unfortunately.

After looking around, I realize Zeplin, like many other great web-based apps, was built on top of the execellnt ElectronJS framework, that means porting it is fairly trivial. After murking around, I came up with this, let me know if it works:

#### [Download zeplin-linux-x64.tar.gz](https://drive.google.com/open?id=1aNEzGFXTPJ8d7UGywEUjsK8XWsa9lw71)

Made with nativefier

So now that we've managed to make desktop client for both Figma and Linux, it should be trivial to integrate them right? Well not really, turns out the folks over at Figma currently only has the integration option enabled for their Windows and Mac client. If you're a designer working on Linux right now, and need Figma & Zeplin integration, consider spamming their support blog for this feature. I mean, we did that hard part, creating the desktop clients for them, right? All they need to do now is enable integration between the 2 apps.
