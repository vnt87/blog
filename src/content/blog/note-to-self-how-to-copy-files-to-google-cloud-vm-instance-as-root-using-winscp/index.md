---
title: >-
  Note to self: how to copy files to Google Cloud VM Instance as Root using
  WinSCP
description: >-
  Note to self: how to copy files to Google Cloud VM Instance as Root using
  WinSCP
pubDate: '2019-11-05'
updatedDate: '2024-12-01T03:51:14.456Z'
heroImage: ''
categories:
  - tips-tricks
tags:
  - centos
  - centos-7
  - devops
  - linux
  - remote-root-login
  - root-login
  - ssh
  - winscp
---

If you use VPSSIM or any other administration script in your VPS or GC VM Instance, you're probably finding yourself unable to copy or modify anything when connecting to your server using WinSCP.

The reason is that, by default, your server is configured to only allow key pairing authentication, so in order to login as a regular user, you have to do 2 things. First, enable _password authentication_ and secondly, enable _Login as Root_

To connect as Root, you first need to set a password for your Root user (`sudo passwd`), then allow logging in remotely as root. To do so, fire up your `/etc/ssh/sshd_config`

```
nano /etc/ssh/sshd_config
```

 

Add a line in the Authentication section of the file that says `PermitRootLogin yes`. This line may already exist and be commented out with a "#". In this case, remove the "#".

```
# Authentication:
#LoginGraceTime 2m
PermitRootLogin yes
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10
```

Scroll down a few lines and change this line:

```
# To disable tunneled clear text passwords, change to no here!
#PasswordAuthentication yes
#PermitEmptyPasswords no
PasswordAuthentication yes

```

 

Save the updated `/etc/ssh/sshd_config` file and restart the SSH server (`service sshd restart`)

Should be good to go now
