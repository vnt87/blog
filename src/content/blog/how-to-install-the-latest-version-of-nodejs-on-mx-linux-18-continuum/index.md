---
title: How to install the latest version of NodeJS on MX Linux 18 "Continuum"
description: How to install the latest version of NodeJS on MX Linux 18 "Continuum"
pubDate: '2019-05-25'
updatedDate: '2024-12-01T03:51:14.432Z'
heroImage: ''
categories:
  - linux
  - tips-tricks
tags:
  - github
  - linux
  - mx-linux
  - mx-linux-continuum
  - nodejs
  - nodesource
  - npm
  - opensource
---

I recently needed to install a couple of packages using npm on my MX Linux box. Now MX Linux is fantastic distro, but their repos leave a lot to be desired.

I basically did a standard `sudo apt-get install nodejs`, I soon realized that this version of node is severely outdated, and thus utterly completely useless, as you can't even call _npm_ from the CLI. So I turned online for help, surely someone else must've come up with a working solution.

Turns out, [somebody did](https://tecadmin.net/install-latest-nodejs-npm-on-linux-mint/).

The problem is, it didn't work.

Not on my installation of MX Linux anyway. The script always failed with this message

```
## Your distribution, identified as "Continuum", is not currently supported, please contact NodeSource at https://github.com/nodesource/distributions/issues if you think this is incorrect or would like your distribution to be considered for support
```

This puzzles me a lot because Continuum was clearly listed as one of the supported distributions right inside the script itself. So I turned to Reddit for help, and [they delivered](https://www.reddit.com/r/MXLinux/comments/brq7bq/installed_nodejs_but_still_unable_to_run_npm/). It appears that listing Continuum alone wasn't enough, you actually need to append _MX_ or _mx-linux_ in front of it to be identified correctly.

So long story short, here's the instruction on how to install the latest release of _Node.js_ on _MX Linux 18 Continuum_

<!--more-->

## Step 1 - Configure _Node.js_ PPA

```
sudo apt-get install curl software-properties-common
curl -sL https://vnt87.github.io/nodemx/nodesetupmx_12.x | sudo bash -
```

* * *

## Step 2 - Install N_ode.js_ on MX Linux 18 Continuum

It should be fairly standard from this point on.

```
sudo apt-get install nodejs
```

* * *

## Step 3 - (Optional) Check _Node.js_ and _npm_ version

Make sure node and its package manager is installed correctly.

```
node -v

v12.3.1
```

```
npm -v

6.9.0
```

You should now have a fully functional installation of Node.js and npm on your computer.

Note that this is for the latest version of node, if you need the LTS version, let me know (or create one yourself from the Reddit thread that I linked).
