---
title: Using Putty generated private keys with Guacamole
description: Using Putty generated private keys with Guacamole
pubDate: '2021-05-01'
updatedDate: '2024-12-01T03:51:14.486Z'
heroImage: /blog-placeholder-2.jpg
categories:
  - tips-tricks
tags:
  - apache
  - guacamole
  - private-key
---

If you're trying to use a private key with Guacamole to connect to your server but it doesn't work, chances are you're using one of the keys generated with Puttygen. Guacamole only accepts RSA compliant keys, so you'd want to do that.

<figure>

![](/blog-placeholder-2.jpg)

<figcaption>

Opens your PPK with Puttygen again, and go to Convesions > Export OpenSSH key (the first option).

</figcaption>

</figure>

<figure>

![](/blog-placeholder-3.jpg)

<figcaption>

Then open the content of that new file with a text editor, copy and paste it into Guacamole private key field and it should work.

</figcaption>

</figure>
