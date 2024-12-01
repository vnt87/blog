---
title: 'I''ve been hacked: The danger of DMZ'
description: 'I''ve been hacked: The danger of DMZ'
pubDate: '2021-04-19'
updatedDate: '2024-12-01T03:51:14.440Z'
heroImage: images/elKMkNO.png
categories:
  - randomness
tags: []
---

For those following my post the last couple of weeks, you'd know I've been obsessed with building up my home server system, so much so that I made the grave mistake of exposing my computer to the world wide web through the use of DMZ (De-Militarized Zone).

Long story shot.

I've been hacked.

And $3,000 was stolen from my wife's MasterCard.

What's done is done, I'm here to tell you about what exactly what went down, how the attacker did it and how you can avoid the same mistake I did.

Let's get started

<!--more-->

My shitty Viettel router has a very shitty administration interface which makes the port forwarding process far more complicated than it needs to be (I mean why the fuck do you need to input a subnet mask when setting a PF rule? And why does the port values are locked to whatever value you put in there?), so I took the lazy path and use the DMZ.

Boy, was that a mistake.

> In computer security, a DMZ or demilitarized zone is a physical or logical subnetwork that contains and exposes an organization's external-facing services to an untrusted, usually larger, network such as the Internet.
> 
> Wikipedia

I was preoccupied about port forwarding the common web ports (80:443) that I forgot that it will _also_ expose everything else like SSH (22) and VNC (5900) on my computer, which I happen to have enabled for using with Guacamole.

And that's exactly what happened, some fucker with a port scanner found it and remote accessed my computer.

I still don't know how they figured out the login credentials, but Chrome's been warning me about it being part of a data leak for a long while so maybe that's why. Or maybe it was a brute force, I don't know, I used a very simple dictionary password. Again, it was meant for internal usage, I never anticipated an attack from the Internet, I thought it was a myth, and people who are wary about exposed ports are just paranoid. Turns out I'm the fool.

Anyway, after gaining access to my computer through an opened VNC port, then they managed to download and install TeamViewer on it (presumably because VNC performance is dogshit). They also opened the Clover bootloader for some reason, maybe it was a misclick, I don't know. Basically, here's what they did:

- They dug around in Chrome, in my email, searching for information regarding my bank.
- They tried to use my credit card to initiate a small droplet on Digital Ocean, which failed for unknown reason. This is what alerted me and I immediately locked my card. Unfortunately I didn't know they had my wife's credit card information as well, otherwise no damage would've been done.
- They searched for a few ways to use the card, namely some Google Play gift card (for the Korean market, not sure why, maybe the fucker's from there?), eToro, Poloniex, HitBTC, Remitano etc.
- They log into my Paypal and added my wife's card to MY Paypal, and used it to place a $844 order on Digital Ocean. A clever maneuver from the fucker I must admit. He did it so the purchase would appear completely legit to DO. After all it was made from my Paypal account, on my home IP address, with my wife credit card. It's foolproof right? Lucky for me though, Paypal was good on customer protection and refunded this transaction promptly. I used to give them shit back when I was still an eBay seller, but now that I'm on the other side, it feels good. Unfortunately though, my wife didn't notice this transaction until the next day, if she did then the fucker couldn't have gotten away with the next $2000 thief.
- The fucker placed 2 different purchases on Lancome USA website, $900 each, I presumed each order is for one $500 gift card and one $400 gift card. When I discovered the situation, there's still 1 incomplete order in the shopping cart, I assume the card ran out of money. As of this writing, we're still not sure we'll be able to recover this $1,800. Seeing that the gift card purchased was only valid for 24 hours, I assume the fucker probably done with them by the time my bank got to Lancome. (I actually made a long distance call to Lancome to notify them of this fraudulent purchase, but the rep didn't seem interested in forwarding this info to the appropriate apartment, he/she (couldn't tell over the phone, so I didn't assume their gender) only told me to notify my bank and if I did, then that's all I needed to do. Well let's hope they were right.

<figure>

![](images/elKMkNO.png)

<figcaption>

I'd presume these names and emails are fake

</figcaption>

</figure>

Moral of the story:

- Do NOT use DMZ to expose your services to the Internet. I know configuring your router might be intimidating at times but using DMZ is just asking to be hacked.
- Use containers for your internet-facing services.
- Do not enable VNC/SSH on your internet-facing server, or use a firewall to limit it to local access only, and even then it's not secure because some fucker could still access it if they could access other machines in your local network.
- Set a timeout for your password manager (LastPass/Keepass/1Password/Bitwarden whatever). NEVER, EVER let it sit unattended in a browser like I did. That was the single dumbest thing I ever did in this whole saga.
