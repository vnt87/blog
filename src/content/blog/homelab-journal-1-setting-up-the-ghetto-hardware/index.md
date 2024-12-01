---
title: 'Homelab Journal #1: Setting up the ghetto hardware'
description: 'Homelab Journal #1: Setting up the ghetto hardware'
pubDate: '2019-10-13'
updatedDate: '2024-12-01T03:51:14.427Z'
heroImage: ''
categories:
  - randomness
tags: []
---

My often spend my scarce free time teaching myself new things (when I don't feel like DIYing useless shits). I've spent the last few weekends teaching myself around Google Cloud platform (and later on, Amazon Web Services). What I learned most from those experiences is that: my knowledge regarding networking and virtualization was close to non-existent and if anything, I need to go back to practice on a local environment where I have access to all the hardwares before I even think about dirtying my hands with cloud implementations.

And that's how I came to join _r/HomeLab_ and subsequently _r/HomeServer_. Now I've been told before that these subs will more likely discourage you from building your own homelab rather than encouraging it, as they will make _whatever_ you build feel puny in comparison, but I didn't expect some people to build a freaking datacenter in their garages. While many of those guys got the hardwares for free from work, I know some of those people dropped hundred of thousands dollar into hardware purchases. Homelabbing is, in a way, similar to photography or music or even toy collection, once it become a hardcore hobby it gets rather expensive.

As a photographer I don't feel like I can afford to sink my wallet into yet another expensive hobby, and as such I decided to do it my way, the thrifty, cheapskate way.

Meet my Nam Vu home server, the cheapest, most ghetto machine you can imagine:

Hardware specs:

• Intel Core2Quad Q6600 @3.0Ghz (tapemodded) ~$5

• Lenovo MTQ45NK Motherboard ~$15

• 4x2GB DDR3 1333Mhz Memory ~$12

• 320GB Toshiba HDD ~$13

This machine will be dual booting Proxmox 6 and Windows 10 LTSC.

Why bother having Windows when you can have it running under Proxmox you ask? Well I need Windows for a lot of different applications (like sync clients for many cloud storage services), plus the Remote Desktop feature blows TeamViewer and AnyDesk out of the water. And for those applications I want the best performance I can get, which is hardly achievable if you run it under a hypervisor with this ghetto hardware.

Now Proxmox doesn't recommend dual booting with anything, in fact its default installer ISO doesn't even include an option for you to partition your drive, so if you want a dual boot configuration your only hope is to setup Debian to run along side Windows first, and then installing Proxmox VE on top of Debian. I will be covering the steps in my next posts, they are fairly simple to setup at first but there's a couple of issues that you might run into along the way.
