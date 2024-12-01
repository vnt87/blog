---
title: 'VPS Trials: Google vs Microsoft vs Amazon'
description: 'VPS Trials: Google vs Microsoft vs Amazon'
pubDate: '2021-04-01'
updatedDate: '2024-12-01T03:51:14.487Z'
heroImage: /blog-placeholder-2.jpg
categories: []
tags: []
---

> This is a venting post, not an actual comparison

For people looking to spin up a VM that can be used outside of their home networks, there's several free offers out there, including major names like Google, Microsoft, Amazon, Alibaba. Personally I'd rank them like this:

1. **Great tier: Google Cloud Platform**, $300 trial credit for 12 months, reasonable pricing. Realistically you'll probably get around 10 months out of your trial if you provision your VM correctly). UI is a bit confusing but overall usable.  
    _Very transparent about pricing, even has a toast message showing your remaining fund and trial period. Doesn't charge you a cent after your trial period ends, it just turns off your VM(s)_.
2. **Meh tier: Microsoft Azure**, $200 trial credit for 12 months, worse pricing. While 200 doesn't seem to be that much worse than Google's offering, in reality it is a LOT less due to the higher pricing of VM provisioning. I burned through that $200 in around 3 months. The UI is more intuitive than GCP though.  
    _Less transparent about your trial period than GCP, but still doesn't charge you a cent after your trial period ends, it just turns off your VM(s)_.  
    Alibaba cloud is somewhat similar, I haven't used it that much to have a solid opinion, but on paper it should be on par with Azure. Will update later.
3. **Trash tier: Amazon Web Service**. Shitty UI, took me longer than all other services when it come to spinning up a VM, and even when it's up and running, configuring networking to connect to it was challenging. I gave up after a few days of trying, and then kind of forgot about it. When I come back after a year, I was surprised to see my account suspended for 'unpaid bills'. And check this out:

<figure>

![](/blog-placeholder-3.jpg)

<figcaption>

Amazon quietly put a massive charge on your account when you aren't even using your EC instance

</figcaption>

</figure>

No surprise there, having dealt with Amazon before as a student, I am positive this is a government sanctioned scam organization. **Avoid Amazon at all cost!**
