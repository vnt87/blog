---
title: 'Choosing a cloud hosting provider: Digital Ocean vs Linode'
description: 'Choosing a cloud hosting provider: Digital Ocean vs Linode'
pubDate: '2021-09-16'
updatedDate: '2024-12-01T03:51:14.405Z'
heroImage: /blog-placeholder-2.jpg
categories:
  - rants
tags:
  - cloud-services
  - digital-ocean
  - linode
  - vultr
---

![DigitalOcean vs. Linode | Low-code backend to build modern apps](/blog-placeholder-3.jpg)

I'm gonna make this short: avoid Digital Ocean like the plague.

As you know, my whole website used to be hosted on a VM Instance on Google Cloud Platform. However, the cost of GCP was a little much for my usage so I was looking to migrate to another provider. The most obvious names that comes to mind that wasn't 'Big Tech' (AWS, Azure, Alibaba, Google) are the holy trinity: Digital Ocean, Linode and Vultr (which I didn't test).

Among those, Digital Ocean is probably the most well known name.

They're everywhere.  
They seem to have the best UI among the cloud provider (and I'm a sucker for good UIs).  
They have a pretty extensive knowledgebase that covers pretty everything in tech.  
They have a huge marketplace, pretty much every self hosted project you see has a 'Deploy on Digital Ocean droplet' option.

DO sounds like a no-brainer. So I set out to create my account. Being a skeptical, naturally I sign up using a 'trial' account that offer a $100 credit for 60-day, there's plenty of those on Google if you search for it, but don't make the same mistake as I did, the 60-day $100 is a goddamn lie. When I added my credit card, I was told there might be a $1 charge for verification that will be refunded in no more than a week. When I added my first droplet, I was immediately charged $6.15, and I'm pretty sure it's never going to be refunded as a few weeks have passed.

This shady practice alone should be enough of a reason for most of you to avoid DO. And if that wasn't enough, there's also the performance issue.

I created a nano droplet (the $5/m variant). You may ask why I decided to go for the bottom of the barrel choice even though I have $100 in trial credit. In my opinion, a service is only as good as its bottom line, and testing it should give a pretty good overview of the quality of the service being offered. And boy was that the correct decision.

Performance was good on the first day, but it only goes downhill from there. I have a total of 6 Wordpress websites with virtually no traffic (only one of them has like 100 visits per DAY). And yet the droplet was slowed to near unresponsive level when I finished migrating my 4th website. SFTP would constantly timeout. If I try to visit 2 of my sites at the same time, the server would return a 504 error. It was unacceptable.

I was ready to give DO the benefit of doubt and blame the [disruption of AAE-1 international internet cable line](https://tuoitrenews.vn/news/society/20210907/vietnams-internet-speed-crippled-by-cable-break/62983.html) as a factor (even though the droplet I created was provisioned on the Singapore data center, which shouldn't have been affected by that incident.

It was then that I decided to make an account on Linode and give it a shot. The sign up process was exactly the same but they didn't even charge me a cent for verification. I fired up a $5 linode, going through the same migration process, and lo' and behold, everything just worked! All 6 websites up and running without a hitch. The hardest part of the migration was, ironically enough, caused by Digital Ocean. As the websites keep timing out when I try to create Duplicator packages.

Normally to save space on the droplet I'd make Duplicator send the packages to my Google Drive and my OneDrive Business storage, however on the DO droplet, they couldn't even communicate with either Google or Microsoft server at all, forcing me to SFTP in and painfully try to download the package manually, bit by bit (thank god WinSCP can do that without poping up a dialog ever 5 minutes). The failure to communicate with Google and Microsoft's server is a testament that the connection problem was with Digital Ocean and not with my ISP.

Anyway just wanted to share my experience. Obviously I'm not endorsing either Linode or Vultr yet since I'm only on a trial run with them, but one thing is definite: avoid Digital Ocean.

That's all for today, folks.
