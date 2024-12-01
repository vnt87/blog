---
title: Things I learned after a week of "homeservering"
description: Things I learned after a week of "homeservering"
pubDate: '2021-04-10'
updatedDate: '2024-12-01T03:51:14.481Z'
heroImage: ''
categories:
  - randomness
tags: []
---

1. **Reverse Proxy:** Setting up Caddy and write a proper caddyfile for reverse proxying to different endpoints within my local network.
2. **Personal DDNS**: dynamically update my domain(s) A records to point to my home's public IP so I never have to worry about Viettel's shitty service changing my IP every 2 damn days. This is done by setting up a cronjob and utilizes CloudFlare's public API.
3. **AIO Clientless SSH/RDP/VNC solution**: I'm sure most of you already figured it out just by reading that sentence, yes it's [Apache Guacamole](https://guacamole.apache.org/), and yes I know it's been around for a while, but I've only discovered it last week, and it basically changed my life forever. I've been kicking myself for not looking into it sooner. I can't even remember how much time I wasted setting up TeamViewer/Anydesk/Putty on new machines. This thing just makes it feel so effortless, and it runs directly in your browser so no corporate firewall should stand in your way.
