---
title: My ghetto $40 home cloud server/media center setup
description: My ghetto $40 home cloud server/media center setup
pubDate: '2019-08-14'
updatedDate: '2024-12-01T03:51:14.451Z'
heroImage: ''
categories:
  - tips-tricks
tags:
  - awesomeness
  - ddr3-memories
  - dropbox
  - fileserver
  - ghetto-fileserver
  - google-drive
  - google-file-stream
  - linux
  - megasync
  - namvu
  - nas
  - network-attached-storage
  - q6600
  - tonido
  - ubuntu
  - vunam
  - zoho-docs
---

So I have a bunch of old hard drives laying around. About 5-6 different hard drives of various capacities ranging from 1TB to 2TB, not counting the 2.5" drives. Looking at that pile, naturally the first thing that comes to mind is building a NAS. I was going to get a cheap Buffalo NAS for around $50 but then I realized I'd also need it to double as a workstation since I do need (I think 'need' is the right word) a computer in my workshop

Here's the parts I used:

**Hardware Setup:**

**Mobo: Lenovo MTQ45MK \-est. $15** _| salvaged from an old ThinkCentre M58, what I like is that unlike most OEM PCs, this mobo actually has 4 RAM slots, making it a lot cheaper to add more memories since 2GB sticks are dirt cheap._

**CPU: Intel Quad Q6600 \-est. $8** | _probably the best bang for the buck CPU you can get for socket 775, a quad-core processor that goes for under $10, with an amazing overclocking head room (not that we are going to be doing any OCing, but it's nice the have the option)_

**Memories: (x4) Kingmax 2GB DDR3 1333Mhz \-est. $4/ea** _| DDR3 memories are cheaper than dirt these days, plus you most likely have stick or two already lying around somewhere. I already 2 sticks so I only needed to order 2 more. If you want to meet FreeNAS minimum requirements, this is probably the cheapest way get at it, at $16 for 8GB._

<!--more-->

**PSU: Dell 350W \-est. $8** | _salvaged from my old XPS 8500 tower, its only down size is the very short CPU power cable, but luckily I got a spare extension laying around. I'd prefer to use the M58's 260W if I had it, as that is still more than enough for our usage, but alas I have to make do with what I have._

**HDDs: 4TB \-est. N/A** _| as mentioned above, the reason we're building this server is because I have a lot of old hard drives lying around, including a Hitachi Deskstar 1TB, a Seagate 1.5TB, a Western Digital Green 2TB and a few smaller drives. Many of these already had bad sectors so it's not possible to price them correctly. I'm sure if you're building a NAS you must've had a few HDDs laying around already. If not, the price for traditional persistent storage are dirt cheap these days._

**Case \-est. FREE** _| you could barely call this case a_ 

**Software setup:**

**Windows 7 64-bit \-est. FREE** _| this hardware actually is capable of running Win10 but I'm not a big fan of the telemetry, not because of any ethical reason or anything, I just think any unnecessary services running in the background would consume more energy. If you wondering why I chose Windows instead of Linux, which is the more conventional choice for fileservers, the answer is simple: sync clients. I use a lot of different cloud services, like Google Drive, SugarSync, Mega.nz, Dropbox, Zoho Docs, Tencent Weiyun, Baidu Wangpan... you name it, I use it. Not all of them have sync clients for anything other than Windows. Sure there's workarounds to get it work on Linux for each of them, but I simply don't have time to poke around to get them to work. Windows simply plug and play, that's what I need._

**Tonido Home Server \-est. FREE** _| best all around software to setup a home server with remote access. Far easier to setup than NextCloud, Tonido is pretty much plug and play._

**Google Drive File Stream \-est. $7** _| bought a "lifetime" Google Drive Unlimited from a shady local school admin, still my best investment to date. I expected it to die after a month or 2. It's been 2 years now and still going strong_

So the setup is like this: this server is going to be my primary fileserver where everything, and I mean ~everything~ convenes. Every file I want to backup, on all of my computer and devices, and my wife's, and my sister's, and my parents', they all can be backed up to this drive and is accessible from every devices we own! You might say it's risky having a central file server like this where I don't even have a RAID setup in place, what if the drives fail?

Well you aren't wrong, this system was not designed to be a safe vault. In fact, most of the drives I use actually have bad sectors so it's only a matter of time. That's where the sync clients come in! The offsite backup is what makes this setup a true cloud setup. Everything I have will be gradually be backed up to my Google Drive with unlimited storage. All the other sync clients are only there to pull my files to this server. If I want to access my files on Dropbox for example, instead of having to install the sync client on every devices I own, I simply need to open up Tonido, go into the Dropbox folder on my fileserver and they're all there. Isn't that beautiful?
